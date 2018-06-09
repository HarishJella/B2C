using HotelService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Xml;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Hotel;
using WXYZ_Hotel.Models;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Controllers
{
    public class DetailsController : ApiController
    {
        string errormessage = string.Empty;
        string LogData = string.Empty;
        [HttpPost]
        [Route("api/HotelDetails")]
        public HotelDetailsRS HotelDetails(HotelDetailsRQ DetailRQ)
        {
            HotelDetailsRS _HotelDetailsRS = new HotelDetailsRS();
            try
            {
                string errorMessage = "";
                string ImgUrl = string.Empty;
                string SequenceId = string.Empty;
                var random = new Random();
                SequenceId = random.Next(1000, 154555).ToString();
                #region Request Log <- Application
                LogData = "<EVENT><SERVICEREQUESTDATA>" + JsonConvert.SerializeObject(DetailRQ, Newtonsoft.Json.Formatting.Indented) + "</SERVICEREQUESTDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", DetailRQ.AgentDetails, "E", GetType().Name, "HotelViewDetails", LogData, DetailRQ.SupplierId, "");
                #endregion

                #region Fetch SupplierDetails                                                                                                                          //

                string Result = string.Empty;
                string DBErrorMsg = string.Empty;
                bool FetchSupplierResult = WXYZ_Hotel.Common.SQLAccess.Fetch_supplier_Details(DetailRQ.AgentDetails, "HOTEL", DetailRQ.SupplierId.ToString(), ref Result, ref DBErrorMsg);
                WXYZ_Hotel.Controllers.SearchController.Rootobject SupplierData = new WXYZ_Hotel.Controllers.SearchController.Rootobject();
                if (FetchSupplierResult && !string.IsNullOrEmpty(Result))
                {
                    if (!string.IsNullOrEmpty(DBErrorMsg))
                    {
                        errorMessage = DBErrorMsg + "-#03";
                    }
                    SupplierData = JsonConvert.DeserializeObject<WXYZ_Hotel.Controllers.SearchController.Rootobject>(Result);
                }
                else
                    errorMessage = "Currently suppliers not available.Please contact support team.-#03";


                #endregion

                //string cred = File.ReadAllText(HttpContext.Current.Server.MapPath("~/App_Data/Credential.xml"));
                if (SupplierData.Table.Count() > 0)                                                                                         //
                {                                                                                                                           //
                    foreach (var Sup_Name in SupplierData.Table)                                                                           //
                    {                                                                                                                     //
                        if (DetailRQ.Vendor.Equals("HotelBed"))//doubt
                        {
                            _HotelDetailsRS = HotelBedDetails(DetailRQ, Sup_Name.AvailCredentials.ToString());
                            if (_HotelDetailsRS.StatusCode == "01")
                            {
                                return _HotelDetailsRS;
                            }
                        }
                    }                                                                                                                //
                }                                                                                                                    //
                else                                                                                                                              //
                {                                                                                                                                //
                    errorMessage = "Sorry! your Api Key and Mode value is wrong! Please send valid Api key and Mode.(or) No Supplier Mapping";  //
                }
                #region Response Log
                LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_HotelDetailsRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", DetailRQ.AgentDetails, "E", GetType().Name, "HotelViewDetails", LogData, "", "");
                #endregion
                return _HotelDetailsRS;
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", DetailRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                _HotelDetailsRS.StatusCode = "00";
                _HotelDetailsRS.Error = ex.Message.ToString();
                _HotelDetailsRS.HotelDetails = null;
                return _HotelDetailsRS;
            }
        }

        private HotelDetailsRS HotelBedDetails(HotelDetailsRQ DetailRQ, string Credentials)
        {
            HotelDetailsRS _HotelDetailsRS = new HotelDetailsRS();
            try
            {
                var objbed = new HotelBeds();
                var objProp = new Property();
                BaseClass objbase = new BaseClass();
                string SupplierName = DetailRQ.Vendor;
                objProp = objbase.GetCredential(SupplierName, Credentials);
                string res = string.Empty;
                objbed.HotelInfoCode = DetailRQ.HotelCode;
                objbed.HotelbedsUsername = objProp.Username;
                objbed.HotelbedsPassword = objProp.Password;
                objbed.HotelbedsUrl = objProp.Url;
                objbed.HotelbedSup_name = objProp.ApiKey.ToString();                                   //
                res = objbed.HotelDetail();
                if (!objbed.HoteDetailResponse(res, ref _HotelDetailsRS, objbed.HotelbedSup_name))
                {
                    _HotelDetailsRS.StatusCode = "01";
                    _HotelDetailsRS.Error = "";
                    _HotelDetailsRS.HotelDetails = _HotelDetailsRS.HotelDetails;
                    return _HotelDetailsRS;
                }
                else
                {
                    _HotelDetailsRS.StatusCode = "00";
                    _HotelDetailsRS.Error = "Rooms are full in this Hotel! Please try to book any other Hotel.";
                    _HotelDetailsRS.HotelDetails = null;
                    return _HotelDetailsRS;
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", DetailRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                _HotelDetailsRS.StatusCode = "00";
                _HotelDetailsRS.Error = ex.Message.ToString();
                _HotelDetailsRS.HotelDetails = null;
                return null;
            }
        }

        #region Booked Hotel Details- View PNR
        [HttpPost]
        [Route("api/HotelViewDetails")]
        public PNRViewStatusRS HotelViewDetails(PNRViewStatusRQ HoteldtRQ)
        {
            BaseClass objbase = new BaseClass();
            PNRViewStatusRS HoteldtRS = new PNRViewStatusRS();
            try
            {
                #region Request Log <- Application
                LogData = "<EVENT><SERVICEREQUESTDATA>" + JsonConvert.SerializeObject(HoteldtRQ, Newtonsoft.Json.Formatting.Indented) + "</SERVICEREQUESTDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", HoteldtRQ.AgentDetails, "E", GetType().Name, "HotelViewDetails", LogData, "", "");
                #endregion
                var objval = new Validate();
                errormessage = objval.ValidateReserve(HoteldtRQ);
                if (string.IsNullOrEmpty(errormessage))
                {
                    #region Fetch PNR Details From Applicaton DataBase

                    string ErrorMsg = string.Empty;
                    string Result = string.Empty;
                    string DBErrorMsg = string.Empty;
                    DataSet dsHotelAvailDetails = new DataSet();
                    dsHotelAvailDetails = SQLAccess.Fetch_Hotel_View_PNR_Details(HoteldtRQ.AgentDetails, HoteldtRQ.WPNR, HoteldtRQ.HotelPNR, ref Result, ref ErrorMsg);
                    if (dsHotelAvailDetails == null || dsHotelAvailDetails.Tables.Count == 0 || dsHotelAvailDetails.Tables[0].Rows.Count == 0)
                    {
                        if (!string.IsNullOrEmpty(DBErrorMsg))
                            ErrorMsg = DBErrorMsg + "-#03";
                        else
                            ErrorMsg = "PNR Details is Invalid.Please refine your search.-#03";

                        HoteldtRS.ErrorMsg = ErrorMsg;
                        HoteldtRS.ResultCode = "00";
                        #region Response Log 
                        LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(HoteldtRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", HoteldtRQ.AgentDetails, "E", GetType().Name, "HotelViewDetails", LogData, "", "");
                        #endregion
                        return HoteldtRS;
                    }

                    if (!dsHotelAvailDetails.Tables[0].Columns.Contains("AGENTID") || dsHotelAvailDetails.Tables[0].Rows[0]["AGENTID"].ToString().ToUpper().Trim() != HoteldtRQ.AgentDetails.AgentID)
                    {
                        HoteldtRS.ErrorMsg = "Invalid Data.Please refine your search.-#03";
                        HoteldtRS.ResultCode = "00";
                        #region Response Log 
                        LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(HoteldtRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", HoteldtRQ.AgentDetails, "E", GetType().Name, "HotelViewDetails", LogData, "", "");
                        #endregion
                        return HoteldtRS;
                    }

                    #endregion

                    string SupplierID = dsHotelAvailDetails.Tables[0].Rows[0]["SUPPLIERID"].ToString().ToUpper().Trim();
                    string BookingStatus = dsHotelAvailDetails.Tables[2].Rows[0]["STATUS"].ToString().ToUpper().Trim();
                    string HotelPNR = dsHotelAvailDetails.Tables[1].Rows[0]["HOTELPNR"].ToString().ToUpper().Trim();

                    #region Fetch SupplierDetails

                    Result = string.Empty;
                    DBErrorMsg = string.Empty;
                    bool FetchSupplierResult = WXYZ_Hotel.Common.SQLAccess.Fetch_supplier_Details(HoteldtRQ.AgentDetails, "HOTEL", SupplierID, ref Result, ref DBErrorMsg);
                    WXYZ_Hotel.Controllers.SearchController.Rootobject SupplierData = new WXYZ_Hotel.Controllers.SearchController.Rootobject();
                    if (FetchSupplierResult && !string.IsNullOrEmpty(Result))
                    {
                        if (!string.IsNullOrEmpty(DBErrorMsg))
                        {
                            ErrorMsg = DBErrorMsg + "-#03";
                        }
                        SupplierData = JsonConvert.DeserializeObject<WXYZ_Hotel.Controllers.SearchController.Rootobject>(Result);
                    }
                    else
                        ErrorMsg = "Currently suppliers not available.Please contact support team.-#03";

                    if (SupplierData.Table != null && SupplierData.Table.Count() > 0)                                                                                       //
                    {
                        string Response = string.Empty;
                        var objProp = new Property();
                        foreach (var Sup_Name in SupplierData.Table)                                                                        //
                        {
                            objProp = objbase.GetCredential(Sup_Name.CRSName, Sup_Name.AvailCredentials.ToString());                                //
                            if (objProp != null)
                            {
                                switch (Sup_Name.CRSName.ToUpper())                                                                                 //
                                {
                                    case "TRM":
                                        var objTRM = new UAPIHotel();
                                        objTRM.Property = objProp;
                                        Response = "Ticket Booked Successfully";
                                        break;
                                    case "SPECIALTOURS":
                                        var objSPT = new SPTours();
                                        objSPT.SupplierId = SupplierID.ToString();
                                        objSPT.SuppUserName = objProp.Username;
                                        objSPT.SuppPassword = objProp.Password;
                                        Response = objSPT.HotelViewPNR(HoteldtRQ, HotelPNR);
                                        break;
                                }
                            }
                        }
                        if (Response.ToString().Contains("#03") || Response.ToString().Contains("#03"))
                        {
                            HoteldtRS.Result = "";
                            HoteldtRS.TicketStatus = "";
                            HoteldtRS.ErrorMsg = Response.ToString();
                            HoteldtRS.ResultCode = "00";
                        }
                        else
                        {
                            HoteldtRS.Result = JsonConvert.SerializeObject(dsHotelAvailDetails);
                            HoteldtRS.TicketStatus = Response;
                            HoteldtRS.ErrorMsg = "";
                            HoteldtRS.ResultCode = "01";
                        }
                    }
                    else
                    {
                        HoteldtRS.ErrorMsg = ErrorMsg;
                        HoteldtRS.ResultCode = "00";
                    }
                    #endregion
                }
                else
                {
                    HoteldtRS.ErrorMsg = errormessage;
                    HoteldtRS.ResultCode = "00";
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", HoteldtRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                HoteldtRS.ErrorMsg = ex.Message.ToString();
                HoteldtRS.ResultCode = "00";
            }
            #region Response Log -> Application
            LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(HoteldtRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
            SQLAccess.Insert_Action_LogDetails("HOTEL", HoteldtRQ.AgentDetails, "E", GetType().Name, "HotelViewDetails", LogData, "", "");
            #endregion
            return HoteldtRS;
        }
        #endregion

    }
}
