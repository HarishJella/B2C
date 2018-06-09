using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web;
using WXYZ_Hotel.Common;
using WXYZ_Hotel.Models;

public class Track
{
    #region Transaction Tables
    private DataSet GetTransactionTables()
    {
        try
        {
            DataSet dsTrn = new DataSet("WXYZ");
            dsTrn.Tables.Add(HtlPaxInf());
            dsTrn.Tables.Add(HtlInf());
            dsTrn.Tables.Add(RmInf());
            dsTrn.Tables.Add(BkdHs());
            dsTrn.Tables.Add(AgTrn());
            //dsTrn.Tables.Add(SupTrans());
            return dsTrn;
        }
        catch (Exception ex)
        {
            throw ex;
        }
    }

    private DataTable HtlPaxInf()
    {
        try
        {
            DataTable dtHBI = new DataTable("RTBL_HOTEL_PAX_DETAILS");
            dtHBI.Columns.Add("RHPD_S_PNR");
            dtHBI.Columns.Add("RHPD_AGENT_ID");
            dtHBI.Columns.Add("RHPD_TERMINAL_ID");
            dtHBI.Columns.Add("RHPD_PAX_TYPE");
            dtHBI.Columns.Add("RHPD_PAX_TITLE");
            dtHBI.Columns.Add("RHPD_PAX_FIRST_NAME");
            dtHBI.Columns.Add("RHPD_PAX_LAST_NAME");
            dtHBI.Columns.Add("RHPD_PAX_MOBLIE_NO");
            dtHBI.Columns.Add("RHPD_PAX_REF_NO");
            dtHBI.Columns.Add("RHPD_PAX_ADDRESS");
            dtHBI.Columns.Add("RHPD_ROOM_ID");
            dtHBI.Columns.Add("RHPD_PAX_COUNTRY");
            dtHBI.Columns.Add("RHPD_PAX_STATE");
            dtHBI.Columns.Add("RHPD_PAX_CITY");
            dtHBI.Columns.Add("RHPD_PAX_EMAIL");
            dtHBI.Columns.Add("RHPD_LEAD_PAX");
            dtHBI.Columns.Add("RHPD_CREATED_DATE");
            dtHBI.Columns.Add("RHPD_BRANCH_ID");
            dtHBI.Columns.Add("RHPD_ISSUINGBRANCH_ID");
            return dtHBI;
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    private DataTable HtlInf()
    {
        try
        {
            DataTable dtHI = new DataTable("RTBL_HOTEL_DETAILS");
            dtHI.Columns.Add("RHD_S_PNR");
            dtHI.Columns.Add("RHD_AGENT_ID");
            dtHI.Columns.Add("RHD_TERMINAL_ID");
            dtHI.Columns.Add("RHD_USER_NAME");
            dtHI.Columns.Add("RHD_TRACK_ID");
            dtHI.Columns.Add("RHD_REFERENCE_NO");
            dtHI.Columns.Add("RHD_HOTEL_NAME");
            dtHI.Columns.Add("RHD_STAR_RATING");
            dtHI.Columns.Add("RHD_CHECK_IN");
            dtHI.Columns.Add("RHD_CHECK_OUT");
            dtHI.Columns.Add("RHD_NO_OF_ROOMS");
            dtHI.Columns.Add("RHD_ROOM_TYPE");
            dtHI.Columns.Add("RHD_HOTEL_INFO");
            dtHI.Columns.Add("RHD_INCLUSION");
            dtHI.Columns.Add("RHD_LOCATION");
            dtHI.Columns.Add("RHD_COUNTRY");
            dtHI.Columns.Add("RHD_STATE");
            dtHI.Columns.Add("RHD_CITY");
            dtHI.Columns.Add("RHD_EMAIL");
            dtHI.Columns.Add("RHD_SUPPLIER_NAME");
            dtHI.Columns.Add("RHD_BOOK_APP_TYPE");
            dtHI.Columns.Add("RHD_BOOKING_TYPE");
            dtHI.Columns.Add("RHD_BOOKED_DATE");
            dtHI.Columns.Add("RHD_CANCELLATION_RULE");
            dtHI.Columns.Add("RHD_PAX_COUNT");
            dtHI.Columns.Add("RHD_VOUCHER");
            dtHI.Columns.Add("RHD_MOBILE_NO");
            dtHI.Columns.Add("RHD_SUPPLIER_ID");
            dtHI.Columns.Add("RHD_OFFICE_ID");
            dtHI.Columns.Add("RHD_BRANCH_ID");
            dtHI.Columns.Add("RHD_ISSUINGBRANCH_ID");
            return dtHI;
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    private DataTable RmInf()
    {
        try
        {
            DataTable dtHRI = new DataTable("RTBL_HOTEL_ROOM_DETAILS");
            dtHRI.Columns.Add("RHRD_S_PNR");
            dtHRI.Columns.Add("RHRD_HOTEL_PNR");
            dtHRI.Columns.Add("RHRD_ROOM_PNR");
            dtHRI.Columns.Add("RHRD_ROOM_ID");
            dtHRI.Columns.Add("RHRD_ADULT_COUNT");
            dtHRI.Columns.Add("RHRD_CHILD_COUNT");
            dtHRI.Columns.Add("RHRD_CHILD_AGE");
            dtHRI.Columns.Add("RHRD_STATUS");
            dtHRI.Columns.Add("RHRD_CHECKIN_TIME");
            dtHRI.Columns.Add("RHRD_CHECKOUT_TIME");
            dtHRI.Columns.Add("RHRD_NO_NIGHTS");
            dtHRI.Columns.Add("RHRD_BASIC_FARE");
            dtHRI.Columns.Add("RHRD_FARE_BREAKUP");
            dtHRI.Columns.Add("RHRD_TOTAL_FARE");
            dtHRI.Columns.Add("RHRD_MARKUP");
            dtHRI.Columns.Add("RHRD_COMMISSION");
            dtHRI.Columns.Add("RHRD_SERVICE_CHARGE");
            dtHRI.Columns.Add("RHRD_SERVICE_TAX");
            dtHRI.Columns.Add("RHRD_TDS_AMOUNT");
            dtHRI.Columns.Add("RHRD_TAXAMOUNT");
            dtHRI.Columns.Add("RHRD_SUPPLIER_DISCOUNT");
            dtHRI.Columns.Add("RHRD_PAYMENT_MODE");
            dtHRI.Columns.Add("RHRD_GATEWAY_SERVICE_CHARGE");
            dtHRI.Columns.Add("RHRD_GATEWAY_SERVICE_TAX");
            dtHRI.Columns.Add("RHRD_CURRENCY_CODE");
            dtHRI.Columns.Add("RHRD_CURRENCY_ROE");
            dtHRI.Columns.Add("RHRD_FILTER_TYPE");
            dtHRI.Columns.Add("RHRD_ROOM_TYPE");
            dtHRI.Columns.Add("RHRD_CANCEL_GST");
            dtHRI.Columns.Add("RHRD_INCLUSION");
            dtHRI.Columns.Add("RHRD_CANCELLATION_DATE");
            dtHRI.Columns.Add("RHRD_AGENT_PENALTY");
            dtHRI.Columns.Add("RHRD_SUPP_PENALTY");
            dtHRI.Columns.Add("RHRD_CANCELLATION_MARKUP");
            dtHRI.Columns.Add("RHRD_CANCELLATION_MARKUP_SERVICE_TAX");
            dtHRI.Columns.Add("RHRD_REMARKS");
            dtHRI.Columns.Add("RHRD_UPDATED_BY");
            dtHRI.Columns.Add("RHRD_UPDATED_DATE");
            dtHRI.Columns.Add("RHRD_FARE_ID");
            dtHRI.Columns.Add("RHRD_MEALS_DETAILS");
            dtHRI.Columns.Add("RHRD_SPCL_REQUESTS");
            dtHRI.Columns.Add("RHRD_BED_PREFRENCE");
            dtHRI.Columns.Add("RHRD_EXTRAMEAL_AMT");
            dtHRI.Columns.Add("RHRD_REFERENCE_NO");
            dtHRI.Columns.Add("RHRD_PG_TRECK_ID");
            dtHRI.Columns.Add("RHRD_AGENT_EARNINGS");
            return dtHRI;
        }
        catch (Exception ex)
        {
            return null;
        }
    }

    private DataTable AgTrn()
    {
        try
        {
            DataTable dtAT = new DataTable("RTBL_AGENTTRANSACTION");
            dtAT.Columns.Add("RAT_USER_TRACK_ID");
            dtAT.Columns.Add("RAT_AGENT_ID");
            dtAT.Columns.Add("RAT_TERMINAL_ID");
            dtAT.Columns.Add("RAT_USER_NAME");
            dtAT.Columns.Add("RAT_PRODUCT_ID");
            dtAT.Columns.Add("RAT_S_PNR");
            dtAT.Columns.Add("RAT_AIRLINE_PNR");
            dtAT.Columns.Add("RAT_CRS_PNR");
            dtAT.Columns.Add("RAT_PAYMENT_MODE");
            dtAT.Columns.Add("RAT_TRANS_NAME");
            dtAT.Columns.Add("RAT_FARE_TYPE");
            dtAT.Columns.Add("RAT_TRANS_TYPE");
            dtAT.Columns.Add("RAT_TRANS_AMOUNT");
            dtAT.Columns.Add("RAT_SIGN");
            dtAT.Columns.Add("RAT_BALANCE");
            dtAT.Columns.Add("RAT_REMARKS");
            dtAT.Columns.Add("RAT_TRANS_DATE");
            dtAT.Columns.Add("RAT_OFFICE_ID");
            dtAT.Columns.Add("RAT_DESCRIPTION");
            return dtAT;
        }
        catch (Exception Ex)
        {
            return null;
        }
    }

    private DataTable BkdHs()
    {
        try
        {
            DataTable dtHBH = new DataTable("RTBL_HOTEL_BOOKED_HISTORY");
            dtHBH.Columns.Add("RHBH_AGENT_ID");
            dtHBH.Columns.Add("RHBH_TERMINAL_ID");
            dtHBH.Columns.Add("RHBH_S_PNR");
            dtHBH.Columns.Add("RHBH_HOTEL_PNR");
            dtHBH.Columns.Add("RHBH_REFERENCE_NO");
            dtHBH.Columns.Add("RHBH_GROSS_AMOUNT");
            dtHBH.Columns.Add("RHBH_STATUS");
            dtHBH.Columns.Add("RHBH_SUPPLIER_NAME");
            dtHBH.Columns.Add("RHBH_PAYMENT_MODE");
            dtHBH.Columns.Add("RHBH_BOOKED_DATE");
            dtHBH.Columns.Add("RHBH_BOOKED_TYPE");
            dtHBH.Columns.Add("RHBH_TITLE");
            dtHBH.Columns.Add("RHBH_FIRST_NAME");
            dtHBH.Columns.Add("RHBH_LAST_NAME");
            dtHBH.Columns.Add("RHBH_USER_NAME");
            dtHBH.Columns.Add("RHBH_OFFICE_ID");
            dtHBH.Columns.Add("RHBH_BRANCH_ID");
            dtHBH.Columns.Add("RHBH_ISSUINGBRANCH_ID");
            return dtHBH;
        }
        catch (Exception Ex)
        {
            return null;
        }
    }
    private DataTable SupTrans()
    {
        try
        {
            DataTable dtSUPTRANS = new DataTable("RTBL_SUPPLIERTRANSACTION");
            dtSUPTRANS.Columns.Add("RST_USER_TRACK_ID");
            dtSUPTRANS.Columns.Add("RST_SUPPLIER_ID");
            dtSUPTRANS.Columns.Add("RST_SUPPLIER_NAME");
            dtSUPTRANS.Columns.Add("RST_USER_NAME");
            dtSUPTRANS.Columns.Add("RST_PRODUCT_ID");
            dtSUPTRANS.Columns.Add("RST_S_PNR");
            dtSUPTRANS.Columns.Add("RST_AIRLINE_PNR");
            dtSUPTRANS.Columns.Add("RST_CRS_PNR");
            dtSUPTRANS.Columns.Add("RST_PAYMENT_MODE");
            dtSUPTRANS.Columns.Add("RST_TRANS_NAME");
            dtSUPTRANS.Columns.Add("RST_FARE_TYPE");
            dtSUPTRANS.Columns.Add("RST_TRANS_TYPE");
            dtSUPTRANS.Columns.Add("RST_TRANS_AMOUNT");
            dtSUPTRANS.Columns.Add("RST_SIGN");
            dtSUPTRANS.Columns.Add("RST_BALANCE");
            dtSUPTRANS.Columns.Add("RST_REMARKS");
            dtSUPTRANS.Columns.Add("RST_TRANS_DATE");
            dtSUPTRANS.Columns.Add("RST_OFFICE_ID");
            dtSUPTRANS.Columns.Add("RST_DESCRIPTION");
            return dtSUPTRANS;
        }
        catch (Exception ex)
        {
            return null;
        }

    }

    #endregion

    public bool AgentPendingTrack(AgentDetails AgentDetail, AppType pAppType, string CheckIn, string CheckOut, string PassengerName, string SeqNo, ref string Error)
    {
        bool Response = false;
        DataSet dsResult = new DataSet();
        try
        {
            CheckIn = DateTime.ParseExact(CheckIn, "dd/MM/yyyy", null).ToString("MM/dd/yyyy");
            CheckOut = DateTime.ParseExact(CheckOut, "dd/MM/yyyy", null).ToString("MM/dd/yyyy");

            Hashtable my_param = new Hashtable();
            my_param.Add("RHT_AGENT_ID", AgentDetail.AgentID);
            my_param.Add("RHT_TERMINAL_ID", AgentDetail.TerminalID);
            my_param.Add("RHT_USER_NAME", AgentDetail.UserName);
            my_param.Add("RHT_STATUS", "PENDING");
            my_param.Add("RHT_CHECKINDATE", CheckIn);
            my_param.Add("RHT_CHECKOUTDATE", CheckOut);
            my_param.Add("PASSENGER_NAME", PassengerName);
            dsResult = DBHandler.ExecSelectProcedure(SelectProcedure.FetchHotelTrackStatus, my_param, DataBase.APP.ToString());

            if (dsResult == null || dsResult.Tables.Count == 0 || dsResult.Tables[0].Rows.Count == 0)
            {
                Error = "Problem occurred while validating Last Booking status detail";
            }
            else if (dsResult.Tables[0].Rows[0][0].ToString().Trim() == "3")
            {
                Error = "Your Booking Reservation Has Been Locked.Please Contact Customare Care.";
            }
            else if (dsResult.Tables[0].Rows[0][0].ToString().Trim() == "4")
            {
                Error = "Your Booking Reservation Already Exists.Please Contact Customare Care.";
            }
            else if (dsResult.Tables[0].Rows[0][0].ToString().Trim().Equals("0"))
            {
                Response = true;
            }
            else
            {
                Error = "Problem occurred while validating Last Booking status detail";
            }
        }
        catch (Exception ex)
        {
            SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetail, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            Error = "Problem occurred while validating Last Booking status detail";
        }
        return Response;
    }
    public bool GenerateTrack(ConfirmHotelRQ request, string Seq, AppType pAppType, ref string TrackID, ref string Err, string PassengerName)
    {
        try
        {
            double GrossFare = 0;
            double Commission = 0;
            double suppGross = 0;
            double suppComm = 0;
            DataSet dsMaster = GetTransactionTables();
            Hashtable _hsh = new Hashtable();
             int rmid = 0; int id = 0;
            dsMaster.Tables["RTBL_HOTEL_DETAILS"].Rows.Add(
                /*RHD_S_PNR              */ "",
                /*RHD_AGENT_ID           */ request.Agent.AgentID,
                /*RHD_TERMINAL_ID        */ request.Agent.TerminalID,
                /*RHD_USER_NAME          */ request.Agent.UserName,
                /*RHD_TRACK_ID           */ "",
                /*RHD_REFERENCE_NO       */ "",
                /*RHD_HOTEL_NAME         */ request.HotelName,
                /*RHD_STAR_RATING        */ request.HotelRating,
                /*RHD_CHECK_IN           */DateTime.ParseExact(request.CheckIn, "dd/MM/yyyy", null).ToString("MM/dd/yyyy"),
                /*RHD_CHECK_OUT          */ DateTime.ParseExact(request.CheckOut, "dd/MM/yyyy", null).ToString("MM/dd/yyyy"),
                /*RHD_NO_OF_ROOMS        */ request.SearchRoom.Count,
                /*RHD_ROOM_TYPE          */ request.RoomTypeName,
                /*RHD_HOTEL_INFO         */ request.HotelAddress.Replace("&", "AND"),
                /*RHD_INCLUSION          */ request.RoomsTypes[0].BoardType,
                /*RHD_LOCATION           */ request.HotelCity,
                /*RHD_COUNTRY            */ request.Nationality,
                /*RHD_STATE              */ "",
                /*RHD_CITY               */ request.HotelCity,
                /*RHD_EMAIL              */ request.ContactDetails[0].EmailID,
                /*RHD_SUPPLIER_NAME      */ request.RoomsTypes[0].Supplier,
                /*RHD_BOOK_APP_TYPE      */ request.Agent.TerminalType == "W" ? "W" : (request.Agent.TerminalType == "C" ? "C" : "A"),
                /*RHD_BOOKING_TYPE       */ "",
                /*RHD_BOOKED_DATE        */ DateTime.Now.ToString("yyyy/MM/dd"),
                /*RHD_CANCELLATION_RULE  */ request.RoomsTypes[0].CancellationPolicy,
                /*RHD_PAX_COUNT          */ request.PaxCounts.Count,
                /*RHD_VOUCHER            */"",
                /*RHD_MOBILE_NO          */request.HotelContactNo,
                /*RHD_SUPPLIER_ID       */ request.RoomsTypes[0].VendorId,
                /*RHD_OFFICE_ID          */"",
                /*RHD_BRANCH_ID          */request.Agent.BranchID,
                /*RHD_ISSUINGBRANCH_ID   */request.Agent.BranchID                                              //

                );
            #region RTBL_HOTEL_PAX_DETAILS
            int refno = 0;
            foreach (var rm in request.RoomsTypes)
            {
                foreach (var paxDetail in request.PaxCounts)
                {
                    foreach (var pax in paxDetail.Guest)
                    {
                        foreach (var con in request.ContactDetails)
                        {
                            dsMaster.Tables["RTBL_HOTEL_PAX_DETAILS"].Rows.Add(
                                /*RHPD_S_PNR              */ "",
                                /*RHPD_AGENT_ID           */ request.Agent.AgentID,
                                /*RHPD_TERMINAL_ID        */ request.Agent.TerminalID,
                                /*RHPD_PAX_TYPE           */ pax.type,
                                /*RHPD_PAX_TITLE          */ pax.title,
                                /*RHPD_PAX_FIRST_NAME     */ pax.firstname,
                                /*RHPD_PAX_LAST_NAME      */ pax.lastname,
                                /*RHPD_PAX_MOBLIE_NO      */ con.ContactNo,
                                /*RHPD_PAX_REF_NO         */ (++refno).ToString(),
                                /*RHPD_PAX_ADDRESS        */ con.Address,
                                /*RHPD_ROOM_ID            */ rm.RoomId.ToString(),
                                /*HPI_PAX_COUNTRY        */ request.Nationality,
                                /*HPI_PAX_STATE          */ con.State,
                                /*HPI_PAX_CITY           */ request.CityName,
                                /*HPI_PAX_EMAIL          */ con.EmailID,
                                /*HPI_LEAD_PAX           */ PassengerName,
                                /*HPI_CREATED_DATE       */ DateTime.Now.ToString("yyyy/MM/dd"),
                                /*RHPD_BRANCH_ID          */ request.Agent.BranchID,
                                /*RHD_ISSUINGBRANCH_ID    */ request.Agent.BranchID
                     );
                        }
                    }
                }
            }
            #endregion
            //GrossFare = Convert.ToDouble(request.TotalAmount);
            suppGross = Convert.ToDouble(request.SupplierAmount);
            #region T_T_HTL_BOOKED_HISTORY
            dsMaster.Tables["RTBL_HOTEL_BOOKED_HISTORY"].Rows.Add(

               /*RHBH_AGENT_ID              */request.Agent.AgentID,
                /*RHBH_TERMINAL_ID           */request.Agent.TerminalID,
                /*RHBH_S_PNR                 */"",
                /*RHBH_HOTEL_PNR             */"",
                /*HBH_REFERENCE_NO          */"",
                /*RHBH_GROSS_AMOUNT          */Convert.ToDouble(request.TotalAmount),
                /*RHBH_STATUS                */"PENDING",
                /*RHBH_SUPPLIER_NAME         */request.RoomsTypes[0].Supplier,
                /*RHBH_PAYMENT_MODE          */request.PaymentMode,
                /*RHBH_BOOKED_DATE           */DateTime.Now.ToString("yyyy/MM/dd"),
                /*RHBH_BOOKED_TYPE           */request.Agent.TerminalType,
                /*RHBH_TITLE                 */request.PaxCounts[0].Guest[0].title,
                /*RHBH_FIRST_NAME            */request.PaxCounts[0].Guest[0].firstname,
                /*RHBH_LAST_NAME             */request.PaxCounts[0].Guest[0].lastname,
                /*RHBH_USER_NAME             */request.Agent.UserName,
                /*RRHBH_OFFICE_ID            */"",
                /*RHBH_BRANCH_ID             */request.Agent.BranchID,
                /*RHBH_ISSUINGBRANCH_ID      */request.Agent.BranchID);
            #endregion

            #region T_T_AGENT_TRANSACTION
            double GrossAmount = 0;
            double MarkUpAmount = 0;
            double EXTRAMarkUpAmount = 0;
            double CommissionAMT = 0;
            
            GrossAmount += Convert.ToDouble(request.SupplierAmount);
            MarkUpAmount += Convert.ToDouble(request.MarkUpAmount);
            EXTRAMarkUpAmount += Convert.ToDouble(request.EXTRAMarkUpAmt);
            CommissionAMT += Convert.ToDouble(request.Commission);

            GrossFare = ((GrossAmount + MarkUpAmount + EXTRAMarkUpAmount )- CommissionAMT);
            if (GrossFare > 0)
            {
                dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows.Add(
                    /* ATR_USER_TRACK_ID    */"",
                    /* ATR_AGENT_ID         */request.Agent.AgentID,
                    /* ATR_TERMINAL_ID      */request.Agent.TerminalID,
                    /* ATR_USER_NAME        */request.Agent.UserName,
                    /* ATR_PRODUCT_ID       */"HTL",
                    /* ATR_S_PNR            */"",
                    /* ATR_AIRLINE_PNR      */"",
                    /* ATR_CRS_PNR          */"",
                    /* ATR_PAYMENT_MODE     */request.PaymentMode,
                    /* ATR_TRANS_NAME       */"B",
                    /* ATR_FARE_TYPE        */"B",
                    /* ATR_TRANS_TYPE       */"D",
                    /* ATR_TRANS_AMOUNT     */GrossAmount,
                    /* RAT_SIGN             */"-",
                    /* ATR_BALANCE           */"",
                    /* ATR_REMARKS          */"BOOKING",
                    /* ATR_TRANS_DATE       */ DateTime.Now.ToString("yyyyMMdd"),
                    /* ATR_OFFICE_ID        */"",
                    /* ATR_DESCRIPTION      */request.HotelName + " AED " + suppGross);
            }
            if (MarkUpAmount > 0)
            {
                dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows.Add(
                    /* ATR_USER_TRACK_ID    */"",
                    /* ATR_AGENT_ID         */request.Agent.AgentID,
                    /* ATR_TERMINAL_ID      */request.Agent.TerminalID,
                    /* ATR_USER_NAME        */request.Agent.UserName,
                    /* ATR_PRODUCT_ID       */"HTL",
                    /* ATR_S_PNR            */"",
                    /* ATR_AIRLINE_PNR      */"",
                    /* ATR_CRS_PNR          */"",
                    /* ATR_PAYMENT_MODE     */request.PaymentMode,
                    /* ATR_TRANS_NAME       */"B",
                    /* ATR_FARE_TYPE        */"M",
                    /* ATR_TRANS_TYPE       */"D",
                    /* ATR_TRANS_AMOUNT     */MarkUpAmount,
                    /* RAT_SIGN             */"-",
                    /* ATR_BALANCE           */"",
                    /* ATR_REMARKS          */"MARKUP",
                    /* ATR_TRANS_DATE       */DateTime.Now.ToString("yyyyMMdd"),
                    /* ATR_OFFICE_ID        */"",
                    /* ATR_DESCRIPTION      */request.HotelName + " AED " + suppGross);
            }
            if (EXTRAMarkUpAmount > 0)
            {
                dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows.Add(
                    /* ATR_USER_TRACK_ID    */"",
                    /* ATR_AGENT_ID         */request.Agent.AgentID,
                    /* ATR_TERMINAL_ID      */request.Agent.TerminalID,
                    /* ATR_USER_NAME        */request.Agent.UserName,
                    /* ATR_PRODUCT_ID       */"HTL",
                    /* ATR_S_PNR            */"",
                    /* ATR_AIRLINE_PNR      */"",
                    /* ATR_CRS_PNR          */"",
                    /* ATR_PAYMENT_MODE     */request.PaymentMode,
                    /* ATR_TRANS_NAME       */"B",
                    /* ATR_FARE_TYPE        */"E",
                    /* ATR_TRANS_TYPE       */"D",
                    /* ATR_TRANS_AMOUNT     */EXTRAMarkUpAmount,
                    /* RAT_SIGN             */"-",
                    /* ATR_BALANCE           */"",
                    /* ATR_REMARKS          */"EXTRAMARKUP",
                    /* ATR_TRANS_DATE       */ DateTime.Now.ToString("yyyyMMdd"),
                    /* ATR_OFFICE_ID        */"",
                    /* ATR_DESCRIPTION      */request.HotelName + " AED " + suppGross);
            }
            if (CommissionAMT > 0)
            {
                dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows.Add(
                    /* ATR_USER_TRACK_ID    */"",
                    /* ATR_AGENT_ID         */request.Agent.AgentID,
                    /* ATR_TERMINAL_ID      */request.Agent.TerminalID,
                    /* ATR_USER_NAME        */request.Agent.UserName,
                    /* ATR_PRODUCT_ID       */"HTL",
                    /* ATR_S_PNR            */"",
                    /* ATR_AIRLINE_PNR      */"",
                    /* ATR_CRS_PNR          */"",
                    /* ATR_PAYMENT_MODE     */request.PaymentMode,
                    /* ATR_TRANS_NAME       */"B",
                    /* ATR_FARE_TYPE        */"C",
                    /* ATR_TRANS_TYPE       */"C",
                    /* ATR_TRANS_AMOUNT     */CommissionAMT,
                    /* RAT_SIGN             */"+",
                    /* ATR_BALANCE           */"",
                    /* ATR_REMARKS          */"COMMISSION",
                    /* ATR_TRANS_DATE       */ DateTime.Now.ToString("yyyyMMdd"),                             //
                    /* ATR_OFFICE_ID        */"",
                    /* ATR_DESCRIPTION      */request.HotelName + " AED " + suppGross
                    );
            }
            #endregion

            #region T_T_HTL_ROOM_INFO
            foreach (var rm in request.RoomsTypes)
            {
                foreach (var ch in request.PaxCounts)
                {
                    dsMaster.Tables["RTBL_HOTEL_ROOM_DETAILS"].Rows.Add(
                        /*ROM_S_PNR                 */"",
                        /*ROM_HOTEL_PNR             */"",
                        /*ROM_ROOM_PNR              */"",
                        /*ROM_ROOM_ID               */(++rmid).ToString(),
                        /*ROM_ADULT_COUNT           */rm.AdultCount.ToString(),
                        /*ROM_CHILD_COUNT           */rm.ChildCount.ToString(),
                        /*ROM_CHILD_AGE             */ch.CHAge,//rm.CHAge,                                  
                        /*ROM_STATUS                */"PENDING",
                        /*ROM_CHECKIN_TIME          */DateTime.ParseExact(request.CheckIn, "dd/MM/yyyy", null),
                        /*ROM_CHECKOUT_TIME         */DateTime.ParseExact(request.CheckOut, "dd/MM/yyyy", null),
                        /*ROM_NO_NIGHTS             */request.NoOfNights.ToString(),
                        /*ROM_BASIC_FARE            */rm.BaseAmount.ToString(),
                        /*ROM_FARE_BREAKUP          */rm.BaseAmount.ToString(),
                        /*ROM_TOTAL_FARE            */GrossFare,
                        /*ROM_MARKUP                */request.MarkUpAmount.ToString(),
                        /*ROM_COMMISSION            */request.Commission.ToString(),
                        /*ROM_SERVICE_CHARGE        */"0",
                        /*ROM_SERVICE_TAX           */"0",
                        /*ROM_TDS_AMOUNT            */"0",
                        /*ROM_TAXAMOUNT             */"0",
                        /*ROM_SUPPLIER_DISCOUNT     */"0",
                        /*ROM_PAYMENT_MODE          */request.PaymentMode,
                        /*ROM_GATEWAY_SERVICE_CHARGE*/"0",
                        /*ROM_GATEWAY_SERVICE_TAX   */"0",
                        /*ROM_CURRENCY_CODE         */request.BookingCurrency,
                        /*ROM_CURRENCY_ROE          */"1.00",
                        /*ROM_FILTER_TYPE           */"RB",
                        /*ROM_ROOM_TYPE             */rm.RoomType,//.Split('[')[0],
                        /*ROM_CANCEL_GST            */"0",
                        /*ROM_INCLUSION             */rm.BoardType,
                        /*ROM_CANCELLATION_DATE     */"",
                        /*ROM_AGENT_PENALTY         */"0",
                        /*ROM_SUPP_PENALTY          */"0",
                        /*ROM_CANCELLATION_MARKUP   */"0",
                        /*ROM_CANCELLATION_MARKUP_SERVICE_TAX*/"0",
                        /*ROM_REMARKS               */request.SupplierRemark,
                        /*ROM_UPDATED_BY            */request.Agent.UserName,
                        /*ROM_UPDATED_DATE          */"",
                        /*ROM_FARE_ID               */(rmid).ToString(),
                        /*ROM_MEALS_DETAILS         */"",
                        /*ROM_SPCL_REQUESTS         */"",
                        /*ROM_BED_PREFRENCE          */"",
                        /*ROM_EXTRAMEAL_AMT         */"",
                        /*ROM_REFERENCE_NO      */   "",
                        /*ROM_PG_TRECK_ID    */    "",
                        /*ROM_AGENT_EARNINGS     */request.EXTRAMarkUpAmt
                        );
                    id++;
                }
            }
            #endregion

            StringBuilder sbTrack = new StringBuilder();
            sbTrack.Append("<WXYZ><HEADER>");
            sbTrack.Append("<STATUS>IN PROCESS</STATUS>");
            sbTrack.Append("<AGENTID>" + request.Agent.AgentID + "</AGENTID>");
            sbTrack.Append("<TERMINALID>" + request.Agent.TerminalID + "</TERMINALID>");
            sbTrack.Append("<USERNAME>" + request.Agent.UserName + "</USERNAME>");
            sbTrack.Append("<ADULTCOUNT>" + request.TotalAdults + "</ADULTCOUNT>");
            sbTrack.Append("<CHILDCOUNT>" + request.TotalChildren + "</CHILDCOUNT>");
            sbTrack.Append("<CATEGORY>" + request.RoomsTypes[0].Supplier + "</CATEGORY>");
            sbTrack.Append("<SEQUENCE>" + Seq + "</SEQUENCE>");
            sbTrack.Append("<INPUT_REQUEST>" + JsonConvert.SerializeObject(request).Replace("&", "AND") + "</INPUT_REQUEST>");
            sbTrack.Append("<OUTPUT_RESPONSE>" + "In Process" + "</OUTPUT_RESPONSE>");
            sbTrack.Append("</HEADER>");
            sbTrack.Append(dsMaster.GetXml().Replace("<WXYZ>", ""));
            Hashtable hshInput = new Hashtable();
            hshInput.Add("RHT_AGENT_ID", request.Agent.AgentID);
            hshInput.Add("RHT_TERMINAL_ID", request.Agent.TerminalID);
            hshInput.Add("RHT_USER_NAME", request.Agent.UserName);
            hshInput.Add("RHT_STATUS", "IN PROCESS");
            hshInput.Add("RHT_REMARKS", request.SupplierRemark);
            hshInput.Add("RHT_PAX_DETAILS", sbTrack.ToString());
            hshInput.Add("RHT_BOOKING_TYPE", request.Agent.TerminalType);
            hshInput.Add("RHT_PAYMENT_MODE", request.PaymentMode);
            hshInput.Add("RHT_ROOM_TYPE", request.RoomTypeName);
            hshInput.Add("RHT_GROSS_AMOUNT", GrossFare);
            hshInput.Add("RHT_HOTEL_PNR", "");
            hshInput.Add("RHT_REFERENCE_NO", "");
            hshInput.Add("RHT_UPDATED_DATE", "");
            hshInput.Add("RHT_UPDATED_BY", "");
            hshInput.Add("RHT_UPDATED_STATUS", "");
            hshInput.Add("PREFIX", request.Agent.TerminalID + DateTime.Now.ToString("ddMMyyyy"));
            hshInput.Add("TYPE", "INSERT");
            hshInput.Add("RHT_SUPPLIER_NAME", request.RoomsTypes[0].Supplier.ToString());  //edit
            hshInput.Add("RHT_TRAVEL_TYPE", "I");
            hshInput.Add("RHT_REQUESTED_TYPE", "");
            hshInput.Add("RHT_PASSENGER_NAME", PassengerName);
            try
            {
                StringBuilder sbTrackUpdate = new StringBuilder();
                sbTrackUpdate.Append("<DataSet><Input>");
                foreach (var item in hshInput.Keys)
                    sbTrackUpdate.Append("<" + item + ">" + hshInput[item] + "</" + item + ">");
                sbTrackUpdate.Append("</Input></DataSet>");
                DataSet dssequenceNumber = DBHandler.ExecSelectProcedure(SelectProcedure.Insert_Hotel_Booking_Track, hshInput, DataBase.APP.ToString());
                if (dssequenceNumber != null && dssequenceNumber.Tables.Count > 0 && dssequenceNumber.Tables[0].Rows.Count > 0)
                    TrackID = dssequenceNumber.Tables[0].Rows[0]["SEQNO"].ToString();
                if (string.IsNullOrEmpty(TrackID))
                {
                    TrackID = string.Empty;
                    return false;
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", request.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), request.SupplierId.ToString(), request.TraceId.ToString());
                return false;
            }
            return true;

        }
        catch (Exception ex)
        {
            SQLAccess.Insert_Action_LogDetails("HOTEL", request.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), request.SupplierId.ToString(), request.TraceId.ToString());
            return false;
        }
    }

    public bool UpdateTransaction(AgentDetails Agent, string Seq, AppType lAppType, string strTrackId, string PayAmt, string PaymentMode, string Supplier, Hashtable hshBooking, ref string Err)
    {
        try
        {
            Hashtable my_param = new Hashtable();
            my_param.Add("TRACKID", strTrackId);
            DataSet dsMaster = new DataSet();
            DataSet dsDBTrack = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_HOTEL_TRACKID_DETAIlS, my_param, DataBase.APP.ToString());
            dsMaster.ReadXml(new StringReader(dsDBTrack.Tables[0].Rows[0]["RHT_PAX_DETAILS"].ToString()));

            #region Update ReservationPNR & fare
            foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_DETAILS"].Rows)
            {
                DrRow["RHD_TRACK_ID"] = strTrackId;
                DrRow["RHD_REFERENCE_NO"] = hshBooking["HOTELPNR"].ToString().Split('|')[0];
                DrRow["RHD_SUPPLIER_ID"] = hshBooking["SUPPID"].ToString();
            }
            int i = 0;
            foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_ROOM_DETAILS"].Rows)
            {
                DrRow["RHRD_HOTEL_PNR"] = hshBooking["HOTELPNR"].ToString().Split('|')[0];
                DrRow["RHRD_ROOM_PNR"] = hshBooking["ROOMPNR"].ToString().Split('|')[0];
                DrRow["RHRD_STATUS"] = hshBooking["HOTELPNR"].ToString().Split('|')[1] == "CONFIRMED" ? "C" : "P";
                i++;
            }
            foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_BOOKED_HISTORY"].Rows)
            {
                DrRow["RHBH_STATUS"] = hshBooking["HOTELPNR"].ToString().Split('|')[1] == "CONFIRMED" ? "C" : "P";
                DrRow["RHBH_HOTEL_PNR"] = hshBooking["HOTELPNR"].ToString().Split('|')[0];
                DrRow["RHBH_REFERENCE_NO"] = hshBooking["HOTELPNR"].ToString().Split('|')[0];
                DrRow["RHBH_SUPPLIER_NAME"] = hshBooking["SUPPNAME"].ToString();
            }
            foreach (DataRow DrRow in dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows)
            {
                DrRow["RAT_USER_TRACK_ID"] = strTrackId;
                DrRow["RAT_AIRLINE_PNR"] = hshBooking["HOTELPNR"].ToString().Split('|')[0];
                DrRow["RAT_CRS_PNR"] = hshBooking["HOTELPNR"].ToString().Split('|')[0];
            }
            #endregion

            #region Track Pending
            if (!UpdateTrack(Agent, Seq, lAppType, "PENDING", hshBooking["HOTELPNR"].ToString().Split('|')[0], PaymentMode, strTrackId, "", Supplier, PayAmt, dsMaster, ref Err))
            {
                return false;
            }
            #endregion
            return true;
        }
        catch (Exception ex)
        {
            SQLAccess.Insert_Action_LogDetails("HOTEL", Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            return false;
        }
    }
    public bool UpdateTrack(AgentDetails AgentDetails, string Seq, AppType lAppType, string Status, string HotelPNR, string PAYMENT_MODE, string Trackid, string Remarks, string Category, string PayAmt, DataSet dsMaster, ref string strError)
    {
        try
        {
            dsMaster.Tables["HEADER"].Rows[0]["STATUS"] = Status;
            dsMaster.Tables["HEADER"].Rows[0]["OUTPUT_RESPONSE"] = HotelPNR;
            Hashtable parameters = new Hashtable();
            parameters.Add("RHT_AGENT_ID", AgentDetails.AgentID);
            parameters.Add("RHT_TERMINAL_ID", AgentDetails.TerminalID);
            parameters.Add("RHT_USER_NAME", AgentDetails.UserName);
            parameters.Add("RHT_STATUS", Status);
            parameters.Add("RHT_REMARKS", Remarks);
            parameters.Add("RHT_PAX_DETAILS", dsMaster.GetXml());
            parameters.Add("RHT_BOOKING_TYPE", "B");
            parameters.Add("RHT_PAYMENT_MODE", "T");
            parameters.Add("RHT_ROOM_TYPE", "");
            parameters.Add("RHT_GROSS_AMOUNT", Convert.ToDouble(PayAmt));
            parameters.Add("RHT_HOTEL_PNR", HotelPNR);
            parameters.Add("RHT_REFERENCE_NO", Seq);
            parameters.Add("RHT_UPDATED_DATE", DateTime.Now.ToString("yyyyMMdd HH:mm:ss"));
            parameters.Add("RHT_UPDATED_BY", AgentDetails.UserName);
            parameters.Add("RHT_UPDATED_STATUS", Status == "PENDING" ? "P" : "S");
            parameters.Add("PREFIX", Trackid);
            parameters.Add("TYPE", "UPDATE");
            parameters.Add("RHT_SUPPLIER_NAME", Category);
            parameters.Add("RHT_TRAVEL_TYPE", "I");
            parameters.Add("RHT_REQUESTED_TYPE", "");
            try
            {
                DBHandler.ExecSelectProcedure(SelectProcedure.Insert_Hotel_Booking_Track, parameters, DataBase.APP.ToString());
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                return false;
            }
            return true;
        }
        catch (Exception ex)
        {
            SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            return false;
        }
    }

    #region BulkInsertTransaction
    public bool BulkInsertTransaction(AgentDetails AgentDetails, WXYZ_Hotel.Controllers.SearchController.Rootobject SupplierData, AppType lAppType, string strTrackId, string PaymentMode, ref DataSet dsMaster, ref string strError)
    {
        SqlConnection connection = null;
        SqlCommand command = null;
        SqlTransaction transaction = null;
        Hashtable parameters = new Hashtable();
        Hashtable outputParameters = new Hashtable();
        string my_result = string.Empty;

        #region FETCH TRACK
        StringBuilder errorMessages = new StringBuilder();
        Hashtable hashtable = new Hashtable();
        hashtable.Add("TRACKID", strTrackId);
        DataSet dsOutput = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_HOTEL_TRACKID_DETAIlS, hashtable, DataBase.APP.ToString());
        dsMaster.ReadXml(new StringReader(dsOutput.Tables[0].Rows[0]["RHT_PAX_DETAILS"].ToString()));
        #endregion
        #region CREATE SPNR
        string SPNR = string.Empty;
        parameters = new Hashtable();
        parameters.Add("TYPE", "HTL");
        DataSet dsPNR = DBHandler.ExecSelectProcedure(SelectProcedure.Generate_PNR, parameters, DataBase.APP, ref strError);
        if (dsPNR != null && dsPNR.Tables.Count > 0 && dsPNR.Tables[0].Columns.Count > 0)
            SPNR = dsPNR.Tables[0].Rows[0][0].ToString();
        else
            return false;
        #region Supplier Transaction Calculation
        dsMaster.Tables.Add(SupTrans());
        string AgentBlance = "500000";
        decimal suppGrossFare = 0;
        decimal suppGrossAmount = 0;
        foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_ROOM_DETAILS"].Rows)
        {
            suppGrossFare += Convert.ToDecimal(DrRow["RHRD_BASIC_FARE"]);
        }

        suppGrossAmount = Convert.ToDecimal(suppGrossFare);
        Calc_Supp_Trans(AgentDetails, lAppType, SupplierData, suppGrossAmount, AgentBlance, 0, PaymentMode, ref dsMaster);
        #endregion
        #region Update SPNR
        foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_PAX_DETAILS"].Rows)
            DrRow["RHPD_S_PNR"] = SPNR;
        foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_DETAILS"].Rows)
            DrRow["RHD_S_PNR"] = SPNR;
        foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_ROOM_DETAILS"].Rows)
            DrRow["RHRD_S_PNR"] = SPNR;
        foreach (DataRow DrRow in dsMaster.Tables["RTBL_HOTEL_BOOKED_HISTORY"].Rows)
            DrRow["RHBH_S_PNR"] = SPNR;
        foreach (DataRow DrRow in dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows)
            DrRow["RAT_S_PNR"] = SPNR;
        #endregion

        if (dsMaster.Tables.Contains("RTBL_SUPPLIERTRANSACTION") && dsMaster.Tables["RTBL_SUPPLIERTRANSACTION"].Rows.Count > 0)
        {
            foreach (DataRow DrRow in dsMaster.Tables["RTBL_SUPPLIERTRANSACTION"].Rows)
            {
                DrRow["RST_S_PNR"] = SPNR;
                DrRow["RST_USER_TRACK_ID"] = strTrackId;
                DrRow["RST_AIRLINE_PNR"] = dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows[0]["RAT_AIRLINE_PNR"].ToString();
                DrRow["RST_CRS_PNR"] = dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows[0]["RAT_CRS_PNR"].ToString();
            }
        }
        #endregion
        connection = DBHandler.OpenSqlConnection(DataBase.APP.ToString());
        transaction = connection.BeginTransaction();
        parameters = new Hashtable();
        try
        {

            #region T_T_HTL_PAX_INFO
            try
            {
                foreach (DataRow dr in dsMaster.Tables["RTBL_HOTEL_PAX_DETAILS"].Rows)
                {
                    #region my_param.Add()
                    parameters = new Hashtable();
                    parameters.Add("RHPD_S_PNR", dr["RHPD_S_PNR"].ToString());
                    parameters.Add("RHPD_AGENT_ID", dr["RHPD_AGENT_ID"].ToString());
                    parameters.Add("RHPD_TERMINAL_ID", dr["RHPD_TERMINAL_ID"].ToString());
                    parameters.Add("RHPD_PAX_TYPE", dr["RHPD_PAX_TYPE"].ToString());
                    parameters.Add("RHPD_PAX_TITLE", dr["RHPD_PAX_TITLE"].ToString());
                    parameters.Add("RHPD_PAX_FIRST_NAME", dr["RHPD_PAX_FIRST_NAME"].ToString());
                    parameters.Add("RHPD_PAX_LAST_NAME", dr["RHPD_PAX_LAST_NAME"].ToString());
                    parameters.Add("RHPD_PAX_MOBLIE_NO", dr["RHPD_PAX_MOBLIE_NO"].ToString());
                    parameters.Add("RHPD_PAX_REF_NO", dr["RHPD_PAX_REF_NO"].ToString());
                    parameters.Add("RHPD_PAX_ADDRESS", dr["RHPD_PAX_ADDRESS"].ToString());
                    parameters.Add("RHPD_ROOM_ID", dr["RHPD_ROOM_ID"].ToString());
                    parameters.Add("RHPD_PAX_COUNTRY", "");
                    parameters.Add("RHPD_PAX_STATE", dr["RHPD_PAX_STATE"].ToString());
                    parameters.Add("RHPD_PAX_CITY", "");
                    parameters.Add("RHPD_PAX_EMAIL", dr["RHPD_PAX_EMAIL"].ToString());
                    parameters.Add("RHPD_LEAD_PAX", dr["RHPD_LEAD_PAX"].ToString());
                    parameters.Add("RHPD_BRANCH_ID", dr["RHPD_BRANCH_ID"].ToString());
                    parameters.Add("RHPD_ISSUINGBRANCH_ID", dr["RHPD_ISSUINGBRANCH_ID"].ToString());
                    // parameters.Add("HPI_CREATED_DATE", dr["HPI_CREATED_DATE"].ToString());
                    #endregion
                    command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.Transaction = transaction;
                    command.CommandTimeout = 0;
                    command.CommandText = SelectProcedure.INSERT_HTL_PAX_INFO;
                    DBHandler.AssignParameters(command, parameters);
                    command.ExecuteNonQuery().ToString();
                    outputParameters = DBHandler.GetOutputParameters(command, outputParameters);
                    command.Dispose();
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                throw ex;
            }
            #endregion
            parameters = new Hashtable();
            #region T_T_HTL_ROOM_INFO
            try
            {
                foreach (DataRow dr in dsMaster.Tables["RTBL_HOTEL_ROOM_DETAILS"].Rows)
                {
                    #region new my_param.Add()
                    parameters = new Hashtable();
                    parameters.Add("RHRD_S_PNR", dr["RHRD_S_PNR"].ToString());
                    parameters.Add("RHRD_HOTEL_PNR", dr["RHRD_HOTEL_PNR"].ToString());
                    parameters.Add("RHRD_ROOM_PNR", dr["RHRD_ROOM_PNR"].ToString());
                    parameters.Add("RHRD_ROOM_ID", dr["RHRD_ROOM_ID"].ToString());
                    parameters.Add("RHRD_ADULT_COUNT", int.Parse(dr["RHRD_ADULT_COUNT"].ToString()));
                    parameters.Add("RHRD_CHILD_COUNT", int.Parse(dr["RHRD_CHILD_COUNT"].ToString()));
                    //parameters.Add("RHRD_CHILD_AGE", dr["RHRD_CHILD_AGE"].ToString());
                    parameters.Add("RHRD_STATUS", dr["RHRD_STATUS"].ToString());
                    parameters.Add("RHRD_CHECKIN_TIME", dr["RHRD_CHECKIN_TIME"].ToString());
                    parameters.Add("RHRD_CHECKOUT_TIME", dr["RHRD_CHECKOUT_TIME"].ToString());
                    parameters.Add("RHRD_NO_NIGHTS", dr["RHRD_NO_NIGHTS"].ToString());
                    parameters.Add("RHRD_BASIC_FARE", Convert.ToDecimal(dr["RHRD_BASIC_FARE"].ToString()));
                    parameters.Add("RHRD_FARE_BREAKUP", dr["RHRD_FARE_BREAKUP"].ToString());
                    parameters.Add("RHRD_TOTAL_FARE", Convert.ToDecimal(dr["RHRD_TOTAL_FARE"].ToString()));
                    parameters.Add("RHRD_MARKUP", Convert.ToDecimal(dr["RHRD_MARKUP"].ToString()));
                    parameters.Add("RHRD_COMMISSION", Convert.ToDecimal(dr["RHRD_COMMISSION"].ToString()));
                    parameters.Add("RHRD_SERVICE_CHARGE", Convert.ToDecimal(dr["RHRD_SERVICE_CHARGE"].ToString()));
                    parameters.Add("RHRD_SERVICE_TAX", Convert.ToDecimal(dr["RHRD_SERVICE_TAX"].ToString()));
                    parameters.Add("RHRD_TDS_AMOUNT", Convert.ToDecimal(dr["RHRD_TDS_AMOUNT"].ToString()));
                    parameters.Add("RHRD_TAXAMOUNT", Convert.ToDecimal(dr["RHRD_TAXAMOUNT"].ToString()));
                    parameters.Add("RHRD_SUPPLIER_DISCOUNT", Convert.ToDecimal(dr["RHRD_SUPPLIER_DISCOUNT"].ToString()));
                    parameters.Add("RHRD_PAYMENT_MODE", dr["RHRD_PAYMENT_MODE"].ToString());
                    parameters.Add("RHRD_GATEWAY_SERVICE_CHARGE", Convert.ToDecimal(dr["RHRD_GATEWAY_SERVICE_CHARGE"].ToString()));
                    parameters.Add("RHRD_GATEWAY_SERVICE_TAX", Convert.ToDecimal(dr["RHRD_GATEWAY_SERVICE_TAX"].ToString()));
                    parameters.Add("RHRD_CURRENCY_CODE", dr["RHRD_CURRENCY_CODE"].ToString());
                    parameters.Add("RHRD_CURRENCY_ROE", dr["RHRD_CURRENCY_ROE"].ToString());
                    parameters.Add("RHRD_FILTER_TYPE", dr["RHRD_FILTER_TYPE"].ToString());
                    parameters.Add("RHRD_ROOM_TYPE", dr["RHRD_ROOM_TYPE"].ToString());
                    parameters.Add("RHRD_CANCEL_GST", Convert.ToDecimal(dr["RHRD_CANCEL_GST"].ToString()));
                    parameters.Add("RHRD_INCLUSION", dr["RHRD_INCLUSION"].ToString());
                    parameters.Add("RHRD_CANCELLATION_DATE", DateTime.Now); //Convert.ToDateTime(dr["RHRD_CANCELLATION_DATE"].ToString()));
                    parameters.Add("RHRD_AGENT_PENALTY", Convert.ToDecimal(dr["RHRD_AGENT_PENALTY"].ToString()));
                    parameters.Add("RHRD_SUPP_PENALTY", Convert.ToDecimal(dr["RHRD_SUPP_PENALTY"].ToString()));
                    parameters.Add("RHRD_CANCELLATION_MARKUP", Convert.ToDecimal(dr["RHRD_CANCELLATION_MARKUP"].ToString()));
                    parameters.Add("RHRD_CANCELLATION_MARKUP_SERVICE_TAX", Convert.ToDecimal(dr["RHRD_CANCELLATION_MARKUP_SERVICE_TAX"].ToString()));
                    parameters.Add("RHRD_REMARKS", dr["RHRD_REMARKS"].ToString());
                    parameters.Add("RHRD_UPDATED_BY", dr["RHRD_UPDATED_BY"].ToString());
                    //parameters.Add("RHRD_UPDATED_DATE", dr["RHRD_UPDATED_DATE"].ToString());
                    parameters.Add("RHRD_FARE_ID", dr["RHRD_FARE_ID"].ToString());
                    parameters.Add("RHRD_SERVICECHARGE_TYPE", "");
                    parameters.Add("RHRD_MEALS_DETAILS", dr["RHRD_MEALS_DETAILS"].ToString());
                    parameters.Add("RHRD_SPCL_REQUESTS", dr["RHRD_SPCL_REQUESTS"].ToString());
                    parameters.Add("RHRD_BED_PREFRENCE", dr["RHRD_BED_PREFRENCE"].ToString());
                    parameters.Add("RHRD_EXTRAMEAL_AMT", dr["RHRD_EXTRAMEAL_AMT"].ToString());
                    // parameters.Add("RHRD_REFERENCE_NO", dr["RHRD_REFERENCE_NO"].ToString());
                    parameters.Add("RHRD_PG_TRECK_ID", dr["RHRD_PG_TRECK_ID"].ToString());
                    parameters.Add("RHRD_AGENT_EARNINGS", dr["RHRD_AGENT_EARNINGS"].ToString());
                    #endregion
                    command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.Transaction = transaction;
                    command.CommandTimeout = 0;
                    command.CommandText = SelectProcedure.INSERT_HTL_ROOM_INFO;
                    DBHandler.AssignParameters(command, parameters);
                    command.ExecuteNonQuery().ToString();
                    outputParameters = DBHandler.GetOutputParameters(command, outputParameters);
                    command.Dispose();
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                throw ex;
            }
            #endregion
            parameters = new Hashtable();
            #region T_T_HTL_INFO
            try
            {
                foreach (DataRow dr in dsMaster.Tables["RTBL_HOTEL_DETAILS"].Rows)
                {
                    #region my_param.Add()
                    parameters = new Hashtable();
                    parameters.Add("RHD_S_PNR", dr["RHD_S_PNR"].ToString());
                    parameters.Add("RHD_AGENT_ID", dr["RHD_AGENT_ID"].ToString());
                    parameters.Add("RHD_TERMINAL_ID", dr["RHD_TERMINAL_ID"].ToString());
                    parameters.Add("RHD_USER_NAME", dr["RHD_USER_NAME"].ToString());
                    parameters.Add("RHD_TRACK_ID", dr["RHD_TRACK_ID"].ToString());
                    parameters.Add("RHD_REFERENCE_NO", dr["RHD_REFERENCE_NO"].ToString());
                    parameters.Add("RHD_HOTEL_NAME", dr["RHD_HOTEL_NAME"].ToString());
                    parameters.Add("RHD_STAR_RATING", dr["RHD_STAR_RATING"].ToString());
                    parameters.Add("RHD_CHECK_IN", dr["RHD_CHECK_IN"].ToString());
                    parameters.Add("RHD_CHECK_OUT", dr["RHD_CHECK_OUT"].ToString());
                    parameters.Add("RHD_NO_OF_ROOMS", dr["RHD_NO_OF_ROOMS"].ToString());
                    parameters.Add("RHD_ROOM_TYPE", dr["RHD_ROOM_TYPE"].ToString());
                    parameters.Add("RHD_HOTEL_INFO", dr["RHD_HOTEL_INFO"].ToString());
                    parameters.Add("RHD_INCLUSION", dr["RHD_INCLUSION"].ToString());
                    parameters.Add("RHD_LOCATION", dr["RHD_LOCATION"].ToString());
                    parameters.Add("RHD_COUNTRY", dr["RHD_COUNTRY"].ToString());
                    parameters.Add("RHD_STATE", dr["RHD_STATE"].ToString());
                    parameters.Add("RHD_CITY", dr["RHD_CITY"].ToString());
                    parameters.Add("RHD_EMAIL", dr["RHD_EMAIL"].ToString());
                    parameters.Add("RHD_SUPPLIER_NAME", dr["RHD_SUPPLIER_NAME"].ToString());
                    parameters.Add("RHD_BOOK_APP_TYPE", dr["RHD_BOOK_APP_TYPE"].ToString());
                    parameters.Add("RHD_BOOKING_TYPE", dr["RHD_BOOKING_TYPE"].ToString());
                    parameters.Add("RHD_BOOKED_DATE", dr["RHD_BOOKED_DATE"].ToString());
                    // parameters.Add("HIN_CANCELLATION_RULE", dr["HIN_CANCELLATION_RULE"].ToString().Replace("'", ""));
                    parameters.Add("RHD_CANCELLATION_RULE", "");
                    parameters.Add("RHD_PAX_COUNT", dr["RHD_PAX_COUNT"].ToString());
                    parameters.Add("RHD_VOUCHER", dr["RHD_VOUCHER"].ToString());
                    parameters.Add("RHD_MOBILE_NO", dr["RHD_MOBILE_NO"].ToString());
                    parameters.Add("RHD_SUPPLIER_ID", dr["RHD_SUPPLIER_ID"].ToString());
                    parameters.Add("RHD_OFFICE_ID", dr["RHD_OFFICE_ID"].ToString());
                    parameters.Add("RHD_BRANCH_ID", dr["RHD_BRANCH_ID"].ToString());
                    parameters.Add("RHD_ISSUINGBRANCH_ID", dr["RHD_ISSUINGBRANCH_ID"].ToString());

                    #endregion
                    command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.Transaction = transaction;
                    command.CommandTimeout = 0;
                    command.CommandText = SelectProcedure.INSERT_HTL_INFO;
                    DBHandler.AssignParameters(command, parameters);
                    command.ExecuteNonQuery().ToString();
                    outputParameters = DBHandler.GetOutputParameters(command, outputParameters);
                    command.Dispose();
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                throw ex;
            }
            #endregion
            parameters = new Hashtable();
            parameters = new Hashtable();
            #region T_T_HTL_BOOKED_HISTORY

            try
            {
                foreach (DataRow dr in dsMaster.Tables["RTBL_HOTEL_BOOKED_HISTORY"].Rows)
                {
                    #region my_param.Add()
                    parameters.Add("RHBH_AGENT_ID", dr["RHBH_AGENT_ID"].ToString());
                    parameters.Add("RHBH_TERMINAL_ID", dr["RHBH_TERMINAL_ID"].ToString());
                    parameters.Add("RHBH_S_PNR", dr["RHBH_S_PNR"].ToString());
                    parameters.Add("RHBH_HOTEL_PNR", dr["RHBH_HOTEL_PNR"].ToString());
                    parameters.Add("RHBH_REFERENCE_NO", dr["RHBH_REFERENCE_NO"].ToString());
                    parameters.Add("RHBH_GROSS_AMOUNT", dr["RHBH_GROSS_AMOUNT"].ToString());
                    parameters.Add("RHBH_STATUS", dr["RHBH_STATUS"].ToString());
                    parameters.Add("RHBH_SUPPLIER_NAME", dr["RHBH_SUPPLIER_NAME"].ToString());
                    parameters.Add("RHBH_PAYMENT_MODE", dr["RHBH_PAYMENT_MODE"].ToString());
                    parameters.Add("RHBH_BOOKED_DATE", dr["RHBH_BOOKED_DATE"].ToString());
                    parameters.Add("RHBH_BOOKED_TYPE", dr["RHBH_BOOKED_TYPE"].ToString());
                    parameters.Add("RHBH_TITLE", dr["RHBH_TITLE"].ToString());
                    parameters.Add("RHBH_FIRST_NAME", dr["RHBH_FIRST_NAME"].ToString());
                    parameters.Add("RHBH_LAST_NAME", dr["RHBH_LAST_NAME"].ToString());
                    parameters.Add("RHBH_USER_NAME", dr["RHBH_USER_NAME"].ToString());
                    parameters.Add("RHBH_OFFICE_ID", dr["RHBH_OFFICE_ID"].ToString());
                    parameters.Add("RHBH_BRANCH_ID", dr["RHBH_BRANCH_ID"].ToString());
                    parameters.Add("RHBH_ISSUINGBRANCH_ID", dr["RHBH_ISSUINGBRANCH_ID"].ToString());
                    #endregion
                    command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.Transaction = transaction;
                    command.CommandTimeout = 0;
                    command.CommandText = SelectProcedure.INSERT_HTL_BOOKED_HISTORY;
                    DBHandler.AssignParameters(command, parameters);
                    command.ExecuteNonQuery().ToString();
                    outputParameters = DBHandler.GetOutputParameters(command, outputParameters);
                    command.Dispose();
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                throw ex;
            }
            #endregion
            parameters = new Hashtable();

            #region T_T_AGENT_TRANSACTION
            try
            {
                foreach (DataRow row in dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows)
                {
                    parameters = new Hashtable();
                    parameters.Add("USER_TRACK_ID", row["RAT_USER_TRACK_ID"].ToString());
                    parameters.Add("AGENT_ID", row["RAT_AGENT_ID"].ToString());
                    parameters.Add("TERMINAL_ID", row["RAT_TERMINAL_ID"].ToString());
                    parameters.Add("TERMINALKEY", "");
                    parameters.Add("USER_NAME", row["RAT_USER_NAME"].ToString());
                    parameters.Add("SPNR", row["RAT_S_PNR"].ToString());
                    parameters.Add("CRS_PNR", row["RAT_CRS_PNR"].ToString());
                    parameters.Add("AIRLINE_PNR", row["RAT_AIRLINE_PNR"].ToString());
                    parameters.Add("PAYMENTMODE", row["RAT_PAYMENT_MODE"].ToString());
                    parameters.Add("TRANS_NAME", row["RAT_TRANS_NAME"].ToString());
                    parameters.Add("FARE_TYPE", row["RAT_FARE_TYPE"].ToString());
                    parameters.Add("TRANS_TYPE", row["RAT_TRANS_TYPE"].ToString());
                    parameters.Add("TRANS_AMOUNT", row["RAT_TRANS_AMOUNT"].ToString());
                    parameters.Add("SIGN", row["RAT_SIGN"].ToString());
                    parameters.Add("REMARKS", row["RAT_REMARKS"].ToString());
                    parameters.Add("PRODUCT_ID", row["RAT_PRODUCT_ID"].ToString());
                    parameters.Add("OFFICE_ID", row["RAT_OFFICE_ID"].ToString());
                    parameters.Add("MESSAGE", row["RAT_DESCRIPTION"].ToString());
                    command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.Transaction = transaction;
                    command.CommandTimeout = 0;
                    command.CommandText = SelectProcedure.INSERT_AGENT_TRANSACTION;
                    DBHandler.AssignParameters(command, parameters);
                    command.ExecuteNonQuery().ToString();
                    outputParameters = DBHandler.GetOutputParameters(command, outputParameters);
                    command.Dispose();
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                throw ex;
            }
            #endregion
            parameters = new Hashtable();
            if (dsMaster.Tables.Contains("RTBL_SUPPLIERTRANSACTION") && dsMaster.Tables["RTBL_SUPPLIERTRANSACTION"].Rows.Count > 0)
                #region RTBL_SUPPLIERTRANSACTION
                //if (transaction != null && transaction.Connection != null)
                //{
                //    transaction.Commit();
                //    transaction.Dispose();
                //    transaction = null;
                //}
           // transaction = connection.BeginTransaction();
            try
            {
                foreach (DataRow row in dsMaster.Tables["RTBL_SUPPLIERTRANSACTION"].Rows)
                {
                    parameters = new Hashtable();
                    parameters.Add("USER_TRACK_ID", row["RST_USER_TRACK_ID"].ToString());
                    parameters.Add("SUPPLIER_ID", row["RST_SUPPLIER_ID"].ToString());
                    parameters.Add("SUPPLIER_NAME", row["RST_SUPPLIER_NAME"].ToString());
                    parameters.Add("USER_NAME", row["RST_USER_NAME"].ToString());
                    parameters.Add("PRODUCT_ID", row["RST_PRODUCT_ID"].ToString());
                    parameters.Add("SPNR", row["RST_S_PNR"].ToString());
                    parameters.Add("AIRLINE_PNR", row["RST_AIRLINE_PNR"].ToString());
                    parameters.Add("CRS_PNR", row["RST_CRS_PNR"].ToString());
                    parameters.Add("PAYMENTMODE", row["RST_PAYMENT_MODE"].ToString());
                    parameters.Add("TRANS_NAME", row["RST_TRANS_NAME"].ToString());
                    parameters.Add("FARE_TYPE", row["RST_FARE_TYPE"].ToString());
                    parameters.Add("TRANS_TYPE", row["RST_TRANS_TYPE"].ToString());
                    parameters.Add("TRANS_AMOUNT", row["RST_TRANS_AMOUNT"].ToString());
                    parameters.Add("SIGN", row["RST_SIGN"].ToString());
                    //parameters.Add("BALANCE", row["RST_BALANCE"].ToString());
                    parameters.Add("REMARKS", row["RST_REMARKS"].ToString());
                    //parameters.Add("TRANSDATE", row["RST_TRANS_DATE"].ToString());
                    parameters.Add("OFFICE_ID", row["RST_OFFICE_ID"].ToString());
                    parameters.Add("MESSAGE", row["RST_DESCRIPTION"].ToString());
                    command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.Transaction = transaction;
                    command.CommandTimeout = 0;
                    command.CommandText = SelectProcedure.INSERT_SUPPLIER_TRANSACTION;
                    DBHandler.AssignParameters(command, parameters);
                    command.ExecuteNonQuery().ToString();
                    outputParameters = DBHandler.GetOutputParameters(command, outputParameters);
                    command.Dispose();
                }
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
                transaction.Rollback();
                return false;
            }
                #endregion
            return true;
        }
        catch (Exception ex)
        {
            SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            transaction.Rollback();
            return false;
        }
        finally
        {
            if (transaction != null && transaction.Connection != null)
            {
                transaction.Commit();
                transaction.Dispose();
            }
            if (connection != null)
            {
                connection.Close();
            }

        }


    #endregion

    }
    #region GetTrackDetails
    public DataSet GetTrackDetails(string Trackid, ConfirmHotelRQ ConfirmRQ)
    {
        DataSet dsMaster = new DataSet();
        try
        {
            Hashtable my_param = new Hashtable();
            my_param.Add("TRACKID", Trackid);
            DataSet dsDBTrack = DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_HOTEL_TRACKID_DETAIlS, my_param, DataBase.APP.ToString());
            dsMaster.ReadXml(new StringReader(dsDBTrack.Tables[0].Rows[0]["RHT_PAX_DETAILS"].ToString()));
        }
        catch (Exception ex)
        {
            SQLAccess.Insert_Action_LogDetails("HOTEL", ConfirmRQ.Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), ConfirmRQ.SupplierId.ToString(), ConfirmRQ.TraceId.ToString());
            dsMaster = null;
        }
        return dsMaster;
    }
    #endregion

    public bool Calc_Supp_Trans(AgentDetails Agent, AppType lAppType, WXYZ_Hotel.Controllers.SearchController.Rootobject SupplierData, decimal SuppGrossFare, string AgentBalance, decimal ExtraMeal, string PaymentMode, ref DataSet dsMaster)
    {
        try
        {
            double suppGross = 0;
            double suppComm = 0;

            if (dsMaster.Tables.Contains("RTBL_SUPPLIERTRANSACTION"))
                dsMaster.Tables["RTBL_SUPPLIERTRANSACTION"].TableName = "RTBL_SUPPLIERTRANSACTION";
            else
                dsMaster.Tables.Add(SupTrans());

            #region RTBL_SUPPLIER_TRANSACTION
            suppGross = Convert.ToDouble(SuppGrossFare);
            if (suppGross > 0)
            {
                dsMaster.Tables["RTBL_SUPPLIERTRANSACTION"].Rows.Add(
                    /* STR_USER_TRACK_ID     */"",
                    /* STR_SUPPLIER_ID       */SupplierData.Table[0].AvailSupplier.ToString(),
                    /* STR_SUPPLIER_NAME     */SupplierData.Table[0].CRSName.ToString(),
                    /* STR_USER_NAME         */dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows[0]["RAT_USER_NAME"].ToString(),
                    /* STR_PRODUCT_ID        */"HTL",
                    /* STR_S_PNR             */"",
                    /* STR_AIRLINE_PNR       */"",
                    /* STR_CRS_PNR           */"",
                    /* STR_PAYMENT_MODE      */PaymentMode,
                    /* STR_TRANS_NAME        */"B",
                    /* STR_FARE_TYPE         */"B",
                    /* STR_TRANS_TYPE        */"D",
                    /* STR_TRANS_AMOUNT      */suppGross,
                    /* STR_SIGN              */"-",
                    /* STR_BALANCE           */AgentBalance,
                    /* STR_REMARKS           */dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows[0]["RAT_REMARKS"].ToString(),
                    /* STR_TRANS_DATE        */"",
                    /* STR_OFFICE_ID         */"",
                    /* STR_DESCRIPTION       */dsMaster.Tables["RTBL_AGENTTRANSACTION"].Rows[0]["RAT_DESCRIPTION"].ToString()
                 );
            }
            return true;
        }
        catch (Exception ex)
        {
            SQLAccess.Insert_Action_LogDetails("HOTEL", Agent, "X", GetType().Name, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            return false;
        }
            #endregion
    }
}
