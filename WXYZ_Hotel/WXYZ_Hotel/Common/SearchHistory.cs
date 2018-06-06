using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WXYZ_Hotel.Models;

namespace WXYZ_Hotel.Common
{
    public class SearchHistory
    {
        //public int SearchID { get; set; }
        public string City { get; set; }
        public string CheckIn { get; set; }
        public string CheckOut { get; set; }
        public string AgencyCode { get; set; }
        public string BranchCode { get; set; }
        public bool status { get; set; }
        public string SearchResponse { get; set; }
        public int CacheID { get; set; }

    }
}