using HotelService;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Models;
using System.Globalization;
using System.Reflection;

namespace WXYZ_HotelService
{
    internal class UAPIHotel
    {
        #region Properties
        internal string UserName { get; set; }
        internal string Password { get; set; }
        internal string BranchCode { get; set; }
        internal string UAPIPCC { get; set; }
        internal string UAPIUrl { get; set; }
        internal string GDSCODE { get; set; }
        internal string NRReference { get; set; }
        internal string Destination { get; set; }
        internal string CheckIn { get; set; }
        internal string CheckOut { get; set; }
        internal string Currency { get; set; }
        internal int Maxlimit { get; set; }
        internal string HotelId { get; set; }
        public List<PaxCount> PaxCounts { get; set; }
        internal List<Room> Room { get; set; }
        internal List<SearchRoom> SearchRooms { get; set; }
        internal GuestInformation GuestInformation { get; set; }
        internal CreditCard CreditCard { get; set; }
        internal string SSR { get; set; }
        internal int AdultCount { get; set; }
        internal int ChildCount { get; set; }
        internal int InfantCount { get; set; }
        internal int RoomCount { get; set; }
        internal string FileName { get; set; }
        internal string SessionId { get; set; }
        internal string RateSupplier { get; set; }
        internal string RatePlanType { get; set; }
        internal string BasePrice { get; set; }
        internal string cardpayment { get; set; }
        internal string roomTypeCode { get; set; }
        internal string allocationDetails { get; set; }
        internal string Nationality { get; set; }
        internal string Residence { get; set; }
        internal string TRMKey { get; set; }
        internal string HotelChain { get; set; }
        internal string Email { get; set; }
        internal string BookingId { get; set; }
        internal string ConfirmNumber { get; set; }
        internal string CancellationReason { get; set; }
        internal string BRN { get; set; }
        internal string Mode { get; set; }
        internal string CardPType { get; set; }
        internal string CardType { get; set; }
        internal string CardHolderName { get; set; }
        internal string CardNumber { get; set; }
        internal string CardExpirationYear { get; set; }
        internal string CardExpirationMonth { get; set; }
        internal string CardIdentifier { get; set; }
        internal string BankName { get; set; }
        internal string TraceId { get; set; }
        internal string SeqNumber { get; set; }
        internal Property Property { get; set; }
        internal RoomRQ RoomRQ { get; set; }
        #endregion

        #region UAPI HOTEL Methods

        //START

        #region UAPIHotel
        /// <summary>
        /// 
        /// </summary>
        /// <param name="source"></param>
        /// <param name="destination"></param>
        /// <param name="doj"></param>
        /// <param name="dor"></param>
        /// <returns></returns>
        public UAPIHotel()
        {
            //
            // TODO: Add constructor logic here
            //
            Currency = "INR";
            Maxlimit = 1000;
            GDSCODE = "TRM";
        }
        #endregion

        #region HotelSearch
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public string HotelSearchRest(HotelSearchRQ HotelRQ, string SupplierId, string SupplierName, Property objProp)
        {
            var strXmlReq = new StringBuilder();
            var helper = new HotelHelper();
            TraceId = Guid.NewGuid().ToString();
            strXmlReq.AppendFormat("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
            strXmlReq.AppendFormat("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">");
            strXmlReq.AppendFormat("<soapenv:Header/>");
            strXmlReq.AppendFormat("<soapenv:Body>");
            strXmlReq.AppendFormat("<hotel:HotelSearchAvailabilityReq AuthorizedBy='user' TargetBranch='{0}' TraceId='{1}' xmlns:hotel='http://www.travelport.com/schema/hotel_v43_0' xmlns:common='http://www.travelport.com/schema/common_v43_0' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>", BranchCode, TraceId);
            strXmlReq.AppendFormat("<common:BillingPointOfSaleInfo OriginApplication=\"UAPI\"/>");
            strXmlReq.AppendFormat("<hotel:HotelSearchLocation>");
            strXmlReq.AppendFormat("<hotel:HotelLocation Location=\"{0}\" LocationType=\"City\"/>", Destination);
            strXmlReq.AppendFormat("</hotel:HotelSearchLocation>");

            ChildCount = 0;
            AdultCount = 0;
            RoomCount = 0;
            InfantCount = 0;
            var strXmlChd = new StringBuilder();
            strXmlChd.AppendFormat("<hotel:BookingGuestInformation>");
            foreach (var room in SearchRooms)
            {
                AdultCount = room.AD;
                ChildCount = room.CH;
                int ChildAge = 0;
                InfantCount = 0;
                RoomCount = 0;
                strXmlChd.AppendFormat("<hotel:Room>");
                strXmlChd.AppendFormat("<hotel:Adults>" + AdultCount + "</hotel:Adults>");

                if (ChildCount > 0)
                {
                    foreach (var child in room.CHAge)
                    {
                        ChildAge = Convert.ToInt32(child);
                        if (ChildAge > 1)
                        {
                            strXmlChd.AppendFormat("<hotel:Child Age='{0}'/>", child);
                            ChildCount++;
                        }
                        else
                        {
                            InfantCount++;
                        }
                    }

                }
                strXmlChd.AppendFormat("</hotel:Room>");
                RoomCount++;
            }
            strXmlChd.AppendFormat("</hotel:BookingGuestInformation>");
            strXmlReq.AppendFormat("<hotel:HotelSearchModifiers NumberOfAdults=\"{2}\" NumberOfRooms=\"{3}\" AvailableHotelsOnly='false' MaxProperties='{0}' ReturnAmenities='true' ReturnPropertyDescription='true' PreferredCurrency=\"{1}\">", Maxlimit, Currency, AdultCount, RoomCount);
            strXmlReq.AppendFormat("<common:PermittedProviders>");
            strXmlReq.AppendFormat("<common:Provider Code=\"{0}\"/>", GDSCODE);
            strXmlReq.AppendFormat("</common:PermittedProviders>");
            strXmlReq.AppendFormat("{0}", strXmlChd.ToString());
            strXmlReq.AppendFormat("</hotel:HotelSearchModifiers>");

            strXmlReq.AppendFormat("<hotel:HotelStay>");
            strXmlReq.AppendFormat("<hotel:CheckinDate>{0}</hotel:CheckinDate>", CheckIn);
            strXmlReq.AppendFormat("<hotel:CheckoutDate>{0}</hotel:CheckoutDate>", CheckOut);
            strXmlReq.AppendFormat("</hotel:HotelStay>");

            strXmlReq.AppendFormat("</hotel:HotelSearchAvailabilityReq>");
            strXmlReq.AppendFormat("</soapenv:Body>");
            strXmlReq.AppendFormat("</soapenv:Envelope>");
            var request = strXmlReq.ToString();
            #region Request Log -> Supplier
            string LogData = "<EVENT><SEARCHAVAILREQUESTDATA>" + helper.RemoveXmlns(request.ToString()).ToString() + "</SEARCHAVAILREQUESTDATA>"
                             + "<URL>" + UAPIUrl + "</URL>"
                             + "<USERNAME>" + UserName + "</USERNAME>"
                             + "<PASSWORD>" + Password + "</PASSWORD>"
                             + "<VENDOR>" + SupplierName + "</VENDOR>"
                             + "<BRANCHCODE>" + BranchCode + "</BRANCHCODE>"
                             + "<CURRENCY>" + objProp.Currency + "</CURRENCY>"
                             + "</EVENT>";
            SQLAccess.Insert_Action_LogDetails("HOTEL", HotelRQ.AgentDetails, "F", GetType().Name, "HotelSearch", LogData, SupplierId.ToString(), TraceId.ToString());
            #endregion

            var response = SendRequest(request);
            if (response == null)
            {
                response = SendRequest(request);
            }
            #region Response Log <- Supplier
            LogData = "<EVENT><SEARCHAVAILRESPONSEDATA>" + helper.RemoveXmlns(response.ToString()).ToString() + "</SEARCHAVAILRESPONSEDATA></EVENT>";
            SQLAccess.Insert_Action_LogDetails("HOTEL", HotelRQ.AgentDetails, "F", GetType().Name, "HotelSearch", LogData, SupplierId.ToString(), TraceId.ToString());
            #endregion
            var response_New = GenerateHotelId(response);
            //INSERT LOG INTO LTBL_TRM_API_LOG_DETAILS START
            LTBL_TRM_API_LOG_DETAILS objLTBL_TRM_API_LOG_DETAILS = new LTBL_TRM_API_LOG_DETAILS();
            objLTBL_TRM_API_LOG_DETAILS.TRACEID = TraceId;
            objLTBL_TRM_API_LOG_DETAILS.XML = response_New;
            objLTBL_TRM_API_LOG_DETAILS.METHOD = "INSERT";
            objLTBL_TRM_API_LOG_DETAILS.INSERT_LTBL_TRM_API_LOG_DETAILS();
            var finalRes = HotelSearchResponseNew(HotelRQ, response, SupplierId, SupplierName).Replace("&", "&amp;");
            return finalRes;
        }
        #endregion

        #region GenerateHotelId
        /// <summary>
        /// 
        /// </summary>
        /// <param name="StrxmlRes"></param>
        /// <returns></returns>
        public string GenerateHotelId(string StrxmlRes)
        {
            var doc = new XDocument();
            try
            {
                var helper = new HotelHelper();
                doc = XDocument.Parse(helper.RemoveXmlns(StrxmlRes.ToString()));
                var count = 1;
                foreach (var htl in doc.Descendants("HotelSearchResult"))
                {
                    var xa = new XElement("xId", "HT" + count);
                    var NRR = new XElement("NRR", "HT" + count);
                    htl.Add(xa);
                    htl.Add(NRR);
                    count++;
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
            return doc.ToString();
        }
        #endregion

        #region HotelSearchResponse
        /// <summary>
        /// 
        /// </summary>
        /// <param name="StrxmlRes"></param>
        /// <returns></returns>
        private string HotelSearchResponse(string StrxmlRes)
        {
            var helper = new HotelHelper();
            var doc = XDocument.Parse(helper.RemoveXmlns(StrxmlRes.ToString()));
            var objstr = new StringBuilder();
            try
            {
                if (!doc.Descendants("ErrorInfo").Any())
                {
                    objstr.Append("<HotelSearchRS>");
                    var count = 1;
                    FileName = helper.Log(StrxmlRes, doc.Descendants("HotelSearchAvailabilityRsp").Attributes("TransactionId").FirstOrDefault().Value.ToString());
                    var StartCurrency = string.Empty;
                    foreach (var htl in doc.Descendants("HotelSearchResult"))
                    {
                        foreach (var RateInfo in htl.Descendants("RateInfo").Where(x => x.Attribute("RateSupplier").Value.ToUpper() != "HW"))
                        {
                            objstr.Append("<Hotel>");
                            //objstr.AppendFormat("<xId>{0}</xId>", htl.Descendants("xId").FirstOrDefault().Value);
                            //objstr.AppendFormat("<NRReference>{0}</NRReference>", htl.Descendants("NRR").FirstOrDefault().Value);
                            objstr.AppendFormat("<xId>{0}</xId>", "HT" + count);
                            objstr.AppendFormat("<NRReference>{0}</NRReference>", "HT" + count);
                            objstr.AppendFormat("<HotelId>{0}</HotelId>", htl.Descendants("HotelProperty").Attributes("HotelCode").FirstOrDefault().Value);
                            objstr.Append("<VendorId>UAPI</VendorId>");
                            objstr.AppendFormat("<SessionId>{0}</SessionId>", FileName.Replace(".xml", ""));
                            objstr.AppendFormat("<HotelName>{0}</HotelName>", htl.Descendants("HotelProperty").Attributes("Name").FirstOrDefault().Value);
                            objstr.AppendFormat("<HotelCode>{0}</HotelCode>", htl.Descendants("HotelProperty").Attributes("HotelCode").FirstOrDefault().Value);
                            objstr.AppendFormat("<RateSupplier>{0}</RateSupplier>", RateInfo.Attributes("RateSupplier").FirstOrDefault().Value);
                            var StartAmountCurrency = string.Empty;
                            if (RateInfo.Attributes("ApproximateMinimumStayAmount").Any())
                            {
                                StartAmountCurrency = RateInfo.Attributes("ApproximateMinimumStayAmount").FirstOrDefault().Value.ToString();
                            }
                            else if (RateInfo.Attributes("MinimumStayAmount").Any())
                            {
                                StartAmountCurrency = RateInfo.Attributes("MinimumStayAmount").FirstOrDefault().Value.ToString();
                            }


                            if (StartCurrency == "")
                            {
                                var listOfStrings = new List<string> { "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SPL*", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWD" };
                                foreach (var curr in listOfStrings)
                                {
                                    if (StartAmountCurrency.Contains(curr))
                                    {
                                        StartCurrency = curr;
                                    }
                                    if (StartCurrency != "")
                                    {
                                        break;
                                    }
                                }
                            }
                            var StartAmount = StartAmountCurrency.Replace(StartCurrency, "");

                            objstr.AppendFormat("<Currency>{0}</Currency>", StartCurrency);
                            if (htl.Descendants("HotelRating").Any())
                            {
                                objstr.AppendFormat("<Rating>{0}</Rating>", htl.Descendants("HotelRating").Descendants("Rating").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<Rating>{0}</Rating>", 2);
                            }
                            if (htl.Descendants("MediaItem").Any())
                            {
                                objstr.AppendFormat("<Images>{0}</Images>", htl.Descendants("MediaItem").Attributes("url").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<Images>{0}</Images>", "");
                            }
                            var adrcount = 0;
                            foreach (var address in htl.Descendants("PropertyAddress").Descendants("Address"))
                            {
                                if (adrcount == 0)
                                {
                                    objstr.AppendFormat("<Area>{0}</Area>", address.Value);
                                }
                                if (adrcount == 1)
                                {
                                    objstr.AppendFormat("<City>{0}</City>", address.Value);
                                }
                                if (adrcount == 2)
                                {
                                    objstr.AppendFormat("<PostalCode>{0}</PostalCode>", address.Value);
                                }
                                adrcount++;
                            }
                            objstr.AppendFormat("<Address>{0}</Address>", htl.Descendants("PropertyAddress").Descendants("Address").FirstOrDefault().Value);
                            objstr.AppendFormat("<Category>{0}</Category>", "");
                            if (htl.Descendants("CoordinateLocation").Any())
                            {
                                objstr.AppendFormat("<Position Latitude='{0}' Longitude='{1}'/>", htl.Descendants("CoordinateLocation").Attributes("latitude").FirstOrDefault().Value, htl.Descendants("CoordinateLocation").Attributes("longitude").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<Position Latitude='{0}' Longitude='{1}'/>", 0, 0);
                            }

                            //after certification purpose
                            //////////if (htl.Descendants("RateInfo").Attributes("ApproximateMinimumAmount").Any())
                            //////////{
                            //////////    objstr.AppendFormat("<StartAmount>{0}</StartAmount>", htl.Descendants("RateInfo").Attributes("ApproximateMinimumAmount").FirstOrDefault().Value.ToString().Replace(Currency, ""));
                            //////////}
                            //////////else
                            //////////{
                            //////////    objstr.AppendFormat("<StartAmount>{0}</StartAmount>", htl.Descendants("RateInfo").Attributes("MinimumAmount").FirstOrDefault().Value.ToString().Replace(Currency, ""));
                            //////////}

                            //while certification purpose

                            objstr.AppendFormat("<StartAmount>{0}</StartAmount>", StartAmount);


                            objstr.Append("<HotelAmenities>");
                            foreach (var amenity in htl.Descendants("Amenity").Where(c => c.Attribute("AmenityType").Value == "HA"))
                            {
                                objstr.AppendFormat("<Amenity>{0}</Amenity>", GetAmenities(amenity.Attribute("Code").Value, amenity.Attribute("AmenityType").Value));
                            }
                            objstr.Append("</HotelAmenities>");

                            objstr.Append("<BedAmenities>");
                            foreach (var amenity in htl.Descendants("Amenity").Where(c => c.Attribute("AmenityType").Value.ToUpper() == "BT"))
                            {
                                objstr.AppendFormat("<Amenity>{0}</Amenity>", GetAmenities(amenity.Attribute("Code").Value, amenity.Attribute("AmenityType").Value));
                            }
                            objstr.Append("</BedAmenities>");

                            objstr.Append("<RoomAmenities>");
                            foreach (var amenity in htl.Descendants("Amenity").Where(c => c.Attribute("AmenityType").Value.ToUpper() == "RA"))
                            {
                                objstr.AppendFormat("<Amenity>{0}</Amenity>", GetAmenities(amenity.Attribute("Code").Value, amenity.Attribute("AmenityType").Value));
                            }
                            objstr.Append("</RoomAmenities>");

                            objstr.Append("<RoomClassAmenities>");
                            foreach (var amenity in htl.Descendants("Amenity").Where(c => c.Attribute("AmenityType").Value.ToUpper() == "RC"))
                            {
                                objstr.AppendFormat("<Amenity>{0}</Amenity>", GetAmenities(amenity.Attribute("Code").Value, amenity.Attribute("AmenityType").Value));
                            }
                            objstr.Append("</RoomClassAmenities>");

                            objstr.Append("<TransportAmenities>");
                            foreach (var amenity in htl.Descendants("Amenity").Where(c => c.Attribute("AmenityType").Value.ToUpper() == "TR"))
                            {
                                objstr.AppendFormat("<Amenity>{0}</Amenity>", GetAmenities(amenity.Attribute("Code").Value, amenity.Attribute("AmenityType").Value));
                            }
                            objstr.Append("</TransportAmenities>");

                            if (htl.Descendants("PropertyDescription").Any())
                            {
                                objstr.AppendFormat("<PropertyDescription>{0}</PropertyDescription>", htl.Descendants("PropertyDescription").FirstOrDefault().Value);
                            }

                            objstr.Append("<RoomGroup>");
                            objstr.Append("<Rooms>");
                            objstr.Append("<Room>");
                            objstr.Append("<Supplier>uapi</Supplier>");
                            //after certification purpose
                            //////////if (htl.Descendants("RateInfo").Attributes("ApproximateMinimumAmount").Any())
                            //////////{
                            //////////    objstr.AppendFormat("<Amount>{0}</Amount>", htl.Descendants("RateInfo").Attributes("ApproximateMinimumAmount").FirstOrDefault().Value.ToString().Replace(Currency, ""));
                            //////////}
                            //////////else
                            //////////{
                            //////////    objstr.AppendFormat("<Amount>{0}</Amount>", htl.Descendants("RateInfo").Attributes("MinimumAmount").FirstOrDefault().Value.ToString().Replace(Currency, ""));
                            //////////}

                            //while certification purpose
                            objstr.AppendFormat("<Amount>{0}</Amount>", StartAmount);


                            if (RateInfo.Attributes("RateSupplier").Any())
                            {
                                objstr.AppendFormat("<RateSupplier>{0}</RateSupplier>", RateInfo.Attributes("RateSupplier").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<RateSupplier>{0}</RateSupplier>", "");
                            }

                            if (RateInfo.Attributes("RateSupplierLogo").Any())
                            {
                                objstr.AppendFormat("<RateSupplierLogo>{0}</RateSupplierLogo>", RateInfo.Attributes("RateSupplierLogo").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<RateSupplierLogo>{0}</RateSupplierLogo>", "");
                            }

                            if (RateInfo.Attributes("PaymentType").Any())
                            {
                                objstr.AppendFormat("<PaymentType>{0}</PaymentType>", RateInfo.Attributes("PaymentType").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<PaymentType>{0}</PaymentType>", "");
                            }

                            if (RateInfo.Attributes("RateSupplier").Any())
                            {
                                objstr.AppendFormat("<RateSupplier>{0}</RateSupplier>", RateInfo.Attributes("RateSupplier").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<RateSupplier>{0}</RateSupplier>", "");
                            }

                            if (RateInfo.Attributes("RateSupplier").Any())
                            {
                                objstr.AppendFormat("<RateSupplier>{0}</RateSupplier>", RateInfo.Attributes("RateSupplier").FirstOrDefault().Value);
                            }
                            else
                            {
                                objstr.AppendFormat("<RateSupplier>{0}</RateSupplier>", "");
                            }

                            objstr.AppendFormat("<AdultCount>{0}</AdultCount>", AdultCount);
                            objstr.AppendFormat("<ChildCount>{0}</ChildCount>", ChildCount);
                            objstr.AppendFormat("<InfantCount>{0}</InfantCount>", InfantCount);
                            objstr.Append("</Room>");
                            objstr.Append("</Rooms>");
                            objstr.Append("</RoomGroup>");
                            objstr.Append("</Hotel>");
                            count++;
                        }
                    }
                    objstr.Append("</HotelSearchRS>");
                }
                else
                {
                    var error = string.Empty;
                    if (doc.Descendants("ErrorInfo").Any())
                    {
                        foreach (var err in doc.Descendants("ErrorInfo"))
                        {
                            error = error + "Code: " + err.Element("Code").Value;
                            error = error + "Service: " + err.Element("Service").Value;
                            error = error + "Type: " + err.Element("Type").Value;
                            error = error + "Description: " + err.Element("Description").Value;
                        }
                    }
                    objstr.Append("<Issue id='1989'>" + error + "</Issue>");
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {

            }
            return objstr.ToString();
        }
        public string HotelSearchResponseNew(HotelSearchRQ HotelRQ, string StrxmlRes, string SupplierId, string SupplierName)
        {
            var helper = new HotelHelper();
            var doc = XDocument.Parse(helper.RemoveXmlns(StrxmlRes.ToString()));
            #region Fetch Bus Supplier Markup & Commission
            var CHin = HotelRQ.CheckIn.Split('-');
            Hashtable hsh_param = new Hashtable();
            hsh_param.Add("BRANCHID", HotelRQ.AgentDetails.BranchID);
            hsh_param.Add("AGENTID", HotelRQ.AgentDetails.AgentID);
            hsh_param.Add("SUPPID", SupplierId);
            hsh_param.Add("BOOKEDDATE", DateTime.Now.ToString("yyyyMMdd"));
            hsh_param.Add("DEPARTUREDATE", (CHin[2] + CHin[1] + CHin[0]).ToString());
            DataSet dsMarkUpCommission = new DataSet();
            dsMarkUpCommission = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_API_HOTEL_MARKUP_COMMISSION, hsh_param, DataBase.APP.ToString());

            #endregion
            string JsonResult = string.Empty;
            List<HotelDetails> _Hotels = new List<HotelDetails>();
            List<XElement> xele = new List<XElement>();
            try
            {
                #region RETURN ON EQUITY ( ROE )
                DataSet dsCurrencyAmt = new DataSet();
                string TCurrency = Regex.Replace(doc.Descendants("HotelSearchResult").FirstOrDefault().Element("RateInfo").Attribute("ApproximateMinimumStayAmount").Value, "[^A-Z]", "");
                string FareCurreny = "1";
                if (HotelRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper() != TCurrency.ToString().Trim().ToUpper())
                {
                    string CurrenyErrorMsg = string.Empty;
                    dsCurrencyAmt = SQLAccess.Fetch_API_Currency_Details(HotelRQ.AgentDetails, "", TCurrency, HotelRQ.AgentDetails.CurrencyCode.ToString(), ref CurrenyErrorMsg);
                    if (dsCurrencyAmt == null || dsCurrencyAmt.Tables.Count == 0 || dsCurrencyAmt.Tables[0].Rows.Count == 0)
                    {
                        return "Problem occured while fetching currency details.Please contact customare care.-#03";
                    }
                    FareCurreny = dsCurrencyAmt.Tables[0].Rows[0]["ROE_TO_AMOUNT"].ToString().Trim();
                }
                #endregion


                if (!doc.Descendants("ErrorInfo").Any())
                {
#pragma warning disable CS0219 // The variable 'count' is assigned but its value is never used
                    var count = 1;
#pragma warning restore CS0219 // The variable 'count' is assigned but its value is never used
                    FileName = helper.Log(StrxmlRes, doc.Descendants("HotelSearchAvailabilityRsp").Attributes("TransactionId").FirstOrDefault().Value.ToString());
                    List<XElement> HotelSearchResultlst = new List<XElement>();

                    foreach (var HTL in doc.Descendants("HotelSearchResult"))
                    {
                        HotelDetails HTLdt = new HotelDetails();
                        HTLdt.TraceID = TraceId;
                        HTLdt.Supplier = GDSCODE;
                        HTLdt.GHotelId = "TRM-" + HTL.Element("HotelProperty").Attributes("HotelCode").FirstOrDefault().Value;
                        HTLdt.HotelKey = (HTL.Element("HotelProperty").Attributes("VendorLocationKey").Any() && HTL.Element("HotelProperty").Attributes("VendorLocationKey").FirstOrDefault().Value != null) ? HTL.Element("HotelProperty").Attributes("VendorLocationKey").FirstOrDefault().Value : "";
                        HTLdt.HotelID = HTL.Element("HotelProperty").Attributes("HotelCode").FirstOrDefault().Value;
                        HTLdt.HotelChain = HTL.Element("HotelProperty").Attributes("HotelChain").FirstOrDefault().Value;
                        HTLdt.HotelName = HTL.Element("HotelProperty").Attributes("Name").FirstOrDefault().Value;
                        HTLdt.NoOfRooms = "";
                        HTLdt.FullAddress = HTL.Element("HotelProperty").Element("PropertyAddress") != null ? HTL.Element("HotelProperty").Element("PropertyAddress").Element("Address").Value : "";
                        HTLdt.Lng = HTL.Element("HotelProperty").Element("CoordinateLocation").Attribute("longitude").Value;
                        HTLdt.Lat = HTL.Element("HotelProperty").Element("CoordinateLocation").Attribute("latitude").Value;
                        HTLdt.ImgUrl = HTL.Element("MediaItem") != null ? HTL.Element("MediaItem").Attribute("url").Value : "";
                        HTLdt.HotelPhone = "";
                        HTLdt.Rating = HTL.Element("HotelProperty").Element("HotelRating").Element("Rating") != null ? HTL.Element("HotelProperty").Element("HotelRating").Element("Rating").Value : "0";
                        HTLdt.MapLink = "";
                        HTLdt.Description = HTL.Element("PropertyDescription") != null ? HTL.Element("PropertyDescription").Value : "";
                        HTLdt.Amenities = (from ame in (HTL.Element("HotelProperty").Element("Amenities") == null ? xele : HTL.Element("HotelProperty").Element("Amenities").Descendants("Amenity"))
                                           select new Amenitie
                                              {
                                                  Name = GetAmenities(ame.Attribute("Code").Value, ame.Attribute("AmenityType").Value),
                                                  ID = ame.Attribute("Code").Value
                                              }).ToList();
                        HTLdt.Room = null;
                        HTLdt.Location = HTL.Element("HotelProperty").Element("PropertyAddress") != null ? HTL.Element("HotelProperty").Element("PropertyAddress").Element("Address").Value : "";
                        HTLdt.Currency = HotelRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper();//Currency
                        HTLdt.Checkin = CheckIn;
                        HTLdt.CheckOut = CheckOut;
                        HTLdt.Status = HTL.Element("HotelProperty").Attribute("Availability").Value;
                        HTLdt.Category = HTL.Element("RateInfo").Attribute("RateSupplier").Value;
                        HTLdt.StartAmount = (Convert.ToDecimal(Regex.Replace(HTL.Element("RateInfo").Attribute("ApproximateMinimumStayAmount").Value, "[^.0-9]", "")) * Convert.ToDecimal(FareCurreny)).ToString();

                        string MarkUpAmt = "0";
                        string CommissionAmt = "0";
                        bool ComMarkUpdt = Calculation.CalcCommAndMarkup(HotelRQ.AgentDetails, HTLdt.StartAmount, ref MarkUpAmt, ref CommissionAmt, dsMarkUpCommission);

                        HTLdt.MarkUpAmt = MarkUpAmt;
                        HTLdt.CommissionAmt = CommissionAmt;
                        HTLdt.TotalGrossAmount = (Convert.ToDecimal(HTLdt.StartAmount) + Convert.ToDecimal(MarkUpAmt) - Convert.ToDecimal(CommissionAmt)).ToString();
                        HTLdt.Supplier_Id = SupplierId.ToString();
                        _Hotels.Add(HTLdt);
                    }
                    JsonResult = JsonConvert.SerializeObject(_Hotels);
                }
                else
                {
                    var error = string.Empty;
                    if (doc.Descendants("ErrorInfo").Any())
                    {
                        foreach (var err in doc.Descendants("ErrorInfo"))
                        {
                            error = error + "Code: " + err.Element("Code").Value;
                            error = error + "Service: " + err.Element("Service").Value;
                            error = error + "Type: " + err.Element("Type").Value;
                            error = error + "Description: " + err.Element("Description").Value;
                        }
                    }
                    //objstr.Append("<Issue id='1989'>" + error + "</Issue>");
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", HotelRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), SupplierId.ToString(), TraceId.ToString());
            }

            return JsonResult;
        }
        #endregion

        #region HotelDetailsRest
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public bool HotelDetailsRest(ref StayRS objStayRS, RoomRQ RoomRq, Property objProp)
        {
            var xdoc = new XDocument();
            var helper = new HotelHelper();
            var strXmlReq = new StringBuilder();
            strXmlReq.AppendFormat("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
            strXmlReq.AppendFormat("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">");
            strXmlReq.AppendFormat("<soapenv:Header/>");
            strXmlReq.AppendFormat("<soapenv:Body>");
            strXmlReq.AppendFormat("<hotel:HotelDetailsReq AuthorizedBy='user' ReturnGuestReviews='true' ReturnMediaLinks='true' TargetBranch='{0}' TraceId='trace' xmlns:hotel='http://www.travelport.com/schema/hotel_v43_0' xmlns:common='http://www.travelport.com/schema/common_v43_0' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>", BranchCode);
            strXmlReq.AppendFormat("<common:BillingPointOfSaleInfo OriginApplication=\"UAPI\"/>");
            var HotelCode = RoomRQ.HotelCode;
            var HotelChain = RoomRQ.HotelChain;
            var HotelLocation = string.Empty;
            var Name = string.Empty;
            strXmlReq.AppendFormat("<hotel:HotelProperty HotelChain=\"{1}\" HotelCode=\"{0}\" />", HotelCode, HotelChain);
            ChildCount = 0;
            AdultCount = 0;
            RoomCount = 0;
            InfantCount = 0;
            var strXmlChd = new StringBuilder();
            strXmlChd.AppendFormat("<hotel:BookingGuestInformation>");
            foreach (var room in RoomRQ.Room)
            {
                strXmlChd.AppendFormat("<hotel:Room>");
                strXmlChd.AppendFormat("<hotel:Adults>" + room.AD + "</hotel:Adults>");
                AdultCount = room.AD;
                if (room.CH > 0)
                {
                    foreach (var child in room.CHAge)
                    {
                        if (child > 1)
                        {
                            strXmlChd.AppendFormat("<hotel:Child Age='{0}'/>", child);
                            ChildCount++;
                        }
                        else
                        {
                            InfantCount++;
                        }
                    }

                }
                strXmlChd.AppendFormat("</hotel:Room>");
                RoomCount++;
            }
            strXmlChd.AppendFormat("</hotel:BookingGuestInformation>");

            //this is after certification with currency
            strXmlReq.AppendFormat("<hotel:HotelDetailsModifiers NumberOfAdults=\"{0}\" NumberOfRooms=\"{1}\" PreferredCurrency=\"{2}\" RateRuleDetail=\"Complete\">", AdultCount, RoomCount, Currency);
            strXmlReq.AppendFormat("<common:PermittedProviders>");
            strXmlReq.AppendFormat("<common:Provider Code=\"{0}\"/>", GDSCODE);
            strXmlReq.AppendFormat("</common:PermittedProviders>");

            strXmlReq.AppendFormat("<hotel:HotelStay>");
            strXmlReq.AppendFormat("<hotel:CheckinDate>{0}</hotel:CheckinDate>", CheckIn);
            strXmlReq.AppendFormat("<hotel:CheckoutDate>{0}</hotel:CheckoutDate>", CheckOut);
            strXmlReq.AppendFormat("</hotel:HotelStay>");

            strXmlReq.AppendFormat("<hotel:PermittedAggregators>");
            strXmlReq.AppendFormat("<hotel:Aggregator Name='{0}'></hotel:Aggregator>", RoomRQ.RateSupplier);
            strXmlReq.AppendFormat("</hotel:PermittedAggregators>");

            strXmlReq.AppendFormat("{0}", strXmlChd.ToString());

            strXmlReq.AppendFormat("</hotel:HotelDetailsModifiers>");
            strXmlReq.AppendFormat("</hotel:HotelDetailsReq>");
            strXmlReq.AppendFormat("</soapenv:Body>");
            strXmlReq.AppendFormat("</soapenv:Envelope>");

            var request = strXmlReq.ToString();
            #region Request Log -> Supplier
            string LogData = "<EVENT><REQUESTDATA>" + request.ToString() + "</REQUESTDATA>"
                            + "<URL>" + objProp.Url + "</URL>"
                            + "<USERNAME>" + objProp.Username + "</USERNAME>"
                            + "<PASSWORD>" + objProp.Password + "</PASSWORD>"
                            + "<VENDOR>" + RoomRq.Supplier + "</VENDOR>"
                            + "<BRANCHCODE>" + objProp.ApiKey + "</BRANCHCODE>"
                            + "<CURRENCY>" + objProp.Currency + "</CURRENCY>"
                            + "</EVENT>";
            SQLAccess.Insert_Action_LogDetails("HOTEL", RoomRq.AgentDetails, "F", GetType().Name, "TRM_ROOM", LogData, RoomRq.SupplierId.ToString(), RoomRq.TraceId.ToString());
            #endregion
            var response = SendRequest(request.ToString().Replace("&", "&amp;"));
            #region Response Log <- Supplier

            LogData = "<EVENT><RESPONSEDATA>" + response + "</RESPONSEDATA></EVENT>";
            SQLAccess.Insert_Action_LogDetails("HOTEL", RoomRq.AgentDetails, "F", GetType().Name, "TRM_ROOM", LogData, RoomRq.SupplierId.ToString(), RoomRq.TraceId.ToString());
            #endregion
            objStayRS = HotelRoomsResponseNew(response, RoomCount, AdultCount, ChildCount);
            if (objStayRS.Status == "00")
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        #endregion

        #region GetAmenities
        private string GetAmenities(string AmenCode)
        {
            string val = string.Empty;
            switch (AmenCode)
            {
                case "AICO": val = "Air Conditioning"; break;
                case "AIDE": val = "Airline Desk"; break;
                case "CHCA": val = "Child Care"; break;
                case "BALC": val = "Balcony"; break;
                case "CHPR": val = "Childrens Programs"; break;
                case "HASA": val = "Hair Salon"; break;
                case "HSPI": val = "High Speed Internet"; break;
                case "BRFT": val = "Breakfast"; break;
                case "CARE": val = "Car Rental Desk"; break;
                case "CASI": val = "Casino"; break;
                case "COSH": val = "Coffee Shop"; break;
                case "CSFR": val = "Children Stay Free"; break;
                case "COBU": val = "Computer Bus Center"; break;
                case "CODE": val = "Concierge Desk"; break;
                case "COLE": val = "Concierge Level"; break;
                case "CORO": val = "Connect Rooms"; break;
                case "COBR": val = "Continental Breakfast"; break;
                case "DINR": val = "Dinner"; break;
                case "EFFI": val = "Efficiencies"; break;
                case "ELEV": val = "Elevators"; break;
                case "ENTR": val = "Entertainment"; break;
                case "FAPL": val = "Family Plan"; break;
                case "FPLC": val = "Fireplace"; break;
                case "FRTR": val = "Free Transportation"; break;
                case "GARO": val = "Game Room"; break;
                case "GISH": val = "Gift Shop"; break;
                case "GOLF": val = "Golf"; break;
                case "HAFA": val = "Handicap Facilities"; break;
                case "HECL": val = "Health Club"; break;
                case "MIOV": val = "Microwave Oven"; break;
                case "KTCN": val = "Kitchen"; break;
                case "LAVA": val = "Laundry Valet"; break;
                case "LUGE": val = "Lounge"; break;
                case "LNCH": val = "Lunch"; break;
                case "MEPL": val = "Meal Plan"; break;
                case "MEFA": val = "Meeting Facilities"; break;
                case "MIBA": val = "Mini Bar"; break;
                case "MOIR": val = "Movies In Room"; break;
                case "MTGL": val = "Multilingual"; break;
                case "NSMR": val = "Non-Smoking Room"; break;
                case "PARK": val = "Parking"; break;
                case "FPRK": val = "Free Parking"; break;
                case "SPAL": val = "Small Pets Allowed"; break;
                case "PHSV": val = "Phone Service"; break;
                case "POOL": val = "Pool"; break;
                case "INPL": val = "Indoor Pool"; break;
                case "OUPL": val = "Outdoor Pool"; break;
                case "PTRS": val = "Porters"; break;
                case "RFGR": val = "Refrigerator"; break;
                case "RTNT": val = "Restaurant"; break;
                case "ROSE": val = "Room Service"; break;
                case "ORRO": val = "Oriental Room Style"; break;
                case "WERO": val = "Western Room Style"; break;
                case "SAIR": val = "Safe in Room"; break;
                case "SADE": val = "Safe Deposit"; break;
                case "SAUN": val = "Sauna"; break;
                case "SCCV": val = "Secretarial Service"; break;
                case "SHWR": val = "Shower"; break;
                case "SKII": val = "Skiing"; break;
                case "SSKI": val = "Snow Skiing"; break;
                case "WTKI": val = "Water Skiing"; break;
                case "SPAA": val = "Spa"; break;
                case "TNCT": val = "Tennis Court"; break;
                case "TRDK": val = "Tour Desk"; break;
                case "TELV": val = "Television"; break;
                case "CBTV": val = "Cable TV"; break;
                case "VDCR": val = "VCR"; break;
                case "WTBD": val = "Waterbed"; break;
                case "PRBT": val = "Private Bath"; break;
                case "WTBR": val = "Wet Bar"; break;
                case "A120": val = "120AC"; break;
                case "D120": val = "120DC"; break;
                case "A220": val = "220AC"; break;
                case "D220": val = "220DC"; break;
                case "FXSV": val = "FAX Service"; break;
                case "JGTK": val = "Jogging Track"; break;
                case "SFBD": val = "Sofa Bed"; break;
                case "PHCO": val = "Photo Copy Service"; break;
                case "BATB": val = "Bath Tub"; break;
                case "FSTY": val = "Fire Safety"; break;
                case "BEFR": val = "BEACH FRONT"; break;
                case "BQFA": val = "BANQUET FACILITY"; break;
                case "HABR": val = "BARBER HAIRDRESSER"; break;
                case "BUSE": val = "BUSINESS SERVICES"; break;
                case "CUEX": val = "CURRENCY EXCHANGE"; break;
                case "DISC": val = "DISCO"; break;
                case "DAPR": val = "DATA PORT"; break;
                case "EXFL": val = "EXEC FLOOR CLUB LEVEL"; break;
                case "EXCO": val = "EXTERIOR CORRIDORS"; break;
                case "FUBR": val = "FULL BREAKFAST"; break;
                case "GUVI": val = "GULF VIEW"; break;
                case "HBRI": val = "HORSEBACK RIDING"; break;
                case "HADR": val = "HAIR DRYER"; break;
                case "HWFE": val = "HIGH SPEED WIRELESS FEE"; break;
                case "IRBD": val = "IRONING BD TROUSER PRES"; break;
                case "HSAF": val = "HIGH SPEED INT ACC FEE"; break;
                case "HSIF": val = "HIGH SPD INT ACC FREE"; break;
                case "INCO": val = "INTERIOR CORRIDORS"; break;
                case "HWFR": val = "HIGH SPD WIRELESS FREE"; break;
                case "JZHT": val = "JACUZZI/HOT TUB"; break;
                case "MESE": val = "MEDICAL SERVICES"; break;
                case "MOVI": val = "MOUNTAIN VIEW"; break;
                case "OCFR": val = "OCEAN FRONT"; break;
                case "OCVI": val = "OCEAN VIEW"; break;
                case "PEKE": val = "PET KENNELS"; break;
                case "RAQB": val = "RACQUETBALL"; break;
                case "SEPA": val = "SECURED PARKING"; break;
                case "TRAC": val = "TRAIN ACCESS"; break;
                case "VAPK": val = "VALET PARKING"; break;
                case "WHAC": val = "WHEELCHAIR ACCESSIBLE"; break;
                case "WHAE": val = "WHEELCHAIR ACCESS ELEV"; break;
                case "WESE": val = "WEDDING SERVICES"; break;
                case "AICA": val = "Air Conditioning - adjustable"; break;
                case "CVPK": val = "Covered Parking"; break;
                case "HATB": val = "Hammam Turkish bath"; break;
                case "MPBR": val = "Bar in the Middle Pool"; break;
                case "PLBR": val = "Poolside Bar"; break;
                case "OUPK": val = "Outdoor Parking"; break;
                case "FEPK": val = "Parking Fee Required"; break;
                case "INPK": val = "Indoor Parking"; break;
                case "SHFR": val = "Free airport Shuttle"; break;
                case "SHTL": val = "Airport Shuttle"; break;
                case "SHFE": val = "Airport Shuttle Surcharge"; break;
                case "HESP": val = "Fitness Center or Spa"; break;
                case "HENE": val = "Fitness Center Nearby"; break;
                case "INWI": val = "WiFi Wireless LAN"; break;
                case "INSV": val = "Internet Services"; break;
                case "FD24": val = "24-Hour Front Desk"; break;
                case "ALNS": val = "All Public and Private Spaces Non Smoking"; break;
                case "ALGF": val = "Allergy Free Room Available"; break;
                case "LUGS": val = "Luggage Storage"; break;
                case "BRBF": val = "Breakfast Buffet"; break;
                case "FARM": val = "Family Rooms"; break;
                case "SDPF": val = "Soundproofed Rooms"; break;
                case "CLNE": val = "Chapel Shrine nearby"; break;
                case "HEAT": val = "Heating"; break;
                case "DSGN": val = "Design Boutique Hotel"; break;
                case "EXCK": val = "Express Check in Check out"; break;
                case "GRDN": val = "Garden"; break;
                case "GYFR": val = "Gay Friendly"; break;
                case "NWPR": val = "Newspaper"; break;
                case "SKIS": val = "Ski Storage"; break;
                case "BLRD": val = "Billiards"; break;
                case "BOWL": val = "Bowling"; break;
                case "LIBY": val = "Library"; break;
                case "CNOE": val = "Canoeing"; break;
                case "MNGF": val = "Mini Golf"; break;
                case "KOKE": val = "Karaoke"; break;
                case "MSSG": val = "Massage"; break;
                case "SOLR": val = "Solarium"; break;
                case "SQSH": val = "Squash Courts"; break;
                case "TBLT": val = "Table Tennis"; break;
                case "GF3K": val = "Golf Course within 3 km"; break;
                case "STMB": val = "Steam Bath Turkish Bath"; break;
                case "DIVG": val = "Diving"; break;
                case "FISH": val = "Fishing"; break;
                case "SNKL": val = "Snorkelling"; break;
                case "BRBQ": val = "Bar B Que facilities"; break;
                case "SKSC": val = "Ski School"; break;
                case "CPLY": val = "Childrens Playground"; break;
                case "WSRF": val = "Windsurfing"; break;
                case "WALK": val = "Walking"; break;
                case "CYCL": val = "Cycling"; break;
                case "DART": val = "Darts"; break;
                case "BIKE": val = "Biking"; break;
                case "TKTS": val = "Ticket Service"; break;
                case "VIPF": val = "Very Important Person  VIP Room Facilities"; break;
                case "RSBK": val = "Room service Breakfast "; break;
                case "SVSH": val = "Shops in Hotel"; break;
                case "L2GO": val = "Lunch to go packed lunch"; break;
                case "BIKR": val = "Bicycle Rental"; break;
                case "SHOE": val = "Shoe Shine"; break;
                case "DRYC": val = "Dry Cleaning"; break;
                case "BRST": val = "Bridal Suite"; break;
                case "OTWN": val = "Old Town"; break;
                case "UNIV": val = "University"; break;
                case "TREE": val = "Forest"; break;
                case "CTYC": val = "City Centre"; break;
                case "MTNS": val = "Mountains"; break;
                case "MSMA": val = "Museum Area"; break;
                case "RIVR": val = "River"; break;
                case "PRKR": val = "Park, Recreation"; break;
                case "BECH": val = "Beach"; break;
                case "TNBY": val = "Near Train Station"; break;
                case "PANO": val = "Panoramic View"; break;
                case "SHOP": val = "Shopping Centre"; break;
                case "NHWY": val = "Near Highway"; break;
                case "NAPO": val = "Near Airport"; break;
                case "CNYS": val = "Countryside"; break;
                case "LAKE": val = "Lake"; break;
                case "SBWY": val = "Subway near"; break;
                case "EXCT": val = "Near Exhibition Centre"; break;
                case "HRBR": val = "Harbour"; break;
                case "FTDN": val = "Fitnesscenters in der Nahe Kostenlos"; break;
                case "SAFD": val = "Safety Deposit Box"; break;
                case "V2PK": val = "Valet Parking"; break;
                case "Crib": val = "Crib"; break;
                case "Double": val = "Double"; break;
                case "Futon": val = "Futon"; break;
                case "King": val = "King"; break;
                case "MurphyBed": val = "MurphyBed"; break;
                case "Queen": val = "Queen"; break;
                case "RollawayChild": val = "RollawayChild"; break;
                case "RollawayAdult": val = "RollawayAdult"; break;
                case "SofaBed": val = "SofaBed"; break;
                case "TatamiMats": val = "TatamiMats"; break;
                case "Twin": val = "Twin"; break;
                case "Walk": val = "Walk"; break;
                case "CourtesyBus": val = "Courtesy Bus"; break;
                case "Limo": val = "Limo"; break;
                case "Public": val = "Public"; break;
                case "SubwayRail": val = "Subway Rail"; break;
                case "Bus": val = "Bus"; break;
                case "Other": val = "Other"; break;
                case "Taxi": val = "Taxi"; break;
                case "RentalCar": val = "Rental Car"; break;









                default: val = "Room Only"; break;
            }
            return val;
        }
        #endregion

        #region GetAmenities
        private string GetAmenities(string AmenCode, string AmenityType)
        {
            string val = string.Empty;
            switch (AmenCode)
            {
                case "113": if (AmenityType == "HA") { val = "120 AC"; } if (AmenityType == "BT") { val = "Twin bed"; } break;
                case "115": if (AmenityType == "HA") val = "220 AC"; break;
                case "905": if (AmenityType == "HA") val = "Air Conditioning - adjustable"; break;
                case "5": if (AmenityType == "HA") val = "Air conditioning"; break;
                case "6": if (AmenityType == "HA") val = "Airline desk"; break;
                case "911": if (AmenityType == "HA") val = "Allergy-Free Room Available"; break;
                case "268": if (AmenityType == "HA") val = "All public areas non-smoking"; break;
                case "7": if (AmenityType == "RA") { val = "Balcony/Lanai/Terrace"; } if (AmenityType == "TR") { val = "Courtesy Bus"; } break;
                case "13": if (AmenityType == "RA") val = "Bathtub"; break;
                case "953": if (AmenityType == "HA") val = "Beach"; break;
                case "239": if (AmenityType == "HA") val = "Beachfront"; break;
                case "939": if (AmenityType == "HA") val = "Biking"; break;
                case "202": if (AmenityType == "HA") { val = "Bicycle rentals"; } if (AmenityType == "BT") { val = "Tatami mats"; } break;
                case "923": if (AmenityType == "HA") val = "Billiards"; break;
                case "924": if (AmenityType == "HA") val = "Bowling"; break;
                case "105": if (AmenityType == "HA") val = "Banquet facilities"; break;
                case "157": if (AmenityType == "HA") val = "Buffet breakfast"; break;
                case "118": if (AmenityType == "HA") val = "Barbeque grills"; break;
                case "227": if (AmenityType == "HA") val = "Complimentary breakfast"; break;
                case "944": if (AmenityType == "HA") val = "Bridal Suite"; break;
                case "229": if (AmenityType == "HA") val = "Business services"; break;
                case "3": if (AmenityType == "TR") val = "Bus"; break;
                case "15": if (AmenityType == "HA") { val = "Car rental desk"; } if (AmenityType == "TR") { val = "Rental Car"; } break;
                case "16": if (AmenityType == "HA") val = "Casino"; break;
                case "18": if (AmenityType == "RA") { val = "Cable television"; } if (AmenityType == "TR") { val = "Subway Rail"; } break;
                case "8": if (AmenityType == "HA") val = "Baby sitting"; break;
                case "289": if (AmenityType == "HA") val = "Children programs"; break;
                case "916": if (AmenityType == "HA") val = "Chapel/Shrine nearby"; break;
                case "925": if (AmenityType == "HA") val = "Canoeing"; break;
                case "957": if (AmenityType == "HA") val = "Countryside"; break;
                case "159": if (AmenityType == "HA") val = "Continental breakfast"; break;
                case "228": if (AmenityType == "HA") val = "Business center"; break;
                case "22": if (AmenityType == "HA") { val = "Concierge desk"; } if (AmenityType == "RA") { val = "Connecting rooms"; } break;
                case "23": if (AmenityType == "HA") val = "Concierge floor"; break;
                case "20": if (AmenityType == "HA") { val = "Coffee shop"; } if (AmenityType == "TR") { val = "Taxi"; } break;
                case "193": if (AmenityType == "HA") val = "Children's play area"; break;
                case "913": if (AmenityType == "HA") val = "Children Stay Free"; break;
                case "948": if (AmenityType == "HA") val = "City Centre"; break;
                case "26": if (AmenityType == "HA") { val = "Currency exchange"; } if (AmenityType == "BT") { val = "Cribs"; } if (AmenityType == "TR") { val = "Other"; } break;
                case "968": if (AmenityType == "HA") val = "Covered Parking"; break;
                case "937": if (AmenityType == "HA") val = "Cycling"; break;
                case "114": if (AmenityType == "HA") val = "120 DC"; break;
                case "117": if (AmenityType == "HA") val = "220DC"; break;
                case "255": if (AmenityType == "HA") val = "Data port"; break;
                case "938": if (AmenityType == "HA") val = "Darts"; break;
                case "175": if (AmenityType == "HA") val = "Dinner served in restaurant"; break;
                case "46": if (AmenityType == "HA") { val = "Hairdresser/barber"; } if (AmenityType == "RC") { val = "Efficiencies"; } break;
                case "107": if (AmenityType == "HA") { val = "Beauty shop/salon"; } if (AmenityType == "RA") { val = "Telephone"; } break;
                case "33": if (AmenityType == "BT") { val = "Double beds"; } if (AmenityType == "HA") { val = "Elevators"; } break;
                case "200": if (AmenityType == "BT") val = "Futon"; break;
                case "58": if (AmenityType == "BT") { val = "King bed"; } if (AmenityType == "HA") { val = "Laundry/Valet service"; } break;
                case "86": if (AmenityType == "BT") { val = "Queen bed"; } if (AmenityType == "HA") { val = "Steam bath"; } break;
                case "131": if (AmenityType == "BT") val = "Extra person charge for rollaway use"; break;
                case "198": if (AmenityType == "BT") val = "Extra child charge for rollaway use"; break;
                case "203": if (AmenityType == "BT") val = "Single bed"; break;
                case "269": if (AmenityType == "HA") val = "Meeting rooms"; break;
                case "195": if (AmenityType == "HA") { val = "Disco"; } if (AmenityType == "RA") { val = "Water bed"; } break;
                case "34": if (AmenityType == "HA") val = "Executive floor"; break;
                case "48": if (AmenityType == "HA") val = "Health club"; break;
                case "256": if (AmenityType == "HA") val = "Exterior corridors"; break;
                case "161": if (AmenityType == "HA") val = "Full american breakfast"; break;
                case "42": if (AmenityType == "HA") val = "Free parking"; break;
                case "44": if (AmenityType == "HA") val = "Game room"; break;
                case "236": if (AmenityType == "HA") val = "Golf"; break;
                case "257": if (AmenityType == "HA") val = "Gulf view"; break;
                case "237": if (AmenityType == "HA") val = "Horseback riding"; break;
                case "240": if (AmenityType == "HA") val = "Hair dryer"; break;
                case "47": if (AmenityType == "HA") val = "Accessible facilities"; break;
                case "900": if (AmenityType == "HA") val = "HIGH SPEED WIRELESS FEE"; break;
                case "241": if (AmenityType == "HA") val = "Ironing board"; break;
                case "901": if (AmenityType == "HA") val = "HIGH SPEED INT ACC FEE"; break;
                case "259": if (AmenityType == "HA") val = "High speed internet access"; break;
                case "260": if (AmenityType == "HA") val = "Interior corridors"; break;
                case "54": if (AmenityType == "HA") val = "Indoor pool"; break;
                case "261": if (AmenityType == "HA") val = "High speed wireless"; break;
                case "55": if (AmenityType == "HA") val = "Jacuzzi"; break;
                case "59": if (AmenityType == "RA") val = "Kitchen"; break;
                case "165": if (AmenityType == "HA") val = "Lounges/bars"; break;
                case "103": if (AmenityType == "HA") val = "Multilingual staff"; break;
                case "154": if (AmenityType == "HA") val = "Medical Facilities Service"; break;
                case "902": if (AmenityType == "HA") val = "MOUNTAIN VIEW"; break;
                case "74": if (AmenityType == "RA") val = "Non-smoking"; break;
                case "238": if (AmenityType == "HA") val = "Oceanfront"; break;
                case "66": if (AmenityType == "HA") val = "Outdoor pool"; break;
                case "903": if (AmenityType == "HA") val = "OCEAN VIEW"; break;
                case "224": if (AmenityType == "HA") val = "Pets allowed"; break;
                case "85": if (AmenityType == "RA") val = "Private bathroom"; break;
                case "57": if (AmenityType == "HA") val = "Kennels"; break;
                case "231": if (AmenityType == "HA") val = "Racquetball"; break;
                case "88": if (AmenityType == "RA") val = "Refrigerator"; break;
                case "77": if (AmenityType == "HA") val = "Room Service"; break;
                case "76": if (AmenityType == "HA") val = "Restaurant"; break;
                case "79": if (AmenityType == "HA") val = "Sauna"; break;
                case "230": if (AmenityType == "HA") val = "Secured parking"; break;
                case "84": if (AmenityType == "HA") val = "Spa"; break;
                case "272": if (AmenityType == "HA") val = "Snow skiing"; break;
                case "199": if (AmenityType == "HA") val = "Train access"; break;
                case "233": if (AmenityType == "HA") val = "Tennis court"; break;
                case "97": if (AmenityType == "HA") val = "Valet parking"; break;
                case "101": if (AmenityType == "HA") val = "Wheelchair access"; break;
                case "904": if (AmenityType == "HA") val = "WHEELCHAIR ACCESS ELEV"; break;
                case "104": if (AmenityType == "HA") val = "Wedding services"; break;
                case "273": if (AmenityType == "HA") val = "Water skiing"; break;
                case "931": if (AmenityType == "HA") val = "Diving"; break;
                case "96": if (AmenityType == "HA") val = "Dry cleaning"; break;
                case "918": if (AmenityType == "HA") val = "Design/Boutique Hotel"; break;
                case "60": if (AmenityType == "HA") val = "Live entertainment"; break;
                case "919": if (AmenityType == "HA") val = "Express Check in/Check out"; break;
                case "960": if (AmenityType == "HA") val = "Near Exhibition Centre"; break;
                case "38": if (AmenityType == "HA") val = "Family plan"; break;
                case "912": if (AmenityType == "HA") val = "Family Rooms"; break;
                case "1": if (AmenityType == "HA") val = "24-hour front desk"; break;
                case "908": if (AmenityType == "HA") val = "Parking Fee Required"; break;
                case "932": if (AmenityType == "HA") val = "Fishing"; break;
                case "41": if (AmenityType == "RA") { val = "Fireplace"; } if (AmenityType == "HA") { val = "Free airport shuttle"; } break;
                case "43": if (AmenityType == "HA") val = "Free transportation"; break;
                case "264": if (AmenityType == "HA") val = "Fire safety compliant"; break;
                case "962": if (AmenityType == "HA") val = "Fitnesscenters in der Nahe (Kostenlos)"; break;
                case "274": if (AmenityType == "HA") val = "Fax service"; break;
                case "930": if (AmenityType == "HA") val = "Golf Course (within 3 km)"; break;
                case "45": if (AmenityType == "HA") val = "Gift/News stand"; break;
                case "920": if (AmenityType == "HA") val = "Garden"; break;
                case "68": if (AmenityType == "RA") { val = "Microwave"; } if (AmenityType == "HA") { val = "Parking"; } break;
                case "174": if (AmenityType == "HA") val = "Lunch served in restaurant"; break;
                case "162": if (AmenityType == "HA") val = "Meal plan available"; break;
                case "69": if (AmenityType == "RA") { val = "Minibar"; } if (AmenityType == "HA") { val = "Photocopy center"; } break;
                case "270": if (AmenityType == "HA") val = "Movies in room"; break;
                case "71": if (AmenityType == "HA") val = "Pool"; break;
                case "106": if (AmenityType == "HA") val = "Bell staff/porter"; break;
                case "965": if (AmenityType == "RA") val = "Oriental Room Style"; break;
                case "966": if (AmenityType == "RA") val = "Western Room Style"; break;
                case "92": if (AmenityType == "RA") val = "Safe"; break;
                case "78": if (AmenityType == "HA") val = "Safe deposit box"; break;
                case "271": if (AmenityType == "HA") val = "Secretarial service"; break;
                case "142": if (AmenityType == "RA") val = "Shower"; break;
                case "914": if (AmenityType == "HA") val = "Skiing"; break;
                case "91": if (AmenityType == "HA") { val = "Tour/sightseeing desk"; } if (AmenityType == "BT") { val = "Rollaway bed"; } break;
                case "251": if (AmenityType == "RA") val = "TV"; break;
                case "116": if (AmenityType == "RA") val = "VCR player"; break;
                case "51": if (AmenityType == "RA") val = "High speed internet connection"; break;
                case "122": if (AmenityType == "RA") val = "Wet bar"; break;
                case "56": if (AmenityType == "HA") val = "Jogging track"; break;
                case "102": if (AmenityType == "RA") { val = "Sofa bed"; } if (AmenityType == "BT") { val = "Sofa bed"; } break;
                case "201": if (AmenityType == "BT") val = "Murphy bed"; break;
                case "24": if (AmenityType == "TR") val = "Walk"; break;
                case "9": if (AmenityType == "TR") val = "Limo"; break;
                case "31": if (AmenityType == "TR") val = "Public"; break;
                case "921": if (AmenityType == "HA") val = "Gay Friendly"; break;
                case "906": if (AmenityType == "HA") val = "Hammam(Turkish bath)"; break;
                case "917": if (AmenityType == "HA") val = "Heating"; break;
                case "909": if (AmenityType == "HA") val = "Fitness Center Nearby"; break;
                case "345": if (AmenityType == "HA") val = "Fitness center"; break;
                case "961": if (AmenityType == "HA") val = "Harbour"; break;
                case "53": if (AmenityType == "HA") val = "Indoor parking"; break;
                case "223": if (AmenityType == "HA") val = "Internet services"; break;
                case "910": if (AmenityType == "HA") val = "Wi/Fi Wireless LAN"; break;
                case "927": if (AmenityType == "HA") val = "Karaoke"; break;
                case "943": if (AmenityType == "HA") val = "Lunch to go/packed lunch"; break;
                case "958": if (AmenityType == "HA") val = "Lake"; break;
                case "14": if (AmenityType == "HA") val = "Business library"; break;
                case "283": if (AmenityType == "HA") val = "Luggage service"; break;
                case "926": if (AmenityType == "HA") val = "Mini Golf"; break;
                case "907": if (AmenityType == "HA") val = "Bar in the Middle Pool"; break;
                case "950": if (AmenityType == "HA") val = "Museum Area"; break;
                case "61": if (AmenityType == "HA") val = "Massage services"; break;
                case "949": if (AmenityType == "HA") val = "Mountains"; break;
                case "956": if (AmenityType == "HA") val = "Near Airport"; break;
                case "955": if (AmenityType == "HA") val = "Near Highway"; break;
                case "292": if (AmenityType == "HA") val = "Newspaper"; break;
                case "248": if (AmenityType == "BT") val = "Bedding type unknown or unspecified"; break;
                case "282": if (AmenityType == "HA") val = "Airport shuttle service"; break;
                case "327": if (AmenityType == "HA") val = "Events ticket service"; break;
                case "65": if (AmenityType == "HA") val = "Outdoor parking"; break;
                case "72": if (AmenityType == "HA") val = "Poolside snack bar"; break;
                case "81": if (AmenityType == "HA") val = "Shoe shine stand"; break;
                case "82": if (AmenityType == "HA") val = "Shopping mall"; break;
                case "83": if (AmenityType == "HA") val = "Solarium"; break;
                case "915": if (AmenityType == "HA") val = "Soundproofed Rooms"; break;
                case "922": if (AmenityType == "HA") val = "Ski Storage"; break;
                case "928": if (AmenityType == "HA") val = "Squash Courts"; break;
                case "929": if (AmenityType == "HA") val = "Table Tennis"; break;
                case "933": if (AmenityType == "HA") val = "Snorkelling"; break;
                case "934": if (AmenityType == "HA") val = "Ski School"; break;
                case "935": if (AmenityType == "HA") val = "Windsurfing"; break;
                case "936": if (AmenityType == "HA") val = "Walking"; break;
                case "940": if (AmenityType == "HA") val = "Very Important Person (VIP) Room Facilities"; break;
                case "941": if (AmenityType == "HA") val = "Room service Breakfast "; break;
                case "942": if (AmenityType == "HA") val = "Shops in Hotel"; break;
                case "945": if (AmenityType == "HA") val = "Old Town"; break;
                case "946": if (AmenityType == "HA") val = "University"; break;
                case "947": if (AmenityType == "HA") val = "Forest"; break;
                case "951": if (AmenityType == "HA") val = "River"; break;
                case "952": if (AmenityType == "HA") val = "Park, Recreation"; break;
                case "954": if (AmenityType == "HA") val = "Panoramic View"; break;
                case "959": if (AmenityType == "HA") val = "Subway near"; break;
                case "963": if (AmenityType == "HA") val = "Safety Deposit Box"; break;
                case "964": if (AmenityType == "HA") val = "Valet Parking"; break;
                case "967": if (AmenityType == "HA") val = "Train Station Nearby"; break;
                case "969": if (AmenityType == "HA") val = "Airport Shuttle Surcharge"; break;
                default: val = "Room Only"; break;
            }
            return val;
        }
        #endregion

        #region HotelRoomsResponse
        /// <summary>
        /// 
        /// </summary>
        /// <param name="res"></param>
        /// <returns></returns>
        public string HotelRoomsResponse(string res)
        {
            var helper = new HotelHelper();
            XDocument xdoc = XDocument.Parse(helper.RemoveXmlns(res.ToString()));

            var Address = "Address:" + Environment.NewLine;
            var PhoneNumber = Environment.NewLine + "PhoneNumber:" + Environment.NewLine;
            var PH_No = string.Empty;
            var HotelDetailItem = Environment.NewLine + "Hotel Detail Item:" + Environment.NewLine;
            var description = string.Empty;

            if (xdoc.Descendants("Address").Any())
            {
                foreach (var addr in xdoc.Descendants("Address"))
                {
                    Address = Address + addr.Value + Environment.NewLine;
                }
            }
            if (xdoc.Descendants("PhoneNumber").Any())
            {
                foreach (var addr in xdoc.Descendants("PhoneNumber"))
                {
                    PhoneNumber = PhoneNumber + addr.Attribute("Type").Value + ": " + addr.Attribute("Number").Value + Environment.NewLine;
                    PH_No = PH_No + addr.Attribute("Number").Value + "/";
                }
            }
            if (xdoc.Descendants("HotelDetailItem").Descendants("Text").Any())
            {
                foreach (var detail in xdoc.Descendants("HotelDetailItem"))
                {
                    HotelDetailItem = HotelDetailItem + detail.Attribute("Name").Value + ": " + detail.Descendants("Text").FirstOrDefault().Value + "<br/>";
                }
            }
            description = Address + Environment.NewLine + PhoneNumber + Environment.NewLine + HotelDetailItem + Environment.NewLine;

            var objstr = new StringBuilder();
            objstr.AppendFormat("<Address>{0}</Address>", Address);
            objstr.Append("<PhoneList>");
            objstr.AppendFormat("<Phone>{0}</Phone>", PH_No);
            objstr.Append("</PhoneList>");
            objstr.Append("<DescriptionList>");
            objstr.AppendFormat("<Description type='HotelDescription'>{0}</Description>", description);
            objstr.Append("</DescriptionList>");


            objstr.Append("<GuestReviews>");

            foreach (var review in xdoc.Descendants("GuestReviews").Descendants("Comments"))
            {
                objstr.AppendFormat("<Review Source='" + review.Attribute("Source").Value + "' CommentId='" + review.Attribute("CommentId").Value + "' Date='" + review.Attribute("Date").Value + "'>{0}</Review>", review.Value);
            }
            objstr.Append("</GuestReviews>");



            objstr.Append("<RoomGroup>");
            objstr.Append("<Rooms>");
            var count = 1;
            foreach (var room in xdoc.Descendants("HotelRateDetail"))
            {
                var roomid = "R" + count;
                var RoomType = string.Empty;
                var RateDescription = string.Empty;
                var Description = string.Empty;
                var TotalIncludes = string.Empty;
                var SupplierTermsandConditions = string.Empty;

                foreach (var rate in room.Descendants("RoomRateDescription"))
                {
                    if (rate.Attribute("Name").Value == "Rate Description")
                    {
                        RateDescription = rate.Descendants("Text").FirstOrDefault().Value;
                    }
                    if (rate.Attribute("Name").Value == "Room Type")
                    {
                        RoomType = rate.Descendants("Text").FirstOrDefault().Value;
                    }
                    if (rate.Attribute("Name").Value == "Description")
                    {
                        Description = rate.Descendants("Text").FirstOrDefault().Value;
                    }
                    if (rate.Attribute("Name").Value == "Total Includes")
                    {
                        TotalIncludes = rate.Descendants("Text").FirstOrDefault().Value;
                    }
                    if (rate.Attribute("Name").Value == "Supplier Terms and Conditions")
                    {
                        SupplierTermsandConditions = rate.Descendants("Text").FirstOrDefault().Value;
                    }
                }
                var roomcode = room.Attribute("RatePlanType").Value;
                var roomstatus = "true";
                var rateplan = room.Attribute("RatePlanType").Value;
                var RoomPrice = "";
                /////////////After  certification time
                if (room.Attributes("ApproximateTotal").Any())
                {
                    if (room.Attribute("ApproximateTotal").Value.ToString().Contains(Currency))
                    {
                        RoomPrice = room.Attribute("ApproximateTotal").Value.ToString().Replace(Currency, "");
                    }
                }
                else if (room.Attributes("ApproximateBase").Any())
                {
                    if (room.Attribute("ApproximateBase").Value.ToString().Contains(Currency))
                    {
                        RoomPrice = room.Attribute("ApproximateBase").Value.ToString().Replace(Currency, "");
                    }
                }
                else if (room.Attributes("Total").Any())
                {
                    RoomPrice = room.Attribute("Total").Value.ToString().Replace(Currency, "");
                }

                /////////////while certification time
                //if (room.Attributes("Total").Any())
                //{
                //////////var StartAmountCurrency = room.Attribute("Total").Value.ToString();
                //////////var listOfStrings = new List<string> { "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYR", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SPL*", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWD" };
                //////////var StartCurrency = string.Empty;
                //////////foreach (var curr in listOfStrings)
                //////////{
                //////////    if (StartAmountCurrency.Contains(curr))
                //////////    {
                //////////        StartCurrency = curr;
                //////////    }
                //////////    if (StartCurrency != "")
                //////////    {
                //////////        break;
                //////////    }
                //////////}
                //////////var StartAmount = StartAmountCurrency.Replace(StartCurrency, "");
                //////////RoomPrice = StartAmount;
                if (RoomPrice != "")
                {
                    var tax = "0.00";
                    var extraguestcharge = "0.00";
                    var cancel = "";
                    foreach (var val in room.Descendants("CancellationPolicy"))
                    {
                        cancel = cancel + "Cancellation Policy:" + val.Value + Environment.NewLine;
                        break;
                    }
                    var servicetax = "0.00";
                    var discount = "0.00";
                    var lastcanceldate = "";
                    objstr.Append("<Room>");
                    objstr.Append("<Supplier>UAPI</Supplier>");
                    objstr.Append("<SessionId>" + SessionId + "</SessionId>");

                    /////////////while certification time
                    //////objstr.Append("<Currency>" + StartCurrency + "</Currency>");

                    ////////////After  certification time
                    objstr.Append("<Currency>" + Currency + "</Currency>");

                    objstr.Append("<Payments>");
                    foreach (var payment in room.Descendants("AcceptedPayment"))
                    {
                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "AX")
                        {
                            objstr.Append("<Card>American Express</Card>");
                        }
                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "VI")
                        {
                            objstr.Append("<Card>Visa</Card>");
                        }
                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "CA")
                        {
                            objstr.Append("<Card>MasterCard</Card>");
                        }
                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "BC")
                        {
                            objstr.Append("<Card>BC Card</Card>");
                        }

                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "DS")
                        {
                            objstr.Append("<Card>Discover</Card>");
                        }

                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "DC")
                        {
                            objstr.Append("<Card>Diners Club</Card>");
                        }

                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "T")
                        {
                            objstr.Append("<Card>Carta Si</Card>");
                        }

                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "R")
                        {
                            objstr.Append("<Card>Carte Bleue</Card>");
                        }

                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "E")
                        {
                            objstr.Append("<Card>Visa Electron</Card>");
                        }

                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "JC")
                        {
                            objstr.Append("<Card>Japan Credit Bureau</Card>");
                        }
                        if (payment.Attribute("PaymentCode").Value.ToUpper() == "TO")
                        {
                            objstr.Append("<Card>Maestro</Card>");
                        }
                    }
                    objstr.Append("</Payments>");


                    objstr.AppendFormat("<ParentId>{0}</ParentId>", discount);
                    objstr.AppendFormat("<RoomId>{0}</RoomId>", roomid);
                    objstr.AppendFormat("<RoomType>{0}</RoomType>", RoomType);
                    objstr.AppendFormat("<RateDescription>{0}</RateDescription>", RateDescription);
                    objstr.AppendFormat("<Description>{0}</Description>", Description);
                    objstr.AppendFormat("<TotalIncludes>{0}</TotalIncludes>", TotalIncludes);
                    objstr.AppendFormat("<SupplierTermsandConditions>{0}</SupplierTermsandConditions>", SupplierTermsandConditions);
                    objstr.AppendFormat("<BoardType>{0}</BoardType>", servicetax + ";" + roomstatus + ";" + lastcanceldate);
                    objstr.AppendFormat("<BoardTypeCode>{0}</BoardTypeCode>", tax + ";" + extraguestcharge);
                    objstr.AppendFormat("<RoomTypeCode>{0}</RoomTypeCode>", roomcode);
                    objstr.AppendFormat("<RatePlanCode>{0}</RatePlanCode>", rateplan);
                    objstr.AppendFormat("<AvailableCount>{0}</AvailableCount>", 1);
                    objstr.AppendFormat("<Amount>{0}</Amount>", RoomPrice);
                    objstr.AppendFormat("<RoomPrice>{0}</RoomPrice>", RoomPrice);
                    objstr.Append("<CancelPoilcy>");
                    objstr.Append("<Time></Time>");
                    objstr.Append("<Date></Date>");
                    objstr.AppendFormat("<Text>{0}</Text>", cancel);
                    objstr.Append("</CancelPoilcy>");


                    var GuaranteeType = string.Empty;
                    if (room.Descendants("GuaranteeInfo").Attributes("GuaranteeType").Any())
                    {
                        if (room.Descendants("GuaranteeInfo").Attributes("GuaranteeType").FirstOrDefault().Value != "")
                        {
                            GuaranteeType = room.Descendants("GuaranteeInfo").Attributes("GuaranteeType").FirstOrDefault().Value;
                        }
                        else
                        {
                            GuaranteeType = "Deposit";
                        }
                    }

                    if (GuaranteeType == "Prepayment")
                    {
                        GuaranteeType = "Guarantee";
                    }
                    var RoomCapacity = string.Empty;
                    foreach (var capacity in room.Descendants("RoomCapacity").Descendants("Capacity"))
                    {
                        RoomCapacity = capacity.Value;
                    }
                    objstr.AppendFormat("<RoomCapacity>{0}</RoomCapacity>", RoomCapacity);
                    objstr.AppendFormat("<GuaranteeInfo>{0}</GuaranteeInfo>", GuaranteeType);
                    objstr.Append("<RoomCount>" + RoomCount + "</RoomCount>");
                    objstr.Append("<AdultCount>" + AdultCount + "</AdultCount>");
                    objstr.Append("<ChildCount>" + ChildCount + "</ChildCount>");
                    objstr.Append("</Room>");
                }
                //}
                count++;
            }
            objstr.Append("</Rooms>");
            objstr.Append("</RoomGroup>");
            return objstr.ToString();
        }
        #endregion

        #region HotelRoomsResponseNew
        /// <summary>
        /// 
        /// </summary>
        /// <param name="res"></param>
        /// <returns></returns>
        public StayRS HotelRoomsResponseNew(string res, int RoomCount, int AdultCount, int ChildCount)
        {
            RoomRS _RoomRS = new RoomRS();
            StayRS objStayRS = new StayRS();
            Review review = new Review();
            List<Review> lstReview = new List<Review>();
            try
            {
                var helper = new HotelHelper();
                WXYZ_Hotel.Controllers.SearchController.Rootobject SupplierData = new WXYZ_Hotel.Controllers.SearchController.Rootobject();
                XDocument xdoc = XDocument.Parse(helper.RemoveXmlns(res.ToString()));
                var count = 1;

                #region Fetch Bus Supplier Markup & Commission                                                                                                                   //
                var CHIn = RoomRQ.CheckIn.Split('-');
                Hashtable hsh_param = new Hashtable();
                hsh_param.Add("BRANCHID", RoomRQ.AgentDetails.BranchID);
                hsh_param.Add("AGENTID", RoomRQ.AgentDetails.AgentID);
                hsh_param.Add("SUPPID", RoomRQ.SupplierId);
                hsh_param.Add("BOOKEDDATE", DateTime.Now.ToString("yyyyMMdd"));
                hsh_param.Add("DEPARTUREDATE", (CHIn[2] + CHIn[1] + CHIn[0]).ToString());
                DataSet dsMarkUpCommission = new DataSet();
                dsMarkUpCommission = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_API_HOTEL_MARKUP_COMMISSION, hsh_param, DataBase.APP.ToString());

                #endregion                                                                                                                                                       //


                //SELECT LOG INTO LTBL_TRM_API_LOG_DETAILS START
                LTBL_TRM_API_LOG_DETAILS objLTBL_TRM_API_LOG_DETAILS = new LTBL_TRM_API_LOG_DETAILS();
                objLTBL_TRM_API_LOG_DETAILS.TRACEID = RoomRQ.TraceId;
                objLTBL_TRM_API_LOG_DETAILS.METHOD = "SELECT";
                var Result = objLTBL_TRM_API_LOG_DETAILS.GET_LTBL_TRM_API_LOG_DETAILS();
                var xdoc_Res = new XDocument();
                xdoc_Res = XDocument.Parse(Result);
                xdoc_Res = XDocument.Parse(helper.RemoveXmlns(xdoc_Res.ToString()));
                //SELECT LOG INTO LTBL_TRM_API_LOG_DETAILS END
                List<XElement> HotelRateDetaillst = new List<XElement>();
                List<XElement> fdsa = new List<XElement>();

                #region RETURN ON EQUITY ( ROE )
                DataSet dsCurrencyAmt = new DataSet();
                string TCurrency = Regex.Replace(xdoc.Descendants("HotelRateDetail").FirstOrDefault().Attribute("ApproximateBase").Value,"[^A-Z]", "");
                string FareCurreny = "1";
                if (RoomRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper() != TCurrency.ToString().Trim().ToUpper())
                {
                    string CurrenyErrorMsg = string.Empty;
                    dsCurrencyAmt = SQLAccess.Fetch_API_Currency_Details(RoomRQ.AgentDetails, "", TCurrency, RoomRQ.AgentDetails.CurrencyCode.ToString(), ref CurrenyErrorMsg);
                    if (dsCurrencyAmt == null || dsCurrencyAmt.Tables.Count == 0 || dsCurrencyAmt.Tables[0].Rows.Count == 0)
                    {
                        objStayRS.Status = "00";
                        objStayRS.Rooms = null;
                        objStayRS.Error = "Problem occured while fetching currency details.Please contact customare care.Err:#03";
                        return objStayRS;
                    }
                    FareCurreny = dsCurrencyAmt.Tables[0].Rows[0]["ROE_TO_AMOUNT"].ToString().Trim();
                }
                #endregion

                foreach (var htl in xdoc_Res.Descendants("HotelSearchResult").Where(x => x.Element("HotelProperty").Attribute("HotelCode").Value == RoomRQ.HotelCode))
                {
                    foreach (var RateInfo in htl.Descendants("RateInfo").Where(c => c.Attribute("RateSupplier").Value == RoomRQ.RateSupplier))
                    {
                        List<RoomRS> rss = new List<RoomRS>();

                        foreach (var room in xdoc.Descendants("HotelRateDetail"))
                        {
                            RoomRS rs = new RoomRS();
                            rs.TraceID = RoomRQ.TraceId;
                            rs.RoomName = (room.Elements("RoomRateDescription").Where(m => m.Attribute("Name").Value == "Room Type").Descendants("Text").FirstOrDefault().Value);
                            rs.RoomPaxCapacity = room.Element("RoomCapacity").Element("Capacity").Value;
                            rs.Roomtypecode = room.Attribute("RatePlanType").Value;
                            rs.Inclusion = (room.Elements("RoomRateDescription").Where(m => m.Attribute("Name").Value == "Room Type").Descendants("Text").FirstOrDefault().Value.Split('-').Length > 1 ? room.Elements("RoomRateDescription").Where(m => m.Attribute("Name").Value == "Room Type").Descendants("Text").FirstOrDefault().Value.Split('-')[1] : "Room Only");
                            rs.RateBasic = "";
                            rs.RoomId = "R" + count++;
                            rs.BaseAmount = (room.Attributes("ApproximateBase").Any() && room.Attributes("ApproximateBase").FirstOrDefault().Value != null) ? Regex.Replace(room.Attribute("ApproximateBase").Value, "[^.0-9]", "") : Regex.Replace(room.Attribute("Base").Value, "[^.0-9]", "");
                            rs.BaseAmount = (Convert.ToDecimal(rs.BaseAmount) * Convert.ToDecimal(FareCurreny)).ToString();
                            rs.SuppBaseAmount = (room.Attributes("ApproximateBase").Any() && room.Attributes("ApproximateBase").FirstOrDefault().Value != null) ? Regex.Replace(room.Attribute("ApproximateBase").Value, "[^.0-9]", "") : Regex.Replace(room.Attribute("Base").Value, "[^.0-9]", "");
                            rs.SuppBaseAmount = (Convert.ToDecimal(rs.SuppBaseAmount) * Convert.ToDecimal(FareCurreny)).ToString();
                            string MarkUpAmt = "0";
                            string CommissionAmt = "0";
                            bool ComMarkUpdt = Calculation.CalcCommAndMarkup(RoomRQ.AgentDetails, rs.SuppBaseAmount.ToString(), ref MarkUpAmt, ref CommissionAmt, dsMarkUpCommission); //
                            rs.MarkUp = MarkUpAmt;
                            rs.Commission = CommissionAmt;
                            rs.TotalGrossAmount = (Convert.ToDecimal(rs.SuppBaseAmount) + Convert.ToDecimal(MarkUpAmt) - Convert.ToDecimal(CommissionAmt)).ToString();       //
                            rs.Currency = RoomRQ.AgentDetails.CurrencyCode.ToString().Trim().ToUpper();//(room.Attributes("ApproximateBase").Any() && room.Attributes("ApproximateBase").FirstOrDefault().Value != null) ? room.Attribute("ApproximateBase").Value.Substring(0, 3) : room.Attribute("Base").Value.Substring(0, 3);
                            rs.AllocationDetails = room.Attribute("RateOfferId").Value;
                            rs.RoomCount = RoomCount.ToString();
                            rs.AdultCount = AdultCount.ToString();
                            rs.ChildCount = ChildCount.ToString();
                            rs.Supplier = RoomRQ.Supplier;
                            rs.Supplier_Id = RoomRQ.SupplierId;
                            rs.CancellationPolicy = room.Element("CancelInfo").Element("CancellationPolicy") != null ? room.Element("CancelInfo").Element("CancellationPolicy").Value : "";
                            rs.TariffNotes = room.Elements("RoomRateDescription").Where(m => m.Attribute("Name").Value == "Total Includes").Descendants("Text").FirstOrDefault().Value;
                            rs.TotalAmount = (room.Attributes("ApproximateTotal").Any() && room.Attributes("ApproximateTotal").FirstOrDefault().Value != null) ? Regex.Replace(room.Attribute("ApproximateTotal").Value, "[^.0-9]", "") : Regex.Replace(room.Attribute("Total").Value, "[^.0-9]", "");
                            rs.TotalAmount = (Convert.ToDecimal(rs.TotalAmount) * Convert.ToDecimal(FareCurreny)).ToString();
                            rss.Add(rs);
                        }

                        foreach (var results in xdoc.Descendants("GuestReviews"))
                        {
                            foreach (var a in results.Elements("Comments"))
                            {
                                review = new Review();
                                review.Comment = a.Value;
                                review.CommentID = a.Attribute("CommentId").Value;
                                review.Date = a.Attribute("Date").Value;
                                lstReview.Add(review);
                            }


                        }

                        if (htl.Descendants("HotelDetailsRsp").Any())
                        {
                            htl.Element("HotelDetailsRsp").Remove();
                        }

                        htl.Add(xdoc.Descendants("HotelDetailsRsp").First());

                        //INSERT LOG INTO LTBL_TRM_API_LOG_DETAILS START
                        objLTBL_TRM_API_LOG_DETAILS = new LTBL_TRM_API_LOG_DETAILS();
                        objLTBL_TRM_API_LOG_DETAILS.TRACEID = RoomRQ.TraceId;
                        objLTBL_TRM_API_LOG_DETAILS.XML = xdoc_Res.ToString();
                        objLTBL_TRM_API_LOG_DETAILS.METHOD = "UPDATE";
                        objLTBL_TRM_API_LOG_DETAILS.BOOKEDST = "0";
                        objLTBL_TRM_API_LOG_DETAILS.STATUS = "ROOM_UPDATE";
                        objLTBL_TRM_API_LOG_DETAILS.UPDATE_LTBL_TRM_API_LOG_DETAILS();
                        //INSERT LOG INTO LTBL_TRM_API_LOG_DETAILS END

                        objStayRS.Rooms = rss;
                        objStayRS.Review = lstReview;
                    }
                }
                // if (objStayRS.Rooms==null)
                // {
                //      objStayRS.Status = "00";
                //      return objStayRS;
                // }
                return objStayRS;
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", RoomRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), RoomRQ.SupplierId, RoomRQ.TraceId);
                objStayRS.Rooms = null;
                objStayRS.Status = "00";
                objStayRS.Error = ex.Message;
                return objStayRS;
            }

        }
        #endregion

        #region HotelMediaSearch
        /// <summary>
        /// 
        /// </summary>
        /// <param name="HotelCode"></param>
        /// <param name="HotelChain"></param>
        /// <returns></returns>
        public string HotelMediaSearch(string HotelCode, string HotelChain, string HotelLocation, string Name)
        {
            var strMediaXmlReq = new StringBuilder();
            var helper = new HotelHelper();
            strMediaXmlReq.AppendFormat("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
            strMediaXmlReq.AppendFormat("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">");
            strMediaXmlReq.AppendFormat("<soapenv:Header/>");
            strMediaXmlReq.AppendFormat("<soapenv:Body>");
            strMediaXmlReq.AppendFormat("<hotel:HotelMediaLinksReq AuthorizedBy=\"user\" SizeCode='O' TargetBranch=\"{0}\" TraceId=\"trace\" xmlns:hotel=\"http://www.travelport.com/schema/hotel_v41_0\" xmlns:com=\"http://www.travelport.com/schema/common_v41_0\">", BranchCode);
            strMediaXmlReq.AppendFormat("<com:BillingPointOfSaleInfo OriginApplication=\"UAPI\"/>");

            strMediaXmlReq.AppendFormat("<hotel:HotelProperty HotelChain=\"{1}\" HotelCode=\"{0}\"", HotelCode, HotelChain);

            if (HotelLocation != "")
            {
                strMediaXmlReq.AppendFormat(" HotelLocation=\"{0}\"", HotelLocation);
            }
            if (Name != "")
            {
                strMediaXmlReq.AppendFormat(" Name=\"{0}\"", Name);
            }
            strMediaXmlReq.AppendFormat(" />");

            strMediaXmlReq.AppendFormat("</hotel:HotelMediaLinksReq>");
            strMediaXmlReq.AppendFormat("</soapenv:Body>");
            strMediaXmlReq.AppendFormat("</soapenv:Envelope>");
            var Media = new StringBuilder();
            try
            {
                var Mediarequest = strMediaXmlReq.ToString();
                var Mediaresponse = SendRequest(Mediarequest);
                if (Mediaresponse != null)
                {
                    XDocument xdocM = XDocument.Parse(Mediaresponse.ToString());
                    xdocM = XDocument.Parse(helper.RemoveXmlns(xdocM.ToString()));
                    Media = new StringBuilder();
                    Media.Append("<ImageList>");
                    foreach (var imageurl in xdocM.Descendants("MediaItem"))
                    {

                        //var image = string.Empty;
                        //image = image + "<Image";
                        //if (imageurl.Attributes("caption").Any())
                        //{
                        //    image = image + " caption=\"" + imageurl.Attribute("caption").Value.Replace("&", "&amp;") + "\"";
                        //}
                        //else
                        //{
                        //    image = image + " caption=\"\"";
                        //}
                        //if (imageurl.Attributes("height").Any())
                        //{
                        //    image = image + " height=\"" + imageurl.Attribute("height").Value.Replace("&", "&amp;") + "\"";
                        //}
                        //else
                        //{
                        //    image = image + " height=\"\"";
                        //}
                        //if (imageurl.Attributes("width").Any())
                        //{
                        //    image = image + " width=\"" + imageurl.Attribute("width").Value.Replace("&", "&amp;") + "\"";
                        //}
                        //else
                        //{
                        //    image = image + " width=\"\"";
                        //}
                        //if (imageurl.Attributes("type").Any())
                        //{
                        //    image = image + " type=\"" + imageurl.Attribute("type").Value.Replace("&", "&amp;") + "\"";
                        //}
                        //else
                        //{
                        //    image = image + " type=\"\"";
                        //}
                        //image = image + ">" + imageurl.Attribute("url").Value.Replace("&", "&amp;") + "</Image>";
                        //Media.AppendFormat(image);
                        if (imageurl.Attributes("height").Any())
                        {
                            Media.Append("<Image>" + imageurl.Attribute("url").Value.Replace("&", "&amp;") + "</Image>");
                        }
                    }
                    Media.Append("</ImageList>");
                }
                else
                {
                    Media = new StringBuilder();
                    Media.Append("<ImageList>");
                    Media.Append("<Image></Image>");
                    Media.Append("</ImageList>");
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                Media.Append("<ImageList>");
                Media.Append("<Image></Image>");
                Media.Append("</ImageList>");
            }
            return Media.ToString();
        }
        #endregion

        #region HotelBooking
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        internal string HotelBooking(Property objProp, ConfirmHotelRQ ConfirmRQ)
        {
            var response = "";
            try
            {
                var xdoc = new XDocument();
                var helper = new HotelHelper();
                string FileName = string.Empty;
                //  TraceId = Guid.NewGuid().ToString();
                //SELECT LOG INTO LTBL_TRM_API_LOG_DETAILS START
                LTBL_TRM_API_LOG_DETAILS objLTBL_TRM_API_LOG_DETAILS = new LTBL_TRM_API_LOG_DETAILS();
                objLTBL_TRM_API_LOG_DETAILS.TRACEID = TraceId;
                objLTBL_TRM_API_LOG_DETAILS.METHOD = "SELECT";
                var Result = objLTBL_TRM_API_LOG_DETAILS.GET_LTBL_TRM_API_LOG_DETAILS();
                var xdoc_ = new XDocument();
                xdoc_ = XDocument.Parse(Result);
                xdoc_ = XDocument.Parse(helper.RemoveXmlns(xdoc_.ToString()));
                string Dob = string.Empty;
                //SELECT LOG INTO LTBL_TRM_API_LOG_DETAILS END
                if (CreditCard == null)
                {
                    CreditCard = new CreditCard();

                    ////VISA CREDIT CARD DETAILS FOR TRM
                    CreditCard.BankName = "HDFC";
                    CreditCard.CardPType = "Credit";
                    CreditCard.CardType = "VI";
                    CreditCard.CardHolderName = "Test Travelport";
                    CreditCard.CardNumber = "4111111111111111";
                    CreditCard.CardExpirationYear = "2018";
                    CreditCard.CardExpirationMonth = "12";
                    CreditCard.CardIdentifier = "123";

                    //if (Mode.ToUpper() == "TEST")
                    //{
                    //    //////VISA DEBIT CARD DETAILS FOR TRM
                    //    CreditCard.BankName = BankName.ToString();
                    //    CreditCard.CardPType = CardPType.ToString();
                    //    CreditCard.CardType = CardType.ToString();
                    //    CreditCard.CardHolderName = CardHolderName.ToString();
                    //    CreditCard.CardNumber = CardNumber.ToString();
                    //    CreditCard.CardExpirationYear = CardExpirationYear.ToString();
                    //    CreditCard.CardExpirationMonth = CardExpirationMonth.ToString();
                    //    CreditCard.CardIdentifier = CardIdentifier.ToString();
                    //}


                    //CreditCard.BankName = BankName.ToString();
                    //CreditCard.CardPType = CardPType.ToString();
                    //CreditCard.CardType = CardType.ToString();
                    //CreditCard.CardHolderName = CardHolderName.ToString();
                    //CreditCard.CardNumber = CardNumber.ToString();
                    //CreditCard.CardExpirationYear = CardExpirationYear.ToString();
                    //CreditCard.CardExpirationMonth = CardExpirationMonth.ToString();
                    //CreditCard.CardIdentifier = CardIdentifier.ToString();

                    CreditCard.StateCode = "KA";
                    CreditCard.CountryCode = "IN";
                    CreditCard.AddressName = "Arcade";
                    CreditCard.Street = "CMR Rd,HRBR Layout 2nd Block,Kalyan Nagar";
                    CreditCard.City = "Bangalore";
                    CreditCard.State = "Karnataka";
                    CreditCard.PostalCode = "560043";
                    CreditCard.Country = "IN";
                }
                else
                {
                    if (GuestInformation != null)
                    {
                        GuestInformation.UserAddress = "CMR Rd,HRBR Layout 2nd Block,Kalyan Nagar";
                    }
                }
                var strXmlReq = new StringBuilder();

                foreach (var htl in xdoc_.Descendants("HotelSearchResult").Where(x => x.Element("HotelProperty").Attribute("HotelCode").Value == HotelId))
                {
                    GDSCODE = ConfirmRQ.Vendor;
                    strXmlReq.AppendFormat("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
                    strXmlReq.AppendFormat("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">");
                    strXmlReq.AppendFormat("<soapenv:Header/>");
                    strXmlReq.AppendFormat("<soapenv:Body>");
                    strXmlReq.AppendFormat("<univ:HotelCreateReservationReq AuthorizedBy='user' TargetBranch='{0}' ProviderCode='{1}' UserAcceptance='true' xmlns:univ='http://www.travelport.com/schema/universal_v43_0' xmlns:common_v43_0='http://www.travelport.com/schema/common_v43_0' xmlns:hotel='http://www.travelport.com/schema/hotel_v43_0' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>", objProp.ApiKey, GDSCODE);
                    strXmlReq.AppendFormat("<common_v43_0:BillingPointOfSaleInfo OriginApplication=\"UAPI\"/>");

                    ChildCount = 0;
                    AdultCount = 0;
                    RoomCount = 0;
                    InfantCount = 0;

                    var strXmlChd = new StringBuilder();
                    strXmlChd.AppendFormat("<hotel:BookingGuestInformation>");
                    var count = 0;
                    foreach (var room in PaxCounts)
                    {
                        strXmlChd.AppendFormat("<hotel:Room>");
                        strXmlChd.AppendFormat("<hotel:Adults>" + room.Guest.Where(c => c.type == "AD").ToList().Count() + "</hotel:Adults>");

                        foreach (var guest in room.Guest)
                        {
                            if (!string.IsNullOrEmpty(guest.DOB))
                            {
                                var DOB = guest.DOB.Split('-');
                                Dob = DOB[2] + "-" + DOB[1] + "-" + DOB[0];
                            }
                            else
                            {
                                return "Err: DOB is Null / Empty ";
                            }
                            Nationality = "IN";
                            var Gender = string.Empty;
                            var TravelerType = string.Empty;
                            if (guest.title.ToLower() == "mr")
                            {
                                Gender = "M";
                                TravelerType = "ADT";
                                AdultCount++;
                            }
                            else if (guest.title.ToLower() == "ms")
                            {
                                Gender = "F";
                                TravelerType = "ADT";
                                AdultCount++;
                            }
                            else if (guest.title.ToLower() == "mrs")
                            {
                                Gender = "F";
                                TravelerType = "ADT";
                                AdultCount++;
                            }
                            else if (guest.title.ToLower() == "mstr")
                            {
                                Gender = "M";
                                TravelerType = "CNN";
                            }
                            else if (guest.title.ToLower() == "miss")
                            {
                                Gender = "F";
                                TravelerType = "CNN";
                            }
                            if (guest.type == "AD")
                            {
                                strXmlChd.AppendFormat("<common_v43_0:BookingTravelerRef Key='{0}'/>", count);
                            }
                            if (guest.type == "CH")
                            {
                                if (int.Parse(guest.age) > 1)
                                {
                                    strXmlChd.AppendFormat("<hotel:Child Age='{0}'>", guest.age);
                                    strXmlChd.AppendFormat("<common_v43_0:BookingTravelerRef Key='{0}'/>", count);
                                    strXmlChd.AppendFormat("</hotel:Child>");

                                    ChildCount++;
                                }
                                else
                                {
                                    InfantCount++;
                                }
                            }
                            strXmlReq.AppendFormat("<common_v43_0:BookingTraveler TravelerType=\"" + TravelerType + "\" Age=\"" + guest.age + "\" DOB=\"" + Dob + "\" Gender=\"" + Gender + "\" Nationality=\"" + Nationality + "\" Key='{0}'>", count);
                            strXmlReq.AppendFormat("<common_v43_0:BookingTravelerName Prefix=\"" + guest.title.ToUpper() + "\" First=\"" + guest.firstname + "\" Last=\"" + guest.lastname + "\"/>");

                            if (count == 0)
                            {
                                strXmlReq.AppendFormat("<common_v43_0:PhoneNumber AreaCode=\"080\" CountryCode=\"91\" Location=\"BLR\" Number=\"41215877\" Type=\"Home\"/>");
                                strXmlReq.AppendFormat("<common_v43_0:Email EmailID=\"" + "tony@webaxyz.com" + "\" Type=\"P\"/>");
                                strXmlReq.AppendFormat("<common_v43_0:Address>");
                                strXmlReq.AppendFormat("<common_v43_0:AddressName>" + CreditCard.AddressName + "</common_v43_0:AddressName>");
                                strXmlReq.AppendFormat("<common_v43_0:Street>" + CreditCard.Street + "</common_v43_0:Street>");
                                strXmlReq.AppendFormat("<common_v43_0:City>" + CreditCard.City + "</common_v43_0:City>");
                                strXmlReq.AppendFormat("<common_v43_0:State>" + CreditCard.State + "</common_v43_0:State>");
                                strXmlReq.AppendFormat("<common_v43_0:PostalCode>" + CreditCard.PostalCode + "</common_v43_0:PostalCode>");
                                strXmlReq.AppendFormat("<common_v43_0:Country>" + CreditCard.Country + "</common_v43_0:Country>");
                                strXmlReq.AppendFormat("</common_v43_0:Address>");
                            }
                            strXmlReq.AppendFormat("</common_v43_0:BookingTraveler>");
                            count++;
                        }
                        strXmlChd.AppendFormat("</hotel:Room>");
                        RoomCount++;
                    }
                    strXmlChd.AppendFormat("</hotel:BookingGuestInformation>");

                    var HotelRateDetail = htl.Descendants("HotelDetailsRsp").Descendants("HotelRateDetail").Where(x => x.Attribute("RatePlanType").Value == RatePlanType).First();
                    var HtlProperty = htl.Descendants("HotelProperty").First();

                    strXmlReq.AppendFormat("" + HotelRateDetail.ToString().Replace("<", "<hotel:").Replace("</", "</hotel:").Replace("<hotel:/", "</hotel:") + "");
                    strXmlReq.AppendFormat("" + HtlProperty.ToString().Replace("<", "<hotel:").Replace("</", "</hotel:").Replace("<hotel:/", "</hotel:").Replace("<hotel:PhoneNumber", "<com:PhoneNumber").Replace("<hotel:Distance", "<com:Distance").Replace("<hotel:CoordinateLocation", "<common_v43_0:CoordinateLocation") + "");

                    strXmlReq.AppendFormat("<hotel:HotelStay>");
                    strXmlReq.AppendFormat("<hotel:CheckinDate>" + CheckIn + "</hotel:CheckinDate>");
                    strXmlReq.AppendFormat("<hotel:CheckoutDate>" + CheckOut + "</hotel:CheckoutDate>");
                    strXmlReq.AppendFormat("</hotel:HotelStay>");

                    /////////Reference 
                    ////////////////strXmlReq.AppendFormat("<com:Guarantee Type=\"Guarantee\">");
                    ////////////////strXmlReq.AppendFormat("<com:CreditCard BankCountryCode=\"IN\" BankName=\"AMEX\" CVV=\"xxx\" ExpDate=\"2016-10\" Name=\"Roven J Lobo\" Number=\"373900000000000\" Type=\"AX\"/>");
                    ////////////////strXmlReq.AppendFormat("</com:Guarantee>");

                    var GuaranteeType = string.Empty;
                    if (HotelRateDetail.Descendants("GuaranteeInfo").Attributes("GuaranteeType").Any())
                    {
                        if (HotelRateDetail.Descendants("GuaranteeInfo").Attributes("GuaranteeType").FirstOrDefault().Value != "")
                        {
                            GuaranteeType = HotelRateDetail.Descendants("GuaranteeInfo").Attributes("GuaranteeType").FirstOrDefault().Value;
                        }
                        else
                        {
                            GuaranteeType = "Deposit";
                        }
                    }

                    if (GuaranteeType == "Prepayment")
                    {
                        GuaranteeType = "Guarantee";
                    }

                    strXmlReq.AppendFormat("<common_v43_0:Guarantee Type=\"" + GuaranteeType + "\">");
                    strXmlReq.AppendFormat("<common_v43_0:CreditCard BankCountryCode=\"" + CreditCard.Country + "\" BankName=\"" + CreditCard.BankName + "\"  CVV=\"" + CreditCard.CardIdentifier + "\" ExpDate=\"" + CreditCard.CardExpirationYear + "-" + CreditCard.CardExpirationMonth + "\" Name=\"" + CreditCard.CardHolderName + "\" Number=\"" + CreditCard.CardNumber + "\" Type=\"" + CreditCard.CardType + "\"/>");
                    strXmlReq.AppendFormat("</common_v43_0:Guarantee>");

                    foreach (var HostToken in htl.Descendants("HotelDetailsRsp").Descendants("HostToken"))
                    {
                        strXmlReq.AppendFormat("<common_v43_0:HostToken Host='" + HostToken.Attribute("Host").Value + "'>" + HostToken.Value + "</common_v43_0:HostToken>");
                    }

                    strXmlReq.AppendFormat("{0}", strXmlChd.ToString());

                    strXmlReq.AppendFormat("</univ:HotelCreateReservationReq>");
                    strXmlReq.AppendFormat("</soapenv:Body>");
                    strXmlReq.AppendFormat("</soapenv:Envelope>");
                }
                var request = strXmlReq.ToString();
                response = SendRequest(request);
                #region Request -> Supplier
                var hlp = new HotelHelper();
                string LogData = "<EVENT><BOOKING_REQUESTDATA>" + hlp.RemoveXmlns(request.ToString()).ToString() + "</BOOKING_REQUESTDATA>"
                                 + "<URL>" + objProp.Url + "</URL>"
                                 + "<USERNAME>" + objProp.Username + "</USERNAME>"
                                 + "<PASSWORD>" + ConfirmRQ.Vendor + "</PASSWORD>"
                                 + "<VENDOR>TRM</VENDOR>"
                                 + "<CURRENCY>" + objProp.Currency + "</CURRENCY>"
                                 + "</EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "F", GetType().Name, "HotelBooking", LogData.ToString(), ConfirmRQ.SupplierId, ConfirmRQ.TraceId);
                #endregion
                #region Response Log
                LogData = "<EVENT><BOOKING_RESPONSEDATA>" + helper.RemoveXmlns(response).ToString() + "</BOOKING_RESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "F", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId, ConfirmRQ.TraceId);
                #endregion

            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            }
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
                    if (!xdoc.Descendants("ErrorInfo").Any())
                    {

                        string ResStatus = string.Empty;
                        if (xdoc.Descendants("UniversalRecord").Attributes("LocatorCode").Any())
                        {
                            _BookingRS.ConfirmationRef = xdoc.Descendants("UniversalRecord").Attributes("LocatorCode").First().Value;
                        }
                        if (xdoc.Descendants("HotelReservation").Attributes("Status").Any())
                        {
                            ResStatus = xdoc.Descendants("HotelReservation").Attributes("Status").First().Value.ToString();
                        }
                        if (xdoc.Descendants("HotelReservation").Attributes("BookingConfirmation").Any())
                        {
                            _BookingRS.ConfirmationRef = xdoc.Descendants("HotelReservation").Attributes("BookingConfirmation").First().Value;
                            // _BookingRS.BookingRef = xdoc.Descendants("HotelReservation").Attributes("BookingConfirmation").First().Value;
                        }
                        if (ResStatus.ToUpper() == "HK")
                        {
                            success = "Success";
                            _BookingRS.BookingStatus = "Reservation confirmed and paid";
                            _BookingRS.StatusCode = "01";
                            _BookingRS.Supplier = ConfirmRQ.Vendor;
                            _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;
                        }
                        else if (ResStatus.ToUpper() == "UN")
                        {
                            success = "UnSuccess";
                            _BookingRS.BookingStatus = "Error Code: Fair is expired please book any other hotel";
                            _BookingRS.StatusCode = "00";
                            _BookingRS.Supplier = ConfirmRQ.Vendor;
                            _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;
                        }
                        else
                        {
                            success = "UnSuccess";
                            _BookingRS.BookingStatus = "Error Code: Internal error from supplier end please contact support team";
                            _BookingRS.StatusCode = "00";
                            _BookingRS.Supplier = ConfirmRQ.Vendor;
                            _BookingRS.ClientCountryId = ConfirmRQ.ClientCountryId;
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
                        if (xdoc.Descendants("ErrorInfo").Any())
                        {
                            foreach (var err in xdoc.Descendants("ErrorInfo"))
                            {
                                error = error + "Code: " + err.Element("Code").Value;
                                error = error + "Service: " + err.Element("Service").Value;
                                error = error + "Type: " + err.Element("Type").Value;
                                error = error + "Description: " + err.Element("Description").Value;
                            }
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

        #region HotelCancellation
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        internal string HotelCancellation()
        {
            var strXmlReq = new StringBuilder();
            strXmlReq.AppendFormat("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
            strXmlReq.AppendFormat("<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:com='http://www.travelport.com/schema/common_v34_0' xmlns:univ='http://www.travelport.com/schema/universal_v34_0'>");
            strXmlReq.AppendFormat("<soapenv:Header/>");
            strXmlReq.AppendFormat("<soapenv:Body>");
            strXmlReq.AppendFormat("<univ:UniversalRecordCancelReq AuthorizedBy='user' TargetBranch='' TraceId='' UniversalRecordLocatorCode='' Version='0'>");
            strXmlReq.AppendFormat("<com:BillingPointOfSaleInfo OriginApplication='UAPI'/>");
            strXmlReq.AppendFormat("</univ:UniversalRecordCancelReq>");
            strXmlReq.AppendFormat("</soapenv:Body>");
            strXmlReq.AppendFormat("</soapenv:Envelope>");
            var request = strXmlReq.ToString();
            var response = SendRequest(request);
            //var foldername = DateTime.Now.ToString("hh-mm-ss-tt");
            //foldername = GDSCODE + "_" + foldername;
            //var REQXml = Logger.WriteLog(Mode + " UAPI", "TRM Cancel", foldername, "TRM CancelRequest", request.ToString(), "xml");
            //var RESXml = Logger.WriteLog(Mode + " UAPI", "TRM Cancel", foldername, "TRM CancelResponse", response, "xml");
            //string Message = "TRM Cancel Request: " + Environment.NewLine + Environment.NewLine + request.ToString() + Environment.NewLine + Environment.NewLine + Environment.NewLine;
            //Message += "TRM Cancel Response: " + Environment.NewLine + Environment.NewLine + response.ToString() + Environment.NewLine + Environment.NewLine + Environment.NewLine;
            //Message += "TRM Cancel Request File Name: " + Environment.NewLine + Environment.NewLine + REQXml.ToString() + Environment.NewLine + Environment.NewLine + Environment.NewLine;
            //Message += "TRM Cancel Response File Name: " + Environment.NewLine + Environment.NewLine + RESXml.ToString() + Environment.NewLine + Environment.NewLine + Environment.NewLine;
            //HotelHelper.SendMail("tony@webaxyz.com", "TRM UAPI Hotel Cancel Ref No:" + BRN + "_Time:" + DateTime.Now, Message.ToString());
            return response;
        }
        #endregion

        #region BookingInformation
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        internal string BookingInformation()
        {
            var strXmlReq = new StringBuilder();

            strXmlReq.AppendFormat("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
            strXmlReq.AppendFormat("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\">");
            strXmlReq.AppendFormat("<soapenv:Header/>");
            strXmlReq.AppendFormat("<soapenv:Body>");
            strXmlReq.AppendFormat("<univ:UniversalRecordRetrieveReq AuthorizedBy=\"user\" TargetBranch=\"" + BranchCode + "\" TraceId=\"trace\" xmlns:univ=\"http://www.travelport.com/schema/universal_v41_0\" xmlns:com=\"http://www.travelport.com/schema/common_v41_0\">");
            strXmlReq.AppendFormat("<com:BillingPointOfSaleInfo OriginApplication=\"UAPI\"/>");
            strXmlReq.AppendFormat("<univ:UniversalRecordLocatorCode>" + BookingId + "</univ:UniversalRecordLocatorCode>");
            strXmlReq.AppendFormat("</univ:UniversalRecordRetrieveReq>");
            strXmlReq.AppendFormat("</soapenv:Body>");
            strXmlReq.AppendFormat("</soapenv:Envelope>");
            var request = strXmlReq.ToString();
            var response = SendRequest(request);
            //var foldername = DateTime.Now.ToString("hh-mm-ss-tt");
            //foldername = GDSCODE + "_" + foldername;
            //Logger.WriteLog(Mode + " UAPI", "TRM BookingInformation", foldername, "TRM BookingInformationRequest", request.ToString(), "xml");
            //Logger.WriteLog(Mode + " UAPI", "TRM BookingInformation", foldername, "TRM BookingInformationResponse", response, "xml");
            return response;
        }
        #endregion

        #region GetResponse
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        private string GetResponse(string request)
        {
            var readString = string.Empty;

            try
            {
                var req = (HttpWebRequest)WebRequest.Create(UAPIUrl);
                req.Timeout = 300000;
                req.Method = "POST";
                req.KeepAlive = false;
                req.ContentType = "text/xml;charset=UTF-8";
                req.Headers.Add("Accept-Encoding", "gzip, deflate");
                req.Headers.Add("Content-Encoding", "gzip, deflate");
                req.AutomaticDecompression = DecompressionMethods.GZip;
                req.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(System.Text.ASCIIEncoding.ASCII.GetBytes(string.Format("{0}:{1}", UserName, Password))));
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
                    readString = answerReader.ReadToEnd();
                    var helper = new HotelHelper();
                    var filteredDocument = helper.GetResponseDocument(readString);
                    return filteredDocument;
                }
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return null;
            }
        }
        #endregion

        #region SendRequest
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string SendRequest(string request)
        {
            XDocument doc = XDocument.Parse(request);
            var serverRequest = this.CreateRequestObject();

            var encoding = new UTF8Encoding();
            var requestBytes = encoding.GetBytes(request.ToString());

            using (Stream postStream = serverRequest.GetRequestStream())
            {
                using (var zipStream = new GZipStream(postStream, CompressionMode.Compress))
                {
                    zipStream.Write(requestBytes, 0, requestBytes.Length);
                    zipStream.Close();
                }
            }
            Stream receiveStream = null;
            HttpWebResponse webResponse;
            string result = "";
            try
            {
                webResponse = (HttpWebResponse)serverRequest.GetResponse();
                receiveStream = new GZipStream(webResponse.GetResponseStream(), CompressionMode.Decompress);

                using (var answerReader = new StreamReader(webResponse.GetResponseStream(), System.Text.Encoding.UTF8))
                {
                    result = answerReader.ReadToEnd();
                }
            }
            catch (WebException exception)
            {
                if (exception.Response != null)
                {

                }
                else
                {
                    return null;
                }
            }

            return result;
        }
        #endregion

        #region CreateRequestObject
        /// <summary>
        /// Creates the request object
        /// </summary>
        /// <returns>request object</returns>
        private HttpWebRequest CreateRequestObject()
        {
            var serverRequest = (HttpWebRequest)WebRequest.Create(Property.Url);

            // We are posting a XML request
            serverRequest.Method = "POST";
            serverRequest.ContentType = "text/xml;charset=UTF-8";
            serverRequest.Headers.Add("Accept-Encoding", "gzip, deflate");
            serverRequest.Headers.Add("Content-Encoding", "gzip");
            // Set up the connection to optimize for web services and receive compressed responses.
            ServicePointManager.UseNagleAlgorithm = false;
            ServicePointManager.Expect100Continue = false;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls |
                                       SecurityProtocolType.Tls11 |
                                       SecurityProtocolType.Tls12;
            serverRequest.AutomaticDecompression = DecompressionMethods.GZip;

            // Always add authentication to the header - avoids issue with internal URL's that doesn't require
            // authentication.
            byte[] authBytes = Encoding.UTF8.GetBytes((Property.Username + ":" + Property.Password).ToCharArray());
            serverRequest.Headers["Authorization"] = "Basic " + Convert.ToBase64String(authBytes);
            return serverRequest;
        }
        #endregion

        #region GetHotelMedia
        /// <summary>
        /// 
        /// </summary>
        /// <param name="TRMHotelCode"></param>
        /// <returns></returns>
        private DataTable GetHotelMedia(string TRMHotelCode)
        {
            DataTable dataTable = new DataTable();
            try
            {
                var constr = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
                SqlConnection conn = new SqlConnection(constr);
                conn.Open();
                SqlCommand command = new SqlCommand("SELECT TOP(1)* FROM GHOTEL WHERE TRMHotelCode=@TRMHotelCode and City=@City", conn);
                command.Parameters.AddWithValue("@TRMHotelCode", TRMHotelCode);
                command.Parameters.AddWithValue("@City", Destination.ToUpper());
                SqlDataAdapter da = new SqlDataAdapter(command);
                da.Fill(dataTable);
                conn.Close();
                da.Dispose();
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
            }
            return dataTable;
        }
        #endregion

        //END
        #endregion
    }
}