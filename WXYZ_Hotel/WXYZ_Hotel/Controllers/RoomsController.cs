using HotelService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Xml.Linq;
using System.Xml.Serialization;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Models;

namespace WXYZ_HotelService.Controllers
{
    public class RoomsController : ApiController
    {
        XElement XEldestination { get; set; }
        string LogData = string.Empty;
        string city = "";
        [HttpPost]
        [Route("api/GetRooms")]
        public IHttpActionResult GetAvailableRooms([FromBody] RoomRQ RoomRQ)
        {
            UAPIRoomRS objRoomRS = new UAPIRoomRS();
            Validate validate = new Validate();
            var result = string.Empty;
            #region Request Log <- Application
            LogData = "<EVENT><SERVICEREQUESTDATA>" + JsonConvert.SerializeObject(RoomRQ, Formatting.Indented) + "</SERVICEREQUESTDATA></EVENT>";
            SQLAccess.Insert_Action_LogDetails("HOTEL", RoomRQ.AgentDetails, "E", GetType().Name, "ROOM_REQUEST", LogData, RoomRQ.SupplierId.ToString(), RoomRQ.TraceId.ToString());
            #endregion
            var errormessage = validate.ValidateRoomReq(RoomRQ);
            if (string.IsNullOrEmpty(errormessage))
            {
                var objProperty = new Property();
                #region Fetch SupplierDetails                                                                                                                          //

                string Result = string.Empty;
                string DBErrorMsg = string.Empty;
                bool FetchSupplierResult = WXYZ_Hotel.Common.SQLAccess.Fetch_supplier_Details(RoomRQ.AgentDetails, "HOTEL", RoomRQ.SupplierId.ToString(), ref Result, ref DBErrorMsg);
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


                #endregion                                                                                                   //

                if (SupplierData.Table.Count() > 0)                                                                         //
                {
                    if (RoomRQ != null)                                                                                      //
                    {
                        foreach (var Sup_Name in SupplierData.Table)                                                        //
                        {
                            switch (RoomRQ.Supplier.ToUpper())
                            {
                                case "TRM":
                                    result = UAPIHotelInfo(RoomRQ, Sup_Name.CRSName, Sup_Name.AvailCredentials.ToString());          //
                                    break;
                            }
                        }
                    }
                }
                else
                {
                    errormessage = "Sorry! your Api Key and Mode value is wrong! Please send valid Api key and Mode.(or) No Supplier Mapping";
                }
            }
            else
            {
                objRoomRS.StatusCode = "00";
                objRoomRS.ErrorMsg = errormessage;
            }

            if (result != "" && !result.Contains("#03"))
            {
                objRoomRS.StatusCode = "01";
                objRoomRS.StayRS = JsonConvert.DeserializeObject<StayRS>(result.ToString());
                objRoomRS.ErrorMsg = errormessage;
            }
            else if (result.Contains("#03"))
            {
                errormessage = result;
                objRoomRS.StatusCode = "00";
                objRoomRS.ErrorMsg = errormessage;
            }
            else
            {
                errormessage = "Rooms Not Available";
                objRoomRS.StatusCode = "00";
                objRoomRS.ErrorMsg = errormessage;
            }
            #region Response Log -> Application
            SQLAccess.Insert_Action_LogDetails("HOTEL", RoomRQ.AgentDetails, "E", GetType().Name, "ROOM_RESPONSE", JsonConvert.SerializeObject(objRoomRS.StayRS), RoomRQ.SupplierId.ToString(), RoomRQ.TraceId.ToString());
            #endregion
            return Ok(objRoomRS);
        }

        #region UAPIHotelInfo
        /// <summary>
        /// 
        /// </summary>
        /// <param name="xml"></param>
        /// <returns></returns>
        private string UAPIHotelInfo(RoomRQ RoomRQ, string Code, string cred)
        {
            try
            {
                BaseClass objbase = new BaseClass();
                StayRS RoomRS = new StayRS();
                city = RoomRQ.Destination;
                XEldestination = objbase.GetDestination(city);
                if (XEldestination == null)
                {
                    return "No City Matched , Please provide valid city name.#03";
                }
                else
                {
                    var CityCode = XEldestination.Attribute("TRM").Value;
                    string api = Code;
                    string res = string.Empty;
                    var objProp = new Property();
                    objProp = objbase.GetCredential(api, cred);
                    if (!string.IsNullOrWhiteSpace(CityCode))
                    {
                        var objUAPI = new UAPIHotel();

                        var sd = RoomRQ.CheckIn;
                        var ed = RoomRQ.CheckOut;
                        var ci = sd.Split('-')[2] + "-" + sd.Split('-')[1] + "-" + sd.Split('-')[0];
                        var co = ed.Split('-')[2] + "-" + ed.Split('-')[1] + "-" + ed.Split('-')[0];
                        objUAPI.Destination = CityCode;
                        objUAPI.Property = objProp;
                        objUAPI.RoomRQ = RoomRQ;
                        objUAPI.CheckIn = ci;
                        objUAPI.CheckOut = co;
                        objUAPI.BranchCode = objProp.ApiKey.ToString();
                        bool Result = objUAPI.HotelDetailsRest(ref RoomRS, RoomRQ, objProp);
                        if (Result == false && !RoomRS.Error.Contains("Err"))
                        {
                            RoomRS.Status = "00";
                            RoomRS.Error = "Rooms not available ";
                            RoomRS.Rooms = null;
                        }
                        else if (Result == false && RoomRS.Error.Contains("Err"))
                        {
                            RoomRS.Status = "00";
                            RoomRS.Error = "Problem occured while fetching currency details.Please contact customare care.-#03";
                            RoomRS.Rooms = null;
                        }
                        else
                        {
                            RoomRS.Status = "01";
                            RoomRS.Error = "";
                            RoomRS.Rooms = RoomRS.Rooms;
                        }
                        res = JsonConvert.SerializeObject(RoomRS);
                    }
                    return res;
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", RoomRQ.AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), RoomRQ.SupplierId.ToString(), RoomRQ.TraceId.ToString());
                return "<Issue id='1989'>" + ex.Message + "</Issue>";
            }
        }
        #endregion
    }
}
