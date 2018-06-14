var Amenities_Flag = [];
var StarRating_Flag = [];
var UserRating_Flag = [];
var HotelName_Falg = [];
var AreaName_Flag = [];
var PostelCode_Flag = [];

var New_Amenities_Flag = [];
var New_StarRating_Flag = [];
var New_UserRating_Flag = [];
var New_HotelName_Falg = [];
var New_AreaName_Flag = [];
var New_PostelCode_Flag = [];

var MinPriceFlag = [];
var MaxPriceFlag = [];

var LstRoom = [];
var ArrayAmenities = [];
var hotelRS = [];
var RmResult = [];
var GuestReviews = [];
var HBRoomResult = [];
var RoomDetails = [];

var iRes_AdultCount = 0;
var iRes_ChildCount = 0;
var iRes_ChildAge = 0;
var Adult = "";
var Child = "";
var CheckIn = "";
var CheckOut = "";
var Nights = "";
var nights = "";
var HotelID = "";
var roomcount = "";
var City = "";
var HtlSuppliers = "";
var printarray = [];
var CountryId = "";
var AvailResponse = "";
var HotelDetails = "";

var HotelavailStartIndex = 0;
var HotelavailEndIndex = 20;
var htlcityxml = "";
var CurCode = "";
$(document).ready(function () {

    //START BACK DATA 
    if ($('#hdnhtlAvailrs').val() != "") {

        HotelDetails = JSON.parse($('#hdnhtlAvailrs').val());

        //START MODEFY PANEL VALUES
        city = $('#lblcityname').html(HotelDetails.City);
        checkin = $('#lblcheckin').html(HotelDetails.CheckIn);
        checkout = $('#lblcheckout').html(HotelDetails.CheckOut);
        Nights = $('#lblnoofnights').html(HotelDetails.Nights);
        var Rooms = $('#lblrooms').html(HotelDetails.Rooms);
        Adult = $('#lbladult').html(HotelDetails.Adult);
        Child = $('#lblchild').html(HotelDetails.Child);
        //END MODEFY PANEL VALUES

        roomcount = HotelDetails.Rooms;
        City = HotelDetails.City;
        nights = HotelDetails.Nights
        CheckIn = HotelDetails.CheckIn;
        CheckOut = HotelDetails.CheckOut;
        Adult = HotelDetails.Adult;
        Child = HotelDetails.Child;
        AvailResponse = HotelDetails.AvailResponse;
        nights = HotelDetails.Nights;
        iRes_ChildCount = HotelDetails.Child;
        iRes_AdultCount = HotelDetails.Adult;

        var AvRS = JSON.parse(HotelDetails.AvailResponse)
        if (AvRS != null) {
            //hotelRS = [];
            $('.filter_panel').removeClass('none');
            $('.sorting_pannel').removeClass('none');
            $('#Hotel_Result').removeClass('none');
            $('#htlmodify').hide("500");
            $('#li_HotelSearch').removeClass('process-bar__item--is-colored process-bar__item--has-animation').addClass('process-bar__item--is-filled');
            $('#li_Availability').addClass('process-bar__item--is-colored process-bar__item--has-animation');
            hotelRS = $.merge(hotelRS, AvRS)
            hotelRS.sort(function (a, b) { return a.StAmt - b.StAmt });
            HotelavailEndIndex = hotelRS.length < 20 ? hotelRS.length : HotelavailEndIndex;
            Bind_HotelResult(hotelRS);
            Filter_Bind();
            return false;
        }
    }
    //END BACK DATA 

    var Currency = $('#hdncurrency').val();
    HtlSuppliers = $('#hdnhtlSuppliers').val();
    htlcityxml = JSON.parse($("#hdnhtlcityxml").val());
    //START MODIFY PANEL TOGGLE
    $("#btn_htlmodify").click(function () {
        $("#htlmodify").slideToggle("slow");
        var status = $(this).attr('status');
        if (status == "close") {
            $(this).attr('status', 'open');
        }
        else {
            $(this).attr('status', 'close');
        }
    });
    //END MODIFY PANEL TOGGLE

    $('#btn_Htl_Search').click(function () {
        HotelavailStartIndex = 0;
        HotelavailEndIndex = 20;

        $('#txtHtlName').val('');
        $('#txtAreaName').val('');
        $('#txtPostelCode').val('');
        $('#htlslider').find('.price-range-min').remove();
        $('#htlslider').find('.price-range-max').remove();
        $('.filter_panel').addClass('none');
        $('.sorting_pannel').addClass('none');

        StarRating_Flag = [];
        UserRating_Flag = [];
        Amenities_Flag = [];

        // STRAT AMENITIES VALIDATION
        if ($('#Hotel_Amenity input[type="checkbox"]:checked').length > 0) {
            $('#Hotel_Amenity input[type="checkbox"]:checked').each(function () {
                Amenities_Flag.push($(this).attr('id'));
            });
        }
        else {
            toasts.showError('Please choose atlease one of these Amenities Filteration');
            $('#Hotel_Amenity').find('input[type="checkbox"]').each(function () {
                $(this).prop('checked', 'true');
            });
            return false;
        }
        //STRAT STAR RATING VALIDATION        
        $('.htr-strrat li').each(function () {
            if ($(this).hasClass('active')) {
                StarRating_Flag.push($(this).attr('id'));
            }
        });

        if (StarRating_Flag.length == 0) {
            toasts.showError("Please choose atlease one of these Star Rating")
            $('.htr-strrat li').each(function () {
                $(this).addClass('active')
                StarRating_Flag.push($(this).attr('id'));
            });
            return false;
        }

        //STRAT USER RATING VALIDATION
        $('.htl-userrat li').each(function () {
            if ($(this).hasClass('active')) {
                UserRating_Flag.push($(this).attr('id'));
            }
        });

        if (UserRating_Flag.length == 0) {
            toasts.showError("Please choose atlease one of these User Rating")
            $('.htl-userrat li').each(function () {
                $(this).addClass('active')
                UserRating_Flag.push($(this).attr('id'));
            });
            return false;
        }

        hotelRS = [];
        LstRoom = [];
        New_MinPriceFlag = [];
        New_MaxPriceFlag = [];
        New_HotelName_Falg = [];
        New_AreaName_Flag = [];
        New_PostelCode_Flag = [];
        //New_Amenities_Flag = [];
        New_StarRating_Flag = [];
        New_UserRating_Flag = [];

        roomcount = $("#lblroomcount").html();
        var i = 1;
        var adult = "";
        var child = "";
        var Cage = [];

        for (i; i <= roomcount; i++) {
            var childage = [];
            if (i == roomcount) {
                var j = 1;
                adult += $('#ddlhtlAdult_R' + i + ' option:selected').val();
                child += $('#ddlhtlChild_R' + i + ' option:selected').val();
                for (j; j <= $('#ddlhtlChild_R' + i + ' option:selected').val() ; j++) {
                    if (j == $('#ddlhtlChild_R' + i + ' option:selected').val()) {
                        childage.push($('#ddlhtlChild_Age_R' + i + j + ' option:selected').val());
                    }
                    else {
                        childage.push($('#ddlhtlChild_Age_R' + i + j + ' option:selected').val());
                    }
                }
                Cage.push(childage);
            }

            else {
                var j = 1;
                adult += $('#ddlhtlAdult_R' + i + ' option:selected').val() + ",";
                child += $('#ddlhtlChild_R' + i + ' option:selected').val() + ",";

                for (j; j <= $('#ddlhtlChild_R' + i + ' option:selected').val() ; j++) {
                    if (j == $('#ddlhtlChild_R' + i + ' option:selected').val()) {
                        childage.push($('#ddlhtlChild_Age_R' + i + j + ' option:selected').val());
                    }
                    else {
                        childage.push($('#ddlhtlChild_Age_R' + i + j + ' option:selected').val());
                    }
                }
                Cage.push(childage);
            }
        }
        var iRes_RoomCount = roomcount;
        iRes_AdultCount = 0;
        iRes_ChildCount = 0;
        for (var x = 0; x <= roomcount - 1; x++) {
            iRes_AdultCount += parseInt(adult.split(',')[x]);
            iRes_ChildCount += parseInt(child.split(',')[x]);
            var rooms = {
                //RmCount: x + 1,
                AD: adult.split(',')[x],
                CH: child.split(',')[x],
                CHAge: Cage[x],
            }
            LstRoom.push(rooms);
        }


        var IDs = ["txtHtlCity~Please Enter City, Location...", "txtHtlCheckIn~Please Select CheckIn Date...", "txtHtlCheckOut~Please Select CheckOut Date..."];
        var ErrorFlag = false;
        $.each(IDs, function (Key, Val) {
            Val = Val.split('~');
            if (!$("#" + Val[0]).val()) {
                toasts.showError(Val[1]);
                $("#" + Val[0]).focus();
                ErrorFlag = true;
                return false;
            }
        });
        var hotelCityList = [];

        var HCity = $('#txtHtlCity').val();
        var htlCtyLst = Enumerable.From(htlcityxml.row).Where(function (x) { return x.city == HCity }).ToArray();
        if (htlCtyLst.length > 0) {
            if (HCity == htlCtyLst[0].city) {
                hotelCityList.push(htlCtyLst)
            }
        }
        else {
            toasts.showError("Please Enter Valid City, Location");
            $('#txtHtlCity').focus();
            return false;
        }

        //if ($.inArray(HCity, hotelCityList) != -1) {
        //    hotelCityList.push(HCity);
        //}



        if (ErrorFlag == true)
            return false;
        $.blockUI({
            message: '<img alt="Please Wait..." src="../Images/Login/Loading.gif" id="imgLoader" />',
        });

        //START MODEFY PANEL VALUES
        var City = $('#lblcityname').html($('#txtHtlCity').val());
        var checkin = $('#lblcheckin').html($('#txtHtlCheckIn').val());
        var checkout = $('#lblcheckout').html($('#txtHtlCheckOut').val());
        CheckIn = $('#txtHtlCheckIn').val();
        CheckOut = $('#txtHtlCheckOut').val();
        var start = $("#txtHtlCheckIn").datepicker("getDate");
        var end = $("#txtHtlCheckOut").datepicker("getDate");
        days = (end - start) / (1000 * 60 * 60 * 24);
        nights = Math.round(days);
        var Nights = $('#lblnoofnights').html(nights);
        var Rooms = $('#lblrooms').html(roomcount);
        Adult = $('#lbladult').html(iRes_AdultCount);
        Child = $('#lblchild').html(iRes_ChildCount);
        //END MODEFY PANEL VALUES

        $('#Htlavail').empty();
        var Vendor = HtlSuppliers.split(',');
        var v = 0;
        for (; v < Vendor.length; v++) {
            var param = {
                LOGINREFERENCE: $("#hdnlogdeatails").val(),
                Destination: $('#txtHtlCity').val(),
                CheckIn: $('#txtHtlCheckIn').val(),
                CheckOut: $('#txtHtlCheckOut').val(),
                Rooms: LstRoom,
                Vendor: Vendor[v],
                ClientCountryId: $('#ddlcountryid :selected').val()
            }
            $.ajax({
                type: 'POST',
                url: "/Hotel/GetHotelDetails",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify(param),
                success: function (data) {
                    if (data.StatusCode == "00") {
                        $.unblockUI();
                        toasts.showError(data.ErrorMsg);
                        return false;
                    }
                    else if (data.StatusCode == "06") {
                        window.location.href = $("#hdfSessionExpired").val();
                    }
                    else if (data.StatusCode == "01") {
                        $.unblockUI();
                        CountryId = data.CountryId;
                        AvailResponse = data.AvailResponse;
                        var HotelResult = JSON.parse(data.Result);
                        $('.filter_panel').removeClass('none');
                        $('.sorting_pannel').removeClass('none');
                        $('#Hotel_Result').removeClass('none');
                        $('#htlmodify').hide("500");
                        $('#li_HotelSearch').removeClass('process-bar__item--is-colored process-bar__item--has-animation').addClass('process-bar__item--is-filled');
                        $('#li_Availability').addClass('process-bar__item--is-colored process-bar__item--has-animation');
                        hotelRS = $.merge(hotelRS, HotelResult)
                        hotelRS.sort(function (a, b) { return a.StAmt - b.StAmt });
                        HotelavailEndIndex = hotelRS.length < 20 ? hotelRS.length : HotelavailEndIndex;
                        Bind_HotelResult(hotelRS);
                        Filter_Bind();
                        return false;
                    }
                }
            });
        }
    });

    function Bind_HotelResult(HotelResult) {
        var Result = HotelResult.length;
        City = $('#txtHtlCity').val();
        var CheckIn = $('#txtHtlCheckIn').val();
        var CheckOut = $('#txtHtlCheckOut').val();
        var start = $("#txtHtlCheckIn").datepicker("getDate");
        var end = $("#txtHtlCheckOut").datepicker("getDate");
        days = (end - start) / (1000 * 60 * 60 * 24);
        nights = Math.round(days);
        var i = HotelavailStartIndex;
        for (; i < HotelavailEndIndex; i++) {
            var Amenities = "";
            var AmenitiesId = "";
            var AmenitiesID = [];
            var sb = "";
            if (HotelResult[i].Amty != null) {
                if (HotelResult[i].Amty.length > 0) {
                    for (var a = 0; a < HotelResult[i].Amty.length; a++) {
                        if (a == HotelResult[i].Amty.length) {
                            Amenities += HotelResul[i].Amty[a].Name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase();
                        }
                        else {
                            Amenities += HotelResult[i].Amty[a].Name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase() + ", ";
                        }
                        if ($.inArray(HotelResult[i].Amty[a].Name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase(), ArrayAmenities) == -1)
                            ArrayAmenities.push(HotelResult[i].Amty[a].Name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase());
                    }
                }
                if (HotelResult[i].Amty.length > 0) {
                    for (var a = 0; a < HotelResult[i].Amty.length; a++) {
                        if (a == HotelResult[i].Amty.length) {
                            AmenitiesId += HotelResult[i].Amty[a].ID;
                        }
                        else {
                            AmenitiesId += HotelResult[i].Amty[a].ID + ", ";
                        }
                        if ($.inArray(HotelResult[i].Amty[a].ID, AmenitiesID) == -1)
                            AmenitiesID.push(HotelResult[i].Amty[a].ID);
                    }
                }
            }
            CurCode = HotelResult[i].Cur;
            //START HOTEL AVAILABILITY PANEL 
            sb += " <div class='panel panel-bg main' id='" + HotelResult[i].HId.split("_")[1] + "'>";
            sb += " <div class='htl_box' data-hotelname='" + HotelResult[i].HtlNm + "' data-areaname='" + HotelResult[i].Add + "' data-postalcode='" + HotelResult[i].Add + "' data-price='" + HotelResult[i].StAmt + "' data-hotelrating='" + HotelResult[i].Ratn + "' data-amenities='" + Amenities + "' data-amenitiesid='" + AmenitiesId + "'>";
            //AVAIL PANEL
            sb += " <div class=''>";
            sb += " <div class='htl_details'>";
            sb += " <div class='col-md-12 col-sm-12 col-xs-12 pad-0'>";
            sb += " <div class='col-md-2 col-sm-3 col-xs-12 pad-0 availimg ttip'>";
            var img = HotelResult[i].ImgUrl;
            if (img != "") {
                sb += " <a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "'  href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + HotelResult[i].ImgUrl.split(',')[0] + "' class='htlimg' /></a><div class='ttip-text'><div><p class='supp'>HotelName: " + HotelResult[i].HtlNm.toUpperCase() + "</p><p class='supp'>ProviderName: " + HotelResult[i].Supp.toUpperCase() + "</p></div></div>";
            }
            else {
                sb += " <a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='../Images/HotelImg/download.jpg' class='htlimg' /></a><div class='ttip-text'><div><p>HotelName: " + HotelResult[i].HtlNm.toUpperCase() + "</p><p>ProviderName: " + HotelResult[i].Supp.toUpperCase() + "</p></div></div>";
            }
            sb += " </div>";
            sb += " <div class='col-md-7 col-sm-6 col-xs-12 htldtl'>";
            sb += " <h5 id='hoteldtpopup' class='htlnme HotelName' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'>" + HotelResult[i].HtlNm + "</h5>";            
            if ((HotelResult[i].Add.indexOf('|') != -1)) {
                sb += " <p class='span-htl'>" + HotelResult[i].Add.split('|')[1] + "</p>";
            } else {
                sb += " <p class='span-htl'>" + HotelResult[i].Add + "</p>";
            }
            for (var k = 0; k < HotelResult[i].Ratn; k++) {
                sb += "<div class='strrat'><label for='chk_rating'><img src='../Images/HotelImg/htlicon/htlstrrating.svg' title='Hotel Star rating' /></label><span class='Rating none'>" + HotelResult[i].Ratn + "</span></div>";
            }
            //START AMENITIES          
            sb += " <ul class='htl_ul hicon'>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("68", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/par-1 (2).svg" : "../Images/HotelImg/htlicon/d-p.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>Parking</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("66", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/pool.svg" : "../Images/HotelImg/htlicon/d-pool.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>Pool</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("5", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/Ac.svg" : "../Images/HotelImg/htlicon/d-Ac.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>A/C</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("345", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/gym.svg" : "../Images/HotelImg/htlicon/d-gym.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>Gym</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("910", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/wifi.svg" : "../Images/HotelImg/htlicon/d-wifi.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>Wifi</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("76", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/restaurnt.svg" : "../Images/HotelImg/htlicon/d-restaurent.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>Restaurent</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("165", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/bar.svg" : "../Images/HotelImg/htlicon/d-bar.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>Bar</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("33", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/elevator.svg" : "../Images/HotelImg/htlicon/d-elevator.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>Elevator</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("154", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/medical-kit.svg" : "../Images/HotelImg/htlicon/d-medical.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>MedicalSpecilities</p></div></li>";
            sb += " <li class='ttip'><a class='dropdown-item hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'><img src='" + ($.inArray("1", AmenitiesID) != -1 ? "../Images/HotelImg/htlicon/front-desk.svg" : "../Images/HotelImg/htlicon/d-frontdesk.svg") + "' class='htlicon'/></a><div class='ttip-text'><p>24hours Front Desk</p></div></li>";
            sb += " <li class='fr'><a class='dropdown-item fltdet btn_htl_info hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'>Map&nbsp;&nbsp;<img src='../Images/HotelImg/htlicon/map2.svg'/></a></li>";
            sb += " </ul>";
            //End AMENITIES            
            sb += " </div>";
            //START PRICE
            sb += " <div class='col-md-3 col-sm-3 col-xs-12 htlprc'>";
            if (HotelResult[i].Tlamt != null) {
                sb += "<div class='discount tsc_ribbon_wrap edge ttip'>";
                sb += "<div class='ribbon-wrap right-edge fork lyellow'><span class='bfare'>" + HotelResult[i].Cur + " " + parseFloat(HotelResult[i].Tlamt).toFixed(2) + "</span></div>";
                sb += "<div class='divttip'><div class='ttip-text spanttip discountttip'>";
                sb += "<span class='span-air'>Discount : 0</span><br/>";
                sb += "<span class='span-air'>Commision : " + HotelResult[i].Cmamt + "</span><br/>";
                sb += "<span class='span-air'>Markup : " + HotelResult[i].Mkamt + "</span><br/>";
                sb += "<span class='span-air'>*Inclusive of all taxes</span><br/>";
                sb += "</div></div>";
                sb += "</div>";
                sb += " <div id='price_" + HotelResult[i].HId.split("_")[1] + " class='col-xs-6 tag'><label class='rom_price strikeout'>" + HotelResult[i].Cur + "&nbsp;&nbsp;<span class='price'>" + HotelResult[i].StAmt + "</span></label><br /></div>";
            }
            else {
                sb += " <div class='col-xs-6 tag'><label class='rom_price'>" + HotelResult[i].Cur + "&nbsp;&nbsp;<span class='price'>" + HotelResult[i].StAmt + "</span></label><br /></div>";
            }
            sb += " <div class='col-md-12 col-xs-12 ResChRm pad-0'>";

            sb += " <button type='button' id='btn-book_" + HotelResult[i].HId.split("_")[1] + "' data-id='" + HotelResult[i].HId.split("_")[1] + "' data-status='active'  data-Supplier='" + HotelResult[i].SuId + "' class='button button-ripple htlbbook ChooseRoom' data-ripple-color='#7f2d6a' values='" + HotelResult[i].HId + "'>Choose Room</button>";

            sb += " </div>";
            sb += " <a class='dropdown-item fltdet btn_htl_info hoteldtpopup' data-id='" + HotelResult[i].HId.split("_")[1] + "' href='javascript:void(0);' data-izimodal-open='modal-hoteldetails' data-izimodal-transitionin='bounceInDown'>Description&nbsp;&nbsp;<img src='../Images/HotelImg/htlicon/description.svg'/></a>";
            sb += "<div class='md-checkbox quot'><input id='chk-" + HotelResult[i].HId.split("_")[1] + "' type='checkbox' name='chk_hotel' value='All' data-hotel='" + HotelResult[i].HId.split("_")[1] + "'><label for='chk-" + HotelResult[i].HId.split("_")[1] + "' class='fly'></label></div>";
            sb += " </div>";
            sb += " </div>";
            //END AVAIL PANEL
            sb += "<div class='row chrm'>";
            sb += " <div id='div_" + HotelResult[i].HId.split("_")[1] + "' class='col-md-12 col-sm-12 col-xs-12 foot-dt pad-0 collapse'>";
            sb += " <div class='col-md-12 col-sm-12 col-xs-12 pad-0 frtype'>";
            sb += "<div id='" + HotelResult[i].HId.split("_")[1] + "' class='roomloader-" + HotelResult[i].HId.split("_")[1] + "'>";
            sb += "<div class='col-md-12 col-sm-12 col-xs-12' style='height:25vh;'>";
            sb += "<div class='loader_1'>";
            sb += "<div class='line_1 one'></div>";
            sb += "<div class='line_1 two'></div>";
            sb += "<div class='line_1 three'></div>";
            sb += "<div class='line_1 four'></div>";
            sb += "<div class='line_1 five'></div>";
            sb += "</div>";
            sb += "</div>";
            sb += "</div>";
            sb += "<div id='RoomList_" + HotelResult[i].HId.split("_")[1] + "'class='RoomtypeTRM'>";
            sb += "</div>";
            sb += "</div>";
            sb += "</div>";
            //START ROOM TYPE FOR TRM         

            $("#Htlavail").append(sb);
            //IZIMODEL POPUP//
            $('.hoteldtpopup').click(function () {
                HotelID = $(this).attr('data-id');
                Bind_Popup(HotelID, CheckIn, CheckOut, nights, roomcount);
                $('#modal-hoteldetails').iziModal({
                    title: "HOTEL DETAILS",
                    iconclass: "icon-stack",
                    transitionIn: 'fadeInDown',
                    //width: 1100,
                    padding: 20,
                    zindex: 9999,
                    headerColor: '#3a3723',
                });

                $('.htl_tab li').click(function () {
                    $('.htl_tab li').removeClass('active');
                    $('.htl_content').addClass('none');
                    $(this).addClass('active');
                    var id = $(this).attr('id').split('-')[1];
                    $('#div-' + id).removeClass('none');
                    if ($('.limap').hasClass('active')) {
                        var lat = $(this).attr('data-lat');
                        var lang = $(this).attr('data-lang');
                        var id = $(this).attr('data-id');
                        init_map(id, lat, lang);
                    }
                    if (($('.liamenities').hasClass('active'))) {
                        var Amenity = "";
                        var id = $(this).attr('data-id');
                        $('#Amenities-' + id).empty();
                        var Result = hotelRS;
                        var hotelquery = Enumerable.From(Result)
                         .Where(function (x) { return x.HId.split("_")[1] == id }).ToArray();
                        var Stamty = "";
                        Amenity = hotelquery[0].Amty
                        var Am = 0;
                        for (; Am < Amenity.length; Am++) {
                            Stamty += "<div class='col-md-2 col-sm-2 col-xs-12 pad-0'>";
                            Stamty += "<ul class='pad-0 amty'>";
                            Stamty += "<li>";
                            Stamty += "<div class='md-checkbox'>";
                            Stamty += "<input id='chk_Amty" + Am + "' type='checkbox' name='Chk_Amenties" + Am + "' value='Amty" + Am + "' disabled checked>";
                            Stamty += "<label for='chk_Amenties" + Am + "'>" + Amenity[Am].Name + "</label>";
                            Stamty += "</div>";
                            Stamty += "</li>";
                            Stamty += "</ul>";
                            Stamty += "</div>";
                        }
                        $('#Amenities-' + id).append(Stamty)
                    }
                    if ($('.lireview').hasClass('active')) {
                        var id = $(this).attr('data-id');
                        var Result = hotelRS;
                        var hotelquery = Enumerable.From(Result)
                         .Where(function (x) { return x.HId.split("_")[1] == id }).ToArray();
                        var Reviews = hotelquery[0].Room;
                        if (Reviews != null) {
                            var id = $(this).attr('data-id');
                            $('#Guestreview' + id).empty();
                            var sb = '';
                            sb += "<div class='noroomavail'>";
                            sb += "<img src='../Images/HotelImg/htlicon/No-Reviews.svg' style='width:40%'/></div>";
                            $('.roomloader-' + HotelID).addClass('none');
                            $('#Guestreview' + HotelID).append(sb);
                        }
                        else {
                            var id = $(this).attr('data-id');
                            $('#Guestreview' + id).empty();
                            $('#RoomList_' + id).empty();
                            Bind_RoomResult(id, City, CheckIn, CheckOut, nights);
                        }
                    }

                    $('.htl_tab li').each(function () {
                        var src = $(this).find('img').attr('src').split('/');
                        if ($(this).hasClass('active')) {
                            $(this).find('img').removeAttr('src').attr('src', '../Images/HotelImg/htlicon/w-' + src[src.length - 1].replace('w-', ''));
                        }
                        else {
                            $(this).find('img').removeAttr('src').attr('src', '../Images/HotelImg/htlicon/' + src[src.length - 1].replace('w-', ''));
                        }
                    });
                });

                function init_map(id, lat, lang) {
                    var Result = hotelRS;
                    var hotelquery = Enumerable.From(Result)
                     .Where(function (x) { return x.HId.split("_")[1] == id }).ToArray();
                    var contentString = "<h5 class='desc'>" + hotelquery[0].HtlNm + "</h5><br/>";
                    contentString += "<span class='span-htlpop'>" + hotelquery[0].Add + "</span>";

                    var myOptions = { zoom: 20, center: new google.maps.LatLng(lat, lang), mapTypeId: google.maps.MapTypeId.ROADMAP };
                    map = new google.maps.Map(document.getElementById('googlemap-' + id), myOptions);
                    marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(lat, lang) });
                    infowindow = new google.maps.InfoWindow({ content: contentString });
                    google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker); });
                    infowindow.open(map, marker);
                } google.maps.event.addDomListener(window, 'load', init_map);
            });
            //END IZIMODEL POPUP// 
            HotelavailStartIndex++;
        }

        $('#Htl_totalcount').html($('#Htlavail').children('.main').length);

        //START TRM AND HOTELBED CHOOSEROOM CLICK FUN
        $('.ChooseRoom').unbind().click(function () {
            var result = hotelRS;
            var id = $(this).attr('data-id');
            var hotelquery = Enumerable.From(result)
        .Where(function (x) { return x.HId.split("_")[1].toString().toUpperCase().trim() == id }).ToArray();
            var Rooms = hotelquery[0].Room;
            if (Rooms != null) {
                var id = $(this).attr('data-id');
                var status = $(this).attr('data-status');
                if (status == "active") {
                    $('#div_' + id).slideToggle('slow');
                    $('.roomloader-' + id).removeClass('none');
                    $('.ChooseRoom').attr('data-status', 'deactive');
                    $('.ChooseRoom').attr('disabled', true);
                    $(this).removeAttr('disabled');
                    $('#RoomList_' + id).empty();
                    Bind_HBRoomResult(id, City, CheckIn, CheckOut, nights);
                }
                else {
                    $('#roomloader-' + id).addClass('none');
                    $('#div_' + id).slideToggle('slow');
                    $('.ChooseRoom').attr('data-status', 'active');
                    $('.ChooseRoom').attr('disabled', false);
                }
            }
            else {
                var id = $(this).attr('data-id');
                var status = $(this).attr('data-status');
                if (status == "active") {
                    $('#div_' + id).slideToggle('slow');
                    $('.roomloader-' + id).removeClass('none');
                    $('.ChooseRoom').attr('data-status', 'deactive');
                    $('.ChooseRoom').attr('disabled', true);
                    $(this).removeAttr('disabled');
                    $('#RoomList_' + id).empty();
                    Bind_RoomResult(id, City, CheckIn, CheckOut, nights);
                }
                else {
                    $('#roomloader-' + id).addClass('none');
                    $('#div_' + id).slideToggle('slow');
                    $('.ChooseRoom').attr('data-status', 'active');
                    $('.ChooseRoom').attr('disabled', false);
                }
            }
        });
        //END TRM AND HOTELBED CHOOSE ROOM CLICK FUN       
        //START TRM CANCEL POLICY CLICK FUN
        $('.cnclplcy').click(function () {
            var id = $(this).attr('id').split('_')[1];
            var status = $(this).attr('status');
            $('#div_' + id).slideToggle('slow');
            if (status == "close") {
                $('.cnclplcy li.fa_' + id).removeClass('fa-angle-double-down');
                $('.cnclplcy li.fa_' + id).addClass('fa-angle-double-up');
                $('.cnclplcy').attr('status', 'open');
            }
            else {
                $('.cnclplcy li.fa_' + id).removeClass('fa-angle-double-up');
                $('.cnclplcy li.fa_' + id).addClass('fa-angle-double-down');
                $('.cnclplcy').attr('status', 'close');
            }
        });
        //END TRM CANCEL POLICY CLICK FUN

        //START PRINT CHECKBOX
        $('#print').click(function () {
            printarray = [];
            var PrintDesign = [];
            if ($('.result input[type="checkbox"]:checked').length > 0) {
                $('.result input[type="checkbox"]:checked').each(function () {
                    printarray.push($(this).attr('id').split('-')[1]);
                });
                PrintDesign = GenerateHotelTable(printarray);
                newWin = window.open("");
                newWin.document.write(PrintDesign);
                newWin.print();
                newWin.close();
            } else {
                toasts.showError('please select atleast one hotel');
                return false;
            }
        });
        //END PRINT CHECKBOX
        //START EMAIL CHECKBOX
        $('#email').click(function () {
            //var chkarray = [];
            printarray = [];
            if ($('.result input[type="checkbox"]:checked').length > 0) {
                $('.result input[type="checkbox"]:checked').each(function () {
                    printarray.push($(this).attr('id').split('-')[1]);
                    $("#modal-Email").iziModal({
                        title: "Email",
                        iconclass: "icon-stack",
                        width: 600,
                        padding: 20,
                        headerColor: '#3a3723'
                    });
                    $('#modal-Email').iziModal('open', {
                        transitionIn: 'bounceInDown',// comingIn, bounceInDown, bounceInUp, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX
                        transitionOut: 'bounceOutDown'// comingOut, bounceOutDown, bounceOutUp, fadeOutDown, fadeOutUp, , fadeOutLeft, fadeOutRight, flipOutX
                    });
                });
            }
            else {
                toasts.showError('please select atleast one Hotel');
                return false;
            }

            $('#btn_subemail').unbind().click(function () {

                if (!$("#txttoemail").val()) {
                    toasts.showError("Note :- Please enter Email ID.")
                    $("#txttoemail").focus();
                    return false;
                }

                if (!ValidateEmailAddress($("#txttoemail").val())) {
                    toasts.showError("Note :- Please enter valid Email ID.")
                    $("#txttoemail").focus();
                    return false;
                }
                if (!$("#txtsubname").val()) {
                    toasts.showError("Note :- Please enter Subject Name.")
                    $("#txtsubname").focus();
                    return false;
                }
                $.blockUI({
                    message: '<img alt="Please Wait..." src="../Images/Login/Loading.gif" id="imgLoader" />',
                });
                var EmailDesign = GenerateHotelTable(printarray);
                var LoginReference = $("#hdnlogdeatails").val();
                emailfun = {
                    MailFun: EmailDesign,
                    Log: LoginReference,
                    ToEmail: $("#txttoemail").val(),
                    Subname: $("#txtsubname").val(),
                    Msg: $("#txtmsg").val()
                }
                $.ajax({
                    type: 'POST',
                    url: "/Hotel/EmailFunction",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify(emailfun),
                    success: function (data) {
                        if (data.StatusCode == "-1") {
                            $.unblockUI();
                            toasts.showError(data.ErrorMsg);
                            window.location.href = "/Login/Login";
                            return false;
                        }
                        else if (data.StatusCode == "0") {
                            $.unblockUI();
                            toasts.showError(data.ErrorMsg);
                            return false;
                        }
                        else if (data.StatusCode == "1") {
                            $.unblockUI();
                            $('#modal-Email').iziModal('close', {
                                transition: 'bounceOutDown' // Here transitionOut is the same property.
                            });
                            toasts.showSuccess(data.Result);
                            $('#txttoemail').val('');
                            $('#txtsubname').val('');
                            $('#txtmsg').val('');
                        }
                    },
                    error: function (ex) {
                    }
                });
            });
        });
        //END EMAIL CHECKBOX
    }

    function Filter_Bind() {
        var resulthtl = hotelRS;
        var maxPrice = 0;
        var minPrice = Math.min.apply(null, resulthtl.map(function (a) { return a.StAmt; }));
        $('#Htlavail').children('.main').each(function () {
            var BookPrice = parseFloat($(this).find('.price').html());
            maxPrice = (BookPrice >= maxPrice) ? BookPrice : maxPrice;
            minPrice = (BookPrice <= minPrice) ? BookPrice : minPrice;
        });
        MinPriceFlag = Math.floor(minPrice);
        MaxPriceFlag = Math.ceil(maxPrice);
        $('#htlslider').find('.price-range-min').remove();
        $('#htlslider').find('.price-range-max').remove();
        slider(MinPriceFlag, MaxPriceFlag);

        var sb = "";
        sb += "<div class='chkbox'>";
        sb += "<div class='md-checkbox amenities' data-status='active'>";
        sb += "<input id='chk_AminityAll-htl' type='checkbox' name='chk_all' value='All' data-amenity='All'>";
        sb += "<label for='chk_AminityAll-htl'>All</label>";
        sb += "</div>";
        for (var amty = 0; amty < ArrayAmenities.length; amty++) {
            sb += "<div class='md-checkbox amenities'>";
            sb += "<input id='chk_" + ArrayAmenities[amty] + "-htl' type='checkbox' value='" + ArrayAmenities[amty] + "' data-amenity='" + ArrayAmenities[amty] + "'>";
            sb += "<label for='chk_" + ArrayAmenities[amty] + "-htl'>" + ArrayAmenities[amty] + "</label>";
            sb += "</div>";
        }
        if (ArrayAmenities.length > 0) {
            $("#Amenities-htl").removeClass('none');
            $('#No-Amenities').addClass('none')
            $('#chk_dynamic_amenities').append(sb);
        }
        else {
            //$('#No-Amenities').removeClass('none');
            $("#Amenities-htl").addClass('none');
            $('#chk_dynamic_amenities').append(sb);
        }


        //START STAR FILTER
        if (StarRating_Flag.length > 0) {
            $(".StarRating-htl li").each(function () {
                $(this).removeClass('active');
                for (var str = 0; str < StarRating_Flag.length; str++) {
                    $('.StarRating-htl li#' + StarRating_Flag[str] + '-htl').addClass('active')
                }
            });
        }
        //END STAR RATTING

        //START USER FILTER
        if (UserRating_Flag.length > 0) {
            $(".UserRating-htl li").each(function () {
                $(this).removeClass('active');
                for (var str = 0; str < UserRating_Flag.length; str++) {
                    $('#UserRating-htl li#' + UserRating_Flag[str] + '-htl').addClass('active')
                }
            });
        }
        //END USER FILTER
        //START AMENITIES FILTER
        if (Amenities_Flag.length > 0) {
            if (Amenities_Flag[0] == "chk_AminityAll") {
                $('#Amenities-htl').find('input[type="checkbox"]').each(function () {
                    $(this).prop('checked', 'true')
                });
            }
            else {
                $('#Amenities-htl').find('input[type="checkbox"]').each(function () {
                    $(this).removeAttr('checked');
                });
                for (var ame = 0; ame < Amenities_Flag.length; ame++) {
                    $('#Amenities-htl #' + Amenities_Flag[ame] + '-htl').prop('checked', true)
                }
            }
        }
        //END AMENITIES FILTER

        //AMENITIES CLICK FUN
        $('.Amenities-htl input[type="checkbox"]').change(function () {

            //var id = $(this).attr('id').split('-')[1]
            if ($(this).attr('id') != "chk_AminityAll-htl") {
                if ($(this).is(':checked')) {
                    $(this).attr('checked', 'true');
                }
                else {
                    $('#chk_AminityAll-htl').removeAttr('checked');
                    $(this).removeAttr('checked');
                }
            }
            else if ($(this).is(':checked')) {
                $('.Amenities-htl input[type="checkbox"]').each(function () {
                    $(this).prop('checked', 'true');
                });
            }
            else {
                $('.Amenities-htl input[type="checkbox"]').each(function () {
                    $(this).removeAttr('checked');
                });
            }
            Hotel_Filter();
            return true;
        });

        Hotel_Filter();
    }

    function slider(MinPriceFlag, MaxPriceFlag) {
        //START PRICE SLIDER 
        function collision($div1, $div2) {
            var x1 = $div1.offset().left;
            var w1 = 40;
            var r1 = x1 + w1;
            var x2 = $div2.offset().left;
            var w2 = 40;
            var r2 = x2 + w2;

            if (r1 < x2 || x1 > r2) return false;
            return true;
        }
        $('#htlslider').slider({
            range: true,
            min: MinPriceFlag,
            max: MaxPriceFlag,
            values: [MinPriceFlag, MaxPriceFlag],
            slide: function (event, ui) {

                $(this).find('.price-range-min').html(CurCode + " " + ui.values[0]);
                $(this).find('.price-range-max').html(CurCode + " " + ui.values[1]);

                Hotel_Filter();
            }
        });

        $("#htlslider").append('<span class="price-range-min value">' + CurCode + " " + $('#htlslider').slider('values', 0) + '</span>');

        $("#htlslider").append('<span class="price-range-max value">' + CurCode + " " + $('#htlslider').slider('values', 1) + '</span>');

        //END PRICE SLIDER
    }

    function Hotel_Filter() {
        New_MinPriceFlag = [];
        New_MaxPriceFlag = [];
        New_HotelName_Falg = [];
        New_AreaName_Flag = [];
        New_PostelCode_Flag = [];
        New_Amenities_Flag = [];
        New_StarRating_Flag = [];
        New_UserRating_Flag = [];

        Minprice = parseFloat($('#htlslider').find('.price-range-min').html().split(' ')[1]);
        New_MinPriceFlag = Math.floor(Minprice);

        Maxprice = parseFloat($('#htlslider').find('.price-range-max').html().split(' ')[1]);
        New_MaxPriceFlag = Math.ceil(Maxprice);

        if ($('#txtHtlName').val() != "") {
            New_HotelName_Falg = [];
            New_HotelName_Falg = $('#txtHtlName').val();
        }

        if ($('#txtAreaName').val() != "") {
            New_AreaName_Flag = [];
            New_AreaName_Flag = $('#txtAreaName').val();
        }
        if ($('#txtPostelCode').val() != "") {
            New_AreaName_Flag = [];
            New_PostelCode_Flag = $('#txtPostelCode').val();
        }

        if ($('#Amenities-htl input[type="checkbox"]:checked').length > 0) {
            $('#Amenities-htl input[type="checkbox"]:checked').each(function () {
                if ($.inArray($(this).attr('data-amenity'), New_Amenities_Flag) == -1)
                    New_Amenities_Flag.push($(this).attr('data-amenity'));
            });
        }
        else {
            $('#nohotelavailable').removeClass('none');
        }
        if ($('.StarRating-htl li').length > 0) {
            $('.StarRating-htl li').each(function () {
                if ($(this).hasClass('active')) {
                    if ($.inArray($(this).attr('data-star'), New_StarRating_Flag) == -1)
                        New_StarRating_Flag.push($(this).attr('data-star'));
                }
            });
        }
        else {
            $('#nohotelavailable').removeClass('none');
        }

        if ($('.UserRating-htl li').length > 0) {
            $('.UserRating-htl li').each(function () {
                if ($(this).hasClass('active')) {
                    if ($.inArray($(this).attr('data-rate'), New_UserRating_Flag) == -1)
                        New_UserRating_Flag.push($(this).attr('data-rate'));
                }
            });
        }
        else {
            $('#nohotelavailable').removeClass('none');
        }

        $('#Htlavail').children('.main').each(function () {
            var Hotelname = $(this).find('.htl_box').attr('data-hotelname');
            var Areaname = $(this).find('.htl_box').attr('data-areaname');
            var Postelcode = $(this).find('.htl_box').attr('data-postalcode');
            var Price = $(this).find('.htl_box').attr('data-price');
            var Starrating = $(this).find('.htl_box').attr('data-hotelrating');
            var Amenities = $(this).find('.htl_box').attr('data-amenities');
            var Userrating = "";

            var stausFlag = false;
            $(this).addClass('none');

            if ((parseFloat(Price) >= parseFloat(New_MinPriceFlag)) && (parseFloat(Price) <= parseFloat(New_MaxPriceFlag))) {
                stausFlag = true;
            }

            if (stausFlag) {
                if (New_HotelName_Falg.length > 0) {
                    if (Hotelname.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase().indexOf(New_HotelName_Falg.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase()) >= 0) {
                        stausFlag = true;
                    }
                    else {
                        stausFlag = false;
                    }
                }
            }


            if (stausFlag) {
                if (New_AreaName_Flag.length > 0) {
                    if (Areaname.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase().indexOf(New_AreaName_Flag.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase()) >= 0) {
                        stausFlag = true;
                    }
                    else {
                        stausFlag = false;
                    }
                }

            }

            if (stausFlag) {
                if (New_PostelCode_Flag.length > 0) {
                    if (Postelcode.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase().indexOf(New_PostelCode_Flag.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase()) >= 0) {
                        stausFlag = true;
                    }
                    else {
                        stausFlag = false;
                    }

                }
            }

            //if (stausFlag) {
            //    if (New_StarRating_Flag.length > 0) {
            //        for (var str = 0; str < New_StarRating_Flag.length; str++) {
            //            if (parseInt(New_StarRating_Flag[str]) == parseInt(Starrating)) {
            //                stausFlag = true;
            //                break;
            //            }
            //            else {
            //                stausFlag = false;
            //            }
            //        }
            //    }
            //    else {
            //        stausFlag = false;
            //        $('#nohotelavailable').removeClass('none');
            //    }
            //}

            if (stausFlag) {
                if (New_Amenities_Flag.length > 0) {
                    for (var amt = 0; amt < New_Amenities_Flag.length; amt++) {
                        var aminarray = Amenities.split(',');
                        if ($.inArray(aminarray, New_Amenities_Flag) != 0) {
                            stausFlag = true;
                            break;
                        }
                        else {
                            stausFlag = false;
                        }
                    }
                }
                else {
                    stausFlag = false;
                }
            }
            if (stausFlag) {
                $(this).removeClass('none');
                $('#nohotelavailable').addClass('none');
            }
        });


        $('#Htl_availablecount').html($('#Htlavail').children('.main').not('.none').length);
        var HotelTotelCount = $('#Htlavail').children('.main').not('.none').length
        if (HotelTotelCount == 0) {
            $('.nohotelavailable').removeClass('none');
        }
        InitiazeMap();
    }

    function Hotel_Sorting(SortingName, sortOrder) {
        var divid = "Htlavail";
        switch (SortingName) {
            case "HotelName":
                if (sortOrder == "asc") {
                    $("#" + divid).children('.main').tsort('.HotelName', { order: 'desc' });
                }
                else {
                    $("#" + divid).children('.main').tsort('.HotelName', { order: 'asc' });
                }
                break
        }
        switch (SortingName) {
            case "Rating":
                if (sortOrder == "asc") {
                    $("#" + divid).children('.main').tsort('.Rating', { order: 'desc' });
                }
                else {
                    $("#" + divid).children('.main').tsort('.Rating', { order: 'asc' });
                }
                break
        }
        switch (SortingName) {
            case "Price":
                var desc = false;
                if (sortOrder == "asc") {
                    desc = false;
                }
                else {
                    desc = true;
                }
                var content = document.querySelector("#" + divid);
                var els = Array.prototype.slice.call(document.querySelectorAll("#" + divid + " > .main"));
                var cls = 'price';

                els.sort(function (a, b) {
                    na = parseInt(a.querySelector('.' + cls).innerHTML);
                    nb = parseInt(b.querySelector('.' + cls).innerHTML);
                    return desc ? (nb - na) : (na - nb);
                });
                els.forEach(function (el) {
                    content.appendChild(el);
                });
                break;
        }
    }

    //START HOTEL POPUP
    function Bind_Popup(HotelID, CheckIn, CheckOut, nights, roomcount) {
        var result = hotelRS;
        var GstRv = GuestReviews.length;
        var hotelquery = Enumerable.From(result)
         .Where(function (x) { return x.HId.split("_")[1].toString().toUpperCase().trim() == HotelID }).ToArray();
        //START IZIMODEL POPUP//
        var popuppanel = "";
        //START HOTEL DETAIL// 
        popuppanel += "<div class='col-md-12 col-sm-12 col-xs-12'>";
        popuppanel += "<div class='col-md-4 col-sm-4 col-xs-12 '>";
        popuppanel += "<h5 class='htlname'>" + hotelquery[0].HtlNm + "</h5>";        
        if ((hotelquery[0].Add.indexOf('|') != -1)) {
            popuppanel += "<p class='span-htladd'>" + hotelquery[0].Add.split('|')[0] + "</p>";
        } else {
            popuppanel += "<p class='span-htladd'>" + hotelquery[0].Add + "</p>";
        }

        popuppanel += "</div>";
        popuppanel += "<div class='col-md-8 col-sm-8 col-xs-12 gstlst pad-0'>";
        popuppanel += "<div class='col-md-3 col-sm-3 col-xs-1 text-center pad-0'>";
        popuppanel += "<div class='checkin'>";
        popuppanel += "<img src='../Images/HotelImg/htlicon/checkin.svg'>&nbsp;";
        popuppanel += "<span class='num'>" + CheckIn + "</span>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "<div class='col-md-3 col-sm-3 col-xs-2 text-center pad-0'>";
        popuppanel += "<div class='checkout'>";
        popuppanel += "<img src='../Images/HotelImg/htlicon/checkout.svg'>&nbsp;";
        popuppanel += "<span class='num'>" + CheckOut + "</span>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "<div class='col-md-2 col-sm-2 col-xs-1 text-center pad-0'>";
        popuppanel += "<div class='nights'>";
        popuppanel += "<img src='../Images/HotelImg/htlicon/night.svg'>";
        popuppanel += "<span class='num'>" + nights + "</span>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "<div class='col-md-2 col-sm-2 col-xs-3 text-center pad-0'>";
        popuppanel += "<div class='rooms'>";
        popuppanel += "<img src='../Images/HotelImg/htlicon/room.svg'>";
        popuppanel += "<span class='num'>" + roomcount + "</span>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "<div class='col-md-2 col-sm-2 col-xs-4 text-center pad-0'>";
        popuppanel += "<div class='Adult'>";
        for (var r = 0; r < hotelquery[0].Ratn; r++) {
            popuppanel += "<label for='chk_rating'><img src='../Images/HotelImg/htlicon/htlstrrating.svg' title='Hotel Star rating' /></label>";
        }
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        //END HOTEL DETAIL//
        popuppanel += "<div class='col-md-12 col-sm-12 col-xs-12 list'>"
        popuppanel += "<div class='col-md-6 col-sm-6 col-xs-12 mlist'>"
        popuppanel += "<div class='head-tab'>"
        popuppanel += "<ul class='tab htl_tab'>"
        popuppanel += "<li class='active' id='li-img_" + hotelquery[0].HId.split("_")[1] + "'>"
        popuppanel += "<div>"
        popuppanel += "<a href='javascript:void(0);' id='lnk-img_" + hotelquery[0].HId.split("_")[1] + "'><img src='../Images/HotelImg/htlicon/w-image.svg'/>&nbsp;&nbsp;Images</a>"
        popuppanel += "</div>"
        popuppanel += "</li>"
        popuppanel += "<li class='limap' id='li-map_" + hotelquery[0].HId.split("_")[1] + "' data-lat='" + hotelquery[0].Lat + "' data-lang='" + hotelquery[0].Lng + "' data-id='" + hotelquery[0].HId.split("_")[1] + "'>"
        popuppanel += "<div>"
        popuppanel += "<a href='javascript:void(0);' id='lnk-map_" + hotelquery[0].HId.split("_")[1] + "'><img src='../Images/HotelImg/htlicon/map.svg'/>&nbsp;&nbsp;Map View</a>"
        popuppanel += "</div>"
        popuppanel += "</li>"
        if (hotelquery[0].Room == null) {
            var review = $('#btn-book_' + hotelquery[0].HId.split("_")[1]).attr('data-Room');
            popuppanel += "<li class='lireview' id='li-review_" + hotelquery[0].HId.split("_")[1] + "' data-id='" + hotelquery[0].HId.split("_")[1] + "' data-supplier='" + hotelquery[0].SuId + "' data-review='" + review + "'>"
            popuppanel += "<div>"
            popuppanel += "<a href='javascript:void(0);' id='lnk-review-_" + hotelquery[0].HId.split("_")[1] + "'><img src='../Images/HotelImg/htlicon/review.svg'/>&nbsp;&nbsp;Review</a>"
            popuppanel += "</div>"
            popuppanel += " </li>"
        }
        if (hotelquery[0].Amty != null) {
            popuppanel += "<li class='liamenities' id='lnk-Amenities_" + hotelquery[0].HId.split("_")[1] + "' data-id='" + hotelquery[0].HId.split("_")[1] + "'>"
            popuppanel += "<div>"
            popuppanel += "<a href='javascript:void(0);' id='lnk-Amenities_" + hotelquery[0].HId.split("_")[1] + "'><img src='../Images/HotelImg/htlicon/amenity.svg'/>&nbsp;&nbsp;Amenities</a>"
            popuppanel += "</div>"
            popuppanel += "</li>"
        }
        popuppanel += "<li class='lirooms none' id='li-Rooms_" + hotelquery[0].HId.split("_")[1] + "' data-id='" + hotelquery[0].HId.split("_")[1] + "' data-supplier='" + hotelquery[0].SuId + "' data-Room='false'>"
        popuppanel += "<div>"
        popuppanel += "<a href='javascript:void(0);' id='lnk-Rooms_" + hotelquery[0].HId.split("_")[1] + "'><img src='../Images/HotelImg/htlicon/choose-room.svg'/>&nbsp;&nbsp;ChooseRoom</a>"
        popuppanel += "</div>"
        popuppanel += " </li>"
        popuppanel += "</ul>"
        popuppanel += "</div>"
        popuppanel += "</div>"
        popuppanel += "</div>"
        //IMAGE VIEW//
        popuppanel += "<div id='div-img_" + hotelquery[0].HId.split("_")[1] + "' class='htl_content'>";
        popuppanel += "<div id='main_area'>";
        popuppanel += "<div class='row'>";
        popuppanel += "<div class='col-md-6 col-sm-6 col-xs-12 Gridimageslider'>";
        popuppanel += "<div class='col-xs-12' id='slider'>";
        popuppanel += "<div class='row'>";
        popuppanel += "<div class='col-sm-12' id='carousel-bounding-box'>";
        popuppanel += "<div class='carousel slide' id='myCarousel'>";
        popuppanel += "<div class='carousel-inner'>";
        //START IMAGE LOOP//  
        if (hotelquery[0].ImgUrl.indexOf(',') != -1) {
            var img = hotelquery[0].ImgUrl.split(',');
            for (var i = 0; i < img.length; i++) {
                if (i == 0) {
                    popuppanel += "<div class='active item' data-slide-number='" + [i] + "'>";
                    popuppanel += "<img src='" + img[i] + "' />";
                    popuppanel += "</div>";
                }
                else {
                    popuppanel += "<div class='item' data-slide-number='" + [i] + "'>";
                    popuppanel += "<img src='" + img[i] + "' />";
                    popuppanel += "</div>";
                }
            }
        }
        else {
            popuppanel += "<div class='active item' data-slide-number='" + [0] + "'>";
            popuppanel += "<img src='" + hotelquery[0].ImgUrl + "' />";
            popuppanel += "</div>";
        }
        //END IMAGE LOOP//
        popuppanel += " </div>";
        popuppanel += "<a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>";
        popuppanel += "<span class='glyphicon glyphicon-chevron-left'></span>";
        popuppanel += "</a>";
        popuppanel += "<a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'>";
        popuppanel += "<span class='glyphicon glyphicon-chevron-right'></span>";
        popuppanel += "</a>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "<div class='col-sm-2'>";
        popuppanel += "</div>";
        popuppanel += "<div class='col-md-6 col-sm-6 col-xs-12 gridviewimg' id='slider-thumbs'>";
        popuppanel += "<ul class='hide-bullets'>";
        //START GRID LOOP//  
        if (hotelquery[0].ImgUrl.indexOf(',') != -1) {
            var img = hotelquery[0].ImgUrl.split(',');
            for (var i = 0; i < img.length; i++) {
                popuppanel += "<li class='col-sm-3'>";
                popuppanel += "<a class='thumbnail' id='carousel-selector-" + [i] + "'><img src='" + img[i] + "' /></a>";
                popuppanel += "</li>";
            }
        }else{
            popuppanel += "<li class='col-sm-3'>";
            popuppanel += "<a class='thumbnail' id='carousel-selector-" + [0] + "'><img src='" + hotelquery[0].ImgUrl + "' /></a>";
            popuppanel += "</li>";
        }          
        //END GRID LOOP//
        popuppanel += "</ul>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        //START DISCRIPTION//
        popuppanel += "<div class='col-md-12 col-sm-12 col-xs-12 descript'>";
        popuppanel += "<h5 class='desc'>DESCRIPTION</h5>";
        popuppanel += "<p class='text-justify desc'>" + (hotelquery[0].Desc != null && hotelquery[0].Desc != 'NA' ? hotelquery[0].Desc : "Reliable service and professional staffs to your needs.") + "</p>";
        popuppanel += "</div>";
        //END DISCRIPTION//
        popuppanel += "</div>";
        //END IMAGE VIEW//
        //STRAT MAP VIEW//
        popuppanel += "<div id='div-map_" + hotelquery[0].HId.split("_")[1] + "' class='none htl_content'>";
        popuppanel += "<div class='col-md-12 col-sm-12 col-xs-12 amtys'>";
        popuppanel += "<div id='googlemap-" + hotelquery[0].HId.split("_")[1] + "' class='gmap'></div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        //END MAP VIEW//
        //STRAT GUEST REVIEW//       
        popuppanel += " <div id='div-review_" + hotelquery[0].HId.split("_")[1] + "' class='none review htl_content'>";
        popuppanel += "<div id='" + hotelquery[0].HId.split("_")[1] + "' class='roomloader-" + hotelquery[0].HId.split("_")[1] + "'>";
        popuppanel += "<div class='col-md-12 col-sm-12 col-xs-12' style='height:25vh;'>";
        popuppanel += "<div class='loader_1'>";
        popuppanel += "<div class='line_1 one'></div>";
        popuppanel += "<div class='line_1 two'></div>";
        popuppanel += "<div class='line_1 three'></div>";
        popuppanel += "<div class='line_1 four'></div>";
        popuppanel += "<div class='line_1 five'></div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "<div id='Guestreview" + hotelquery[0].HId.split("_")[1] + "'></div>"
        popuppanel += "</div>";
        //END GUEST REVIEW
        //START AMENITIES
        popuppanel += "<div id='div-Amenities_" + hotelquery[0].HId.split("_")[1] + "' class='none htl_content'>";
        popuppanel += "<div class='col-md-12 col-sm-12 col-xs-12 amtys'>";
        popuppanel += "<div id='Amenities-" + hotelquery[0].HId.split("_")[1] + "' class='Amenities'></div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        //END AMENITIES
        //STRAT ROOM TYPEs
        popuppanel += " <div id='div-Rooms_" + hotelquery[0].HId.split("_")[1] + "' class='none htl_content'>";
        popuppanel += " <div class='col-md-12 col-sm-12 col-xs-12 frtype'>";
        popuppanel += "<div id='" + hotelquery[0].HId.split("_")[1] + "' class='roomloader-" + hotelquery[0].HId.split("_")[1] + "'>";
        popuppanel += "<div class='col-md-12 col-sm-12 col-xs-12' style='height:25vh;'>";
        popuppanel += "<div class='loader_1'>";
        popuppanel += "<div class='line_1 one'></div>";
        popuppanel += "<div class='line_1 two'></div>";
        popuppanel += "<div class='line_1 three'></div>";
        popuppanel += "<div class='line_1 four'></div>";
        popuppanel += "<div class='line_1 five'></div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "<div id='Rmtypepopup_" + hotelquery[0].HId.split("_")[1] + "'class='RoomtypeTRM'>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        popuppanel += "</div>";
        //END ROOM TYPE

        $("#izimodel").html(popuppanel);
        //END IZIMODEL POPUP//
    }
    //END  HOTEL POPUP

    //START TRM ROOM AND GUEST REVIEW RESULT
    function Bind_RoomResult(id, City, CheckIn, CheckOut, nights) {
        var roomRst = hotelRS;
        var htlroomlistquery = Enumerable.From(roomRst)
         .Where(function (x) { return x.HId.split("_")[1].toString().toUpperCase().trim() == id }).ToArray();
        var RoomRs = htlroomlistquery;
        var Supplier = RoomRs[0].Supp;
        var SupplierId = RoomRs[0].SuId;
        var HtlCode = RoomRs[0].HId;
        var HtlChain = RoomRs[0].HtChain;
        var RtSupp = RoomRs[0].Ctgry;
        var TrID = RoomRs[0].TId;
        var Ratn = RoomRs[0].Ratn;
        var city = City;
        var ChIn = CheckIn;
        var ChOut = CheckOut;
        var param = {
            LOGINREFERENCE: $("#hdnlogdeatails").val(),
            Destination: city,
            CheckIn: ChIn,
            CheckOut: ChOut,
            Supplier: Supplier,
            SupplierId: SupplierId,
            HotelCode: HtlCode,
            HotelChain: HtlChain,
            RateSupplier: RtSupp,
            TraceId: TrID,
            Room: LstRoom,
            ClientCountryId: CountryId
        }
        $.ajax({
            type: 'POST',
            url: "/Hotel/GetRoomDetails",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(param),
            success: function (data) {
                if (data.StatusCode == "00") {
                    toasts.showError(data.ErrorMsg);
                    return false;
                }
                else if (data.StatusCode == "06") {
                    window.location.href = $("#hdfSessionExpired").val();
                }
                else if (data.StatusCode == "01") {
                    $('.roomloader-' + id).addClass('none');
                    var HotelRoomResult = JSON.parse(data.Result);
                    Bind_RmResult(HotelRoomResult, id, CheckIn, CheckOut, nights);
                    Bind_GuestReviews(HotelRoomResult, id, Ratn);
                    RmResult.push(HotelRoomResult);
                    return false;
                }
            }
        });
    }

    function Bind_RmResult(HotelRoomResult, id, CheckIn, CheckOut, nights) {

        var RoomResult = HotelRoomResult;
        var bindroom = "";
        var RmRst = RoomResult.StayRS.Rooms
        if (RmRst != null) {
            bindroom += " <div class='Roomdt'>";
            bindroom += " <div id='AvailRoom' class='clearfix col-md-12 col-sm-12 col-xs-12 availroom'>";
            bindroom += " <div class=' clearfix col-md-12 col-sm-12 col-xs-12'>";
            bindroom += " <p class='lblrm'>Room :&nbsp;&nbsp;<span class='num'>" + RoomResult.StayRS.Rooms[0].AdultCount + " Adult and " + RoomResult.StayRS.Rooms[0].ChildCount + " Child</span></p>";
            bindroom += " </div>";
            bindroom += " <div class='col-md-12 col-sm-12 col-xs-12 hideen-xs rmlst'>";
            bindroom += " <div class='col-md-8 col-sm-8 col-xs-12 Rmlst'>";
            bindroom += " <div class='clearfix rmtype'>";
            bindroom += " <div class='col-md-3 col-sm-4 col-xs-3 ResRmType pad-0'>";
            bindroom += " <p>Room Type</p>";
            bindroom += " </div>";
            bindroom += " <div class='col-md-3 col-sm-3 col-xs-3 ResRmType pad-0'>";
            bindroom += " <p>Board Type</p>";
            bindroom += " </div>";
            bindroom += " <div class='col-md-3 col-sm-3 col-xs-3 ResRmType pad-0'>";
            bindroom += " <p>Status</p>";
            bindroom += " </div>";
            bindroom += " <div class='col-md-3 col-sm-2 col-xs-3 ResRmType pad-0'>";
            bindroom += " <p>Price</p>";
            bindroom += " </div>";
            bindroom += " </div>";
            bindroom += " </div>";
            bindroom += " </div>";
            var RmResult = RoomResult.StayRS.Rooms.length;
            for (var r = 0; r < RmResult; r++) {
                bindroom += " <div class='clearfix col-md-12 col-sm-12 col-xs-12 faredt'>";
                bindroom += " <div class='clearfix col-md-8 col-sm-8 col-xs-12 '>";
                bindroom += " <div class='col-md-3 col-sm-3 col-xs-6 '>";
                bindroom += " <label class='radio-label Rmtype_" + RoomResult.StayRS.Rooms[r].RoomId + "' for='Rmrdobtn_" + id + "_" + RoomResult.StayRS.Rooms[r].RoomId + "'>" + RoomResult.StayRS.Rooms[r].RoomName + "</label>";
                bindroom += " </div>";
                bindroom += " <div class='col-md-3 col-sm-3 col-xs-5 ResRm pad-0'>";
                bindroom += " <p>" + RoomResult.StayRS.Rooms[r].Inclusion + "</p>";
                bindroom += " </div>";
                bindroom += " <div class='col-md-3 col-sm-3 col-xs-6 ResRm  ttip pad-0'>";
                bindroom += " <p class='avmeb'><div class='col-md-6 col-sm-6 col-xs-6 trm_mmber'><a class='max-occ' data-id='" + id + "' href='javascript:void(0);'>" + RoomResult.StayRS.Rooms[r].RoomPaxCapacity + "</a></div></p>";
                bindroom += " <div class='ttip-text'>";
                bindroom += " <p>" + RoomResult.StayRS.Rooms[r].Inclusion + "- RoomPaxCapacity " + RoomResult.StayRS.Rooms[r].RoomPaxCapacity + "</p>";
                bindroom += " </div>";
                bindroom += " </div>";
                bindroom += " <div class='col-md-3 col-sm-3 htlprice col-xs-6 pad-0'>";
                bindroom += " <label class='ttip ResRmPrice' id='Roomprice_" + RoomResult.StayRS.Rooms[r].RoomId + "'>";
                bindroom += " " + RoomResult.StayRS.Rooms[r].Currency + " " + RoomResult.StayRS.Rooms[r].SuppBaseAmount + "<div class='ttip-text'>";
                bindroom += " <p>" + RoomResult.StayRS.Rooms[0].TariffNotes + "</p>";
                bindroom += " </div>";
                bindroom += " </label>";
                bindroom += " </div>";
                bindroom += " </div>";
                bindroom += " <div class='col-md-4 col-sm-4 col-xs-12 reschrm pad-0'>";
                bindroom += " <div class='col-md-6 col-sm-6 col-xs-6 pad-0 rescnl'>";
                bindroom += " <span class='num cancellationpolicy cnclplcy ' id='lnl-" + id + "_" + RoomResult.StayRS.Rooms[r].RoomId + "' status='close'>Cancellation Policy<i class='fa fa-angle-double-down' aria-hidden='true' data-status='false'></i></span>";
                bindroom += " </div>";
                bindroom += " <div class='col-md-4 col-sm-4 col-xs-6 pad-0 resbtn'>";
                bindroom += " <button type='button' id='" + id + "_" + RoomResult.StayRS.Rooms[r].RoomId + "' data-id='" + id + "-" + RoomResult.StayRS.Rooms[r].RoomId + "' class='button button-ripple edit_mod rbk ContinueBook' data-ripple-color='#7f2d6a' values='" + id + "|" + RoomResult.StayRS.Rooms[r].BaseAmount + "|" + RoomResult.StayRS.Rooms[r].MarkUp + "|" + RoomResult.StayRS.Rooms[r].Commission + "|" + RoomResult.StayRS.Rooms[r].TotalAmount + "|" + RoomResult.StayRS.Rooms[r].Currency + "|" + RoomResult.StayRS.Rooms[r].RoomName + "|" + RoomResult.StayRS.Rooms[r].RoomId + "|" + RoomResult.StayRS.Rooms[r].Roomtypecode + "|" + RoomResult.StayRS.Rooms[r].RoomPaxCapacity + "|" + RoomResult.StayRS.Rooms[r].AllocationDetails + "|" + RoomResult.StayRS.Rooms[r].TotalGrossAmount + "|" + RoomResult.StayRS.Rooms[r].Supplier_Id + "|" + RoomResult.StayRS.Rooms[r].RateBasic + "|" + RoomResult.StayRS.Rooms[r].CancellationPolicy.replace(/[^a-z0-9\s]/gi, '') + "'>Book</button>";
                bindroom += " </div>";
                bindroom += " </div>";
                bindroom += " <div id='" + id + "' class='col-md-12 col-sm-12 col-xs-12 pad-0 cnclpolicy collapse cancelpolicy_" + id + "_" + RoomResult.StayRS.Rooms[r].RoomId + "'>";                
                bindroom += " <table class='table table-striped policy'>";
                bindroom += " <thead>";
                bindroom += " <tr>";
                bindroom += " <th width='100%'>Terms</th>";
                bindroom += " </tr>";
                bindroom += " </thead>";
                bindroom += " <tbody>";
                bindroom += " <tr>";
                bindroom += " <td width='100%'>" + RoomResult.StayRS.Rooms[r].CancellationPolicy + "</td>";
                bindroom += " </tr>";
                bindroom += " </tbody>";
                bindroom += " </table>";
                bindroom += " </div>";
                bindroom += " </div>";
            }
            bindroom += " </div>";
            bindroom += " </div>";
            $('#RoomList_' + id).append(bindroom);
        }
        else {
            bindroom += "<div class='noroomavail'>";
            bindroom += "<img src='../Images/HotelImg/htlicon/no_room_Avail.svg' />";
            bindroom += "</div>";
            $('#RoomList_' + id).append(bindroom);
            $('#Rmtypepopup_' + id).append(bindroom);
        }
        $('.cancellationpolicy').click(function () {
            var id = $(this).attr('id').split('-')[1];
            var status = $(this).attr('status');
            $('.cancelpolicy_' + id).slideToggle('slow');
            if (status == "close") {
                $('.cancellationpolicy').attr('status', 'open');
                $('.cancellationpolicy i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
            }
            else {
                $('.cancellationpolicy').attr('status', 'close');
                $('.cancellationpolicy i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
            }
        });
        //END DROPDOWN   

        //START SELECT PAGE CLICK FUN
        $('.ContinueBook').click(function () {
            RoomDetails = [];
            RoomDetails.push($(this).attr('values'));
            selecthotel(RoomDetails);
        });
        //END SELECT PAGE CLICK FUN    
    }

    function Bind_GuestReviews(HotelRoomResult, id, Ratn) {
        var GstReview = HotelRoomResult;
        var Guestreview = "";
        var GRResult = GstReview.StayRS.Review;
        if (GRResult != null) {
            if (GRResult.length > 0) {
                for (var g = 0; g < GstReview.StayRS.Review.length; g++) {
                    Guestreview += "<div class='col-md-12 col-sm-12 col-xs-12 listreview GRv'>";
                    Guestreview += "<div class='col-md-3 col-sm-3 col-xs-12'>";
                    Guestreview += "<div><h5 class='text-center htlrev'>Traveller Rating</h5></div>";
                    Guestreview += "<div class='rating'>";
                    Guestreview += "<img src='../Images/HotelImg/man-user (2).png' class='userimg' />";
                    Guestreview += "</div>";
                    Guestreview += "  <div class='text-center desc'>Paul Mark D</div>";
                    Guestreview += "<ul class='list-inline'>"
                    Guestreview += "<li>"
                    for (var a = 0; a < Ratn; a++) {
                        Guestreview += "<img src='../Images/HotelImg/htlicon/htlstrrating.svg' title='Hotel Star rating' />";
                    }
                    Guestreview += "</ul>"
                    Guestreview += "</li>"
                    Guestreview += "</div>";
                    Guestreview += "<div class='col-md-9 col-sm-9 col-xs-12 GRcomments'>";
                    Guestreview += "<div class='col-md-8 col-sm-6 col-xs-6'></div>";
                    Guestreview += "<div class='col-md-4 col-sm-6 col-xs-6 dte'>";
                    Guestreview += "<label>Date&nbsp;&nbsp;</label><span class='num'>" + GstReview.StayRS.Review[g].Date + "</span>";
                    Guestreview += "</div>";
                    Guestreview += "<div class='col-md-12 col-sm-12 col-xs-12'>";
                    Guestreview += "<p class='ptag text-justify'>" + GstReview.StayRS.Review[g].Comment + "</p>";
                    Guestreview += "</div>";
                    Guestreview += "</div>";
                    Guestreview += "</div>";
                }
            }
            else {
                Guestreview += "<div class='col-md-12 col-sm-12 col-xs-12 listreview'>";
                Guestreview += "<div class='noroomavail'>";
                Guestreview += "<img src='../Images/HotelImg/htlicon/No-Reviews.svg' style='width:40%'/></div>";
                Guestreview += "</div>";
                Guestreview += "</div>";
            }
        }
        else {
            Guestreview += "<div class='col-md-12 col-sm-12 col-xs-12 listreview'>";
            Guestreview += "<div class='noroomavail'>";
            Guestreview += "<img src='../Images/HotelImg/htlicon/No-Reviews.svg' style='width:40%'/></div>";
            Guestreview += "</div>";
            Guestreview += "</div>";
        }

        $("#Guestreview" + id).append(Guestreview);
    }
    //END TRM ROOM AND GUEST REVIEW RESULT

    //START HB AND SPT ROOM RESULT
    function Bind_HBRoomResult(id, City, CheckIn, CheckOut, nights) {

        var roomRst = hotelRS;
        HBRoomResult = [];
        var htlroomlistquery = Enumerable.From(roomRst)
         .Where(function (x) { return x.HId.split("_")[1].toString().toUpperCase().trim() == id }).ToArray();

        HBRoomResult.push(htlroomlistquery[0].Room);
        var sb = "";
        var rm = roomcount;
        var adcnt = HBRoomResult[0][0].AdultCount;
        var chcnt = HBRoomResult[0][0].ChildCount;
        var RmDt = Enumerable.From(HBRoomResult[0]).Select(function (c) { return c.RoomCount }).ToArray();
        $.unique(RmDt);
        var RoomDt = RmDt.length;
        if (RoomDt <= 1) {
            var Roomlist = Enumerable.From(HBRoomResult[0]).Where(function (x) { return x.RoomCount == rm }).Select(function (c) { return c }).ToArray();
            if (Roomlist != null && Roomlist[0].RoomCount == roomcount) {
                if (HBRoomResult[0] != null) {
                    sb += " <div class='Roomdt'>";
                    sb += " <div id='AvailRoom' class='clearfix col-md-12 col-sm-12 col-xs-12 availroom'>";
                    sb += " <div class=' clearfix col-md-12 col-sm-12 col-xs-12'>";
                    sb += " <p class='lblrm'>Room :&nbsp;&nbsp;<span class='num'>" + adcnt + " Adult and " + chcnt + " Child</span></p>";
                    sb += " </div>";
                    sb += " <div class='col-md-12 col-sm-12 col-xs-12 hideen-xs rmlst'>";
                    sb += " <div class='col-md-8 col-sm-8 col-xs-12 Rmlst'>";
                    sb += " <div class='clearfix rmtype'>";
                    sb += " <div class='col-md-3 col-sm-4 col-xs-3 ResRmType pad-0'>";
                    sb += " <p>Room Type</p>";
                    sb += " </div>";
                    sb += " <div class='col-md-3 col-sm-3 col-xs-3 ResRmType pad-0'>";
                    sb += " <p>Board Type</p>";
                    sb += " </div>";
                    sb += " <div class='col-md-3 col-sm-3 col-xs-3 ResRmType pad-0'>";
                    sb += " <p>Status</p>";
                    sb += " </div>";
                    sb += " <div class='col-md-3 col-sm-2 col-xs-3 ResRmType pad-0'>";
                    sb += " <p>Price</p>";
                    sb += " </div>";
                    sb += " </div>";
                    sb += " </div>";
                    sb += " </div>";
                    sb += " </div>";
                    for (var sp = 0; sp < HBRoomResult[0].length; sp++) {
                        sb += " <div class='clearfix col-md-12 col-sm-12 col-xs-12 faredt'>";
                        sb += " <div class='clearfix col-md-8 col-sm-8 col-xs-12 '>";
                        sb += " <div class='col-md-3 col-sm-3 col-xs-6 '>";
                        sb += " <label class='radio-label Rmtype_" + HBRoomResult[0][sp].RoomId + "' for='Rmrdobtn_" + id + "_" + HBRoomResult[0][sp].RoomId + "'>" + HBRoomResult[0][sp].RoomName + "</label>";
                        sb += " </div>";
                        sb += " <div class='col-md-3 col-sm-3 col-xs-5 ResRm pad-0'>";
                        sb += " <p>" + HBRoomResult[0][sp].Inclusion + "</p>";
                        sb += " </div>";
                        sb += " <div class='col-md-3 col-sm-3 col-xs-6 ResRm  ttip pad-0'>";
                        sb += " <p class='avmeb'><div class='col-md-6 col-sm-6 col-xs-6 trm_mmber'><a class='max-occ' data-id='" + id + "' href='javascript:void(0);'>" + HBRoomResult[0][sp].RoomPaxCapacity + "</a></div></p>";
                        sb += " <div class='ttip-text'>";
                        sb += " <p>" + HBRoomResult[0][sp].Inclusion + "- RoomPaxCapacity " + HBRoomResult[0][sp].RoomPaxCapacity + "</p>";
                        sb += " </div>";
                        sb += " </div>";
                        sb += " <div class='col-md-3 col-sm-3 htlprice col-xs-6 pad-0'>";
                        sb += " <label class='ResRmPrice' id='Roomprice_" + HBRoomResult[0][sp].RoomId + "'>";
                        sb += " " + HBRoomResult[0][sp].Currency + " " + HBRoomResult[0][sp].TotalAmount + "<div class='ttip-text'>";
                        sb += " </div>";
                        sb += " </label>";
                        sb += " </div>";
                        sb += " </div>";

                        sb += "<div class='col-md-4 col-sm-4 col-xs-12 pad-0'>";
                        sb += "<div class='col-md-6 col-md-offset-0 col-sm-6 col-xs-4 col-xs-offset-2 respcancl  '>";
                        sb += "<a href='javascript:void(0);' class='num HBcancelpolicy cnclplcy' id='lnl-" + id + "_" + HBRoomResult[0][sp].RoomId + "' status='close'>Cancellation Policy<i class='fa fa-angle-double-down' aria-hidden='true'></i>";
                        sb += "</a>";
                        sb += "</div>";
                        sb += "<div class='col-md-6 col-sm-6 col-xs-3'>";
                        if (HBRoomResult[0][sp].HBCancellationPolicy != null) {
                            var SPTCancellationPolicy = [];
                            SPTCancellationPolicy.push([HBRoomResult[0][sp].HBCancellationPolicy.FromDate, HBRoomResult[0][sp].HBCancellationPolicy.ToDate, HBRoomResult[0][sp].HBCancellationPolicy.ChargeAmount])
                        } else {
                            var SPTCancellationPolicy = [];
                            SPTCancellationPolicy.push([HBRoomResult[0][sp].CancellationDeadLine])
                        }
                        if (HBRoomResult[0][sp].Supplier == 'HOTELBED') {
                            sb += "<button type='button' id='Book_" + HBRoomResult[0][sp].RoomId + "' disabled='disabled' class='button button-ripple Btn_Book edit_mod rbk' values='" + id + "|" + HBRoomResult[0][sp].BaseAmount + "|" + HBRoomResult[0][sp].MarkUp + "|" + HBRoomResult[0][sp].Commission + "|" + HBRoomResult[0][sp].TotalAmount + "|" + HBRoomResult[0][sp].Currency + "|" + HBRoomResult[0][sp].RoomName + "|" + HBRoomResult[0][sp].RoomId + "|" + HBRoomResult[0][sp].Roomtypecode + "|" + HBRoomResult[0][sp].RoomPaxCapacity + "|" + HBRoomResult[0][sp].AllocationDetails + "|" + HBRoomResult[0][sp].TotalGrossAmount + "|" + HBRoomResult[0][sp].Supplier_Id + "|" + HBRoomResult[0][sp].RateBasic + "|" + SPTCancellationPolicy + "'>Book</button>";
                        } else {
                            sb += "<button type='button' id='Book_" + HBRoomResult[0][sp].RoomId + "' class='button button-ripple Btn_Book edit_mod rbk' values='" + id + "|" + HBRoomResult[0][sp].BaseAmount + "|" + HBRoomResult[0][sp].MarkUp + "|" + HBRoomResult[0][sp].Commission + "|" + HBRoomResult[0][sp].TotalAmount + "|" + HBRoomResult[0][sp].Currency + "|" + HBRoomResult[0][sp].RoomName + "|" + HBRoomResult[0][sp].RoomId + "|" + HBRoomResult[0][sp].Roomtypecode + "|" + HBRoomResult[0][sp].RoomPaxCapacity + "|" + HBRoomResult[0][sp].AllocationDetails + "|" + HBRoomResult[0][sp].TotalGrossAmount + "|" + HBRoomResult[0][sp].Supplier_Id + "|" + HBRoomResult[0][sp].RateBasic + "|" + SPTCancellationPolicy + "'>Book</button>";
                        }

                        sb += "</div>"
                        sb += "</div>";

                        sb += "<div id='" + HBRoomResult[0][sp].RoomId + "' class='col-md-12 col-sm-12 col-xs-12 pad-0 room_cancel collapse HBcncelpolicy_" + id + "_" + HBRoomResult[0][sp].RoomId + "'>";
                        if (HBRoomResult[0][sp].CancellationPolicy != null) {
                            sb += "<table class='table table-striped'>";
                            sb += "<thead>"
                            sb += "<tr>";
                            sb += "<th>Terms</th>";                           
                            sb += "</tr>";
                            sb += "</thead>"
                            sb += "<tbody>"
                            sb += "<tr class='hbcncl'>";
                            sb += "<td class='hbcncldt'>" + HBRoomResult[0][sp].CancellationPolicy + "</td>";
                            sb += "</tr>";                            
                            sb += "</tbody>"
                            sb += "</table>";                            
                        } else {
                            if (HBRoomResult[0][sp].HBCancellationPolicy != null) {
                                sb += "<table class='table table-striped'>";
                                sb += "<thead>"
                                sb += "<tr>";
                                sb += "<th>From Date</th>";
                                sb += "<th>To Date</th>";
                                sb += "<th>Charge Amount</th>";
                                sb += "</tr>";
                                sb += "</thead>"
                                sb += "<tbody>"
                                sb += "<tr class='hbcncl'>";
                                sb += "<td class='hbcncldt'>Before or upto</td>";
                                sb += "<td class='hbcncldt'>" + HBRoomResult[0][sp].CancellationDeadLine + "</td>";
                                sb += "<td class='hbcncldt'>No Charge</td>";
                                sb += "</tr>";
                                sb += "<tr class='hbcncl'>";
                                sb += "<td class='hbcncldt'>" + HBRoomResult[0][sp].HBCancellationPolicy.FromDate + "</td>";
                                sb += "<td class='hbcncldt'>" + (HBRoomResult[0][sp].HBCancellationPolicy.ToDate != "" ? HBRoomResult[0][sp].HBCancellationPolicy.ToDate : "or Later") + "</td>";
                                sb += "<td class='hbcncldt'>" + HBRoomResult[0][sp].Currency + " " + HBRoomResult[0][sp].HBCancellationPolicy.ChargeAmount + "</td>";
                                sb += "</tr>";
                                sb += "</tbody>"
                                sb += "</table>";
                                sb += "<p class='cncl'>To avoid Cancellation Charges the Booking must be Cancelled on or before-" + HBRoomResult[0][sp].CancellationDeadLine + "</p>";
                            }
                            else {
                                sb += "<table class='table table-striped'>";
                                sb += "<thead>"
                                sb += "<tr>";
                                sb += "<th>From Date</th>";
                                sb += "<th>To Date</th>";
                                sb += "<th>Charge Amount</th>";
                                sb += "</tr>";
                                sb += "</thead>"
                                sb += "<tbody>"
                                sb += "<tr class='hbcncl'>";
                                sb += "<td class='hbcncldt'>Before or upto</td>";
                                sb += "<td class='hbcncldt'>" + HBRoomResult[0][sp].CancellationDeadLine + "</td>";
                                sb += "<td class='hbcncldt'>No Charge</td>";
                                sb += "</tr>";
                                sb += "</tbody>"
                                sb += "</table>";
                                sb += "<p class='cncl'>To avoid Cancellation Charges the Booking must be Cancelled on or before-" + HBRoomResult[0][sp].CancellationDeadLine + "</p>";
                            }
                        }
                        sb += "</div>";
                        sb += "</div>";

                        sb += " </div>";

                    }
                    sb += " </div>";
                    sb += " </div>";
                    $('.roomloader-' + id).addClass('none');
                    $('#RoomList_' + id).append(sb);
                }
                else {
                    sb += "<div class='noroomavail'>";
                    sb += "<img src='../Images/HotelImg/htlicon/no_room_Avail.svg' />";
                    sb += "</div>";
                    $('.roomloader-' + id).addClass('none');
                    $('#RoomList_' + id).append(sb);

                }
            }
        }
        else {
            if (HBRoomResult.length > 0) {
                sb += "<div class='faredt'>";
                sb += "<div class='roomtype head-tab room_tab_head '>";
                sb += "<ul class='list-inline HBRoom tab room_tab'>";
                if (roomcount > 0) {
                    for (r = 0; r < roomcount; r++) {
                        if (r == 0) {
                            sb += "<li id='lnk_Room" + (r + 1) + "' class='active'><a href='javascript:void(0);'>Room-" + (r + 1) + "</a></li>";
                        }
                        else {
                            sb += "<li id='lnk_Room" + (r + 1) + "' class=''><a href='javascript:void(0);'>Room-" + (r + 1) + "</a></li>";
                        }
                    }
                }
                sb += "</ul>";
                sb += "</div>";

                //ROOM1
                sb += "<div class='clearfix col-md-12 col-sm-12 col-xs-12 rmcount'>";
                if (roomcount > 0) {
                    var rc = 1
                    for (; rc <= roomcount; rc++) {
                        if (rc == 1) {
                            sb += "<div class='clearfix col-md-12 col-sm-12 col-xs-12 pad-0 faredt HBRoomContent div_Room" + rc + "' id='div_Room" + rc + "'>";
                        }
                        else {
                            sb += "<div class='clearfix col-md-12 col-sm-12 col-xs-12 pad-0 faredt HBRoomContent div_Room" + rc + " none' id='div_Room" + rc + "'>";
                        }
                        sb += "<div class=' clearfix col-md-12 col-sm-12 col-xs-12'>";
                        sb += "<p class='lblrm'>Room :&nbsp;<span class='num'>" + HBRoomResult[0][rc - 1].AdultCount + " Adult and " + HBRoomResult[0][rc - 1].ChildCount + " Child</span></p>";
                        sb += "</div>";

                        sb += "<div class='col-md-12 col-sm-12 col-xs-12 roomtype'>";
                        sb += "<div class='clearfix'>";
                        sb += "<div class='col-md-3 col-sm-3 col-xs-12'>";
                        sb += "<p>Room Type</p>";
                        sb += "</div>";
                        sb += "<div class='col-md-2 col-sm-2 col-xs-12'>";
                        sb += "<p>Board Type</p>";
                        sb += "</div>";
                        sb += "<div class='col-md-2 col-sm-2 col-xs-12'>";
                        sb += "<p>Status</p>";
                        sb += "</div>";
                        sb += "<div class='col-md-2 col-sm-2 col-xs-12'>";
                        sb += "<p>Price</p>";
                        sb += "</div>";
                        sb += "</div>";
                        sb += "</div>";
                        var roomlist = Enumerable.From(HBRoomResult[0]).Where(function (x) { return x.RoomCount == rc }).Select(function (c) { return c }).ToArray();
                        for (var h = 0; h < roomlist.length; h++) {
                            sb += "<div class='col-md-12 col-sm-12 col-xs-12 room_bder'>";
                            sb += "<div class='col-md-3 col-sm-3 col-xs-3 pad-0 Rmrdo radio'>";
                            if (roomcount > 1) {
                                sb += "<input type='radio' id='Roomrdobtn_" + rc + "" + h + "' name='rdo_room" + rc + "' class='' value='" + roomlist[h].SuppBaseAmount + "|" + roomlist[h].RoomName + "|room" + rc + "' />";
                                sb += "<label class='radio-label ' for='Roomrdobtn_" + rc + "" + h + "' >" + roomlist[h].RoomName + "</label>"
                            }
                            else {
                                sb += "<label class='room_name'>" + roomlist[h].RoomName + "</label>"
                            }
                            sb += "</div>";

                            sb += "<div class='col-md-2 col-sm-2 col-xs-4 pad-0'>";
                            sb += "<p class='room_req'>" + roomlist[h].Inclusion + "</p>";
                            sb += "</div>";

                            sb += "<div class='col-md-2 col-sm-2 col-xs-2 ttip pad-0'>";
                            sb += "<div class='col-md-12 col-sm-12 col-xs-12 member'><a class='max-occ' data-id='" + id + "' href='javascript:void(0);'>" + roomlist[h].RoomPaxCapacity + "</a>";
                            sb += "<div class='ttip-text'><p room_tip>" + roomlist[h].Inclusion + "- RoomPaxCapacity " + roomlist[h].RoomPaxCapacity + "</p></div></div>";
                            sb += "</div>";

                            sb += "<div class='col-md-2 col-sm-2 col-xs-3 pad-0'>";
                            sb += "<label class='rmdrp_price'>" + roomlist[h].Currency + " " + roomlist[h].SuppBaseAmount + "</label>";
                            sb += "</div>";

                            sb += "<div class='col-md-3 col-sm-3 col-xs-12 pad-0'>";
                            sb += "<div class='col-md-6 col-md-offset-0 col-sm-6 col-xs-4 col-xs-offset-2 respcancl  '>";
                            sb += "<a href='javascript:void(0);' class='num HBcancelpolicy cnclplcy' id='lnl-" + id + "_" + roomlist[h].RoomId + "' status='close'>Cancellation Policy<i class='fa fa-angle-double-down' aria-hidden='true'></i>";
                            sb += "</a>";
                            sb += "</div>";
                            sb += "</div>";
                            sb += "<div id='" + roomlist[h].RoomId + "' class='col-md-12 col-sm-12 col-xs-12 pad-0 room_cancel collapse HBcncelpolicy_" + id + "_" + roomlist[h].RoomId + "'>";
                            if (roomlist[h].HBCancellationPolicy != null) {
                                sb += "<table class='table table-striped'>";
                                sb += "<thead>"
                                sb += "<tr>";
                                sb += "<th>From Date</th>";
                                sb += "<th>To Date</th>";
                                sb += "<th>Charge Amount</th>";
                                sb += "</tr>";
                                sb += "</thead>"
                                sb += "<tbody>"
                                sb += "<tr class='hbcncl'>";
                                sb += "<td class='hbcncldt'>Before or upto</td>";
                                sb += "<td class='hbcncldt'>" + roomlist[h].CancellationDeadLine + "</td>";
                                sb += "<td class='hbcncldt'>No Charge</td>";
                                sb += "</tr>";
                                sb += "<tr class='hbcncl'>";
                                sb += "<td class='hbcncldt'>" + roomlist[h].HBCancellationPolicy.FromDate + "</td>";
                                sb += "<td class='hbcncldt'>" + (roomlist[h].HBCancellationPolicy.ToDate != "" ? roomlist[h].HBCancellationPolicy.ToDate : "-") + "</td>";
                                sb += "<td class='hbcncldt'>" + roomlist[h].HBCancellationPolicy.ChargeAmount + "</td>";
                                sb += "</tr>";
                                sb += "</tbody>"
                                sb += "</table>";
                                sb += "<p class='cncl'>To avoid Cancellation Charges the Booking must be Cancelled on or before-" + roomlist[h].CancellationDeadLine + "</p>";
                            }
                            else {
                                sb += "<table class='table table-striped'>";
                                sb += "<thead>"
                                sb += "<tr>";
                                sb += "<th>From Date</th>";
                                sb += "<th>To Date</th>";
                                sb += "<th>Charge Amount</th>";
                                sb += "</tr>";
                                sb += "</thead>"
                                sb += "<tbody>"
                                sb += "<tr class='hbcncl'>";
                                sb += "<td class='hbcncldt'>Before or upto</td>";
                                sb += "<td class='hbcncldt'>" + roomlist[h].CancellationDeadLine + "</td>";
                                sb += "<td class='hbcncldt'>No Charge</td>";
                                sb += "</tr>";
                                sb += "</tbody>"
                                sb += "</table>";
                                sb += "<p class='cncl'>To avoid Cancellation Charges the Booking must be Cancelled on or before-" + roomlist[h].CancellationDeadLine + "</p>";
                            }
                            sb += "</div>";
                            sb += "</div>";
                        }
                        sb += "</div>";
                    }
                }

                sb += "<div class='col-md-12 col-sm-12 col-xs-12 Rmfare roomfooter none'>";
                sb += "<div class='col-md-9 col-sm-10 col-xs-12 rmfre'>";
                sb += "<ul class='list-inline'>";
                sb += "<li class='multi_room1' id='multi_room1' class='none'></li>";
                sb += "<li class='multi_room2' id='multi_room2' class='none'></li>";
                sb += "<li class='multi_room3' id='multi_room3' class='none'></li>";
                sb += "<li class='multi_room4' id='multi_room4' class='none'></li>";
                sb += "</ul>";
                sb += "</div>";
                sb += "<div class='col-md-3 col-sm-2 col-xs-12 rmfre'>";
                sb += "<div class='col-md-6 col-sm-6 col-xs-6'><label>TotalFare</label><br/><span class='num totalroomamount'></span></div>";
                sb += "<div class='col-md-6 col-sm-6 col-xs-6'><button type='button' id='HtlbedBook_" + htlroomlistquery[0].HId.split("_")[1] + "' class='button button-ripple edit_mod rmfare Btn_Book' disabled='disabled'>Book</button></div>";
                sb += "</div>";
                sb += "</div>";
                sb += "</div>";
                $('.roomloader-' + id).addClass('none');
                $('#RoomList_' + id).append(sb);

            }
            else {
                sb += "<div class='noroomavail'>";
                sb += "<img src='../Images/HotelImg/htlicon/no_room_Avail.svg' /></div>";
                $('#RoomList_' + id).append(sb);
            }
        }

        //START SELECT PAGE CLICK FUN
        $('.Btn_Book').click(function () {
            RoomDetails = [];
            RoomDetails.push($(this).attr('values'));
            var id = RoomDetails[0].split("|")[7];
            $('.HBcncelpolicy_' + id).slideToggle('slow');
            selecthotel(RoomDetails);
        });
        //END SELECT PAGE CLICK FUN   

        $('.HBcancelpolicy').click(function () {
            var id = $(this).attr('id').split('-')[1];
            var status = $(this).attr('status');
            $('.HBcncelpolicy_' + id).slideToggle('slow');
            if (status == "close") {
                $('.HBcancelpolicy').attr('status', 'open');
                $('.HBcancelpolicy i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
            }
            else {
                $('.HBcancelpolicy').attr('status', 'close');
                $('.HBcancelpolicy i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
            }
        });

        //START ROOMTYPE VIEW//
        $('.HBRoom li').click(function () {
            $('.HBRoom li').removeClass('active');
            $(this).addClass('active');
            var id = $(this).attr('id').split('_')[1];
            $('.HBRoomContent').addClass('none');
            $('.div_' + id).removeClass('none');

        });
        //END ROOMTYPE VIEW//

        $('.HBRoomContent input[type=radio]').change(function () {
            $('.roomfooter').removeClass('none');
            var roomno = $(this).val().split('|')[2];
            $('.multi_' + roomno).empty();
            $('.totalroomamount').empty();
            var sbmr = "";
            sbmr += "<div class='multiroom'><label>" + $(this).val().split('|')[1] + "</label><br />";
            sbmr += "<span class='num roomprice'>" + $(this).val().split('|')[0] + "</span></div>";
            $('.multi_' + roomno).removeClass('none').append(sbmr);

            var multiroomamount = 0.00;
            $('.multiroom').each(function () {
                multiroomamount += parseFloat($(this).find('.roomprice').html(), 10);
            });
            $('.totalroomamount').empty().html(multiroomamount);

        });
    }
    //END HB AND SPT ROOM RESULT

    //START HOTEL SELECT 
    function selecthotel(RoomDetails) {
        var RoomRst = hotelRS;
        var htlid = RoomDetails[0].split("|")[0];
        var htlroomlistquery = Enumerable.From(RoomRst)
         .Where(function (x) { return x.HId.split("_")[1].toString().toUpperCase().trim() == htlid }).ToArray();

        var HtlSelectRQ = {
            LogDetails: $("#hdnlogdeatails").val(),
            HotelId: htlroomlistquery[0].HId,
            TraceId: htlroomlistquery[0].TId,
            HotelChain: htlroomlistquery[0].HtChain,
            Vendor: htlroomlistquery[0].Supp,
            Supplier_Id: htlroomlistquery[0].SuId,
            Destination: City,
            HotelCity: City.split(",")[0],
            CheckIn: CheckIn,
            Checkout: CheckOut,
            Hotelname: htlroomlistquery[0].HtlNm,
            HotelAddress: htlroomlistquery[0].Add,
            Rating: htlroomlistquery[0].Ratn,
            Lat: htlroomlistquery[0].Lat,
            Lng: htlroomlistquery[0].Lng,
            Adcount: iRes_AdultCount,
            Chcount: iRes_ChildCount,
            Image: htlroomlistquery[0].ImgUrl,
            Nights: nights,
            Rooms: LstRoom,
            Rmcount: roomcount,
            ClientCountryId: CountryId,
        }
        var TtlTax = (RoomDetails[0].split("|")[2] - RoomDetails[0].split("|")[3]);
        var HtlRoomRQ = {
            Id: RoomDetails[0].split("|")[0],
            BaseAmount: RoomDetails[0].split("|")[1],
            MarkUp: RoomDetails[0].split("|")[2],
            Commission: RoomDetails[0].split("|")[3],
            TotalAmount: RoomDetails[0].split("|")[4],
            TotalTax: TtlTax,
            CurrencyCode: RoomDetails[0].split("|")[5],
            RoomType: RoomDetails[0].split("|")[6],
            RoomId: RoomDetails[0].split("|")[7],
            Roomtypecode: RoomDetails[0].split("|")[8],
            RoomPaxCapacity: RoomDetails[0].split("|")[9],
            AllocationDetails: RoomDetails[0].split("|")[10],
            CancellationPolicy: RoomDetails[0].split("|")[14],
            Supplier_Id: RoomDetails[0].split("|")[12],
            RateBasic: RoomDetails[0].split("|")[13],
            TotalGrossAmount: RoomDetails[0].split("|")[11],
        }
        var HotelAvailRS = {
            AvailResponse: AvailResponse,
            City: City,
            CheckIn: CheckIn,
            CheckOut: CheckOut,
            Nights: nights,
            Rooms: roomcount,
            Adult: iRes_AdultCount,
            Child: iRes_ChildCount
        }
        var HotelSelectRq = { HtlDetailRQ: JSON.stringify(HtlSelectRQ), HtlRoomRQ: JSON.stringify(HtlRoomRQ), HotelAvailRS: JSON.stringify(HotelAvailRS) }
        $.ajax({
            type: 'POST',
            url: "/Hotel/GetHotelSelectRQ",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(HotelSelectRq),
            success: function (data) {
                if (data.StatusCode == "00") {
                    toasts.showError(data.ErrorMsg);
                    return false;
                }
                else if (data.StatusCode == "06") {
                    window.location.href = $("#hdfSessionExpired").val();
                }
                else if (data.StatusCode == "01") {
                    window.location.href = $("#hdfUrlAction").val() + "?LOGINREFERENCE=" + $("#hdnlogdeatails").val() + "&HOTELDETAILS=" + data.Result;
                    return false;
                }
            }

        });
    }
    //END HOTEL SELECT 

    function GenerateHotelTable(printarray) {

        var mailfun = "";
        try {
            var result = hotelRS;
            var i = 0;
            for (i ; i < printarray.length; i++) {
                var Htlresult = Enumerable.From(result)
                              .Where(function (x) { return x.HId.split('_')[1].toString().toUpperCase().trim() == printarray[i] }).ToArray();
                for (var j = 0; j < Htlresult.length; j++) {
                    mailfun += "<tr>"
                    mailfun += "<td>"
                    mailfun += "<table style='width: 100%;background-color: #464646;border-top-left-radius: 5px;border-top-right-radius: 5px;'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr>"
                    mailfun += "<td width='116'>"
                    mailfun += "<table width='100%' border='0' cellspacing='0'cellpadding='0'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr>"
                    mailfun += "<td height='10'></td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td align='center' valign='top'>"
                    mailfun += "<img src=" + Htlresult[j].ImgUrl + " alt='price-1' style='border:none;' width='46' />"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td height='10'></td>"
                    mailfun += "</tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "<td width='348'>"
                    mailfun += "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr>"
                    mailfun += "<td height='10'></td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td>"
                    mailfun += "<table width='100%'>"
                    mailfun += "<tr>"
                    mailfun += "<td><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif; letter-spacing: 0.5px;'> " + Htlresult[j].HtlNm + "</p></td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td><p style='font-size: 10px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif; letter-spacing: 0.5px;'>" + Htlresult[j].Add + "</p></td>"
                    mailfun += "</tr>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td height='10'></td>"
                    mailfun += "</tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "<td width='116'>"
                    mailfun += "<table width='100%' border='0' cellspacing='0' cellpadding='0'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr>"
                    mailfun += "<td height='10'></td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td align='center' valign='top'>"
                    mailfun += "<table width='100%'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr><td><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif;'>" + Htlresult[j].Cur + " " + Htlresult[j].StAmt + "</p></td></tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td height='10'></td>"
                    mailfun += "</tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td colspan='3' align='center'>"
                    mailfun += "<table width='100%' style='background-color :#afaeaf; border-top-left-radius :5px; border-top-right-radius: 5px;'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr>"
                    mailfun += "<td height='2'></td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td width='30%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif;'>Image</p></td>"
                    mailfun += "<td width='20%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif;'>Checkin</p></td>"
                    mailfun += "<td width='20%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif;'>Checkout</p></td>"
                    mailfun += "<td width='10%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif;'>Nights</p></td>"
                    mailfun += "<td width='20%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#fff; font-family: Arial,Tahoma, Helvetica, sans-serif;'>Ratting</p></td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td height='2'></td>"
                    mailfun += "</tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td colspan='3' align='center'>"
                    mailfun += "<table width='100%' style='background-color: #ffffff;border-top-left-radius: 0px;border-top-right-radius: 0px;'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr>"
                    mailfun += "<td>"
                    mailfun += "<table width='100%'>"
                    mailfun += "<tbody>"
                    mailfun += "<tr>"
                    mailfun += "<td height='5'></td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td width='30%' align='center' valign='top'><img src=" + Htlresult[j].ImgUrl + " alt='price-1' style='border:none;' width='150' /></td>"
                    mailfun += "<td width='20%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#464646; font-family: Arial,Tahoma, Helvetica, sans-serif;'>" + CheckIn + "</p></td>"
                    mailfun += "<td width='20%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#464646; font-family: Arial,Tahoma, Helvetica, sans-serif;'>" + CheckOut + "</p></td>"
                    mailfun += "<td width='10%' align='center'><p style='font-size: 13px; line-height: 18px; margin: 0; padding: 0; color:#464646; font-family: Arial,Tahoma, Helvetica, sans-serif;'>" + nights + "</p></td>"
                    mailfun += "<td width='20%' align='center'>"
                    mailfun += "<table width='50%'>"
                    mailfun += "<tr>"
                    mailfun += "<td align='center' valign='middle'>"
                    for (var k = 0; k < Htlresult[j].Ratn; k++) {
                        mailfun += "<img src='../Images/HotelImg/htlicon/htlstrrating.svg' alt='' width='10' style='border:none;' hspace='0' vspace='0'/>"
                    }
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "<tr>"
                    mailfun += "<td height='5'></td>"
                    mailfun += "</tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                    mailfun += "</tbody>"
                    mailfun += "</table>"
                    mailfun += "</td>"
                    mailfun += "</tr>"
                }

            }
            return mailfun;
        }
        catch (e) {
        }

    }

    //FILTER VIEW//
    $('.filter_tab li').click(function () {
        $('.filter_tab li').removeClass('active');
        $('.htl_avail').addClass('none');
        $(this).addClass('active');
        var id = $(this).attr('id').split('_')[1];
        $('#div_' + id).removeClass('none');
        if ($('#lnk_mapview').hasClass('active')) {
            InitiazeMap();
        }
        $('.filter_tab li').each(function () {
            var src = $(this).find('img').attr('src').split('/');
            if ($(this).hasClass('active')) {
                $(this).find('img').removeAttr('src').attr('src', '../Images/HotelImg/htlicon/w-' + src[src.length - 1].replace('w-', ''));
            }
            else {
                $(this).find('img').removeAttr('src').attr('src', '../Images/HotelImg/htlicon/' + src[src.length - 1].replace('w-', ''));
            }
        });
    });
    //END FILTER VIEW//

    //START HOTEL SORTING FUNCTION
    $(".sorting_pannel .htlsort").click(function () {
        var SortingName = $(this).attr('id').split('_')[1];
        var sortOrder = $(this).attr('data-sort');
        Hotel_Sorting(SortingName, sortOrder);
        if (sortOrder == "asc") {
            $(this).attr('data-sort', 'desc');
        }
        else {
            $(this).attr('data-sort', 'asc');
        }
    });
    //END HOTEL SORTING FUNCTION

    //STAR RATTING CLICK FUN
    $('#StarRating-htl li').click(function () {
        StarRating_Flag = [];
        var status = $(this).attr('data-status');
        if (status == "active") {
            $(this).attr('data-status', 'deactive')
            $(this).removeClass('active')
        }
        else {
            $(this).attr('data-status', 'active')
            $(this).addClass('active')
        }

        $('#StarRating-htl li').each(function () {
            if ($(this).hasClass('active')) {
                StarRating_Flag.push(this.id.split('-')[0]);
            }
        });
        Filter_Bind();
    });
    //END STAR RATTING 

    //USER RATTING CLICK FUN
    $('#UserRating-htl li').click(function () {
        UserRating_Flag = [];
        var status = $(this).hasClass('active');
        if (status == "active") {
            $(this).attr('data-status', 'deactive')
            $(this).removeClass('active')
        }
        else {
            $(this).attr('data-status', 'active')
            $(this).addClass('active')
        }
        $('#UserRating-htl li').each(function () {
            if ($(this).hasClass('active')) {
                UserRating_Flag.push(this.id.split('-')[0]);
            }
        });
        Filter_Bind();
    });
    //END USER RATTING 

    //START ADDRESS FILTERATION
    $('#txtHtlName, #txtAreaName, #txtPostelCode').keyup(function () {
        Hotel_Filter();
        return true;
    });
    //END ADDRESS FILTERATION

    //START FILTER POSTION FIX FUN
    var filterposition = $('.filter_panel').offset().top;
    $(window).bind('scroll', function () {
        if ($('#modify').attr('data-status') == "modify") {
            if (($(window).scrollTop() > 550) && ($(window).width() > 767)) {
                $('.filter_panel').addClass('filter-fix');
            }
            else {
                $('.filter_panel').removeClass('filter-fix');
            }
        }
        else {
            if (($(window).scrollTop() > 180) && ($(window).width() > 767)) {
                $('.filter_panel').addClass('filter-fix');
            }
            else {
                $('.filter_panel').removeClass('filter-fix');
            }
        }
    });
    //END FILTER POSTION FIX FUN

    //START FILTER LI CLICK
    $(".menu-content li.collapsed").click(function () {
        var target = $(this).attr('data-target');
        var status = $(this).attr('aria-expanded');
        if (status == "true") {
            $(".menu-content li .arrow i").removeClass("fa-angle-up").addClass("fa-angle-down");
            $(this).find('.arrow i').removeClass("fa-angle-down").addClass("fa-angle-up");
            $(this).removeClass("active");
        }
        else {
            $(".menu-content li .arrow i").removeClass("fa-angle-down").addClass("fa-angle-up");
            $(this).find('.arrow i').removeClass("fa-angle-up").addClass("fa-angle-down");
            $("li.collapsed").removeClass("active");
            $(this).addClass("active");
        }
        $('.menu-content .sub-menu').hide(500);
        $('.menu-content #' + target).show(500);
    });
    //END FILTER LI CLICK

    //START FILTER RESET
    $('#lbl_Reset').click(function () {
        //START ADVANCE FILTER CHECKBOX
        //AMENITIES
        $('#chk_AminityAll').attr('checked', 'true');
        if ($('#chk_AminityAll').attr('checked')) {
            $('#Hotel_Amenity').find('input[type="checkbox"]').each(function () {
                $(this).prop('checked', 'true')
            });
        }
        //END AMENITIES

        //RESULT RESET FILTER
        var resulthtl = hotelRS;
        var maxPrice = 0;//Math.max.apply(null, result.map(function (a) { return a.aTPrz; }));
        var minPrice = Math.min.apply(null, resulthtl.map(function (a) { return a.StAmt; }));
        $('#Htlavail').children('.main').each(function () {
            var BookPrice = parseFloat($(this).find('.price').html());
            maxPrice = (BookPrice >= maxPrice) ? BookPrice : maxPrice;
            minPrice = (BookPrice <= minPrice) ? BookPrice : minPrice;
        });
        MinPriceFlag = Math.floor(minPrice);
        MaxPriceFlag = Math.ceil(maxPrice);
        $('#htlslider').find('.price-range-min').remove();
        $('#htlslider').find('.price-range-max').remove();
        slider(MinPriceFlag, MaxPriceFlag);

        $('#txtHtlName').val('');
        $('#txtAreaName').val('');
        $('#txtPostelCode').val('');
        //STAR RATING
        $('.Hotel_StarRating li').each(function () {
            $(this).addClass('active')
        });
        //USER RATING
        $('.Hotel_UserRating li').each(function () {
            $(this).addClass('active')
        });
        //AMENITIES
        $('#Amenities-htl').find('input[type="checkbox"]').each(function () {
            $(this).prop('checked', 'true')
        });
        $('#Htlavail').children('.main').removeClass('none');
        var HotelAvail = $('#Htlavail').children('.main').not('.none').length;
        $('#Htl_availablecount').html((HotelAvail));
        //Filter_Bind();

    });
    //END FILTER RESET

    //START CAROUSEL FUNCTION
    $('#myCarousel').carousel({
        interval: 5000
    });

    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");

        var id = /-(\d+)$/.exec(id_selector)[1];
        console.log(id_selector, id);
        jQuery('#myCarousel').carousel(parseInt(id));

    });

    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
    //END CAROUSEL FUNCTION

    //START SCROLL FUNCTION
    $(window).on("scroll", function () {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            try {
                if (hotelRS.length > (HotelavailEndIndex + 20))
                    HotelavailEndIndex = HotelavailEndIndex + 20;
                else
                    HotelavailEndIndex = hotelRS.length;
                if (hotelRS.length > HotelavailStartIndex) {
                    Bind_HotelResult(hotelRS);

                    var rsthtl = hotelRS;
                    var maxPrice = 0;//Math.max.apply(null, result.map(function (a) { return a.aTPrz; }));
                    var minPrice = Math.min.apply(null, rsthtl.map(function (a) { return a.StAmt; }));
                    $('#Htlavail').children('.main').each(function () {
                        var BookPrice = parseFloat($(this).find('.price').html());
                        maxPrice = (BookPrice >= maxPrice) ? BookPrice : maxPrice;
                        minPrice = (BookPrice <= minPrice) ? BookPrice : minPrice;
                    });
                    MinPriceFlag = Math.floor(minPrice);
                    MaxPriceFlag = Math.ceil(maxPrice);
                    $('#htlslider').find('.price-range-min').remove();
                    $('#htlslider').find('.price-range-max').remove();
                    slider(MinPriceFlag, MaxPriceFlag);

                    Hotel_Filter();
                    return false;
                }
            }
            catch (e) {
                var rst = "";
            }

        }
    });
    //END SCROLL FUNCTION

});

//START MAP FUNCTION
function isFiltered(obj) {

    var fareFlag = false;
    var result = obj;

    if ((parseFloat(result.StAmt) >= parseFloat(New_MinPriceFlag)) && ((parseFloat(result.StAmt) <= parseFloat(New_MaxPriceFlag)))) {
        fareFlag = true;
    }
    if (fareFlag) {
        if (New_HotelName_Falg.length > 0) {
            if (result.HtlNm.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase().indexOf(New_HotelName_Falg.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase()) >= 0) {
                fareFlag = true;
            }
            else {
                fareFlag = false;
            }
        }
    }

    if (fareFlag) {
        if (New_AreaName_Flag.length > 0) {
            if (result.Add.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase().indexOf(New_AreaName_Flag.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase()) >= 0) {
                fareFlag = true;
            }
            else {
                fareFlag = false;
            }
        }

    }

    if (fareFlag) {
        if (New_PostelCode_Flag.length > 0) {
            if (result.Add.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase().indexOf(New_PostelCode_Flag.toString().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase()) >= 0) {
                fareFlag = true;
            }
            else {
                fareFlag = false;
            }

        }
    }

    if (fareFlag) {
        if (New_StarRating_Flag.length > 0) {
            for (var str = 0; str < New_StarRating_Flag.length; str++) {
                if (parseInt(New_StarRating_Flag[str]) == parseInt(result.Ratn)) {
                    fareFlag = true;
                    break;
                }
                else {
                    fareFlag = false;
                }
            }
        }
        else {
            fareFlag = false;
        }
    }

    var Amenity = "";
    if (result.Amty != null) {
        for (var a = 0; a < result.Amty.length; a++) {
            if (a == result.Amty.length) {
                Amenity += result.Amty[a].Name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase();
            }
            else {
                Amenity += result.Amty[a].Name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toUpperCase() + ", ";
            }
        }
        if (fareFlag) {
            if (New_Amenities_Flag.length > 0) {
                for (var amt = 0; amt < Amenities_Flag.length; amt++) {
                    var aminarray = Amenity.split(',');
                    if ($.inArray(aminarray, Amenities_Flag) != 0) {
                        fareFlag = true;
                        break;
                    }
                    else {
                        fareFlag = false;
                    }
                }
            }
            else {
                fareFlag = false;
            }
        }
    }

    return fareFlag;
}
//END MAP FUNCTION
