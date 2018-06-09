using HotelService;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Models;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Hotel
{
    internal class SPTours
    {
        string AvailMethodURL = ConfigurationSettings.AppSettings["API_SPECIALTOURS"].ToString() + "STOLXMLAllocation.asmx/AllocationSearch";
        string BookMethodURL = ConfigurationSettings.AppSettings["API_SPECIALTOURS_PNR"].ToString() + "STOLXMLPNR.asmx/PNRAddNew";
        string ViewPNRMethodURL = ConfigurationSettings.AppSettings["API_SPECIALTOURS_PNR"].ToString() + "STOLXMLPNR.asmx/PNRView";
        string CancelPNRMethodURL = ConfigurationSettings.AppSettings["API_SPECIALTOURS_PNR"].ToString() + "STOLXMLPNR.asmx/PNRCancel";
        string PNRSRVVoucherMethodURL = ConfigurationSettings.AppSettings["API_SPECIALTOURS_PNR"].ToString() + "STOLXMLPNR.asmx/PNRSRVVoucher";
        string PageName = "WXYZ_Hotel.Hotel.SPTours.cs";
        internal string TraceId { get; set; }
        internal string SuppUserName { get; set; }
        internal string SuppPassword { get; set; }
        internal string SupplierId { get; set; }
        internal string SupplierName { get; set; }
        internal string DestinationCode { get; set; }

        #region Hotel Availability
        public string HotelSearch(HotelSearchRQ Htlrequest, Property objProp)
        {
            string Response = "";
            try
            {
                TraceId = Guid.NewGuid().ToString();
                //string DestinationCode = HotelHelper.GetCityCode(Htlrequest.Destination);//"9532";//"370";//
                string CountryID = string.Empty;

                string Result = string.Empty;
                string ErrorMsg = string.Empty;
                var StaticCont = WXYZ_Hotel.Common.SQLAccess.Fetch_Hotel_Static_Content(Htlrequest.AgentDetails, "", ref Result, ref ErrorMsg);

                DataSet dsHotelStaticDetails = new DataSet();
                if (StaticCont == true)
                {
                    dsHotelStaticDetails = JsonConvert.DeserializeObject<DataSet>(Result);
                }
                if (dsHotelStaticDetails == null || dsHotelStaticDetails.Tables.Count == 0 || dsHotelStaticDetails.Tables[0].Rows.Count == 0)
                {
                    return Response = "Hotel details not available.Please refine your search.-#03";
                }

                var QueryCountryID = from p in dsHotelStaticDetails.Tables["Table4"].AsEnumerable()
                                     where p["ID"].ToString().Trim() == DestinationCode.Trim()
                                     select new
                                     {
                                         COUNTRYID = p["COUNTRYID"].ToString().Trim()
                                     };
                if (QueryCountryID.Count() > 0)
                {
                    foreach (var Qry in QueryCountryID)
                    {
                        CountryID = Qry.COUNTRYID.ToString();
                    }
                }

                var strXmlReq = new StringBuilder();
                strXmlReq.Append("<HtlAllocation>");
                strXmlReq.Append("<Version>1.40</Version>");
                strXmlReq.Append("<Agent>");
                strXmlReq.Append("<UName>" + SuppUserName.ToString() + "</UName>");
                strXmlReq.Append("<UPsw>" + SuppPassword.ToString() + "</UPsw>");
                strXmlReq.Append("</Agent>");
                strXmlReq.Append("<ClientCountryID>" + Htlrequest.ClientCountryId + "</ClientCountryID>"); //14-DANISH (DENMARK)                                              //
                strXmlReq.Append("<CoID>" + CountryID + "</CoID>");
                strXmlReq.Append("<CiID>" + DestinationCode + "</CiID>");
                strXmlReq.Append("<HoID></HoID>");

                int RoomCount = 0;
                int TotalCount = 0;
                int AdultCount = 0;
                int ChildCount = 0;
                string ChildAge = string.Empty;
                foreach (var room in Htlrequest.Rooms)
                {
                    if (TotalCount < (room.AD + room.CH))
                    {
                        TotalCount = room.AD + room.CH;
                        AdultCount = room.AD;
                        ChildCount = room.CH;
                    }
                    if (room.CHAge != null)
                        ChildAge += string.Join("|", room.CHAge.ToArray()) + "|";
                    RoomCount++;
                }
                if (TotalCount == 1)
                {
                    strXmlReq.Append("<RT>SGL</RT>");
                }
                else if (TotalCount == 2)
                {
                    strXmlReq.Append("<RT>DBL</RT>");
                }
                else if (TotalCount == 3)
                {
                    if (AdultCount == 2 && ChildCount == 1)
                    {
                        strXmlReq.Append("<RT Ages='" + ChildAge.TrimEnd('|') + "'>TWH</RT>");
                    }
                    else if (AdultCount == 1 && ChildCount == 2)
                    {
                        strXmlReq.Append("<RT Ages='" + ChildAge.TrimEnd('|') + "'>DBH</RT>");
                    }
                    else
                    {
                        strXmlReq.Append("<RT>TRP</RT>");
                    }
                }
                else
                {
                    strXmlReq.Append("<RT>QUD</RT>");
                }

                strXmlReq.Append("<Rooms>" + RoomCount + "</Rooms>");
                strXmlReq.Append("<inDate>");
                strXmlReq.Append("<Day>" + Htlrequest.CheckIn.Split('-')[0] + "</Day>");
                strXmlReq.Append("<Month>" + Htlrequest.CheckIn.Split('-')[1] + "</Month>");
                strXmlReq.Append("<Year>" + Htlrequest.CheckIn.Split('-')[2] + "</Year>");
                strXmlReq.Append("</inDate>");
                strXmlReq.Append("<outDate>");
                strXmlReq.Append(" <Day>" + Htlrequest.CheckOut.Split('-')[0] + "</Day>");
                strXmlReq.Append("<Month>" + Htlrequest.CheckOut.Split('-')[1] + "</Month>");
                strXmlReq.Append("<Year>" + Htlrequest.CheckOut.Split('-')[2] + "</Year>");
                strXmlReq.Append("</outDate>");
                strXmlReq.Append("<OnlyAvailable>1</OnlyAvailable>");
                strXmlReq.Append("<IncludeCLXPolicy>1</IncludeCLXPolicy>");
                strXmlReq.Append("</HtlAllocation>");

                string request = "pXML=" + strXmlReq.ToString();
                #region Request Log
                string LogData = "<EVENT><SEARCHAVAILREQUESTDATA>" + strXmlReq.ToString() + "</SEARCHAVAILREQUESTDATA>"
                                 + "<URL>" + AvailMethodURL + "</URL>"
                                 + "<USERNAME>" + SuppUserName + "</USERNAME>"
                                 + "<PASSWORD>" + SuppPassword + "</PASSWORD>"
                                 + "<VENDOR>SPECIALTOURS</VENDOR>"
                                 + "<CURRENCY>" + objProp.Currency + "</CURRENCY>"
                                 + "</EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", Htlrequest.AgentDetails, "F", PageName, "HotelSearch", LogData.ToString(), SupplierId.ToString(), TraceId.ToString());
                #endregion
                Response = GetResponse(request, AvailMethodURL, Htlrequest.AgentDetails);
                #region Response Log
                var helper = new HotelHelper();
                LogData = "<EVENT><SEARCHAVAILRESPONSEDATA>" + helper.RemoveXmlns(Response.ToString()).ToString() + "</SEARCHAVAILRESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", Htlrequest.AgentDetails, "F", PageName, "HotelSearch", LogData.ToString(), SupplierId.ToString(), TraceId.ToString());
                #endregion

                var doc = XDocument.Parse(helper.RemoveXmlns(Response.ToString()));

                if (doc.Descendants("Err").Any() && doc.Descendants("Descr").Any())
                {
                    return doc.Descendants("Descr").FirstOrDefault().Value + ".-#03";
                }
                else
                {
                    Response = HotelSearchResponse(Htlrequest, Response, SupplierId, dsHotelStaticDetails, RoomCount);
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", Htlrequest.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), SupplierId.ToString(), TraceId.ToString());
                return ex.Message.ToString() + "#05";
            }
            return Response;
        }

        #region Convert
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="xml"></param>
        /// <returns></returns>
        public static T ConvertXML<T>(string xml)
        {
            T returnedXmlClass = default(T);
            try
            {
                using (TextReader reader = new StringReader(xml.Trim()))
                {
                    try
                    {
                        XmlSerializerNamespaces ns = new XmlSerializerNamespaces(); ns.Add("", "");
                        returnedXmlClass = (T)new XmlSerializer(typeof(T), "").Deserialize(reader);
                    }
                    catch (Exception ex)
                    {
                        // String passed is not XML, simply return defaultXmlClass
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return returnedXmlClass;
        }
        #endregion

        public string HotelSearchResponse(HotelSearchRQ Htlrequest, string AvailData, string SupplierId, DataSet dsHotelStaticDetails, int RCount)
        {
            string AvailResponse = string.Empty;
            try
            {
                //AvailData = System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/AVAILABILITY_RES.xml");
                //XmlDocument HotelXmlDocument = new XmlDocument();
                //HotelXmlDocument.Load(AvailData);
                //var helper = new HotelHelper();
                //var doc = XDocument.Parse(HotelXmlDocument.InnerXml);

                var helper = new HotelHelper();
                var doc = XDocument.Parse(helper.RemoveXmlns(AvailData.ToString()));

                List<XElement> LstHotel = new List<XElement>();
                if (doc.Descendants("Alloc").Any())
                {
                    LstHotel = doc.Descendants("Alloc").ToList();
                }

                if (LstHotel.Count == 0)
                {
                    return AvailResponse = "Hotels not available for your searching Creteria.Please refine your search.-#03";
                }

                #region Fetch Hotel Supplier Markup & Commission                                                                                         //
                var CHin = Htlrequest.CheckIn.Split('-');
                Hashtable hsh_param = new Hashtable();
                hsh_param.Add("BRANCHID", Htlrequest.AgentDetails.BranchID);
                hsh_param.Add("AGENTID", Htlrequest.AgentDetails.AgentID);
                hsh_param.Add("SUPPID", SupplierId.ToString());
                hsh_param.Add("BOOKEDDATE", DateTime.Now.ToString("yyyyMMdd"));
                hsh_param.Add("DEPARTUREDATE", (CHin[2] + CHin[1] + CHin[0]).ToString());
                DataSet dsMarkUpCommission = new DataSet();
                dsMarkUpCommission = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_API_HOTEL_MARKUP_COMMISSION, hsh_param, DataBase.APP.ToString());

                #endregion

                List<RoomRS> _LstRooms = new List<RoomRS>();
                int RoomID = 0;
                int HtlID = 0;
                int ImageID = 0;
                int RoomIndex = 1;
                List<HotelDetails> _Hotels = new List<HotelDetails>();
                string HotelID = string.Empty;
                string CheckINDate = doc.Descendants("inDate").FirstOrDefault().Element("Day").Value + "-" + doc.Descendants("inDate").FirstOrDefault().Element("Month").Value + "-" + doc.Descendants("inDate").FirstOrDefault().Element("Year").Value;
                string CheckOUTDate = doc.Descendants("outDate").FirstOrDefault().Element("Day").Value + "-" + doc.Descendants("outDate").FirstOrDefault().Element("Month").Value + "-" + doc.Descendants("outDate").FirstOrDefault().Element("Year").Value;
                string[] StaticImageUrl = ConfigurationManager.AppSettings["STATIC_IMAGEURL"].ToString().Split(',');

                #region RETURN ON EQUITY ( ROE )
                DataSet dsCurrencyAmt = new DataSet();
                string Currency = doc.Descendants("Alloc").Elements("PrCur").FirstOrDefault().Value;
                string FareCurreny = "1";
                if (Htlrequest.AgentDetails.CurrencyCode.ToString().Trim().ToUpper() != Currency.ToString().Trim().ToUpper())
                {
                    string CurrenyErrorMsg = string.Empty;
                    dsCurrencyAmt = SQLAccess.Fetch_API_Currency_Details(Htlrequest.AgentDetails, "", Currency, Htlrequest.AgentDetails.CurrencyCode.ToString(), ref CurrenyErrorMsg);
                    if (dsCurrencyAmt == null || dsCurrencyAmt.Tables.Count == 0 || dsCurrencyAmt.Tables[0].Rows.Count == 0)
                    {
                        return "Problem occured while fetching currency details.Please contact customare care.-#03";
                    }
                    FareCurreny = dsCurrencyAmt.Tables[0].Rows[0]["ROE_TO_AMOUNT"].ToString().Trim();
                }
                #endregion

                foreach (var ROOM in doc.Descendants("Alloc"))
                {
                    HotelID = ROOM.Element("HoID").Value;
                    DataTable dtHtlDt = new DataTable();
                    var Hoteldt = from p in dsHotelStaticDetails.Tables[0].AsEnumerable()
                                  where p["HOID"].ToString().ToUpper().Trim() == ROOM.Element("HoID").Value.ToString().ToUpper().Trim()
                                  select p;
                    if (Hoteldt.Count() > 0)
                    {
                        dtHtlDt = Hoteldt.CopyToDataTable();

                        RoomRS Rm = new RoomRS();
                        Rm.HotelID = ROOM.Element("HoID").Value + "||" + ROOM.Element("RoomDescr").Value.ToString().Replace("<![CDATA[", "").Replace("]]>", "");
                        Rm.RoomName = ROOM.Element("RoomDescr").Value.ToString().Replace("<![CDATA[", "").Replace("]]>", "");
                        Rm.RoomCount = doc.Descendants("Criteria").FirstOrDefault().Element("Rooms").Value;
                        Rm.RoomId = Rm.RoomCount + "R" + RoomIndex;
                        Rm.Roomtypecode = ROOM.Element("HoID").Value + ";" + ROOM.Element("BKF").Value + ";" + ROOM.Element("PrCD").Value;
                        Rm.RoomPaxCapacity = ROOM.Element("Avail").Value;
                        Rm.AllocationDetails = ROOM.Element("PrCD").Value + ";" + doc.Descendants("Criteria").FirstOrDefault().Element("ClientCountryID").Value + ";" + doc.Descendants("Criteria").FirstOrDefault().Element("CoID").Value + ";" + doc.Descendants("Criteria").FirstOrDefault().Element("CiID").Value + ";" + ROOM.Element("HoID").Value + ";" + doc.Descendants("Criteria").FirstOrDefault().Element("Rooms").Value + ";" + doc.Descendants("Criteria").FirstOrDefault().Element("RT").Value + ";" + ROOM.Element("RST").Value;
                        Rm.SpecialRequest = "";
                        Rm.SpecialOffer = "";
                        Rm.TariffNotes = "";
                        Rm.RateBasic = "";
                        Rm.BaseAmount = (Convert.ToDecimal(ROOM.Element("Pr").Value) * Convert.ToDecimal(FareCurreny)).ToString();
                        Rm.TotalAmount = (Convert.ToDecimal(ROOM.Element("TotalEUR").Value) * Convert.ToDecimal(FareCurreny)).ToString();

                        string MarkUpAmt = "0";
                        string CommissionAmt = "0";
                        bool ComMarkUpdt = Calculation.CalcCommAndMarkup(Htlrequest.AgentDetails, Rm.TotalAmount, ref MarkUpAmt, ref CommissionAmt, dsMarkUpCommission);
                        Rm.MarkUp = MarkUpAmt;
                        Rm.Commission = CommissionAmt;
                        //Rm.TotalGrossAmount = (Convert.ToDecimal(RCount) * (Convert.ToDecimal(Rm.BaseAmount) + Convert.ToDecimal(MarkUpAmt) - Convert.ToDecimal(CommissionAmt))).ToString();
                        Rm.TotalGrossAmount = (Convert.ToDecimal(RCount) * (Convert.ToDecimal(Rm.BaseAmount) + Convert.ToDecimal(Rm.MarkUp) - Convert.ToDecimal(Rm.Commission))).ToString();
                        Rm.Supplier = SupplierName;
                        Rm.Currency = Htlrequest.AgentDetails.CurrencyCode.ToString().Trim().ToUpper();//ROOM.Element("PrCur").Value;
                        Rm.SuppBaseAmount = Rm.BaseAmount;
                        Rm.TaxAmount = "";
                        Rm.Supplier_Id = SupplierId;

                        //BreakFast Details
                        #region Break Fast Details
                        var BrkFastdt = from p in dsHotelStaticDetails.Tables["Table1"].AsEnumerable()
                                        where p["BKFCODE"].ToString().ToUpper().Trim() == ROOM.Element("BKF").Value.ToString().ToUpper().Trim()
                                        select new
                                        {
                                            BKFCODE = p["BKFCODE"].ToString(),
                                            DESCR = p["DESCR"].ToString()
                                        };
                        Rm.Inclusion = BrkFastdt.Count() > 0 ? BrkFastdt.FirstOrDefault().DESCR.ToString() : ROOM.Element("BKF").Value.ToString();
                        #endregion

                        Rm.Status = ROOM.Element("Remarks").Value.ToString().Replace("<![CDATA[", "").Replace("]]>", "");
                        Rm.CancellationPolicy = "";
                        Rm.CancellationDeadLine = "";

                        #region Cancellation Policy Details

                        CancellationPolicy ClPlc = new CancellationPolicy();
                        if (ROOM.Descendants("CLXPolicy").Any())
                        {
                            ClPlc.FromDate = ROOM.Descendants("CLXPolicy").FirstOrDefault().Element("CLXDetails").Attribute("from").Value;
                            Rm.CancellationDeadLine = ClPlc.FromDate;
                            ClPlc.ToDate = "";
                            ClPlc.ChargeAmount = (Convert.ToDecimal(ROOM.Descendants("CLXPolicy").FirstOrDefault().Element("CLXDetails").Attribute("charge").Value) * Convert.ToDecimal(FareCurreny)).ToString();
                        }
                        Rm.HBCancellationPolicy = ClPlc;

                        #endregion

                        int AdultCount = 0;
                        int ChildCount = 0;
                        foreach (var room in Htlrequest.Rooms)
                        {
                            AdultCount += Convert.ToInt32(room.AD);
                            ChildCount += Convert.ToInt32(room.CH);
                        }

                        Rm.AdultCount = AdultCount.ToString();
                        Rm.ChildCount = ChildCount.ToString();
                        _LstRooms.Add(Rm);
                        RoomIndex++;

                        //if (HotelID != ROOM.Element("HoID").Value.ToString().Trim())
                        if ((doc.Descendants("Alloc").ToList().Count > (RoomID + 1) && HotelID != doc.Descendants("Alloc").ToList()[RoomID + 1].Element("HoID").Value.ToString().Trim()) || doc.Descendants("Alloc").ToList().Count == (RoomID + 1))
                        {
                            HotelDetails Htldt = new HotelDetails();
                            Htldt.TraceID = TraceId;
                            Htldt.Supplier = "Special Tours";
                            Htldt.GHotelId = "SPT_" + ROOM.Element("HoID").Value;
                            Htldt.HotelKey = ROOM.Element("HoID").Value;
                            Htldt.HotelID = "SPT_" + ROOM.Element("HoID").Value;
                            Htldt.HotelChain = "RST~" + ROOM.Element("HoID").Value + "|BKF~" + ROOM.Element("BKF").Value + "|PrCD~" + ROOM.Element("PrCD").Value;
                            Htldt.HotelName = dtHtlDt.Rows[0]["NAME"].ToString();
                            Htldt.NoOfRooms = dtHtlDt.Rows[0]["HROOMS"].ToString();
                            Htldt.FullAddress = dtHtlDt.Rows[0]["ADDRESS"].ToString();// +"," + dtHtlDt.Rows[0]["PHONE"].ToString() + "," + dtHtlDt.Rows[0]["FAX"].ToString();
                            Htldt.Lng = dtHtlDt.Rows[0]["LONGITUDE"].ToString();
                            Htldt.Lat = dtHtlDt.Rows[0]["LATITUDE"].ToString();
                            Htldt.ImgUrl = StaticImageUrl[ImageID].ToString();//"https://www.dhresource.com/0x0s/f2-albu-g5-M01-2F-C4-rBVaJFk4RWiAfL3cAAKzKOwlJPI495.jpg/wholesale-custom-hd-3d-photo-non-woven-wallpaper.jpg";
                            Htldt.HotelPhone = dtHtlDt.Rows[0]["PHONE"].ToString();
                            Htldt.Rating = dtHtlDt.Rows[0]["STARS"].ToString();
                            Htldt.MapLink = "";
                            Htldt.Description = dtHtlDt.Rows[0]["GENINFO"].ToString() + "." + dtHtlDt.Rows[0]["LOCINFO"].ToString();

                            #region Amenities Details
                            List<Amenitie> LstAMT = new List<Amenitie>();
                            var AMtVal = dtHtlDt.Rows[0]["FACID"].ToString().TrimEnd(',').Split(',');
                            for (var i = 0; i < AMtVal.Count(); i++)
                            {
                                Amenitie AMT = new Amenitie();
                                AMT.ID = AMtVal[i].ToString();
                                var Amtdt = from p in dsHotelStaticDetails.Tables["Table5"].AsEnumerable()
                                            where p["FACID"].ToString().ToUpper().Trim() == AMtVal[i].ToString().ToUpper().Trim()
                                            select new
                                            {
                                                FACID = p["FACID"].ToString(),
                                                DESCR = p["DESCR"].ToString()
                                            };
                                AMT.Name = Amtdt.Count() > 0 ? Amtdt.FirstOrDefault().DESCR.ToString() : "";
                                LstAMT.Add(AMT);
                            }
                            Htldt.Amenities = LstAMT;
                            #endregion

                            Htldt.Room = _LstRooms;
                            Htldt.Location = "";
                            Htldt.Currency = Htlrequest.AgentDetails.CurrencyCode.ToString().Trim().ToUpper();//ROOM.Element("PrCur").Value;
                            Htldt.Checkin = CheckINDate;
                            Htldt.CheckOut = CheckOUTDate;
                            Htldt.Status = "";
                            Htldt.Supplier_Id = SupplierId;
                            Htldt.Category = dtHtlDt.Rows[0]["HTLSTYLE"].ToString() + "," + ROOM.Element("RoomDescr").Value.ToString().Replace("<![CDATA[", "").Replace("]]>", "");
                            Htldt.StartAmount = (Convert.ToDecimal(ROOM.Element("TotalEUR").Value) * Convert.ToDecimal(FareCurreny)).ToString();
                            _Hotels.Add(Htldt);
                            HtlID++;
                            RoomIndex = 1;
                            if (ImageID >= 9)
                            {
                                ImageID = 0;
                            }
                            else
                                ImageID++;
                            _LstRooms = new List<RoomRS>();
                        }
                        RoomID++;
                    }
                }
                AvailResponse = JsonConvert.SerializeObject(_Hotels);
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", Htlrequest.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), SupplierId, TraceId);
                return ex.Message.ToString() + "#05";
            }
            return AvailResponse;
        }

        #endregion

        #region Hotel Reservation
        public ReserveHotelRS HotelCheckValidation(ReserveHotelRQ ReserveRQ, Property objProp)
        {
            ReserveHotelRS ReserveRes = new ReserveHotelRS();
            string ErrorMsg = string.Empty;
            try
            {
                #region fecth hotel Supplier Markup and Commission
                var CHin = ReserveRQ.CheckIn.Split('-');
                Hashtable Hsh_param = new Hashtable();
                Hsh_param.Add("BRANCHID", ReserveRQ.AgentDetails.BranchID);
                Hsh_param.Add("AGENTID", ReserveRQ.AgentDetails.AgentID);
                Hsh_param.Add("SUPPID", ReserveRQ.SupplierId.ToString());
                Hsh_param.Add("BOOKEDDATE", DateTime.Now.ToString("yyyyMMdd"));
                Hsh_param.Add("DEPARTUREDATE", (CHin[2] + CHin[1] + CHin[0]).ToString());
                DataSet DsMarkUpCommission = new DataSet();
                DsMarkUpCommission = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_API_HOTEL_MARKUP_COMMISSION, Hsh_param, DataBase.APP.ToString());
                #endregion

                TraceId = ReserveRQ.TraceID.ToString();
                var strXmlReq = new StringBuilder();
                strXmlReq.Append("<PNRAddNew>");
                strXmlReq.Append("<Version>1.40</Version>");
                strXmlReq.Append("<ClientRef>WZ" + DateTime.Now.ToString("yyyyMMddHHmmss") + "</ClientRef>");//CHANGE
                strXmlReq.Append("<AsynchURL>" + ConfigurationSettings.AppSettings["API_SPECIALTOURS"].ToString() + "</AsynchURL>");
                strXmlReq.Append("<Validate>1</Validate>");
                strXmlReq.Append("<Agent>");
                strXmlReq.Append("<UName>" + SuppUserName.ToString() + "</UName>");
                strXmlReq.Append("<UPsw>" + SuppPassword.ToString() + "</UPsw>");
                strXmlReq.Append("</Agent>");
                strXmlReq.Append("<PNR>");
                strXmlReq.Append("<ClientBookingRef>" + ReserveRQ.TraceID + "</ClientBookingRef>");
                //strXmlReq.Append("<MemoKey>A100</MemoKey>");

                int PaxRef = 0;
                int RoomCount = 0;
                foreach (var room in ReserveRQ.PaxCounts)
                {
                    foreach (var guest in room.Guest)
                    {
                        string PaxTitle = guest.type == "CH" ? "CHD" : (guest.title.ToUpper().TrimEnd('.') == "MISS" ? "MS" : guest.title.ToUpper().TrimEnd('.'));
                        strXmlReq.Append("<PassengerList PsgID='" + (PaxRef + 1) + "' PsgTitle='" + PaxTitle + "' PsgFName='" + guest.firstname.ToUpper() + "' PsgName='" + guest.lastname.ToUpper() + "' IsLeader='" + (PaxRef == 0 ? "1" : "0") + "' PsgAge='" + guest.age + "' />");
                        PaxRef++;
                    }
                    RoomCount++;
                }

                var Selectdetails = ReserveRQ.allocationDetails.Split(';');
                strXmlReq.Append("<PNRPax>" + PaxRef + "</PNRPax>");
                strXmlReq.Append("<SRVList>");
                strXmlReq.Append("<SRVType>HTL</SRVType>");
                strXmlReq.Append("<PrCD>" + Selectdetails[0].ToString() + "</PrCD>");//CHANGE
                strXmlReq.Append("<PrCD2></PrCD2>");
                strXmlReq.Append("<ClientCountryID>" + Selectdetails[1].ToString() + "</ClientCountryID>");
                strXmlReq.Append("<CoID>" + Selectdetails[2].ToString() + "</CoID>");//CHANGE
                strXmlReq.Append("<CiID>" + Selectdetails[3].ToString() + "</CiID>");//CHANGE
                strXmlReq.Append("<HoID>" + Selectdetails[4].ToString() + "</HoID>");//CHANGE
                strXmlReq.Append("<Rooms>" + Selectdetails[5] + "</Rooms>");
                strXmlReq.Append("<RT>" + Selectdetails[6].ToString() + "</RT>");
                strXmlReq.Append("<RST>" + Selectdetails[7].ToString() + "</RST>");
                strXmlReq.Append("<inDate>");
                strXmlReq.Append("<Day>" + ReserveRQ.CheckIn.Split('-')[0] + "</Day>");
                strXmlReq.Append("<Month>" + ReserveRQ.CheckIn.Split('-')[1] + "</Month>");
                strXmlReq.Append("<Year>" + ReserveRQ.CheckIn.Split('-')[2] + "</Year>");
                strXmlReq.Append("</inDate>");
                strXmlReq.Append("<outDate>");
                strXmlReq.Append(" <Day>" + ReserveRQ.CheckOut.Split('-')[0] + "</Day>");
                strXmlReq.Append("<Month>" + ReserveRQ.CheckOut.Split('-')[1] + "</Month>");
                strXmlReq.Append("<Year>" + ReserveRQ.CheckOut.Split('-')[2] + "</Year>");
                strXmlReq.Append("</outDate>");
                //strXmlReq.Append("<ServiceNotes>");
                //strXmlReq.Append("<Note ID='x' />");
                //strXmlReq.Append("</ServiceNotes>");

                int RoomIndex = 1;
                int PaxIndex = 1;
                foreach (var room in ReserveRQ.PaxCounts)
                {
                    int PaxPerRoom = (Convert.ToInt32(room.AD) + Convert.ToInt32(room.CH));
                    for (var iPax = 0; iPax < PaxPerRoom; iPax++)
                    {
                        strXmlReq.Append("<SRVPsgList PsgID='" + PaxIndex + "'  RoomID='" + RoomIndex + "'  />");
                        PaxIndex++;
                    }
                    RoomIndex++;
                }

                strXmlReq.Append("</SRVList>");
                strXmlReq.Append("</PNR>");
                strXmlReq.Append("</PNRAddNew>");

                string Request = "pXML=" + strXmlReq.ToString();
                //Before Booking Validation Request... Validate Parameter sholud be 1 in Booking request 
                #region Request Log
                string LogData = "<EVENT><FARECHECKREQUESTDATA>" + strXmlReq.ToString() + "</FARECHECKREQUESTDATA>"
                    + "<URL>" + BookMethodURL + "</URL>"
                    + "<USERNAME>" + SuppUserName + "</USERNAME>"
                    + "<PASSWORD>" + SuppPassword + "</PASSWORD>"
                    + "<VENDOR>SPECIALTOURS</VENDOR>"
                    + "<CURRENCY>" + objProp.Currency + "</CURRENCY>"
                    + "</EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ReserveRQ.AgentDetails, "F", PageName, "HotelCheckValidation", LogData.ToString(), ReserveRQ.SupplierId.ToString(), TraceId);
                #endregion


                string BkResponse = GetResponse(Request.ToString(), BookMethodURL, ReserveRQ.AgentDetails);
                var helper = new HotelHelper();

                #region Response Log
                LogData = "<EVENT><FARECHECKRESPONSEDATA>" + helper.RemoveXmlns(BkResponse.ToString()).ToString() + "</FARECHECKRESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ReserveRQ.AgentDetails, "F", PageName, "HotelCheckValidation", LogData.ToString(), ReserveRQ.SupplierId.ToString(), TraceId);
                #endregion

                var ValidateRes = XDocument.Parse(helper.RemoveXmlns(BkResponse.ToString()));

                if (ValidateRes.Descendants("Err").Any() && ValidateRes.Descendants("Descr").Any())
                {
                    ReserveRes.StatusCode = "00";
                    ReserveRes.Error = ValidateRes.Descendants("Descr").FirstOrDefault().Value.ToString() + ".#03";
                    ReserveRes.ClientCountryId = ReserveRQ.ClientCountryId;
                }
                else
                {
                    if (ValidateRes.Descendants("Alloc").FirstOrDefault().Element("Avail").Value.ToString().Trim() == "0")
                    {
                        ReserveRes.StatusCode = "00";
                        ReserveRes.Error = ValidateRes.Descendants("Alloc").FirstOrDefault().Element("VoucherRemarks").Value.ToString() + ".#03";
                        ReserveRes.ClientCountryId = ReserveRQ.ClientCountryId;
                    }
                    else
                    {
                        ReserveRes.TraceID = TraceId;
                        ReserveRes.Vendor = SupplierId;
                        ReserveRes.Supplier = "SPECIALTOURS";
                        if (ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").Any())
                        {
                            string CancellationStatus = "";
                            if (ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("LastNoChargeCLX").Any())
                            {
                                CancellationStatus = "Cancellation with refundable fare applicable until on " + ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("LastNoChargeCLX").FirstOrDefault().Value + "|";
                            }
                            CancellationStatus += "Cancellation applicable";
                            if (ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("CLXDetails").FirstOrDefault().Attributes("clxFrom").Any())
                                CancellationStatus += " from " + ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("CLXDetails").FirstOrDefault().Attribute("clxFrom").Value + " to " + ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("CLXDetails").FirstOrDefault().Attribute("clxTo").Value + " with " + ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("CLXDetails").FirstOrDefault().Attribute("charge").Value;
                            else
                                CancellationStatus += " until " + ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("CLXDetails").FirstOrDefault().Attribute("clxTo").Value + " with " + ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("CLXDetails").FirstOrDefault().Attribute("charge").Value;

                            ReserveRes.CancellationPolicy = ValidateRes.Descendants("Alloc").FirstOrDefault().Descendants("CLXPolicy").FirstOrDefault().Descendants("CLXDetails").FirstOrDefault().Attribute("clxTo").Value;
                            ReserveRes.CancellationStatus = CancellationStatus;
                        }
                        ReserveRes.HotelComment = ValidateRes.Descendants("Alloc").FirstOrDefault().Element("VoucherRemarks").Value.ToString();
                        ReserveRes.ReservationId = ValidateRes.Descendants("Alloc").FirstOrDefault().Element("PrCD").Value.ToString() + "||" + ValidateRes.Descendants("Alloc").FirstOrDefault().Element("PrCD2").Value.ToString();

                        #region RETURN ON EQUITY
                        DataSet dsCurrencyAmt = new DataSet();
                        string Currency = ValidateRes.Descendants("Alloc").FirstOrDefault().Element("PrCur").Value.ToString();
                        string FareCurreny = "1";
                        if (ReserveRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper() != Currency.ToString().Trim().ToUpper())
                        {
                            string CurrenyErrorMsg = string.Empty;
                            dsCurrencyAmt = SQLAccess.Fetch_API_Currency_Details(ReserveRQ.AgentDetails, "", Currency, ReserveRQ.AgentDetails.CurrencyCode.ToString(), ref CurrenyErrorMsg);
                            if (dsCurrencyAmt == null || dsCurrencyAmt.Tables.Count == 0 || dsCurrencyAmt.Tables[0].Rows.Count == 0)
                            {
                                ReserveRes.Status = "FAILED";
                                ReserveRes.StatusCode = "00";
                                ReserveRes.Error = "Problem occured while fetching currency details.Please contact customare care.-#03";
                                ReserveRes.ClientCountryId = ReserveRQ.ClientCountryId;
                                return ReserveRes;
                            }
                            FareCurreny = dsCurrencyAmt.Tables[0].Rows[0]["ROE_TO_AMOUNT"].ToString().Trim();
                        }
                        #endregion

                        string MarkUpAmt = "0";
                        string CommissionAmt = "0";
                        string TotalHotelAmt = (Convert.ToDecimal(ValidateRes.Descendants("Alloc").FirstOrDefault().Element("TotalEUR").Value) * Convert.ToDecimal(FareCurreny)).ToString();
                        bool ComMarkAmt = Calculation.CalcCommAndMarkup(ReserveRQ.AgentDetails, TotalHotelAmt, ref MarkUpAmt, ref CommissionAmt, DsMarkUpCommission);

                        ReserveRes.CommissionAmt = CommissionAmt;
                        ReserveRes.MarkUpAmt = MarkUpAmt;
                        ReserveRes.TotalSupplierAmount = TotalHotelAmt;
                        ReserveRes.TotalPrice = (Convert.ToDecimal(TotalHotelAmt) + Convert.ToDecimal(MarkUpAmt) - Convert.ToDecimal(CommissionAmt)).ToString();

                        if (Convert.ToDecimal(TotalHotelAmt) != Convert.ToDecimal(ReserveRQ.TotalBaseAmount))
                        {
                            ReserveRes.Status = "SUCCESS";
                            ReserveRes.StatusCode = "02";
                            ReserveRes.Error = "Fare has been changed from " + ReserveRQ.TotalGrossAmount + " to " + ReserveRes.TotalPrice;
                        }
                        else
                        {
                            ReserveRes.Status = "SUCCESS";
                            ReserveRes.StatusCode = "01";
                            ReserveRes.Error = "";

                        }
                    }
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", ReserveRQ.AgentDetails, "X", PageName, "HotelCheckValidation", ex.ToString(), ReserveRQ.SupplierId, ReserveRQ.TraceID);
                ReserveRes.StatusCode = "00";
                ReserveRes.Error = ex.Message.ToString() + ".#05";
            }
            ReserveRes.ClientCountryId = ReserveRQ.ClientCountryId;
            return ReserveRes;
        }
        #endregion

        #region Booking Confimation
        public string HotelBooking(ConfirmHotelRQ ConfirmRQ, Property objProp)
        {
            string BkResponse = string.Empty;
            string TraceId = Guid.NewGuid().ToString();
            try
            {
                #region Fetch Avail Hotel Details

                string Result = string.Empty;
                string DBErrorMsg = string.Empty;
                DataSet dsHotelAvailDetails = new DataSet();
                dsHotelAvailDetails = SQLAccess.Fetch_Hotel_Avail_Details(ConfirmRQ.Agent, ConfirmRQ.TraceId, "F", "HotelCheckValidation", ref Result, ref DBErrorMsg);
                if (dsHotelAvailDetails == null || dsHotelAvailDetails.Tables.Count == 0 || dsHotelAvailDetails.Tables[0].Rows.Count == 0)
                {
                    if (!string.IsNullOrEmpty(DBErrorMsg))
                        BkResponse = DBErrorMsg + "-#03";
                    else
                        BkResponse = "Trace ID is Invalid.Please contact customer care.-#03";

                    return BkResponse;
                }

                string HtlValidateReqDt = dsHotelAvailDetails.Tables[0].Rows[1]["API_LOG_DESCRIPTION"].ToString();
                string HtlValidateResDt = dsHotelAvailDetails.Tables[0].Rows[0]["API_LOG_DESCRIPTION"].ToString();
                string SupplierID = dsHotelAvailDetails.Tables[0].Rows[0]["API_LOG_SUPPLIER_ID"].ToString();

                #endregion

                var helper = new HotelHelper();
                var ValidateBookingReq = XDocument.Parse(helper.RemoveXmlns(HtlValidateReqDt));
                var ValidateRes = XDocument.Parse(helper.RemoveXmlns(HtlValidateResDt));

                if (ValidateRes.Descendants("Err").Any() && ValidateRes.Descendants("Descr").Any())
                {
                    return ValidateRes.Descendants("Descr").FirstOrDefault().Value;
                }
                else
                {
                    if (ValidateRes.Descendants("Alloc").FirstOrDefault().Element("Avail").Value.ToString().Trim() == "0")
                    {
                        return ValidateRes.Descendants("Alloc").FirstOrDefault().Element("VoucherRemarks").Value.ToString() + ".#03";
                    }

                    var PrCD = ValidateRes.Descendants("PrCD").Any() ? ValidateRes.Descendants("PrCD").FirstOrDefault().Value : "";
                    var PrCD2 = ValidateRes.Descendants("PrCD2").Any() ? ValidateRes.Descendants("PrCD2").FirstOrDefault().Value : "";
                    var BookingReq = XDocument.Parse(ValidateBookingReq.ToString());
                    BookingReq.Descendants("PrCD").FirstOrDefault().Value = PrCD;
                    BookingReq.Descendants("PrCD2").FirstOrDefault().Value = PrCD2;
                    BookingReq.Descendants("Validate").FirstOrDefault().Value = "0";

                    string BkRequest = "pXML=" + BookingReq.Descendants("PNRAddNew").FirstOrDefault().ToString();
                    //Booking Request... Validate Parameter sholud be 0 in Booking request 
                    #region Request Log
                    string LogData = "<EVENT><BOOKING_REQUESTDATA>" + BookingReq + "</BOOKING_REQUESTDATA>"
                            + "<URL>" + BookMethodURL + "</URL>"
                            + "<USERNAME>" + objProp.Username + "</USERNAME>"
                            + "<PASSWORD>" + objProp.Password + "</PASSWORD>"
                            + "<VENDOR> SPECIALTOURS </VENDOR>"
                            + "<CURRENCY>" + objProp.Currency + "</CURRENCY>"
                            + "<BRANCHCODE></BRANCHCODE>"
                            + "</EVENT>";
                    SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "F", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                    #endregion

                    BkResponse = GetResponse(BkRequest, BookMethodURL, ConfirmRQ.Agent);

                    #region Response Log
                    LogData = "<EVENT><BOOKING_RESPONSEDATA>" + helper.RemoveXmlns(BkResponse).ToString() + "</BOOKING_RESPONSEDATA></EVENT>";
                    SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "F", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                    #endregion
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                return ex.Message.ToString() + "#05";
            }
            return BkResponse;
        }

        public bool ConfirmHotelResponse(string BkResponse, ConfirmHotelRQ ConfirmRQ, ref ConfirmHotelRS _ConfirmRS)
        {
            bool BkResult = false;
            string response = string.Empty;
            var helper = new HotelHelper();
            List<BookingRS> _Book = new List<BookingRS>();
            BookingRS _BookingRS = new BookingRS();
            try
            {
                if (BkResponse != null)
                {
                    var BookingRes = XDocument.Parse(helper.RemoveXmlns(BkResponse.ToString()));
                    if (BookingRes.Descendants("Err").Any() && BookingRes.Descendants("Descr").Any())
                    {
                        var error = string.Empty;
                        _BookingRS.BookingStatus = "Error Code: " + BookingRes.Descendants("Descr").FirstOrDefault().Value; ;
                        _Book.Add(_BookingRS);
                        _ConfirmRS.BookingRS = _Book;
                        _ConfirmRS.Status = false;
                        _ConfirmRS.ErrorMsg = _BookingRS.BookingStatus;
                        _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;                                                                                //
                    }
                    else
                    {
                        if (BookingRes.Descendants("PNR").Any() && BookingRes.Descendants("PNRStatus").Any())
                        {
                            var PNRStatus = BookingRes.Descendants("PNRStatus").Any() ? BookingRes.Descendants("PNRStatus").FirstOrDefault().Value : "";
                            string HotelPNR = BookingRes.Descendants("PNRCode").Any() ? BookingRes.Descendants("PNRCode").FirstOrDefault().Value : "";
                            string SRVCode = BookingRes.Descendants("SRVList").Any() && BookingRes.Descendants("SRVList").FirstOrDefault().Descendants("SRVCode").Any() ? BookingRes.Descendants("SRVList").FirstOrDefault().Descendants("SRVCode").FirstOrDefault().Value : "";
                            string ClientRef = BookingRes.Descendants("ClientRef").Any() ? BookingRes.Descendants("ClientRef").FirstOrDefault().Value : "";

                            //_BookingRS.BookingCode = BookingRes.Descendants("PNRCode").Any() ? BookingRes.Descendants("PNRCode").FirstOrDefault().Value : "";
                            _BookingRS.ConfirmationRef = HotelPNR;
                            if (PNRStatus.ToString().ToUpper().Trim() == "CNF" || PNRStatus.ToString().ToUpper().Trim() == "INV")
                            {
                                _ConfirmRS.Status = true;
                                _BookingRS.BookingStatus = "Reservation confirmed and paid";
                                _BookingRS.StatusCode = "01";
                                _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;                                                                        //
                                BkResult = true;

                                //Voucher Confimation
                                if (PNRStatus.ToString().ToUpper().Trim() == "CNF")
                                    _BookingRS.BookingStatus = PNRSRVVoucherRequest(HotelPNR, SRVCode, ClientRef, ConfirmRQ.Agent);
                            }
                            else if (PNRStatus.ToString().ToUpper().Trim() == "PND" || PNRStatus.ToString().ToUpper().Trim() == "REQ")
                            {
                                _ConfirmRS.Status = false;
                                _BookingRS.BookingStatus = "Your Booking request is pending.";
                                _BookingRS.StatusCode = "00";
                                _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;                                                                          //
                            }
                            else
                            {
                                _ConfirmRS.Status = false;
                                _BookingRS.BookingStatus = "Error Code: Fair is expired please book any other hotel";
                                _BookingRS.StatusCode = "00";
                                _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;                                                                        //
                            }
                            _Book.Add(_BookingRS);
                            _ConfirmRS.BookingRS = _Book;
                            _ConfirmRS.ErrorMsg = _BookingRS.BookingStatus;
                            _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;                                                                           //
                        }
                        else
                        {
                            var error = string.Empty;
                            _BookingRS.StatusCode = "00";
                            _BookingRS.BookingStatus = "Error Code: Problem occured while book the ticket.Please contact customer care.";
                            _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;                                                                           //
                            _Book.Add(_BookingRS);
                            _ConfirmRS.BookingRS = _Book;
                            _ConfirmRS.Status = false;
                            _ConfirmRS.ErrorMsg = _BookingRS.BookingStatus;
                        }
                    }
                }
                else
                {
                    var error = string.Empty;
                    _BookingRS.BookingStatus = "Error Code: Problem occured while book the ticket.Please contact customer care.";
                    _BookingRS.StatusCode = "00";
                    _Book.Add(_BookingRS);
                    _ConfirmRS.BookingRS = _Book;
                    _ConfirmRS.Status = false;
                    _ConfirmRS.ErrorMsg = _BookingRS.BookingStatus;
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                _BookingRS.StatusCode = "00";
                _ConfirmRS.Status = false;
                _ConfirmRS.ErrorMsg = ex.Message.ToString();
            }
            return BkResult;
        }

        #endregion

        #region PNR SRV Voucher
        /// <summary>
        /// The PNRSRVVoucher method allows client to finalize a booking. That means that after calling PNRSRVVoucher for a service the status of this service will become INV.
        /// </summary>
        /// <returns></returns>
        public string PNRSRVVoucherRequest(string PNRCode, string SRVCode, string ClientRef, AgentDetails AgentDetails)
        {
            string PNRVoucherStatus = string.Empty;
            string LogData = string.Empty;

            try
            {
                var strXmlReq = new StringBuilder();
                strXmlReq.Append("<PNRSRVVoucher>");
                strXmlReq.Append("<Version>1.40</Version>");
                strXmlReq.Append("<ClientRef>WZ" + DateTime.Now.ToString("yyyyMMddHHmmss") + "</ClientRef>");
                strXmlReq.Append("<Agent>");
                strXmlReq.Append("<UName>" + SuppUserName + "</UName>");
                strXmlReq.Append("<UPsw>" + SuppPassword + "</UPsw>");
                strXmlReq.Append("</Agent>");
                strXmlReq.Append("<PNR>");
                strXmlReq.Append("<PNRCode>" + PNRCode + "</PNRCode>");
                strXmlReq.Append("<SRVCode>" + SRVCode + "</SRVCode>");
                strXmlReq.Append("</PNR>");
                strXmlReq.Append("</PNRSRVVoucher>");

                string Request = "pXML=" + strXmlReq.ToString();

                #region Request Log
                LogData = "<EVENT><PNRSRVVOUCHER_REQUESTDATA>" + Request + "</PNRSRVVOUCHER_REQUESTDATA>"
                        + "<URL>" + BookMethodURL + "</URL>"
                        + "<USERNAME>" + SuppUserName + "</USERNAME>"
                        + "<PASSWORD>" + SuppPassword + "</PASSWORD>"
                        + "<VENDOR>SPECIALTOURS</VENDOR>"
                        + "<BRANCHCODE></BRANCHCODE>"
                        + "</EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "F", GetType().Name, "PNRSRVVoucherRequest", LogData, "", "");
                #endregion
                string BkResponse = GetResponse(Request.ToString(), PNRSRVVoucherMethodURL, AgentDetails);

                #region Response Log
                var hlp = new HotelHelper();
                LogData = "<EVENT><PNRSRVVOUCHERRESPONSEDATA>" + hlp.RemoveXmlns(BkResponse.ToString()).ToString() + "</PNRSRVVOUCHERRESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "F", PageName, "PNRSRVVoucherRequest", LogData.ToString(), "", "");
                #endregion

                var helper = new HotelHelper();
                var BookingRes = XDocument.Parse(helper.RemoveXmlns(BkResponse.ToString()));
                if (BookingRes.Descendants("Err").Any() && BookingRes.Descendants("Descr").Any())
                {
                    return BookingRes.Descendants("Descr").FirstOrDefault().Value + "-#03";
                }
                else if (BookingRes.Descendants("PNR").Any() && BookingRes.Descendants("PNRStatus").Any())
                {
                    PNRVoucherStatus = BookingRes.Descendants("PNRStatus").Any() ? BookingRes.Descendants("PNRStatus").FirstOrDefault().Value : "";
                    PNRVoucherStatus = PNRStatus(PNRVoucherStatus);
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), SupplierId.ToString(), TraceId.ToString());
            }
            return PNRVoucherStatus;
        }
        #endregion

        #region Hotel View PNR
        public string HotelViewPNR(PNRViewStatusRQ PNRViewRQ, string HotelPNR)
        {
            string BkResponse = string.Empty;
            string LogData = string.Empty;
            TraceId = string.Empty;
            try
            {
                var strXmlReq = new StringBuilder();
                #region PNR VIEW
                strXmlReq.Append("<PNRView>");
                strXmlReq.Append("<Version>1.40</Version>");
                strXmlReq.Append("<Agent>");
                strXmlReq.Append("<UName>" + SuppUserName.ToString() + "</UName>");
                strXmlReq.Append("<UPsw>" + SuppPassword.ToString() + "</UPsw>");
                strXmlReq.Append("</Agent>");
                strXmlReq.Append("<PNR>");
                strXmlReq.Append("<PNRCode>" + HotelPNR + "</PNRCode>");
                strXmlReq.Append("</PNR>");
                strXmlReq.Append("</PNRView>");

                string BkRequest = "pXML=" + strXmlReq.ToString();
                #region Request Log
                LogData = "<EVENT><HOTELPNRVIEWREQUESTDATA>" + strXmlReq.ToString() + "</HOTELPNRVIEWREQUESTDATA>"
                   + "<URL>" + BookMethodURL + "</URL>"
                   + "<USERNAME>" + SuppUserName + "</USERNAME>"
                   + "<PASSWORD>" + SuppPassword + "</PASSWORD>"
                   + "<VENDOR>SPECIALTOURS</VENDOR>"
                   + "</EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", PNRViewRQ.AgentDetails, "F", PageName, "HotelViewPNR", LogData.ToString(), "", "");
                #endregion

                BkResponse = GetResponse(BkRequest.ToString(), ViewPNRMethodURL, PNRViewRQ.AgentDetails);

                #region Response Log
                var hlp = new HotelHelper();
                LogData = "<EVENT><HOTELPNRVIEWRESPONSEDATA>" + hlp.RemoveXmlns(BkResponse.ToString()).ToString() + "</HOTELPNRVIEWRESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", PNRViewRQ.AgentDetails, "F", PageName, "HotelViewPNR", LogData.ToString(), "", "");
                #endregion

                var helper = new HotelHelper();
                var BookingRes = XDocument.Parse(helper.RemoveXmlns(BkResponse.ToString()));

                if (BookingRes.Descendants("Err").Any() && BookingRes.Descendants("Descr").Any())
                {
                    return BookingRes.Descendants("Descr").FirstOrDefault().Value + ".-#03";
                }
                else if (BookingRes.Descendants("PNR").Any() && BookingRes.Descendants("PNRStatus").Any())
                {
                    BkResponse = BookingRes.Descendants("PNRStatus").Any() ? BookingRes.Descendants("PNRStatus").FirstOrDefault().Value : "";
                    BkResponse = PNRStatus(BkResponse);
                }
                #endregion
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", PNRViewRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                return ex.Message.ToString() + ".-#05";
            }
            return BkResponse;
        }

        private string PNRStatus(string BkResponse)
        {
            if (BkResponse.ToString().ToUpper().Trim() == "REQ")
                BkResponse = "Booking Request is in processing.";
            else if (BkResponse.ToString().ToUpper().Trim() == "PND")
                BkResponse = "Booking Request is in pending.";
            else if (BkResponse.ToString().ToUpper().Trim() == "CNF" || BkResponse.ToString().ToUpper().Trim() == "INV")
                BkResponse = "Ticket booked successfully";
            else if (BkResponse.ToString().ToUpper().Trim() == "CXP")
                BkResponse = "Cancellation Request is pending.";
            else if (BkResponse.ToString().ToUpper().Trim() == "CLX")
                BkResponse = "Ticket has been cancelled successfully";
            else if (BkResponse.ToString().ToUpper().Trim() == "CLT")
                BkResponse = "Cancellation Request is success.";
            else if (BkResponse.ToString().ToUpper().Trim() == "REJ")
                BkResponse = "Cancellation Request is Rejected.";

            return BkResponse;
        }

        #endregion

        #region Hotel Cancellation
        public CancellationRS HotelCancelPNR(CancellationRQ CancellationReq, string HotelPNR)
        {
            string CancelResponse = string.Empty;
            string LogData = string.Empty;
            CancellationRS _CancelRS = new CancellationRS();
            TraceId = "";
            try
            {
                var strXmlReq = new StringBuilder();
                strXmlReq.Append("<PNRCancel>");
                strXmlReq.Append("<Version>1.40</Version>");
                strXmlReq.Append("<ClientRef>WZ" + DateTime.Now.ToString("yyyyMMddHHmmss") + "</ClientRef>");
                strXmlReq.Append("<Agent>");
                strXmlReq.Append("<UName>" + SuppUserName.ToString() + "</UName>");
                strXmlReq.Append("<UPsw>" + SuppPassword.ToString() + "</UPsw>");
                strXmlReq.Append("</Agent>");
                strXmlReq.Append("<PNR>");
                strXmlReq.Append("<PNRCode>" + HotelPNR + "</PNRCode>");
                strXmlReq.Append("<SRVCode>1</SRVCode>");
                strXmlReq.Append("</PNR>");
                strXmlReq.Append("</PNRCancel>");

                string BkRequest = "pXML=" + strXmlReq.ToString();
                #region Request Log
                LogData = "<EVENT><CANCELREQUESTDATA>" + strXmlReq.ToString() + "</CANCELREQUESTDATA>"
                    + "<URL>" + BookMethodURL + "</URL>"
                    + "<USERNAME>" + SuppUserName + "</USERNAME>"
                    + "<PASSWORD>" + SuppPassword + "</PASSWORD>"
                    + "<VENDOR>SPECIALTOURS</VENDOR>"
                    + "<CURRENCY>" + CancellationReq.Currency + "</CURRENCY>"
                    + "</EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", CancellationReq.AgentDetails, "F", PageName, "HotelCancelPNR", LogData.ToString(), "", "");
                #endregion
                CancelResponse = GetResponse(BkRequest.ToString(), CancelPNRMethodURL, CancellationReq.AgentDetails);

                var helper = new HotelHelper();
                #region Response Log
                LogData = "<EVENT><CANCELRESPONSEDATA>" + helper.RemoveXmlns(CancelResponse.ToString()).ToString() + "</CANCELRESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", CancellationReq.AgentDetails, "F", PageName, "HotelCancelPNR", LogData.ToString(), "", "");
                #endregion
                var CancelRes = XDocument.Parse(helper.RemoveXmlns(CancelResponse.ToString()));

                if (CancelRes.Descendants("Err").Any() && CancelRes.Descendants("Descr").Any())
                {
                    _CancelRS.ErrorMsg = CancelRes.Descendants("Descr").FirstOrDefault().Value + ".-#03";
                    _CancelRS.ResultCode = "00";
                }
                else if (CancelRes.Descendants("PNR").Any() && CancelRes.Descendants("PNRStatus").Any())
                {
                    CancelResponse = "";
                    CancelResponse = CancelRes.Descendants("PNRStatus").Any() ? CancelRes.Descendants("PNRStatus").FirstOrDefault().Value : "";
                    _CancelRS.ErrorMsg = "";
                    if (CancelResponse.ToString().ToUpper().Trim() == "CLX")
                    {
                        _CancelRS.Status = PNRStatus(CancelResponse);
                        _CancelRS.ResultCode = "01";
                    }
                    else
                    {
                        _CancelRS.Status = PNRStatus(CancelResponse);
                        _CancelRS.ResultCode = "00";
                    }
                }

            }
            catch (Exception ex)
            {
                _CancelRS.ErrorMsg = ex.Message.ToString() + ".-#05";
                _CancelRS.ResultCode = "00";
                SQLAccess.Insert_Action_LogDetails("HOTEL", CancellationReq.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            }
            return _CancelRS;
        }
        #endregion



        #region HTTP Service Request
        public string GetResponse(string request, string RequestMethodName, AgentDetails AgentDetails)
        {
            try
            {
                //"http://xmltest.stglobe.com/STOLXMLAllocation.asmx/AllocationSearch";//http://xmltest.stglobe.com//STOLXMLAllocation.asmx?AllocationSearch //http://xmltest.stglobe.com/STOLXMLStatic.asmx/GetListClientCountries;
                //string URL = ConfigurationSettings.AppSettings["API_SPECIALTOURS"].ToString() + RequestMethodName;
                var req = WebRequest.Create(RequestMethodName);
                //req.Timeout = 300000;
                req.Method = "POST";
                req.ContentType = "application/x-www-form-urlencoded";
                req.Headers.Add("Accept-Encoding", "gzip, deflate"); /*Gzip Compression*/
                req.Headers.Add("Content-Encoding", "gzip"); /*Gzip Compression*/
                //var strOutgoing = "pXML=" + Server.UrlEncode(request);
                //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                using (var writer = new StreamWriter(req.GetRequestStream()))
                {
                    writer.WriteLine(request);
                    writer.Close();
                }
                HttpWebResponse webResponse = (HttpWebResponse)req.GetResponse();
                Stream stream;
                switch (webResponse.ContentEncoding.ToUpperInvariant())
                {
                    case "GZIP":
                        stream = new GZipStream(webResponse.GetResponseStream(), CompressionMode.Decompress);
                        break;
                    case "DEFLATE":
                        stream = new DeflateStream(webResponse.GetResponseStream(), CompressionMode.Decompress);
                        break;

                    default:
                        stream = webResponse.GetResponseStream();
                        break;
                }
                using (var answerReader = new StreamReader(stream))
                {
                    var readString = answerReader.ReadToEnd();
                    return readString;
                }
            }
            catch (System.Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                return null;
            }
        }
        #endregion
    }
}