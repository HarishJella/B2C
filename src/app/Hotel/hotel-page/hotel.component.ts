import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { hotelModifySearch } from '../hotel.modify.component';
import { Hotel, HotelServiceService } from '../hotel-service/hotel-service.service';

// import { hotelInterface } from '../hotel.interface';

// import { catchError, retry } from 'rxjs/operators';




@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})


export class HotelComponent implements OnInit {
  stickyTop: string = "sticky-top";
  public passengers_state;
  HotelDetails: any;
  HotelDetailsOriginal: any;
  error: any;
  showHotelLoader: boolean = true;

  hotelCities: object = {
    "root": {
      "#text": "",
      "row": [
        {
          "@attributes": {
            "city": "AARAU,CH",
            "code": "ZDA"
          }
        },
        {
          "@attributes": {
            "city": "AHE Atoll,PF",
            "code": "AHE"
          }
        },
        {
          "@attributes": {
            "city": "ASHBURTON,NZ",
            "code": "ASG"
          }
        },
        {
          "@attributes": {
            "city": "AUBURN,US",
            "code": "AUN"
          }
        },
        {
          "@attributes": {
            "city": "AWABA,PG",
            "code": "AWB"
          }
        },
        {
          "@attributes": {
            "city": "Aabenraa,DK",
            "code": "XNR"
          }
        },
        {
          "@attributes": {
            "city": "Aachen,DE",
            "code": "AAH"
          }
        },
        {
          "@attributes": {
            "city": "Aalborg,DK",
            "code": "AAL"
          }
        },
        {
          "@attributes": {
            "city": "Aalesund,NO",
            "code": "AES"
          }
        },
        {
          "@attributes": {
            "city": "Aalsmeer,NL",
            "code": "QFA"
          }
        },
        {
          "@attributes": {
            "city": "Aappilattoq,GL",
            "code": "AOQ"
          }
        },
        {
          "@attributes": {
            "city": "Aappilattoq Nanortalik,GL",
            "code": "QUV"
          }
        },
        {
          "@attributes": {
            "city": "Aarhus,DK",
            "code": "AAR"
          }
        },
        {
          "@attributes": {
            "city": "Aasiaat,GL",
            "code": "JEG"
          }
        },
        {
          "@attributes": {
            "city": "Abadan,IR",
            "code": "ABD"
          }
        },
        {
          "@attributes": {
            "city": "Abaiang,KI",
            "code": "ABF"
          }
        },
        {
          "@attributes": {
            "city": "Abakan,RU",
            "code": "ABA"
          }
        },
        {
          "@attributes": {
            "city": "Abbeville,FR",
            "code": "XAB"
          }
        },
        {
          "@attributes": {
            "city": "Abbotsford,CA",
            "code": "YXX"
          }
        },
        {
          "@attributes": {
            "city": "Abbs,YE",
            "code": "EAB"
          }
        },
        {
          "@attributes": {
            "city": "Abemama,KI",
            "code": "AEA"
          }
        },
        {
          "@attributes": {
            "city": "Aberdeen,US",
            "code": "APG"
          }
        },
        {
          "@attributes": {
            "city": "Aberdeen,US",
            "code": "ABR"
          }
        },
        {
          "@attributes": {
            "city": "Aberdeen,GB",
            "code": "ABZ"
          }
        },
        {
          "@attributes": {
            "city": "Abha,SA",
            "code": "AHB"
          }
        },
        {
          "@attributes": {
            "city": "Abidjan,CI",
            "code": "ABJ"
          }
        },
        {
          "@attributes": {
            "city": "Abilene,US",
            "code": "ABI"
          }
        },
        {
          "@attributes": {
            "city": "Abingdon,US",
            "code": "VJI"
          }
        },
        {
          "@attributes": {
            "city": "Abu Dhabi,AE",
            "code": "AUH"
          }
        },
        {
          "@attributes": {
            "city": "Abu Dhabi cities,AE",
            "code": "ZVJ"
          }
        },
        {
          "@attributes": {
            "city": "Abu Simbel,EG",
            "code": "ABS"
          }
        },
        {
          "@attributes": {
            "city": "Abuja,NG",
            "code": "ABV"
          }
        },
        {
          "@attributes": {
            "city": "Acandi,CO",
            "code": "ACD"
          }
        },
        {
          "@attributes": {
            "city": "Acapulco,MX",
            "code": "ACA"
          }
        },
        {
          "@attributes": {
            "city": "Acarigua,VE",
            "code": "AGV"
          }
        },
        {
          "@attributes": {
            "city": "Accra,GH",
            "code": "ACC"
          }
        },
        {
          "@attributes": {
            "city": "Ada OK,US",
            "code": "ADT"
          }
        },
        {
          "@attributes": {
            "city": "Adak Island,US",
            "code": "ADK"
          }
        },
        {
          "@attributes": {
            "city": "Adana,TR",
            "code": "ADA"
          }
        },
        {
          "@attributes": {
            "city": "Addis Ababa,ET",
            "code": "ADD"
          }
        },
        {
          "@attributes": {
            "city": "Adelaide,AU",
            "code": "ADL"
          }
        },
        {
          "@attributes": {
            "city": "Adelboden,CH",
            "code": "ZDB"
          }
        },
        {
          "@attributes": {
            "city": "Aden,YE",
            "code": "ADE"
          }
        },
        {
          "@attributes": {
            "city": "Adiyaman,TR",
            "code": "ADF"
          }
        },
        {
          "@attributes": {
            "city": "Adrar,DZ",
            "code": "AZR"
          }
        },
        {
          "@attributes": {
            "city": "Adriamena,MG",
            "code": "WAD"
          }
        },
        {
          "@attributes": {
            "city": "Adrian,US",
            "code": "ADG"
          }
        },
        {
          "@attributes": {
            "city": "Aek Godang,ID",
            "code": "AEG"
          }
        },
        {
          "@attributes": {
            "city": "Afyon,TR",
            "code": "AFY"
          }
        },
        {
          "@attributes": {
            "city": "Agadir,MA",
            "code": "AGA"
          }
        },
        {
          "@attributes": {
            "city": "Agartala,IN",
            "code": "IXA"
          }
        },
        {
          "@attributes": {
            "city": "Agatti Island,IN",
            "code": "AGX"
          }
        },
        {
          "@attributes": {
            "city": "Agaun,PG",
            "code": "AUP"
          }
        },
        {
          "@attributes": {
            "city": "Agde,FR",
            "code": "XAG"
          }
        },
        {
          "@attributes": {
            "city": "Agen,FR",
            "code": "AGF"
          }
        },
        {
          "@attributes": {
            "city": "Aggeneys,ZA",
            "code": "AGZ"
          }
        },
        {
          "@attributes": {
            "city": "Aghios Nicolaos,GR",
            "code": "ZAN"
          }
        },
        {
          "@attributes": {
            "city": "Agra,IN",
            "code": "AGR"
          }
        },
        {
          "@attributes": {
            "city": "Agri,TR",
            "code": "AJI"
          }
        },
        {
          "@attributes": {
            "city": "Agrigento,IT",
            "code": "QAO"
          }
        },
        {
          "@attributes": {
            "city": "Agrinion,GR",
            "code": "AGQ"
          }
        },
        {
          "@attributes": {
            "city": "Aguadilla,US",
            "code": "BQN"
          }
        },
        {
          "@attributes": {
            "city": "Aguascalientes,MX",
            "code": "AGU"
          }
        },
        {
          "@attributes": {
            "city": "Aguni,JP",
            "code": "AGJ"
          }
        },
        {
          "@attributes": {
            "city": "Ahmedabad,IN",
            "code": "AMD"
          }
        },
        {
          "@attributes": {
            "city": "Ahwaz,IR",
            "code": "AWZ"
          }
        },
        {
          "@attributes": {
            "city": "Aigle,CH",
            "code": "ZDC"
          }
        },
        {
          "@attributes": {
            "city": "Aiken,US",
            "code": "AIK"
          }
        },
        {
          "@attributes": {
            "city": "Ainsworth,US",
            "code": "ANW"
          }
        },
        {
          "@attributes": {
            "city": "Aiome,PG",
            "code": "AIE"
          }
        },
        {
          "@attributes": {
            "city": "Aioun Atrouss,MR",
            "code": "AEO"
          }
        },
        {
          "@attributes": {
            "city": "Airlie Beach,AU",
            "code": "WSY"
          }
        },
        {
          "@attributes": {
            "city": "Aitape,PG",
            "code": "ATP"
          }
        },
        {
          "@attributes": {
            "city": "Aitutaki,CK",
            "code": "AIT"
          }
        },
        {
          "@attributes": {
            "city": "Aix En Provence,FR",
            "code": "QXB"
          }
        },
        {
          "@attributes": {
            "city": "Aizawl,IN",
            "code": "AJL"
          }
        },
        {
          "@attributes": {
            "city": "Ajaccio,FR",
            "code": "AJA"
          }
        },
        {
          "@attributes": {
            "city": "Ajman cities,AE",
            "code": "QAJ"
          }
        },
        {
          "@attributes": {
            "city": "Akhiok,US",
            "code": "AKK"
          }
        },
        {
          "@attributes": {
            "city": "Akiachak,US",
            "code": "KKI"
          }
        },
        {
          "@attributes": {
            "city": "Akiak,US",
            "code": "AKI"
          }
        },
        {
          "@attributes": {
            "city": "Akita,JP",
            "code": "AXT"
          }
        },
        {
          "@attributes": {
            "city": "Akola,IN",
            "code": "AKD"
          }
        },
        {
          "@attributes": {
            "city": "Akron,US",
            "code": "CAK"
          }
        },
        {
          "@attributes": {
            "city": "Akron,US",
            "code": "AKO"
          }
        },
        {
          "@attributes": {
            "city": "Aksu,CN",
            "code": "AKU"
          }
        },
        {
          "@attributes": {
            "city": "Aktau,KZ",
            "code": "SCO"
          }
        },
        {
          "@attributes": {
            "city": "Akui,SB",
            "code": "AKS"
          }
        },
        {
          "@attributes": {
            "city": "Akulivik,CA",
            "code": "AKV"
          }
        },
        {
          "@attributes": {
            "city": "Akure,NG",
            "code": "AKR"
          }
        },
        {
          "@attributes": {
            "city": "Akureyri,IS",
            "code": "AEY"
          }
        },
        {
          "@attributes": {
            "city": "Akutan,US",
            "code": "KQA"
          }
        },
        {
          "@attributes": {
            "city": "Al Ain,AE",
            "code": "AAN"
          }
        },
        {
          "@attributes": {
            "city": "Al Baha,SA",
            "code": "ABT"
          }
        },
        {
          "@attributes": {
            "city": "Al Fujairah,AE",
            "code": "FJR"
          }
        },
        {
          "@attributes": {
            "city": "Al Ghaydah,YE",
            "code": "AAY"
          }
        },
        {
          "@attributes": {
            "city": "Al Hoceima,MA",
            "code": "AHU"
          }
        },
        {
          "@attributes": {
            "city": "Al Jouf,SA",
            "code": "AJF"
          }
        },
        {
          "@attributes": {
            "city": "Al Najaf,IQ",
            "code": "NJF"
          }
        },
        {
          "@attributes": {
            "city": "Al No,NO",
            "code": "XXR"
          }
        },
        {
          "@attributes": {
            "city": "Al Ula,SA",
            "code": "ULH"
          }
        },
        {
          "@attributes": {
            "city": "Alagoinhas,BR",
            "code": "QGS"
          }
        },
        {
          "@attributes": {
            "city": "Alakanuk,US",
            "code": "AUK"
          }
        },
        {
          "@attributes": {
            "city": "Alameda Naval Air Station,US",
            "code": "NGZ"
          }
        },
        {
          "@attributes": {
            "city": "Alamogordo,US",
            "code": "ALM"
          }
        },
        {
          "@attributes": {
            "city": "Alamos,MX",
            "code": "XAL"
          }
        },
        {
          "@attributes": {
            "city": "Alamosa,US",
            "code": "ALS"
          }
        },
        {
          "@attributes": {
            "city": "Alba Iulia,RO",
            "code": "QAY"
          }
        },
        {
          "@attributes": {
            "city": "Albacete,ES",
            "code": "ABC"
          }
        },
        {
          "@attributes": {
            "city": "Albany,US",
            "code": "ABY"
          }
        },
        {
          "@attributes": {
            "city": "Albany,US",
            "code": "ALB"
          }
        },
        {
          "@attributes": {
            "city": "Albany,AU",
            "code": "ALH"
          }
        },
        {
          "@attributes": {
            "city": "Albany,US",
            "code": "QWY"
          }
        },
        {
          "@attributes": {
            "city": "Albenga,IT",
            "code": "ALL"
          }
        },
        {
          "@attributes": {
            "city": "Albert Lea,US",
            "code": "AEL"
          }
        },
        {
          "@attributes": {
            "city": "Albertville,FR",
            "code": "XAV"
          }
        },
        {
          "@attributes": {
            "city": "Albi,FR",
            "code": "LBI"
          }
        },
        {
          "@attributes": {
            "city": "Albuq,YE",
            "code": "BUK"
          }
        },
        {
          "@attributes": {
            "city": "Albuquerque,US",
            "code": "ABQ"
          }
        },
        {
          "@attributes": {
            "city": "Albury,AU",
            "code": "ABX"
          }
        },
        {
          "@attributes": {
            "city": "Aldan,RU",
            "code": "ADH"
          }
        },
        {
          "@attributes": {
            "city": "Alderney,GB",
            "code": "ACI"
          }
        },
        {
          "@attributes": {
            "city": "Aldershot,CA",
            "code": "XLY"
          }
        },
        {
          "@attributes": {
            "city": "Aleknagik,US",
            "code": "WKK"
          }
        },
        {
          "@attributes": {
            "city": "Alencon,FR",
            "code": "XAN"
          }
        },
        {
          "@attributes": {
            "city": "Aleneva,US",
            "code": "AED"
          }
        },
        {
          "@attributes": {
            "city": "Aleppo,SY",
            "code": "ALP"
          }
        },
        {
          "@attributes": {
            "city": "Alert Bay,CA",
            "code": "YAL"
          }
        },
        {
          "@attributes": {
            "city": "Ales,FR",
            "code": "XAS"
          }
        },
        {
          "@attributes": {
            "city": "Alessandria,IT",
            "code": "QAL"
          }
        },
        {
          "@attributes": {
            "city": "Alexander Bay,ZA",
            "code": "ALJ"
          }
        },
        {
          "@attributes": {
            "city": "Alexander cities,US",
            "code": "ALX"
          }
        },
        {
          "@attributes": {
            "city": "Alexandra,NZ",
            "code": "ALR"
          }
        },
        {
          "@attributes": {
            "city": "Alexandria,US",
            "code": "AEX"
          }
        },
        {
          "@attributes": {
            "city": "Alexandria,EG",
            "code": "ALY"
          }
        },
        {
          "@attributes": {
            "city": "Alexandria,AU",
            "code": "AXL"
          }
        },
        {
          "@attributes": {
            "city": "Alexandria,US",
            "code": "AXN"
          }
        },
        {
          "@attributes": {
            "city": "Alexandria,CA",
            "code": "XFS"
          }
        },
        {
          "@attributes": {
            "city": "Alexandroupolis,GR",
            "code": "AXD"
          }
        },
        {
          "@attributes": {
            "city": "Alfenas,BR",
            "code": "QXW"
          }
        },
        {
          "@attributes": {
            "city": "Algeciras,ES",
            "code": "AEI"
          }
        },
        {
          "@attributes": {
            "city": "Alghero,IT",
            "code": "AHO"
          }
        },
        {
          "@attributes": {
            "city": "Algiers,DZ",
            "code": "ALG"
          }
        },
        {
          "@attributes": {
            "city": "Alicante,ES",
            "code": "ALC"
          }
        },
        {
          "@attributes": {
            "city": "Alice,US",
            "code": "ALI"
          }
        },
        {
          "@attributes": {
            "city": "Alice Springs,AU",
            "code": "ASP"
          }
        },
        {
          "@attributes": {
            "city": "Aliceville,US",
            "code": "AIV"
          }
        },
        {
          "@attributes": {
            "city": "Alitak,US",
            "code": "ALZ"
          }
        },
        {
          "@attributes": {
            "city": "Allahabad,IN",
            "code": "IXD"
          }
        },
        {
          "@attributes": {
            "city": "Allakaket,US",
            "code": "AET"
          }
        },
        {
          "@attributes": {
            "city": "Allentown,US",
            "code": "ABE"
          }
        },
        {
          "@attributes": {
            "city": "Alliance,US",
            "code": "AIA"
          }
        },
        {
          "@attributes": {
            "city": "Alluitsup Paa,GL",
            "code": "LLU"
          }
        },
        {
          "@attributes": {
            "city": "Alma,CA",
            "code": "YTF"
          }
        },
        {
          "@attributes": {
            "city": "Almaty,KZ",
            "code": "ALA"
          }
        },
        {
          "@attributes": {
            "city": "Almelo,NL",
            "code": "QYL"
          }
        },
        {
          "@attributes": {
            "city": "Almeria,ES",
            "code": "LEI"
          }
        },
        {
          "@attributes": {
            "city": "Along,IN",
            "code": "IXV"
          }
        },
        {
          "@attributes": {
            "city": "Alor,ID",
            "code": "ARD"
          }
        },
        {
          "@attributes": {
            "city": "Alor Setar,MY",
            "code": "AOR"
          }
        },
        {
          "@attributes": {
            "city": "Alotau,PG",
            "code": "GUR"
          }
        },
        {
          "@attributes": {
            "city": "Alpena,US",
            "code": "APN"
          }
        },
        {
          "@attributes": {
            "city": "Alpha,AU",
            "code": "ABH"
          }
        },
        {
          "@attributes": {
            "city": "Alpine,US",
            "code": "ALE"
          }
        },
        {
          "@attributes": {
            "city": "Alta,NO",
            "code": "ALF"
          }
        },
        {
          "@attributes": {
            "city": "Alta Floresta,BR",
            "code": "AFL"
          }
        },
        {
          "@attributes": {
            "city": "Altamira,BR",
            "code": "ATM"
          }
        },
        {
          "@attributes": {
            "city": "Altay,CN",
            "code": "AAT"
          }
        },
        {
          "@attributes": {
            "city": "Altenburg,DE",
            "code": "AOC"
          }
        },
        {
          "@attributes": {
            "city": "Altenrhein,CH",
            "code": "ACH"
          }
        },
        {
          "@attributes": {
            "city": "Alto Rio Senguerr,AR",
            "code": "ARR"
          }
        },
        {
          "@attributes": {
            "city": "Alton,US",
            "code": "ALN"
          }
        },
        {
          "@attributes": {
            "city": "Alton Downs,AU",
            "code": "AWN"
          }
        },
        {
          "@attributes": {
            "city": "Altoona,US",
            "code": "AOO"
          }
        },
        {
          "@attributes": {
            "city": "Altus,US",
            "code": "LTS"
          }
        },
        {
          "@attributes": {
            "city": "Alula,SO",
            "code": "ALU"
          }
        },
        {
          "@attributes": {
            "city": "Alvdal,NO",
            "code": "XJA"
          }
        },
        {
          "@attributes": {
            "city": "Alvesta,SE",
            "code": "XXA"
          }
        },
        {
          "@attributes": {
            "city": "Alxa Right Banner,CN",
            "code": "RHT"
          }
        },
        {
          "@attributes": {
            "city": "Alzey,DE",
            "code": "XZY"
          }
        },
        {
          "@attributes": {
            "city": "Amahai,ID",
            "code": "AHI"
          }
        },
        {
          "@attributes": {
            "city": "Amakusa,JP",
            "code": "AXJ"
          }
        },
        {
          "@attributes": {
            "city": "Amalfi,IT",
            "code": "AFP"
          }
        },
        {
          "@attributes": {
            "city": "Amami O Shima,JP",
            "code": "ASJ"
          }
        },
        {
          "@attributes": {
            "city": "Amanab,PG",
            "code": "AMU"
          }
        },
        {
          "@attributes": {
            "city": "Amarillo,US",
            "code": "AMA"
          }
        },
        {
          "@attributes": {
            "city": "Amasya,TR",
            "code": "MZH"
          }
        },
        {
          "@attributes": {
            "city": "Amazon Bay,PG",
            "code": "AZB"
          }
        },
        {
          "@attributes": {
            "city": "Ambanja,MG",
            "code": "IVA"
          }
        },
        {
          "@attributes": {
            "city": "Ambato,EC",
            "code": "ATF"
          }
        },
        {
          "@attributes": {
            "city": "Ambatomainty,MG",
            "code": "AMY"
          }
        },
        {
          "@attributes": {
            "city": "Ambatondrazaka,MG",
            "code": "WAM"
          }
        },
        {
          "@attributes": {
            "city": "Ambilobe,MG",
            "code": "AMB"
          }
        },
        {
          "@attributes": {
            "city": "Ambler,US",
            "code": "ABL"
          }
        },
        {
          "@attributes": {
            "city": "Amboise,FR",
            "code": "XAM"
          }
        },
        {
          "@attributes": {
            "city": "Ambon,ID",
            "code": "AMQ"
          }
        },
        {
          "@attributes": {
            "city": "Ambunti,PG",
            "code": "AUJ"
          }
        },
        {
          "@attributes": {
            "city": "Amchitka,US",
            "code": "AHT"
          }
        },
        {
          "@attributes": {
            "city": "Americana,BR",
            "code": "QWJ"
          }
        },
        {
          "@attributes": {
            "city": "Amersfoort,NL",
            "code": "QYM"
          }
        },
        {
          "@attributes": {
            "city": "Ames,US",
            "code": "AMW"
          }
        },
        {
          "@attributes": {
            "city": "Amherst,CA",
            "code": "XZK"
          }
        },
        {
          "@attributes": {
            "city": "Amiens,FR",
            "code": "QAM"
          }
        },
        {
          "@attributes": {
            "city": "Amman,JO",
            "code": "AMM"
          }
        },
        {
          "@attributes": {
            "city": "Ammassivik,GL",
            "code": "QUW"
          }
        },
        {
          "@attributes": {
            "city": "Amook Bay,US",
            "code": "AOS"
          }
        },
        {
          "@attributes": {
            "city": "Amos,CA",
            "code": "YEY"
          }
        },
        {
          "@attributes": {
            "city": "Ampanihy,MG",
            "code": "AMP"
          }
        },
        {
          "@attributes": {
            "city": "Ampara,LK",
            "code": "AFK"
          }
        },
        {
          "@attributes": {
            "city": "Amritsar,IN",
            "code": "ATQ"
          }
        },
        {
          "@attributes": {
            "city": "Amsterdam,NL",
            "code": "AMS"
          }
        },
        {
          "@attributes": {
            "city": "Anaa,PF",
            "code": "AAA"
          }
        },
        {
          "@attributes": {
            "city": "Anaco,VE",
            "code": "AAO"
          }
        },
        {
          "@attributes": {
            "city": "Anacostia,US",
            "code": "NDV"
          }
        },
        {
          "@attributes": {
            "city": "Anadyr,RU",
            "code": "DYR"
          }
        },
        {
          "@attributes": {
            "city": "Anaheim,US",
            "code": "ANA"
          }
        },
        {
          "@attributes": {
            "city": "Anaktuvuk Pass,US",
            "code": "AKP"
          }
        },
        {
          "@attributes": {
            "city": "Analalava,MG",
            "code": "HVA"
          }
        },
        {
          "@attributes": {
            "city": "Anapa,RU",
            "code": "AAQ"
          }
        },
        {
          "@attributes": {
            "city": "Anapolis,BR",
            "code": "APS"
          }
        },
        {
          "@attributes": {
            "city": "Anchorage,US",
            "code": "ANC"
          }
        },
        {
          "@attributes": {
            "city": "Ancona,IT",
            "code": "AOI"
          }
        },
        {
          "@attributes": {
            "city": "Ancortes,US",
            "code": "OTS"
          }
        },
        {
          "@attributes": {
            "city": "Ancud,CL",
            "code": "ZUD"
          }
        },
        {
          "@attributes": {
            "city": "Andahuaylas,PE",
            "code": "ANS"
          }
        },
        {
          "@attributes": {
            "city": "Andalsnes,NO",
            "code": "XGI"
          }
        },
        {
          "@attributes": {
            "city": "Andapa,MG",
            "code": "ZWA"
          }
        },
        {
          "@attributes": {
            "city": "Andenes,NO",
            "code": "ANX"
          }
        },
        {
          "@attributes": {
            "city": "Anderson,US",
            "code": "AID"
          }
        },
        {
          "@attributes": {
            "city": "Anderson,US",
            "code": "AND"
          }
        },
        {
          "@attributes": {
            "city": "Andizhan,UZ",
            "code": "AZN"
          }
        },
        {
          "@attributes": {
            "city": "Andorra La Vella,AD",
            "code": "ALV"
          }
        },
        {
          "@attributes": {
            "city": "Andros Town,BS",
            "code": "ASD"
          }
        },
        {
          "@attributes": {
            "city": "Anegada,VG",
            "code": "NGD"
          }
        },
        {
          "@attributes": {
            "city": "Aneityum,VU",
            "code": "AUY"
          }
        },
        {
          "@attributes": {
            "city": "Angel Fire,US",
            "code": "AXX"
          }
        },
        {
          "@attributes": {
            "city": "Angelholm,SE",
            "code": "AGH"
          }
        },
        {
          "@attributes": {
            "city": "Angermuende,DE",
            "code": "ZAX"
          }
        },
        {
          "@attributes": {
            "city": "Angers,FR",
            "code": "ANE"
          }
        },
        {
          "@attributes": {
            "city": "Angoon,US",
            "code": "AGN"
          }
        },
        {
          "@attributes": {
            "city": "Angouleme,FR",
            "code": "ANG"
          }
        },
        {
          "@attributes": {
            "city": "Anguganak,PG",
            "code": "AKG"
          }
        },
        {
          "@attributes": {
            "city": "Anguilla,AI",
            "code": "AXA"
          }
        },
        {
          "@attributes": {
            "city": "Aniak,US",
            "code": "ANI"
          }
        },
        {
          "@attributes": {
            "city": "Anita Bay,US",
            "code": "AIB"
          }
        },
        {
          "@attributes": {
            "city": "Aniwa,VU",
            "code": "AWD"
          }
        },
        {
          "@attributes": {
            "city": "Anjouan,KM",
            "code": "AJN"
          }
        },
        {
          "@attributes": {
            "city": "Ankang,CN",
            "code": "AKA"
          }
        },
        {
          "@attributes": {
            "city": "Ankara,TR",
            "code": "ANK"
          }
        },
        {
          "@attributes": {
            "city": "Ankavandra,MG",
            "code": "JVA"
          }
        },
        {
          "@attributes": {
            "city": "Ankazoabo,MG",
            "code": "WAK"
          }
        },
        {
          "@attributes": {
            "city": "Anklam,DE",
            "code": "QKQ"
          }
        },
        {
          "@attributes": {
            "city": "Ann Arbor,US",
            "code": "ARB"
          }
        },
        {
          "@attributes": {
            "city": "Ann MM,MM",
            "code": "VBA"
          }
        },
        {
          "@attributes": {
            "city": "Annaba,DZ",
            "code": "AAE"
          }
        },
        {
          "@attributes": {
            "city": "Annapolis,US",
            "code": "ANP"
          }
        },
        {
          "@attributes": {
            "city": "Annecy,FR",
            "code": "NCY"
          }
        },
        {
          "@attributes": {
            "city": "Annemasse,FR",
            "code": "QNJ"
          }
        },
        {
          "@attributes": {
            "city": "Annette Island,US",
            "code": "ANN"
          }
        },
        {
          "@attributes": {
            "city": "Anniston,US",
            "code": "ANB"
          }
        },
        {
          "@attributes": {
            "city": "Ansbach,DE",
            "code": "QOB"
          }
        },
        {
          "@attributes": {
            "city": "Anshan,CN",
            "code": "AOG"
          }
        },
        {
          "@attributes": {
            "city": "Anshun,CN",
            "code": "AVA"
          }
        },
        {
          "@attributes": {
            "city": "Anta,PE",
            "code": "ATA"
          }
        },
        {
          "@attributes": {
            "city": "Antalaha,MG",
            "code": "ANM"
          }
        },
        {
          "@attributes": {
            "city": "Antalya,TR",
            "code": "AYT"
          }
        },
        {
          "@attributes": {
            "city": "Antananarivo,MG",
            "code": "TNR"
          }
        },
        {
          "@attributes": {
            "city": "Anthony,US",
            "code": "ANY"
          }
        },
        {
          "@attributes": {
            "city": "Antibes,FR",
            "code": "XAT"
          }
        },
        {
          "@attributes": {
            "city": "Antigua,AG",
            "code": "ANU"
          }
        },
        {
          "@attributes": {
            "city": "Antlers,US",
            "code": "ATE"
          }
        },
        {
          "@attributes": {
            "city": "Antofagasta,CL",
            "code": "ANF"
          }
        },
        {
          "@attributes": {
            "city": "Antsalova,MG",
            "code": "WAQ"
          }
        },
        {
          "@attributes": {
            "city": "Antsohihy,MG",
            "code": "WAI"
          }
        },
        {
          "@attributes": {
            "city": "Antwerp,BE",
            "code": "ANR"
          }
        },
        {
          "@attributes": {
            "city": "Anuradhapura,LK",
            "code": "ACJ"
          }
        },
        {
          "@attributes": {
            "city": "Anvik,US",
            "code": "ANV"
          }
        },
        {
          "@attributes": {
            "city": "Anyang,CN",
            "code": "AYN"
          }
        },
        {
          "@attributes": {
            "city": "Aomori,JP",
            "code": "AOJ"
          }
        },
        {
          "@attributes": {
            "city": "Aosta,IT",
            "code": "AOT"
          }
        },
        {
          "@attributes": {
            "city": "Apalachicola,US",
            "code": "AAF"
          }
        },
        {
          "@attributes": {
            "city": "Apartado,CO",
            "code": "APO"
          }
        },
        {
          "@attributes": {
            "city": "Apataki,PF",
            "code": "APK"
          }
        },
        {
          "@attributes": {
            "city": "Apatzingan,MX",
            "code": "AZG"
          }
        },
        {
          "@attributes": {
            "city": "Apeldoorn,NL",
            "code": "QYP"
          }
        },
        {
          "@attributes": {
            "city": "Apia,WS",
            "code": "APW"
          }
        },
        {
          "@attributes": {
            "city": "Appenzell,CH",
            "code": "ZAP"
          }
        },
        {
          "@attributes": {
            "city": "Appleton,US",
            "code": "ATW"
          }
        },
        {
          "@attributes": {
            "city": "Applevalley,US",
            "code": "APV"
          }
        },
        {
          "@attributes": {
            "city": "Aqaba,JO",
            "code": "AQJ"
          }
        },
        {
          "@attributes": {
            "city": "Aqtobe,KZ",
            "code": "AKX"
          }
        },
        {
          "@attributes": {
            "city": "Aracaju,BR",
            "code": "AJU"
          }
        },
        {
          "@attributes": {
            "city": "Aracatuba,BR",
            "code": "ARU"
          }
        },
        {
          "@attributes": {
            "city": "Arad,RO",
            "code": "ARW"
          }
        },
        {
          "@attributes": {
            "city": "Aragip,PG",
            "code": "ARP"
          }
        },
        {
          "@attributes": {
            "city": "Araguaina,BR",
            "code": "AUX"
          }
        },
        {
          "@attributes": {
            "city": "Aranuka,KI",
            "code": "AAK"
          }
        },
        {
          "@attributes": {
            "city": "Arapoti,BR",
            "code": "AAG"
          }
        },
        {
          "@attributes": {
            "city": "Arar,SA",
            "code": "RAE"
          }
        },
        {
          "@attributes": {
            "city": "Araracuara,CO",
            "code": "ACR"
          }
        },
        {
          "@attributes": {
            "city": "Araraquara,BR",
            "code": "AQA"
          }
        },
        {
          "@attributes": {
            "city": "Ararat,AU",
            "code": "ARY"
          }
        },
        {
          "@attributes": {
            "city": "Arauca,CO",
            "code": "AUC"
          }
        },
        {
          "@attributes": {
            "city": "Arawa,PG",
            "code": "RAW"
          }
        },
        {
          "@attributes": {
            "city": "Araxa,BR",
            "code": "AAX"
          }
        },
        {
          "@attributes": {
            "city": "Arba Minch,ET",
            "code": "AMH"
          }
        },
        {
          "@attributes": {
            "city": "Arboga,SE",
            "code": "XXT"
          }
        },
        {
          "@attributes": {
            "city": "Arbon,CH",
            "code": "ZDD"
          }
        },
        {
          "@attributes": {
            "city": "Arcachon,FR",
            "code": "XAC"
          }
        },
        {
          "@attributes": {
            "city": "Arcata,US",
            "code": "ACV"
          }
        },
        {
          "@attributes": {
            "city": "Arctic Village,US",
            "code": "ARC"
          }
        },
        {
          "@attributes": {
            "city": "Ardabil,IR",
            "code": "ADU"
          }
        },
        {
          "@attributes": {
            "city": "Ardmore,NZ",
            "code": "AMZ"
          }
        },
        {
          "@attributes": {
            "city": "Ardmore,US",
            "code": "ADM"
          }
        },
        {
          "@attributes": {
            "city": "Arecibo,US",
            "code": "ARE"
          }
        },
        {
          "@attributes": {
            "city": "Arendal,NO",
            "code": "XGD"
          }
        },
        {
          "@attributes": {
            "city": "Arequipa,PE",
            "code": "AQP"
          }
        },
        {
          "@attributes": {
            "city": "Arezzo,IT",
            "code": "QZO"
          }
        },
        {
          "@attributes": {
            "city": "Arica,CL",
            "code": "ARI"
          }
        },
        {
          "@attributes": {
            "city": "Aripuana,BR",
            "code": "HOTEL"
          }
        },
        {
          "@attributes": {
            "city": "Arkhangelsk,RU",
            "code": "ARH"
          }
        },
        {
          "@attributes": {
            "city": "Arles,FR",
            "code": "ZAF"
          }
        },
        {
          "@attributes": {
            "city": "Arly,BF",
            "code": "ARL"
          }
        },
        {
          "@attributes": {
            "city": "Armenia,CO",
            "code": "AXM"
          }
        },
        {
          "@attributes": {
            "city": "Armidale,AU",
            "code": "ARM"
          }
        },
        {
          "@attributes": {
            "city": "Armstromg,CA",
            "code": "YYW"
          }
        },
        {
          "@attributes": {
            "city": "Arna,NO",
            "code": "XHT"
          }
        },
        {
          "@attributes": {
            "city": "Arnhem,NL",
            "code": "QAR"
          }
        },
        {
          "@attributes": {
            "city": "Arnhem cities,NL",
            "code": "ZYM"
          }
        },
        {
          "@attributes": {
            "city": "Arnsberg,DE",
            "code": "ZCA"
          }
        },
        {
          "@attributes": {
            "city": "Arona,SB",
            "code": "RNA"
          }
        },
        {
          "@attributes": {
            "city": "Arorae Island,KI",
            "code": "AIS"
          }
        },
        {
          "@attributes": {
            "city": "Arosa,CH",
            "code": "ZDE"
          }
        },
        {
          "@attributes": {
            "city": "Arrabury,AU",
            "code": "AAB"
          }
        },
        {
          "@attributes": {
            "city": "Arras,FR",
            "code": "QRV"
          }
        },
        {
          "@attributes": {
            "city": "Arsuk,GL",
            "code": "JRK"
          }
        },
        {
          "@attributes": {
            "city": "Artesia,US",
            "code": "ATS"
          }
        },
        {
          "@attributes": {
            "city": "Arthurs Town,BS",
            "code": "ATC"
          }
        },
        {
          "@attributes": {
            "city": "Artigas,UY",
            "code": "ATI"
          }
        },
        {
          "@attributes": {
            "city": "Arua,UG",
            "code": "RUA"
          }
        },
        {
          "@attributes": {
            "city": "Aruba,AW",
            "code": "AUA"
          }
        },
        {
          "@attributes": {
            "city": "Arusha,TZ",
            "code": "ARK"
          }
        },
        {
          "@attributes": {
            "city": "Arutua,PF",
            "code": "AXR"
          }
        },
        {
          "@attributes": {
            "city": "Arviat,CA",
            "code": "YEK"
          }
        },
        {
          "@attributes": {
            "city": "Arvidsjaur,SE",
            "code": "AJR"
          }
        },
        {
          "@attributes": {
            "city": "Arvika,SE",
            "code": "XYY"
          }
        },
        {
          "@attributes": {
            "city": "Asaba,NG",
            "code": "ABB"
          }
        },
        {
          "@attributes": {
            "city": "Asahikawa,JP",
            "code": "AKJ"
          }
        },
        {
          "@attributes": {
            "city": "Asaloyeh,IR",
            "code": "YEH"
          }
        },
        {
          "@attributes": {
            "city": "Asau,WS",
            "code": "AAU"
          }
        },
        {
          "@attributes": {
            "city": "Asbury Park,US",
            "code": "ARX"
          }
        },
        {
          "@attributes": {
            "city": "Aschaffenburg,DE",
            "code": "ZCB"
          }
        },
        {
          "@attributes": {
            "city": "Ascoli Piceno,IT",
            "code": "QNO"
          }
        },
        {
          "@attributes": {
            "city": "Ascona,CH",
            "code": "ACO"
          }
        },
        {
          "@attributes": {
            "city": "Ashcroft,CA",
            "code": "YZA"
          }
        },
        {
          "@attributes": {
            "city": "Asheville,US",
            "code": "AVL"
          }
        },
        {
          "@attributes": {
            "city": "Ashford,GB",
            "code": "QDH"
          }
        },
        {
          "@attributes": {
            "city": "Ashgabat,TM",
            "code": "ASB"
          }
        },
        {
          "@attributes": {
            "city": "Ashland,US",
            "code": "ASX"
          }
        },
        {
          "@attributes": {
            "city": "Asker,NO",
            "code": "XGU"
          }
        },
        {
          "@attributes": {
            "city": "Asmara,ER",
            "code": "ASM"
          }
        },
        {
          "@attributes": {
            "city": "Asosa,ET",
            "code": "ASO"
          }
        },
        {
          "@attributes": {
            "city": "Aspen,US",
            "code": "ASE"
          }
        },
        {
          "@attributes": {
            "city": "Assab,ER",
            "code": "ASA"
          }
        },
        {
          "@attributes": {
            "city": "Assis,BR",
            "code": "AIF"
          }
        },
        {
          "@attributes": {
            "city": "Assiut,EG",
            "code": "ATZ"
          }
        },
        {
          "@attributes": {
            "city": "Astana,KZ",
            "code": "TSE"
          }
        },
        {
          "@attributes": {
            "city": "Astoria,US",
            "code": "AST"
          }
        },
        {
          "@attributes": {
            "city": "Astrakhan,RU",
            "code": "ASF"
          }
        },
        {
          "@attributes": {
            "city": "Asturias,ES",
            "code": "OVD"
          }
        },
        {
          "@attributes": {
            "city": "Astypalaia Island,GR",
            "code": "JTY"
          }
        },
        {
          "@attributes": {
            "city": "Asuncion,PY",
            "code": "ASU"
          }
        },
        {
          "@attributes": {
            "city": "Aswan,EG",
            "code": "ASW"
          }
        },
        {
          "@attributes": {
            "city": "Atambua,ID",
            "code": "ABU"
          }
        },
        {
          "@attributes": {
            "city": "Atammik,GL",
            "code": "QJF"
          }
        },
        {
          "@attributes": {
            "city": "Ataq,YE",
            "code": "AXK"
          }
        },
        {
          "@attributes": {
            "city": "Atar,MR",
            "code": "ATR"
          }
        },
        {
          "@attributes": {
            "city": "Atauro,TL",
            "code": "AUT"
          }
        },
        {
          "@attributes": {
            "city": "Atbara,SD",
            "code": "ATB"
          }
        },
        {
          "@attributes": {
            "city": "Athens,US",
            "code": "MMI"
          }
        },
        {
          "@attributes": {
            "city": "Athens,US",
            "code": "AHN"
          }
        },
        {
          "@attributes": {
            "city": "Athens,GR",
            "code": "ATH"
          }
        },
        {
          "@attributes": {
            "city": "Athens,US",
            "code": "ATO"
          }
        },
        {
          "@attributes": {
            "city": "Atibaia,BR",
            "code": "ZBW"
          }
        },
        {
          "@attributes": {
            "city": "Atikokan,CA",
            "code": "YIB"
          }
        },
        {
          "@attributes": {
            "city": "Atiu Island,CK",
            "code": "AIU"
          }
        },
        {
          "@attributes": {
            "city": "Atka,US",
            "code": "AKB"
          }
        },
        {
          "@attributes": {
            "city": "Atlanta,US",
            "code": "ATL"
          }
        },
        {
          "@attributes": {
            "city": "Atlantic,US",
            "code": "AIO"
          }
        },
        {
          "@attributes": {
            "city": "Atlantic cities,US",
            "code": "AIY"
          }
        },
        {
          "@attributes": {
            "city": "Atmautluak,US",
            "code": "ATT"
          }
        },
        {
          "@attributes": {
            "city": "Atoifi,SB",
            "code": "ATD"
          }
        },
        {
          "@attributes": {
            "city": "Atqasuk,US",
            "code": "ATK"
          }
        },
        {
          "@attributes": {
            "city": "Atsugi,JP",
            "code": "NJA"
          }
        },
        {
          "@attributes": {
            "city": "Attawapiskat,CA",
            "code": "YAT"
          }
        },
        {
          "@attributes": {
            "city": "Attu,GL",
            "code": "QGQ"
          }
        },
        {
          "@attributes": {
            "city": "Attu Island,US",
            "code": "ATU"
          }
        },
        {
          "@attributes": {
            "city": "Atuona,PF",
            "code": "AUQ"
          }
        },
        {
          "@attributes": {
            "city": "Atyrau,KZ",
            "code": "GUW"
          }
        },
        {
          "@attributes": {
            "city": "Aua Island,PG",
            "code": "AUI"
          }
        },
        {
          "@attributes": {
            "city": "Aubagne,FR",
            "code": "JAH"
          }
        },
        {
          "@attributes": {
            "city": "Aubenas,FR",
            "code": "OBS"
          }
        },
        {
          "@attributes": {
            "city": "Auburn,US",
            "code": "AUO"
          }
        },
        {
          "@attributes": {
            "city": "Auckland,NZ",
            "code": "AKL"
          }
        },
        {
          "@attributes": {
            "city": "Aue De,DE",
            "code": "ZAU"
          }
        },
        {
          "@attributes": {
            "city": "Augsburg,DE",
            "code": "AGB"
          }
        },
        {
          "@attributes": {
            "city": "Augusta,US",
            "code": "AGS"
          }
        },
        {
          "@attributes": {
            "city": "Augusta,US",
            "code": "AUG"
          }
        },
        {
          "@attributes": {
            "city": "Aupaluk,CA",
            "code": "YPJ"
          }
        },
        {
          "@attributes": {
            "city": "Aurangabad,IN",
            "code": "IXU"
          }
        },
        {
          "@attributes": {
            "city": "Auray,FR",
            "code": "XUY"
          }
        },
        {
          "@attributes": {
            "city": "Aurillac,FR",
            "code": "AUR"
          }
        },
        {
          "@attributes": {
            "city": "Aurora,US",
            "code": "AUZ"
          }
        },
        {
          "@attributes": {
            "city": "Aurukun Mission,AU",
            "code": "AUU"
          }
        },
        {
          "@attributes": {
            "city": "Austin,US",
            "code": "ASQ"
          }
        },
        {
          "@attributes": {
            "city": "Austin,US",
            "code": "AUM"
          }
        },
        {
          "@attributes": {
            "city": "Austin,US",
            "code": "AUS"
          }
        },
        {
          "@attributes": {
            "city": "Austral Downs,AU",
            "code": "AWP"
          }
        },
        {
          "@attributes": {
            "city": "Auxerre,FR",
            "code": "AUF"
          }
        },
        {
          "@attributes": {
            "city": "Avare,BR",
            "code": "QVP"
          }
        },
        {
          "@attributes": {
            "city": "Aveiro,PT",
            "code": "ZAV"
          }
        },
        {
          "@attributes": {
            "city": "Avellino,IT",
            "code": "QVN"
          }
        },
        {
          "@attributes": {
            "city": "Avesta Krylbo,SE",
            "code": "XYP"
          }
        },
        {
          "@attributes": {
            "city": "Aviano,IT",
            "code": "AVB"
          }
        },
        {
          "@attributes": {
            "city": "Avignon,FR",
            "code": "AVN"
          }
        },
        {
          "@attributes": {
            "city": "Avila,ES",
            "code": "AVS"
          }
        },
        {
          "@attributes": {
            "city": "Avu Avu,SB",
            "code": "AVU"
          }
        },
        {
          "@attributes": {
            "city": "Axum,ET",
            "code": "AXU"
          }
        },
        {
          "@attributes": {
            "city": "Ayacucho,PE",
            "code": "AYP"
          }
        },
        {
          "@attributes": {
            "city": "Ayers Rock,AU",
            "code": "AYQ"
          }
        },
        {
          "@attributes": {
            "city": "Ayia Napa,CY",
            "code": "QNP"
          }
        },
        {
          "@attributes": {
            "city": "Ayr Au,AU",
            "code": "AYR"
          }
        },
        {
          "@attributes": {
            "city": "BEREZOVO,RU",
            "code": "EZV"
          }
        },
        {
          "@attributes": {
            "city": "BERNAY,FR",
            "code": "XBX"
          }
        },
        {
          "@attributes": {
            "city": "BHURBAN,PK",
            "code": "BHC"
          }
        },
        {
          "@attributes": {
            "city": "BIG SPRING,US",
            "code": "HCA"
          }
        },
        {
          "@attributes": {
            "city": "BOR RU,RU",
            "code": "TGP"
          }
        },
        {
          "@attributes": {
            "city": "BOSSET,PG",
            "code": "BOT"
          }
        },
        {
          "@attributes": {
            "city": "BROOKLYN,US",
            "code": "QFF"
          }
        },
        {
          "@attributes": {
            "city": "Babo,ID",
            "code": "BXB"
          }
        },
        {
          "@attributes": {
            "city": "Bacau,RO",
            "code": "BCM"
          }
        },
        {
          "@attributes": {
            "city": "Bacolod,PH",
            "code": "BCD"
          }
        },
        {
          "@attributes": {
            "city": "Badajoz,ES",
            "code": "BJZ"
          }
        },
        {
          "@attributes": {
            "city": "Bade,ID",
            "code": "BXD"
          }
        },
        {
          "@attributes": {
            "city": "Baden,CH",
            "code": "ZDG"
          }
        },
        {
          "@attributes": {
            "city": "Baden Baden,DE",
            "code": "ZCC"
          }
        },
        {
          "@attributes": {
            "city": "Bado Lite,CD",
            "code": "BDT"
          }
        },
        {
          "@attributes": {
            "city": "Badu Island,AU",
            "code": "BDD"
          }
        },
        {
          "@attributes": {
            "city": "Bafoussam,CM",
            "code": "BFX"
          }
        },
        {
          "@attributes": {
            "city": "Bagdad,US",
            "code": "BGT"
          }
        },
        {
          "@attributes": {
            "city": "Bagdogra,IN",
            "code": "IXB"
          }
        },
        {
          "@attributes": {
            "city": "Bage,BR",
            "code": "BGX"
          }
        },
        {
          "@attributes": {
            "city": "Baghdad,IQ",
            "code": "BGW"
          }
        },
        {
          "@attributes": {
            "city": "Bagotville,CA",
            "code": "YBG"
          }
        },
        {
          "@attributes": {
            "city": "Baguio,PH",
            "code": "BAG"
          }
        },
        {
          "@attributes": {
            "city": "Bahar Dar,ET",
            "code": "BJR"
          }
        },
        {
          "@attributes": {
            "city": "Bahawalpur,PK",
            "code": "BHV"
          }
        },
        {
          "@attributes": {
            "city": "Bahia Blanca,AR",
            "code": "BHI"
          }
        },
        {
          "@attributes": {
            "city": "Bahia De Los Angeles,MX",
            "code": "BHL"
          }
        },
        {
          "@attributes": {
            "city": "Bahia Pina,PA",
            "code": "BFQ"
          }
        },
        {
          "@attributes": {
            "city": "Bahia Solano,CO",
            "code": "BSC"
          }
        },
        {
          "@attributes": {
            "city": "Baia Mare,RO",
            "code": "BAY"
          }
        },
        {
          "@attributes": {
            "city": "Baibara,PG",
            "code": "BAP"
          }
        },
        {
          "@attributes": {
            "city": "Baie Comeau,CA",
            "code": "YBC"
          }
        },
        {
          "@attributes": {
            "city": "Baie Johan Beetz,CA",
            "code": "YBJ"
          }
        },
        {
          "@attributes": {
            "city": "Bainbridge,US",
            "code": "BGE"
          }
        },
        {
          "@attributes": {
            "city": "Bairnsdale,AU",
            "code": "BSJ"
          }
        },
        {
          "@attributes": {
            "city": "Baise,CN",
            "code": "AEB"
          }
        },
        {
          "@attributes": {
            "city": "Baishan,CN",
            "code": "NBS"
          }
        },
        {
          "@attributes": {
            "city": "Bajawa,ID",
            "code": "BJW"
          }
        },
        {
          "@attributes": {
            "city": "Bakalalan,MY",
            "code": "BKM"
          }
        },
        {
          "@attributes": {
            "city": "Bakel,SN",
            "code": "BXE"
          }
        },
        {
          "@attributes": {
            "city": "Baker,US",
            "code": "BKE"
          }
        },
        {
          "@attributes": {
            "city": "Baker Lake,CA",
            "code": "YBK"
          }
        },
        {
          "@attributes": {
            "city": "Bakersfield,US",
            "code": "BFL"
          }
        },
        {
          "@attributes": {
            "city": "Bakkafjordur,IS",
            "code": "BJD"
          }
        },
        {
          "@attributes": {
            "city": "Balalae,SB",
            "code": "BAS"
          }
        },
        {
          "@attributes": {
            "city": "Bali,CM",
            "code": "BLC"
          }
        },
        {
          "@attributes": {
            "city": "Bali,PG",
            "code": "BAJ"
          }
        },
        {
          "@attributes": {
            "city": "Balikesir,TR",
            "code": "BZI"
          }
        },
        {
          "@attributes": {
            "city": "Balikpapan,ID",
            "code": "BPN"
          }
        },
        {
          "@attributes": {
            "city": "Balimo,PG",
            "code": "OPU"
          }
        },
        {
          "@attributes": {
            "city": "Balimuru,PG",
            "code": "VMU"
          }
        },
        {
          "@attributes": {
            "city": "Ballina,AU",
            "code": "BNK"
          }
        },
        {
          "@attributes": {
            "city": "Balmaceda,CL",
            "code": "BBA"
          }
        },
        {
          "@attributes": {
            "city": "Balranald,AU",
            "code": "BZD"
          }
        },
        {
          "@attributes": {
            "city": "Balsas,BR",
            "code": "BSS"
          }
        },
        {
          "@attributes": {
            "city": "Balti,MD",
            "code": "BZY"
          }
        },
        {
          "@attributes": {
            "city": "Baltimore,US",
            "code": "BWI"
          }
        },
        {
          "@attributes": {
            "city": "Balurghat,IN",
            "code": "RGH"
          }
        },
        {
          "@attributes": {
            "city": "Bamaga,AU",
            "code": "ABM"
          }
        },
        {
          "@attributes": {
            "city": "Bamako,ML",
            "code": "BKO"
          }
        },
        {
          "@attributes": {
            "city": "Bamberg,DE",
            "code": "ZCD"
          }
        },
        {
          "@attributes": {
            "city": "Bamenda,CM",
            "code": "BPC"
          }
        },
        {
          "@attributes": {
            "city": "Ban Mak Khaen,TH",
            "code": "BAO"
          }
        },
        {
          "@attributes": {
            "city": "Banda Aceh,ID",
            "code": "BTJ"
          }
        },
        {
          "@attributes": {
            "city": "Bandanaira,ID",
            "code": "NDA"
          }
        },
        {
          "@attributes": {
            "city": "Bandar Abbas,IR",
            "code": "BND"
          }
        },
        {
          "@attributes": {
            "city": "Bandar Lampung,ID",
            "code": "TKG"
          }
        },
        {
          "@attributes": {
            "city": "Bandar Lengeh,IR",
            "code": "BDH"
          }
        },
        {
          "@attributes": {
            "city": "Bandar Seri Begawan,BN",
            "code": "BWN"
          }
        },
        {
          "@attributes": {
            "city": "Bandol,FR",
            "code": "XBZ"
          }
        },
        {
          "@attributes": {
            "city": "Bandundu,CD",
            "code": "FDU"
          }
        },
        {
          "@attributes": {
            "city": "Bandung,ID",
            "code": "BDO"
          }
        },
        {
          "@attributes": {
            "city": "Banff,CA",
            "code": "YBA"
          }
        },
        {
          "@attributes": {
            "city": "Bangda,CN",
            "code": "BPX"
          }
        },
        {
          "@attributes": {
            "city": "Bangkok,TH",
            "code": "BKK"
          }
        },
        {
          "@attributes": {
            "city": "Bangor,US",
            "code": "BGR"
          }
        },
        {
          "@attributes": {
            "city": "Bangui,CF",
            "code": "BGF"
          }
        },
        {
          "@attributes": {
            "city": "Banja Luka,BA",
            "code": "BNX"
          }
        },
        {
          "@attributes": {
            "city": "Banjarmasin,ID",
            "code": "BDJ"
          }
        },
        {
          "@attributes": {
            "city": "Bankstown,AU",
            "code": "BWU"
          }
        },
        {
          "@attributes": {
            "city": "Banmethuot,VN",
            "code": "BMV"
          }
        },
        {
          "@attributes": {
            "city": "Banning,US",
            "code": "BNG"
          }
        },
        {
          "@attributes": {
            "city": "Bannu,PK",
            "code": "BNP"
          }
        },
        {
          "@attributes": {
            "city": "Bantry,IE",
            "code": "BYT"
          }
        },
        {
          "@attributes": {
            "city": "Banyuwangi,ID",
            "code": "BWX"
          }
        },
        {
          "@attributes": {
            "city": "Baoding,CN",
            "code": "BVQ"
          }
        },
        {
          "@attributes": {
            "city": "Baoshan,CN",
            "code": "BSD"
          }
        },
        {
          "@attributes": {
            "city": "Baotou,CN",
            "code": "BAV"
          }
        },
        {
          "@attributes": {
            "city": "Bar Harbor,US",
            "code": "BHB"
          }
        },
        {
          "@attributes": {
            "city": "Bar Le Duc,FR",
            "code": "XBD"
          }
        },
        {
          "@attributes": {
            "city": "Bar River,CA",
            "code": "YEB"
          }
        },
        {
          "@attributes": {
            "city": "Baracoa,CU",
            "code": "BCA"
          }
        },
        {
          "@attributes": {
            "city": "Barahona,DO",
            "code": "BRX"
          }
        },
        {
          "@attributes": {
            "city": "Baranof,US",
            "code": "BNF"
          }
        },
        {
          "@attributes": {
            "city": "Barbacena,BR",
            "code": "QAK"
          }
        },
        {
          "@attributes": {
            "city": "Barbelos,BR",
            "code": "BAZ"
          }
        },
        {
          "@attributes": {
            "city": "Barbuda,KN",
            "code": "BBQ"
          }
        },
        {
          "@attributes": {
            "city": "Barcaldine,AU",
            "code": "BCI"
          }
        },
        {
          "@attributes": {
            "city": "Barcelona,ES",
            "code": "BCN"
          }
        },
        {
          "@attributes": {
            "city": "Barcelona,VE",
            "code": "BLA"
          }
        },
        {
          "@attributes": {
            "city": "Bardufoss,NO",
            "code": "BDU"
          }
        },
        {
          "@attributes": {
            "city": "Bari,IT",
            "code": "BRI"
          }
        },
        {
          "@attributes": {
            "city": "Barinas,VE",
            "code": "BNS"
          }
        },
        {
          "@attributes": {
            "city": "Bario,MY",
            "code": "BBN"
          }
        },
        {
          "@attributes": {
            "city": "Barisal,BD",
            "code": "BZL"
          }
        },
        {
          "@attributes": {
            "city": "Barnaul,RU",
            "code": "BAX"
          }
        },
        {
          "@attributes": {
            "city": "Barquisimeto,VE",
            "code": "BRM"
          }
        },
        {
          "@attributes": {
            "city": "Barra,GB",
            "code": "BRR"
          }
        },
        {
          "@attributes": {
            "city": "Barra Del Colorado,CR",
            "code": "BCL"
          }
        },
        {
          "@attributes": {
            "city": "Barra Do Garcas,BR",
            "code": "BPG"
          }
        },
        {
          "@attributes": {
            "city": "Barrancabermeja,CO",
            "code": "EJA"
          }
        },
        {
          "@attributes": {
            "city": "Barranquilla,CO",
            "code": "BAQ"
          }
        },
        {
          "@attributes": {
            "city": "Barreiras,BR",
            "code": "BRA"
          }
        },
        {
          "@attributes": {
            "city": "Barretos,BR",
            "code": "BAT"
          }
        },
        {
          "@attributes": {
            "city": "Barrow,US",
            "code": "BRW"
          }
        },
        {
          "@attributes": {
            "city": "Barrow In Furness,GB",
            "code": "BWF"
          }
        },
        {
          "@attributes": {
            "city": "Barter Island,US",
            "code": "BTI"
          }
        },
        {
          "@attributes": {
            "city": "Barth,DE",
            "code": "BBH"
          }
        },
        {
          "@attributes": {
            "city": "Bartlesville,US",
            "code": "BVO"
          }
        },
        {
          "@attributes": {
            "city": "Bartow,US",
            "code": "BOW"
          }
        },
        {
          "@attributes": {
            "city": "Basango,CD",
            "code": "BAN"
          }
        },
        {
          "@attributes": {
            "city": "Basankusu,CD",
            "code": "BSU"
          }
        },
        {
          "@attributes": {
            "city": "Basco,PH",
            "code": "BSO"
          }
        },
        {
          "@attributes": {
            "city": "Basel,CH",
            "code": "BSL"
          }
        },
        {
          "@attributes": {
            "city": "Basingstoke,GB",
            "code": "XQB"
          }
        },
        {
          "@attributes": {
            "city": "Basra,IQ",
            "code": "BSR"
          }
        },
        {
          "@attributes": {
            "city": "Basse Terre,GP",
            "code": "BBR"
          }
        },
        {
          "@attributes": {
            "city": "Bastia,FR",
            "code": "BIA"
          }
        },
        {
          "@attributes": {
            "city": "Bata,GQ",
            "code": "BSG"
          }
        },
        {
          "@attributes": {
            "city": "Batagay,RU",
            "code": "BQJ"
          }
        },
        {
          "@attributes": {
            "city": "Batam,ID",
            "code": "BTH"
          }
        },
        {
          "@attributes": {
            "city": "Batesman Bay,AU",
            "code": "QBW"
          }
        },
        {
          "@attributes": {
            "city": "Batesville,US",
            "code": "HLB"
          }
        },
        {
          "@attributes": {
            "city": "Batesville,US",
            "code": "BVX"
          }
        },
        {
          "@attributes": {
            "city": "Bath,GB",
            "code": "QQX"
          }
        },
        {
          "@attributes": {
            "city": "Bathurst,CA",
            "code": "ZBF"
          }
        },
        {
          "@attributes": {
            "city": "Bathurst,AU",
            "code": "BHS"
          }
        },
        {
          "@attributes": {
            "city": "Bathurst Isl,AU",
            "code": "BRT"
          }
        },
        {
          "@attributes": {
            "city": "Batman,TR",
            "code": "BAL"
          }
        },
        {
          "@attributes": {
            "city": "Batna,DZ",
            "code": "BLJ"
          }
        },
        {
          "@attributes": {
            "city": "Baton Rouge,US",
            "code": "BTR"
          }
        },
        {
          "@attributes": {
            "city": "Batouri,CM",
            "code": "OUR"
          }
        },
        {
          "@attributes": {
            "city": "Batsfjord,NO",
            "code": "BJF"
          }
        },
        {
          "@attributes": {
            "city": "Battambang,KH",
            "code": "BBM"
          }
        },
        {
          "@attributes": {
            "city": "Batticaloa,LK",
            "code": "BTC"
          }
        },
        {
          "@attributes": {
            "city": "Battle Creek,US",
            "code": "BTL"
          }
        },
        {
          "@attributes": {
            "city": "Batumi,GE",
            "code": "BUS"
          }
        },
        {
          "@attributes": {
            "city": "Baubau,ID",
            "code": "BUW"
          }
        },
        {
          "@attributes": {
            "city": "Baucau,TL",
            "code": "BCH"
          }
        },
        {
          "@attributes": {
            "city": "Bauru,BR",
            "code": "JTC"
          }
        },
        {
          "@attributes": {
            "city": "Bauru Old Code,BR",
            "code": "BAU"
          }
        },
        {
          "@attributes": {
            "city": "Bay cities,US",
            "code": "BBC"
          }
        },
        {
          "@attributes": {
            "city": "Bayamo,CU",
            "code": "BYM"
          }
        },
        {
          "@attributes": {
            "city": "Bayannur,CN",
            "code": "RLK"
          }
        },
        {
          "@attributes": {
            "city": "Bayonne,FR",
            "code": "XBY"
          }
        },
        {
          "@attributes": {
            "city": "Bayreuth,DE",
            "code": "BYU"
          }
        },
        {
          "@attributes": {
            "city": "Baytown,US",
            "code": "HPY"
          }
        },
        {
          "@attributes": {
            "city": "Bealanana,MG",
            "code": "WBE"
          }
        },
        {
          "@attributes": {
            "city": "Bearskin Lake Indian Reserve,CA",
            "code": "XBE"
          }
        },
        {
          "@attributes": {
            "city": "Beaufort,US",
            "code": "BFT"
          }
        },
        {
          "@attributes": {
            "city": "Beaulieu Sur Mer,FR",
            "code": "XBM"
          }
        },
        {
          "@attributes": {
            "city": "Beaumont,US",
            "code": "BPT"
          }
        },
        {
          "@attributes": {
            "city": "Beaune,FR",
            "code": "XBV"
          }
        },
        {
          "@attributes": {
            "city": "Beauvais Tille,FR",
            "code": "BVA"
          }
        },
        {
          "@attributes": {
            "city": "Beaver,US",
            "code": "WBQ"
          }
        },
        {
          "@attributes": {
            "city": "Beaver Creek,US",
            "code": "ZBV"
          }
        },
        {
          "@attributes": {
            "city": "Beaver Creek,CA",
            "code": "YXQ"
          }
        },
        {
          "@attributes": {
            "city": "Beaver Falls,US",
            "code": "BFP"
          }
        },
        {
          "@attributes": {
            "city": "Bebedouro,BR",
            "code": "QAU"
          }
        },
        {
          "@attributes": {
            "city": "Bechar,DZ",
            "code": "CBH"
          }
        },
        {
          "@attributes": {
            "city": "Beckley,US",
            "code": "BKW"
          }
        },
        {
          "@attributes": {
            "city": "Beckwourth,US",
            "code": "NVN"
          }
        },
        {
          "@attributes": {
            "city": "Bedford,US",
            "code": "BED"
          }
        },
        {
          "@attributes": {
            "city": "Bedford,US",
            "code": "BFR"
          }
        },
        {
          "@attributes": {
            "city": "Bedford,GB",
            "code": "XQD"
          }
        },
        {
          "@attributes": {
            "city": "Bedourie,AU",
            "code": "BEU"
          }
        },
        {
          "@attributes": {
            "city": "Bedwell Harbor,CA",
            "code": "YBW"
          }
        },
        {
          "@attributes": {
            "city": "Beef Island,VG",
            "code": "EIS"
          }
        },
        {
          "@attributes": {
            "city": "Beersheba,IL",
            "code": "BEV"
          }
        },
        {
          "@attributes": {
            "city": "Beeville,US",
            "code": "NIR"
          }
        },
        {
          "@attributes": {
            "city": "Beica,ET",
            "code": "BEI"
          }
        },
        {
          "@attributes": {
            "city": "Beida,LY",
            "code": "LAQ"
          }
        },
        {
          "@attributes": {
            "city": "Beihai,CN",
            "code": "BHY"
          }
        },
        {
          "@attributes": {
            "city": "Beihan,YE",
            "code": "BHN"
          }
        },
        {
          "@attributes": {
            "city": "Beijing,CN",
            "code": "BJS"
          }
        },
        {
          "@attributes": {
            "city": "Beira,MZ",
            "code": "BEW"
          }
        },
        {
          "@attributes": {
            "city": "Beirut,LB",
            "code": "BEY"
          }
        },
        {
          "@attributes": {
            "city": "Beja,PT",
            "code": "BYJ"
          }
        },
        {
          "@attributes": {
            "city": "Bejaia,DZ",
            "code": "BJA"
          }
        },
        {
          "@attributes": {
            "city": "Bekily,MG",
            "code": "OVA"
          }
        },
        {
          "@attributes": {
            "city": "Belaga,MY",
            "code": "BLG"
          }
        },
        {
          "@attributes": {
            "city": "Belaya Gora,RU",
            "code": "BGN"
          }
        },
        {
          "@attributes": {
            "city": "Belem,BR",
            "code": "BEL"
          }
        },
        {
          "@attributes": {
            "city": "Belep Island,NC",
            "code": "BMY"
          }
        },
        {
          "@attributes": {
            "city": "Belfast,GB",
            "code": "BFS"
          }
        },
        {
          "@attributes": {
            "city": "Belfort,FR",
            "code": "BOR"
          }
        },
        {
          "@attributes": {
            "city": "Belgaum,IN",
            "code": "IXG"
          }
        },
        {
          "@attributes": {
            "city": "Belgorod,RU",
            "code": "EGO"
          }
        },
        {
          "@attributes": {
            "city": "Belgrade,RS",
            "code": "BEG"
          }
        },
        {
          "@attributes": {
            "city": "Belize cities,BZ",
            "code": "BZE"
          }
        },
        {
          "@attributes": {
            "city": "Bella Coola,CA",
            "code": "QBC"
          }
        },
        {
          "@attributes": {
            "city": "Bellary,IN",
            "code": "BEP"
          }
        },
        {
          "@attributes": {
            "city": "Bellegarde,FR",
            "code": "XBF"
          }
        },
        {
          "@attributes": {
            "city": "Belleville,US",
            "code": "BLV"
          }
        },
        {
          "@attributes": {
            "city": "Belleville,CA",
            "code": "XVV"
          }
        },
        {
          "@attributes": {
            "city": "Bellingham,US",
            "code": "BLI"
          }
        },
        {
          "@attributes": {
            "city": "Bellinzona,CH",
            "code": "ZDI"
          }
        },
        {
          "@attributes": {
            "city": "Bellona,SB",
            "code": "BNY"
          }
        },
        {
          "@attributes": {
            "city": "Belluno,IT",
            "code": "BLX"
          }
        },
        {
          "@attributes": {
            "city": "Belmar,US",
            "code": "BLM"
          }
        },
        {
          "@attributes": {
            "city": "Belmopan,BZ",
            "code": "BCV"
          }
        },
        {
          "@attributes": {
            "city": "Belo,MG",
            "code": "BMD"
          }
        },
        {
          "@attributes": {
            "city": "Belo Horizonte,BR",
            "code": "BHZ"
          }
        },
        {
          "@attributes": {
            "city": "Beloit,US",
            "code": "JVL"
          }
        },
        {
          "@attributes": {
            "city": "Belorussky Rail Station,RU",
            "code": "JQO"
          }
        },
        {
          "@attributes": {
            "city": "Beloyarsky,RU",
            "code": "EYK"
          }
        },
        {
          "@attributes": {
            "city": "Beluga,US",
            "code": "BVU"
          }
        },
        {
          "@attributes": {
            "city": "Bembridge,GB",
            "code": "BBP"
          }
        },
        {
          "@attributes": {
            "city": "Bemidji,US",
            "code": "BJI"
          }
        },
        {
          "@attributes": {
            "city": "Bemolanga,MG",
            "code": "BZM"
          }
        },
        {
          "@attributes": {
            "city": "Benbecula,GB",
            "code": "BEB"
          }
        },
        {
          "@attributes": {
            "city": "Bendigo,AU",
            "code": "BXG"
          }
        },
        {
          "@attributes": {
            "city": "Benevento,IT",
            "code": "QBV"
          }
        },
        {
          "@attributes": {
            "city": "Bengaluru,IN",
            "code": "BLR"
          }
        },
        {
          "@attributes": {
            "city": "Bangalore,IN",
            "code": "BLR"
          }
        },
        {
          "@attributes": {
            "city": "Benghazi,LY",
            "code": "BEN"
          }
        },
        {
          "@attributes": {
            "city": "Bengkulu,ID",
            "code": "BKS"
          }
        },
        {
          "@attributes": {
            "city": "Benguela,AO",
            "code": "BUG"
          }
        },
        {
          "@attributes": {
            "city": "Beni Mellal,MA",
            "code": "BEM"
          }
        },
        {
          "@attributes": {
            "city": "Benin cities,NG",
            "code": "BNI"
          }
        },
        {
          "@attributes": {
            "city": "Bensbach,PG",
            "code": "BSP"
          }
        },
        {
          "@attributes": {
            "city": "Bento Goncalves,BR",
            "code": "BGV"
          }
        },
        {
          "@attributes": {
            "city": "Benton Harbor,US",
            "code": "BEH"
          }
        },
        {
          "@attributes": {
            "city": "Bentota,LK",
            "code": "BJT"
          }
        },
        {
          "@attributes": {
            "city": "Berane,ME",
            "code": "IVG"
          }
        },
        {
          "@attributes": {
            "city": "Berbera,SO",
            "code": "BBO"
          }
        },
        {
          "@attributes": {
            "city": "Bereina,PG",
            "code": "BEA"
          }
        },
        {
          "@attributes": {
            "city": "Berens River Indian Reserve,CA",
            "code": "YBV"
          }
        },
        {
          "@attributes": {
            "city": "Bergamo,IT",
            "code": "BGY"
          }
        },
        {
          "@attributes": {
            "city": "Bergen,NO",
            "code": "BGO"
          }
        },
        {
          "@attributes": {
            "city": "Bergen Op Zoom,NL",
            "code": "WOE"
          }
        },
        {
          "@attributes": {
            "city": "Bergerac,FR",
            "code": "EGC"
          }
        },
        {
          "@attributes": {
            "city": "Bergheim,DE",
            "code": "ZCF"
          }
        },
        {
          "@attributes": {
            "city": "Bergisch Gladbach,DE",
            "code": "ZCG"
          }
        },
        {
          "@attributes": {
            "city": "Bergkamen,DE",
            "code": "ZCH"
          }
        },
        {
          "@attributes": {
            "city": "Berkak,NO",
            "code": "XUB"
          }
        },
        {
          "@attributes": {
            "city": "Berkeley,US",
            "code": "JBK"
          }
        },
        {
          "@attributes": {
            "city": "Berlevag,NO",
            "code": "BVG"
          }
        },
        {
          "@attributes": {
            "city": "Berlin,US",
            "code": "BML"
          }
        },
        {
          "@attributes": {
            "city": "Berlin,DE",
            "code": "BER"
          }
        },
        {
          "@attributes": {
            "city": "Bermuda,BM",
            "code": "BDA"
          }
        },
        {
          "@attributes": {
            "city": "Berne,CH",
            "code": "BRN"
          }
        },
        {
          "@attributes": {
            "city": "Beroroha,MG",
            "code": "WBO"
          }
        },
        {
          "@attributes": {
            "city": "Bertoua,CM",
            "code": "BTA"
          }
        },
        {
          "@attributes": {
            "city": "Beru,KI",
            "code": "BEZ"
          }
        },
        {
          "@attributes": {
            "city": "Berwick Upon Tweed,GB",
            "code": "XQG"
          }
        },
        {
          "@attributes": {
            "city": "Besalampy,MG",
            "code": "BPY"
          }
        },
        {
          "@attributes": {
            "city": "Besancon,FR",
            "code": "QBQ"
          }
        },
        {
          "@attributes": {
            "city": "Bethel,US",
            "code": "BET"
          }
        },
        {
          "@attributes": {
            "city": "Bethune,FR",
            "code": "XBH"
          }
        },
        {
          "@attributes": {
            "city": "Betim,BR",
            "code": "QBK"
          }
        },
        {
          "@attributes": {
            "city": "Betioky,MG",
            "code": "BKU"
          }
        },
        {
          "@attributes": {
            "city": "Bettles,US",
            "code": "BTT"
          }
        },
        {
          "@attributes": {
            "city": "Beverly,US",
            "code": "BVY"
          }
        },
        {
          "@attributes": {
            "city": "Beziers,FR",
            "code": "BZR"
          }
        },
        {
          "@attributes": {
            "city": "Bhairawa,NP",
            "code": "BWA"
          }
        },
        {
          "@attributes": {
            "city": "Bhamo,MM",
            "code": "BMO"
          }
        },
        {
          "@attributes": {
            "city": "Bharatpur,NP",
            "code": "BHR"
          }
        },
        {
          "@attributes": {
            "city": "Bhatinda,IN",
            "code": "BUP"
          }
        },
        {
          "@attributes": {
            "city": "Bhavnagar,IN",
            "code": "BHU"
          }
        },
        {
          "@attributes": {
            "city": "Bhopal,IN",
            "code": "BHO"
          }
        },
        {
          "@attributes": {
            "city": "Bhubaneswar,IN",
            "code": "BBI"
          }
        },
        {
          "@attributes": {
            "city": "Bhuj,IN",
            "code": "BHJ"
          }
        },
        {
          "@attributes": {
            "city": "Biak,ID",
            "code": "BIK"
          }
        },
        {
          "@attributes": {
            "city": "Bialla,PG",
            "code": "BAA"
          }
        },
        {
          "@attributes": {
            "city": "Bialystok,PL",
            "code": "QYY"
          }
        },
        {
          "@attributes": {
            "city": "Biarritz,FR",
            "code": "BIQ"
          }
        },
        {
          "@attributes": {
            "city": "Biaru,PG",
            "code": "BRP"
          }
        },
        {
          "@attributes": {
            "city": "Biel Bienne,CH",
            "code": "ZDK"
          }
        },
        {
          "@attributes": {
            "city": "Bielefeld,DE",
            "code": "BFE"
          }
        },
        {
          "@attributes": {
            "city": "Bielsko Baila,PL",
            "code": "QEO"
          }
        },
        {
          "@attributes": {
            "city": "Big Bear cities,US",
            "code": "RBF"
          }
        },
        {
          "@attributes": {
            "city": "Big Creek,BZ",
            "code": "BGK"
          }
        },
        {
          "@attributes": {
            "city": "Big Delta,US",
            "code": "BIG"
          }
        },
        {
          "@attributes": {
            "city": "Big Lake,US",
            "code": "BGQ"
          }
        },
        {
          "@attributes": {
            "city": "Big Piney,US",
            "code": "BPI"
          }
        },
        {
          "@attributes": {
            "city": "Big Trout,CA",
            "code": "YTL"
          }
        },
        {
          "@attributes": {
            "city": "Bijie,CN",
            "code": "BFJ"
          }
        },
        {
          "@attributes": {
            "city": "Bikaner,IN",
            "code": "BKB"
          }
        },
        {
          "@attributes": {
            "city": "Bikini Atoll,MH",
            "code": "BII"
          }
        },
        {
          "@attributes": {
            "city": "Bilaspur,IN",
            "code": "PAB"
          }
        },
        {
          "@attributes": {
            "city": "Bilbao,ES",
            "code": "BIO"
          }
        },
        {
          "@attributes": {
            "city": "Bildudalur,IS",
            "code": "BIU"
          }
        },
        {
          "@attributes": {
            "city": "Billings,US",
            "code": "BIL"
          }
        },
        {
          "@attributes": {
            "city": "Billund,DK",
            "code": "BLL"
          }
        },
        {
          "@attributes": {
            "city": "Biloela,AU",
            "code": "ZBL"
          }
        },
        {
          "@attributes": {
            "city": "Biloxi,US",
            "code": "BIX"
          }
        },
        {
          "@attributes": {
            "city": "Bima,ID",
            "code": "BMU"
          }
        },
        {
          "@attributes": {
            "city": "Bimini,BS",
            "code": "BIM"
          }
        },
        {
          "@attributes": {
            "city": "Binghamton,US",
            "code": "BGM"
          }
        },
        {
          "@attributes": {
            "city": "Bingol,TR",
            "code": "BGG"
          }
        },
        {
          "@attributes": {
            "city": "Biniguni,PG",
            "code": "XBN"
          }
        },
        {
          "@attributes": {
            "city": "Bintulu,MY",
            "code": "BTU"
          }
        },
        {
          "@attributes": {
            "city": "Bintuni,ID",
            "code": "NTI"
          }
        },
        {
          "@attributes": {
            "city": "Biratnagar,NP",
            "code": "BIR"
          }
        },
        {
          "@attributes": {
            "city": "Birch Creek,US",
            "code": "KBC"
          }
        },
        {
          "@attributes": {
            "city": "Birdsville,AU",
            "code": "BVI"
          }
        },
        {
          "@attributes": {
            "city": "Birigui,BR",
            "code": "QCF"
          }
        },
        {
          "@attributes": {
            "city": "Birmingham,US",
            "code": "BHM"
          }
        },
        {
          "@attributes": {
            "city": "Birmingham,GB",
            "code": "BHX"
          }
        },
        {
          "@attributes": {
            "city": "Bisbee,US",
            "code": "BSQ"
          }
        },
        {
          "@attributes": {
            "city": "Bisha,SA",
            "code": "BHH"
          }
        },
        {
          "@attributes": {
            "city": "Bishkek,KG",
            "code": "FRU"
          }
        },
        {
          "@attributes": {
            "city": "Bisho,ZA",
            "code": "BIY"
          }
        },
        {
          "@attributes": {
            "city": "Bishop,US",
            "code": "BIH"
          }
        },
        {
          "@attributes": {
            "city": "Biskra,DZ",
            "code": "BSK"
          }
        },
        {
          "@attributes": {
            "city": "Bismarck,US",
            "code": "BIS"
          }
        },
        {
          "@attributes": {
            "city": "Bissau,GW",
            "code": "OXB"
          }
        },
        {
          "@attributes": {
            "city": "Bitam,GA",
            "code": "BMM"
          }
        },
        {
          "@attributes": {
            "city": "Bitburg,DE",
            "code": "BBJ"
          }
        },
        {
          "@attributes": {
            "city": "Bitola,MK",
            "code": "QBI"
          }
        },
        {
          "@attributes": {
            "city": "Bizerte,TN",
            "code": "QIZ"
          }
        },
        {
          "@attributes": {
            "city": "Bjerka,NO",
            "code": "ZMZ"
          }
        },
        {
          "@attributes": {
            "city": "Blackall,AU",
            "code": "BKQ"
          }
        },
        {
          "@attributes": {
            "city": "Blackpool,GB",
            "code": "BLK"
          }
        },
        {
          "@attributes": {
            "city": "Blacksburg,US",
            "code": "BCB"
          }
        },
        {
          "@attributes": {
            "city": "Blackwater,AU",
            "code": "BLT"
          }
        },
        {
          "@attributes": {
            "city": "Blagoveshchensk,RU",
            "code": "BQS"
          }
        },
        {
          "@attributes": {
            "city": "Blairsville,US",
            "code": "BSI"
          }
        },
        {
          "@attributes": {
            "city": "Blakely Island,US",
            "code": "BYW"
          }
        },
        {
          "@attributes": {
            "city": "Blanc Sablon,CA",
            "code": "YBX"
          }
        },
        {
          "@attributes": {
            "city": "Blanding,US",
            "code": "BDG"
          }
        },
        {
          "@attributes": {
            "city": "Blantyre,MW",
            "code": "BLZ"
          }
        },
        {
          "@attributes": {
            "city": "Blenheim,NZ",
            "code": "BHE"
          }
        },
        {
          "@attributes": {
            "city": "Blida,DZ",
            "code": "QLD"
          }
        },
        {
          "@attributes": {
            "city": "Block Island,US",
            "code": "BID"
          }
        },
        {
          "@attributes": {
            "city": "Bloemfontein,ZA",
            "code": "BFN"
          }
        },
        {
          "@attributes": {
            "city": "Blois,FR",
            "code": "XBQ"
          }
        },
        {
          "@attributes": {
            "city": "Blonduos,IS",
            "code": "BLO"
          }
        },
        {
          "@attributes": {
            "city": "Bloodvein River,CA",
            "code": "YDV"
          }
        },
        {
          "@attributes": {
            "city": "Bloomfield River,AU",
            "code": "BFC"
          }
        },
        {
          "@attributes": {
            "city": "Bloomington,US",
            "code": "BMG"
          }
        },
        {
          "@attributes": {
            "city": "Bloomington,US",
            "code": "BMI"
          }
        },
        {
          "@attributes": {
            "city": "Blue Bell,US",
            "code": "BBX"
          }
        },
        {
          "@attributes": {
            "city": "Blue Canyon,US",
            "code": "BLU"
          }
        },
        {
          "@attributes": {
            "city": "Blue Fox Bay,US",
            "code": "BFB"
          }
        },
        {
          "@attributes": {
            "city": "Bluefield,US",
            "code": "BLF"
          }
        },
        {
          "@attributes": {
            "city": "Blumenau,BR",
            "code": "BNU"
          }
        },
        {
          "@attributes": {
            "city": "Blythe,US",
            "code": "BLH"
          }
        },
        {
          "@attributes": {
            "city": "Blytheville,US",
            "code": "HKA"
          }
        },
        {
          "@attributes": {
            "city": "Bo Norway,NO",
            "code": "XXC"
          }
        },
        {
          "@attributes": {
            "city": "Boa Vista,BR",
            "code": "BVB"
          }
        },
        {
          "@attributes": {
            "city": "Boa Vista,CV",
            "code": "BVC"
          }
        },
        {
          "@attributes": {
            "city": "Boang,PG",
            "code": "BOV"
          }
        },
        {
          "@attributes": {
            "city": "Boao,CN",
            "code": "BPO"
          }
        },
        {
          "@attributes": {
            "city": "Bobadilla,ES",
            "code": "OZI"
          }
        },
        {
          "@attributes": {
            "city": "Bobo Dioulasso,BF",
            "code": "BOY"
          }
        },
        {
          "@attributes": {
            "city": "Boca Raton,US",
            "code": "BCT"
          }
        },
        {
          "@attributes": {
            "city": "Bocas Del Toro,PA",
            "code": "BOC"
          }
        },
        {
          "@attributes": {
            "city": "Bocholt,DE",
            "code": "ZCI"
          }
        },
        {
          "@attributes": {
            "city": "Bochum,DE",
            "code": "QBO"
          }
        },
        {
          "@attributes": {
            "city": "Bodaybo,RU",
            "code": "ODO"
          }
        },
        {
          "@attributes": {
            "city": "Bodinumu,PG",
            "code": "BNM"
          }
        },
        {
          "@attributes": {
            "city": "Bodo,NO",
            "code": "BOO"
          }
        },
        {
          "@attributes": {
            "city": "Bodrum,TR",
            "code": "BXN"
          }
        },
        {
          "@attributes": {
            "city": "Boeblingen,DE",
            "code": "PHM"
          }
        },
        {
          "@attributes": {
            "city": "Boende,CD",
            "code": "BNB"
          }
        },
        {
          "@attributes": {
            "city": "Bogota,CO",
            "code": "BOG"
          }
        },
        {
          "@attributes": {
            "city": "Boigu Island,AU",
            "code": "GIC"
          }
        },
        {
          "@attributes": {
            "city": "Boise,US",
            "code": "BOI"
          }
        },
        {
          "@attributes": {
            "city": "Bokondini,ID",
            "code": "BUI"
          }
        },
        {
          "@attributes": {
            "city": "Bokpyin,MM",
            "code": "VBP"
          }
        },
        {
          "@attributes": {
            "city": "Bologna,IT",
            "code": "BLQ"
          }
        },
        {
          "@attributes": {
            "city": "Bolzano,IT",
            "code": "BZO"
          }
        },
        {
          "@attributes": {
            "city": "Bomai,PG",
            "code": "BMH"
          }
        },
        {
          "@attributes": {
            "city": "Bonaire,BQ",
            "code": "BON"
          }
        },
        {
          "@attributes": {
            "city": "Bonaventure,CA",
            "code": "YVB"
          }
        },
        {
          "@attributes": {
            "city": "Bondoukou,CI",
            "code": "BDK"
          }
        },
        {
          "@attributes": {
            "city": "Bonito,BR",
            "code": "BYO"
          }
        },
        {
          "@attributes": {
            "city": "Bonn,DE",
            "code": "BNJ"
          }
        },
        {
          "@attributes": {
            "city": "Bonnyville,CA",
            "code": "YBY"
          }
        },
        {
          "@attributes": {
            "city": "Bora Bora,PF",
            "code": "BOB"
          }
        },
        {
          "@attributes": {
            "city": "Bordeaux,FR",
            "code": "BOD"
          }
        },
        {
          "@attributes": {
            "city": "Bordj Badji Mokhtar,DZ",
            "code": "BMW"
          }
        },
        {
          "@attributes": {
            "city": "Bordj Menaiel,DZ",
            "code": "ZZM"
          }
        },
        {
          "@attributes": {
            "city": "Borg El Arab,EG",
            "code": "HBE"
          }
        },
        {
          "@attributes": {
            "city": "Borgarfjordur,IS",
            "code": "BGJ"
          }
        },
        {
          "@attributes": {
            "city": "Boridi,PG",
            "code": "BPB"
          }
        },
        {
          "@attributes": {
            "city": "Borkum,DE",
            "code": "BMK"
          }
        },
        {
          "@attributes": {
            "city": "Borlange,SE",
            "code": "BLE"
          }
        },
        {
          "@attributes": {
            "city": "Bornholm,DK",
            "code": "RNN"
          }
        },
        {
          "@attributes": {
            "city": "Bornite,US",
            "code": "RLU"
          }
        },
        {
          "@attributes": {
            "city": "Borrego Springs,US",
            "code": "BXS"
          }
        },
        {
          "@attributes": {
            "city": "Borroloola,AU",
            "code": "BOX"
          }
        },
        {
          "@attributes": {
            "city": "Bosaso,SO",
            "code": "BSA"
          }
        },
        {
          "@attributes": {
            "city": "Boston,US",
            "code": "BOS"
          }
        },
        {
          "@attributes": {
            "city": "Botosani,RO",
            "code": "QDD"
          }
        },
        {
          "@attributes": {
            "city": "Bottrop,DE",
            "code": "ZCJ"
          }
        },
        {
          "@attributes": {
            "city": "Botucatu,BR",
            "code": "QCJ"
          }
        },
        {
          "@attributes": {
            "city": "Bouake,CI",
            "code": "BYK"
          }
        },
        {
          "@attributes": {
            "city": "Boulder,US",
            "code": "WBU"
          }
        },
        {
          "@attributes": {
            "city": "Boulia,AU",
            "code": "BQL"
          }
        },
        {
          "@attributes": {
            "city": "Boulogne Billancourt,FR",
            "code": "XBT"
          }
        },
        {
          "@attributes": {
            "city": "Boulogne Sur Mer,FR",
            "code": "XBS"
          }
        },
        {
          "@attributes": {
            "city": "Bouna,CI",
            "code": "BQO"
          }
        },
        {
          "@attributes": {
            "city": "Boundary,US",
            "code": "BYA"
          }
        },
        {
          "@attributes": {
            "city": "Boundiali,CI",
            "code": "BXI"
          }
        },
        {
          "@attributes": {
            "city": "Boundji,CG",
            "code": "BOE"
          }
        },
        {
          "@attributes": {
            "city": "Bountiful,US",
            "code": "BTF"
          }
        },
        {
          "@attributes": {
            "city": "Bourg En Bresse,FR",
            "code": "XBK"
          }
        },
        {
          "@attributes": {
            "city": "Bourg St Maurice,FR",
            "code": "QBM"
          }
        },
        {
          "@attributes": {
            "city": "Bourgas,BG",
            "code": "BOJ"
          }
        },
        {
          "@attributes": {
            "city": "Bourges,FR",
            "code": "BOU"
          }
        },
        {
          "@attributes": {
            "city": "Bourke,AU",
            "code": "BRK"
          }
        },
        {
          "@attributes": {
            "city": "Bournemouth,GB",
            "code": "BOH"
          }
        },
        {
          "@attributes": {
            "city": "Bowen,AU",
            "code": "ZBO"
          }
        },
        {
          "@attributes": {
            "city": "Bowling Green,US",
            "code": "BWG"
          }
        },
        {
          "@attributes": {
            "city": "Bowling Green,US",
            "code": "APH"
          }
        },
        {
          "@attributes": {
            "city": "Bozeman,US",
            "code": "BZN"
          }
        },
        {
          "@attributes": {
            "city": "Brac,HR",
            "code": "BWK"
          }
        },
        {
          "@attributes": {
            "city": "Bradford,GB",
            "code": "BRF"
          }
        },
        {
          "@attributes": {
            "city": "Bradford,US",
            "code": "BFD"
          }
        },
        {
          "@attributes": {
            "city": "Braga,PT",
            "code": "BGZ"
          }
        },
        {
          "@attributes": {
            "city": "Braganca,PT",
            "code": "BGC"
          }
        },
        {
          "@attributes": {
            "city": "Braganca Paulista,BR",
            "code": "BJP"
          }
        },
        {
          "@attributes": {
            "city": "Brainerd,US",
            "code": "BRD"
          }
        },
        {
          "@attributes": {
            "city": "Braintree,GB",
            "code": "WXF"
          }
        },
        {
          "@attributes": {
            "city": "Brampton,CA",
            "code": "XPN"
          }
        },
        {
          "@attributes": {
            "city": "Brampton Island,AU",
            "code": "BMP"
          }
        },
        {
          "@attributes": {
            "city": "Brandon,CA",
            "code": "YBR"
          }
        },
        {
          "@attributes": {
            "city": "Branson,US",
            "code": "BKG"
          }
        },
        {
          "@attributes": {
            "city": "Brantford,CA",
            "code": "XFV"
          }
        },
        {
          "@attributes": {
            "city": "Brasilia,BR",
            "code": "BSB"
          }
        },
        {
          "@attributes": {
            "city": "Brasov,RO",
            "code": "XHV"
          }
        },
        {
          "@attributes": {
            "city": "Bratislava,SK",
            "code": "BTS"
          }
        },
        {
          "@attributes": {
            "city": "Bratsk,RU",
            "code": "BTK"
          }
        },
        {
          "@attributes": {
            "city": "Braunschweig,DE",
            "code": "BWE"
          }
        },
        {
          "@attributes": {
            "city": "Brava,CV",
            "code": "BVR"
          }
        },
        {
          "@attributes": {
            "city": "Brawley,US",
            "code": "BWC"
          }
        },
        {
          "@attributes": {
            "city": "Brazoria,US",
            "code": "BZT"
          }
        },
        {
          "@attributes": {
            "city": "Brazzaville,CG",
            "code": "BZV"
          }
        },
        {
          "@attributes": {
            "city": "Breckenridge,US",
            "code": "QKB"
          }
        },
        {
          "@attributes": {
            "city": "Breda,NL",
            "code": "GLZ"
          }
        },
        {
          "@attributes": {
            "city": "Bregenz,AT",
            "code": "XGZ"
          }
        },
        {
          "@attributes": {
            "city": "Breiddalsvik,IS",
            "code": "BXV"
          }
        },
        {
          "@attributes": {
            "city": "Bremen,DE",
            "code": "BRE"
          }
        },
        {
          "@attributes": {
            "city": "Bremerhaven,DE",
            "code": "BRV"
          }
        },
        {
          "@attributes": {
            "city": "Bremerton,US",
            "code": "PWT"
          }
        },
        {
          "@attributes": {
            "city": "Brescia,IT",
            "code": "QBS"
          }
        },
        {
          "@attributes": {
            "city": "Bresciaa,IT",
            "code": "BRZ"
          }
        },
        {
          "@attributes": {
            "city": "Brest,BY",
            "code": "BQT"
          }
        },
        {
          "@attributes": {
            "city": "Brest,FR",
            "code": "BES"
          }
        },
        {
          "@attributes": {
            "city": "Brevig Mission,US",
            "code": "KTS"
          }
        },
        {
          "@attributes": {
            "city": "Brewarrina,AU",
            "code": "BWQ"
          }
        },
        {
          "@attributes": {
            "city": "Briancon,FR",
            "code": "XBC"
          }
        },
        {
          "@attributes": {
            "city": "Bridgeport,US",
            "code": "BDR"
          }
        },
        {
          "@attributes": {
            "city": "Bridgetown,BB",
            "code": "BGI"
          }
        },
        {
          "@attributes": {
            "city": "Brig,CH",
            "code": "ZDL"
          }
        },
        {
          "@attributes": {
            "city": "Brigham cities,US",
            "code": "BMC"
          }
        },
        {
          "@attributes": {
            "city": "Brighton,GB",
            "code": "BSH"
          }
        },
        {
          "@attributes": {
            "city": "Brindisi,IT",
            "code": "BDS"
          }
        },
        {
          "@attributes": {
            "city": "Brisbane,AU",
            "code": "BNE"
          }
        },
        {
          "@attributes": {
            "city": "Bristol,GB",
            "code": "BRS"
          }
        },
        {
          "@attributes": {
            "city": "Bristol,US",
            "code": "TRI"
          }
        },
        {
          "@attributes": {
            "city": "Brive La Gaill,FR",
            "code": "BVE"
          }
        },
        {
          "@attributes": {
            "city": "Brize Norton,GB",
            "code": "BZZ"
          }
        },
        {
          "@attributes": {
            "city": "Brno,CZ",
            "code": "BRQ"
          }
        },
        {
          "@attributes": {
            "city": "Brochet,CA",
            "code": "YBT"
          }
        },
        {
          "@attributes": {
            "city": "Brockville,CA",
            "code": "XBR"
          }
        },
        {
          "@attributes": {
            "city": "Broken Bow,US",
            "code": "BBW"
          }
        },
        {
          "@attributes": {
            "city": "Broken Hill,AU",
            "code": "BHQ"
          }
        },
        {
          "@attributes": {
            "city": "Bromont,CA",
            "code": "ZBM"
          }
        },
        {
          "@attributes": {
            "city": "Bronnoysund,NO",
            "code": "BNN"
          }
        },
        {
          "@attributes": {
            "city": "Brookhaven,US",
            "code": "WSH"
          }
        },
        {
          "@attributes": {
            "city": "Brookings,US",
            "code": "BKX"
          }
        },
        {
          "@attributes": {
            "city": "Broome,AU",
            "code": "BME"
          }
        },
        {
          "@attributes": {
            "city": "Broomfield,US",
            "code": "BJC"
          }
        },
        {
          "@attributes": {
            "city": "Brownsville,US",
            "code": "BRO"
          }
        },
        {
          "@attributes": {
            "city": "Brownwood,US",
            "code": "BWD"
          }
        },
        {
          "@attributes": {
            "city": "Bruehl,DE",
            "code": "ZCK"
          }
        },
        {
          "@attributes": {
            "city": "Brugge,BE",
            "code": "ZGJ"
          }
        },
        {
          "@attributes": {
            "city": "Brumunddal,NO",
            "code": "ZVB"
          }
        },
        {
          "@attributes": {
            "city": "Brunswick,US",
            "code": "BQK"
          }
        },
        {
          "@attributes": {
            "city": "Brunswick,US",
            "code": "NHZ"
          }
        },
        {
          "@attributes": {
            "city": "Brusque,BR",
            "code": "QJM"
          }
        },
        {
          "@attributes": {
            "city": "Brussels,BE",
            "code": "BRU"
          }
        },
        {
          "@attributes": {
            "city": "Bryansk,RU",
            "code": "BZK"
          }
        },
        {
          "@attributes": {
            "city": "Bryce,US",
            "code": "BCE"
          }
        },
        {
          "@attributes": {
            "city": "Bryne,NO",
            "code": "XOB"
          }
        },
        {
          "@attributes": {
            "city": "Bucaramanga,CO",
            "code": "BGA"
          }
        },
        {
          "@attributes": {
            "city": "Buch Sg,CH",
            "code": "ZDO"
          }
        },
        {
          "@attributes": {
            "city": "Bucharest,RO",
            "code": "BUH"
          }
        },
        {
          "@attributes": {
            "city": "Buckeye,US",
            "code": "BXK"
          }
        },
        {
          "@attributes": {
            "city": "Buckland,US",
            "code": "BKC"
          }
        },
        {
          "@attributes": {
            "city": "Budapest,HU",
            "code": "BUD"
          }
        },
        {
          "@attributes": {
            "city": "Budva,ME",
            "code": "QBA"
          }
        },
        {
          "@attributes": {
            "city": "Buenaventura,CO",
            "code": "BUN"
          }
        },
        {
          "@attributes": {
            "city": "Buenos Aires,AR",
            "code": "BUE"
          }
        },
        {
          "@attributes": {
            "city": "Buenos Aires,CR",
            "code": "BAI"
          }
        },
        {
          "@attributes": {
            "city": "Buerjin cities,CN",
            "code": "KJI"
          }
        },
        {
          "@attributes": {
            "city": "Buffalo,US",
            "code": "BUF"
          }
        },
        {
          "@attributes": {
            "city": "Bugulma,RU",
            "code": "UUA"
          }
        },
        {
          "@attributes": {
            "city": "Buin,PG",
            "code": "UBI"
          }
        },
        {
          "@attributes": {
            "city": "Bujumbura,BI",
            "code": "BJM"
          }
        },
        {
          "@attributes": {
            "city": "Buka Island,PG",
            "code": "BUA"
          }
        },
        {
          "@attributes": {
            "city": "Bukavu,CD",
            "code": "BKY"
          }
        },
        {
          "@attributes": {
            "city": "Bukhara,UZ",
            "code": "BHK"
          }
        },
        {
          "@attributes": {
            "city": "Bukoba,TZ",
            "code": "BKZ"
          }
        },
        {
          "@attributes": {
            "city": "Bulawayo,ZW",
            "code": "BUQ"
          }
        },
        {
          "@attributes": {
            "city": "Bullfrog Basin,US",
            "code": "BFG"
          }
        },
        {
          "@attributes": {
            "city": "Bullhead cities,US",
            "code": "IFP"
          }
        },
        {
          "@attributes": {
            "city": "Bulolo,PG",
            "code": "BUL"
          }
        },
        {
          "@attributes": {
            "city": "Bumba,CD",
            "code": "BMB"
          }
        },
        {
          "@attributes": {
            "city": "Bumi Hills,ZW",
            "code": "BZH"
          }
        },
        {
          "@attributes": {
            "city": "Bunbury,AU",
            "code": "BUY"
          }
        },
        {
          "@attributes": {
            "city": "Bundaberg,AU",
            "code": "BDB"
          }
        },
        {
          "@attributes": {
            "city": "Bundi,PG",
            "code": "BNT"
          }
        },
        {
          "@attributes": {
            "city": "Bunia,CD",
            "code": "BUX"
          }
        },
        {
          "@attributes": {
            "city": "Buochs,CH",
            "code": "BXO"
          }
        },
        {
          "@attributes": {
            "city": "Buol,ID",
            "code": "UOL"
          }
        },
        {
          "@attributes": {
            "city": "Burao,SO",
            "code": "BUO"
          }
        },
        {
          "@attributes": {
            "city": "Burbank,US",
            "code": "BUR"
          }
        },
        {
          "@attributes": {
            "city": "Burgdorf,CH",
            "code": "ZDP"
          }
        },
        {
          "@attributes": {
            "city": "Burgos,ES",
            "code": "RGS"
          }
        },
        {
          "@attributes": {
            "city": "Buri Ram,TH",
            "code": "BFV"
          }
        },
        {
          "@attributes": {
            "city": "Burketown,AU",
            "code": "BUC"
          }
        },
        {
          "@attributes": {
            "city": "Burley,US",
            "code": "BYI"
          }
        },
        {
          "@attributes": {
            "city": "Burlington,US",
            "code": "BRL"
          }
        },
        {
          "@attributes": {
            "city": "Burlington,US",
            "code": "BTV"
          }
        },
        {
          "@attributes": {
            "city": "Burlington,US",
            "code": "BBF"
          }
        },
        {
          "@attributes": {
            "city": "Burnie,AU",
            "code": "BWT"
          }
        },
        {
          "@attributes": {
            "city": "Burns,US",
            "code": "BNO"
          }
        },
        {
          "@attributes": {
            "city": "Burns Lake,CA",
            "code": "YPZ"
          }
        },
        {
          "@attributes": {
            "city": "Bursa,TR",
            "code": "YEI"
          }
        },
        {
          "@attributes": {
            "city": "Bury St Edmunds,GB",
            "code": "BEQ"
          }
        },
        {
          "@attributes": {
            "city": "Busan,KR",
            "code": "PUS"
          }
        },
        {
          "@attributes": {
            "city": "Bushehr,IR",
            "code": "BUZ"
          }
        },
        {
          "@attributes": {
            "city": "Busselton,AU",
            "code": "BQB"
          }
        },
        {
          "@attributes": {
            "city": "Busuanga,PH",
            "code": "USU"
          }
        },
        {
          "@attributes": {
            "city": "Butaritari,KI",
            "code": "BBG"
          }
        },
        {
          "@attributes": {
            "city": "Butler,US",
            "code": "BTP"
          }
        },
        {
          "@attributes": {
            "city": "Butler,US",
            "code": "BUM"
          }
        },
        {
          "@attributes": {
            "city": "Butte,US",
            "code": "BTM"
          }
        },
        {
          "@attributes": {
            "city": "Butuan,PH",
            "code": "BXU"
          }
        },
        {
          "@attributes": {
            "city": "Buzios,BR",
            "code": "BZC"
          }
        },
        {
          "@attributes": {
            "city": "Bydgoszcz,PL",
            "code": "BZG"
          }
        },
        {
          "@attributes": {
            "city": "Byron Bay,AU",
            "code": "QYN"
          }
        },
        {
          "@attributes": {
            "city": "CHAOYANG,CN",
            "code": "CHG"
          }
        },
        {
          "@attributes": {
            "city": "Ca Mau cities,VN",
            "code": "CAH"
          }
        },
        {
          "@attributes": {
            "city": "Cabimas,VE",
            "code": "CBS"
          }
        },
        {
          "@attributes": {
            "city": "Cabinda,AO",
            "code": "CAB"
          }
        },
        {
          "@attributes": {
            "city": "Cabo Frio,BR",
            "code": "CFB"
          }
        },
        {
          "@attributes": {
            "city": "Cabo Frio Br,BR",
            "code": "QCK"
          }
        },
        {
          "@attributes": {
            "city": "Cacador,BR",
            "code": "CFC"
          }
        },
        {
          "@attributes": {
            "city": "Caceres,BR",
            "code": "CCX"
          }
        },
        {
          "@attributes": {
            "city": "Caceres,ES",
            "code": "QUQ"
          }
        },
        {
          "@attributes": {
            "city": "Cachoeirinha,BR",
            "code": "QKA"
          }
        },
        {
          "@attributes": {
            "city": "Cachoeiro De Itapemirim,BR",
            "code": "CDI"
          }
        },
        {
          "@attributes": {
            "city": "Cacoal,BR",
            "code": "OAL"
          }
        },
        {
          "@attributes": {
            "city": "Cadillac,US",
            "code": "CAD"
          }
        },
        {
          "@attributes": {
            "city": "Cadiz,ES",
            "code": "CDZ"
          }
        },
        {
          "@attributes": {
            "city": "Caen,FR",
            "code": "CFR"
          }
        },
        {
          "@attributes": {
            "city": "Cagayan,PH",
            "code": "CGY"
          }
        },
        {
          "@attributes": {
            "city": "Cagliari,IT",
            "code": "CAG"
          }
        },
        {
          "@attributes": {
            "city": "Cagnes Sur Mer,FR",
            "code": "XCG"
          }
        },
        {
          "@attributes": {
            "city": "Cahors,FR",
            "code": "ZAO"
          }
        },
        {
          "@attributes": {
            "city": "Cairns,AU",
            "code": "CNS"
          }
        },
        {
          "@attributes": {
            "city": "Cairo,EG",
            "code": "CAI"
          }
        },
        {
          "@attributes": {
            "city": "Cajamarca,PE",
            "code": "CJA"
          }
        },
        {
          "@attributes": {
            "city": "Calabar,NG",
            "code": "CBQ"
          }
        },
        {
          "@attributes": {
            "city": "Calabozo,VE",
            "code": "CLZ"
          }
        },
        {
          "@attributes": {
            "city": "Calais,FR",
            "code": "CQF"
          }
        },
        {
          "@attributes": {
            "city": "Calais cities,FR",
            "code": "XFF"
          }
        },
        {
          "@attributes": {
            "city": "Calama,CL",
            "code": "CJC"
          }
        },
        {
          "@attributes": {
            "city": "Calbayog,PH",
            "code": "CYP"
          }
        },
        {
          "@attributes": {
            "city": "Caldas Novas,BR",
            "code": "CLV"
          }
        },
        {
          "@attributes": {
            "city": "Caldwell,US",
            "code": "CDW"
          }
        },
        {
          "@attributes": {
            "city": "Calexico,US",
            "code": "CXL"
          }
        },
        {
          "@attributes": {
            "city": "Calgary,CA",
            "code": "YYC"
          }
        },
        {
          "@attributes": {
            "city": "Cali,CO",
            "code": "CLO"
          }
        },
        {
          "@attributes": {
            "city": "Calipatria,US",
            "code": "CLR"
          }
        },
        {
          "@attributes": {
            "city": "Callaway Gardens,US",
            "code": "CWG"
          }
        },
        {
          "@attributes": {
            "city": "Caloundra,AU",
            "code": "CUD"
          }
        },
        {
          "@attributes": {
            "city": "Caltanissetta,IT",
            "code": "QCL"
          }
        },
        {
          "@attributes": {
            "city": "Calvi,FR",
            "code": "CLY"
          }
        },
        {
          "@attributes": {
            "city": "Cam Ranh,VN",
            "code": "CXR"
          }
        },
        {
          "@attributes": {
            "city": "Camacari,BR",
            "code": "QCC"
          }
        },
        {
          "@attributes": {
            "city": "Camaguey,CU",
            "code": "CMW"
          }
        },
        {
          "@attributes": {
            "city": "Cambrai,FR",
            "code": "XCB"
          }
        },
        {
          "@attributes": {
            "city": "Cambridge,GB",
            "code": "CBG"
          }
        },
        {
          "@attributes": {
            "city": "Cambridge,US",
            "code": "CGE"
          }
        },
        {
          "@attributes": {
            "city": "Cambridge Bay,CA",
            "code": "YCB"
          }
        },
        {
          "@attributes": {
            "city": "Camden,US",
            "code": "CDH"
          }
        },
        {
          "@attributes": {
            "city": "Camiguin,PH",
            "code": "CGM"
          }
        },
        {
          "@attributes": {
            "city": "Camiri,BO",
            "code": "CAM"
          }
        },
        {
          "@attributes": {
            "city": "Camocim,BR",
            "code": "CMC"
          }
        },
        {
          "@attributes": {
            "city": "Camp Springs,US",
            "code": "ADW"
          }
        },
        {
          "@attributes": {
            "city": "Campbell Island,CA",
            "code": "ZEL"
          }
        },
        {
          "@attributes": {
            "city": "Campbell River,CA",
            "code": "YBL"
          }
        },
        {
          "@attributes": {
            "city": "Campbellton,CA",
            "code": "XAZ"
          }
        },
        {
          "@attributes": {
            "city": "Campbelltown,GB",
            "code": "CAL"
          }
        },
        {
          "@attributes": {
            "city": "Campeche,MX",
            "code": "CPE"
          }
        },
        {
          "@attributes": {
            "city": "Campina Grande,BR",
            "code": "CPV"
          }
        },
        {
          "@attributes": {
            "city": "Campinas,BR",
            "code": "CPQ"
          }
        },
        {
          "@attributes": {
            "city": "Campo,US",
            "code": "CZZ"
          }
        },
        {
          "@attributes": {
            "city": "Campo Alegre,BR",
            "code": "CMP"
          }
        },
        {
          "@attributes": {
            "city": "Campo Mourao,BR",
            "code": "CBW"
          }
        },
        {
          "@attributes": {
            "city": "Campobasso,IT",
            "code": "QPB"
          }
        },
        {
          "@attributes": {
            "city": "Campogrande,BR",
            "code": "CGR"
          }
        },
        {
          "@attributes": {
            "city": "Campos,BR",
            "code": "CAW"
          }
        },
        {
          "@attributes": {
            "city": "Campos Do Jordao,BR",
            "code": "QJO"
          }
        },
        {
          "@attributes": {
            "city": "Can Tho,VN",
            "code": "VCA"
          }
        },
        {
          "@attributes": {
            "city": "Canaima,VE",
            "code": "CAJ"
          }
        },
        {
          "@attributes": {
            "city": "Canakkale,TR",
            "code": "CKZ"
          }
        },
        {
          "@attributes": {
            "city": "Cananea,MX",
            "code": "CNA"
          }
        },
        {
          "@attributes": {
            "city": "Canas,CR",
            "code": "CSC"
          }
        },
        {
          "@attributes": {
            "city": "Canberra,AU",
            "code": "CBR"
          }
        },
        {
          "@attributes": {
            "city": "Cancun,MX",
            "code": "CUN"
          }
        },
        {
          "@attributes": {
            "city": "Candle,US",
            "code": "CDL"
          }
        },
        {
          "@attributes": {
            "city": "Canela,BR",
            "code": "QCN"
          }
        },
        {
          "@attributes": {
            "city": "Cannes,FR",
            "code": "CEQ"
          }
        },
        {
          "@attributes": {
            "city": "Canoas,BR",
            "code": "QNS"
          }
        },
        {
          "@attributes": {
            "city": "Canon cities,US",
            "code": "CNE"
          }
        },
        {
          "@attributes": {
            "city": "Canouan Island,DM",
            "code": "CIW"
          }
        },
        {
          "@attributes": {
            "city": "Canton Island,KI",
            "code": "CIS"
          }
        },
        {
          "@attributes": {
            "city": "Cap Haitien,HT",
            "code": "CAP"
          }
        },
        {
          "@attributes": {
            "city": "Cap Skirring,SN",
            "code": "CSK"
          }
        },
        {
          "@attributes": {
            "city": "Cape Dorset,CA",
            "code": "YTE"
          }
        },
        {
          "@attributes": {
            "city": "Cape Girardeau,US",
            "code": "CGI"
          }
        },
        {
          "@attributes": {
            "city": "Cape Gloucester,PG",
            "code": "CGC"
          }
        },
        {
          "@attributes": {
            "city": "Cape Lisburne,US",
            "code": "LUR"
          }
        },
        {
          "@attributes": {
            "city": "Cape May,US",
            "code": "WWD"
          }
        },
        {
          "@attributes": {
            "city": "Cape Newenham,US",
            "code": "EHM"
          }
        },
        {
          "@attributes": {
            "city": "Cape Rodney,PG",
            "code": "CPN"
          }
        },
        {
          "@attributes": {
            "city": "Cape Romanzof,US",
            "code": "CZF"
          }
        },
        {
          "@attributes": {
            "city": "Cape Spencer,US",
            "code": "CSP"
          }
        },
        {
          "@attributes": {
            "city": "Cape Town,ZA",
            "code": "CPT"
          }
        },
        {
          "@attributes": {
            "city": "Cape Vogel,PG",
            "code": "CVL"
          }
        },
        {
          "@attributes": {
            "city": "Cape Yakataga,US",
            "code": "CYT"
          }
        },
        {
          "@attributes": {
            "city": "Capreol,CA",
            "code": "XAW"
          }
        },
        {
          "@attributes": {
            "city": "Capri,IT",
            "code": "PRJ"
          }
        },
        {
          "@attributes": {
            "city": "Capurgana,CO",
            "code": "CPB"
          }
        },
        {
          "@attributes": {
            "city": "Car Nicobar,IN",
            "code": "CBD"
          }
        },
        {
          "@attributes": {
            "city": "Caracas,VE",
            "code": "CCS"
          }
        },
        {
          "@attributes": {
            "city": "Caraguatatuba,BR",
            "code": "QCQ"
          }
        },
        {
          "@attributes": {
            "city": "Carajas,BR",
            "code": "CKS"
          }
        },
        {
          "@attributes": {
            "city": "Caransebes,RO",
            "code": "CSB"
          }
        },
        {
          "@attributes": {
            "city": "Caratinga,BR",
            "code": "QTL"
          }
        },
        {
          "@attributes": {
            "city": "Carbondale,US",
            "code": "MDH"
          }
        },
        {
          "@attributes": {
            "city": "Carcassonne,FR",
            "code": "CCF"
          }
        },
        {
          "@attributes": {
            "city": "Cardiff,GB",
            "code": "CWL"
          }
        },
        {
          "@attributes": {
            "city": "Caribou,US",
            "code": "CAR"
          }
        },
        {
          "@attributes": {
            "city": "Carleton,CA",
            "code": "XON"
          }
        },
        {
          "@attributes": {
            "city": "Carlisle,GB",
            "code": "CAX"
          }
        },
        {
          "@attributes": {
            "city": "Carlsbad,US",
            "code": "CNM"
          }
        },
        {
          "@attributes": {
            "city": "Carnarvon,AU",
            "code": "CVQ"
          }
        },
        {
          "@attributes": {
            "city": "Carriacou,GD",
            "code": "CRU"
          }
        },
        {
          "@attributes": {
            "city": "Carroll,US",
            "code": "CIN"
          }
        },
        {
          "@attributes": {
            "city": "Carson cities,US",
            "code": "CSN"
          }
        },
        {
          "@attributes": {
            "city": "Cartagena,CO",
            "code": "CTG"
          }
        },
        {
          "@attributes": {
            "city": "Cartagena,ES",
            "code": "XUF"
          }
        },
        {
          "@attributes": {
            "city": "Cartago,CO",
            "code": "CRC"
          }
        },
        {
          "@attributes": {
            "city": "Cartwright,CA",
            "code": "YRF"
          }
        },
        {
          "@attributes": {
            "city": "Caruaru,BR",
            "code": "CAU"
          }
        },
        {
          "@attributes": {
            "city": "Carupano,VE",
            "code": "CUP"
          }
        },
        {
          "@attributes": {
            "city": "Casa Grande,US",
            "code": "CGZ"
          }
        },
        {
          "@attributes": {
            "city": "Casablanca,MA",
            "code": "CAS"
          }
        },
        {
          "@attributes": {
            "city": "Cascavel,BR",
            "code": "CAC"
          }
        },
        {
          "@attributes": {
            "city": "Caserta,IT",
            "code": "CTJ"
          }
        },
        {
          "@attributes": {
            "city": "Casino,AU",
            "code": "CSI"
          }
        },
        {
          "@attributes": {
            "city": "Casper,US",
            "code": "CPR"
          }
        },
        {
          "@attributes": {
            "city": "Casselman,CA",
            "code": "XZB"
          }
        },
        {
          "@attributes": {
            "city": "Cassilandia,BR",
            "code": "CSS"
          }
        },
        {
          "@attributes": {
            "city": "Castaway,FJ",
            "code": "CST"
          }
        },
        {
          "@attributes": {
            "city": "Castellon de la Plana,ES",
            "code": "CDT"
          }
        },
        {
          "@attributes": {
            "city": "Castlegar,CA",
            "code": "YCG"
          }
        },
        {
          "@attributes": {
            "city": "Castres,FR",
            "code": "DCM"
          }
        },
        {
          "@attributes": {
            "city": "Castro,CL",
            "code": "WCA"
          }
        },
        {
          "@attributes": {
            "city": "Castrop Rauxel,DE",
            "code": "ZCM"
          }
        },
        {
          "@attributes": {
            "city": "Cat Cay,BS",
            "code": "CXY"
          }
        },
        {
          "@attributes": {
            "city": "Cat Lake Indian Reserve,CA",
            "code": "YAC"
          }
        },
        {
          "@attributes": {
            "city": "Catacamas,HN",
            "code": "CAA"
          }
        },
        {
          "@attributes": {
            "city": "Catalina Island,US",
            "code": "AVX"
          }
        },
        {
          "@attributes": {
            "city": "Catamarca,AR",
            "code": "CTC"
          }
        },
        {
          "@attributes": {
            "city": "Catanduva,BR",
            "code": "QDE"
          }
        },
        {
          "@attributes": {
            "city": "Catania,IT",
            "code": "CTA"
          }
        },
        {
          "@attributes": {
            "city": "Catanzaro,IT",
            "code": "QCZ"
          }
        },
        {
          "@attributes": {
            "city": "Catarman,PH",
            "code": "CRM"
          }
        },
        {
          "@attributes": {
            "city": "Caticlan,PH",
            "code": "MPH"
          }
        },
        {
          "@attributes": {
            "city": "Catumbela,AD",
            "code": "CBT"
          }
        },
        {
          "@attributes": {
            "city": "Cauayan cities,PH",
            "code": "CYZ"
          }
        },
        {
          "@attributes": {
            "city": "Caucasia,CO",
            "code": "CAQ"
          }
        },
        {
          "@attributes": {
            "city": "Cauquira,HN",
            "code": "CDD"
          }
        },
        {
          "@attributes": {
            "city": "Caxias Do Sul,BR",
            "code": "CXJ"
          }
        },
        {
          "@attributes": {
            "city": "Caye Caulker,BZ",
            "code": "CUK"
          }
        },
        {
          "@attributes": {
            "city": "Cayenne,GF",
            "code": "CAY"
          }
        },
        {
          "@attributes": {
            "city": "Cayman Brac,KY",
            "code": "CYB"
          }
        },
        {
          "@attributes": {
            "city": "Cayo Coco,CU",
            "code": "CCC"
          }
        },
        {
          "@attributes": {
            "city": "Cayo Largo Del Sur,CU",
            "code": "CYO"
          }
        },
        {
          "@attributes": {
            "city": "Cebu,PH",
            "code": "CEB"
          }
        },
        {
          "@attributes": {
            "city": "Cedar cities,US",
            "code": "CDC"
          }
        },
        {
          "@attributes": {
            "city": "Cedar Rapids,US",
            "code": "CID"
          }
        },
        {
          "@attributes": {
            "city": "Ceduna,AU",
            "code": "CED"
          }
        },
        {
          "@attributes": {
            "city": "Celle,DE",
            "code": "ZCN"
          }
        },
        {
          "@attributes": {
            "city": "Central,US",
            "code": "CEM"
          }
        },
        {
          "@attributes": {
            "city": "Centralia,US",
            "code": "ENL"
          }
        },
        {
          "@attributes": {
            "city": "Century cities,US",
            "code": "CCD"
          }
        },
        {
          "@attributes": {
            "city": "Cepu,ID",
            "code": "CPF"
          }
        },
        {
          "@attributes": {
            "city": "Cessnock,AU",
            "code": "CES"
          }
        },
        {
          "@attributes": {
            "city": "Ceuta,ES",
            "code": "JCU"
          }
        },
        {
          "@attributes": {
            "city": "Chadron,US",
            "code": "CDR"
          }
        },
        {
          "@attributes": {
            "city": "Chah Bahar,IR",
            "code": "ZBR"
          }
        },
        {
          "@attributes": {
            "city": "Chalkida,GR",
            "code": "QKG"
          }
        },
        {
          "@attributes": {
            "city": "Chalkyitsik,US",
            "code": "CIK"
          }
        },
        {
          "@attributes": {
            "city": "Chalon Sur Saone,FR",
            "code": "XCD"
          }
        },
        {
          "@attributes": {
            "city": "Chalons Sur Marne,FR",
            "code": "XCR"
          }
        },
        {
          "@attributes": {
            "city": "Cham Off Line PT,DE",
            "code": "QHQ"
          }
        },
        {
          "@attributes": {
            "city": "Chambery,FR",
            "code": "CMF"
          }
        },
        {
          "@attributes": {
            "city": "Chambord,CA",
            "code": "XCI"
          }
        },
        {
          "@attributes": {
            "city": "Chamonix Mont Blanc,FR",
            "code": "XCF"
          }
        },
        {
          "@attributes": {
            "city": "Champaign,US",
            "code": "CMI"
          }
        },
        {
          "@attributes": {
            "city": "Champery,CH",
            "code": "ZDQ"
          }
        },
        {
          "@attributes": {
            "city": "Chanaral,CL",
            "code": "CNR"
          }
        },
        {
          "@attributes": {
            "city": "Chandalar,US",
            "code": "WCR"
          }
        },
        {
          "@attributes": {
            "city": "Chandigarh,IN",
            "code": "IXC"
          }
        },
        {
          "@attributes": {
            "city": "Chandler,US",
            "code": "CHD"
          }
        },
        {
          "@attributes": {
            "city": "Chandler,CA",
            "code": "XDL"
          }
        },
        {
          "@attributes": {
            "city": "Changchun,CN",
            "code": "CGQ"
          }
        },
        {
          "@attributes": {
            "city": "Changde,CN",
            "code": "CGD"
          }
        },
        {
          "@attributes": {
            "city": "Changsha,CN",
            "code": "CSX"
          }
        },
        {
          "@attributes": {
            "city": "Changuinola,PA",
            "code": "CHX"
          }
        },
        {
          "@attributes": {
            "city": "Changzhi,CN",
            "code": "CIH"
          }
        },
        {
          "@attributes": {
            "city": "Changzhou,CN",
            "code": "CZX"
          }
        },
        {
          "@attributes": {
            "city": "Chania,GR",
            "code": "CHQ"
          }
        },
        {
          "@attributes": {
            "city": "Chantilly,FR",
            "code": "XCV"
          }
        },
        {
          "@attributes": {
            "city": "Chapeco,BR",
            "code": "XAP"
          }
        },
        {
          "@attributes": {
            "city": "Chapelco,AR",
            "code": "CPC"
          }
        },
        {
          "@attributes": {
            "city": "Chapleau,CA",
            "code": "YLD"
          }
        },
        {
          "@attributes": {
            "city": "Charleston,US",
            "code": "CHS"
          }
        },
        {
          "@attributes": {
            "city": "Charleston,US",
            "code": "CRW"
          }
        },
        {
          "@attributes": {
            "city": "Charleville,AU",
            "code": "CTL"
          }
        },
        {
          "@attributes": {
            "city": "Charleville Mezieres,FR",
            "code": "XCZ"
          }
        },
        {
          "@attributes": {
            "city": "Charlo,CA",
            "code": "YCL"
          }
        },
        {
          "@attributes": {
            "city": "Charlotte,US",
            "code": "CLT"
          }
        },
        {
          "@attributes": {
            "city": "Charlottesville,US",
            "code": "CHO"
          }
        },
        {
          "@attributes": {
            "city": "Charlottetown,CA",
            "code": "YYG"
          }
        },
        {
          "@attributes": {
            "city": "Charlottetown,CA",
            "code": "YHG"
          }
        },
        {
          "@attributes": {
            "city": "Charters Towers,AU",
            "code": "CXT"
          }
        },
        {
          "@attributes": {
            "city": "Chartres,FR",
            "code": "QTJ"
          }
        },
        {
          "@attributes": {
            "city": "Chateau D Oex,CH",
            "code": "ZDR"
          }
        },
        {
          "@attributes": {
            "city": "Chateau Thierry,FR",
            "code": "XCY"
          }
        },
        {
          "@attributes": {
            "city": "Chateauroux,FR",
            "code": "CHR"
          }
        },
        {
          "@attributes": {
            "city": "Chatellerault,FR",
            "code": "XCX"
          }
        },
        {
          "@attributes": {
            "city": "Chatham,US",
            "code": "CYM"
          }
        },
        {
          "@attributes": {
            "city": "Chatham,CA",
            "code": "XCM"
          }
        },
        {
          "@attributes": {
            "city": "Chatham Island,NZ",
            "code": "CHT"
          }
        },
        {
          "@attributes": {
            "city": "Chattanooga,US",
            "code": "CHA"
          }
        },
        {
          "@attributes": {
            "city": "Chaumont,FR",
            "code": "XCW"
          }
        },
        {
          "@attributes": {
            "city": "Chaves,PT",
            "code": "CHV"
          }
        },
        {
          "@attributes": {
            "city": "Cheboksary,RU",
            "code": "CSY"
          }
        },
        {
          "@attributes": {
            "city": "Chefornak,US",
            "code": "CYF"
          }
        },
        {
          "@attributes": {
            "city": "Chehalis,US",
            "code": "CLS"
          }
        },
        {
          "@attributes": {
            "city": "Chelinda,MW",
            "code": "CEH"
          }
        },
        {
          "@attributes": {
            "city": "Cheltenham,GB",
            "code": "CHW"
          }
        },
        {
          "@attributes": {
            "city": "Chelyabinsk,RU",
            "code": "CEK"
          }
        },
        {
          "@attributes": {
            "city": "Chemainus,CA",
            "code": "XHS"
          }
        },
        {
          "@attributes": {
            "city": "Chemnitz,DE",
            "code": "ZTZ"
          }
        },
        {
          "@attributes": {
            "city": "Chena Hot Springs,US",
            "code": "CEX"
          }
        },
        {
          "@attributes": {
            "city": "Chengdu,CN",
            "code": "CTU"
          }
        },
        {
          "@attributes": {
            "city": "Chennai,IN",
            "code": "MAA"
          }
        },
        {
          "@attributes": {
            "city": "Chenzhou,CN",
            "code": "LQP"
          }
        },
        {
          "@attributes": {
            "city": "Cheongju,KR",
            "code": "CJJ"
          }
        },
        {
          "@attributes": {
            "city": "Cherbourg,FR",
            "code": "CER"
          }
        },
        {
          "@attributes": {
            "city": "Cherepovets,RU",
            "code": "CEE"
          }
        },
        {
          "@attributes": {
            "city": "Cherkassy,UA",
            "code": "CKC"
          }
        },
        {
          "@attributes": {
            "city": "Chernofski,US",
            "code": "KCN"
          }
        },
        {
          "@attributes": {
            "city": "Chernovtsy,UA",
            "code": "CWC"
          }
        },
        {
          "@attributes": {
            "city": "Chersky,RU",
            "code": "CYX"
          }
        },
        {
          "@attributes": {
            "city": "Chester,GB",
            "code": "CEG"
          }
        },
        {
          "@attributes": {
            "city": "Chesterfield,GB",
            "code": "ZFI"
          }
        },
        {
          "@attributes": {
            "city": "Chesterfield Inlet,CA",
            "code": "YCS"
          }
        },
        {
          "@attributes": {
            "city": "Chetumal,MX",
            "code": "CTM"
          }
        },
        {
          "@attributes": {
            "city": "Chetwynd,CA",
            "code": "YCQ"
          }
        },
        {
          "@attributes": {
            "city": "Chevak,US",
            "code": "VAK"
          }
        },
        {
          "@attributes": {
            "city": "Chevery,CA",
            "code": "YHR"
          }
        },
        {
          "@attributes": {
            "city": "Cheyenne,US",
            "code": "CYS"
          }
        },
        {
          "@attributes": {
            "city": "Chiang Mai,TH",
            "code": "CNX"
          }
        },
        {
          "@attributes": {
            "city": "Chiang Rai,TH",
            "code": "CEI"
          }
        },
        {
          "@attributes": {
            "city": "Chiasso,CH",
            "code": "ZDS"
          }
        },
        {
          "@attributes": {
            "city": "Chiayi,TW",
            "code": "CYI"
          }
        },
        {
          "@attributes": {
            "city": "Chiba,JP",
            "code": "QCB"
          }
        },
        {
          "@attributes": {
            "city": "Chibougamau,CA",
            "code": "YMT"
          }
        },
        {
          "@attributes": {
            "city": "Chicago,US",
            "code": "CHI"
          }
        },
        {
          "@attributes": {
            "city": "Chichen Itza,MX",
            "code": "CZA"
          }
        },
        {
          "@attributes": {
            "city": "Chickasha,US",
            "code": "CHK"
          }
        },
        {
          "@attributes": {
            "city": "Chicken,US",
            "code": "CKX"
          }
        },
        {
          "@attributes": {
            "city": "Chiclayo,PE",
            "code": "CIX"
          }
        },
        {
          "@attributes": {
            "city": "Chico,US",
            "code": "CIC"
          }
        },
        {
          "@attributes": {
            "city": "Chifeng,CN",
            "code": "CIF"
          }
        },
        {
          "@attributes": {
            "city": "Chignik,US",
            "code": "KCG"
          }
        },
        {
          "@attributes": {
            "city": "Chignik Lagoon,US",
            "code": "KCL"
          }
        },
        {
          "@attributes": {
            "city": "Chigoro,CO",
            "code": "IGO"
          }
        },
        {
          "@attributes": {
            "city": "Chihuahua,MX",
            "code": "CUU"
          }
        },
        {
          "@attributes": {
            "city": "Chillan,CL",
            "code": "YAI"
          }
        },
        {
          "@attributes": {
            "city": "Chilliwack,CA",
            "code": "YCW"
          }
        },
        {
          "@attributes": {
            "city": "Chimoio,MZ",
            "code": "VPY"
          }
        },
        {
          "@attributes": {
            "city": "Chinchilla,AU",
            "code": "CCL"
          }
        },
        {
          "@attributes": {
            "city": "Chincoteague,US",
            "code": "WAL"
          }
        },
        {
          "@attributes": {
            "city": "Chingola,ZM",
            "code": "CGJ"
          }
        },
        {
          "@attributes": {
            "city": "Chinju,KR",
            "code": "HIN"
          }
        },
        {
          "@attributes": {
            "city": "Chino,US",
            "code": "CNO"
          }
        },
        {
          "@attributes": {
            "city": "Chios,GR",
            "code": "JKH"
          }
        },
        {
          "@attributes": {
            "city": "Chipata,ZM",
            "code": "CIP"
          }
        },
        {
          "@attributes": {
            "city": "Chiredzi,ZW",
            "code": "BFO"
          }
        },
        {
          "@attributes": {
            "city": "Chisana,US",
            "code": "CZN"
          }
        },
        {
          "@attributes": {
            "city": "Chisasibi,CA",
            "code": "YKU"
          }
        },
        {
          "@attributes": {
            "city": "Chisinau,MD",
            "code": "KIV"
          }
        },
        {
          "@attributes": {
            "city": "Chita,RU",
            "code": "HTA"
          }
        },
        {
          "@attributes": {
            "city": "Chitina,US",
            "code": "CXC"
          }
        },
        {
          "@attributes": {
            "city": "Chitral,PK",
            "code": "CJL"
          }
        },
        {
          "@attributes": {
            "city": "Chitre,PA",
            "code": "CTD"
          }
        },
        {
          "@attributes": {
            "city": "Chittagong,BD",
            "code": "CGP"
          }
        },
        {
          "@attributes": {
            "city": "Chiusa Klausen,IT",
            "code": "ZAK"
          }
        },
        {
          "@attributes": {
            "city": "Chizhou,CN",
            "code": "JUH"
          }
        },
        {
          "@attributes": {
            "city": "Chkalovsky,RU",
            "code": "CKL"
          }
        },
        {
          "@attributes": {
            "city": "Chlef,DZ",
            "code": "CFK"
          }
        },
        {
          "@attributes": {
            "city": "Choctaw,US",
            "code": "HKC"
          }
        },
        {
          "@attributes": {
            "city": "Choiseul Bay,SB",
            "code": "CHY"
          }
        },
        {
          "@attributes": {
            "city": "Chokurdakh,RU",
            "code": "CKH"
          }
        },
        {
          "@attributes": {
            "city": "Cholet,FR",
            "code": "CET"
          }
        },
        {
          "@attributes": {
            "city": "Chon Buri,TH",
            "code": "QHI"
          }
        },
        {
          "@attributes": {
            "city": "Chongqing,CN",
            "code": "CKG"
          }
        },
        {
          "@attributes": {
            "city": "Christchurch,NZ",
            "code": "CHC"
          }
        },
        {
          "@attributes": {
            "city": "Christmas Island,KI",
            "code": "CXI"
          }
        },
        {
          "@attributes": {
            "city": "Christmas Island,CX",
            "code": "XCH"
          }
        },
        {
          "@attributes": {
            "city": "Chuathbaluk,US",
            "code": "CHU"
          }
        },
        {
          "@attributes": {
            "city": "Chumphon,TH",
            "code": "CJM"
          }
        },
        {
          "@attributes": {
            "city": "Chur,CH",
            "code": "ZDT"
          }
        },
        {
          "@attributes": {
            "city": "Churchhill Falls,CA",
            "code": "ZUM"
          }
        },
        {
          "@attributes": {
            "city": "Churchill,CA",
            "code": "YYQ"
          }
        },
        {
          "@attributes": {
            "city": "Cicia,FJ",
            "code": "ICI"
          }
        },
        {
          "@attributes": {
            "city": "Ciego De Avila,CU",
            "code": "AVI"
          }
        },
        {
          "@attributes": {
            "city": "Cienfuegos,CU",
            "code": "CFG"
          }
        },
        {
          "@attributes": {
            "city": "Cilacap,ID",
            "code": "CXP"
          }
        },
        {
          "@attributes": {
            "city": "Cincinnati,US",
            "code": "CVG"
          }
        },
        {
          "@attributes": {
            "city": "Circle,US",
            "code": "IRC"
          }
        },
        {
          "@attributes": {
            "city": "Circle Hot Springs,US",
            "code": "CHP"
          }
        },
        {
          "@attributes": {
            "city": "Cirebon,ID",
            "code": "CBN"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Bolivar,VE",
            "code": "CBL"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Constitucion,MX",
            "code": "CUA"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Del Carmen,MX",
            "code": "CME"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Del Este,PY",
            "code": "AGT"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Guayana,VE",
            "code": "CGU"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Juarez,MX",
            "code": "CJS"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Mante,MX",
            "code": "MMC"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Obregon,MX",
            "code": "CEN"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Real,ES",
            "code": "CQM"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Real cities,ES",
            "code": "CJI"
          }
        },
        {
          "@attributes": {
            "city": "Ciudad Victoria,MX",
            "code": "CVM"
          }
        },
        {
          "@attributes": {
            "city": "Ciudadela,ES",
            "code": "QIU"
          }
        },
        {
          "@attributes": {
            "city": "Clarks Point,US",
            "code": "CLP"
          }
        },
        {
          "@attributes": {
            "city": "Clarksburg,US",
            "code": "CKB"
          }
        },
        {
          "@attributes": {
            "city": "Clarksdale,US",
            "code": "CKM"
          }
        },
        {
          "@attributes": {
            "city": "Clarksville,US",
            "code": "CKV"
          }
        },
        {
          "@attributes": {
            "city": "Clear Lake,US",
            "code": "CKE"
          }
        },
        {
          "@attributes": {
            "city": "Clear Lake cities,US",
            "code": "CLC"
          }
        },
        {
          "@attributes": {
            "city": "Clearwater,US",
            "code": "CLW"
          }
        },
        {
          "@attributes": {
            "city": "Clemson,US",
            "code": "CEU"
          }
        },
        {
          "@attributes": {
            "city": "Clermont,AU",
            "code": "CMQ"
          }
        },
        {
          "@attributes": {
            "city": "Clermont  Ferrand,FR",
            "code": "CFE"
          }
        },
        {
          "@attributes": {
            "city": "Cleveland,US",
            "code": "CLE"
          }
        },
        {
          "@attributes": {
            "city": "Clifton,US",
            "code": "CFT"
          }
        },
        {
          "@attributes": {
            "city": "Clifton Hills,AU",
            "code": "CFH"
          }
        },
        {
          "@attributes": {
            "city": "Clinton,US",
            "code": "CSM"
          }
        },
        {
          "@attributes": {
            "city": "Clinton,US",
            "code": "CWI"
          }
        },
        {
          "@attributes": {
            "city": "Cloncurry,AU",
            "code": "CNJ"
          }
        },
        {
          "@attributes": {
            "city": "Clover Pass,US",
            "code": "RTE"
          }
        },
        {
          "@attributes": {
            "city": "Clovis,US",
            "code": "CVN"
          }
        },
        {
          "@attributes": {
            "city": "Cluj,RO",
            "code": "CLJ"
          }
        },
        {
          "@attributes": {
            "city": "Clyde River,CA",
            "code": "YCY"
          }
        },
        {
          "@attributes": {
            "city": "Coalinga,US",
            "code": "CLG"
          }
        },
        {
          "@attributes": {
            "city": "Coatesville,US",
            "code": "CTH"
          }
        },
        {
          "@attributes": {
            "city": "Coatzacoalcos,MX",
            "code": "QTZ"
          }
        },
        {
          "@attributes": {
            "city": "Cobar,AU",
            "code": "CAZ"
          }
        },
        {
          "@attributes": {
            "city": "Cobija,BO",
            "code": "CIJ"
          }
        },
        {
          "@attributes": {
            "city": "Cobourg,CA",
            "code": "XGJ"
          }
        },
        {
          "@attributes": {
            "city": "Coca,EC",
            "code": "OCC"
          }
        },
        {
          "@attributes": {
            "city": "Cochabamba,BO",
            "code": "CBB"
          }
        },
        {
          "@attributes": {
            "city": "Cochise County,US",
            "code": "CWX"
          }
        },
        {
          "@attributes": {
            "city": "Cochrane,CA",
            "code": "YCN"
          }
        },
        {
          "@attributes": {
            "city": "Cocoa,US",
            "code": "COI"
          }
        },
        {
          "@attributes": {
            "city": "Coconut Island,AU",
            "code": "CNC"
          }
        },
        {
          "@attributes": {
            "city": "Cocos Islands,CC",
            "code": "CCK"
          }
        },
        {
          "@attributes": {
            "city": "Cody,US",
            "code": "COD"
          }
        },
        {
          "@attributes": {
            "city": "Coen,AU",
            "code": "CUQ"
          }
        },
        {
          "@attributes": {
            "city": "Coeur D Alene,US",
            "code": "COE"
          }
        },
        {
          "@attributes": {
            "city": "Coffman Cove,US",
            "code": "KCC"
          }
        },
        {
          "@attributes": {
            "city": "Coffs Harbour,AU",
            "code": "CFS"
          }
        },
        {
          "@attributes": {
            "city": "Cognac,FR",
            "code": "CNG"
          }
        },
        {
          "@attributes": {
            "city": "Coimbatore,IN",
            "code": "CJB"
          }
        },
        {
          "@attributes": {
            "city": "Coimbra,PT",
            "code": "CBP"
          }
        },
        {
          "@attributes": {
            "city": "Colac,AU",
            "code": "XCO"
          }
        },
        {
          "@attributes": {
            "city": "Colatina,BR",
            "code": "QCH"
          }
        },
        {
          "@attributes": {
            "city": "Colby,US",
            "code": "CBK"
          }
        },
        {
          "@attributes": {
            "city": "Colchester,GB",
            "code": "CLB"
          }
        },
        {
          "@attributes": {
            "city": "Cold Bay,US",
            "code": "CDB"
          }
        },
        {
          "@attributes": {
            "city": "Cold Lake,CA",
            "code": "YOD"
          }
        },
        {
          "@attributes": {
            "city": "Coldfoot,US",
            "code": "CXF"
          }
        },
        {
          "@attributes": {
            "city": "Colima,MX",
            "code": "CLQ"
          }
        },
        {
          "@attributes": {
            "city": "College Park,US",
            "code": "CGS"
          }
        },
        {
          "@attributes": {
            "city": "College Station,US",
            "code": "CLL"
          }
        },
        {
          "@attributes": {
            "city": "Collie,AU",
            "code": "CIE"
          }
        },
        {
          "@attributes": {
            "city": "Collinsville,AU",
            "code": "KCE"
          }
        },
        {
          "@attributes": {
            "city": "Colmar,FR",
            "code": "CMR"
          }
        },
        {
          "@attributes": {
            "city": "Cologne,DE",
            "code": "CGN"
          }
        },
        {
          "@attributes": {
            "city": "Colombo,LK",
            "code": "CMB"
          }
        },
        {
          "@attributes": {
            "city": "Colon,PA",
            "code": "ONX"
          }
        },
        {
          "@attributes": {
            "city": "Colonia,UY",
            "code": "CYR"
          }
        },
        {
          "@attributes": {
            "city": "Colonia Sarmiento,AR",
            "code": "OLN"
          }
        },
        {
          "@attributes": {
            "city": "Colonial Catriel,AR",
            "code": "CCT"
          }
        },
        {
          "@attributes": {
            "city": "Colonsay Island,GB",
            "code": "CSA"
          }
        },
        {
          "@attributes": {
            "city": "Colorado Springs,US",
            "code": "COS"
          }
        },
        {
          "@attributes": {
            "city": "Columbia,US",
            "code": "COU"
          }
        },
        {
          "@attributes": {
            "city": "Columbia,US",
            "code": "CAE"
          }
        },
        {
          "@attributes": {
            "city": "Columbia,US",
            "code": "COA"
          }
        },
        {
          "@attributes": {
            "city": "Columbia,US",
            "code": "MRC"
          }
        },
        {
          "@attributes": {
            "city": "Columbus,US",
            "code": "CLU"
          }
        },
        {
          "@attributes": {
            "city": "Columbus,US",
            "code": "CMH"
          }
        },
        {
          "@attributes": {
            "city": "Columbus,US",
            "code": "CSG"
          }
        },
        {
          "@attributes": {
            "city": "Columbus,US",
            "code": "CUS"
          }
        },
        {
          "@attributes": {
            "city": "Columbus,US",
            "code": "UBS"
          }
        },
        {
          "@attributes": {
            "city": "Columbus,US",
            "code": "OLU"
          }
        },
        {
          "@attributes": {
            "city": "Colville,CA",
            "code": "YCK"
          }
        },
        {
          "@attributes": {
            "city": "Comayagua,HN",
            "code": "XPL"
          }
        },
        {
          "@attributes": {
            "city": "Comiso,IT",
            "code": "CIY"
          }
        },
        {
          "@attributes": {
            "city": "Como,IT",
            "code": "QCM"
          }
        },
        {
          "@attributes": {
            "city": "Comodoro Rivadavia,AR",
            "code": "CRD"
          }
        },
        {
          "@attributes": {
            "city": "Comox,CA",
            "code": "YQQ"
          }
        },
        {
          "@attributes": {
            "city": "Compiegne,FR",
            "code": "XCP"
          }
        },
        {
          "@attributes": {
            "city": "Compton,US",
            "code": "CPM"
          }
        },
        {
          "@attributes": {
            "city": "Con Dao,VN",
            "code": "VCS"
          }
        },
        {
          "@attributes": {
            "city": "Conakry,GN",
            "code": "CKY"
          }
        },
        {
          "@attributes": {
            "city": "Conceicao Do Araguaia,BR",
            "code": "CDJ"
          }
        },
        {
          "@attributes": {
            "city": "Concepcion,PY",
            "code": "CIO"
          }
        },
        {
          "@attributes": {
            "city": "Concepcion,CL",
            "code": "CCP"
          }
        },
        {
          "@attributes": {
            "city": "Concord,US",
            "code": "CON"
          }
        },
        {
          "@attributes": {
            "city": "Concord,US",
            "code": "CCR"
          }
        },
        {
          "@attributes": {
            "city": "Concord,US",
            "code": "USA"
          }
        },
        {
          "@attributes": {
            "city": "Concordia,AR",
            "code": "COC"
          }
        },
        {
          "@attributes": {
            "city": "Concordia,US",
            "code": "CNK"
          }
        },
        {
          "@attributes": {
            "city": "Condobolin,AU",
            "code": "CBX"
          }
        },
        {
          "@attributes": {
            "city": "Condoto,CO",
            "code": "COG"
          }
        },
        {
          "@attributes": {
            "city": "Conroe,US",
            "code": "CXO"
          }
        },
        {
          "@attributes": {
            "city": "Constanta,RO",
            "code": "CND"
          }
        },
        {
          "@attributes": {
            "city": "Constantine,DZ",
            "code": "CZL"
          }
        },
        {
          "@attributes": {
            "city": "Contadora,PA",
            "code": "OTD"
          }
        },
        {
          "@attributes": {
            "city": "Coober Pedy,AU",
            "code": "CPD"
          }
        },
        {
          "@attributes": {
            "city": "Cooch Behar,IN",
            "code": "COH"
          }
        },
        {
          "@attributes": {
            "city": "Cooinda,AU",
            "code": "CDA"
          }
        },
        {
          "@attributes": {
            "city": "Cooktown,AU",
            "code": "CTN"
          }
        },
        {
          "@attributes": {
            "city": "Cooma,AU",
            "code": "OOM"
          }
        },
        {
          "@attributes": {
            "city": "Coonabarabrn,AU",
            "code": "COJ"
          }
        },
        {
          "@attributes": {
            "city": "Coonamble,AU",
            "code": "CNB"
          }
        },
        {
          "@attributes": {
            "city": "Cooper Landing,US",
            "code": "JLA"
          }
        },
        {
          "@attributes": {
            "city": "Cooperstown,US",
            "code": "COP"
          }
        },
        {
          "@attributes": {
            "city": "Cootamundra,AU",
            "code": "CMD"
          }
        },
        {
          "@attributes": {
            "city": "Copenhagen,DK",
            "code": "CPH"
          }
        },
        {
          "@attributes": {
            "city": "Copiapo,CL",
            "code": "CPO"
          }
        },
        {
          "@attributes": {
            "city": "Copper Center,US",
            "code": "CZC"
          }
        },
        {
          "@attributes": {
            "city": "Copper Mountain,US",
            "code": "QCE"
          }
        },
        {
          "@attributes": {
            "city": "Coquimbo,CL",
            "code": "COW"
          }
        },
        {
          "@attributes": {
            "city": "Coral Harbour,CA",
            "code": "YZS"
          }
        },
        {
          "@attributes": {
            "city": "Corazon De Jesus,PA",
            "code": "CZJ"
          }
        },
        {
          "@attributes": {
            "city": "Corcoran,US",
            "code": "CRO"
          }
        },
        {
          "@attributes": {
            "city": "Cordillo Downs,AU",
            "code": "ODL"
          }
        },
        {
          "@attributes": {
            "city": "Cordoba,AR",
            "code": "COR"
          }
        },
        {
          "@attributes": {
            "city": "Cordoba,ES",
            "code": "ODB"
          }
        },
        {
          "@attributes": {
            "city": "Cordova,US",
            "code": "CDV"
          }
        },
        {
          "@attributes": {
            "city": "Corinth,US",
            "code": "CRX"
          }
        },
        {
          "@attributes": {
            "city": "Cork,IE",
            "code": "ORK"
          }
        },
        {
          "@attributes": {
            "city": "Corner Bay,US",
            "code": "CBA"
          }
        },
        {
          "@attributes": {
            "city": "Cornwall,CA",
            "code": "YCC"
          }
        },
        {
          "@attributes": {
            "city": "Coro,VE",
            "code": "CZE"
          }
        },
        {
          "@attributes": {
            "city": "Coromandel,NZ",
            "code": "CMV"
          }
        },
        {
          "@attributes": {
            "city": "Coron,PH",
            "code": "XCN"
          }
        },
        {
          "@attributes": {
            "city": "Corowa,AU",
            "code": "CWW"
          }
        },
        {
          "@attributes": {
            "city": "Corozal,BZ",
            "code": "CZH"
          }
        },
        {
          "@attributes": {
            "city": "Corozal,CO",
            "code": "CZU"
          }
        },
        {
          "@attributes": {
            "city": "Corpus Christi,US",
            "code": "CRP"
          }
        },
        {
          "@attributes": {
            "city": "Corralejo,ES",
            "code": "QFU"
          }
        },
        {
          "@attributes": {
            "city": "Corrientes,AR",
            "code": "CNQ"
          }
        },
        {
          "@attributes": {
            "city": "Corsicana,US",
            "code": "CRS"
          }
        },
        {
          "@attributes": {
            "city": "Cortes Bay,CA",
            "code": "YCF"
          }
        },
        {
          "@attributes": {
            "city": "Cortez,US",
            "code": "CEZ"
          }
        },
        {
          "@attributes": {
            "city": "Corumba,BR",
            "code": "CMG"
          }
        },
        {
          "@attributes": {
            "city": "Corvallis,US",
            "code": "CVO"
          }
        },
        {
          "@attributes": {
            "city": "Corvo Island,PT",
            "code": "CVU"
          }
        },
        {
          "@attributes": {
            "city": "Cosenza,IT",
            "code": "QCS"
          }
        },
        {
          "@attributes": {
            "city": "Cotabato,PH",
            "code": "CBO"
          }
        },
        {
          "@attributes": {
            "city": "Coteau,CA",
            "code": "XGK"
          }
        },
        {
          "@attributes": {
            "city": "Cotia,BR",
            "code": "QOI"
          }
        },
        {
          "@attributes": {
            "city": "Coto 47,CR",
            "code": "OTR"
          }
        },
        {
          "@attributes": {
            "city": "Cotonou,BJ",
            "code": "COO"
          }
        },
        {
          "@attributes": {
            "city": "Cotriguacu,BR",
            "code": "OTT"
          }
        },
        {
          "@attributes": {
            "city": "Cottbus,DE",
            "code": "CBU"
          }
        },
        {
          "@attributes": {
            "city": "Cottonwood,US",
            "code": "CTW"
          }
        },
        {
          "@attributes": {
            "city": "Cotulla,US",
            "code": "COT"
          }
        },
        {
          "@attributes": {
            "city": "Council,US",
            "code": "CIL"
          }
        },
        {
          "@attributes": {
            "city": "Council Bluffs,US",
            "code": "CBF"
          }
        },
        {
          "@attributes": {
            "city": "Courbevoie,FR",
            "code": "QEV"
          }
        },
        {
          "@attributes": {
            "city": "Courchevel,FR",
            "code": "CVF"
          }
        },
        {
          "@attributes": {
            "city": "Courtenay,CA",
            "code": "YCA"
          }
        },
        {
          "@attributes": {
            "city": "Coventry,GB",
            "code": "CVT"
          }
        },
        {
          "@attributes": {
            "city": "Covilha,PT",
            "code": "COV"
          }
        },
        {
          "@attributes": {
            "city": "Cowarie,AU",
            "code": "CWR"
          }
        },
        {
          "@attributes": {
            "city": "Cowell,AU",
            "code": "CCW"
          }
        },
        {
          "@attributes": {
            "city": "Cowley,CA",
            "code": "YYM"
          }
        },
        {
          "@attributes": {
            "city": "Cowra,AU",
            "code": "CWT"
          }
        },
        {
          "@attributes": {
            "city": "Coxs Bazaar,BD",
            "code": "CXB"
          }
        },
        {
          "@attributes": {
            "city": "Coyhaique,CL",
            "code": "GXQ"
          }
        },
        {
          "@attributes": {
            "city": "Cozumel,MX",
            "code": "CZM"
          }
        },
        {
          "@attributes": {
            "city": "Crackenback Village,AU",
            "code": "QWL"
          }
        },
        {
          "@attributes": {
            "city": "Cradock,ZA",
            "code": "CDO"
          }
        },
        {
          "@attributes": {
            "city": "Craig,US",
            "code": "CGA"
          }
        },
        {
          "@attributes": {
            "city": "Craig,US",
            "code": "CIG"
          }
        },
        {
          "@attributes": {
            "city": "Craig Cove,VU",
            "code": "CCV"
          }
        },
        {
          "@attributes": {
            "city": "Crailsheim,DE",
            "code": "QEI"
          }
        },
        {
          "@attributes": {
            "city": "Craiova,RO",
            "code": "CRA"
          }
        },
        {
          "@attributes": {
            "city": "Cranbrook,CA",
            "code": "YXC"
          }
        },
        {
          "@attributes": {
            "city": "Creil,FR",
            "code": "CSF"
          }
        },
        {
          "@attributes": {
            "city": "Crescent cities,US",
            "code": "CEC"
          }
        },
        {
          "@attributes": {
            "city": "Crested Butte,US",
            "code": "CSE"
          }
        },
        {
          "@attributes": {
            "city": "Creston,CA",
            "code": "CFQ"
          }
        },
        {
          "@attributes": {
            "city": "Creteil,FR",
            "code": "QFC"
          }
        },
        {
          "@attributes": {
            "city": "Crewe,GB",
            "code": "XVC"
          }
        },
        {
          "@attributes": {
            "city": "Criciuma,BR",
            "code": "CCM"
          }
        },
        {
          "@attributes": {
            "city": "Crooked Creek,US",
            "code": "CKD"
          }
        },
        {
          "@attributes": {
            "city": "Crooked Island,BS",
            "code": "CRI"
          }
        },
        {
          "@attributes": {
            "city": "Cross lake,CA",
            "code": "YCR"
          }
        },
        {
          "@attributes": {
            "city": "Crossett,US",
            "code": "CRT"
          }
        },
        {
          "@attributes": {
            "city": "Crossville,US",
            "code": "CSV"
          }
        },
        {
          "@attributes": {
            "city": "Crotone,IT",
            "code": "CRV"
          }
        },
        {
          "@attributes": {
            "city": "Crows Landing,US",
            "code": "NRC"
          }
        },
        {
          "@attributes": {
            "city": "Croydon,AU",
            "code": "CDQ"
          }
        },
        {
          "@attributes": {
            "city": "Cruzeiro Do Sul,BR",
            "code": "CZS"
          }
        },
        {
          "@attributes": {
            "city": "Cube Cove,US",
            "code": "CUW"
          }
        },
        {
          "@attributes": {
            "city": "Cucuta,CO",
            "code": "CUC"
          }
        },
        {
          "@attributes": {
            "city": "Cudal,AU",
            "code": "CUG"
          }
        },
        {
          "@attributes": {
            "city": "Cuddapah,IN",
            "code": "CDP"
          }
        },
        {
          "@attributes": {
            "city": "Cuenca,EC",
            "code": "CUE"
          }
        },
        {
          "@attributes": {
            "city": "Cuenca,ES",
            "code": "CEJ"
          }
        },
        {
          "@attributes": {
            "city": "Cuernavaca,MX",
            "code": "CVJ"
          }
        },
        {
          "@attributes": {
            "city": "Cuiaba,BR",
            "code": "CGB"
          }
        },
        {
          "@attributes": {
            "city": "Culebra,US",
            "code": "CPX"
          }
        },
        {
          "@attributes": {
            "city": "Culiacan,MX",
            "code": "CUL"
          }
        },
        {
          "@attributes": {
            "city": "Culion,PH",
            "code": "CUJ"
          }
        },
        {
          "@attributes": {
            "city": "Culver cities,US",
            "code": "CVR"
          }
        },
        {
          "@attributes": {
            "city": "Cumana,VE",
            "code": "CUM"
          }
        },
        {
          "@attributes": {
            "city": "Cumberland,US",
            "code": "CBE"
          }
        },
        {
          "@attributes": {
            "city": "Cuneo,IT",
            "code": "CUF"
          }
        },
        {
          "@attributes": {
            "city": "Cunnamulla,AU",
            "code": "CMA"
          }
        },
        {
          "@attributes": {
            "city": "Curacao,CW",
            "code": "CUR"
          }
        },
        {
          "@attributes": {
            "city": "Curico,CL",
            "code": "ZCQ"
          }
        },
        {
          "@attributes": {
            "city": "Curitiba,BR",
            "code": "CWB"
          }
        },
        {
          "@attributes": {
            "city": "Cutral Co,AR",
            "code": "CUT"
          }
        },
        {
          "@attributes": {
            "city": "Cuxhaven,DE",
            "code": "FCN"
          }
        },
        {
          "@attributes": {
            "city": "Cuzco,PE",
            "code": "CUZ"
          }
        },
        {
          "@attributes": {
            "city": "Cyangugu,RW",
            "code": "KME"
          }
        },
        {
          "@attributes": {
            "city": "Czestochowa,PL",
            "code": "CZW"
          }
        },
        {
          "@attributes": {
            "city": "Da Nang,VN",
            "code": "DAD"
          }
        },
        {
          "@attributes": {
            "city": "Dachau,DE",
            "code": "ZCR"
          }
        },
        {
          "@attributes": {
            "city": "Daegu,KR",
            "code": "TAE"
          }
        },
        {
          "@attributes": {
            "city": "Daggett,US",
            "code": "DAG"
          }
        },
        {
          "@attributes": {
            "city": "Dakar,SN",
            "code": "DKR"
          }
        },
        {
          "@attributes": {
            "city": "Dakhla,MA",
            "code": "VIL"
          }
        },
        {
          "@attributes": {
            "city": "Dakhla Oasis,EG",
            "code": "DAK"
          }
        },
        {
          "@attributes": {
            "city": "Dalaman,TR",
            "code": "DLM"
          }
        },
        {
          "@attributes": {
            "city": "Dalat,VN",
            "code": "DLI"
          }
        },
        {
          "@attributes": {
            "city": "Dalby,AU",
            "code": "DBY"
          }
        },
        {
          "@attributes": {
            "city": "Dalgaranga,AU",
            "code": "DGD"
          }
        },
        {
          "@attributes": {
            "city": "Dali cities,CN",
            "code": "DLU"
          }
        },
        {
          "@attributes": {
            "city": "Dalian,CN",
            "code": "DLC"
          }
        },
        {
          "@attributes": {
            "city": "Dallas,US",
            "code": "DFW"
          }
        },
        {
          "@attributes": {
            "city": "Daloa,CI",
            "code": "DJO"
          }
        },
        {
          "@attributes": {
            "city": "Dalton,US",
            "code": "DNN"
          }
        },
        {
          "@attributes": {
            "city": "Daman,IN",
            "code": "NMB"
          }
        },
        {
          "@attributes": {
            "city": "Damascus,SY",
            "code": "DAM"
          }
        },
        {
          "@attributes": {
            "city": "Dambula,LK",
            "code": "DBU"
          }
        },
        {
          "@attributes": {
            "city": "Dammam,SA",
            "code": "DMM"
          }
        },
        {
          "@attributes": {
            "city": "Danbury,US",
            "code": "DXR"
          }
        },
        {
          "@attributes": {
            "city": "Dandong,CN",
            "code": "DDG"
          }
        },
        {
          "@attributes": {
            "city": "Dandugama,LK",
            "code": "DGM"
          }
        },
        {
          "@attributes": {
            "city": "Dangriga,BZ",
            "code": "DGA"
          }
        },
        {
          "@attributes": {
            "city": "Danville,US",
            "code": "DAN"
          }
        },
        {
          "@attributes": {
            "city": "Danville,US",
            "code": "DNV"
          }
        },
        {
          "@attributes": {
            "city": "Daocheng,CN",
            "code": "DCY"
          }
        },
        {
          "@attributes": {
            "city": "Daparizo,IN",
            "code": "DAE"
          }
        },
        {
          "@attributes": {
            "city": "Daqing,CN",
            "code": "DQA"
          }
        },
        {
          "@attributes": {
            "city": "Dar Es Salaam,TZ",
            "code": "DAR"
          }
        },
        {
          "@attributes": {
            "city": "Darlington,GB",
            "code": "XVG"
          }
        },
        {
          "@attributes": {
            "city": "Darmstadt,DE",
            "code": "ZCS"
          }
        },
        {
          "@attributes": {
            "city": "Darnley Island,AU",
            "code": "NLF"
          }
        },
        {
          "@attributes": {
            "city": "Daru,PG",
            "code": "DAU"
          }
        },
        {
          "@attributes": {
            "city": "Darwin,AU",
            "code": "DRW"
          }
        },
        {
          "@attributes": {
            "city": "Dashoguz,TM",
            "code": "TAZ"
          }
        },
        {
          "@attributes": {
            "city": "Datong,CN",
            "code": "DAT"
          }
        },
        {
          "@attributes": {
            "city": "Daugavpils,LV",
            "code": "DGP"
          }
        },
        {
          "@attributes": {
            "city": "Dauphin,CA",
            "code": "YDN"
          }
        },
        {
          "@attributes": {
            "city": "Davao,PH",
            "code": "DVO"
          }
        },
        {
          "@attributes": {
            "city": "Davenport,US",
            "code": "DVN"
          }
        },
        {
          "@attributes": {
            "city": "David,PA",
            "code": "DAV"
          }
        },
        {
          "@attributes": {
            "city": "Davos,CH",
            "code": "ZDV"
          }
        },
        {
          "@attributes": {
            "city": "Dawadmi,SA",
            "code": "DWD"
          }
        },
        {
          "@attributes": {
            "city": "Dawson cities,CA",
            "code": "YDA"
          }
        },
        {
          "@attributes": {
            "city": "Dawson Creek,CA",
            "code": "YDQ"
          }
        },
        {
          "@attributes": {
            "city": "Dax Les Thermes,FR",
            "code": "XDA"
          }
        },
        {
          "@attributes": {
            "city": "Daydream Island,AU",
            "code": "DDI"
          }
        },
        {
          "@attributes": {
            "city": "Dayong,CN",
            "code": "DYG"
          }
        },
        {
          "@attributes": {
            "city": "Dayton,US",
            "code": "DAY"
          }
        },
        {
          "@attributes": {
            "city": "Daytona Beach,US",
            "code": "DAB"
          }
        },
        {
          "@attributes": {
            "city": "Dazhou,CN",
            "code": "DAX"
          }
        },
        {
          "@attributes": {
            "city": "Deadmans Cay,BS",
            "code": "LGI"
          }
        },
        {
          "@attributes": {
            "city": "Dearborn,US",
            "code": "DEO"
          }
        },
        {
          "@attributes": {
            "city": "Dease Lake,CA",
            "code": "YDL"
          }
        },
        {
          "@attributes": {
            "city": "Death Valley,US",
            "code": "DTH"
          }
        },
        {
          "@attributes": {
            "city": "Deauville,FR",
            "code": "DOL"
          }
        },
        {
          "@attributes": {
            "city": "Debrecen,HU",
            "code": "DEB"
          }
        },
        {
          "@attributes": {
            "city": "Debremarcos,ET",
            "code": "DBM"
          }
        },
        {
          "@attributes": {
            "city": "Decatur,US",
            "code": "DCU"
          }
        },
        {
          "@attributes": {
            "city": "Decatur,US",
            "code": "DEC"
          }
        },
        {
          "@attributes": {
            "city": "Decorah,US",
            "code": "DEH"
          }
        },
        {
          "@attributes": {
            "city": "Deer Harbour,US",
            "code": "DHB"
          }
        },
        {
          "@attributes": {
            "city": "Deer Lake,CA",
            "code": "YDF"
          }
        },
        {
          "@attributes": {
            "city": "Deer Lake,CA",
            "code": "YVZ"
          }
        },
        {
          "@attributes": {
            "city": "Deering,US",
            "code": "DRG"
          }
        },
        {
          "@attributes": {
            "city": "Defiance,US",
            "code": "DFI"
          }
        },
        {
          "@attributes": {
            "city": "Degerfors,SE",
            "code": "XXD"
          }
        },
        {
          "@attributes": {
            "city": "Dehra Dun,IN",
            "code": "DED"
          }
        },
        {
          "@attributes": {
            "city": "Deirezzor,SY",
            "code": "DEZ"
          }
        },
        {
          "@attributes": {
            "city": "Del Carmen,PH",
            "code": "IAO"
          }
        },
        {
          "@attributes": {
            "city": "Del Rio,US",
            "code": "DRT"
          }
        },
        {
          "@attributes": {
            "city": "Delemont,CH",
            "code": "ZDW"
          }
        },
        {
          "@attributes": {
            "city": "Delhi,IN",
            "code": "DEL"
          }
        },
        {
          "@attributes": {
            "city": "Delmenhorst,DE",
            "code": "ZCT"
          }
        },
        {
          "@attributes": {
            "city": "Delta,US",
            "code": "DTA"
          }
        },
        {
          "@attributes": {
            "city": "Delta Downs,AU",
            "code": "DDN"
          }
        },
        {
          "@attributes": {
            "city": "Delta Junction,US",
            "code": "DJN"
          }
        },
        {
          "@attributes": {
            "city": "Dembidollo,ET",
            "code": "DEM"
          }
        },
        {
          "@attributes": {
            "city": "Den Helder,NL",
            "code": "DHR"
          }
        },
        {
          "@attributes": {
            "city": "Denham,AU",
            "code": "DNM"
          }
        },
        {
          "@attributes": {
            "city": "Deniliquin,AU",
            "code": "DNQ"
          }
        },
        {
          "@attributes": {
            "city": "Denizli,TR",
            "code": "DNZ"
          }
        },
        {
          "@attributes": {
            "city": "Denpasar Bali,ID",
            "code": "DPS"
          }
        },
        {
          "@attributes": {
            "city": "Denver,US",
            "code": "DEN"
          }
        },
        {
          "@attributes": {
            "city": "Deputatskij,RU",
            "code": "DPT"
          }
        },
        {
          "@attributes": {
            "city": "Dera Ghazi Khan,PK",
            "code": "DEA"
          }
        },
        {
          "@attributes": {
            "city": "Dera Ismail Khan,PK",
            "code": "DSK"
          }
        },
        {
          "@attributes": {
            "city": "Derby,AU",
            "code": "DRB"
          }
        },
        {
          "@attributes": {
            "city": "Derby,GB",
            "code": "XQH"
          }
        },
        {
          "@attributes": {
            "city": "Derby cities,AU",
            "code": "DCN"
          }
        },
        {
          "@attributes": {
            "city": "Derim,PG",
            "code": "DER"
          }
        },
        {
          "@attributes": {
            "city": "Des Moines,US",
            "code": "DSM"
          }
        },
        {
          "@attributes": {
            "city": "Dessau,DE",
            "code": "ZSU"
          }
        },
        {
          "@attributes": {
            "city": "Dessie,ET",
            "code": "DSE"
          }
        },
        {
          "@attributes": {
            "city": "Destin,US",
            "code": "DSI"
          }
        },
        {
          "@attributes": {
            "city": "Detroit,US",
            "code": "DTT"
          }
        },
        {
          "@attributes": {
            "city": "Detroit Lakes,US",
            "code": "DTL"
          }
        },
        {
          "@attributes": {
            "city": "Deventer,NL",
            "code": "QYV"
          }
        },
        {
          "@attributes": {
            "city": "Devils Lake,US",
            "code": "DVL"
          }
        },
        {
          "@attributes": {
            "city": "Devonport,AU",
            "code": "DPO"
          }
        },
        {
          "@attributes": {
            "city": "Deyang,CN",
            "code": "DEY"
          }
        },
        {
          "@attributes": {
            "city": "Dhahran,SA",
            "code": "DHA"
          }
        },
        {
          "@attributes": {
            "city": "Dhaka,BD",
            "code": "DAC"
          }
        },
        {
          "@attributes": {
            "city": "Dibaa,OM",
            "code": "BYB"
          }
        },
        {
          "@attributes": {
            "city": "Dibrugarh,IN",
            "code": "DIB"
          }
        },
        {
          "@attributes": {
            "city": "Dickinson,US",
            "code": "DIK"
          }
        },
        {
          "@attributes": {
            "city": "Dickwella,LK",
            "code": "DIW"
          }
        },
        {
          "@attributes": {
            "city": "Didcot,GB",
            "code": "XPW"
          }
        },
        {
          "@attributes": {
            "city": "Dien Bien Phu,VN",
            "code": "DIN"
          }
        },
        {
          "@attributes": {
            "city": "Dieppe,FR",
            "code": "DPE"
          }
        },
        {
          "@attributes": {
            "city": "Dietikon,CH",
            "code": "ZDX"
          }
        },
        {
          "@attributes": {
            "city": "Digby,CA",
            "code": "YDG"
          }
        },
        {
          "@attributes": {
            "city": "Digne,FR",
            "code": "XDI"
          }
        },
        {
          "@attributes": {
            "city": "Dijon,FR",
            "code": "DIJ"
          }
        },
        {
          "@attributes": {
            "city": "Dili,TL",
            "code": "DIL"
          }
        },
        {
          "@attributes": {
            "city": "Dillingham,US",
            "code": "DLG"
          }
        },
        {
          "@attributes": {
            "city": "Dillon,US",
            "code": "DLL"
          }
        },
        {
          "@attributes": {
            "city": "Dillons Bay,VU",
            "code": "DLY"
          }
        },
        {
          "@attributes": {
            "city": "Dimapur,IN",
            "code": "DMU"
          }
        },
        {
          "@attributes": {
            "city": "Dinard,FR",
            "code": "DNR"
          }
        },
        {
          "@attributes": {
            "city": "Diomede Island,US",
            "code": "DIO"
          }
        },
        {
          "@attributes": {
            "city": "Dipolog,PH",
            "code": "DPL"
          }
        },
        {
          "@attributes": {
            "city": "Diqing,CN",
            "code": "DIG"
          }
        },
        {
          "@attributes": {
            "city": "Dire Dawa,ET",
            "code": "DIR"
          }
        },
        {
          "@attributes": {
            "city": "Dirranbandi,AU",
            "code": "DRN"
          }
        },
        {
          "@attributes": {
            "city": "Disneyland Paris,FR",
            "code": "DLP"
          }
        },
        {
          "@attributes": {
            "city": "Disneyland Paris Rail,FR",
            "code": "XED"
          }
        },
        {
          "@attributes": {
            "city": "Diu In,IN",
            "code": "DIU"
          }
        },
        {
          "@attributes": {
            "city": "Divinopolis,BR",
            "code": "DIQ"
          }
        },
        {
          "@attributes": {
            "city": "Diyarbakir,TR",
            "code": "DIY"
          }
        },
        {
          "@attributes": {
            "city": "Djanet,DZ",
            "code": "DJG"
          }
        },
        {
          "@attributes": {
            "city": "Djerba,TN",
            "code": "DJE"
          }
        },
        {
          "@attributes": {
            "city": "Djibouti,DJ",
            "code": "JIB"
          }
        },
        {
          "@attributes": {
            "city": "Dnepropetrovsk,UA",
            "code": "DNK"
          }
        },
        {
          "@attributes": {
            "city": "Doany,MG",
            "code": "DOA"
          }
        },
        {
          "@attributes": {
            "city": "Dobo,ID",
            "code": "DOB"
          }
        },
        {
          "@attributes": {
            "city": "Dodge cities,US",
            "code": "DDC"
          }
        },
        {
          "@attributes": {
            "city": "Dodoima,PG",
            "code": "DDM"
          }
        },
        {
          "@attributes": {
            "city": "Dodoma,TZ",
            "code": "DOD"
          }
        },
        {
          "@attributes": {
            "city": "Doha,QA",
            "code": "DOH"
          }
        },
        {
          "@attributes": {
            "city": "Dolbeau,CA",
            "code": "YDO"
          }
        },
        {
          "@attributes": {
            "city": "Dole,FR",
            "code": "DLE"
          }
        },
        {
          "@attributes": {
            "city": "Dolomi,US",
            "code": "DLO"
          }
        },
        {
          "@attributes": {
            "city": "Dombas,NO",
            "code": "XGP"
          }
        },
        {
          "@attributes": {
            "city": "Dominica,DM",
            "code": "DOM"
          }
        },
        {
          "@attributes": {
            "city": "Donauwoerth,DE",
            "code": "QWR"
          }
        },
        {
          "@attributes": {
            "city": "Doncaster,GB",
            "code": "DSA"
          }
        },
        {
          "@attributes": {
            "city": "Donegal,IE",
            "code": "CFN"
          }
        },
        {
          "@attributes": {
            "city": "Donetsk,UA",
            "code": "DOK"
          }
        },
        {
          "@attributes": {
            "city": "Dong Hoi,VN",
            "code": "VDH"
          }
        },
        {
          "@attributes": {
            "city": "Dongara,AU",
            "code": "DOX"
          }
        },
        {
          "@attributes": {
            "city": "Dongguan,CN",
            "code": "XHO"
          }
        },
        {
          "@attributes": {
            "city": "Dongola,SD",
            "code": "DOG"
          }
        },
        {
          "@attributes": {
            "city": "Dongying,CN",
            "code": "DOY"
          }
        },
        {
          "@attributes": {
            "city": "Doomadgee,AU",
            "code": "DMD"
          }
        },
        {
          "@attributes": {
            "city": "Dora Bay,US",
            "code": "DOF"
          }
        },
        {
          "@attributes": {
            "city": "Dorado,US",
            "code": "DDP"
          }
        },
        {
          "@attributes": {
            "city": "Dori,BF",
            "code": "DOR"
          }
        },
        {
          "@attributes": {
            "city": "Dormagen,DE",
            "code": "ZCW"
          }
        },
        {
          "@attributes": {
            "city": "Dornbirn,AT",
            "code": "QDI"
          }
        },
        {
          "@attributes": {
            "city": "Dornoch,GB",
            "code": "DOC"
          }
        },
        {
          "@attributes": {
            "city": "Dorobisoro,PG",
            "code": "DOO"
          }
        },
        {
          "@attributes": {
            "city": "Dortmund,DE",
            "code": "DTM"
          }
        },
        {
          "@attributes": {
            "city": "Dorunda,AU",
            "code": "DRD"
          }
        },
        {
          "@attributes": {
            "city": "Dothan,US",
            "code": "DHN"
          }
        },
        {
          "@attributes": {
            "city": "Douai,FR",
            "code": "XDN"
          }
        },
        {
          "@attributes": {
            "city": "Douala,CM",
            "code": "DLA"
          }
        },
        {
          "@attributes": {
            "city": "Douglas,US",
            "code": "DUG"
          }
        },
        {
          "@attributes": {
            "city": "Douglas,US",
            "code": "DGW"
          }
        },
        {
          "@attributes": {
            "city": "Dourados,BR",
            "code": "DOU"
          }
        },
        {
          "@attributes": {
            "city": "Dover,US",
            "code": "DOV"
          }
        },
        {
          "@attributes": {
            "city": "Dover,GB",
            "code": "QQD"
          }
        },
        {
          "@attributes": {
            "city": "Downey,US",
            "code": "JDY"
          }
        },
        {
          "@attributes": {
            "city": "Doylestown,US",
            "code": "DYL"
          }
        },
        {
          "@attributes": {
            "city": "Drachten,NL",
            "code": "QYC"
          }
        },
        {
          "@attributes": {
            "city": "Drake Bay,CR",
            "code": "DRK"
          }
        },
        {
          "@attributes": {
            "city": "Drammen,NO",
            "code": "XND"
          }
        },
        {
          "@attributes": {
            "city": "Drangedal,NO",
            "code": "ZVD"
          }
        },
        {
          "@attributes": {
            "city": "Drayton Valley,CA",
            "code": "YDC"
          }
        },
        {
          "@attributes": {
            "city": "Dresden,DE",
            "code": "DRS"
          }
        },
        {
          "@attributes": {
            "city": "Dreux,FR",
            "code": "XDR"
          }
        },
        {
          "@attributes": {
            "city": "Drift River,US",
            "code": "DRF"
          }
        },
        {
          "@attributes": {
            "city": "Drummond,US",
            "code": "DRU"
          }
        },
        {
          "@attributes": {
            "city": "Drummondville,CA",
            "code": "XDM"
          }
        },
        {
          "@attributes": {
            "city": "Dryden,CA",
            "code": "YHD"
          }
        },
        {
          "@attributes": {
            "city": "Dschang,CM",
            "code": "DSC"
          }
        },
        {
          "@attributes": {
            "city": "Dubai,AE",
            "code": "DXB"
          }
        },
        {
          "@attributes": {
            "city": "Dubbo,AU",
            "code": "DBO"
          }
        },
        {
          "@attributes": {
            "city": "Dublin,US",
            "code": "DBN"
          }
        },
        {
          "@attributes": {
            "city": "Dublin,IE",
            "code": "DUB"
          }
        },
        {
          "@attributes": {
            "city": "Dublin,US",
            "code": "PSK"
          }
        },
        {
          "@attributes": {
            "city": "Dubois,US",
            "code": "DUJ"
          }
        },
        {
          "@attributes": {
            "city": "Dubrovnik,HR",
            "code": "DBV"
          }
        },
        {
          "@attributes": {
            "city": "Dubuque,US",
            "code": "DBQ"
          }
        },
        {
          "@attributes": {
            "city": "Dueren,DE",
            "code": "ZCY"
          }
        },
        {
          "@attributes": {
            "city": "Dugong,MZ",
            "code": "DGK"
          }
        },
        {
          "@attributes": {
            "city": "Duisburg,DE",
            "code": "DUI"
          }
        },
        {
          "@attributes": {
            "city": "Duluth,US",
            "code": "DLH"
          }
        },
        {
          "@attributes": {
            "city": "Dumaguete,PH",
            "code": "DGT"
          }
        },
        {
          "@attributes": {
            "city": "Dunbar,AU",
            "code": "DNB"
          }
        },
        {
          "@attributes": {
            "city": "Duncan,CA",
            "code": "DUQ"
          }
        },
        {
          "@attributes": {
            "city": "Duncan,US",
            "code": "DUC"
          }
        },
        {
          "@attributes": {
            "city": "Dundee,GB",
            "code": "DND"
          }
        },
        {
          "@attributes": {
            "city": "Dundo,AO",
            "code": "DUE"
          }
        },
        {
          "@attributes": {
            "city": "Dunedin,NZ",
            "code": "DUD"
          }
        },
        {
          "@attributes": {
            "city": "Dunhuang,CN",
            "code": "DNH"
          }
        },
        {
          "@attributes": {
            "city": "Dunk Island,AU",
            "code": "DKI"
          }
        },
        {
          "@attributes": {
            "city": "Dunkerque,FR",
            "code": "XDK"
          }
        },
        {
          "@attributes": {
            "city": "Dunkirk,US",
            "code": "DKK"
          }
        },
        {
          "@attributes": {
            "city": "Duqm,OM",
            "code": "JNJ"
          }
        },
        {
          "@attributes": {
            "city": "Duque De Caxias,BR",
            "code": "QDQ"
          }
        },
        {
          "@attributes": {
            "city": "Durango,MX",
            "code": "DGO"
          }
        },
        {
          "@attributes": {
            "city": "Durango,US",
            "code": "DRO"
          }
        },
        {
          "@attributes": {
            "city": "Durant,US",
            "code": "DUA"
          }
        },
        {
          "@attributes": {
            "city": "Durazno,UY",
            "code": "DZO"
          }
        },
        {
          "@attributes": {
            "city": "Durban,ZA",
            "code": "DUR"
          }
        },
        {
          "@attributes": {
            "city": "Durgapur,IN",
            "code": "RDP"
          }
        },
        {
          "@attributes": {
            "city": "Durham,GB",
            "code": "MME"
          }
        },
        {
          "@attributes": {
            "city": "Durham Downs,AU",
            "code": "DHD"
          }
        },
        {
          "@attributes": {
            "city": "Durrie,AU",
            "code": "DRR"
          }
        },
        {
          "@attributes": {
            "city": "Dushanbe,TJ",
            "code": "DYU"
          }
        },
        {
          "@attributes": {
            "city": "Dusseldorf,DE",
            "code": "DUS"
          }
        },
        {
          "@attributes": {
            "city": "Dutch Harbor,US",
            "code": "DUT"
          }
        },
        {
          "@attributes": {
            "city": "Dysart,AU",
            "code": "DYA"
          }
        },
        {
          "@attributes": {
            "city": "Dzaoudzi,YT",
            "code": "DZA"
          }
        },
        {
          "@attributes": {
            "city": "Eagle,US",
            "code": "EAA"
          }
        },
        {
          "@attributes": {
            "city": "Eagle,US",
            "code": "EGE"
          }
        },
        {
          "@attributes": {
            "city": "Eagle Lake,US",
            "code": "ELA"
          }
        },
        {
          "@attributes": {
            "city": "Eagle Pass,US",
            "code": "EGP"
          }
        },
        {
          "@attributes": {
            "city": "Eagle River,US",
            "code": "EGV"
          }
        },
        {
          "@attributes": {
            "city": "Earlton,CA",
            "code": "YXR"
          }
        },
        {
          "@attributes": {
            "city": "East Hampton,US",
            "code": "HTO"
          }
        },
        {
          "@attributes": {
            "city": "East Hartford,US",
            "code": "EHT"
          }
        },
        {
          "@attributes": {
            "city": "East London,ZA",
            "code": "ELS"
          }
        },
        {
          "@attributes": {
            "city": "East Midlands,GB",
            "code": "EMA"
          }
        },
        {
          "@attributes": {
            "city": "East Sound,US",
            "code": "ESD"
          }
        },
        {
          "@attributes": {
            "city": "East Stroudsburg,US",
            "code": "ESP"
          }
        },
        {
          "@attributes": {
            "city": "Easter Island,CL",
            "code": "IPC"
          }
        },
        {
          "@attributes": {
            "city": "Eastland,US",
            "code": "ETN"
          }
        },
        {
          "@attributes": {
            "city": "Easton,US",
            "code": "ESN"
          }
        },
        {
          "@attributes": {
            "city": "Eau Claire,US",
            "code": "EAU"
          }
        },
        {
          "@attributes": {
            "city": "Ebon,MH",
            "code": "EBO"
          }
        },
        {
          "@attributes": {
            "city": "Echuca,AU",
            "code": "ECH"
          }
        },
        {
          "@attributes": {
            "city": "Eday,GB",
            "code": "EOI"
          }
        },
        {
          "@attributes": {
            "city": "Eden,AU",
            "code": "QDN"
          }
        },
        {
          "@attributes": {
            "city": "Edenton,US",
            "code": "EDE"
          }
        },
        {
          "@attributes": {
            "city": "Edgewood,US",
            "code": "EDG"
          }
        },
        {
          "@attributes": {
            "city": "Edinburgh,GB",
            "code": "EDI"
          }
        },
        {
          "@attributes": {
            "city": "Edmonton,CA",
            "code": "YEA"
          }
        },
        {
          "@attributes": {
            "city": "Edna Bay,US",
            "code": "EDA"
          }
        },
        {
          "@attributes": {
            "city": "Edremit,TR",
            "code": "EDO"
          }
        },
        {
          "@attributes": {
            "city": "Edson,CA",
            "code": "YET"
          }
        },
        {
          "@attributes": {
            "city": "Edward River,AU",
            "code": "EDR"
          }
        },
        {
          "@attributes": {
            "city": "Edwards,US",
            "code": "EDW"
          }
        },
        {
          "@attributes": {
            "city": "Eek cities,US",
            "code": "EEK"
          }
        },
        {
          "@attributes": {
            "city": "Efogi,PG",
            "code": "EFG"
          }
        },
        {
          "@attributes": {
            "city": "Egegik,US",
            "code": "EGX"
          }
        },
        {
          "@attributes": {
            "city": "Egelsbach,DE",
            "code": "QEF"
          }
        },
        {
          "@attributes": {
            "city": "Egilsstadir,IS",
            "code": "EGS"
          }
        },
        {
          "@attributes": {
            "city": "Eindhoven,NL",
            "code": "EIN"
          }
        },
        {
          "@attributes": {
            "city": "Einsiedeln,CH",
            "code": "ZDZ"
          }
        },
        {
          "@attributes": {
            "city": "Eirunepe,BR",
            "code": "ERN"
          }
        },
        {
          "@attributes": {
            "city": "Eisenach,DE",
            "code": "EIB"
          }
        },
        {
          "@attributes": {
            "city": "Ekaterinburg,RU",
            "code": "SVX"
          }
        },
        {
          "@attributes": {
            "city": "Ekuk,US",
            "code": "KKU"
          }
        },
        {
          "@attributes": {
            "city": "Ekwok,US",
            "code": "KEK"
          }
        },
        {
          "@attributes": {
            "city": "El Aaiun,MA",
            "code": "EUN"
          }
        },
        {
          "@attributes": {
            "city": "El Arish,EG",
            "code": "AAC"
          }
        },
        {
          "@attributes": {
            "city": "El Bagre,CO",
            "code": "EBG"
          }
        },
        {
          "@attributes": {
            "city": "El Bolson,AR",
            "code": "EHL"
          }
        },
        {
          "@attributes": {
            "city": "El Cajon,US",
            "code": "CJN"
          }
        },
        {
          "@attributes": {
            "city": "El Calafate,AR",
            "code": "FTE"
          }
        },
        {
          "@attributes": {
            "city": "El Centro,US",
            "code": "IPL"
          }
        },
        {
          "@attributes": {
            "city": "El Dorado,US",
            "code": "ELD"
          }
        },
        {
          "@attributes": {
            "city": "El Fasher,SD",
            "code": "ELF"
          }
        },
        {
          "@attributes": {
            "city": "El Golea,DZ",
            "code": "ELG"
          }
        },
        {
          "@attributes": {
            "city": "El Maiten,AR",
            "code": "EMX"
          }
        },
        {
          "@attributes": {
            "city": "El Monte,US",
            "code": "EMT"
          }
        },
        {
          "@attributes": {
            "city": "El Nido,PH",
            "code": "ENI"
          }
        },
        {
          "@attributes": {
            "city": "El Obeid,SD",
            "code": "EBD"
          }
        },
        {
          "@attributes": {
            "city": "El Oued,DZ",
            "code": "ELU"
          }
        },
        {
          "@attributes": {
            "city": "El Paso,US",
            "code": "ELP"
          }
        },
        {
          "@attributes": {
            "city": "El Portillo Samana,DO",
            "code": "EPS"
          }
        },
        {
          "@attributes": {
            "city": "El Salvador,CL",
            "code": "ESR"
          }
        },
        {
          "@attributes": {
            "city": "El Tor,EG",
            "code": "ELT"
          }
        },
        {
          "@attributes": {
            "city": "El Vigia,VE",
            "code": "VIG"
          }
        },
        {
          "@attributes": {
            "city": "El Yopal,CO",
            "code": "EYP"
          }
        },
        {
          "@attributes": {
            "city": "Elat,IL",
            "code": "ETH"
          }
        },
        {
          "@attributes": {
            "city": "Elazig,TR",
            "code": "EZS"
          }
        },
        {
          "@attributes": {
            "city": "Elba Island,IT",
            "code": "EBA"
          }
        },
        {
          "@attributes": {
            "city": "Elblag,PL",
            "code": "ZBG"
          }
        },
        {
          "@attributes": {
            "city": "Elcho Island,AU",
            "code": "ELC"
          }
        },
        {
          "@attributes": {
            "city": "Eldoret,KE",
            "code": "EDL"
          }
        },
        {
          "@attributes": {
            "city": "Eldred Rock,US",
            "code": "ERO"
          }
        },
        {
          "@attributes": {
            "city": "Elfin Cove,US",
            "code": "ELV"
          }
        },
        {
          "@attributes": {
            "city": "Elim,US",
            "code": "ELI"
          }
        },
        {
          "@attributes": {
            "city": "Elista,RU",
            "code": "ESL"
          }
        },
        {
          "@attributes": {
            "city": "Elizabeth cities,US",
            "code": "ECG"
          }
        },
        {
          "@attributes": {
            "city": "Elizabethtown,US",
            "code": "EKX"
          }
        },
        {
          "@attributes": {
            "city": "Elk cities,US",
            "code": "ELK"
          }
        },
        {
          "@attributes": {
            "city": "Elkhart,US",
            "code": "EKI"
          }
        },
        {
          "@attributes": {
            "city": "Elkins,US",
            "code": "EKN"
          }
        },
        {
          "@attributes": {
            "city": "Elko,US",
            "code": "EKO"
          }
        },
        {
          "@attributes": {
            "city": "Ellamar,US",
            "code": "ELW"
          }
        },
        {
          "@attributes": {
            "city": "Elliot Lake,CA",
            "code": "YEL"
          }
        },
        {
          "@attributes": {
            "city": "Ellisras,ZA",
            "code": "ELL"
          }
        },
        {
          "@attributes": {
            "city": "Elmira,US",
            "code": "ELM"
          }
        },
        {
          "@attributes": {
            "city": "Elverum,NO",
            "code": "XUC"
          }
        },
        {
          "@attributes": {
            "city": "Ely Mn,US",
            "code": "LYU"
          }
        },
        {
          "@attributes": {
            "city": "Ely NV,US",
            "code": "ELY"
          }
        },
        {
          "@attributes": {
            "city": "Emae,VU",
            "code": "EAE"
          }
        },
        {
          "@attributes": {
            "city": "Embessa,PG",
            "code": "EMS"
          }
        },
        {
          "@attributes": {
            "city": "Embrach,CH",
            "code": "QEQ"
          }
        },
        {
          "@attributes": {
            "city": "Emden,DE",
            "code": "EME"
          }
        },
        {
          "@attributes": {
            "city": "Emerald,AU",
            "code": "EMD"
          }
        },
        {
          "@attributes": {
            "city": "Emeryville,US",
            "code": "JEM"
          }
        },
        {
          "@attributes": {
            "city": "Emirau,PG",
            "code": "EMI"
          }
        },
        {
          "@attributes": {
            "city": "Emmerich,DE",
            "code": "QEX"
          }
        },
        {
          "@attributes": {
            "city": "Emmonak,US",
            "code": "EMK"
          }
        },
        {
          "@attributes": {
            "city": "Emo PG,PG",
            "code": "EMO"
          }
        },
        {
          "@attributes": {
            "city": "Emporia,US",
            "code": "EMP"
          }
        },
        {
          "@attributes": {
            "city": "Enarotali,ID",
            "code": "EWI"
          }
        },
        {
          "@attributes": {
            "city": "Encarnacion,PY",
            "code": "ENO"
          }
        },
        {
          "@attributes": {
            "city": "Ende,ID",
            "code": "ENE"
          }
        },
        {
          "@attributes": {
            "city": "Enfidha,TN",
            "code": "NBE"
          }
        },
        {
          "@attributes": {
            "city": "Engelberg,CH",
            "code": "ZHB"
          }
        },
        {
          "@attributes": {
            "city": "English Bay,US",
            "code": "KEB"
          }
        },
        {
          "@attributes": {
            "city": "Enid,US",
            "code": "WDG"
          }
        },
        {
          "@attributes": {
            "city": "Enkoping,SE",
            "code": "XWQ"
          }
        },
        {
          "@attributes": {
            "city": "Enniskillen,IE",
            "code": "ENK"
          }
        },
        {
          "@attributes": {
            "city": "Enonekio,FI",
            "code": "ENF"
          }
        },
        {
          "@attributes": {
            "city": "Enschede,NL",
            "code": "ENS"
          }
        },
        {
          "@attributes": {
            "city": "Ensenada,MX",
            "code": "ESE"
          }
        },
        {
          "@attributes": {
            "city": "Enshi,CN",
            "code": "ENH"
          }
        },
        {
          "@attributes": {
            "city": "Entebbe,UG",
            "code": "EBB"
          }
        },
        {
          "@attributes": {
            "city": "Enterprise,US",
            "code": "ETS"
          }
        },
        {
          "@attributes": {
            "city": "Enugu,NG",
            "code": "ENU"
          }
        },
        {
          "@attributes": {
            "city": "Epernay,FR",
            "code": "XEP"
          }
        },
        {
          "@attributes": {
            "city": "Ephesus,TR",
            "code": "ADB"
          }
        },
        {
          "@attributes": {
            "city": "Epinal,FR",
            "code": "EPL"
          }
        },
        {
          "@attributes": {
            "city": "Eqalugaarsuit,GL",
            "code": "QFG"
          }
        },
        {
          "@attributes": {
            "city": "Erbil,IQ",
            "code": "EBL"
          }
        },
        {
          "@attributes": {
            "city": "Ercan,CY",
            "code": "ECN"
          }
        },
        {
          "@attributes": {
            "city": "Erdenet,MN",
            "code": "ERT"
          }
        },
        {
          "@attributes": {
            "city": "Erechim,BR",
            "code": "ERM"
          }
        },
        {
          "@attributes": {
            "city": "Erenhot,CN",
            "code": "ERL"
          }
        },
        {
          "@attributes": {
            "city": "Erfurt,DE",
            "code": "ERF"
          }
        },
        {
          "@attributes": {
            "city": "Erie,US",
            "code": "ERI"
          }
        },
        {
          "@attributes": {
            "city": "Erlangen,DE",
            "code": "ZCZ"
          }
        },
        {
          "@attributes": {
            "city": "Errachidia,MA",
            "code": "ERH"
          }
        },
        {
          "@attributes": {
            "city": "Erume,PG",
            "code": "ERU"
          }
        },
        {
          "@attributes": {
            "city": "Erzincan,TR",
            "code": "ERC"
          }
        },
        {
          "@attributes": {
            "city": "Erzurum,TR",
            "code": "ERZ"
          }
        },
        {
          "@attributes": {
            "city": "Esa Ala,PG",
            "code": "ESA"
          }
        },
        {
          "@attributes": {
            "city": "Esbjerg,DK",
            "code": "EBJ"
          }
        },
        {
          "@attributes": {
            "city": "Escanaba,US",
            "code": "ESC"
          }
        },
        {
          "@attributes": {
            "city": "Eschweiler,DE",
            "code": "ZEA"
          }
        },
        {
          "@attributes": {
            "city": "Eskilstuna,SE",
            "code": "EKT"
          }
        },
        {
          "@attributes": {
            "city": "Eskisehir,TR",
            "code": "ESK"
          }
        },
        {
          "@attributes": {
            "city": "Eskisehir cities,TR",
            "code": "AOE"
          }
        },
        {
          "@attributes": {
            "city": "Esmeraldas,EC",
            "code": "ESM"
          }
        },
        {
          "@attributes": {
            "city": "Esperance,AU",
            "code": "EPR"
          }
        },
        {
          "@attributes": {
            "city": "Espiritu Santo,VU",
            "code": "SON"
          }
        },
        {
          "@attributes": {
            "city": "Esquel,AR",
            "code": "EQS"
          }
        },
        {
          "@attributes": {
            "city": "Esquimalt,CA",
            "code": "YPF"
          }
        },
        {
          "@attributes": {
            "city": "Essaouira,MA",
            "code": "ESU"
          }
        },
        {
          "@attributes": {
            "city": "Essen,DE",
            "code": "ESS"
          }
        },
        {
          "@attributes": {
            "city": "Esslingen,DE",
            "code": "ZEB"
          }
        },
        {
          "@attributes": {
            "city": "Estevan,CA",
            "code": "YEN"
          }
        },
        {
          "@attributes": {
            "city": "Etadunna,AU",
            "code": "ETD"
          }
        },
        {
          "@attributes": {
            "city": "Eua To,TO",
            "code": "EUA"
          }
        },
        {
          "@attributes": {
            "city": "Eufaula,US",
            "code": "EUF"
          }
        },
        {
          "@attributes": {
            "city": "Eugene,US",
            "code": "EUG"
          }
        },
        {
          "@attributes": {
            "city": "Eureka,US",
            "code": "EKA"
          }
        },
        {
          "@attributes": {
            "city": "Euskirchen,DE",
            "code": "ZED"
          }
        },
        {
          "@attributes": {
            "city": "Evans Head,AU",
            "code": "EVH"
          }
        },
        {
          "@attributes": {
            "city": "Evanston,US",
            "code": "EVW"
          }
        },
        {
          "@attributes": {
            "city": "Evansville,US",
            "code": "EVV"
          }
        },
        {
          "@attributes": {
            "city": "Eveleth,US",
            "code": "EVM"
          }
        },
        {
          "@attributes": {
            "city": "Evensk,RU",
            "code": "SWV"
          }
        },
        {
          "@attributes": {
            "city": "Everett,US",
            "code": "PAE"
          }
        },
        {
          "@attributes": {
            "city": "Evian Les Bains,FR",
            "code": "XEB"
          }
        },
        {
          "@attributes": {
            "city": "Evreux,FR",
            "code": "EVX"
          }
        },
        {
          "@attributes": {
            "city": "Evry,FR",
            "code": "JEV"
          }
        },
        {
          "@attributes": {
            "city": "Excursion Inlet,US",
            "code": "EXI"
          }
        },
        {
          "@attributes": {
            "city": "Exeter,GB",
            "code": "EXT"
          }
        },
        {
          "@attributes": {
            "city": "Exmouth Gulf,AU",
            "code": "EXM"
          }
        },
        {
          "@attributes": {
            "city": "FUKUI,JP",
            "code": "FKJ"
          }
        },
        {
          "@attributes": {
            "city": "Faaite,PF",
            "code": "FAC"
          }
        },
        {
          "@attributes": {
            "city": "Faeroe Islands,DK",
            "code": "FAE"
          }
        },
        {
          "@attributes": {
            "city": "Fagernes,NO",
            "code": "VDB"
          }
        },
        {
          "@attributes": {
            "city": "Fair Isle,GB",
            "code": "FIE"
          }
        },
        {
          "@attributes": {
            "city": "Fairbanks,US",
            "code": "FAI"
          }
        },
        {
          "@attributes": {
            "city": "Fairfield,US",
            "code": "SUU"
          }
        },
        {
          "@attributes": {
            "city": "Fairmont,US",
            "code": "FRM"
          }
        },
        {
          "@attributes": {
            "city": "Fairmont Springs,CA",
            "code": "YCZ"
          }
        },
        {
          "@attributes": {
            "city": "Faisalabad,PK",
            "code": "LYP"
          }
        },
        {
          "@attributes": {
            "city": "Faizabad,AF",
            "code": "FBD"
          }
        },
        {
          "@attributes": {
            "city": "Fajardo,US",
            "code": "FAJ"
          }
        },
        {
          "@attributes": {
            "city": "Fak Fak,ID",
            "code": "FKQ"
          }
        },
        {
          "@attributes": {
            "city": "Fakarava,PF",
            "code": "FAV"
          }
        },
        {
          "@attributes": {
            "city": "Falkenberg,SE",
            "code": "XYM"
          }
        },
        {
          "@attributes": {
            "city": "Falkoping,SE",
            "code": "XYF"
          }
        },
        {
          "@attributes": {
            "city": "Fallon,US",
            "code": "NFL"
          }
        },
        {
          "@attributes": {
            "city": "Falls Creek,AU",
            "code": "FLC"
          }
        },
        {
          "@attributes": {
            "city": "Falmouth,US",
            "code": "FMH"
          }
        },
        {
          "@attributes": {
            "city": "False Island,US",
            "code": "FAK"
          }
        },
        {
          "@attributes": {
            "city": "False Pass,US",
            "code": "KFP"
          }
        },
        {
          "@attributes": {
            "city": "Falun,SE",
            "code": "XWF"
          }
        },
        {
          "@attributes": {
            "city": "Fane,PG",
            "code": "FNE"
          }
        },
        {
          "@attributes": {
            "city": "Fangatau,PF",
            "code": "FGU"
          }
        },
        {
          "@attributes": {
            "city": "Farafangana,MG",
            "code": "RVA"
          }
        },
        {
          "@attributes": {
            "city": "Fargo,US",
            "code": "FAR"
          }
        },
        {
          "@attributes": {
            "city": "Faridabad,IN",
            "code": "QNF"
          }
        },
        {
          "@attributes": {
            "city": "Farmingdale,US",
            "code": "FRG"
          }
        },
        {
          "@attributes": {
            "city": "Farmington,US",
            "code": "FMN"
          }
        },
        {
          "@attributes": {
            "city": "Farnborough Hampshire,GB",
            "code": "FAB"
          }
        },
        {
          "@attributes": {
            "city": "Faro,PT",
            "code": "FAO"
          }
        },
        {
          "@attributes": {
            "city": "Farsund,NO",
            "code": "FAN"
          }
        },
        {
          "@attributes": {
            "city": "Fauske,NO",
            "code": "ZXO"
          }
        },
        {
          "@attributes": {
            "city": "Fayetteville,US",
            "code": "FAY"
          }
        },
        {
          "@attributes": {
            "city": "Fayetteville,US",
            "code": "FYV"
          }
        },
        {
          "@attributes": {
            "city": "Feira De Santana,BR",
            "code": "FEC"
          }
        },
        {
          "@attributes": {
            "city": "Fera Island,SB",
            "code": "FRE"
          }
        },
        {
          "@attributes": {
            "city": "Fergana,UZ",
            "code": "FEG"
          }
        },
        {
          "@attributes": {
            "city": "Fergus Falls,US",
            "code": "FFM"
          }
        },
        {
          "@attributes": {
            "city": "Fernando De Noronha,BR",
            "code": "FEN"
          }
        },
        {
          "@attributes": {
            "city": "Fez Ma,MA",
            "code": "FEZ"
          }
        },
        {
          "@attributes": {
            "city": "Fianarantsoa,MG",
            "code": "WFI"
          }
        },
        {
          "@attributes": {
            "city": "Ficksburg,ZA",
            "code": "FCB"
          }
        },
        {
          "@attributes": {
            "city": "Figari,FR",
            "code": "FSC"
          }
        },
        {
          "@attributes": {
            "city": "Filadelfia,PY",
            "code": "FLM"
          }
        },
        {
          "@attributes": {
            "city": "Filton,GB",
            "code": "FZO"
          }
        },
        {
          "@attributes": {
            "city": "Findlay,US",
            "code": "FDY"
          }
        },
        {
          "@attributes": {
            "city": "Finschhafen,PG",
            "code": "FIN"
          }
        },
        {
          "@attributes": {
            "city": "Finse,NO",
            "code": "XKO"
          }
        },
        {
          "@attributes": {
            "city": "Fitzroy Crossing,AU",
            "code": "FIZ"
          }
        },
        {
          "@attributes": {
            "city": "Flagstaff,US",
            "code": "FLG"
          }
        },
        {
          "@attributes": {
            "city": "Flam,NO",
            "code": "XGH"
          }
        },
        {
          "@attributes": {
            "city": "Flamingo,CR",
            "code": "FMG"
          }
        },
        {
          "@attributes": {
            "city": "Flat,US",
            "code": "FLT"
          }
        },
        {
          "@attributes": {
            "city": "Flateyri,IS",
            "code": "FLI"
          }
        },
        {
          "@attributes": {
            "city": "Flen,SE",
            "code": "XYI"
          }
        },
        {
          "@attributes": {
            "city": "Flensburg,DE",
            "code": "FLF"
          }
        },
        {
          "@attributes": {
            "city": "Flin Flon,CA",
            "code": "YFO"
          }
        },
        {
          "@attributes": {
            "city": "Flinder Island,AU",
            "code": "FLS"
          }
        },
        {
          "@attributes": {
            "city": "Flint,US",
            "code": "FNT"
          }
        },
        {
          "@attributes": {
            "city": "Flippin,US",
            "code": "FLP"
          }
        },
        {
          "@attributes": {
            "city": "Florence,US",
            "code": "FLO"
          }
        },
        {
          "@attributes": {
            "city": "Florence,IT",
            "code": "FLR"
          }
        },
        {
          "@attributes": {
            "city": "Florencia,CO",
            "code": "FLA"
          }
        },
        {
          "@attributes": {
            "city": "Flores,GT",
            "code": "FRS"
          }
        },
        {
          "@attributes": {
            "city": "Floriano,BR",
            "code": "FLB"
          }
        },
        {
          "@attributes": {
            "city": "Florianopolis,BR",
            "code": "FLN"
          }
        },
        {
          "@attributes": {
            "city": "Floro,NO",
            "code": "FRO"
          }
        },
        {
          "@attributes": {
            "city": "Fluelen,CH",
            "code": "ZHD"
          }
        },
        {
          "@attributes": {
            "city": "Foggia,IT",
            "code": "FOG"
          }
        },
        {
          "@attributes": {
            "city": "Foix,FR",
            "code": "XFX"
          }
        },
        {
          "@attributes": {
            "city": "Foley,US",
            "code": "NHX"
          }
        },
        {
          "@attributes": {
            "city": "Font Romeu,FR",
            "code": "QZF"
          }
        },
        {
          "@attributes": {
            "city": "Fontainebleau,FR",
            "code": "XFB"
          }
        },
        {
          "@attributes": {
            "city": "Forbes,AU",
            "code": "FRB"
          }
        },
        {
          "@attributes": {
            "city": "Forde,NO",
            "code": "FDE"
          }
        },
        {
          "@attributes": {
            "city": "Forli,IT",
            "code": "FRL"
          }
        },
        {
          "@attributes": {
            "city": "Formosa,AR",
            "code": "FMA"
          }
        },
        {
          "@attributes": {
            "city": "Forrest cities,US",
            "code": "FCY"
          }
        },
        {
          "@attributes": {
            "city": "Forssa,FI",
            "code": "QVE"
          }
        },
        {
          "@attributes": {
            "city": "Forster,AU",
            "code": "FOT"
          }
        },
        {
          "@attributes": {
            "city": "Fort Bragg,US",
            "code": "FOB"
          }
        },
        {
          "@attributes": {
            "city": "Fort Bridger,US",
            "code": "FBR"
          }
        },
        {
          "@attributes": {
            "city": "Fort Chaffee,US",
            "code": "CCA"
          }
        },
        {
          "@attributes": {
            "city": "Fort Dauphin,MG",
            "code": "FTU"
          }
        },
        {
          "@attributes": {
            "city": "Fort Dodge,US",
            "code": "FOD"
          }
        },
        {
          "@attributes": {
            "city": "Fort Frances,CA",
            "code": "YAG"
          }
        },
        {
          "@attributes": {
            "city": "Fort Good Hope,CA",
            "code": "YGH"
          }
        },
        {
          "@attributes": {
            "city": "Fort Hope,CA",
            "code": "YFH"
          }
        },
        {
          "@attributes": {
            "city": "Fort Irwin,US",
            "code": "BYS"
          }
        },
        {
          "@attributes": {
            "city": "Fort Madison,US",
            "code": "FMS"
          }
        },
        {
          "@attributes": {
            "city": "Fort Meade,US",
            "code": "FME"
          }
        },
        {
          "@attributes": {
            "city": "Fort Myers,US",
            "code": "FMY"
          }
        },
        {
          "@attributes": {
            "city": "Fort Nelson,CA",
            "code": "YYE"
          }
        },
        {
          "@attributes": {
            "city": "Fort Pierce,US",
            "code": "FPR"
          }
        },
        {
          "@attributes": {
            "city": "Fort Polk,US",
            "code": "POE"
          }
        },
        {
          "@attributes": {
            "city": "Fort Scott,US",
            "code": "FSK"
          }
        },
        {
          "@attributes": {
            "city": "Fort Severn,CA",
            "code": "YER"
          }
        },
        {
          "@attributes": {
            "city": "Fort Simpson,CA",
            "code": "YFS"
          }
        },
        {
          "@attributes": {
            "city": "Fort Stockton,US",
            "code": "FST"
          }
        },
        {
          "@attributes": {
            "city": "Fort William,GB",
            "code": "FWM"
          }
        },
        {
          "@attributes": {
            "city": "Fortaleza,BR",
            "code": "FOR"
          }
        },
        {
          "@attributes": {
            "city": "Fortuna,CR",
            "code": "FON"
          }
        },
        {
          "@attributes": {
            "city": "Foshan,CN",
            "code": "ZCP"
          }
        },
        {
          "@attributes": {
            "city": "Fougamou,GA",
            "code": "FOU"
          }
        },
        {
          "@attributes": {
            "city": "Fox Glacier,NZ",
            "code": "FGL"
          }
        },
        {
          "@attributes": {
            "city": "Fox Harbour,CA",
            "code": "YFX"
          }
        },
        {
          "@attributes": {
            "city": "Franca,BR",
            "code": "FRC"
          }
        },
        {
          "@attributes": {
            "city": "Franceville Mvengue,GA",
            "code": "MVB"
          }
        },
        {
          "@attributes": {
            "city": "Francisco Beltrao,BR",
            "code": "FBE"
          }
        },
        {
          "@attributes": {
            "city": "Francistown,BW",
            "code": "FRW"
          }
        },
        {
          "@attributes": {
            "city": "Frankfort,US",
            "code": "FFT"
          }
        },
        {
          "@attributes": {
            "city": "Frankfurt,DE",
            "code": "FRA"
          }
        },
        {
          "@attributes": {
            "city": "Frankfurt An Der Oder,DE",
            "code": "ZFR"
          }
        },
        {
          "@attributes": {
            "city": "Franklin,US",
            "code": "FKN"
          }
        },
        {
          "@attributes": {
            "city": "Franklin,US",
            "code": "FKL"
          }
        },
        {
          "@attributes": {
            "city": "Franz Josef,NZ",
            "code": "WHO"
          }
        },
        {
          "@attributes": {
            "city": "Frauenfeld,CH",
            "code": "ZHE"
          }
        },
        {
          "@attributes": {
            "city": "Fredericia,DK",
            "code": "ZBJ"
          }
        },
        {
          "@attributes": {
            "city": "Frederick,US",
            "code": "FDK"
          }
        },
        {
          "@attributes": {
            "city": "Frederickshavn,DK",
            "code": "QFH"
          }
        },
        {
          "@attributes": {
            "city": "Fredericton,CA",
            "code": "YFC"
          }
        },
        {
          "@attributes": {
            "city": "Fredericton Junction,CA",
            "code": "XFC"
          }
        },
        {
          "@attributes": {
            "city": "Fredrikstad,NO",
            "code": "XKF"
          }
        },
        {
          "@attributes": {
            "city": "Freeport,BS",
            "code": "FPO"
          }
        },
        {
          "@attributes": {
            "city": "Freetown,SL",
            "code": "FNA"
          }
        },
        {
          "@attributes": {
            "city": "Fregate Island,SC",
            "code": "FRK"
          }
        },
        {
          "@attributes": {
            "city": "Freiburg,DE",
            "code": "QFB"
          }
        },
        {
          "@attributes": {
            "city": "Freilassing,DE",
            "code": "QFL"
          }
        },
        {
          "@attributes": {
            "city": "Frejus,FR",
            "code": "FRJ"
          }
        },
        {
          "@attributes": {
            "city": "Fremantle,AU",
            "code": "JFM"
          }
        },
        {
          "@attributes": {
            "city": "French Valley,US",
            "code": "RBK"
          }
        },
        {
          "@attributes": {
            "city": "Frenchville,US",
            "code": "WFK"
          }
        },
        {
          "@attributes": {
            "city": "Fresno,US",
            "code": "FAT"
          }
        },
        {
          "@attributes": {
            "city": "Fribourg,CH",
            "code": "ZHF"
          }
        },
        {
          "@attributes": {
            "city": "Friday Harbor,US",
            "code": "FRD"
          }
        },
        {
          "@attributes": {
            "city": "Friedrichshafen,DE",
            "code": "FDH"
          }
        },
        {
          "@attributes": {
            "city": "Fritzlar,DE",
            "code": "FRZ"
          }
        },
        {
          "@attributes": {
            "city": "Front Royal,US",
            "code": "FRR"
          }
        },
        {
          "@attributes": {
            "city": "Frosinone,IT",
            "code": "QFR"
          }
        },
        {
          "@attributes": {
            "city": "Frutillar,CL",
            "code": "FRT"
          }
        },
        {
          "@attributes": {
            "city": "Fryeburg,US",
            "code": "FRY"
          }
        },
        {
          "@attributes": {
            "city": "Ft Benning,US",
            "code": "QFE"
          }
        },
        {
          "@attributes": {
            "city": "Ft Collins,US",
            "code": "FNL"
          }
        },
        {
          "@attributes": {
            "city": "Ft De France,MQ",
            "code": "FDF"
          }
        },
        {
          "@attributes": {
            "city": "Ft Huachuca,US",
            "code": "FHU"
          }
        },
        {
          "@attributes": {
            "city": "Ft Lauderdale,US",
            "code": "FLL"
          }
        },
        {
          "@attributes": {
            "city": "Ft Leonard Wood,US",
            "code": "TBN"
          }
        },
        {
          "@attributes": {
            "city": "Ft McMurray,CA",
            "code": "YMM"
          }
        },
        {
          "@attributes": {
            "city": "Ft Smith,CA",
            "code": "YSM"
          }
        },
        {
          "@attributes": {
            "city": "Ft Smith,US",
            "code": "FSM"
          }
        },
        {
          "@attributes": {
            "city": "Ft St John,CA",
            "code": "YXJ"
          }
        },
        {
          "@attributes": {
            "city": "Ft Wayne,US",
            "code": "FWA"
          }
        },
        {
          "@attributes": {
            "city": "Ft Worth,US",
            "code": "FTW"
          }
        },
        {
          "@attributes": {
            "city": "Ft Yukon,US",
            "code": "FYU"
          }
        },
        {
          "@attributes": {
            "city": "Fuengirola,ES",
            "code": "FGR"
          }
        },
        {
          "@attributes": {
            "city": "Fuerte Olimpo,PY",
            "code": "OLK"
          }
        },
        {
          "@attributes": {
            "city": "Fuerth,DE",
            "code": "ZEF"
          }
        },
        {
          "@attributes": {
            "city": "Fukue,JP",
            "code": "FUJ"
          }
        },
        {
          "@attributes": {
            "city": "Fukuoka,JP",
            "code": "FUK"
          }
        },
        {
          "@attributes": {
            "city": "Fukushima,JP",
            "code": "FKS"
          }
        },
        {
          "@attributes": {
            "city": "Fukuyama,JP",
            "code": "QFY"
          }
        },
        {
          "@attributes": {
            "city": "Fulda,DE",
            "code": "ZEE"
          }
        },
        {
          "@attributes": {
            "city": "Fulleborn,PG",
            "code": "FUB"
          }
        },
        {
          "@attributes": {
            "city": "Fullerton,US",
            "code": "FUL"
          }
        },
        {
          "@attributes": {
            "city": "Funafuti,TV",
            "code": "FUN"
          }
        },
        {
          "@attributes": {
            "city": "Funchal,PT",
            "code": "FNC"
          }
        },
        {
          "@attributes": {
            "city": "Funter Bay,US",
            "code": "FNR"
          }
        },
        {
          "@attributes": {
            "city": "Fuoshan,CN",
            "code": "FUO"
          }
        },
        {
          "@attributes": {
            "city": "Furstenfeldbruck,DE",
            "code": "FEL"
          }
        },
        {
          "@attributes": {
            "city": "Futuna,PF",
            "code": "FUT"
          }
        },
        {
          "@attributes": {
            "city": "Fuyang,CN",
            "code": "FUG"
          }
        },
        {
          "@attributes": {
            "city": "Fuyun,CN",
            "code": "FYN"
          }
        },
        {
          "@attributes": {
            "city": "Fuzhou,CN",
            "code": "FOC"
          }
        },
        {
          "@attributes": {
            "city": "GOLD BEACH,US",
            "code": "GOL"
          }
        },
        {
          "@attributes": {
            "city": "GRINDELWALD,CH",
            "code": "ZHJ"
          }
        },
        {
          "@attributes": {
            "city": "GROZNY,RU",
            "code": "GRV"
          }
        },
        {
          "@attributes": {
            "city": "Gabala,AZ",
            "code": "GBB"
          }
        },
        {
          "@attributes": {
            "city": "Gabes,TN",
            "code": "GAE"
          }
        },
        {
          "@attributes": {
            "city": "Gaborone,BW",
            "code": "GBE"
          }
        },
        {
          "@attributes": {
            "city": "Gadsden,US",
            "code": "GAD"
          }
        },
        {
          "@attributes": {
            "city": "Gainesville,US",
            "code": "GLE"
          }
        },
        {
          "@attributes": {
            "city": "Gainesville,US",
            "code": "GNV"
          }
        },
        {
          "@attributes": {
            "city": "Gainesville,US",
            "code": "GVL"
          }
        },
        {
          "@attributes": {
            "city": "Gaithersburg,US",
            "code": "GAI"
          }
        },
        {
          "@attributes": {
            "city": "Galapagos Is,EC",
            "code": "GPS"
          }
        },
        {
          "@attributes": {
            "city": "Galela,ID",
            "code": "GLX"
          }
        },
        {
          "@attributes": {
            "city": "Galena,US",
            "code": "GAL"
          }
        },
        {
          "@attributes": {
            "city": "Galesburg,US",
            "code": "GBG"
          }
        },
        {
          "@attributes": {
            "city": "Galiano Island,CA",
            "code": "YMF"
          }
        },
        {
          "@attributes": {
            "city": "Galion,US",
            "code": "GQQ"
          }
        },
        {
          "@attributes": {
            "city": "Gallivare,SE",
            "code": "GEV"
          }
        },
        {
          "@attributes": {
            "city": "Gallup,US",
            "code": "GUP"
          }
        },
        {
          "@attributes": {
            "city": "Galveston,US",
            "code": "GLS"
          }
        },
        {
          "@attributes": {
            "city": "Galway,IE",
            "code": "GWY"
          }
        },
        {
          "@attributes": {
            "city": "Gamarra,CO",
            "code": "GRA"
          }
        },
        {
          "@attributes": {
            "city": "Gamba,GA",
            "code": "GAX"
          }
        },
        {
          "@attributes": {
            "city": "Gambela,ET",
            "code": "GMB"
          }
        },
        {
          "@attributes": {
            "city": "Gambell,US",
            "code": "GAM"
          }
        },
        {
          "@attributes": {
            "city": "Gambier Island,PF",
            "code": "GMR"
          }
        },
        {
          "@attributes": {
            "city": "Gan Island,MV",
            "code": "GAN"
          }
        },
        {
          "@attributes": {
            "city": "Gananoque,CA",
            "code": "XGW"
          }
        },
        {
          "@attributes": {
            "city": "Gander,CA",
            "code": "YQX"
          }
        },
        {
          "@attributes": {
            "city": "Ganes Creek,US",
            "code": "GEK"
          }
        },
        {
          "@attributes": {
            "city": "Ganzhou,CN",
            "code": "KOW"
          }
        },
        {
          "@attributes": {
            "city": "Gap France,FR",
            "code": "GAT"
          }
        },
        {
          "@attributes": {
            "city": "Garaina,PG",
            "code": "GAR"
          }
        },
        {
          "@attributes": {
            "city": "Garbsen,DE",
            "code": "ZEH"
          }
        },
        {
          "@attributes": {
            "city": "Garden cities,US",
            "code": "JHC"
          }
        },
        {
          "@attributes": {
            "city": "Garden cities,US",
            "code": "GCK"
          }
        },
        {
          "@attributes": {
            "city": "Garden Hill Island Lake,CA",
            "code": "YIV"
          }
        },
        {
          "@attributes": {
            "city": "Garden Point,AU",
            "code": "GPN"
          }
        },
        {
          "@attributes": {
            "city": "Garissa,KE",
            "code": "GAS"
          }
        },
        {
          "@attributes": {
            "city": "Garmisch Partenkirchen,DE",
            "code": "ZEI"
          }
        },
        {
          "@attributes": {
            "city": "Garoe,SO",
            "code": "GGR"
          }
        },
        {
          "@attributes": {
            "city": "Garoua,CM",
            "code": "GOU"
          }
        },
        {
          "@attributes": {
            "city": "Gary,US",
            "code": "GYY"
          }
        },
        {
          "@attributes": {
            "city": "Gasmata,PG",
            "code": "GMI"
          }
        },
        {
          "@attributes": {
            "city": "Gaspe,CA",
            "code": "YGP"
          }
        },
        {
          "@attributes": {
            "city": "Gassim,SA",
            "code": "ELQ"
          }
        },
        {
          "@attributes": {
            "city": "Gatineau Hull,CA",
            "code": "YND"
          }
        },
        {
          "@attributes": {
            "city": "Gatlinburg,US",
            "code": "GKT"
          }
        },
        {
          "@attributes": {
            "city": "Gatokae,SB",
            "code": "GTA"
          }
        },
        {
          "@attributes": {
            "city": "Gaua Island,VU",
            "code": "ZGU"
          }
        },
        {
          "@attributes": {
            "city": "Gavle,SE",
            "code": "GVX"
          }
        },
        {
          "@attributes": {
            "city": "Gaya,IN",
            "code": "GAY"
          }
        },
        {
          "@attributes": {
            "city": "Gaylord,US",
            "code": "GLR"
          }
        },
        {
          "@attributes": {
            "city": "Gaza,PS",
            "code": "GZA"
          }
        },
        {
          "@attributes": {
            "city": "Gaziantep,TR",
            "code": "GZT"
          }
        },
        {
          "@attributes": {
            "city": "Gazipasa,TR",
            "code": "GZP"
          }
        },
        {
          "@attributes": {
            "city": "Gbangbatok,SL",
            "code": "GBK"
          }
        },
        {
          "@attributes": {
            "city": "Gdansk,PL",
            "code": "GDN"
          }
        },
        {
          "@attributes": {
            "city": "Gdynia,PL",
            "code": "QYD"
          }
        },
        {
          "@attributes": {
            "city": "Geelong,AU",
            "code": "GEX"
          }
        },
        {
          "@attributes": {
            "city": "Geilenkirchen,DE",
            "code": "GKE"
          }
        },
        {
          "@attributes": {
            "city": "Geilo,NO",
            "code": "DLD"
          }
        },
        {
          "@attributes": {
            "city": "Geladi,ET",
            "code": "GLC"
          }
        },
        {
          "@attributes": {
            "city": "Gelendzhik,RU",
            "code": "GDZ"
          }
        },
        {
          "@attributes": {
            "city": "Gelsenkirchen,DE",
            "code": "ZEJ"
          }
        },
        {
          "@attributes": {
            "city": "Gemena,CD",
            "code": "GMA"
          }
        },
        {
          "@attributes": {
            "city": "Geneina,SD",
            "code": "EGN"
          }
        },
        {
          "@attributes": {
            "city": "General Pico,AR",
            "code": "GPO"
          }
        },
        {
          "@attributes": {
            "city": "General Roca,AR",
            "code": "GNR"
          }
        },
        {
          "@attributes": {
            "city": "General Santos,PH",
            "code": "GES"
          }
        },
        {
          "@attributes": {
            "city": "Geneva,CH",
            "code": "GVA"
          }
        },
        {
          "@attributes": {
            "city": "Genoa,IT",
            "code": "GOA"
          }
        },
        {
          "@attributes": {
            "city": "Genting,MY",
            "code": "GTB"
          }
        },
        {
          "@attributes": {
            "city": "George,ZA",
            "code": "GRJ"
          }
        },
        {
          "@attributes": {
            "city": "George Town,AU",
            "code": "GEE"
          }
        },
        {
          "@attributes": {
            "city": "George Town,BS",
            "code": "GGT"
          }
        },
        {
          "@attributes": {
            "city": "Georgetown,CA",
            "code": "XHM"
          }
        },
        {
          "@attributes": {
            "city": "Georgetown,US",
            "code": "GED"
          }
        },
        {
          "@attributes": {
            "city": "Georgetown,AU",
            "code": "GTT"
          }
        },
        {
          "@attributes": {
            "city": "Gera,DE",
            "code": "ZGA"
          }
        },
        {
          "@attributes": {
            "city": "Geraldton,CA",
            "code": "YGQ"
          }
        },
        {
          "@attributes": {
            "city": "Geraldton,AU",
            "code": "GET"
          }
        },
        {
          "@attributes": {
            "city": "Gethsemanie,CA",
            "code": "ZGS"
          }
        },
        {
          "@attributes": {
            "city": "Gettysburg,US",
            "code": "GTY"
          }
        },
        {
          "@attributes": {
            "city": "Gewoia,PG",
            "code": "GEW"
          }
        },
        {
          "@attributes": {
            "city": "Ghadames,LY",
            "code": "LTD"
          }
        },
        {
          "@attributes": {
            "city": "Ghardaia,DZ",
            "code": "GHA"
          }
        },
        {
          "@attributes": {
            "city": "Ghat,LY",
            "code": "GHT"
          }
        },
        {
          "@attributes": {
            "city": "Ghent,BE",
            "code": "GNE"
          }
        },
        {
          "@attributes": {
            "city": "Gibraltar,GI",
            "code": "GIB"
          }
        },
        {
          "@attributes": {
            "city": "Giessen,DE",
            "code": "ZQY"
          }
        },
        {
          "@attributes": {
            "city": "Gifu,JP",
            "code": "QGU"
          }
        },
        {
          "@attributes": {
            "city": "Gijon,ES",
            "code": "QIJ"
          }
        },
        {
          "@attributes": {
            "city": "Gilgit,PK",
            "code": "GIL"
          }
        },
        {
          "@attributes": {
            "city": "Gillam,CA",
            "code": "YGX"
          }
        },
        {
          "@attributes": {
            "city": "Gillette,US",
            "code": "GCC"
          }
        },
        {
          "@attributes": {
            "city": "Girardot,CO",
            "code": "GIR"
          }
        },
        {
          "@attributes": {
            "city": "Girona,ES",
            "code": "GRO"
          }
        },
        {
          "@attributes": {
            "city": "Gisborne,NZ",
            "code": "GIS"
          }
        },
        {
          "@attributes": {
            "city": "Gisenyi,RW",
            "code": "GYI"
          }
        },
        {
          "@attributes": {
            "city": "Gizan,SA",
            "code": "GIZ"
          }
        },
        {
          "@attributes": {
            "city": "Gizo,SB",
            "code": "GZO"
          }
        },
        {
          "@attributes": {
            "city": "Gizycko,PL",
            "code": "ZYC"
          }
        },
        {
          "@attributes": {
            "city": "Gjerstad,NO",
            "code": "XGS"
          }
        },
        {
          "@attributes": {
            "city": "Gjoa Haven,CA",
            "code": "YHK"
          }
        },
        {
          "@attributes": {
            "city": "Gjogur,IS",
            "code": "GJR"
          }
        },
        {
          "@attributes": {
            "city": "Gjovik,NO",
            "code": "ZYG"
          }
        },
        {
          "@attributes": {
            "city": "Glacier Bay,US",
            "code": "GST"
          }
        },
        {
          "@attributes": {
            "city": "Gladbeck,DE",
            "code": "ZEK"
          }
        },
        {
          "@attributes": {
            "city": "Gladstone,AU",
            "code": "GLT"
          }
        },
        {
          "@attributes": {
            "city": "Glarus,CH",
            "code": "ZHG"
          }
        },
        {
          "@attributes": {
            "city": "Glasgow,US",
            "code": "GLW"
          }
        },
        {
          "@attributes": {
            "city": "Glasgow,US",
            "code": "GGW"
          }
        },
        {
          "@attributes": {
            "city": "Glasgow,GB",
            "code": "GLA"
          }
        },
        {
          "@attributes": {
            "city": "Glen Innes,AU",
            "code": "GLI"
          }
        },
        {
          "@attributes": {
            "city": "Glencoe,CA",
            "code": "XZC"
          }
        },
        {
          "@attributes": {
            "city": "Glendale,US",
            "code": "JGX"
          }
        },
        {
          "@attributes": {
            "city": "Glendive,US",
            "code": "GDV"
          }
        },
        {
          "@attributes": {
            "city": "Glengyle,AU",
            "code": "GLG"
          }
        },
        {
          "@attributes": {
            "city": "Glennallen,US",
            "code": "GLQ"
          }
        },
        {
          "@attributes": {
            "city": "Glens Falls,US",
            "code": "GFL"
          }
        },
        {
          "@attributes": {
            "city": "Glenwood Springs,US",
            "code": "GWS"
          }
        },
        {
          "@attributes": {
            "city": "Gliwice,PL",
            "code": "QLC"
          }
        },
        {
          "@attributes": {
            "city": "Globe,US",
            "code": "GLB"
          }
        },
        {
          "@attributes": {
            "city": "Gloucester,GB",
            "code": "GLO"
          }
        },
        {
          "@attributes": {
            "city": "Goa In,IN",
            "code": "GOI"
          }
        },
        {
          "@attributes": {
            "city": "Goba,ET",
            "code": "GOB"
          }
        },
        {
          "@attributes": {
            "city": "Gobernador Gregores,AR",
            "code": "GGS"
          }
        },
        {
          "@attributes": {
            "city": "Gode,ET",
            "code": "GDE"
          }
        },
        {
          "@attributes": {
            "city": "Gods Lake Narrows,CA",
            "code": "YGO"
          }
        },
        {
          "@attributes": {
            "city": "Gods River,CA",
            "code": "ZGI"
          }
        },
        {
          "@attributes": {
            "city": "Goeppingen,DE",
            "code": "ZES"
          }
        },
        {
          "@attributes": {
            "city": "Goerlitz,DE",
            "code": "ZGE"
          }
        },
        {
          "@attributes": {
            "city": "Goettingen,DE",
            "code": "ZEU"
          }
        },
        {
          "@attributes": {
            "city": "Goiania,BR",
            "code": "GYN"
          }
        },
        {
          "@attributes": {
            "city": "Gol cities,NO",
            "code": "GLL"
          }
        },
        {
          "@attributes": {
            "city": "Gold Coast,AU",
            "code": "OOL"
          }
        },
        {
          "@attributes": {
            "city": "Goldsboro,US",
            "code": "GSB"
          }
        },
        {
          "@attributes": {
            "city": "Golfito,CR",
            "code": "GLF"
          }
        },
        {
          "@attributes": {
            "city": "Golovin,US",
            "code": "GLV"
          }
        },
        {
          "@attributes": {
            "city": "Goma,CD",
            "code": "GOM"
          }
        },
        {
          "@attributes": {
            "city": "Gombe,NG",
            "code": "GMO"
          }
        },
        {
          "@attributes": {
            "city": "Gomel,BY",
            "code": "GME"
          }
        },
        {
          "@attributes": {
            "city": "Gonalia,PG",
            "code": "GOE"
          }
        },
        {
          "@attributes": {
            "city": "Gondar,ET",
            "code": "GDQ"
          }
        },
        {
          "@attributes": {
            "city": "Goodland,US",
            "code": "GLD"
          }
        },
        {
          "@attributes": {
            "city": "Goodnews Bay,US",
            "code": "GNU"
          }
        },
        {
          "@attributes": {
            "city": "Goodyear,US",
            "code": "GYR"
          }
        },
        {
          "@attributes": {
            "city": "Goondiwindi,AU",
            "code": "GOO"
          }
        },
        {
          "@attributes": {
            "city": "Goose Bay,CA",
            "code": "YYR"
          }
        },
        {
          "@attributes": {
            "city": "Gora,PG",
            "code": "GOC"
          }
        },
        {
          "@attributes": {
            "city": "Gorakhpur,IN",
            "code": "GOP"
          }
        },
        {
          "@attributes": {
            "city": "Gordon,US",
            "code": "GRN"
          }
        },
        {
          "@attributes": {
            "city": "Gore,ET",
            "code": "GOR"
          }
        },
        {
          "@attributes": {
            "city": "Gore Bay,CA",
            "code": "YZE"
          }
        },
        {
          "@attributes": {
            "city": "Gorizia,IT",
            "code": "QGO"
          }
        },
        {
          "@attributes": {
            "city": "Gorna Orjahovica,BG",
            "code": "GOZ"
          }
        },
        {
          "@attributes": {
            "city": "Gorno Altaysk,RU",
            "code": "RGK"
          }
        },
        {
          "@attributes": {
            "city": "Goroka,PG",
            "code": "GKA"
          }
        },
        {
          "@attributes": {
            "city": "Gorom,BF",
            "code": "XGG"
          }
        },
        {
          "@attributes": {
            "city": "Gorontalo,ID",
            "code": "GTO"
          }
        },
        {
          "@attributes": {
            "city": "Gosford,AU",
            "code": "GOS"
          }
        },
        {
          "@attributes": {
            "city": "Goshen,US",
            "code": "GSH"
          }
        },
        {
          "@attributes": {
            "city": "Goslar,DE",
            "code": "ZET"
          }
        },
        {
          "@attributes": {
            "city": "Gossau,CH",
            "code": "ZHH"
          }
        },
        {
          "@attributes": {
            "city": "Gotha,DE",
            "code": "ZGO"
          }
        },
        {
          "@attributes": {
            "city": "Gothenburg,SE",
            "code": "GOT"
          }
        },
        {
          "@attributes": {
            "city": "Goulburn,AU",
            "code": "GUL"
          }
        },
        {
          "@attributes": {
            "city": "Gove,AU",
            "code": "GOV"
          }
        },
        {
          "@attributes": {
            "city": "Governador Valadares,BR",
            "code": "GVR"
          }
        },
        {
          "@attributes": {
            "city": "Governor S Harbour,BS",
            "code": "GHB"
          }
        },
        {
          "@attributes": {
            "city": "Goyang,KR",
            "code": "QYK"
          }
        },
        {
          "@attributes": {
            "city": "Gozo,MT",
            "code": "GZM"
          }
        },
        {
          "@attributes": {
            "city": "Graciosa Island,PT",
            "code": "GRW"
          }
        },
        {
          "@attributes": {
            "city": "Grafton,AU",
            "code": "GFN"
          }
        },
        {
          "@attributes": {
            "city": "Gramado,BR",
            "code": "QRP"
          }
        },
        {
          "@attributes": {
            "city": "Gran Canaria,ES",
            "code": "LPA"
          }
        },
        {
          "@attributes": {
            "city": "Granada,ES",
            "code": "GRX"
          }
        },
        {
          "@attributes": {
            "city": "Grand Canyon,US",
            "code": "GCN"
          }
        },
        {
          "@attributes": {
            "city": "Grand Cayman Island,KY",
            "code": "GCM"
          }
        },
        {
          "@attributes": {
            "city": "Grand Forks,CA",
            "code": "ZGF"
          }
        },
        {
          "@attributes": {
            "city": "Grand Forks,US",
            "code": "GFK"
          }
        },
        {
          "@attributes": {
            "city": "Grand Island,US",
            "code": "GRI"
          }
        },
        {
          "@attributes": {
            "city": "Grand Junction,US",
            "code": "GJT"
          }
        },
        {
          "@attributes": {
            "city": "Grand Marais,US",
            "code": "GRM"
          }
        },
        {
          "@attributes": {
            "city": "Grand Rapids,US",
            "code": "GPZ"
          }
        },
        {
          "@attributes": {
            "city": "Grand Rapids,US",
            "code": "GRR"
          }
        },
        {
          "@attributes": {
            "city": "Grand Turk,TC",
            "code": "GDT"
          }
        },
        {
          "@attributes": {
            "city": "Grande Prairie,CA",
            "code": "YQU"
          }
        },
        {
          "@attributes": {
            "city": "Grande Riviere,CA",
            "code": "XDO"
          }
        },
        {
          "@attributes": {
            "city": "Grantham,GB",
            "code": "XGM"
          }
        },
        {
          "@attributes": {
            "city": "Grants,US",
            "code": "GNT"
          }
        },
        {
          "@attributes": {
            "city": "Granville,FR",
            "code": "GFR"
          }
        },
        {
          "@attributes": {
            "city": "Gravatai,BR",
            "code": "GCV"
          }
        },
        {
          "@attributes": {
            "city": "Grayling,US",
            "code": "KGX"
          }
        },
        {
          "@attributes": {
            "city": "Graz,AT",
            "code": "GRZ"
          }
        },
        {
          "@attributes": {
            "city": "Great Barrier Island,NZ",
            "code": "GBZ"
          }
        },
        {
          "@attributes": {
            "city": "Great Barrington,US",
            "code": "GBR"
          }
        },
        {
          "@attributes": {
            "city": "Great Bend,US",
            "code": "GBD"
          }
        },
        {
          "@attributes": {
            "city": "Great Falls,US",
            "code": "GTF"
          }
        },
        {
          "@attributes": {
            "city": "Great Keppel Is,AU",
            "code": "GKL"
          }
        },
        {
          "@attributes": {
            "city": "Greeley,US",
            "code": "GXY"
          }
        },
        {
          "@attributes": {
            "city": "Green Bay,US",
            "code": "GRB"
          }
        },
        {
          "@attributes": {
            "city": "Green River,US",
            "code": "RVR"
          }
        },
        {
          "@attributes": {
            "city": "Green River,PG",
            "code": "GVI"
          }
        },
        {
          "@attributes": {
            "city": "Greeneville,US",
            "code": "GCY"
          }
        },
        {
          "@attributes": {
            "city": "Greenfield,US",
            "code": "GFD"
          }
        },
        {
          "@attributes": {
            "city": "Greensboro,US",
            "code": "GSO"
          }
        },
        {
          "@attributes": {
            "city": "Greenville,US",
            "code": "PGV"
          }
        },
        {
          "@attributes": {
            "city": "Greenville,US",
            "code": "GLH"
          }
        },
        {
          "@attributes": {
            "city": "Greenville,US",
            "code": "GSP"
          }
        },
        {
          "@attributes": {
            "city": "Greenville,US",
            "code": "GVT"
          }
        },
        {
          "@attributes": {
            "city": "Greenwood,CA",
            "code": "YZX"
          }
        },
        {
          "@attributes": {
            "city": "Greenwood,US",
            "code": "GRD"
          }
        },
        {
          "@attributes": {
            "city": "Greenwood,US",
            "code": "GWO"
          }
        },
        {
          "@attributes": {
            "city": "Greifswald,DE",
            "code": "ZGW"
          }
        },
        {
          "@attributes": {
            "city": "Grenada,GD",
            "code": "GND"
          }
        },
        {
          "@attributes": {
            "city": "Grenchen,CH",
            "code": "ZHI"
          }
        },
        {
          "@attributes": {
            "city": "Grenoble,FR",
            "code": "GNB"
          }
        },
        {
          "@attributes": {
            "city": "Greybull,US",
            "code": "GEY"
          }
        },
        {
          "@attributes": {
            "city": "Greymouth,NZ",
            "code": "GMN"
          }
        },
        {
          "@attributes": {
            "city": "Griffith,AU",
            "code": "GFF"
          }
        },
        {
          "@attributes": {
            "city": "Grimsby,CA",
            "code": "XGY"
          }
        },
        {
          "@attributes": {
            "city": "Grimsby,GB",
            "code": "GSY"
          }
        },
        {
          "@attributes": {
            "city": "Grimsey,IS",
            "code": "GRY"
          }
        },
        {
          "@attributes": {
            "city": "Grodna,BY",
            "code": "GNA"
          }
        },
        {
          "@attributes": {
            "city": "Groennedal,GL",
            "code": "JGR"
          }
        },
        {
          "@attributes": {
            "city": "Grong,NO",
            "code": "XKG"
          }
        },
        {
          "@attributes": {
            "city": "Groningen,NL",
            "code": "GRQ"
          }
        },
        {
          "@attributes": {
            "city": "Groote Eylandt,AU",
            "code": "GTE"
          }
        },
        {
          "@attributes": {
            "city": "Grootfontein,NA",
            "code": "GFY"
          }
        },
        {
          "@attributes": {
            "city": "Grosseto,IT",
            "code": "GRS"
          }
        },
        {
          "@attributes": {
            "city": "Grundarfjordur,IS",
            "code": "GUU"
          }
        },
        {
          "@attributes": {
            "city": "Gstaad,CH",
            "code": "ZHK"
          }
        },
        {
          "@attributes": {
            "city": "Guadalajara,ES",
            "code": "GDU"
          }
        },
        {
          "@attributes": {
            "city": "Guadalajara,MX",
            "code": "GDL"
          }
        },
        {
          "@attributes": {
            "city": "Guam,GU",
            "code": "GUM"
          }
        },
        {
          "@attributes": {
            "city": "Guamal,CO",
            "code": "GAA"
          }
        },
        {
          "@attributes": {
            "city": "Guanaja,HN",
            "code": "GJA"
          }
        },
        {
          "@attributes": {
            "city": "Guanambi,BR",
            "code": "GNM"
          }
        },
        {
          "@attributes": {
            "city": "Guanare,VE",
            "code": "GUQ"
          }
        },
        {
          "@attributes": {
            "city": "Guang Yuan,CN",
            "code": "GYS"
          }
        },
        {
          "@attributes": {
            "city": "Guangzhou,CN",
            "code": "CAN"
          }
        },
        {
          "@attributes": {
            "city": "Guantanamo,CU",
            "code": "GAO"
          }
        },
        {
          "@attributes": {
            "city": "Guapi,CO",
            "code": "GPI"
          }
        },
        {
          "@attributes": {
            "city": "Guarapari,BR",
            "code": "GUZ"
          }
        },
        {
          "@attributes": {
            "city": "Guarapuava,BR",
            "code": "GPB"
          }
        },
        {
          "@attributes": {
            "city": "Guaratingueta,BR",
            "code": "GUJ"
          }
        },
        {
          "@attributes": {
            "city": "Guari,PG",
            "code": "GUG"
          }
        },
        {
          "@attributes": {
            "city": "Guatemala cities,GT",
            "code": "GUA"
          }
        },
        {
          "@attributes": {
            "city": "Guayaquil,EC",
            "code": "GYE"
          }
        },
        {
          "@attributes": {
            "city": "Guayaramerin,BO",
            "code": "GYA"
          }
        },
        {
          "@attributes": {
            "city": "Guaymas,MX",
            "code": "GYM"
          }
        },
        {
          "@attributes": {
            "city": "Guelph,CA",
            "code": "XIA"
          }
        },
        {
          "@attributes": {
            "city": "Gueret,FR",
            "code": "XGT"
          }
        },
        {
          "@attributes": {
            "city": "Guernsey,GB",
            "code": "GCI"
          }
        },
        {
          "@attributes": {
            "city": "Guettin,DE",
            "code": "GTI"
          }
        },
        {
          "@attributes": {
            "city": "Guezzam,DZ",
            "code": "INF"
          }
        },
        {
          "@attributes": {
            "city": "Guilin,CN",
            "code": "KWL"
          }
        },
        {
          "@attributes": {
            "city": "Guiria,VE",
            "code": "GUI"
          }
        },
        {
          "@attributes": {
            "city": "Guiyang,CN",
            "code": "KWE"
          }
        },
        {
          "@attributes": {
            "city": "Gulf Shores,US",
            "code": "GUF"
          }
        },
        {
          "@attributes": {
            "city": "Gulfport,US",
            "code": "GPT"
          }
        },
        {
          "@attributes": {
            "city": "Gulkana,US",
            "code": "GKN"
          }
        },
        {
          "@attributes": {
            "city": "Gummersbach,DE",
            "code": "ZEW"
          }
        },
        {
          "@attributes": {
            "city": "Gunnedah,AU",
            "code": "GUH"
          }
        },
        {
          "@attributes": {
            "city": "Gunnison,US",
            "code": "GUC"
          }
        },
        {
          "@attributes": {
            "city": "Gunungsitoli,ID",
            "code": "GNS"
          }
        },
        {
          "@attributes": {
            "city": "Gurayat,SA",
            "code": "URY"
          }
        },
        {
          "@attributes": {
            "city": "Gurupi,BR",
            "code": "GRP"
          }
        },
        {
          "@attributes": {
            "city": "Gutersloh,DE",
            "code": "GUT"
          }
        },
        {
          "@attributes": {
            "city": "Guwahati,IN",
            "code": "GAU"
          }
        },
        {
          "@attributes": {
            "city": "Guymon,US",
            "code": "GUY"
          }
        },
        {
          "@attributes": {
            "city": "Guyuan Shi,CN",
            "code": "GYU"
          }
        },
        {
          "@attributes": {
            "city": "Gwadar,PK",
            "code": "GWD"
          }
        },
        {
          "@attributes": {
            "city": "Gwalior,IN",
            "code": "GWL"
          }
        },
        {
          "@attributes": {
            "city": "Gweru,ZW",
            "code": "GWE"
          }
        },
        {
          "@attributes": {
            "city": "Gyandzhan,AZ",
            "code": "KVD"
          }
        },
        {
          "@attributes": {
            "city": "Gympie,AU",
            "code": "GYP"
          }
        },
        {
          "@attributes": {
            "city": "Gyor,HU",
            "code": "QGY"
          }
        },
        {
          "@attributes": {
            "city": "HAVASUPAI,US",
            "code": "HAE"
          }
        },
        {
          "@attributes": {
            "city": "Ha Apai,TO",
            "code": "HPA"
          }
        },
        {
          "@attributes": {
            "city": "Haa Dhaalu Atoll,MV",
            "code": "HAQ"
          }
        },
        {
          "@attributes": {
            "city": "Hachijo Jima,JP",
            "code": "HAC"
          }
        },
        {
          "@attributes": {
            "city": "Hachinohe,JP",
            "code": "HHE"
          }
        },
        {
          "@attributes": {
            "city": "Hachioji,JP",
            "code": "QHY"
          }
        },
        {
          "@attributes": {
            "city": "Hafr Albatin,SA",
            "code": "HBT"
          }
        },
        {
          "@attributes": {
            "city": "Hagen,DE",
            "code": "ZEY"
          }
        },
        {
          "@attributes": {
            "city": "Hagerstown,US",
            "code": "HGR"
          }
        },
        {
          "@attributes": {
            "city": "Hagfors,SE",
            "code": "HFS"
          }
        },
        {
          "@attributes": {
            "city": "Hahn,DE",
            "code": "HHN"
          }
        },
        {
          "@attributes": {
            "city": "Hahnweide,DE",
            "code": "QHD"
          }
        },
        {
          "@attributes": {
            "city": "Haifa,IL",
            "code": "HFA"
          }
        },
        {
          "@attributes": {
            "city": "Haikou,CN",
            "code": "HAK"
          }
        },
        {
          "@attributes": {
            "city": "Hail,SA",
            "code": "HAS"
          }
        },
        {
          "@attributes": {
            "city": "Hailar,CN",
            "code": "HLD"
          }
        },
        {
          "@attributes": {
            "city": "Haines,US",
            "code": "HNS"
          }
        },
        {
          "@attributes": {
            "city": "Haiphong,VN",
            "code": "HPH"
          }
        },
        {
          "@attributes": {
            "city": "Hakodate,JP",
            "code": "HKD"
          }
        },
        {
          "@attributes": {
            "city": "Halberstadt,DE",
            "code": "ZHQ"
          }
        },
        {
          "@attributes": {
            "city": "Halden,NO",
            "code": "XKD"
          }
        },
        {
          "@attributes": {
            "city": "Half Moon Bay,US",
            "code": "HAF"
          }
        },
        {
          "@attributes": {
            "city": "Halifax,CA",
            "code": "YHZ"
          }
        },
        {
          "@attributes": {
            "city": "Hall Beach,CA",
            "code": "YUX"
          }
        },
        {
          "@attributes": {
            "city": "Halle,DE",
            "code": "ZHZ"
          }
        },
        {
          "@attributes": {
            "city": "Halls Creek,AU",
            "code": "HCQ"
          }
        },
        {
          "@attributes": {
            "city": "Hallsberg,SE",
            "code": "XWM"
          }
        },
        {
          "@attributes": {
            "city": "Halmstad,SE",
            "code": "HAD"
          }
        },
        {
          "@attributes": {
            "city": "Hamadan,IR",
            "code": "HDM"
          }
        },
        {
          "@attributes": {
            "city": "Hamar,NO",
            "code": "HMR"
          }
        },
        {
          "@attributes": {
            "city": "Hambantota,LK",
            "code": "HRI"
          }
        },
        {
          "@attributes": {
            "city": "Hamburg,DE",
            "code": "HAM"
          }
        },
        {
          "@attributes": {
            "city": "Hameenlinna,FI",
            "code": "QVM"
          }
        },
        {
          "@attributes": {
            "city": "Hameln,DE",
            "code": "ZEZ"
          }
        },
        {
          "@attributes": {
            "city": "Hami,CN",
            "code": "HMI"
          }
        },
        {
          "@attributes": {
            "city": "Hamilton,AU",
            "code": "HLT"
          }
        },
        {
          "@attributes": {
            "city": "Hamilton,NZ",
            "code": "HLZ"
          }
        },
        {
          "@attributes": {
            "city": "Hamilton,US",
            "code": "HAO"
          }
        },
        {
          "@attributes": {
            "city": "Hamilton,US",
            "code": "HAB"
          }
        },
        {
          "@attributes": {
            "city": "Hamilton,CA",
            "code": "YHM"
          }
        },
        {
          "@attributes": {
            "city": "Hamilton Island,AU",
            "code": "HTI"
          }
        },
        {
          "@attributes": {
            "city": "Hamina,FI",
            "code": "QVZ"
          }
        },
        {
          "@attributes": {
            "city": "Hamm,DE",
            "code": "ZNB"
          }
        },
        {
          "@attributes": {
            "city": "Hammerfest,NO",
            "code": "HFT"
          }
        },
        {
          "@attributes": {
            "city": "Hampton,US",
            "code": "LFI"
          }
        },
        {
          "@attributes": {
            "city": "Hana,US",
            "code": "HNM"
          }
        },
        {
          "@attributes": {
            "city": "Hanau,DE",
            "code": "ZNF"
          }
        },
        {
          "@attributes": {
            "city": "Handan,CN",
            "code": "HDG"
          }
        },
        {
          "@attributes": {
            "city": "Hangzhou,CN",
            "code": "HGH"
          }
        },
        {
          "@attributes": {
            "city": "Hanksville,US",
            "code": "HVE"
          }
        },
        {
          "@attributes": {
            "city": "Hannover,DE",
            "code": "HAJ"
          }
        },
        {
          "@attributes": {
            "city": "Hanoi,VN",
            "code": "HAN"
          }
        },
        {
          "@attributes": {
            "city": "Hanzhong,CN",
            "code": "HZG"
          }
        },
        {
          "@attributes": {
            "city": "Hao Island,PF",
            "code": "HOI"
          }
        },
        {
          "@attributes": {
            "city": "Harare,ZW",
            "code": "HRE"
          }
        },
        {
          "@attributes": {
            "city": "Harbin,CN",
            "code": "HRB"
          }
        },
        {
          "@attributes": {
            "city": "Harbour Island,BS",
            "code": "HBI"
          }
        },
        {
          "@attributes": {
            "city": "Hargeisa,SO",
            "code": "HGA"
          }
        },
        {
          "@attributes": {
            "city": "Harlingen,US",
            "code": "HRL"
          }
        },
        {
          "@attributes": {
            "city": "Harnosand,SE",
            "code": "XYZ"
          }
        },
        {
          "@attributes": {
            "city": "Harrisburg,US",
            "code": "HAR"
          }
        },
        {
          "@attributes": {
            "city": "Harrismith,ZA",
            "code": "HRS"
          }
        },
        {
          "@attributes": {
            "city": "Harrison,US",
            "code": "HRO"
          }
        },
        {
          "@attributes": {
            "city": "Harrogate,GB",
            "code": "HRT"
          }
        },
        {
          "@attributes": {
            "city": "Harstad,NO",
            "code": "HRD"
          }
        },
        {
          "@attributes": {
            "city": "Harstad Narvik,NO",
            "code": "EVE"
          }
        },
        {
          "@attributes": {
            "city": "Hartford,US",
            "code": "HFD"
          }
        },
        {
          "@attributes": {
            "city": "Hartsville,US",
            "code": "HVS"
          }
        },
        {
          "@attributes": {
            "city": "Harwich,GB",
            "code": "QQH"
          }
        },
        {
          "@attributes": {
            "city": "Hasselt,BE",
            "code": "QHA"
          }
        },
        {
          "@attributes": {
            "city": "Hassi Messaoud,DZ",
            "code": "HME"
          }
        },
        {
          "@attributes": {
            "city": "Hassleholm,SE",
            "code": "XWP"
          }
        },
        {
          "@attributes": {
            "city": "Hastings,US",
            "code": "HSI"
          }
        },
        {
          "@attributes": {
            "city": "Hasvik,NO",
            "code": "HAA"
          }
        },
        {
          "@attributes": {
            "city": "Hat Yai,TH",
            "code": "HDY"
          }
        },
        {
          "@attributes": {
            "city": "Hatay,TR",
            "code": "HTY"
          }
        },
        {
          "@attributes": {
            "city": "Hateruma,JP",
            "code": "HTR"
          }
        },
        {
          "@attributes": {
            "city": "Hatfield,GB",
            "code": "HTF"
          }
        },
        {
          "@attributes": {
            "city": "Hatteras,US",
            "code": "HNC"
          }
        },
        {
          "@attributes": {
            "city": "Hattiesburg,US",
            "code": "HBG"
          }
        },
        {
          "@attributes": {
            "city": "Haugastol,NO",
            "code": "ZWJ"
          }
        },
        {
          "@attributes": {
            "city": "Haugesund,NO",
            "code": "HAU"
          }
        },
        {
          "@attributes": {
            "city": "Havana,CU",
            "code": "HAV"
          }
        },
        {
          "@attributes": {
            "city": "Haverfordwest,GB",
            "code": "HAW"
          }
        },
        {
          "@attributes": {
            "city": "Havre,US",
            "code": "HVR"
          }
        },
        {
          "@attributes": {
            "city": "Havre St Pierre,CA",
            "code": "YGV"
          }
        },
        {
          "@attributes": {
            "city": "Hawabango,PG",
            "code": "HWA"
          }
        },
        {
          "@attributes": {
            "city": "Hawk Inlet,US",
            "code": "HWI"
          }
        },
        {
          "@attributes": {
            "city": "Hawker,AU",
            "code": "HWK"
          }
        },
        {
          "@attributes": {
            "city": "Hawthorne,US",
            "code": "HHR"
          }
        },
        {
          "@attributes": {
            "city": "Hawthorne,US",
            "code": "HTH"
          }
        },
        {
          "@attributes": {
            "city": "Hay AU,AU",
            "code": "HXX"
          }
        },
        {
          "@attributes": {
            "city": "Hay River,CA",
            "code": "YHY"
          }
        },
        {
          "@attributes": {
            "city": "Haycock,US",
            "code": "HAY"
          }
        },
        {
          "@attributes": {
            "city": "Hayden,US",
            "code": "HDN"
          }
        },
        {
          "@attributes": {
            "city": "Hayfields,PG",
            "code": "HYF"
          }
        },
        {
          "@attributes": {
            "city": "Hayman Island,AU",
            "code": "HIS"
          }
        },
        {
          "@attributes": {
            "city": "Hays,US",
            "code": "HYS"
          }
        },
        {
          "@attributes": {
            "city": "Hayward,US",
            "code": "HWD"
          }
        },
        {
          "@attributes": {
            "city": "Hayward,US",
            "code": "HYR"
          }
        },
        {
          "@attributes": {
            "city": "Hazebrouck,FR",
            "code": "HZB"
          }
        },
        {
          "@attributes": {
            "city": "Hazelton,US",
            "code": "HZL"
          }
        },
        {
          "@attributes": {
            "city": "Hazyview,ZA",
            "code": "HZV"
          }
        },
        {
          "@attributes": {
            "city": "Headquarters,US",
            "code": "HDQ"
          }
        },
        {
          "@attributes": {
            "city": "Healy Lake,US",
            "code": "HKB"
          }
        },
        {
          "@attributes": {
            "city": "Hearst,CA",
            "code": "YHF"
          }
        },
        {
          "@attributes": {
            "city": "Hechi,CN",
            "code": "HCJ"
          }
        },
        {
          "@attributes": {
            "city": "Hedemora,SE",
            "code": "XXU"
          }
        },
        {
          "@attributes": {
            "city": "Heerbrugg,CH",
            "code": "ZHL"
          }
        },
        {
          "@attributes": {
            "city": "Heerenveen,NL",
            "code": "QYZ"
          }
        },
        {
          "@attributes": {
            "city": "Hefei,CN",
            "code": "HFE"
          }
        },
        {
          "@attributes": {
            "city": "Heho,MM",
            "code": "HEH"
          }
        },
        {
          "@attributes": {
            "city": "Heide Buesum,DE",
            "code": "HEI"
          }
        },
        {
          "@attributes": {
            "city": "Heidelberg,DE",
            "code": "HDB"
          }
        },
        {
          "@attributes": {
            "city": "Heidenheim,DE",
            "code": "ZNI"
          }
        },
        {
          "@attributes": {
            "city": "Heihe,CN",
            "code": "HEK"
          }
        },
        {
          "@attributes": {
            "city": "Heilbronn,DE",
            "code": "ZNJ"
          }
        },
        {
          "@attributes": {
            "city": "Heimdal,NO",
            "code": "XUE"
          }
        },
        {
          "@attributes": {
            "city": "Helena,US",
            "code": "HLN"
          }
        },
        {
          "@attributes": {
            "city": "Helena,US",
            "code": "HEE"
          }
        },
        {
          "@attributes": {
            "city": "Helgoland,DE",
            "code": "HGL"
          }
        },
        {
          "@attributes": {
            "city": "Helsingborg,SE",
            "code": "JHE"
          }
        },
        {
          "@attributes": {
            "city": "Helsinki,FI",
            "code": "HEL"
          }
        },
        {
          "@attributes": {
            "city": "Hemavan,SE",
            "code": "HMV"
          }
        },
        {
          "@attributes": {
            "city": "Hemet,US",
            "code": "HMT"
          }
        },
        {
          "@attributes": {
            "city": "Hendaye,FR",
            "code": "XHY"
          }
        },
        {
          "@attributes": {
            "city": "Hengchun,TW",
            "code": "HCN"
          }
        },
        {
          "@attributes": {
            "city": "Hengelo,NL",
            "code": "QYH"
          }
        },
        {
          "@attributes": {
            "city": "Hengyang,CN",
            "code": "HNY"
          }
        },
        {
          "@attributes": {
            "city": "Heraklion,GR",
            "code": "HER"
          }
        },
        {
          "@attributes": {
            "city": "Herat,AF",
            "code": "HEA"
          }
        },
        {
          "@attributes": {
            "city": "Herceg Novi,ME",
            "code": "HNO"
          }
        },
        {
          "@attributes": {
            "city": "Herendeen,US",
            "code": "HED"
          }
        },
        {
          "@attributes": {
            "city": "Herford,DE",
            "code": "ZNK"
          }
        },
        {
          "@attributes": {
            "city": "Heringsdorf,DE",
            "code": "HDF"
          }
        },
        {
          "@attributes": {
            "city": "Herlong,US",
            "code": "AHC"
          }
        },
        {
          "@attributes": {
            "city": "Hermiston,US",
            "code": "HES"
          }
        },
        {
          "@attributes": {
            "city": "Hermosillo,MX",
            "code": "HMO"
          }
        },
        {
          "@attributes": {
            "city": "Herne,DE",
            "code": "ZNL"
          }
        },
        {
          "@attributes": {
            "city": "Herning,DK",
            "code": "XAK"
          }
        },
        {
          "@attributes": {
            "city": "Herning cities,DK",
            "code": "ZRY"
          }
        },
        {
          "@attributes": {
            "city": "Herrljunga,SE",
            "code": "XYC"
          }
        },
        {
          "@attributes": {
            "city": "Hervey,CA",
            "code": "XDU"
          }
        },
        {
          "@attributes": {
            "city": "Hervey Bay,AU",
            "code": "HVB"
          }
        },
        {
          "@attributes": {
            "city": "Herzogenbuchsee,CH",
            "code": "ZHN"
          }
        },
        {
          "@attributes": {
            "city": "Heviz,HU",
            "code": "HVZ"
          }
        },
        {
          "@attributes": {
            "city": "Hibbing,US",
            "code": "HIB"
          }
        },
        {
          "@attributes": {
            "city": "Hickory,US",
            "code": "HKY"
          }
        },
        {
          "@attributes": {
            "city": "High Level,CA",
            "code": "YOJ"
          }
        },
        {
          "@attributes": {
            "city": "High Prairie,CA",
            "code": "ZHP"
          }
        },
        {
          "@attributes": {
            "city": "High Wycombe,GB",
            "code": "HYC"
          }
        },
        {
          "@attributes": {
            "city": "Higuero,DO",
            "code": "JBQ"
          }
        },
        {
          "@attributes": {
            "city": "Hilden,DE",
            "code": "ZNN"
          }
        },
        {
          "@attributes": {
            "city": "Hildesheim,DE",
            "code": "ZNO"
          }
        },
        {
          "@attributes": {
            "city": "Hillsboro,US",
            "code": "HIO"
          }
        },
        {
          "@attributes": {
            "city": "Hilo,US",
            "code": "ITO"
          }
        },
        {
          "@attributes": {
            "city": "Hilton Head,US",
            "code": "HHH"
          }
        },
        {
          "@attributes": {
            "city": "Hilversum,NL",
            "code": "QYI"
          }
        },
        {
          "@attributes": {
            "city": "Hinchinbrooke Is,AU",
            "code": "HNK"
          }
        },
        {
          "@attributes": {
            "city": "Hinesville,US",
            "code": "LIY"
          }
        },
        {
          "@attributes": {
            "city": "Hingurakgoda,LK",
            "code": "HIM"
          }
        },
        {
          "@attributes": {
            "city": "Hiroshima,JP",
            "code": "HIJ"
          }
        },
        {
          "@attributes": {
            "city": "Hirtshals,DK",
            "code": "XAJ"
          }
        },
        {
          "@attributes": {
            "city": "Hiva Oa,PF",
            "code": "HIX"
          }
        },
        {
          "@attributes": {
            "city": "Hjerkinn,NO",
            "code": "YVH"
          }
        },
        {
          "@attributes": {
            "city": "Hluhluwe,ZA",
            "code": "HLW"
          }
        },
        {
          "@attributes": {
            "city": "Ho Chi Minh cities,VN",
            "code": "SGN"
          }
        },
        {
          "@attributes": {
            "city": "Hobart,AU",
            "code": "HBA"
          }
        },
        {
          "@attributes": {
            "city": "Hobart Bay,US",
            "code": "HBH"
          }
        },
        {
          "@attributes": {
            "city": "Hobbs,US",
            "code": "HOB"
          }
        },
        {
          "@attributes": {
            "city": "Hodeidah,YE",
            "code": "HOD"
          }
        },
        {
          "@attributes": {
            "city": "Hoedspruit,ZA",
            "code": "HDS"
          }
        },
        {
          "@attributes": {
            "city": "Hof De,DE",
            "code": "HOQ"
          }
        },
        {
          "@attributes": {
            "city": "Hofuf,SA",
            "code": "HOF"
          }
        },
        {
          "@attributes": {
            "city": "Hogatza,US",
            "code": "HGZ"
          }
        },
        {
          "@attributes": {
            "city": "Hohenems,AT",
            "code": "HOH"
          }
        },
        {
          "@attributes": {
            "city": "Hohhot,CN",
            "code": "HET"
          }
        },
        {
          "@attributes": {
            "city": "Hokitika,NZ",
            "code": "HKK"
          }
        },
        {
          "@attributes": {
            "city": "Holbrook,US",
            "code": "HBK"
          }
        },
        {
          "@attributes": {
            "city": "Holguin,CU",
            "code": "HOG"
          }
        },
        {
          "@attributes": {
            "city": "Holland,US",
            "code": "HLM"
          }
        },
        {
          "@attributes": {
            "city": "Hollis,US",
            "code": "HYL"
          }
        },
        {
          "@attributes": {
            "city": "Hollister,US",
            "code": "HLI"
          }
        },
        {
          "@attributes": {
            "city": "Hollywood,US",
            "code": "HWO"
          }
        },
        {
          "@attributes": {
            "city": "Holman Island,CA",
            "code": "YHI"
          }
        },
        {
          "@attributes": {
            "city": "Holmavik,IS",
            "code": "HVK"
          }
        },
        {
          "@attributes": {
            "city": "Holstebro,DK",
            "code": "QWO"
          }
        },
        {
          "@attributes": {
            "city": "Holy Cross,US",
            "code": "HCR"
          }
        },
        {
          "@attributes": {
            "city": "Holyhead,GB",
            "code": "HLY"
          }
        },
        {
          "@attributes": {
            "city": "Homburg,DE",
            "code": "QOG"
          }
        },
        {
          "@attributes": {
            "city": "Homer,US",
            "code": "HOM"
          }
        },
        {
          "@attributes": {
            "city": "Homestead,US",
            "code": "HST"
          }
        },
        {
          "@attributes": {
            "city": "Homs,SY",
            "code": "QHS"
          }
        },
        {
          "@attributes": {
            "city": "Hong Kong,HK",
            "code": "HKG"
          }
        },
        {
          "@attributes": {
            "city": "Honiara,SB",
            "code": "HIR"
          }
        },
        {
          "@attributes": {
            "city": "Honningsvag,NO",
            "code": "HVG"
          }
        },
        {
          "@attributes": {
            "city": "Honolulu,US",
            "code": "HNL"
          }
        },
        {
          "@attributes": {
            "city": "Hoofddorp,NL",
            "code": "QHZ"
          }
        },
        {
          "@attributes": {
            "city": "Hoolehua,US",
            "code": "MKK"
          }
        },
        {
          "@attributes": {
            "city": "Hoonah,US",
            "code": "HNH"
          }
        },
        {
          "@attributes": {
            "city": "Hooper Bay,US",
            "code": "HPB"
          }
        },
        {
          "@attributes": {
            "city": "Hope,CA",
            "code": "YHE"
          }
        },
        {
          "@attributes": {
            "city": "Hopedale,CA",
            "code": "YHO"
          }
        },
        {
          "@attributes": {
            "city": "Hopkinsville,US",
            "code": "HOP"
          }
        },
        {
          "@attributes": {
            "city": "Hoquaim,US",
            "code": "HQM"
          }
        },
        {
          "@attributes": {
            "city": "Horizontina,BR",
            "code": "HRZ"
          }
        },
        {
          "@attributes": {
            "city": "Horn Island,AU",
            "code": "HID"
          }
        },
        {
          "@attributes": {
            "city": "Hornafjordur,IS",
            "code": "HFN"
          }
        },
        {
          "@attributes": {
            "city": "Hornepayne,CA",
            "code": "YHN"
          }
        },
        {
          "@attributes": {
            "city": "Horsens,DK",
            "code": "ZIL"
          }
        },
        {
          "@attributes": {
            "city": "Horsham,AU",
            "code": "HSM"
          }
        },
        {
          "@attributes": {
            "city": "Horta,PT",
            "code": "HOR"
          }
        },
        {
          "@attributes": {
            "city": "Hoskins,PG",
            "code": "HKN"
          }
        },
        {
          "@attributes": {
            "city": "Hot Springs,US",
            "code": "HOT"
          }
        },
        {
          "@attributes": {
            "city": "Hot Springs,US",
            "code": "HSP"
          }
        },
        {
          "@attributes": {
            "city": "Hotan,CN",
            "code": "HTN"
          }
        },
        {
          "@attributes": {
            "city": "Houeisay,LA",
            "code": "HOE"
          }
        },
        {
          "@attributes": {
            "city": "Houghton,US",
            "code": "CMX"
          }
        },
        {
          "@attributes": {
            "city": "Houma,US",
            "code": "HUM"
          }
        },
        {
          "@attributes": {
            "city": "Houn,LY",
            "code": "HUQ"
          }
        },
        {
          "@attributes": {
            "city": "Houston,CA",
            "code": "ZHO"
          }
        },
        {
          "@attributes": {
            "city": "Houston,US",
            "code": "HOU"
          }
        },
        {
          "@attributes": {
            "city": "Hsinchun,TW",
            "code": "HSZ"
          }
        },
        {
          "@attributes": {
            "city": "Hu,VN",
            "code": "HUI"
          }
        },
        {
          "@attributes": {
            "city": "Hua Hin,TH",
            "code": "HHQ"
          }
        },
        {
          "@attributes": {
            "city": "Huahine,PF",
            "code": "HUH"
          }
        },
        {
          "@attributes": {
            "city": "Huai An,CN",
            "code": "HIA"
          }
        },
        {
          "@attributes": {
            "city": "Hualien,TW",
            "code": "HUN"
          }
        },
        {
          "@attributes": {
            "city": "Huambo,AO",
            "code": "NOV"
          }
        },
        {
          "@attributes": {
            "city": "Huanghua,CN",
            "code": "HHA"
          }
        },
        {
          "@attributes": {
            "city": "Huangshi,CN",
            "code": "HSD"
          }
        },
        {
          "@attributes": {
            "city": "Huangyan,CN",
            "code": "HYN"
          }
        },
        {
          "@attributes": {
            "city": "Huanuco,PE",
            "code": "HUU"
          }
        },
        {
          "@attributes": {
            "city": "Hubli,IN",
            "code": "HBX"
          }
        },
        {
          "@attributes": {
            "city": "Hudiksvall,SE",
            "code": "HUV"
          }
        },
        {
          "@attributes": {
            "city": "Hudson Bay,CA",
            "code": "YHB"
          }
        },
        {
          "@attributes": {
            "city": "Huelva,ES",
            "code": "HEV"
          }
        },
        {
          "@attributes": {
            "city": "Huerth,DE",
            "code": "ZNP"
          }
        },
        {
          "@attributes": {
            "city": "Huesca,ES",
            "code": "HSK"
          }
        },
        {
          "@attributes": {
            "city": "Hughenden,AU",
            "code": "HGD"
          }
        },
        {
          "@attributes": {
            "city": "Hughes,US",
            "code": "HUS"
          }
        },
        {
          "@attributes": {
            "city": "Huizhou,CN",
            "code": "HUZ"
          }
        },
        {
          "@attributes": {
            "city": "Hultsfred,SE",
            "code": "HLF"
          }
        },
        {
          "@attributes": {
            "city": "Humacao,US",
            "code": "HUC"
          }
        },
        {
          "@attributes": {
            "city": "Humberside,GB",
            "code": "HUY"
          }
        },
        {
          "@attributes": {
            "city": "Humera,ET",
            "code": "HUE"
          }
        },
        {
          "@attributes": {
            "city": "Huntingburg,US",
            "code": "HNB"
          }
        },
        {
          "@attributes": {
            "city": "Huntingdon,GB",
            "code": "XHU"
          }
        },
        {
          "@attributes": {
            "city": "Huntington,US",
            "code": "HTS"
          }
        },
        {
          "@attributes": {
            "city": "Huntsville,US",
            "code": "HSV"
          }
        },
        {
          "@attributes": {
            "city": "Huntsville,US",
            "code": "HTV"
          }
        },
        {
          "@attributes": {
            "city": "Hurghada,EG",
            "code": "HRG"
          }
        },
        {
          "@attributes": {
            "city": "Huron,US",
            "code": "HON"
          }
        },
        {
          "@attributes": {
            "city": "Husavik,IS",
            "code": "HZK"
          }
        },
        {
          "@attributes": {
            "city": "Huslia,US",
            "code": "HSL"
          }
        },
        {
          "@attributes": {
            "city": "Husum,DE",
            "code": "QHU"
          }
        },
        {
          "@attributes": {
            "city": "Hutchinson,US",
            "code": "HUT"
          }
        },
        {
          "@attributes": {
            "city": "Huzhou,CN",
            "code": "HZC"
          }
        },
        {
          "@attributes": {
            "city": "Hwange,ZW",
            "code": "HWN"
          }
        },
        {
          "@attributes": {
            "city": "Hyannis,US",
            "code": "HYA"
          }
        },
        {
          "@attributes": {
            "city": "Hydaburg,US",
            "code": "HYG"
          }
        },
        {
          "@attributes": {
            "city": "Hyder,US",
            "code": "WHD"
          }
        },
        {
          "@attributes": {
            "city": "Hyderabad,PK",
            "code": "HDD"
          }
        },
        {
          "@attributes": {
            "city": "Hyderabad,IN",
            "code": "HYD"
          }
        },
        {
          "@attributes": {
            "city": "Hyeres,FR",
            "code": "XHE"
          }
        },
        {
          "@attributes": {
            "city": "IGRIM,RU",
            "code": "IRM"
          }
        },
        {
          "@attributes": {
            "city": "Iamalele,PG",
            "code": "IMA"
          }
        },
        {
          "@attributes": {
            "city": "Iasi,RO",
            "code": "IAS"
          }
        },
        {
          "@attributes": {
            "city": "Ibadan,NG",
            "code": "IBA"
          }
        },
        {
          "@attributes": {
            "city": "Ibague,CO",
            "code": "IBE"
          }
        },
        {
          "@attributes": {
            "city": "Ibaraki,JP",
            "code": "IBR"
          }
        },
        {
          "@attributes": {
            "city": "Ibiza,ES",
            "code": "IBZ"
          }
        },
        {
          "@attributes": {
            "city": "Iboki,PG",
            "code": "IBI"
          }
        },
        {
          "@attributes": {
            "city": "Icy Bay,US",
            "code": "ICY"
          }
        },
        {
          "@attributes": {
            "city": "Ida Grove,US",
            "code": "IDG"
          }
        },
        {
          "@attributes": {
            "city": "Idaho Falls,US",
            "code": "IDA"
          }
        },
        {
          "@attributes": {
            "city": "Iejima,JP",
            "code": "IEJ"
          }
        },
        {
          "@attributes": {
            "city": "Igaliku,GL",
            "code": "QFX"
          }
        },
        {
          "@attributes": {
            "city": "Igarka,RU",
            "code": "IAA"
          }
        },
        {
          "@attributes": {
            "city": "Igdir,TR",
            "code": "IGD"
          }
        },
        {
          "@attributes": {
            "city": "Iginniarfik,GL",
            "code": "QFI"
          }
        },
        {
          "@attributes": {
            "city": "Igiugig,US",
            "code": "IGG"
          }
        },
        {
          "@attributes": {
            "city": "Igloolik,CA",
            "code": "YGT"
          }
        },
        {
          "@attributes": {
            "city": "Iguassu Falls,BR",
            "code": "IGU"
          }
        },
        {
          "@attributes": {
            "city": "Iguatu,BR",
            "code": "QIG"
          }
        },
        {
          "@attributes": {
            "city": "Iguazu,AR",
            "code": "IGR"
          }
        },
        {
          "@attributes": {
            "city": "Ihosy,MG",
            "code": "IHO"
          }
        },
        {
          "@attributes": {
            "city": "Ihu Pg,PG",
            "code": "IHU"
          }
        },
        {
          "@attributes": {
            "city": "Ikamiut,GL",
            "code": "QJI"
          }
        },
        {
          "@attributes": {
            "city": "Ikaria Island,GR",
            "code": "JIK"
          }
        },
        {
          "@attributes": {
            "city": "Ikerasaarsuk,GL",
            "code": "QRY"
          }
        },
        {
          "@attributes": {
            "city": "Iki Jp,JP",
            "code": "IKI"
          }
        },
        {
          "@attributes": {
            "city": "Ile D Yeu,FR",
            "code": "IDY"
          }
        },
        {
          "@attributes": {
            "city": "Ile Des Pins,NC",
            "code": "ILP"
          }
        },
        {
          "@attributes": {
            "city": "Iles De Madeleine,CA",
            "code": "YGR"
          }
        },
        {
          "@attributes": {
            "city": "Ilford,CA",
            "code": "ILF"
          }
        },
        {
          "@attributes": {
            "city": "Ilheus,BR",
            "code": "IOS"
          }
        },
        {
          "@attributes": {
            "city": "Iliamna,US",
            "code": "ILI"
          }
        },
        {
          "@attributes": {
            "city": "Illaga,ID",
            "code": "ILA"
          }
        },
        {
          "@attributes": {
            "city": "Illisheim,DE",
            "code": "ILH"
          }
        },
        {
          "@attributes": {
            "city": "Illizi,DZ",
            "code": "VVZ"
          }
        },
        {
          "@attributes": {
            "city": "Iloilo,PH",
            "code": "ILO"
          }
        },
        {
          "@attributes": {
            "city": "Ilorin,NG",
            "code": "ILR"
          }
        },
        {
          "@attributes": {
            "city": "Ilulissat,GL",
            "code": "JAV"
          }
        },
        {
          "@attributes": {
            "city": "Imonda,PG",
            "code": "IMD"
          }
        },
        {
          "@attributes": {
            "city": "Imperatriz,BR",
            "code": "IMP"
          }
        },
        {
          "@attributes": {
            "city": "Imperial Beach,US",
            "code": "NRS"
          }
        },
        {
          "@attributes": {
            "city": "Impfondo,CG",
            "code": "ION"
          }
        },
        {
          "@attributes": {
            "city": "Imphal,IN",
            "code": "IMF"
          }
        },
        {
          "@attributes": {
            "city": "In Amenas,DZ",
            "code": "IAM"
          }
        },
        {
          "@attributes": {
            "city": "In Salah,DZ",
            "code": "INZ"
          }
        },
        {
          "@attributes": {
            "city": "Inagua,BS",
            "code": "IGA"
          }
        },
        {
          "@attributes": {
            "city": "Incheon,KR",
            "code": "JCN"
          }
        },
        {
          "@attributes": {
            "city": "Indagen,PG",
            "code": "IDN"
          }
        },
        {
          "@attributes": {
            "city": "Independence,US",
            "code": "IDP"
          }
        },
        {
          "@attributes": {
            "city": "Independence,BZ",
            "code": "INB"
          }
        },
        {
          "@attributes": {
            "city": "Indiana,US",
            "code": "IDI"
          }
        },
        {
          "@attributes": {
            "city": "Indianapolis,US",
            "code": "IND"
          }
        },
        {
          "@attributes": {
            "city": "Indore,IN",
            "code": "IDR"
          }
        },
        {
          "@attributes": {
            "city": "Ingersoll,CA",
            "code": "XIB"
          }
        },
        {
          "@attributes": {
            "city": "Ingham,AU",
            "code": "IGH"
          }
        },
        {
          "@attributes": {
            "city": "Ingolstadt,DE",
            "code": "ZNQ"
          }
        },
        {
          "@attributes": {
            "city": "Ingolstadt Manching,DE",
            "code": "IGS"
          }
        },
        {
          "@attributes": {
            "city": "Inhambane,MZ",
            "code": "INH"
          }
        },
        {
          "@attributes": {
            "city": "Inisheer,IE",
            "code": "INQ"
          }
        },
        {
          "@attributes": {
            "city": "Inishmaan,IE",
            "code": "IIA"
          }
        },
        {
          "@attributes": {
            "city": "Inishmore,IE",
            "code": "IOR"
          }
        },
        {
          "@attributes": {
            "city": "Injune,AU",
            "code": "INJ"
          }
        },
        {
          "@attributes": {
            "city": "Inkerman,AU",
            "code": "IKP"
          }
        },
        {
          "@attributes": {
            "city": "Innamincka,AU",
            "code": "INM"
          }
        },
        {
          "@attributes": {
            "city": "Innarsuit,GL",
            "code": "IUI"
          }
        },
        {
          "@attributes": {
            "city": "Innsbruck,AT",
            "code": "INN"
          }
        },
        {
          "@attributes": {
            "city": "Inongo,CD",
            "code": "INO"
          }
        },
        {
          "@attributes": {
            "city": "Interlaken,CH",
            "code": "ZIN"
          }
        },
        {
          "@attributes": {
            "city": "International Falls,US",
            "code": "INL"
          }
        },
        {
          "@attributes": {
            "city": "Inukjuak,CA",
            "code": "YPH"
          }
        },
        {
          "@attributes": {
            "city": "Inuvik,CA",
            "code": "YEV"
          }
        },
        {
          "@attributes": {
            "city": "Invercargill,NZ",
            "code": "IVC"
          }
        },
        {
          "@attributes": {
            "city": "Inverell,AU",
            "code": "IVR"
          }
        },
        {
          "@attributes": {
            "city": "Inverness,GB",
            "code": "INV"
          }
        },
        {
          "@attributes": {
            "city": "Inyokern,US",
            "code": "IYK"
          }
        },
        {
          "@attributes": {
            "city": "Ioannina,GR",
            "code": "IOA"
          }
        },
        {
          "@attributes": {
            "city": "Iokea,PG",
            "code": "IOK"
          }
        },
        {
          "@attributes": {
            "city": "Ioma,PG",
            "code": "IOP"
          }
        },
        {
          "@attributes": {
            "city": "Iowa cities,US",
            "code": "IOW"
          }
        },
        {
          "@attributes": {
            "city": "Ipatinga,BR",
            "code": "IPN"
          }
        },
        {
          "@attributes": {
            "city": "Ipiales,CO",
            "code": "IPI"
          }
        },
        {
          "@attributes": {
            "city": "Ipiau,BR",
            "code": "IPU"
          }
        },
        {
          "@attributes": {
            "city": "Ipoh,MY",
            "code": "IPH"
          }
        },
        {
          "@attributes": {
            "city": "Ipota,VU",
            "code": "IPA"
          }
        },
        {
          "@attributes": {
            "city": "Ipswich,GB",
            "code": "IPW"
          }
        },
        {
          "@attributes": {
            "city": "Iqaluit,CA",
            "code": "YFB"
          }
        },
        {
          "@attributes": {
            "city": "Iquique,CL",
            "code": "IQQ"
          }
        },
        {
          "@attributes": {
            "city": "Iquitos,PE",
            "code": "IQT"
          }
        },
        {
          "@attributes": {
            "city": "Irece,BR",
            "code": "IRE"
          }
        },
        {
          "@attributes": {
            "city": "Iringa,TZ",
            "code": "IRI"
          }
        },
        {
          "@attributes": {
            "city": "Irkutsk,RU",
            "code": "IKT"
          }
        },
        {
          "@attributes": {
            "city": "Iron Mountain,US",
            "code": "IMT"
          }
        },
        {
          "@attributes": {
            "city": "Ironwood,US",
            "code": "IWD"
          }
        },
        {
          "@attributes": {
            "city": "Isabel Pass,US",
            "code": "ISL"
          }
        },
        {
          "@attributes": {
            "city": "Isafjordur,IS",
            "code": "IFJ"
          }
        },
        {
          "@attributes": {
            "city": "Ischia,IT",
            "code": "ISH"
          }
        },
        {
          "@attributes": {
            "city": "Iserlohn,DE",
            "code": "ZNR"
          }
        },
        {
          "@attributes": {
            "city": "Isfahan,IR",
            "code": "IFN"
          }
        },
        {
          "@attributes": {
            "city": "Ishigaki,JP",
            "code": "ISG"
          }
        },
        {
          "@attributes": {
            "city": "Isiro,CD",
            "code": "IRP"
          }
        },
        {
          "@attributes": {
            "city": "Isla Grande,US",
            "code": "SIG"
          }
        },
        {
          "@attributes": {
            "city": "Isla Mujeres,MX",
            "code": "ISJ"
          }
        },
        {
          "@attributes": {
            "city": "Islamabad,PK",
            "code": "ISB"
          }
        },
        {
          "@attributes": {
            "city": "Islay,GB",
            "code": "ILY"
          }
        },
        {
          "@attributes": {
            "city": "Isle Of Man,GB",
            "code": "IOM"
          }
        },
        {
          "@attributes": {
            "city": "Isle Of Skye Hebrides Islands,GB",
            "code": "SKL"
          }
        },
        {
          "@attributes": {
            "city": "Isles Of Scilly,GB",
            "code": "ISC"
          }
        },
        {
          "@attributes": {
            "city": "Islip,US",
            "code": "ISP"
          }
        },
        {
          "@attributes": {
            "city": "Ismailiya,EG",
            "code": "QIV"
          }
        },
        {
          "@attributes": {
            "city": "Isparta,TR",
            "code": "ISE"
          }
        },
        {
          "@attributes": {
            "city": "Istanbul,TR",
            "code": "IST"
          }
        },
        {
          "@attributes": {
            "city": "Istres,FR",
            "code": "QIE"
          }
        },
        {
          "@attributes": {
            "city": "Itabuna,BR",
            "code": "ITN"
          }
        },
        {
          "@attributes": {
            "city": "Itaituba,BR",
            "code": "ITB"
          }
        },
        {
          "@attributes": {
            "city": "Itajai,BR",
            "code": "ITJ"
          }
        },
        {
          "@attributes": {
            "city": "Itaperuna,BR",
            "code": "ITP"
          }
        },
        {
          "@attributes": {
            "city": "Itapetininga,BR",
            "code": "ZTP"
          }
        },
        {
          "@attributes": {
            "city": "Itauna,BR",
            "code": "QIA"
          }
        },
        {
          "@attributes": {
            "city": "Ithaca,US",
            "code": "ITH"
          }
        },
        {
          "@attributes": {
            "city": "Itilleq,GL",
            "code": "QJG"
          }
        },
        {
          "@attributes": {
            "city": "Itokama,PG",
            "code": "ITK"
          }
        },
        {
          "@attributes": {
            "city": "Ittoqqortoormiit,GL",
            "code": "OBY"
          }
        },
        {
          "@attributes": {
            "city": "Itu BR,BR",
            "code": "QTU"
          }
        },
        {
          "@attributes": {
            "city": "Itumbiara,BR",
            "code": "ITR"
          }
        },
        {
          "@attributes": {
            "city": "Iturup Island,RU",
            "code": "BVV"
          }
        },
        {
          "@attributes": {
            "city": "Ivalo,FI",
            "code": "IVL"
          }
        },
        {
          "@attributes": {
            "city": "Ivano Frankovsk,UA",
            "code": "IFO"
          }
        },
        {
          "@attributes": {
            "city": "Ivanof Bay,US",
            "code": "KIB"
          }
        },
        {
          "@attributes": {
            "city": "Ivanovo,RU",
            "code": "IWA"
          }
        },
        {
          "@attributes": {
            "city": "Ivujivik,CA",
            "code": "YIK"
          }
        },
        {
          "@attributes": {
            "city": "Iwakuni,JP",
            "code": "IWK"
          }
        },
        {
          "@attributes": {
            "city": "Iwami,JP",
            "code": "IWJ"
          }
        },
        {
          "@attributes": {
            "city": "Ixtepec,MX",
            "code": "IZT"
          }
        },
        {
          "@attributes": {
            "city": "Izhevsk,RU",
            "code": "IJK"
          }
        },
        {
          "@attributes": {
            "city": "Izmir,TR",
            "code": "IZM"
          }
        },
        {
          "@attributes": {
            "city": "Izmit,TR",
            "code": "QST"
          }
        },
        {
          "@attributes": {
            "city": "Izumo,JP",
            "code": "IZO"
          }
        },
        {
          "@attributes": {
            "city": "JINING,CN",
            "code": "JNG"
          }
        },
        {
          "@attributes": {
            "city": "Jabalpur,IN",
            "code": "JLR"
          }
        },
        {
          "@attributes": {
            "city": "Jabiru,AU",
            "code": "JAB"
          }
        },
        {
          "@attributes": {
            "city": "Jackpot,US",
            "code": "KPT"
          }
        },
        {
          "@attributes": {
            "city": "Jackson,US",
            "code": "MKL"
          }
        },
        {
          "@attributes": {
            "city": "Jackson,US",
            "code": "JAC"
          }
        },
        {
          "@attributes": {
            "city": "Jackson,US",
            "code": "JAN"
          }
        },
        {
          "@attributes": {
            "city": "Jackson,US",
            "code": "JXN"
          }
        },
        {
          "@attributes": {
            "city": "Jacksonville,US",
            "code": "LRF"
          }
        },
        {
          "@attributes": {
            "city": "Jacksonville,US",
            "code": "OAJ"
          }
        },
        {
          "@attributes": {
            "city": "Jacksonville,US",
            "code": "IJX"
          }
        },
        {
          "@attributes": {
            "city": "Jacksonville,US",
            "code": "JAX"
          }
        },
        {
          "@attributes": {
            "city": "Jacksonville,US",
            "code": "JKV"
          }
        },
        {
          "@attributes": {
            "city": "Jacobabad,PK",
            "code": "JAG"
          }
        },
        {
          "@attributes": {
            "city": "Jacquinot,PG",
            "code": "JAQ"
          }
        },
        {
          "@attributes": {
            "city": "Jaen,ES",
            "code": "JEA"
          }
        },
        {
          "@attributes": {
            "city": "Jaffna,LK",
            "code": "JAF"
          }
        },
        {
          "@attributes": {
            "city": "Jagdalpur,IN",
            "code": "JGB"
          }
        },
        {
          "@attributes": {
            "city": "Jaguaruna,BR",
            "code": "JJG"
          }
        },
        {
          "@attributes": {
            "city": "Jaipur,IN",
            "code": "JAI"
          }
        },
        {
          "@attributes": {
            "city": "Jaisalmer,IN",
            "code": "JSA"
          }
        },
        {
          "@attributes": {
            "city": "Jakarta,ID",
            "code": "JKT"
          }
        },
        {
          "@attributes": {
            "city": "Jalandhar,IN",
            "code": "QJU"
          }
        },
        {
          "@attributes": {
            "city": "Jalapa,MX",
            "code": "JAL"
          }
        },
        {
          "@attributes": {
            "city": "Jambi,ID",
            "code": "DJB"
          }
        },
        {
          "@attributes": {
            "city": "Jamestown,US",
            "code": "JHW"
          }
        },
        {
          "@attributes": {
            "city": "Jamestown,US",
            "code": "JMS"
          }
        },
        {
          "@attributes": {
            "city": "Jammu,IN",
            "code": "IXJ"
          }
        },
        {
          "@attributes": {
            "city": "Jamnagar,IN",
            "code": "JGA"
          }
        },
        {
          "@attributes": {
            "city": "Jamshedpur,IN",
            "code": "IXW"
          }
        },
        {
          "@attributes": {
            "city": "Janakpur,NP",
            "code": "JKR"
          }
        },
        {
          "@attributes": {
            "city": "Jandakot,AU",
            "code": "JAD"
          }
        },
        {
          "@attributes": {
            "city": "Jaragua Do Sul,BR",
            "code": "QJA"
          }
        },
        {
          "@attributes": {
            "city": "Jasper,CA",
            "code": "YJA"
          }
        },
        {
          "@attributes": {
            "city": "Jatai,BR",
            "code": "JTI"
          }
        },
        {
          "@attributes": {
            "city": "Jauja,PE",
            "code": "JAU"
          }
        },
        {
          "@attributes": {
            "city": "Jayapura,ID",
            "code": "DJJ"
          }
        },
        {
          "@attributes": {
            "city": "Jeddah,SA",
            "code": "JED"
          }
        },
        {
          "@attributes": {
            "city": "Jefferson cities,US",
            "code": "JEF"
          }
        },
        {
          "@attributes": {
            "city": "Jeju cities,KR",
            "code": "CJU"
          }
        },
        {
          "@attributes": {
            "city": "Jember,ID",
            "code": "JBB"
          }
        },
        {
          "@attributes": {
            "city": "Jena,DE",
            "code": "ZJS"
          }
        },
        {
          "@attributes": {
            "city": "Jerez De La Frontera,ES",
            "code": "XRY"
          }
        },
        {
          "@attributes": {
            "city": "Jersey,GB",
            "code": "JER"
          }
        },
        {
          "@attributes": {
            "city": "Jerusalem,IL",
            "code": "JRS"
          }
        },
        {
          "@attributes": {
            "city": "Jesolo,IT",
            "code": "JLO"
          }
        },
        {
          "@attributes": {
            "city": "Jessore,BD",
            "code": "JSR"
          }
        },
        {
          "@attributes": {
            "city": "Ji Parana,BR",
            "code": "JPR"
          }
        },
        {
          "@attributes": {
            "city": "Jia Ge Da Qi,CN",
            "code": "JGD"
          }
        },
        {
          "@attributes": {
            "city": "Jiamusi,CN",
            "code": "JMU"
          }
        },
        {
          "@attributes": {
            "city": "Jian,CN",
            "code": "JGS"
          }
        },
        {
          "@attributes": {
            "city": "Jiang Men,CN",
            "code": "ZBD"
          }
        },
        {
          "@attributes": {
            "city": "Jiaxing,CN",
            "code": "JXS"
          }
        },
        {
          "@attributes": {
            "city": "Jiayuguan,CN",
            "code": "JGN"
          }
        },
        {
          "@attributes": {
            "city": "Jijel,DZ",
            "code": "GJL"
          }
        },
        {
          "@attributes": {
            "city": "Jijiga,ET",
            "code": "JIJ"
          }
        },
        {
          "@attributes": {
            "city": "Jilin,CN",
            "code": "JIL"
          }
        },
        {
          "@attributes": {
            "city": "Jimma,ET",
            "code": "JIM"
          }
        },
        {
          "@attributes": {
            "city": "Jinan,CN",
            "code": "TNA"
          }
        },
        {
          "@attributes": {
            "city": "Jinchang,CN",
            "code": "JIC"
          }
        },
        {
          "@attributes": {
            "city": "Jingdezhen,CN",
            "code": "JDZ"
          }
        },
        {
          "@attributes": {
            "city": "Jinghong,CN",
            "code": "JHG"
          }
        },
        {
          "@attributes": {
            "city": "Jingzhou,CN",
            "code": "EJJ"
          }
        },
        {
          "@attributes": {
            "city": "Jinjiang,CN",
            "code": "JJN"
          }
        },
        {
          "@attributes": {
            "city": "Jinzhou,CN",
            "code": "JNZ"
          }
        },
        {
          "@attributes": {
            "city": "Jiujiang,CN",
            "code": "JIU"
          }
        },
        {
          "@attributes": {
            "city": "Jiwani,PK",
            "code": "JIW"
          }
        },
        {
          "@attributes": {
            "city": "Jixi,CN",
            "code": "JXA"
          }
        },
        {
          "@attributes": {
            "city": "Joacaba,BR",
            "code": "JCB"
          }
        },
        {
          "@attributes": {
            "city": "Joao Pessoa,BR",
            "code": "JPA"
          }
        },
        {
          "@attributes": {
            "city": "Jodhpur,IN",
            "code": "JDH"
          }
        },
        {
          "@attributes": {
            "city": "Joensuu,FI",
            "code": "JOE"
          }
        },
        {
          "@attributes": {
            "city": "Johannesburg,ZA",
            "code": "JNB"
          }
        },
        {
          "@attributes": {
            "city": "Johnston Island,UM",
            "code": "JON"
          }
        },
        {
          "@attributes": {
            "city": "Johnstown,US",
            "code": "JST"
          }
        },
        {
          "@attributes": {
            "city": "Johor Bahru,MY",
            "code": "JHB"
          }
        },
        {
          "@attributes": {
            "city": "Joinville,BR",
            "code": "JOI"
          }
        },
        {
          "@attributes": {
            "city": "Joliet,US",
            "code": "JOT"
          }
        },
        {
          "@attributes": {
            "city": "Joliette,CA",
            "code": "XJL"
          }
        },
        {
          "@attributes": {
            "city": "Jolo,PH",
            "code": "JOL"
          }
        },
        {
          "@attributes": {
            "city": "Jolon,US",
            "code": "HGT"
          }
        },
        {
          "@attributes": {
            "city": "Jonesboro,US",
            "code": "JBR"
          }
        },
        {
          "@attributes": {
            "city": "Jonkoping,SE",
            "code": "JKG"
          }
        },
        {
          "@attributes": {
            "city": "Jonquiere,CA",
            "code": "XJQ"
          }
        },
        {
          "@attributes": {
            "city": "Joplin,US",
            "code": "JLN"
          }
        },
        {
          "@attributes": {
            "city": "Jorhat,IN",
            "code": "JRH"
          }
        },
        {
          "@attributes": {
            "city": "Jos NG,NG",
            "code": "JOS"
          }
        },
        {
          "@attributes": {
            "city": "Jose De San Martin,AR",
            "code": "JSM"
          }
        },
        {
          "@attributes": {
            "city": "Jounieh,LB",
            "code": "QJN"
          }
        },
        {
          "@attributes": {
            "city": "Juan Les Pins,FR",
            "code": "JLP"
          }
        },
        {
          "@attributes": {
            "city": "Juanjui,PE",
            "code": "JJI"
          }
        },
        {
          "@attributes": {
            "city": "Juara,BR",
            "code": "JUA"
          }
        },
        {
          "@attributes": {
            "city": "Juazeiro Do Norte,BR",
            "code": "JDO"
          }
        },
        {
          "@attributes": {
            "city": "Juba,SS",
            "code": "JUB"
          }
        },
        {
          "@attributes": {
            "city": "Jubail,SA",
            "code": "QJB"
          }
        },
        {
          "@attributes": {
            "city": "Juchitan,MX",
            "code": "JUW"
          }
        },
        {
          "@attributes": {
            "city": "Juist,DE",
            "code": "JUI"
          }
        },
        {
          "@attributes": {
            "city": "Juiz De Fora,BR",
            "code": "JDF"
          }
        },
        {
          "@attributes": {
            "city": "Jujuy,AR",
            "code": "JUJ"
          }
        },
        {
          "@attributes": {
            "city": "Julia Creek,AU",
            "code": "JCK"
          }
        },
        {
          "@attributes": {
            "city": "Juliaca,PE",
            "code": "JUL"
          }
        },
        {
          "@attributes": {
            "city": "Jundiai,BR",
            "code": "QDV"
          }
        },
        {
          "@attributes": {
            "city": "Juneau,US",
            "code": "JNU"
          }
        },
        {
          "@attributes": {
            "city": "Jurado,CO",
            "code": "JUO"
          }
        },
        {
          "@attributes": {
            "city": "Juzhou,CN",
            "code": "JUZ"
          }
        },
        {
          "@attributes": {
            "city": "Jwaneng,BW",
            "code": "JWA"
          }
        },
        {
          "@attributes": {
            "city": "Jyvaskyla,FI",
            "code": "JYV"
          }
        },
        {
          "@attributes": {
            "city": "KITZBUEHEL,AT",
            "code": "XOH"
          }
        },
        {
          "@attributes": {
            "city": "KOMATIPOORT,ZA",
            "code": "KOF"
          }
        },
        {
          "@attributes": {
            "city": "KONGSBERG,NO",
            "code": "XKB"
          }
        },
        {
          "@attributes": {
            "city": "Kabala,SL",
            "code": "KBA"
          }
        },
        {
          "@attributes": {
            "city": "Kabri Dar,ET",
            "code": "ABK"
          }
        },
        {
          "@attributes": {
            "city": "Kabul,AF",
            "code": "KBL"
          }
        },
        {
          "@attributes": {
            "city": "Kabwum,PG",
            "code": "KBM"
          }
        },
        {
          "@attributes": {
            "city": "Kadhdhoo Island,MV",
            "code": "KDO"
          }
        },
        {
          "@attributes": {
            "city": "Kaduna,NG",
            "code": "KAD"
          }
        },
        {
          "@attributes": {
            "city": "Kaedi,MR",
            "code": "KED"
          }
        },
        {
          "@attributes": {
            "city": "Kagi,PG",
            "code": "KGW"
          }
        },
        {
          "@attributes": {
            "city": "Kagoshima,JP",
            "code": "KOJ"
          }
        },
        {
          "@attributes": {
            "city": "Kahramanmaras,TR",
            "code": "KCM"
          }
        },
        {
          "@attributes": {
            "city": "Kahului,US",
            "code": "OGG"
          }
        },
        {
          "@attributes": {
            "city": "Kaikoura,NZ",
            "code": "KBZ"
          }
        },
        {
          "@attributes": {
            "city": "Kailashahar,IN",
            "code": "IXH"
          }
        },
        {
          "@attributes": {
            "city": "Kaili,CN",
            "code": "KJH"
          }
        },
        {
          "@attributes": {
            "city": "Kaintiba,PG",
            "code": "KZF"
          }
        },
        {
          "@attributes": {
            "city": "Kairouan,TN",
            "code": "QKN"
          }
        },
        {
          "@attributes": {
            "city": "Kaiserslautern,DE",
            "code": "KLT"
          }
        },
        {
          "@attributes": {
            "city": "Kaitaia,NZ",
            "code": "KAT"
          }
        },
        {
          "@attributes": {
            "city": "Kajaani,FI",
            "code": "KAJ"
          }
        },
        {
          "@attributes": {
            "city": "Kakamega,KE",
            "code": "GGM"
          }
        },
        {
          "@attributes": {
            "city": "Kake,US",
            "code": "KAE"
          }
        },
        {
          "@attributes": {
            "city": "Kakhonak,US",
            "code": "KNK"
          }
        },
        {
          "@attributes": {
            "city": "Kalakaket,US",
            "code": "KKK"
          }
        },
        {
          "@attributes": {
            "city": "Kalamata,GR",
            "code": "KLX"
          }
        },
        {
          "@attributes": {
            "city": "Kalamazoo,US",
            "code": "AZO"
          }
        },
        {
          "@attributes": {
            "city": "Kalaupapa,US",
            "code": "LUP"
          }
        },
        {
          "@attributes": {
            "city": "Kalbarri,AU",
            "code": "KAX"
          }
        },
        {
          "@attributes": {
            "city": "Kalemie,CD",
            "code": "FMI"
          }
        },
        {
          "@attributes": {
            "city": "Kalemyo,MM",
            "code": "KMV"
          }
        },
        {
          "@attributes": {
            "city": "Kalgoorlie,AU",
            "code": "KGI"
          }
        },
        {
          "@attributes": {
            "city": "Kalibo,PH",
            "code": "KLO"
          }
        },
        {
          "@attributes": {
            "city": "Kaliningrad,RU",
            "code": "KGD"
          }
        },
        {
          "@attributes": {
            "city": "Kalispell,US",
            "code": "FCA"
          }
        },
        {
          "@attributes": {
            "city": "Kalmar,SE",
            "code": "KLR"
          }
        },
        {
          "@attributes": {
            "city": "Kalskag,US",
            "code": "KLG"
          }
        },
        {
          "@attributes": {
            "city": "Kaltag,US",
            "code": "KAL"
          }
        },
        {
          "@attributes": {
            "city": "Kaluga,RU",
            "code": "KLF"
          }
        },
        {
          "@attributes": {
            "city": "Kalymnos Island,GR",
            "code": "JKL"
          }
        },
        {
          "@attributes": {
            "city": "Kamalpur,IN",
            "code": "IXQ"
          }
        },
        {
          "@attributes": {
            "city": "Kameshli,SY",
            "code": "KAC"
          }
        },
        {
          "@attributes": {
            "city": "Kamina,PG",
            "code": "KMF"
          }
        },
        {
          "@attributes": {
            "city": "Kamloops,CA",
            "code": "YKA"
          }
        },
        {
          "@attributes": {
            "city": "Kampong Thom,KH",
            "code": "KZK"
          }
        },
        {
          "@attributes": {
            "city": "Kampot,KH",
            "code": "KMT"
          }
        },
        {
          "@attributes": {
            "city": "Kamuela,US",
            "code": "MUE"
          }
        },
        {
          "@attributes": {
            "city": "Kamur,ID",
            "code": "KCD"
          }
        },
        {
          "@attributes": {
            "city": "Kanab,US",
            "code": "KNB"
          }
        },
        {
          "@attributes": {
            "city": "Kanabea,PG",
            "code": "KEX"
          }
        },
        {
          "@attributes": {
            "city": "Kananga,CD",
            "code": "KGA"
          }
        },
        {
          "@attributes": {
            "city": "Kanazawa,JP",
            "code": "QKW"
          }
        },
        {
          "@attributes": {
            "city": "Kandahar,AF",
            "code": "KDH"
          }
        },
        {
          "@attributes": {
            "city": "Kandavu,FJ",
            "code": "KDV"
          }
        },
        {
          "@attributes": {
            "city": "Kandersteg,CH",
            "code": "ZHR"
          }
        },
        {
          "@attributes": {
            "city": "Kandla,IN",
            "code": "IXY"
          }
        },
        {
          "@attributes": {
            "city": "Kandrian,PG",
            "code": "KDR"
          }
        },
        {
          "@attributes": {
            "city": "Kandy,LK",
            "code": "KDW"
          }
        },
        {
          "@attributes": {
            "city": "Kandy Polgolla Reservoir,LK",
            "code": "KDZ"
          }
        },
        {
          "@attributes": {
            "city": "Kangaamiut,GL",
            "code": "QKT"
          }
        },
        {
          "@attributes": {
            "city": "Kangaatsiaq,GL",
            "code": "QPW"
          }
        },
        {
          "@attributes": {
            "city": "Kangding,CN",
            "code": "KGT"
          }
        },
        {
          "@attributes": {
            "city": "Kangerluk,GL",
            "code": "QGR"
          }
        },
        {
          "@attributes": {
            "city": "Kangerlussuaq,GL",
            "code": "SFJ"
          }
        },
        {
          "@attributes": {
            "city": "Kangersuatsiaq,GL",
            "code": "KGQ"
          }
        },
        {
          "@attributes": {
            "city": "Kangiqsualujjuaq,CA",
            "code": "XGR"
          }
        },
        {
          "@attributes": {
            "city": "Kangiqsujuaq,CA",
            "code": "YWB"
          }
        },
        {
          "@attributes": {
            "city": "Kangirsuk,CA",
            "code": "YKG"
          }
        },
        {
          "@attributes": {
            "city": "Kankakee,US",
            "code": "IKK"
          }
        },
        {
          "@attributes": {
            "city": "Kano,NG",
            "code": "KAN"
          }
        },
        {
          "@attributes": {
            "city": "Kanpur,IN",
            "code": "KNU"
          }
        },
        {
          "@attributes": {
            "city": "Kansas cities,US",
            "code": "MKC"
          }
        },
        {
          "@attributes": {
            "city": "Kaohsiung,TW",
            "code": "KHH"
          }
        },
        {
          "@attributes": {
            "city": "Kaolack,SN",
            "code": "KLC"
          }
        },
        {
          "@attributes": {
            "city": "Kapalua,US",
            "code": "JHM"
          }
        },
        {
          "@attributes": {
            "city": "Kapit,MY",
            "code": "KPI"
          }
        },
        {
          "@attributes": {
            "city": "Kapolei,US",
            "code": "JRF"
          }
        },
        {
          "@attributes": {
            "city": "Kapuskasing,CA",
            "code": "YYU"
          }
        },
        {
          "@attributes": {
            "city": "Karachi,PK",
            "code": "KHI"
          }
        },
        {
          "@attributes": {
            "city": "Karaganda,KZ",
            "code": "KGF"
          }
        },
        {
          "@attributes": {
            "city": "Karamay,CN",
            "code": "KRY"
          }
        },
        {
          "@attributes": {
            "city": "Karawari,PG",
            "code": "KRJ"
          }
        },
        {
          "@attributes": {
            "city": "Kariba Dam,ZW",
            "code": "KAB"
          }
        },
        {
          "@attributes": {
            "city": "Karimui,PG",
            "code": "KMR"
          }
        },
        {
          "@attributes": {
            "city": "Karimunjawa,ID",
            "code": "KWB"
          }
        },
        {
          "@attributes": {
            "city": "Karkar,PG",
            "code": "KRX"
          }
        },
        {
          "@attributes": {
            "city": "Karlovy Vary,CZ",
            "code": "KLV"
          }
        },
        {
          "@attributes": {
            "city": "Karlshamn,SE",
            "code": "XYO"
          }
        },
        {
          "@attributes": {
            "city": "Karlskoga,SE",
            "code": "KSK"
          }
        },
        {
          "@attributes": {
            "city": "Karlsruhe Baden Baden,DE",
            "code": "FKB"
          }
        },
        {
          "@attributes": {
            "city": "Karlstad,SE",
            "code": "KSD"
          }
        },
        {
          "@attributes": {
            "city": "Karluk,US",
            "code": "KYK"
          }
        },
        {
          "@attributes": {
            "city": "Karluk Lake,US",
            "code": "KKL"
          }
        },
        {
          "@attributes": {
            "city": "Karonga,MW",
            "code": "KGJ"
          }
        },
        {
          "@attributes": {
            "city": "Karoola,PG",
            "code": "KXR"
          }
        },
        {
          "@attributes": {
            "city": "Karpathos,GR",
            "code": "AOK"
          }
        },
        {
          "@attributes": {
            "city": "Karratha,AU",
            "code": "KTA"
          }
        },
        {
          "@attributes": {
            "city": "Kars,TR",
            "code": "KSY"
          }
        },
        {
          "@attributes": {
            "city": "Karshi,UZ",
            "code": "KSQ"
          }
        },
        {
          "@attributes": {
            "city": "Karumba,AU",
            "code": "KRB"
          }
        },
        {
          "@attributes": {
            "city": "Karup,DK",
            "code": "KRP"
          }
        },
        {
          "@attributes": {
            "city": "Kasaan,US",
            "code": "KXA"
          }
        },
        {
          "@attributes": {
            "city": "Kasaba Bay,ZM",
            "code": "ZKB"
          }
        },
        {
          "@attributes": {
            "city": "Kasabonika Lake,CA",
            "code": "XKS"
          }
        },
        {
          "@attributes": {
            "city": "Kasane,BW",
            "code": "BBK"
          }
        },
        {
          "@attributes": {
            "city": "Kasese,UG",
            "code": "KSE"
          }
        },
        {
          "@attributes": {
            "city": "Kashechewan,CA",
            "code": "ZKE"
          }
        },
        {
          "@attributes": {
            "city": "Kashi,CN",
            "code": "KHG"
          }
        },
        {
          "@attributes": {
            "city": "Kasigluk,US",
            "code": "KUK"
          }
        },
        {
          "@attributes": {
            "city": "Kasos Island,GR",
            "code": "KSJ"
          }
        },
        {
          "@attributes": {
            "city": "Kassala,SD",
            "code": "KSL"
          }
        },
        {
          "@attributes": {
            "city": "Kassel,DE",
            "code": "KSF"
          }
        },
        {
          "@attributes": {
            "city": "Kastamonu,TR",
            "code": "KFS"
          }
        },
        {
          "@attributes": {
            "city": "Kastelorizo,GR",
            "code": "KZS"
          }
        },
        {
          "@attributes": {
            "city": "Kastoria,GR",
            "code": "KSO"
          }
        },
        {
          "@attributes": {
            "city": "Katherine,AU",
            "code": "KTR"
          }
        },
        {
          "@attributes": {
            "city": "Kathmandu,NP",
            "code": "KTM"
          }
        },
        {
          "@attributes": {
            "city": "Katowice,PL",
            "code": "KTW"
          }
        },
        {
          "@attributes": {
            "city": "Katrineholm,SE",
            "code": "XXK"
          }
        },
        {
          "@attributes": {
            "city": "Katsina,NG",
            "code": "DKA"
          }
        },
        {
          "@attributes": {
            "city": "Kaubang,ID",
            "code": "KAZ"
          }
        },
        {
          "@attributes": {
            "city": "Kauehi,PF",
            "code": "KHZ"
          }
        },
        {
          "@attributes": {
            "city": "Kaukura,PF",
            "code": "KKR"
          }
        },
        {
          "@attributes": {
            "city": "Kaunas,LT",
            "code": "KUN"
          }
        },
        {
          "@attributes": {
            "city": "Kavalla,GR",
            "code": "KVA"
          }
        },
        {
          "@attributes": {
            "city": "Kavieng,PG",
            "code": "KVG"
          }
        },
        {
          "@attributes": {
            "city": "Kawthaung,MM",
            "code": "KAW"
          }
        },
        {
          "@attributes": {
            "city": "Kayseri,TR",
            "code": "ASR"
          }
        },
        {
          "@attributes": {
            "city": "Kazama,ZM",
            "code": "KAA"
          }
        },
        {
          "@attributes": {
            "city": "Kazan,RU",
            "code": "KZN"
          }
        },
        {
          "@attributes": {
            "city": "Kearney,US",
            "code": "EAR"
          }
        },
        {
          "@attributes": {
            "city": "Kebar,ID",
            "code": "KEQ"
          }
        },
        {
          "@attributes": {
            "city": "Kedougou,SN",
            "code": "KGG"
          }
        },
        {
          "@attributes": {
            "city": "Keene,US",
            "code": "EEN"
          }
        },
        {
          "@attributes": {
            "city": "Keetmanshoop,ZA",
            "code": "KMP"
          }
        },
        {
          "@attributes": {
            "city": "Kefalonia,GR",
            "code": "EFL"
          }
        },
        {
          "@attributes": {
            "city": "Kegaska,CA",
            "code": "ZKG"
          }
        },
        {
          "@attributes": {
            "city": "Kehl,DE",
            "code": "ZIW"
          }
        },
        {
          "@attributes": {
            "city": "Kelafo,ET",
            "code": "LFO"
          }
        },
        {
          "@attributes": {
            "city": "Kelle,CG",
            "code": "KEE"
          }
        },
        {
          "@attributes": {
            "city": "Kelowna,CA",
            "code": "YLW"
          }
        },
        {
          "@attributes": {
            "city": "Kelp Bay,US",
            "code": "KLP"
          }
        },
        {
          "@attributes": {
            "city": "Kelso,US",
            "code": "KLS"
          }
        },
        {
          "@attributes": {
            "city": "Kelsterbach,DE",
            "code": "QLH"
          }
        },
        {
          "@attributes": {
            "city": "Kemerovo,RU",
            "code": "KEJ"
          }
        },
        {
          "@attributes": {
            "city": "Kemi,FI",
            "code": "KEM"
          }
        },
        {
          "@attributes": {
            "city": "Kempsey,AU",
            "code": "KPS"
          }
        },
        {
          "@attributes": {
            "city": "Kempten,DE",
            "code": "ZNS"
          }
        },
        {
          "@attributes": {
            "city": "Kenai,US",
            "code": "ENA"
          }
        },
        {
          "@attributes": {
            "city": "Kendari,ID",
            "code": "KDI"
          }
        },
        {
          "@attributes": {
            "city": "Kenema,SL",
            "code": "KEN"
          }
        },
        {
          "@attributes": {
            "city": "Kengtung,MM",
            "code": "KET"
          }
        },
        {
          "@attributes": {
            "city": "Kenieba,ML",
            "code": "KNZ"
          }
        },
        {
          "@attributes": {
            "city": "Kennett,US",
            "code": "KNT"
          }
        },
        {
          "@attributes": {
            "city": "Kennosao Lake,CA",
            "code": "YKI"
          }
        },
        {
          "@attributes": {
            "city": "Kenora,CA",
            "code": "YQK"
          }
        },
        {
          "@attributes": {
            "city": "Kenosha,US",
            "code": "ENW"
          }
        },
        {
          "@attributes": {
            "city": "Kentland,US",
            "code": "KKT"
          }
        },
        {
          "@attributes": {
            "city": "Keokuk,US",
            "code": "EOK"
          }
        },
        {
          "@attributes": {
            "city": "Keperveyem,RU",
            "code": "KPW"
          }
        },
        {
          "@attributes": {
            "city": "Kepi,ID",
            "code": "KEI"
          }
        },
        {
          "@attributes": {
            "city": "Kerang,AU",
            "code": "KRA"
          }
        },
        {
          "@attributes": {
            "city": "Kerau,PG",
            "code": "KRU"
          }
        },
        {
          "@attributes": {
            "city": "Kerch,UA",
            "code": "KHC"
          }
        },
        {
          "@attributes": {
            "city": "Kerema,PG",
            "code": "KMA"
          }
        },
        {
          "@attributes": {
            "city": "Kericho,KE",
            "code": "KEY"
          }
        },
        {
          "@attributes": {
            "city": "Kerikeri,NZ",
            "code": "KKE"
          }
        },
        {
          "@attributes": {
            "city": "Kerinci,ID",
            "code": "KRC"
          }
        },
        {
          "@attributes": {
            "city": "Kerkyra,GR",
            "code": "CFU"
          }
        },
        {
          "@attributes": {
            "city": "Kerman,IR",
            "code": "KER"
          }
        },
        {
          "@attributes": {
            "city": "Kermanshah,IR",
            "code": "KSH"
          }
        },
        {
          "@attributes": {
            "city": "Kerpen,DE",
            "code": "ZNT"
          }
        },
        {
          "@attributes": {
            "city": "Kerrville,US",
            "code": "ERV"
          }
        },
        {
          "@attributes": {
            "city": "Kerry County,IE",
            "code": "KIR"
          }
        },
        {
          "@attributes": {
            "city": "Kerteh,MY",
            "code": "KTE"
          }
        },
        {
          "@attributes": {
            "city": "Keshod,IN",
            "code": "IXK"
          }
        },
        {
          "@attributes": {
            "city": "Ketapang,ID",
            "code": "KTG"
          }
        },
        {
          "@attributes": {
            "city": "Ketchikan,US",
            "code": "KTN"
          }
        },
        {
          "@attributes": {
            "city": "Key Largo,US",
            "code": "KYL"
          }
        },
        {
          "@attributes": {
            "city": "Key West,US",
            "code": "EYW"
          }
        },
        {
          "@attributes": {
            "city": "Keystone,US",
            "code": "QKS"
          }
        },
        {
          "@attributes": {
            "city": "Khabarovsk,RU",
            "code": "KHV"
          }
        },
        {
          "@attributes": {
            "city": "Khajuraho,IN",
            "code": "HJR"
          }
        },
        {
          "@attributes": {
            "city": "Khamis Mushait,SA",
            "code": "KMX"
          }
        },
        {
          "@attributes": {
            "city": "Khandyga,RU",
            "code": "KDY"
          }
        },
        {
          "@attributes": {
            "city": "Khanty Mansiysk,RU",
            "code": "HMA"
          }
        },
        {
          "@attributes": {
            "city": "Kharga,EG",
            "code": "UVL"
          }
        },
        {
          "@attributes": {
            "city": "Kharkov,UA",
            "code": "HRK"
          }
        },
        {
          "@attributes": {
            "city": "Khartoum,SD",
            "code": "KRT"
          }
        },
        {
          "@attributes": {
            "city": "Khasab,OM",
            "code": "KHS"
          }
        },
        {
          "@attributes": {
            "city": "Kherson,UA",
            "code": "KHE"
          }
        },
        {
          "@attributes": {
            "city": "Khon Kaen,TH",
            "code": "KKC"
          }
        },
        {
          "@attributes": {
            "city": "Khonuu,RU",
            "code": "MQJ"
          }
        },
        {
          "@attributes": {
            "city": "Khorramabad,IR",
            "code": "KHD"
          }
        },
        {
          "@attributes": {
            "city": "Khoy,IR",
            "code": "KHY"
          }
        },
        {
          "@attributes": {
            "city": "Khujand,TJ",
            "code": "LBD"
          }
        },
        {
          "@attributes": {
            "city": "Kiana,US",
            "code": "IAN"
          }
        },
        {
          "@attributes": {
            "city": "Kiel,DE",
            "code": "KEL"
          }
        },
        {
          "@attributes": {
            "city": "Kielce,PL",
            "code": "QKI"
          }
        },
        {
          "@attributes": {
            "city": "Kieta,PG",
            "code": "KIE"
          }
        },
        {
          "@attributes": {
            "city": "Kiev,UA",
            "code": "IEV"
          }
        },
        {
          "@attributes": {
            "city": "Kiffa,MR",
            "code": "KFA"
          }
        },
        {
          "@attributes": {
            "city": "Kigali,RW",
            "code": "KGL"
          }
        },
        {
          "@attributes": {
            "city": "Kigoma,TZ",
            "code": "TKQ"
          }
        },
        {
          "@attributes": {
            "city": "Kikaiga Shima,JP",
            "code": "KKX"
          }
        },
        {
          "@attributes": {
            "city": "Kikori,PG",
            "code": "KRI"
          }
        },
        {
          "@attributes": {
            "city": "Kil Sweden,SE",
            "code": "XXN"
          }
        },
        {
          "@attributes": {
            "city": "Kilimanjaro,TZ",
            "code": "JRO"
          }
        },
        {
          "@attributes": {
            "city": "Kilkenny,IE",
            "code": "KKY"
          }
        },
        {
          "@attributes": {
            "city": "Killeen,US",
            "code": "ILE"
          }
        },
        {
          "@attributes": {
            "city": "Killineq,CA",
            "code": "XBW"
          }
        },
        {
          "@attributes": {
            "city": "Kilwa,CD",
            "code": "KIL"
          }
        },
        {
          "@attributes": {
            "city": "Kilwa,TZ",
            "code": "KIY"
          }
        },
        {
          "@attributes": {
            "city": "Kimam,ID",
            "code": "KMM"
          }
        },
        {
          "@attributes": {
            "city": "Kimberley,CA",
            "code": "YQE"
          }
        },
        {
          "@attributes": {
            "city": "Kimberley,ZA",
            "code": "KIM"
          }
        },
        {
          "@attributes": {
            "city": "Kimmirut Lake Harbour,CA",
            "code": "YLC"
          }
        },
        {
          "@attributes": {
            "city": "Kincardine,CA",
            "code": "YKD"
          }
        },
        {
          "@attributes": {
            "city": "Kindersley,CA",
            "code": "YKY"
          }
        },
        {
          "@attributes": {
            "city": "Kindu,CD",
            "code": "KND"
          }
        },
        {
          "@attributes": {
            "city": "King cities,US",
            "code": "KIC"
          }
        },
        {
          "@attributes": {
            "city": "King Cove,US",
            "code": "KVC"
          }
        },
        {
          "@attributes": {
            "city": "King Island,AU",
            "code": "KNS"
          }
        },
        {
          "@attributes": {
            "city": "King Khalid Military cities,SA",
            "code": "KMC"
          }
        },
        {
          "@attributes": {
            "city": "King Of Prussia,US",
            "code": "KPD"
          }
        },
        {
          "@attributes": {
            "city": "King Salmon,US",
            "code": "AKN"
          }
        },
        {
          "@attributes": {
            "city": "Kingaroy,AU",
            "code": "KGY"
          }
        },
        {
          "@attributes": {
            "city": "Kingfisher Lake Indian Reserve,CA",
            "code": "KIF"
          }
        },
        {
          "@attributes": {
            "city": "Kingman,US",
            "code": "IGM"
          }
        },
        {
          "@attributes": {
            "city": "Kings Canyon,AU",
            "code": "KBJ"
          }
        },
        {
          "@attributes": {
            "city": "Kings Lynn,GB",
            "code": "KNF"
          }
        },
        {
          "@attributes": {
            "city": "Kingscote,AU",
            "code": "KGC"
          }
        },
        {
          "@attributes": {
            "city": "Kingston,CA",
            "code": "YGK"
          }
        },
        {
          "@attributes": {
            "city": "Kingston,JM",
            "code": "KIN"
          }
        },
        {
          "@attributes": {
            "city": "Kingsville,US",
            "code": "NQI"
          }
        },
        {
          "@attributes": {
            "city": "Kinmen,TW",
            "code": "KNH"
          }
        },
        {
          "@attributes": {
            "city": "Kinshasa,CD",
            "code": "FIH"
          }
        },
        {
          "@attributes": {
            "city": "Kinston,US",
            "code": "ISO"
          }
        },
        {
          "@attributes": {
            "city": "Kipnuk,US",
            "code": "KPN"
          }
        },
        {
          "@attributes": {
            "city": "Kira,PG",
            "code": "KIQ"
          }
        },
        {
          "@attributes": {
            "city": "Kirakira,SB",
            "code": "IRA"
          }
        },
        {
          "@attributes": {
            "city": "Kirensk,RU",
            "code": "KCK"
          }
        },
        {
          "@attributes": {
            "city": "Kirkenes,NO",
            "code": "KKN"
          }
        },
        {
          "@attributes": {
            "city": "Kirkland,CA",
            "code": "YKX"
          }
        },
        {
          "@attributes": {
            "city": "Kirksville,US",
            "code": "IRK"
          }
        },
        {
          "@attributes": {
            "city": "Kirkwall,GB",
            "code": "KOI"
          }
        },
        {
          "@attributes": {
            "city": "Kirov Pobedilovo,RU",
            "code": "KVX"
          }
        },
        {
          "@attributes": {
            "city": "Kirovsk,RU",
            "code": "KVK"
          }
        },
        {
          "@attributes": {
            "city": "Kiruna,SE",
            "code": "KRN"
          }
        },
        {
          "@attributes": {
            "city": "Kirundo,BI",
            "code": "KRE"
          }
        },
        {
          "@attributes": {
            "city": "Kiryat Shmona,IL",
            "code": "KSW"
          }
        },
        {
          "@attributes": {
            "city": "Kisangani,CD",
            "code": "FKI"
          }
        },
        {
          "@attributes": {
            "city": "Kisengan,PG",
            "code": "KSG"
          }
        },
        {
          "@attributes": {
            "city": "Kish Island,IR",
            "code": "KIH"
          }
        },
        {
          "@attributes": {
            "city": "Kismayu,SO",
            "code": "KMU"
          }
        },
        {
          "@attributes": {
            "city": "Kissimmee,US",
            "code": "ISM"
          }
        },
        {
          "@attributes": {
            "city": "Kisumu,KE",
            "code": "KIS"
          }
        },
        {
          "@attributes": {
            "city": "Kita Kyushu,JP",
            "code": "KKJ"
          }
        },
        {
          "@attributes": {
            "city": "Kitadaito,JP",
            "code": "KTD"
          }
        },
        {
          "@attributes": {
            "city": "Kitale,KE",
            "code": "KTL"
          }
        },
        {
          "@attributes": {
            "city": "Kitchener,CA",
            "code": "YKF"
          }
        },
        {
          "@attributes": {
            "city": "Kithira,GR",
            "code": "KIT"
          }
        },
        {
          "@attributes": {
            "city": "Kitoi Bay,US",
            "code": "KKB"
          }
        },
        {
          "@attributes": {
            "city": "Kitsissuarsuit,GL",
            "code": "QJE"
          }
        },
        {
          "@attributes": {
            "city": "Kittila,FI",
            "code": "KTT"
          }
        },
        {
          "@attributes": {
            "city": "Kitwe,ZM",
            "code": "KIW"
          }
        },
        {
          "@attributes": {
            "city": "Kiunga,PG",
            "code": "UNG"
          }
        },
        {
          "@attributes": {
            "city": "Kivalina,US",
            "code": "KVL"
          }
        },
        {
          "@attributes": {
            "city": "Klagenfurt,AT",
            "code": "KLU"
          }
        },
        {
          "@attributes": {
            "city": "Klamath Falls,US",
            "code": "LMT"
          }
        },
        {
          "@attributes": {
            "city": "Klawock,US",
            "code": "KLW"
          }
        },
        {
          "@attributes": {
            "city": "Kleinzee,ZA",
            "code": "KLZ"
          }
        },
        {
          "@attributes": {
            "city": "Klerksdorp,ZA",
            "code": "KXE"
          }
        },
        {
          "@attributes": {
            "city": "Klosters,CH",
            "code": "ZHS"
          }
        },
        {
          "@attributes": {
            "city": "Knock,IE",
            "code": "NOC"
          }
        },
        {
          "@attributes": {
            "city": "Knoxville,US",
            "code": "TYS"
          }
        },
        {
          "@attributes": {
            "city": "Kobe,JP",
            "code": "UKB"
          }
        },
        {
          "@attributes": {
            "city": "Koblenz,DE",
            "code": "ZNV"
          }
        },
        {
          "@attributes": {
            "city": "Kobuk,US",
            "code": "OBU"
          }
        },
        {
          "@attributes": {
            "city": "Kocaeli,TR",
            "code": "KCO"
          }
        },
        {
          "@attributes": {
            "city": "Kochi,IN",
            "code": "COK"
          }
        },
        {
          "@attributes": {
            "city": "Kochi,JP",
            "code": "KCZ"
          }
        },
        {
          "@attributes": {
            "city": "Kodiak,US",
            "code": "ADQ"
          }
        },
        {
          "@attributes": {
            "city": "Kogalym,RU",
            "code": "KGP"
          }
        },
        {
          "@attributes": {
            "city": "Koggala,LK",
            "code": "KCT"
          }
        },
        {
          "@attributes": {
            "city": "Koh Samui,TH",
            "code": "USM"
          }
        },
        {
          "@attributes": {
            "city": "Kohat,PK",
            "code": "OHT"
          }
        },
        {
          "@attributes": {
            "city": "Kokkola,FI",
            "code": "KOK"
          }
        },
        {
          "@attributes": {
            "city": "Kokoda,PG",
            "code": "KKD"
          }
        },
        {
          "@attributes": {
            "city": "Kokomo,US",
            "code": "OKK"
          }
        },
        {
          "@attributes": {
            "city": "Kokoro,PG",
            "code": "KOR"
          }
        },
        {
          "@attributes": {
            "city": "Kokshetau,KZ",
            "code": "KOV"
          }
        },
        {
          "@attributes": {
            "city": "Kolding,DK",
            "code": "ZBT"
          }
        },
        {
          "@attributes": {
            "city": "Kolhapur,IN",
            "code": "KLH"
          }
        },
        {
          "@attributes": {
            "city": "Koliganek,US",
            "code": "KGK"
          }
        },
        {
          "@attributes": {
            "city": "Kolkata,IN",
            "code": "CCU"
          }
        },
        {
          "@attributes": {
            "city": "Kolobrzeg,PL",
            "code": "QJY"
          }
        },
        {
          "@attributes": {
            "city": "Komatsu,JP",
            "code": "KMQ"
          }
        },
        {
          "@attributes": {
            "city": "Komotini,GR",
            "code": "ZKT"
          }
        },
        {
          "@attributes": {
            "city": "Komsomolsk Na Amure,RU",
            "code": "KXK"
          }
        },
        {
          "@attributes": {
            "city": "Kona,US",
            "code": "KOA"
          }
        },
        {
          "@attributes": {
            "city": "Kone,NC",
            "code": "KNQ"
          }
        },
        {
          "@attributes": {
            "city": "Konge,PG",
            "code": "KGB"
          }
        },
        {
          "@attributes": {
            "city": "Kongiganak,US",
            "code": "KKH"
          }
        },
        {
          "@attributes": {
            "city": "Kongolo,CD",
            "code": "KOO"
          }
        },
        {
          "@attributes": {
            "city": "Kongsvinger,NO",
            "code": "XZD"
          }
        },
        {
          "@attributes": {
            "city": "Konstanz,DE",
            "code": "QKZ"
          }
        },
        {
          "@attributes": {
            "city": "Konya,TR",
            "code": "KYA"
          }
        },
        {
          "@attributes": {
            "city": "Kooddoo Island,MV",
            "code": "GKK"
          }
        },
        {
          "@attributes": {
            "city": "Koolatah,AU",
            "code": "KOH"
          }
        },
        {
          "@attributes": {
            "city": "Kopasker,IS",
            "code": "OPA"
          }
        },
        {
          "@attributes": {
            "city": "Kopiago,PG",
            "code": "KPA"
          }
        },
        {
          "@attributes": {
            "city": "Koping,SE",
            "code": "XXI"
          }
        },
        {
          "@attributes": {
            "city": "Koppang,NO",
            "code": "YVK"
          }
        },
        {
          "@attributes": {
            "city": "Korhogo,CI",
            "code": "HGO"
          }
        },
        {
          "@attributes": {
            "city": "Korla,CN",
            "code": "KRL"
          }
        },
        {
          "@attributes": {
            "city": "Koro Island,FJ",
            "code": "KXF"
          }
        },
        {
          "@attributes": {
            "city": "Koror,PW",
            "code": "ROR"
          }
        },
        {
          "@attributes": {
            "city": "Kortrijk,BE",
            "code": "KJK"
          }
        },
        {
          "@attributes": {
            "city": "Kos Gr,GR",
            "code": "KGS"
          }
        },
        {
          "@attributes": {
            "city": "Kosice,SK",
            "code": "KSC"
          }
        },
        {
          "@attributes": {
            "city": "Kosrae,FM",
            "code": "KSA"
          }
        },
        {
          "@attributes": {
            "city": "Kostanay,KZ",
            "code": "KSN"
          }
        },
        {
          "@attributes": {
            "city": "Kostroma,RU",
            "code": "KMW"
          }
        },
        {
          "@attributes": {
            "city": "Koszalin,PL",
            "code": "OSZ"
          }
        },
        {
          "@attributes": {
            "city": "Kota,IN",
            "code": "KTU"
          }
        },
        {
          "@attributes": {
            "city": "Kota Bharu,MY",
            "code": "KBR"
          }
        },
        {
          "@attributes": {
            "city": "Kota Kinabalu,MY",
            "code": "BKI"
          }
        },
        {
          "@attributes": {
            "city": "Kota Mobagu,ID",
            "code": "BJG"
          }
        },
        {
          "@attributes": {
            "city": "Kotabaru,ID",
            "code": "KBU"
          }
        },
        {
          "@attributes": {
            "city": "Kotka,FI",
            "code": "QVW"
          }
        },
        {
          "@attributes": {
            "city": "Kotlas,RU",
            "code": "KSZ"
          }
        },
        {
          "@attributes": {
            "city": "Kotlik,US",
            "code": "KOT"
          }
        },
        {
          "@attributes": {
            "city": "Kotor,ME",
            "code": "ZKQ"
          }
        },
        {
          "@attributes": {
            "city": "Kotzebue,US",
            "code": "OTZ"
          }
        },
        {
          "@attributes": {
            "city": "Koulamoutou,GA",
            "code": "KOU"
          }
        },
        {
          "@attributes": {
            "city": "Koumac,NC",
            "code": "KOC"
          }
        },
        {
          "@attributes": {
            "city": "Kourou,GF",
            "code": "QKR"
          }
        },
        {
          "@attributes": {
            "city": "Koutaba,CM",
            "code": "KOB"
          }
        },
        {
          "@attributes": {
            "city": "Kouvola,FI",
            "code": "UTI"
          }
        },
        {
          "@attributes": {
            "city": "Kowanyama,AU",
            "code": "KWM"
          }
        },
        {
          "@attributes": {
            "city": "Koyuk,US",
            "code": "KKA"
          }
        },
        {
          "@attributes": {
            "city": "Koyukuk,US",
            "code": "KYU"
          }
        },
        {
          "@attributes": {
            "city": "Kozani,GR",
            "code": "KZI"
          }
        },
        {
          "@attributes": {
            "city": "Kozhikode,IN",
            "code": "CCJ"
          }
        },
        {
          "@attributes": {
            "city": "Krabi,TH",
            "code": "KBV"
          }
        },
        {
          "@attributes": {
            "city": "Krakow,PL",
            "code": "KRK"
          }
        },
        {
          "@attributes": {
            "city": "Kramfors,SE",
            "code": "KRF"
          }
        },
        {
          "@attributes": {
            "city": "Krasnodar,RU",
            "code": "KRR"
          }
        },
        {
          "@attributes": {
            "city": "Krasnoselkup,RU",
            "code": "KKQ"
          }
        },
        {
          "@attributes": {
            "city": "Krasnoyarsk,RU",
            "code": "KJA"
          }
        },
        {
          "@attributes": {
            "city": "Krefeld,DE",
            "code": "QKF"
          }
        },
        {
          "@attributes": {
            "city": "Kreuzlingen,CH",
            "code": "ZHU"
          }
        },
        {
          "@attributes": {
            "city": "Kristiansand,NO",
            "code": "KRS"
          }
        },
        {
          "@attributes": {
            "city": "Kristianstad,SE",
            "code": "KID"
          }
        },
        {
          "@attributes": {
            "city": "Kristiansund,NO",
            "code": "KSU"
          }
        },
        {
          "@attributes": {
            "city": "Kristinehamn,SE",
            "code": "XYN"
          }
        },
        {
          "@attributes": {
            "city": "Krivoy Rog,UA",
            "code": "KWG"
          }
        },
        {
          "@attributes": {
            "city": "Kuala Belait,BN",
            "code": "KUB"
          }
        },
        {
          "@attributes": {
            "city": "Kuala Lumpur, Malaysia",
            "code": "KUL"
          }
        },
        {
          "@attributes": {
            "city": "Kuala Terengganu,MY",
            "code": "TGG"
          }
        },
        {
          "@attributes": {
            "city": "Kuantan,MY",
            "code": "KUA"
          }
        },
        {
          "@attributes": {
            "city": "Kubin Island,AU",
            "code": "KUG"
          }
        },
        {
          "@attributes": {
            "city": "Kuching,MY",
            "code": "KCH"
          }
        },
        {
          "@attributes": {
            "city": "Kudat,MY",
            "code": "KUD"
          }
        },
        {
          "@attributes": {
            "city": "Kufrah,LY",
            "code": "AKF"
          }
        },
        {
          "@attributes": {
            "city": "Kugluktuk Coppermine,CA",
            "code": "YCO"
          }
        },
        {
          "@attributes": {
            "city": "Kullorsuaq,GL",
            "code": "KHQ"
          }
        },
        {
          "@attributes": {
            "city": "Kulob,TJ",
            "code": "TJU"
          }
        },
        {
          "@attributes": {
            "city": "Kulu,IN",
            "code": "KUU"
          }
        },
        {
          "@attributes": {
            "city": "Kulusuk,GL",
            "code": "KUS"
          }
        },
        {
          "@attributes": {
            "city": "Kumamoto,JP",
            "code": "KMJ"
          }
        },
        {
          "@attributes": {
            "city": "Kumasi,GH",
            "code": "KMS"
          }
        },
        {
          "@attributes": {
            "city": "Kume Jima,JP",
            "code": "UEO"
          }
        },
        {
          "@attributes": {
            "city": "Kumla,SE",
            "code": "XXV"
          }
        },
        {
          "@attributes": {
            "city": "Kundiawa,PG",
            "code": "CMU"
          }
        },
        {
          "@attributes": {
            "city": "Kunming,CN",
            "code": "KMG"
          }
        },
        {
          "@attributes": {
            "city": "Kunsan,KR",
            "code": "KUV"
          }
        },
        {
          "@attributes": {
            "city": "Kunshan,CN",
            "code": "KVN"
          }
        },
        {
          "@attributes": {
            "city": "Kununurra,AU",
            "code": "KNX"
          }
        },
        {
          "@attributes": {
            "city": "Kuopio,FI",
            "code": "KUO"
          }
        },
        {
          "@attributes": {
            "city": "Kupang,ID",
            "code": "KOE"
          }
        },
        {
          "@attributes": {
            "city": "Kuparuk,US",
            "code": "UUK"
          }
        },
        {
          "@attributes": {
            "city": "Kupiano,PG",
            "code": "KUP"
          }
        },
        {
          "@attributes": {
            "city": "Kuqa,CN",
            "code": "KCA"
          }
        },
        {
          "@attributes": {
            "city": "Kuressaare,EE",
            "code": "URE"
          }
        },
        {
          "@attributes": {
            "city": "Kurgan,RU",
            "code": "KRO"
          }
        },
        {
          "@attributes": {
            "city": "Kuria,KI",
            "code": "KUC"
          }
        },
        {
          "@attributes": {
            "city": "Kursk,RU",
            "code": "URS"
          }
        },
        {
          "@attributes": {
            "city": "Kuruman,ZA",
            "code": "KMH"
          }
        },
        {
          "@attributes": {
            "city": "Kusadasi,TR",
            "code": "XKU"
          }
        },
        {
          "@attributes": {
            "city": "Kushiro,JP",
            "code": "KUH"
          }
        },
        {
          "@attributes": {
            "city": "Kutahya,TR",
            "code": "KZR"
          }
        },
        {
          "@attributes": {
            "city": "Kutaisi,GE",
            "code": "KUT"
          }
        },
        {
          "@attributes": {
            "city": "Kuujjuaq,CA",
            "code": "YVP"
          }
        },
        {
          "@attributes": {
            "city": "Kuummiut,GL",
            "code": "KUZ"
          }
        },
        {
          "@attributes": {
            "city": "Kuusamo,FI",
            "code": "KAO"
          }
        },
        {
          "@attributes": {
            "city": "Kuwait,KW",
            "code": "KWI"
          }
        },
        {
          "@attributes": {
            "city": "Kwajalein,MH",
            "code": "KWA"
          }
        },
        {
          "@attributes": {
            "city": "Kwangju,KR",
            "code": "KWJ"
          }
        },
        {
          "@attributes": {
            "city": "Kwethluk,US",
            "code": "KWT"
          }
        },
        {
          "@attributes": {
            "city": "Kwigillingok,US",
            "code": "KWK"
          }
        },
        {
          "@attributes": {
            "city": "Kyaukpyu,MM",
            "code": "KYP"
          }
        },
        {
          "@attributes": {
            "city": "Kyoto,JP",
            "code": "UKY"
          }
        },
        {
          "@attributes": {
            "city": "Kyzyl,RU",
            "code": "KYZ"
          }
        },
        {
          "@attributes": {
            "city": "Kzyl Orda,KZ",
            "code": "KZO"
          }
        },
        {
          "@attributes": {
            "city": "LINCANG,CN",
            "code": "LNJ"
          }
        },
        {
          "@attributes": {
            "city": "La Baule,FR",
            "code": "LBY"
          }
        },
        {
          "@attributes": {
            "city": "La Ceiba,HN",
            "code": "LCE"
          }
        },
        {
          "@attributes": {
            "city": "La Chaux de Fonds,CH",
            "code": "ZHV"
          }
        },
        {
          "@attributes": {
            "city": "La Chorrera,CO",
            "code": "LCR"
          }
        },
        {
          "@attributes": {
            "city": "La Ciotat,FR",
            "code": "XCT"
          }
        },
        {
          "@attributes": {
            "city": "La Coruna,ES",
            "code": "LCG"
          }
        },
        {
          "@attributes": {
            "city": "La Crosse,US",
            "code": "LSE"
          }
        },
        {
          "@attributes": {
            "city": "La Desirade,GP",
            "code": "DSD"
          }
        },
        {
          "@attributes": {
            "city": "La Fria,VE",
            "code": "LFR"
          }
        },
        {
          "@attributes": {
            "city": "La Grande,CA",
            "code": "YGL"
          }
        },
        {
          "@attributes": {
            "city": "La Grande,US",
            "code": "LGD"
          }
        },
        {
          "@attributes": {
            "city": "La Grange,US",
            "code": "LGC"
          }
        },
        {
          "@attributes": {
            "city": "La Guaira,VE",
            "code": "LAG"
          }
        },
        {
          "@attributes": {
            "city": "La Malbaie,CA",
            "code": "YML"
          }
        },
        {
          "@attributes": {
            "city": "La Palma del Condado,ES",
            "code": "NDO"
          }
        },
        {
          "@attributes": {
            "city": "La Paz,MX",
            "code": "LAP"
          }
        },
        {
          "@attributes": {
            "city": "La Paz,BO",
            "code": "LPB"
          }
        },
        {
          "@attributes": {
            "city": "La Pedrera,CO",
            "code": "LPD"
          }
        },
        {
          "@attributes": {
            "city": "La Plagne,FR",
            "code": "PLG"
          }
        },
        {
          "@attributes": {
            "city": "La Plata,AR",
            "code": "LPG"
          }
        },
        {
          "@attributes": {
            "city": "La Porte,US",
            "code": "LPO"
          }
        },
        {
          "@attributes": {
            "city": "La Rioja,AR",
            "code": "IRJ"
          }
        },
        {
          "@attributes": {
            "city": "La Roche,FR",
            "code": "EDM"
          }
        },
        {
          "@attributes": {
            "city": "La Roche Sur Yon,FR",
            "code": "XRO"
          }
        },
        {
          "@attributes": {
            "city": "La Rochelle,FR",
            "code": "LRH"
          }
        },
        {
          "@attributes": {
            "city": "La Romana,DO",
            "code": "LRM"
          }
        },
        {
          "@attributes": {
            "city": "La Sarre,CA",
            "code": "SSQ"
          }
        },
        {
          "@attributes": {
            "city": "La Serena,CL",
            "code": "LSC"
          }
        },
        {
          "@attributes": {
            "city": "La Spezia,IT",
            "code": "QLP"
          }
        },
        {
          "@attributes": {
            "city": "La Tabatiere,CA",
            "code": "ZLT"
          }
        },
        {
          "@attributes": {
            "city": "La Tuque,CA",
            "code": "YLQ"
          }
        },
        {
          "@attributes": {
            "city": "La Verne,US",
            "code": "POC"
          }
        },
        {
          "@attributes": {
            "city": "Labasa,FJ",
            "code": "LBS"
          }
        },
        {
          "@attributes": {
            "city": "Lablab,PG",
            "code": "LAB"
          }
        },
        {
          "@attributes": {
            "city": "Labouchere Bay,US",
            "code": "WLB"
          }
        },
        {
          "@attributes": {
            "city": "Labuan,MY",
            "code": "LBU"
          }
        },
        {
          "@attributes": {
            "city": "Labuan Bajo,ID",
            "code": "LBJ"
          }
        },
        {
          "@attributes": {
            "city": "Labuha,ID",
            "code": "LAH"
          }
        },
        {
          "@attributes": {
            "city": "Lac Brochet Indian Reserve,CA",
            "code": "XLB"
          }
        },
        {
          "@attributes": {
            "city": "Lac Edouard,CA",
            "code": "XEE"
          }
        },
        {
          "@attributes": {
            "city": "Lac La Ronge,CA",
            "code": "YVC"
          }
        },
        {
          "@attributes": {
            "city": "Laconia,US",
            "code": "LCI"
          }
        },
        {
          "@attributes": {
            "city": "Ladysmith,CA",
            "code": "XEH"
          }
        },
        {
          "@attributes": {
            "city": "Ladysmith,ZA",
            "code": "LAY"
          }
        },
        {
          "@attributes": {
            "city": "Lae Pg,PG",
            "code": "LAE"
          }
        },
        {
          "@attributes": {
            "city": "Laeso Island,DK",
            "code": "BYR"
          }
        },
        {
          "@attributes": {
            "city": "Lafayette,US",
            "code": "LAF"
          }
        },
        {
          "@attributes": {
            "city": "Lafayette,US",
            "code": "LFT"
          }
        },
        {
          "@attributes": {
            "city": "Lago Agrio,EC",
            "code": "LGQ"
          }
        },
        {
          "@attributes": {
            "city": "Lago Argentino,AR",
            "code": "ING"
          }
        },
        {
          "@attributes": {
            "city": "Lagos,NG",
            "code": "LOS"
          }
        },
        {
          "@attributes": {
            "city": "Lagos De Moreno,MX",
            "code": "LOM"
          }
        },
        {
          "@attributes": {
            "city": "Lahad Datu,MY",
            "code": "LDU"
          }
        },
        {
          "@attributes": {
            "city": "Lahore,PK",
            "code": "LHE"
          }
        },
        {
          "@attributes": {
            "city": "Lahr,DE",
            "code": "LHA"
          }
        },
        {
          "@attributes": {
            "city": "Lahti,FI",
            "code": "QLF"
          }
        },
        {
          "@attributes": {
            "city": "Lajeado,BR",
            "code": "QLB"
          }
        },
        {
          "@attributes": {
            "city": "Lajes,BR",
            "code": "LAJ"
          }
        },
        {
          "@attributes": {
            "city": "Lake Charles,US",
            "code": "LCH"
          }
        },
        {
          "@attributes": {
            "city": "Lake cities,US",
            "code": "LCQ"
          }
        },
        {
          "@attributes": {
            "city": "Lake Evella,AU",
            "code": "LEL"
          }
        },
        {
          "@attributes": {
            "city": "Lake Havasu Cty,US",
            "code": "HII"
          }
        },
        {
          "@attributes": {
            "city": "Lake Jackson,US",
            "code": "LJN"
          }
        },
        {
          "@attributes": {
            "city": "Lake Minchumina,US",
            "code": "LMA"
          }
        },
        {
          "@attributes": {
            "city": "Lake Murray,PG",
            "code": "LMY"
          }
        },
        {
          "@attributes": {
            "city": "Lake Of The Ozarks,US",
            "code": "AIZ"
          }
        },
        {
          "@attributes": {
            "city": "Lake Placid,US",
            "code": "LKP"
          }
        },
        {
          "@attributes": {
            "city": "Lake Tahoe,US",
            "code": "TVL"
          }
        },
        {
          "@attributes": {
            "city": "Lakeba,FJ",
            "code": "LKB"
          }
        },
        {
          "@attributes": {
            "city": "Lakeland,US",
            "code": "LAL"
          }
        },
        {
          "@attributes": {
            "city": "Lakselv,NO",
            "code": "LKL"
          }
        },
        {
          "@attributes": {
            "city": "Lalibela,ET",
            "code": "LLI"
          }
        },
        {
          "@attributes": {
            "city": "Lamacarena,CO",
            "code": "LMC"
          }
        },
        {
          "@attributes": {
            "city": "Lamap,VU",
            "code": "LPM"
          }
        },
        {
          "@attributes": {
            "city": "Lamar,US",
            "code": "LAA"
          }
        },
        {
          "@attributes": {
            "city": "Lamassa,PG",
            "code": "LMG"
          }
        },
        {
          "@attributes": {
            "city": "Lambarene,GA",
            "code": "LBQ"
          }
        },
        {
          "@attributes": {
            "city": "Lamen Bay,VU",
            "code": "LNB"
          }
        },
        {
          "@attributes": {
            "city": "Lamezia Terme,IT",
            "code": "SUF"
          }
        },
        {
          "@attributes": {
            "city": "Lampang,TH",
            "code": "LPT"
          }
        },
        {
          "@attributes": {
            "city": "Lampedusa,IT",
            "code": "LMP"
          }
        },
        {
          "@attributes": {
            "city": "Lamu,KE",
            "code": "LAU"
          }
        },
        {
          "@attributes": {
            "city": "Lanai,US",
            "code": "LNY"
          }
        },
        {
          "@attributes": {
            "city": "Lancaster,GB",
            "code": "XQL"
          }
        },
        {
          "@attributes": {
            "city": "Lancaster,US",
            "code": "WJF"
          }
        },
        {
          "@attributes": {
            "city": "Lancaster,US",
            "code": "LNS"
          }
        },
        {
          "@attributes": {
            "city": "Landerneau,FR",
            "code": "XLD"
          }
        },
        {
          "@attributes": {
            "city": "Lands End,GB",
            "code": "LEQ"
          }
        },
        {
          "@attributes": {
            "city": "Landshut,DE",
            "code": "QLG"
          }
        },
        {
          "@attributes": {
            "city": "Landskrona,SE",
            "code": "JLD"
          }
        },
        {
          "@attributes": {
            "city": "Langenthal,CH",
            "code": "ZHW"
          }
        },
        {
          "@attributes": {
            "city": "Langeoog,DE",
            "code": "LGO"
          }
        },
        {
          "@attributes": {
            "city": "Langford,CA",
            "code": "XEJ"
          }
        },
        {
          "@attributes": {
            "city": "Langgur,ID",
            "code": "LUV"
          }
        },
        {
          "@attributes": {
            "city": "Langkawi,MY",
            "code": "LGK"
          }
        },
        {
          "@attributes": {
            "city": "Langley,CA",
            "code": "YLY"
          }
        },
        {
          "@attributes": {
            "city": "Lankaran,AZ",
            "code": "LLK"
          }
        },
        {
          "@attributes": {
            "city": "Lannion,FR",
            "code": "LAI"
          }
        },
        {
          "@attributes": {
            "city": "Lansdowne,CA",
            "code": "YLH"
          }
        },
        {
          "@attributes": {
            "city": "Lansing,US",
            "code": "LAN"
          }
        },
        {
          "@attributes": {
            "city": "Lanzarote,ES",
            "code": "ACE"
          }
        },
        {
          "@attributes": {
            "city": "Lanzhou,CN",
            "code": "LHW"
          }
        },
        {
          "@attributes": {
            "city": "Laoag,PH",
            "code": "LAO"
          }
        },
        {
          "@attributes": {
            "city": "Laon,FR",
            "code": "XLN"
          }
        },
        {
          "@attributes": {
            "city": "Lappeenranta,FI",
            "code": "LPP"
          }
        },
        {
          "@attributes": {
            "city": "Laquila,IT",
            "code": "QAQ"
          }
        },
        {
          "@attributes": {
            "city": "Laramie,US",
            "code": "LAR"
          }
        },
        {
          "@attributes": {
            "city": "Larantuka,ID",
            "code": "LKA"
          }
        },
        {
          "@attributes": {
            "city": "Laredo,US",
            "code": "LRD"
          }
        },
        {
          "@attributes": {
            "city": "Larisa,GR",
            "code": "LRA"
          }
        },
        {
          "@attributes": {
            "city": "Larnaca,CY",
            "code": "LCA"
          }
        },
        {
          "@attributes": {
            "city": "Larsen Bay,US",
            "code": "KLN"
          }
        },
        {
          "@attributes": {
            "city": "Larvik,NO",
            "code": "XKK"
          }
        },
        {
          "@attributes": {
            "city": "Las Cruces,US",
            "code": "LRU"
          }
        },
        {
          "@attributes": {
            "city": "Las Limas,HN",
            "code": "LLH"
          }
        },
        {
          "@attributes": {
            "city": "Las Piedras,VE",
            "code": "LSP"
          }
        },
        {
          "@attributes": {
            "city": "Las Termas De Rio Hondo,AR",
            "code": "RHD"
          }
        },
        {
          "@attributes": {
            "city": "Las Tunas,CU",
            "code": "VTU"
          }
        },
        {
          "@attributes": {
            "city": "Las Vegas,US",
            "code": "LAS"
          }
        },
        {
          "@attributes": {
            "city": "Las Vegas,US",
            "code": "LVS"
          }
        },
        {
          "@attributes": {
            "city": "Lashio,MM",
            "code": "LSH"
          }
        },
        {
          "@attributes": {
            "city": "Lastourville,GA",
            "code": "LTL"
          }
        },
        {
          "@attributes": {
            "city": "Latacunga,EC",
            "code": "LTX"
          }
        },
        {
          "@attributes": {
            "city": "Latakia,SY",
            "code": "LTK"
          }
        },
        {
          "@attributes": {
            "city": "Lathrop,US",
            "code": "LRO"
          }
        },
        {
          "@attributes": {
            "city": "Lathrop Wells,US",
            "code": "LTH"
          }
        },
        {
          "@attributes": {
            "city": "Latina,IT",
            "code": "QLT"
          }
        },
        {
          "@attributes": {
            "city": "Latrobe,US",
            "code": "LBE"
          }
        },
        {
          "@attributes": {
            "city": "Latur,IN",
            "code": "LTU"
          }
        },
        {
          "@attributes": {
            "city": "Launceston,AU",
            "code": "LST"
          }
        },
        {
          "@attributes": {
            "city": "Laurel,US",
            "code": "LUL"
          }
        },
        {
          "@attributes": {
            "city": "Lausanne,CH",
            "code": "QLS"
          }
        },
        {
          "@attributes": {
            "city": "Laval,FR",
            "code": "LVA"
          }
        },
        {
          "@attributes": {
            "city": "Laverton,AU",
            "code": "LVO"
          }
        },
        {
          "@attributes": {
            "city": "Lavras,BR",
            "code": "QLW"
          }
        },
        {
          "@attributes": {
            "city": "Lawas,MY",
            "code": "LWY"
          }
        },
        {
          "@attributes": {
            "city": "Lawrence,US",
            "code": "LWC"
          }
        },
        {
          "@attributes": {
            "city": "Lawrence,US",
            "code": "LWM"
          }
        },
        {
          "@attributes": {
            "city": "Lawrenceville,US",
            "code": "LZU"
          }
        },
        {
          "@attributes": {
            "city": "Lawton,US",
            "code": "LAW"
          }
        },
        {
          "@attributes": {
            "city": "Lazaro Cardenas Michoacan,MX",
            "code": "LZC"
          }
        },
        {
          "@attributes": {
            "city": "Le Creusot,FR",
            "code": "XCC"
          }
        },
        {
          "@attributes": {
            "city": "Le Havre,FR",
            "code": "LEH"
          }
        },
        {
          "@attributes": {
            "city": "Le Locle,CH",
            "code": "ZJA"
          }
        },
        {
          "@attributes": {
            "city": "Le Mans,FR",
            "code": "LME"
          }
        },
        {
          "@attributes": {
            "city": "Le Mars,US",
            "code": "LRJ"
          }
        },
        {
          "@attributes": {
            "city": "Le Puy,FR",
            "code": "LPY"
          }
        },
        {
          "@attributes": {
            "city": "Le Touquet,FR",
            "code": "LTQ"
          }
        },
        {
          "@attributes": {
            "city": "Leadville,US",
            "code": "LXV"
          }
        },
        {
          "@attributes": {
            "city": "Learmonth,AU",
            "code": "LEA"
          }
        },
        {
          "@attributes": {
            "city": "Lebakeng,LS",
            "code": "LEF"
          }
        },
        {
          "@attributes": {
            "city": "Lebanon,US",
            "code": "LEB"
          }
        },
        {
          "@attributes": {
            "city": "Lecce,IT",
            "code": "LCC"
          }
        },
        {
          "@attributes": {
            "city": "Leeds,GB",
            "code": "LBA"
          }
        },
        {
          "@attributes": {
            "city": "Leesburg,US",
            "code": "LEE"
          }
        },
        {
          "@attributes": {
            "city": "Leeton,AU",
            "code": "QLE"
          }
        },
        {
          "@attributes": {
            "city": "Leeuwarden,NL",
            "code": "LWR"
          }
        },
        {
          "@attributes": {
            "city": "Legaspi,PH",
            "code": "LGP"
          }
        },
        {
          "@attributes": {
            "city": "Leh IN,IN",
            "code": "IXL"
          }
        },
        {
          "@attributes": {
            "city": "Leicester,GB",
            "code": "QEW"
          }
        },
        {
          "@attributes": {
            "city": "Leiden,NL",
            "code": "LID"
          }
        },
        {
          "@attributes": {
            "city": "Leigh Creek,AU",
            "code": "LGH"
          }
        },
        {
          "@attributes": {
            "city": "Leinster,AU",
            "code": "LER"
          }
        },
        {
          "@attributes": {
            "city": "Leipzig,DE",
            "code": "LEJ"
          }
        },
        {
          "@attributes": {
            "city": "Leiria,PT",
            "code": "QLR"
          }
        },
        {
          "@attributes": {
            "city": "Lekana,CG",
            "code": "LKC"
          }
        },
        {
          "@attributes": {
            "city": "Leknes,NO",
            "code": "LKN"
          }
        },
        {
          "@attributes": {
            "city": "Leksand,SE",
            "code": "XXO"
          }
        },
        {
          "@attributes": {
            "city": "Lelystad,NL",
            "code": "LEY"
          }
        },
        {
          "@attributes": {
            "city": "Lemoore,US",
            "code": "NLC"
          }
        },
        {
          "@attributes": {
            "city": "Lencois,BR",
            "code": "LEC"
          }
        },
        {
          "@attributes": {
            "city": "Lencois Paulista,BR",
            "code": "QGC"
          }
        },
        {
          "@attributes": {
            "city": "Lens,FR",
            "code": "XLE"
          }
        },
        {
          "@attributes": {
            "city": "Lensk,RU",
            "code": "ULK"
          }
        },
        {
          "@attributes": {
            "city": "Lenzburg,CH",
            "code": "ZJC"
          }
        },
        {
          "@attributes": {
            "city": "Lenzerheide,CH",
            "code": "ZJD"
          }
        },
        {
          "@attributes": {
            "city": "Leon,MX",
            "code": "BJX"
          }
        },
        {
          "@attributes": {
            "city": "Leon,ES",
            "code": "LEN"
          }
        },
        {
          "@attributes": {
            "city": "Leonardtown,US",
            "code": "LTW"
          }
        },
        {
          "@attributes": {
            "city": "Leonora,AU",
            "code": "LNO"
          }
        },
        {
          "@attributes": {
            "city": "Leribe,LS",
            "code": "LRB"
          }
        },
        {
          "@attributes": {
            "city": "Lerida,ES",
            "code": "QLQ"
          }
        },
        {
          "@attributes": {
            "city": "Leros,GR",
            "code": "LRS"
          }
        },
        {
          "@attributes": {
            "city": "Lerwick,GB",
            "code": "LSI"
          }
        },
        {
          "@attributes": {
            "city": "Les Sables,FR",
            "code": "LSO"
          }
        },
        {
          "@attributes": {
            "city": "Les Saintes,GP",
            "code": "LSS"
          }
        },
        {
          "@attributes": {
            "city": "Lese,PG",
            "code": "LNG"
          }
        },
        {
          "@attributes": {
            "city": "Lesobeng,LS",
            "code": "LES"
          }
        },
        {
          "@attributes": {
            "city": "Lethbridge,CA",
            "code": "YQL"
          }
        },
        {
          "@attributes": {
            "city": "Leticia,CO",
            "code": "LET"
          }
        },
        {
          "@attributes": {
            "city": "Letterkenny,IE",
            "code": "LTR"
          }
        },
        {
          "@attributes": {
            "city": "Leuven,BE",
            "code": "ZGK"
          }
        },
        {
          "@attributes": {
            "city": "Levallois,FR",
            "code": "QBH"
          }
        },
        {
          "@attributes": {
            "city": "Levanger,NO",
            "code": "XUH"
          }
        },
        {
          "@attributes": {
            "city": "Levelock,US",
            "code": "KLL"
          }
        },
        {
          "@attributes": {
            "city": "Leverkusen,DE",
            "code": "ZOA"
          }
        },
        {
          "@attributes": {
            "city": "Levi,FI",
            "code": "XGX"
          }
        },
        {
          "@attributes": {
            "city": "Levuka,FJ",
            "code": "LEV"
          }
        },
        {
          "@attributes": {
            "city": "Lewisburg,US",
            "code": "LWB"
          }
        },
        {
          "@attributes": {
            "city": "Lewiston,US",
            "code": "LEW"
          }
        },
        {
          "@attributes": {
            "city": "Lewiston,US",
            "code": "LWS"
          }
        },
        {
          "@attributes": {
            "city": "Lewistown,US",
            "code": "LWT"
          }
        },
        {
          "@attributes": {
            "city": "Lexington,US",
            "code": "LEX"
          }
        },
        {
          "@attributes": {
            "city": "Lexington,US",
            "code": "LXN"
          }
        },
        {
          "@attributes": {
            "city": "Lhasa,CN",
            "code": "LXA"
          }
        },
        {
          "@attributes": {
            "city": "Lianping,CN",
            "code": "LIA"
          }
        },
        {
          "@attributes": {
            "city": "Lianyungang,CN",
            "code": "LYG"
          }
        },
        {
          "@attributes": {
            "city": "Liaoyang,CN",
            "code": "LQQ"
          }
        },
        {
          "@attributes": {
            "city": "Liberal,US",
            "code": "LBL"
          }
        },
        {
          "@attributes": {
            "city": "Liberia,CR",
            "code": "LIR"
          }
        },
        {
          "@attributes": {
            "city": "Libourne,FR",
            "code": "XLR"
          }
        },
        {
          "@attributes": {
            "city": "Libreville,GA",
            "code": "LBV"
          }
        },
        {
          "@attributes": {
            "city": "Lichfield,GB",
            "code": "XQT"
          }
        },
        {
          "@attributes": {
            "city": "Lichinga,MZ",
            "code": "VXC"
          }
        },
        {
          "@attributes": {
            "city": "Lidkoping,SE",
            "code": "LDK"
          }
        },
        {
          "@attributes": {
            "city": "Liege,BE",
            "code": "LGG"
          }
        },
        {
          "@attributes": {
            "city": "Liepaja,LV",
            "code": "LPX"
          }
        },
        {
          "@attributes": {
            "city": "Lifou,NC",
            "code": "LIF"
          }
        },
        {
          "@attributes": {
            "city": "Lightning Ridge,AU",
            "code": "LHG"
          }
        },
        {
          "@attributes": {
            "city": "Lihir Island,PG",
            "code": "LNV"
          }
        },
        {
          "@attributes": {
            "city": "Lihue,US",
            "code": "LIH"
          }
        },
        {
          "@attributes": {
            "city": "Lijiang cities,CN",
            "code": "LJG"
          }
        },
        {
          "@attributes": {
            "city": "Lilabari,IN",
            "code": "IXI"
          }
        },
        {
          "@attributes": {
            "city": "Lille,FR",
            "code": "LIL"
          }
        },
        {
          "@attributes": {
            "city": "Lille Hammer,NO",
            "code": "XXL"
          }
        },
        {
          "@attributes": {
            "city": "Lillestrom,NO",
            "code": "XKI"
          }
        },
        {
          "@attributes": {
            "city": "Lilongwe,MW",
            "code": "LLW"
          }
        },
        {
          "@attributes": {
            "city": "Lima,US",
            "code": "AOH"
          }
        },
        {
          "@attributes": {
            "city": "Lima,PE",
            "code": "LIM"
          }
        },
        {
          "@attributes": {
            "city": "Limassol,CY",
            "code": "QLI"
          }
        },
        {
          "@attributes": {
            "city": "Limbang,MY",
            "code": "LMN"
          }
        },
        {
          "@attributes": {
            "city": "Limburg,DE",
            "code": "ZNW"
          }
        },
        {
          "@attributes": {
            "city": "Lime Village,US",
            "code": "LVD"
          }
        },
        {
          "@attributes": {
            "city": "Limeira,BR",
            "code": "QGB"
          }
        },
        {
          "@attributes": {
            "city": "Limerick,IE",
            "code": "LMK"
          }
        },
        {
          "@attributes": {
            "city": "Limnos,GR",
            "code": "LXS"
          }
        },
        {
          "@attributes": {
            "city": "Limoges,FR",
            "code": "LIG"
          }
        },
        {
          "@attributes": {
            "city": "Limon,US",
            "code": "LIC"
          }
        },
        {
          "@attributes": {
            "city": "Limon,CR",
            "code": "LIO"
          }
        },
        {
          "@attributes": {
            "city": "Linares,CL",
            "code": "ZLR"
          }
        },
        {
          "@attributes": {
            "city": "Lincoln,US",
            "code": "LNK"
          }
        },
        {
          "@attributes": {
            "city": "Lindau,DE",
            "code": "QII"
          }
        },
        {
          "@attributes": {
            "city": "Linden,US",
            "code": "LDJ"
          }
        },
        {
          "@attributes": {
            "city": "Lindi,TZ",
            "code": "LDI"
          }
        },
        {
          "@attributes": {
            "city": "Ling Ling,CN",
            "code": "LLF"
          }
        },
        {
          "@attributes": {
            "city": "Lingshui,CN",
            "code": "LQS"
          }
        },
        {
          "@attributes": {
            "city": "Linhai,CN",
            "code": "LHC"
          }
        },
        {
          "@attributes": {
            "city": "Linkoping,SE",
            "code": "LPI"
          }
        },
        {
          "@attributes": {
            "city": "Lins,BR",
            "code": "LIP"
          }
        },
        {
          "@attributes": {
            "city": "Linyi,CN",
            "code": "LYI"
          }
        },
        {
          "@attributes": {
            "city": "Linz,AT",
            "code": "LNZ"
          }
        },
        {
          "@attributes": {
            "city": "Lipetsk,RU",
            "code": "LPK"
          }
        },
        {
          "@attributes": {
            "city": "Liping,CN",
            "code": "HZH"
          }
        },
        {
          "@attributes": {
            "city": "Lippstadt,DE",
            "code": "ZOB"
          }
        },
        {
          "@attributes": {
            "city": "Lisala,CD",
            "code": "LIQ"
          }
        },
        {
          "@attributes": {
            "city": "Lisbon,PT",
            "code": "LIS"
          }
        },
        {
          "@attributes": {
            "city": "Lisieux,FR",
            "code": "XLX"
          }
        },
        {
          "@attributes": {
            "city": "Lismore,AU",
            "code": "LSY"
          }
        },
        {
          "@attributes": {
            "city": "Little Cayman,KY",
            "code": "LYB"
          }
        },
        {
          "@attributes": {
            "city": "Little Grand Rapids,CA",
            "code": "ZGR"
          }
        },
        {
          "@attributes": {
            "city": "Little Port Walter,US",
            "code": "LPW"
          }
        },
        {
          "@attributes": {
            "city": "Little Rock,US",
            "code": "LIT"
          }
        },
        {
          "@attributes": {
            "city": "Liupanshui,CN",
            "code": "LPF"
          }
        },
        {
          "@attributes": {
            "city": "Liuzhou,CN",
            "code": "LZH"
          }
        },
        {
          "@attributes": {
            "city": "Livengood,US",
            "code": "LIV"
          }
        },
        {
          "@attributes": {
            "city": "Livermore,US",
            "code": "LVK"
          }
        },
        {
          "@attributes": {
            "city": "Liverpool,GB",
            "code": "LPL"
          }
        },
        {
          "@attributes": {
            "city": "Livingston,US",
            "code": "LVM"
          }
        },
        {
          "@attributes": {
            "city": "Livingstone,ZM",
            "code": "LVI"
          }
        },
        {
          "@attributes": {
            "city": "Livramento,BR",
            "code": "LVB"
          }
        },
        {
          "@attributes": {
            "city": "Lizard Island,AU",
            "code": "LZR"
          }
        },
        {
          "@attributes": {
            "city": "Ljubljana,SI",
            "code": "LJU"
          }
        },
        {
          "@attributes": {
            "city": "Lleida,ES",
            "code": "ILD"
          }
        },
        {
          "@attributes": {
            "city": "Lloydminster,CA",
            "code": "YLL"
          }
        },
        {
          "@attributes": {
            "city": "Locarno,CH",
            "code": "ZJI"
          }
        },
        {
          "@attributes": {
            "city": "Lochgilphead,GB",
            "code": "LPH"
          }
        },
        {
          "@attributes": {
            "city": "Lockhart,AU",
            "code": "IRG"
          }
        },
        {
          "@attributes": {
            "city": "Lockport,US",
            "code": "LOT"
          }
        },
        {
          "@attributes": {
            "city": "Lodja,CD",
            "code": "LJA"
          }
        },
        {
          "@attributes": {
            "city": "Lodwar,KE",
            "code": "LOK"
          }
        },
        {
          "@attributes": {
            "city": "Lodz,PL",
            "code": "LCJ"
          }
        },
        {
          "@attributes": {
            "city": "Loei,TH",
            "code": "LOE"
          }
        },
        {
          "@attributes": {
            "city": "Logan,US",
            "code": "LGU"
          }
        },
        {
          "@attributes": {
            "city": "Lognes,FR",
            "code": "XLG"
          }
        },
        {
          "@attributes": {
            "city": "Logrono,ES",
            "code": "RJL"
          }
        },
        {
          "@attributes": {
            "city": "Loja,EC",
            "code": "LOH"
          }
        },
        {
          "@attributes": {
            "city": "Lokichoggio,KE",
            "code": "LKG"
          }
        },
        {
          "@attributes": {
            "city": "Lome,TG",
            "code": "LFW"
          }
        },
        {
          "@attributes": {
            "city": "Lompoc,US",
            "code": "LPC"
          }
        },
        {
          "@attributes": {
            "city": "London,CA",
            "code": "YXU"
          }
        },
        {
          "@attributes": {
            "city": "London,GB",
            "code": "LON"
          }
        },
        {
          "@attributes": {
            "city": "London,US",
            "code": "LOZ"
          }
        },
        {
          "@attributes": {
            "city": "Londonderry,GB",
            "code": "LDY"
          }
        },
        {
          "@attributes": {
            "city": "Londrina,BR",
            "code": "LDB"
          }
        },
        {
          "@attributes": {
            "city": "Long Akah,MY",
            "code": "LKH"
          }
        },
        {
          "@attributes": {
            "city": "Long Banga,MY",
            "code": "LBP"
          }
        },
        {
          "@attributes": {
            "city": "Long Bawan,ID",
            "code": "LBW"
          }
        },
        {
          "@attributes": {
            "city": "Long Beach,US",
            "code": "LGB"
          }
        },
        {
          "@attributes": {
            "city": "Long Island,AU",
            "code": "HAP"
          }
        },
        {
          "@attributes": {
            "city": "Long Lellang,MY",
            "code": "LGL"
          }
        },
        {
          "@attributes": {
            "city": "Long Semado,MY",
            "code": "LSM"
          }
        },
        {
          "@attributes": {
            "city": "Long Seridan,MY",
            "code": "ODN"
          }
        },
        {
          "@attributes": {
            "city": "Longana,VU",
            "code": "LOD"
          }
        },
        {
          "@attributes": {
            "city": "Longmont,US",
            "code": "QWM"
          }
        },
        {
          "@attributes": {
            "city": "Longreach,AU",
            "code": "LRE"
          }
        },
        {
          "@attributes": {
            "city": "Longview,US",
            "code": "LOG"
          }
        },
        {
          "@attributes": {
            "city": "Longview,US",
            "code": "GGG"
          }
        },
        {
          "@attributes": {
            "city": "Longyan,CN",
            "code": "LCX"
          }
        },
        {
          "@attributes": {
            "city": "Longyearbyen,NO",
            "code": "LYR"
          }
        },
        {
          "@attributes": {
            "city": "Lonorore,VU",
            "code": "LNE"
          }
        },
        {
          "@attributes": {
            "city": "Lons Le Saunier,FR",
            "code": "XLL"
          }
        },
        {
          "@attributes": {
            "city": "Lopez Island,US",
            "code": "LPS"
          }
        },
        {
          "@attributes": {
            "city": "Lord Howe Island,AU",
            "code": "LDH"
          }
        },
        {
          "@attributes": {
            "city": "Lordsburg,US",
            "code": "LSB"
          }
        },
        {
          "@attributes": {
            "city": "Loreto,MX",
            "code": "LTO"
          }
        },
        {
          "@attributes": {
            "city": "Lorient,FR",
            "code": "LRT"
          }
        },
        {
          "@attributes": {
            "city": "Los Alamos,US",
            "code": "LAM"
          }
        },
        {
          "@attributes": {
            "city": "Los Angeles,US",
            "code": "LAX"
          }
        },
        {
          "@attributes": {
            "city": "Los Angeles,CL",
            "code": "LSQ"
          }
        },
        {
          "@attributes": {
            "city": "Los Banos,US",
            "code": "LSN"
          }
        },
        {
          "@attributes": {
            "city": "Los Chiles,CR",
            "code": "LSL"
          }
        },
        {
          "@attributes": {
            "city": "Los Mochis,MX",
            "code": "LMM"
          }
        },
        {
          "@attributes": {
            "city": "Losuia,PG",
            "code": "LSA"
          }
        },
        {
          "@attributes": {
            "city": "Louangphrabang,LA",
            "code": "LPQ"
          }
        },
        {
          "@attributes": {
            "city": "Loubomo,CG",
            "code": "DIS"
          }
        },
        {
          "@attributes": {
            "city": "Loughborough,GB",
            "code": "XQI"
          }
        },
        {
          "@attributes": {
            "city": "Louisville,US",
            "code": "LMS"
          }
        },
        {
          "@attributes": {
            "city": "Louisville,US",
            "code": "SDF"
          }
        },
        {
          "@attributes": {
            "city": "Lourdes,FR",
            "code": "LDE"
          }
        },
        {
          "@attributes": {
            "city": "Lower Zambezi Nat Park,ZM",
            "code": "RYL"
          }
        },
        {
          "@attributes": {
            "city": "Loyangalani,KE",
            "code": "LOY"
          }
        },
        {
          "@attributes": {
            "city": "Luanda,AO",
            "code": "LAD"
          }
        },
        {
          "@attributes": {
            "city": "Luang Namtha,LA",
            "code": "LXG"
          }
        },
        {
          "@attributes": {
            "city": "Lubango,AO",
            "code": "SDD"
          }
        },
        {
          "@attributes": {
            "city": "Lubbock,US",
            "code": "LBB"
          }
        },
        {
          "@attributes": {
            "city": "Lublin,PL",
            "code": "LUZ"
          }
        },
        {
          "@attributes": {
            "city": "Lubumbashi,CD",
            "code": "FBM"
          }
        },
        {
          "@attributes": {
            "city": "Lucas Do Rio Verde,BR",
            "code": "LVR"
          }
        },
        {
          "@attributes": {
            "city": "Lucca,IT",
            "code": "LCV"
          }
        },
        {
          "@attributes": {
            "city": "Lucerne,CH",
            "code": "QLJ"
          }
        },
        {
          "@attributes": {
            "city": "Luchon,FR",
            "code": "LXH"
          }
        },
        {
          "@attributes": {
            "city": "Lucknow,IN",
            "code": "LKO"
          }
        },
        {
          "@attributes": {
            "city": "Ludenscheid,DE",
            "code": "ZOC"
          }
        },
        {
          "@attributes": {
            "city": "Luderitz,NA",
            "code": "LUD"
          }
        },
        {
          "@attributes": {
            "city": "Ludhiana,IN",
            "code": "LUH"
          }
        },
        {
          "@attributes": {
            "city": "Ludington,US",
            "code": "LDM"
          }
        },
        {
          "@attributes": {
            "city": "Ludwigsburg,DE",
            "code": "ZOD"
          }
        },
        {
          "@attributes": {
            "city": "Ludwigshafen,DE",
            "code": "ZOE"
          }
        },
        {
          "@attributes": {
            "city": "Ludwigslust,DE",
            "code": "ZLU"
          }
        },
        {
          "@attributes": {
            "city": "Luebeck,DE",
            "code": "LBC"
          }
        },
        {
          "@attributes": {
            "city": "Luena,AO",
            "code": "LUO"
          }
        },
        {
          "@attributes": {
            "city": "Lueneburg,DE",
            "code": "ZOG"
          }
        },
        {
          "@attributes": {
            "city": "Luenen,DE",
            "code": "ZOH"
          }
        },
        {
          "@attributes": {
            "city": "Lufkin,US",
            "code": "LFK"
          }
        },
        {
          "@attributes": {
            "city": "Lugano,CH",
            "code": "LUG"
          }
        },
        {
          "@attributes": {
            "city": "Lugansk,UA",
            "code": "VSG"
          }
        },
        {
          "@attributes": {
            "city": "Lugo,ES",
            "code": "LUY"
          }
        },
        {
          "@attributes": {
            "city": "Lukla,NP",
            "code": "LUA"
          }
        },
        {
          "@attributes": {
            "city": "Lulea,SE",
            "code": "LLA"
          }
        },
        {
          "@attributes": {
            "city": "Luliang,CN",
            "code": "LLV"
          }
        },
        {
          "@attributes": {
            "city": "Lumberton,US",
            "code": "LBT"
          }
        },
        {
          "@attributes": {
            "city": "Lumi,PG",
            "code": "LMI"
          }
        },
        {
          "@attributes": {
            "city": "Lund C,SE",
            "code": "XGC"
          }
        },
        {
          "@attributes": {
            "city": "Luoyang,CN",
            "code": "LYA"
          }
        },
        {
          "@attributes": {
            "city": "Lusaka,ZM",
            "code": "LUN"
          }
        },
        {
          "@attributes": {
            "city": "Luton,GB",
            "code": "LTN"
          }
        },
        {
          "@attributes": {
            "city": "Lutsk,UA",
            "code": "UCK"
          }
        },
        {
          "@attributes": {
            "city": "Luwuk,ID",
            "code": "LUW"
          }
        },
        {
          "@attributes": {
            "city": "Luxembourg,LU",
            "code": "LUX"
          }
        },
        {
          "@attributes": {
            "city": "Luxi,CN",
            "code": "LUM"
          }
        },
        {
          "@attributes": {
            "city": "Luxor,EG",
            "code": "LXR"
          }
        },
        {
          "@attributes": {
            "city": "Luzhou,CN",
            "code": "LZO"
          }
        },
        {
          "@attributes": {
            "city": "Luzon Island,PH",
            "code": "CRK"
          }
        },
        {
          "@attributes": {
            "city": "Lvov,UA",
            "code": "LWO"
          }
        },
        {
          "@attributes": {
            "city": "Lycksele,SE",
            "code": "LYC"
          }
        },
        {
          "@attributes": {
            "city": "Lydd,GB",
            "code": "LYX"
          }
        },
        {
          "@attributes": {
            "city": "Lynchburg,US",
            "code": "LYH"
          }
        },
        {
          "@attributes": {
            "city": "Lynn Lake,CA",
            "code": "YYL"
          }
        },
        {
          "@attributes": {
            "city": "Lyon,FR",
            "code": "LYS"
          }
        },
        {
          "@attributes": {
            "city": "Lyon cities,FR",
            "code": "XYL"
          }
        },
        {
          "@attributes": {
            "city": "Lyon Cty,FR",
            "code": "XYD"
          }
        },
        {
          "@attributes": {
            "city": "Lysaker,NO",
            "code": "XUI"
          }
        },
        {
          "@attributes": {
            "city": "Lyss,CH",
            "code": "ZJL"
          }
        },
        {
          "@attributes": {
            "city": "M Banza Congo,AO",
            "code": "SSY"
          }
        },
        {
          "@attributes": {
            "city": "M Bigou,GA",
            "code": "MBC"
          }
        },
        {
          "@attributes": {
            "city": "MADISON,US",
            "code": "XMD"
          }
        },
        {
          "@attributes": {
            "city": "MINERAL WELLS,US",
            "code": "MWL"
          }
        },
        {
          "@attributes": {
            "city": "MOUSCRON,BE",
            "code": "MWW"
          }
        },
        {
          "@attributes": {
            "city": "MT CLEMENS,US",
            "code": "MTC"
          }
        },
        {
          "@attributes": {
            "city": "Maamigili Island,MV",
            "code": "VAM"
          }
        },
        {
          "@attributes": {
            "city": "Maan,JO",
            "code": "MPQ"
          }
        },
        {
          "@attributes": {
            "city": "Maastricht,NL",
            "code": "MST"
          }
        },
        {
          "@attributes": {
            "city": "Mabuiag Island,AU",
            "code": "UBB"
          }
        },
        {
          "@attributes": {
            "city": "Macae,BR",
            "code": "MEA"
          }
        },
        {
          "@attributes": {
            "city": "Macapa,BR",
            "code": "MCP"
          }
        },
        {
          "@attributes": {
            "city": "Macas,EC",
            "code": "XMS"
          }
        },
        {
          "@attributes": {
            "city": "Macau,MO",
            "code": "MFM"
          }
        },
        {
          "@attributes": {
            "city": "Macclesfield,GB",
            "code": "XMZ"
          }
        },
        {
          "@attributes": {
            "city": "Maceio,BR",
            "code": "MCZ"
          }
        },
        {
          "@attributes": {
            "city": "Macenta,GN",
            "code": "MCA"
          }
        },
        {
          "@attributes": {
            "city": "Machala,EC",
            "code": "MCH"
          }
        },
        {
          "@attributes": {
            "city": "Macheng,CN",
            "code": "HBM"
          }
        },
        {
          "@attributes": {
            "city": "Machu Picchu,PE",
            "code": "MFT"
          }
        },
        {
          "@attributes": {
            "city": "Mackay,AU",
            "code": "MKY"
          }
        },
        {
          "@attributes": {
            "city": "Mackinac Island,US",
            "code": "MCD"
          }
        },
        {
          "@attributes": {
            "city": "Macomb,US",
            "code": "MQB"
          }
        },
        {
          "@attributes": {
            "city": "Macon,FR",
            "code": "QNX"
          }
        },
        {
          "@attributes": {
            "city": "Macon,US",
            "code": "MCN"
          }
        },
        {
          "@attributes": {
            "city": "Madaba,JO",
            "code": "QMD"
          }
        },
        {
          "@attributes": {
            "city": "Madang,PG",
            "code": "MAG"
          }
        },
        {
          "@attributes": {
            "city": "Madera,US",
            "code": "MAE"
          }
        },
        {
          "@attributes": {
            "city": "Madinah,SA",
            "code": "MED"
          }
        },
        {
          "@attributes": {
            "city": "Madison,US",
            "code": "MDN"
          }
        },
        {
          "@attributes": {
            "city": "Madison,US",
            "code": "DXE"
          }
        },
        {
          "@attributes": {
            "city": "Madison,US",
            "code": "MSN"
          }
        },
        {
          "@attributes": {
            "city": "Madrid,ES",
            "code": "MAD"
          }
        },
        {
          "@attributes": {
            "city": "Madurai,IN",
            "code": "IXM"
          }
        },
        {
          "@attributes": {
            "city": "Mae Hongson,TH",
            "code": "HGN"
          }
        },
        {
          "@attributes": {
            "city": "Mae Sot,TH",
            "code": "MAQ"
          }
        },
        {
          "@attributes": {
            "city": "Maebashi,JP",
            "code": "QEB"
          }
        },
        {
          "@attributes": {
            "city": "Maewo,VU",
            "code": "MWF"
          }
        },
        {
          "@attributes": {
            "city": "Mafeteng,LS",
            "code": "MFC"
          }
        },
        {
          "@attributes": {
            "city": "Mafia,TZ",
            "code": "MFA"
          }
        },
        {
          "@attributes": {
            "city": "Magadan,RU",
            "code": "GDX"
          }
        },
        {
          "@attributes": {
            "city": "Magan,RU",
            "code": "GYG"
          }
        },
        {
          "@attributes": {
            "city": "Magas,RU",
            "code": "IGT"
          }
        },
        {
          "@attributes": {
            "city": "Magdalena,BO",
            "code": "MGD"
          }
        },
        {
          "@attributes": {
            "city": "Magdeburg,DE",
            "code": "ZMG"
          }
        },
        {
          "@attributes": {
            "city": "Magdeburg Cochstedt,DE",
            "code": "CSO"
          }
        },
        {
          "@attributes": {
            "city": "Magnitogorsk,RU",
            "code": "MQF"
          }
        },
        {
          "@attributes": {
            "city": "Magnolia,US",
            "code": "AGO"
          }
        },
        {
          "@attributes": {
            "city": "Magong,TW",
            "code": "MZG"
          }
        },
        {
          "@attributes": {
            "city": "Magwe,MM",
            "code": "MWQ"
          }
        },
        {
          "@attributes": {
            "city": "Mahanoro,MG",
            "code": "VVB"
          }
        },
        {
          "@attributes": {
            "city": "Mahe Island,SC",
            "code": "SEZ"
          }
        },
        {
          "@attributes": {
            "city": "Mahenye,ZW",
            "code": "MJW"
          }
        },
        {
          "@attributes": {
            "city": "Maiana,KI",
            "code": "MNK"
          }
        },
        {
          "@attributes": {
            "city": "Maiduguri,NG",
            "code": "MIU"
          }
        },
        {
          "@attributes": {
            "city": "Mainz,DE",
            "code": "QMZ"
          }
        },
        {
          "@attributes": {
            "city": "Maio,CV",
            "code": "MMO"
          }
        },
        {
          "@attributes": {
            "city": "Maitland,AU",
            "code": "MTL"
          }
        },
        {
          "@attributes": {
            "city": "Majunga,MG",
            "code": "MJN"
          }
        },
        {
          "@attributes": {
            "city": "Majuro,MH",
            "code": "MAJ"
          }
        },
        {
          "@attributes": {
            "city": "Makemo,PF",
            "code": "MKP"
          }
        },
        {
          "@attributes": {
            "city": "Makhachkala,RU",
            "code": "MCX"
          }
        },
        {
          "@attributes": {
            "city": "Makin Island,KI",
            "code": "MTK"
          }
        },
        {
          "@attributes": {
            "city": "Makkah,SA",
            "code": "QCA"
          }
        },
        {
          "@attributes": {
            "city": "Makkovik,CA",
            "code": "YMN"
          }
        },
        {
          "@attributes": {
            "city": "Makokou,GA",
            "code": "MKU"
          }
        },
        {
          "@attributes": {
            "city": "Makoua,CG",
            "code": "MKJ"
          }
        },
        {
          "@attributes": {
            "city": "Makurdi,NG",
            "code": "MDI"
          }
        },
        {
          "@attributes": {
            "city": "Mala Mala,ZA",
            "code": "AAM"
          }
        },
        {
          "@attributes": {
            "city": "Malabo,GQ",
            "code": "SSG"
          }
        },
        {
          "@attributes": {
            "city": "Malacca,MY",
            "code": "MKZ"
          }
        },
        {
          "@attributes": {
            "city": "Malaga,ES",
            "code": "AGP"
          }
        },
        {
          "@attributes": {
            "city": "Malakal,SS",
            "code": "MAK"
          }
        },
        {
          "@attributes": {
            "city": "Malalaua,PG",
            "code": "MLQ"
          }
        },
        {
          "@attributes": {
            "city": "Malang,ID",
            "code": "MLG"
          }
        },
        {
          "@attributes": {
            "city": "Malange,AO",
            "code": "MEG"
          }
        },
        {
          "@attributes": {
            "city": "Malatya,TR",
            "code": "MLX"
          }
        },
        {
          "@attributes": {
            "city": "Malda,IN",
            "code": "LDA"
          }
        },
        {
          "@attributes": {
            "city": "Malden,US",
            "code": "MAW"
          }
        },
        {
          "@attributes": {
            "city": "Male,MV",
            "code": "MLE"
          }
        },
        {
          "@attributes": {
            "city": "Malekolon,PG",
            "code": "MKN"
          }
        },
        {
          "@attributes": {
            "city": "Malelane,ZA",
            "code": "LLE"
          }
        },
        {
          "@attributes": {
            "city": "Malindi,KE",
            "code": "MYD"
          }
        },
        {
          "@attributes": {
            "city": "Malmo,SE",
            "code": "MMA"
          }
        },
        {
          "@attributes": {
            "city": "Malololailai,FJ",
            "code": "PTF"
          }
        },
        {
          "@attributes": {
            "city": "Maloy,NO",
            "code": "QFQ"
          }
        },
        {
          "@attributes": {
            "city": "Malta,MT",
            "code": "MLA"
          }
        },
        {
          "@attributes": {
            "city": "Mamai,PG",
            "code": "MAP"
          }
        },
        {
          "@attributes": {
            "city": "Mamburao,PH",
            "code": "MBO"
          }
        },
        {
          "@attributes": {
            "city": "Mammoth Lakes,US",
            "code": "MMH"
          }
        },
        {
          "@attributes": {
            "city": "Mamuju,ID",
            "code": "MJU"
          }
        },
        {
          "@attributes": {
            "city": "Man CI,CI",
            "code": "MJC"
          }
        },
        {
          "@attributes": {
            "city": "Mana Island,FJ",
            "code": "MNF"
          }
        },
        {
          "@attributes": {
            "city": "Manado,ID",
            "code": "MDC"
          }
        },
        {
          "@attributes": {
            "city": "Managua,NI",
            "code": "MGA"
          }
        },
        {
          "@attributes": {
            "city": "Manakara,MG",
            "code": "WVK"
          }
        },
        {
          "@attributes": {
            "city": "Mananara,MG",
            "code": "WMR"
          }
        },
        {
          "@attributes": {
            "city": "Mananjary,MG",
            "code": "MNJ"
          }
        },
        {
          "@attributes": {
            "city": "Manare,PG",
            "code": "MRM"
          }
        },
        {
          "@attributes": {
            "city": "Manassas,US",
            "code": "MNZ"
          }
        },
        {
          "@attributes": {
            "city": "Manaus,BR",
            "code": "MAO"
          }
        },
        {
          "@attributes": {
            "city": "Manchester,US",
            "code": "MHT"
          }
        },
        {
          "@attributes": {
            "city": "Manchester,GB",
            "code": "MAN"
          }
        },
        {
          "@attributes": {
            "city": "Mandabe,MG",
            "code": "WMD"
          }
        },
        {
          "@attributes": {
            "city": "Mandalay,MM",
            "code": "MDL"
          }
        },
        {
          "@attributes": {
            "city": "Mandalgobi,MN",
            "code": "MXW"
          }
        },
        {
          "@attributes": {
            "city": "Mandera,KE",
            "code": "NDE"
          }
        },
        {
          "@attributes": {
            "city": "Mandeville,JM",
            "code": "MVJ"
          }
        },
        {
          "@attributes": {
            "city": "Mandritsara,MG",
            "code": "WMA"
          }
        },
        {
          "@attributes": {
            "city": "Manega,GA",
            "code": "MGO"
          }
        },
        {
          "@attributes": {
            "city": "Manga,PG",
            "code": "MGP"
          }
        },
        {
          "@attributes": {
            "city": "Mangaia Island,CK",
            "code": "MGS"
          }
        },
        {
          "@attributes": {
            "city": "Mangalore,IN",
            "code": "IXE"
          }
        },
        {
          "@attributes": {
            "city": "Mangochi,MW",
            "code": "MAI"
          }
        },
        {
          "@attributes": {
            "city": "Mangole,ID",
            "code": "MAL"
          }
        },
        {
          "@attributes": {
            "city": "Mangrove Cay,BS",
            "code": "MAY"
          }
        },
        {
          "@attributes": {
            "city": "Mangunnyeon,KR",
            "code": "MWX"
          }
        },
        {
          "@attributes": {
            "city": "Manhattan,US",
            "code": "MHK"
          }
        },
        {
          "@attributes": {
            "city": "Manihi,PF",
            "code": "XMH"
          }
        },
        {
          "@attributes": {
            "city": "Maniitsoq,GL",
            "code": "JSU"
          }
        },
        {
          "@attributes": {
            "city": "Manila,US",
            "code": "MXA"
          }
        },
        {
          "@attributes": {
            "city": "Manila,PH",
            "code": "MNL"
          }
        },
        {
          "@attributes": {
            "city": "Maningrida,AU",
            "code": "MNG"
          }
        },
        {
          "@attributes": {
            "city": "Manistee,US",
            "code": "MBL"
          }
        },
        {
          "@attributes": {
            "city": "Manistique,US",
            "code": "ISQ"
          }
        },
        {
          "@attributes": {
            "city": "Manitouwadge,CA",
            "code": "YMG"
          }
        },
        {
          "@attributes": {
            "city": "Manitowoc,US",
            "code": "MTW"
          }
        },
        {
          "@attributes": {
            "city": "Manizales,CO",
            "code": "MZL"
          }
        },
        {
          "@attributes": {
            "city": "Manja,MG",
            "code": "MJA"
          }
        },
        {
          "@attributes": {
            "city": "Mankato,US",
            "code": "MKT"
          }
        },
        {
          "@attributes": {
            "city": "Manley Hot Springs,US",
            "code": "MLY"
          }
        },
        {
          "@attributes": {
            "city": "Mannheim Germany,DE",
            "code": "MHG"
          }
        },
        {
          "@attributes": {
            "city": "Manokotak,US",
            "code": "KMO"
          }
        },
        {
          "@attributes": {
            "city": "Manokwari,ID",
            "code": "MKW"
          }
        },
        {
          "@attributes": {
            "city": "Manono,CD",
            "code": "MNO"
          }
        },
        {
          "@attributes": {
            "city": "Mansa,ZM",
            "code": "MNS"
          }
        },
        {
          "@attributes": {
            "city": "Mansfield,GB",
            "code": "ZMA"
          }
        },
        {
          "@attributes": {
            "city": "Mansfield,US",
            "code": "MFD"
          }
        },
        {
          "@attributes": {
            "city": "Manston,GB",
            "code": "MSE"
          }
        },
        {
          "@attributes": {
            "city": "Manta,EC",
            "code": "MEC"
          }
        },
        {
          "@attributes": {
            "city": "Manteo,US",
            "code": "MEO"
          }
        },
        {
          "@attributes": {
            "city": "Manumu,PG",
            "code": "UUU"
          }
        },
        {
          "@attributes": {
            "city": "Manus Island,PG",
            "code": "MAS"
          }
        },
        {
          "@attributes": {
            "city": "Manzanillo,MX",
            "code": "ZLO"
          }
        },
        {
          "@attributes": {
            "city": "Manzanillo,CU",
            "code": "MZO"
          }
        },
        {
          "@attributes": {
            "city": "Manzhouli,CN",
            "code": "NZH"
          }
        },
        {
          "@attributes": {
            "city": "Maobi,GA",
            "code": "MGX"
          }
        },
        {
          "@attributes": {
            "city": "Maota,WS",
            "code": "MXS"
          }
        },
        {
          "@attributes": {
            "city": "Maputo,MZ",
            "code": "MPM"
          }
        },
        {
          "@attributes": {
            "city": "Mar Del Plata,AR",
            "code": "MDQ"
          }
        },
        {
          "@attributes": {
            "city": "Mara Lodges,KE",
            "code": "MRE"
          }
        },
        {
          "@attributes": {
            "city": "Maraba,BR",
            "code": "MAB"
          }
        },
        {
          "@attributes": {
            "city": "Maracaibo,VE",
            "code": "MAR"
          }
        },
        {
          "@attributes": {
            "city": "Maracay,VE",
            "code": "MYC"
          }
        },
        {
          "@attributes": {
            "city": "Marakai,KI",
            "code": "MZK"
          }
        },
        {
          "@attributes": {
            "city": "Marana,US",
            "code": "MZJ"
          }
        },
        {
          "@attributes": {
            "city": "Marathon,CA",
            "code": "YSP"
          }
        },
        {
          "@attributes": {
            "city": "Marathon,US",
            "code": "MTH"
          }
        },
        {
          "@attributes": {
            "city": "Marau Island,SB",
            "code": "RUS"
          }
        },
        {
          "@attributes": {
            "city": "Marbella,ES",
            "code": "QRL"
          }
        },
        {
          "@attributes": {
            "city": "Marble Bar,AU",
            "code": "MBB"
          }
        },
        {
          "@attributes": {
            "city": "Marble Canyon,US",
            "code": "MYH"
          }
        },
        {
          "@attributes": {
            "city": "Marburg An Der Lahn,DE",
            "code": "ZOI"
          }
        },
        {
          "@attributes": {
            "city": "Marco Island,US",
            "code": "MRK"
          }
        },
        {
          "@attributes": {
            "city": "Mardin,TR",
            "code": "MQM"
          }
        },
        {
          "@attributes": {
            "city": "Mare,NC",
            "code": "MEE"
          }
        },
        {
          "@attributes": {
            "city": "Mareeba,AU",
            "code": "MRG"
          }
        },
        {
          "@attributes": {
            "city": "Margaret River,AU",
            "code": "MQZ"
          }
        },
        {
          "@attributes": {
            "city": "Margaret River Station,AU",
            "code": "MGV"
          }
        },
        {
          "@attributes": {
            "city": "Margate,ZA",
            "code": "MGH"
          }
        },
        {
          "@attributes": {
            "city": "Marianske Lazne,CZ",
            "code": "MKA"
          }
        },
        {
          "@attributes": {
            "city": "Maribo,DK",
            "code": "MRW"
          }
        },
        {
          "@attributes": {
            "city": "Maribor,SI",
            "code": "MBX"
          }
        },
        {
          "@attributes": {
            "city": "Marie Galante,GP",
            "code": "GBJ"
          }
        },
        {
          "@attributes": {
            "city": "Mariehamn,FI",
            "code": "MHQ"
          }
        },
        {
          "@attributes": {
            "city": "Marietta,US",
            "code": "MGE"
          }
        },
        {
          "@attributes": {
            "city": "Marilia,BR",
            "code": "MII"
          }
        },
        {
          "@attributes": {
            "city": "Marina Di Massa,IT",
            "code": "QMM"
          }
        },
        {
          "@attributes": {
            "city": "Marinduque,PH",
            "code": "MRQ"
          }
        },
        {
          "@attributes": {
            "city": "Maringa,BR",
            "code": "MGF"
          }
        },
        {
          "@attributes": {
            "city": "Marion,US",
            "code": "MWA"
          }
        },
        {
          "@attributes": {
            "city": "Marion,US",
            "code": "MZZ"
          }
        },
        {
          "@attributes": {
            "city": "Mariposa,US",
            "code": "RMY"
          }
        },
        {
          "@attributes": {
            "city": "Mariupol,UA",
            "code": "MPW"
          }
        },
        {
          "@attributes": {
            "city": "Market Harborough,GB",
            "code": "XQM"
          }
        },
        {
          "@attributes": {
            "city": "Markovo,RU",
            "code": "KVM"
          }
        },
        {
          "@attributes": {
            "city": "Marl,DE",
            "code": "ZOJ"
          }
        },
        {
          "@attributes": {
            "city": "Marlborough,US",
            "code": "MXG"
          }
        },
        {
          "@attributes": {
            "city": "Marmande,FR",
            "code": "XMR"
          }
        },
        {
          "@attributes": {
            "city": "Marmaris,TR",
            "code": "QRQ"
          }
        },
        {
          "@attributes": {
            "city": "Marnardal,NO",
            "code": "ZYY"
          }
        },
        {
          "@attributes": {
            "city": "Maroantsetra,MG",
            "code": "WMN"
          }
        },
        {
          "@attributes": {
            "city": "Maroochydore,AU",
            "code": "MCY"
          }
        },
        {
          "@attributes": {
            "city": "Maroua,CM",
            "code": "MVR"
          }
        },
        {
          "@attributes": {
            "city": "Marquette,US",
            "code": "MQT"
          }
        },
        {
          "@attributes": {
            "city": "Marrakech,MA",
            "code": "RAK"
          }
        },
        {
          "@attributes": {
            "city": "Marsa Alam,EG",
            "code": "RMF"
          }
        },
        {
          "@attributes": {
            "city": "Marsala,IT",
            "code": "QMR"
          }
        },
        {
          "@attributes": {
            "city": "Marseille,FR",
            "code": "MRS"
          }
        },
        {
          "@attributes": {
            "city": "Marsh Harbour,BS",
            "code": "MHH"
          }
        },
        {
          "@attributes": {
            "city": "Marshall,US",
            "code": "MHL"
          }
        },
        {
          "@attributes": {
            "city": "Marshall,US",
            "code": "ASL"
          }
        },
        {
          "@attributes": {
            "city": "Marshall,US",
            "code": "MLL"
          }
        },
        {
          "@attributes": {
            "city": "Marshall,US",
            "code": "MML"
          }
        },
        {
          "@attributes": {
            "city": "Marshalltown,US",
            "code": "MIW"
          }
        },
        {
          "@attributes": {
            "city": "Marshfield,US",
            "code": "MFI"
          }
        },
        {
          "@attributes": {
            "city": "Martha S Vineyard,US",
            "code": "MVY"
          }
        },
        {
          "@attributes": {
            "city": "Martigny,CH",
            "code": "ZJM"
          }
        },
        {
          "@attributes": {
            "city": "Martinsburg,US",
            "code": "MRB"
          }
        },
        {
          "@attributes": {
            "city": "Marudi,MY",
            "code": "MUR"
          }
        },
        {
          "@attributes": {
            "city": "Mary,TM",
            "code": "MYP"
          }
        },
        {
          "@attributes": {
            "city": "Maryborough,AU",
            "code": "MBH"
          }
        },
        {
          "@attributes": {
            "city": "Marys Harbour,CA",
            "code": "YMH"
          }
        },
        {
          "@attributes": {
            "city": "Marysville,US",
            "code": "MYV"
          }
        },
        {
          "@attributes": {
            "city": "Masada,IL",
            "code": "MTZ"
          }
        },
        {
          "@attributes": {
            "city": "Masbate,PH",
            "code": "MBT"
          }
        },
        {
          "@attributes": {
            "city": "Maseru,LS",
            "code": "MSU"
          }
        },
        {
          "@attributes": {
            "city": "Mashad,IR",
            "code": "MHD"
          }
        },
        {
          "@attributes": {
            "city": "Masirah,OM",
            "code": "MSH"
          }
        },
        {
          "@attributes": {
            "city": "Mason cities,US",
            "code": "MCW"
          }
        },
        {
          "@attributes": {
            "city": "Massawa,ER",
            "code": "MSW"
          }
        },
        {
          "@attributes": {
            "city": "Massena,US",
            "code": "MSS"
          }
        },
        {
          "@attributes": {
            "city": "Masset,CA",
            "code": "ZMT"
          }
        },
        {
          "@attributes": {
            "city": "Masslo,ET",
            "code": "MZX"
          }
        },
        {
          "@attributes": {
            "city": "Masterton,NZ",
            "code": "MRO"
          }
        },
        {
          "@attributes": {
            "city": "Masvingo,ZW",
            "code": "MVZ"
          }
        },
        {
          "@attributes": {
            "city": "Matagami,CA",
            "code": "YNM"
          }
        },
        {
          "@attributes": {
            "city": "Mataiva,PF",
            "code": "MVT"
          }
        },
        {
          "@attributes": {
            "city": "Matam,SN",
            "code": "MAX"
          }
        },
        {
          "@attributes": {
            "city": "Matamata,NZ",
            "code": "MTA"
          }
        },
        {
          "@attributes": {
            "city": "Matamoros,MX",
            "code": "MAM"
          }
        },
        {
          "@attributes": {
            "city": "Matane,CA",
            "code": "YME"
          }
        },
        {
          "@attributes": {
            "city": "Matanzas,CU",
            "code": "VRO"
          }
        },
        {
          "@attributes": {
            "city": "Matapedia,CA",
            "code": "XLP"
          }
        },
        {
          "@attributes": {
            "city": "Mataram,ID",
            "code": "AMI"
          }
        },
        {
          "@attributes": {
            "city": "Matsaile,LS",
            "code": "MSG"
          }
        },
        {
          "@attributes": {
            "city": "Matsu,TW",
            "code": "MFK"
          }
        },
        {
          "@attributes": {
            "city": "Matsumoto,JP",
            "code": "MMJ"
          }
        },
        {
          "@attributes": {
            "city": "Matsuyama,JP",
            "code": "MYJ"
          }
        },
        {
          "@attributes": {
            "city": "Mattoon,US",
            "code": "MTO"
          }
        },
        {
          "@attributes": {
            "city": "Maturin,VE",
            "code": "MUN"
          }
        },
        {
          "@attributes": {
            "city": "Maubeuge,FR",
            "code": "XME"
          }
        },
        {
          "@attributes": {
            "city": "Mauke Island,CK",
            "code": "MUK"
          }
        },
        {
          "@attributes": {
            "city": "Maumere,ID",
            "code": "MOF"
          }
        },
        {
          "@attributes": {
            "city": "Maun,BW",
            "code": "MUB"
          }
        },
        {
          "@attributes": {
            "city": "Maupiti,PF",
            "code": "MAU"
          }
        },
        {
          "@attributes": {
            "city": "Mauritius,MU",
            "code": "MRU"
          }
        },
        {
          "@attributes": {
            "city": "Maxville,CA",
            "code": "XID"
          }
        },
        {
          "@attributes": {
            "city": "May Creek,US",
            "code": "MYK"
          }
        },
        {
          "@attributes": {
            "city": "Mayaguana,BS",
            "code": "MYG"
          }
        },
        {
          "@attributes": {
            "city": "Mayaguez,US",
            "code": "MAZ"
          }
        },
        {
          "@attributes": {
            "city": "Mayo,CA",
            "code": "YMA"
          }
        },
        {
          "@attributes": {
            "city": "Mazamari,PE",
            "code": "MZA"
          }
        },
        {
          "@attributes": {
            "city": "Mazar I Sharif,AF",
            "code": "MZR"
          }
        },
        {
          "@attributes": {
            "city": "Mazatlan,MX",
            "code": "MZT"
          }
        },
        {
          "@attributes": {
            "city": "Mbabane,SZ",
            "code": "QMN"
          }
        },
        {
          "@attributes": {
            "city": "Mbandaka,CD",
            "code": "MDK"
          }
        },
        {
          "@attributes": {
            "city": "Mbarara,UG",
            "code": "MBQ"
          }
        },
        {
          "@attributes": {
            "city": "Mbeya,TZ",
            "code": "MBI"
          }
        },
        {
          "@attributes": {
            "city": "Mbuji Mayi,CD",
            "code": "MJM"
          }
        },
        {
          "@attributes": {
            "city": "McAlester,US",
            "code": "MLC"
          }
        },
        {
          "@attributes": {
            "city": "McAllen,US",
            "code": "MFE"
          }
        },
        {
          "@attributes": {
            "city": "McArthur River,AU",
            "code": "MCV"
          }
        },
        {
          "@attributes": {
            "city": "McComb,US",
            "code": "MCB"
          }
        },
        {
          "@attributes": {
            "city": "McCook,US",
            "code": "MCK"
          }
        },
        {
          "@attributes": {
            "city": "McPherson,US",
            "code": "MPR"
          }
        },
        {
          "@attributes": {
            "city": "Mccall,US",
            "code": "MYL"
          }
        },
        {
          "@attributes": {
            "city": "Mccarthy,US",
            "code": "MXY"
          }
        },
        {
          "@attributes": {
            "city": "Mcgrath,US",
            "code": "MCG"
          }
        },
        {
          "@attributes": {
            "city": "Meadow Lake,CA",
            "code": "YLJ"
          }
        },
        {
          "@attributes": {
            "city": "Meadville,US",
            "code": "MEJ"
          }
        },
        {
          "@attributes": {
            "city": "Meaulte,FR",
            "code": "BYF"
          }
        },
        {
          "@attributes": {
            "city": "Mechelen,BE",
            "code": "ZGP"
          }
        },
        {
          "@attributes": {
            "city": "Medan,ID",
            "code": "MES"
          }
        },
        {
          "@attributes": {
            "city": "Medellin,CO",
            "code": "MDE"
          }
        },
        {
          "@attributes": {
            "city": "Medford,US",
            "code": "MDF"
          }
        },
        {
          "@attributes": {
            "city": "Medford,US",
            "code": "MFR"
          }
        },
        {
          "@attributes": {
            "city": "Medfra,US",
            "code": "MDR"
          }
        },
        {
          "@attributes": {
            "city": "Medicine Hat,CA",
            "code": "YXH"
          }
        },
        {
          "@attributes": {
            "city": "Medouneu,GA",
            "code": "MDV"
          }
        },
        {
          "@attributes": {
            "city": "Meekathara,AU",
            "code": "MKR"
          }
        },
        {
          "@attributes": {
            "city": "Megeve,FR",
            "code": "MVV"
          }
        },
        {
          "@attributes": {
            "city": "Meghauli,NP",
            "code": "MEY"
          }
        },
        {
          "@attributes": {
            "city": "Mehamn,NO",
            "code": "MEH"
          }
        },
        {
          "@attributes": {
            "city": "Meixian,CN",
            "code": "MXZ"
          }
        },
        {
          "@attributes": {
            "city": "Mekambo,GA",
            "code": "MKB"
          }
        },
        {
          "@attributes": {
            "city": "Mekane,ET",
            "code": "MKS"
          }
        },
        {
          "@attributes": {
            "city": "Mekele,ET",
            "code": "MQX"
          }
        },
        {
          "@attributes": {
            "city": "Meknes,MA",
            "code": "MEK"
          }
        },
        {
          "@attributes": {
            "city": "Mekoryuk,US",
            "code": "MYU"
          }
        },
        {
          "@attributes": {
            "city": "Melangguane,ID",
            "code": "MNA"
          }
        },
        {
          "@attributes": {
            "city": "Melbourne,US",
            "code": "MLB"
          }
        },
        {
          "@attributes": {
            "city": "Melbourne,AU",
            "code": "MEL"
          }
        },
        {
          "@attributes": {
            "city": "Melilla,ES",
            "code": "MLN"
          }
        },
        {
          "@attributes": {
            "city": "Melinda,BZ",
            "code": "MDB"
          }
        },
        {
          "@attributes": {
            "city": "Melo,UY",
            "code": "MLZ"
          }
        },
        {
          "@attributes": {
            "city": "Melville,CA",
            "code": "XEK"
          }
        },
        {
          "@attributes": {
            "city": "Memambetsu,JP",
            "code": "MMB"
          }
        },
        {
          "@attributes": {
            "city": "Memmingen,DE",
            "code": "QOX"
          }
        },
        {
          "@attributes": {
            "city": "Memphis,US",
            "code": "MEM"
          }
        },
        {
          "@attributes": {
            "city": "Mende,FR",
            "code": "MEN"
          }
        },
        {
          "@attributes": {
            "city": "Mendi,PG",
            "code": "MDU"
          }
        },
        {
          "@attributes": {
            "city": "Mendoza,AR",
            "code": "MDZ"
          }
        },
        {
          "@attributes": {
            "city": "Menominee,US",
            "code": "MNM"
          }
        },
        {
          "@attributes": {
            "city": "Menongue,AO",
            "code": "SPP"
          }
        },
        {
          "@attributes": {
            "city": "Menorca,ES",
            "code": "MAH"
          }
        },
        {
          "@attributes": {
            "city": "Menton,FR",
            "code": "XMT"
          }
        },
        {
          "@attributes": {
            "city": "Menyamya,PG",
            "code": "MYX"
          }
        },
        {
          "@attributes": {
            "city": "Merano,IT",
            "code": "ZMR"
          }
        },
        {
          "@attributes": {
            "city": "Merauke,ID",
            "code": "MKQ"
          }
        },
        {
          "@attributes": {
            "city": "Merced,US",
            "code": "MCE"
          }
        },
        {
          "@attributes": {
            "city": "Meribel,FR",
            "code": "MFX"
          }
        },
        {
          "@attributes": {
            "city": "Merida,ES",
            "code": "QWX"
          }
        },
        {
          "@attributes": {
            "city": "Merida,MX",
            "code": "MID"
          }
        },
        {
          "@attributes": {
            "city": "Merida,VE",
            "code": "MRD"
          }
        },
        {
          "@attributes": {
            "city": "Meridian,US",
            "code": "MEI"
          }
        },
        {
          "@attributes": {
            "city": "Merimbula,AU",
            "code": "MIM"
          }
        },
        {
          "@attributes": {
            "city": "Merlo,AR",
            "code": "RLO"
          }
        },
        {
          "@attributes": {
            "city": "Merowe,SD",
            "code": "MWE"
          }
        },
        {
          "@attributes": {
            "city": "Merrill,US",
            "code": "RRL"
          }
        },
        {
          "@attributes": {
            "city": "Merritt,CA",
            "code": "YMB"
          }
        },
        {
          "@attributes": {
            "city": "Mersa Matruh,EG",
            "code": "MUH"
          }
        },
        {
          "@attributes": {
            "city": "Mersin,TR",
            "code": "QIN"
          }
        },
        {
          "@attributes": {
            "city": "Mersing,MY",
            "code": "MEP"
          }
        },
        {
          "@attributes": {
            "city": "Merty,AU",
            "code": "RTY"
          }
        },
        {
          "@attributes": {
            "city": "Meru Kinna,KE",
            "code": "JJM"
          }
        },
        {
          "@attributes": {
            "city": "Mesa,US",
            "code": "MSC"
          }
        },
        {
          "@attributes": {
            "city": "Mesquite,US",
            "code": "MFH"
          }
        },
        {
          "@attributes": {
            "city": "Messina,ZA",
            "code": "MEZ"
          }
        },
        {
          "@attributes": {
            "city": "Messina,IT",
            "code": "QME"
          }
        },
        {
          "@attributes": {
            "city": "Metekel,ET",
            "code": "MKD"
          }
        },
        {
          "@attributes": {
            "city": "Metemma,ET",
            "code": "ETE"
          }
        },
        {
          "@attributes": {
            "city": "Metlakatla,US",
            "code": "MTM"
          }
        },
        {
          "@attributes": {
            "city": "Metz,FR",
            "code": "MZM"
          }
        },
        {
          "@attributes": {
            "city": "Metz Nancy,FR",
            "code": "ETZ"
          }
        },
        {
          "@attributes": {
            "city": "Mexicali,MX",
            "code": "MXL"
          }
        },
        {
          "@attributes": {
            "city": "Mexico cities,MX",
            "code": "MEX"
          }
        },
        {
          "@attributes": {
            "city": "Mfuwe,ZM",
            "code": "MFU"
          }
        },
        {
          "@attributes": {
            "city": "Miami,US",
            "code": "MIO"
          }
        },
        {
          "@attributes": {
            "city": "Miami,US",
            "code": "MIA"
          }
        },
        {
          "@attributes": {
            "city": "Mian Yang,CN",
            "code": "MIG"
          }
        },
        {
          "@attributes": {
            "city": "Miandrivazo,MG",
            "code": "ZVA"
          }
        },
        {
          "@attributes": {
            "city": "Mianwali,PK",
            "code": "MWD"
          }
        },
        {
          "@attributes": {
            "city": "Michigan cities,US",
            "code": "MGC"
          }
        },
        {
          "@attributes": {
            "city": "Middle Caicos,TC",
            "code": "MDS"
          }
        },
        {
          "@attributes": {
            "city": "Middlemount,AU",
            "code": "MMM"
          }
        },
        {
          "@attributes": {
            "city": "Middleton Island,US",
            "code": "MDO"
          }
        },
        {
          "@attributes": {
            "city": "Middletown,US",
            "code": "MWO"
          }
        },
        {
          "@attributes": {
            "city": "Midland,US",
            "code": "MAF"
          }
        },
        {
          "@attributes": {
            "city": "Midway Island,UM",
            "code": "MDY"
          }
        },
        {
          "@attributes": {
            "city": "Miedzyzdroje,PL",
            "code": "ZMC"
          }
        },
        {
          "@attributes": {
            "city": "Mikkeli,FI",
            "code": "MIK"
          }
        },
        {
          "@attributes": {
            "city": "Milan,IT",
            "code": "MIL"
          }
        },
        {
          "@attributes": {
            "city": "Mildenhall,GB",
            "code": "MHZ"
          }
        },
        {
          "@attributes": {
            "city": "Mildura,AU",
            "code": "MQL"
          }
        },
        {
          "@attributes": {
            "city": "Miles,AU",
            "code": "WLE"
          }
        },
        {
          "@attributes": {
            "city": "Miles cities,US",
            "code": "MLS"
          }
        },
        {
          "@attributes": {
            "city": "Milford,US",
            "code": "MLF"
          }
        },
        {
          "@attributes": {
            "city": "Milford Sound,NZ",
            "code": "MFN"
          }
        },
        {
          "@attributes": {
            "city": "Milingimbi,AU",
            "code": "MGT"
          }
        },
        {
          "@attributes": {
            "city": "Milledgeville,US",
            "code": "MLJ"
          }
        },
        {
          "@attributes": {
            "city": "Millinocket,US",
            "code": "MLT"
          }
        },
        {
          "@attributes": {
            "city": "Millville,US",
            "code": "MIV"
          }
        },
        {
          "@attributes": {
            "city": "Milos,GR",
            "code": "MLO"
          }
        },
        {
          "@attributes": {
            "city": "Milton,US",
            "code": "NSE"
          }
        },
        {
          "@attributes": {
            "city": "Milton Keynes,GB",
            "code": "KYN"
          }
        },
        {
          "@attributes": {
            "city": "Milwaukee,US",
            "code": "MKE"
          }
        },
        {
          "@attributes": {
            "city": "Minaki,CA",
            "code": "YMI"
          }
        },
        {
          "@attributes": {
            "city": "Minami Daito,JP",
            "code": "MMD"
          }
        },
        {
          "@attributes": {
            "city": "Minatitlan,MX",
            "code": "MTT"
          }
        },
        {
          "@attributes": {
            "city": "Minchumina,US",
            "code": "MHM"
          }
        },
        {
          "@attributes": {
            "city": "Minden,DE",
            "code": "ZOM"
          }
        },
        {
          "@attributes": {
            "city": "Minden,US",
            "code": "MEV"
          }
        },
        {
          "@attributes": {
            "city": "Mindiptana,ID",
            "code": "MDP"
          }
        },
        {
          "@attributes": {
            "city": "Mineralnye Vody,RU",
            "code": "MRV"
          }
        },
        {
          "@attributes": {
            "city": "Miners Bay,CA",
            "code": "YAV"
          }
        },
        {
          "@attributes": {
            "city": "Minneapolis,US",
            "code": "MSP"
          }
        },
        {
          "@attributes": {
            "city": "Minnipa,AU",
            "code": "MIN"
          }
        },
        {
          "@attributes": {
            "city": "Minocqua,US",
            "code": "ARV"
          }
        },
        {
          "@attributes": {
            "city": "Minot,US",
            "code": "MOT"
          }
        },
        {
          "@attributes": {
            "city": "Minsk,BY",
            "code": "MSQ"
          }
        },
        {
          "@attributes": {
            "city": "Minto,US",
            "code": "MNT"
          }
        },
        {
          "@attributes": {
            "city": "Minvoul,GA",
            "code": "MVX"
          }
        },
        {
          "@attributes": {
            "city": "Miramar,AR",
            "code": "MJR"
          }
        },
        {
          "@attributes": {
            "city": "Miramichi,CA",
            "code": "YCH"
          }
        },
        {
          "@attributes": {
            "city": "Miranda Downs,AU",
            "code": "MWY"
          }
        },
        {
          "@attributes": {
            "city": "Miri,MY",
            "code": "MYY"
          }
        },
        {
          "@attributes": {
            "city": "Mirny,RU",
            "code": "MJZ"
          }
        },
        {
          "@attributes": {
            "city": "Misawa,JP",
            "code": "MSJ"
          }
        },
        {
          "@attributes": {
            "city": "Misima Island,PG",
            "code": "MIS"
          }
        },
        {
          "@attributes": {
            "city": "Miskolc,HU",
            "code": "MCQ"
          }
        },
        {
          "@attributes": {
            "city": "Missoula,US",
            "code": "MSO"
          }
        },
        {
          "@attributes": {
            "city": "Misurata,LY",
            "code": "MRA"
          }
        },
        {
          "@attributes": {
            "city": "Mitchell,US",
            "code": "MHE"
          }
        },
        {
          "@attributes": {
            "city": "Mitiaro Island,CK",
            "code": "MOI"
          }
        },
        {
          "@attributes": {
            "city": "Mito,JP",
            "code": "QIS"
          }
        },
        {
          "@attributes": {
            "city": "Mittenwald,DE",
            "code": "QWD"
          }
        },
        {
          "@attributes": {
            "city": "Mitu,CO",
            "code": "MVP"
          }
        },
        {
          "@attributes": {
            "city": "Mitzic,GA",
            "code": "MZC"
          }
        },
        {
          "@attributes": {
            "city": "Miyakejima,JP",
            "code": "MYE"
          }
        },
        {
          "@attributes": {
            "city": "Miyako Jima,JP",
            "code": "MMY"
          }
        },
        {
          "@attributes": {
            "city": "Miyazaki,JP",
            "code": "KMI"
          }
        },
        {
          "@attributes": {
            "city": "Mjolby,SE",
            "code": "XXM"
          }
        },
        {
          "@attributes": {
            "city": "Mkuze,ZA",
            "code": "MZQ"
          }
        },
        {
          "@attributes": {
            "city": "Mmabatho,ZA",
            "code": "MBD"
          }
        },
        {
          "@attributes": {
            "city": "Mo I Rana,NO",
            "code": "MQN"
          }
        },
        {
          "@attributes": {
            "city": "Moa CU,CU",
            "code": "MOA"
          }
        },
        {
          "@attributes": {
            "city": "Moab,US",
            "code": "CNY"
          }
        },
        {
          "@attributes": {
            "city": "Moala,FJ",
            "code": "MFJ"
          }
        },
        {
          "@attributes": {
            "city": "Moanamani,ID",
            "code": "ONI"
          }
        },
        {
          "@attributes": {
            "city": "Moanda,CD",
            "code": "MNB"
          }
        },
        {
          "@attributes": {
            "city": "Moanda,GA",
            "code": "MFF"
          }
        },
        {
          "@attributes": {
            "city": "Moberly,US",
            "code": "MBY"
          }
        },
        {
          "@attributes": {
            "city": "Mobile,US",
            "code": "MOB"
          }
        },
        {
          "@attributes": {
            "city": "Mococa,BR",
            "code": "QOA"
          }
        },
        {
          "@attributes": {
            "city": "Modena,IT",
            "code": "ZMO"
          }
        },
        {
          "@attributes": {
            "city": "Modesto,US",
            "code": "MOD"
          }
        },
        {
          "@attributes": {
            "city": "Moelv,NO",
            "code": "XUJ"
          }
        },
        {
          "@attributes": {
            "city": "Moers,DE",
            "code": "ZON"
          }
        },
        {
          "@attributes": {
            "city": "Mogadishu,SO",
            "code": "MGQ"
          }
        },
        {
          "@attributes": {
            "city": "Mogi Das Cruzes,BR",
            "code": "QMI"
          }
        },
        {
          "@attributes": {
            "city": "Mogilev,BY",
            "code": "MVQ"
          }
        },
        {
          "@attributes": {
            "city": "Mohe County,CN",
            "code": "OHE"
          }
        },
        {
          "@attributes": {
            "city": "Moheli,KM",
            "code": "NWA"
          }
        },
        {
          "@attributes": {
            "city": "Mohenjodaro,PK",
            "code": "MJD"
          }
        },
        {
          "@attributes": {
            "city": "Mojave,US",
            "code": "MHV"
          }
        },
        {
          "@attributes": {
            "city": "Mokhotlong,LS",
            "code": "MKH"
          }
        },
        {
          "@attributes": {
            "city": "Mokpo,KR",
            "code": "MPK"
          }
        },
        {
          "@attributes": {
            "city": "Molde,NO",
            "code": "MOL"
          }
        },
        {
          "@attributes": {
            "city": "Moline,US",
            "code": "MLI"
          }
        },
        {
          "@attributes": {
            "city": "Mombasa,KE",
            "code": "MBA"
          }
        },
        {
          "@attributes": {
            "city": "Momeik,MM",
            "code": "MOE"
          }
        },
        {
          "@attributes": {
            "city": "Monaco,FR",
            "code": "XMM"
          }
        },
        {
          "@attributes": {
            "city": "Monastir,TN",
            "code": "MIR"
          }
        },
        {
          "@attributes": {
            "city": "Monbetsu,JP",
            "code": "MBE"
          }
        },
        {
          "@attributes": {
            "city": "Monclova,MX",
            "code": "LOV"
          }
        },
        {
          "@attributes": {
            "city": "Moncton,CA",
            "code": "YQM"
          }
        },
        {
          "@attributes": {
            "city": "Mongu,ZM",
            "code": "MNR"
          }
        },
        {
          "@attributes": {
            "city": "Monkey Mia,AU",
            "code": "MJK"
          }
        },
        {
          "@attributes": {
            "city": "Mono,SB",
            "code": "MNY"
          }
        },
        {
          "@attributes": {
            "city": "Monroe,US",
            "code": "MLU"
          }
        },
        {
          "@attributes": {
            "city": "Monroeville,US",
            "code": "MVC"
          }
        },
        {
          "@attributes": {
            "city": "Monrovia,LR",
            "code": "MLW"
          }
        },
        {
          "@attributes": {
            "city": "Mons,BE",
            "code": "QMO"
          }
        },
        {
          "@attributes": {
            "city": "Mont Dauphin,FR",
            "code": "SCP"
          }
        },
        {
          "@attributes": {
            "city": "Mont De Marsen,FR",
            "code": "XMJ"
          }
        },
        {
          "@attributes": {
            "city": "Mont Joli,CA",
            "code": "YYY"
          }
        },
        {
          "@attributes": {
            "city": "Mont Tremblant,CA",
            "code": "YTM"
          }
        },
        {
          "@attributes": {
            "city": "Montague,US",
            "code": "SIY"
          }
        },
        {
          "@attributes": {
            "city": "Montauban,FR",
            "code": "XMW"
          }
        },
        {
          "@attributes": {
            "city": "Montauk,US",
            "code": "MTP"
          }
        },
        {
          "@attributes": {
            "city": "Montbelliard,FR",
            "code": "XMF"
          }
        },
        {
          "@attributes": {
            "city": "Monte Carlo,MC",
            "code": "MCM"
          }
        },
        {
          "@attributes": {
            "city": "Monte Dourado,BR",
            "code": "MEU"
          }
        },
        {
          "@attributes": {
            "city": "Montego Bay,JM",
            "code": "MBJ"
          }
        },
        {
          "@attributes": {
            "city": "Montelimar,FR",
            "code": "XMK"
          }
        },
        {
          "@attributes": {
            "city": "Monterey,US",
            "code": "MRY"
          }
        },
        {
          "@attributes": {
            "city": "Monteria,CO",
            "code": "MTR"
          }
        },
        {
          "@attributes": {
            "city": "Monterrey,MX",
            "code": "MTY"
          }
        },
        {
          "@attributes": {
            "city": "Montes Claros,BR",
            "code": "MOC"
          }
        },
        {
          "@attributes": {
            "city": "Montevideo,US",
            "code": "MVE"
          }
        },
        {
          "@attributes": {
            "city": "Montevideo,UY",
            "code": "MVD"
          }
        },
        {
          "@attributes": {
            "city": "Montgomery,US",
            "code": "MGJ"
          }
        },
        {
          "@attributes": {
            "city": "Montgomery,US",
            "code": "MGM"
          }
        },
        {
          "@attributes": {
            "city": "Monticello,US",
            "code": "MSV"
          }
        },
        {
          "@attributes": {
            "city": "Montilla,ES",
            "code": "OZU"
          }
        },
        {
          "@attributes": {
            "city": "Montlucon,FR",
            "code": "MCU"
          }
        },
        {
          "@attributes": {
            "city": "Monto,AU",
            "code": "MNQ"
          }
        },
        {
          "@attributes": {
            "city": "Montpelier,US",
            "code": "MPV"
          }
        },
        {
          "@attributes": {
            "city": "Montpellier,FR",
            "code": "MPL"
          }
        },
        {
          "@attributes": {
            "city": "Montreal,CA",
            "code": "YMQ"
          }
        },
        {
          "@attributes": {
            "city": "Montreux,CH",
            "code": "ZJP"
          }
        },
        {
          "@attributes": {
            "city": "Montrose,US",
            "code": "MTJ"
          }
        },
        {
          "@attributes": {
            "city": "Montserrat,DM",
            "code": "MNI"
          }
        },
        {
          "@attributes": {
            "city": "Moolawatana,AU",
            "code": "MWT"
          }
        },
        {
          "@attributes": {
            "city": "Moomba,AU",
            "code": "MOO"
          }
        },
        {
          "@attributes": {
            "city": "Moorabbin,AU",
            "code": "MBW"
          }
        },
        {
          "@attributes": {
            "city": "Moorea,PF",
            "code": "MOZ"
          }
        },
        {
          "@attributes": {
            "city": "Moose Jaw,CA",
            "code": "YMJ"
          }
        },
        {
          "@attributes": {
            "city": "Moosonee,CA",
            "code": "YMO"
          }
        },
        {
          "@attributes": {
            "city": "Mopti,ML",
            "code": "MZI"
          }
        },
        {
          "@attributes": {
            "city": "Mora,SE",
            "code": "MXX"
          }
        },
        {
          "@attributes": {
            "city": "Morafenobe,MG",
            "code": "TVA"
          }
        },
        {
          "@attributes": {
            "city": "Moranbah,AU",
            "code": "MOV"
          }
        },
        {
          "@attributes": {
            "city": "Moree,AU",
            "code": "MRZ"
          }
        },
        {
          "@attributes": {
            "city": "Morehead,PG",
            "code": "MHY"
          }
        },
        {
          "@attributes": {
            "city": "Morelia,MX",
            "code": "MLM"
          }
        },
        {
          "@attributes": {
            "city": "Morgantown,US",
            "code": "MGW"
          }
        },
        {
          "@attributes": {
            "city": "Morges,CH",
            "code": "ZJQ"
          }
        },
        {
          "@attributes": {
            "city": "Morioka,JP",
            "code": "HNA"
          }
        },
        {
          "@attributes": {
            "city": "Morlaix,FR",
            "code": "MXN"
          }
        },
        {
          "@attributes": {
            "city": "Mornington,AU",
            "code": "ONG"
          }
        },
        {
          "@attributes": {
            "city": "Morobe,PG",
            "code": "OBM"
          }
        },
        {
          "@attributes": {
            "city": "Morombe,MG",
            "code": "MXM"
          }
        },
        {
          "@attributes": {
            "city": "Moron,ES",
            "code": "OZP"
          }
        },
        {
          "@attributes": {
            "city": "Morondava,MG",
            "code": "MOQ"
          }
        },
        {
          "@attributes": {
            "city": "Moroni,KM",
            "code": "YVA"
          }
        },
        {
          "@attributes": {
            "city": "Morotai Island,ID",
            "code": "OTI"
          }
        },
        {
          "@attributes": {
            "city": "Morristown,US",
            "code": "MMU"
          }
        },
        {
          "@attributes": {
            "city": "Morristown,US",
            "code": "MOR"
          }
        },
        {
          "@attributes": {
            "city": "Moruroa Atoll,PF",
            "code": "UOA"
          }
        },
        {
          "@attributes": {
            "city": "Moruya,AU",
            "code": "MYA"
          }
        },
        {
          "@attributes": {
            "city": "Morzine,FR",
            "code": "XMQ"
          }
        },
        {
          "@attributes": {
            "city": "Moscow,RU",
            "code": "MOW"
          }
        },
        {
          "@attributes": {
            "city": "Moser Bay,US",
            "code": "KMY"
          }
        },
        {
          "@attributes": {
            "city": "Moses Lake,US",
            "code": "MWH"
          }
        },
        {
          "@attributes": {
            "city": "Mosjoen,NO",
            "code": "MJF"
          }
        },
        {
          "@attributes": {
            "city": "Moss,NO",
            "code": "XKM"
          }
        },
        {
          "@attributes": {
            "city": "Moss cities,NO",
            "code": "RYG"
          }
        },
        {
          "@attributes": {
            "city": "Mossel Bay,ZA",
            "code": "MZY"
          }
        },
        {
          "@attributes": {
            "city": "Mossendjo,CG",
            "code": "MSX"
          }
        },
        {
          "@attributes": {
            "city": "Mossoro,BR",
            "code": "MVF"
          }
        },
        {
          "@attributes": {
            "city": "Mostar,BA",
            "code": "OMO"
          }
        },
        {
          "@attributes": {
            "city": "Mosteiros,CV",
            "code": "MTI"
          }
        },
        {
          "@attributes": {
            "city": "Mosul,IQ",
            "code": "OSM"
          }
        },
        {
          "@attributes": {
            "city": "Mota Lava,VU",
            "code": "MTV"
          }
        },
        {
          "@attributes": {
            "city": "Motherwell,GB",
            "code": "XQW"
          }
        },
        {
          "@attributes": {
            "city": "Mouila,GA",
            "code": "MJL"
          }
        },
        {
          "@attributes": {
            "city": "Moulin Sur Allier,FR",
            "code": "XMU"
          }
        },
        {
          "@attributes": {
            "city": "Moulmein,MM",
            "code": "MNU"
          }
        },
        {
          "@attributes": {
            "city": "Moultrie,US",
            "code": "MGR"
          }
        },
        {
          "@attributes": {
            "city": "Moundou,TD",
            "code": "MQQ"
          }
        },
        {
          "@attributes": {
            "city": "Mount Cook,NZ",
            "code": "MON"
          }
        },
        {
          "@attributes": {
            "city": "Mount Holly,US",
            "code": "LLY"
          }
        },
        {
          "@attributes": {
            "city": "Mount Hotham,AU",
            "code": "MHU"
          }
        },
        {
          "@attributes": {
            "city": "Mount Isa,AU",
            "code": "ISA"
          }
        },
        {
          "@attributes": {
            "city": "Mount Magnet,AU",
            "code": "MMG"
          }
        },
        {
          "@attributes": {
            "city": "Mount Pleasant,US",
            "code": "MPS"
          }
        },
        {
          "@attributes": {
            "city": "Mount Pleasant,US",
            "code": "MOP"
          }
        },
        {
          "@attributes": {
            "city": "Mount Pleasant,FK",
            "code": "MPN"
          }
        },
        {
          "@attributes": {
            "city": "Mount Shasta,US",
            "code": "MHS"
          }
        },
        {
          "@attributes": {
            "city": "Mount Union,US",
            "code": "MUU"
          }
        },
        {
          "@attributes": {
            "city": "Mount Vernon,US",
            "code": "MVW"
          }
        },
        {
          "@attributes": {
            "city": "Mountain Home,US",
            "code": "MUO"
          }
        },
        {
          "@attributes": {
            "city": "Mountain Home,US",
            "code": "WMH"
          }
        },
        {
          "@attributes": {
            "city": "Mountain View,US",
            "code": "NUQ"
          }
        },
        {
          "@attributes": {
            "city": "Mountain Village,US",
            "code": "MOU"
          }
        },
        {
          "@attributes": {
            "city": "Moutiers,FR",
            "code": "QMU"
          }
        },
        {
          "@attributes": {
            "city": "Moyale,ET",
            "code": "MYS"
          }
        },
        {
          "@attributes": {
            "city": "Mpache,NA",
            "code": "MPA"
          }
        },
        {
          "@attributes": {
            "city": "Mt Cook,NZ",
            "code": "GTN"
          }
        },
        {
          "@attributes": {
            "city": "Mt Gambier,AU",
            "code": "MGB"
          }
        },
        {
          "@attributes": {
            "city": "Mt Hagen,PG",
            "code": "HGU"
          }
        },
        {
          "@attributes": {
            "city": "Mt Pocono,US",
            "code": "MPO"
          }
        },
        {
          "@attributes": {
            "city": "Mt Vernon,US",
            "code": "MVN"
          }
        },
        {
          "@attributes": {
            "city": "Mtwara,TZ",
            "code": "MYW"
          }
        },
        {
          "@attributes": {
            "city": "Muang Xai,LA",
            "code": "ODY"
          }
        },
        {
          "@attributes": {
            "city": "Mudanjiang,CN",
            "code": "MDG"
          }
        },
        {
          "@attributes": {
            "city": "Mudgee,AU",
            "code": "DGE"
          }
        },
        {
          "@attributes": {
            "city": "Muelheim An Der Ruhr,DE",
            "code": "ZOO"
          }
        },
        {
          "@attributes": {
            "city": "Muenster,DE",
            "code": "FMO"
          }
        },
        {
          "@attributes": {
            "city": "Muharraq,BH",
            "code": "BAH"
          }
        },
        {
          "@attributes": {
            "city": "Muharraq Town,BH",
            "code": "GBQ"
          }
        },
        {
          "@attributes": {
            "city": "Mukah,MY",
            "code": "MKM"
          }
        },
        {
          "@attributes": {
            "city": "Mukalla,YE",
            "code": "MKX"
          }
        },
        {
          "@attributes": {
            "city": "Mukeiras,AO",
            "code": "UKR"
          }
        },
        {
          "@attributes": {
            "city": "Mulga Park,AU",
            "code": "MUP"
          }
        },
        {
          "@attributes": {
            "city": "Mulhouse,FR",
            "code": "MLH"
          }
        },
        {
          "@attributes": {
            "city": "Mulhouse Basel,FR",
            "code": "EAP"
          }
        },
        {
          "@attributes": {
            "city": "Mulia,ID",
            "code": "LII"
          }
        },
        {
          "@attributes": {
            "city": "Mulka,AU",
            "code": "MVK"
          }
        },
        {
          "@attributes": {
            "city": "Multan,PK",
            "code": "MUX"
          }
        },
        {
          "@attributes": {
            "city": "Mulu,MY",
            "code": "MZV"
          }
        },
        {
          "@attributes": {
            "city": "Mumbai,IN",
            "code": "BOM"
          }
        },
        {
          "@attributes": {
            "city": "Muncie,US",
            "code": "MIE"
          }
        },
        {
          "@attributes": {
            "city": "Munda,SB",
            "code": "MUA"
          }
        },
        {
          "@attributes": {
            "city": "Mungeranie,AU",
            "code": "MNE"
          }
        },
        {
          "@attributes": {
            "city": "Munich,DE",
            "code": "MUC"
          }
        },
        {
          "@attributes": {
            "city": "Murcia,ES",
            "code": "MJV"
          }
        },
        {
          "@attributes": {
            "city": "Muriae,BR",
            "code": "QUR"
          }
        },
        {
          "@attributes": {
            "city": "Murmansk,RU",
            "code": "MMK"
          }
        },
        {
          "@attributes": {
            "city": "Murray,US",
            "code": "CEY"
          }
        },
        {
          "@attributes": {
            "city": "Murray Island,AU",
            "code": "MYI"
          }
        },
        {
          "@attributes": {
            "city": "Mus Tr,TR",
            "code": "MSR"
          }
        },
        {
          "@attributes": {
            "city": "Muscat,OM",
            "code": "MCT"
          }
        },
        {
          "@attributes": {
            "city": "Muscatine,US",
            "code": "MUT"
          }
        },
        {
          "@attributes": {
            "city": "Muscle Shoals,US",
            "code": "MSL"
          }
        },
        {
          "@attributes": {
            "city": "Muskegon,US",
            "code": "MKG"
          }
        },
        {
          "@attributes": {
            "city": "Muskogee,US",
            "code": "MKO"
          }
        },
        {
          "@attributes": {
            "city": "Muskoka,CA",
            "code": "YQA"
          }
        },
        {
          "@attributes": {
            "city": "Muskrat Lake Dam Indian Rsve,CA",
            "code": "MSA"
          }
        },
        {
          "@attributes": {
            "city": "Musoma,TZ",
            "code": "MUZ"
          }
        },
        {
          "@attributes": {
            "city": "Mussau,PG",
            "code": "MWU"
          }
        },
        {
          "@attributes": {
            "city": "Mustique,DM",
            "code": "MQS"
          }
        },
        {
          "@attributes": {
            "city": "Mutare,ZW",
            "code": "UTA"
          }
        },
        {
          "@attributes": {
            "city": "Muting,ID",
            "code": "MUF"
          }
        },
        {
          "@attributes": {
            "city": "Muttaburra,AU",
            "code": "UTB"
          }
        },
        {
          "@attributes": {
            "city": "Muzzafarpu,IN",
            "code": "MZU"
          }
        },
        {
          "@attributes": {
            "city": "Mwanza,TZ",
            "code": "MWZ"
          }
        },
        {
          "@attributes": {
            "city": "Myeik,MM",
            "code": "MGZ"
          }
        },
        {
          "@attributes": {
            "city": "Myitkyina,MM",
            "code": "MYT"
          }
        },
        {
          "@attributes": {
            "city": "Mykonos,GR",
            "code": "JMK"
          }
        },
        {
          "@attributes": {
            "city": "Myrdal,NO",
            "code": "XOL"
          }
        },
        {
          "@attributes": {
            "city": "Myrtle Beach,US",
            "code": "MYR"
          }
        },
        {
          "@attributes": {
            "city": "Mys Kamenny,RU",
            "code": "YMK"
          }
        },
        {
          "@attributes": {
            "city": "Mysore,IN",
            "code": "MYQ"
          }
        },
        {
          "@attributes": {
            "city": "Mytilene,GR",
            "code": "MJT"
          }
        },
        {
          "@attributes": {
            "city": "Mzamba,ZA",
            "code": "MZF"
          }
        },
        {
          "@attributes": {
            "city": "Mzuzu,MW",
            "code": "ZZU"
          }
        },
        {
          "@attributes": {
            "city": "N Dende,GA",
            "code": "KDN"
          }
        },
        {
          "@attributes": {
            "city": "N Djamena,TD",
            "code": "NDJ"
          }
        },
        {
          "@attributes": {
            "city": "N Dola,ZM",
            "code": "NLA"
          }
        },
        {
          "@attributes": {
            "city": "N Gaoundere,CM",
            "code": "NGE"
          }
        },
        {
          "@attributes": {
            "city": "N Zeto,AO",
            "code": "ARZ"
          }
        },
        {
          "@attributes": {
            "city": "NEW IBERIA,US",
            "code": "ARA"
          }
        },
        {
          "@attributes": {
            "city": "NORRIDGEWOCK,US",
            "code": "OWK"
          }
        },
        {
          "@attributes": {
            "city": "NYKOBING MORS,DK",
            "code": "ZAW"
          }
        },
        {
          "@attributes": {
            "city": "Naberevnye Chelny,RU",
            "code": "NBC"
          }
        },
        {
          "@attributes": {
            "city": "Nabire,ID",
            "code": "NBX"
          }
        },
        {
          "@attributes": {
            "city": "Nacala,MZ",
            "code": "MNC"
          }
        },
        {
          "@attributes": {
            "city": "Nachingwea,TZ",
            "code": "NCH"
          }
        },
        {
          "@attributes": {
            "city": "Nacogdoches,US",
            "code": "OCH"
          }
        },
        {
          "@attributes": {
            "city": "Nadi,FJ",
            "code": "NAN"
          }
        },
        {
          "@attributes": {
            "city": "Nador,MA",
            "code": "NDR"
          }
        },
        {
          "@attributes": {
            "city": "Nadym,RU",
            "code": "NYM"
          }
        },
        {
          "@attributes": {
            "city": "Naga,PH",
            "code": "WNP"
          }
        },
        {
          "@attributes": {
            "city": "Nagano,JP",
            "code": "QNG"
          }
        },
        {
          "@attributes": {
            "city": "Nagasaki,JP",
            "code": "NGS"
          }
        },
        {
          "@attributes": {
            "city": "Nagoya,JP",
            "code": "NGO"
          }
        },
        {
          "@attributes": {
            "city": "Nagpur,IN",
            "code": "NAG"
          }
        },
        {
          "@attributes": {
            "city": "Naha,ID",
            "code": "NAH"
          }
        },
        {
          "@attributes": {
            "city": "Nain,CA",
            "code": "YDP"
          }
        },
        {
          "@attributes": {
            "city": "Nairobi,KE",
            "code": "NBO"
          }
        },
        {
          "@attributes": {
            "city": "Nakashibetsu,JP",
            "code": "SHB"
          }
        },
        {
          "@attributes": {
            "city": "Nakchivan,AZ",
            "code": "NAJ"
          }
        },
        {
          "@attributes": {
            "city": "Nakhon Phanom,TH",
            "code": "KOP"
          }
        },
        {
          "@attributes": {
            "city": "Nakhon Ratchasima,TH",
            "code": "NAK"
          }
        },
        {
          "@attributes": {
            "city": "Nakhon Si Thammarat,TH",
            "code": "NST"
          }
        },
        {
          "@attributes": {
            "city": "Nakina,CA",
            "code": "YQN"
          }
        },
        {
          "@attributes": {
            "city": "Naknek,US",
            "code": "NNK"
          }
        },
        {
          "@attributes": {
            "city": "Nakuru,KE",
            "code": "NUU"
          }
        },
        {
          "@attributes": {
            "city": "Nalchik,RU",
            "code": "NAL"
          }
        },
        {
          "@attributes": {
            "city": "Namangan,UZ",
            "code": "NMA"
          }
        },
        {
          "@attributes": {
            "city": "Namatanai,PG",
            "code": "ATN"
          }
        },
        {
          "@attributes": {
            "city": "Nambour,AU",
            "code": "NBR"
          }
        },
        {
          "@attributes": {
            "city": "Namdrik,MH",
            "code": "NDK"
          }
        },
        {
          "@attributes": {
            "city": "Namibe,AO",
            "code": "MSZ"
          }
        },
        {
          "@attributes": {
            "city": "Namlea,ID",
            "code": "NAM"
          }
        },
        {
          "@attributes": {
            "city": "Nampula,MZ",
            "code": "APL"
          }
        },
        {
          "@attributes": {
            "city": "Namsos,NO",
            "code": "OSY"
          }
        },
        {
          "@attributes": {
            "city": "Namure,BE",
            "code": "QNM"
          }
        },
        {
          "@attributes": {
            "city": "Nan Th,TH",
            "code": "NNT"
          }
        },
        {
          "@attributes": {
            "city": "Nanaimo,CA",
            "code": "YCD"
          }
        },
        {
          "@attributes": {
            "city": "Nanchang,CN",
            "code": "KHN"
          }
        },
        {
          "@attributes": {
            "city": "Nanchong,CN",
            "code": "NAO"
          }
        },
        {
          "@attributes": {
            "city": "Nancy,FR",
            "code": "ENC"
          }
        },
        {
          "@attributes": {
            "city": "Nanded,IN",
            "code": "NDC"
          }
        },
        {
          "@attributes": {
            "city": "Nangasuri Aru Island,ID",
            "code": "BJK"
          }
        },
        {
          "@attributes": {
            "city": "Nanisivik,CA",
            "code": "YSR"
          }
        },
        {
          "@attributes": {
            "city": "Nanjing,CN",
            "code": "NKG"
          }
        },
        {
          "@attributes": {
            "city": "Nanning,CN",
            "code": "NNG"
          }
        },
        {
          "@attributes": {
            "city": "Nanortalik,GL",
            "code": "JNN"
          }
        },
        {
          "@attributes": {
            "city": "Nantes,FR",
            "code": "NTE"
          }
        },
        {
          "@attributes": {
            "city": "Nantucket,US",
            "code": "ACK"
          }
        },
        {
          "@attributes": {
            "city": "Nanyang,CN",
            "code": "NNY"
          }
        },
        {
          "@attributes": {
            "city": "Nanyuki,KE",
            "code": "NYK"
          }
        },
        {
          "@attributes": {
            "city": "Naoro,PG",
            "code": "NOO"
          }
        },
        {
          "@attributes": {
            "city": "Napa,US",
            "code": "APC"
          }
        },
        {
          "@attributes": {
            "city": "Napakiak,US",
            "code": "WNA"
          }
        },
        {
          "@attributes": {
            "city": "Napanee,CA",
            "code": "XIF"
          }
        },
        {
          "@attributes": {
            "city": "Napaskiak,US",
            "code": "PKA"
          }
        },
        {
          "@attributes": {
            "city": "Napasoq,GL",
            "code": "QJT"
          }
        },
        {
          "@attributes": {
            "city": "Napier Hastings,NZ",
            "code": "NPE"
          }
        },
        {
          "@attributes": {
            "city": "Naples,US",
            "code": "APF"
          }
        },
        {
          "@attributes": {
            "city": "Naples,IT",
            "code": "NAP"
          }
        },
        {
          "@attributes": {
            "city": "Napuka Island,PF",
            "code": "NAU"
          }
        },
        {
          "@attributes": {
            "city": "Naracoorte,AU",
            "code": "NAC"
          }
        },
        {
          "@attributes": {
            "city": "Narathiwat,TH",
            "code": "NAW"
          }
        },
        {
          "@attributes": {
            "city": "Narbonne,FR",
            "code": "NNE"
          }
        },
        {
          "@attributes": {
            "city": "Nare,CO",
            "code": "NAR"
          }
        },
        {
          "@attributes": {
            "city": "Narrabri,AU",
            "code": "NAA"
          }
        },
        {
          "@attributes": {
            "city": "Narrandera,AU",
            "code": "NRA"
          }
        },
        {
          "@attributes": {
            "city": "Narromine,AU",
            "code": "QRM"
          }
        },
        {
          "@attributes": {
            "city": "Narsaq,GL",
            "code": "JNS"
          }
        },
        {
          "@attributes": {
            "city": "Narsaq Kujalleq,GL",
            "code": "QFN"
          }
        },
        {
          "@attributes": {
            "city": "Narsarsuaq,GL",
            "code": "UAK"
          }
        },
        {
          "@attributes": {
            "city": "Narvik,NO",
            "code": "NVK"
          }
        },
        {
          "@attributes": {
            "city": "Naryan Mar,RU",
            "code": "NNM"
          }
        },
        {
          "@attributes": {
            "city": "Nashua,US",
            "code": "ASH"
          }
        },
        {
          "@attributes": {
            "city": "Nashville,US",
            "code": "BNA"
          }
        },
        {
          "@attributes": {
            "city": "Nasik,IN",
            "code": "ISK"
          }
        },
        {
          "@attributes": {
            "city": "Nassau,BS",
            "code": "NAS"
          }
        },
        {
          "@attributes": {
            "city": "Nassjo,SE",
            "code": "XWX"
          }
        },
        {
          "@attributes": {
            "city": "Natal,BR",
            "code": "NAT"
          }
        },
        {
          "@attributes": {
            "city": "Natashquan,CA",
            "code": "YNA"
          }
        },
        {
          "@attributes": {
            "city": "Natchez,US",
            "code": "HEZ"
          }
        },
        {
          "@attributes": {
            "city": "Natuashish,CA",
            "code": "YNP"
          }
        },
        {
          "@attributes": {
            "city": "Naukiti Bay,US",
            "code": "NKI"
          }
        },
        {
          "@attributes": {
            "city": "Nauru Island,NR",
            "code": "INU"
          }
        },
        {
          "@attributes": {
            "city": "Navalmoral de la Mata,ES",
            "code": "QWW"
          }
        },
        {
          "@attributes": {
            "city": "Navegantes,BR",
            "code": "NVT"
          }
        },
        {
          "@attributes": {
            "city": "Navoi,UZ",
            "code": "NVI"
          }
        },
        {
          "@attributes": {
            "city": "Nawabshah,PK",
            "code": "WNS"
          }
        },
        {
          "@attributes": {
            "city": "Naxos,GR",
            "code": "JNX"
          }
        },
        {
          "@attributes": {
            "city": "Nay Pyi Taw,MM",
            "code": "NYT"
          }
        },
        {
          "@attributes": {
            "city": "Ndele,CF",
            "code": "NDL"
          }
        },
        {
          "@attributes": {
            "city": "Necochea,AR",
            "code": "NEC"
          }
        },
        {
          "@attributes": {
            "city": "Necocli,CO",
            "code": "NCI"
          }
        },
        {
          "@attributes": {
            "city": "Needles,US",
            "code": "EED"
          }
        },
        {
          "@attributes": {
            "city": "Neerlerit Inaat,GL",
            "code": "CNP"
          }
        },
        {
          "@attributes": {
            "city": "Nefteyugansk,RU",
            "code": "NFG"
          }
        },
        {
          "@attributes": {
            "city": "Negril,JM",
            "code": "NEG"
          }
        },
        {
          "@attributes": {
            "city": "Neiva,CO",
            "code": "NVA"
          }
        },
        {
          "@attributes": {
            "city": "Nejran,SA",
            "code": "EAM"
          }
        },
        {
          "@attributes": {
            "city": "Nelaug,NO",
            "code": "XHL"
          }
        },
        {
          "@attributes": {
            "city": "Nelson,NZ",
            "code": "NSN"
          }
        },
        {
          "@attributes": {
            "city": "Nelson Lagoon,US",
            "code": "NLG"
          }
        },
        {
          "@attributes": {
            "city": "Nelspruit,ZA",
            "code": "NLP"
          }
        },
        {
          "@attributes": {
            "city": "Nema,MR",
            "code": "EMN"
          }
        },
        {
          "@attributes": {
            "city": "Nenana,US",
            "code": "ENN"
          }
        },
        {
          "@attributes": {
            "city": "Nepalgunj,NP",
            "code": "KEP"
          }
        },
        {
          "@attributes": {
            "city": "Neryungri,RU",
            "code": "NER"
          }
        },
        {
          "@attributes": {
            "city": "Nesbyen,NO",
            "code": "XUL"
          }
        },
        {
          "@attributes": {
            "city": "Neslandsvatn,NO",
            "code": "XUM"
          }
        },
        {
          "@attributes": {
            "city": "Neubrandenburg,DE",
            "code": "FNB"
          }
        },
        {
          "@attributes": {
            "city": "Neuchatel,CH",
            "code": "QNC"
          }
        },
        {
          "@attributes": {
            "city": "Neuilly Sur Seine,FR",
            "code": "QNL"
          }
        },
        {
          "@attributes": {
            "city": "Neumuenster,DE",
            "code": "EUM"
          }
        },
        {
          "@attributes": {
            "city": "Neunkirchen,DE",
            "code": "ZOP"
          }
        },
        {
          "@attributes": {
            "city": "Neuquen,AR",
            "code": "NQN"
          }
        },
        {
          "@attributes": {
            "city": "Neuss,DE",
            "code": "ZOQ"
          }
        },
        {
          "@attributes": {
            "city": "Neustadt An Der Weinstrasse,DE",
            "code": "ZOR"
          }
        },
        {
          "@attributes": {
            "city": "Neuwied,DE",
            "code": "ZOU"
          }
        },
        {
          "@attributes": {
            "city": "Nevada,US",
            "code": "NVD"
          }
        },
        {
          "@attributes": {
            "city": "Nevers,FR",
            "code": "NVS"
          }
        },
        {
          "@attributes": {
            "city": "Nevis,KN",
            "code": "NEV"
          }
        },
        {
          "@attributes": {
            "city": "Nevsehir,TR",
            "code": "NAV"
          }
        },
        {
          "@attributes": {
            "city": "New Bedford,US",
            "code": "EWB"
          }
        },
        {
          "@attributes": {
            "city": "New Bern,US",
            "code": "EWN"
          }
        },
        {
          "@attributes": {
            "city": "New Carlisle,CA",
            "code": "XEL"
          }
        },
        {
          "@attributes": {
            "city": "New Haven,US",
            "code": "HVN"
          }
        },
        {
          "@attributes": {
            "city": "New London,US",
            "code": "GON"
          }
        },
        {
          "@attributes": {
            "city": "New Orleans,US",
            "code": "MSY"
          }
        },
        {
          "@attributes": {
            "city": "New Plymouth,NZ",
            "code": "NPL"
          }
        },
        {
          "@attributes": {
            "city": "New Richmond,CA",
            "code": "XEM"
          }
        },
        {
          "@attributes": {
            "city": "New Richmond,US",
            "code": "RNH"
          }
        },
        {
          "@attributes": {
            "city": "New Stuyahok,US",
            "code": "KNW"
          }
        },
        {
          "@attributes": {
            "city": "New Ulm,US",
            "code": "ULM"
          }
        },
        {
          "@attributes": {
            "city": "New Westminster,CA",
            "code": "YBD"
          }
        },
        {
          "@attributes": {
            "city": "New York,US",
            "code": "NYC"
          }
        },
        {
          "@attributes": {
            "city": "Newark,GB",
            "code": "XNK"
          }
        },
        {
          "@attributes": {
            "city": "Newark,US",
            "code": "EWR"
          }
        },
        {
          "@attributes": {
            "city": "Newburgh,US",
            "code": "SWF"
          }
        },
        {
          "@attributes": {
            "city": "Newbury,GB",
            "code": "EWY"
          }
        },
        {
          "@attributes": {
            "city": "Newcastle,CA",
            "code": "XEY"
          }
        },
        {
          "@attributes": {
            "city": "Newcastle,GB",
            "code": "NCL"
          }
        },
        {
          "@attributes": {
            "city": "Newcastle,ZA",
            "code": "NCS"
          }
        },
        {
          "@attributes": {
            "city": "Newcastle,AU",
            "code": "NTL"
          }
        },
        {
          "@attributes": {
            "city": "Newman,AU",
            "code": "ZNE"
          }
        },
        {
          "@attributes": {
            "city": "Newport,GB",
            "code": "XNE"
          }
        },
        {
          "@attributes": {
            "city": "Newport,US",
            "code": "ONP"
          }
        },
        {
          "@attributes": {
            "city": "Newport,US",
            "code": "NPT"
          }
        },
        {
          "@attributes": {
            "city": "Newport News,US",
            "code": "PHF"
          }
        },
        {
          "@attributes": {
            "city": "Newquay,GB",
            "code": "NQY"
          }
        },
        {
          "@attributes": {
            "city": "Newtok,US",
            "code": "WWT"
          }
        },
        {
          "@attributes": {
            "city": "Newton,US",
            "code": "TNU"
          }
        },
        {
          "@attributes": {
            "city": "Newton,US",
            "code": "EWK"
          }
        },
        {
          "@attributes": {
            "city": "Nha Trang,VN",
            "code": "NHA"
          }
        },
        {
          "@attributes": {
            "city": "Niagara Falls,CA",
            "code": "XLV"
          }
        },
        {
          "@attributes": {
            "city": "Niagara Falls,US",
            "code": "IAG"
          }
        },
        {
          "@attributes": {
            "city": "Niamey,NE",
            "code": "NIM"
          }
        },
        {
          "@attributes": {
            "city": "Niaqornaarsuk,GL",
            "code": "QMK"
          }
        },
        {
          "@attributes": {
            "city": "Nice,FR",
            "code": "NCE"
          }
        },
        {
          "@attributes": {
            "city": "Nicosia,CY",
            "code": "NIC"
          }
        },
        {
          "@attributes": {
            "city": "Nicoya,CR",
            "code": "NCT"
          }
        },
        {
          "@attributes": {
            "city": "Nieuw Nickerie,SR",
            "code": "ICK"
          }
        },
        {
          "@attributes": {
            "city": "Nightmute,US",
            "code": "NME"
          }
        },
        {
          "@attributes": {
            "city": "Niigata,JP",
            "code": "KIJ"
          }
        },
        {
          "@attributes": {
            "city": "Nikolai,US",
            "code": "NIB"
          }
        },
        {
          "@attributes": {
            "city": "Nikolayevsk Na Amure,RU",
            "code": "NLI"
          }
        },
        {
          "@attributes": {
            "city": "Nikolski,US",
            "code": "IKO"
          }
        },
        {
          "@attributes": {
            "city": "Nimes,FR",
            "code": "FNI"
          }
        },
        {
          "@attributes": {
            "city": "Ningbo,CN",
            "code": "NGB"
          }
        },
        {
          "@attributes": {
            "city": "Ninglang,CN",
            "code": "NLH"
          }
        },
        {
          "@attributes": {
            "city": "Ninilchik,US",
            "code": "NIN"
          }
        },
        {
          "@attributes": {
            "city": "Nioro,ML",
            "code": "NIX"
          }
        },
        {
          "@attributes": {
            "city": "Niort,FR",
            "code": "NIT"
          }
        },
        {
          "@attributes": {
            "city": "Nis Rs,RS",
            "code": "INI"
          }
        },
        {
          "@attributes": {
            "city": "Nissan,PG",
            "code": "IIS"
          }
        },
        {
          "@attributes": {
            "city": "Niteroi,BR",
            "code": "QNT"
          }
        },
        {
          "@attributes": {
            "city": "Niuatoputapu,TO",
            "code": "NTT"
          }
        },
        {
          "@attributes": {
            "city": "Niue Island,NU",
            "code": "IUE"
          }
        },
        {
          "@attributes": {
            "city": "Nizhnevartovsk,RU",
            "code": "NJC"
          }
        },
        {
          "@attributes": {
            "city": "Nizhniy Novgorod,RU",
            "code": "GOJ"
          }
        },
        {
          "@attributes": {
            "city": "Nizunau,KI",
            "code": "NIG"
          }
        },
        {
          "@attributes": {
            "city": "Nkaus,LS",
            "code": "NKU"
          }
        },
        {
          "@attributes": {
            "city": "Nkayi,CG",
            "code": "NKY"
          }
        },
        {
          "@attributes": {
            "city": "Noatak,US",
            "code": "WTK"
          }
        },
        {
          "@attributes": {
            "city": "Nogales,US",
            "code": "OLS"
          }
        },
        {
          "@attributes": {
            "city": "Nogales,MX",
            "code": "NOG"
          }
        },
        {
          "@attributes": {
            "city": "Nogeh,IR",
            "code": "NUJ"
          }
        },
        {
          "@attributes": {
            "city": "Nogliki,RU",
            "code": "NGK"
          }
        },
        {
          "@attributes": {
            "city": "Nojabrxsk,RU",
            "code": "NOJ"
          }
        },
        {
          "@attributes": {
            "city": "Nomad River,PG",
            "code": "NOM"
          }
        },
        {
          "@attributes": {
            "city": "Nome,US",
            "code": "OME"
          }
        },
        {
          "@attributes": {
            "city": "Nondalton,US",
            "code": "NNL"
          }
        },
        {
          "@attributes": {
            "city": "Nonouti,KI",
            "code": "NON"
          }
        },
        {
          "@attributes": {
            "city": "Noorvik,US",
            "code": "ORV"
          }
        },
        {
          "@attributes": {
            "city": "Noosa,AU",
            "code": "NSA"
          }
        },
        {
          "@attributes": {
            "city": "Noosaville,AU",
            "code": "NSV"
          }
        },
        {
          "@attributes": {
            "city": "Nordagutu,NO",
            "code": "XUO"
          }
        },
        {
          "@attributes": {
            "city": "Norderney,DE",
            "code": "NRD"
          }
        },
        {
          "@attributes": {
            "city": "Norderstedt,DE",
            "code": "ZOV"
          }
        },
        {
          "@attributes": {
            "city": "Nordfjordur,IS",
            "code": "NOR"
          }
        },
        {
          "@attributes": {
            "city": "Nordholz Spieka,DE",
            "code": "NDZ"
          }
        },
        {
          "@attributes": {
            "city": "Nordhorn,DE",
            "code": "ZOW"
          }
        },
        {
          "@attributes": {
            "city": "Norfolk,US",
            "code": "OFK"
          }
        },
        {
          "@attributes": {
            "city": "Norfolk,US",
            "code": "ORF"
          }
        },
        {
          "@attributes": {
            "city": "Norfolk Island,NF",
            "code": "NLK"
          }
        },
        {
          "@attributes": {
            "city": "Norilsk,RU",
            "code": "NSK"
          }
        },
        {
          "@attributes": {
            "city": "Norman Wells,CA",
            "code": "YVQ"
          }
        },
        {
          "@attributes": {
            "city": "Normanton,AU",
            "code": "NTN"
          }
        },
        {
          "@attributes": {
            "city": "Norrkoping,SE",
            "code": "NRK"
          }
        },
        {
          "@attributes": {
            "city": "Norseman,AU",
            "code": "NSM"
          }
        },
        {
          "@attributes": {
            "city": "Norsup,VU",
            "code": "NUS"
          }
        },
        {
          "@attributes": {
            "city": "North Battleford,CA",
            "code": "YQW"
          }
        },
        {
          "@attributes": {
            "city": "North Bay,CA",
            "code": "YYB"
          }
        },
        {
          "@attributes": {
            "city": "North Bend,US",
            "code": "OTH"
          }
        },
        {
          "@attributes": {
            "city": "North Caicos,TC",
            "code": "NCA"
          }
        },
        {
          "@attributes": {
            "city": "North Eleuthera,BS",
            "code": "ELH"
          }
        },
        {
          "@attributes": {
            "city": "North Grand Canyon,US",
            "code": "NGC"
          }
        },
        {
          "@attributes": {
            "city": "North Platte,US",
            "code": "LBF"
          }
        },
        {
          "@attributes": {
            "city": "North Ronaldsay,GB",
            "code": "NRL"
          }
        },
        {
          "@attributes": {
            "city": "North Spirit Indian Reserve,CA",
            "code": "YNO"
          }
        },
        {
          "@attributes": {
            "city": "Northallerton,GB",
            "code": "XNO"
          }
        },
        {
          "@attributes": {
            "city": "Northampton,GB",
            "code": "ORM"
          }
        },
        {
          "@attributes": {
            "city": "Northolt,GB",
            "code": "NHT"
          }
        },
        {
          "@attributes": {
            "city": "Northway,US",
            "code": "ORT"
          }
        },
        {
          "@attributes": {
            "city": "Norwalk,US",
            "code": "ORQ"
          }
        },
        {
          "@attributes": {
            "city": "Norway House,CA",
            "code": "YNE"
          }
        },
        {
          "@attributes": {
            "city": "Norwich,GB",
            "code": "NWI"
          }
        },
        {
          "@attributes": {
            "city": "Norwood,US",
            "code": "OWD"
          }
        },
        {
          "@attributes": {
            "city": "Nossi Be,MG",
            "code": "NOS"
          }
        },
        {
          "@attributes": {
            "city": "Notodden,NO",
            "code": "NTB"
          }
        },
        {
          "@attributes": {
            "city": "Nottingham,GB",
            "code": "XNM"
          }
        },
        {
          "@attributes": {
            "city": "Nottingham Uk,GB",
            "code": "NQT"
          }
        },
        {
          "@attributes": {
            "city": "Nouadhibou,MR",
            "code": "NDB"
          }
        },
        {
          "@attributes": {
            "city": "Nouakchott,MR",
            "code": "NKC"
          }
        },
        {
          "@attributes": {
            "city": "Noumea,NC",
            "code": "NOU"
          }
        },
        {
          "@attributes": {
            "city": "Nova Friburgo,BR",
            "code": "QGJ"
          }
        },
        {
          "@attributes": {
            "city": "Novato,US",
            "code": "NOT"
          }
        },
        {
          "@attributes": {
            "city": "Novgorod,RU",
            "code": "NVR"
          }
        },
        {
          "@attributes": {
            "city": "Novi Sad,RS",
            "code": "QND"
          }
        },
        {
          "@attributes": {
            "city": "Novo Hamburgo,BR",
            "code": "QHV"
          }
        },
        {
          "@attributes": {
            "city": "Novo Progresso,BR",
            "code": "NPR"
          }
        },
        {
          "@attributes": {
            "city": "Novokuznetsk,RU",
            "code": "NOZ"
          }
        },
        {
          "@attributes": {
            "city": "Novorossiysk,RU",
            "code": "NOI"
          }
        },
        {
          "@attributes": {
            "city": "Novosibirsk,RU",
            "code": "OVB"
          }
        },
        {
          "@attributes": {
            "city": "Novy Urengoy,RU",
            "code": "NUX"
          }
        },
        {
          "@attributes": {
            "city": "Nowata,PG",
            "code": "NWT"
          }
        },
        {
          "@attributes": {
            "city": "Nowra,AU",
            "code": "NOA"
          }
        },
        {
          "@attributes": {
            "city": "Nowy Dwor Mazowiecki,PL",
            "code": "WMI"
          }
        },
        {
          "@attributes": {
            "city": "Nowy Targ,PL",
            "code": "QWS"
          }
        },
        {
          "@attributes": {
            "city": "Nueva Gerona,CU",
            "code": "GER"
          }
        },
        {
          "@attributes": {
            "city": "Nuevo Laredo,MX",
            "code": "NLD"
          }
        },
        {
          "@attributes": {
            "city": "Nuiqsut,US",
            "code": "NUI"
          }
        },
        {
          "@attributes": {
            "city": "Nuku,PG",
            "code": "UKU"
          }
        },
        {
          "@attributes": {
            "city": "Nuku Alofa,TO",
            "code": "TBU"
          }
        },
        {
          "@attributes": {
            "city": "Nuku Hiva,PF",
            "code": "NHV"
          }
        },
        {
          "@attributes": {
            "city": "Nukus,UZ",
            "code": "NCU"
          }
        },
        {
          "@attributes": {
            "city": "Nukutavake,PF",
            "code": "NUK"
          }
        },
        {
          "@attributes": {
            "city": "Nukutepipi,PF",
            "code": "NKP"
          }
        },
        {
          "@attributes": {
            "city": "Nulato,US",
            "code": "NUL"
          }
        },
        {
          "@attributes": {
            "city": "Nullagine,AU",
            "code": "NLL"
          }
        },
        {
          "@attributes": {
            "city": "Nullarbor,AU",
            "code": "NUR"
          }
        },
        {
          "@attributes": {
            "city": "Numfoor,ID",
            "code": "FOO"
          }
        },
        {
          "@attributes": {
            "city": "Nunapitchuk,US",
            "code": "NUP"
          }
        },
        {
          "@attributes": {
            "city": "Nuneaton,GB",
            "code": "XNV"
          }
        },
        {
          "@attributes": {
            "city": "Nuoro,IT",
            "code": "QNU"
          }
        },
        {
          "@attributes": {
            "city": "Nuqui,CO",
            "code": "NQU"
          }
        },
        {
          "@attributes": {
            "city": "Nuremberg,DE",
            "code": "NUE"
          }
        },
        {
          "@attributes": {
            "city": "Nuuk,GL",
            "code": "GOH"
          }
        },
        {
          "@attributes": {
            "city": "Nuussuaq,GL",
            "code": "NSQ"
          }
        },
        {
          "@attributes": {
            "city": "Nuwara Eliya,LK",
            "code": "NUA"
          }
        },
        {
          "@attributes": {
            "city": "Nyac,US",
            "code": "ZNC"
          }
        },
        {
          "@attributes": {
            "city": "Nyagan,RU",
            "code": "NYA"
          }
        },
        {
          "@attributes": {
            "city": "Nyala,SD",
            "code": "UYL"
          }
        },
        {
          "@attributes": {
            "city": "Nyaung,MM",
            "code": "NYU"
          }
        },
        {
          "@attributes": {
            "city": "Nyborg,DK",
            "code": "ZIB"
          }
        },
        {
          "@attributes": {
            "city": "Nyeri,KE",
            "code": "NYE"
          }
        },
        {
          "@attributes": {
            "city": "Nyingchi,CN",
            "code": "LZY"
          }
        },
        {
          "@attributes": {
            "city": "Nykoing Sjaelland,DK",
            "code": "ZIJ"
          }
        },
        {
          "@attributes": {
            "city": "Nykoping,SE",
            "code": "XWZ"
          }
        },
        {
          "@attributes": {
            "city": "Nyngan,AU",
            "code": "NYN"
          }
        },
        {
          "@attributes": {
            "city": "Nyon,CH",
            "code": "ZRN"
          }
        },
        {
          "@attributes": {
            "city": "Nyurba,RU",
            "code": "NYR"
          }
        },
        {
          "@attributes": {
            "city": "OAKLAND,US",
            "code": "ODM"
          }
        },
        {
          "@attributes": {
            "city": "OLTEN,CH",
            "code": "ZJU"
          }
        },
        {
          "@attributes": {
            "city": "ORANGEBURG,US",
            "code": "OGB"
          }
        },
        {
          "@attributes": {
            "city": "OROVILLE,US",
            "code": "OVE"
          }
        },
        {
          "@attributes": {
            "city": "OZARK,US",
            "code": "OZR"
          }
        },
        {
          "@attributes": {
            "city": "Oak Harbor,US",
            "code": "ODW"
          }
        },
        {
          "@attributes": {
            "city": "Oakey,AU",
            "code": "OKY"
          }
        },
        {
          "@attributes": {
            "city": "Oakland,US",
            "code": "OAK"
          }
        },
        {
          "@attributes": {
            "city": "Oakville,CA",
            "code": "XOK"
          }
        },
        {
          "@attributes": {
            "city": "Oamaru,NZ",
            "code": "OAM"
          }
        },
        {
          "@attributes": {
            "city": "Oaxaca,MX",
            "code": "OAX"
          }
        },
        {
          "@attributes": {
            "city": "Oban,GB",
            "code": "OBN"
          }
        },
        {
          "@attributes": {
            "city": "Oberammergau,DE",
            "code": "ZOX"
          }
        },
        {
          "@attributes": {
            "city": "Oberhausen,DE",
            "code": "ZOY"
          }
        },
        {
          "@attributes": {
            "city": "Oberpfaffenhofen,DE",
            "code": "OBF"
          }
        },
        {
          "@attributes": {
            "city": "Obihiro,JP",
            "code": "OBO"
          }
        },
        {
          "@attributes": {
            "city": "Ocala,US",
            "code": "OCF"
          }
        },
        {
          "@attributes": {
            "city": "Ocana,CO",
            "code": "OCV"
          }
        },
        {
          "@attributes": {
            "city": "Ocean cities,US",
            "code": "OCE"
          }
        },
        {
          "@attributes": {
            "city": "Ocean Reef,US",
            "code": "OCA"
          }
        },
        {
          "@attributes": {
            "city": "Oceanside,US",
            "code": "OCN"
          }
        },
        {
          "@attributes": {
            "city": "Ocho Rios,JM",
            "code": "OCJ"
          }
        },
        {
          "@attributes": {
            "city": "Odate Noshiro,JP",
            "code": "ONJ"
          }
        },
        {
          "@attributes": {
            "city": "Odense,DK",
            "code": "ODE"
          }
        },
        {
          "@attributes": {
            "city": "Odessa,UA",
            "code": "ODS"
          }
        },
        {
          "@attributes": {
            "city": "Odienne,CI",
            "code": "KEO"
          }
        },
        {
          "@attributes": {
            "city": "Offenbach,DE",
            "code": "ZOZ"
          }
        },
        {
          "@attributes": {
            "city": "Offenburg,DE",
            "code": "ZPA"
          }
        },
        {
          "@attributes": {
            "city": "Ogallala,US",
            "code": "OGA"
          }
        },
        {
          "@attributes": {
            "city": "Ogden,US",
            "code": "OGD"
          }
        },
        {
          "@attributes": {
            "city": "Ogdensburg,US",
            "code": "OGS"
          }
        },
        {
          "@attributes": {
            "city": "Ogobsucum,PA",
            "code": "OGM"
          }
        },
        {
          "@attributes": {
            "city": "Ohakea,NZ",
            "code": "OHA"
          }
        },
        {
          "@attributes": {
            "city": "Ohotsk,RU",
            "code": "OHO"
          }
        },
        {
          "@attributes": {
            "city": "Ohrid,MK",
            "code": "OHD"
          }
        },
        {
          "@attributes": {
            "city": "Oita,JP",
            "code": "OIT"
          }
        },
        {
          "@attributes": {
            "city": "Okaba,ID",
            "code": "OKQ"
          }
        },
        {
          "@attributes": {
            "city": "Okaukuejo,NA",
            "code": "OKF"
          }
        },
        {
          "@attributes": {
            "city": "Okayama,JP",
            "code": "OKJ"
          }
        },
        {
          "@attributes": {
            "city": "Okeechobee,US",
            "code": "OBE"
          }
        },
        {
          "@attributes": {
            "city": "Okha,RU",
            "code": "OHH"
          }
        },
        {
          "@attributes": {
            "city": "Oki Island,JP",
            "code": "OKI"
          }
        },
        {
          "@attributes": {
            "city": "Okinawa,JP",
            "code": "OKA"
          }
        },
        {
          "@attributes": {
            "city": "Okino Erabu,JP",
            "code": "OKE"
          }
        },
        {
          "@attributes": {
            "city": "Oklahoma cities,US",
            "code": "OKC"
          }
        },
        {
          "@attributes": {
            "city": "Okondja,GA",
            "code": "OKN"
          }
        },
        {
          "@attributes": {
            "city": "Okoyo,CG",
            "code": "OKG"
          }
        },
        {
          "@attributes": {
            "city": "Oksapmin,PG",
            "code": "OKP"
          }
        },
        {
          "@attributes": {
            "city": "Oksibil,ID",
            "code": "OKL"
          }
        },
        {
          "@attributes": {
            "city": "Okushiri,JP",
            "code": "OIR"
          }
        },
        {
          "@attributes": {
            "city": "Olafsfjordur,IS",
            "code": "OFJ"
          }
        },
        {
          "@attributes": {
            "city": "Olafsvik,IS",
            "code": "OLI"
          }
        },
        {
          "@attributes": {
            "city": "Olanchito,HN",
            "code": "OAN"
          }
        },
        {
          "@attributes": {
            "city": "Olbia,IT",
            "code": "OLB"
          }
        },
        {
          "@attributes": {
            "city": "Old Crow,CA",
            "code": "YOC"
          }
        },
        {
          "@attributes": {
            "city": "Old Harbor,US",
            "code": "OLH"
          }
        },
        {
          "@attributes": {
            "city": "Oldenburg,DE",
            "code": "ZPD"
          }
        },
        {
          "@attributes": {
            "city": "Olenek,RU",
            "code": "ONK"
          }
        },
        {
          "@attributes": {
            "city": "Olga Bay,US",
            "code": "KOY"
          }
        },
        {
          "@attributes": {
            "city": "Olomouc,CZ",
            "code": "OLO"
          }
        },
        {
          "@attributes": {
            "city": "Olsztyn,PL",
            "code": "QYO"
          }
        },
        {
          "@attributes": {
            "city": "Olympia,US",
            "code": "OLM"
          }
        },
        {
          "@attributes": {
            "city": "Olympic Dam,AU",
            "code": "OLP"
          }
        },
        {
          "@attributes": {
            "city": "Omaha,US",
            "code": "OMA"
          }
        },
        {
          "@attributes": {
            "city": "Omboue,GA",
            "code": "OMB"
          }
        },
        {
          "@attributes": {
            "city": "Omiya,JP",
            "code": "QOM"
          }
        },
        {
          "@attributes": {
            "city": "Omsk,RU",
            "code": "OMS"
          }
        },
        {
          "@attributes": {
            "city": "Ondangwa,NA",
            "code": "OND"
          }
        },
        {
          "@attributes": {
            "city": "Oneonta,US",
            "code": "ONH"
          }
        },
        {
          "@attributes": {
            "city": "Ononge,PG",
            "code": "ONB"
          }
        },
        {
          "@attributes": {
            "city": "Onotoa,KI",
            "code": "OOT"
          }
        },
        {
          "@attributes": {
            "city": "Onslow,AU",
            "code": "ONS"
          }
        },
        {
          "@attributes": {
            "city": "Ontario,US",
            "code": "ONO"
          }
        },
        {
          "@attributes": {
            "city": "Ontario,US",
            "code": "ONT"
          }
        },
        {
          "@attributes": {
            "city": "Open Bay,PG",
            "code": "OPB"
          }
        },
        {
          "@attributes": {
            "city": "Opole,PL",
            "code": "QPM"
          }
        },
        {
          "@attributes": {
            "city": "Oppdal,NO",
            "code": "XOD"
          }
        },
        {
          "@attributes": {
            "city": "Oradea,RO",
            "code": "OMR"
          }
        },
        {
          "@attributes": {
            "city": "Oran,DZ",
            "code": "ORN"
          }
        },
        {
          "@attributes": {
            "city": "Orange,FR",
            "code": "XOG"
          }
        },
        {
          "@attributes": {
            "city": "Orange,AU",
            "code": "OAG"
          }
        },
        {
          "@attributes": {
            "city": "Oranjemund,NA",
            "code": "OMD"
          }
        },
        {
          "@attributes": {
            "city": "Ordos,CN",
            "code": "DSN"
          }
        },
        {
          "@attributes": {
            "city": "Ordu,TR",
            "code": "QOR"
          }
        },
        {
          "@attributes": {
            "city": "Ordu Giresun,TR",
            "code": "OGU"
          }
        },
        {
          "@attributes": {
            "city": "Orebro Bofors,SE",
            "code": "ORB"
          }
        },
        {
          "@attributes": {
            "city": "Orenburg,RU",
            "code": "REN"
          }
        },
        {
          "@attributes": {
            "city": "Oristano,IT",
            "code": "FNU"
          }
        },
        {
          "@attributes": {
            "city": "Orland,NO",
            "code": "OLA"
          }
        },
        {
          "@attributes": {
            "city": "Orlando,US",
            "code": "ORL"
          }
        },
        {
          "@attributes": {
            "city": "Orleans,FR",
            "code": "ORE"
          }
        },
        {
          "@attributes": {
            "city": "Ornskoldsvik,SE",
            "code": "OER"
          }
        },
        {
          "@attributes": {
            "city": "Orpheus Island,AU",
            "code": "ORS"
          }
        },
        {
          "@attributes": {
            "city": "Orsk,RU",
            "code": "OSW"
          }
        },
        {
          "@attributes": {
            "city": "Orsta Volda,NO",
            "code": "HOV"
          }
        },
        {
          "@attributes": {
            "city": "Oruro,BO",
            "code": "ORU"
          }
        },
        {
          "@attributes": {
            "city": "Osage Beach,US",
            "code": "OSB"
          }
        },
        {
          "@attributes": {
            "city": "Osaka,JP",
            "code": "OSA"
          }
        },
        {
          "@attributes": {
            "city": "Osasco,BR",
            "code": "QOC"
          }
        },
        {
          "@attributes": {
            "city": "Osceola,US",
            "code": "OEO"
          }
        },
        {
          "@attributes": {
            "city": "Osh Kg,KG",
            "code": "OSS"
          }
        },
        {
          "@attributes": {
            "city": "Oshakati,NA",
            "code": "OHI"
          }
        },
        {
          "@attributes": {
            "city": "Oshawa,CA",
            "code": "YOO"
          }
        },
        {
          "@attributes": {
            "city": "Oshima,JP",
            "code": "OIM"
          }
        },
        {
          "@attributes": {
            "city": "Oshkosh,US",
            "code": "OSH"
          }
        },
        {
          "@attributes": {
            "city": "Osijek,HR",
            "code": "OSI"
          }
        },
        {
          "@attributes": {
            "city": "Oskarshamn,SE",
            "code": "OSK"
          }
        },
        {
          "@attributes": {
            "city": "Oslo,NO",
            "code": "OSL"
          }
        },
        {
          "@attributes": {
            "city": "Osnabruck,DE",
            "code": "ZPE"
          }
        },
        {
          "@attributes": {
            "city": "Osorno,CL",
            "code": "ZOS"
          }
        },
        {
          "@attributes": {
            "city": "Ostende,BE",
            "code": "OST"
          }
        },
        {
          "@attributes": {
            "city": "Ostersund,SE",
            "code": "OSD"
          }
        },
        {
          "@attributes": {
            "city": "Ostrava,CZ",
            "code": "OSR"
          }
        },
        {
          "@attributes": {
            "city": "Ostrow Wielkopolski,PL",
            "code": "QDG"
          }
        },
        {
          "@attributes": {
            "city": "Otaru,JP",
            "code": "QOT"
          }
        },
        {
          "@attributes": {
            "city": "Ottawa,CA",
            "code": "YOW"
          }
        },
        {
          "@attributes": {
            "city": "Ottumwa,US",
            "code": "OTM"
          }
        },
        {
          "@attributes": {
            "city": "Otu Co,CO",
            "code": "OTU"
          }
        },
        {
          "@attributes": {
            "city": "Ouagadougou,BF",
            "code": "OUA"
          }
        },
        {
          "@attributes": {
            "city": "Ouargla,DZ",
            "code": "OGX"
          }
        },
        {
          "@attributes": {
            "city": "Oudtshoorn,ZA",
            "code": "OUH"
          }
        },
        {
          "@attributes": {
            "city": "Ouesso,CG",
            "code": "OUE"
          }
        },
        {
          "@attributes": {
            "city": "Oujda,MA",
            "code": "OUD"
          }
        },
        {
          "@attributes": {
            "city": "Oulu,FI",
            "code": "OUL"
          }
        },
        {
          "@attributes": {
            "city": "Ourense,ES",
            "code": "OUQ"
          }
        },
        {
          "@attributes": {
            "city": "Ourilandia,BR",
            "code": "OIA"
          }
        },
        {
          "@attributes": {
            "city": "Ourinhos,BR",
            "code": "OUS"
          }
        },
        {
          "@attributes": {
            "city": "Ourzazate,MA",
            "code": "OZZ"
          }
        },
        {
          "@attributes": {
            "city": "Ouvea,NC",
            "code": "UVE"
          }
        },
        {
          "@attributes": {
            "city": "Ouzinkie,US",
            "code": "KOZ"
          }
        },
        {
          "@attributes": {
            "city": "Ovalle,CL",
            "code": "OVL"
          }
        },
        {
          "@attributes": {
            "city": "Ovda,IL",
            "code": "VDA"
          }
        },
        {
          "@attributes": {
            "city": "Oviedo,ES",
            "code": "OVI"
          }
        },
        {
          "@attributes": {
            "city": "Owando,CG",
            "code": "FTX"
          }
        },
        {
          "@attributes": {
            "city": "Owatonna,US",
            "code": "OWA"
          }
        },
        {
          "@attributes": {
            "city": "Owen Sound,CA",
            "code": "YOS"
          }
        },
        {
          "@attributes": {
            "city": "Owensboro,US",
            "code": "OWB"
          }
        },
        {
          "@attributes": {
            "city": "Owerri,NG",
            "code": "QOW"
          }
        },
        {
          "@attributes": {
            "city": "Oxford,US",
            "code": "OXD"
          }
        },
        {
          "@attributes": {
            "city": "Oxford,GB",
            "code": "OXF"
          }
        },
        {
          "@attributes": {
            "city": "Oxford House,CA",
            "code": "YOH"
          }
        },
        {
          "@attributes": {
            "city": "Oxnard,US",
            "code": "OXR"
          }
        },
        {
          "@attributes": {
            "city": "Oyem,GA",
            "code": "OYE"
          }
        },
        {
          "@attributes": {
            "city": "Ozamis cities,PH",
            "code": "OZC"
          }
        },
        {
          "@attributes": {
            "city": "Ozona,US",
            "code": "OZA"
          }
        },
        {
          "@attributes": {
            "city": "PECOS,US",
            "code": "PEQ"
          }
        },
        {
          "@attributes": {
            "city": "Paamiut,GL",
            "code": "JFR"
          }
        },
        {
          "@attributes": {
            "city": "Pacific Harbour,FJ",
            "code": "PHR"
          }
        },
        {
          "@attributes": {
            "city": "Padang,ID",
            "code": "PDG"
          }
        },
        {
          "@attributes": {
            "city": "Paderborn,DE",
            "code": "PAD"
          }
        },
        {
          "@attributes": {
            "city": "Padova,IT",
            "code": "QPA"
          }
        },
        {
          "@attributes": {
            "city": "Paducah,US",
            "code": "PAH"
          }
        },
        {
          "@attributes": {
            "city": "Pagadian,PH",
            "code": "PAG"
          }
        },
        {
          "@attributes": {
            "city": "Page,US",
            "code": "PGA"
          }
        },
        {
          "@attributes": {
            "city": "Pago Pago,AS",
            "code": "PPG"
          }
        },
        {
          "@attributes": {
            "city": "Pagosa Springs,US",
            "code": "PGO"
          }
        },
        {
          "@attributes": {
            "city": "Pahokee,US",
            "code": "PHK"
          }
        },
        {
          "@attributes": {
            "city": "Pai cities,TH",
            "code": "PYY"
          }
        },
        {
          "@attributes": {
            "city": "Paimiut,US",
            "code": "PMU"
          }
        },
        {
          "@attributes": {
            "city": "Painesville,US",
            "code": "PVZ"
          }
        },
        {
          "@attributes": {
            "city": "Pajala,SE",
            "code": "PJA"
          }
        },
        {
          "@attributes": {
            "city": "Pakse,LA",
            "code": "PKZ"
          }
        },
        {
          "@attributes": {
            "city": "Pakuashipi,CA",
            "code": "YIF"
          }
        },
        {
          "@attributes": {
            "city": "Palacios,HN",
            "code": "PCH"
          }
        },
        {
          "@attributes": {
            "city": "Palanga,LT",
            "code": "PLQ"
          }
        },
        {
          "@attributes": {
            "city": "Palangkaraya,ID",
            "code": "PKY"
          }
        },
        {
          "@attributes": {
            "city": "Palanquero,CO",
            "code": "PAL"
          }
        },
        {
          "@attributes": {
            "city": "Palapye,BW",
            "code": "QPH"
          }
        },
        {
          "@attributes": {
            "city": "Palembang,ID",
            "code": "PLM"
          }
        },
        {
          "@attributes": {
            "city": "Palencia,ES",
            "code": "PCI"
          }
        },
        {
          "@attributes": {
            "city": "Palenque,MX",
            "code": "PQM"
          }
        },
        {
          "@attributes": {
            "city": "Palermo,IT",
            "code": "PMO"
          }
        },
        {
          "@attributes": {
            "city": "Palestine,US",
            "code": "PSN"
          }
        },
        {
          "@attributes": {
            "city": "Palm Desert,US",
            "code": "UDD"
          }
        },
        {
          "@attributes": {
            "city": "Palm Island,AU",
            "code": "PMK"
          }
        },
        {
          "@attributes": {
            "city": "Palm Springs,US",
            "code": "PSP"
          }
        },
        {
          "@attributes": {
            "city": "Palma Mallorca,ES",
            "code": "PMI"
          }
        },
        {
          "@attributes": {
            "city": "Palmar,CR",
            "code": "PMZ"
          }
        },
        {
          "@attributes": {
            "city": "Palmas,BR",
            "code": "PMW"
          }
        },
        {
          "@attributes": {
            "city": "Palmdale,US",
            "code": "PMD"
          }
        },
        {
          "@attributes": {
            "city": "Palmer,US",
            "code": "PAQ"
          }
        },
        {
          "@attributes": {
            "city": "Palmerston,NZ",
            "code": "PMR"
          }
        },
        {
          "@attributes": {
            "city": "Palo Alto,US",
            "code": "PAO"
          }
        },
        {
          "@attributes": {
            "city": "Palopo,ID",
            "code": "LLO"
          }
        },
        {
          "@attributes": {
            "city": "Palu,ID",
            "code": "PLW"
          }
        },
        {
          "@attributes": {
            "city": "Pamana cities,US",
            "code": "ECP"
          }
        },
        {
          "@attributes": {
            "city": "Pambwa,PG",
            "code": "PAW"
          }
        },
        {
          "@attributes": {
            "city": "Pamol,MY",
            "code": "PAY"
          }
        },
        {
          "@attributes": {
            "city": "Pamplona,ES",
            "code": "PNA"
          }
        },
        {
          "@attributes": {
            "city": "Panama cities,US",
            "code": "PFN"
          }
        },
        {
          "@attributes": {
            "city": "Panama cities,PA",
            "code": "PTY"
          }
        },
        {
          "@attributes": {
            "city": "Panambi,BR",
            "code": "QMB"
          }
        },
        {
          "@attributes": {
            "city": "Pancevo,RS",
            "code": "QBG"
          }
        },
        {
          "@attributes": {
            "city": "Pandie Pandie,AU",
            "code": "PDE"
          }
        },
        {
          "@attributes": {
            "city": "Panevezys,LT",
            "code": "PNV"
          }
        },
        {
          "@attributes": {
            "city": "Pangkalanbuun,ID",
            "code": "PKN"
          }
        },
        {
          "@attributes": {
            "city": "Pangkalpinang,ID",
            "code": "PGK"
          }
        },
        {
          "@attributes": {
            "city": "Pangkor,MY",
            "code": "PKG"
          }
        },
        {
          "@attributes": {
            "city": "Pangnirtung,CA",
            "code": "YXP"
          }
        },
        {
          "@attributes": {
            "city": "Panguitch,US",
            "code": "PNU"
          }
        },
        {
          "@attributes": {
            "city": "Panjgur,PK",
            "code": "PJG"
          }
        },
        {
          "@attributes": {
            "city": "Pantelleria,IT",
            "code": "PNL"
          }
        },
        {
          "@attributes": {
            "city": "Pantnagar,IN",
            "code": "PGH"
          }
        },
        {
          "@attributes": {
            "city": "Panzhihua,CN",
            "code": "PZI"
          }
        },
        {
          "@attributes": {
            "city": "Paonia,US",
            "code": "WPO"
          }
        },
        {
          "@attributes": {
            "city": "Papa Westray,GB",
            "code": "PPW"
          }
        },
        {
          "@attributes": {
            "city": "Papeete,PF",
            "code": "PPT"
          }
        },
        {
          "@attributes": {
            "city": "Paphos,CY",
            "code": "PFO"
          }
        },
        {
          "@attributes": {
            "city": "Par GB,GB",
            "code": "PCW"
          }
        },
        {
          "@attributes": {
            "city": "Paraburdoo,AU",
            "code": "PBO"
          }
        },
        {
          "@attributes": {
            "city": "Paragould,US",
            "code": "PGR"
          }
        },
        {
          "@attributes": {
            "city": "Paramakatoi,GY",
            "code": "PMT"
          }
        },
        {
          "@attributes": {
            "city": "Paramaribo,SR",
            "code": "PBM"
          }
        },
        {
          "@attributes": {
            "city": "Parana,AR",
            "code": "PRA"
          }
        },
        {
          "@attributes": {
            "city": "Paranagua,BR",
            "code": "PNG"
          }
        },
        {
          "@attributes": {
            "city": "Paranaiba,BR",
            "code": "PBB"
          }
        },
        {
          "@attributes": {
            "city": "Paraparaumu,NZ",
            "code": "PPQ"
          }
        },
        {
          "@attributes": {
            "city": "Parasi,SB",
            "code": "PRS"
          }
        },
        {
          "@attributes": {
            "city": "Pardubice,CZ",
            "code": "PED"
          }
        },
        {
          "@attributes": {
            "city": "Parent,CA",
            "code": "XFE"
          }
        },
        {
          "@attributes": {
            "city": "Parintins,BR",
            "code": "PIN"
          }
        },
        {
          "@attributes": {
            "city": "Paris,FR",
            "code": "PAR"
          }
        },
        {
          "@attributes": {
            "city": "Paris,US",
            "code": "PHT"
          }
        },
        {
          "@attributes": {
            "city": "Paris,US",
            "code": "PRX"
          }
        },
        {
          "@attributes": {
            "city": "Paris cities,FR",
            "code": "XJY"
          }
        },
        {
          "@attributes": {
            "city": "Park Rapids,US",
            "code": "PKD"
          }
        },
        {
          "@attributes": {
            "city": "Parkersburg,US",
            "code": "PKB"
          }
        },
        {
          "@attributes": {
            "city": "Parkes,AU",
            "code": "PKE"
          }
        },
        {
          "@attributes": {
            "city": "Parks,US",
            "code": "KPK"
          }
        },
        {
          "@attributes": {
            "city": "Parksville,CA",
            "code": "XPB"
          }
        },
        {
          "@attributes": {
            "city": "Parma,IT",
            "code": "PMF"
          }
        },
        {
          "@attributes": {
            "city": "Parnaiba,BR",
            "code": "PHB"
          }
        },
        {
          "@attributes": {
            "city": "Parnamirim,BR",
            "code": "QEU"
          }
        },
        {
          "@attributes": {
            "city": "Parnu,EE",
            "code": "EPU"
          }
        },
        {
          "@attributes": {
            "city": "Paro,BT",
            "code": "PBH"
          }
        },
        {
          "@attributes": {
            "city": "Paros,GR",
            "code": "PAS"
          }
        },
        {
          "@attributes": {
            "city": "Parry Sound,CA",
            "code": "YPD"
          }
        },
        {
          "@attributes": {
            "city": "Parsons,US",
            "code": "PPF"
          }
        },
        {
          "@attributes": {
            "city": "Pasadena,US",
            "code": "JPD"
          }
        },
        {
          "@attributes": {
            "city": "Pascagoula,US",
            "code": "PGL"
          }
        },
        {
          "@attributes": {
            "city": "Pasco,US",
            "code": "PSC"
          }
        },
        {
          "@attributes": {
            "city": "Pasewalk,DE",
            "code": "ZSK"
          }
        },
        {
          "@attributes": {
            "city": "Pasighat,IN",
            "code": "IXT"
          }
        },
        {
          "@attributes": {
            "city": "Pasni,PK",
            "code": "PSI"
          }
        },
        {
          "@attributes": {
            "city": "Paso De Los Libres,AR",
            "code": "AOL"
          }
        },
        {
          "@attributes": {
            "city": "Paso Robles,US",
            "code": "PRB"
          }
        },
        {
          "@attributes": {
            "city": "Passau,DE",
            "code": "ZPF"
          }
        },
        {
          "@attributes": {
            "city": "Passo Fundo,BR",
            "code": "PFB"
          }
        },
        {
          "@attributes": {
            "city": "Passos,BR",
            "code": "PSW"
          }
        },
        {
          "@attributes": {
            "city": "Pastaza,EC",
            "code": "PTZ"
          }
        },
        {
          "@attributes": {
            "city": "Pasto,CO",
            "code": "PSO"
          }
        },
        {
          "@attributes": {
            "city": "Pathankot,IN",
            "code": "IXP"
          }
        },
        {
          "@attributes": {
            "city": "Patna,IN",
            "code": "PAT"
          }
        },
        {
          "@attributes": {
            "city": "Pato Branco,BR",
            "code": "PTO"
          }
        },
        {
          "@attributes": {
            "city": "Patong Beach,TH",
            "code": "PBS"
          }
        },
        {
          "@attributes": {
            "city": "Patos De Minas,BR",
            "code": "POJ"
          }
        },
        {
          "@attributes": {
            "city": "Patras,GR",
            "code": "GPA"
          }
        },
        {
          "@attributes": {
            "city": "Patreksfjordur,IS",
            "code": "PFJ"
          }
        },
        {
          "@attributes": {
            "city": "Pattani,TH",
            "code": "PAN"
          }
        },
        {
          "@attributes": {
            "city": "Pattaya,TH",
            "code": "PYX"
          }
        },
        {
          "@attributes": {
            "city": "Patuxent River,US",
            "code": "NHK"
          }
        },
        {
          "@attributes": {
            "city": "Pau Fr,FR",
            "code": "PUF"
          }
        },
        {
          "@attributes": {
            "city": "Pauk,MM",
            "code": "PAU"
          }
        },
        {
          "@attributes": {
            "city": "Paulo Afonso,BR",
            "code": "PAV"
          }
        },
        {
          "@attributes": {
            "city": "Pauloff Harbor,US",
            "code": "KPH"
          }
        },
        {
          "@attributes": {
            "city": "Pavlodar,KZ",
            "code": "PWQ"
          }
        },
        {
          "@attributes": {
            "city": "Paysandu,UY",
            "code": "PDU"
          }
        },
        {
          "@attributes": {
            "city": "Payson,US",
            "code": "PJB"
          }
        },
        {
          "@attributes": {
            "city": "Peace River,CA",
            "code": "YPE"
          }
        },
        {
          "@attributes": {
            "city": "Peach Springs,US",
            "code": "PGS"
          }
        },
        {
          "@attributes": {
            "city": "Pecs,HU",
            "code": "PEV"
          }
        },
        {
          "@attributes": {
            "city": "Pedasi,PA",
            "code": "PDM"
          }
        },
        {
          "@attributes": {
            "city": "Pedro Bay,US",
            "code": "PDB"
          }
        },
        {
          "@attributes": {
            "city": "Peenemuende,DE",
            "code": "PEF"
          }
        },
        {
          "@attributes": {
            "city": "Peine,DE",
            "code": "ZPG"
          }
        },
        {
          "@attributes": {
            "city": "Pekanbaru,ID",
            "code": "PKU"
          }
        },
        {
          "@attributes": {
            "city": "Pelaneng,LS",
            "code": "PEL"
          }
        },
        {
          "@attributes": {
            "city": "Pelican,US",
            "code": "PEC"
          }
        },
        {
          "@attributes": {
            "city": "Pell cities,US",
            "code": "PLR"
          }
        },
        {
          "@attributes": {
            "city": "Pellston,US",
            "code": "PLN"
          }
        },
        {
          "@attributes": {
            "city": "Pelly Bay,CA",
            "code": "YBB"
          }
        },
        {
          "@attributes": {
            "city": "Pelotas,BR",
            "code": "PET"
          }
        },
        {
          "@attributes": {
            "city": "Pemba,TZ",
            "code": "PMA"
          }
        },
        {
          "@attributes": {
            "city": "Pemba,MZ",
            "code": "POL"
          }
        },
        {
          "@attributes": {
            "city": "Pembroke,CA",
            "code": "YTA"
          }
        },
        {
          "@attributes": {
            "city": "Penang,MY",
            "code": "PEN"
          }
        },
        {
          "@attributes": {
            "city": "Pender Harbour,CA",
            "code": "YPT"
          }
        },
        {
          "@attributes": {
            "city": "Pendleton,US",
            "code": "PDT"
          }
        },
        {
          "@attributes": {
            "city": "Penglai,CN",
            "code": "PNJ"
          }
        },
        {
          "@attributes": {
            "city": "Penneshaw,AU",
            "code": "PEA"
          }
        },
        {
          "@attributes": {
            "city": "Penrith,GB",
            "code": "XPF"
          }
        },
        {
          "@attributes": {
            "city": "Pensacola,US",
            "code": "PNS"
          }
        },
        {
          "@attributes": {
            "city": "Penticton,CA",
            "code": "YYF"
          }
        },
        {
          "@attributes": {
            "city": "Penza,RU",
            "code": "PEZ"
          }
        },
        {
          "@attributes": {
            "city": "Penzance,GB",
            "code": "PZE"
          }
        },
        {
          "@attributes": {
            "city": "Peoria,US",
            "code": "PIA"
          }
        },
        {
          "@attributes": {
            "city": "Perce,CA",
            "code": "XFG"
          }
        },
        {
          "@attributes": {
            "city": "Percex,CA",
            "code": "XGF"
          }
        },
        {
          "@attributes": {
            "city": "Pereira,CO",
            "code": "PEI"
          }
        },
        {
          "@attributes": {
            "city": "Perigueux,FR",
            "code": "PGX"
          }
        },
        {
          "@attributes": {
            "city": "Perito Moreno,AR",
            "code": "PMQ"
          }
        },
        {
          "@attributes": {
            "city": "Perm,RU",
            "code": "PEE"
          }
        },
        {
          "@attributes": {
            "city": "Perpignan,FR",
            "code": "PGF"
          }
        },
        {
          "@attributes": {
            "city": "Perry,US",
            "code": "PRO"
          }
        },
        {
          "@attributes": {
            "city": "Perryville,US",
            "code": "KPV"
          }
        },
        {
          "@attributes": {
            "city": "Perth,AU",
            "code": "PER"
          }
        },
        {
          "@attributes": {
            "city": "Perth,GB",
            "code": "PSL"
          }
        },
        {
          "@attributes": {
            "city": "Peru,US",
            "code": "VYS"
          }
        },
        {
          "@attributes": {
            "city": "Perugia,IT",
            "code": "PEG"
          }
        },
        {
          "@attributes": {
            "city": "Pescara,IT",
            "code": "PSR"
          }
        },
        {
          "@attributes": {
            "city": "Peschiei,IT",
            "code": "PEJ"
          }
        },
        {
          "@attributes": {
            "city": "Peshawar,PK",
            "code": "PEW"
          }
        },
        {
          "@attributes": {
            "city": "Petawawa,CA",
            "code": "YWA"
          }
        },
        {
          "@attributes": {
            "city": "Peterborough,GB",
            "code": "XVH"
          }
        },
        {
          "@attributes": {
            "city": "Peterborough,CA",
            "code": "YPQ"
          }
        },
        {
          "@attributes": {
            "city": "Petersburg,US",
            "code": "PSG"
          }
        },
        {
          "@attributes": {
            "city": "Petersburg,US",
            "code": "PTB"
          }
        },
        {
          "@attributes": {
            "city": "Petrolina,BR",
            "code": "PNZ"
          }
        },
        {
          "@attributes": {
            "city": "Petropavlovsk,KZ",
            "code": "PPK"
          }
        },
        {
          "@attributes": {
            "city": "Petropavlovsk Kamchatskiy,RU",
            "code": "PKC"
          }
        },
        {
          "@attributes": {
            "city": "Petropolis,BR",
            "code": "QPE"
          }
        },
        {
          "@attributes": {
            "city": "Petrozavodsk,RU",
            "code": "PES"
          }
        },
        {
          "@attributes": {
            "city": "Pevek,RU",
            "code": "PWE"
          }
        },
        {
          "@attributes": {
            "city": "Pforzheim,DE",
            "code": "UPF"
          }
        },
        {
          "@attributes": {
            "city": "Phalaborwa,ZA",
            "code": "PHW"
          }
        },
        {
          "@attributes": {
            "city": "Phan Thiet,VN",
            "code": "PHH"
          }
        },
        {
          "@attributes": {
            "city": "Phaplu,NP",
            "code": "PPL"
          }
        },
        {
          "@attributes": {
            "city": "Philadelphia,US",
            "code": "PHL"
          }
        },
        {
          "@attributes": {
            "city": "Philipsburg,US",
            "code": "PSB"
          }
        },
        {
          "@attributes": {
            "city": "Phitsanulok,TH",
            "code": "PHS"
          }
        },
        {
          "@attributes": {
            "city": "Phnom Penh,KH",
            "code": "PNH"
          }
        },
        {
          "@attributes": {
            "city": "Phoenix,US",
            "code": "PHX"
          }
        },
        {
          "@attributes": {
            "city": "Phoenix cities,US",
            "code": "AZA"
          }
        },
        {
          "@attributes": {
            "city": "Phrae,TH",
            "code": "PRH"
          }
        },
        {
          "@attributes": {
            "city": "Phu Quoc,VN",
            "code": "PQC"
          }
        },
        {
          "@attributes": {
            "city": "Phuket,TH",
            "code": "HKT"
          }
        },
        {
          "@attributes": {
            "city": "Piacenza,IT",
            "code": "QPZ"
          }
        },
        {
          "@attributes": {
            "city": "Piatra Neamt,RO",
            "code": "QPN"
          }
        },
        {
          "@attributes": {
            "city": "Picayune,US",
            "code": "PCU"
          }
        },
        {
          "@attributes": {
            "city": "Pickle Lake,CA",
            "code": "YPL"
          }
        },
        {
          "@attributes": {
            "city": "Pico Island,PT",
            "code": "PIX"
          }
        },
        {
          "@attributes": {
            "city": "Picton,NZ",
            "code": "PCN"
          }
        },
        {
          "@attributes": {
            "city": "Piedras Negras,MX",
            "code": "PDS"
          }
        },
        {
          "@attributes": {
            "city": "Pierre,US",
            "code": "PIR"
          }
        },
        {
          "@attributes": {
            "city": "Piestany,SK",
            "code": "PZY"
          }
        },
        {
          "@attributes": {
            "city": "Pietermaritzburg,ZA",
            "code": "PZB"
          }
        },
        {
          "@attributes": {
            "city": "Pikeville,US",
            "code": "PVL"
          }
        },
        {
          "@attributes": {
            "city": "Pikwitonei,CA",
            "code": "PIW"
          }
        },
        {
          "@attributes": {
            "city": "Pilot Point,US",
            "code": "PIP"
          }
        },
        {
          "@attributes": {
            "city": "Pilot Station,US",
            "code": "PQS"
          }
        },
        {
          "@attributes": {
            "city": "Pine Bluff,US",
            "code": "PBF"
          }
        },
        {
          "@attributes": {
            "city": "Pinehurst,US",
            "code": "SOP"
          }
        },
        {
          "@attributes": {
            "city": "Pingxiang,CN",
            "code": "PXG"
          }
        },
        {
          "@attributes": {
            "city": "Pinotepa Nacional,MX",
            "code": "PNO"
          }
        },
        {
          "@attributes": {
            "city": "Piracicaba,BR",
            "code": "QHB"
          }
        },
        {
          "@attributes": {
            "city": "Pirapora,BR",
            "code": "PIV"
          }
        },
        {
          "@attributes": {
            "city": "Pirassununga,BR",
            "code": "QPS"
          }
        },
        {
          "@attributes": {
            "city": "Pirmasens,DE",
            "code": "ZPI"
          }
        },
        {
          "@attributes": {
            "city": "Pisa,IT",
            "code": "PSA"
          }
        },
        {
          "@attributes": {
            "city": "Pisco,PE",
            "code": "PIO"
          }
        },
        {
          "@attributes": {
            "city": "Pitts Town,BS",
            "code": "PWN"
          }
        },
        {
          "@attributes": {
            "city": "Pittsburg,US",
            "code": "PTS"
          }
        },
        {
          "@attributes": {
            "city": "Pittsburgh,US",
            "code": "PIT"
          }
        },
        {
          "@attributes": {
            "city": "Pittsfield,US",
            "code": "PSF"
          }
        },
        {
          "@attributes": {
            "city": "Pituffik,GL",
            "code": "THU"
          }
        },
        {
          "@attributes": {
            "city": "Piura,PE",
            "code": "PIU"
          }
        },
        {
          "@attributes": {
            "city": "Placencia,BZ",
            "code": "PLJ"
          }
        },
        {
          "@attributes": {
            "city": "Placerville,US",
            "code": "PVF"
          }
        },
        {
          "@attributes": {
            "city": "Plainview,US",
            "code": "PVW"
          }
        },
        {
          "@attributes": {
            "city": "Planeta Rica,CO",
            "code": "PLC"
          }
        },
        {
          "@attributes": {
            "city": "Platinum,US",
            "code": "PTU"
          }
        },
        {
          "@attributes": {
            "city": "Plattsburgh,US",
            "code": "PBG"
          }
        },
        {
          "@attributes": {
            "city": "Playa Baracoa,CU",
            "code": "UPB"
          }
        },
        {
          "@attributes": {
            "city": "Playa Blanca,ES",
            "code": "QLY"
          }
        },
        {
          "@attributes": {
            "city": "Playa Del Carmen,MX",
            "code": "PCM"
          }
        },
        {
          "@attributes": {
            "city": "Playa Grande,GT",
            "code": "PKJ"
          }
        },
        {
          "@attributes": {
            "city": "Playa Samara,CR",
            "code": "PLD"
          }
        },
        {
          "@attributes": {
            "city": "Playa de los Cristianos,ES",
            "code": "QCI"
          }
        },
        {
          "@attributes": {
            "city": "Pleasanton,US",
            "code": "JBS"
          }
        },
        {
          "@attributes": {
            "city": "Pleiku,VN",
            "code": "PXU"
          }
        },
        {
          "@attributes": {
            "city": "Plettenberg Bay,ZA",
            "code": "PBZ"
          }
        },
        {
          "@attributes": {
            "city": "Pleven,BG",
            "code": "PVN"
          }
        },
        {
          "@attributes": {
            "city": "Plock,PL",
            "code": "QPC"
          }
        },
        {
          "@attributes": {
            "city": "Ploiesti,RO",
            "code": "QPL"
          }
        },
        {
          "@attributes": {
            "city": "Plovdiv,BG",
            "code": "PDV"
          }
        },
        {
          "@attributes": {
            "city": "Plymouth,GB",
            "code": "PLH"
          }
        },
        {
          "@attributes": {
            "city": "Plymouth,US",
            "code": "PLY"
          }
        },
        {
          "@attributes": {
            "city": "Plymouth,US",
            "code": "PYM"
          }
        },
        {
          "@attributes": {
            "city": "Pocatello,US",
            "code": "PIH"
          }
        },
        {
          "@attributes": {
            "city": "Pocos De Caldas,BR",
            "code": "POO"
          }
        },
        {
          "@attributes": {
            "city": "Podgorica,ME",
            "code": "TGD"
          }
        },
        {
          "@attributes": {
            "city": "Podor,SN",
            "code": "POD"
          }
        },
        {
          "@attributes": {
            "city": "Pohang,KR",
            "code": "KPO"
          }
        },
        {
          "@attributes": {
            "city": "Pohnpei,FM",
            "code": "PNI"
          }
        },
        {
          "@attributes": {
            "city": "Point Baker,US",
            "code": "KPB"
          }
        },
        {
          "@attributes": {
            "city": "Point Hope,US",
            "code": "PHO"
          }
        },
        {
          "@attributes": {
            "city": "Point Lay,US",
            "code": "PIZ"
          }
        },
        {
          "@attributes": {
            "city": "Point Lookout,US",
            "code": "PLK"
          }
        },
        {
          "@attributes": {
            "city": "Pointe A Pitre,GP",
            "code": "PTP"
          }
        },
        {
          "@attributes": {
            "city": "Pointe Aux Trembles,CA",
            "code": "XPX"
          }
        },
        {
          "@attributes": {
            "city": "Pointe Noire,CG",
            "code": "PNR"
          }
        },
        {
          "@attributes": {
            "city": "Poipet,KH",
            "code": "HPP"
          }
        },
        {
          "@attributes": {
            "city": "Poitiers,FR",
            "code": "PIS"
          }
        },
        {
          "@attributes": {
            "city": "Pokhara,NP",
            "code": "PKR"
          }
        },
        {
          "@attributes": {
            "city": "Polacca,US",
            "code": "PXL"
          }
        },
        {
          "@attributes": {
            "city": "Polk Inlet,US",
            "code": "POQ"
          }
        },
        {
          "@attributes": {
            "city": "Polokwane,ZA",
            "code": "PTG"
          }
        },
        {
          "@attributes": {
            "city": "Poltava,UA",
            "code": "PLV"
          }
        },
        {
          "@attributes": {
            "city": "Polyarny,RU",
            "code": "PYJ"
          }
        },
        {
          "@attributes": {
            "city": "Pomala,ID",
            "code": "PUM"
          }
        },
        {
          "@attributes": {
            "city": "Pomezia,IT",
            "code": "QEZ"
          }
        },
        {
          "@attributes": {
            "city": "Pompano Beach,US",
            "code": "PPM"
          }
        },
        {
          "@attributes": {
            "city": "Ponca cities,US",
            "code": "PNC"
          }
        },
        {
          "@attributes": {
            "city": "Ponce,US",
            "code": "PSE"
          }
        },
        {
          "@attributes": {
            "city": "Pond Inlet,CA",
            "code": "YIO"
          }
        },
        {
          "@attributes": {
            "city": "Pondicherry,IN",
            "code": "PNY"
          }
        },
        {
          "@attributes": {
            "city": "Ponferrada,ES",
            "code": "PFE"
          }
        },
        {
          "@attributes": {
            "city": "Ponta Delgada,PT",
            "code": "PDL"
          }
        },
        {
          "@attributes": {
            "city": "Ponta Grossa,BR",
            "code": "PGZ"
          }
        },
        {
          "@attributes": {
            "city": "Ponta Pora,BR",
            "code": "PMG"
          }
        },
        {
          "@attributes": {
            "city": "Pontevedra,ES",
            "code": "PTE"
          }
        },
        {
          "@attributes": {
            "city": "Pontiac,US",
            "code": "PTK"
          }
        },
        {
          "@attributes": {
            "city": "Pontianak,ID",
            "code": "PNK"
          }
        },
        {
          "@attributes": {
            "city": "Pontoise,FR",
            "code": "POX"
          }
        },
        {
          "@attributes": {
            "city": "Pontresina,CH",
            "code": "ZJV"
          }
        },
        {
          "@attributes": {
            "city": "Popayan,CO",
            "code": "PPN"
          }
        },
        {
          "@attributes": {
            "city": "Poplar Bluff,US",
            "code": "POF"
          }
        },
        {
          "@attributes": {
            "city": "Poplar Hill Indian Reserve,CA",
            "code": "YHP"
          }
        },
        {
          "@attributes": {
            "city": "Poplar River Indian Reserve,CA",
            "code": "XPP"
          }
        },
        {
          "@attributes": {
            "city": "Popondetta,PG",
            "code": "PNP"
          }
        },
        {
          "@attributes": {
            "city": "Poprad Tatry,SK",
            "code": "TAT"
          }
        },
        {
          "@attributes": {
            "city": "Porbandar,IN",
            "code": "PBD"
          }
        },
        {
          "@attributes": {
            "city": "Pordenone,IT",
            "code": "QAD"
          }
        },
        {
          "@attributes": {
            "city": "Porgera,PG",
            "code": "RGE"
          }
        },
        {
          "@attributes": {
            "city": "Pori,FI",
            "code": "POR"
          }
        },
        {
          "@attributes": {
            "city": "Porlamar,VE",
            "code": "PMV"
          }
        },
        {
          "@attributes": {
            "city": "Porsgrunn,NO",
            "code": "XKP"
          }
        },
        {
          "@attributes": {
            "city": "Port Alberni,CA",
            "code": "YPB"
          }
        },
        {
          "@attributes": {
            "city": "Port Alexander,US",
            "code": "PTD"
          }
        },
        {
          "@attributes": {
            "city": "Port Alice,US",
            "code": "PTC"
          }
        },
        {
          "@attributes": {
            "city": "Port Alsworth,US",
            "code": "PTA"
          }
        },
        {
          "@attributes": {
            "city": "Port Angeles,US",
            "code": "CLM"
          }
        },
        {
          "@attributes": {
            "city": "Port Antonio,JM",
            "code": "POT"
          }
        },
        {
          "@attributes": {
            "city": "Port Armstrong,US",
            "code": "PTL"
          }
        },
        {
          "@attributes": {
            "city": "Port Au Prince,HT",
            "code": "PAP"
          }
        },
        {
          "@attributes": {
            "city": "Port Augusta,AU",
            "code": "PUG"
          }
        },
        {
          "@attributes": {
            "city": "Port Bailey,US",
            "code": "KPY"
          }
        },
        {
          "@attributes": {
            "city": "Port Berge,MG",
            "code": "WPB"
          }
        },
        {
          "@attributes": {
            "city": "Port Blair,IN",
            "code": "IXZ"
          }
        },
        {
          "@attributes": {
            "city": "Port Clarence,US",
            "code": "KPC"
          }
        },
        {
          "@attributes": {
            "city": "Port Daniel,CA",
            "code": "XFI"
          }
        },
        {
          "@attributes": {
            "city": "Port Douglas,AU",
            "code": "PTI"
          }
        },
        {
          "@attributes": {
            "city": "Port Elizabeth,VC",
            "code": "BQU"
          }
        },
        {
          "@attributes": {
            "city": "Port Elizabeth,ZA",
            "code": "PLZ"
          }
        },
        {
          "@attributes": {
            "city": "Port Frederick,US",
            "code": "PFD"
          }
        },
        {
          "@attributes": {
            "city": "Port Gentil,GA",
            "code": "POG"
          }
        },
        {
          "@attributes": {
            "city": "Port Graham,US",
            "code": "PGM"
          }
        },
        {
          "@attributes": {
            "city": "Port Harcourt,NG",
            "code": "PHC"
          }
        },
        {
          "@attributes": {
            "city": "Port Hardy,CA",
            "code": "YZT"
          }
        },
        {
          "@attributes": {
            "city": "Port Hawkesbury,CA",
            "code": "YPS"
          }
        },
        {
          "@attributes": {
            "city": "Port Hedland,AU",
            "code": "PHE"
          }
        },
        {
          "@attributes": {
            "city": "Port Heiden,US",
            "code": "PTH"
          }
        },
        {
          "@attributes": {
            "city": "Port Hope,CA",
            "code": "XPH"
          }
        },
        {
          "@attributes": {
            "city": "Port Hope Simpson,CA",
            "code": "YHA"
          }
        },
        {
          "@attributes": {
            "city": "Port Hueneme,US",
            "code": "NTD"
          }
        },
        {
          "@attributes": {
            "city": "Port Huron,US",
            "code": "PHN"
          }
        },
        {
          "@attributes": {
            "city": "Port Lincoln,AU",
            "code": "PLO"
          }
        },
        {
          "@attributes": {
            "city": "Port Lions,US",
            "code": "ORI"
          }
        },
        {
          "@attributes": {
            "city": "Port Menier,CA",
            "code": "YPN"
          }
        },
        {
          "@attributes": {
            "city": "Port Moller,US",
            "code": "PML"
          }
        },
        {
          "@attributes": {
            "city": "Port Moresby,PG",
            "code": "POM"
          }
        },
        {
          "@attributes": {
            "city": "Port Of Spain,TT",
            "code": "POS"
          }
        },
        {
          "@attributes": {
            "city": "Port Pirie,AU",
            "code": "PPI"
          }
        },
        {
          "@attributes": {
            "city": "Port Protection,US",
            "code": "PPV"
          }
        },
        {
          "@attributes": {
            "city": "Port Said,EG",
            "code": "PSD"
          }
        },
        {
          "@attributes": {
            "city": "Port Stanley,FK",
            "code": "PSY"
          }
        },
        {
          "@attributes": {
            "city": "Port Sudan,SD",
            "code": "PZU"
          }
        },
        {
          "@attributes": {
            "city": "Port Vila,VU",
            "code": "VLI"
          }
        },
        {
          "@attributes": {
            "city": "Port Walter,US",
            "code": "PWR"
          }
        },
        {
          "@attributes": {
            "city": "Port Williams,US",
            "code": "KPR"
          }
        },
        {
          "@attributes": {
            "city": "Portage Creek,US",
            "code": "PCA"
          }
        },
        {
          "@attributes": {
            "city": "Portage La Prairie,CA",
            "code": "YPG"
          }
        },
        {
          "@attributes": {
            "city": "Porterville,US",
            "code": "PTV"
          }
        },
        {
          "@attributes": {
            "city": "Portimao,PT",
            "code": "PRM"
          }
        },
        {
          "@attributes": {
            "city": "Portland,US",
            "code": "PDX"
          }
        },
        {
          "@attributes": {
            "city": "Portland,AU",
            "code": "PTJ"
          }
        },
        {
          "@attributes": {
            "city": "Portland,US",
            "code": "PWM"
          }
        },
        {
          "@attributes": {
            "city": "Porto,PT",
            "code": "OPO"
          }
        },
        {
          "@attributes": {
            "city": "Porto Alegre,BR",
            "code": "POA"
          }
        },
        {
          "@attributes": {
            "city": "Porto Santo,PT",
            "code": "PXO"
          }
        },
        {
          "@attributes": {
            "city": "Porto Seguro,BR",
            "code": "BPS"
          }
        },
        {
          "@attributes": {
            "city": "Porto Velho,BR",
            "code": "PVH"
          }
        },
        {
          "@attributes": {
            "city": "Portoheli,GR",
            "code": "PKH"
          }
        },
        {
          "@attributes": {
            "city": "Portoroz,SI",
            "code": "POW"
          }
        },
        {
          "@attributes": {
            "city": "Portoviejo,EC",
            "code": "PVO"
          }
        },
        {
          "@attributes": {
            "city": "Portsmouth,US",
            "code": "PMH"
          }
        },
        {
          "@attributes": {
            "city": "Portsmouth,GB",
            "code": "PME"
          }
        },
        {
          "@attributes": {
            "city": "Portsmouth,US",
            "code": "PSM"
          }
        },
        {
          "@attributes": {
            "city": "Porvoo,FI",
            "code": "QXJ"
          }
        },
        {
          "@attributes": {
            "city": "Posadas,AR",
            "code": "PSS"
          }
        },
        {
          "@attributes": {
            "city": "Poso,ID",
            "code": "PSJ"
          }
        },
        {
          "@attributes": {
            "city": "Poste De La Baleine,CA",
            "code": "YGW"
          }
        },
        {
          "@attributes": {
            "city": "Postville,CA",
            "code": "YSO"
          }
        },
        {
          "@attributes": {
            "city": "Potchefstroom,ZA",
            "code": "PCF"
          }
        },
        {
          "@attributes": {
            "city": "Potenza,IT",
            "code": "QPO"
          }
        },
        {
          "@attributes": {
            "city": "Potosi,BO",
            "code": "POI"
          }
        },
        {
          "@attributes": {
            "city": "Potsdam,DE",
            "code": "XXP"
          }
        },
        {
          "@attributes": {
            "city": "Pottstown,US",
            "code": "PTW"
          }
        },
        {
          "@attributes": {
            "city": "Poughkeepsie,US",
            "code": "POU"
          }
        },
        {
          "@attributes": {
            "city": "Poulsbo,US",
            "code": "PUL"
          }
        },
        {
          "@attributes": {
            "city": "Poum,NC",
            "code": "PUV"
          }
        },
        {
          "@attributes": {
            "city": "Pouso Alegre,BR",
            "code": "PPY"
          }
        },
        {
          "@attributes": {
            "city": "Powell Lovell,US",
            "code": "POY"
          }
        },
        {
          "@attributes": {
            "city": "Powell River,CA",
            "code": "YPW"
          }
        },
        {
          "@attributes": {
            "city": "Poza Rica,MX",
            "code": "PAZ"
          }
        },
        {
          "@attributes": {
            "city": "Poznan,PL",
            "code": "POZ"
          }
        },
        {
          "@attributes": {
            "city": "Prague,CZ",
            "code": "PRG"
          }
        },
        {
          "@attributes": {
            "city": "Praia,CV",
            "code": "RAI"
          }
        },
        {
          "@attributes": {
            "city": "Prairie Du Chien,US",
            "code": "PCD"
          }
        },
        {
          "@attributes": {
            "city": "Praslin Island,SC",
            "code": "PRI"
          }
        },
        {
          "@attributes": {
            "city": "Prato,IT",
            "code": "QPR"
          }
        },
        {
          "@attributes": {
            "city": "Pratt,US",
            "code": "PTT"
          }
        },
        {
          "@attributes": {
            "city": "Praya,ID",
            "code": "LOP"
          }
        },
        {
          "@attributes": {
            "city": "Prescott,CA",
            "code": "XII"
          }
        },
        {
          "@attributes": {
            "city": "Prescott,US",
            "code": "PRC"
          }
        },
        {
          "@attributes": {
            "city": "Presidente Prudente,BR",
            "code": "PPB"
          }
        },
        {
          "@attributes": {
            "city": "Presque Isle,US",
            "code": "PQI"
          }
        },
        {
          "@attributes": {
            "city": "Preston,GB",
            "code": "XPT"
          }
        },
        {
          "@attributes": {
            "city": "Pretoria,ZA",
            "code": "PRY"
          }
        },
        {
          "@attributes": {
            "city": "Preveza,GR",
            "code": "PVK"
          }
        },
        {
          "@attributes": {
            "city": "Price,US",
            "code": "PUC"
          }
        },
        {
          "@attributes": {
            "city": "Prince Albert,CA",
            "code": "YPA"
          }
        },
        {
          "@attributes": {
            "city": "Prince George,CA",
            "code": "YXS"
          }
        },
        {
          "@attributes": {
            "city": "Prince Rupert,CA",
            "code": "YPR"
          }
        },
        {
          "@attributes": {
            "city": "Princeton,US",
            "code": "PCT"
          }
        },
        {
          "@attributes": {
            "city": "Princeville,US",
            "code": "HPV"
          }
        },
        {
          "@attributes": {
            "city": "Pristina,XK",
            "code": "PRN"
          }
        },
        {
          "@attributes": {
            "city": "Procida,IT",
            "code": "ZJJ"
          }
        },
        {
          "@attributes": {
            "city": "Prome,MM",
            "code": "PRU"
          }
        },
        {
          "@attributes": {
            "city": "Propriano,FR",
            "code": "PRP"
          }
        },
        {
          "@attributes": {
            "city": "Proserpine,AU",
            "code": "PPP"
          }
        },
        {
          "@attributes": {
            "city": "Prospect Creek,US",
            "code": "PPC"
          }
        },
        {
          "@attributes": {
            "city": "Providence,US",
            "code": "PVD"
          }
        },
        {
          "@attributes": {
            "city": "Providencia,CO",
            "code": "PVA"
          }
        },
        {
          "@attributes": {
            "city": "Providenciales,TC",
            "code": "PLS"
          }
        },
        {
          "@attributes": {
            "city": "Provincetown,US",
            "code": "PVC"
          }
        },
        {
          "@attributes": {
            "city": "Provins,FR",
            "code": "XPS"
          }
        },
        {
          "@attributes": {
            "city": "Provo,US",
            "code": "PVU"
          }
        },
        {
          "@attributes": {
            "city": "Prudhoe Bay,US",
            "code": "PUO"
          }
        },
        {
          "@attributes": {
            "city": "Prudhoe Bay Deadhorse,US",
            "code": "SCC"
          }
        },
        {
          "@attributes": {
            "city": "Pskov,RU",
            "code": "PKV"
          }
        },
        {
          "@attributes": {
            "city": "Pt Macquarie,AU",
            "code": "PQQ"
          }
        },
        {
          "@attributes": {
            "city": "Pucallpa,PE",
            "code": "PCL"
          }
        },
        {
          "@attributes": {
            "city": "Pucon,CL",
            "code": "ZPC"
          }
        },
        {
          "@attributes": {
            "city": "Puebla,MX",
            "code": "PBC"
          }
        },
        {
          "@attributes": {
            "city": "Pueblo,US",
            "code": "PUB"
          }
        },
        {
          "@attributes": {
            "city": "Puente Genil,ES",
            "code": "GEN"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Aisen,CL",
            "code": "WPA"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Armuelles,PA",
            "code": "AML"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Asis,CO",
            "code": "PUU"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Ayacucho,VE",
            "code": "PYH"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Barrios,GT",
            "code": "PBR"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Berrio,CO",
            "code": "PBE"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Boyaca,CO",
            "code": "PYA"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Cabello,VE",
            "code": "PBL"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Carreno,CO",
            "code": "PCR"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Del Rosario,ES",
            "code": "FUE"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Deseado,AR",
            "code": "PUD"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Escondido,MX",
            "code": "PXM"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Inirida,CO",
            "code": "PDA"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Jimenez,CR",
            "code": "PJM"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Juarez,MX",
            "code": "PJZ"
          }
        },
        {
          "@attributes": {
            "city": "Puerto La Victoria,PY",
            "code": "PCJ"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Leguizamo,CO",
            "code": "LQM"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Madryn,AR",
            "code": "PMY"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Maldonado,PE",
            "code": "PEM"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Montt,CL",
            "code": "PMC"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Natales,CL",
            "code": "PNT"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Obaldia,PA",
            "code": "PUE"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Ordaz,VE",
            "code": "PZO"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Penasco,MX",
            "code": "PPE"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Plata,DO",
            "code": "POP"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Princesa,PH",
            "code": "PPS"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Suarez,BO",
            "code": "PSZ"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Vallarta,MX",
            "code": "PVR"
          }
        },
        {
          "@attributes": {
            "city": "Puerto Varas,CL",
            "code": "PUX"
          }
        },
        {
          "@attributes": {
            "city": "Puerto de Santa Maria,ES",
            "code": "PXS"
          }
        },
        {
          "@attributes": {
            "city": "Puerto de la Luz,ES",
            "code": "QUZ"
          }
        },
        {
          "@attributes": {
            "city": "Puertollano,ES",
            "code": "UER"
          }
        },
        {
          "@attributes": {
            "city": "Pukapuka,PF",
            "code": "PKP"
          }
        },
        {
          "@attributes": {
            "city": "Pukapuka Island,CK",
            "code": "PZK"
          }
        },
        {
          "@attributes": {
            "city": "Pukarua,PF",
            "code": "PUK"
          }
        },
        {
          "@attributes": {
            "city": "Pukatawagan,CA",
            "code": "XPK"
          }
        },
        {
          "@attributes": {
            "city": "Pula,HR",
            "code": "PUY"
          }
        },
        {
          "@attributes": {
            "city": "Pullman,US",
            "code": "PUW"
          }
        },
        {
          "@attributes": {
            "city": "Pumani,PG",
            "code": "PMN"
          }
        },
        {
          "@attributes": {
            "city": "Pune,IN",
            "code": "PNQ"
          }
        },
        {
          "@attributes": {
            "city": "Punia,CD",
            "code": "PUN"
          }
        },
        {
          "@attributes": {
            "city": "Punta Arenas,CL",
            "code": "PUQ"
          }
        },
        {
          "@attributes": {
            "city": "Punta Cana,DO",
            "code": "PUJ"
          }
        },
        {
          "@attributes": {
            "city": "Punta Del Este,UY",
            "code": "PDP"
          }
        },
        {
          "@attributes": {
            "city": "Punta Gorda,US",
            "code": "PGD"
          }
        },
        {
          "@attributes": {
            "city": "Punta Gorda,BZ",
            "code": "PND"
          }
        },
        {
          "@attributes": {
            "city": "Punta Islita,CR",
            "code": "PBP"
          }
        },
        {
          "@attributes": {
            "city": "Punta Renes,CR",
            "code": "JAP"
          }
        },
        {
          "@attributes": {
            "city": "Purnea,PG",
            "code": "PUI"
          }
        },
        {
          "@attributes": {
            "city": "Puvirnituq,CA",
            "code": "YPX"
          }
        },
        {
          "@attributes": {
            "city": "Pyongyang,KP",
            "code": "FNJ"
          }
        },
        {
          "@attributes": {
            "city": "Qaanaaq,GL",
            "code": "NAQ"
          }
        },
        {
          "@attributes": {
            "city": "Qaarsut,GL",
            "code": "JQA"
          }
        },
        {
          "@attributes": {
            "city": "Qachas Nek,LS",
            "code": "UNE"
          }
        },
        {
          "@attributes": {
            "city": "Qaisumah,SA",
            "code": "AQI"
          }
        },
        {
          "@attributes": {
            "city": "Qaqortoq,GL",
            "code": "JJU"
          }
        },
        {
          "@attributes": {
            "city": "Qasigiannguit,GL",
            "code": "JCH"
          }
        },
        {
          "@attributes": {
            "city": "Qassiarsuk,GL",
            "code": "QFT"
          }
        },
        {
          "@attributes": {
            "city": "Qassimiut,GL",
            "code": "QJH"
          }
        },
        {
          "@attributes": {
            "city": "Qeqertarsuaq,GL",
            "code": "JGO"
          }
        },
        {
          "@attributes": {
            "city": "Qeqertarsuatsiaat,GL",
            "code": "QEY"
          }
        },
        {
          "@attributes": {
            "city": "Qianjiang,CN",
            "code": "JIQ"
          }
        },
        {
          "@attributes": {
            "city": "Qiemo,CN",
            "code": "IQM"
          }
        },
        {
          "@attributes": {
            "city": "Qikiqtarjuaq,CA",
            "code": "YVM"
          }
        },
        {
          "@attributes": {
            "city": "Qingdao,CN",
            "code": "TAO"
          }
        },
        {
          "@attributes": {
            "city": "Qingyang,CN",
            "code": "IQN"
          }
        },
        {
          "@attributes": {
            "city": "Qinhuangdao,CN",
            "code": "SHP"
          }
        },
        {
          "@attributes": {
            "city": "Qionghai,CN",
            "code": "QHX"
          }
        },
        {
          "@attributes": {
            "city": "Qiqihar,CN",
            "code": "NDG"
          }
        },
        {
          "@attributes": {
            "city": "Qishn,YE",
            "code": "IHN"
          }
        },
        {
          "@attributes": {
            "city": "Quakertown,US",
            "code": "UKT"
          }
        },
        {
          "@attributes": {
            "city": "Qualicum,CA",
            "code": "XQU"
          }
        },
        {
          "@attributes": {
            "city": "Quaqtaq,CA",
            "code": "YQC"
          }
        },
        {
          "@attributes": {
            "city": "Quebec,CA",
            "code": "YQB"
          }
        },
        {
          "@attributes": {
            "city": "Queen Charlotte Island,CA",
            "code": "ZQS"
          }
        },
        {
          "@attributes": {
            "city": "Queenstown,NZ",
            "code": "ZQN"
          }
        },
        {
          "@attributes": {
            "city": "Queenstown,AU",
            "code": "UEE"
          }
        },
        {
          "@attributes": {
            "city": "Queenstown,ZA",
            "code": "UTW"
          }
        },
        {
          "@attributes": {
            "city": "Quelimane,MZ",
            "code": "UEL"
          }
        },
        {
          "@attributes": {
            "city": "Quepos,CR",
            "code": "XQP"
          }
        },
        {
          "@attributes": {
            "city": "Queretaro,MX",
            "code": "QRO"
          }
        },
        {
          "@attributes": {
            "city": "Quesnel,CA",
            "code": "YQZ"
          }
        },
        {
          "@attributes": {
            "city": "Quetta,PK",
            "code": "UET"
          }
        },
        {
          "@attributes": {
            "city": "Qui Nhon,VN",
            "code": "UIH"
          }
        },
        {
          "@attributes": {
            "city": "Quibdo,CO",
            "code": "UIB"
          }
        },
        {
          "@attributes": {
            "city": "Quilpie,AU",
            "code": "ULP"
          }
        },
        {
          "@attributes": {
            "city": "Quimper,FR",
            "code": "UIP"
          }
        },
        {
          "@attributes": {
            "city": "Quincy,US",
            "code": "GNF"
          }
        },
        {
          "@attributes": {
            "city": "Quincy,US",
            "code": "UIN"
          }
        },
        {
          "@attributes": {
            "city": "Quinhagak,US",
            "code": "KWN"
          }
        },
        {
          "@attributes": {
            "city": "Quirindi,AU",
            "code": "UIR"
          }
        },
        {
          "@attributes": {
            "city": "Quito,EC",
            "code": "UIO"
          }
        },
        {
          "@attributes": {
            "city": "Qurghonteppa,TJ",
            "code": "KQT"
          }
        },
        {
          "@attributes": {
            "city": "REFUGIO,US",
            "code": "RFG"
          }
        },
        {
          "@attributes": {
            "city": "Rabaraba,PG",
            "code": "RBP"
          }
        },
        {
          "@attributes": {
            "city": "Rabat,MA",
            "code": "RBA"
          }
        },
        {
          "@attributes": {
            "city": "Rabaul,PG",
            "code": "RAB"
          }
        },
        {
          "@attributes": {
            "city": "Rabi,FJ",
            "code": "RBI"
          }
        },
        {
          "@attributes": {
            "city": "Rach Gia,VN",
            "code": "VKG"
          }
        },
        {
          "@attributes": {
            "city": "Racine,US",
            "code": "RAC"
          }
        },
        {
          "@attributes": {
            "city": "Rade,NO",
            "code": "ZXX"
          }
        },
        {
          "@attributes": {
            "city": "Radom,PL",
            "code": "QXR"
          }
        },
        {
          "@attributes": {
            "city": "Rae Bareli,IN",
            "code": "BEK"
          }
        },
        {
          "@attributes": {
            "city": "Rafha,SA",
            "code": "RAH"
          }
        },
        {
          "@attributes": {
            "city": "Ragusa,IT",
            "code": "QRG"
          }
        },
        {
          "@attributes": {
            "city": "Raha,ID",
            "code": "RAQ"
          }
        },
        {
          "@attributes": {
            "city": "Rahim Yar  Khan,PK",
            "code": "RYK"
          }
        },
        {
          "@attributes": {
            "city": "Raiatea,PF",
            "code": "RFP"
          }
        },
        {
          "@attributes": {
            "city": "Railway Germany,DE",
            "code": "QYG"
          }
        },
        {
          "@attributes": {
            "city": "Railway Service,DK",
            "code": "XVX"
          }
        },
        {
          "@attributes": {
            "city": "Rainbow Lake,CA",
            "code": "YOP"
          }
        },
        {
          "@attributes": {
            "city": "Raipur,IN",
            "code": "RPR"
          }
        },
        {
          "@attributes": {
            "city": "Rajahmundry,IN",
            "code": "RJA"
          }
        },
        {
          "@attributes": {
            "city": "Rajkot,IN",
            "code": "RAJ"
          }
        },
        {
          "@attributes": {
            "city": "Raleigh,US",
            "code": "RDU"
          }
        },
        {
          "@attributes": {
            "city": "Rambouillet,FR",
            "code": "XRT"
          }
        },
        {
          "@attributes": {
            "city": "Ramingining,AU",
            "code": "RAM"
          }
        },
        {
          "@attributes": {
            "city": "Rampart,US",
            "code": "RMP"
          }
        },
        {
          "@attributes": {
            "city": "Ramsgate,GB",
            "code": "QQR"
          }
        },
        {
          "@attributes": {
            "city": "Ramstein,DE",
            "code": "RMS"
          }
        },
        {
          "@attributes": {
            "city": "Rancagua,CL",
            "code": "QRC"
          }
        },
        {
          "@attributes": {
            "city": "Ranchi,IN",
            "code": "IXR"
          }
        },
        {
          "@attributes": {
            "city": "Randers,DK",
            "code": "ZIR"
          }
        },
        {
          "@attributes": {
            "city": "Rangely,US",
            "code": "RNG"
          }
        },
        {
          "@attributes": {
            "city": "Ranger,US",
            "code": "RGR"
          }
        },
        {
          "@attributes": {
            "city": "Rangiroa Island,PF",
            "code": "RGI"
          }
        },
        {
          "@attributes": {
            "city": "Rankin Inlet,CA",
            "code": "YRT"
          }
        },
        {
          "@attributes": {
            "city": "Ranong,TH",
            "code": "UNN"
          }
        },
        {
          "@attributes": {
            "city": "Ransiki,ID",
            "code": "RSK"
          }
        },
        {
          "@attributes": {
            "city": "Rapid cities,US",
            "code": "RAP"
          }
        },
        {
          "@attributes": {
            "city": "Rapperswil,CH",
            "code": "ZJW"
          }
        },
        {
          "@attributes": {
            "city": "Rarotonga,CK",
            "code": "RAR"
          }
        },
        {
          "@attributes": {
            "city": "Ras Al Khaimah,AE",
            "code": "RKT"
          }
        },
        {
          "@attributes": {
            "city": "Rasht,IR",
            "code": "RAS"
          }
        },
        {
          "@attributes": {
            "city": "Raspberry Strait,US",
            "code": "RSP"
          }
        },
        {
          "@attributes": {
            "city": "Rastatt,DE",
            "code": "ZRW"
          }
        },
        {
          "@attributes": {
            "city": "Ratingen,DE",
            "code": "ZPJ"
          }
        },
        {
          "@attributes": {
            "city": "Ratnagiri,IN",
            "code": "RTC"
          }
        },
        {
          "@attributes": {
            "city": "Raton,US",
            "code": "RTN"
          }
        },
        {
          "@attributes": {
            "city": "Raufarhofn,IS",
            "code": "RFN"
          }
        },
        {
          "@attributes": {
            "city": "Raufoss,NO",
            "code": "ZMQ"
          }
        },
        {
          "@attributes": {
            "city": "Ravenna,IT",
            "code": "RAN"
          }
        },
        {
          "@attributes": {
            "city": "Ravensburg,DE",
            "code": "QRB"
          }
        },
        {
          "@attributes": {
            "city": "Ravensthorpe,AU",
            "code": "RVT"
          }
        },
        {
          "@attributes": {
            "city": "Rawalpindi,PK",
            "code": "RWP"
          }
        },
        {
          "@attributes": {
            "city": "Rawlins,US",
            "code": "RWL"
          }
        },
        {
          "@attributes": {
            "city": "Reading,GB",
            "code": "XRE"
          }
        },
        {
          "@attributes": {
            "city": "Reading,US",
            "code": "RDG"
          }
        },
        {
          "@attributes": {
            "city": "Reao,PF",
            "code": "REA"
          }
        },
        {
          "@attributes": {
            "city": "Rebun,JP",
            "code": "RBJ"
          }
        },
        {
          "@attributes": {
            "city": "Recife,BR",
            "code": "REC"
          }
        },
        {
          "@attributes": {
            "city": "Recklinghausen,DE",
            "code": "ZPL"
          }
        },
        {
          "@attributes": {
            "city": "Reconquista,AR",
            "code": "RCQ"
          }
        },
        {
          "@attributes": {
            "city": "Red Deer,CA",
            "code": "YQF"
          }
        },
        {
          "@attributes": {
            "city": "Red Devil,US",
            "code": "RDV"
          }
        },
        {
          "@attributes": {
            "city": "Red Lake,CA",
            "code": "YRL"
          }
        },
        {
          "@attributes": {
            "city": "Red Sucker Lake,CA",
            "code": "YRS"
          }
        },
        {
          "@attributes": {
            "city": "Redang,MY",
            "code": "RDN"
          }
        },
        {
          "@attributes": {
            "city": "Redding,US",
            "code": "RDD"
          }
        },
        {
          "@attributes": {
            "city": "Redencao,BR",
            "code": "RDC"
          }
        },
        {
          "@attributes": {
            "city": "Redhill,GB",
            "code": "KRH"
          }
        },
        {
          "@attributes": {
            "city": "Redmond,US",
            "code": "RDM"
          }
        },
        {
          "@attributes": {
            "city": "Redon,FR",
            "code": "XRN"
          }
        },
        {
          "@attributes": {
            "city": "Regensburg,DE",
            "code": "ZPM"
          }
        },
        {
          "@attributes": {
            "city": "Reggio Calabria,IT",
            "code": "REG"
          }
        },
        {
          "@attributes": {
            "city": "Reggio Nell Emilia,IT",
            "code": "XRL"
          }
        },
        {
          "@attributes": {
            "city": "Reggio Nellemilia,IT",
            "code": "ZRO"
          }
        },
        {
          "@attributes": {
            "city": "Regina,CA",
            "code": "YQR"
          }
        },
        {
          "@attributes": {
            "city": "Rehoboth Beach,US",
            "code": "REH"
          }
        },
        {
          "@attributes": {
            "city": "Reims,FR",
            "code": "RHE"
          }
        },
        {
          "@attributes": {
            "city": "Reims Champagne Ardenne,FR",
            "code": "XIZ"
          }
        },
        {
          "@attributes": {
            "city": "Remscheid,DE",
            "code": "ZPN"
          }
        },
        {
          "@attributes": {
            "city": "Rena,NO",
            "code": "XKE"
          }
        },
        {
          "@attributes": {
            "city": "Rengat,ID",
            "code": "RGT"
          }
        },
        {
          "@attributes": {
            "city": "Renmark,AU",
            "code": "RMK"
          }
        },
        {
          "@attributes": {
            "city": "Rennell,SB",
            "code": "RNL"
          }
        },
        {
          "@attributes": {
            "city": "Rennes,FR",
            "code": "RNS"
          }
        },
        {
          "@attributes": {
            "city": "Reno,US",
            "code": "RNO"
          }
        },
        {
          "@attributes": {
            "city": "Rensselaer,US",
            "code": "RNZ"
          }
        },
        {
          "@attributes": {
            "city": "Renton,US",
            "code": "RNT"
          }
        },
        {
          "@attributes": {
            "city": "Resende,BR",
            "code": "REZ"
          }
        },
        {
          "@attributes": {
            "city": "Resistencia,AR",
            "code": "RES"
          }
        },
        {
          "@attributes": {
            "city": "Resolute,CA",
            "code": "YRB"
          }
        },
        {
          "@attributes": {
            "city": "Retalhuleu,GT",
            "code": "RER"
          }
        },
        {
          "@attributes": {
            "city": "Rethymnon,GR",
            "code": "ZRE"
          }
        },
        {
          "@attributes": {
            "city": "Reunion Island,RE",
            "code": "RUN"
          }
        },
        {
          "@attributes": {
            "city": "Reus,ES",
            "code": "REU"
          }
        },
        {
          "@attributes": {
            "city": "Reutlingen,DE",
            "code": "ZPP"
          }
        },
        {
          "@attributes": {
            "city": "Revelstoke,CA",
            "code": "YRV"
          }
        },
        {
          "@attributes": {
            "city": "Rexburg,US",
            "code": "RXE"
          }
        },
        {
          "@attributes": {
            "city": "Reykholar,IS",
            "code": "RHA"
          }
        },
        {
          "@attributes": {
            "city": "Reykjavik,IS",
            "code": "REK"
          }
        },
        {
          "@attributes": {
            "city": "Reynosa,MX",
            "code": "REX"
          }
        },
        {
          "@attributes": {
            "city": "Rheine,DE",
            "code": "ZPQ"
          }
        },
        {
          "@attributes": {
            "city": "Rhinelander,US",
            "code": "RHI"
          }
        },
        {
          "@attributes": {
            "city": "Rhodes,GR",
            "code": "RHO"
          }
        },
        {
          "@attributes": {
            "city": "Ribeirao Preto,BR",
            "code": "RAO"
          }
        },
        {
          "@attributes": {
            "city": "Riberalta,BO",
            "code": "RIB"
          }
        },
        {
          "@attributes": {
            "city": "Richard Toll,SN",
            "code": "RDT"
          }
        },
        {
          "@attributes": {
            "city": "Richards Bay,ZA",
            "code": "RCB"
          }
        },
        {
          "@attributes": {
            "city": "Richfield,US",
            "code": "RIF"
          }
        },
        {
          "@attributes": {
            "city": "Richland,US",
            "code": "RLD"
          }
        },
        {
          "@attributes": {
            "city": "Richmond,AU",
            "code": "RCM"
          }
        },
        {
          "@attributes": {
            "city": "Richmond,US",
            "code": "RIC"
          }
        },
        {
          "@attributes": {
            "city": "Richmond,US",
            "code": "RID"
          }
        },
        {
          "@attributes": {
            "city": "Riesa,DE",
            "code": "IES"
          }
        },
        {
          "@attributes": {
            "city": "Riesa DE,DE",
            "code": "ZRX"
          }
        },
        {
          "@attributes": {
            "city": "Rieti,IT",
            "code": "QRT"
          }
        },
        {
          "@attributes": {
            "city": "Rifle,US",
            "code": "RIL"
          }
        },
        {
          "@attributes": {
            "city": "Riga,LV",
            "code": "RIX"
          }
        },
        {
          "@attributes": {
            "city": "Rigolet,CA",
            "code": "YRG"
          }
        },
        {
          "@attributes": {
            "city": "Rijeka,HR",
            "code": "RJK"
          }
        },
        {
          "@attributes": {
            "city": "Rikaze,CN",
            "code": "RKZ"
          }
        },
        {
          "@attributes": {
            "city": "Rimatara,PF",
            "code": "RMT"
          }
        },
        {
          "@attributes": {
            "city": "Rimini,IT",
            "code": "RMI"
          }
        },
        {
          "@attributes": {
            "city": "Rimouski,CA",
            "code": "YXK"
          }
        },
        {
          "@attributes": {
            "city": "Ringebu,NO",
            "code": "XUQ"
          }
        },
        {
          "@attributes": {
            "city": "Ringwood,GB",
            "code": "RNW"
          }
        },
        {
          "@attributes": {
            "city": "Rio Branco,BR",
            "code": "RBR"
          }
        },
        {
          "@attributes": {
            "city": "Rio Claro,BR",
            "code": "QIQ"
          }
        },
        {
          "@attributes": {
            "city": "Rio Cuarto,AR",
            "code": "RCU"
          }
        },
        {
          "@attributes": {
            "city": "Rio De Janeiro,BR",
            "code": "RIO"
          }
        },
        {
          "@attributes": {
            "city": "Rio Dulce,GT",
            "code": "LCF"
          }
        },
        {
          "@attributes": {
            "city": "Rio Gallegos,AR",
            "code": "RGL"
          }
        },
        {
          "@attributes": {
            "city": "Rio Grande,AR",
            "code": "RGA"
          }
        },
        {
          "@attributes": {
            "city": "Rio Grande,BR",
            "code": "RIG"
          }
        },
        {
          "@attributes": {
            "city": "Rio Hato,PA",
            "code": "RIH"
          }
        },
        {
          "@attributes": {
            "city": "Rio Mayo,AR",
            "code": "ROY"
          }
        },
        {
          "@attributes": {
            "city": "Rio Turbio,AR",
            "code": "RYO"
          }
        },
        {
          "@attributes": {
            "city": "Rio Verde,BR",
            "code": "RVD"
          }
        },
        {
          "@attributes": {
            "city": "Riohacha,CO",
            "code": "RCH"
          }
        },
        {
          "@attributes": {
            "city": "Rioja,PE",
            "code": "RIJ"
          }
        },
        {
          "@attributes": {
            "city": "Rishiri,JP",
            "code": "RIS"
          }
        },
        {
          "@attributes": {
            "city": "Rivera,UY",
            "code": "RVY"
          }
        },
        {
          "@attributes": {
            "city": "Rivers,CA",
            "code": "YYI"
          }
        },
        {
          "@attributes": {
            "city": "Riverside,US",
            "code": "RAL"
          }
        },
        {
          "@attributes": {
            "city": "Riverton,US",
            "code": "RIW"
          }
        },
        {
          "@attributes": {
            "city": "Riviere A Pierre,CA",
            "code": "XRP"
          }
        },
        {
          "@attributes": {
            "city": "Riviere Du Loup,CA",
            "code": "YRI"
          }
        },
        {
          "@attributes": {
            "city": "Riyadh,SA",
            "code": "RUH"
          }
        },
        {
          "@attributes": {
            "city": "Riyan,YE",
            "code": "RIY"
          }
        },
        {
          "@attributes": {
            "city": "Rize,TR",
            "code": "QRI"
          }
        },
        {
          "@attributes": {
            "city": "Roanne,FR",
            "code": "RNE"
          }
        },
        {
          "@attributes": {
            "city": "Roanoke,US",
            "code": "ROA"
          }
        },
        {
          "@attributes": {
            "city": "Roanoke Rapids,US",
            "code": "RZZ"
          }
        },
        {
          "@attributes": {
            "city": "Roatan,HN",
            "code": "RTB"
          }
        },
        {
          "@attributes": {
            "city": "Roberval,CA",
            "code": "YRJ"
          }
        },
        {
          "@attributes": {
            "city": "Robinhood,AU",
            "code": "ROH"
          }
        },
        {
          "@attributes": {
            "city": "Robinson River,PG",
            "code": "RNR"
          }
        },
        {
          "@attributes": {
            "city": "Roche Harbor,US",
            "code": "RCE"
          }
        },
        {
          "@attributes": {
            "city": "Rochefort,FR",
            "code": "RCO"
          }
        },
        {
          "@attributes": {
            "city": "Rochester,US",
            "code": "RCR"
          }
        },
        {
          "@attributes": {
            "city": "Rochester,GB",
            "code": "RCS"
          }
        },
        {
          "@attributes": {
            "city": "Rochester,US",
            "code": "ROC"
          }
        },
        {
          "@attributes": {
            "city": "Rochester,US",
            "code": "RST"
          }
        },
        {
          "@attributes": {
            "city": "Rock Hill,US",
            "code": "RKH"
          }
        },
        {
          "@attributes": {
            "city": "Rock Sound,BS",
            "code": "RSD"
          }
        },
        {
          "@attributes": {
            "city": "Rock Springs,US",
            "code": "RKS"
          }
        },
        {
          "@attributes": {
            "city": "Rockford,US",
            "code": "RFD"
          }
        },
        {
          "@attributes": {
            "city": "Rockhampton,AU",
            "code": "ROK"
          }
        },
        {
          "@attributes": {
            "city": "Rockland,US",
            "code": "RKD"
          }
        },
        {
          "@attributes": {
            "city": "Rockport,US",
            "code": "RKP"
          }
        },
        {
          "@attributes": {
            "city": "Rockwood,US",
            "code": "RKW"
          }
        },
        {
          "@attributes": {
            "city": "Rocky Mount,US",
            "code": "RWI"
          }
        },
        {
          "@attributes": {
            "city": "Rocky Mountain House,CA",
            "code": "YRM"
          }
        },
        {
          "@attributes": {
            "city": "Rodez,FR",
            "code": "RDZ"
          }
        },
        {
          "@attributes": {
            "city": "Rodrigues Island,MU",
            "code": "RRG"
          }
        },
        {
          "@attributes": {
            "city": "Roervik,NO",
            "code": "RVK"
          }
        },
        {
          "@attributes": {
            "city": "Rogers,US",
            "code": "ROG"
          }
        },
        {
          "@attributes": {
            "city": "Rognan,NO",
            "code": "ZXM"
          }
        },
        {
          "@attributes": {
            "city": "Roi Et,TH",
            "code": "ROI"
          }
        },
        {
          "@attributes": {
            "city": "Rolla,US",
            "code": "RLA"
          }
        },
        {
          "@attributes": {
            "city": "Roma,AU",
            "code": "RMA"
          }
        },
        {
          "@attributes": {
            "city": "Rome,US",
            "code": "RMG"
          }
        },
        {
          "@attributes": {
            "city": "Rome,IT",
            "code": "ROM"
          }
        },
        {
          "@attributes": {
            "city": "Ronda,ES",
            "code": "RRA"
          }
        },
        {
          "@attributes": {
            "city": "Rondon,CO",
            "code": "RON"
          }
        },
        {
          "@attributes": {
            "city": "Rondonopolis,BR",
            "code": "ROO"
          }
        },
        {
          "@attributes": {
            "city": "Ronneby,SE",
            "code": "RNB"
          }
        },
        {
          "@attributes": {
            "city": "Roosendaal,NL",
            "code": "ZYO"
          }
        },
        {
          "@attributes": {
            "city": "Roosevelt,US",
            "code": "ROL"
          }
        },
        {
          "@attributes": {
            "city": "Roros,NO",
            "code": "RRS"
          }
        },
        {
          "@attributes": {
            "city": "Rorschach,CH",
            "code": "ZJZ"
          }
        },
        {
          "@attributes": {
            "city": "Rosario,AR",
            "code": "ROS"
          }
        },
        {
          "@attributes": {
            "city": "Roseau,DM",
            "code": "DCF"
          }
        },
        {
          "@attributes": {
            "city": "Roseberth,AU",
            "code": "RSB"
          }
        },
        {
          "@attributes": {
            "city": "Roseburg,US",
            "code": "RBG"
          }
        },
        {
          "@attributes": {
            "city": "Rosenheim,DE",
            "code": "ZPR"
          }
        },
        {
          "@attributes": {
            "city": "Rosh Pina,NA",
            "code": "RHN"
          }
        },
        {
          "@attributes": {
            "city": "Rosh Pina,IL",
            "code": "RPN"
          }
        },
        {
          "@attributes": {
            "city": "Roskilde,DK",
            "code": "RKE"
          }
        },
        {
          "@attributes": {
            "city": "Rost,NO",
            "code": "RET"
          }
        },
        {
          "@attributes": {
            "city": "Rostock Laage,DE",
            "code": "RLG"
          }
        },
        {
          "@attributes": {
            "city": "Rostov,RU",
            "code": "ROV"
          }
        },
        {
          "@attributes": {
            "city": "Roswell,US",
            "code": "ROW"
          }
        },
        {
          "@attributes": {
            "city": "Rota,ES",
            "code": "ROZ"
          }
        },
        {
          "@attributes": {
            "city": "Rota,MP",
            "code": "ROP"
          }
        },
        {
          "@attributes": {
            "city": "Rothenburg,DE",
            "code": "QTK"
          }
        },
        {
          "@attributes": {
            "city": "Rothesay,GB",
            "code": "RAY"
          }
        },
        {
          "@attributes": {
            "city": "Roti,ID",
            "code": "RTI"
          }
        },
        {
          "@attributes": {
            "city": "Rotorua,NZ",
            "code": "ROT"
          }
        },
        {
          "@attributes": {
            "city": "Rotterdam,NL",
            "code": "RTM"
          }
        },
        {
          "@attributes": {
            "city": "Rottnest,AU",
            "code": "RTS"
          }
        },
        {
          "@attributes": {
            "city": "Rotuma Island,FJ",
            "code": "RTA"
          }
        },
        {
          "@attributes": {
            "city": "Rouen,FR",
            "code": "URO"
          }
        },
        {
          "@attributes": {
            "city": "Rourkela,IN",
            "code": "RRK"
          }
        },
        {
          "@attributes": {
            "city": "Rouyn Noranda,CA",
            "code": "YUY"
          }
        },
        {
          "@attributes": {
            "city": "Rovaniemi,FI",
            "code": "RVN"
          }
        },
        {
          "@attributes": {
            "city": "Rovno,UA",
            "code": "RWN"
          }
        },
        {
          "@attributes": {
            "city": "Rowan Bay,US",
            "code": "RWB"
          }
        },
        {
          "@attributes": {
            "city": "Roxas cities,PH",
            "code": "RXS"
          }
        },
        {
          "@attributes": {
            "city": "Royan,FR",
            "code": "RYN"
          }
        },
        {
          "@attributes": {
            "city": "Ruby,US",
            "code": "RBY"
          }
        },
        {
          "@attributes": {
            "city": "Ruesselsheim,DE",
            "code": "ZPS"
          }
        },
        {
          "@attributes": {
            "city": "Rugby,GB",
            "code": "XRU"
          }
        },
        {
          "@attributes": {
            "city": "Rugeley,GB",
            "code": "XRG"
          }
        },
        {
          "@attributes": {
            "city": "Ruidoso,US",
            "code": "RUI"
          }
        },
        {
          "@attributes": {
            "city": "Rum Cay,BS",
            "code": "RCY"
          }
        },
        {
          "@attributes": {
            "city": "Runcorn,GB",
            "code": "XRC"
          }
        },
        {
          "@attributes": {
            "city": "Rundu,NA",
            "code": "NDU"
          }
        },
        {
          "@attributes": {
            "city": "Rupsi,IN",
            "code": "RUP"
          }
        },
        {
          "@attributes": {
            "city": "Rurrenabaque,BO",
            "code": "RBQ"
          }
        },
        {
          "@attributes": {
            "city": "Rurutu,PF",
            "code": "RUR"
          }
        },
        {
          "@attributes": {
            "city": "Ruse,BG",
            "code": "ROU"
          }
        },
        {
          "@attributes": {
            "city": "Russell,US",
            "code": "RSL"
          }
        },
        {
          "@attributes": {
            "city": "Russian Mission,US",
            "code": "RSH"
          }
        },
        {
          "@attributes": {
            "city": "Ruston,US",
            "code": "RSN"
          }
        },
        {
          "@attributes": {
            "city": "Ruteng,ID",
            "code": "RTG"
          }
        },
        {
          "@attributes": {
            "city": "Rutland,US",
            "code": "RUT"
          }
        },
        {
          "@attributes": {
            "city": "Rutland Plains,AU",
            "code": "RTP"
          }
        },
        {
          "@attributes": {
            "city": "Rybinsk,RU",
            "code": "RYB"
          }
        },
        {
          "@attributes": {
            "city": "Rygge,NO",
            "code": "ZXU"
          }
        },
        {
          "@attributes": {
            "city": "Rzeszow,PL",
            "code": "RZE"
          }
        },
        {
          "@attributes": {
            "city": "SAAS FEE,CH",
            "code": "ZKI"
          }
        },
        {
          "@attributes": {
            "city": "SELMA,US",
            "code": "SES"
          }
        },
        {
          "@attributes": {
            "city": "SHOREHAM BY SEA,GB",
            "code": "ESH"
          }
        },
        {
          "@attributes": {
            "city": "SINOP,TR",
            "code": "NOP"
          }
        },
        {
          "@attributes": {
            "city": "SOLOTHURN,CH",
            "code": "ZKS"
          }
        },
        {
          "@attributes": {
            "city": "ST Johns,US",
            "code": "SJN"
          }
        },
        {
          "@attributes": {
            "city": "SWEETWATER,US",
            "code": "SWW"
          }
        },
        {
          "@attributes": {
            "city": "Sa Dah,YE",
            "code": "SYE"
          }
        },
        {
          "@attributes": {
            "city": "Saarbruecken,DE",
            "code": "SCN"
          }
        },
        {
          "@attributes": {
            "city": "Saarmelleek,HU",
            "code": "SOB"
          }
        },
        {
          "@attributes": {
            "city": "Saba Island,BQ",
            "code": "SAB"
          }
        },
        {
          "@attributes": {
            "city": "Sabadell,ES",
            "code": "QSA"
          }
        },
        {
          "@attributes": {
            "city": "Sabah,PG",
            "code": "SBV"
          }
        },
        {
          "@attributes": {
            "city": "Sabah,MY",
            "code": "GSA"
          }
        },
        {
          "@attributes": {
            "city": "Sabai Island,AU",
            "code": "SBR"
          }
        },
        {
          "@attributes": {
            "city": "Sachigo Lake Indian Reserve,CA",
            "code": "ZPB"
          }
        },
        {
          "@attributes": {
            "city": "Sackville,CA",
            "code": "XKV"
          }
        },
        {
          "@attributes": {
            "city": "Sacramento,US",
            "code": "SAC"
          }
        },
        {
          "@attributes": {
            "city": "Sacramento Cal,US",
            "code": "SMF"
          }
        },
        {
          "@attributes": {
            "city": "Safford,US",
            "code": "SAD"
          }
        },
        {
          "@attributes": {
            "city": "Safia,PG",
            "code": "SFU"
          }
        },
        {
          "@attributes": {
            "city": "Saga,JP",
            "code": "HSG"
          }
        },
        {
          "@attributes": {
            "city": "Sagarai,PG",
            "code": "SGJ"
          }
        },
        {
          "@attributes": {
            "city": "Saginaw,US",
            "code": "MBS"
          }
        },
        {
          "@attributes": {
            "city": "Sagwon,US",
            "code": "SAG"
          }
        },
        {
          "@attributes": {
            "city": "Saidor,PG",
            "code": "SDI"
          }
        },
        {
          "@attributes": {
            "city": "Saidpur,BD",
            "code": "SPD"
          }
        },
        {
          "@attributes": {
            "city": "Saidu Sharif,PK",
            "code": "SDT"
          }
        },
        {
          "@attributes": {
            "city": "Saint Cloud,US",
            "code": "STC"
          }
        },
        {
          "@attributes": {
            "city": "Saint Hyacinthe,CA",
            "code": "XIM"
          }
        },
        {
          "@attributes": {
            "city": "Saint Laurent du Maroni,GF",
            "code": "LDX"
          }
        },
        {
          "@attributes": {
            "city": "Saint Louis,FR",
            "code": "XLI"
          }
        },
        {
          "@attributes": {
            "city": "Saint Marie,MG",
            "code": "SMS"
          }
        },
        {
          "@attributes": {
            "city": "Saintes,FR",
            "code": "XST"
          }
        },
        {
          "@attributes": {
            "city": "Saipan,MP",
            "code": "SPN"
          }
        },
        {
          "@attributes": {
            "city": "Sakaiminato,JP",
            "code": "QKV"
          }
        },
        {
          "@attributes": {
            "city": "Sakkyryr,RU",
            "code": "SUK"
          }
        },
        {
          "@attributes": {
            "city": "Sakon Nakhon,TH",
            "code": "SNO"
          }
        },
        {
          "@attributes": {
            "city": "Sal Island,CV",
            "code": "SID"
          }
        },
        {
          "@attributes": {
            "city": "Sala,SE",
            "code": "XYX"
          }
        },
        {
          "@attributes": {
            "city": "Salalah,OM",
            "code": "SLL"
          }
        },
        {
          "@attributes": {
            "city": "Salamanca,ES",
            "code": "SLM"
          }
        },
        {
          "@attributes": {
            "city": "Salamo,PG",
            "code": "SAM"
          }
        },
        {
          "@attributes": {
            "city": "Saldanha Bay,ZA",
            "code": "SDB"
          }
        },
        {
          "@attributes": {
            "city": "Sale,AU",
            "code": "SXE"
          }
        },
        {
          "@attributes": {
            "city": "Salekhard,RU",
            "code": "SLY"
          }
        },
        {
          "@attributes": {
            "city": "Salem,IN",
            "code": "SXV"
          }
        },
        {
          "@attributes": {
            "city": "Salem,US",
            "code": "SLE"
          }
        },
        {
          "@attributes": {
            "city": "Salerno,IT",
            "code": "QSR"
          }
        },
        {
          "@attributes": {
            "city": "Salida,US",
            "code": "SLT"
          }
        },
        {
          "@attributes": {
            "city": "Salima,MW",
            "code": "LMB"
          }
        },
        {
          "@attributes": {
            "city": "Salina,IT",
            "code": "ZIQ"
          }
        },
        {
          "@attributes": {
            "city": "Salina,US",
            "code": "SLN"
          }
        },
        {
          "@attributes": {
            "city": "Salina Cruz,MX",
            "code": "SCX"
          }
        },
        {
          "@attributes": {
            "city": "Salinas,EC",
            "code": "SNC"
          }
        },
        {
          "@attributes": {
            "city": "Salinas,US",
            "code": "SNS"
          }
        },
        {
          "@attributes": {
            "city": "Salisbury,US",
            "code": "SRW"
          }
        },
        {
          "@attributes": {
            "city": "Salisbury,GB",
            "code": "XSR"
          }
        },
        {
          "@attributes": {
            "city": "Salisbury Ocean cities,US",
            "code": "SBY"
          }
        },
        {
          "@attributes": {
            "city": "Sallanches,FR",
            "code": "XSN"
          }
        },
        {
          "@attributes": {
            "city": "Salluit,CA",
            "code": "YZG"
          }
        },
        {
          "@attributes": {
            "city": "Salmon Arm,CA",
            "code": "YSN"
          }
        },
        {
          "@attributes": {
            "city": "Salo,FI",
            "code": "QVD"
          }
        },
        {
          "@attributes": {
            "city": "Salt Cay,TC",
            "code": "SLX"
          }
        },
        {
          "@attributes": {
            "city": "Salt Lake cities,US",
            "code": "SLC"
          }
        },
        {
          "@attributes": {
            "city": "Salta,AR",
            "code": "SLA"
          }
        },
        {
          "@attributes": {
            "city": "Saltillo,MX",
            "code": "SLW"
          }
        },
        {
          "@attributes": {
            "city": "Salto,UY",
            "code": "STY"
          }
        },
        {
          "@attributes": {
            "city": "Salton cities,US",
            "code": "SAS"
          }
        },
        {
          "@attributes": {
            "city": "Salvador,BR",
            "code": "SSA"
          }
        },
        {
          "@attributes": {
            "city": "Salzburg,AT",
            "code": "SZG"
          }
        },
        {
          "@attributes": {
            "city": "Salzgitter,DE",
            "code": "ZPU"
          }
        },
        {
          "@attributes": {
            "city": "Salzwedel,DE",
            "code": "ZSQ"
          }
        },
        {
          "@attributes": {
            "city": "Samana,DO",
            "code": "AZS"
          }
        },
        {
          "@attributes": {
            "city": "Samara,RU",
            "code": "KUF"
          }
        },
        {
          "@attributes": {
            "city": "Samarinda,ID",
            "code": "SRI"
          }
        },
        {
          "@attributes": {
            "city": "Samarkand,UZ",
            "code": "SKD"
          }
        },
        {
          "@attributes": {
            "city": "Sambava,MG",
            "code": "SVB"
          }
        },
        {
          "@attributes": {
            "city": "Samburu,KE",
            "code": "UAS"
          }
        },
        {
          "@attributes": {
            "city": "Samos,GR",
            "code": "SMI"
          }
        },
        {
          "@attributes": {
            "city": "Samsun,TR",
            "code": "SZF"
          }
        },
        {
          "@attributes": {
            "city": "San Andres,CO",
            "code": "ADZ"
          }
        },
        {
          "@attributes": {
            "city": "San Andros,BS",
            "code": "SAQ"
          }
        },
        {
          "@attributes": {
            "city": "San Angelo,US",
            "code": "SJT"
          }
        },
        {
          "@attributes": {
            "city": "San Antonio,VE",
            "code": "SVZ"
          }
        },
        {
          "@attributes": {
            "city": "San Antonio,US",
            "code": "SAT"
          }
        },
        {
          "@attributes": {
            "city": "San Antonio Oeste,AR",
            "code": "OES"
          }
        },
        {
          "@attributes": {
            "city": "San Bernardino,US",
            "code": "SBT"
          }
        },
        {
          "@attributes": {
            "city": "San Blas,PA",
            "code": "NBL"
          }
        },
        {
          "@attributes": {
            "city": "San Borja,BO",
            "code": "SRJ"
          }
        },
        {
          "@attributes": {
            "city": "San Carlos,US",
            "code": "SQL"
          }
        },
        {
          "@attributes": {
            "city": "San Carlos Bariloche,AR",
            "code": "BRC"
          }
        },
        {
          "@attributes": {
            "city": "San Cristobal,EC",
            "code": "SCY"
          }
        },
        {
          "@attributes": {
            "city": "San Cristobal De Las Casas,MX",
            "code": "SZT"
          }
        },
        {
          "@attributes": {
            "city": "San Crystobal,VE",
            "code": "SCI"
          }
        },
        {
          "@attributes": {
            "city": "San Diego,US",
            "code": "SAN"
          }
        },
        {
          "@attributes": {
            "city": "San Domino Island,IT",
            "code": "TQR"
          }
        },
        {
          "@attributes": {
            "city": "San Felipe,VE",
            "code": "SNF"
          }
        },
        {
          "@attributes": {
            "city": "San Felipe,MX",
            "code": "SFH"
          }
        },
        {
          "@attributes": {
            "city": "San Felix,VE",
            "code": "SFX"
          }
        },
        {
          "@attributes": {
            "city": "San Fernando,ES",
            "code": "FES"
          }
        },
        {
          "@attributes": {
            "city": "San Fernando,US",
            "code": "SFR"
          }
        },
        {
          "@attributes": {
            "city": "San Fernando,PH",
            "code": "SFE"
          }
        },
        {
          "@attributes": {
            "city": "San Fernando De Apure,VE",
            "code": "SFD"
          }
        },
        {
          "@attributes": {
            "city": "San Francisco,US",
            "code": "SFO"
          }
        },
        {
          "@attributes": {
            "city": "San Giovanni Rotondo,IT",
            "code": "GBN"
          }
        },
        {
          "@attributes": {
            "city": "San Ignacio,BZ",
            "code": "CYD"
          }
        },
        {
          "@attributes": {
            "city": "San Ignacio Velasco,BO",
            "code": "SNG"
          }
        },
        {
          "@attributes": {
            "city": "San Joaquin,BO",
            "code": "SJB"
          }
        },
        {
          "@attributes": {
            "city": "San Jose,US",
            "code": "SJC"
          }
        },
        {
          "@attributes": {
            "city": "San Jose,PH",
            "code": "SJI"
          }
        },
        {
          "@attributes": {
            "city": "San Jose,CR",
            "code": "SJO"
          }
        },
        {
          "@attributes": {
            "city": "San Jose Cabo,MX",
            "code": "SJD"
          }
        },
        {
          "@attributes": {
            "city": "San Jose Guaviare,CO",
            "code": "SJE"
          }
        },
        {
          "@attributes": {
            "city": "San Juan,AR",
            "code": "UAQ"
          }
        },
        {
          "@attributes": {
            "city": "San Juan,US",
            "code": "SJU"
          }
        },
        {
          "@attributes": {
            "city": "San Julian,AR",
            "code": "ULA"
          }
        },
        {
          "@attributes": {
            "city": "San Luis,AR",
            "code": "LUQ"
          }
        },
        {
          "@attributes": {
            "city": "San Luis Obispo,US",
            "code": "CSL"
          }
        },
        {
          "@attributes": {
            "city": "San Luis Potosi,MX",
            "code": "SLP"
          }
        },
        {
          "@attributes": {
            "city": "San Luis Rio Colorado,MX",
            "code": "UAC"
          }
        },
        {
          "@attributes": {
            "city": "San Marino,SM",
            "code": "SAI"
          }
        },
        {
          "@attributes": {
            "city": "San Matias,BO",
            "code": "MQK"
          }
        },
        {
          "@attributes": {
            "city": "San Miguel,US",
            "code": "SYL"
          }
        },
        {
          "@attributes": {
            "city": "San Miguel,PA",
            "code": "NMG"
          }
        },
        {
          "@attributes": {
            "city": "San Miguel Doaraguaia,BR",
            "code": "SQM"
          }
        },
        {
          "@attributes": {
            "city": "San Pablo,ES",
            "code": "SPO"
          }
        },
        {
          "@attributes": {
            "city": "San Pedro,CI",
            "code": "SPY"
          }
        },
        {
          "@attributes": {
            "city": "San Pedro,US",
            "code": "SPQ"
          }
        },
        {
          "@attributes": {
            "city": "San Pedro,BZ",
            "code": "SPR"
          }
        },
        {
          "@attributes": {
            "city": "San Pedro Sula,HN",
            "code": "SAP"
          }
        },
        {
          "@attributes": {
            "city": "San Pedro de Alcantara,ES",
            "code": "ZRC"
          }
        },
        {
          "@attributes": {
            "city": "San Quintin,MX",
            "code": "SNQ"
          }
        },
        {
          "@attributes": {
            "city": "San Rafael,AR",
            "code": "AFA"
          }
        },
        {
          "@attributes": {
            "city": "San Rafael,US",
            "code": "SRF"
          }
        },
        {
          "@attributes": {
            "city": "San Salvador,BS",
            "code": "ZSA"
          }
        },
        {
          "@attributes": {
            "city": "San Salvador,SV",
            "code": "SAL"
          }
        },
        {
          "@attributes": {
            "city": "San Sebastian,ES",
            "code": "EAS"
          }
        },
        {
          "@attributes": {
            "city": "San Sebastian De La Gomera,ES",
            "code": "GMZ"
          }
        },
        {
          "@attributes": {
            "city": "San Tome,VE",
            "code": "SOM"
          }
        },
        {
          "@attributes": {
            "city": "San Vincent,CO",
            "code": "SVI"
          }
        },
        {
          "@attributes": {
            "city": "Sanaa,YE",
            "code": "SAH"
          }
        },
        {
          "@attributes": {
            "city": "Sanana,ID",
            "code": "SQN"
          }
        },
        {
          "@attributes": {
            "city": "Sancti Spiritus,CU",
            "code": "USS"
          }
        },
        {
          "@attributes": {
            "city": "Sand Point,US",
            "code": "SDP"
          }
        },
        {
          "@attributes": {
            "city": "Sandakan,MY",
            "code": "SDK"
          }
        },
        {
          "@attributes": {
            "city": "Sandane,NO",
            "code": "SDN"
          }
        },
        {
          "@attributes": {
            "city": "Sanday,GB",
            "code": "NDY"
          }
        },
        {
          "@attributes": {
            "city": "Sandefjord,NO",
            "code": "ZYS"
          }
        },
        {
          "@attributes": {
            "city": "Sandnes,NO",
            "code": "XKC"
          }
        },
        {
          "@attributes": {
            "city": "Sandnessjoen,NO",
            "code": "SSJ"
          }
        },
        {
          "@attributes": {
            "city": "Sandoway,MM",
            "code": "SNW"
          }
        },
        {
          "@attributes": {
            "city": "Sandspit,CA",
            "code": "YZP"
          }
        },
        {
          "@attributes": {
            "city": "Sandusky,US",
            "code": "SKY"
          }
        },
        {
          "@attributes": {
            "city": "Sandvika,NO",
            "code": "ZYW"
          }
        },
        {
          "@attributes": {
            "city": "Sandy Lake,CA",
            "code": "ZSJ"
          }
        },
        {
          "@attributes": {
            "city": "Sanford,US",
            "code": "SFB"
          }
        },
        {
          "@attributes": {
            "city": "Sanford,US",
            "code": "SFM"
          }
        },
        {
          "@attributes": {
            "city": "Sanikiluaq,CA",
            "code": "YSK"
          }
        },
        {
          "@attributes": {
            "city": "Sanli Urfa,TR",
            "code": "SFQ"
          }
        },
        {
          "@attributes": {
            "city": "Sanliurfa,TR",
            "code": "GNY"
          }
        },
        {
          "@attributes": {
            "city": "Santa Ana,US",
            "code": "SNA"
          }
        },
        {
          "@attributes": {
            "city": "Santa Ana,BO",
            "code": "SBL"
          }
        },
        {
          "@attributes": {
            "city": "Santa Ana,SB",
            "code": "NNB"
          }
        },
        {
          "@attributes": {
            "city": "Santa Barbara,VE",
            "code": "STB"
          }
        },
        {
          "@attributes": {
            "city": "Santa Barbara,US",
            "code": "SBA"
          }
        },
        {
          "@attributes": {
            "city": "Santa Catalina,CO",
            "code": "SCA"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cecilia,EC",
            "code": "WSE"
          }
        },
        {
          "@attributes": {
            "city": "Santa Clara,US",
            "code": "ZSM"
          }
        },
        {
          "@attributes": {
            "city": "Santa Clara,CU",
            "code": "SNU"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz,ES",
            "code": "SPC"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz,US",
            "code": "SRU"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz,BO",
            "code": "SRZ"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz,CR",
            "code": "SZC"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz,AR",
            "code": "RZA"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz Do Sul,BR",
            "code": "CSU"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz Flores,PT",
            "code": "FLW"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz Huatulco,MX",
            "code": "HUX"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz Island,SB",
            "code": "SCZ"
          }
        },
        {
          "@attributes": {
            "city": "Santa Cruz Rio Pardo,BR",
            "code": "QNR"
          }
        },
        {
          "@attributes": {
            "city": "Santa Elena,VE",
            "code": "SNV"
          }
        },
        {
          "@attributes": {
            "city": "Santa Fe,US",
            "code": "SAF"
          }
        },
        {
          "@attributes": {
            "city": "Santa Fe,AR",
            "code": "SFN"
          }
        },
        {
          "@attributes": {
            "city": "Santa Isabel Rio Negro,BR",
            "code": "IRZ"
          }
        },
        {
          "@attributes": {
            "city": "Santa Katarina,EG",
            "code": "SKV"
          }
        },
        {
          "@attributes": {
            "city": "Santa Maria,PT",
            "code": "SMA"
          }
        },
        {
          "@attributes": {
            "city": "Santa Maria,US",
            "code": "SMX"
          }
        },
        {
          "@attributes": {
            "city": "Santa Maria,BR",
            "code": "RIA"
          }
        },
        {
          "@attributes": {
            "city": "Santa Marta,CO",
            "code": "SMR"
          }
        },
        {
          "@attributes": {
            "city": "Santa Monica,US",
            "code": "SMO"
          }
        },
        {
          "@attributes": {
            "city": "Santa Paula,US",
            "code": "SZP"
          }
        },
        {
          "@attributes": {
            "city": "Santa Rosa,EC",
            "code": "ETR"
          }
        },
        {
          "@attributes": {
            "city": "Santa Rosa,US",
            "code": "STS"
          }
        },
        {
          "@attributes": {
            "city": "Santa Rosa,AR",
            "code": "RSA"
          }
        },
        {
          "@attributes": {
            "city": "Santa Rosa De Copan,HN",
            "code": "SDH"
          }
        },
        {
          "@attributes": {
            "city": "Santa Rosalia,MX",
            "code": "SRL"
          }
        },
        {
          "@attributes": {
            "city": "Santa Terezinha,BR",
            "code": "STZ"
          }
        },
        {
          "@attributes": {
            "city": "Santa Ynez,US",
            "code": "SQA"
          }
        },
        {
          "@attributes": {
            "city": "Santander,ES",
            "code": "SDR"
          }
        },
        {
          "@attributes": {
            "city": "Santarem,BR",
            "code": "STM"
          }
        },
        {
          "@attributes": {
            "city": "Santiago,DO",
            "code": "STI"
          }
        },
        {
          "@attributes": {
            "city": "Santiago,PA",
            "code": "SYP"
          }
        },
        {
          "@attributes": {
            "city": "Santiago,CL",
            "code": "SCL"
          }
        },
        {
          "@attributes": {
            "city": "Santiago,CU",
            "code": "SCU"
          }
        },
        {
          "@attributes": {
            "city": "Santiago De Compostela,ES",
            "code": "SCQ"
          }
        },
        {
          "@attributes": {
            "city": "Santiago Del Estero,AR",
            "code": "SDE"
          }
        },
        {
          "@attributes": {
            "city": "Santo Angelo,BR",
            "code": "GEL"
          }
        },
        {
          "@attributes": {
            "city": "Santo Antao,CV",
            "code": "NTO"
          }
        },
        {
          "@attributes": {
            "city": "Santo Domingo,VE",
            "code": "STD"
          }
        },
        {
          "@attributes": {
            "city": "Santo Domingo,DO",
            "code": "SDQ"
          }
        },
        {
          "@attributes": {
            "city": "Santos,BR",
            "code": "SSZ"
          }
        },
        {
          "@attributes": {
            "city": "Sanya,CN",
            "code": "SYX"
          }
        },
        {
          "@attributes": {
            "city": "Sao Carlos,BR",
            "code": "QSC"
          }
        },
        {
          "@attributes": {
            "city": "Sao Filipe,CV",
            "code": "SFL"
          }
        },
        {
          "@attributes": {
            "city": "Sao Fransisco,BR",
            "code": "QFS"
          }
        },
        {
          "@attributes": {
            "city": "Sao Gabriel Da Cachoeira,BR",
            "code": "SJL"
          }
        },
        {
          "@attributes": {
            "city": "Sao Joao Del Rei,BR",
            "code": "QSJ"
          }
        },
        {
          "@attributes": {
            "city": "Sao Jorge Island,PT",
            "code": "SJZ"
          }
        },
        {
          "@attributes": {
            "city": "Sao Jose Do Rio Preto,BR",
            "code": "SJP"
          }
        },
        {
          "@attributes": {
            "city": "Sao Jose Dos Campos,BR",
            "code": "SJK"
          }
        },
        {
          "@attributes": {
            "city": "Sao Luiz,BR",
            "code": "SLZ"
          }
        },
        {
          "@attributes": {
            "city": "Sao Mateus,BR",
            "code": "SBJ"
          }
        },
        {
          "@attributes": {
            "city": "Sao Nicolau,CV",
            "code": "SNE"
          }
        },
        {
          "@attributes": {
            "city": "Sao Paulo,BR",
            "code": "SAO"
          }
        },
        {
          "@attributes": {
            "city": "Sao Paulo de Olivenca,BR",
            "code": "OLC"
          }
        },
        {
          "@attributes": {
            "city": "Sao Tome Is,ST",
            "code": "TMS"
          }
        },
        {
          "@attributes": {
            "city": "Sao Vicente,CV",
            "code": "VXE"
          }
        },
        {
          "@attributes": {
            "city": "Sapporo,JP",
            "code": "SPK"
          }
        },
        {
          "@attributes": {
            "city": "Sapporo cities,JP",
            "code": "CTS"
          }
        },
        {
          "@attributes": {
            "city": "Saqqaq,GL",
            "code": "QUP"
          }
        },
        {
          "@attributes": {
            "city": "Sara,VU",
            "code": "SSR"
          }
        },
        {
          "@attributes": {
            "city": "Sarajevo,BA",
            "code": "SJJ"
          }
        },
        {
          "@attributes": {
            "city": "Saranac Lake,US",
            "code": "SLK"
          }
        },
        {
          "@attributes": {
            "city": "Saransk,RU",
            "code": "SKX"
          }
        },
        {
          "@attributes": {
            "city": "Sarasota,US",
            "code": "SRQ"
          }
        },
        {
          "@attributes": {
            "city": "Saratov,RU",
            "code": "RTW"
          }
        },
        {
          "@attributes": {
            "city": "Saravena,CO",
            "code": "RVE"
          }
        },
        {
          "@attributes": {
            "city": "Sargans,CH",
            "code": "ZKA"
          }
        },
        {
          "@attributes": {
            "city": "Sargodha,PK",
            "code": "SGI"
          }
        },
        {
          "@attributes": {
            "city": "Sarh,TD",
            "code": "SRH"
          }
        },
        {
          "@attributes": {
            "city": "Sari,IR",
            "code": "SRY"
          }
        },
        {
          "@attributes": {
            "city": "Sarlat,FR",
            "code": "XSL"
          }
        },
        {
          "@attributes": {
            "city": "Sarmi,ID",
            "code": "ZRM"
          }
        },
        {
          "@attributes": {
            "city": "Sarnen,CH",
            "code": "ZKC"
          }
        },
        {
          "@attributes": {
            "city": "Sarnia,CA",
            "code": "YZR"
          }
        },
        {
          "@attributes": {
            "city": "Sarpsborg,NO",
            "code": "XKQ"
          }
        },
        {
          "@attributes": {
            "city": "Sarteneja,BZ",
            "code": "SJX"
          }
        },
        {
          "@attributes": {
            "city": "Sashylakh,RU",
            "code": "SYS"
          }
        },
        {
          "@attributes": {
            "city": "Saskatoon,CA",
            "code": "YXE"
          }
        },
        {
          "@attributes": {
            "city": "Sassandra,CI",
            "code": "ZSS"
          }
        },
        {
          "@attributes": {
            "city": "Sassari,IT",
            "code": "QSS"
          }
        },
        {
          "@attributes": {
            "city": "Sassnitz,DE",
            "code": "ZSI"
          }
        },
        {
          "@attributes": {
            "city": "Sasstown,LR",
            "code": "SAZ"
          }
        },
        {
          "@attributes": {
            "city": "Satna Airport,IN",
            "code": "TNI"
          }
        },
        {
          "@attributes": {
            "city": "Satu Mare,RO",
            "code": "SUJ"
          }
        },
        {
          "@attributes": {
            "city": "Saturna Island,CA",
            "code": "YAJ"
          }
        },
        {
          "@attributes": {
            "city": "Satwag,PG",
            "code": "SWG"
          }
        },
        {
          "@attributes": {
            "city": "Saudarkrokur,IS",
            "code": "SAK"
          }
        },
        {
          "@attributes": {
            "city": "Sault Ste Marie,CA",
            "code": "YAM"
          }
        },
        {
          "@attributes": {
            "city": "Sault Ste Marie,US",
            "code": "SSM"
          }
        },
        {
          "@attributes": {
            "city": "Saumlaki,ID",
            "code": "SXK"
          }
        },
        {
          "@attributes": {
            "city": "Saumur,FR",
            "code": "XSU"
          }
        },
        {
          "@attributes": {
            "city": "Saurimo,AO",
            "code": "VHC"
          }
        },
        {
          "@attributes": {
            "city": "Sausalito,US",
            "code": "JMC"
          }
        },
        {
          "@attributes": {
            "city": "Savannah,US",
            "code": "SAV"
          }
        },
        {
          "@attributes": {
            "city": "Savannakhet,LA",
            "code": "ZVK"
          }
        },
        {
          "@attributes": {
            "city": "Savonlinna,FI",
            "code": "SVL"
          }
        },
        {
          "@attributes": {
            "city": "Savoonga,US",
            "code": "SVA"
          }
        },
        {
          "@attributes": {
            "city": "Savusavu,FJ",
            "code": "SVU"
          }
        },
        {
          "@attributes": {
            "city": "Scammon Bay,US",
            "code": "SCM"
          }
        },
        {
          "@attributes": {
            "city": "Schaffhausen,CH",
            "code": "ZKJ"
          }
        },
        {
          "@attributes": {
            "city": "Schefferville,CA",
            "code": "YKL"
          }
        },
        {
          "@attributes": {
            "city": "Schenectady,US",
            "code": "SCH"
          }
        },
        {
          "@attributes": {
            "city": "Schiphol,NL",
            "code": "SPL"
          }
        },
        {
          "@attributes": {
            "city": "Schleswig,DE",
            "code": "QWI"
          }
        },
        {
          "@attributes": {
            "city": "Schleswig,DE",
            "code": "WBG"
          }
        },
        {
          "@attributes": {
            "city": "Schoena,DE",
            "code": "ZSC"
          }
        },
        {
          "@attributes": {
            "city": "Schwaebisch Gmuend,DE",
            "code": "ZPV"
          }
        },
        {
          "@attributes": {
            "city": "Schwanheide,DE",
            "code": "ZSD"
          }
        },
        {
          "@attributes": {
            "city": "Schweinfurt,DE",
            "code": "ZPW"
          }
        },
        {
          "@attributes": {
            "city": "Schwerin,DE",
            "code": "ZSR"
          }
        },
        {
          "@attributes": {
            "city": "Schwerin,DE",
            "code": "SZW"
          }
        },
        {
          "@attributes": {
            "city": "Schwyz,CH",
            "code": "ZKK"
          }
        },
        {
          "@attributes": {
            "city": "Scone,AU",
            "code": "NSO"
          }
        },
        {
          "@attributes": {
            "city": "Scottsbluff,US",
            "code": "BFF"
          }
        },
        {
          "@attributes": {
            "city": "Scottsdale,US",
            "code": "SCF"
          }
        },
        {
          "@attributes": {
            "city": "Scranton,US",
            "code": "AVP"
          }
        },
        {
          "@attributes": {
            "city": "Seal Bay,US",
            "code": "SYB"
          }
        },
        {
          "@attributes": {
            "city": "Searcy,US",
            "code": "SRC"
          }
        },
        {
          "@attributes": {
            "city": "Seattle,US",
            "code": "SEA"
          }
        },
        {
          "@attributes": {
            "city": "Sebha,LY",
            "code": "SEB"
          }
        },
        {
          "@attributes": {
            "city": "Sebring,US",
            "code": "SEF"
          }
        },
        {
          "@attributes": {
            "city": "Sechelt,CA",
            "code": "YHS"
          }
        },
        {
          "@attributes": {
            "city": "Seclin,FR",
            "code": "XSX"
          }
        },
        {
          "@attributes": {
            "city": "Secunda,ZA",
            "code": "ZEC"
          }
        },
        {
          "@attributes": {
            "city": "Sedalia,US",
            "code": "DMO"
          }
        },
        {
          "@attributes": {
            "city": "Sedona,US",
            "code": "SDX"
          }
        },
        {
          "@attributes": {
            "city": "Seefeld,AT",
            "code": "XOW"
          }
        },
        {
          "@attributes": {
            "city": "Sege,SB",
            "code": "EGM"
          }
        },
        {
          "@attributes": {
            "city": "Segou,ML",
            "code": "SZU"
          }
        },
        {
          "@attributes": {
            "city": "Segovia,ES",
            "code": "XOU"
          }
        },
        {
          "@attributes": {
            "city": "Segrate,IT",
            "code": "SWK"
          }
        },
        {
          "@attributes": {
            "city": "Seguela,CI",
            "code": "SEO"
          }
        },
        {
          "@attributes": {
            "city": "Sehonghong,LS",
            "code": "SHK"
          }
        },
        {
          "@attributes": {
            "city": "Seinajoki,FI",
            "code": "SJY"
          }
        },
        {
          "@attributes": {
            "city": "Seiyun,YE",
            "code": "GXF"
          }
        },
        {
          "@attributes": {
            "city": "Sekakes,LS",
            "code": "SKQ"
          }
        },
        {
          "@attributes": {
            "city": "Selawik,US",
            "code": "WLK"
          }
        },
        {
          "@attributes": {
            "city": "Selbang,PG",
            "code": "SBC"
          }
        },
        {
          "@attributes": {
            "city": "Seldovia,US",
            "code": "SOV"
          }
        },
        {
          "@attributes": {
            "city": "Selebi Phikwe,BW",
            "code": "PKW"
          }
        },
        {
          "@attributes": {
            "city": "Selibaby,MR",
            "code": "SEY"
          }
        },
        {
          "@attributes": {
            "city": "Semarang,ID",
            "code": "SRG"
          }
        },
        {
          "@attributes": {
            "city": "Semey,KZ",
            "code": "PLX"
          }
        },
        {
          "@attributes": {
            "city": "Semongkong,LS",
            "code": "SOK"
          }
        },
        {
          "@attributes": {
            "city": "Semporna,MY",
            "code": "SMM"
          }
        },
        {
          "@attributes": {
            "city": "Sendai,JP",
            "code": "SDJ"
          }
        },
        {
          "@attributes": {
            "city": "Senlis,FR",
            "code": "XSV"
          }
        },
        {
          "@attributes": {
            "city": "Senneterre,CA",
            "code": "XFK"
          }
        },
        {
          "@attributes": {
            "city": "Sens,FR",
            "code": "XSF"
          }
        },
        {
          "@attributes": {
            "city": "Seo de Urgel,ES",
            "code": "LEU"
          }
        },
        {
          "@attributes": {
            "city": "Seosan,KR",
            "code": "HMY"
          }
        },
        {
          "@attributes": {
            "city": "Seoul,KR",
            "code": "SEL"
          }
        },
        {
          "@attributes": {
            "city": "Sept Iles,CA",
            "code": "YZV"
          }
        },
        {
          "@attributes": {
            "city": "Sequim,US",
            "code": "SQV"
          }
        },
        {
          "@attributes": {
            "city": "Seronera,TZ",
            "code": "SEU"
          }
        },
        {
          "@attributes": {
            "city": "Serra Pelada,BR",
            "code": "RSG"
          }
        },
        {
          "@attributes": {
            "city": "Serravalle,SM",
            "code": "RSM"
          }
        },
        {
          "@attributes": {
            "city": "Sert,LY",
            "code": "SRX"
          }
        },
        {
          "@attributes": {
            "city": "Serui,ID",
            "code": "ZRI"
          }
        },
        {
          "@attributes": {
            "city": "Seshutes,LS",
            "code": "SHZ"
          }
        },
        {
          "@attributes": {
            "city": "Sete,FR",
            "code": "XSY"
          }
        },
        {
          "@attributes": {
            "city": "Sete Lagoas,BR",
            "code": "QHG"
          }
        },
        {
          "@attributes": {
            "city": "Setif,DZ",
            "code": "QSF"
          }
        },
        {
          "@attributes": {
            "city": "Setubal,PT",
            "code": "XSZ"
          }
        },
        {
          "@attributes": {
            "city": "Sevastopol,UA",
            "code": "UKS"
          }
        },
        {
          "@attributes": {
            "city": "Severac Le Chateau,FR",
            "code": "ZBH"
          }
        },
        {
          "@attributes": {
            "city": "Sevilla,ES",
            "code": "SVQ"
          }
        },
        {
          "@attributes": {
            "city": "Seward,US",
            "code": "SWD"
          }
        },
        {
          "@attributes": {
            "city": "Seymour,US",
            "code": "SER"
          }
        },
        {
          "@attributes": {
            "city": "Sfax,TN",
            "code": "SFA"
          }
        },
        {
          "@attributes": {
            "city": "Shafter,US",
            "code": "MIT"
          }
        },
        {
          "@attributes": {
            "city": "Shageluk,US",
            "code": "SHX"
          }
        },
        {
          "@attributes": {
            "city": "Shahre Kord,IR",
            "code": "CQD"
          }
        },
        {
          "@attributes": {
            "city": "Shakhtersk,RU",
            "code": "EKS"
          }
        },
        {
          "@attributes": {
            "city": "Shaktoolik,US",
            "code": "SKK"
          }
        },
        {
          "@attributes": {
            "city": "Shamattawa Indian Reserve,CA",
            "code": "ZTM"
          }
        },
        {
          "@attributes": {
            "city": "Shanghai,CN",
            "code": "SHA"
          }
        },
        {
          "@attributes": {
            "city": "Shanghai CN,CN",
            "code": "PVG"
          }
        },
        {
          "@attributes": {
            "city": "Shannon,IE",
            "code": "SNN"
          }
        },
        {
          "@attributes": {
            "city": "Shantou,CN",
            "code": "SWA"
          }
        },
        {
          "@attributes": {
            "city": "Shanzhou,CN",
            "code": "SZO"
          }
        },
        {
          "@attributes": {
            "city": "Shaoguan,CN",
            "code": "HSC"
          }
        },
        {
          "@attributes": {
            "city": "Shaoxing,CN",
            "code": "RNX"
          }
        },
        {
          "@attributes": {
            "city": "Shaoyang,CN",
            "code": "SYG"
          }
        },
        {
          "@attributes": {
            "city": "Sharjah,AE",
            "code": "SHJ"
          }
        },
        {
          "@attributes": {
            "city": "Shark Elowainat,EG",
            "code": "GSQ"
          }
        },
        {
          "@attributes": {
            "city": "Sharm El Sheik,EG",
            "code": "SSH"
          }
        },
        {
          "@attributes": {
            "city": "Sharurah,SA",
            "code": "SHW"
          }
        },
        {
          "@attributes": {
            "city": "Shashi,CN",
            "code": "SHS"
          }
        },
        {
          "@attributes": {
            "city": "Shawinigan,CA",
            "code": "XFL"
          }
        },
        {
          "@attributes": {
            "city": "Shawnee,US",
            "code": "SNL"
          }
        },
        {
          "@attributes": {
            "city": "Shawnigan,CA",
            "code": "XFM"
          }
        },
        {
          "@attributes": {
            "city": "She Kou,CN",
            "code": "ZCU"
          }
        },
        {
          "@attributes": {
            "city": "Sheboygan,US",
            "code": "SBM"
          }
        },
        {
          "@attributes": {
            "city": "Sheffield,GB",
            "code": "SZD"
          }
        },
        {
          "@attributes": {
            "city": "Shek Mum,HK",
            "code": "QDM"
          }
        },
        {
          "@attributes": {
            "city": "Shelbyville,US",
            "code": "SYI"
          }
        },
        {
          "@attributes": {
            "city": "Sheldon Point,US",
            "code": "SXP"
          }
        },
        {
          "@attributes": {
            "city": "Shemya Island,US",
            "code": "SYA"
          }
        },
        {
          "@attributes": {
            "city": "Shennongjia,CN",
            "code": "HPG"
          }
        },
        {
          "@attributes": {
            "city": "Shenyang,CN",
            "code": "SHE"
          }
        },
        {
          "@attributes": {
            "city": "Shenzhen,CN",
            "code": "SZX"
          }
        },
        {
          "@attributes": {
            "city": "Shepparton,AU",
            "code": "SHT"
          }
        },
        {
          "@attributes": {
            "city": "Sherbrooke,CA",
            "code": "YSC"
          }
        },
        {
          "@attributes": {
            "city": "Sheridan,US",
            "code": "SHR"
          }
        },
        {
          "@attributes": {
            "city": "Sherman,US",
            "code": "PNX"
          }
        },
        {
          "@attributes": {
            "city": "Shetland Islands Area,GB",
            "code": "SDZ"
          }
        },
        {
          "@attributes": {
            "city": "Shi Quan He,CN",
            "code": "NGQ"
          }
        },
        {
          "@attributes": {
            "city": "Shijiazhuang,CN",
            "code": "SJW"
          }
        },
        {
          "@attributes": {
            "city": "Shillong,IN",
            "code": "SHL"
          }
        },
        {
          "@attributes": {
            "city": "Shimkent,KZ",
            "code": "CIT"
          }
        },
        {
          "@attributes": {
            "city": "Shimojishima,JP",
            "code": "SHI"
          }
        },
        {
          "@attributes": {
            "city": "Shinyanga,TZ",
            "code": "SHY"
          }
        },
        {
          "@attributes": {
            "city": "Shirahama,JP",
            "code": "SHM"
          }
        },
        {
          "@attributes": {
            "city": "Shirak,AM",
            "code": "LWN"
          }
        },
        {
          "@attributes": {
            "city": "Shiraz,IR",
            "code": "SYZ"
          }
        },
        {
          "@attributes": {
            "city": "Shire Indaselassie,ET",
            "code": "SHC"
          }
        },
        {
          "@attributes": {
            "city": "Shismaref,US",
            "code": "SHH"
          }
        },
        {
          "@attributes": {
            "city": "Shiyan,CN",
            "code": "EJQ"
          }
        },
        {
          "@attributes": {
            "city": "Shizuoka cities,JP",
            "code": "FSZ"
          }
        },
        {
          "@attributes": {
            "city": "Sholapur,IN",
            "code": "SSE"
          }
        },
        {
          "@attributes": {
            "city": "Shonai,JP",
            "code": "SYO"
          }
        },
        {
          "@attributes": {
            "city": "Show Low,US",
            "code": "SOW"
          }
        },
        {
          "@attributes": {
            "city": "Shreveport,US",
            "code": "SHV"
          }
        },
        {
          "@attributes": {
            "city": "Shungnak,US",
            "code": "SHG"
          }
        },
        {
          "@attributes": {
            "city": "Shute Hrb,AU",
            "code": "JHQ"
          }
        },
        {
          "@attributes": {
            "city": "Sialkot,PK",
            "code": "SKT"
          }
        },
        {
          "@attributes": {
            "city": "Siassi,PG",
            "code": "SSS"
          }
        },
        {
          "@attributes": {
            "city": "Siauliai,LT",
            "code": "SQQ"
          }
        },
        {
          "@attributes": {
            "city": "Sibiu,RO",
            "code": "SBZ"
          }
        },
        {
          "@attributes": {
            "city": "Sibolga,ID",
            "code": "FLZ"
          }
        },
        {
          "@attributes": {
            "city": "Sibu,MY",
            "code": "SBW"
          }
        },
        {
          "@attributes": {
            "city": "Sidney,US",
            "code": "SNY"
          }
        },
        {
          "@attributes": {
            "city": "Sidney,US",
            "code": "SDY"
          }
        },
        {
          "@attributes": {
            "city": "Siegburg,DE",
            "code": "ZPY"
          }
        },
        {
          "@attributes": {
            "city": "Siegen,DE",
            "code": "SGE"
          }
        },
        {
          "@attributes": {
            "city": "Siem Reap,KH",
            "code": "REP"
          }
        },
        {
          "@attributes": {
            "city": "Siena,IT",
            "code": "SAY"
          }
        },
        {
          "@attributes": {
            "city": "Sierra Grande,AR",
            "code": "SGV"
          }
        },
        {
          "@attributes": {
            "city": "Sierre,CH",
            "code": "ZKO"
          }
        },
        {
          "@attributes": {
            "city": "Sigiriya,LK",
            "code": "GIU"
          }
        },
        {
          "@attributes": {
            "city": "Siglufjordur,IS",
            "code": "SIJ"
          }
        },
        {
          "@attributes": {
            "city": "Siguanea,CU",
            "code": "SZJ"
          }
        },
        {
          "@attributes": {
            "city": "Sikeston,US",
            "code": "SIK"
          }
        },
        {
          "@attributes": {
            "city": "Silchar,IN",
            "code": "IXS"
          }
        },
        {
          "@attributes": {
            "city": "Silistra,BG",
            "code": "SLS"
          }
        },
        {
          "@attributes": {
            "city": "Silkeborg,DK",
            "code": "XAH"
          }
        },
        {
          "@attributes": {
            "city": "Siloam Springs,US",
            "code": "SLG"
          }
        },
        {
          "@attributes": {
            "city": "Silver cities,US",
            "code": "SVC"
          }
        },
        {
          "@attributes": {
            "city": "Silver Creek,BZ",
            "code": "SVK"
          }
        },
        {
          "@attributes": {
            "city": "Simao,CN",
            "code": "SYM"
          }
        },
        {
          "@attributes": {
            "city": "Simbai,PG",
            "code": "SIM"
          }
        },
        {
          "@attributes": {
            "city": "Simberi,PG",
            "code": "NIS"
          }
        },
        {
          "@attributes": {
            "city": "Simenti,SN",
            "code": "SMY"
          }
        },
        {
          "@attributes": {
            "city": "Simferopol,UA",
            "code": "SIP"
          }
        },
        {
          "@attributes": {
            "city": "Simla,IN",
            "code": "SLV"
          }
        },
        {
          "@attributes": {
            "city": "Simra,NP",
            "code": "SIF"
          }
        },
        {
          "@attributes": {
            "city": "Sindelfingen,DE",
            "code": "ZPZ"
          }
        },
        {
          "@attributes": {
            "city": "Sines,PT",
            "code": "SIE"
          }
        },
        {
          "@attributes": {
            "city": "Singapore,SG",
            "code": "SIN"
          }
        },
        {
          "@attributes": {
            "city": "Singen,DE",
            "code": "ZQA"
          }
        },
        {
          "@attributes": {
            "city": "Singita Safari Lodge,ZA",
            "code": "SSX"
          }
        },
        {
          "@attributes": {
            "city": "Singleton,AU",
            "code": "SIX"
          }
        },
        {
          "@attributes": {
            "city": "Sinoe,LR",
            "code": "SNI"
          }
        },
        {
          "@attributes": {
            "city": "Sinop,BR",
            "code": "OPS"
          }
        },
        {
          "@attributes": {
            "city": "Sintang Borneo Island,ID",
            "code": "SQG"
          }
        },
        {
          "@attributes": {
            "city": "Sion,CH",
            "code": "SIR"
          }
        },
        {
          "@attributes": {
            "city": "Sioux cities,US",
            "code": "SUX"
          }
        },
        {
          "@attributes": {
            "city": "Sioux Falls,US",
            "code": "FSD"
          }
        },
        {
          "@attributes": {
            "city": "Sioux Lookout,CA",
            "code": "YXL"
          }
        },
        {
          "@attributes": {
            "city": "Siping,CN",
            "code": "OSQ"
          }
        },
        {
          "@attributes": {
            "city": "Sira,NO",
            "code": "XOQ"
          }
        },
        {
          "@attributes": {
            "city": "Siracusa,IT",
            "code": "QIC"
          }
        },
        {
          "@attributes": {
            "city": "Sirnak,TR",
            "code": "NKT"
          }
        },
        {
          "@attributes": {
            "city": "Sishen,ZA",
            "code": "SIS"
          }
        },
        {
          "@attributes": {
            "city": "Sisimiut,GL",
            "code": "JHS"
          }
        },
        {
          "@attributes": {
            "city": "Sitia,GR",
            "code": "JSH"
          }
        },
        {
          "@attributes": {
            "city": "Sitinak Island,US",
            "code": "SKJ"
          }
        },
        {
          "@attributes": {
            "city": "Sitka,US",
            "code": "SIT"
          }
        },
        {
          "@attributes": {
            "city": "Sittwe,MM",
            "code": "AKY"
          }
        },
        {
          "@attributes": {
            "city": "Sivas,TR",
            "code": "VAS"
          }
        },
        {
          "@attributes": {
            "city": "Siwa,EG",
            "code": "SEW"
          }
        },
        {
          "@attributes": {
            "city": "Skagen,DK",
            "code": "QJV"
          }
        },
        {
          "@attributes": {
            "city": "Skagway,US",
            "code": "SGY"
          }
        },
        {
          "@attributes": {
            "city": "Skardu,PK",
            "code": "KDU"
          }
        },
        {
          "@attributes": {
            "city": "Skelleftea,SE",
            "code": "SFT"
          }
        },
        {
          "@attributes": {
            "city": "Ski Norway,NO",
            "code": "YVS"
          }
        },
        {
          "@attributes": {
            "city": "Skiathos,GR",
            "code": "JSI"
          }
        },
        {
          "@attributes": {
            "city": "Skien,NO",
            "code": "SKE"
          }
        },
        {
          "@attributes": {
            "city": "Skiros,GR",
            "code": "SKU"
          }
        },
        {
          "@attributes": {
            "city": "Skitube,AU",
            "code": "QTO"
          }
        },
        {
          "@attributes": {
            "city": "Skive,DK",
            "code": "SQW"
          }
        },
        {
          "@attributes": {
            "city": "Skopje,MK",
            "code": "SKP"
          }
        },
        {
          "@attributes": {
            "city": "Skoppum,NO",
            "code": "XUR"
          }
        },
        {
          "@attributes": {
            "city": "Skovde,SE",
            "code": "KVB"
          }
        },
        {
          "@attributes": {
            "city": "Skrydstrup,DK",
            "code": "SKS"
          }
        },
        {
          "@attributes": {
            "city": "Skukuza,ZA",
            "code": "SZK"
          }
        },
        {
          "@attributes": {
            "city": "Sleetmute,US",
            "code": "SLQ"
          }
        },
        {
          "@attributes": {
            "city": "Sliac,SK",
            "code": "SLD"
          }
        },
        {
          "@attributes": {
            "city": "Sligo,IE",
            "code": "SXL"
          }
        },
        {
          "@attributes": {
            "city": "Slupsk,PL",
            "code": "OSP"
          }
        },
        {
          "@attributes": {
            "city": "Smara,MA",
            "code": "SMW"
          }
        },
        {
          "@attributes": {
            "city": "Smith Falls,CA",
            "code": "YSH"
          }
        },
        {
          "@attributes": {
            "city": "Smithers,CA",
            "code": "YYD"
          }
        },
        {
          "@attributes": {
            "city": "Smithfield,US",
            "code": "SFZ"
          }
        },
        {
          "@attributes": {
            "city": "Smithton,AU",
            "code": "SIO"
          }
        },
        {
          "@attributes": {
            "city": "Smolensk,RU",
            "code": "LNX"
          }
        },
        {
          "@attributes": {
            "city": "Smyrna,US",
            "code": "MQY"
          }
        },
        {
          "@attributes": {
            "city": "Snake Bay,AU",
            "code": "SNB"
          }
        },
        {
          "@attributes": {
            "city": "Snartemo,NO",
            "code": "XUS"
          }
        },
        {
          "@attributes": {
            "city": "Soalala,MG",
            "code": "DWB"
          }
        },
        {
          "@attributes": {
            "city": "Sobral,BR",
            "code": "QBX"
          }
        },
        {
          "@attributes": {
            "city": "Soc Trang,VN",
            "code": "SOA"
          }
        },
        {
          "@attributes": {
            "city": "Sochi,RU",
            "code": "AER"
          }
        },
        {
          "@attributes": {
            "city": "Socorro,US",
            "code": "ONM"
          }
        },
        {
          "@attributes": {
            "city": "Socotra,YE",
            "code": "SCT"
          }
        },
        {
          "@attributes": {
            "city": "Sodankyla,FI",
            "code": "SOT"
          }
        },
        {
          "@attributes": {
            "city": "Soddu,ET",
            "code": "SXU"
          }
        },
        {
          "@attributes": {
            "city": "Soderhamn,SE",
            "code": "SOO"
          }
        },
        {
          "@attributes": {
            "city": "Sodertalje,SE",
            "code": "JSO"
          }
        },
        {
          "@attributes": {
            "city": "Soelden,AT",
            "code": "XOO"
          }
        },
        {
          "@attributes": {
            "city": "Sofia,BG",
            "code": "SOF"
          }
        },
        {
          "@attributes": {
            "city": "Sogamoso,CO",
            "code": "SOX"
          }
        },
        {
          "@attributes": {
            "city": "Sogndal,NO",
            "code": "SOG"
          }
        },
        {
          "@attributes": {
            "city": "Sohag,EG",
            "code": "HMB"
          }
        },
        {
          "@attributes": {
            "city": "Soissons,FR",
            "code": "XSS"
          }
        },
        {
          "@attributes": {
            "city": "Sokcho,KR",
            "code": "SHO"
          }
        },
        {
          "@attributes": {
            "city": "Sokoto,NG",
            "code": "SKO"
          }
        },
        {
          "@attributes": {
            "city": "Sola,VU",
            "code": "SLH"
          }
        },
        {
          "@attributes": {
            "city": "Soldotna,US",
            "code": "SXQ"
          }
        },
        {
          "@attributes": {
            "city": "Solingen,DE",
            "code": "ZIO"
          }
        },
        {
          "@attributes": {
            "city": "Solingen DE,DE",
            "code": "ZQB"
          }
        },
        {
          "@attributes": {
            "city": "Solo,ID",
            "code": "SOC"
          }
        },
        {
          "@attributes": {
            "city": "Solomon,US",
            "code": "SOL"
          }
        },
        {
          "@attributes": {
            "city": "Solovetsky,RU",
            "code": "CSH"
          }
        },
        {
          "@attributes": {
            "city": "Solvesborg,SE",
            "code": "XYU"
          }
        },
        {
          "@attributes": {
            "city": "Solwezi,ZM",
            "code": "SLI"
          }
        },
        {
          "@attributes": {
            "city": "Somerset,US",
            "code": "SME"
          }
        },
        {
          "@attributes": {
            "city": "Son La,VN",
            "code": "SQH"
          }
        },
        {
          "@attributes": {
            "city": "Sonderborg,DK",
            "code": "SGD"
          }
        },
        {
          "@attributes": {
            "city": "Songea,TZ",
            "code": "SGX"
          }
        },
        {
          "@attributes": {
            "city": "Songpan,CN",
            "code": "JZH"
          }
        },
        {
          "@attributes": {
            "city": "Sonneberg,DE",
            "code": "ZSG"
          }
        },
        {
          "@attributes": {
            "city": "Sophia Antipolis,FR",
            "code": "SXD"
          }
        },
        {
          "@attributes": {
            "city": "Sopu,PG",
            "code": "SPH"
          }
        },
        {
          "@attributes": {
            "city": "Sora,IT",
            "code": "QXE"
          }
        },
        {
          "@attributes": {
            "city": "Soria,ES",
            "code": "XJO"
          }
        },
        {
          "@attributes": {
            "city": "Sorkjosen,NO",
            "code": "SOJ"
          }
        },
        {
          "@attributes": {
            "city": "Soroako,ID",
            "code": "SQR"
          }
        },
        {
          "@attributes": {
            "city": "Sorocaba,BR",
            "code": "SOD"
          }
        },
        {
          "@attributes": {
            "city": "Sorong,ID",
            "code": "SOQ"
          }
        },
        {
          "@attributes": {
            "city": "Sorrento,IT",
            "code": "RRO"
          }
        },
        {
          "@attributes": {
            "city": "Souanke,CG",
            "code": "SOE"
          }
        },
        {
          "@attributes": {
            "city": "Sousse,TN",
            "code": "QSO"
          }
        },
        {
          "@attributes": {
            "city": "South Andros,BS",
            "code": "TZN"
          }
        },
        {
          "@attributes": {
            "city": "South Bend,US",
            "code": "SBN"
          }
        },
        {
          "@attributes": {
            "city": "South Caicos,TC",
            "code": "XSC"
          }
        },
        {
          "@attributes": {
            "city": "South Indian Lake,CA",
            "code": "XSI"
          }
        },
        {
          "@attributes": {
            "city": "South Molle,AU",
            "code": "SOI"
          }
        },
        {
          "@attributes": {
            "city": "South Naknek,US",
            "code": "WSN"
          }
        },
        {
          "@attributes": {
            "city": "South West Bay,VU",
            "code": "SWJ"
          }
        },
        {
          "@attributes": {
            "city": "Southampton,GB",
            "code": "SOU"
          }
        },
        {
          "@attributes": {
            "city": "Southend,GB",
            "code": "SEN"
          }
        },
        {
          "@attributes": {
            "city": "Southern Cross,AU",
            "code": "SQC"
          }
        },
        {
          "@attributes": {
            "city": "Southport,AU",
            "code": "SHQ"
          }
        },
        {
          "@attributes": {
            "city": "Sovetskaya Gavan,RU",
            "code": "GVN"
          }
        },
        {
          "@attributes": {
            "city": "Sovetsky,RU",
            "code": "OVS"
          }
        },
        {
          "@attributes": {
            "city": "Soyo,AO",
            "code": "SZA"
          }
        },
        {
          "@attributes": {
            "city": "Spangdahlem,DE",
            "code": "SPM"
          }
        },
        {
          "@attributes": {
            "city": "Sparrevohn,US",
            "code": "SVW"
          }
        },
        {
          "@attributes": {
            "city": "Sparta,US",
            "code": "CMY"
          }
        },
        {
          "@attributes": {
            "city": "Sparta,GR",
            "code": "SPJ"
          }
        },
        {
          "@attributes": {
            "city": "Sparta,US",
            "code": "SAR"
          }
        },
        {
          "@attributes": {
            "city": "Spearfish,US",
            "code": "SPF"
          }
        },
        {
          "@attributes": {
            "city": "Spencer,US",
            "code": "SPW"
          }
        },
        {
          "@attributes": {
            "city": "Spetsai Island,GR",
            "code": "JSS"
          }
        },
        {
          "@attributes": {
            "city": "Speyer,DE",
            "code": "ZQC"
          }
        },
        {
          "@attributes": {
            "city": "Spiddal,IE",
            "code": "NNR"
          }
        },
        {
          "@attributes": {
            "city": "Spirit Lake,US",
            "code": "RTL"
          }
        },
        {
          "@attributes": {
            "city": "Split,HR",
            "code": "SPU"
          }
        },
        {
          "@attributes": {
            "city": "Spokane,US",
            "code": "GEG"
          }
        },
        {
          "@attributes": {
            "city": "Spring Point,BS",
            "code": "AXP"
          }
        },
        {
          "@attributes": {
            "city": "Springbok,ZA",
            "code": "SBU"
          }
        },
        {
          "@attributes": {
            "city": "Springdale,US",
            "code": "SPZ"
          }
        },
        {
          "@attributes": {
            "city": "Springfield,US",
            "code": "VSF"
          }
        },
        {
          "@attributes": {
            "city": "Springfield,US",
            "code": "SPI"
          }
        },
        {
          "@attributes": {
            "city": "Springfield,US",
            "code": "SFY"
          }
        },
        {
          "@attributes": {
            "city": "Springfield,US",
            "code": "SGF"
          }
        },
        {
          "@attributes": {
            "city": "Springfield,US",
            "code": "SGH"
          }
        },
        {
          "@attributes": {
            "city": "Srednekolymsk,RU",
            "code": "SEK"
          }
        },
        {
          "@attributes": {
            "city": "Srinagar,IN",
            "code": "SXR"
          }
        },
        {
          "@attributes": {
            "city": "St Andrews,GB",
            "code": "ADX"
          }
        },
        {
          "@attributes": {
            "city": "St Anthony,CA",
            "code": "YAY"
          }
        },
        {
          "@attributes": {
            "city": "St Anton,AT",
            "code": "ANT"
          }
        },
        {
          "@attributes": {
            "city": "St Anton am Arlberg,AT",
            "code": "XOV"
          }
        },
        {
          "@attributes": {
            "city": "St Augustine,US",
            "code": "UST"
          }
        },
        {
          "@attributes": {
            "city": "St Austell,GB",
            "code": "USX"
          }
        },
        {
          "@attributes": {
            "city": "St Barthelemy,GP",
            "code": "SBH"
          }
        },
        {
          "@attributes": {
            "city": "St Brieuc,FR",
            "code": "SBK"
          }
        },
        {
          "@attributes": {
            "city": "St Croix,US",
            "code": "STX"
          }
        },
        {
          "@attributes": {
            "city": "St Die,FR",
            "code": "XCK"
          }
        },
        {
          "@attributes": {
            "city": "St Etienne,FR",
            "code": "EBU"
          }
        },
        {
          "@attributes": {
            "city": "St Eustatius,BQ",
            "code": "EUX"
          }
        },
        {
          "@attributes": {
            "city": "St Francois,GP",
            "code": "SFC"
          }
        },
        {
          "@attributes": {
            "city": "St Gallen,CH",
            "code": "QGL"
          }
        },
        {
          "@attributes": {
            "city": "St George,AU",
            "code": "SGO"
          }
        },
        {
          "@attributes": {
            "city": "St George,US",
            "code": "SGU"
          }
        },
        {
          "@attributes": {
            "city": "St George Island,US",
            "code": "STG"
          }
        },
        {
          "@attributes": {
            "city": "St Gilles Croix De Vie,FR",
            "code": "XGV"
          }
        },
        {
          "@attributes": {
            "city": "St Helens,AU",
            "code": "HLS"
          }
        },
        {
          "@attributes": {
            "city": "St Jean De Luz,FR",
            "code": "XJZ"
          }
        },
        {
          "@attributes": {
            "city": "St John,CA",
            "code": "YSJ"
          }
        },
        {
          "@attributes": {
            "city": "St John Island,US",
            "code": "SJF"
          }
        },
        {
          "@attributes": {
            "city": "St Johns,CA",
            "code": "YYT"
          }
        },
        {
          "@attributes": {
            "city": "St Joseph,US",
            "code": "STJ"
          }
        },
        {
          "@attributes": {
            "city": "St Kitts,KN",
            "code": "SKB"
          }
        },
        {
          "@attributes": {
            "city": "St Leonard,CA",
            "code": "YSL"
          }
        },
        {
          "@attributes": {
            "city": "St Louis,SN",
            "code": "XLS"
          }
        },
        {
          "@attributes": {
            "city": "St Louis,US",
            "code": "STL"
          }
        },
        {
          "@attributes": {
            "city": "St Lucia,LC",
            "code": "SLU"
          }
        },
        {
          "@attributes": {
            "city": "St Maarten,SX",
            "code": "SXM"
          }
        },
        {
          "@attributes": {
            "city": "St Malo,FR",
            "code": "XSB"
          }
        },
        {
          "@attributes": {
            "city": "St Margrethen,CH",
            "code": "ZKF"
          }
        },
        {
          "@attributes": {
            "city": "St Martin,MF",
            "code": "SFG"
          }
        },
        {
          "@attributes": {
            "city": "St Marys,US",
            "code": "XSM"
          }
        },
        {
          "@attributes": {
            "city": "St Marys,CA",
            "code": "XIO"
          }
        },
        {
          "@attributes": {
            "city": "St Marys,US",
            "code": "KSM"
          }
        },
        {
          "@attributes": {
            "city": "St Michael,US",
            "code": "SMK"
          }
        },
        {
          "@attributes": {
            "city": "St Moritz,CH",
            "code": "SMV"
          }
        },
        {
          "@attributes": {
            "city": "St Nazaire,FR",
            "code": "SNR"
          }
        },
        {
          "@attributes": {
            "city": "St Omer,FR",
            "code": "XSG"
          }
        },
        {
          "@attributes": {
            "city": "St Paul,US",
            "code": "STP"
          }
        },
        {
          "@attributes": {
            "city": "St Paul Is,US",
            "code": "SNP"
          }
        },
        {
          "@attributes": {
            "city": "St Peter,DE",
            "code": "PSH"
          }
        },
        {
          "@attributes": {
            "city": "St Petersburg,US",
            "code": "SPG"
          }
        },
        {
          "@attributes": {
            "city": "St Petersburg,RU",
            "code": "LED"
          }
        },
        {
          "@attributes": {
            "city": "St Pierre,CA",
            "code": "YPM"
          }
        },
        {
          "@attributes": {
            "city": "St Pierre,CA",
            "code": "FSP"
          }
        },
        {
          "@attributes": {
            "city": "St Pierre Dela Reunion,RE",
            "code": "ZSE"
          }
        },
        {
          "@attributes": {
            "city": "St Pierre Des Corps,FR",
            "code": "XSH"
          }
        },
        {
          "@attributes": {
            "city": "St Polton,AT",
            "code": "POK"
          }
        },
        {
          "@attributes": {
            "city": "St Quentin,FR",
            "code": "XSJ"
          }
        },
        {
          "@attributes": {
            "city": "St Quentin en Yvelines,FR",
            "code": "XQY"
          }
        },
        {
          "@attributes": {
            "city": "St Raphael,FR",
            "code": "XSK"
          }
        },
        {
          "@attributes": {
            "city": "St Simons Is,US",
            "code": "SSI"
          }
        },
        {
          "@attributes": {
            "city": "St Theris Point,CA",
            "code": "YST"
          }
        },
        {
          "@attributes": {
            "city": "St Thomas,CA",
            "code": "YQS"
          }
        },
        {
          "@attributes": {
            "city": "St Thomas,US",
            "code": "STT"
          }
        },
        {
          "@attributes": {
            "city": "St Tropez,FR",
            "code": "LTT"
          }
        },
        {
          "@attributes": {
            "city": "St Vincent,VC",
            "code": "SVD"
          }
        },
        {
          "@attributes": {
            "city": "Stade,DE",
            "code": "ZQD"
          }
        },
        {
          "@attributes": {
            "city": "Stafford,GB",
            "code": "XVB"
          }
        },
        {
          "@attributes": {
            "city": "Stamford,US",
            "code": "ZTF"
          }
        },
        {
          "@attributes": {
            "city": "Stanthorpe,AU",
            "code": "SNH"
          }
        },
        {
          "@attributes": {
            "city": "Stara Zagora,BG",
            "code": "SZR"
          }
        },
        {
          "@attributes": {
            "city": "State College,US",
            "code": "SCE"
          }
        },
        {
          "@attributes": {
            "city": "Statesville,US",
            "code": "SVH"
          }
        },
        {
          "@attributes": {
            "city": "Stauning,DK",
            "code": "STA"
          }
        },
        {
          "@attributes": {
            "city": "Staunton,US",
            "code": "SHD"
          }
        },
        {
          "@attributes": {
            "city": "Stavanger,NO",
            "code": "SVG"
          }
        },
        {
          "@attributes": {
            "city": "Stavropol,RU",
            "code": "STW"
          }
        },
        {
          "@attributes": {
            "city": "Stawell,AU",
            "code": "SWC"
          }
        },
        {
          "@attributes": {
            "city": "Steamboat Bay,US",
            "code": "WSB"
          }
        },
        {
          "@attributes": {
            "city": "Steamboat Springs,US",
            "code": "SBS"
          }
        },
        {
          "@attributes": {
            "city": "Stebbins,US",
            "code": "WBB"
          }
        },
        {
          "@attributes": {
            "city": "Steinkjer,NO",
            "code": "XKJ"
          }
        },
        {
          "@attributes": {
            "city": "Stella Maris,BS",
            "code": "SML"
          }
        },
        {
          "@attributes": {
            "city": "Stendal,DE",
            "code": "ZSN"
          }
        },
        {
          "@attributes": {
            "city": "Stephenville,CA",
            "code": "YJT"
          }
        },
        {
          "@attributes": {
            "city": "Stephenville,US",
            "code": "SEP"
          }
        },
        {
          "@attributes": {
            "city": "Sterling,US",
            "code": "SQI"
          }
        },
        {
          "@attributes": {
            "city": "Sterling,US",
            "code": "STK"
          }
        },
        {
          "@attributes": {
            "city": "Stevenage,GB",
            "code": "XVJ"
          }
        },
        {
          "@attributes": {
            "city": "Stevens Point,US",
            "code": "STE"
          }
        },
        {
          "@attributes": {
            "city": "Stevens Village,US",
            "code": "SVS"
          }
        },
        {
          "@attributes": {
            "city": "Stewart Island,NZ",
            "code": "SZS"
          }
        },
        {
          "@attributes": {
            "city": "Stillwater,US",
            "code": "SWO"
          }
        },
        {
          "@attributes": {
            "city": "Stirling,GB",
            "code": "XWB"
          }
        },
        {
          "@attributes": {
            "city": "Stjordal,NO",
            "code": "XUU"
          }
        },
        {
          "@attributes": {
            "city": "Stockholm,PG",
            "code": "SMP"
          }
        },
        {
          "@attributes": {
            "city": "Stockholm,SE",
            "code": "STO"
          }
        },
        {
          "@attributes": {
            "city": "Stockport,GB",
            "code": "XVA"
          }
        },
        {
          "@attributes": {
            "city": "Stockton,US",
            "code": "SCK"
          }
        },
        {
          "@attributes": {
            "city": "Stoelmans Eiland,SR",
            "code": "SMZ"
          }
        },
        {
          "@attributes": {
            "city": "Stoke On Trent,GB",
            "code": "XWH"
          }
        },
        {
          "@attributes": {
            "city": "Stokmarknes,NO",
            "code": "SKN"
          }
        },
        {
          "@attributes": {
            "city": "Stolberg,DE",
            "code": "ZQE"
          }
        },
        {
          "@attributes": {
            "city": "Stony River,US",
            "code": "SRV"
          }
        },
        {
          "@attributes": {
            "city": "Stord,NO",
            "code": "SRP"
          }
        },
        {
          "@attributes": {
            "city": "Storekvina,NO",
            "code": "XUV"
          }
        },
        {
          "@attributes": {
            "city": "Storen,NO",
            "code": "XUW"
          }
        },
        {
          "@attributes": {
            "city": "Storm Lake,US",
            "code": "SLB"
          }
        },
        {
          "@attributes": {
            "city": "Stornoway,GB",
            "code": "SYY"
          }
        },
        {
          "@attributes": {
            "city": "Storuman,SE",
            "code": "SQO"
          }
        },
        {
          "@attributes": {
            "city": "Stowe,US",
            "code": "MVL"
          }
        },
        {
          "@attributes": {
            "city": "Strahan,AU",
            "code": "SRN"
          }
        },
        {
          "@attributes": {
            "city": "Stralsund,DE",
            "code": "ZSX"
          }
        },
        {
          "@attributes": {
            "city": "Strangnas,SE",
            "code": "XFH"
          }
        },
        {
          "@attributes": {
            "city": "Strasbourg,FR",
            "code": "SXB"
          }
        },
        {
          "@attributes": {
            "city": "Strasbourg cities,FR",
            "code": "XWG"
          }
        },
        {
          "@attributes": {
            "city": "Stratford,CA",
            "code": "XFD"
          }
        },
        {
          "@attributes": {
            "city": "Strathmore,AU",
            "code": "STH"
          }
        },
        {
          "@attributes": {
            "city": "Strathroy,CA",
            "code": "XTY"
          }
        },
        {
          "@attributes": {
            "city": "Straubing,DE",
            "code": "RBM"
          }
        },
        {
          "@attributes": {
            "city": "Streaky Bay,AU",
            "code": "KBY"
          }
        },
        {
          "@attributes": {
            "city": "Strezhevoy,RU",
            "code": "SWT"
          }
        },
        {
          "@attributes": {
            "city": "Stronsay,GB",
            "code": "SOY"
          }
        },
        {
          "@attributes": {
            "city": "Struer,DK",
            "code": "QWQ"
          }
        },
        {
          "@attributes": {
            "city": "Struga,MK",
            "code": "QXP"
          }
        },
        {
          "@attributes": {
            "city": "Stuart,US",
            "code": "SUA"
          }
        },
        {
          "@attributes": {
            "city": "Sturgeon Bay,US",
            "code": "SUE"
          }
        },
        {
          "@attributes": {
            "city": "Sturgis,US",
            "code": "IRS"
          }
        },
        {
          "@attributes": {
            "city": "Sturtevant,US",
            "code": "ZTV"
          }
        },
        {
          "@attributes": {
            "city": "Stuttgart,DE",
            "code": "STR"
          }
        },
        {
          "@attributes": {
            "city": "Stuttgart,US",
            "code": "SGT"
          }
        },
        {
          "@attributes": {
            "city": "Stykkisholmur,IS",
            "code": "SYK"
          }
        },
        {
          "@attributes": {
            "city": "Suai,TL",
            "code": "UAI"
          }
        },
        {
          "@attributes": {
            "city": "Suavanao,SB",
            "code": "VAO"
          }
        },
        {
          "@attributes": {
            "city": "Subic Bay,PH",
            "code": "SFS"
          }
        },
        {
          "@attributes": {
            "city": "Suceava,RO",
            "code": "SCV"
          }
        },
        {
          "@attributes": {
            "city": "Sucre,BO",
            "code": "SRE"
          }
        },
        {
          "@attributes": {
            "city": "Sudbury,CA",
            "code": "YSB"
          }
        },
        {
          "@attributes": {
            "city": "Sugar Land,US",
            "code": "SGR"
          }
        },
        {
          "@attributes": {
            "city": "Suhl,DE",
            "code": "ZSO"
          }
        },
        {
          "@attributes": {
            "city": "Sui PK,PK",
            "code": "SUL"
          }
        },
        {
          "@attributes": {
            "city": "Sukhothai,TH",
            "code": "THS"
          }
        },
        {
          "@attributes": {
            "city": "Sukhumi,GE",
            "code": "SUI"
          }
        },
        {
          "@attributes": {
            "city": "Suki,PG",
            "code": "SKC"
          }
        },
        {
          "@attributes": {
            "city": "Sukkur,PK",
            "code": "SKZ"
          }
        },
        {
          "@attributes": {
            "city": "Sulaymaniyah,IQ",
            "code": "ISU"
          }
        },
        {
          "@attributes": {
            "city": "Sule,PG",
            "code": "ULE"
          }
        },
        {
          "@attributes": {
            "city": "Sumare,BR",
            "code": "RWS"
          }
        },
        {
          "@attributes": {
            "city": "Sumbawa,ID",
            "code": "SWQ"
          }
        },
        {
          "@attributes": {
            "city": "Sumbawanga,TZ",
            "code": "SUT"
          }
        },
        {
          "@attributes": {
            "city": "Sumbe,AO",
            "code": "NDD"
          }
        },
        {
          "@attributes": {
            "city": "Summer Beaver,CA",
            "code": "SUR"
          }
        },
        {
          "@attributes": {
            "city": "Summerside,CA",
            "code": "YSU"
          }
        },
        {
          "@attributes": {
            "city": "Summit,US",
            "code": "UMM"
          }
        },
        {
          "@attributes": {
            "city": "Sumter,US",
            "code": "SSC"
          }
        },
        {
          "@attributes": {
            "city": "Sumy,UA",
            "code": "UMY"
          }
        },
        {
          "@attributes": {
            "city": "Sun cities,ZA",
            "code": "NTY"
          }
        },
        {
          "@attributes": {
            "city": "Sun Valley,US",
            "code": "SUN"
          }
        },
        {
          "@attributes": {
            "city": "Sundsvall,SE",
            "code": "SDL"
          }
        },
        {
          "@attributes": {
            "city": "Suntar,RU",
            "code": "SUY"
          }
        },
        {
          "@attributes": {
            "city": "Sunyani,GH",
            "code": "NYI"
          }
        },
        {
          "@attributes": {
            "city": "Superior,US",
            "code": "SUW"
          }
        },
        {
          "@attributes": {
            "city": "Sur Om,OM",
            "code": "SUH"
          }
        },
        {
          "@attributes": {
            "city": "Surabaya,ID",
            "code": "SUB"
          }
        },
        {
          "@attributes": {
            "city": "Surat,IN",
            "code": "STV"
          }
        },
        {
          "@attributes": {
            "city": "Surat Thani,TH",
            "code": "URT"
          }
        },
        {
          "@attributes": {
            "city": "Surfers Paradise,AU",
            "code": "SFP"
          }
        },
        {
          "@attributes": {
            "city": "Surgut,RU",
            "code": "SGC"
          }
        },
        {
          "@attributes": {
            "city": "Suria,PG",
            "code": "SUZ"
          }
        },
        {
          "@attributes": {
            "city": "Surigao,PH",
            "code": "SUG"
          }
        },
        {
          "@attributes": {
            "city": "Sursee,CH",
            "code": "ZKU"
          }
        },
        {
          "@attributes": {
            "city": "Susanville,US",
            "code": "SVE"
          }
        },
        {
          "@attributes": {
            "city": "Suva,FJ",
            "code": "SUV"
          }
        },
        {
          "@attributes": {
            "city": "Suwalki,PL",
            "code": "ZWK"
          }
        },
        {
          "@attributes": {
            "city": "Suwon,KR",
            "code": "SWU"
          }
        },
        {
          "@attributes": {
            "city": "Suzhou,CN",
            "code": "SZV"
          }
        },
        {
          "@attributes": {
            "city": "Sveg,SE",
            "code": "EVG"
          }
        },
        {
          "@attributes": {
            "city": "Svendborg,DK",
            "code": "QXV"
          }
        },
        {
          "@attributes": {
            "city": "Svolvaer,NO",
            "code": "SVJ"
          }
        },
        {
          "@attributes": {
            "city": "Swakopmund,NA",
            "code": "SWP"
          }
        },
        {
          "@attributes": {
            "city": "Swan Hill,AU",
            "code": "SWH"
          }
        },
        {
          "@attributes": {
            "city": "Swan River,CA",
            "code": "ZJN"
          }
        },
        {
          "@attributes": {
            "city": "Swansea,GB",
            "code": "SWS"
          }
        },
        {
          "@attributes": {
            "city": "Swift Current,CA",
            "code": "YYN"
          }
        },
        {
          "@attributes": {
            "city": "Swindon,GB",
            "code": "XWS"
          }
        },
        {
          "@attributes": {
            "city": "Swindon,GB",
            "code": "SWI"
          }
        },
        {
          "@attributes": {
            "city": "Sydney,CA",
            "code": "YQY"
          }
        },
        {
          "@attributes": {
            "city": "Sydney,AU",
            "code": "SYD"
          }
        },
        {
          "@attributes": {
            "city": "Syktyvkar,RU",
            "code": "SCW"
          }
        },
        {
          "@attributes": {
            "city": "Sylhet,BD",
            "code": "ZYL"
          }
        },
        {
          "@attributes": {
            "city": "Syracuse,US",
            "code": "SYR"
          }
        },
        {
          "@attributes": {
            "city": "Syros Island,GR",
            "code": "JSY"
          }
        },
        {
          "@attributes": {
            "city": "Szczecin,PL",
            "code": "SZZ"
          }
        },
        {
          "@attributes": {
            "city": "Szeged,HU",
            "code": "QZD"
          }
        },
        {
          "@attributes": {
            "city": "Szombathely,HU",
            "code": "ZBX"
          }
        },
        {
          "@attributes": {
            "city": "Szymany,PL",
            "code": "SZY"
          }
        },
        {
          "@attributes": {
            "city": "TAME,CO",
            "code": "TME"
          }
        },
        {
          "@attributes": {
            "city": "THUN,CH",
            "code": "ZTK"
          }
        },
        {
          "@attributes": {
            "city": "TIZIMIN,MX",
            "code": "TZM"
          }
        },
        {
          "@attributes": {
            "city": "Taba,EG",
            "code": "TCP"
          }
        },
        {
          "@attributes": {
            "city": "Tabarka,TN",
            "code": "TBJ"
          }
        },
        {
          "@attributes": {
            "city": "Tabatinga,BR",
            "code": "TBT"
          }
        },
        {
          "@attributes": {
            "city": "Tabiteuea North,KI",
            "code": "TBF"
          }
        },
        {
          "@attributes": {
            "city": "Tabiteuea South,KI",
            "code": "TSU"
          }
        },
        {
          "@attributes": {
            "city": "Tablas Island,PH",
            "code": "TBH"
          }
        },
        {
          "@attributes": {
            "city": "Tabora,TZ",
            "code": "TBO"
          }
        },
        {
          "@attributes": {
            "city": "Tabou,CI",
            "code": "TXU"
          }
        },
        {
          "@attributes": {
            "city": "Tabriz,IR",
            "code": "TBZ"
          }
        },
        {
          "@attributes": {
            "city": "Tabuaeran,KI",
            "code": "TNV"
          }
        },
        {
          "@attributes": {
            "city": "Tabuk,SA",
            "code": "TUU"
          }
        },
        {
          "@attributes": {
            "city": "Tacheng,CN",
            "code": "TCG"
          }
        },
        {
          "@attributes": {
            "city": "Tacloban,PH",
            "code": "TAC"
          }
        },
        {
          "@attributes": {
            "city": "Tacna,PE",
            "code": "TCQ"
          }
        },
        {
          "@attributes": {
            "city": "Tacoma,US",
            "code": "TIW"
          }
        },
        {
          "@attributes": {
            "city": "Tadoule Lake,CA",
            "code": "XTL"
          }
        },
        {
          "@attributes": {
            "city": "Taganrog,RU",
            "code": "TGK"
          }
        },
        {
          "@attributes": {
            "city": "Tagbilaran,PH",
            "code": "TAG"
          }
        },
        {
          "@attributes": {
            "city": "Tagula,PG",
            "code": "TGL"
          }
        },
        {
          "@attributes": {
            "city": "Taichung,TW",
            "code": "TXG"
          }
        },
        {
          "@attributes": {
            "city": "Taif,SA",
            "code": "TIF"
          }
        },
        {
          "@attributes": {
            "city": "Tainan,TW",
            "code": "TNN"
          }
        },
        {
          "@attributes": {
            "city": "Taipei,TW",
            "code": "TPE"
          }
        },
        {
          "@attributes": {
            "city": "Taitung,TW",
            "code": "TTT"
          }
        },
        {
          "@attributes": {
            "city": "Taiyuan,CN",
            "code": "TYN"
          }
        },
        {
          "@attributes": {
            "city": "Taiz,YE",
            "code": "TAI"
          }
        },
        {
          "@attributes": {
            "city": "Tak TH,TH",
            "code": "TKT"
          }
        },
        {
          "@attributes": {
            "city": "Takamatsu,JP",
            "code": "TAK"
          }
        },
        {
          "@attributes": {
            "city": "Takapoto,PF",
            "code": "TKP"
          }
        },
        {
          "@attributes": {
            "city": "Takaroa,PF",
            "code": "TKX"
          }
        },
        {
          "@attributes": {
            "city": "Takoradi,GH",
            "code": "TKD"
          }
        },
        {
          "@attributes": {
            "city": "Takotna,US",
            "code": "TCT"
          }
        },
        {
          "@attributes": {
            "city": "Taku Lodge,US",
            "code": "TKL"
          }
        },
        {
          "@attributes": {
            "city": "Talara,PE",
            "code": "TYL"
          }
        },
        {
          "@attributes": {
            "city": "Talavera De La Reina,ES",
            "code": "QWT"
          }
        },
        {
          "@attributes": {
            "city": "Talca,CL",
            "code": "TLX"
          }
        },
        {
          "@attributes": {
            "city": "Taldy Kurgan,KZ",
            "code": "TDK"
          }
        },
        {
          "@attributes": {
            "city": "Talkeetna,US",
            "code": "TKA"
          }
        },
        {
          "@attributes": {
            "city": "Talladega,US",
            "code": "ASN"
          }
        },
        {
          "@attributes": {
            "city": "Tallahassee,US",
            "code": "TLH"
          }
        },
        {
          "@attributes": {
            "city": "Tallinn,EE",
            "code": "TLL"
          }
        },
        {
          "@attributes": {
            "city": "Taloyoak,CA",
            "code": "YYH"
          }
        },
        {
          "@attributes": {
            "city": "Tamale,GH",
            "code": "TML"
          }
        },
        {
          "@attributes": {
            "city": "Tamana Island,KI",
            "code": "TMN"
          }
        },
        {
          "@attributes": {
            "city": "Tamanrasset,DZ",
            "code": "TMR"
          }
        },
        {
          "@attributes": {
            "city": "Tamarindo,CR",
            "code": "TNO"
          }
        },
        {
          "@attributes": {
            "city": "Tamatave,MG",
            "code": "TMM"
          }
        },
        {
          "@attributes": {
            "city": "Tambacounda,SN",
            "code": "TUD"
          }
        },
        {
          "@attributes": {
            "city": "Tambohorano,MG",
            "code": "WTA"
          }
        },
        {
          "@attributes": {
            "city": "Tambolaka,ID",
            "code": "TMC"
          }
        },
        {
          "@attributes": {
            "city": "Tambor,CR",
            "code": "TMU"
          }
        },
        {
          "@attributes": {
            "city": "Tambov,RU",
            "code": "TBW"
          }
        },
        {
          "@attributes": {
            "city": "Tamky,VN",
            "code": "VCL"
          }
        },
        {
          "@attributes": {
            "city": "Tampa,US",
            "code": "TPA"
          }
        },
        {
          "@attributes": {
            "city": "Tampere,FI",
            "code": "TMP"
          }
        },
        {
          "@attributes": {
            "city": "Tampico,MX",
            "code": "TAM"
          }
        },
        {
          "@attributes": {
            "city": "Tamworth,AU",
            "code": "TMW"
          }
        },
        {
          "@attributes": {
            "city": "Tan Tan,MA",
            "code": "TTA"
          }
        },
        {
          "@attributes": {
            "city": "Tana Toraja,ID",
            "code": "TTR"
          }
        },
        {
          "@attributes": {
            "city": "Tanacross,US",
            "code": "TSG"
          }
        },
        {
          "@attributes": {
            "city": "Tanah Merah,ID",
            "code": "TMH"
          }
        },
        {
          "@attributes": {
            "city": "Tanalian Point,US",
            "code": "TPO"
          }
        },
        {
          "@attributes": {
            "city": "Tanana,US",
            "code": "TAL"
          }
        },
        {
          "@attributes": {
            "city": "Tandil,AR",
            "code": "TDL"
          }
        },
        {
          "@attributes": {
            "city": "Tanega Shima,JP",
            "code": "TNE"
          }
        },
        {
          "@attributes": {
            "city": "Tanga,TZ",
            "code": "TGT"
          }
        },
        {
          "@attributes": {
            "city": "Tangalooma,AU",
            "code": "TAN"
          }
        },
        {
          "@attributes": {
            "city": "Tangier,MA",
            "code": "TNG"
          }
        },
        {
          "@attributes": {
            "city": "Tangshan,CN",
            "code": "TVS"
          }
        },
        {
          "@attributes": {
            "city": "Tanjung Manis,MY",
            "code": "TGC"
          }
        },
        {
          "@attributes": {
            "city": "Tanjung Pandan,ID",
            "code": "TJQ"
          }
        },
        {
          "@attributes": {
            "city": "Tanjung Pinang,ID",
            "code": "TNJ"
          }
        },
        {
          "@attributes": {
            "city": "Tanjung Redeb,ID",
            "code": "BEJ"
          }
        },
        {
          "@attributes": {
            "city": "Tanna,VU",
            "code": "TAH"
          }
        },
        {
          "@attributes": {
            "city": "Taormina,IT",
            "code": "TFC"
          }
        },
        {
          "@attributes": {
            "city": "Taos,US",
            "code": "TSM"
          }
        },
        {
          "@attributes": {
            "city": "Tapachula,MX",
            "code": "TAP"
          }
        },
        {
          "@attributes": {
            "city": "Tapini,PG",
            "code": "TPI"
          }
        },
        {
          "@attributes": {
            "city": "Tarakan,ID",
            "code": "TRK"
          }
        },
        {
          "@attributes": {
            "city": "Taramajima,JP",
            "code": "TRA"
          }
        },
        {
          "@attributes": {
            "city": "Taranto,IT",
            "code": "TAR"
          }
        },
        {
          "@attributes": {
            "city": "Tarapaca,CO",
            "code": "TCD"
          }
        },
        {
          "@attributes": {
            "city": "Tarapoa,EC",
            "code": "TPC"
          }
        },
        {
          "@attributes": {
            "city": "Tarapoto,PE",
            "code": "TPP"
          }
        },
        {
          "@attributes": {
            "city": "Tarawa,KI",
            "code": "TRW"
          }
        },
        {
          "@attributes": {
            "city": "Taraz,KZ",
            "code": "DMB"
          }
        },
        {
          "@attributes": {
            "city": "Tarbes,FR",
            "code": "XTB"
          }
        },
        {
          "@attributes": {
            "city": "Taree,AU",
            "code": "TRO"
          }
        },
        {
          "@attributes": {
            "city": "Targovishte,BG",
            "code": "TGV"
          }
        },
        {
          "@attributes": {
            "city": "Tari,PG",
            "code": "TIZ"
          }
        },
        {
          "@attributes": {
            "city": "Tarija,BO",
            "code": "TJA"
          }
        },
        {
          "@attributes": {
            "city": "Tarko Sale,RU",
            "code": "TQL"
          }
        },
        {
          "@attributes": {
            "city": "Tarragona,ES",
            "code": "QGN"
          }
        },
        {
          "@attributes": {
            "city": "Tartous,SY",
            "code": "QTR"
          }
        },
        {
          "@attributes": {
            "city": "Tartu,EE",
            "code": "TAY"
          }
        },
        {
          "@attributes": {
            "city": "Taschereau,CA",
            "code": "XFO"
          }
        },
        {
          "@attributes": {
            "city": "Tashkent,UZ",
            "code": "TAS"
          }
        },
        {
          "@attributes": {
            "city": "Tasiilaq,GL",
            "code": "AGM"
          }
        },
        {
          "@attributes": {
            "city": "Tasiujaq,CA",
            "code": "YTQ"
          }
        },
        {
          "@attributes": {
            "city": "Tatakoto,PF",
            "code": "TKV"
          }
        },
        {
          "@attributes": {
            "city": "Tatalina,US",
            "code": "TLJ"
          }
        },
        {
          "@attributes": {
            "city": "Tatitlek,US",
            "code": "TEK"
          }
        },
        {
          "@attributes": {
            "city": "Taubate,BR",
            "code": "QHP"
          }
        },
        {
          "@attributes": {
            "city": "Taupo,NZ",
            "code": "TUO"
          }
        },
        {
          "@attributes": {
            "city": "Tauramena,CO",
            "code": "TAU"
          }
        },
        {
          "@attributes": {
            "city": "Tauranga,NZ",
            "code": "TRG"
          }
        },
        {
          "@attributes": {
            "city": "Taveuni,FJ",
            "code": "TVU"
          }
        },
        {
          "@attributes": {
            "city": "Tavoy,MM",
            "code": "TVY"
          }
        },
        {
          "@attributes": {
            "city": "Tawau,MY",
            "code": "TWU"
          }
        },
        {
          "@attributes": {
            "city": "Taylor,US",
            "code": "TWE"
          }
        },
        {
          "@attributes": {
            "city": "Taylor,US",
            "code": "TYZ"
          }
        },
        {
          "@attributes": {
            "city": "Tbessa,DZ",
            "code": "TEE"
          }
        },
        {
          "@attributes": {
            "city": "Tbilisi,GE",
            "code": "TBS"
          }
        },
        {
          "@attributes": {
            "city": "Tchibanga,GA",
            "code": "TCH"
          }
        },
        {
          "@attributes": {
            "city": "Tchien,LR",
            "code": "THC"
          }
        },
        {
          "@attributes": {
            "city": "Te Anau,NZ",
            "code": "TEU"
          }
        },
        {
          "@attributes": {
            "city": "Tefe,BR",
            "code": "TFF"
          }
        },
        {
          "@attributes": {
            "city": "Tegucigalpa,HN",
            "code": "TGU"
          }
        },
        {
          "@attributes": {
            "city": "Tehachapi,US",
            "code": "TSP"
          }
        },
        {
          "@attributes": {
            "city": "Teheran,IR",
            "code": "THR"
          }
        },
        {
          "@attributes": {
            "city": "Tehuacan,MX",
            "code": "TCN"
          }
        },
        {
          "@attributes": {
            "city": "Teixeira De Freitas,BR",
            "code": "TXF"
          }
        },
        {
          "@attributes": {
            "city": "Tekirdag,TR",
            "code": "TEQ"
          }
        },
        {
          "@attributes": {
            "city": "Tel Aviv,IL",
            "code": "TLV"
          }
        },
        {
          "@attributes": {
            "city": "Tela,HN",
            "code": "TEA"
          }
        },
        {
          "@attributes": {
            "city": "Telefomin,PG",
            "code": "TFM"
          }
        },
        {
          "@attributes": {
            "city": "Telemaco Borba,BR",
            "code": "TEC"
          }
        },
        {
          "@attributes": {
            "city": "Telfer,AU",
            "code": "TEF"
          }
        },
        {
          "@attributes": {
            "city": "Telida,US",
            "code": "TLF"
          }
        },
        {
          "@attributes": {
            "city": "Teller,US",
            "code": "TLA"
          }
        },
        {
          "@attributes": {
            "city": "Telluride,US",
            "code": "TEX"
          }
        },
        {
          "@attributes": {
            "city": "Teminabuan,ID",
            "code": "TXM"
          }
        },
        {
          "@attributes": {
            "city": "Temora,AU",
            "code": "TEM"
          }
        },
        {
          "@attributes": {
            "city": "Temple,US",
            "code": "TPL"
          }
        },
        {
          "@attributes": {
            "city": "Temuco,CL",
            "code": "ZCO"
          }
        },
        {
          "@attributes": {
            "city": "Tena,EC",
            "code": "TNW"
          }
        },
        {
          "@attributes": {
            "city": "Tenakee,US",
            "code": "TKE"
          }
        },
        {
          "@attributes": {
            "city": "Tenerife,ES",
            "code": "TCI"
          }
        },
        {
          "@attributes": {
            "city": "Tengchong,CN",
            "code": "TCZ"
          }
        },
        {
          "@attributes": {
            "city": "Tenkodogo,BF",
            "code": "TEG"
          }
        },
        {
          "@attributes": {
            "city": "Tennant Creek,AU",
            "code": "TCA"
          }
        },
        {
          "@attributes": {
            "city": "Teofilo Otoni,BR",
            "code": "TFL"
          }
        },
        {
          "@attributes": {
            "city": "Tepic,MX",
            "code": "TPQ"
          }
        },
        {
          "@attributes": {
            "city": "Teptep,PG",
            "code": "TEP"
          }
        },
        {
          "@attributes": {
            "city": "Teramo,IT",
            "code": "QEA"
          }
        },
        {
          "@attributes": {
            "city": "Terapo,PG",
            "code": "TEO"
          }
        },
        {
          "@attributes": {
            "city": "Terceira,PT",
            "code": "TER"
          }
        },
        {
          "@attributes": {
            "city": "Teresina,BR",
            "code": "THE"
          }
        },
        {
          "@attributes": {
            "city": "Terezopolis,BR",
            "code": "QHT"
          }
        },
        {
          "@attributes": {
            "city": "Termez,UZ",
            "code": "TMJ"
          }
        },
        {
          "@attributes": {
            "city": "Ternate,ID",
            "code": "TTE"
          }
        },
        {
          "@attributes": {
            "city": "Ternopol,UA",
            "code": "TNL"
          }
        },
        {
          "@attributes": {
            "city": "Terrace,CA",
            "code": "YXT"
          }
        },
        {
          "@attributes": {
            "city": "Terrace Bay,CA",
            "code": "YTJ"
          }
        },
        {
          "@attributes": {
            "city": "Terre Haute,US",
            "code": "HUF"
          }
        },
        {
          "@attributes": {
            "city": "Terrell,US",
            "code": "TRL"
          }
        },
        {
          "@attributes": {
            "city": "Teruel,ES",
            "code": "TEJ"
          }
        },
        {
          "@attributes": {
            "city": "Tessenei,ER",
            "code": "TES"
          }
        },
        {
          "@attributes": {
            "city": "Tete,MZ",
            "code": "TET"
          }
        },
        {
          "@attributes": {
            "city": "Tete A La Baleine,CA",
            "code": "ZTB"
          }
        },
        {
          "@attributes": {
            "city": "Tetebedi,PG",
            "code": "TDB"
          }
        },
        {
          "@attributes": {
            "city": "Teterboro,US",
            "code": "TEB"
          }
        },
        {
          "@attributes": {
            "city": "Tetlin,US",
            "code": "TEH"
          }
        },
        {
          "@attributes": {
            "city": "Tetuan,MA",
            "code": "TTU"
          }
        },
        {
          "@attributes": {
            "city": "Texarkana,US",
            "code": "TXK"
          }
        },
        {
          "@attributes": {
            "city": "Tezpur,IN",
            "code": "TEZ"
          }
        },
        {
          "@attributes": {
            "city": "Tezu,IN",
            "code": "TEI"
          }
        },
        {
          "@attributes": {
            "city": "Thaba Nchu,ZA",
            "code": "TCU"
          }
        },
        {
          "@attributes": {
            "city": "Thaba Tseka,LS",
            "code": "THB"
          }
        },
        {
          "@attributes": {
            "city": "Thalwil,CH",
            "code": "ZKV"
          }
        },
        {
          "@attributes": {
            "city": "Thames,NZ",
            "code": "TMZ"
          }
        },
        {
          "@attributes": {
            "city": "Thangool,AU",
            "code": "THG"
          }
        },
        {
          "@attributes": {
            "city": "Thanh Hoa,VN",
            "code": "THD"
          }
        },
        {
          "@attributes": {
            "city": "Thanjavur,IN",
            "code": "TJV"
          }
        },
        {
          "@attributes": {
            "city": "Thargomindah,AU",
            "code": "XTG"
          }
        },
        {
          "@attributes": {
            "city": "The Dalles,US",
            "code": "DLS"
          }
        },
        {
          "@attributes": {
            "city": "The Hague,NL",
            "code": "HAG"
          }
        },
        {
          "@attributes": {
            "city": "The Pas,CA",
            "code": "YQD"
          }
        },
        {
          "@attributes": {
            "city": "Thermal,US",
            "code": "TRM"
          }
        },
        {
          "@attributes": {
            "city": "Thermopolis,US",
            "code": "THP"
          }
        },
        {
          "@attributes": {
            "city": "Thessaloniki,GR",
            "code": "SKG"
          }
        },
        {
          "@attributes": {
            "city": "Thicket Portage,CA",
            "code": "YTD"
          }
        },
        {
          "@attributes": {
            "city": "Thief River Falls,US",
            "code": "TVF"
          }
        },
        {
          "@attributes": {
            "city": "Thimarafushi,MV",
            "code": "TMF"
          }
        },
        {
          "@attributes": {
            "city": "Thingeyri,IS",
            "code": "TEY"
          }
        },
        {
          "@attributes": {
            "city": "Thionville,FR",
            "code": "XTH"
          }
        },
        {
          "@attributes": {
            "city": "Thira Island,GR",
            "code": "JTR"
          }
        },
        {
          "@attributes": {
            "city": "Thirsk,GB",
            "code": "XTK"
          }
        },
        {
          "@attributes": {
            "city": "Thiruvananthapuram,IN",
            "code": "TRV"
          }
        },
        {
          "@attributes": {
            "city": "Thisted,DK",
            "code": "TED"
          }
        },
        {
          "@attributes": {
            "city": "Thohoyandou,ZA",
            "code": "THY"
          }
        },
        {
          "@attributes": {
            "city": "Thomasville,US",
            "code": "TVI"
          }
        },
        {
          "@attributes": {
            "city": "Thompson,CA",
            "code": "YTH"
          }
        },
        {
          "@attributes": {
            "city": "Thorne Bay,US",
            "code": "KTB"
          }
        },
        {
          "@attributes": {
            "city": "Thorshofn,IS",
            "code": "THO"
          }
        },
        {
          "@attributes": {
            "city": "Thredbo,AU",
            "code": "QTH"
          }
        },
        {
          "@attributes": {
            "city": "Three Rivers,US",
            "code": "HAI"
          }
        },
        {
          "@attributes": {
            "city": "Thunder Bay,CA",
            "code": "YQT"
          }
        },
        {
          "@attributes": {
            "city": "Thursday Island,AU",
            "code": "TIS"
          }
        },
        {
          "@attributes": {
            "city": "Tianjin,CN",
            "code": "TSN"
          }
        },
        {
          "@attributes": {
            "city": "Tianmen,CN",
            "code": "TMV"
          }
        },
        {
          "@attributes": {
            "city": "Tianshui,CN",
            "code": "THQ"
          }
        },
        {
          "@attributes": {
            "city": "Tidjikja,MR",
            "code": "TIY"
          }
        },
        {
          "@attributes": {
            "city": "Tieling,CN",
            "code": "TTV"
          }
        },
        {
          "@attributes": {
            "city": "Tierp,SE",
            "code": "XFU"
          }
        },
        {
          "@attributes": {
            "city": "Tifton,US",
            "code": "TMA"
          }
        },
        {
          "@attributes": {
            "city": "Tiga,NC",
            "code": "TGJ"
          }
        },
        {
          "@attributes": {
            "city": "Tignes,FR",
            "code": "TGF"
          }
        },
        {
          "@attributes": {
            "city": "Tijuana,MX",
            "code": "TIJ"
          }
        },
        {
          "@attributes": {
            "city": "Tikal,GT",
            "code": "TKM"
          }
        },
        {
          "@attributes": {
            "city": "Tikehau,PF",
            "code": "TIH"
          }
        },
        {
          "@attributes": {
            "city": "Tiksi,RU",
            "code": "IKS"
          }
        },
        {
          "@attributes": {
            "city": "Timaru,NZ",
            "code": "TIU"
          }
        },
        {
          "@attributes": {
            "city": "Timika,ID",
            "code": "TIM"
          }
        },
        {
          "@attributes": {
            "city": "Timisoara,RO",
            "code": "TSR"
          }
        },
        {
          "@attributes": {
            "city": "Timmins,CA",
            "code": "YTS"
          }
        },
        {
          "@attributes": {
            "city": "Tin cities,US",
            "code": "TNC"
          }
        },
        {
          "@attributes": {
            "city": "Tindouf,DZ",
            "code": "TIN"
          }
        },
        {
          "@attributes": {
            "city": "Tingo Maria,PE",
            "code": "TGI"
          }
        },
        {
          "@attributes": {
            "city": "Tingwon,PG",
            "code": "TIG"
          }
        },
        {
          "@attributes": {
            "city": "Tinian,MP",
            "code": "TIQ"
          }
        },
        {
          "@attributes": {
            "city": "Tioman,MY",
            "code": "TOD"
          }
        },
        {
          "@attributes": {
            "city": "Tippi,ET",
            "code": "TIE"
          }
        },
        {
          "@attributes": {
            "city": "Tirana,AL",
            "code": "TIA"
          }
        },
        {
          "@attributes": {
            "city": "Tiree,GB",
            "code": "TRE"
          }
        },
        {
          "@attributes": {
            "city": "Tirgu Mures,RO",
            "code": "TGM"
          }
        },
        {
          "@attributes": {
            "city": "Tiruchirappali,IN",
            "code": "TRZ"
          }
        },
        {
          "@attributes": {
            "city": "Tirupati,IN",
            "code": "TIR"
          }
        },
        {
          "@attributes": {
            "city": "Titusville,US",
            "code": "TIX"
          }
        },
        {
          "@attributes": {
            "city": "Tivat,ME",
            "code": "TIV"
          }
        },
        {
          "@attributes": {
            "city": "Tlemcen,DZ",
            "code": "TLM"
          }
        },
        {
          "@attributes": {
            "city": "Tobago,TT",
            "code": "TAB"
          }
        },
        {
          "@attributes": {
            "city": "Tobolsk,RU",
            "code": "TOX"
          }
        },
        {
          "@attributes": {
            "city": "Tobruk,LY",
            "code": "TOB"
          }
        },
        {
          "@attributes": {
            "city": "Toccoa,US",
            "code": "TOC"
          }
        },
        {
          "@attributes": {
            "city": "Tocumwal,AU",
            "code": "TCW"
          }
        },
        {
          "@attributes": {
            "city": "Tofino,CA",
            "code": "YAZ"
          }
        },
        {
          "@attributes": {
            "city": "Togiak,US",
            "code": "TOG"
          }
        },
        {
          "@attributes": {
            "city": "Tok Ak,US",
            "code": "TKJ"
          }
        },
        {
          "@attributes": {
            "city": "Tokat,TR",
            "code": "TJK"
          }
        },
        {
          "@attributes": {
            "city": "Tokeen,US",
            "code": "TKI"
          }
        },
        {
          "@attributes": {
            "city": "Toksook Bay,US",
            "code": "OOK"
          }
        },
        {
          "@attributes": {
            "city": "Tokunoshima,JP",
            "code": "TKN"
          }
        },
        {
          "@attributes": {
            "city": "Tokushima,JP",
            "code": "TKS"
          }
        },
        {
          "@attributes": {
            "city": "Tokyo,JP",
            "code": "TYO"
          }
        },
        {
          "@attributes": {
            "city": "Tol PG,PG",
            "code": "TLO"
          }
        },
        {
          "@attributes": {
            "city": "Toledo,ES",
            "code": "XTJ"
          }
        },
        {
          "@attributes": {
            "city": "Toledo,US",
            "code": "TOL"
          }
        },
        {
          "@attributes": {
            "city": "Toledo,BR",
            "code": "TOW"
          }
        },
        {
          "@attributes": {
            "city": "Tolitoli,ID",
            "code": "TLI"
          }
        },
        {
          "@attributes": {
            "city": "Tolu,CO",
            "code": "TLU"
          }
        },
        {
          "@attributes": {
            "city": "Toluca,MX",
            "code": "TLC"
          }
        },
        {
          "@attributes": {
            "city": "Tom Price,AU",
            "code": "TPR"
          }
        },
        {
          "@attributes": {
            "city": "Tomakomai,JP",
            "code": "QTM"
          }
        },
        {
          "@attributes": {
            "city": "Tomanggong,MY",
            "code": "TMG"
          }
        },
        {
          "@attributes": {
            "city": "Tombouctou,ML",
            "code": "TOM"
          }
        },
        {
          "@attributes": {
            "city": "Toms River,US",
            "code": "MJX"
          }
        },
        {
          "@attributes": {
            "city": "Tomsk,RU",
            "code": "TOF"
          }
        },
        {
          "@attributes": {
            "city": "Tongcheng,CN",
            "code": "TGX"
          }
        },
        {
          "@attributes": {
            "city": "Tongliao,CN",
            "code": "TGO"
          }
        },
        {
          "@attributes": {
            "city": "Tongoa,VU",
            "code": "TGH"
          }
        },
        {
          "@attributes": {
            "city": "Tongren,CN",
            "code": "TEN"
          }
        },
        {
          "@attributes": {
            "city": "Tongxiang,CN",
            "code": "TVX"
          }
        },
        {
          "@attributes": {
            "city": "Tonopah,US",
            "code": "TPH"
          }
        },
        {
          "@attributes": {
            "city": "Tonsberg,NO",
            "code": "XKW"
          }
        },
        {
          "@attributes": {
            "city": "Tonu,PG",
            "code": "TON"
          }
        },
        {
          "@attributes": {
            "city": "Toowoomba,AU",
            "code": "TWB"
          }
        },
        {
          "@attributes": {
            "city": "Topeka,US",
            "code": "TOP"
          }
        },
        {
          "@attributes": {
            "city": "Torokina,PG",
            "code": "TOK"
          }
        },
        {
          "@attributes": {
            "city": "Toronto,CA",
            "code": "YTO"
          }
        },
        {
          "@attributes": {
            "city": "Torrance,US",
            "code": "TOA"
          }
        },
        {
          "@attributes": {
            "city": "Torremolinos,ES",
            "code": "UTL"
          }
        },
        {
          "@attributes": {
            "city": "Torreon,MX",
            "code": "TRC"
          }
        },
        {
          "@attributes": {
            "city": "Torres,VU",
            "code": "TOH"
          }
        },
        {
          "@attributes": {
            "city": "Torres,BR",
            "code": "TSQ"
          }
        },
        {
          "@attributes": {
            "city": "Torrington,US",
            "code": "TOR"
          }
        },
        {
          "@attributes": {
            "city": "Torsby,SE",
            "code": "TYF"
          }
        },
        {
          "@attributes": {
            "city": "Tortola,VG",
            "code": "TOV"
          }
        },
        {
          "@attributes": {
            "city": "Tortoli,IT",
            "code": "TTB"
          }
        },
        {
          "@attributes": {
            "city": "Tortuguero,CR",
            "code": "TTQ"
          }
        },
        {
          "@attributes": {
            "city": "Tottenham,GB",
            "code": "TTK"
          }
        },
        {
          "@attributes": {
            "city": "Tottori,JP",
            "code": "TTJ"
          }
        },
        {
          "@attributes": {
            "city": "Touba,CI",
            "code": "TOZ"
          }
        },
        {
          "@attributes": {
            "city": "Touggourt,DZ",
            "code": "TGR"
          }
        },
        {
          "@attributes": {
            "city": "Touho,NC",
            "code": "TOU"
          }
        },
        {
          "@attributes": {
            "city": "Toulon,FR",
            "code": "TLN"
          }
        },
        {
          "@attributes": {
            "city": "Toulouse,FR",
            "code": "TLS"
          }
        },
        {
          "@attributes": {
            "city": "Tournai,BE",
            "code": "ZGQ"
          }
        },
        {
          "@attributes": {
            "city": "Tours,FR",
            "code": "TUF"
          }
        },
        {
          "@attributes": {
            "city": "Toussus Le Noble,FR",
            "code": "TNF"
          }
        },
        {
          "@attributes": {
            "city": "Townsville,AU",
            "code": "TSV"
          }
        },
        {
          "@attributes": {
            "city": "Toyama,JP",
            "code": "TOY"
          }
        },
        {
          "@attributes": {
            "city": "Tozeur,TN",
            "code": "TOE"
          }
        },
        {
          "@attributes": {
            "city": "Trabzon,TR",
            "code": "TZX"
          }
        },
        {
          "@attributes": {
            "city": "Trang,TH",
            "code": "TST"
          }
        },
        {
          "@attributes": {
            "city": "Trapani,IT",
            "code": "TPS"
          }
        },
        {
          "@attributes": {
            "city": "Traralgon,AU",
            "code": "TGN"
          }
        },
        {
          "@attributes": {
            "city": "Trat,TH",
            "code": "TDX"
          }
        },
        {
          "@attributes": {
            "city": "Traverse cities,US",
            "code": "TVC"
          }
        },
        {
          "@attributes": {
            "city": "Treasure Cay,BS",
            "code": "TCB"
          }
        },
        {
          "@attributes": {
            "city": "Trelew,AR",
            "code": "REL"
          }
        },
        {
          "@attributes": {
            "city": "Trento,IT",
            "code": "ZIA"
          }
        },
        {
          "@attributes": {
            "city": "Trenton,CA",
            "code": "YTR"
          }
        },
        {
          "@attributes": {
            "city": "Trenton,US",
            "code": "TTN"
          }
        },
        {
          "@attributes": {
            "city": "Tres Arroyos,AR",
            "code": "OYO"
          }
        },
        {
          "@attributes": {
            "city": "Tres Cruces,AR",
            "code": "TCV"
          }
        },
        {
          "@attributes": {
            "city": "Tres Lagoas,BR",
            "code": "TJL"
          }
        },
        {
          "@attributes": {
            "city": "Tres Rios,BR",
            "code": "QIH"
          }
        },
        {
          "@attributes": {
            "city": "Treviso,IT",
            "code": "TSF"
          }
        },
        {
          "@attributes": {
            "city": "Trier,DE",
            "code": "ZQF"
          }
        },
        {
          "@attributes": {
            "city": "Trieste,IT",
            "code": "TRS"
          }
        },
        {
          "@attributes": {
            "city": "Trincomalee,LK",
            "code": "TRR"
          }
        },
        {
          "@attributes": {
            "city": "Trinidad,CU",
            "code": "TND"
          }
        },
        {
          "@attributes": {
            "city": "Trinidad,US",
            "code": "TAD"
          }
        },
        {
          "@attributes": {
            "city": "Trinidad,BO",
            "code": "TDD"
          }
        },
        {
          "@attributes": {
            "city": "Tripoli,LY",
            "code": "TIP"
          }
        },
        {
          "@attributes": {
            "city": "Trois Rivieres,CA",
            "code": "YRQ"
          }
        },
        {
          "@attributes": {
            "city": "Trollhattan,SE",
            "code": "THN"
          }
        },
        {
          "@attributes": {
            "city": "Trombetas,BR",
            "code": "TMT"
          }
        },
        {
          "@attributes": {
            "city": "Tromso,NO",
            "code": "TOS"
          }
        },
        {
          "@attributes": {
            "city": "Trona,US",
            "code": "TRH"
          }
        },
        {
          "@attributes": {
            "city": "Trondheim,NO",
            "code": "TRD"
          }
        },
        {
          "@attributes": {
            "city": "Troutdale,US",
            "code": "TTD"
          }
        },
        {
          "@attributes": {
            "city": "Troy,US",
            "code": "TOI"
          }
        },
        {
          "@attributes": {
            "city": "Troyes,FR",
            "code": "QYR"
          }
        },
        {
          "@attributes": {
            "city": "Truckee,US",
            "code": "TKF"
          }
        },
        {
          "@attributes": {
            "city": "Trujillo,PE",
            "code": "TRU"
          }
        },
        {
          "@attributes": {
            "city": "Truk,FM",
            "code": "TKK"
          }
        },
        {
          "@attributes": {
            "city": "Truro,CA",
            "code": "XLZ"
          }
        },
        {
          "@attributes": {
            "city": "Truscott Mungalalu,AU",
            "code": "TTX"
          }
        },
        {
          "@attributes": {
            "city": "Tsaratanana,MG",
            "code": "TTS"
          }
        },
        {
          "@attributes": {
            "city": "Tshikapa,CD",
            "code": "TSH"
          }
        },
        {
          "@attributes": {
            "city": "Tsiroanomandidy,MG",
            "code": "WTS"
          }
        },
        {
          "@attributes": {
            "city": "Tsu Jp,JP",
            "code": "QTY"
          }
        },
        {
          "@attributes": {
            "city": "Tsuen Wan,HK",
            "code": "ZTW"
          }
        },
        {
          "@attributes": {
            "city": "Tsukuba,JP",
            "code": "XEI"
          }
        },
        {
          "@attributes": {
            "city": "Tsumeb,NA",
            "code": "TSB"
          }
        },
        {
          "@attributes": {
            "city": "Tsushima,JP",
            "code": "TSJ"
          }
        },
        {
          "@attributes": {
            "city": "Tuba cities,US",
            "code": "TBC"
          }
        },
        {
          "@attributes": {
            "city": "Tubarao,BR",
            "code": "ZHX"
          }
        },
        {
          "@attributes": {
            "city": "Tubuai Island,PF",
            "code": "TUB"
          }
        },
        {
          "@attributes": {
            "city": "Tububil,PG",
            "code": "TBG"
          }
        },
        {
          "@attributes": {
            "city": "Tucson,US",
            "code": "TUS"
          }
        },
        {
          "@attributes": {
            "city": "Tucuma,BR",
            "code": "TUZ"
          }
        },
        {
          "@attributes": {
            "city": "Tucuman,AR",
            "code": "TUC"
          }
        },
        {
          "@attributes": {
            "city": "Tucumcari,US",
            "code": "TCC"
          }
        },
        {
          "@attributes": {
            "city": "Tucupita,VE",
            "code": "TUV"
          }
        },
        {
          "@attributes": {
            "city": "Tucurui,BR",
            "code": "TUR"
          }
        },
        {
          "@attributes": {
            "city": "Tudela,ES",
            "code": "EEL"
          }
        },
        {
          "@attributes": {
            "city": "Tuebingen,DE",
            "code": "ZQH"
          }
        },
        {
          "@attributes": {
            "city": "Tufi,PG",
            "code": "TFI"
          }
        },
        {
          "@attributes": {
            "city": "Tuguegarao,PH",
            "code": "TUG"
          }
        },
        {
          "@attributes": {
            "city": "Tuktoyaktuk,CA",
            "code": "YUB"
          }
        },
        {
          "@attributes": {
            "city": "Tulare,US",
            "code": "TLR"
          }
        },
        {
          "@attributes": {
            "city": "Tulcan,EC",
            "code": "TUA"
          }
        },
        {
          "@attributes": {
            "city": "Tulcea,RO",
            "code": "TCE"
          }
        },
        {
          "@attributes": {
            "city": "Tulear,MG",
            "code": "TLE"
          }
        },
        {
          "@attributes": {
            "city": "Tuli Block,BW",
            "code": "TLD"
          }
        },
        {
          "@attributes": {
            "city": "Tulle,FR",
            "code": "XTU"
          }
        },
        {
          "@attributes": {
            "city": "Tulsa,US",
            "code": "TUL"
          }
        },
        {
          "@attributes": {
            "city": "Tuluksak,US",
            "code": "TLT"
          }
        },
        {
          "@attributes": {
            "city": "Tulum,MX",
            "code": "TUY"
          }
        },
        {
          "@attributes": {
            "city": "Tumaco,CO",
            "code": "TCO"
          }
        },
        {
          "@attributes": {
            "city": "Tumbes,PE",
            "code": "TBP"
          }
        },
        {
          "@attributes": {
            "city": "Tumbler Ridge,CA",
            "code": "TUX"
          }
        },
        {
          "@attributes": {
            "city": "Tumut,AU",
            "code": "TUM"
          }
        },
        {
          "@attributes": {
            "city": "Tunica,US",
            "code": "UTM"
          }
        },
        {
          "@attributes": {
            "city": "Tunis,TN",
            "code": "TUN"
          }
        },
        {
          "@attributes": {
            "city": "Tuntatuliak,US",
            "code": "WTL"
          }
        },
        {
          "@attributes": {
            "city": "Tununak,US",
            "code": "TNK"
          }
        },
        {
          "@attributes": {
            "city": "Tunxi,CN",
            "code": "TXN"
          }
        },
        {
          "@attributes": {
            "city": "Tupelo,US",
            "code": "TUP"
          }
        },
        {
          "@attributes": {
            "city": "Turaif,SA",
            "code": "TUI"
          }
        },
        {
          "@attributes": {
            "city": "Turbat,PK",
            "code": "TUK"
          }
        },
        {
          "@attributes": {
            "city": "Turbo,CO",
            "code": "TRB"
          }
        },
        {
          "@attributes": {
            "city": "Turin,IT",
            "code": "TRN"
          }
        },
        {
          "@attributes": {
            "city": "Turkmanbashi,TM",
            "code": "KRW"
          }
        },
        {
          "@attributes": {
            "city": "Turkmenabad,TM",
            "code": "CRZ"
          }
        },
        {
          "@attributes": {
            "city": "Turku,FI",
            "code": "TKU"
          }
        },
        {
          "@attributes": {
            "city": "Turpan,CN",
            "code": "TLQ"
          }
        },
        {
          "@attributes": {
            "city": "Turtle Island,FJ",
            "code": "TTL"
          }
        },
        {
          "@attributes": {
            "city": "Turukhansk,RU",
            "code": "THX"
          }
        },
        {
          "@attributes": {
            "city": "Tuscaloosa,US",
            "code": "TCL"
          }
        },
        {
          "@attributes": {
            "city": "Tuskegee,US",
            "code": "TGE"
          }
        },
        {
          "@attributes": {
            "city": "Tuticorin,IN",
            "code": "TCR"
          }
        },
        {
          "@attributes": {
            "city": "Tuxtla Gutierrez,MX",
            "code": "TGZ"
          }
        },
        {
          "@attributes": {
            "city": "Tuy Hoa,VN",
            "code": "TBB"
          }
        },
        {
          "@attributes": {
            "city": "Tuzla,BA",
            "code": "TZL"
          }
        },
        {
          "@attributes": {
            "city": "Tver,RU",
            "code": "KLD"
          }
        },
        {
          "@attributes": {
            "city": "Twenty Nine Palms,US",
            "code": "TNP"
          }
        },
        {
          "@attributes": {
            "city": "Twin Falls,US",
            "code": "TWF"
          }
        },
        {
          "@attributes": {
            "city": "Twin Hills,US",
            "code": "TWA"
          }
        },
        {
          "@attributes": {
            "city": "Tyler,US",
            "code": "TYR"
          }
        },
        {
          "@attributes": {
            "city": "Tynset,NO",
            "code": "ZMX"
          }
        },
        {
          "@attributes": {
            "city": "Tyonek,US",
            "code": "TYE"
          }
        },
        {
          "@attributes": {
            "city": "Tyumen,RU",
            "code": "TJM"
          }
        },
        {
          "@attributes": {
            "city": "Tzaneen,ZA",
            "code": "LTA"
          }
        },
        {
          "@attributes": {
            "city": "U Tapao,TH",
            "code": "UTP"
          }
        },
        {
          "@attributes": {
            "city": "UPLAND,US",
            "code": "CCB"
          }
        },
        {
          "@attributes": {
            "city": "UZICE,RS",
            "code": "UZC"
          }
        },
        {
          "@attributes": {
            "city": "Ua Huka,PF",
            "code": "UAH"
          }
        },
        {
          "@attributes": {
            "city": "Ua Pou,PF",
            "code": "UAP"
          }
        },
        {
          "@attributes": {
            "city": "Ubatuba,BR",
            "code": "UBT"
          }
        },
        {
          "@attributes": {
            "city": "Ube Jp,JP",
            "code": "UBJ"
          }
        },
        {
          "@attributes": {
            "city": "Uberaba,BR",
            "code": "UBA"
          }
        },
        {
          "@attributes": {
            "city": "Uberlandia,BR",
            "code": "UDI"
          }
        },
        {
          "@attributes": {
            "city": "Ubon Ratchathani,TH",
            "code": "UBP"
          }
        },
        {
          "@attributes": {
            "city": "Udaipur,IN",
            "code": "UDR"
          }
        },
        {
          "@attributes": {
            "city": "Uden,NL",
            "code": "UDE"
          }
        },
        {
          "@attributes": {
            "city": "Udine,IT",
            "code": "UDN"
          }
        },
        {
          "@attributes": {
            "city": "Udon Thani,TH",
            "code": "UTH"
          }
        },
        {
          "@attributes": {
            "city": "Ufa RU,RU",
            "code": "UFA"
          }
        },
        {
          "@attributes": {
            "city": "Uganik,US",
            "code": "UGI"
          }
        },
        {
          "@attributes": {
            "city": "Uherske Hradiste,CZ",
            "code": "UHE"
          }
        },
        {
          "@attributes": {
            "city": "Uige,AO",
            "code": "UGO"
          }
        },
        {
          "@attributes": {
            "city": "Ujung Pandang,ID",
            "code": "UPG"
          }
        },
        {
          "@attributes": {
            "city": "Ukhta,RU",
            "code": "UCT"
          }
        },
        {
          "@attributes": {
            "city": "Ukiah,US",
            "code": "UKI"
          }
        },
        {
          "@attributes": {
            "city": "Ukunda,KE",
            "code": "UKA"
          }
        },
        {
          "@attributes": {
            "city": "Ulaanbaatar,MN",
            "code": "ULN"
          }
        },
        {
          "@attributes": {
            "city": "Ulan Ude,RU",
            "code": "UUD"
          }
        },
        {
          "@attributes": {
            "city": "Ulanhot,CN",
            "code": "HLH"
          }
        },
        {
          "@attributes": {
            "city": "Ulei,VU",
            "code": "ULB"
          }
        },
        {
          "@attributes": {
            "city": "Ulm,DE",
            "code": "QUL"
          }
        },
        {
          "@attributes": {
            "city": "Ulsan,KR",
            "code": "USN"
          }
        },
        {
          "@attributes": {
            "city": "Ulundi,ZA",
            "code": "ULD"
          }
        },
        {
          "@attributes": {
            "city": "Ulyanovsk,RU",
            "code": "ULY"
          }
        },
        {
          "@attributes": {
            "city": "Umea,SE",
            "code": "UME"
          }
        },
        {
          "@attributes": {
            "city": "Umiat,US",
            "code": "UMT"
          }
        },
        {
          "@attributes": {
            "city": "Umiujaq,CA",
            "code": "YUD"
          }
        },
        {
          "@attributes": {
            "city": "Umnak Island,US",
            "code": "UMB"
          }
        },
        {
          "@attributes": {
            "city": "Umtata,ZA",
            "code": "UTT"
          }
        },
        {
          "@attributes": {
            "city": "Umuarama,BR",
            "code": "UMU"
          }
        },
        {
          "@attributes": {
            "city": "Una BR,BR",
            "code": "UNA"
          }
        },
        {
          "@attributes": {
            "city": "Unalakleet,US",
            "code": "UNK"
          }
        },
        {
          "@attributes": {
            "city": "Union Island,VC",
            "code": "UNI"
          }
        },
        {
          "@attributes": {
            "city": "University Oxford,US",
            "code": "UOX"
          }
        },
        {
          "@attributes": {
            "city": "Unna,DE",
            "code": "ZQI"
          }
        },
        {
          "@attributes": {
            "city": "Unst,GB",
            "code": "UNT"
          }
        },
        {
          "@attributes": {
            "city": "Upernavik,GL",
            "code": "JUV"
          }
        },
        {
          "@attributes": {
            "city": "Upernavik Kujalleq,GL",
            "code": "UPK"
          }
        },
        {
          "@attributes": {
            "city": "Upington,ZA",
            "code": "UTN"
          }
        },
        {
          "@attributes": {
            "city": "Uppsala,SE",
            "code": "QYX"
          }
        },
        {
          "@attributes": {
            "city": "Uralsk,KZ",
            "code": "URA"
          }
        },
        {
          "@attributes": {
            "city": "Uranium cities,CA",
            "code": "YBE"
          }
        },
        {
          "@attributes": {
            "city": "Uray,RU",
            "code": "URJ"
          }
        },
        {
          "@attributes": {
            "city": "Urdzhar,KZ",
            "code": "UZR"
          }
        },
        {
          "@attributes": {
            "city": "Urgench,UZ",
            "code": "UGC"
          }
        },
        {
          "@attributes": {
            "city": "Urmieh,IR",
            "code": "OMH"
          }
        },
        {
          "@attributes": {
            "city": "Urrao,CI",
            "code": "URR"
          }
        },
        {
          "@attributes": {
            "city": "Uruapan,MX",
            "code": "UPN"
          }
        },
        {
          "@attributes": {
            "city": "Uruguaina,BR",
            "code": "URG"
          }
        },
        {
          "@attributes": {
            "city": "Urumqi,CN",
            "code": "URC"
          }
        },
        {
          "@attributes": {
            "city": "Usak,TR",
            "code": "USQ"
          }
        },
        {
          "@attributes": {
            "city": "Useless Loop,AU",
            "code": "USL"
          }
        },
        {
          "@attributes": {
            "city": "Ushuaia,AR",
            "code": "USH"
          }
        },
        {
          "@attributes": {
            "city": "Usinsk,RU",
            "code": "USK"
          }
        },
        {
          "@attributes": {
            "city": "Ust Kamenogorsk,KZ",
            "code": "UKK"
          }
        },
        {
          "@attributes": {
            "city": "Ust Kut,RU",
            "code": "UKX"
          }
        },
        {
          "@attributes": {
            "city": "Ust Kuyga,RU",
            "code": "UKG"
          }
        },
        {
          "@attributes": {
            "city": "Ust Maya,RU",
            "code": "UMS"
          }
        },
        {
          "@attributes": {
            "city": "Ust Nera,RU",
            "code": "USR"
          }
        },
        {
          "@attributes": {
            "city": "Ust Tsilma,RU",
            "code": "UTS"
          }
        },
        {
          "@attributes": {
            "city": "Ustaoset,NO",
            "code": "XUX"
          }
        },
        {
          "@attributes": {
            "city": "Utarom,ID",
            "code": "KNG"
          }
        },
        {
          "@attributes": {
            "city": "Utica,US",
            "code": "UCA"
          }
        },
        {
          "@attributes": {
            "city": "Utila,HN",
            "code": "UII"
          }
        },
        {
          "@attributes": {
            "city": "Utopia,US",
            "code": "UTO"
          }
        },
        {
          "@attributes": {
            "city": "Utrecht,NL",
            "code": "UTC"
          }
        },
        {
          "@attributes": {
            "city": "Utsunomiya,JP",
            "code": "QUT"
          }
        },
        {
          "@attributes": {
            "city": "Uummannaq,GL",
            "code": "UMD"
          }
        },
        {
          "@attributes": {
            "city": "Uvalde,US",
            "code": "UVA"
          }
        },
        {
          "@attributes": {
            "city": "Uvol,PG",
            "code": "UVO"
          }
        },
        {
          "@attributes": {
            "city": "Uzhgorod,UA",
            "code": "UDJ"
          }
        },
        {
          "@attributes": {
            "city": "Uzwil,CH",
            "code": "ZKX"
          }
        },
        {
          "@attributes": {
            "city": "VALLENAR,CL",
            "code": "VLR"
          }
        },
        {
          "@attributes": {
            "city": "VENDOME,FR",
            "code": "XVD"
          }
        },
        {
          "@attributes": {
            "city": "Vaasa,FI",
            "code": "VAA"
          }
        },
        {
          "@attributes": {
            "city": "Vadodara,IN",
            "code": "BDQ"
          }
        },
        {
          "@attributes": {
            "city": "Vadso,NO",
            "code": "VDS"
          }
        },
        {
          "@attributes": {
            "city": "Vaduz,LI",
            "code": "QVU"
          }
        },
        {
          "@attributes": {
            "city": "Vaeroy,NO",
            "code": "VRY"
          }
        },
        {
          "@attributes": {
            "city": "Val D Isere,FR",
            "code": "VAZ"
          }
        },
        {
          "@attributes": {
            "city": "Val D Or,CA",
            "code": "YVO"
          }
        },
        {
          "@attributes": {
            "city": "Valdez,US",
            "code": "VDZ"
          }
        },
        {
          "@attributes": {
            "city": "Valdivia,CL",
            "code": "ZAL"
          }
        },
        {
          "@attributes": {
            "city": "Valdosta,US",
            "code": "VLD"
          }
        },
        {
          "@attributes": {
            "city": "Valenca,BR",
            "code": "VAL"
          }
        },
        {
          "@attributes": {
            "city": "Valence,FR",
            "code": "VAF"
          }
        },
        {
          "@attributes": {
            "city": "Valencia,ES",
            "code": "VLC"
          }
        },
        {
          "@attributes": {
            "city": "Valencia,VE",
            "code": "VLN"
          }
        },
        {
          "@attributes": {
            "city": "Valenciennes,FR",
            "code": "XVS"
          }
        },
        {
          "@attributes": {
            "city": "Valentine,US",
            "code": "VTN"
          }
        },
        {
          "@attributes": {
            "city": "Valera,VE",
            "code": "VLV"
          }
        },
        {
          "@attributes": {
            "city": "Valesdir,VU",
            "code": "VLS"
          }
        },
        {
          "@attributes": {
            "city": "Valjevo,RS",
            "code": "QWV"
          }
        },
        {
          "@attributes": {
            "city": "Valladolid,ES",
            "code": "VLL"
          }
        },
        {
          "@attributes": {
            "city": "Valle,US",
            "code": "VLE"
          }
        },
        {
          "@attributes": {
            "city": "Valle De La Pascua,VE",
            "code": "VDP"
          }
        },
        {
          "@attributes": {
            "city": "Valledupar,CO",
            "code": "VUP"
          }
        },
        {
          "@attributes": {
            "city": "Vallejo,US",
            "code": "VLO"
          }
        },
        {
          "@attributes": {
            "city": "Vallemi,PY",
            "code": "VMI"
          }
        },
        {
          "@attributes": {
            "city": "Valparaiso,CL",
            "code": "VAP"
          }
        },
        {
          "@attributes": {
            "city": "Valparaiso,US",
            "code": "VPS"
          }
        },
        {
          "@attributes": {
            "city": "Valparaiso,US",
            "code": "VPZ"
          }
        },
        {
          "@attributes": {
            "city": "Valverde,ES",
            "code": "VDE"
          }
        },
        {
          "@attributes": {
            "city": "Van Horn,US",
            "code": "VHN"
          }
        },
        {
          "@attributes": {
            "city": "Van TR,TR",
            "code": "VAN"
          }
        },
        {
          "@attributes": {
            "city": "Vancouver,CA",
            "code": "YVR"
          }
        },
        {
          "@attributes": {
            "city": "Vandalia,US",
            "code": "VLA"
          }
        },
        {
          "@attributes": {
            "city": "Vanimo,PG",
            "code": "VAI"
          }
        },
        {
          "@attributes": {
            "city": "Vannes,FR",
            "code": "VNE"
          }
        },
        {
          "@attributes": {
            "city": "Vanrook,AU",
            "code": "VNR"
          }
        },
        {
          "@attributes": {
            "city": "Vanuabalavu,FJ",
            "code": "VBV"
          }
        },
        {
          "@attributes": {
            "city": "Varadero,CU",
            "code": "VRA"
          }
        },
        {
          "@attributes": {
            "city": "Varanasi,IN",
            "code": "VNS"
          }
        },
        {
          "@attributes": {
            "city": "Vardoe,NO",
            "code": "VAW"
          }
        },
        {
          "@attributes": {
            "city": "Varese,IT",
            "code": "QVA"
          }
        },
        {
          "@attributes": {
            "city": "Varginha,BR",
            "code": "VAG"
          }
        },
        {
          "@attributes": {
            "city": "Varkaus,FI",
            "code": "VRK"
          }
        },
        {
          "@attributes": {
            "city": "Varna,BG",
            "code": "VAR"
          }
        },
        {
          "@attributes": {
            "city": "Vasteras,SE",
            "code": "VST"
          }
        },
        {
          "@attributes": {
            "city": "Vastervik,SE",
            "code": "VVK"
          }
        },
        {
          "@attributes": {
            "city": "Vatomandry,MG",
            "code": "VAT"
          }
        },
        {
          "@attributes": {
            "city": "Vatulele Island,FJ",
            "code": "VTF"
          }
        },
        {
          "@attributes": {
            "city": "Vava U,TO",
            "code": "VAV"
          }
        },
        {
          "@attributes": {
            "city": "Vaxjo,SE",
            "code": "VXO"
          }
        },
        {
          "@attributes": {
            "city": "Vegarshei,NO",
            "code": "ZYV"
          }
        },
        {
          "@attributes": {
            "city": "Vejle,DK",
            "code": "VEJ"
          }
        },
        {
          "@attributes": {
            "city": "Velbert,DE",
            "code": "ZQJ"
          }
        },
        {
          "@attributes": {
            "city": "Veliky Ustyug,RU",
            "code": "VUS"
          }
        },
        {
          "@attributes": {
            "city": "Venetie,US",
            "code": "VEE"
          }
        },
        {
          "@attributes": {
            "city": "Venice,US",
            "code": "VNC"
          }
        },
        {
          "@attributes": {
            "city": "Venice,IT",
            "code": "VCE"
          }
        },
        {
          "@attributes": {
            "city": "Vennesla,NO",
            "code": "XXE"
          }
        },
        {
          "@attributes": {
            "city": "Ventspils,LV",
            "code": "VNT"
          }
        },
        {
          "@attributes": {
            "city": "Veracruz,MX",
            "code": "VER"
          }
        },
        {
          "@attributes": {
            "city": "Verbier,CH",
            "code": "ZKY"
          }
        },
        {
          "@attributes": {
            "city": "Verdal,NO",
            "code": "XXG"
          }
        },
        {
          "@attributes": {
            "city": "Verdun,FR",
            "code": "XVN"
          }
        },
        {
          "@attributes": {
            "city": "Verkhnevilyuysk,RU",
            "code": "VHV"
          }
        },
        {
          "@attributes": {
            "city": "Vermilion,CA",
            "code": "YVG"
          }
        },
        {
          "@attributes": {
            "city": "Vernal,US",
            "code": "VEL"
          }
        },
        {
          "@attributes": {
            "city": "Vernon,CA",
            "code": "YVE"
          }
        },
        {
          "@attributes": {
            "city": "Vero Beach,US",
            "code": "VRB"
          }
        },
        {
          "@attributes": {
            "city": "Verona,IT",
            "code": "VRN"
          }
        },
        {
          "@attributes": {
            "city": "Versailles,FR",
            "code": "XVE"
          }
        },
        {
          "@attributes": {
            "city": "Vesoul,FR",
            "code": "XVO"
          }
        },
        {
          "@attributes": {
            "city": "Vestmannaeyjar,IS",
            "code": "VEY"
          }
        },
        {
          "@attributes": {
            "city": "Veszprem,HU",
            "code": "ZFP"
          }
        },
        {
          "@attributes": {
            "city": "Vevey,CH",
            "code": "ZKZ"
          }
        },
        {
          "@attributes": {
            "city": "Viborg,DK",
            "code": "ZGX"
          }
        },
        {
          "@attributes": {
            "city": "Vicenza,IT",
            "code": "VIC"
          }
        },
        {
          "@attributes": {
            "city": "Vichy,FR",
            "code": "VHY"
          }
        },
        {
          "@attributes": {
            "city": "Vicksburg,US",
            "code": "VKS"
          }
        },
        {
          "@attributes": {
            "city": "Vicosa,BR",
            "code": "QVC"
          }
        },
        {
          "@attributes": {
            "city": "Victoria,CA",
            "code": "YYJ"
          }
        },
        {
          "@attributes": {
            "city": "Victoria,US",
            "code": "VCT"
          }
        },
        {
          "@attributes": {
            "city": "Victoria Falls,ZW",
            "code": "VFA"
          }
        },
        {
          "@attributes": {
            "city": "Victoria Harbour,CA",
            "code": "YWH"
          }
        },
        {
          "@attributes": {
            "city": "Victoria Island,NG",
            "code": "QVL"
          }
        },
        {
          "@attributes": {
            "city": "Victorville,US",
            "code": "VCV"
          }
        },
        {
          "@attributes": {
            "city": "Vidalia,US",
            "code": "VDI"
          }
        },
        {
          "@attributes": {
            "city": "Vidin,BG",
            "code": "VID"
          }
        },
        {
          "@attributes": {
            "city": "Viedma,AR",
            "code": "VDM"
          }
        },
        {
          "@attributes": {
            "city": "Vienna,AT",
            "code": "VIE"
          }
        },
        {
          "@attributes": {
            "city": "Vienne,FR",
            "code": "XVI"
          }
        },
        {
          "@attributes": {
            "city": "Vientiane,LA",
            "code": "VTE"
          }
        },
        {
          "@attributes": {
            "city": "Vieques,US",
            "code": "VQS"
          }
        },
        {
          "@attributes": {
            "city": "Viersen,DE",
            "code": "ZQK"
          }
        },
        {
          "@attributes": {
            "city": "Vierzon,FR",
            "code": "XVZ"
          }
        },
        {
          "@attributes": {
            "city": "Vieste,IT",
            "code": "VIF"
          }
        },
        {
          "@attributes": {
            "city": "Vieux Fort St Lucia,LC",
            "code": "UVF"
          }
        },
        {
          "@attributes": {
            "city": "Vigo,ES",
            "code": "VGO"
          }
        },
        {
          "@attributes": {
            "city": "Vijayawada,IN",
            "code": "VGA"
          }
        },
        {
          "@attributes": {
            "city": "Vila Real,PT",
            "code": "VRL"
          }
        },
        {
          "@attributes": {
            "city": "Vila Velha,BR",
            "code": "QVH"
          }
        },
        {
          "@attributes": {
            "city": "Vilanculos,MZ",
            "code": "VNX"
          }
        },
        {
          "@attributes": {
            "city": "Vilhelmina,SE",
            "code": "VHM"
          }
        },
        {
          "@attributes": {
            "city": "Vilhena,BR",
            "code": "BVH"
          }
        },
        {
          "@attributes": {
            "city": "Villa Constitucion,MX",
            "code": "VIB"
          }
        },
        {
          "@attributes": {
            "city": "Villa Gesell,AR",
            "code": "VLG"
          }
        },
        {
          "@attributes": {
            "city": "Villa Mercedes,AR",
            "code": "VME"
          }
        },
        {
          "@attributes": {
            "city": "Villagarzon,CO",
            "code": "VGZ"
          }
        },
        {
          "@attributes": {
            "city": "Villahermosa,MX",
            "code": "VSA"
          }
        },
        {
          "@attributes": {
            "city": "Villars,CH",
            "code": "ZLA"
          }
        },
        {
          "@attributes": {
            "city": "Villavicencio,CO",
            "code": "VVC"
          }
        },
        {
          "@attributes": {
            "city": "Villefranche Sur Saone,FR",
            "code": "XVF"
          }
        },
        {
          "@attributes": {
            "city": "Villepinte,FR",
            "code": "XVP"
          }
        },
        {
          "@attributes": {
            "city": "Villingen Schwenningen,DE",
            "code": "ZQL"
          }
        },
        {
          "@attributes": {
            "city": "Vilnius,LT",
            "code": "VNO"
          }
        },
        {
          "@attributes": {
            "city": "Vilyuysk,RU",
            "code": "VYI"
          }
        },
        {
          "@attributes": {
            "city": "Vina Del Mar,CL",
            "code": "KNA"
          }
        },
        {
          "@attributes": {
            "city": "Vinales,CU",
            "code": "VNL"
          }
        },
        {
          "@attributes": {
            "city": "Vincennes,US",
            "code": "OEA"
          }
        },
        {
          "@attributes": {
            "city": "Vinh cities,VN",
            "code": "VII"
          }
        },
        {
          "@attributes": {
            "city": "Vinnitsa,UA",
            "code": "VIN"
          }
        },
        {
          "@attributes": {
            "city": "Vinstra,NO",
            "code": "XKZ"
          }
        },
        {
          "@attributes": {
            "city": "Viqueque,TL",
            "code": "VIQ"
          }
        },
        {
          "@attributes": {
            "city": "Virac,PH",
            "code": "VRC"
          }
        },
        {
          "@attributes": {
            "city": "Virgin Gorda,VG",
            "code": "VIJ"
          }
        },
        {
          "@attributes": {
            "city": "Visalia,US",
            "code": "VIS"
          }
        },
        {
          "@attributes": {
            "city": "Visby,SE",
            "code": "VBY"
          }
        },
        {
          "@attributes": {
            "city": "Viseu,PT",
            "code": "VSE"
          }
        },
        {
          "@attributes": {
            "city": "Vishakhapatanam,IN",
            "code": "VTZ"
          }
        },
        {
          "@attributes": {
            "city": "Visp,CH",
            "code": "ZLB"
          }
        },
        {
          "@attributes": {
            "city": "Vitebsk,BY",
            "code": "VTB"
          }
        },
        {
          "@attributes": {
            "city": "Vitoria,ES",
            "code": "VIT"
          }
        },
        {
          "@attributes": {
            "city": "Vitoria,BR",
            "code": "VIX"
          }
        },
        {
          "@attributes": {
            "city": "Vitoria Da Conquista,BR",
            "code": "VDC"
          }
        },
        {
          "@attributes": {
            "city": "Vitre,FR",
            "code": "XVT"
          }
        },
        {
          "@attributes": {
            "city": "Vittel,FR",
            "code": "VTL"
          }
        },
        {
          "@attributes": {
            "city": "Vivigani,PG",
            "code": "VIV"
          }
        },
        {
          "@attributes": {
            "city": "Vladikavkaz,RU",
            "code": "OGZ"
          }
        },
        {
          "@attributes": {
            "city": "Vladivostok,RU",
            "code": "VVO"
          }
        },
        {
          "@attributes": {
            "city": "Vohemar,MG",
            "code": "VOH"
          }
        },
        {
          "@attributes": {
            "city": "Volgograd,RU",
            "code": "VOG"
          }
        },
        {
          "@attributes": {
            "city": "Vologda,RU",
            "code": "VGD"
          }
        },
        {
          "@attributes": {
            "city": "Volos,GR",
            "code": "VOL"
          }
        },
        {
          "@attributes": {
            "city": "Volta Redonda,BR",
            "code": "QVR"
          }
        },
        {
          "@attributes": {
            "city": "Vopnafjordur,IS",
            "code": "VPN"
          }
        },
        {
          "@attributes": {
            "city": "Vorkuta,RU",
            "code": "VKT"
          }
        },
        {
          "@attributes": {
            "city": "Voronezh,RU",
            "code": "VOZ"
          }
        },
        {
          "@attributes": {
            "city": "Voss,NO",
            "code": "XVK"
          }
        },
        {
          "@attributes": {
            "city": "Votuporanga,BR",
            "code": "VOT"
          }
        },
        {
          "@attributes": {
            "city": "Vryheid,ZA",
            "code": "VYD"
          }
        },
        {
          "@attributes": {
            "city": "Vung Tau,VN",
            "code": "VTG"
          }
        },
        {
          "@attributes": {
            "city": "Vuokatti,FI",
            "code": "XVM"
          }
        },
        {
          "@attributes": {
            "city": "Vyborg,RU",
            "code": "VBR"
          }
        },
        {
          "@attributes": {
            "city": "WENGEN,CH",
            "code": "ZLE"
          }
        },
        {
          "@attributes": {
            "city": "WHEATLAND,US",
            "code": "EAN"
          }
        },
        {
          "@attributes": {
            "city": "WILLOWS,US",
            "code": "WLW"
          }
        },
        {
          "@attributes": {
            "city": "WINTERTHUR,CH",
            "code": "ZLI"
          }
        },
        {
          "@attributes": {
            "city": "Wabo,PG",
            "code": "WAO"
          }
        },
        {
          "@attributes": {
            "city": "Wabush,CA",
            "code": "YWK"
          }
        },
        {
          "@attributes": {
            "city": "Waca,ET",
            "code": "WAC"
          }
        },
        {
          "@attributes": {
            "city": "Waco,US",
            "code": "ACT"
          }
        },
        {
          "@attributes": {
            "city": "Waco Kungo,AO",
            "code": "CEO"
          }
        },
        {
          "@attributes": {
            "city": "Waddington,GB",
            "code": "WTN"
          }
        },
        {
          "@attributes": {
            "city": "Wadi Al Dawaser,SA",
            "code": "WAE"
          }
        },
        {
          "@attributes": {
            "city": "Waedenswil,CH",
            "code": "ZLC"
          }
        },
        {
          "@attributes": {
            "city": "Wagga Wagga,AU",
            "code": "WGA"
          }
        },
        {
          "@attributes": {
            "city": "Wahpeton,US",
            "code": "WAH"
          }
        },
        {
          "@attributes": {
            "city": "Waiblingen,DE",
            "code": "ZQO"
          }
        },
        {
          "@attributes": {
            "city": "Waingapu,ID",
            "code": "WGP"
          }
        },
        {
          "@attributes": {
            "city": "Wainwright,US",
            "code": "AIN"
          }
        },
        {
          "@attributes": {
            "city": "Waitangi,NZ",
            "code": "WGN"
          }
        },
        {
          "@attributes": {
            "city": "Wajir,KE",
            "code": "WJR"
          }
        },
        {
          "@attributes": {
            "city": "Wake Island,UM",
            "code": "AWK"
          }
        },
        {
          "@attributes": {
            "city": "Wakefield Westgate,GB",
            "code": "XWD"
          }
        },
        {
          "@attributes": {
            "city": "Wakkanai,JP",
            "code": "WKJ"
          }
        },
        {
          "@attributes": {
            "city": "Wakunai,PG",
            "code": "WKN"
          }
        },
        {
          "@attributes": {
            "city": "Walaha,VU",
            "code": "WLH"
          }
        },
        {
          "@attributes": {
            "city": "Wales,US",
            "code": "WAA"
          }
        },
        {
          "@attributes": {
            "city": "Walgett,AU",
            "code": "WGE"
          }
        },
        {
          "@attributes": {
            "city": "Walla Walla,US",
            "code": "ALW"
          }
        },
        {
          "@attributes": {
            "city": "Wallis Island,WF",
            "code": "WLS"
          }
        },
        {
          "@attributes": {
            "city": "Walnut Ridge,US",
            "code": "ARG"
          }
        },
        {
          "@attributes": {
            "city": "Walterboro,US",
            "code": "RBW"
          }
        },
        {
          "@attributes": {
            "city": "Waltham,US",
            "code": "WLM"
          }
        },
        {
          "@attributes": {
            "city": "Walvis Bay,NA",
            "code": "WVB"
          }
        },
        {
          "@attributes": {
            "city": "Wamena,ID",
            "code": "WMX"
          }
        },
        {
          "@attributes": {
            "city": "Wanaka,NZ",
            "code": "WKA"
          }
        },
        {
          "@attributes": {
            "city": "Wanganui,NZ",
            "code": "WAG"
          }
        },
        {
          "@attributes": {
            "city": "Wangaratta,AU",
            "code": "WGT"
          }
        },
        {
          "@attributes": {
            "city": "Wangerooge,DE",
            "code": "AGE"
          }
        },
        {
          "@attributes": {
            "city": "Wanigela,PG",
            "code": "AGL"
          }
        },
        {
          "@attributes": {
            "city": "Wanning,CN",
            "code": "WXJ"
          }
        },
        {
          "@attributes": {
            "city": "Wanxian,CN",
            "code": "WXN"
          }
        },
        {
          "@attributes": {
            "city": "Wapakoneta,US",
            "code": "AXV"
          }
        },
        {
          "@attributes": {
            "city": "Wapenamanda,PG",
            "code": "WBM"
          }
        },
        {
          "@attributes": {
            "city": "Warangal,IN",
            "code": "WGC"
          }
        },
        {
          "@attributes": {
            "city": "Warder,ET",
            "code": "WRA"
          }
        },
        {
          "@attributes": {
            "city": "Warnemuende,DE",
            "code": "ZWD"
          }
        },
        {
          "@attributes": {
            "city": "Warri,NG",
            "code": "QRW"
          }
        },
        {
          "@attributes": {
            "city": "Warrington,GB",
            "code": "XWN"
          }
        },
        {
          "@attributes": {
            "city": "Warrnambool,AU",
            "code": "WMB"
          }
        },
        {
          "@attributes": {
            "city": "Warsaw,PL",
            "code": "WAW"
          }
        },
        {
          "@attributes": {
            "city": "Warwick,AU",
            "code": "WAZ"
          }
        },
        {
          "@attributes": {
            "city": "Washington,US",
            "code": "WAS"
          }
        },
        {
          "@attributes": {
            "city": "Washington,US",
            "code": "WSG"
          }
        },
        {
          "@attributes": {
            "city": "Wasilla,US",
            "code": "WWA"
          }
        },
        {
          "@attributes": {
            "city": "Waskaganish,CA",
            "code": "YKQ"
          }
        },
        {
          "@attributes": {
            "city": "Wasu,PG",
            "code": "WSU"
          }
        },
        {
          "@attributes": {
            "city": "Waterfall,US",
            "code": "KWF"
          }
        },
        {
          "@attributes": {
            "city": "Waterford,IE",
            "code": "WAT"
          }
        },
        {
          "@attributes": {
            "city": "Waterkloof,ZA",
            "code": "WKF"
          }
        },
        {
          "@attributes": {
            "city": "Waterloo,US",
            "code": "ALO"
          }
        },
        {
          "@attributes": {
            "city": "Watertown,US",
            "code": "ART"
          }
        },
        {
          "@attributes": {
            "city": "Watertown,US",
            "code": "ATY"
          }
        },
        {
          "@attributes": {
            "city": "Waterville,US",
            "code": "WVL"
          }
        },
        {
          "@attributes": {
            "city": "Watford,CA",
            "code": "XWA"
          }
        },
        {
          "@attributes": {
            "city": "Watson Lake,CA",
            "code": "YQH"
          }
        },
        {
          "@attributes": {
            "city": "Watsonville,US",
            "code": "WVI"
          }
        },
        {
          "@attributes": {
            "city": "Wau cities,SS",
            "code": "WUU"
          }
        },
        {
          "@attributes": {
            "city": "Wau PG,PG",
            "code": "WUG"
          }
        },
        {
          "@attributes": {
            "city": "Waukegan,US",
            "code": "UGN"
          }
        },
        {
          "@attributes": {
            "city": "Waukesha,US",
            "code": "UES"
          }
        },
        {
          "@attributes": {
            "city": "Wausau,US",
            "code": "AUW"
          }
        },
        {
          "@attributes": {
            "city": "Wavre,BE",
            "code": "ZGV"
          }
        },
        {
          "@attributes": {
            "city": "Wawa,CA",
            "code": "YXZ"
          }
        },
        {
          "@attributes": {
            "city": "Waynesburg,US",
            "code": "WAY"
          }
        },
        {
          "@attributes": {
            "city": "Weatherford,US",
            "code": "WEA"
          }
        },
        {
          "@attributes": {
            "city": "Webequie Indian Reserve,CA",
            "code": "YWP"
          }
        },
        {
          "@attributes": {
            "city": "Wedau,PG",
            "code": "WED"
          }
        },
        {
          "@attributes": {
            "city": "Wedjh,SA",
            "code": "EJH"
          }
        },
        {
          "@attributes": {
            "city": "Wee Waa,AU",
            "code": "WEW"
          }
        },
        {
          "@attributes": {
            "city": "Weihai,CN",
            "code": "WEH"
          }
        },
        {
          "@attributes": {
            "city": "Weinfelden,CH",
            "code": "ZLD"
          }
        },
        {
          "@attributes": {
            "city": "Weipa,AU",
            "code": "WEI"
          }
        },
        {
          "@attributes": {
            "city": "Welkom,ZA",
            "code": "WEL"
          }
        },
        {
          "@attributes": {
            "city": "Wellingborough,GB",
            "code": "XWE"
          }
        },
        {
          "@attributes": {
            "city": "Wellington,NZ",
            "code": "WLG"
          }
        },
        {
          "@attributes": {
            "city": "Wells,US",
            "code": "LWL"
          }
        },
        {
          "@attributes": {
            "city": "Wellsville,US",
            "code": "ELZ"
          }
        },
        {
          "@attributes": {
            "city": "Welshpool,AU",
            "code": "WHL"
          }
        },
        {
          "@attributes": {
            "city": "Wenatchee,US",
            "code": "EAT"
          }
        },
        {
          "@attributes": {
            "city": "Wenchang,CN",
            "code": "WEC"
          }
        },
        {
          "@attributes": {
            "city": "Wendover,US",
            "code": "ENV"
          }
        },
        {
          "@attributes": {
            "city": "Wenling,CN",
            "code": "WLI"
          }
        },
        {
          "@attributes": {
            "city": "Wenshan,CN",
            "code": "WNH"
          }
        },
        {
          "@attributes": {
            "city": "Wenzhou,CN",
            "code": "WNZ"
          }
        },
        {
          "@attributes": {
            "city": "Wesel,DE",
            "code": "ZQP"
          }
        },
        {
          "@attributes": {
            "city": "West Bend,US",
            "code": "ETB"
          }
        },
        {
          "@attributes": {
            "city": "West End,BS",
            "code": "WTD"
          }
        },
        {
          "@attributes": {
            "city": "West Kuparuk,US",
            "code": "XPU"
          }
        },
        {
          "@attributes": {
            "city": "West Memphis,US",
            "code": "AWM"
          }
        },
        {
          "@attributes": {
            "city": "West Palm Beach,US",
            "code": "PBI"
          }
        },
        {
          "@attributes": {
            "city": "West Point,US",
            "code": "KWP"
          }
        },
        {
          "@attributes": {
            "city": "West Wyalong,AU",
            "code": "WWY"
          }
        },
        {
          "@attributes": {
            "city": "West Yellowstone,US",
            "code": "WYS"
          }
        },
        {
          "@attributes": {
            "city": "Westerland,DE",
            "code": "GWT"
          }
        },
        {
          "@attributes": {
            "city": "Westerly,US",
            "code": "WST"
          }
        },
        {
          "@attributes": {
            "city": "Westhampton,US",
            "code": "FOK"
          }
        },
        {
          "@attributes": {
            "city": "Westport,NZ",
            "code": "WSZ"
          }
        },
        {
          "@attributes": {
            "city": "Westray,GB",
            "code": "WRY"
          }
        },
        {
          "@attributes": {
            "city": "Wettingen,CH",
            "code": "ZLF"
          }
        },
        {
          "@attributes": {
            "city": "Wetzikon,CH",
            "code": "ZKW"
          }
        },
        {
          "@attributes": {
            "city": "Wetzlar,DE",
            "code": "ZQQ"
          }
        },
        {
          "@attributes": {
            "city": "Wewak,PG",
            "code": "WWK"
          }
        },
        {
          "@attributes": {
            "city": "Wexford,IE",
            "code": "WEX"
          }
        },
        {
          "@attributes": {
            "city": "Weymont,CA",
            "code": "XFQ"
          }
        },
        {
          "@attributes": {
            "city": "Whakatane,NZ",
            "code": "WHK"
          }
        },
        {
          "@attributes": {
            "city": "Whale Cove,CA",
            "code": "YXN"
          }
        },
        {
          "@attributes": {
            "city": "Whale Pass,US",
            "code": "WWP"
          }
        },
        {
          "@attributes": {
            "city": "Whalsay,GB",
            "code": "WHS"
          }
        },
        {
          "@attributes": {
            "city": "Whangarei,NZ",
            "code": "WRE"
          }
        },
        {
          "@attributes": {
            "city": "Wharton,US",
            "code": "WHT"
          }
        },
        {
          "@attributes": {
            "city": "Wheeling,US",
            "code": "HLG"
          }
        },
        {
          "@attributes": {
            "city": "Whidbey Island,US",
            "code": "NUW"
          }
        },
        {
          "@attributes": {
            "city": "Whistler,CA",
            "code": "YWS"
          }
        },
        {
          "@attributes": {
            "city": "White Mountain,US",
            "code": "WMO"
          }
        },
        {
          "@attributes": {
            "city": "White Plains,US",
            "code": "HPN"
          }
        },
        {
          "@attributes": {
            "city": "White River,CA",
            "code": "YWR"
          }
        },
        {
          "@attributes": {
            "city": "Whitecourt,CA",
            "code": "YZU"
          }
        },
        {
          "@attributes": {
            "city": "Whitefield,US",
            "code": "HIE"
          }
        },
        {
          "@attributes": {
            "city": "Whitehorse,CA",
            "code": "YXY"
          }
        },
        {
          "@attributes": {
            "city": "Whiteriver,US",
            "code": "WTR"
          }
        },
        {
          "@attributes": {
            "city": "Whitesburg,US",
            "code": "BRG"
          }
        },
        {
          "@attributes": {
            "city": "Whyalla,AU",
            "code": "WYA"
          }
        },
        {
          "@attributes": {
            "city": "Wichita,US",
            "code": "ICT"
          }
        },
        {
          "@attributes": {
            "city": "Wichita Falls,US",
            "code": "SPS"
          }
        },
        {
          "@attributes": {
            "city": "Wick,GB",
            "code": "WIC"
          }
        },
        {
          "@attributes": {
            "city": "Wiesbaden,DE",
            "code": "UWE"
          }
        },
        {
          "@attributes": {
            "city": "Wigan,GB",
            "code": "XWI"
          }
        },
        {
          "@attributes": {
            "city": "Wil CH,CH",
            "code": "ZLH"
          }
        },
        {
          "@attributes": {
            "city": "Wildman Lake,US",
            "code": "EWD"
          }
        },
        {
          "@attributes": {
            "city": "Wilhelmshaven,DE",
            "code": "WVN"
          }
        },
        {
          "@attributes": {
            "city": "Wilkesboro,US",
            "code": "IKB"
          }
        },
        {
          "@attributes": {
            "city": "Williams Lake,CA",
            "code": "YWL"
          }
        },
        {
          "@attributes": {
            "city": "Williamsport,US",
            "code": "IPT"
          }
        },
        {
          "@attributes": {
            "city": "Williston,US",
            "code": "ISN"
          }
        },
        {
          "@attributes": {
            "city": "Willmar,US",
            "code": "ILL"
          }
        },
        {
          "@attributes": {
            "city": "Willow,US",
            "code": "WOW"
          }
        },
        {
          "@attributes": {
            "city": "Wilmington,US",
            "code": "ILN"
          }
        },
        {
          "@attributes": {
            "city": "Wilmington,US",
            "code": "ILG"
          }
        },
        {
          "@attributes": {
            "city": "Wilmington,US",
            "code": "ILM"
          }
        },
        {
          "@attributes": {
            "city": "Wilton,US",
            "code": "QCW"
          }
        },
        {
          "@attributes": {
            "city": "Wiluna,AU",
            "code": "WUN"
          }
        },
        {
          "@attributes": {
            "city": "Winchester,US",
            "code": "WGO"
          }
        },
        {
          "@attributes": {
            "city": "Windhoek,NA",
            "code": "WDH"
          }
        },
        {
          "@attributes": {
            "city": "Windorah,AU",
            "code": "WNR"
          }
        },
        {
          "@attributes": {
            "city": "Windsor,CA",
            "code": "YQG"
          }
        },
        {
          "@attributes": {
            "city": "Winfield,US",
            "code": "WLD"
          }
        },
        {
          "@attributes": {
            "city": "Winnemucca,US",
            "code": "WMC"
          }
        },
        {
          "@attributes": {
            "city": "Winnipeg,CA",
            "code": "YWG"
          }
        },
        {
          "@attributes": {
            "city": "Winona,US",
            "code": "ONA"
          }
        },
        {
          "@attributes": {
            "city": "Winslow,US",
            "code": "INW"
          }
        },
        {
          "@attributes": {
            "city": "Winston-Salem,US",
            "code": "INT"
          }
        },
        {
          "@attributes": {
            "city": "Winter Haven,US",
            "code": "GIF"
          }
        },
        {
          "@attributes": {
            "city": "Winter Park,US",
            "code": "QWP"
          }
        },
        {
          "@attributes": {
            "city": "Winton,AU",
            "code": "WIN"
          }
        },
        {
          "@attributes": {
            "city": "Wipim,PG",
            "code": "WPM"
          }
        },
        {
          "@attributes": {
            "city": "Wiscasset,US",
            "code": "ISS"
          }
        },
        {
          "@attributes": {
            "city": "Wisconsin Rapids,US",
            "code": "ISW"
          }
        },
        {
          "@attributes": {
            "city": "Wiseman,US",
            "code": "WSM"
          }
        },
        {
          "@attributes": {
            "city": "Wismar,DE",
            "code": "ZWM"
          }
        },
        {
          "@attributes": {
            "city": "Witten,DE",
            "code": "ZQR"
          }
        },
        {
          "@attributes": {
            "city": "Wittenberg,DE",
            "code": "ZWT"
          }
        },
        {
          "@attributes": {
            "city": "Witu,PG",
            "code": "WIU"
          }
        },
        {
          "@attributes": {
            "city": "Woburn,US",
            "code": "WBN"
          }
        },
        {
          "@attributes": {
            "city": "Woitape,PG",
            "code": "WTP"
          }
        },
        {
          "@attributes": {
            "city": "Woking,GB",
            "code": "XWO"
          }
        },
        {
          "@attributes": {
            "city": "Wolf Point,US",
            "code": "OLF"
          }
        },
        {
          "@attributes": {
            "city": "Wolfsburg,DE",
            "code": "ZQU"
          }
        },
        {
          "@attributes": {
            "city": "Wollogorang,AU",
            "code": "WLL"
          }
        },
        {
          "@attributes": {
            "city": "Wollongong,AU",
            "code": "WOL"
          }
        },
        {
          "@attributes": {
            "city": "Wolverhampton,GB",
            "code": "XVW"
          }
        },
        {
          "@attributes": {
            "city": "Wonju,KR",
            "code": "WJU"
          }
        },
        {
          "@attributes": {
            "city": "Wood River,US",
            "code": "WOD"
          }
        },
        {
          "@attributes": {
            "city": "Woodstock,CA",
            "code": "XIP"
          }
        },
        {
          "@attributes": {
            "city": "Woodward,US",
            "code": "WWR"
          }
        },
        {
          "@attributes": {
            "city": "Woomera,AU",
            "code": "UMR"
          }
        },
        {
          "@attributes": {
            "city": "Worcester,US",
            "code": "ORH"
          }
        },
        {
          "@attributes": {
            "city": "Worland,US",
            "code": "WRL"
          }
        },
        {
          "@attributes": {
            "city": "Worms,DE",
            "code": "ZQV"
          }
        },
        {
          "@attributes": {
            "city": "Worthington,US",
            "code": "OTG"
          }
        },
        {
          "@attributes": {
            "city": "Wrangell,US",
            "code": "WRG"
          }
        },
        {
          "@attributes": {
            "city": "Wroclaw,PL",
            "code": "WRO"
          }
        },
        {
          "@attributes": {
            "city": "Wuhai,CN",
            "code": "WUA"
          }
        },
        {
          "@attributes": {
            "city": "Wuhan,CN",
            "code": "WUH"
          }
        },
        {
          "@attributes": {
            "city": "Wuhu,CN",
            "code": "WHU"
          }
        },
        {
          "@attributes": {
            "city": "Wunnumin Lake,CA",
            "code": "WNN"
          }
        },
        {
          "@attributes": {
            "city": "Wuppertal,DE",
            "code": "UWP"
          }
        },
        {
          "@attributes": {
            "city": "Wurzburg,DE",
            "code": "QWU"
          }
        },
        {
          "@attributes": {
            "city": "Wuvulu Island,PG",
            "code": "WUV"
          }
        },
        {
          "@attributes": {
            "city": "Wuxi,CN",
            "code": "WUX"
          }
        },
        {
          "@attributes": {
            "city": "Wuyishan,CN",
            "code": "WUS"
          }
        },
        {
          "@attributes": {
            "city": "Wuzhou,CN",
            "code": "WUZ"
          }
        },
        {
          "@attributes": {
            "city": "Wyndham,AU",
            "code": "WYN"
          }
        },
        {
          "@attributes": {
            "city": "Wyoming,CA",
            "code": "XWY"
          }
        },
        {
          "@attributes": {
            "city": "Xanxere,BR",
            "code": "AXE"
          }
        },
        {
          "@attributes": {
            "city": "Xi An,CN",
            "code": "SIA"
          }
        },
        {
          "@attributes": {
            "city": "Xiahe,CN",
            "code": "GXH"
          }
        },
        {
          "@attributes": {
            "city": "Xiamen,CN",
            "code": "XMN"
          }
        },
        {
          "@attributes": {
            "city": "Xiangfan,CN",
            "code": "XFN"
          }
        },
        {
          "@attributes": {
            "city": "Xiangyang,CN",
            "code": "KLJ"
          }
        },
        {
          "@attributes": {
            "city": "Xianning,CN",
            "code": "IUO"
          }
        },
        {
          "@attributes": {
            "city": "Xiantao,CN",
            "code": "XTQ"
          }
        },
        {
          "@attributes": {
            "city": "Xiaogan,CN",
            "code": "XJW"
          }
        },
        {
          "@attributes": {
            "city": "Xieng Khouang,LA",
            "code": "XKH"
          }
        },
        {
          "@attributes": {
            "city": "Xilinhot,CN",
            "code": "XIL"
          }
        },
        {
          "@attributes": {
            "city": "Xin Hui,CN",
            "code": "ZBZ"
          }
        },
        {
          "@attributes": {
            "city": "Xingtai,CN",
            "code": "XNT"
          }
        },
        {
          "@attributes": {
            "city": "Xining,CN",
            "code": "XNN"
          }
        },
        {
          "@attributes": {
            "city": "Xinyang,CN",
            "code": "XYW"
          }
        },
        {
          "@attributes": {
            "city": "Xinyuan cities,CN",
            "code": "NLT"
          }
        },
        {
          "@attributes": {
            "city": "Xuzhou,CN",
            "code": "XUZ"
          }
        },
        {
          "@attributes": {
            "city": "YOSHKAR OLA,RU",
            "code": "JOK"
          }
        },
        {
          "@attributes": {
            "city": "Yacuiba,BO",
            "code": "BYC"
          }
        },
        {
          "@attributes": {
            "city": "Yakima,US",
            "code": "YKM"
          }
        },
        {
          "@attributes": {
            "city": "Yakushima,JP",
            "code": "KUM"
          }
        },
        {
          "@attributes": {
            "city": "Yakutat,US",
            "code": "YAK"
          }
        },
        {
          "@attributes": {
            "city": "Yakutsk,RU",
            "code": "YKS"
          }
        },
        {
          "@attributes": {
            "city": "Yalumet,PG",
            "code": "KYX"
          }
        },
        {
          "@attributes": {
            "city": "Yam Island,AU",
            "code": "XMY"
          }
        },
        {
          "@attributes": {
            "city": "Yamagata,JP",
            "code": "GAJ"
          }
        },
        {
          "@attributes": {
            "city": "Yamoussouro,CI",
            "code": "ASK"
          }
        },
        {
          "@attributes": {
            "city": "Yanan,CN",
            "code": "ENY"
          }
        },
        {
          "@attributes": {
            "city": "Yanbo,SA",
            "code": "YNB"
          }
        },
        {
          "@attributes": {
            "city": "Yancheng,CN",
            "code": "YNZ"
          }
        },
        {
          "@attributes": {
            "city": "Yandicoogina,AU",
            "code": "YNN"
          }
        },
        {
          "@attributes": {
            "city": "Yandina,SB",
            "code": "XYA"
          }
        },
        {
          "@attributes": {
            "city": "Yangon,MM",
            "code": "RGN"
          }
        },
        {
          "@attributes": {
            "city": "Yangyang,KR",
            "code": "YNY"
          }
        },
        {
          "@attributes": {
            "city": "Yangzhou,CN",
            "code": "YTY"
          }
        },
        {
          "@attributes": {
            "city": "Yanji,CN",
            "code": "YNJ"
          }
        },
        {
          "@attributes": {
            "city": "Yankton,US",
            "code": "YKN"
          }
        },
        {
          "@attributes": {
            "city": "Yantai,CN",
            "code": "YNT"
          }
        },
        {
          "@attributes": {
            "city": "Yaounde,CM",
            "code": "YAO"
          }
        },
        {
          "@attributes": {
            "city": "Yap Fm,FM",
            "code": "YAP"
          }
        },
        {
          "@attributes": {
            "city": "Yarmouth,CA",
            "code": "YQI"
          }
        },
        {
          "@attributes": {
            "city": "Yaroslavl,RU",
            "code": "IAR"
          }
        },
        {
          "@attributes": {
            "city": "Yazd,IR",
            "code": "AZD"
          }
        },
        {
          "@attributes": {
            "city": "Yechon,KR",
            "code": "YEC"
          }
        },
        {
          "@attributes": {
            "city": "Yellowknife,CA",
            "code": "YZF"
          }
        },
        {
          "@attributes": {
            "city": "Yeosu,KR",
            "code": "RSU"
          }
        },
        {
          "@attributes": {
            "city": "Yeovilton,GB",
            "code": "YEO"
          }
        },
        {
          "@attributes": {
            "city": "Yerevan,AM",
            "code": "EVN"
          }
        },
        {
          "@attributes": {
            "city": "Yes Bay,US",
            "code": "WYB"
          }
        },
        {
          "@attributes": {
            "city": "Yevlakh,AZ",
            "code": "YLV"
          }
        },
        {
          "@attributes": {
            "city": "Yeysk,RU",
            "code": "EIK"
          }
        },
        {
          "@attributes": {
            "city": "Yibin,CN",
            "code": "YBP"
          }
        },
        {
          "@attributes": {
            "city": "Yichang,CN",
            "code": "YIH"
          }
        },
        {
          "@attributes": {
            "city": "Yichun,CN",
            "code": "YIC"
          }
        },
        {
          "@attributes": {
            "city": "Yichun Shi,CN",
            "code": "LDS"
          }
        },
        {
          "@attributes": {
            "city": "Yinchuan,CN",
            "code": "INC"
          }
        },
        {
          "@attributes": {
            "city": "Yingkou,CN",
            "code": "JYQ"
          }
        },
        {
          "@attributes": {
            "city": "Yining,CN",
            "code": "YIN"
          }
        },
        {
          "@attributes": {
            "city": "Yiwu,CN",
            "code": "YIW"
          }
        },
        {
          "@attributes": {
            "city": "Ylivieska,FI",
            "code": "YLI"
          }
        },
        {
          "@attributes": {
            "city": "Yogyakarta,ID",
            "code": "JOG"
          }
        },
        {
          "@attributes": {
            "city": "Yokohama,JP",
            "code": "YOK"
          }
        },
        {
          "@attributes": {
            "city": "Yola,NG",
            "code": "YOL"
          }
        },
        {
          "@attributes": {
            "city": "Yonago,JP",
            "code": "YGJ"
          }
        },
        {
          "@attributes": {
            "city": "Yonaguni,JP",
            "code": "OGN"
          }
        },
        {
          "@attributes": {
            "city": "Yongai,PG",
            "code": "KGH"
          }
        },
        {
          "@attributes": {
            "city": "York,US",
            "code": "THV"
          }
        },
        {
          "@attributes": {
            "city": "York,GB",
            "code": "QQY"
          }
        },
        {
          "@attributes": {
            "city": "York Landing Indian Reserve,CA",
            "code": "ZAC"
          }
        },
        {
          "@attributes": {
            "city": "Yorke Island,AU",
            "code": "OKR"
          }
        },
        {
          "@attributes": {
            "city": "Yorkton,CA",
            "code": "YQV"
          }
        },
        {
          "@attributes": {
            "city": "Yoronjima,JP",
            "code": "RNJ"
          }
        },
        {
          "@attributes": {
            "city": "Yotvata,IL",
            "code": "YOT"
          }
        },
        {
          "@attributes": {
            "city": "Young,AU",
            "code": "NGA"
          }
        },
        {
          "@attributes": {
            "city": "Youngstown,US",
            "code": "YNG"
          }
        },
        {
          "@attributes": {
            "city": "Yreka,US",
            "code": "RKC"
          }
        },
        {
          "@attributes": {
            "city": "Yueyanng,CN",
            "code": "YUG"
          }
        },
        {
          "@attributes": {
            "city": "Yule Island,PG",
            "code": "RKU"
          }
        },
        {
          "@attributes": {
            "city": "Yulin,CN",
            "code": "UYN"
          }
        },
        {
          "@attributes": {
            "city": "Yuma,US",
            "code": "YUM"
          }
        },
        {
          "@attributes": {
            "city": "Yun Cheng,CN",
            "code": "YCU"
          }
        },
        {
          "@attributes": {
            "city": "Yurimaguas,PE",
            "code": "YMS"
          }
        },
        {
          "@attributes": {
            "city": "Yushu,CN",
            "code": "YUS"
          }
        },
        {
          "@attributes": {
            "city": "Yuyao,CN",
            "code": "YYP"
          }
        },
        {
          "@attributes": {
            "city": "Yuzhno Kurilsk,RU",
            "code": "DEE"
          }
        },
        {
          "@attributes": {
            "city": "Yuzhno Sakhalinsk,RU",
            "code": "UUS"
          }
        },
        {
          "@attributes": {
            "city": "Yverdon,CH",
            "code": "ZLJ"
          }
        },
        {
          "@attributes": {
            "city": "Zabljak,ME",
            "code": "ZBK"
          }
        },
        {
          "@attributes": {
            "city": "Zacatecas,MX",
            "code": "ZCL"
          }
        },
        {
          "@attributes": {
            "city": "Zachar Bay,US",
            "code": "KZB"
          }
        },
        {
          "@attributes": {
            "city": "Zadar,HR",
            "code": "ZAD"
          }
        },
        {
          "@attributes": {
            "city": "Zagora,MA",
            "code": "OZG"
          }
        },
        {
          "@attributes": {
            "city": "Zagreb,HR",
            "code": "ZAG"
          }
        },
        {
          "@attributes": {
            "city": "Zahedan,IR",
            "code": "ZAH"
          }
        },
        {
          "@attributes": {
            "city": "Zahle,LB",
            "code": "QZQ"
          }
        },
        {
          "@attributes": {
            "city": "Zakinthos,GR",
            "code": "ZTH"
          }
        },
        {
          "@attributes": {
            "city": "Zakopane,PL",
            "code": "QAZ"
          }
        },
        {
          "@attributes": {
            "city": "Zalaegerszeg,HU",
            "code": "ZLG"
          }
        },
        {
          "@attributes": {
            "city": "Zalengei,SD",
            "code": "ZLX"
          }
        },
        {
          "@attributes": {
            "city": "Zamboanga,PH",
            "code": "ZAM"
          }
        },
        {
          "@attributes": {
            "city": "Zamora,MX",
            "code": "ZMM"
          }
        },
        {
          "@attributes": {
            "city": "Zanaga,CG",
            "code": "ANJ"
          }
        },
        {
          "@attributes": {
            "city": "Zanesville,US",
            "code": "ZZV"
          }
        },
        {
          "@attributes": {
            "city": "Zanjan,IR",
            "code": "JWN"
          }
        },
        {
          "@attributes": {
            "city": "Zanzibar,TZ",
            "code": "ZNZ"
          }
        },
        {
          "@attributes": {
            "city": "Zapala,AR",
            "code": "APZ"
          }
        },
        {
          "@attributes": {
            "city": "Zaporozhe,UA",
            "code": "OZH"
          }
        },
        {
          "@attributes": {
            "city": "Zaqatala,AZ",
            "code": "ZTU"
          }
        },
        {
          "@attributes": {
            "city": "Zarafsan,UZ",
            "code": "AFS"
          }
        },
        {
          "@attributes": {
            "city": "Zaragoza,ES",
            "code": "ZAZ"
          }
        },
        {
          "@attributes": {
            "city": "Zaysan,KZ",
            "code": "SZI"
          }
        },
        {
          "@attributes": {
            "city": "Zemio,CF",
            "code": "IMO"
          }
        },
        {
          "@attributes": {
            "city": "Zermatt,CH",
            "code": "QZB"
          }
        },
        {
          "@attributes": {
            "city": "Zero,IN",
            "code": "ZER"
          }
        },
        {
          "@attributes": {
            "city": "Zhangjiakou,CN",
            "code": "ZQZ"
          }
        },
        {
          "@attributes": {
            "city": "Zhangye,CN",
            "code": "YZY"
          }
        },
        {
          "@attributes": {
            "city": "Zhanjiang,CN",
            "code": "ZHA"
          }
        },
        {
          "@attributes": {
            "city": "Zhaotong,CN",
            "code": "ZAT"
          }
        },
        {
          "@attributes": {
            "city": "Zhengzhou,CN",
            "code": "CGO"
          }
        },
        {
          "@attributes": {
            "city": "Zhenjiang,CN",
            "code": "ZUJ"
          }
        },
        {
          "@attributes": {
            "city": "Zhezkazgan,KZ",
            "code": "DZN"
          }
        },
        {
          "@attributes": {
            "city": "Zhi Jiang,CN",
            "code": "HJJ"
          }
        },
        {
          "@attributes": {
            "city": "Zhigansk,RU",
            "code": "ZIX"
          }
        },
        {
          "@attributes": {
            "city": "Zhijiang,CN",
            "code": "GJN"
          }
        },
        {
          "@attributes": {
            "city": "Zhob,PK",
            "code": "PZH"
          }
        },
        {
          "@attributes": {
            "city": "Zhongshan,CN",
            "code": "ZIS"
          }
        },
        {
          "@attributes": {
            "city": "Zhongwei,CN",
            "code": "ZHY"
          }
        },
        {
          "@attributes": {
            "city": "Zhoushan,CN",
            "code": "HSN"
          }
        },
        {
          "@attributes": {
            "city": "Zhuhai,CN",
            "code": "ZUH"
          }
        },
        {
          "@attributes": {
            "city": "Zhuzhou,CN",
            "code": "DHU"
          }
        },
        {
          "@attributes": {
            "city": "Zielona,PL",
            "code": "IEG"
          }
        },
        {
          "@attributes": {
            "city": "Ziguinchor,SN",
            "code": "ZIG"
          }
        },
        {
          "@attributes": {
            "city": "Zihuatanejo,MX",
            "code": "ZIH"
          }
        },
        {
          "@attributes": {
            "city": "Zilina,SK",
            "code": "ILZ"
          }
        },
        {
          "@attributes": {
            "city": "Zittau,DE",
            "code": "ZIT"
          }
        },
        {
          "@attributes": {
            "city": "Zlin,CZ",
            "code": "GTW"
          }
        },
        {
          "@attributes": {
            "city": "Zoersel,BE",
            "code": "OBL"
          }
        },
        {
          "@attributes": {
            "city": "Zofingen,CH",
            "code": "ZLL"
          }
        },
        {
          "@attributes": {
            "city": "Zonguldak,TR",
            "code": "ONQ"
          }
        },
        {
          "@attributes": {
            "city": "Zouerate,MR",
            "code": "OUZ"
          }
        },
        {
          "@attributes": {
            "city": "Zug Ch,CH",
            "code": "ZLM"
          }
        },
        {
          "@attributes": {
            "city": "Zurich,CH",
            "code": "ZRH"
          }
        },
        {
          "@attributes": {
            "city": "Zurs Lech,AT",
            "code": "ZRS"
          }
        },
        {
          "@attributes": {
            "city": "Zweibruecken,DE",
            "code": "ZQW"
          }
        },
        {
          "@attributes": {
            "city": "Zyryanka,RU",
            "code": "ZKP"
          }
        },
        {
          "@attributes": {
            "city": "khowai,IN",
            "code": "IXN"
          }
        }
      ]
    }
  };

  // hotelCities = result4;

  constructor(public dialog: MatDialog, private HotelData: HotelServiceService) { }

  ngOnInit() {
    this.showHotelDetails();
  }

  // Getting response data from hotel-service.service.ts
  showHotelDetails() {
    this.HotelData.getHotelDeatils(
      data => {
        this.HotelDetails = JSON.parse(data.response);
        this.HotelDetailsOriginal = JSON.parse(data.response);

        this.showHotelLoader = false;
      }

      // success path
    );

  }

  filterBy(filter: string) {
    switch (filter) {
      case '1':
      console.log(event.target);
        this.HotelDetails = this.HotelDetails.filter(
          data => {
            return data.Rating.includes('1');

          }
        )
        break;
      case '2':
        this.HotelDetails = this.HotelDetails.filter(
          data => {
            return data.Rating.includes('2');

          }
        )
        break;
      case '3':
        this.HotelDetails = this.HotelDetails.filter(
          data => {
            return data.Rating.includes('3');

          }
        )
        break;
      case '4':
        this.HotelDetails = this.HotelDetails.filter(
          data => {
            return data.Rating.includes('4');
          }
        )
        break;
      case '5':
        this.HotelDetails = this.HotelDetails.filter(
          data => {
            return data.Rating.includes('5');

          }
        )
        break;
      default:
        this.HotelDetails = this.HotelDetailsOriginal;

    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(hotelModifySearch, {
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.stickyTop = "sticky-top";
      this.passengers_state = 'd-none fadeOutRightBig';
      console.log(`Dialog result: ${result}`);
    });
    this.stickyTop = "";
    this.passengers_state = 'd-none fadeOutRightBig';
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  priceState: string = 'filter_content';
  amenitiesState: string = 'filter_content';
  locationState: string = 'filter_content';
  ratingState: string = 'filter_content';
  propertyTypeState: string = 'filter_content';
  dynamicClass: string = 'col-11';
  hotelresult: string = 'hotelresult3';
  hotelGridView: string = "gridView";
  hotelListView: string = "";
  hotel_grid: string = 'fadeIn';
  hotel_list: string = 'd-none';
  hotel_map: string = 'd-none';

  open_filter(event) {
    let length = event.target.classList.length;
    length = length - 1;
    let className = event.target.classList[length];
    console.log(className);
    if (className == 'priceState') {
      this.priceState = this.priceState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.priceState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'amenitiesState') {
      this.amenitiesState = this.amenitiesState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.amenitiesState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'locationState') {
      this.locationState = this.locationState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.locationState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.ratingState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'ratingState') {
      this.ratingState = this.ratingState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.ratingState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.propertyTypeState = 'filter_content';
    }
    if (className == 'propertyTypeState') {
      this.propertyTypeState = this.propertyTypeState === 'filter_content' ? 'fil' : 'filter_content';
      if (this.propertyTypeState == 'filter_content') {
        this.dynamicClass = 'col-11';
        this.hotelresult = 'hotelresult3';
      } else {
        this.dynamicClass = 'col-9';
        this.hotelresult = 'hotelresult2';
      }
      this.priceState = 'filter_content';
      this.amenitiesState = 'filter_content';
      this.locationState = 'filter_content';
      this.ratingState = 'filter_content';
    }
    // console.log(className);
    // this.menuState = this.menuState === 'filter_content' ? 'fil' : 'filter_content';
  }

  // Grid view
  gridView() {
    this.hotelGridView = 'gridView';
    this.hotelListView = '';
    this.hotel_grid = 'd-block fadeIn';
    this.hotel_list = 'd-none fadeOut';
    this.hotel_map = 'd-none fadeOut';
  }
  // List view
  listView() {
    this.hotelGridView = '';
    this.hotelListView = 'listView';
    this.hotel_grid = 'd-none fadeOut';
    this.hotel_list = 'd-flex fadeIn';
    this.hotel_map = 'd-none fadeOut';
  }
  // Map view
  mapView() {
    this.hotelGridView = '';
    this.hotelListView = 'listView';
    this.hotel_grid = 'd-none fadeOut';
    this.hotel_list = 'd-none fadeOut';
    this.hotel_map = 'd-block fadeIn';
  }


}

