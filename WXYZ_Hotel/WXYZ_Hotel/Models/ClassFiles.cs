using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WXYZ_Hotel.Models
{
    #region SEARCH REQ & RES
    public class HotelSearchRQ
    {
        public AgentDetails AgentDetails { get; set; }
        public string Vendor { get; set; }
        public string Destination { get; set; }
        public string CheckIn { get; set; }
        public string CheckOut { get; set; }
        public List<SearchRoom> Rooms { get; set; }
        //public string Currency { get; set; }
        public string ClientCountryId { get; set; }
        public string countryCode { get; set; }
    }
    public class HTLSearchRS
    {
        public string StatusCode { get; set; }
        public string Error { get; set; }
        public List<HotelDetails> Hotels { get; set; }
        // public int SearchId { get; set; }
        public string response { get; set; }
        public string ClientCountryId { get; set; }
    }
    public class HotelDetails
    {
        //public string SearchID { get; set; }                       
        public string HotelID { get; set; }
        public string TraceID { get; set; }
        public string HotelChain { get; set; }
        public string HotelKey { get; set; }
        public string GHotelId { get; set; }
        public string HotelName { get; set; }
        public string NoOfRooms { get; set; }
        public string FullAddress { get; set; }
        public string Lat { get; set; }
        public string Lng { get; set; }
        public string ImgUrl { get; set; }
        public string HotelPhone { get; set; }
        public string Rating { get; set; }
        public string MapLink { get; set; }
        public string Description { get; set; }
        public List<HotelImage> HotelImages { get; set; }
        public List<Amenitie> Amenities { get; set; }
        public List<RoomRS> Room { get; set; }
        public string Location { get; set; }
        public string Currency { get; set; }
        public string Checkin { get; set; }
        public string CheckOut { get; set; }
        public string Status { get; set; }
        public string Category { get; set; }
        public string StartAmount { get; set; }
        public string Supplier { get; set; }
        public string Supplier_Id { get; set; }
        //public HotelHelper Hlp { get; set; }                       
        public string MarkUpAmt { get; set; }
        public string CommissionAmt { get; set; }
        public string TotalGrossAmount { get; set; }

    }
    public class Amenitie
    {
        public string ID { get; set; }
        public string Name { get; set; }
    }
    public class HotelCachedRS
    {
        //public int SearchID { get; set; }                          
        public int CacheID { get; set; }
        public bool IsFinished { get; set; }
        public List<string> response { get; set; }
    }
    #endregion

    #region ROOM REQ & RES
    public class RoomRQ
    {
        public AgentDetails AgentDetails { get; set; }
        public string Destination { get; set; }
        public string CheckIn { get; set; }
        public string CheckOut { get; set; }
        public string Supplier { get; set; }
        public string SupplierId { get; set; }
        public string HotelCode { get; set; }
        public string HotelChain { get; set; }
        public string RateSupplier { get; set; }
        public List<SearchRoom> Room { get; set; }
        public string ClientCountryId { get; set; }                                                        //
        public string TraceId { get; set; }
    }
    public class SearchRoom
    {
        public int AD { get; set; }
        public int CH { get; set; }
        public List<int> CHAge { get; set; }
    }
    public class UAPIRoomRS
    {
        //public RoomRQ RoomRQ { get; set; }
        public string ErrorMsg { get; set; }
        public string StatusCode { get; set; }
        public StayRS StayRS { get; set; }
    }
    public class StayRS
    {
        public string Status { get; set; }
        public List<RoomRS> Rooms { get; set; }
        public List<Review> Review { get; set; }
        public string Error { get; set; }
    }
   
    public class RoomRS
    {
        public string TraceID { get; set; }
        public string Supplier { get; set; }
        public string Supplier_Id { get; set; }
        public string HotelID { get; set; }
        public string RoomId { get; set; }
        public string RoomName { get; set; }
        public string Roomtypecode { get; set; }
        public string RoomPaxCapacity { get; set; }
        public string AllocationDetails { get; set; }
        public string BaseAmount { get; set; }
        public string MarkUp { get; set; }
        public string Commission { get; set; }
        public string TotalGrossAmount { get; set; }
        public string Currency { get; set; }
        public string CancellationPolicy { get; set; }
        public string SpecialRequest { get; set; }
        public string SpecialOffer { get; set; }
        public string TariffNotes { get; set; }
        public string RateBasic { get; set; }
        public string SuppBaseAmount { get; set; }
        public string TotalAmount { get; set; }
        public string TaxAmount { get; set; }
        public string Inclusion { get; set; }
        public string Status { get; set; }
        public CancellationPolicy HBCancellationPolicy { get; set; }
        public string RoomCount { get; set; }
        public string AdultCount { get; set; }
        public string ChildCount { get; set; }
        public string CancellationDeadLine { get; set; }

    }

    public class CancellationPolicy
    {
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public string ChargeAmount { get; set; }
    }

    public class Review
    {
        public string Comment { get; set; }
        public string Date { get; set; }
        public string CommentID { get; set; }

    }
    #endregion

    #region BOOKING REQ & RES
    public class ConfirmHotelRQ
    {
        public AgentDetails Agent { get; set; }
        public string HotelCode { get; set; }
        public string TraceId { get; set; }
        public string HotelId { get; set; }
        public string HotelChain { get; set; }
        public string Vendor { get; set; }
        public string Destination { get; set; }
        public string CheckIn { get; set; }
        public string CheckOut { get; set; }
        public string ReservationId { get; set; }
        public string SPNR { get; set; }
        public string ClientNationality { get; set; }
        public string Nationality { get; set; }
        public string Residence { get; set; }
        public string LoginUser { get; set; }
        public string HotelName { get; set; }
        public string SupplierBookingMode { get; set; }
        public string SupplierId { get; set; }
        public decimal SupplierAmount { get; set; }
        public string SupplierCurrency { get; set; }
        public string BookingCurrency { get; set; }
        public string BranchCurrency { get; set; }
        public string LoginUserName { get; set; }
        public string MarkUpType { get; set; }
        public string MarkUpAmount { get; set; }
        public string PromoText { get; set; }
        public decimal TotalAmount { get; set; }
        public string PaySupplier { get; set; }
        public string HotelAddress { get; set; }
        public string HotelCity { get; set; }
        public string HotelZipCode { get; set; }
        public string HotelContactNo { get; set; }
        public string HotelRating { get; set; }
        public string HotelLatitude { get; set; }
        public string HotelLongitude { get; set; }
        public int NoOfNights { get; set; }
        public string HotelComment { get; set; }
        public string SupplierRemark { get; set; }
        public string PaymentMode { get; set; }
        public string PaymentCountry { get; set; }
        public string SessionID { get; set; }
        public string RateBasis { get; set; }
        public string RoomTypeName { get; set; }
        public string allocationDetails { get; set; }
        public List<RoomsType> RoomsTypes { get; set; }
        public string BoardType { get; set; }
        public List<SearchRoom> SearchRoom { get; set; }
        public List<PaxCount> PaxCounts { get; set; }
        public string RoomTypeCode { get; set; }
        public string CityName { get; set; }
        public string RatePlanCode { get; set; }
        public int TotalAdults { get; set; }
        public int TotalChildren { get; set; }
        public string IPAddress { get; set; }
        //public string BookingEmail { get; set; }
        public bool IsHold { get; set; }
        public string EXTRAMarkUpAmt { get; set; }
        public string Commission { get; set; }
        public List<ContactDetails> ContactDetails { get; set; }
        public string ClientCountryId { get; set; }
        /*public string PGCharges { get; set; }                    
        public string AmountAfterTax { get; set; }                 
        public string CurrencyCode { get; set; }                   
        public string InvoiceThrough { get; set; }                 
        public string IsDepositeRequired { get; set; }             
        public string BaseCurrencyCode { get; set; }               
        public string BranchCurrencyCode { get; set; }             
        public string CancellationDate { get; set; }               
        public string BookingPolicy { get; set; }                  
        public string HotelPolicy { get; set; }                    
        public string CancellationPolicy { get; set; }             
        public string BranchCode { get; set; }                     
        public string BranchCurrencyCode { get; set; }             
        public bool IsHold { get; set; }                           
        public string CustomerID { get; set; }                     
        public int TotalRooms { get; set; }                        
        public string InvoiceNo { get; set; }                      
        public string RoomReference { get; set; }                  
        public string PhoneNo { get; set; }                        
        public string TimeZone { get; set; }  */
    }

    public class ContactDetails
    {
        public string ContactNo { get; set; }
        public string EmailID { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Pincode { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
    }
    public class RoomsType
    {
        public int AdultCount { get; set; }
        public int ChildCount { get; set; }
        //public int[] CHAge { get; set; }                         
        public string AllocationDetails { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal BaseAmount { get; set; }
        public string BoardType { get; set; }
        public string BoardTypeCode { get; set; }
        public string CancellationPolicy { get; set; }
        public string Currency { get; set; }
        public string RatePlanCode { get; set; }
        public string RoomId { get; set; }
        public string RoomType { get; set; }
        public string RoomTypeCode { get; set; }
        public string Supplier { get; set; }
        public string VendorId { get; set; }
        public string RoomCount { get; set; }
        public string SequenceNumber { get; set; }
    }
    public class PaxCount
    {
        public List<Guest> Guest { get; set; }
        public int AD { get; set; }       //reserve method         
        public int CH { get; set; }       //reserve method         
        public int[] CHAge { get; set; }  //reserve method         
    }
    public class Guest
    {
        public string type { get; set; }
        public string title { get; set; }
        public string age { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string DOB { get; set; }
    }
    public class BookingRS
    {
        public string StatusCode { get; set; }
        //public string BookingRef { get; set; }                   
        public string ErrorMsg { get; set; }
        public string ConfirmationRef { get; set; }
        public string BookingStatus { get; set; }
        public string Supplier { get; set; }
        public string ClientCountryId { get; set; }
        public string Result { get; set; }
        

    }

    #endregion

    #region AgentDetails
    public class AgentDetails
    {
        public string ApiKey { get; set; }
        public string ApiSecret { get; set; }
        public string AgentType { get; set; }
        public string AppType { get; set; }
        public string BranchID { get; set; }
        public string AgentID { get; set; }
        public string TerminalID { get; set; }
        public string UserName { get; set; }
        public string SequenceID { get; set; }
        public string IPAddress { get; set; }
        public string LoginReference { get; set; }
        public string TerminalType { get; set; }
        public string CurrencyCode { get; set; }
    }
    #endregion

    #region HotelDetails 
    public class HotelImage
    {
        public string Alt { get; set; }
        public string Url { get; set; }
    }
    public class HotelDetailsRQ
    {
        public AgentDetails AgentDetails { get; set; }
        public string Vendor { get; set; }
        public string SupplierId { get; set; }
        public string HotelCode { get; set; }
    }
    public class HotelDetailsRS
    {
        public string Error { get; set; }
        public string StatusCode { get; set; }
        public HotelDetails HotelDetails { get; set; }
    }
    #endregion

    #region Hotel Reserve 
    public class ReserveHotelRQ
    {
        public AgentDetails AgentDetails { get; set; }
        public string Vendor { get; set; }
        public string TraceID { get; set; }
        public string HotelCode { get; set; }
        public string AgencyCode { get; set; }
        public string Destination { get; set; }
        public string CheckIn { get; set; }
        public string CheckOut { get; set; }
        public string CurrencyValue { get; set; }
        public string BranchCurrency { get; set; }
        public List<RoomGroup> RoomGroup { get; set; }
        public List<PaxCount> PaxCounts { get; set; }
        public string RateBasis { get; set; }
        public string roomTypeCode { get; set; }
        public string allocationDetails { get; set; }
        public string Nationality { get; set; }
        //public string Currency { get; set; }
        public string SupplierId { get; set; }
        public string TotalBaseAmount { get; set; }
        public string TotalGrossAmount { get; set; }
        public string ClientCountryId { get; set; }
    }
    public class ReserveHotelRS
    {
        public string StatusCode { get; set; }
        public string Status { get; set; }
        public string Error { get; set; }
        public string Vendor { get; set; }
        public string Supplier { get; set; }
        public string TraceID { get; set; }
        public string ReservationId { get; set; }
        public string CancellationPolicy { get; set; }
        public string CancellationStatus { get; set; }
        public string HotelComment { get; set; }
        public string MarkUpAmt { get; set; }
        public string CommissionAmt { get; set; }
        public string TotalSupplierAmount { get; set; }
        public string TotalPrice { get; set; }
        public string ClientCountryId { get; set; }
    }
    #endregion

    #region Hotel Cancellation
    public class CancellationRQ
    {
        public AgentDetails AgentDetails { get; set; }
        public string ConfirmNumber { get; set; }
        public string Currency { get; set; }
        public string CancellationReason { get; set; }
        public string Supplier { get; set; }
        public string WPNR { get; set; }

    }
    public class CancellationRS
    {
        public string ErrorMsg { get; set; }
        public string ResultCode { get; set; }
        public string Status { get; set; }
        public string CancelStatus { get; set; }
        public string CancellationId { get; set; }
        public string PenaltyApplied { get; set; }
        public string PenaltyCurrency { get; set; }
    }
    public class CancelPoilcy
    {
        public string Time { get; set; }
        public string Date { get; set; }
        public string Text { get; set; }
    }
    #endregion

    #region PNR View Method

    #region PNR View Request
    public class PNRViewStatusRQ
    {
        public AgentDetails AgentDetails { get; set; }
        public string WPNR { get; set; }
        public string HotelPNR { get; set; }
    }
    #endregion

    #region PNR View Response
    public class PNRViewStatusRS
    {
        public string ResultCode { get; set; }
        public string ErrorMsg { get; set; }
        public string Result { get; set; }
        public string TicketStatus { get; set; }
    }
    #endregion

    #endregion

    public class HotelSearchRS
    {
        public int SearchId { get; set; }
        public string CheckIn { get; set; }
        public string CheckOut { get; set; }
        public string Destination { get; set; }
        public bool status { get; set; }
        public string errormsg { get; set; }
        public string Response { get; set; }

    }
    public class ConfirmHotelRS
    {
        public string SPNR { get; set; }
        public bool Status { get; set; }
        public string TrackId { get; set; }
        public string Seq { get; set; }
        public List<BookingRS> BookingRS { get; set; }
        public string ErrorMsg { get; set; }


    }
    public class RoomGroup
    {
        //public string Amount { get; set; }                       
        public string oldBaseAmt { get; set; }
        public string oldTotalAmt { get; set; }
        public string oldMarkup { get; set; }
        public string oldCommission { get; set; }
        public string BoardType { get; set; }
        public string BoardTypeCode { get; set; }
        public string RoomTypeCode { get; set; }
        public string RatePlanCode { get; set; }
        public string AllocationDetails { get; set; }
    }
    public class Room
    {
        public List<Guest> Guest { get; set; }

        public string NightRateTotal { get; set; }

        public string SurchargeTotal { get; set; }

        public string Age { get; set; }

        public string Total { get; set; }

        public string BasePrice { get; set; }

        //public decimal UserMarkUp { get; set; }

        //public decimal CancellationAmount { get; set; }          

        //public string SupplierPolicy { get; set; }               

        //public string TMPolicy { get; set; }
    }
    public class GuestInformations
    {
        public List<Guests> Guest { get; set; }

        //public string FirstName { get; set; }

        //public string MiddleName { get; set; }

        //public string LastName { get; set; }

        //public string Email { get; set; }

        //public PhoneNumber PhoneNumber { get; set; }

        //public Address Address { get; set; }

        //public string UserPhone { get; set; }                    

        //public string UserAddress { get; set; }

    }
    public class Guests
    {

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public PhoneNumber PhoneNumber { get; set; }

        public Address Address { get; set; }

        public string UserPhone { get; set; }

        public string UserAddress { get; set; }

    }
    public class PhoneNumber
    {
        public string CountryCode { get; set; }

        public string AreaCode { get; set; }

        public string Extension { get; set; }

        public string Text { get; set; }
    }
    public class Address
    {
        public string City { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public string ZipCode { get; set; }

        public string Text { get; set; }
    }
    public class GuestInformation
    {

        public string FirstName { get; set; }

        public string MiddleName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public PhoneNumber PhoneNumber { get; set; }

        public Address Address { get; set; }

        public string UserPhone { get; set; }

        public string UserAddress { get; set; }

    }
    public class Payments
    {
        public string Card { get; set; }

        public string PaymentType { get; set; }
    }
    public class CreditCard
    {
        public string CardPType { get; set; }
        public string CardType { get; set; }
        public string CardNumber { get; set; }
        public string CardHolderName { get; set; }
        public string CardExpirationMonth { get; set; }
        public string CardExpirationYear { get; set; }
        public string CardIdentifier { get; set; }
        public string CountryCode { get; set; }
        public string StateCode { get; set; }
        public string AddressName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string BankName { get; set; }

    }

}