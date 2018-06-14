using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Web;
using System.Xml.Linq;
using WXYZ_Hotel.Common;
using WXYZ_HotelService;

namespace WXYZ_Hotel.Models
{
    #region VALIDATION
    public class Validate
    {
        public string errormessage { get; set; }

        #region SearchRequest
        public string SearchRequest(HotelSearchRQ req)
        {
            if (req != null)
            {
               #region Agent Validation
                errormessage=ValidateAgentDetails(req.AgentDetails);
                if (!string.IsNullOrEmpty(errormessage))
                {
                    return errormessage;
                }
               #endregion

                if (string.IsNullOrEmpty(req.ClientCountryId))
                {
                    errormessage = "Data Error , ClientCountryId is Null / Empty";
                }
                
                if (req.AgentDetails.AgentType.ToString().ToUpper().Trim() == "INTERNAL" && string.IsNullOrEmpty(req.Vendor))
                {
                    errormessage = "Data Error , Vendor is required";
                }
                if (string.IsNullOrEmpty(req.Destination))
                {
                    errormessage = "Data Error , invalid destination ";
                }
                if (string.IsNullOrEmpty(req.CheckIn) || !req.CheckIn.Contains('-'))
                {
                    errormessage = "Data Error ,invalid  CheckIn  dateformat";
                }
                if (int.Parse(req.CheckIn.Split('-')[1]) > 12 || int.Parse(req.CheckIn.Split('-')[0]) > 31 ||
                    req.CheckIn.Split('-')[2].Length != 4)
                {
                    errormessage = "Data Error ,  invalid CheckIn  dateformat";
                }
                if (string.IsNullOrEmpty(req.CheckOut))
                {
                    errormessage = "Data Error ,invalid CheckOut  dateformat";
                }
                if (int.Parse(req.CheckOut.Split('-')[1]) > 12 || int.Parse(req.CheckOut.Split('-')[0]) > 31 ||
                    req.CheckOut.Split('-')[2].Length != 4)
                {
                    errormessage = "Data Error ,invalid  CheckOut  dateformat";
                }
                if (req.Rooms == null)
                {
                    errormessage = "Data Error , Rooms detials required";
                }
                if (req.Rooms == null)
                {
                    errormessage = "Data Error , Rooms detials required";
                }
                foreach (var room in req.Rooms)
                {
                    if (room.AD == 0)
                    {
                        errormessage = "Data Error , Adult Count required";
                    }
                }
            }
            else
            {
                errormessage = "please check json format";
            }
            return errormessage;
        }
        #endregion

        #region Reserve Validation
        public string ValidateReserve(ReserveHotelRQ req)
        {
            if (req != null)
            {
                #region Agent Validation
                errormessage=ValidateAgentDetails(req.AgentDetails);
                if (!string.IsNullOrEmpty(errormessage))
                {
                    return errormessage;
                }
                #endregion

                if (string.IsNullOrEmpty(req.ClientCountryId))
                {
                    errormessage = "Data Error , ClientCountryId is Null / Empty";
                }
                
                if (string.IsNullOrEmpty(req.Vendor))
                {
                    errormessage = "Data Error , Vendor is required";
                }
                if (string.IsNullOrEmpty(req.Destination))
                {
                    errormessage = "Data Error , invalid destination is required";
                }
                if (string.IsNullOrEmpty(req.CheckIn) || !req.CheckIn.Contains('-'))
                {
                    errormessage = "Data Error , CheckIn invalid dateformat";
                }
                if (int.Parse(req.CheckIn.Split('-')[1]) > 12 || int.Parse(req.CheckIn.Split('-')[0]) > 31 ||
                    req.CheckIn.Split('-')[2].Length != 4)
                {
                    errormessage = "Data Error , CheckIn invalid dateformat";
                }
                if (string.IsNullOrEmpty(req.CheckOut))
                {
                    errormessage = "Data Error , CheckOut invalid dateformat";
                }
                if (int.Parse(req.CheckOut.Split('-')[1]) > 12 || int.Parse(req.CheckOut.Split('-')[0]) > 31 ||
                    req.CheckOut.Split('-')[2].Length != 4)
                {
                    errormessage = "Data Error , CheckOut invalid dateformat";
                }
                if (req.PaxCounts == null)
                {
                    errormessage = "Data Error , RoomGroup detials required";
                }
                if (string.IsNullOrEmpty(req.HotelCode))
                {
                    errormessage = "Data Error ,Hotel code is required";
                }

                foreach (var room in req.PaxCounts)
                {
#pragma warning disable CS0472 // The result of the expression is always 'false' since a value of type 'int' is never equal to 'null' of type 'int?'
                    if (room.AD == null)
#pragma warning restore CS0472 // The result of the expression is always 'false' since a value of type 'int' is never equal to 'null' of type 'int?'
                    {
                        errormessage = "Data Error , Guest detials required";
                    }
#pragma warning disable CS0472 // The result of the expression is always 'false' since a value of type 'int' is never equal to 'null' of type 'int?'
                    if (room.CH == null)
#pragma warning restore CS0472 // The result of the expression is always 'false' since a value of type 'int' is never equal to 'null' of type 'int?'
                    {
                        errormessage = "Data Error , Guest detials required";
                    }
                    if (room.CH > 0)
                    {
                        foreach (var child in room.CHAge)
                        {
#pragma warning disable CS0472 // The result of the expression is always 'false' since a value of type 'int' is never equal to 'null' of type 'int?'
                            if (child == null)
#pragma warning restore CS0472 // The result of the expression is always 'false' since a value of type 'int' is never equal to 'null' of type 'int?'
                            {
                                errormessage = "Data Error , Child age is missing";
                            }
                            if (child == 0)
                            {
                                errormessage = "Data Error , Child age is missing";
                            }

                        }
                    }
                }
            }
            else
            {
                errormessage = "please check xml format";
            }
            return errormessage;
        }
       #endregion

        #region ValidateRoomReq
        /// <summary>
        /// 
        /// </summary>
        /// <param name="AvailableTrips"></param>
        /// <returns></returns>
        public string ValidateRoomReq(RoomRQ RoomSearchRQ)
        {
            string errormessage = string.Empty;
            if (RoomSearchRQ != null)
            {
                #region Agent Validation
                errormessage=ValidateAgentDetails(RoomSearchRQ.AgentDetails);
                if (!string.IsNullOrEmpty(errormessage))
                {
                    return errormessage;
                }
                #endregion

                if (string.IsNullOrEmpty(RoomSearchRQ.ClientCountryId))                                                         //
                {
                    errormessage = "Data Error , ClientCountryId is Null / Empty";
                }

                if (string.IsNullOrEmpty(RoomSearchRQ.Destination))
                {
                    errormessage = "Destination Value Is Empty";
                }
                if (string.IsNullOrEmpty(RoomSearchRQ.CheckIn))
                {
                    errormessage = "Invalid  Date of CheckIn / Value Is Empty";
                }
                if (string.IsNullOrEmpty(RoomSearchRQ.Supplier))
                {
                    errormessage = "Supplier Id Value Is Empty";
                }
                if (string.IsNullOrEmpty(RoomSearchRQ.HotelCode))
                {
                    errormessage = "Hotel Code Value Is Empty";
                }
                if (string.IsNullOrEmpty(RoomSearchRQ.HotelChain))
                {
                    errormessage = "Hotel Chain Value Is Empty";
                }
                if (string.IsNullOrEmpty(RoomSearchRQ.RateSupplier))
                {
                    errormessage = "Rate Supplier Value Is Empty";
                }
                foreach (var room in RoomSearchRQ.Room)
                {
                    if (room == null)
                    {
                        errormessage = "Data Error , Guest detials required";
                    }
                }
            }
            else
            {
                errormessage = "Your Are Calling This Post Method With Empty Request Body! HotelSearchRQ Object Is Empty/Null.";
            }
            return errormessage;
        }
        #endregion

        #region Booking Validation
        public string ValBookRQ(ConfirmHotelRQ ConfirmRQ)
        {
            errormessage = string.Empty;
            if (ConfirmRQ != null)
            {
                #region Agent Validation
                errormessage = ValidateAgentDetails(ConfirmRQ.Agent);
                if (!string.IsNullOrEmpty(errormessage))
                {
                    return errormessage;
                }
                #endregion
                if (string.IsNullOrEmpty(ConfirmRQ.ClientCountryId))
                {
                    return errormessage = "ClientCountryId Value Is Null / Empty";
                }

                if (string.IsNullOrEmpty(ConfirmRQ.HotelCode))
                {
                    return errormessage = "HotelCode Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.TraceId))
                {
                    errormessage = "TraceId Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.HotelId))
                {
                    return errormessage = "HotelId Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.HotelChain))
                {
                    return errormessage = "HotelChain Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.Vendor))
                {
                    return errormessage = "Vendor Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.Destination))
                {
                    return errormessage = "Destination Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.CheckIn))
                {
                    return errormessage = "CheckIn Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.CheckOut))
                {
                    return errormessage = "CheckOut Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.SupplierId))
                {
                    return errormessage = "SupplierId Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.SupplierCurrency))
                {
                    return errormessage = "SupplierCurrency Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.BookingCurrency))
                {
                    return errormessage = "BookingCurrency Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.BranchCurrency))
                {
                    return errormessage = "BranchCurrency Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.LoginUserName))
                {
                    return errormessage = "LoginUserName Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.MarkUpAmount))
                {
                    ConfirmRQ.MarkUpAmount = "0";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.PromoText))
                {
                    return errormessage = "PromoText Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.HotelAddress))
                {
                    return errormessage = "HotelAddress Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.HotelCity))
                {
                    return errormessage = "HotelCity Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.HotelLatitude))
                {
                    return errormessage = "HotelLatitude Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.HotelLongitude))
                {
                    return errormessage = "HotelLongitude Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.Commission))
                {
                    ConfirmRQ.Commission = "0";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.EXTRAMarkUpAmt))
                {
                    ConfirmRQ.EXTRAMarkUpAmt = "0";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.RoomTypeCode))
                {
                    return errormessage = "RoomTypeCode Value Is Empty";
                }
                if (string.IsNullOrEmpty(ConfirmRQ.allocationDetails))
                {
                    return errormessage = "allocationDetails Value Is Empty";
                }
            }
            else
            {
                errormessage = "Your Are Calling This Post Method With Empty Request Body! ConfirmRQ  Object Is Empty/Null.";
            }
            return errormessage;
        }
        #endregion

        #region View PNR Validation
        public string ValidateReserve(PNRViewStatusRQ pnrRQ)
        {
            errormessage = ValidateAgentDetails(pnrRQ.AgentDetails);
            if (!string.IsNullOrEmpty(errormessage))
            {
                return errormessage;
            }

            if (string.IsNullOrEmpty(pnrRQ.WPNR))
            {
                errormessage = "WPNR Value Is Null / Empty";
            }
            if (string.IsNullOrEmpty(pnrRQ.HotelPNR))
            {
                if (pnrRQ.HotelPNR == null)
                {
                    pnrRQ.HotelPNR = "";
                }
            }
            return errormessage;
        }
        #endregion

        #region Cancel Validation
        public string ValCancelRQ(CancellationRQ CancelRQ)
        {
            errormessage = string.Empty;
            if (CancelRQ != null)
            {
                #region Agent Validation
                errormessage = ValidateAgentDetails(CancelRQ.AgentDetails);
                if (!string.IsNullOrEmpty(errormessage))
                {
                    return errormessage;
                }
                #endregion

                if (string.IsNullOrEmpty(CancelRQ.ConfirmNumber))
                {
                    errormessage = "ConfirmNumber Value Is Empty / Null";
                }
                if (string.IsNullOrEmpty(CancelRQ.Currency))
                {
                    errormessage = "Currency Value Is Empty / Null";
                }
                if (string.IsNullOrEmpty(CancelRQ.CancellationReason))
                {
                    errormessage = "CancellationReason Value Is Empty / Null";
                }
                if (string.IsNullOrEmpty(CancelRQ.Supplier))
                {
                    errormessage = "Supplier Value Is Empty / Null";
                }
                if (string.IsNullOrEmpty(CancelRQ.WPNR))
                {
                    errormessage = "WPNR Value Is Empty / Null";
                }
            }
            return errormessage;

        }
        #endregion

        #region Agent Details Validation
        public static string ValidateAgentDetails(AgentDetails AgentDt)
        {
            string errormessage = string.Empty;

            //Agent Details Validation...
            if (string.IsNullOrEmpty(AgentDt.ApiSecret))
            {
                errormessage = "Api Secret Value Is Empty";
                return errormessage;
            }
            if (string.IsNullOrEmpty(AgentDt.ApiKey))
            {
                errormessage = "Api Key Value Is Empty";
                return errormessage;
            }
            else
            {
                string ApiKey = ConfigurationManager.AppSettings["SECURITY_KEY_FORMAT"].ToString().Trim();
                if (!Regex.IsMatch(AgentDt.ApiKey.ToString().Trim(), ApiKey))
                {
                    errormessage = "API key is not valid";
                    return errormessage;
                }
            }

            if (string.IsNullOrEmpty(AgentDt.BranchID))
            {
                errormessage = "Branch ID Value Is Empty";
                return errormessage;
            }
            if (string.IsNullOrEmpty(AgentDt.AgentID))
            {
                errormessage = "AgentId Value Is Empty";
                return errormessage;
            }
            if (string.IsNullOrEmpty(AgentDt.TerminalID))
            {
                errormessage = "Terminal Id Value Is Empty";
                return errormessage;
            }
            if (string.IsNullOrEmpty(AgentDt.SequenceID))
            {
                errormessage = "Sequence Id Value Is Empty";
                return errormessage;
            }
            else
            {
                try
                {
                    int SequenceID = Convert.ToInt32(AgentDt.SequenceID);
                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                {
                    errormessage = "Sequence Id Value Is Empty";
                    return errormessage;
                }
            }
            if (string.IsNullOrEmpty(AgentDt.AgentType))
            {
                errormessage = "AgentType Value Is Empty";
                return errormessage;
            }
            if (string.IsNullOrEmpty(AgentDt.AppType))
            {
                errormessage = "AppType Value Is Empty";
                return errormessage;
            }
            if (string.IsNullOrEmpty(AgentDt.LoginReference))
            {
                errormessage = "Login Reference key Is Empty";
                return errormessage;
            }
            else
            {
                try
                {
                    AgentDt.LoginReference = Decrypt(AgentDt.LoginReference);
                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch (Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                {
                    errormessage = "Login Reference key Is InValid";
                    return errormessage;
                }
            }

            if (string.IsNullOrEmpty(AgentDt.TerminalType))
            {
                errormessage = "Terminal Type Is Empty";
                return errormessage;
            }

            if (string.IsNullOrEmpty(AgentDt.UserName))
            {
                errormessage = "User Name Is Empty";
                return errormessage;
            }
            if (string.IsNullOrEmpty(AgentDt.CurrencyCode))
            {
                errormessage = "CurrencyCode Is Null / Empty";
                return errormessage;
            }
            #region Validate User is Valid Or Invalid

            string DBErrorMsg = string.Empty;
            bool FetchSupplierResult = DBAccess.Check_API_User_Valid(AgentDt, ref DBErrorMsg);

            if (!FetchSupplierResult)
            {
                errormessage = "User is Invalid.Please contact customer care.";
                return errormessage;
            }

            #endregion

            return errormessage;
        }
        #endregion

         #region Decrypt
        public static string Decrypt(string message)
        {
            message = HttpUtility.UrlDecode(message);
            byte[] results;
            var passphrase = "WEBAXYZ";// Get("PassPhrase");
            var utf8 = new System.Text.UTF8Encoding();
            var hashProvider = new MD5CryptoServiceProvider();
            var tdesKey = hashProvider.ComputeHash(utf8.GetBytes(passphrase));
            var tdesAlgorithm = new TripleDESCryptoServiceProvider();
            tdesAlgorithm.Key = tdesKey;
            tdesAlgorithm.Mode = CipherMode.ECB;
            tdesAlgorithm.Padding = PaddingMode.PKCS7;
            byte[] dataToDecrypt;
            try
            {
                dataToDecrypt = Convert.FromBase64String(message);
            }
            catch (Exception)
            {
                dataToDecrypt = Convert.FromBase64String(message.Replace(" ", "+"));
            }
            try
            {
                var Decryptor = tdesAlgorithm.CreateDecryptor();
                results = Decryptor.TransformFinalBlock(dataToDecrypt, 0, dataToDecrypt.Length);
            }
            finally
            {
                tdesAlgorithm.Clear();
                hashProvider.Clear();
            }
            var str = utf8.GetString(results);
            return str;
        }

        #endregion

    }
    #endregion
}