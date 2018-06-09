using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace WXYZ_Hotel.Common
{
    public class LTBL_TRM_API_LOG_DETAILS
    {
        public string TRACEID { get; set; }
        public string XML { get; set; }
        public string BOOKEDST { get; set; }
        public string STATUS { get; set; }
        public string METHOD { get; set; }
        public void INSERT_LTBL_TRM_API_LOG_DETAILS()
        {
            Hashtable parameters = new Hashtable();
            parameters.Add("TRACEID", TRACEID);
            parameters.Add("XML", XML);
            parameters.Add("BOOKEDST", "");
            parameters.Add("STATUS", "");
            parameters.Add("METHOD", METHOD);
            DBHandler.ExecuteQuery("SP_LTBL_TRM_API_LOG_DETAILS", parameters, DataBase.TRM_DB_LOCAL.ToString());
        }

        public void UPDATE_LTBL_TRM_API_LOG_DETAILS()
        {
            Hashtable parameters = new Hashtable();
            parameters.Add("TRACEID", TRACEID);
            parameters.Add("XML", XML);
            parameters.Add("BOOKEDST", BOOKEDST);
            parameters.Add("STATUS", STATUS);
            parameters.Add("METHOD", METHOD);
            DBHandler.ExecuteQuery("SP_LTBL_TRM_API_LOG_DETAILS", parameters, DataBase.TRM_DB_LOCAL.ToString());
        }

        public string GET_LTBL_TRM_API_LOG_DETAILS()
        {
            var Result = string.Empty;
            DataSet ds = new DataSet();
            Hashtable parameters = new Hashtable();
            parameters.Add("TRACEID", TRACEID);
            parameters.Add("METHOD", METHOD);
            ds = DBHandler.ExecSelectProcedure("SP_LTBL_TRM_API_LOG_DETAILS", parameters, DataBase.TRM_DB_LOCAL.ToString());
            DataTable dt = ds.Tables[0];
            if (dt.Rows.Count > 0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    Result = Convert.ToString(dr["XML"]);
                }
            }
            return Result;
        }
    }
}