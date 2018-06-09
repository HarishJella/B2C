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
    public class BaseClass
    {
        public string getEnabledSupplier(string curAgency)
        {

            //DBHelper.DefaultConnectionString = ConfigurationManager.AppSettings["ConnectionString"].ToString();
            //DatabaseCommand cmd = DbHelper.Command("Htl_getEnabledSupplier", CommandType.StoredProcedure);
            //cmd.AddInParameter("@AgencyCode", curAgency);
            //string value = (string)cmd.ExecuteScalar();
            string value = "";
            return value;
        }
        public XElement GetDestination(string city)
        {
            XDocument data = null;
            if (HttpContext.Current.Cache["Autocomplete"] == null)
            {
                data = XDocument.Load(HttpContext.Current.Server.MapPath("~/App_Data/AllCity.xml"));
                HttpContext.Current.Cache["Autocomplete"] = data;
            }
            data = (XDocument)HttpContext.Current.Cache["Autocomplete"];
            var elem = data.Descendants("row").Where(c => c.Attribute("City").Value.ToLower() == city.ToLower()).ToList();
            if (elem.Any())
            {
                return elem.First();
            }
            return null;
        }

        public Property GetCredential(string apiname, string xml)
        {
            try
            {
                if (string.IsNullOrEmpty(xml))
                {
                    return null;
                }
            }
            catch (Exception)
            {
                return null;
            }
            XDocument xDoc = null;
            xDoc = XDocument.Parse(xml);
            var objprop = new Property();
            apiname = apiname.ToLower();
            switch (apiname.ToLower())
            {
                case "hotelbed":
                    var xbed = xDoc.Descendants("HOTELBED").First();
                    objprop.Username = xbed.Element("UserName").Value;
                    objprop.Password = xbed.Element("Password").Value;
                    objprop.Url = xbed.Element("Url").Value;
                    objprop.ApiKey = xbed.Element("CRSNAME").Value;
                    objprop.Currency = xbed.Element("APICURRENCY").Value;
                    break;
                case "trm":
                    var xtrm = xDoc.Descendants("TRM").First();
                    objprop.Username = xtrm.Element("UserName").Value;
                    objprop.Password = xtrm.Element("Password").Value;
                    objprop.Url = xtrm.Element("Url").Value;
                    objprop.ApiKey = xtrm.Element("BRANCHPCC").Value;
                    objprop.Currency = xtrm.Element("APICURRENCY").Value;
                    break;
                case "specialtours":
                    var xspt = xDoc.Descendants("SPECIALTOURS").First();
                    objprop.Username = xspt.Element("Username").Value;
                    objprop.Password = xspt.Element("Password").Value;
                    objprop.Url = xspt.Element("Url").Value;
                    objprop.Currency = xspt.Element("APICURRENCY").Value;
                    break;

            }
            return objprop;

        }
    }
    public enum AppType
    {
        B2B,
        B2C,
        API,
        MOB,
        Service
    }
    public enum DataBase
    {
        APP,
        API,
        LOG,
        OFF,
        BOA,
        BOACre,
        OffLine,
        TRM_DB_LOCAL
    }
    public enum Level
    {
        High,
        BelowHigh,
        Average,
        Normal,
        Low
    }
    public enum LogType
    {
        E,
        Er,
        X,
        F
    }
    public class DBHandler
    {
        #region OFFLINE
        public static bool StoreDBLog(string Status, string Type, string Function, string Error, string CityCode, string Request)
        {
            SqlConnection con = null;
            con = OpenSqlConnection("OffLine");
            con.Open();
            try
            {
                SqlCommand command = new SqlCommand("P_INSERT_DB_LOG", con);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add("@IEL_EVENT_STATUS", SqlDbType.VarChar).Value = Status;
                command.Parameters.Add("@IEL_EVENT_TYPE", SqlDbType.VarChar).Value = Type;
                command.Parameters.Add("@IEL_EVENT_FUNCTION", SqlDbType.VarChar).Value = Function;
                command.Parameters.Add("@IEL_EVENT_Error", SqlDbType.VarChar).Value = Error;
                command.Parameters.Add("@IEL_CityCode", SqlDbType.VarChar).Value = CityCode;
                command.Parameters.Add("@IEL_EVENT_XML", SqlDbType.VarChar).Value = Request.Replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "");
                command.ExecuteNonQuery();
                con.Close();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("StoreDBLog-" + ex.Message + "\r\n");
                Thread.Sleep(3000);
                con.Close();
                return false;
            }

        }

        #endregion
        public static bool GetROEValue(string Fromcurr, string Tocurr, ref decimal Convelue)
        {
            try
            {
                Hashtable parameters = new Hashtable();
                parameters.Add("ROE_FROM_CODE", Fromcurr);
                parameters.Add("ROE_TO_CODE", Tocurr);
                string strErrorMsg = string.Empty;
                Convelue = Convert.ToDecimal(DBHandler.ExecSelectProcedure(SelectProcedure.FETCH_CONVERTED_VALUE, parameters, 0,
                    ref strErrorMsg).Tables[0].Rows[0][0].ToString());
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        private static DateTime SQLMinDate = new DateTime(0x76c, 1, 1, 0, 0, 0);
        public static void AssignParameters(SqlCommand Command, Hashtable Parameters)
        {
            foreach (object obj2 in Parameters.Keys)
            {
                if (Parameters[obj2].Equals(DateTime.MinValue))
                {
                    Command.Parameters.AddWithValue("@" + obj2.ToString().ToUpper(), SQLMinDate);
                }
                else if (obj2.ToString() != "AG_LOGO")
                {
                    Command.Parameters.AddWithValue("@" + obj2.ToString().ToUpper(), Parameters[obj2]);
                }
                else
                {
                    SqlParameter parameter = new SqlParameter("@" + obj2.ToString().ToUpper(), SqlDbType.Image)
                    {
                        Value = Parameters[obj2] ?? DBNull.Value
                    };
                    Command.Parameters.Add(parameter);
                }
            }
        }
        public static DataTable ConvertToDataTable<T>(IEnumerable<T> varlist)
        {
            DataTable table = new DataTable();
            PropertyInfo[] properties = null;
            if (varlist != null)
            {
                foreach (T local in varlist)
                {
                    if (properties == null)
                    {
                        properties = local.GetType().GetProperties();
                        foreach (PropertyInfo info in properties)
                        {
                            Type propertyType = info.PropertyType;
                            if (propertyType.IsGenericType && (propertyType.GetGenericTypeDefinition() == typeof(Nullable<>)))
                            {
                                propertyType = propertyType.GetGenericArguments()[0];
                            }
                            table.Columns.Add(new DataColumn(info.Name, propertyType));
                        }
                    }
                    DataRow row = table.NewRow();
                    foreach (PropertyInfo info2 in properties)
                    {
                        row[info2.Name] = (info2.GetValue(local, null) == null) ? DBNull.Value : info2.GetValue(local, null);
                    }
                    table.Rows.Add(row);
                }
            }
            return table;
        }
        private static string CreateConnStr()
        {
            return ConfigurationManager.AppSettings["ConnectionStringApp"].ToString();
        }
        private static string CreateConnOff()
        {
            return ConfigurationManager.AppSettings["ConnectionStringOff"].ToString();
        }
        private static string CreateConnStrApp()
        {
            return ConfigurationManager.AppSettings["ConnectionStringApp"].ToString();
        }
        private static string CreateConnStrLog()
        {
            return ConfigurationManager.AppSettings["ConnectionStringApp"].ToString();
        }
        private static string CreateConnStrCre()
        {
            return ConfigurationManager.AppSettings["ConnectionStringCRE"].ToString();
        }
        private static string CreateConnStrBOA()
        {
            return ConfigurationManager.AppSettings["ConnectionStringBOA"].ToString();
        }
        private static string CreateConnStrOFF()
        {
            return ConfigurationManager.AppSettings["ConnectionStringOff"].ToString();
        }
        private static string CreateConnStrTRMDBLOCAL()
        {
            return ConfigurationManager.AppSettings["APIDATABASE"].ToString();
        }

        public static string ExecuteReader(string ProcedureName, Hashtable Parameters, ref string strErrorMsg, string Database)
        {
            SqlConnection my_connection = null;
            SqlDataReader sqlDatareader = null;
            string my_result = string.Empty;
            try
            {
                my_connection = OpenSqlConnection(Database);
                SqlCommand my_command = my_connection.CreateCommand();
                my_command.CommandText = ProcedureName;
                my_command.CommandType = CommandType.StoredProcedure;
                AssignParameters(my_command, Parameters);
                sqlDatareader = my_command.ExecuteReader();
                if (sqlDatareader.Read())
                {
                    my_result = sqlDatareader[0].ToString();
                }
                sqlDatareader.Close();
            }
            catch (Exception my_exception)
            {
                strErrorMsg = my_exception.Message.ToString();
                GetDbException(Parameters, null, my_exception, ProcedureName, MethodBase.GetCurrentMethod().Name, Level.BelowHigh);

            }
            finally
            {
                if (my_connection != null)
                {
                    my_connection.Close();
                }
            }
            return (my_result);
        }



        public static DataSet ExecSelectProcedure(string ProcedureName, Hashtable Parameters, string Database)
        {
            SqlConnection connection = null;
            DataSet dataSet = new DataSet();
            try
            {
                connection = OpenSqlConnection(Database);
                SqlCommand command = connection.CreateCommand();
                command.CommandText = ProcedureName;
                command.CommandType = CommandType.StoredProcedure;
                AssignParameters(command, Parameters);
                new SqlDataAdapter { SelectCommand = command }.Fill(dataSet, ProcedureName);
            }
            catch (Exception exception)
            {
                GetDbException(Parameters, null, exception, ProcedureName, MethodBase.GetCurrentMethod().Name, Level.BelowHigh);
            }
            finally
            {
                if (connection != null)
                {
                    connection.Close();
                }
            }
            return dataSet;
        }

        public static DataSet ExecSelectProcedure(string ProcedureName, Hashtable Parameters, DataBase pDatabase, ref string strErrorMsg)
        {
            SqlConnection connection = null;
            DataSet dataSet = new DataSet();
            try
            {
                connection = OpenSqlConnection(pDatabase.ToString());
                SqlCommand command = connection.CreateCommand();
                command.CommandText = ProcedureName;
                command.CommandType = CommandType.StoredProcedure;
                command.CommandTimeout = 0;
                AssignParameters(command, Parameters);
                new SqlDataAdapter { SelectCommand = command }.Fill(dataSet, ProcedureName);
            }
            catch (Exception exception)
            {
                dataSet = null;
                GetDbException(Parameters, null, exception, ProcedureName, MethodBase.GetCurrentMethod().Name, Level.BelowHigh);
            }
            finally
            {
                if (connection != null)
                {
                    connection.Close();
                }
            }
            return dataSet;
        }

        public static bool ExecuteQuery(string ProcedureName, Hashtable Parameters, string Database)
        {
            SqlConnection connection = null;
            try
            {
                connection = OpenSqlConnection(Database);
                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = ProcedureName;
                AssignParameters(command, Parameters);
                command.ExecuteNonQuery();
                //int SearchID = Convert.ToInt32(command.Parameters["@SearchID"].Value);
            }
            catch (Exception exception)
            {
                exception.Message.ToString();
                GetDbException(Parameters, null, exception, ProcedureName, MethodBase.GetCurrentMethod().Name, Level.BelowHigh);
                return false;
            }
            finally
            {
                if (connection != null)
                {
                    connection.Close();
                }
            }
            return true;
        }

        public static string FetchSequenceNumber(string pstrCheck, string pstrFunctionName)
        {
            SqlCommand psqlCmd = new SqlCommand();
            string pstrRetVal = string.Empty;
            try
            {
                psqlCmd = new SqlCommand("P_GENEREATE_SEQNO")
                {
                    CommandType = CommandType.StoredProcedure
                };
                psqlCmd.Parameters.AddWithValue("@CHECK", pstrCheck);
                psqlCmd.Parameters.AddWithValue("@NAME", pstrFunctionName);
                if (GetValue(psqlCmd, ref pstrRetVal) && !string.IsNullOrEmpty(pstrRetVal))
                {
                    return pstrRetVal;
                }
                return "";
            }
            catch (Exception exception)
            {
                GetDbException(null, psqlCmd, exception, psqlCmd.CommandText, MethodBase.GetCurrentMethod().Name, Level.BelowHigh);
                return (pstrRetVal = string.Empty);
            }
        }



        private static void GetDbException(Hashtable Parameters, SqlCommand pSqlCommand, Exception pex, string ProcedureName, string MethodName, Level level)
        {
            try
            {
                StringBuilder builder = new StringBuilder();
                if (Parameters != null)
                {
                    for (int i = 0; i < Parameters.Count; i++)
                    {
                        if (Parameters[i] != null)
                        {
                            builder.Append(Parameters[i].ToString() + "\r\n");
                        }
                    }
                }
                else
                {
                    for (int j = 0; j < pSqlCommand.Parameters.Count; j++)
                    {
                        if (pSqlCommand.Parameters[j] != null)
                        {
                            builder.Append(pSqlCommand.Parameters[j].Value.ToString() + "\r\n");
                        }
                    }
                }
                if (Parameters["EVENT_STRING"].ToString() != null)
                {
                    builder.Append(Parameters["EVENT_STRING"].ToString());
                }
                string pstrXml = builder.ToString() + "\r\n" + pex.Message.ToString() + "\r\n" + pex.StackTrace.ToString() + "\r\n";
                // Logging.StoreLog("", "", "", StoreType.Text, LogType.F, AppType.Service, pstrXml, ProcedureName, "DBHandler", MethodName, null, false, level);
            }
            catch (Exception)
            {
            }
        }

        public static Hashtable GetOutputParameters(SqlCommand Command, Hashtable Parameters)
        {
            Hashtable hashtable = new Hashtable();
            if (Parameters != null)
            {
                foreach (object obj2 in Parameters.Keys)
                {
                    hashtable.Add(obj2.ToString().ToUpper(), Command.Parameters["@" + obj2.ToString().ToUpper()].Value.ToString());
                }
            }
            return hashtable;
        }

        public static bool GetValue(SqlCommand psqlCmd, ref string pstrRetVal)
        {
            SqlDataReader reader = null;
            SqlConnection connection = null;
            bool flag;
            try
            {
                connection = OpenSqlConnection(DataBase.API.ToString());
                psqlCmd.Connection = connection;
                reader = psqlCmd.ExecuteReader();
                if (reader.Read())
                {
                    pstrRetVal = reader[0].ToString();
                }
                reader.Close();
                if (!string.IsNullOrEmpty(pstrRetVal))
                {
                    return true;
                }
                flag = false;
            }
            catch (Exception exception)
            {
                GetDbException(null, psqlCmd, exception, psqlCmd.CommandText, MethodBase.GetCurrentMethod().Name, Level.BelowHigh);
                flag = false;
            }
            finally
            {
                if (connection != null)
                {
                    connection.Close();
                }
            }
            return flag;
        }

        public static SqlConnection OpenSqlConnection(string Database)
        {
            SqlConnection connection = new SqlConnection();
            string str = string.Empty;
            if (Database.Contains(DataBase.API.ToString()))
            {
                str = CreateConnStr();
            }
            else if (Database.Contains(DataBase.APP.ToString()))
            {
                str = CreateConnStrApp();
            }
            else if (Database.Contains(DataBase.LOG.ToString()))
            {
                str = CreateConnStrLog();
            }
            else if (Database.Contains(DataBase.BOACre.ToString()))
            {
                str = CreateConnStrCre();
            }
            else if (Database.Contains(DataBase.BOA.ToString()))
            {
                str = CreateConnStrBOA();
            }
            else if (Database.Contains(DataBase.OffLine.ToString()))
            {
                str = CreateConnStrOFF();
            }
            else if (Database.Contains(DataBase.TRM_DB_LOCAL.ToString()))
            {
                str = CreateConnStrTRMDBLOCAL();
            }
            else if (Database.Contains("OFF"))
            {
                str = CreateConnStrOFF();
            }
            connection.ConnectionString = str;
            SqlConnection.ClearPool(connection);
            connection.Open();
            return connection;
        }

        public static bool SelectRowInTable(SqlCommand psqlcmd, ref string _rpString, string Database)
        {
            SqlConnection connection;
            bool flag;
            using ((SqlConnection)(connection = null))
            {
                try
                {
                    connection = OpenSqlConnection(Database);
                    psqlcmd.Connection = connection;
                    SqlDataReader reader = psqlcmd.ExecuteReader();
                    int num = 0;
                    while (reader.Read())
                    {
                        _rpString = ((string)reader[num]) + '^';
                        num++;
                        _rpString = _rpString.TrimEnd(new char[] { '^' });
                        return true;
                    }
                    _rpString = "Configuration Server Error.";
                    flag = false;
                }
                catch (Exception exception)
                {
                    _rpString = exception.Message.ToString();
                    GetDbException(null, psqlcmd, exception, psqlcmd.CommandText, MethodBase.GetCurrentMethod().Name, Level.BelowHigh);
                    flag = false;
                }
                finally
                {
                    connection.Close();
                }
            }
            return flag;
        }



        public static void UpdateCancelTable(string TableName, string ColumeName1, string ColumeName2, string status, string spnr, string Database)
        {
            SqlConnection connection = null;
            DataSet dataSet = new DataSet();
            try
            {
                connection = OpenSqlConnection(Database.ToString());
                SqlCommand command = connection.CreateCommand();
                DataSet ds = new DataSet();
                // connection.Open();
                string str = "UPDATE " + TableName + " SET " + ColumeName1 + "='" + status + "'where " + ColumeName2 + "='" + spnr + "'";
                SqlCommand cmd = new SqlCommand(str, connection);
                cmd.ExecuteNonQuery();
                connection.Close();
            }
            catch (Exception ex)
            {

            }

        }

        //=================================================================================
        //	Open the sql connection 
        //=================================================================================		

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
                AssignParameters(my_command, Parameters);
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

        
    }
    public class ServerConfig
    {
        public static string GetMACAddress()
        {
            NetworkInterface[] nics = NetworkInterface.GetAllNetworkInterfaces();
            String sMacAddress = string.Empty;
            foreach (NetworkInterface adapter in nics)
            {
                if (sMacAddress == String.Empty)// only return MAC Address from first card  
                {
                    IPInterfaceProperties properties = adapter.GetIPProperties();
                    sMacAddress = adapter.GetPhysicalAddress().ToString();
                }
            } return sMacAddress;
        }

        public static string GetLocalIPAddress()
        {
            var host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (var ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    return ip.ToString();
                }
            }
            throw new Exception("No network adapters with an IPv4 address in the system!");
        }
    }
    public static class Logging
    {
        static string gstrPath = Path.Combine(System.Web.Hosting.HostingEnvironment.ApplicationPhysicalPath, @"App_Data\Log");
        public static string SerializeObject<T>(this T toSerialize)
        {
            try
            {
                XmlSerializer serializer = new XmlSerializer(typeof(T));
                StringWriter writer = new StringWriter();
                serializer.Serialize((TextWriter)writer, toSerialize);
                string str = writer.ToString();
                if (str.Contains("<?xml"))
                {
                    str = str.Substring(str.IndexOf("?>") + 2);
                }
                return str;
            }
            catch
            {
                return "";
            }
        }
        public static void StoreLog(string pstrTerminalId, string AgentId, string SequenceId, AppType pstrAppType, string ProductType, string pstrXml, string pstrClass, string pstrFunction, string LogType, string UserName)
        {
            try
            {
                pstrXml = pstrXml.Replace("<?xml version=\"1.0\" encoding=\"UTF8\"?>", "");
                pstrXml = pstrXml.Replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "");
                pstrXml = pstrXml.Replace("<?xml version='1.0' encoding='UTF-8'?>", "");
                pstrXml = pstrXml.Replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                pstrXml = pstrXml.Replace("&", "and");
                string str = DateTime.Now.AddMinutes(90.0).ToString("yyyyMMdd");
                string str2 = DateTime.Now.AddMinutes(90.0).ToString("hhmmssfff");
                StringBuilder builder = new StringBuilder();
                builder.Append("<LogXml>" + pstrXml + "</LogXml>");
                pstrXml = builder.ToString();
                pstrTerminalId = string.IsNullOrEmpty(pstrTerminalId) ? "Default" : pstrTerminalId;
                string str4 = (pstrTerminalId.Length < 14) ? ("W" + pstrTerminalId) : pstrTerminalId.Substring(0, 12);
                Hashtable parameters = new Hashtable();
                parameters.Add("SearchResponse", pstrXml);
                parameters.Add("CacheID", DbType.Int32);
            }
            catch (Exception exception)
            {
            }
        }
    }
    public class SelectProcedure
    {
        public const string Fetch_Hotel_Static_Content = "PROC_FETCH_HOTEL_STATIC_CONTENT";
        public const string Fetch_Hotel_API_Log_Details = "PROC_FETCH_HOTEL_API_LOG_DETAILS";
        public const string Insert_Hotel_API_Log_Details = "PROC_INSERT_HOTEL_API_LOGS";
        public const string Fetch_Hotel_View_PNR_Details = "PROC_FETCH_HOTEL_VIEWPNR_DETAILS";
        public const string Check_API_User_Validation = "PROC_CHECK_API_USER_VALIDATION";
        public const string Fetch_API_Currency_Details = "PROC_FETCH_API_CURRENCY_DETAILS";

        public const string INSERT_HOTELS_SEARCH = "usp_InsertHotelSearchHistory";
        public const string FETCH_HOTEL_DETAILS = "usp_GetHotelCachedResponse";
        public const string UPDATE_HOTELCACHE = "usp_UpdateHotelSearchHistory";
        public const string INSERT_HOTELS_DETAILS = "usp_InsertHotelSearchCache";
        /*FETCH*/
        public const string Fetch_Agent_Branch = "P_FETCH_AGENT_BRANCHID";
        public const string Fetch_Api_Credential = "P_FETCH_MAPPED_CRADENTIALS";

        public const string Fetch_CurrentBalance = "P_Fetch_CurrentBalance";
        public const string Fetch_Current_Supp_Balance = "P_FETCH_CURRENT_SUPP_BALANCE";
        public const string FETCH_HOTEL_CACHE = "P_FETCH_HOTEL_CACHE";
        public const string FETCH_HOTEL_TRACKID_DETAIlS = "PROC_FETCH_HOTEL_TRACKID_DETAIlS";
        public const string FETCH_HOTEL_TRACKID_DETAIlS_ROONPNR = "P_FETCH_HOTEL_TRACKID_DETAIlS_WITH_HOTELPNR";
        public const string Generate_PNR = "PROC_GENERATE_PNR";
        public const string FETCH_HTL_AGENT_EARNING = "P_FETCH_HTL_AGENT_EARNING";
        public const string FETCH_HTL_SUPPLIER_EARNING = "P_FETCH_HTL_SUPPLIER_EARNING";
        public const string Get_Token_Number = "P_GENERATE_TRACKID";
        public const string FETCH_CONVERTED_VALUE = "P_FETCH_CONVERTED_VALUE";
        public const string Fetch_Avail_Supplier_Details = "PROC_FETCH_AVAIL_SUPPLIER_DETAILS";
        public const string FETCH_API_HOTEL_MARKUP_COMMISSION = "PROC_FETCH_API_HOTEL_MARKUP_COMMISSION";

        /*INSERT*/
        /*TRANSACTION LEVEL PROCEDURE*/
        public const string INSERT_HTL_INFO = "PROC_INSERT_HOTEL_DETAILS";
        public const string INSERT_HTL_ROOM_INFO = "PROC_INSERT_HOTEL_ROOM_DETAILS";
        public const string INSERT_AGENT_TRANSACTION = "PROC_INSERT_AGENT_TRANSACTION";
        public const string INSERT_CLIENT_TRANSACTION = "P_INSERT_CLIENT_TRANSACTION";
        public const string INSERT_SUPPLIER_TRANSACTION = "PROC_INSERT_SUPPLIER_TRANSACTION";
        public const string INSERT_HTL_BOOKED_HISTORY = "PROC_INSERT_HOTEL_BOOKED_HISTROY";
        public const string FetchHotelTrackStatus = "PROC_FETCH_HOTEL_TRACK_STATUS";
        public const string Fetch_Current_Balance = "P_Fetch_CurrentBalance";
        public const string Fetch_Processing_Amt = "P_FETCH_PROCESSING_AMT";

        /*Track*/
        public const string Insert_Hotel_Booking_Track = "PROC_INSERT_HOTEL_TRACK";
        public const string INSERT_HTL_PAX_INFO = "PROC_INSERT_HOTEL_PAX_DETAILS";
        public const string INSERT_HTL_EVENT_LOGS = "P_INSERT_HTL_EVENT_LOGS";

    }
}


