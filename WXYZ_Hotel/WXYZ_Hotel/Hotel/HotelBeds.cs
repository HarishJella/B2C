using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Models;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Hotel
{
    internal class HotelBeds
    {
        Validate _RequestTimeOut = new Validate();
        HotelSearchRQ request = new HotelSearchRQ();
        internal string RequestTimeFlag { get; set; }
        public string HotelbedsUsername { get; set; }
        public string HotelbedsPassword { get; set; }
        public string HotelbedsUrl { get; set; }
        public string HotelbedSup_name { get; set; }
        public string SessionId { get; set; }
        public int PageNumber { get; set; }
        public int ItemsPerPage { get; set; }
        public string CheckInDate { get; set; }
        public string CheckOutDate { get; set; }
        public string DestinationCode { get; set; }
        public string DestinationType { get; set; }
        public int RoomCount { get; set; }
        public int AdultCount { get; set; }
        public int ChildCount { get; set; }

        public string[] Adults { get; set; }
        public string[] Child { get; set; }
        public string[] ChildAge { get; set; }
        public string[] ChildAge1 { get; set; }
        public string[] ChildAge2 { get; set; }
        public string[] ChildAge3 { get; set; }
        public string[] ChildAge4 { get; set; }
        public string[] ChildAgeList { get; set; }

        internal List<Room> Rooms { get; set; }
        public List<RoomsType> RoomsTypes { get; set; }
        public List<PaxCount> PaxCounts { get; set; }
        internal List<RoomGroup> RoomGroup { get; set; }
        internal GuestInformation GuestInformation { get; set; }
        public string EchoToken { get; set; }
        public string AvailToken { get; set; }
        public string ContractName { get; set; }
        public string IncomingOfficeCode { get; set; }
        public string HotelInfoCode { get; set; }
        public string Shrui { get; set; }

        public string PurchaseToken { get; set; }
        public string HolderType { get; set; }
        public string AgencyReference { get; set; }
        public string Spui { get; set; }
        public string FileNumber { get; set; }
        public string PurchaseCancelType { get; set; }
        public string CallingFunction { get; set; }
        public string userkey { get; set; }
        public string HotelName { get; set; }
        public string SSR { get; set; }
        public string SourceMarket { get; set; }
        internal decimal ROE { get; set; }
        internal string CountryCode { get; set; }

        public HotelBeds()
        {
            PageNumber = 1;
            DestinationType = "SIMPLE";
            ItemsPerPage = 999;
            HolderType = "AD";
            var rnd = new Random();
            SessionId = rnd.Next(1000, 154555).ToString();

        }

        public string HotelSearchRequest()
        {
            var xmlRequest = new StringBuilder();
            xmlRequest.Append("<HotelValuedAvailRQ sessionId='" + SessionId + "' xmlns=\"http://www.hotelbeds.com/schemas/2005/06/messages\"  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.hotelbeds.com/schemas/2005/06/messages HotelValuedAvailRQ.xsd\" showDiscountsList='Y'  version='2011/01'>");
            xmlRequest.Append("<Language>ENG</Language>");
            xmlRequest.Append("<Credentials><User>" + HotelbedsUsername + "</User><Password>" + HotelbedsPassword +
                              "</Password></Credentials>");
            xmlRequest.Append(" <PaginationData itemsPerPage='" + ItemsPerPage + "' pageNumber='" + PageNumber + "'/>");
            xmlRequest.Append("<CheckInDate date='" + CheckInDate + "'/><CheckOutDate date='" + CheckOutDate + "'/>");
            xmlRequest.Append("<Destination code='" + DestinationCode + "' type='" + DestinationType + "' />");
            xmlRequest.Append("<OccupancyList>");
            var tmp = string.Empty;
            var tmpage = string.Empty;
            for (var k = 0; k < RoomCount; k++)
            {
                if (tmp.Contains(k.ToString())) continue;
                var tempRoomCount = 1;
                tmpage = k + ",";
                xmlRequest.Append("<HotelOccupancy>");
                xmlRequest.Append("<RoomCount>" + tempRoomCount + "</RoomCount>");
                xmlRequest.Append("<Occupancy>");
                xmlRequest.Append("<AdultCount>" + Adults[k] + "</AdultCount>");
                xmlRequest.Append("<ChildCount>" + Child[k] + "</ChildCount>");
                if (int.Parse(Child[k]) > 0)
                {
                    xmlRequest.Append("<GuestList>");
                    for (int i = 0; i < tmpage.Split(',').Count(); i++)
                    {
                        if (string.IsNullOrWhiteSpace(tmpage.Split(',')[i])) continue;
                        var ii = int.Parse(tmpage.Split(',')[i]);
                        switch (ii)
                        {
                            case 0:
                                ChildAge = ChildAge1;
                                break;
                            case 1:
                                ChildAge = ChildAge2;
                                break;
                            case 2:
                                ChildAge = ChildAge3;
                                break;
                            case 3:
                                ChildAge = ChildAge4;
                                break;
                        }
                        for (var j = 0; j < int.Parse(Child[k]); j++)
                        {
                            xmlRequest.Append("<Customer type='CH'>");
                            xmlRequest.Append("<Age>" + ChildAge[j] + "</Age>");
                            xmlRequest.Append("</Customer>");
                        }
                    }

                    xmlRequest.Append("</GuestList>");
                }
                xmlRequest.Append("</Occupancy>");
                xmlRequest.Append("</HotelOccupancy>");
                // }
            }
            xmlRequest.Append("</OccupancyList>");
            //xmlRequest.Append("<SourceMarket>" + SourceMarket + "</SourceMarket>");
            xmlRequest.Append("<SourceMarket>IN</SourceMarket>");
            xmlRequest.Append("<ShowCancellationPolicies>Y</ShowCancellationPolicies>");
            xmlRequest.Append("<ExtraParamList> ");
            xmlRequest.Append("<ExtendedData type='EXT_ORDER'><Name>ORDER_CONTRACT_PRICE</Name><Value>DESC</Value></ExtendedData>");
            xmlRequest.Append("<ExtendedData type='EXT_DISPLAYER'><Name>DISPLAYER_DEFAULT</Name><Value>PROMOTION:Y</Value></ExtendedData>");
            xmlRequest.Append("<ExtraParamList><ExtendedData type=\"EXT_ADDITIONAL_PARAM\"><Name>PARAM_SHOW_OPAQUE_CONTRACT</Name><Value>Y</Value></ExtendedData></ExtraParamList>");
            xmlRequest.Append("</ExtraParamList>");
            xmlRequest.Append("</HotelValuedAvailRQ>");
            var request = xmlRequest.ToString();

            return request;


        }

        public string HotelSearch(string request)
        {
            string WebResponse = "";
            bool Result = SendHttpWebRequest("POST", HotelbedsUrl, request, ref WebResponse, ref WebResponse);
            return WebResponse;
        }
        public bool SearchHotelResponse(string xmlRes, string xmlrequest, ref HTLSearchRS _SearchRS, string SupplierId, HotelSearchRQ HotelRQ, string SupplierName, string TraceId)
        {

            List<HotelDetails> _Hotels = new List<HotelDetails>();
            string Currency = string.Empty;
            try
            {
                #region Fetch Bus Supplier Markup & Commission                                                                                         //
                var CHin = HotelRQ.CheckIn.Split('-');
                Hashtable hsh_param = new Hashtable();
                hsh_param.Add("BRANCHID", HotelRQ.AgentDetails.BranchID);
                hsh_param.Add("AGENTID", HotelRQ.AgentDetails.AgentID);
                hsh_param.Add("SUPPID", SupplierId);
                hsh_param.Add("BOOKEDDATE", DateTime.Now.ToString("yyyyMMdd"));
                hsh_param.Add("DEPARTUREDATE", (CHin[2] + CHin[1] + CHin[0]).ToString());
                DataSet dsMarkUpCommission = new DataSet();
                dsMarkUpCommission = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_API_HOTEL_MARKUP_COMMISSION, hsh_param, DataBase.APP.ToString());

                #endregion                                                                                                                            //

                string supCurrency = "";
                XDocument Request = XDocument.Parse(xmlrequest.Replace("xmlns=\"http://www.hotelbeds.com/schemas/2005/06/messages\"", ""));
                var PassList = new List<string>();
                foreach (var des in Request.Descendants("HotelOccupancy"))
                {
                    PassList.Add(des.Descendants("AdultCount").First().Value + ";" + des.Descendants("ChildCount").First().Value + ";" + des.Descendants("RoomCount").First().Value);
                }
                Thread.CurrentThread.CurrentCulture = new CultureInfo("en-GB");
                var xdoc = XDocument.Parse(xmlRes.Replace("xmlns=\"http://www.hotelbeds.com/schemas/2005/06/messages\"", ""));

                #region RETURN ON EQUITY ( ROE )
                DataSet dsCurrencyAmt = new DataSet();
                string FareCurreny = "1";
                if (xdoc.Descendants("ServiceHotel").Any())
                {
                    Currency = xdoc.Descendants("ServiceHotel").FirstOrDefault().Element("Currency").Attribute("code").Value;
                    if (HotelRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper() != Currency.ToString().Trim().ToUpper())
                    {
                        string CurrenyErrorMsg = string.Empty;
                        dsCurrencyAmt = SQLAccess.Fetch_API_Currency_Details(HotelRQ.AgentDetails, "", Currency, HotelRQ.AgentDetails.CurrencyCode.ToString(), ref CurrenyErrorMsg);
                        if (dsCurrencyAmt == null || dsCurrencyAmt.Tables.Count == 0 || dsCurrencyAmt.Tables[0].Rows.Count == 0)
                        {
                            _SearchRS.StatusCode = "00";
                            _SearchRS.Error = "Problem occured while fetching currency details,Please Contact Customer care.#03";
                            return false;
                        }
                        FareCurreny = dsCurrencyAmt.Tables[0].Rows[0]["ROE_TO_AMOUNT"].ToString().Trim();
                    }
                }
                #endregion

                string HotelFeeDesc = string.Empty;
                foreach (var hotel in xdoc.Descendants("ServiceHotel"))
                {

                    if (supCurrency.ToUpper() != hotel.Element("Currency").Attribute("code").Value.ToUpper())
                    {
                        supCurrency = hotel.Element("Currency").Attribute("code").Value.ToUpper();

                    }

                    int count = 1;

                    HotelDetails _hotel = new HotelDetails();
                    var Roomgroup = new List<List<XElement>>();
                    foreach (var list in PassList)
                    {
                        var q = (from a in hotel.Descendants("AvailableRoom")
                                 where a.Descendants("AdultCount").First().Value == list.Split(';')[0] &&
                                 a.Descendants("ChildCount").First().Value == list.Split(';')[1] &&
                                 a.Descendants("RoomCount").First().Value == list.Split(';')[2]
                                 select a).GroupBy(e => e.Descendants("HotelRoom").First().Attribute("SHRUI").Value).Select(x => x.First()).ToList();
                        Roomgroup.Add(q);
                    }
                    bool loop = true;
                    List<RoomRS> _room = new List<RoomRS>();
                    for (int roomType = 0; roomType < Roomgroup.Count; roomType++)
                    {
                        if (Roomgroup[roomType].Count() >= 1)
                        {
                            loop = true;
                        }
                        else
                        {
                            loop = false;
                            break;
                        }
                    }
                    if (loop == true)
                    {

                        var minamt = new List<decimal>();

                        var minamtLoop = new List<decimal>();

                        var objroom = new StringBuilder();

                        decimal multiroomAmount = 0;

                        for (int roomType = 0; roomType < Roomgroup.Count; roomType++)
                        {
                            minamtLoop = new List<decimal>();
                            int Roomcount = roomType + 1;
                            int loopitem = 1;
                            foreach (var item in Roomgroup[roomType])
                            {
                                var roomname = item.Descendants("RoomType").Attributes("code").First().Value;
                                var board = item.Descendants("Board").Attributes("code").First().Value;
                                var grp = new List<XElement>();

                                grp.Add(item);

                                var pr = (Convert.ToDecimal(grp.Descendants("Price").Elements("Amount").First().Value) * Convert.ToDecimal(FareCurreny)).ToString();
                                minamtLoop.Add(Convert.ToDecimal(pr));
                                multiroomAmount += Convert.ToDecimal(pr);

                                var can = grp.Descendants("CancellationPolicy").FirstOrDefault();

                                string BoardType = "", BoardTypeCode = "", RoomTypeCode = "", RatePlanCode = "", AvailableCount = "", RoomCountNew = "", AdultCount = "", ChildCount = "", BoardName = "";
                                foreach (var room in grp)
                                {
                                    BoardType += "$" + room.Descendants("Board").Attributes("type").First().Value;
                                    BoardTypeCode += "$" + room.Descendants("Board").Attributes("code").First().Value;
                                    RoomTypeCode += "$" + room.Descendants("RoomType").Attributes("type").First().Value + ";" + room.Descendants("RoomType").Attributes("code").First().Value + ";" + room.Descendants("RoomType").Attributes("characteristic").First().Value;
                                    RatePlanCode += "$" + room.Element("HotelRoom").Attribute("SHRUI").Value + ";" + room.Descendants("AdultCount").First().Value + ";" + room.Descendants("ChildCount").First().Value + ";" + room.Descendants("RoomCount").First().Value + ";" + hotel.Attribute("availToken").Value + ";" + hotel.Descendants("Contract").First().Element("Name").Value + ";" + hotel.Descendants("Contract").First().Element("IncomingOffice").Attribute("code").Value + ";" + DestinationCode + ";" + pr;
                                    AvailableCount += "$" + room.Descendants("RoomCount").First().Value;
                                    RoomCountNew += "$" + room.Descendants("RoomCount").First().Value;
                                    AdultCount += "$" + room.Descendants("AdultCount").First().Value;
                                    ChildCount += "$" + room.Descendants("ChildCount").First().Value;
                                    BoardName = room.Descendants("Board").First().Value;
                                }

                                RoomRS _RoomRS = new RoomRS();

                                _RoomRS.RoomId = RoomCount + "R" + loopitem;

                                _RoomRS.RoomName = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(grp.Descendants("RoomType").First().Value.ToLower());
                                _RoomRS.TraceID = TraceId;
                                _RoomRS.RoomPaxCapacity = AvailableCount.Substring(1);
                                _RoomRS.Roomtypecode = RoomTypeCode.Substring(1);
                                _RoomRS.Inclusion = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(BoardName.ToLower());
                                _RoomRS.RateBasic = BoardTypeCode.Substring(1);
                                _RoomRS.BaseAmount = pr;
                                _RoomRS.SuppBaseAmount = pr;
                                _RoomRS.MarkUp = "0";
                                string MarkUpAmt = "0";
                                string CommissionAmt = "0";
                                bool ComMarkUpdt = Calculation.CalcCommAndMarkup(HotelRQ.AgentDetails, _RoomRS.SuppBaseAmount.ToString(), ref MarkUpAmt, ref CommissionAmt, dsMarkUpCommission); //
                                _RoomRS.MarkUp = MarkUpAmt;                                                                                                                              //
                                _RoomRS.Commission = CommissionAmt;
                                _RoomRS.TotalGrossAmount = (Convert.ToDecimal(_RoomRS.SuppBaseAmount) + Convert.ToDecimal(MarkUpAmt) - Convert.ToDecimal(CommissionAmt)).ToString();               //
                                _RoomRS.TotalAmount = _RoomRS.SuppBaseAmount;                           //TotalAmount is baseAmount
                                _RoomRS.Currency = HotelRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper();//hotel.Element("Currency").Attribute("code").Value;
                                _RoomRS.AllocationDetails = RatePlanCode.Substring(1);
                                _RoomRS.RoomCount = (roomType + 1).ToString();
                                _RoomRS.AdultCount = AdultCount.Substring(1);
                                _RoomRS.ChildCount = ChildCount.Substring(1);
                                _RoomRS.Supplier = SupplierName.ToString();
                                _RoomRS.Supplier_Id = SupplierId;

                                if (can != null)
                                {
                                    foreach (var canPolicy in can.Descendants("Price").ToList())
                                    {

                                        if (canPolicy.Descendants("Amount").Any() && canPolicy.Descendants("Amount").First().Value != "" && !canPolicy.Descendants("BaseAmount").Any() && canPolicy.Descendants("DateTimeFrom").Any())
                                        {
                                            decimal canPrice = (Convert.ToDecimal(canPolicy.Descendants("Amount").First().Value));
                                            canPolicy.Add(new XElement("BaseAmount", canPolicy.Descendants("Amount").First().Value));
                                            if (canPolicy.Descendants("DateTimeFrom").Any())
                                            {
                                                string FromDate = canPolicy.Descendants("DateTimeFrom").Attributes("date").First().Value;
                                                DateTime DateFrom = Convert.ToDateTime(FromDate.Substring(6, 2) + "/" + FromDate.Substring(4, 2) + "/" + FromDate.Substring(0, 4));

                                                if ((DateFrom - DateTime.Now).TotalDays > 2)
                                                {
                                                    DateFrom = DateFrom.AddDays(-2);
                                                }
                                                canPolicy.Add(new XElement("FromDate", DateFrom));
                                                canPolicy.Add(new XElement("ToDate", ""));

                                            }
                                            if (canPolicy.Descendants("DateTimeTo").Any())
                                            {
                                                string ToDate = canPolicy.Descendants("DateTimeTo").Attributes("date").First().Value;
                                                DateTime DateTo = Convert.ToDateTime(ToDate.Substring(6, 2) + "/" + ToDate.Substring(4, 2) + "/" + ToDate.Substring(0, 4));
                                                if ((DateTo - DateTime.Now).TotalDays > 2)
                                                {
                                                    DateTo = DateTo.AddDays(-2);
                                                }
                                                canPolicy.Add(new XElement("ToDate", DateTo));

                                            }
                                            canPolicy.Descendants("Amount").First().Value = canPrice.ToString();
                                        }
                                        CancellationPolicy _CancelPolicy = new CancellationPolicy();
                                        _CancelPolicy.ChargeAmount = (Convert.ToDecimal(canPolicy.Descendants("BaseAmount").First().Value) * Convert.ToDecimal(FareCurreny)).ToString();
                                        _CancelPolicy.FromDate = canPolicy.Descendants("FromDate").First().Value;
                                        _CancelPolicy.ToDate = canPolicy.Descendants("ToDate").First().Value;
                                        _RoomRS.HBCancellationPolicy = _CancelPolicy;





                                    }
                                }



                                try
                                {
                                    if (can != null)
                                    {
                                        var cancelPolicy = (from candate in can.Descendants("Price")
                                                            select new
                                                            {
                                                                FromDate = candate.Element("DateTimeFrom") == null ? DateTime.MinValue : Convert.ToDateTime(candate.Element("DateTimeFrom").Attributes("date").First().Value.Substring(6, 2) + "/" + candate.Element("DateTimeFrom").Attributes("date").First().Value.Substring(4, 2) + "/" + candate.Element("DateTimeFrom").Attributes("date").First().Value.Substring(0, 4)),
                                                                Time = candate.Element("DateTimeFrom") == null ? "" : candate.Element("DateTimeFrom").Attributes("time").First().Value.Substring(0, 2) + ":" + candate.Element("DateTimeFrom").Attributes("time").First().Value.Substring(2, 2) + " hrs",
                                                                ToDate = candate.Element("DateTimeTo") == null ? DateTime.MinValue : Convert.ToDateTime(candate.Element("DateTimeTo").Attributes("date").First().Value.Substring(6, 2) + "/" + candate.Element("DateTimeTo").Attributes("date").First().Value.Substring(4, 2) + "/" + candate.Element("DateTimeTo").Attributes("date").First().Value.Substring(0, 4)),
                                                                Amount = Convert.ToDecimal(candate.Element("Amount").Value)
                                                            }).ToList().OrderBy(x => x.FromDate).ToList();

                                        DateTime cancellationdeadline = Convert.ToDateTime(cancelPolicy.First().FromDate);
                                        TimeSpan span = cancellationdeadline.Subtract(DateTime.Now);
                                        int diff = span.Days;
                                        _RoomRS.CancellationDeadLine = cancellationdeadline.ToString("MM/dd/yyyy");

                                    }
                                    else
                                    {
                                        _RoomRS.CancellationDeadLine = DateTime.Now.ToString("MM/dd/yyyy");
                                    }
                                }
                                catch
                                {
                                    _RoomRS.CancellationDeadLine = DateTime.Now.ToString("MM/dd/yyyy");
                                }

                                _room.Add(_RoomRS);
                                count++;

                                loopitem++;
                            }

                            minamt.Add(minamtLoop.Min());
                        }
                        _hotel.Room = _room;

                        if (minamt.Any())
                        {

                            _hotel.HotelID = "HB_" + hotel.Element("HotelInfo").Element("Code").Value;
                            _hotel.TraceID = TraceId;
                            _hotel.GHotelId = "HB-" + hotel.Element("HotelInfo").Element("Code").Value;
                            _hotel.Supplier = SupplierName.ToString();                                                            //
                            _hotel.HotelName = hotel.Element("HotelInfo").Element("Name").Value.ToString().ToUpper();
                            _hotel.Status = hotel.Descendants("Classification").First().Value;
                            _hotel.Currency = HotelRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper();//hotel.Element("Currency").Attribute("code").Value;
                            int star1 = 0;
                            var startext1 = hotel.Element("HotelInfo").Element("Category").Value;
                            if (startext1.Contains("STAR"))
                            {
                                star1 = int.Parse(startext1.Split(' ')[0]);
                            }
                            _hotel.Rating = star1.ToString();
                            foreach (var img in hotel.Descendants("Image"))
                            {
                                _hotel.ImgUrl = img.Element("Url").Value.Replace("small/", "");
                            }
                            _hotel.FullAddress = hotel.Element("HotelInfo").Element("Destination").Element("ZoneList").Element("Zone").Value;
                            _hotel.Category = hotel.Element("HotelInfo").Element("Category").Value;
                            var pos1 = hotel.Element("HotelInfo").Element("Position");
                            _hotel.Lat = pos1.Attribute("latitude").Value;
                            _hotel.Lng = pos1.Attribute("longitude").Value;
                            _hotel.StartAmount = minamt.Sum().ToString();

                            _Hotels.Add(_hotel);


                        }
                    }
                }

            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", HotelRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), SupplierId.ToString(), "");
                return false;
            }

            _SearchRS.Hotels = _Hotels;
            _SearchRS = FilterHotels1(_SearchRS);
            return true;
        }
        private bool SendHttpWebRequest(string strMethod, string strURL, string strRequestData, ref string strWebResponse, ref string strWebError)
        {
            try
            {
                if (string.IsNullOrEmpty(strURL))
                {
                    strWebError = "Url is Empty";
                    return false;
                }

                HttpWebRequest httpwebRequest = (HttpWebRequest)HttpWebRequest.Create(strURL);
                httpwebRequest.Credentials = CredentialCache.DefaultNetworkCredentials;
                httpwebRequest.Proxy = null;
                httpwebRequest.KeepAlive = false;
                httpwebRequest.ProtocolVersion = HttpVersion.Version10;
                httpwebRequest.ServicePoint.ConnectionLimit = 1;
                httpwebRequest.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip,deflate");
                httpwebRequest.Method = strMethod;
                httpwebRequest.ContentType = "text/xml; charset=utf-8";
                //httpwebRequest.Headers.Add("SOAPAction", strSoapAction);
                httpwebRequest.Accept = "text/xml";
                byte[] queryByte = Convertbyte(strRequestData, Encoding.UTF8.GetEncoder());
                httpwebRequest.ContentLength = queryByte.Length;

                #region Write Request
                Stream strmRequestStream;
                try
                {
                    strmRequestStream = httpwebRequest.GetRequestStream();
                }
                catch (Exception ex)
                {
                    if (ex.InnerException != null)
                    {
                        strWebError = ex.InnerException.Message;
                        return false;
                    }
                    strWebError = ex.InnerException.Message;
                    return false;
                }
                strmRequestStream.Write(queryByte, 0, queryByte.Length);
                #endregion

                HttpWebResponse webResponse = null;
                try
                {
                    webResponse = (HttpWebResponse)httpwebRequest.GetResponse();
                }
                catch (Exception e)
                {
                    FieldInfo fieldInformation = httpwebRequest.GetType().GetField("_HttpResponse", BindingFlags.NonPublic | BindingFlags.Instance);
                    if (fieldInformation != null)
                    {
                        webResponse = (HttpWebResponse)fieldInformation.GetValue(httpwebRequest);
                    }
                    if (webResponse == null)
                    {
                        strmRequestStream.Close();
                        if (e.InnerException != null)
                        {
                            strWebError = e.InnerException.Message;
                            return false;
                        }
                        strWebError = e.Message;
                        return false;
                    }
                }
                Stream strmResponseStream = strmResponseStream = webResponse.GetResponseStream();
                if (webResponse.ContentEncoding.ToLower().Contains("gzip"))
                {
                    strmResponseStream = new GZipStream(strmResponseStream, CompressionMode.Decompress);
                }
                else if (webResponse.ContentEncoding.ToLower().Contains("deflate"))
                {
                    strmResponseStream = new DeflateStream(strmResponseStream, CompressionMode.Decompress);
                }
                StreamReader strmReader = new StreamReader(strmResponseStream, Encoding.Default);
                strWebResponse = strmReader.ReadToEnd();
                strmReader.Close();
                strmRequestStream.Close();
                strmResponseStream.Close();
                return true;
            }
            catch (Exception ex)
            {
                string strLineNo = string.Empty;
                if (ex.StackTrace != null)
                {
                    if (ex.StackTrace.Contains("cs:line"))
                    {
                        strLineNo = ex.StackTrace.Substring(ex.StackTrace.IndexOf("cs:line"));
                    }
                }
                string strException = "<Exception>" + ex.Message.ToString() + "</Exception>";
                // _clsCommon.WriteEventLog(strTerminalID, strSequenceNo, strException, "RQ", "Exception", "SendHttpWebRequest", "FAILED", "SendRequest");
                strWebError = strException;
                return false;
            }
        }
        private byte[] Convertbyte(string lstrInput, Encoder encoder)
        {
            byte[] queryByte = null;
            try
            {
                char[] charConvertArray = new char[lstrInput.Length];
                lstrInput.CopyTo(0, charConvertArray, 0, lstrInput.Length);
                int cout, bout;
                bool completed;
                queryByte = new byte[encoder.GetByteCount(charConvertArray, 0, charConvertArray.Length, true)];
                encoder.Convert(charConvertArray, 0, charConvertArray.Length, queryByte, 0, queryByte.Length, true, out cout, out bout, out completed);
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
            }
            return queryByte;
        }

        #region FilterDuplicateHotels
        public HTLSearchRS FilterHotels1(HTLSearchRS _SearchRS)
        {
            string FilteredResponse = string.Empty;
            var str = new StringBuilder();
            try
            {
                var HTLList = (from htl in _SearchRS.Hotels.AsEnumerable()
                               orderby htl.HotelName.ToString().ToUpper() ascending
                               select new
                               {
                                   hotelCode = htl.HotelID.ToString().ToUpper()
                               }).GroupBy(x => x.hotelCode).Where(x => x.Count() > 1).ToList();

                for (int i = 0; i < HTLList.Count; i++)
                {
                    List<string> hotelCode = new List<string>();
                    hotelCode.Add(HTLList[i].Key.ToString());

                    if (hotelCode.Count > 0)
                    {
                        var xmlvalue3 = (from prod in _SearchRS.Hotels.AsEnumerable()
                                         where hotelCode.Contains(prod.HotelID.ToString())
                                         select prod).ToList();

                        var selXM1 = xmlvalue3.Select(x => x.HotelID).ToList();
                        if (xmlvalue3.Count > 1)
                        {

                            HotelDetails htl = null;
                            htl = xmlvalue3.OrderBy(x => x.HotelID).First();
                            _SearchRS.Hotels.Remove(htl);

                            var xmlvalue = (from prod in _SearchRS.Hotels.AsEnumerable()
                                            where hotelCode.Contains(prod.HotelID.ToString())
                                            select prod).ToList();
                            if (xmlvalue.Count > 1)
                            {

                                List<HotelDetails> htl1 = null;
                                htl1 = xmlvalue.OrderBy(x => x.HotelID).ToList();
                                for (int j = 1; j < htl1.Count; j++)
                                {
                                    _SearchRS.Hotels.Remove(htl1[j]);
                                }

                            }

                        }
                    }
                }


            }
            catch { }
            return _SearchRS;
        }



        public string FilterHotels(string Response)
        {
            string FilteredResponse = string.Empty;
            var str = new StringBuilder();
            try
            {

                var xdoc = XDocument.Parse(Response);
                List<string> hotelCode = new List<string>();
                List<XElement> lstRep = xdoc.Descendants("Hotel").ToList();
                var HotelList1 = (from hotel in xdoc.Descendants("Hotel")
                                  orderby hotel.Elements("HotelName").First().Value.ToUpper() ascending
                                  select new
                                  {
                                      hotelCode = hotel.Elements("HotelId").First().Value.ToUpper()
                                  }).GroupBy(x => x.hotelCode).Where(x => x.Count() > 1).ToList();
                str.Append("<HotelSearchRS>");
                for (int i = 0; i < HotelList1.Count; i++)
                {
                    hotelCode.Add(HotelList1[i].Key.ToString());
                    if (hotelCode.Count > 0)
                    {
                        var xmlValue3 = (from prod in lstRep
                                         where hotelCode.Contains(prod.Element("HotelId").Value.Trim())
                                         select prod).ToList();
                        var selXMl = xmlValue3.Select(x => x.Element("HotelId").Value).ToList();

                        if (xmlValue3.Count > 1)
                        {
                            XElement Htl = null;
                            Htl = xmlValue3.OrderBy(x => double.Parse(x.Element("StartAmount").Value)).First();
                            xmlValue3.Remove(Htl);
                            // Htl.Descendants("Room").Remove();
                            int Roomcount = 1;
                            int loopitem = Htl.Descendants("Room").Count() + 1;
                            foreach (var rm in xmlValue3.Descendants("Room"))
                            {
                                rm.SetElementValue("RoomId", Roomcount + "R" + loopitem);
                                //rm.Descendants("RoomId").First().Value = Roomcount + "R" + loopitem;
                                Htl.Descendants("Rooms").First().Add(rm);
                                loopitem++;

                            }
                            lstRep.RemoveAll(x => selXMl.Exists(old => old == x.Element("HotelId").Value));
                            // xdoc.Descendants("AvailableHotels").First().Add(Htl);
                            str.Append(Htl.ToString());

                        }

                    }
                }
                foreach (var lst in lstRep)
                {
                    str.Append(lst.ToString());
                }

                str.Append("</HotelSearchRS>");

            }
            catch { }
            return str.ToString();
        }
        #endregion

        #region Details
        public string HotelDetail()
        {
            CallingFunction = "HotelDetail";
            var xmlRequest = new StringBuilder();
            var rnd = new Random();
            EchoToken = rnd.Next(1000, 154555).ToString();
            xmlRequest.Append("<HotelDetailRQ echoToken='" + EchoToken +
                              "' xmlns='http://www.hotelbeds.com/schemas/2005/06/messages' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.hotelbeds.com/schemas/2005/06/messages HotelDetailRQ.xsd'>");
            xmlRequest.Append("<Language>ENG</Language>");
            xmlRequest.Append("<Credentials><User>" + HotelbedsUsername + "</User><Password>" + HotelbedsPassword +
                              "</Password></Credentials>");
            xmlRequest.Append("<HotelCode>" + HotelInfoCode + "</HotelCode>");
            xmlRequest.Append("</HotelDetailRQ>");
            var request = xmlRequest.ToString();
            string response = "";
            bool Result = SendHttpWebRequest("POST", HotelbedsUrl, request, ref response, ref response);
            //var response = GetResponse(request, 2);


            return response;
        }

        public bool HoteDetailResponse(string res, ref HotelDetailsRS _HotelDetailRS, string SupplierName)
        {
            var objstr = new StringBuilder();
            if (!string.IsNullOrEmpty(res))
            {
                XDocument xdoc =
                    XDocument.Parse(
                        res.Replace("xsi:type=\"ProductHotel\"", "")
                           .Replace("xsi:type=\"ServiceHotel\"", "")
                           .Replace("xmlns=\"http://www.hotelbeds.com/schemas/2005/06/messages\"", "")
                           .Replace("&", "and"));

                var hotel = xdoc.Descendants("Hotel").First();
                var Category = xdoc.Descendants("Category").First();
                var ImageList = xdoc.Descendants("Image");
                var FacilityList = xdoc.Descendants("Feature").Where(c => c.Attribute("group").Value == "70");
                var Contact = xdoc.Descendants("Contact").First();
                var Description = xdoc.Descendants("Description").First();
                int star = 0;
                if (Category.Value.Contains("STAR"))
                {
                    star = int.Parse(Category.Value.Split(' ')[0]);
                }
                HotelDetails _HotelDetails = new HotelDetails();
                _HotelDetails.Supplier = SupplierName.ToString();
                _HotelDetails.HotelID = hotel.Element("Code").Value;
                _HotelDetails.HotelName = hotel.Element("Name").Value.ToString().ToUpper();
                _HotelDetails.Currency = "USD";
                _HotelDetails.Rating = star.ToString();
                _HotelDetails.Category = "";
                _HotelDetails.HotelChain = hotel.Element("Chain").Value;
                _HotelDetails.Description = HttpUtility.UrlDecode(HttpUtility.HtmlDecode(Description.Value));
                HotelImage _Image = new HotelImage();
                List<HotelImage> Image = new List<HotelImage>();
                foreach (var img in ImageList)
                {

                    _Image.Url = img.Element("Url").Value;
                    Image.Add(_Image);
                }
                _HotelDetails.HotelImages = Image;
                List<Amenitie> _Amenitie = new List<Amenitie>();
                Amenitie _Amen = new Amenitie();

                foreach (var objfac in FacilityList)
                {
                    _Amen.Name = objfac.Element("Description").Value;
                    _Amenitie.Add(_Amen);
                }
                string code = "";
                if (Contact.Element("Address").Element("PostalCode") != null)
                {
                    code = Contact.Element("Address").Element("PostalCode").Value;
                }
                _HotelDetails.FullAddress = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(Contact.Element("Address").Element("StreetName").Value.ToLower()) + " ," +
                              Contact.Element("Address").Element("City").Value + " " + code;
                _HotelDetails.Lat = hotel.Element("Position").Attribute("latitude").Value;
                _HotelDetails.Lng = hotel.Element("Position").Attribute("longitude").Value;
                _HotelDetailRS.HotelDetails = _HotelDetails;
                //objstr.Append("<HotelDetailsRS>");
                //objstr.Append("<VendorId>HotelBed</VendorId>");
                //objstr.Append("<HotelCode>" + hotel.Element("Code").Value + "</HotelCode>");
                //objstr.Append("<HotelName>" + hotel.Element("Name").Value.ToString().ToUpper() + "</HotelName>");
                //objstr.Append("<Destination>" + hotel.Element("Destination").Element("Name").Value + "</Destination>");
                //objstr.AppendFormat("<Currency>{0}</Currency>", "USD");
                //objstr.Append("<Rating>" + star + "</Rating>");
                //objstr.Append("<Category></Category>");
                //try
                //{
                //    objstr.Append("<Chain>" + hotel.Element("Chain").Value + "</Chain>");
                //}
                //catch (Exception)
                //{

                //    objstr.Append("<Chain>" + "" + "</Chain>");
                //}
                //objstr.Append("<DescriptionList>");

                //objstr.Append("<Description type='" + Description.Attribute("type").Value + "'>");
                //objstr.Append(HttpUtility.UrlDecode(HttpUtility.HtmlDecode(Description.Value)));
                //objstr.Append("</Description>");

                //objstr.Append("</DescriptionList>");
                //objstr.Append("<ImageList>");
                //foreach (var img in ImageList)
                //{
                //    objstr.Append("<Image>");
                //    objstr.Append(img.Element("Url").Value);
                //    objstr.Append("</Image>");
                //}
                //objstr.Append("</ImageList>");
                //objstr.Append("<HotelAmenities>");
                //foreach (var objfac in FacilityList)
                //{
                //    string fee = string.Empty;
                //    if (objfac.Attribute("fee") != null)
                //    {
                //        fee = objfac.Attribute("fee").Value;
                //        if (fee == "Y")
                //        {
                //            fee = "*";
                //        }
                //        else
                //        {
                //            fee = string.Empty;
                //        }
                //    }
                //    objstr.Append("<Amenity >" + objfac.Element("Description").Value + fee + "</Amenity>");
                //}

                //objstr.Append("</HotelAmenities>");
                //objstr.Append("<RoomAmenities/>");
                //objstr.Append("<AttractionList/>");

                //if (Contact.Element("Address").Element("PostalCode") != null)
                //{
                //    code = Contact.Element("Address").Element("PostalCode").Value;
                //}
                //objstr.Append("<Address>" +
                //              CultureInfo.CurrentCulture.TextInfo.ToTitleCase(Contact.Element("Address").Element("StreetName").Value.ToLower()) + " ," +
                //              Contact.Element("Address").Element("City").Value + " " + code + "</Address>");
                //objstr.AppendFormat("<City>" + Contact.Element("Address").Element("City").Value + "</City>");
                //objstr.AppendFormat("<Country></Country>");
                //objstr.AppendFormat("<ZipCode></ZipCode>");
                //string EmailList = "";
                //foreach (var email in Contact.Descendants("Email"))
                //{
                //    EmailList += email.Value;
                //}
                //if (!string.IsNullOrWhiteSpace(EmailList))
                //{
                //    EmailList = EmailList.Substring(1);
                //}
                //objstr.Append("<EmailList>" + EmailList + "</EmailList>");
                //objstr.Append("<PhoneList>");
                //string PhoneList = "";
                //foreach (var phone in Contact.Descendants("ContactNumber"))
                //{
                //    PhoneList += "/" + phone.Value;
                //}
                //if (!string.IsNullOrWhiteSpace(PhoneList))
                //{
                //    PhoneList = PhoneList.Substring(1);
                //}
                //objstr.Append("<Phone>" + PhoneList + "</Phone>");
                //objstr.Append("</PhoneList>");
                //string faxlist = "";

                //foreach (var fax in Contact.Descendants("ContactNumber"))
                //{
                //    faxlist = "," + fax.Value;
                //}
                //if (!string.IsNullOrWhiteSpace(faxlist))
                //{
                //    faxlist = faxlist.Substring(1);
                //}
                //objstr.Append("<FaxList>" + faxlist + "</FaxList>");
                //string WebList = "";
                //foreach (var web in Contact.Descendants("Web"))
                //{
                //    WebList += "," + web.Value;
                //}
                //if (!string.IsNullOrWhiteSpace(WebList))
                //{
                //    WebList = WebList.Substring(1);
                //}

                //objstr.Append("<WebList>" + WebList + "</WebList>");
                //if (hotel.Elements("Position").Any())
                //{
                //    objstr.Append("<Position latitude='" + hotel.Element("Position").Attribute("latitude").Value +
                //                  "' longitude='" + hotel.Element("Position").Attribute("longitude").Value + "'/>");
                //}
                //objstr.Append("</HotelDetailsRS>");
                return true;
            }

            return false;

        }
        #endregion

        #region Reserve
        public string ServiceAdd()
        {
            CallingFunction = "ServiceAdd";
            var xmlRequest = new StringBuilder();
            var rnd = new Random();
            EchoToken = rnd.Next(1000, 154555).ToString();
            //****group.RoomTypeCode= room type ; room code ; room characteristic
            //****group.RatePlanCode= SHRUI ; AdultCount ;  ChildCount; RoomCount; availToken; Contract; IncomingOffice ; DestinationCode; Amount
            AvailToken = RoomGroup[0].RatePlanCode.Split(';')[4];
            ContractName = RoomGroup[0].RatePlanCode.Split(';')[5];
            IncomingOfficeCode = RoomGroup[0].RatePlanCode.Split(';')[6];
            DestinationCode = RoomGroup[0].RatePlanCode.Split(';')[7].ToUpper();
            xmlRequest.Append("<ServiceAddRQ  echoToken='" + EchoToken +
                              "' xmlns='http://www.hotelbeds.com/schemas/2005/06/messages' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.hotelbeds.com/schemas/2005/06/messages ServiceAddRQ.xsd'>");
            xmlRequest.Append("<Language>ENG</Language>");
            xmlRequest.Append("<Credentials><User>" + HotelbedsUsername + "</User><Password>" + HotelbedsPassword +
                              "</Password></Credentials>");
            xmlRequest.Append("<Service availToken='" + AvailToken + "' xsi:type='ServiceHotel'>");
            xmlRequest.Append("<ContractList><Contract>");
            xmlRequest.Append("<Name>" + ContractName + "</Name> <IncomingOffice code='" + IncomingOfficeCode + "'/>");
            xmlRequest.Append("</Contract></ContractList>");
            xmlRequest.Append("<DateFrom date='" + CheckInDate + "'/> <DateTo date='" + CheckOutDate + "'/>");
            xmlRequest.Append("<HotelInfo xsi:type='ProductHotel'><Code>" + HotelInfoCode + "</Code><Destination type='" +
                              DestinationType + "' code='" + DestinationCode + "'/></HotelInfo>");

            int count = 0;
            var roomcount = RoomGroup.Select(t => t.RoomTypeCode).ToList();
            var roomtypcode = RoomGroup.Select(t => t.RatePlanCode).ToList();
            var BoardTypeCode = RoomGroup.Select(t => t.BoardTypeCode).ToList();
            var BoardType = RoomGroup.Select(t => t.BoardType).ToList();
            for (int i = 0; i < roomcount.Count; i++)
            {
                var rootype = roomcount[i].Split(';');
                var room = roomtypcode[i].Split(';');
                xmlRequest.Append("<AvailableRoom>");
                xmlRequest.Append("<HotelOccupancy>");
                xmlRequest.AppendFormat("<RoomCount>{0}</RoomCount>", room[3]);
                xmlRequest.Append("<Occupancy>");
                xmlRequest.AppendFormat("<AdultCount>{0}</AdultCount>", room[1]);
                xmlRequest.AppendFormat("<ChildCount>{0}</ChildCount>", room[2]);
                var pass = PaxCounts[count].Guest.ToList();
                if (int.Parse(room[2]) > 0)
                {
                    if (pass.Any(c => c.type == "CH"))
                    {
                        xmlRequest.Append("<GuestList>");
                        for (int k = 0; k < int.Parse(room[3]); k++)
                        {
                            pass = PaxCounts[count + k].Guest.ToList();
                            if (pass.Count(c => c.type == "CH") != int.Parse(room[2]))
                            {
                                pass = PaxCounts[count + k + 1].Guest.ToList();
                                if (pass.Count(c => c.type == "CH") != int.Parse(room[2]))
                                {
                                    pass = PaxCounts[count + k + 2].Guest.ToList();
                                }
                            }
                            if (pass.Where(c => c.type == "CH").ToList().Any())
                            {
                                foreach (var ad in pass.Where(c => c.type == "CH"))
                                {
                                    xmlRequest.AppendFormat("<Customer type='{0}'>", ad.type);
                                    xmlRequest.AppendFormat("<Age>{0}</Age>", ad.age);
                                    xmlRequest.Append("</Customer>");
                                }
                            }
                            else
                            {
                                pass = Rooms[count].Guest.ToList();
                                foreach (var ad in pass.Where(c => c.type == "CH"))
                                {
                                    xmlRequest.AppendFormat("<Customer type='{0}'>", ad.type);
                                    xmlRequest.AppendFormat("<Age>{0}</Age>", ad.age);
                                    xmlRequest.Append("</Customer>");
                                }
                            }

                        }

                        xmlRequest.Append("</GuestList>");
                    }
                }
                xmlRequest.Append("</Occupancy>");
                xmlRequest.Append("</HotelOccupancy>");
                xmlRequest.AppendFormat("<HotelRoom SHRUI='{0}'>", room[0]);
                xmlRequest.AppendFormat("<Board code='{0}' type='{1}'/>", BoardTypeCode[i], BoardType[i]);
                xmlRequest.AppendFormat("<RoomType characteristic='{0}' code='{1}' type='{2}'/>", rootype[2], rootype[1], rootype[0]);
                xmlRequest.Append("</HotelRoom>");
                xmlRequest.Append("</AvailableRoom>");
                //count += int.Parse(room[3]);
                count++;
            }
            xmlRequest.Append("</Service></ServiceAddRQ>");
            var request = xmlRequest.ToString();
            string response = "";
#pragma warning disable CS0219 // The variable 'result' is assigned but its value is never used
            bool result = false;//SendHttpWebRequest("POST", HotelbedsUrl, request, ref response, ref response);
#pragma warning restore CS0219 // The variable 'result' is assigned but its value is never used
            return response;
        }
        #endregion

        #region Confirm
        public string PurchaseConfirm()
        {
            CallingFunction = "PurchaseConfirm";
            var ad = PaxCounts[0].Guest.First(c => c.type == "AD");
            var rnd = new Random();

            EchoToken = rnd.Next(32000, 154555).ToString();
            var xmlRequest = new StringBuilder();
            xmlRequest.Append("<PurchaseConfirmRQ xmlns='http://www.hotelbeds.com/schemas/2005/06/messages' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.hotelbeds.com/schemas/2005/06/messages PurchaseConfirmRQ.xsd' echoToken='" +
                EchoToken + "'>");
            xmlRequest.Append("<Language>ENG</Language>");
            xmlRequest.Append("<Credentials><User>" + HotelbedsUsername + "</User><Password>" + HotelbedsPassword +
                              "</Password></Credentials>");
            xmlRequest.Append("<ConfirmationData purchaseToken='" + PurchaseToken + "'>");
            xmlRequest.Append("<Holder type='" + HolderType + "'> <Name>" + ad.firstname + "</Name> <LastName>" +
                              ad.lastname + "</LastName> </Holder>");
            xmlRequest.Append("<AgencyReference>" + AgencyReference + "</AgencyReference>");
            xmlRequest.Append("<ConfirmationServiceDataList>");
            xmlRequest.Append("<ServiceData xsi:type='ConfirmationServiceDataHotel' SPUI='" + Spui + "'>");
            xmlRequest.Append("<CustomerList>");
            int count = 1;
            foreach (var room in PaxCounts)
            {

                foreach (var add in room.Guest)
                {
                    xmlRequest.AppendFormat("<Customer type='{0}'>", add.type);
                    xmlRequest.AppendFormat("<CustomerId>{0}</CustomerId>", count);
                    xmlRequest.AppendFormat("<Age>{0}</Age>", add.age);
                    xmlRequest.AppendFormat("<Name>{0}</Name>", add.firstname);
                    xmlRequest.AppendFormat("<LastName>{0}</LastName>", add.lastname);
                    xmlRequest.Append("</Customer>");
                    count++;
                }

            }
            xmlRequest.Append("</CustomerList>");
            if (!string.IsNullOrWhiteSpace(SSR))
            {
                xmlRequest.Append("<CommentList>");
                xmlRequest.Append("<Comment type='SERVICE'>" + SSR + "</Comment>");
                xmlRequest.Append("<Comment type='INCOMING'>" + SSR + "</Comment>");
                xmlRequest.Append("</CommentList>");
            }
            xmlRequest.Append("</ServiceData></ConfirmationServiceDataList>");
            xmlRequest.Append("</ConfirmationData></PurchaseConfirmRQ>");
            var request = xmlRequest.ToString();
            var response = "";// GetResponse(request, 5);
            return response;
        }
        #endregion

        public bool ConfirmHotelResponse(string xmlRes, ConfirmHotelRQ ConfirmRQ, ref ConfirmHotelRS _ConfirmRS)
        {
#pragma warning disable CS0219 // The variable 'success' is assigned but its value is never used
            var success = "UnSuccess";
#pragma warning restore CS0219 // The variable 'success' is assigned but its value is never used
            string response = string.Empty;
            var helper = new HotelHelper();
            BookingRS _BookingRS = new BookingRS();
            try
            {
                if (xmlRes != null)
                {
                    XDocument xdoc = XDocument.Parse(xmlRes.ToString());
                    xdoc = XDocument.Parse(helper.RemoveXmlns(xdoc.ToString()));
                    if (!xdoc.Descendants("Error").Any())
                    {

                        string ResStatus = string.Empty;
                        if (xdoc.Descendants("Purchase").Any())
                        {
                            _BookingRS.StatusCode = xdoc.Descendants("Purchase").First().Attribute("purchaseToken").Value;
                        }
                        if (xdoc.Descendants("Purchase").Elements("Status").Any())
                        {
                            ResStatus = xdoc.Descendants("Purchase").Elements("Status").First().Value;
                        }
                        if (xdoc.Descendants("HotelReservation").Attributes("BookingConfirmation").Any())
                        {
                            _BookingRS.ConfirmationRef = xdoc.Descendants("IncomingOffice").First().Attribute("code").Value + "-" + xdoc.Descendants("FileNumber").First().Value;
                            // _BookingRS.BookingRef = xdoc.Descendants("IncomingOffice").First().Attribute("code").Value + "-" + xdoc.Descendants("FileNumber").First().Value;
                        }
                        if (ResStatus.ToUpper() == "BOOKING")
                        {
                            success = "Success";
                            _BookingRS.BookingStatus = "Reservation confirmed and paid";
                        }
                        //else if (ResStatus.ToUpper() == "UN")
                        //{
                        //    success = "UnSuccess";
                        //    _BookingRS.BookingStatus = "Error Code: Fair is expired please book any other hotel";
                        //}
                        else
                        {
                            success = "UnSuccess";
                            _BookingRS.BookingStatus = "Error Code: Internal error from supplier end please contact support team";
                        }
                        List<BookingRS> _Book = new List<BookingRS>();
                        _Book.Add(_BookingRS);
                        _ConfirmRS.BookingRS = _Book;
                        _ConfirmRS.ErrorMsg = "";
                        return true;
                    }
                    else
                    {
                        var error = string.Empty;
                        List<BookingRS> _Book = new List<BookingRS>();
                        if (xdoc.Descendants("Error").Any())
                        {
                            success = "UnSuccess";
                            _BookingRS.BookingStatus = "Error Code: " + error;
                            _Book.Add(_BookingRS);
                        }
                        _ConfirmRS.BookingRS = _Book;
                        _ConfirmRS.Status = false;
                        _ConfirmRS.ErrorMsg = _BookingRS.BookingStatus;
                        return false;
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                _ConfirmRS.Status = false;
                _ConfirmRS.ErrorMsg = ex.Message.ToString();
                return false;
            }
        }

        #region Cancelation
        internal string Cancellation()
        {
            var xmlRequest = new StringBuilder();
            xmlRequest.Append("<PurchaseCancelRQ xmlns='http://www.hotelbeds.com/schemas/2005/06/messages' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://www.hotelbeds.com/schemas/2005/06/messages PurchaseCancelRQ.xsd' type='C'>");
            xmlRequest.Append("<Language>ENG</Language>");
            xmlRequest.Append("<Credentials><User>" + HotelbedsUsername + "</User><Password>" + HotelbedsPassword + "</Password></Credentials>");
            xmlRequest.Append("<PurchaseReference> <FileNumber>" + FileNumber + "</FileNumber> <IncomingOffice code='" + IncomingOfficeCode + "'/> </PurchaseReference>");
            xmlRequest.Append("</PurchaseCancelRQ>");
            var request = xmlRequest.ToString();
            var foldername = DateTime.Now.ToString("hh-mm-ss-tt");
            foldername = userkey + "-" + foldername;
            string response = "";
            bool result = SendHttpWebRequest("POST", HotelbedsUrl, request, ref response, ref response); ;
            return response;
        }
        #endregion
    }
}