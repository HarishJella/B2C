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
using System.Web;
using System.Web.Http;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Hotel;
using WXYZ_Hotel.Models;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Controllers
{
    public class BookController : ApiController
    {
        string LogData = string.Empty;
        [HttpPost]
        [Route("api/HotelBook")]
        public ConfirmHotelRS HotelBooking(ConfirmHotelRQ ConfirmRQ)
        {
            ConfirmHotelRS _ConfirmRS = new ConfirmHotelRS();
            BaseClass objbase = new BaseClass();
            Validate validate = new Validate();
            string Passengers_Name = string.Empty;
            string strTrackId = string.Empty;
            string Error = string.Empty;
            string SeqNumber = string.Empty;
            string errormessage = string.Empty;
            try
            {
                Track _Track = new Track();
                DataSet ds = new DataSet();
                string res = string.Empty;
                var objval = new Validate();
                var objProp = new Property();
                var rnd = new Random();
                SeqNumber = rnd.Next(1000, 154555).ToString();
                #region Request Log <- Application
                LogData = "<EVENT><SERVICEREQUESTDATA>" + JsonConvert.SerializeObject(ConfirmRQ, Formatting.Indented) + "</SERVICEREQUESTDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "E", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                #endregion

                errormessage = validate.ValBookRQ(ConfirmRQ);
                if (string.IsNullOrEmpty(errormessage))
                {
                    #region Fetch SupplierDetails

                    string Result = string.Empty;
                    string DBErrorMsg = string.Empty;
                    bool FetchSupplierResult = WXYZ_Hotel.Common.SQLAccess.Fetch_supplier_Details(ConfirmRQ.Agent, "HOTEL", ConfirmRQ.SupplierId.ToString(), ref Result, ref DBErrorMsg);
                    WXYZ_Hotel.Controllers.SearchController.Rootobject SupplierData = new WXYZ_Hotel.Controllers.SearchController.Rootobject();
                    if (FetchSupplierResult && !string.IsNullOrEmpty(Result))
                    {
                        if (!string.IsNullOrEmpty(DBErrorMsg))
                        {
                            errormessage = DBErrorMsg + "-#03";
                        }
                        SupplierData = JsonConvert.DeserializeObject<WXYZ_Hotel.Controllers.SearchController.Rootobject>(Result);
                    }
                    else
                        errormessage = "Currently suppliers not available.Please contact support team.-#03";


                    #endregion

                    if (SupplierData.Table != null && SupplierData.Table.Count() > 0)                                                                                      
                    {                                                                                                                       
                        foreach (var Sup_Name in SupplierData.Table)                                                                        
                        {
                            foreach (var r in ConfirmRQ.PaxCounts)
                            {
                                foreach (var pax in r.Guest)
                                {
                                    Passengers_Name += pax.title + "." + pax.firstname + " " + pax.lastname + ",";
                                }
                            }
                            Passengers_Name = Passengers_Name.TrimEnd(',');              
                            #region PENDING TRACK
                            if (!_Track.AgentPendingTrack(ConfirmRQ.Agent, AppType.B2B, ConfirmRQ.CheckIn, ConfirmRQ.CheckOut, Passengers_Name, SeqNumber, ref Error))
                            {
                                _ConfirmRS.ErrorMsg = Error;
                                _ConfirmRS.Status = false;
                                _ConfirmRS.BookingRS = null;
                                goto OUT;
                            }
                            #endregion

                            #region TRACK GENERATION
                            if (!_Track.GenerateTrack(ConfirmRQ, SeqNumber, AppType.B2B, ref strTrackId, ref Error, Passengers_Name))
                            {
                                _ConfirmRS.Status = false;
                                _ConfirmRS.ErrorMsg = Error;
                                _ConfirmRS.BookingRS = null;
                                goto OUT;
                            }
                            #endregion
                            objProp = objbase.GetCredential(Sup_Name.CRSName, Sup_Name.AvailCredentials.ToString());                               
                            if (objProp != null)
                            {
                                switch (Sup_Name.CRSName.ToUpper())                                                                                
                                {
                                    case "TRM":
                                        var objTRM = new UAPIHotel();
                                        objTRM.HotelId = ConfirmRQ.HotelCode;
                                        objProp = objbase.GetCredential(Sup_Name.CRSName, Sup_Name.AvailCredentials.ToString());                   
                                        objTRM.Property = objProp;
                                        objTRM.TraceId = ConfirmRQ.TraceId;
                                        objTRM.HotelChain = ConfirmRQ.HotelChain;
                                        objTRM.CheckIn = DateTime.ParseExact(ConfirmRQ.CheckIn, "dd/MM/yyyy", null).ToString("yyyy-MM-dd");
                                        objTRM.CheckOut = DateTime.ParseExact(ConfirmRQ.CheckOut, "dd/MM/yyyy", null).ToString("yyyy-MM-dd");
                                        objTRM.PaxCounts = ConfirmRQ.PaxCounts;
                                        objTRM.RatePlanType = ConfirmRQ.RatePlanCode;
                                        objTRM.RateSupplier = ConfirmRQ.RateBasis;
                                        objTRM.BasePrice = ConfirmRQ.SupplierAmount.ToString();
                                        objTRM.Currency = ConfirmRQ.SupplierCurrency;
                                        objTRM.allocationDetails = ConfirmRQ.allocationDetails;
                                        objTRM.Nationality = ConfirmRQ.Nationality;
                                        res = objTRM.HotelBooking(objProp, ConfirmRQ);
                                        if (res.Contains("Err"))
                                        {
                                            ds = _Track.GetTrackDetails(strTrackId, ConfirmRQ);
                                            _Track.UpdateTrack(ConfirmRQ.Agent, SeqNumber, AppType.B2B, "FAILED", "", ConfirmRQ.PaymentMode, strTrackId, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.TotalAmount.ToString(), ds, ref Error);
                                            _ConfirmRS.ErrorMsg = "Unable to book hotel.     " + res;
                                            _ConfirmRS.Status = false;
                                            goto OUT;
                                        }
                                        if (!objTRM.ConfirmHotelResponse(res, ConfirmRQ, ref _ConfirmRS))
                                        {
                                            ds = _Track.GetTrackDetails(strTrackId, ConfirmRQ);
                                            _Track.UpdateTrack(ConfirmRQ.Agent, SeqNumber, AppType.B2B, "PENDING", "", ConfirmRQ.PaymentMode, strTrackId, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.TotalAmount.ToString(), ds, ref Error);
                                            _ConfirmRS.ErrorMsg = "Unable to book hotel.";
                                            _ConfirmRS.Status = false;
                                            goto OUT;
                                        }

                                        break;
                                    case "HOTELBED":
                                        var objbed = new HotelBeds();
                                        objbed.PurchaseToken = ConfirmRQ.ReservationId.Split(';')[0];
                                        objbed.Spui = ConfirmRQ.ReservationId.Split(';')[1];
                                        objbed.PaxCounts = ConfirmRQ.PaxCounts;
                                        objbed.HotelbedsUsername = objProp.Username;
                                        objbed.HotelbedsPassword = objProp.Password;
                                        objbed.HotelbedsUrl = objProp.Url;
                                        if (ConfirmRQ.SupplierRemark.Any())
                                        {
                                            objbed.SSR = ConfirmRQ.SupplierRemark;
                                        }
                                        res = objbed.PurchaseConfirm();
                                        if (!objbed.ConfirmHotelResponse(res, ConfirmRQ, ref _ConfirmRS))
                                        {
                                            ds = _Track.GetTrackDetails(strTrackId, ConfirmRQ);
                                            _Track.UpdateTrack(ConfirmRQ.Agent, SeqNumber, AppType.B2B, "PENDING", "", ConfirmRQ.PaymentMode, strTrackId, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.TotalAmount.ToString(), ds, ref Error);
                                            _ConfirmRS.ErrorMsg = "Unable to book hotel.";
                                            _ConfirmRS.Status = false;
                                            goto OUT;
                                        }
                                        break;
                                    case "SPECIALTOURS":
                                        var objSPT = new SPTours();
                                        //objSPT.PurchaseToken = ConfirmRQ.ReservationId.Split(';')[0];
                                        //objSPT.Spui = ConfirmRQ.ReservationId.Split(';')[1];
                                        objSPT.SupplierId = ConfirmRQ.SupplierId.ToString();
                                        objSPT.SuppUserName = objProp.Username;
                                        objSPT.SuppPassword = objProp.Password;
                                        res = objSPT.HotelBooking(ConfirmRQ, objProp);
                                        if (!objSPT.ConfirmHotelResponse(res, ConfirmRQ, ref _ConfirmRS))
                                        {
                                            ds = _Track.GetTrackDetails(strTrackId, ConfirmRQ);
                                            _Track.UpdateTrack(ConfirmRQ.Agent, SeqNumber, AppType.B2B, "PENDING", "", ConfirmRQ.PaymentMode, strTrackId, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.TotalAmount.ToString(), ds, ref Error);
                                            _ConfirmRS.ErrorMsg = "Unable to book hotel.";
                                            _ConfirmRS.Status = false;
                                            goto OUT;
                                        }
                                        break;
                                }
                            }

                            #region UPDATE TRANSACTION
                            Hashtable hshBooking = new Hashtable();
                            string strError = string.Empty;
                            hshBooking.Add("HOTELPNR", _ConfirmRS.BookingRS[0].ConfirmationRef + "|" + "CONFIRMED");
                            hshBooking.Add("ROOMPNR", _ConfirmRS.BookingRS[0].ConfirmationRef + "|" + "CONFIRMED");                 //
                            hshBooking.Add("SUPPID", ConfirmRQ.SupplierId.ToString());
                            hshBooking.Add("SUPPNAME", ConfirmRQ.RoomsTypes[0].Supplier);
                            if (!_Track.UpdateTransaction(ConfirmRQ.Agent, SeqNumber, AppType.B2B, strTrackId, ConfirmRQ.TotalAmount.ToString(), strTrackId, ConfirmRQ.SupplierId.ToString(), hshBooking, ref Error))
                            {
                                ds = _Track.GetTrackDetails(strTrackId, ConfirmRQ);
                                _Track.UpdateTrack(ConfirmRQ.Agent, SeqNumber, AppType.B2B, "PENDING",
                                    hshBooking["HOTELPNR"].ToString(), ConfirmRQ.PaymentMode, strTrackId, "Pending Track", ConfirmRQ.RoomsTypes[0].Supplier, ConfirmRQ.TotalAmount.ToString(), ds, ref Error);
                                _ConfirmRS.ErrorMsg = "Unable to update PNR. Please contact customer care";
                                _ConfirmRS.Status = false;
                                _ConfirmRS.BookingRS = null;
                                goto OUT;
                            }

                            #endregion

                            #region INSERT TRANSACTION

                            DataSet dsMaster = new DataSet();
                            if (!_Track.BulkInsertTransaction(ConfirmRQ.Agent, SupplierData, AppType.B2B, strTrackId, ConfirmRQ.PaymentMode, ref dsMaster, ref Error))
                            {
                                _ConfirmRS.SPNR = dsMaster.Tables["RTBL_HOTEL_BOOKED_HISTORY"].Rows[0]["RHBH_S_PNR"].ToString();
                                _ConfirmRS.BookingRS = null;
                                _ConfirmRS.Status = false;
                                _ConfirmRS.ErrorMsg = "Problem occured while making transaction.Please contact customer care.";
                                goto OUT;
                            }

                            #endregion

                            #region TRACK SUCCESS
                            if (!_Track.UpdateTrack(ConfirmRQ.Agent, SeqNumber, AppType.B2B, "SUCCESS", _ConfirmRS.BookingRS[0].ConfirmationRef, ConfirmRQ.PaymentMode, strTrackId, "", ConfirmRQ.RoomsTypes[0].Supplier,
                               ConfirmRQ.TotalAmount.ToString(), dsMaster, ref Error))
                            {
                                _ConfirmRS.ErrorMsg = "Unable to get PNR. Please contact customer care";
                                _ConfirmRS.Status = false;
                                goto OUT;
                            }
                            #endregion

                            if (_ConfirmRS.BookingRS != null)
                            {
                                _ConfirmRS.SPNR = dsMaster.Tables["RTBL_HOTEL_BOOKED_HISTORY"].Rows[0]["RHBH_S_PNR"].ToString();                         //
                                _ConfirmRS.Status = true;
                                //_ConfirmRS.BookingRS[0].Result = JsonConvert.SerializeObject(dsMaster, Formatting.Indented);                          //

                                #region Fetch PNR Details From Applicaton DataBase

                                string ErrorMsg = string.Empty;
                                string PNRResult = string.Empty;
                                DataSet dsHotelAvailDetails = new DataSet();
                                dsHotelAvailDetails = SQLAccess.Fetch_Hotel_View_PNR_Details(ConfirmRQ.Agent, _ConfirmRS.SPNR, "", ref PNRResult, ref ErrorMsg);
                                if (dsHotelAvailDetails == null || dsHotelAvailDetails.Tables.Count == 0 || dsHotelAvailDetails.Tables[0].Rows.Count == 0)
                                {
                                    if (!string.IsNullOrEmpty(DBErrorMsg))
                                        ErrorMsg = DBErrorMsg + "-#03";
                                    else
                                        ErrorMsg = "Problem occured while Booking.Please contact customare care.-#03";

                                    _ConfirmRS.ErrorMsg = ErrorMsg;
                                    _ConfirmRS.Status = false;
                                    goto OUT;
                                }
                                _ConfirmRS.BookingRS[0].Result = JsonConvert.SerializeObject(dsHotelAvailDetails);
                                #endregion


                            }
                        OUT:
                            _ConfirmRS.Seq = SeqNumber;
                            _ConfirmRS.TrackId = strTrackId;
                            #region Response Log -> Application
                            LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_ConfirmRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                            SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "E", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                            #endregion
                            return _ConfirmRS;
                        }                                                                                                                               //
                    }                                                                                                                                   //
                    else                                                                                                                               //
                    {                                                                                                                                  //
                        errormessage = "Sorry! your Api Key and Mode value is wrong! Please send valid Api key and Mode.(or) No Supplier Mapping";     //
                    }
                }
                else
                {
                    _ConfirmRS.ErrorMsg = errormessage;
                    _ConfirmRS.Seq = SeqNumber;
                    _ConfirmRS.TrackId = strTrackId;
                    _ConfirmRS.BookingRS = null;
                    #region Response Log -> Application
                    LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_ConfirmRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                    SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "E", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                    #endregion
                    return _ConfirmRS;
                }
                #region Response Log -> Application
                LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_ConfirmRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "E", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                #endregion

            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                _ConfirmRS.ErrorMsg = "Problem occured while booking.";
                _ConfirmRS.Status = false;
                _ConfirmRS.Seq = SeqNumber;
                _ConfirmRS.TrackId = strTrackId;
                _ConfirmRS.BookingRS = null;
                #region Response Log -> Application
                LogData = "<EVENT><SERVICERESPONSEDATA>" + JsonConvert.SerializeObject(_ConfirmRS, Newtonsoft.Json.Formatting.Indented) + "</SERVICERESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "E", GetType().Name, "HotelBooking", LogData, ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
                #endregion
                return _ConfirmRS;
            }
            return null;                                                                                                                      //
        }
    }
}
