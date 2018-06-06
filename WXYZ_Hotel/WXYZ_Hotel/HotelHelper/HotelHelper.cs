using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;
using WXYZ_Hotel.Models;

namespace WXYZ_HotelService
{
    public class HotelHelper
    {        

        #region GetApiName
        /// <summary>
        /// 
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public string GetApiName(string code)
        {
            string apiname = string.Empty;
            switch (code.ToUpper())
            {
                case "UAPI": //UAPI
                    apiname = "UAPI";
                    break;
                case "HOTELBEDS": //HOTELBEDS
                    apiname = "HOTELBEDS";
                    break;
                case "GTA": //GTA
                    apiname = "GTA";
                    break;
                case "OYO": //OYO
                    apiname = "OYO";
                    break;
                case "DOTW": //DOTW
                    apiname = "DOTW";
                    break;
            }
            return apiname;
        }
        #endregion

        #region GetDestination
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
        #endregion

        #region GetCity
        /// <summary>
        /// 
        /// </summary>
        /// <param name="cityid"></param>
        /// <returns></returns>
        public string GetCity(string cityid)
        {
            XDocument data = null;
            try
            {
                if (!string.IsNullOrEmpty(cityid))
                {
                    if (System.Web.Hosting.HostingEnvironment.Cache["Autocomplete"] == null)
                    {
                        data = XDocument.Load(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/City.xml"));
                        System.Web.Hosting.HostingEnvironment.Cache["Autocomplete"] = data;
                    }
                    data = (XDocument)System.Web.Hosting.HostingEnvironment.Cache["Autocomplete"];
                    string City = string.Empty;
                    City = data.Descendants("cities").Where(c => c.Attribute("cityid").Value == cityid).Attributes("tbocityid").First().Value + ";" + data.Descendants("cities").Where(c => c.Attribute("cityid").Value == cityid).Attributes("tbocityname").First().Value;
                    return City;
                }
            }
            catch (Exception ex)
            {
                data = XDocument.Load(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/WxyzBusCities.xml"));
                System.Web.Hosting.HostingEnvironment.Cache["Autocomplete"] = data;
                data = (XDocument)System.Web.Hosting.HostingEnvironment.Cache["Autocomplete"];
                string City = string.Empty;
                City = data.Descendants("cities").Where(c => c.Attribute("cityid").Value == cityid).Attributes("tbocityid").First().Value + ";" + data.Descendants("cities").Where(c => c.Attribute("cityid").Value == cityid).Attributes("tbocityname").First().Value;
                return City;
            }
            return null;
        }
        #endregion

        //#region GetCity
        ///// <summary>
        ///// 
        ///// </summary>
        ///// <param name="cityid"></param>
        ///// <returns></returns>
        //public static string GetCityCode(string CityName)
        //{
        //    XDocument data = null;
        //    try
        //    {
        //        if (!string.IsNullOrEmpty(CityName))
        //        {
        //            if (System.Web.Hosting.HostingEnvironment.Cache["AutocompleteCity"] == null)
        //            {
        //                data = XDocument.Load(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/AllCity.xml"));
        //                System.Web.Hosting.HostingEnvironment.Cache["AutocompleteCity"] = data;
        //            }
        //            data = (XDocument)System.Web.Hosting.HostingEnvironment.Cache["AutocompleteCity"];
        //            string City = string.Empty;
        //            //City = data.Descendants("row").Where(c => c.Attribute("city").Value == CityName).Attributes("code").First().Value;
        //            var elem = data.Descendants("row").Where(c => c.Attribute("city").Value.ToUpper() == CityName.ToUpper()).ToList();
        //            if (elem.Any())
        //            {
        //                City = elem.FirstOrDefault().Attribute("TRM").Value;
        //            }
        //            return City;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        data = XDocument.Load(System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/City.xml"));
        //        System.Web.Hosting.HostingEnvironment.Cache["AutocompleteCity"] = data;
        //        data = (XDocument)System.Web.Hosting.HostingEnvironment.Cache["AutocompleteCity"];
        //        string City = string.Empty;
        //        City = data.Descendants("row").Where(c => c.Attribute("city").Value == CityName).Attributes("code").First().Value;
        //        return City;
        //    }
        //    return null;
        //}
        //#endregion

        #region Convert
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="xml"></param>
        /// <returns></returns>
        public static T Convert<T>(string xml)
        {
            T returnedXmlClass = default(T);
            try
            {
                using (TextReader reader = new StringReader(xml.Trim()))
                {
                    try
                    {
                        XmlSerializerNamespaces ns = new XmlSerializerNamespaces(); ns.Add("", "");
                        returnedXmlClass = (T)new XmlSerializer(typeof(T), "").Deserialize(reader);
                    }
                    catch (Exception ex)
                    {
                        // String passed is not XML, simply return defaultXmlClass
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return returnedXmlClass;
        }
        #endregion

        #region ObjectToXml
        /// <summary>
        /// 
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public string ObjectToXml(object obj)
        {
            XmlSerializer xs = new XmlSerializer(obj.GetType());
            MemoryStream buffer = new MemoryStream();
            xs.Serialize(buffer, obj);
            return ASCIIEncoding.ASCII.GetString(buffer.ToArray());
        }
        #endregion

        #region AddUniqId
        /// <summary>
        /// 
        /// </summary>
        /// <param name="res"></param>
        /// <returns></returns>
        public string AddUniqId(string res)
        {
            var xdoc = XDocument.Parse(res.Replace("&amp;", "and").Replace("&", "and"));
            foreach (var doc in xdoc.Descendants("AvailableBus"))
            {
                var i = 1;
                foreach (var Bus in doc.Descendants("availableRoot"))
                {
                    Bus.Add(new XElement("xId", i));
                    i++;
                }
            }
            var xml = xdoc.ToString();
            return xml;
        }
        #endregion

        #region GetApiCredential
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Agent"></param>
        /// <param name="mode"></param>
        /// <returns></returns>
        internal string GetApiCredential(string Agent, string mode)
        {
            return null;
        }
        #endregion

        #region GetResponseDocument
        /// <summary>
        /// 
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        public string GetResponseDocument(string result)
        {
            var responseXmlDocument = new XmlDocument();
            XmlDocument filteredDocument = null;
            try
            {
                responseXmlDocument.LoadXml(result);

                XmlNode filteredResponse = responseXmlDocument.SelectSingleNode("//*[local-name()='Body']/*");

                filteredDocument = new XmlDocument();
                filteredDocument.LoadXml(filteredResponse.OuterXml);
            }
            catch (Exception ex)
            {
                return "";
            }
            return filteredDocument.OuterXml;
        }
        #endregion

        #region RemoveXmlns
        /// <summary>
        /// 
        /// </summary>
        /// <param name="response"></param>
        /// <returns></returns>
        public string RemoveXmlns(string response)
        {
            if (string.IsNullOrEmpty(response))
            {
                return "";
            }
            XDocument doc = XDocument.Parse(response);
            doc.Root.Descendants().Attributes().Where(x => x.IsNamespaceDeclaration).Remove();
            foreach (var elem in doc.Descendants())
                elem.Name = elem.Name.LocalName;
            var xmlDocument = new XmlDocument();
            using (var xmlReader = doc.CreateReader())
                xmlDocument.Load(xmlReader);
            return xmlDocument.OuterXml;
        }
        #endregion

        #region log
        public string Log(string xml, string SessionId)
        {
            var filename = string.Empty;
            try
            {
                try
                {
                    xml = XDocument.Parse(xml).ToString();
                }
                catch
                {
                }
                var path = System.Web.Hosting.HostingEnvironment.MapPath("~/_absndpiwebaxyz1989/");
                path += DateTime.Now.ToString("dd-MM-yyyy");
                if (!path.EndsWith("\\"))
                {
                    path += "\\";
                }
                if (!Directory.Exists(path))
                {
                    DirectoryInfo di = Directory.CreateDirectory(path);
                }
                filename += DateTime.Now.ToString("dd-MM-yyyy") + ";";
                filename += SessionId;
                filename += ".xml";
                path += filename;
                File.WriteAllText(path, xml);
            }
            catch (Exception ex)
            {

            }
            return filename;
        }

        #region LogReWrite
        public void LogReWrite(string xml, string path)
        {
            try
            {
                try
                {
                    xml = XDocument.Parse(xml).ToString();
                }
                catch
                {
                }
                File.WriteAllText(path, xml);
            }
            catch (Exception ex)
            {

            }

        }
        #endregion
        #endregion

        #region SendMail
        public static bool SendMail(string to, string subject, string body)
        {
            try
            {
                var MailHost = "mail.tripzeazy.com";
                var MailUserName = "hotelapisupport@tripzeazy.com";
                var MailPassword = "Hotel@123";
                var MailPort = "587";
                var emailClient = new SmtpClient(MailHost);
                var message = new MailMessage(MailUserName, to, subject, body) { IsBodyHtml = false };


                string cc = "sivark@webaxyz.com,sriram@webaxyz.com,kasi@webaxyz.com,jana@webaxyz.com";
                string bcc = "tony@tripzeazy.com,hotelapisupport@tripzeazy.com";
                string[] bccid = bcc.Split(',');
                string[] ccid = cc.Split(',');
                foreach (string ccEmailId in ccid)
                {
                    message.CC.Add(new MailAddress(ccEmailId)); //Adding Multiple BCC email Id
                }
                foreach (string bccEmailId in bccid)
                {
                    message.Bcc.Add(new MailAddress(bccEmailId)); //Adding Multiple BCC email Id
                }

                var smtpUserInfo = new NetworkCredential(MailUserName, MailPassword);
                emailClient.UseDefaultCredentials = false;
                emailClient.Credentials = smtpUserInfo;
                emailClient.Port = int.Parse(MailPort);
                emailClient.Host = MailHost;
                emailClient.EnableSsl = false;
                emailClient.Send(message);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        #endregion

       
    }

}