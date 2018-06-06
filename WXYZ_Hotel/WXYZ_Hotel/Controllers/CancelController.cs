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
using System.Xml.Linq;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Hotel;
using WXYZ_Hotel.Models;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Controllers
{
    public class CancelController : ApiController
    {
        string errormessage = string.Empty;
        [HttpPost]
        [Route("api/CancellHotel")]

        #region Cancellation Request Process
        public CancellationRS CancelHotel(CancellationRQ CancelRQ)
        {
            string LogData = string.Empty;
            CancellationRS _CancelRS = new CancellationRS();
            Validate validate = new Validate();

            try
            {
                BaseClass objbase = new BaseClass();
                string api = CancelRQ.Supplier.ToLower();
                string res = string.Empty;
                var objval = new Validate();
                var helper = new HotelHelper();
                //string cred = File.ReadAllText(HttpContext.Current.Server.MapPath("~/App_Data/Credential.xml"));

                #region Request Log <- Application
                LogData = "<EVENT><SERVICEREQUESTDATA>" + JsonConvert.SerializeObject(CancelRQ, Formatting.Indented) + "</SERVICEREQUESTDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData, "", "");
                #endregion
                errormessage = validate.ValCancelRQ(CancelRQ);
                if (string.IsNullOrEmpty(errormessage))
                {

                    #region Fetch PNR Details From Applicaton DataBase

                    string ErrorMsg = string.Empty;
                    string Result = string.Empty;
                    string DBErrorMsg = string.Empty;
                    DataSet dsHotelAvailDetails = new DataSet();
                    dsHotelAvailDetails = SQLAccess.Fetch_Hotel_View_PNR_Details(CancelRQ.AgentDetails, CancelRQ.WPNR, "", ref Result, ref ErrorMsg);
                    if (dsHotelAvailDetails == null || dsHotelAvailDetails.Tables.Count == 0 || dsHotelAvailDetails.Tables[0].Rows.Count == 0)
                    {
                        if (!string.IsNullOrEmpty(DBErrorMsg))
                            ErrorMsg = DBErrorMsg + "-#03";
                        else
                            ErrorMsg = "PNR Details is Invalid.Please refine your search.-#03";

                        _CancelRS.ErrorMsg = ErrorMsg;
                        _CancelRS.ResultCode = "00";
                        #region Response Log -> Application
                        LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData, "", "");
                        #endregion
                        return _CancelRS;
                    }

                    if (!dsHotelAvailDetails.Tables[0].Columns.Contains("AGENTID") || dsHotelAvailDetails.Tables[0].Rows[0]["AGENTID"].ToString().ToUpper().Trim() != CancelRQ.AgentDetails.AgentID)
                    {
                        _CancelRS.ErrorMsg = "Invalid Data.Please refine your search.-#03";
                        _CancelRS.ResultCode = "00";
                        #region Response Log -> Application
                        LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData, "", "");
                        #endregion
                        return _CancelRS;
                    }

                    #endregion

                    string SupplierID = dsHotelAvailDetails.Tables[0].Rows[0]["SUPPLIERID"].ToString().ToUpper().Trim();
                    string BookingStatus = dsHotelAvailDetails.Tables[2].Rows[0]["STATUS"].ToString().ToUpper().Trim();
                    string HotelPNR = dsHotelAvailDetails.Tables[1].Rows[0]["HOTELPNR"].ToString().ToUpper().Trim();

                    if (BookingStatus.ToString().Trim().ToUpper() != "CONFIRMED")
                    {
                        _CancelRS.ErrorMsg = "Cannot cancel this ticket in online.Please contact customer care.-#03";
                        _CancelRS.ResultCode = "00";
                        #region Response Log -> Application
                        LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData, "", "");
                        #endregion
                        return _CancelRS;
                    }

                    #region Fetch SupplierDetails

                    Result = string.Empty;
                    DBErrorMsg = string.Empty;
                    bool FetchSupplierResult = WXYZ_Hotel.Common.SQLAccess.Fetch_supplier_Details(CancelRQ.AgentDetails, "HOTEL", SupplierID, ref Result, ref DBErrorMsg);
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

                    #endregion

                    if (SupplierData.Table != null && SupplierData.Table.Count() > 0)                                                                                       //
                    {
                        string Response = string.Empty;
                        var objProp = new Property();
                        foreach (var Sup_Name in SupplierData.Table)                                                                        //
                        {
                            objProp = objbase.GetCredential(Sup_Name.CRSName, Sup_Name.AvailCredentials.ToString());                                //
                            if (objProp != null)
                            {
                                switch (Sup_Name.CRSName.ToUpper().Trim())                                                                                 //
                                {
                                    case "HOTELBED":
                                        var objbed = new HotelBeds();
                                        objbed.HotelbedsUsername = objProp.Username;
                                        objbed.HotelbedsPassword = objProp.Password;
                                        objbed.HotelbedsUrl = objProp.Url;
                                        var data = CancelRQ.ConfirmNumber.Split('-');
                                        objbed.IncomingOfficeCode = data[0];
                                        objbed.FileNumber = data[1];
                                        res = objbed.Cancellation();
                                        _CancelRS = CancelHotelResponse(res, api);
                                         #region Response Log
                                         LogData = "<EVENT><CANCELRESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</CANCELRESPONSEDATA></EVENT>";
                                         SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData.ToString(), "", "");
                                         #endregion
                                        return _CancelRS;
                                        break;
                                    case "TRM":
                                        var objtrm = new UAPIHotel();
                                        objtrm.UserName = objProp.Username;
                                        objtrm.Password = objProp.Password;
                                        objtrm.UAPIUrl = objProp.Url;
                                        var dataVal = CancelRQ.ConfirmNumber.Split('-');
                                        objtrm.BranchCode = CancelRQ.AgentDetails.BranchID;
                                        res = objtrm.HotelCancellation();
                                        //_CancelRS=CancelRoom(res,api);
                                         #region Response Log
                                         LogData = "<EVENT><CANCELRESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</CANCELRESPONSEDATA></EVENT>";
                                         SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData.ToString(), "", "");
                                         #endregion
                                        return _CancelRS;
                                        break;
                                    case "SPECIALTOURS":
                                        var objSpecial = new SPTours();
                                        objSpecial.SuppUserName = objProp.Username;
                                        objSpecial.SuppPassword = objProp.Password;
                                        _CancelRS = objSpecial.HotelCancelPNR(CancelRQ, HotelPNR);
                                         #region Response Log
                                         LogData = "<EVENT><CANCELRESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</CANCELRESPONSEDATA></EVENT>";
                                         SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData.ToString(), "", "");
                                         #endregion
                                        return _CancelRS;
                                        break;
                                }
                               
                            }
                        }
                    }
                    else
                    {
                        _CancelRS.ErrorMsg = ErrorMsg + "-#03";
                        _CancelRS.ResultCode = "00";
                        #region Response Log
                        LogData = "<EVENT><CANCELRESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</CANCELRESPONSEDATA></EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData.ToString(), "", "");
                        #endregion
                    }
                }
                else
                {
                    _CancelRS.ErrorMsg = errormessage + "-#03";
                    _CancelRS.ResultCode = "00";
                    #region Response Log
                    LogData = "<EVENT><CANCELRESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</CANCELRESPONSEDATA></EVENT>";
                    SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData.ToString(), "", "");
                    #endregion
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                _CancelRS.ErrorMsg = ex.Message.ToString() + "-#05";
                _CancelRS.ResultCode = "00";
                #region Response Log
                LogData = "<EVENT><CANCELRESPONSEDATA>" + JsonConvert.SerializeObject(_CancelRS, Newtonsoft.Json.Formatting.Indented) + "</CANCELRESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", CancelRQ.AgentDetails, "E", GetType().Name, "CancelHotel", LogData.ToString(), "", "");
                #endregion
            }
            return _CancelRS;
        }
        #endregion

        #region CancelHotelResponse
        private CancellationRS CancelHotelResponse(string xmlRes, string api)
        {
            var xdoc = XDocument.Parse(xmlRes);
            if (api.ToLower() == "hotelbed")
            {
                var nspc = xdoc.Root.Name.Namespace;
                string status = "UnSuccess";
                string confirmnum = ""; string penaltyApplied = ""; string penaltyCurrency = ""; string CancelStatus = "";
                if (xdoc.Descendants(nspc + "Status").Any() && xdoc.Descendants(nspc + "Status").First().Value == "CANCELLED")
                {
                    status = "Success";
                    penaltyApplied = "0.00";
                    penaltyCurrency = "USD";
                    if (xdoc.Descendants(nspc + "Purchase").Attributes("purchaseToken").Any())
                    {
                        confirmnum = xdoc.Descendants(nspc + "Purchase").Attributes("purchaseToken").First().Value;
                    }
                    if (xdoc.Descendants(nspc + "ServiceList").Descendants(nspc + "Reference").Elements(nspc + "FileNumber").Any())
                    {
                        confirmnum = confirmnum + "/" + xdoc.Descendants(nspc + "ServiceList").Descendants(nspc + "Reference").Elements(nspc + "FileNumber").First().Value;
                    }
                }
                else
                {
                    if (xdoc.Descendants(nspc + "ErrorList").Any())
                    {
                        CancelStatus = xdoc.Descendants(nspc + "Code").First().Value + Environment.NewLine + xdoc.Descendants(nspc + "Message").First().Value + Environment.NewLine + xdoc.Descendants(nspc + "DetailedMessage").First().Value;
                        status = "UnSuccess";
                        penaltyApplied = "0.00";
                        penaltyCurrency = "USD";
                    }
                    else
                    {
                        CancelStatus = "Cancellation Failed Please Contact Support Team!";
                        status = "UnSuccess";
                        penaltyApplied = "0.00";
                        penaltyCurrency = "USD";
                    }
                }
                //var xmlResponse = new StringBuilder();
                //xmlResponse.Append("<CancelHotelRS>");
                //xmlResponse.Append("<Status>" + status + "</Status>");
                //xmlResponse.Append("<CancelStatus>" + CancelStatus + "</CancelStatus>");
                //xmlResponse.Append("<CancellationId>" + confirmnum + "</CancellationId>");
                //xmlResponse.Append("<PenaltyApplied>" + penaltyApplied + "</PenaltyApplied>");
                //xmlResponse.Append("<PenaltyCurrency>" + penaltyCurrency + "</PenaltyCurrency>");
                //xmlResponse.Append("</CancelHotelRS>");
                //var res = xmlResponse.ToString().Replace("&", "and"); ;
                CancellationRS res = new CancellationRS();
                res.Status = status;
                res.CancelStatus = CancelStatus;
                res.CancellationId = confirmnum;
                res.PenaltyApplied = penaltyApplied;
                res.PenaltyCurrency = penaltyCurrency;
                return res;

            }
            return null;

        }
        #endregion

        #region CancelRoom
        private CancellationRS CancelRoom(string xmlRes, string api)
        {

            var xdoc = XDocument.Parse(xmlRes);
            if (api.ToLower() == "trm")
            {
                var nspc = xdoc.Root.Name.Namespace;
                string status = "UnSuccess";
                string confirmnum = ""; string penaltyApplied = ""; string penaltyCurrency = ""; string CancelStatus = "";
                if (xdoc.Descendants(nspc + "Status").Any() && xdoc.Descendants(nspc + "Status").First().Value == "CANCELLED")
                {
                    status = "Success";
                    penaltyApplied = "0.00";
                    penaltyCurrency = "USD";
                    if (xdoc.Descendants(nspc + "Purchase").Attributes("purchaseToken").Any())
                    {
                        confirmnum = xdoc.Descendants(nspc + "Purchase").Attributes("purchaseToken").First().Value;
                    }
                    if (xdoc.Descendants(nspc + "ServiceList").Descendants(nspc + "Reference").Elements(nspc + "FileNumber").Any())
                    {
                        confirmnum = confirmnum + "/" + xdoc.Descendants(nspc + "ServiceList").Descendants(nspc + "Reference").Elements(nspc + "FileNumber").First().Value;
                    }
                }
                else
                {
                    if (xdoc.Descendants(nspc + "ErrorList").Any())
                    {
                        CancelStatus = xdoc.Descendants(nspc + "Code").First().Value + Environment.NewLine + xdoc.Descendants(nspc + "Message").First().Value + Environment.NewLine + xdoc.Descendants(nspc + "DetailedMessage").First().Value;
                        status = "UnSuccess";
                        penaltyApplied = "0.00";
                        penaltyCurrency = "USD";
                    }
                    else
                    {
                        CancelStatus = "Cancellation Failed Please Contact Support Team!";
                        status = "UnSuccess";
                        penaltyApplied = "0.00";
                        penaltyCurrency = "USD";
                    }
                }
                //var xmlResponse = new StringBuilder();
                //xmlResponse.Append("<CancelHotelRS>");
                //xmlResponse.Append("<Status>" + status + "</Status>");
                //xmlResponse.Append("<CancelStatus>" + CancelStatus + "</CancelStatus>");
                //xmlResponse.Append("<CancellationId>" + confirmnum + "</CancellationId>");
                //xmlResponse.Append("<PenaltyApplied>" + penaltyApplied + "</PenaltyApplied>");
                //xmlResponse.Append("<PenaltyCurrency>" + penaltyCurrency + "</PenaltyCurrency>");
                //xmlResponse.Append("</CancelHotelRS>");
                //var res = xmlResponse.ToString().Replace("&", "and"); ;
                CancellationRS res = new CancellationRS();
                res.Status = status;
                res.CancelStatus = CancelStatus;
                res.CancellationId = confirmnum;
                res.PenaltyApplied = penaltyApplied;
                res.PenaltyCurrency = penaltyCurrency;
                return res;
            }
            return null;

        }
        #endregion
    }
}
