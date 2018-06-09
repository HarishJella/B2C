using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Xml.Linq;
using WXYZ_Hotel.Common;

namespace WXYZ_Hotel.Models
{
    public class Calculation
    {
        #region Commission & Markup Calculation
        /// <summary>
        /// Created by vignesh on 01-05-2018 for new commission and markup
        /// </summary>
        /// <param name="AgentId"></param>
        /// <param name="TerminalId"></param>
        /// <param name="Seq"></param>
        /// <param name="BranchId"></param>
        /// <param name="LoginReference"></param>
        /// <param name="pAppType"></param>
        /// <param name="Breakup"></param>
        /// <param name="BookngAmt"></param>
        /// <param name="Flag"></param>
        /// <param name="Output"></param>
        /// <param name="UserName"></param>
        /// <returns></returns>
        public static bool CalcCommAndMarkup(AgentDetails AgentDetails, string BookingAmt, ref string MarkUpAmt, ref string CommissionAmt, DataSet dsComMarkDt)
        {
            bool blResult = false;
            try
            {
                #region Markup Calculation

                var QueryMark = dsComMarkDt.Tables[0].AsEnumerable().Where(x => (((x.Field<string>("HCM_BRANCH_ID").ToString().Trim() == AgentDetails.BranchID && x.Field<string>("HCM_AGENT_ID").ToString().Trim() == AgentDetails.AgentID) || x.Field<string>("HCM_BRANCH_ID").ToString().Trim() == AgentDetails.BranchID || x.Field<string>("HCM_AGENT_ID").ToString().Trim() == AgentDetails.AgentID || x.Field<string>("HCM_BRANCH_ID").ToString().Trim() == "ALL" || x.Field<string>("HCM_AGENT_ID").ToString().Trim() == "ALL") && (x.Field<string>("HCM_TYPE").ToString().Trim() == "M" || x.Field<string>("HCM_TYPE").ToString().Trim() == "B")));
                if (QueryMark.Count() > 0)
                {
                    DataTable dtMarkup = QueryMark.CopyToDataTable();
                    if (!string.IsNullOrEmpty(dtMarkup.Rows[0]["HCM_REF"].ToString()))
                        MarkUpAmt = (FareCalc(AgentDetails, BookingAmt, dtMarkup.Rows[0]["HCM_REF"].ToString())).ToString();

                    blResult = true;
                }

                #endregion

                #region Commission Calculation

                var QueryCom = dsComMarkDt.Tables[0].AsEnumerable().Where(x => (((x.Field<string>("HCM_BRANCH_ID").ToString().Trim() == AgentDetails.BranchID && x.Field<string>("HCM_AGENT_ID").ToString().Trim() == AgentDetails.AgentID) || x.Field<string>("HCM_BRANCH_ID").ToString().Trim() == AgentDetails.BranchID || x.Field<string>("HCM_AGENT_ID").ToString().Trim() == AgentDetails.AgentID || x.Field<string>("HCM_BRANCH_ID").ToString().Trim() == "ALL" || x.Field<string>("HCM_AGENT_ID").ToString().Trim() == "ALL") && (x.Field<string>("HCM_TYPE").ToString().Trim() == "C" || x.Field<string>("HCM_TYPE").ToString().Trim() == "B")));
                if (QueryCom.Count() > 0)
                {
                    DataTable dtCom = QueryCom.CopyToDataTable();
                    if (!string.IsNullOrEmpty(dtCom.Rows[0]["HCM_REF"].ToString()))
                        CommissionAmt = (FareCalc(AgentDetails, BookingAmt, dtCom.Rows[0]["HCM_REF"].ToString())).ToString();

                    blResult = true;
                }

                #endregion

            }
            catch (Exception ex)
            {
                //Logging.StoreLog(AgentDetails.TerminalID.ToString(), AgentDetails.AgentID.ToString(), AgentDetails.SequenceId.ToString(), AgentDetails.BranchID.ToString(), AgentDetails.LoginReference.ToString(), AppType.B2B, "BUS", ex.StackTrace.Substring(ex.StackTrace.IndexOf("cs:line")) + ex.Message.ToString(), GetType().Name, MethodBase.GetCurrentMethod().Name, "X", AgentDetails.UserName.ToString(), "", "");
            }
            return blResult;
        }

        public static decimal FareCalc(AgentDetails AgentDetails, string BookingAmt, string Breakup)
        {
            decimal CalcAmt = 0;
            decimal dcTaxAmt = 0;
            decimal FlatAmt = 0;
            try
            {
                var BreakUPdt = Breakup.Split('|');
                for (var i = 0; i < BreakUPdt.Count(); i++)
                {
                    var BreakUPCode = BreakUPdt[i].Split(':');
                    if (BreakUPCode[0].ToString().ToUpper().Trim() == "GR" && !string.IsNullOrEmpty(BreakUPCode[1].ToString()))
                    {
                        dcTaxAmt += Convert.ToDecimal((Convert.ToDecimal(BookingAmt) * Convert.ToDecimal(BreakUPCode[1].ToString())) / 100);
                    }
                    if (BreakUPCode[0].ToString().ToUpper().Trim() == "FL")
                    {
                        FlatAmt += Convert.ToDecimal(BreakUPCode[1].ToString());
                    }
                    CalcAmt = dcTaxAmt > FlatAmt ? dcTaxAmt : FlatAmt;
                }
                //CalcAmt = CalcAmt * Convert.ToInt32(RCount);
            }
            catch (Exception ex)
            {
                //Logging.StoreLog(AgentDetails.TerminalID.ToString(), AgentDetails.AgentID.ToString(), AgentDetails.SequenceId.ToString(), AgentDetails.BranchID.ToString(), AgentDetails.LoginReference.ToString(), AppType.B2B, "BUS", ex.StackTrace.Substring(ex.StackTrace.IndexOf("cs:line")) + ex.Message.ToString(), GetType().Name, MethodBase.GetCurrentMethod().Name, "X", AgentDetails.UserName.ToString(), "", "");   // 
            }
            return CalcAmt;
        }

        //public static string ageValidation(ConfirmHotelRQ ConfirmRQ)
        //{
        //    Rooms Rq=new Rooms();
        //    string Resp = "", ErrorMsge = "", errormessage = "";
        //    DataSet ROOM_DETAILS = new DataSet();
        //    ROOM_DETAILS = SQLAccess.Fetch_Hotel_Avail_Details(ConfirmRQ.Agent, ConfirmRQ.TraceId, "E", "ROOM_REQUEST", ref Resp, ref ErrorMsge);
        //   // var doc = XDocument.Parse(ROOM_DETAILS.Tables[0].Rows[0]["API_LOG_DESCRIPTION"].ToString());
        //      var data=ROOM_DETAILS.Tables[0].Rows[0]["API_LOG_DESCRIPTION"];
        //      Rq.RoomRq = JsonConvert.DeserializeObject<Rooms>(data.ToString());
              
        //    //var a = data.Split('"');
        //    //if (a.Length > 0)
        //    //{
        //    //    for (int i = 0; i < a.Length; i++)
        //    //    {
        //    //        if (a[i] == "CHAge")
        //    //        {
        //    //            foreach (var pc in ConfirmRQ.PaxCounts)
        //    //            {
        //    //                if (pc.CHAge.Length > 0)
        //    //                {
        //    //                    foreach (var gt in pc.Guest)
        //    //                    {
        //    //                        if (gt.type == "CH")
        //    //                        {
        //    //                            string Byr = gt.DOB.Split('-')[2];
        //    //                            string Rage=a[i+1];
        //    //                           // var t = Rage[7];
        //    //                            string Cyr = DateTime.Now.Year.ToString();
        //    //                            string temp = (Convert.ToInt32(Cyr) - Convert.ToInt32(Rage)).ToString();
        //    //                            if (temp == Byr)
        //    //                            {
        //    //                                errormessage = "";
        //    //                            }
        //    //                            else
        //    //                            {
        //    //                                return errormessage = "Data Err : Age MisMatch";

        //    //                            }
        //    //                        }
        //    //                    }
        //    //                }
        //    //            }
        //    //        }

        //    //    }
        //    //}
        //    //return errormessage;
        //}
        #endregion
    }

}