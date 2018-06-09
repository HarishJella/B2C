using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Xml.Linq;
using WXYZ_Hotel.Models;
using WXYZ_Hotel.Common;
using System.Threading.Tasks;
using System.Web;
using HotelService;
using WXYZ_Hotel.Hotel;
using System.Xml;
using Newtonsoft.Json;
using System.IO;
using System.Reflection;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Controllers
{
    public class SearchController : ApiController
    {
        XElement destination { get; set; }
        internal int ThreadCount = 0;
        string LogData = string.Empty;
      
        [HttpPost]
        [Route("api/HotelSearch")]

        #region SEARCH REQUEST FORMATION
        public HTLSearchRS HotelSearchResult(HotelSearchRQ SearchRQ)
        {
            //HotelSearchRS SearchRS = new HotelSearchRS();
            HTLSearchRS SearchRS = new HTLSearchRS();
            var validate = new Validate();
            string checkin = "", checkout = "", city = "", SourceMarket = "";
            var result = new StringBuilder();
            try
            {
                #region Request Log <- Application
                LogData = "<EVENT><SERVICEREQUESTDATA>" + JsonConvert.SerializeObject(SearchRQ, Newtonsoft.Json.Formatting.Indented) + "</SERVICEREQUESTDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", SearchRQ.AgentDetails, "E", GetType().Name, "HotelSearch", LogData, "", "");
                #endregion
                string errormessage = validate.SearchRequest(SearchRQ);
                String EnabledSupplier = SearchRQ.Vendor;// "trm";
                var BaseClass = new BaseClass();
                if (string.IsNullOrEmpty(errormessage))
                {
                    var SupplierName = EnabledSupplier.Split(',');
                    #region Fetch SupplierDetails

                    string Result = string.Empty;
                    string DBErrorMsg = string.Empty;
                    bool FetchSupplierResult = WXYZ_Hotel.Common.SQLAccess.Fetch_supplier_Details(SearchRQ.AgentDetails, "HOTEL", "", ref Result, ref DBErrorMsg);
                    Rootobject SupplierData = new Rootobject();
                    if (FetchSupplierResult && !string.IsNullOrEmpty(Result))
                    {
                        if (!string.IsNullOrEmpty(DBErrorMsg))
                        {
                            errormessage = DBErrorMsg + "-#03";
                        }
                        SupplierData = JsonConvert.DeserializeObject<Rootobject>(Result);
                    }
                    else
                        errormessage = "Currently suppliers not available.Please contact support team.-#03";


                    #endregion

                    if (SupplierData.Table != null && SupplierData.Table.Count() > 0)
                    {
                        city = SearchRQ.Destination;
                        destination = BaseClass.GetDestination(city);
                        checkin = SearchRQ.CheckIn;
                        checkout = SearchRQ.CheckOut;
                        SourceMarket = "";//SearchRQ.SourceMarket;
                        SearchHistory objSearchHistory = new SearchHistory();
                        objSearchHistory.City = city;
                        objSearchHistory.CheckIn = checkin;
                        objSearchHistory.CheckOut = checkout;
                        objSearchHistory.AgencyCode = "test"; //SearchRQ.AgentDetails.AgentID;
                        objSearchHistory.BranchCode = "test";//SearchRQ.AgentDetails.BranchId;
                        string[] checkIn = (SearchRQ.CheckIn.Replace("-", "/")).Split('/');
                        var tasks = new List<Task<string>>();
                        foreach (var Sup_Name in SupplierData.Table)
                        {
                            foreach (var code in SupplierName)
                            {
                                if (SearchRQ.AgentDetails.AgentType.ToString().ToUpper().Trim() == "INTERNAL" && code.ToString().Trim().ToUpper() == Sup_Name.CRSName.ToString().Trim().ToUpper() || SearchRQ.AgentDetails.AgentType.ToString().ToUpper().Trim() == "EXTERNAL" && string.IsNullOrEmpty(code))
                                {
                                    tasks.Add(Task.Factory.StartNew(() => MultiSearch(SearchRQ, Sup_Name.CRSName.ToString(), Sup_Name.AvailCredentials.ToString(), SourceMarket, Sup_Name.AvailSupplier)));
                                }
                            }
                        }
                        Task.WaitAll(tasks.ToArray());
                        List<HotelDetails> objHotelDetails = new List<HotelDetails>();
                        string ErrorMsg = string.Empty;
                        foreach (var tk in tasks)
                        {
                            if (!tk.Result.ToString().Contains("#03") && !tk.Result.ToString().Contains("#05"))
                            {
                                objHotelDetails.AddRange(JsonConvert.DeserializeObject<List<HotelDetails>>(tk.Result.ToString()));
                            }
                            else
                            {
                                SearchRS.Error += tk.Result.ToString() + ".";
                                SearchRS.response = "";
                                SearchRS.StatusCode = "00";
                                SearchRS.ClientCountryId = SearchRQ.ClientCountryId;
                                return SearchRS;
                            }
                        }

                        List<string> response = new List<string>();

                        if (objHotelDetails.Count > 0)
                        {
                            var orderByHotelResult = from h in objHotelDetails
                                                     orderby Convert.ToDecimal(h.StartAmount) //Sorts the StartAmount collection in descending order
                                                     select h;

                            objHotelDetails = orderByHotelResult.ToList();
                            SearchRS.response = JsonConvert.SerializeObject(orderByHotelResult);
                            SearchRS.Error = "";
                            SearchRS.StatusCode = "01";
                            SearchRS.ClientCountryId = SearchRQ.ClientCountryId;
                        }
                        else
                        {
                            SearchRS.response = "";
                            SearchRS.Error = "No Hotels Found to your Search Criteria , Please Refine your Search ";//ErrorMsg
                            SearchRS.StatusCode = "00";
                            SearchRS.ClientCountryId = SearchRQ.ClientCountryId;
                        }
                    }
                    else
                    {
                        SearchRS.response = "";
                        SearchRS.Error = "Sorry! your Api Key and Mode value is wrong! Please send valid Api key and Mode.(or) No Supplier Mapping.#03";
                        SearchRS.StatusCode = "00";
                        SearchRS.ClientCountryId = SearchRQ.ClientCountryId;
                    }
                }
                else
                {
                    SearchRS.Error = errormessage;
                    SearchRS.StatusCode = "00";
                    SearchRS.response = errormessage;
                    SearchRS.ClientCountryId = SearchRQ.ClientCountryId;
                }
                #region Response Log -> Application
                LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(SearchRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", SearchRQ.AgentDetails, "E", GetType().Name, "_HotelSearch", LogData.ToString(), "", "");
                #endregion
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", SearchRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                SearchRS.Error = ex.Message.ToString() + ".#05";
                SearchRS.StatusCode = "00";
                SearchRS.response = ex.Message.ToString() + ".#05";
                SearchRS.ClientCountryId = SearchRQ.ClientCountryId;
            }
            return SearchRS;
        }
        #endregion

        #region SUPPLIER CLASS DETAILS

        public class Rootobject
        {
            public Table[] Table { get; set; }
        }
        public class Table
        {
            public string BranchID { get; set; }
            public string CRSId { get; set; }
            public string CRSName { get; set; }
            public string ProductName { get; set; }
            public string AvailBranch { get; set; }
            public string AvailPCC { get; set; }
            public string AvailSupplier { get; set; }
            public string AvailCredentials { get; set; }
        }

        #endregion

        #region MULTISEARCH
        private string MultiSearch(HotelSearchRQ request, string SupplierName, string SupplierCredentials, string SourceMarket, string SupplierId)
        {
            BaseClass objbase = new BaseClass();
            string result = null;
            try
            {
                var objProp = new Property();
                objProp = objbase.GetCredential(SupplierName, SupplierCredentials);
                if (objProp != null)
                {
                    switch (SupplierName)
                    {
                        case "HOTELBED":
                            result = HotelBedSearch(request, objProp, SupplierId, SupplierName);
                            break;
                        case "TRM":
                            result = UAPISearch(request, objProp, SupplierId, SupplierName);
                            break;
                        case "SPECIALTOURS":
                            result = SpecialTours(request, objProp, SupplierId, SupplierName);
                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                return ex.Message.ToString() + ".#05";
            }
            return result;
        }

        #endregion

        #region HOTELBED
        private string HotelBedSearch(HotelSearchRQ request, Property objProp, string SupplierId, string SupplierName)
        {
            HTLSearchRS _SearchRS = new HTLSearchRS();
            string TraceId = string.Empty;
            ThreadCount++;
            try
            {
                TraceId = Guid.NewGuid().ToString();
                var ad = "";
                var ch = "";
                var age1 = "";
                var age2 = "";
                var age3 = "";
                var age4 = "";
                var nor = request.Rooms.Count;
                var i = 1;
                foreach (var xe in request.Rooms)
                {
                    var age = "";
                    ad += xe.AD + ",";
                    ch += xe.CH + ",";
                    if (xe.CH > 0)
                    {
                        foreach (var childage in xe.CHAge)
                        {
                            age = childage.ToString();

                            if (i == 1)
                            {
                                age1 += age + ",";
                            }
                            else if (i == 2)
                            {
                                age2 += age + ",";
                            }
                            else if (i == 3)
                            {
                                age3 += age + ",";
                            }
                            else if (i == 4)
                            {
                                age4 += age + ",";
                            }
                        }
                    }
                    i++;
                }
                var sd = request.CheckIn;
                var ed = request.CheckOut;
                var ci = sd.Split('-')[2] + sd.Split('-')[1] + sd.Split('-')[0];
                var co = ed.Split('-')[2] + ed.Split('-')[1] + ed.Split('-')[0];
                var obj = new HotelBeds();

                obj.RequestTimeFlag = "1";

                obj.CheckInDate = ci;
                obj.CheckOutDate = co;
                obj.Adults = ad.Split(',');
                obj.Child = ch.Split(',');
                obj.ChildAge1 = age1.Split(',');
                obj.ChildAge2 = age2.Split(',');
                obj.ChildAge3 = age3.Split(',');
                obj.ChildAge4 = age4.Split(',');
                obj.RoomCount = nor;
                //obj.userkey = UserKey;

                obj.SourceMarket = "AE";
                obj.CountryCode = request.countryCode;
                if (destination == null)
                {
                    return "No City Matched , Please provide valid city name.#03";
                }
                else
                {
                    var city = destination.Attribute("HBD").Value;
                    string res = string.Empty;
                    if (!string.IsNullOrWhiteSpace(city))
                    {
                        obj.DestinationCode = city;
                        obj.HotelbedsUsername = objProp.Username;
                        obj.HotelbedsPassword = objProp.Password;
                        obj.HotelbedsUrl = objProp.Url;
                        obj.HotelbedSup_name = objProp.ApiKey.ToString();

                        var searchrequest = obj.HotelSearchRequest();
                        #region Request Log -> Supplier
                        LogData = "<EVENT><SEARCHAVAILREQUESTDATA>" + searchrequest + "</SEARCHAVAILREQUESTDATA>"
                                  + "<URL>" + obj.HotelbedsUrl + "</URL>"
                                  + "<USERNAME>" + obj.HotelbedsUsername + "</USERNAME>"
                                  + "<PASSWORD>" + obj.HotelbedsPassword + "</PASSWORD>"
                                  + "<VENDOR>" + SupplierName + "</VENDOR>"
                                  + "<CURRENCY>" + objProp.Currency + "</CURRENCY>"
                                  + "<BRANCHCODE></BRANCHCODE>"
                                  + "</EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "F", GetType().Name, "HotelSearch", LogData, "", TraceId);
                        #endregion
                        res = obj.HotelSearch(searchrequest); // File.ReadAllText(@"C:\Users\Sreedharan.p\Desktop\SearchResponse.xml"); //
                        bool Result = obj.SearchHotelResponse(res, searchrequest, ref _SearchRS, SupplierId.ToString(), request, obj.HotelbedSup_name.ToString(), TraceId);
                    }
                    var JsonResult = JsonConvert.SerializeObject(_SearchRS.Hotels).ToString();
                    JsonResult = JsonResult.Replace("<?xml version=\"1.0\" encoding=\"UTF8\"?>", "");
                    JsonResult = JsonResult.Replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "");
                    JsonResult = JsonResult.Replace("<?xml version='1.0' encoding='UTF-8'?>", "");
                    JsonResult = JsonResult.Replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                    JsonResult = JsonResult.Replace("&", "and");
                    StringBuilder builder = new StringBuilder();
                    builder.Append(JsonResult);
                    JsonResult = builder.ToString();
                    #region Respose Log <- Supplier
                    LogData = "<EVENT><SEARCHAVAILRESPONSEDATA>" + JsonResult + "</SEARCHAVAILRESPONSEDATA></EVENT>";
                    SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "F", GetType().Name, "HotelSearch", LogData, "", TraceId);
                    #endregion
                    return JsonResult;
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", TraceId);
                return "<Issue id='0017'>" + ex.Message + "</Issue>";
            }
        }
        #endregion

        #region TRAVELPORT
        private string UAPISearch(HotelSearchRQ request, Property objProp, string SupplierId, string SupplierName)
        {
            ThreadCount++;
            try
            {
                if (destination == null)
                {
                    return "No City Matched , Please provide valid city name.#03";
                }
                else
                {
                    var CityCode = destination.Attribute("TRM").Value;
                    string res = string.Empty;
                    if (!string.IsNullOrEmpty(CityCode))
                    {
                        var sd = request.CheckIn;
                        var ed = request.CheckOut;
                        var ci = sd.Split('-')[2] + "-" + sd.Split('-')[1] + "-" + sd.Split('-')[0];
                        var co = ed.Split('-')[2] + "-" + ed.Split('-')[1] + "-" + ed.Split('-')[0];
                        var objUAPI = new UAPIHotel();
                        objUAPI.Destination = CityCode;
                        objUAPI.SearchRooms = request.Rooms;
                        var adultcount = 0;
                        var childcount = 0;
                        foreach (var xe in request.Rooms)
                        {
                            adultcount += xe.AD;
                            childcount += xe.CH;
                        }
                        objUAPI.AdultCount = adultcount;
                        objUAPI.ChildCount = childcount;
                        objUAPI.CheckIn = ci;
                        objUAPI.CheckOut = co;
                        objUAPI.UserName = "";
                        objUAPI.Password = "";
                        objUAPI.UAPIUrl = "";
                        objUAPI.BranchCode = objProp.ApiKey.ToString();
                        objUAPI.Property = objProp;
                        res = objUAPI.HotelSearchRest(request, SupplierId, SupplierName.ToString(), objProp);
                        var JsonResult = res;
                        StringBuilder builder = new StringBuilder();
                        builder.Append(JsonResult);
                        JsonResult = builder.ToString();
                        return JsonResult;
                    }
                    else
                    {
                        return "";
                    }

                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                return ex.ToString();
            }
        }
        #endregion

        #region SPECIAL TOURS
        private string SpecialTours(HotelSearchRQ request, Property objProp, string SupplierId, string SupplierName)
        {
            ThreadCount++;
            try
            {
                string res = string.Empty;
                if (destination == null)
                {
                    return "No City Matched , Please provide valid city name.#03";
                }
                else
                {
                    var CityCode = destination.Attribute("SPT").Value.ToString().Trim();
                    //CityCode = "9532";
                    if (!string.IsNullOrEmpty(CityCode))
                    {
                        var objSpecial = new SPTours();
                        objSpecial.SuppUserName = objProp.Username;
                        objSpecial.SuppPassword = objProp.Password;
                        objSpecial.SupplierId = SupplierId;
                        objSpecial.SupplierName = SupplierName;
                        objSpecial.DestinationCode = CityCode;
                        res = objSpecial.HotelSearch(request, objProp);
                        return res;
                    }
                    else
                    {
                        return "Request city is not available.Please refine your search.#03";
                    }

                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                return ex.Message.ToString() + ".#05";
            }
        }
        #endregion
    }
}
