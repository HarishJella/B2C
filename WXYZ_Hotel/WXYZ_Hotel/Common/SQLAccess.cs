using HotelService;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Web;
using System.Xml.Linq;
using System.Xml.Serialization;
using WXYZ_Hotel.Models;

namespace WXYZ_Hotel.Common
{
    public class SQLAccess
    {
        #region Newly Added by vignesh on 16/05/2018

        #region Log Details
        /// <summary>
        /// Insert Event, Error & Transaction Logs
        /// </summary>
        /// <param name="AgentID"></param>
        /// <param name="TerminalId"></param>
        /// <param name="UserName"></param>
        /// <param name="IpAddress"></param>
        /// <param name="TerminalType"></param>
        /// <param name="LogType"></param>
        /// <param name="MacAddress"></param>
        /// <param name="PageName"></param>
        /// <param name="FunctionName"></param>
        /// <param name="LogData"></param>
        /// <param name="SequenceID"></param>
        /// <returns></returns>
        public static bool Insert_Action_LogDetails(string ProductType, AgentDetails Agentdt, string LogType, string PageName, string FunctionName, string LogData, string SupplierID, string TraceID)
        {
            bool Result = false;
            string LogSystemName = string.Empty;
            string IpAddress = ServerConfig.GetLocalIPAddress();
            string MacAddress = ServerConfig.GetMACAddress() + "-" + Environment.UserName + " ( " + Environment.MachineName + " )";
            try
            {
                if (LogType.ToString().ToUpper().Trim() == "X")
                {
                    LogData = "<EVENT><EXCEPTION>" + FunctionName + "</EXCEPTION>" +
                        "<EXCEPTIONMSG>" + LogData + "</EXCEPTIONMSG></EVENT>";
                    //"<EXCEPTIONMSG><![CDATA[" + LogData + "]]></EXCEPTIONMSG></EVENT>";
                }
                else if (LogType.ToString().ToUpper().Trim() != "F")
                {
                    //LogData = "<![CDATA[" + LogData + "]]>";
                }

                Hashtable my_param = new Hashtable();
                my_param.Add("API_LOG_SEQUENCE_ID", Agentdt.SequenceID);
                my_param.Add("API_LOG_PRODUCT_TYPE", ProductType);
                my_param.Add("API_LOG_REFERENCE_ID", Agentdt.LoginReference);
                my_param.Add("API_LOG_AGENT_ID", Agentdt.AgentID);
                my_param.Add("API_LOG_TERMINAL_ID", Agentdt.TerminalID);
                my_param.Add("API_LOG_USER_NAME", Agentdt.UserName);
                my_param.Add("API_LOG_IP_ADDRESS", IpAddress);
                my_param.Add("API_LOG_STATIC_IP", System.Web.HttpContext.Current == null ? IpAddress : System.Web.HttpContext.Current.Request.UserHostAddress);
                my_param.Add("API_LOG_MAC_ADDRESS", MacAddress);
                my_param.Add("API_LOG_APP_TYPE", Agentdt.AppType);
                my_param.Add("API_LOG_TERMINAL_TYPE", Agentdt.TerminalType);
                my_param.Add("API_LOG_TYPE", LogType);
                my_param.Add("API_LOG_PAGE_NAME", PageName);
                my_param.Add("API_LOG_FUNCTION_NAME", FunctionName);
                my_param.Add("API_LOG_DESCRIPTION", LogData);
                my_param.Add("API_LOG_BRANCH_ID", Agentdt.BranchID);
                my_param.Add("API_LOG_SUPPLIER_ID", SupplierID);
                my_param.Add("API_LOG_TRACE_ID", !string.IsNullOrEmpty(TraceID) ? TraceID : "");

                string strErrorMsg = string.Empty;
                if (ConfigurationManager.AppSettings["LOG_OPTION"].ToString().ToUpper().Trim() == "Y" || LogType.ToString().ToUpper().Trim() == "F")
                {
                    Result = InsertUpdateDeleteProcedure(SelectProcedure.Insert_Hotel_API_Log_Details, "A", my_param, ref strErrorMsg);
                    if (Result == false)
                    {
                        LogData = "<![CDATA[" + LogData + "]]>";
                        my_param = new Hashtable();
                        my_param.Add("API_LOG_SEQUENCE_ID", Agentdt.SequenceID);
                        my_param.Add("API_LOG_PRODUCT_TYPE", ProductType);
                        my_param.Add("API_LOG_REFERENCE_ID", Agentdt.LoginReference);
                        my_param.Add("API_LOG_AGENT_ID", Agentdt.AgentID);
                        my_param.Add("API_LOG_TERMINAL_ID", Agentdt.TerminalID);
                        my_param.Add("API_LOG_USER_NAME", Agentdt.UserName);
                        my_param.Add("API_LOG_IP_ADDRESS", IpAddress);
                        my_param.Add("API_LOG_STATIC_IP", System.Web.HttpContext.Current == null ? IpAddress : System.Web.HttpContext.Current.Request.UserHostAddress);
                        my_param.Add("API_LOG_MAC_ADDRESS", MacAddress);
                        my_param.Add("API_LOG_APP_TYPE", Agentdt.AppType);
                        my_param.Add("API_LOG_TERMINAL_TYPE", Agentdt.TerminalType);
                        my_param.Add("API_LOG_TYPE", LogType);
                        my_param.Add("API_LOG_PAGE_NAME", PageName);
                        my_param.Add("API_LOG_FUNCTION_NAME", FunctionName);
                        my_param.Add("API_LOG_DESCRIPTION", LogData);
                        my_param.Add("API_LOG_BRANCH_ID", Agentdt.BranchID);
                        my_param.Add("API_LOG_SUPPLIER_ID", SupplierID);
                        my_param.Add("API_LOG_TRACE_ID", !string.IsNullOrEmpty(TraceID) ? TraceID : "");
                        strErrorMsg = string.Empty;
                        Result = InsertUpdateDeleteProcedure(SelectProcedure.Insert_Hotel_API_Log_Details, "A", my_param, ref strErrorMsg);
                    }
                }
            }
            catch (Exception ex)
            {
                string xmlData = string.Empty;
                xmlData = "<EVENT>" + "<ERROR>Insert_Action_LogDetails</ERROR>"
                                    + "<LOG_DESCRIPTION>" + LogData + "</LOG_DESCRIPTION>"
                                    + "<EXCEPTION>" + ex.Message.ToString() + "</EXCEPTION>"
                                    + "</EVENT>";

                WriteEventLog(Agentdt.TerminalID, Agentdt.AgentID, "X", "Response", "Insert_Action_LogDetails", "Errorlog", xmlData.ToString(), true);
            }
            return Result;
        }

        static string lstrPath = ConfigurationManager.AppSettings["API_EXCEPTION_LOG"].ToString();

        public static void WriteEventLog(string TerminalID, string pstrToken, string Logdata, string pstrFunction,
        string pstrClass, string pstrStatus, string error, bool IsXml)
        {
            string lstrExtension = ".txt";
            if (IsXml)
            {
                lstrExtension = ".xml";
            }

            try
            {
                byte[] lbyte;
                if (error != null)
                {
                    Logdata += "\r\n" + error.ToString();
                }
                lbyte = StringToByte(Logdata);
                string lstrdate = DateTime.Now.ToString("yyyyMMdd");
                string lstrlogtime = DateTime.Now.ToString("HHmmsssfff");
                string lstrLog = "Log";
                //Format File Name
                string strFilename = "APPS-" + lstrlogtime + "-" + pstrClass + "-" + pstrFunction + "-" + pstrStatus + lstrExtension;
                //Assign Directory
                string NewDir = lstrPath + "\\" + lstrLog + "\\" + lstrdate + "\\" + pstrToken + "\\" + TerminalID;
                //Create
                Directory.CreateDirectory(NewDir);
                UploadFile(lbyte, NewDir, strFilename);
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                //SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", "Common.SQLAccess.cs", "Check_API_User_Valid", ex.ToString(), "", "");
            }
        }

        private static byte[] StringToByte(string pstrInput)
        {
            byte[] lstrbyte = null;
            try
            {
                char[] strChar = null;
                strChar = pstrInput.ToCharArray();
                lstrbyte = new byte[strChar.Length];
                int lintCnt = 0;
                for (lintCnt = 0; lintCnt <= strChar.Length - 1; lintCnt++)
                {
                    lstrbyte[lintCnt] = Convert.ToByte(strChar[lintCnt]);
                }
                return lstrbyte;
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (System.Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                return lstrbyte;
            }
        }
        private static void UploadFile(byte[] parrbyte, string PstrPath, string pstrFileName)
        {
            MemoryStream lobjMemoryStream = new MemoryStream(parrbyte);
            FileStream lobjfileStream = new FileStream(PstrPath + "\\" + pstrFileName, FileMode.OpenOrCreate);
            try
            {
                lobjMemoryStream.WriteTo(lobjfileStream);
                lobjMemoryStream.Close();
                lobjfileStream.Close();
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (System.Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
            }
            finally
            {
                lobjfileStream = null;
                lobjMemoryStream = null;
            }
        }

        #endregion

        #region Supplier Details Fetching
        public static bool Fetch_supplier_Details(AgentDetails AgentDetail, string ProductType, string SupplierID, ref string Result, ref string ErrorMsg)
        {
            bool FetchStatus = false;
            try
            {
                DataSet dsSupplierDetails = new DataSet();
                Hashtable HshInputs = new Hashtable();
                HshInputs.Add("BRANCHID", AgentDetail.BranchID);
                HshInputs.Add("PRODUCTTYPE", ProductType);
                HshInputs.Add("SUPPLIERID", SupplierID);

                #region Request Log

                string LogData = "<EVENT><REQUESTDATA>" + JsonConvert.SerializeObject(HshInputs, Newtonsoft.Json.Formatting.Indented) + "</REQUESTDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetail, "E", "Common.SQLAcccess", "Fetch_supplier_Details", LogData, SupplierID, "");

                #endregion

                FetchStatus = dsResultProcedure(SelectProcedure.Fetch_Avail_Supplier_Details, "P", HshInputs, ref dsSupplierDetails, ref ErrorMsg);
                if (FetchStatus == true && dsSupplierDetails != null && dsSupplierDetails.Tables.Count > 0 && dsSupplierDetails.Tables[0].Rows.Count > 0)
                {
                    Result = JsonConvert.SerializeObject(dsSupplierDetails, Formatting.Indented);
                }

                #region Response Log

                LogData = "<EVENT><RESPONSEDATA>" + Result + "</RESPONSEDATA></EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetail, "E", "Common.SQLAcccess", "Fetch_supplier_Details", LogData, SupplierID, "");
                #endregion
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetail, "X", "Common.SQLAccess.cs", MethodBase.GetCurrentMethod().Name, ex.ToString(), SupplierID.ToString(), "");
                return false;
            }
            return FetchStatus;
        }

        #endregion

        #region Fetch Hotel Static content Details
        public static bool Fetch_Hotel_Static_Content(AgentDetails AgentDetails, string HotelID, ref string Result, ref string ErrorMsg)
        {
            string AgentID = string.Empty;
            bool FetchStatus = false;
            string LogData = string.Empty;
            string PageName = "WXYZ_Hotel.Common.BaseClass.cs";
            try
            {
                DataSet dsSupplierDetails = new DataSet();
                Hashtable HshInputs = new Hashtable();
                HshInputs.Add("HOTELID", HotelID);

                #region Request Log
                LogData = "<EVENT><REQUEST>Fetch_supplier_Details</REQUEST>"
                          + "<BRANCHID>" + AgentDetails.BranchID + "</BRANCHID>"
                          + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_supplier_Details", LogData, "", "");
                #endregion

                FetchStatus = dsResultProcedure(SelectProcedure.Fetch_Hotel_Static_Content, "H", HshInputs, ref dsSupplierDetails, ref ErrorMsg);
                if (FetchStatus == true && dsSupplierDetails != null && dsSupplierDetails.Tables.Count > 0 && dsSupplierDetails.Tables[0].Rows.Count > 0)
                {
                    Result = JsonConvert.SerializeObject(dsSupplierDetails);
                }
                else
                    FetchStatus = false;

                #region Response Log

                LogData = "<EVENT><RESPONSE>Fetch_supplier_Details</RESPONSE>"
                          + "<PROCEDURENAME>PROC_FETCH_AVAIL_SUPPLIER_DETAILS</PROCEDURENAME>"
                          + "<RESULT>" + FetchStatus + "</RESULT>"
                    //+ "<DATA>" + Result + "</DATA>"
                          + "<ERRORMSG>" + ErrorMsg + "</ERRORMSG>"
                          + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_supplier_Details", LogData, "", "");
                #endregion
            }
            catch (Exception ex)
            {
                Insert_Action_LogDetails("HOTEL", AgentDetails, "X", PageName, "Fetch_supplier_Details", ex.ToString(), "", "");
            }
            return FetchStatus;
        }


        #endregion

        #region Fetch API Log Details
        public static DataSet Fetch_Hotel_Avail_Details(AgentDetails AgentDetails, string TraceID, string LogType, string FunctionName, ref string Result, ref string ErrorMsg)
        {
            string AgentID = string.Empty; bool FetchStatus = false;
            string LogData = string.Empty;
            string PageName = "Common.SQLAccess.cs";
            DataSet dsHotelAvailDetails = new DataSet();
            try
            {
                Hashtable HshInputs = new Hashtable();
                HshInputs.Add("BRANCHID", AgentDetails.BranchID);
                HshInputs.Add("TRACEID", TraceID);
                HshInputs.Add("AGENTID", AgentDetails.AgentID);
                HshInputs.Add("TERMINALID", AgentDetails.TerminalID);
                HshInputs.Add("PRODUCTTYPE", "HOTEL");
                HshInputs.Add("LOGTYPE", LogType);
                HshInputs.Add("FUNCTIONNAME", FunctionName);

                #region Request Log
                LogData = "<EVENT><REQUEST>Fetch_Hotel_Avail_Details</REQUEST>"
                          + "<BRANCHID>" + AgentDetails.BranchID + "</BRANCHID>"
                          + "<TRACEID>" + TraceID + "</TRACEID>"
                          + "<AGENTID>" + AgentDetails.AgentID + "</AGENTID>"
                          + "<TERMINALID>" + AgentDetails.TerminalID + "</TERMINALID>"
                          + "<PRODUCTTYPE>HOTEL</PRODUCTTYPE>"
                          + "<LOGTYPE>" + LogType + "</LOGTYPE>"
                          + "<FUNCTIONNAME>" + FunctionName + "</FUNCTIONNAME>"
                        + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_Hotel_Avail_Details", LogData.ToString(), "", "");
                #endregion

                FetchStatus = dsResultProcedure(SelectProcedure.Fetch_Hotel_API_Log_Details, "A", HshInputs, ref dsHotelAvailDetails, ref ErrorMsg);
                if (FetchStatus == true && dsHotelAvailDetails != null && dsHotelAvailDetails.Tables.Count > 0 && dsHotelAvailDetails.Tables[0].Rows.Count > 0)
                {
                    Result = JsonConvert.SerializeObject(dsHotelAvailDetails);
                }

                #region Response Log

                LogData = "<EVENT><RESPONSE>Fetch_Hotel_Avail_Details</RESPONSE>"
                    + "<PROCEDURENAME>PROC_FETCH_API_LOG_DETAILS</PROCEDURENAME>"
                    + "<RESULT>" + FetchStatus + "</RESULT>"
                    + "<DATA>" + Result + "</DATA>"
                    + "<ERRORMSG>" + ErrorMsg + "</ERRORMSG>"
                    + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_Hotel_Avail_Details", LogData.ToString(), "", "");
                #endregion
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                Insert_Action_LogDetails("HOTEL", AgentDetails, "X", PageName, "Fetch_Hotel_Avail_Details", LogData.ToString(), "", "");
            }
            return dsHotelAvailDetails;
        }
        #endregion

        #region Fetch View PNR View Details
        public static DataSet Fetch_Hotel_View_PNR_Details(AgentDetails AgentDetails, string WPNR, string HotelPNR, ref string Result, ref string ErrorMsg)
        {
            string AgentID = string.Empty;
            bool FetchStatus = false;
            string LogData = string.Empty;
            string PageName = "Common.SQLAccess.cs";
            DataSet dsHotelAvailDetails = new DataSet();
            try
            {
                Hashtable HshInputs = new Hashtable();
                HshInputs.Add("WPNR", WPNR);
                HshInputs.Add("HOTELPNR", HotelPNR);
                HshInputs.Add("AGENT_ID", AgentDetails.AgentID);
                HshInputs.Add("TERMINAL_ID", AgentDetails.TerminalID);
                HshInputs.Add("USERNAME", AgentDetails.UserName);

                #region Request Log
                LogData = "<EVENT><REQUEST>Fetch_Hotel_View_PNR_Details</REQUEST>"
                    + "<WPNR>" + WPNR + "</WPNR>"
                    + "<HOTELPNR>" + HotelPNR + "</HOTELPNR>"
                    + "<AGENT_ID>" + AgentDetails.AgentID + "</AGENT_ID>"
                    + "<TERMINAL_ID>" + AgentDetails.TerminalID + "</TERMINAL_ID>"
                    + "<USERNAME>" + AgentDetails.UserName + "</USERNAME>"
               + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_Hotel_View_PNR_Details", LogData.ToString(), "", "");
                #endregion

                FetchStatus = dsResultProcedure(SelectProcedure.Fetch_Hotel_View_PNR_Details, "P", HshInputs, ref dsHotelAvailDetails, ref ErrorMsg);
                if (FetchStatus == true && dsHotelAvailDetails != null && dsHotelAvailDetails.Tables.Count > 0 && dsHotelAvailDetails.Tables[0].Rows.Count > 0)
                {
                    Result = JsonConvert.SerializeObject(dsHotelAvailDetails);
                }

                #region Response Log

                LogData = "<EVENT><RESPONSE>Fetch_Hotel_View_PNR_Details</RESPONSE>"
                    + "<PROCEDURENAME>PROC_FETCH_HOTEL_VIEWPNR_DETAILS</PROCEDURENAME>"
                    + "<RESULT>" + FetchStatus + "</RESULT>"
                    + "<DATA>" + Result + "</DATA>"
                    + "<ERRORMSG>" + ErrorMsg + "</ERRORMSG>"
                    + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_Hotel_View_PNR_Details", LogData.ToString(), "", "");
                #endregion
            }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
            catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
            {
                Insert_Action_LogDetails("HOTEL", AgentDetails, "X", "Common.SQLAccess.cs", "Fetch_Hotel_View_PNR_Details", LogData.ToString(), "", "");
            }
            return dsHotelAvailDetails;
        }

        #endregion

        #region DataBase Access Library Functions

        //---------------------------------------------------------------------------------------------------------------------------------------
        // No Result only execution. Used for Insert / Update / Delete operation with boolean return value
        //---------------------------------------------------------------------------------------------------------------------------------------
        public static bool InsertUpdateDeleteProcedure(string ProcedureName, string server, Hashtable Parameters, ref string strErrorMsg)
        {
            SqlConnection my_connection = null;
            try
            {
                my_connection = OpenSqlConnection(server);
                SqlCommand my_command = my_connection.CreateCommand();
                my_command.CommandText = ProcedureName;
                my_command.CommandType = CommandType.StoredProcedure;
                my_command.CommandTimeout = 0;
                AssignParametersDBA(my_command, Parameters);
                my_command.ExecuteNonQuery();
            }
            catch (Exception my_exception)
            {
                strErrorMsg = my_exception.Message.ToString().Trim();
                return false;
            }
            finally
            {
                if (my_connection != null)
                {
                    my_connection.Close();
                }
            }
            return true;
        }
        //=================================================================================
        //	Open the sql connection 
        //=================================================================================		
        public static SqlConnection OpenSqlConnection(string server)
        {
            SqlConnection my_connection = new SqlConnection();

            string connectionString = string.Empty;
            if (server == "P")
#pragma warning disable CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'
                connectionString = ConfigurationSettings.AppSettings["ConnectionStringApp"].ToString();
#pragma warning restore CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'
            else if (server == "A")
#pragma warning disable CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'
                connectionString = ConfigurationSettings.AppSettings["APIDATABASE"].ToString();
#pragma warning restore CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'
            else if (server == "L")
#pragma warning disable CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'
                connectionString = ConfigurationSettings.AppSettings["LogConnectionString"].ToString();
#pragma warning restore CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'
            else if (server == "H")
#pragma warning disable CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'
                connectionString = ConfigurationSettings.AppSettings["HOTEL_STATIC_CONTENT"].ToString();
#pragma warning restore CS0618 // 'ConfigurationSettings.AppSettings' is obsolete: 'This method is obsolete, it has been replaced by System.Configuration!System.Configuration.ConfigurationManager.AppSettings'

            my_connection.ConnectionString = connectionString;
            SqlConnection.ClearPool(my_connection);
            my_connection.Open();
            return (my_connection);
        }

        private static DateTime SQLMinDateDBA = new DateTime(1900, 1, 1, 0, 0, 0);
        //================================================================================
        //	Assigning the parameter and values for the sqlcommand that carries the stored procedure or SQL Query.
        //=================================================================================
        public static void AssignParametersDBA(SqlCommand Command, Hashtable Parameters)
        {
            if (Parameters == null) return;
            foreach (object key in Parameters.Keys)
            {
                if (Parameters[key].Equals(DateTime.MinValue))
                {
#pragma warning disable CS0618 // 'SqlParameterCollection.Add(string, object)' is obsolete: 'Add(String parameterName, Object value) has been deprecated.  Use AddWithValue(String parameterName, Object value).  http://go.microsoft.com/fwlink/?linkid=14202'
                    Command.Parameters.Add(("@" + key.ToString().ToUpper()), SQLMinDateDBA);
#pragma warning restore CS0618 // 'SqlParameterCollection.Add(string, object)' is obsolete: 'Add(String parameterName, Object value) has been deprecated.  Use AddWithValue(String parameterName, Object value).  http://go.microsoft.com/fwlink/?linkid=14202'
                }
                else
                {
#pragma warning disable CS0618 // 'SqlParameterCollection.Add(string, object)' is obsolete: 'Add(String parameterName, Object value) has been deprecated.  Use AddWithValue(String parameterName, Object value).  http://go.microsoft.com/fwlink/?linkid=14202'
                    Command.Parameters.Add(("@" + key.ToString().ToUpper()), Parameters[key]);
#pragma warning restore CS0618 // 'SqlParameterCollection.Add(string, object)' is obsolete: 'Add(String parameterName, Object value) has been deprecated.  Use AddWithValue(String parameterName, Object value).  http://go.microsoft.com/fwlink/?linkid=14202'
                }
            }
        }

        //---------------------------------------------------------------------------------------------------------------------------------------
        // Result will be DataSet else Error message with boolean return value
        //---------------------------------------------------------------------------------------------------------------------------------------
        public static bool dsResultProcedure(string ProcedureName, string server, Hashtable Parameters, ref DataSet dsResult, ref string strErrorMsg)
        {
            SqlConnection my_connection = null;
            try
            {
                my_connection = OpenSqlConnection(server);
                SqlCommand my_command = my_connection.CreateCommand();
                my_command.CommandText = ProcedureName;
                my_command.CommandType = CommandType.StoredProcedure;
                my_command.CommandTimeout = 240;
                AssignParametersDBA(my_command, Parameters);
                SqlDataAdapter my_adapter = new SqlDataAdapter();
                my_adapter.SelectCommand = my_command;
                my_adapter.Fill(dsResult);
            }
            catch (Exception my_exception)
            {
                strErrorMsg = my_exception.Message.ToString().Trim();
                return false;
            }
            finally
            {
                if (my_connection != null)
                {
                    my_connection.Close();
                }
            }
            return true;
        }

        #endregion


        #region Fetch API Currency Details
        public static DataSet Fetch_API_Currency_Details(AgentDetails AgentDetails, string SupplierName, string BaseCurrencyCode, string ToCurrenyCode, ref string ErrorMsg)
        {
            string LogData = string.Empty;
            string Result = string.Empty;
            bool FetchStatus = false;
            string PageName = "Common.SQLAccess.cs";
            DataSet dsCurrencyDetails = new DataSet();
            try
            {
                Hashtable HshInputs = new Hashtable();
                HshInputs.Add("BASECURRENCYCODE", BaseCurrencyCode);
                HshInputs.Add("TOCURRENCYCODE", ToCurrenyCode);
                HshInputs.Add("SUPPLIERNAME", SupplierName);

                #region Request Log
                LogData = "<EVENT><REQUEST>Fetch_API_Currency_Details</REQUEST>"
                    + "<BASECURRENCYCODE>" + BaseCurrencyCode + "</BASECURRENCYCODE>"
                    + "<TOCURRENCYCODE>" + ToCurrenyCode + "</TOCURRENCYCODE>"
                    + "<SUPPLIERNAME>" + SupplierName + "</SUPPLIERNAME>"
                    + "<PRODUCTTYPE>HOTLE</PRODUCTTYPE>"
                    + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_API_Currency_Details", LogData, "", "");
                #endregion

                FetchStatus = DBHandler.dsResultProcedure(SelectProcedure.Fetch_API_Currency_Details, "APP", HshInputs, ref dsCurrencyDetails, ref ErrorMsg);
                if (FetchStatus == true && dsCurrencyDetails != null && dsCurrencyDetails.Tables.Count > 0 && dsCurrencyDetails.Tables[0].Rows.Count > 0)
                {
                    Result = JsonConvert.SerializeObject(dsCurrencyDetails);
                }

                #region Response Log

                LogData = "<EVENT><RESPONSE>Fetch_API_Currency_Details</RESPONSE>"
                    + "<PROCEDURENAME>PROC_FETCH_API_CURRENCY_DETAILS</PROCEDURENAME>"
                    + "<RESULT>" + FetchStatus + "</RESULT>"
                    + "<DATA>" + Result + "</DATA>"
                    + "<ERRORMSG>" + ErrorMsg + "</ERRORMSG>"
                    + "</EVENT>";
                Insert_Action_LogDetails("HOTEL", AgentDetails, "E", PageName, "Fetch_API_Currency_Details", LogData, "", "");
                #endregion
            }
            catch (Exception ex)
            {
                Insert_Action_LogDetails("HOTEL", AgentDetails, "X", PageName, MethodBase.GetCurrentMethod().Name, ex.ToString(), "", "");
            }
            return dsCurrencyDetails;
        }
        #endregion

        #endregion
    }
    #region User Validation
    public class DBAccess
    {
        #region Checking User is Valid or Invalid
        public static bool Check_API_User_Valid(AgentDetails AgentDetails, ref string ErrorMsg)
        {
            bool Resultdata = false;
            try
            {
                DataSet dsLoginData = new DataSet();
                Hashtable HshInputs = new Hashtable();
                HshInputs.Add("BRANCHID", AgentDetails.BranchID);
                HshInputs.Add("AGENTID", AgentDetails.AgentID);
                HshInputs.Add("TERMINALID", AgentDetails.TerminalID);
                HshInputs.Add("SECURITYKEY", AgentDetails.ApiKey);
                HshInputs.Add("USERNAME", AgentDetails.UserName);
                HshInputs.Add("PASSWORD", AgentDetails.ApiSecret);

                #region Request Log
                string LogData = "<EVENT><REQUEST>Check_API_User_Valid</REQUEST>"
                                  + "<DATA>"
                                  + JsonConvert.SerializeObject(HshInputs, Formatting.Indented)
                                  + "</DATA></EVENT>";

                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "E", "Common.SQLAccess.cs", "Check_API_User_Valid", LogData, "", "");
                #endregion

                Resultdata = DBHandler.dsResultProcedure(SelectProcedure.Check_API_User_Validation, "APP", HshInputs, ref dsLoginData, ref ErrorMsg);
                if (Resultdata == true && dsLoginData != null && dsLoginData.Tables.Count > 0 && dsLoginData.Tables[0].Rows.Count > 0 && dsLoginData.Tables[0].Rows[0][0].ToString() == "1")
                    Resultdata = true;
                else
                    Resultdata = false;

                #region Request Log

                LogData = "<EVENT><RESPONSE>Check_API_User_Valid</RESPONSE>"
                    + "<PROCEDURENAME>PROC_CHECK_API_USER_VALIDATION</PROCEDURENAME>"
                    + "<RESULT>" + Resultdata + "</RESULT>"
                    + "<DATA>" + dsLoginData + "</DATA>"
                    + "<ERRORMSG>" + ErrorMsg + "</ERRORMSG>"
                    + "</EVENT>";
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "E", "Common.SQLAccess.cs", "Check_API_User_Valid", LogData, "", "");
                #endregion
            }
            catch (Exception ex)
            {
                SQLAccess.Insert_Action_LogDetails("HOTEL", AgentDetails, "X", "Common.SQLAccess.cs", "Check_API_User_Valid", ex.ToString(), "", "");
            }
            return Resultdata;
        }
        #endregion
    }
    #endregion
}