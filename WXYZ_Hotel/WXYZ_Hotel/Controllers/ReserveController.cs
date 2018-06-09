using HotelService;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Xml.Linq;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Hotel;
using WXYZ_Hotel.Models;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Controllers
{
    public class ReserveController : ApiController
    {
        XElement destination { get; set; }
        string LogData = string.Empty;
        [HttpPost]
        [Route("api/HotelReserve")]
        public ReserveHotelRS HotelReserveResult(ReserveHotelRQ ReserveRQ)
        {
            ReserveHotelRS _ReserveHotelRS = new ReserveHotelRS();
            try
            {
                BaseClass objbase = new BaseClass();
                string City = "";
                string[] checkIn = (ReserveRQ.CheckIn.Replace("-", "/")).Split('/');
                DateTime checkInDate = DateTime.ParseExact(checkIn[1] + "/" + checkIn[0] + "/" + checkIn[2], "MM/dd/yyyy", null);
                bool Result = false;
                var objval = new Validate();

                #region Request Log <- Application
                LogData = "<EVENT><SERVICEREQUESTDATA>" + JsonConvert.SerializeObject(ReserveRQ, Formatting.Indented) + "</SERVICEREQUESTDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ReserveRQ.AgentDetails, "E", GetType().Name, "HotelReserve", LogData, ReserveRQ.SupplierId.ToString(), ReserveRQ.TraceID.ToString());
                #endregion

                var ValidateRequest = objval.ValidateReserve(ReserveRQ);
                if (string.IsNullOrEmpty(ValidateRequest))
                {
                    City = ReserveRQ.Destination;
                    destination = objbase.GetDestination(City);
                    string errormessage = string.Empty;

                    #region Fetch SupplierDetails

                    string Res = string.Empty;
                    string DBErrorMsg = string.Empty;
                    bool FetchSupplierResult = WXYZ_Hotel.Common.SQLAccess.Fetch_supplier_Details(ReserveRQ.AgentDetails, "HOTEL", ReserveRQ.SupplierId.ToString(), ref Res, ref DBErrorMsg);
                    WXYZ_Hotel.Controllers.SearchController.Rootobject SupplierData = new WXYZ_Hotel.Controllers.SearchController.Rootobject();
                    if (FetchSupplierResult && !string.IsNullOrEmpty(Res))
                    {
                        if (!string.IsNullOrEmpty(DBErrorMsg))
                        {
                            errormessage = DBErrorMsg + "-#03";
                        }
                        SupplierData = JsonConvert.DeserializeObject<WXYZ_Hotel.Controllers.SearchController.Rootobject>(Res);
                    }
                    else
                        errormessage = "Currently suppliers not available.Please contact support team.-#03";

                    #endregion

                    if (SupplierData.Table != null && SupplierData.Table.Count() > 0)
                    {
                        foreach (var Sup_Name in SupplierData.Table)                                                              //  
                        {                                                                                                          //
                            string res = string.Empty;
                            var objProp = new Property();
                            objProp = objbase.GetCredential(Sup_Name.CRSName, Sup_Name.AvailCredentials.ToString());                  //
                            if (Sup_Name.CRSName.ToString().ToUpper().Trim() == "TRM")
                            {
                                string Resp = "", ErrorMsge = "";

                                DataSet HOTEL_DETAILS = new DataSet();
                                HOTEL_DETAILS = SQLAccess.Fetch_Hotel_Avail_Details(ReserveRQ.AgentDetails, ReserveRQ.TraceID, "E", "ROOM_RESPONSE", ref Resp, ref ErrorMsge);

                                string data = HOTEL_DETAILS.Tables[0].Rows[0]["API_LOG_DESCRIPTION"].ToString();
                                var a = data.Split('"');
                                if (a.Length > 0)
                                {
                                    for (int i = 0; i < a.Length; i++)
                                    {
                                        if (ReserveRQ.roomTypeCode == a[i])
                                        {

                                            _ReserveHotelRS.Error = "";
                                            _ReserveHotelRS.TraceID = a[9];
                                            _ReserveHotelRS.StatusCode = "01";
                                            _ReserveHotelRS.Status = "Available";
                                            _ReserveHotelRS.Vendor = a[13];
                                            _ReserveHotelRS.Supplier = a[13];
                                            _ReserveHotelRS.ReservationId = "";
                                            _ReserveHotelRS.CancellationPolicy = a[i + 32];
                                            _ReserveHotelRS.CancellationStatus = "";
                                            _ReserveHotelRS.MarkUpAmt = a[i + 16];
                                            _ReserveHotelRS.CommissionAmt = a[i + 20];
                                            _ReserveHotelRS.TotalSupplierAmount = a[i + 12];
                                            _ReserveHotelRS.TotalPrice = a[i + 24];
                                            _ReserveHotelRS.Error = "";
                                            _ReserveHotelRS.StatusCode = "01";
                                            _ReserveHotelRS.ClientCountryId = ReserveRQ.ClientCountryId;
                                            Result = true;
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    errormessage = "No Data found for given TraceId ";
                                    _ReserveHotelRS.Error = errormessage;
                                    _ReserveHotelRS.StatusCode = "01";
                                }
                            }
                            else if (Sup_Name.CRSName.ToString().ToUpper().Trim() == "SPECIALTOURS")
                            {
                                var objSpecial = new SPTours();
                                objSpecial.SuppUserName = objProp.Username;
                                objSpecial.SuppPassword = objProp.Password;
                                objSpecial.SupplierId = ReserveRQ.SupplierId.ToString();
                                objSpecial.SupplierName = Sup_Name.CRSName.ToString().ToUpper().Trim();
                                _ReserveHotelRS = objSpecial.HotelCheckValidation(ReserveRQ, objProp);
                            }
                            else if (Sup_Name.CRSName.ToString().ToUpper().Trim() == "HOTELBED")
                            {
                                var sdd = ReserveRQ.CheckIn;
                                var edd = ReserveRQ.CheckOut;
                                var cid = sdd.Split('-')[2] + sdd.Split('-')[1] + sdd.Split('-')[0];
                                var cod = edd.Split('-')[2] + edd.Split('-')[1] + edd.Split('-')[0];
                                string HBCurrencyValue = ReserveRQ.CurrencyValue;
                                string HBBranchCurrency = ReserveRQ.BranchCurrency;
                                var objbed = new HotelBeds();
                                objbed.HotelbedsUsername = objProp.Username;
                                objbed.HotelbedsPassword = objProp.Password;
                                objbed.HotelbedsUrl = objProp.Url;
                                objbed.HotelInfoCode = ReserveRQ.HotelCode;
                                objbed.CheckInDate = cid;
                                objbed.CheckOutDate = cod;
                                objbed.PaxCounts = ReserveRQ.PaxCounts;
                                objbed.RoomGroup = ReserveRQ.RoomGroup;
                                res = objbed.ServiceAdd();
                                Result = ReserveHotelResponse(res, "<root></root>", ref _ReserveHotelRS, ReserveRQ);
                                if (Result == false)
                                {
                                    _ReserveHotelRS.Error = _ReserveHotelRS.Error == "" ? "Problem Occured. Please contact customer care." : _ReserveHotelRS.Error;
                                    _ReserveHotelRS.StatusCode = "00";
                                }
                            }
                        }
                        #region Response Log -> Application
                        LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_ReserveHotelRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                        SQLAccess.Insert_Action_LogDetails("HOTEL", ReserveRQ.AgentDetails, "E", GetType().Name, "HotelReserve", LogData, ReserveRQ.SupplierId.ToString(), ReserveRQ.TraceID.ToString());
                        #endregion
                        return _ReserveHotelRS;
                    }                                                                                                                                        //
                    else                                                                                                                                     //
                    {                                                                                                                                        //
                        errormessage = "Sorry! your Api Key and Mode value is wrong! Please send valid Api key and Mode.(or) No Supplier Mapping";           //   
                    }
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", ReserveRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), ReserveRQ.SupplierId.ToString(), ReserveRQ.TraceID.ToString());
                _ReserveHotelRS.Error = ex.Message;
                _ReserveHotelRS.Status = "00";
                return _ReserveHotelRS;
            }
            return null;                                                                                                                                   //
        }

        #region HOTEL BED Reserve Hotel Response
        public bool ReserveHotelResponse(string xmlRes, string xmlPolicy, ref ReserveHotelRS _ReserveHotelRS, ReserveHotelRQ request)
        {
            var xdoc = XDocument.Parse(xmlRes.Split('↨')[0]);
            var xdocPolicy = XDocument.Parse(xmlPolicy);
            var nsp = xdocPolicy.Root.Name.Namespace;
            string HotelComment = string.Empty;
            var xmlResponse = new StringBuilder();
            var res = string.Empty;
            string MarkUpAmt = "0";                                                                                               //
            string CommissionAmt = "0";                                                                                          //
            try
            {
                #region Fetch Bus Supplier Markup & Commission                                                                                         //
                var CHin = request.CheckIn.Split('-');
                Hashtable hsh_param = new Hashtable();
                hsh_param.Add("BRANCHID", request.AgentDetails.BranchID);
                hsh_param.Add("AGENTID", request.AgentDetails.AgentID);
                hsh_param.Add("SUPPID", request.SupplierId.ToString());
                hsh_param.Add("BOOKEDDATE", DateTime.Now.ToString("yyyyMMdd"));
                hsh_param.Add("DEPARTUREDATE", (CHin[2] + CHin[1] + CHin[0]).ToString());
                DataSet dsMarkUpCommission = new DataSet();
                dsMarkUpCommission = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_API_HOTEL_MARKUP_COMMISSION, hsh_param, DataBase.APP.ToString());

                #endregion

                #region RETURN ON EQUITY ( ROE )
                DataSet dsCurrencyAmt = new DataSet();
                string Currency = "USD";
                string FareCurreny = "1";
                if (request.AgentDetails.CurrencyCode.ToString().Trim().ToUpper() != Currency.ToString().Trim().ToUpper())
                {
                    string CurrenyErrorMsg = string.Empty;
                    dsCurrencyAmt = SQLAccess.Fetch_API_Currency_Details(request.AgentDetails, "", Currency, request.AgentDetails.CurrencyCode.ToString(), ref CurrenyErrorMsg);
                    if (dsCurrencyAmt == null || dsCurrencyAmt.Tables.Count == 0 || dsCurrencyAmt.Tables[0].Rows.Count == 0)
                    {
                        _ReserveHotelRS = new ReserveHotelRS();
                        _ReserveHotelRS.Error = "Problem occured while fetching currency details.Please contact customare care.-#03";
                        _ReserveHotelRS.StatusCode = "00"; 
                        return false;
                    }
                    FareCurreny = dsCurrencyAmt.Tables[0].Rows[0]["ROE_TO_AMOUNT"].ToString().Trim();
                }
                #endregion
                var nspc = xdoc.Root.Name.Namespace;
                string token = "";
                decimal TotalPrice = 0; decimal newPrice = 0;
                decimal oldTotalPrice = request.RoomGroup.Sum(a => Convert.ToDecimal(a.oldBaseAmt));      /* here oldTotalPrice holds price in INR since in ReserveRequest we give INR price  */
                _ReserveHotelRS = new ReserveHotelRS();
                string CancellationStatus = string.Empty;
                var Canceldate = "";
                StringBuilder strCancelPolicy = new StringBuilder();
                if (xdoc.Descendants(nspc + "Purchase").Any() && !xdoc.Descendants(nspc + "ErrorList").Any())
                {
                    var spui = xdoc.Descendants(nspc + "Service").First().Attribute("SPUI").Value;
                    token = xdoc.Descendants(nspc + "Purchase").First().Attribute("purchaseToken").Value + ";" + spui;
                    int i = 1;
                    TotalPrice = Convert.ToDecimal(xdoc.Descendants(nspc + "TotalPrice").First().Value);
                    newPrice = (TotalPrice * Convert.ToDecimal(FareCurreny));
                    // Here newprice holds current RoomBasePrice , i.e if two rooms specified then it holds sum of two rooms base price ( RoomBasePrice + RoomBasePrice )
                    #region old logic
                    /*  if (TotalPrice != oldTotalPrice)
                      {
                          int roomCount = request.RoomGroup.Count();
                          //priceDiff = (oldTotalPrice - TotalPrice) / roomCount;
                          newPrice = TotalPrice;
                          MarkUpAmt = "0";
                          CommissionAmt = "0";

                      }
                      else
                      {
                          oldGrossAmount = request.RoomGroup.Sum(b => Convert.ToDecimal(b.oldTotalAmt));
                          MarkUpAmt = request.RoomGroup.Sum(c => Convert.ToDecimal(c.oldMarkup)).ToString(); ;
                          CommissionAmt = request.RoomGroup.Sum(c => Convert.ToDecimal(c.oldCommission)).ToString();
                          TotalGrossAmount = oldGrossAmount.ToString();

                      }*/
                    #endregion

                    strCancelPolicy.Append("<Rooms>");

                    foreach (var CancellPolicy in xdoc.Descendants(nspc + "CancellationPolicy"))
                    {
                        try
                        {
                            Canceldate = CancellPolicy.Descendants(nspc + "DateTimeFrom").Attributes("date").First().Value;
                            Canceldate = Canceldate.Substring(6, 2) + "/" + Canceldate.Substring(4, 2) + "/" + Canceldate.Substring(0, 4);
                            string[] CanceldateLst = Canceldate.Split('/');
                            string CanceldateFromDate = CanceldateLst[1] + "/" + CanceldateLst[0] + "/" + CanceldateLst[2];
                            Canceldate = DateTime.Parse(CanceldateFromDate).ToString("dd/MMM/yyyy");
                            //
                            if (DateTime.Parse(Canceldate) < DateTime.Now)
                            {
                                CancellationStatus = "NonRefund";
                            }
                            else
                            {
                                CancellationStatus = "Refund";
                            }
                            strCancelPolicy.Append("<Room>");
                            foreach (var canPolicy in CancellPolicy.Descendants(nspc + "Price").ToList())
                            {
                                if (canPolicy.Descendants(nspc + "Amount").Count() > 0 && canPolicy.Descendants(nspc + "Amount").First().Value != "")
                                {
                                    decimal canPrice = Convert.ToDecimal(canPolicy.Descendants(nspc + "Amount").First().Value);
                                    canPolicy.Add(new XElement("BaseAmount", canPolicy.Descendants(nspc + "Amount").First().Value));
                                    canPolicy.Descendants(nspc + "Amount").First().Value = canPrice.ToString();
                                }

                                strCancelPolicy.Append(canPolicy);
                            }
                            strCancelPolicy.Append("</Room>");
                            if (xdoc.Descendants(nspc + "CommentList").Any())
                            {
                                HotelComment += "Room:" + i + "<br/> " + xdoc.Descendants(nspc + "CommentList").First().Value + " <br/><br/>";
                            }
                            else
                            {
                                HotelComment = "No Hotel Comment from Hotelbeds";
                            }
                        }
                        catch (Exception ex)
                        {
                            SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), request.SupplierId.ToString(), request.TraceID.ToString());
                        }
                        i++;
                    }
                    strCancelPolicy.Append("</Rooms>");
                    _ReserveHotelRS.Vendor = "0017";
                    if (!xdoc.Descendants(nspc + "ErrorList").Any())
                    {
                        _ReserveHotelRS.Status = "Success";
                    }
                    else
                    {
                        _ReserveHotelRS.Status = "UnSuccess";
                        if (xdoc.Descendants(nspc + "ErrorList").Any())
                        {
                            HotelComment = xdoc.Descendants(nspc + "Code").First().Value + Environment.NewLine + xdoc.Descendants(nspc + "Message").First().Value + Environment.NewLine + xdoc.Descendants(nspc + "DetailedMessage").First().Value;
                        }
                    }

                    _ReserveHotelRS.ReservationId = token;
                    _ReserveHotelRS.CancellationPolicy = strCancelPolicy.ToString();
                    _ReserveHotelRS.CancellationStatus = CancellationStatus;
                    _ReserveHotelRS.HotelComment = HotelComment;
                    bool ComMarkUpdt = Calculation.CalcCommAndMarkup(request.AgentDetails, newPrice.ToString(), ref MarkUpAmt, ref CommissionAmt, dsMarkUpCommission);
                    _ReserveHotelRS.MarkUpAmt = MarkUpAmt;
                    _ReserveHotelRS.CommissionAmt = CommissionAmt;
                    _ReserveHotelRS.TotalSupplierAmount = newPrice.ToString();
                    _ReserveHotelRS.ClientCountryId = request.ClientCountryId;                                                                                                 //
                    _ReserveHotelRS.TotalPrice = (Convert.ToDecimal(newPrice) + Convert.ToDecimal(MarkUpAmt) - Convert.ToDecimal(CommissionAmt)).ToString();    //
                    //TotalPrice=CurrentBasePrice+markup
                    if (Convert.ToDecimal(newPrice) > Convert.ToDecimal(oldTotalPrice))
                    {
                        _ReserveHotelRS.Error = "Fare has been revised from " + oldTotalPrice + " To " +
                        newPrice + ". Do you want to continue.";
                    }
                    else
                        _ReserveHotelRS.Error = "";

                    _ReserveHotelRS.StatusCode = "01";
                    return true;
                }
                else
                {
                    _ReserveHotelRS = new ReserveHotelRS();
                    var error = xdoc.Descendants(nspc + "Error");
                    _ReserveHotelRS.Error = error.Elements("DetailedMessage").First().Value;
                    _ReserveHotelRS.StatusCode = "00";
                    return false;
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", request.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), request.SupplierId.ToString(), request.TraceID.ToString());
                return false;
            }
        }
        #endregion


    }
}
