import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { hotelModifySearch } from '../hotel.modify.component';
import { hotelInterface, HotelServiceService } from '../hotel-service/hotel-service.service';

// import { hotelInterface } from '../hotel.interface';

// import { catchError, retry } from 'rxjs/operators';
// var convert = require('xml-js');
// var xml = `<?xml version="1.0" encoding="utf-8" ?>
// <root>
//   <row city="AARAU,CH" code="ZDA" />
//   <row city="AHE Atoll,PF" code="AHE" />
//   <row city="ASHBURTON,NZ" code="ASG" />
//   <row city="AUBURN,US" code="AUN" />
//   <row city="AWABA,PG" code="AWB" />
//   <row city="Aabenraa,DK" code="XNR" />
//   <row city="Aachen,DE" code="AAH" />
//   <row city="Aalborg,DK" code="AAL" />
//   <row city="Aalesund,NO" code="AES" />
//   <row city="Aalsmeer,NL" code="QFA" />
//   <row city="Aappilattoq,GL" code="AOQ" />
//   <row city="Aappilattoq Nanortalik,GL" code="QUV" />
//   <row city="Aarhus,DK" code="AAR" />
//   <row city="Aasiaat,GL" code="JEG" />
//   <row city="Abadan,IR" code="ABD" />
//   <row city="Abaiang,KI" code="ABF" />
//   <row city="Abakan,RU" code="ABA" />
//   <row city="Abbeville,FR" code="XAB" />
//   <row city="Abbotsford,CA" code="YXX" />
//   <row city="Abbs,YE" code="EAB" />
//   <row city="Abemama,KI" code="AEA" />
//   <row city="Aberdeen,US" code="APG" />
//   <row city="Aberdeen,US" code="ABR" />
//   <row city="Aberdeen,GB" code="ABZ" />
//   <row city="Abha,SA" code="AHB" />
//   <row city="Abidjan,CI" code="ABJ" />
//   <row city="Abilene,US" code="ABI" />
//   <row city="Abingdon,US" code="VJI" />
//   <row city="Abu Dhabi,AE" code="AUH" />
//   <row city="Abu Dhabi cities,AE" code="ZVJ" />
//   <row city="Abu Simbel,EG" code="ABS" />
//   <row city="Abuja,NG" code="ABV" />
//   <row city="Acandi,CO" code="ACD" />
//   <row city="Acapulco,MX" code="ACA" />
//   <row city="Acarigua,VE" code="AGV" />
//   <row city="Accra,GH" code="ACC" />
//   <row city="Ada OK,US" code="ADT" />
//   <row city="Adak Island,US" code="ADK" />
//   <row city="Adana,TR" code="ADA" />
//   <row city="Addis Ababa,ET" code="ADD" />
//   <row city="Adelaide,AU" code="ADL" />
//   <row city="Adelboden,CH" code="ZDB" />
//   <row city="Aden,YE" code="ADE" />
//   <row city="Adiyaman,TR" code="ADF" />
//   <row city="Adrar,DZ" code="AZR" />
//   <row city="Adriamena,MG" code="WAD" />
//   <row city="Adrian,US" code="ADG" />
//   <row city="Aek Godang,ID" code="AEG" />
//   <row city="Afyon,TR" code="AFY" />
//   <row city="Agadir,MA" code="AGA" />
//   <row city="Agartala,IN" code="IXA" />
//   <row city="Agatti Island,IN" code="AGX" />
//   <row city="Agaun,PG" code="AUP" />
//   <row city="Agde,FR" code="XAG" />
//   <row city="Agen,FR" code="AGF" />
//   <row city="Aggeneys,ZA" code="AGZ" />
//   <row city="Aghios Nicolaos,GR" code="ZAN" />
//   <row city="Agra,IN" code="AGR" />
//   <row city="Agri,TR" code="AJI" />
//   <row city="Agrigento,IT" code="QAO" />
//   <row city="Agrinion,GR" code="AGQ" />
//   <row city="Aguadilla,US" code="BQN" />
//   <row city="Aguascalientes,MX" code="AGU" />
//   <row city="Aguni,JP" code="AGJ" />
//   <row city="Ahmedabad,IN" code="AMD" />
//   <row city="Ahwaz,IR" code="AWZ" />
//   <row city="Aigle,CH" code="ZDC" />
//   <row city="Aiken,US" code="AIK" />
//   <row city="Ainsworth,US" code="ANW" />
//   <row city="Aiome,PG" code="AIE" />
//   <row city="Aioun Atrouss,MR" code="AEO" />
//   <row city="Airlie Beach,AU" code="WSY" />
//   <row city="Aitape,PG" code="ATP" />
//   <row city="Aitutaki,CK" code="AIT" />
//   <row city="Aix En Provence,FR" code="QXB" />
//   <row city="Aizawl,IN" code="AJL" />
//   <row city="Ajaccio,FR" code="AJA" />
//   <row city="Ajman cities,AE" code="QAJ" />
//   <row city="Akhiok,US" code="AKK" />
//   <row city="Akiachak,US" code="KKI" />
//   <row city="Akiak,US" code="AKI" />
//   <row city="Akita,JP" code="AXT" />
//   <row city="Akola,IN" code="AKD" />
//   <row city="Akron,US" code="CAK" />
//   <row city="Akron,US" code="AKO" />
//   <row city="Aksu,CN" code="AKU" />
//   <row city="Aktau,KZ" code="SCO" />
//   <row city="Akui,SB" code="AKS" />
//   <row city="Akulivik,CA" code="AKV" />
//   <row city="Akure,NG" code="AKR" />
//   <row city="Akureyri,IS" code="AEY" />
//   <row city="Akutan,US" code="KQA" />
//   <row city="Al Ain,AE" code="AAN" />
//   <row city="Al Baha,SA" code="ABT" />
//   <row city="Al Fujairah,AE" code="FJR" />
//   <row city="Al Ghaydah,YE" code="AAY" />
//   <row city="Al Hoceima,MA" code="AHU" />
//   <row city="Al Jouf,SA" code="AJF" />
//   <row city="Al Najaf,IQ" code="NJF" />
//   <row city="Al No,NO" code="XXR" />
//   <row city="Al Ula,SA" code="ULH" />
//   <row city="Alagoinhas,BR" code="QGS" />
//   <row city="Alakanuk,US" code="AUK" />
//   <row city="Alameda Naval Air Station,US" code="NGZ" />
//   <row city="Alamogordo,US" code="ALM" />
//   <row city="Alamos,MX" code="XAL" />
//   <row city="Alamosa,US" code="ALS" />
//   <row city="Alba Iulia,RO" code="QAY" />
//   <row city="Albacete,ES" code="ABC" />
//   <row city="Albany,US" code="ABY" />
//   <row city="Albany,US" code="ALB" />
//   <row city="Albany,AU" code="ALH" />
//   <row city="Albany,US" code="QWY" />
//   <row city="Albenga,IT" code="ALL" />
//   <row city="Albert Lea,US" code="AEL" />
//   <row city="Albertville,FR" code="XAV" />
//   <row city="Albi,FR" code="LBI" />
//   <row city="Albuq,YE" code="BUK" />
//   <row city="Albuquerque,US" code="ABQ" />
//   <row city="Albury,AU" code="ABX" />
//   <row city="Aldan,RU" code="ADH" />
//   <row city="Alderney,GB" code="ACI" />
//   <row city="Aldershot,CA" code="XLY" />
//   <row city="Aleknagik,US" code="WKK" />
//   <row city="Alencon,FR" code="XAN" />
//   <row city="Aleneva,US" code="AED" />
//   <row city="Aleppo,SY" code="ALP" />
//   <row city="Alert Bay,CA" code="YAL" />
//   <row city="Ales,FR" code="XAS" />
//   <row city="Alessandria,IT" code="QAL" />
//   <row city="Alexander Bay,ZA" code="ALJ" />
//   <row city="Alexander cities,US" code="ALX" />
//   <row city="Alexandra,NZ" code="ALR" />
//   <row city="Alexandria,US" code="AEX" />
//   <row city="Alexandria,EG" code="ALY" />
//   <row city="Alexandria,AU" code="AXL" />
//   <row city="Alexandria,US" code="AXN" />
//   <row city="Alexandria,CA" code="XFS" />
//   <row city="Alexandroupolis,GR" code="AXD" />
//   <row city="Alfenas,BR" code="QXW" />
//   <row city="Algeciras,ES" code="AEI" />
//   <row city="Alghero,IT" code="AHO" />
//   <row city="Algiers,DZ" code="ALG" />
//   <row city="Alicante,ES" code="ALC" />
//   <row city="Alice,US" code="ALI" />
//   <row city="Alice Springs,AU" code="ASP" />
//   <row city="Aliceville,US" code="AIV" />
//   <row city="Alitak,US" code="ALZ" />
//   <row city="Allahabad,IN" code="IXD" />
//   <row city="Allakaket,US" code="AET" />
//   <row city="Allentown,US" code="ABE" />
//   <row city="Alliance,US" code="AIA" />
//   <row city="Alluitsup Paa,GL" code="LLU" />
//   <row city="Alma,CA" code="YTF" />
//   <row city="Almaty,KZ" code="ALA" />
//   <row city="Almelo,NL" code="QYL" />
//   <row city="Almeria,ES" code="LEI" />
//   <row city="Along,IN" code="IXV" />
//   <row city="Alor,ID" code="ARD" />
//   <row city="Alor Setar,MY" code="AOR" />
//   <row city="Alotau,PG" code="GUR" />
//   <row city="Alpena,US" code="APN" />
//   <row city="Alpha,AU" code="ABH" />
//   <row city="Alpine,US" code="ALE" />
//   <row city="Alta,NO" code="ALF" />
//   <row city="Alta Floresta,BR" code="AFL" />
//   <row city="Altamira,BR" code="ATM" />
//   <row city="Altay,CN" code="AAT" />
//   <row city="Altenburg,DE" code="AOC" />
//   <row city="Altenrhein,CH" code="ACH" />
//   <row city="Alto Rio Senguerr,AR" code="ARR" />
//   <row city="Alton,US" code="ALN" />
//   <row city="Alton Downs,AU" code="AWN" />
//   <row city="Altoona,US" code="AOO" />
//   <row city="Altus,US" code="LTS" />
//   <row city="Alula,SO" code="ALU" />
//   <row city="Alvdal,NO" code="XJA" />
//   <row city="Alvesta,SE" code="XXA" />
//   <row city="Alxa Right Banner,CN" code="RHT" />
//   <row city="Alzey,DE" code="XZY" />
//   <row city="Amahai,ID" code="AHI" />
//   <row city="Amakusa,JP" code="AXJ" />
//   <row city="Amalfi,IT" code="AFP" />
//   <row city="Amami O Shima,JP" code="ASJ" />
//   <row city="Amanab,PG" code="AMU" />
//   <row city="Amarillo,US" code="AMA" />
//   <row city="Amasya,TR" code="MZH" />
//   <row city="Amazon Bay,PG" code="AZB" />
//   <row city="Ambanja,MG" code="IVA" />
//   <row city="Ambato,EC" code="ATF" />
//   <row city="Ambatomainty,MG" code="AMY" />
//   <row city="Ambatondrazaka,MG" code="WAM" />
//   <row city="Ambilobe,MG" code="AMB" />
//   <row city="Ambler,US" code="ABL" />
//   <row city="Amboise,FR" code="XAM" />
//   <row city="Ambon,ID" code="AMQ" />
//   <row city="Ambunti,PG" code="AUJ" />
//   <row city="Amchitka,US" code="AHT" />
//   <row city="Americana,BR" code="QWJ" />
//   <row city="Amersfoort,NL" code="QYM" />
//   <row city="Ames,US" code="AMW" />
//   <row city="Amherst,CA" code="XZK" />
//   <row city="Amiens,FR" code="QAM" />
//   <row city="Amman,JO" code="AMM" />
//   <row city="Ammassivik,GL" code="QUW" />
//   <row city="Amook Bay,US" code="AOS" />
//   <row city="Amos,CA" code="YEY" />
//   <row city="Ampanihy,MG" code="AMP" />
//   <row city="Ampara,LK" code="AFK" />
//   <row city="Amritsar,IN" code="ATQ" />
//   <row city="Amsterdam,NL" code="AMS" />
//   <row city="Anaa,PF" code="AAA" />
//   <row city="Anaco,VE" code="AAO" />
//   <row city="Anacostia,US" code="NDV" />
//   <row city="Anadyr,RU" code="DYR" />
//   <row city="Anaheim,US" code="ANA" />
//   <row city="Anaktuvuk Pass,US" code="AKP" />
//   <row city="Analalava,MG" code="HVA" />
//   <row city="Anapa,RU" code="AAQ" />
//   <row city="Anapolis,BR" code="APS" />
//   <row city="Anchorage,US" code="ANC" />
//   <row city="Ancona,IT" code="AOI" />
//   <row city="Ancortes,US" code="OTS" />
//   <row city="Ancud,CL" code="ZUD" />
//   <row city="Andahuaylas,PE" code="ANS" />
//   <row city="Andalsnes,NO" code="XGI" />
//   <row city="Andapa,MG" code="ZWA" />
//   <row city="Andenes,NO" code="ANX" />
//   <row city="Anderson,US" code="AID" />
//   <row city="Anderson,US" code="AND" />
//   <row city="Andizhan,UZ" code="AZN" />
//   <row city="Andorra La Vella,AD" code="ALV" />
//   <row city="Andros Town,BS" code="ASD" />
//   <row city="Anegada,VG" code="NGD" />
//   <row city="Aneityum,VU" code="AUY" />
//   <row city="Angel Fire,US" code="AXX" />
//   <row city="Angelholm,SE" code="AGH" />
//   <row city="Angermuende,DE" code="ZAX" />
//   <row city="Angers,FR" code="ANE" />
//   <row city="Angoon,US" code="AGN" />
//   <row city="Angouleme,FR" code="ANG" />
//   <row city="Anguganak,PG" code="AKG" />
//   <row city="Anguilla,AI" code="AXA" />
//   <row city="Aniak,US" code="ANI" />
//   <row city="Anita Bay,US" code="AIB" />
//   <row city="Aniwa,VU" code="AWD" />
//   <row city="Anjouan,KM" code="AJN" />
//   <row city="Ankang,CN" code="AKA" />
//   <row city="Ankara,TR" code="ANK" />
//   <row city="Ankavandra,MG" code="JVA" />
//   <row city="Ankazoabo,MG" code="WAK" />
//   <row city="Anklam,DE" code="QKQ" />
//   <row city="Ann Arbor,US" code="ARB" />
//   <row city="Ann MM,MM" code="VBA" />
//   <row city="Annaba,DZ" code="AAE" />
//   <row city="Annapolis,US" code="ANP" />
//   <row city="Annecy,FR" code="NCY" />
//   <row city="Annemasse,FR" code="QNJ" />
//   <row city="Annette Island,US" code="ANN" />
//   <row city="Anniston,US" code="ANB" />
//   <row city="Ansbach,DE" code="QOB" />
//   <row city="Anshan,CN" code="AOG" />
//   <row city="Anshun,CN" code="AVA" />
//   <row city="Anta,PE" code="ATA" />
//   <row city="Antalaha,MG" code="ANM" />
//   <row city="Antalya,TR" code="AYT" />
//   <row city="Antananarivo,MG" code="TNR" />
//   <row city="Anthony,US" code="ANY" />
//   <row city="Antibes,FR" code="XAT" />
//   <row city="Antigua,AG" code="ANU" />
//   <row city="Antlers,US" code="ATE" />
//   <row city="Antofagasta,CL" code="ANF" />
//   <row city="Antsalova,MG" code="WAQ" />
//   <row city="Antsohihy,MG" code="WAI" />
//   <row city="Antwerp,BE" code="ANR" />
//   <row city="Anuradhapura,LK" code="ACJ" />
//   <row city="Anvik,US" code="ANV" />
//   <row city="Anyang,CN" code="AYN" />
//   <row city="Aomori,JP" code="AOJ" />
//   <row city="Aosta,IT" code="AOT" />
//   <row city="Apalachicola,US" code="AAF" />
//   <row city="Apartado,CO" code="APO" />
//   <row city="Apataki,PF" code="APK" />
//   <row city="Apatzingan,MX" code="AZG" />
//   <row city="Apeldoorn,NL" code="QYP" />
//   <row city="Apia,WS" code="APW" />
//   <row city="Appenzell,CH" code="ZAP" />
//   <row city="Appleton,US" code="ATW" />
//   <row city="Applevalley,US" code="APV" />
//   <row city="Aqaba,JO" code="AQJ" />
//   <row city="Aqtobe,KZ" code="AKX" />
//   <row city="Aracaju,BR" code="AJU" />
//   <row city="Aracatuba,BR" code="ARU" />
//   <row city="Arad,RO" code="ARW" />
//   <row city="Aragip,PG" code="ARP" />
//   <row city="Araguaina,BR" code="AUX" />
//   <row city="Aranuka,KI" code="AAK" />
//   <row city="Arapoti,BR" code="AAG" />
//   <row city="Arar,SA" code="RAE" />
//   <row city="Araracuara,CO" code="ACR" />
//   <row city="Araraquara,BR" code="AQA" />
//   <row city="Ararat,AU" code="ARY" />
//   <row city="Arauca,CO" code="AUC" />
//   <row city="Arawa,PG" code="RAW" />
//   <row city="Araxa,BR" code="AAX" />
//   <row city="Arba Minch,ET" code="AMH" />
//   <row city="Arboga,SE" code="XXT" />
//   <row city="Arbon,CH" code="ZDD" />
//   <row city="Arcachon,FR" code="XAC" />
//   <row city="Arcata,US" code="ACV" />
//   <row city="Arctic Village,US" code="ARC" />
//   <row city="Ardabil,IR" code="ADU" />
//   <row city="Ardmore,NZ" code="AMZ" />
//   <row city="Ardmore,US" code="ADM" />
//   <row city="Arecibo,US" code="ARE" />
//   <row city="Arendal,NO" code="XGD" />
//   <row city="Arequipa,PE" code="AQP" />
//   <row city="Arezzo,IT" code="QZO" />
//   <row city="Arica,CL" code="ARI" />
//   <row city="Aripuana,BR" code="HOTEL" />
//   <row city="Arkhangelsk,RU" code="ARH" />
//   <row city="Arles,FR" code="ZAF" />
//   <row city="Arly,BF" code="ARL" />
//   <row city="Armenia,CO" code="AXM" />
//   <row city="Armidale,AU" code="ARM" />
//   <row city="Armstromg,CA" code="YYW" />
//   <row city="Arna,NO" code="XHT" />
//   <row city="Arnhem,NL" code="QAR" />
//   <row city="Arnhem cities,NL" code="ZYM" />
//   <row city="Arnsberg,DE" code="ZCA" />
//   <row city="Arona,SB" code="RNA" />
//   <row city="Arorae Island,KI" code="AIS" />
//   <row city="Arosa,CH" code="ZDE" />
//   <row city="Arrabury,AU" code="AAB" />
//   <row city="Arras,FR" code="QRV" />
//   <row city="Arsuk,GL" code="JRK" />
//   <row city="Artesia,US" code="ATS" />
//   <row city="Arthurs Town,BS" code="ATC" />
//   <row city="Artigas,UY" code="ATI" />
//   <row city="Arua,UG" code="RUA" />
//   <row city="Aruba,AW" code="AUA" />
//   <row city="Arusha,TZ" code="ARK" />
//   <row city="Arutua,PF" code="AXR" />
//   <row city="Arviat,CA" code="YEK" />
//   <row city="Arvidsjaur,SE" code="AJR" />
//   <row city="Arvika,SE" code="XYY" />
//   <row city="Asaba,NG" code="ABB" />
//   <row city="Asahikawa,JP" code="AKJ" />
//   <row city="Asaloyeh,IR" code="YEH" />
//   <row city="Asau,WS" code="AAU" />
//   <row city="Asbury Park,US" code="ARX" />
//   <row city="Aschaffenburg,DE" code="ZCB" />
//   <row city="Ascoli Piceno,IT" code="QNO" />
//   <row city="Ascona,CH" code="ACO" />
//   <row city="Ashcroft,CA" code="YZA" />
//   <row city="Asheville,US" code="AVL" />
//   <row city="Ashford,GB" code="QDH" />
//   <row city="Ashgabat,TM" code="ASB" />
//   <row city="Ashland,US" code="ASX" />
//   <row city="Asker,NO" code="XGU" />
//   <row city="Asmara,ER" code="ASM" />
//   <row city="Asosa,ET" code="ASO" />
//   <row city="Aspen,US" code="ASE" />
//   <row city="Assab,ER" code="ASA" />
//   <row city="Assis,BR" code="AIF" />
//   <row city="Assiut,EG" code="ATZ" />
//   <row city="Astana,KZ" code="TSE" />
//   <row city="Astoria,US" code="AST" />
//   <row city="Astrakhan,RU" code="ASF" />
//   <row city="Asturias,ES" code="OVD" />
//   <row city="Astypalaia Island,GR" code="JTY" />
//   <row city="Asuncion,PY" code="ASU" />
//   <row city="Aswan,EG" code="ASW" />
//   <row city="Atambua,ID" code="ABU" />
//   <row city="Atammik,GL" code="QJF" />
//   <row city="Ataq,YE" code="AXK" />
//   <row city="Atar,MR" code="ATR" />
//   <row city="Atauro,TL" code="AUT" />
//   <row city="Atbara,SD" code="ATB" />
//   <row city="Athens,US" code="MMI" />
//   <row city="Athens,US" code="AHN" />
//   <row city="Athens,GR" code="ATH" />
//   <row city="Athens,US" code="ATO" />
//   <row city="Atibaia,BR" code="ZBW" />
//   <row city="Atikokan,CA" code="YIB" />
//   <row city="Atiu Island,CK" code="AIU" />
//   <row city="Atka,US" code="AKB" />
//   <row city="Atlanta,US" code="ATL" />
//   <row city="Atlantic,US" code="AIO" />
//   <row city="Atlantic cities,US" code="AIY" />
//   <row city="Atmautluak,US" code="ATT" />
//   <row city="Atoifi,SB" code="ATD" />
//   <row city="Atqasuk,US" code="ATK" />
//   <row city="Atsugi,JP" code="NJA" />
//   <row city="Attawapiskat,CA" code="YAT" />
//   <row city="Attu,GL" code="QGQ" />
//   <row city="Attu Island,US" code="ATU" />
//   <row city="Atuona,PF" code="AUQ" />
//   <row city="Atyrau,KZ" code="GUW" />
//   <row city="Aua Island,PG" code="AUI" />
//   <row city="Aubagne,FR" code="JAH" />
//   <row city="Aubenas,FR" code="OBS" />
//   <row city="Auburn,US" code="AUO" />
//   <row city="Auckland,NZ" code="AKL" />
//   <row city="Aue De,DE" code="ZAU" />
//   <row city="Augsburg,DE" code="AGB" />
//   <row city="Augusta,US" code="AGS" />
//   <row city="Augusta,US" code="AUG" />
//   <row city="Aupaluk,CA" code="YPJ" />
//   <row city="Aurangabad,IN" code="IXU" />
//   <row city="Auray,FR" code="XUY" />
//   <row city="Aurillac,FR" code="AUR" />
//   <row city="Aurora,US" code="AUZ" />
//   <row city="Aurukun Mission,AU" code="AUU" />
//   <row city="Austin,US" code="ASQ" />
//   <row city="Austin,US" code="AUM" />
//   <row city="Austin,US" code="AUS" />
//   <row city="Austral Downs,AU" code="AWP" />
//   <row city="Auxerre,FR" code="AUF" />
//   <row city="Avare,BR" code="QVP" />
//   <row city="Aveiro,PT" code="ZAV" />
//   <row city="Avellino,IT" code="QVN" />
//   <row city="Avesta Krylbo,SE" code="XYP" />
//   <row city="Aviano,IT" code="AVB" />
//   <row city="Avignon,FR" code="AVN" />
//   <row city="Avila,ES" code="AVS" />
//   <row city="Avu Avu,SB" code="AVU" />
//   <row city="Axum,ET" code="AXU" />
//   <row city="Ayacucho,PE" code="AYP" />
//   <row city="Ayers Rock,AU" code="AYQ" />
//   <row city="Ayia Napa,CY" code="QNP" />
//   <row city="Ayr Au,AU" code="AYR" />
//   <row city="BEREZOVO,RU" code="EZV" />
//   <row city="BERNAY,FR" code="XBX" />
//   <row city="BHURBAN,PK" code="BHC" />
//   <row city="BIG SPRING,US" code="HCA" />
//   <row city="BOR RU,RU" code="TGP" />
//   <row city="BOSSET,PG" code="BOT" />
//   <row city="BROOKLYN,US" code="QFF" />
//   <row city="Babo,ID" code="BXB" />
//   <row city="Bacau,RO" code="BCM" />
//   <row city="Bacolod,PH" code="BCD" />
//   <row city="Badajoz,ES" code="BJZ" />
//   <row city="Bade,ID" code="BXD" />
//   <row city="Baden,CH" code="ZDG" />
//   <row city="Baden Baden,DE" code="ZCC" />
//   <row city="Bado Lite,CD" code="BDT" />
//   <row city="Badu Island,AU" code="BDD" />
//   <row city="Bafoussam,CM" code="BFX" />
//   <row city="Bagdad,US" code="BGT" />
//   <row city="Bagdogra,IN" code="IXB" />
//   <row city="Bage,BR" code="BGX" />
//   <row city="Baghdad,IQ" code="BGW" />
//   <row city="Bagotville,CA" code="YBG" />
//   <row city="Baguio,PH" code="BAG" />
//   <row city="Bahar Dar,ET" code="BJR" />
//   <row city="Bahawalpur,PK" code="BHV" />
//   <row city="Bahia Blanca,AR" code="BHI" />
//   <row city="Bahia De Los Angeles,MX" code="BHL" />
//   <row city="Bahia Pina,PA" code="BFQ" />
//   <row city="Bahia Solano,CO" code="BSC" />
//   <row city="Baia Mare,RO" code="BAY" />
//   <row city="Baibara,PG" code="BAP" />
//   <row city="Baie Comeau,CA" code="YBC" />
//   <row city="Baie Johan Beetz,CA" code="YBJ" />
//   <row city="Bainbridge,US" code="BGE" />
//   <row city="Bairnsdale,AU" code="BSJ" />
//   <row city="Baise,CN" code="AEB" />
//   <row city="Baishan,CN" code="NBS" />
//   <row city="Bajawa,ID" code="BJW" />
//   <row city="Bakalalan,MY" code="BKM" />
//   <row city="Bakel,SN" code="BXE" />
//   <row city="Baker,US" code="BKE" />
//   <row city="Baker Lake,CA" code="YBK" />
//   <row city="Bakersfield,US" code="BFL" />
//   <row city="Bakkafjordur,IS" code="BJD" />
//   <row city="Balalae,SB" code="BAS" />
//   <row city="Bali,CM" code="BLC" />
//   <row city="Bali,PG" code="BAJ" />
//   <row city="Balikesir,TR" code="BZI" />
//   <row city="Balikpapan,ID" code="BPN" />
//   <row city="Balimo,PG" code="OPU" />
//   <row city="Balimuru,PG" code="VMU" />
//   <row city="Ballina,AU" code="BNK" />
//   <row city="Balmaceda,CL" code="BBA" />
//   <row city="Balranald,AU" code="BZD" />
//   <row city="Balsas,BR" code="BSS" />
//   <row city="Balti,MD" code="BZY" />
//   <row city="Baltimore,US" code="BWI" />
//   <row city="Balurghat,IN" code="RGH" />
//   <row city="Bamaga,AU" code="ABM" />
//   <row city="Bamako,ML" code="BKO" />
//   <row city="Bamberg,DE" code="ZCD" />
//   <row city="Bamenda,CM" code="BPC" />
//   <row city="Ban Mak Khaen,TH" code="BAO" />
//   <row city="Banda Aceh,ID" code="BTJ" />
//   <row city="Bandanaira,ID" code="NDA" />
//   <row city="Bandar Abbas,IR" code="BND" />
//   <row city="Bandar Lampung,ID" code="TKG" />
//   <row city="Bandar Lengeh,IR" code="BDH" />
//   <row city="Bandar Seri Begawan,BN" code="BWN" />
//   <row city="Bandol,FR" code="XBZ" />
//   <row city="Bandundu,CD" code="FDU" />
//   <row city="Bandung,ID" code="BDO" />
//   <row city="Banff,CA" code="YBA" />
//   <row city="Bangda,CN" code="BPX" />
//   <row city="Bangkok,TH" code="BKK" />
//   <row city="Bangor,US" code="BGR" />
//   <row city="Bangui,CF" code="BGF" />
//   <row city="Banja Luka,BA" code="BNX" />
//   <row city="Banjarmasin,ID" code="BDJ" />
//   <row city="Bankstown,AU" code="BWU" />
//   <row city="Banmethuot,VN" code="BMV" />
//   <row city="Banning,US" code="BNG" />
//   <row city="Bannu,PK" code="BNP" />
//   <row city="Bantry,IE" code="BYT" />
//   <row city="Banyuwangi,ID" code="BWX" />
//   <row city="Baoding,CN" code="BVQ" />
//   <row city="Baoshan,CN" code="BSD" />
//   <row city="Baotou,CN" code="BAV" />
//   <row city="Bar Harbor,US" code="BHB" />
//   <row city="Bar Le Duc,FR" code="XBD" />
//   <row city="Bar River,CA" code="YEB" />
//   <row city="Baracoa,CU" code="BCA" />
//   <row city="Barahona,DO" code="BRX" />
//   <row city="Baranof,US" code="BNF" />
//   <row city="Barbacena,BR" code="QAK" />
//   <row city="Barbelos,BR" code="BAZ" />
//   <row city="Barbuda,KN" code="BBQ" />
//   <row city="Barcaldine,AU" code="BCI" />
//   <row city="Barcelona,ES" code="BCN" />
//   <row city="Barcelona,VE" code="BLA" />
//   <row city="Bardufoss,NO" code="BDU" />
//   <row city="Bari,IT" code="BRI" />
//   <row city="Barinas,VE" code="BNS" />
//   <row city="Bario,MY" code="BBN" />
//   <row city="Barisal,BD" code="BZL" />
//   <row city="Barnaul,RU" code="BAX" />
//   <row city="Barquisimeto,VE" code="BRM" />
//   <row city="Barra,GB" code="BRR" />
//   <row city="Barra Del Colorado,CR" code="BCL" />
//   <row city="Barra Do Garcas,BR" code="BPG" />
//   <row city="Barrancabermeja,CO" code="EJA" />
//   <row city="Barranquilla,CO" code="BAQ" />
//   <row city="Barreiras,BR" code="BRA" />
//   <row city="Barretos,BR" code="BAT" />
//   <row city="Barrow,US" code="BRW" />
//   <row city="Barrow In Furness,GB" code="BWF" />
//   <row city="Barter Island,US" code="BTI" />
//   <row city="Barth,DE" code="BBH" />
//   <row city="Bartlesville,US" code="BVO" />
//   <row city="Bartow,US" code="BOW" />
//   <row city="Basango,CD" code="BAN" />
//   <row city="Basankusu,CD" code="BSU" />
//   <row city="Basco,PH" code="BSO" />
//   <row city="Basel,CH" code="BSL" />
//   <row city="Basingstoke,GB" code="XQB" />
//   <row city="Basra,IQ" code="BSR" />
//   <row city="Basse Terre,GP" code="BBR" />
//   <row city="Bastia,FR" code="BIA" />
//   <row city="Bata,GQ" code="BSG" />
//   <row city="Batagay,RU" code="BQJ" />
//   <row city="Batam,ID" code="BTH" />
//   <row city="Batesman Bay,AU" code="QBW" />
//   <row city="Batesville,US" code="HLB" />
//   <row city="Batesville,US" code="BVX" />
//   <row city="Bath,GB" code="QQX" />
//   <row city="Bathurst,CA" code="ZBF" />
//   <row city="Bathurst,AU" code="BHS" />
//   <row city="Bathurst Isl,AU" code="BRT" />
//   <row city="Batman,TR" code="BAL" />
//   <row city="Batna,DZ" code="BLJ" />
//   <row city="Baton Rouge,US" code="BTR" />
//   <row city="Batouri,CM" code="OUR" />
//   <row city="Batsfjord,NO" code="BJF" />
//   <row city="Battambang,KH" code="BBM" />
//   <row city="Batticaloa,LK" code="BTC" />
//   <row city="Battle Creek,US" code="BTL" />
//   <row city="Batumi,GE" code="BUS" />
//   <row city="Baubau,ID" code="BUW" />
//   <row city="Baucau,TL" code="BCH" />
//   <row city="Bauru,BR" code="JTC" />
//   <row city="Bauru Old Code,BR" code="BAU" />
//   <row city="Bay cities,US" code="BBC" />
//   <row city="Bayamo,CU" code="BYM" />
//   <row city="Bayannur,CN" code="RLK" />
//   <row city="Bayonne,FR" code="XBY" />
//   <row city="Bayreuth,DE" code="BYU" />
//   <row city="Baytown,US" code="HPY" />
//   <row city="Bealanana,MG" code="WBE" />
//   <row city="Bearskin Lake Indian Reserve,CA" code="XBE" />
//   <row city="Beaufort,US" code="BFT" />
//   <row city="Beaulieu Sur Mer,FR" code="XBM" />
//   <row city="Beaumont,US" code="BPT" />
//   <row city="Beaune,FR" code="XBV" />
//   <row city="Beauvais Tille,FR" code="BVA" />
//   <row city="Beaver,US" code="WBQ" />
//   <row city="Beaver Creek,US" code="ZBV" />
//   <row city="Beaver Creek,CA" code="YXQ" />
//   <row city="Beaver Falls,US" code="BFP" />
//   <row city="Bebedouro,BR" code="QAU" />
//   <row city="Bechar,DZ" code="CBH" />
//   <row city="Beckley,US" code="BKW" />
//   <row city="Beckwourth,US" code="NVN" />
//   <row city="Bedford,US" code="BED" />
//   <row city="Bedford,US" code="BFR" />
//   <row city="Bedford,GB" code="XQD" />
//   <row city="Bedourie,AU" code="BEU" />
//   <row city="Bedwell Harbor,CA" code="YBW" />
//   <row city="Beef Island,VG" code="EIS" />
//   <row city="Beersheba,IL" code="BEV" />
//   <row city="Beeville,US" code="NIR" />
//   <row city="Beica,ET" code="BEI" />
//   <row city="Beida,LY" code="LAQ" />
//   <row city="Beihai,CN" code="BHY" />
//   <row city="Beihan,YE" code="BHN" />
//   <row city="Beijing,CN" code="BJS" />
//   <row city="Beira,MZ" code="BEW" />
//   <row city="Beirut,LB" code="BEY" />
//   <row city="Beja,PT" code="BYJ" />
//   <row city="Bejaia,DZ" code="BJA" />
//   <row city="Bekily,MG" code="OVA" />
//   <row city="Belaga,MY" code="BLG" />
//   <row city="Belaya Gora,RU" code="BGN" />
//   <row city="Belem,BR" code="BEL" />
//   <row city="Belep Island,NC" code="BMY" />
//   <row city="Belfast,GB" code="BFS" />
//   <row city="Belfort,FR" code="BOR" />
//   <row city="Belgaum,IN" code="IXG" />
//   <row city="Belgorod,RU" code="EGO" />
//   <row city="Belgrade,RS" code="BEG" />
//   <row city="Belize cities,BZ" code="BZE" />
//   <row city="Bella Coola,CA" code="QBC" />
//   <row city="Bellary,IN" code="BEP" />
//   <row city="Bellegarde,FR" code="XBF" />
//   <row city="Belleville,US" code="BLV" />
//   <row city="Belleville,CA" code="XVV" />
//   <row city="Bellingham,US" code="BLI" />
//   <row city="Bellinzona,CH" code="ZDI" />
//   <row city="Bellona,SB" code="BNY" />
//   <row city="Belluno,IT" code="BLX" />
//   <row city="Belmar,US" code="BLM" />
//   <row city="Belmopan,BZ" code="BCV" />
//   <row city="Belo,MG" code="BMD" />
//   <row city="Belo Horizonte,BR" code="BHZ" />
//   <row city="Beloit,US" code="JVL" />
//   <row city="Belorussky Rail Station,RU" code="JQO" />
//   <row city="Beloyarsky,RU" code="EYK" />
//   <row city="Beluga,US" code="BVU" />
//   <row city="Bembridge,GB" code="BBP" />
//   <row city="Bemidji,US" code="BJI" />
//   <row city="Bemolanga,MG" code="BZM" />
//   <row city="Benbecula,GB" code="BEB" />
//   <row city="Bendigo,AU" code="BXG" />
//   <row city="Benevento,IT" code="QBV" />
//   <row city="Bengaluru,IN" code="BLR" />
//   <row city="Bangalore,IN" code="BLR" />
//   <row city="Benghazi,LY" code="BEN" />
//   <row city="Bengkulu,ID" code="BKS" />
//   <row city="Benguela,AO" code="BUG" />
//   <row city="Beni Mellal,MA" code="BEM" />
//   <row city="Benin cities,NG" code="BNI" />
//   <row city="Bensbach,PG" code="BSP" />
//   <row city="Bento Goncalves,BR" code="BGV" />
//   <row city="Benton Harbor,US" code="BEH" />
//   <row city="Bentota,LK" code="BJT" />
//   <row city="Berane,ME" code="IVG" />
//   <row city="Berbera,SO" code="BBO" />
//   <row city="Bereina,PG" code="BEA" />
//   <row city="Berens River Indian Reserve,CA" code="YBV" />
//   <row city="Bergamo,IT" code="BGY" />
//   <row city="Bergen,NO" code="BGO" />
//   <row city="Bergen Op Zoom,NL" code="WOE" />
//   <row city="Bergerac,FR" code="EGC" />
//   <row city="Bergheim,DE" code="ZCF" />
//   <row city="Bergisch Gladbach,DE" code="ZCG" />
//   <row city="Bergkamen,DE" code="ZCH" />
//   <row city="Berkak,NO" code="XUB" />
//   <row city="Berkeley,US" code="JBK" />
//   <row city="Berlevag,NO" code="BVG" />
//   <row city="Berlin,US" code="BML" />
//   <row city="Berlin,DE" code="BER" />
//   <row city="Bermuda,BM" code="BDA" />
//   <row city="Berne,CH" code="BRN" />
//   <row city="Beroroha,MG" code="WBO" />
//   <row city="Bertoua,CM" code="BTA" />
//   <row city="Beru,KI" code="BEZ" />
//   <row city="Berwick Upon Tweed,GB" code="XQG" />
//   <row city="Besalampy,MG" code="BPY" />
//   <row city="Besancon,FR" code="QBQ" />
//   <row city="Bethel,US" code="BET" />
//   <row city="Bethune,FR" code="XBH" />
//   <row city="Betim,BR" code="QBK" />
//   <row city="Betioky,MG" code="BKU" />
//   <row city="Bettles,US" code="BTT" />
//   <row city="Beverly,US" code="BVY" />
//   <row city="Beziers,FR" code="BZR" />
//   <row city="Bhairawa,NP" code="BWA" />
//   <row city="Bhamo,MM" code="BMO" />
//   <row city="Bharatpur,NP" code="BHR" />
//   <row city="Bhatinda,IN" code="BUP" />
//   <row city="Bhavnagar,IN" code="BHU" />
//   <row city="Bhopal,IN" code="BHO" />
//   <row city="Bhubaneswar,IN" code="BBI" />
//   <row city="Bhuj,IN" code="BHJ" />
//   <row city="Biak,ID" code="BIK" />
//   <row city="Bialla,PG" code="BAA" />
//   <row city="Bialystok,PL" code="QYY" />
//   <row city="Biarritz,FR" code="BIQ" />
//   <row city="Biaru,PG" code="BRP" />
//   <row city="Biel Bienne,CH" code="ZDK" />
//   <row city="Bielefeld,DE" code="BFE" />
//   <row city="Bielsko Baila,PL" code="QEO" />
//   <row city="Big Bear cities,US" code="RBF" />
//   <row city="Big Creek,BZ" code="BGK" />
//   <row city="Big Delta,US" code="BIG" />
//   <row city="Big Lake,US" code="BGQ" />
//   <row city="Big Piney,US" code="BPI" />
//   <row city="Big Trout,CA" code="YTL" />
//   <row city="Bijie,CN" code="BFJ" />
//   <row city="Bikaner,IN" code="BKB" />
//   <row city="Bikini Atoll,MH" code="BII" />
//   <row city="Bilaspur,IN" code="PAB" />
//   <row city="Bilbao,ES" code="BIO" />
//   <row city="Bildudalur,IS" code="BIU" />
//   <row city="Billings,US" code="BIL" />
//   <row city="Billund,DK" code="BLL" />
//   <row city="Biloela,AU" code="ZBL" />
//   <row city="Biloxi,US" code="BIX" />
//   <row city="Bima,ID" code="BMU" />
//   <row city="Bimini,BS" code="BIM" />
//   <row city="Binghamton,US" code="BGM" />
//   <row city="Bingol,TR" code="BGG" />
//   <row city="Biniguni,PG" code="XBN" />
//   <row city="Bintulu,MY" code="BTU" />
//   <row city="Bintuni,ID" code="NTI" />
//   <row city="Biratnagar,NP" code="BIR" />
//   <row city="Birch Creek,US" code="KBC" />
//   <row city="Birdsville,AU" code="BVI" />
//   <row city="Birigui,BR" code="QCF" />
//   <row city="Birmingham,US" code="BHM" />
//   <row city="Birmingham,GB" code="BHX" />
//   <row city="Bisbee,US" code="BSQ" />
//   <row city="Bisha,SA" code="BHH" />
//   <row city="Bishkek,KG" code="FRU" />
//   <row city="Bisho,ZA" code="BIY" />
//   <row city="Bishop,US" code="BIH" />
//   <row city="Biskra,DZ" code="BSK" />
//   <row city="Bismarck,US" code="BIS" />
//   <row city="Bissau,GW" code="OXB" />
//   <row city="Bitam,GA" code="BMM" />
//   <row city="Bitburg,DE" code="BBJ" />
//   <row city="Bitola,MK" code="QBI" />
//   <row city="Bizerte,TN" code="QIZ" />
//   <row city="Bjerka,NO" code="ZMZ" />
//   <row city="Blackall,AU" code="BKQ" />
//   <row city="Blackpool,GB" code="BLK" />
//   <row city="Blacksburg,US" code="BCB" />
//   <row city="Blackwater,AU" code="BLT" />
//   <row city="Blagoveshchensk,RU" code="BQS" />
//   <row city="Blairsville,US" code="BSI" />
//   <row city="Blakely Island,US" code="BYW" />
//   <row city="Blanc Sablon,CA" code="YBX" />
//   <row city="Blanding,US" code="BDG" />
//   <row city="Blantyre,MW" code="BLZ" />
//   <row city="Blenheim,NZ" code="BHE" />
//   <row city="Blida,DZ" code="QLD" />
//   <row city="Block Island,US" code="BID" />
//   <row city="Bloemfontein,ZA" code="BFN" />
//   <row city="Blois,FR" code="XBQ" />
//   <row city="Blonduos,IS" code="BLO" />
//   <row city="Bloodvein River,CA" code="YDV" />
//   <row city="Bloomfield River,AU" code="BFC" />
//   <row city="Bloomington,US" code="BMG" />
//   <row city="Bloomington,US" code="BMI" />
//   <row city="Blue Bell,US" code="BBX" />
//   <row city="Blue Canyon,US" code="BLU" />
//   <row city="Blue Fox Bay,US" code="BFB" />
//   <row city="Bluefield,US" code="BLF" />
//   <row city="Blumenau,BR" code="BNU" />
//   <row city="Blythe,US" code="BLH" />
//   <row city="Blytheville,US" code="HKA" />
//   <row city="Bo Norway,NO" code="XXC" />
//   <row city="Boa Vista,BR" code="BVB" />
//   <row city="Boa Vista,CV" code="BVC" />
//   <row city="Boang,PG" code="BOV" />
//   <row city="Boao,CN" code="BPO" />
//   <row city="Bobadilla,ES" code="OZI" />
//   <row city="Bobo Dioulasso,BF" code="BOY" />
//   <row city="Boca Raton,US" code="BCT" />
//   <row city="Bocas Del Toro,PA" code="BOC" />
//   <row city="Bocholt,DE" code="ZCI" />
//   <row city="Bochum,DE" code="QBO" />
//   <row city="Bodaybo,RU" code="ODO" />
//   <row city="Bodinumu,PG" code="BNM" />
//   <row city="Bodo,NO" code="BOO" />
//   <row city="Bodrum,TR" code="BXN" />
//   <row city="Boeblingen,DE" code="PHM" />
//   <row city="Boende,CD" code="BNB" />
//   <row city="Bogota,CO" code="BOG" />
//   <row city="Boigu Island,AU" code="GIC" />
//   <row city="Boise,US" code="BOI" />
//   <row city="Bokondini,ID" code="BUI" />
//   <row city="Bokpyin,MM" code="VBP" />
//   <row city="Bologna,IT" code="BLQ" />
//   <row city="Bolzano,IT" code="BZO" />
//   <row city="Bomai,PG" code="BMH" />
//   <row city="Bonaire,BQ" code="BON" />
//   <row city="Bonaventure,CA" code="YVB" />
//   <row city="Bondoukou,CI" code="BDK" />
//   <row city="Bonito,BR" code="BYO" />
//   <row city="Bonn,DE" code="BNJ" />
//   <row city="Bonnyville,CA" code="YBY" />
//   <row city="Bora Bora,PF" code="BOB" />
//   <row city="Bordeaux,FR" code="BOD" />
//   <row city="Bordj Badji Mokhtar,DZ" code="BMW" />
//   <row city="Bordj Menaiel,DZ" code="ZZM" />
//   <row city="Borg El Arab,EG" code="HBE" />
//   <row city="Borgarfjordur,IS" code="BGJ" />
//   <row city="Boridi,PG" code="BPB" />
//   <row city="Borkum,DE" code="BMK" />
//   <row city="Borlange,SE" code="BLE" />
//   <row city="Bornholm,DK" code="RNN" />
//   <row city="Bornite,US" code="RLU" />
//   <row city="Borrego Springs,US" code="BXS" />
//   <row city="Borroloola,AU" code="BOX" />
//   <row city="Bosaso,SO" code="BSA" />
//   <row city="Boston,US" code="BOS" />
//   <row city="Botosani,RO" code="QDD" />
//   <row city="Bottrop,DE" code="ZCJ" />
//   <row city="Botucatu,BR" code="QCJ" />
//   <row city="Bouake,CI" code="BYK" />
//   <row city="Boulder,US" code="WBU" />
//   <row city="Boulia,AU" code="BQL" />
//   <row city="Boulogne Billancourt,FR" code="XBT" />
//   <row city="Boulogne Sur Mer,FR" code="XBS" />
//   <row city="Bouna,CI" code="BQO" />
//   <row city="Boundary,US" code="BYA" />
//   <row city="Boundiali,CI" code="BXI" />
//   <row city="Boundji,CG" code="BOE" />
//   <row city="Bountiful,US" code="BTF" />
//   <row city="Bourg En Bresse,FR" code="XBK" />
//   <row city="Bourg St Maurice,FR" code="QBM" />
//   <row city="Bourgas,BG" code="BOJ" />
//   <row city="Bourges,FR" code="BOU" />
//   <row city="Bourke,AU" code="BRK" />
//   <row city="Bournemouth,GB" code="BOH" />
//   <row city="Bowen,AU" code="ZBO" />
//   <row city="Bowling Green,US" code="BWG" />
//   <row city="Bowling Green,US" code="APH" />
//   <row city="Bozeman,US" code="BZN" />
//   <row city="Brac,HR" code="BWK" />
//   <row city="Bradford,GB" code="BRF" />
//   <row city="Bradford,US" code="BFD" />
//   <row city="Braga,PT" code="BGZ" />
//   <row city="Braganca,PT" code="BGC" />
//   <row city="Braganca Paulista,BR" code="BJP" />
//   <row city="Brainerd,US" code="BRD" />
//   <row city="Braintree,GB" code="WXF" />
//   <row city="Brampton,CA" code="XPN" />
//   <row city="Brampton Island,AU" code="BMP" />
//   <row city="Brandon,CA" code="YBR" />
//   <row city="Branson,US" code="BKG" />
//   <row city="Brantford,CA" code="XFV" />
//   <row city="Brasilia,BR" code="BSB" />
//   <row city="Brasov,RO" code="XHV" />
//   <row city="Bratislava,SK" code="BTS" />
//   <row city="Bratsk,RU" code="BTK" />
//   <row city="Braunschweig,DE" code="BWE" />
//   <row city="Brava,CV" code="BVR" />
//   <row city="Brawley,US" code="BWC" />
//   <row city="Brazoria,US" code="BZT" />
//   <row city="Brazzaville,CG" code="BZV" />
//   <row city="Breckenridge,US" code="QKB" />
//   <row city="Breda,NL" code="GLZ" />
//   <row city="Bregenz,AT" code="XGZ" />
//   <row city="Breiddalsvik,IS" code="BXV" />
//   <row city="Bremen,DE" code="BRE" />
//   <row city="Bremerhaven,DE" code="BRV" />
//   <row city="Bremerton,US" code="PWT" />
//   <row city="Brescia,IT" code="QBS" />
//   <row city="Bresciaa,IT" code="BRZ" />
//   <row city="Brest,BY" code="BQT" />
//   <row city="Brest,FR" code="BES" />
//   <row city="Brevig Mission,US" code="KTS" />
//   <row city="Brewarrina,AU" code="BWQ" />
//   <row city="Briancon,FR" code="XBC" />
//   <row city="Bridgeport,US" code="BDR" />
//   <row city="Bridgetown,BB" code="BGI" />
//   <row city="Brig,CH" code="ZDL" />
//   <row city="Brigham cities,US" code="BMC" />
//   <row city="Brighton,GB" code="BSH" />
//   <row city="Brindisi,IT" code="BDS" />
//   <row city="Brisbane,AU" code="BNE" />
//   <row city="Bristol,GB" code="BRS" />
//   <row city="Bristol,US" code="TRI" />
//   <row city="Brive La Gaill,FR" code="BVE" />
//   <row city="Brize Norton,GB" code="BZZ" />
//   <row city="Brno,CZ" code="BRQ" />
//   <row city="Brochet,CA" code="YBT" />
//   <row city="Brockville,CA" code="XBR" />
//   <row city="Broken Bow,US" code="BBW" />
//   <row city="Broken Hill,AU" code="BHQ" />
//   <row city="Bromont,CA" code="ZBM" />
//   <row city="Bronnoysund,NO" code="BNN" />
//   <row city="Brookhaven,US" code="WSH" />
//   <row city="Brookings,US" code="BKX" />
//   <row city="Broome,AU" code="BME" />
//   <row city="Broomfield,US" code="BJC" />
//   <row city="Brownsville,US" code="BRO" />
//   <row city="Brownwood,US" code="BWD" />
//   <row city="Bruehl,DE" code="ZCK" />
//   <row city="Brugge,BE" code="ZGJ" />
//   <row city="Brumunddal,NO" code="ZVB" />
//   <row city="Brunswick,US" code="BQK" />
//   <row city="Brunswick,US" code="NHZ" />
//   <row city="Brusque,BR" code="QJM" />
//   <row city="Brussels,BE" code="BRU" />
//   <row city="Bryansk,RU" code="BZK" />
//   <row city="Bryce,US" code="BCE" />
//   <row city="Bryne,NO" code="XOB" />
//   <row city="Bucaramanga,CO" code="BGA" />
//   <row city="Buch Sg,CH" code="ZDO" />
//   <row city="Bucharest,RO" code="BUH" />
//   <row city="Buckeye,US" code="BXK" />
//   <row city="Buckland,US" code="BKC" />
//   <row city="Budapest,HU" code="BUD" />
//   <row city="Budva,ME" code="QBA" />
//   <row city="Buenaventura,CO" code="BUN" />
//   <row city="Buenos Aires,AR" code="BUE" />
//   <row city="Buenos Aires,CR" code="BAI" />
//   <row city="Buerjin cities,CN" code="KJI" />
//   <row city="Buffalo,US" code="BUF" />
//   <row city="Bugulma,RU" code="UUA" />
//   <row city="Buin,PG" code="UBI" />
//   <row city="Bujumbura,BI" code="BJM" />
//   <row city="Buka Island,PG" code="BUA" />
//   <row city="Bukavu,CD" code="BKY" />
//   <row city="Bukhara,UZ" code="BHK" />
//   <row city="Bukoba,TZ" code="BKZ" />
//   <row city="Bulawayo,ZW" code="BUQ" />
//   <row city="Bullfrog Basin,US" code="BFG" />
//   <row city="Bullhead cities,US" code="IFP" />
//   <row city="Bulolo,PG" code="BUL" />
//   <row city="Bumba,CD" code="BMB" />
//   <row city="Bumi Hills,ZW" code="BZH" />
//   <row city="Bunbury,AU" code="BUY" />
//   <row city="Bundaberg,AU" code="BDB" />
//   <row city="Bundi,PG" code="BNT" />
//   <row city="Bunia,CD" code="BUX" />
//   <row city="Buochs,CH" code="BXO" />
//   <row city="Buol,ID" code="UOL" />
//   <row city="Burao,SO" code="BUO" />
//   <row city="Burbank,US" code="BUR" />
//   <row city="Burgdorf,CH" code="ZDP" />
//   <row city="Burgos,ES" code="RGS" />
//   <row city="Buri Ram,TH" code="BFV" />
//   <row city="Burketown,AU" code="BUC" />
//   <row city="Burley,US" code="BYI" />
//   <row city="Burlington,US" code="BRL" />
//   <row city="Burlington,US" code="BTV" />
//   <row city="Burlington,US" code="BBF" />
//   <row city="Burnie,AU" code="BWT" />
//   <row city="Burns,US" code="BNO" />
//   <row city="Burns Lake,CA" code="YPZ" />
//   <row city="Bursa,TR" code="YEI" />
//   <row city="Bury St Edmunds,GB" code="BEQ" />
//   <row city="Busan,KR" code="PUS" />
//   <row city="Bushehr,IR" code="BUZ" />
//   <row city="Busselton,AU" code="BQB" />
//   <row city="Busuanga,PH" code="USU" />
//   <row city="Butaritari,KI" code="BBG" />
//   <row city="Butler,US" code="BTP" />
//   <row city="Butler,US" code="BUM" />
//   <row city="Butte,US" code="BTM" />
//   <row city="Butuan,PH" code="BXU" />
//   <row city="Buzios,BR" code="BZC" />
//   <row city="Bydgoszcz,PL" code="BZG" />
//   <row city="Byron Bay,AU" code="QYN" />
//   <row city="CHAOYANG,CN" code="CHG" />
//   <row city="Ca Mau cities,VN" code="CAH" />
//   <row city="Cabimas,VE" code="CBS" />
//   <row city="Cabinda,AO" code="CAB" />
//   <row city="Cabo Frio,BR" code="CFB" />
//   <row city="Cabo Frio Br,BR" code="QCK" />
//   <row city="Cacador,BR" code="CFC" />
//   <row city="Caceres,BR" code="CCX" />
//   <row city="Caceres,ES" code="QUQ" />
//   <row city="Cachoeirinha,BR" code="QKA" />
//   <row city="Cachoeiro De Itapemirim,BR" code="CDI" />
//   <row city="Cacoal,BR" code="OAL" />
//   <row city="Cadillac,US" code="CAD" />
//   <row city="Cadiz,ES" code="CDZ" />
//   <row city="Caen,FR" code="CFR" />
//   <row city="Cagayan,PH" code="CGY" />
//   <row city="Cagliari,IT" code="CAG" />
//   <row city="Cagnes Sur Mer,FR" code="XCG" />
//   <row city="Cahors,FR" code="ZAO" />
//   <row city="Cairns,AU" code="CNS" />
//   <row city="Cairo,EG" code="CAI" />
//   <row city="Cajamarca,PE" code="CJA" />
//   <row city="Calabar,NG" code="CBQ" />
//   <row city="Calabozo,VE" code="CLZ" />
//   <row city="Calais,FR" code="CQF" />
//   <row city="Calais cities,FR" code="XFF" />
//   <row city="Calama,CL" code="CJC" />
//   <row city="Calbayog,PH" code="CYP" />
//   <row city="Caldas Novas,BR" code="CLV" />
//   <row city="Caldwell,US" code="CDW" />
//   <row city="Calexico,US" code="CXL" />
//   <row city="Calgary,CA" code="YYC" />
//   <row city="Cali,CO" code="CLO" />
//   <row city="Calipatria,US" code="CLR" />
//   <row city="Callaway Gardens,US" code="CWG" />
//   <row city="Caloundra,AU" code="CUD" />
//   <row city="Caltanissetta,IT" code="QCL" />
//   <row city="Calvi,FR" code="CLY" />
//   <row city="Cam Ranh,VN" code="CXR" />
//   <row city="Camacari,BR" code="QCC" />
//   <row city="Camaguey,CU" code="CMW" />
//   <row city="Cambrai,FR" code="XCB" />
//   <row city="Cambridge,GB" code="CBG" />
//   <row city="Cambridge,US" code="CGE" />
//   <row city="Cambridge Bay,CA" code="YCB" />
//   <row city="Camden,US" code="CDH" />
//   <row city="Camiguin,PH" code="CGM" />
//   <row city="Camiri,BO" code="CAM" />
//   <row city="Camocim,BR" code="CMC" />
//   <row city="Camp Springs,US" code="ADW" />
//   <row city="Campbell Island,CA" code="ZEL" />
//   <row city="Campbell River,CA" code="YBL" />
//   <row city="Campbellton,CA" code="XAZ" />
//   <row city="Campbelltown,GB" code="CAL" />
//   <row city="Campeche,MX" code="CPE" />
//   <row city="Campina Grande,BR" code="CPV" />
//   <row city="Campinas,BR" code="CPQ" />
//   <row city="Campo,US" code="CZZ" />
//   <row city="Campo Alegre,BR" code="CMP" />
//   <row city="Campo Mourao,BR" code="CBW" />
//   <row city="Campobasso,IT" code="QPB" />
//   <row city="Campogrande,BR" code="CGR" />
//   <row city="Campos,BR" code="CAW" />
//   <row city="Campos Do Jordao,BR" code="QJO" />
//   <row city="Can Tho,VN" code="VCA" />
//   <row city="Canaima,VE" code="CAJ" />
//   <row city="Canakkale,TR" code="CKZ" />
//   <row city="Cananea,MX" code="CNA" />
//   <row city="Canas,CR" code="CSC" />
//   <row city="Canberra,AU" code="CBR" />
//   <row city="Cancun,MX" code="CUN" />
//   <row city="Candle,US" code="CDL" />
//   <row city="Canela,BR" code="QCN" />
//   <row city="Cannes,FR" code="CEQ" />
//   <row city="Canoas,BR" code="QNS" />
//   <row city="Canon cities,US" code="CNE" />
//   <row city="Canouan Island,DM" code="CIW" />
//   <row city="Canton Island,KI" code="CIS" />
//   <row city="Cap Haitien,HT" code="CAP" />
//   <row city="Cap Skirring,SN" code="CSK" />
//   <row city="Cape Dorset,CA" code="YTE" />
//   <row city="Cape Girardeau,US" code="CGI" />
//   <row city="Cape Gloucester,PG" code="CGC" />
//   <row city="Cape Lisburne,US" code="LUR" />
//   <row city="Cape May,US" code="WWD" />
//   <row city="Cape Newenham,US" code="EHM" />
//   <row city="Cape Rodney,PG" code="CPN" />
//   <row city="Cape Romanzof,US" code="CZF" />
//   <row city="Cape Spencer,US" code="CSP" />
//   <row city="Cape Town,ZA" code="CPT" />
//   <row city="Cape Vogel,PG" code="CVL" />
//   <row city="Cape Yakataga,US" code="CYT" />
//   <row city="Capreol,CA" code="XAW" />
//   <row city="Capri,IT" code="PRJ" />
//   <row city="Capurgana,CO" code="CPB" />
//   <row city="Car Nicobar,IN" code="CBD" />
//   <row city="Caracas,VE" code="CCS" />
//   <row city="Caraguatatuba,BR" code="QCQ" />
//   <row city="Carajas,BR" code="CKS" />
//   <row city="Caransebes,RO" code="CSB" />
//   <row city="Caratinga,BR" code="QTL" />
//   <row city="Carbondale,US" code="MDH" />
//   <row city="Carcassonne,FR" code="CCF" />
//   <row city="Cardiff,GB" code="CWL" />
//   <row city="Caribou,US" code="CAR" />
//   <row city="Carleton,CA" code="XON" />
//   <row city="Carlisle,GB" code="CAX" />
//   <row city="Carlsbad,US" code="CNM" />
//   <row city="Carnarvon,AU" code="CVQ" />
//   <row city="Carriacou,GD" code="CRU" />
//   <row city="Carroll,US" code="CIN" />
//   <row city="Carson cities,US" code="CSN" />
//   <row city="Cartagena,CO" code="CTG" />
//   <row city="Cartagena,ES" code="XUF" />
//   <row city="Cartago,CO" code="CRC" />
//   <row city="Cartwright,CA" code="YRF" />
//   <row city="Caruaru,BR" code="CAU" />
//   <row city="Carupano,VE" code="CUP" />
//   <row city="Casa Grande,US" code="CGZ" />
//   <row city="Casablanca,MA" code="CAS" />
//   <row city="Cascavel,BR" code="CAC" />
//   <row city="Caserta,IT" code="CTJ" />
//   <row city="Casino,AU" code="CSI" />
//   <row city="Casper,US" code="CPR" />
//   <row city="Casselman,CA" code="XZB" />
//   <row city="Cassilandia,BR" code="CSS" />
//   <row city="Castaway,FJ" code="CST" />
//   <row city="Castellon de la Plana,ES" code="CDT" />
//   <row city="Castlegar,CA" code="YCG" />
//   <row city="Castres,FR" code="DCM" />
//   <row city="Castro,CL" code="WCA" />
//   <row city="Castrop Rauxel,DE" code="ZCM" />
//   <row city="Cat Cay,BS" code="CXY" />
//   <row city="Cat Lake Indian Reserve,CA" code="YAC" />
//   <row city="Catacamas,HN" code="CAA" />
//   <row city="Catalina Island,US" code="AVX" />
//   <row city="Catamarca,AR" code="CTC" />
//   <row city="Catanduva,BR" code="QDE" />
//   <row city="Catania,IT" code="CTA" />
//   <row city="Catanzaro,IT" code="QCZ" />
//   <row city="Catarman,PH" code="CRM" />
//   <row city="Caticlan,PH" code="MPH" />
//   <row city="Catumbela,AD" code="CBT" />
//   <row city="Cauayan cities,PH" code="CYZ" />
//   <row city="Caucasia,CO" code="CAQ" />
//   <row city="Cauquira,HN" code="CDD" />
//   <row city="Caxias Do Sul,BR" code="CXJ" />
//   <row city="Caye Caulker,BZ" code="CUK" />
//   <row city="Cayenne,GF" code="CAY" />
//   <row city="Cayman Brac,KY" code="CYB" />
//   <row city="Cayo Coco,CU" code="CCC" />
//   <row city="Cayo Largo Del Sur,CU" code="CYO" />
//   <row city="Cebu,PH" code="CEB" />
//   <row city="Cedar cities,US" code="CDC" />
//   <row city="Cedar Rapids,US" code="CID" />
//   <row city="Ceduna,AU" code="CED" />
//   <row city="Celle,DE" code="ZCN" />
//   <row city="Central,US" code="CEM" />
//   <row city="Centralia,US" code="ENL" />
//   <row city="Century cities,US" code="CCD" />
//   <row city="Cepu,ID" code="CPF" />
//   <row city="Cessnock,AU" code="CES" />
//   <row city="Ceuta,ES" code="JCU" />
//   <row city="Chadron,US" code="CDR" />
//   <row city="Chah Bahar,IR" code="ZBR" />
//   <row city="Chalkida,GR" code="QKG" />
//   <row city="Chalkyitsik,US" code="CIK" />
//   <row city="Chalon Sur Saone,FR" code="XCD" />
//   <row city="Chalons Sur Marne,FR" code="XCR" />
//   <row city="Cham Off Line PT,DE" code="QHQ" />
//   <row city="Chambery,FR" code="CMF" />
//   <row city="Chambord,CA" code="XCI" />
//   <row city="Chamonix Mont Blanc,FR" code="XCF" />
//   <row city="Champaign,US" code="CMI" />
//   <row city="Champery,CH" code="ZDQ" />
//   <row city="Chanaral,CL" code="CNR" />
//   <row city="Chandalar,US" code="WCR" />
//   <row city="Chandigarh,IN" code="IXC" />
//   <row city="Chandler,US" code="CHD" />
//   <row city="Chandler,CA" code="XDL" />
//   <row city="Changchun,CN" code="CGQ" />
//   <row city="Changde,CN" code="CGD" />
//   <row city="Changsha,CN" code="CSX" />
//   <row city="Changuinola,PA" code="CHX" />
//   <row city="Changzhi,CN" code="CIH" />
//   <row city="Changzhou,CN" code="CZX" />
//   <row city="Chania,GR" code="CHQ" />
//   <row city="Chantilly,FR" code="XCV" />
//   <row city="Chapeco,BR" code="XAP" />
//   <row city="Chapelco,AR" code="CPC" />
//   <row city="Chapleau,CA" code="YLD" />
//   <row city="Charleston,US" code="CHS" />
//   <row city="Charleston,US" code="CRW" />
//   <row city="Charleville,AU" code="CTL" />
//   <row city="Charleville Mezieres,FR" code="XCZ" />
//   <row city="Charlo,CA" code="YCL" />
//   <row city="Charlotte,US" code="CLT" />
//   <row city="Charlottesville,US" code="CHO" />
//   <row city="Charlottetown,CA" code="YYG" />
//   <row city="Charlottetown,CA" code="YHG" />
//   <row city="Charters Towers,AU" code="CXT" />
//   <row city="Chartres,FR" code="QTJ" />
//   <row city="Chateau D Oex,CH" code="ZDR" />
//   <row city="Chateau Thierry,FR" code="XCY" />
//   <row city="Chateauroux,FR" code="CHR" />
//   <row city="Chatellerault,FR" code="XCX" />
//   <row city="Chatham,US" code="CYM" />
//   <row city="Chatham,CA" code="XCM" />
//   <row city="Chatham Island,NZ" code="CHT" />
//   <row city="Chattanooga,US" code="CHA" />
//   <row city="Chaumont,FR" code="XCW" />
//   <row city="Chaves,PT" code="CHV" />
//   <row city="Cheboksary,RU" code="CSY" />
//   <row city="Chefornak,US" code="CYF" />
//   <row city="Chehalis,US" code="CLS" />
//   <row city="Chelinda,MW" code="CEH" />
//   <row city="Cheltenham,GB" code="CHW" />
//   <row city="Chelyabinsk,RU" code="CEK" />
//   <row city="Chemainus,CA" code="XHS" />
//   <row city="Chemnitz,DE" code="ZTZ" />
//   <row city="Chena Hot Springs,US" code="CEX" />
//   <row city="Chengdu,CN" code="CTU" />
//   <row city="Chennai,IN" code="MAA" />
//   <row city="Chenzhou,CN" code="LQP" />
//   <row city="Cheongju,KR" code="CJJ" />
//   <row city="Cherbourg,FR" code="CER" />
//   <row city="Cherepovets,RU" code="CEE" />
//   <row city="Cherkassy,UA" code="CKC" />
//   <row city="Chernofski,US" code="KCN" />
//   <row city="Chernovtsy,UA" code="CWC" />
//   <row city="Chersky,RU" code="CYX" />
//   <row city="Chester,GB" code="CEG" />
//   <row city="Chesterfield,GB" code="ZFI" />
//   <row city="Chesterfield Inlet,CA" code="YCS" />
//   <row city="Chetumal,MX" code="CTM" />
//   <row city="Chetwynd,CA" code="YCQ" />
//   <row city="Chevak,US" code="VAK" />
//   <row city="Chevery,CA" code="YHR" />
//   <row city="Cheyenne,US" code="CYS" />
//   <row city="Chiang Mai,TH" code="CNX" />
//   <row city="Chiang Rai,TH" code="CEI" />
//   <row city="Chiasso,CH" code="ZDS" />
//   <row city="Chiayi,TW" code="CYI" />
//   <row city="Chiba,JP" code="QCB" />
//   <row city="Chibougamau,CA" code="YMT" />
//   <row city="Chicago,US" code="CHI" />
//   <row city="Chichen Itza,MX" code="CZA" />
//   <row city="Chickasha,US" code="CHK" />
//   <row city="Chicken,US" code="CKX" />
//   <row city="Chiclayo,PE" code="CIX" />
//   <row city="Chico,US" code="CIC" />
//   <row city="Chifeng,CN" code="CIF" />
//   <row city="Chignik,US" code="KCG" />
//   <row city="Chignik Lagoon,US" code="KCL" />
//   <row city="Chigoro,CO" code="IGO" />
//   <row city="Chihuahua,MX" code="CUU" />
//   <row city="Chillan,CL" code="YAI" />
//   <row city="Chilliwack,CA" code="YCW" />
//   <row city="Chimoio,MZ" code="VPY" />
//   <row city="Chinchilla,AU" code="CCL" />
//   <row city="Chincoteague,US" code="WAL" />
//   <row city="Chingola,ZM" code="CGJ" />
//   <row city="Chinju,KR" code="HIN" />
//   <row city="Chino,US" code="CNO" />
//   <row city="Chios,GR" code="JKH" />
//   <row city="Chipata,ZM" code="CIP" />
//   <row city="Chiredzi,ZW" code="BFO" />
//   <row city="Chisana,US" code="CZN" />
//   <row city="Chisasibi,CA" code="YKU" />
//   <row city="Chisinau,MD" code="KIV" />
//   <row city="Chita,RU" code="HTA" />
//   <row city="Chitina,US" code="CXC" />
//   <row city="Chitral,PK" code="CJL" />
//   <row city="Chitre,PA" code="CTD" />
//   <row city="Chittagong,BD" code="CGP" />
//   <row city="Chiusa Klausen,IT" code="ZAK" />
//   <row city="Chizhou,CN" code="JUH" />
//   <row city="Chkalovsky,RU" code="CKL" />
//   <row city="Chlef,DZ" code="CFK" />
//   <row city="Choctaw,US" code="HKC" />
//   <row city="Choiseul Bay,SB" code="CHY" />
//   <row city="Chokurdakh,RU" code="CKH" />
//   <row city="Cholet,FR" code="CET" />
//   <row city="Chon Buri,TH" code="QHI" />
//   <row city="Chongqing,CN" code="CKG" />
//   <row city="Christchurch,NZ" code="CHC" />
//   <row city="Christmas Island,KI" code="CXI" />
//   <row city="Christmas Island,CX" code="XCH" />
//   <row city="Chuathbaluk,US" code="CHU" />
//   <row city="Chumphon,TH" code="CJM" />
//   <row city="Chur,CH" code="ZDT" />
//   <row city="Churchhill Falls,CA" code="ZUM" />
//   <row city="Churchill,CA" code="YYQ" />
//   <row city="Cicia,FJ" code="ICI" />
//   <row city="Ciego De Avila,CU" code="AVI" />
//   <row city="Cienfuegos,CU" code="CFG" />
//   <row city="Cilacap,ID" code="CXP" />
//   <row city="Cincinnati,US" code="CVG" />
//   <row city="Circle,US" code="IRC" />
//   <row city="Circle Hot Springs,US" code="CHP" />
//   <row city="Cirebon,ID" code="CBN" />
//   <row city="Ciudad Bolivar,VE" code="CBL" />
//   <row city="Ciudad Constitucion,MX" code="CUA" />
//   <row city="Ciudad Del Carmen,MX" code="CME" />
//   <row city="Ciudad Del Este,PY" code="AGT" />
//   <row city="Ciudad Guayana,VE" code="CGU" />
//   <row city="Ciudad Juarez,MX" code="CJS" />
//   <row city="Ciudad Mante,MX" code="MMC" />
//   <row city="Ciudad Obregon,MX" code="CEN" />
//   <row city="Ciudad Real,ES" code="CQM" />
//   <row city="Ciudad Real cities,ES" code="CJI" />
//   <row city="Ciudad Victoria,MX" code="CVM" />
//   <row city="Ciudadela,ES" code="QIU" />
//   <row city="Clarks Point,US" code="CLP" />
//   <row city="Clarksburg,US" code="CKB" />
//   <row city="Clarksdale,US" code="CKM" />
//   <row city="Clarksville,US" code="CKV" />
//   <row city="Clear Lake,US" code="CKE" />
//   <row city="Clear Lake cities,US" code="CLC" />
//   <row city="Clearwater,US" code="CLW" />
//   <row city="Clemson,US" code="CEU" />
//   <row city="Clermont,AU" code="CMQ" />
//   <row city="Clermont  Ferrand,FR" code="CFE" />
//   <row city="Cleveland,US" code="CLE" />
//   <row city="Clifton,US" code="CFT" />
//   <row city="Clifton Hills,AU" code="CFH" />
//   <row city="Clinton,US" code="CSM" />
//   <row city="Clinton,US" code="CWI" />
//   <row city="Cloncurry,AU" code="CNJ" />
//   <row city="Clover Pass,US" code="RTE" />
//   <row city="Clovis,US" code="CVN" />
//   <row city="Cluj,RO" code="CLJ" />
//   <row city="Clyde River,CA" code="YCY" />
//   <row city="Coalinga,US" code="CLG" />
//   <row city="Coatesville,US" code="CTH" />
//   <row city="Coatzacoalcos,MX" code="QTZ" />
//   <row city="Cobar,AU" code="CAZ" />
//   <row city="Cobija,BO" code="CIJ" />
//   <row city="Cobourg,CA" code="XGJ" />
//   <row city="Coca,EC" code="OCC" />
//   <row city="Cochabamba,BO" code="CBB" />
//   <row city="Cochise County,US" code="CWX" />
//   <row city="Cochrane,CA" code="YCN" />
//   <row city="Cocoa,US" code="COI" />
//   <row city="Coconut Island,AU" code="CNC" />
//   <row city="Cocos Islands,CC" code="CCK" />
//   <row city="Cody,US" code="COD" />
//   <row city="Coen,AU" code="CUQ" />
//   <row city="Coeur D Alene,US" code="COE" />
//   <row city="Coffman Cove,US" code="KCC" />
//   <row city="Coffs Harbour,AU" code="CFS" />
//   <row city="Cognac,FR" code="CNG" />
//   <row city="Coimbatore,IN" code="CJB" />
//   <row city="Coimbra,PT" code="CBP" />
//   <row city="Colac,AU" code="XCO" />
//   <row city="Colatina,BR" code="QCH" />
//   <row city="Colby,US" code="CBK" />
//   <row city="Colchester,GB" code="CLB" />
//   <row city="Cold Bay,US" code="CDB" />
//   <row city="Cold Lake,CA" code="YOD" />
//   <row city="Coldfoot,US" code="CXF" />
//   <row city="Colima,MX" code="CLQ" />
//   <row city="College Park,US" code="CGS" />
//   <row city="College Station,US" code="CLL" />
//   <row city="Collie,AU" code="CIE" />
//   <row city="Collinsville,AU" code="KCE" />
//   <row city="Colmar,FR" code="CMR" />
//   <row city="Cologne,DE" code="CGN" />
//   <row city="Colombo,LK" code="CMB" />
//   <row city="Colon,PA" code="ONX" />
//   <row city="Colonia,UY" code="CYR" />
//   <row city="Colonia Sarmiento,AR" code="OLN" />
//   <row city="Colonial Catriel,AR" code="CCT" />
//   <row city="Colonsay Island,GB" code="CSA" />
//   <row city="Colorado Springs,US" code="COS" />
//   <row city="Columbia,US" code="COU" />
//   <row city="Columbia,US" code="CAE" />
//   <row city="Columbia,US" code="COA" />
//   <row city="Columbia,US" code="MRC" />
//   <row city="Columbus,US" code="CLU" />
//   <row city="Columbus,US" code="CMH" />
//   <row city="Columbus,US" code="CSG" />
//   <row city="Columbus,US" code="CUS" />
//   <row city="Columbus,US" code="UBS" />
//   <row city="Columbus,US" code="OLU" />
//   <row city="Colville,CA" code="YCK" />
//   <row city="Comayagua,HN" code="XPL" />
//   <row city="Comiso,IT" code="CIY" />
//   <row city="Como,IT" code="QCM" />
//   <row city="Comodoro Rivadavia,AR" code="CRD" />
//   <row city="Comox,CA" code="YQQ" />
//   <row city="Compiegne,FR" code="XCP" />
//   <row city="Compton,US" code="CPM" />
//   <row city="Con Dao,VN" code="VCS" />
//   <row city="Conakry,GN" code="CKY" />
//   <row city="Conceicao Do Araguaia,BR" code="CDJ" />
//   <row city="Concepcion,PY" code="CIO" />
//   <row city="Concepcion,CL" code="CCP" />
//   <row city="Concord,US" code="CON" />
//   <row city="Concord,US" code="CCR" />
//   <row city="Concord,US" code="USA" />
//   <row city="Concordia,AR" code="COC" />
//   <row city="Concordia,US" code="CNK" />
//   <row city="Condobolin,AU" code="CBX" />
//   <row city="Condoto,CO" code="COG" />
//   <row city="Conroe,US" code="CXO" />
//   <row city="Constanta,RO" code="CND" />
//   <row city="Constantine,DZ" code="CZL" />
//   <row city="Contadora,PA" code="OTD" />
//   <row city="Coober Pedy,AU" code="CPD" />
//   <row city="Cooch Behar,IN" code="COH" />
//   <row city="Cooinda,AU" code="CDA" />
//   <row city="Cooktown,AU" code="CTN" />
//   <row city="Cooma,AU" code="OOM" />
//   <row city="Coonabarabrn,AU" code="COJ" />
//   <row city="Coonamble,AU" code="CNB" />
//   <row city="Cooper Landing,US" code="JLA" />
//   <row city="Cooperstown,US" code="COP" />
//   <row city="Cootamundra,AU" code="CMD" />
//   <row city="Copenhagen,DK" code="CPH" />
//   <row city="Copiapo,CL" code="CPO" />
//   <row city="Copper Center,US" code="CZC" />
//   <row city="Copper Mountain,US" code="QCE" />
//   <row city="Coquimbo,CL" code="COW" />
//   <row city="Coral Harbour,CA" code="YZS" />
//   <row city="Corazon De Jesus,PA" code="CZJ" />
//   <row city="Corcoran,US" code="CRO" />
//   <row city="Cordillo Downs,AU" code="ODL" />
//   <row city="Cordoba,AR" code="COR" />
//   <row city="Cordoba,ES" code="ODB" />
//   <row city="Cordova,US" code="CDV" />
//   <row city="Corinth,US" code="CRX" />
//   <row city="Cork,IE" code="ORK" />
//   <row city="Corner Bay,US" code="CBA" />
//   <row city="Cornwall,CA" code="YCC" />
//   <row city="Coro,VE" code="CZE" />
//   <row city="Coromandel,NZ" code="CMV" />
//   <row city="Coron,PH" code="XCN" />
//   <row city="Corowa,AU" code="CWW" />
//   <row city="Corozal,BZ" code="CZH" />
//   <row city="Corozal,CO" code="CZU" />
//   <row city="Corpus Christi,US" code="CRP" />
//   <row city="Corralejo,ES" code="QFU" />
//   <row city="Corrientes,AR" code="CNQ" />
//   <row city="Corsicana,US" code="CRS" />
//   <row city="Cortes Bay,CA" code="YCF" />
//   <row city="Cortez,US" code="CEZ" />
//   <row city="Corumba,BR" code="CMG" />
//   <row city="Corvallis,US" code="CVO" />
//   <row city="Corvo Island,PT" code="CVU" />
//   <row city="Cosenza,IT" code="QCS" />
//   <row city="Cotabato,PH" code="CBO" />
//   <row city="Coteau,CA" code="XGK" />
//   <row city="Cotia,BR" code="QOI" />
//   <row city="Coto 47,CR" code="OTR" />
//   <row city="Cotonou,BJ" code="COO" />
//   <row city="Cotriguacu,BR" code="OTT" />
//   <row city="Cottbus,DE" code="CBU" />
//   <row city="Cottonwood,US" code="CTW" />
//   <row city="Cotulla,US" code="COT" />
//   <row city="Council,US" code="CIL" />
//   <row city="Council Bluffs,US" code="CBF" />
//   <row city="Courbevoie,FR" code="QEV" />
//   <row city="Courchevel,FR" code="CVF" />
//   <row city="Courtenay,CA" code="YCA" />
//   <row city="Coventry,GB" code="CVT" />
//   <row city="Covilha,PT" code="COV" />
//   <row city="Cowarie,AU" code="CWR" />
//   <row city="Cowell,AU" code="CCW" />
//   <row city="Cowley,CA" code="YYM" />
//   <row city="Cowra,AU" code="CWT" />
//   <row city="Coxs Bazaar,BD" code="CXB" />
//   <row city="Coyhaique,CL" code="GXQ" />
//   <row city="Cozumel,MX" code="CZM" />
//   <row city="Crackenback Village,AU" code="QWL" />
//   <row city="Cradock,ZA" code="CDO" />
//   <row city="Craig,US" code="CGA" />
//   <row city="Craig,US" code="CIG" />
//   <row city="Craig Cove,VU" code="CCV" />
//   <row city="Crailsheim,DE" code="QEI" />
//   <row city="Craiova,RO" code="CRA" />
//   <row city="Cranbrook,CA" code="YXC" />
//   <row city="Creil,FR" code="CSF" />
//   <row city="Crescent cities,US" code="CEC" />
//   <row city="Crested Butte,US" code="CSE" />
//   <row city="Creston,CA" code="CFQ" />
//   <row city="Creteil,FR" code="QFC" />
//   <row city="Crewe,GB" code="XVC" />
//   <row city="Criciuma,BR" code="CCM" />
//   <row city="Crooked Creek,US" code="CKD" />
//   <row city="Crooked Island,BS" code="CRI" />
//   <row city="Cross lake,CA" code="YCR" />
//   <row city="Crossett,US" code="CRT" />
//   <row city="Crossville,US" code="CSV" />
//   <row city="Crotone,IT" code="CRV" />
//   <row city="Crows Landing,US" code="NRC" />
//   <row city="Croydon,AU" code="CDQ" />
//   <row city="Cruzeiro Do Sul,BR" code="CZS" />
//   <row city="Cube Cove,US" code="CUW" />
//   <row city="Cucuta,CO" code="CUC" />
//   <row city="Cudal,AU" code="CUG" />
//   <row city="Cuddapah,IN" code="CDP" />
//   <row city="Cuenca,EC" code="CUE" />
//   <row city="Cuenca,ES" code="CEJ" />
//   <row city="Cuernavaca,MX" code="CVJ" />
//   <row city="Cuiaba,BR" code="CGB" />
//   <row city="Culebra,US" code="CPX" />
//   <row city="Culiacan,MX" code="CUL" />
//   <row city="Culion,PH" code="CUJ" />
//   <row city="Culver cities,US" code="CVR" />
//   <row city="Cumana,VE" code="CUM" />
//   <row city="Cumberland,US" code="CBE" />
//   <row city="Cuneo,IT" code="CUF" />
//   <row city="Cunnamulla,AU" code="CMA" />
//   <row city="Curacao,CW" code="CUR" />
//   <row city="Curico,CL" code="ZCQ" />
//   <row city="Curitiba,BR" code="CWB" />
//   <row city="Cutral Co,AR" code="CUT" />
//   <row city="Cuxhaven,DE" code="FCN" />
//   <row city="Cuzco,PE" code="CUZ" />
//   <row city="Cyangugu,RW" code="KME" />
//   <row city="Czestochowa,PL" code="CZW" />
//   <row city="Da Nang,VN" code="DAD" />
//   <row city="Dachau,DE" code="ZCR" />
//   <row city="Daegu,KR" code="TAE" />
//   <row city="Daggett,US" code="DAG" />
//   <row city="Dakar,SN" code="DKR" />
//   <row city="Dakhla,MA" code="VIL" />
//   <row city="Dakhla Oasis,EG" code="DAK" />
//   <row city="Dalaman,TR" code="DLM" />
//   <row city="Dalat,VN" code="DLI" />
//   <row city="Dalby,AU" code="DBY" />
//   <row city="Dalgaranga,AU" code="DGD" />
//   <row city="Dali cities,CN" code="DLU" />
//   <row city="Dalian,CN" code="DLC" />
//   <row city="Dallas,US" code="DFW" />
//   <row city="Daloa,CI" code="DJO" />
//   <row city="Dalton,US" code="DNN" />
//   <row city="Daman,IN" code="NMB" />
//   <row city="Damascus,SY" code="DAM" />
//   <row city="Dambula,LK" code="DBU" />
//   <row city="Dammam,SA" code="DMM" />
//   <row city="Danbury,US" code="DXR" />
//   <row city="Dandong,CN" code="DDG" />
//   <row city="Dandugama,LK" code="DGM" />
//   <row city="Dangriga,BZ" code="DGA" />
//   <row city="Danville,US" code="DAN" />
//   <row city="Danville,US" code="DNV" />
//   <row city="Daocheng,CN" code="DCY" />
//   <row city="Daparizo,IN" code="DAE" />
//   <row city="Daqing,CN" code="DQA" />
//   <row city="Dar Es Salaam,TZ" code="DAR" />
//   <row city="Darlington,GB" code="XVG" />
//   <row city="Darmstadt,DE" code="ZCS" />
//   <row city="Darnley Island,AU" code="NLF" />
//   <row city="Daru,PG" code="DAU" />
//   <row city="Darwin,AU" code="DRW" />
//   <row city="Dashoguz,TM" code="TAZ" />
//   <row city="Datong,CN" code="DAT" />
//   <row city="Daugavpils,LV" code="DGP" />
//   <row city="Dauphin,CA" code="YDN" />
//   <row city="Davao,PH" code="DVO" />
//   <row city="Davenport,US" code="DVN" />
//   <row city="David,PA" code="DAV" />
//   <row city="Davos,CH" code="ZDV" />
//   <row city="Dawadmi,SA" code="DWD" />
//   <row city="Dawson cities,CA" code="YDA" />
//   <row city="Dawson Creek,CA" code="YDQ" />
//   <row city="Dax Les Thermes,FR" code="XDA" />
//   <row city="Daydream Island,AU" code="DDI" />
//   <row city="Dayong,CN" code="DYG" />
//   <row city="Dayton,US" code="DAY" />
//   <row city="Daytona Beach,US" code="DAB" />
//   <row city="Dazhou,CN" code="DAX" />
//   <row city="Deadmans Cay,BS" code="LGI" />
//   <row city="Dearborn,US" code="DEO" />
//   <row city="Dease Lake,CA" code="YDL" />
//   <row city="Death Valley,US" code="DTH" />
//   <row city="Deauville,FR" code="DOL" />
//   <row city="Debrecen,HU" code="DEB" />
//   <row city="Debremarcos,ET" code="DBM" />
//   <row city="Decatur,US" code="DCU" />
//   <row city="Decatur,US" code="DEC" />
//   <row city="Decorah,US" code="DEH" />
//   <row city="Deer Harbour,US" code="DHB" />
//   <row city="Deer Lake,CA" code="YDF" />
//   <row city="Deer Lake,CA" code="YVZ" />
//   <row city="Deering,US" code="DRG" />
//   <row city="Defiance,US" code="DFI" />
//   <row city="Degerfors,SE" code="XXD" />
//   <row city="Dehra Dun,IN" code="DED" />
//   <row city="Deirezzor,SY" code="DEZ" />
//   <row city="Del Carmen,PH" code="IAO" />
//   <row city="Del Rio,US" code="DRT" />
//   <row city="Delemont,CH" code="ZDW" />
//   <row city="Delhi,IN" code="DEL" />
//   <row city="Delmenhorst,DE" code="ZCT" />
//   <row city="Delta,US" code="DTA" />
//   <row city="Delta Downs,AU" code="DDN" />
//   <row city="Delta Junction,US" code="DJN" />
//   <row city="Dembidollo,ET" code="DEM" />
//   <row city="Den Helder,NL" code="DHR" />
//   <row city="Denham,AU" code="DNM" />
//   <row city="Deniliquin,AU" code="DNQ" />
//   <row city="Denizli,TR" code="DNZ" />
//   <row city="Denpasar Bali,ID" code="DPS" />
//   <row city="Denver,US" code="DEN" />
//   <row city="Deputatskij,RU" code="DPT" />
//   <row city="Dera Ghazi Khan,PK" code="DEA" />
//   <row city="Dera Ismail Khan,PK" code="DSK" />
//   <row city="Derby,AU" code="DRB" />
//   <row city="Derby,GB" code="XQH" />
//   <row city="Derby cities,AU" code="DCN" />
//   <row city="Derim,PG" code="DER" />
//   <row city="Des Moines,US" code="DSM" />
//   <row city="Dessau,DE" code="ZSU" />
//   <row city="Dessie,ET" code="DSE" />
//   <row city="Destin,US" code="DSI" />
//   <row city="Detroit,US" code="DTT" />
//   <row city="Detroit Lakes,US" code="DTL" />
//   <row city="Deventer,NL" code="QYV" />
//   <row city="Devils Lake,US" code="DVL" />
//   <row city="Devonport,AU" code="DPO" />
//   <row city="Deyang,CN" code="DEY" />
//   <row city="Dhahran,SA" code="DHA" />
//   <row city="Dhaka,BD" code="DAC" />
//   <row city="Dibaa,OM" code="BYB" />
//   <row city="Dibrugarh,IN" code="DIB" />
//   <row city="Dickinson,US" code="DIK" />
//   <row city="Dickwella,LK" code="DIW" />
//   <row city="Didcot,GB" code="XPW" />
//   <row city="Dien Bien Phu,VN" code="DIN" />
//   <row city="Dieppe,FR" code="DPE" />
//   <row city="Dietikon,CH" code="ZDX" />
//   <row city="Digby,CA" code="YDG" />
//   <row city="Digne,FR" code="XDI" />
//   <row city="Dijon,FR" code="DIJ" />
//   <row city="Dili,TL" code="DIL" />
//   <row city="Dillingham,US" code="DLG" />
//   <row city="Dillon,US" code="DLL" />
//   <row city="Dillons Bay,VU" code="DLY" />
//   <row city="Dimapur,IN" code="DMU" />
//   <row city="Dinard,FR" code="DNR" />
//   <row city="Diomede Island,US" code="DIO" />
//   <row city="Dipolog,PH" code="DPL" />
//   <row city="Diqing,CN" code="DIG" />
//   <row city="Dire Dawa,ET" code="DIR" />
//   <row city="Dirranbandi,AU" code="DRN" />
//   <row city="Disneyland Paris,FR" code="DLP" />
//   <row city="Disneyland Paris Rail,FR" code="XED" />
//   <row city="Diu In,IN" code="DIU" />
//   <row city="Divinopolis,BR" code="DIQ" />
//   <row city="Diyarbakir,TR" code="DIY" />
//   <row city="Djanet,DZ" code="DJG" />
//   <row city="Djerba,TN" code="DJE" />
//   <row city="Djibouti,DJ" code="JIB" />
//   <row city="Dnepropetrovsk,UA" code="DNK" />
//   <row city="Doany,MG" code="DOA" />
//   <row city="Dobo,ID" code="DOB" />
//   <row city="Dodge cities,US" code="DDC" />
//   <row city="Dodoima,PG" code="DDM" />
//   <row city="Dodoma,TZ" code="DOD" />
//   <row city="Doha,QA" code="DOH" />
//   <row city="Dolbeau,CA" code="YDO" />
//   <row city="Dole,FR" code="DLE" />
//   <row city="Dolomi,US" code="DLO" />
//   <row city="Dombas,NO" code="XGP" />
//   <row city="Dominica,DM" code="DOM" />
//   <row city="Donauwoerth,DE" code="QWR" />
//   <row city="Doncaster,GB" code="DSA" />
//   <row city="Donegal,IE" code="CFN" />
//   <row city="Donetsk,UA" code="DOK" />
//   <row city="Dong Hoi,VN" code="VDH" />
//   <row city="Dongara,AU" code="DOX" />
//   <row city="Dongguan,CN" code="XHO" />
//   <row city="Dongola,SD" code="DOG" />
//   <row city="Dongying,CN" code="DOY" />
//   <row city="Doomadgee,AU" code="DMD" />
//   <row city="Dora Bay,US" code="DOF" />
//   <row city="Dorado,US" code="DDP" />
//   <row city="Dori,BF" code="DOR" />
//   <row city="Dormagen,DE" code="ZCW" />
//   <row city="Dornbirn,AT" code="QDI" />
//   <row city="Dornoch,GB" code="DOC" />
//   <row city="Dorobisoro,PG" code="DOO" />
//   <row city="Dortmund,DE" code="DTM" />
//   <row city="Dorunda,AU" code="DRD" />
//   <row city="Dothan,US" code="DHN" />
//   <row city="Douai,FR" code="XDN" />
//   <row city="Douala,CM" code="DLA" />
//   <row city="Douglas,US" code="DUG" />
//   <row city="Douglas,US" code="DGW" />
//   <row city="Dourados,BR" code="DOU" />
//   <row city="Dover,US" code="DOV" />
//   <row city="Dover,GB" code="QQD" />
//   <row city="Downey,US" code="JDY" />
//   <row city="Doylestown,US" code="DYL" />
//   <row city="Drachten,NL" code="QYC" />
//   <row city="Drake Bay,CR" code="DRK" />
//   <row city="Drammen,NO" code="XND" />
//   <row city="Drangedal,NO" code="ZVD" />
//   <row city="Drayton Valley,CA" code="YDC" />
//   <row city="Dresden,DE" code="DRS" />
//   <row city="Dreux,FR" code="XDR" />
//   <row city="Drift River,US" code="DRF" />
//   <row city="Drummond,US" code="DRU" />
//   <row city="Drummondville,CA" code="XDM" />
//   <row city="Dryden,CA" code="YHD" />
//   <row city="Dschang,CM" code="DSC" />
//   <row city="Dubai,AE" code="DXB" />
//   <row city="Dubbo,AU" code="DBO" />
//   <row city="Dublin,US" code="DBN" />
//   <row city="Dublin,IE" code="DUB" />
//   <row city="Dublin,US" code="PSK" />
//   <row city="Dubois,US" code="DUJ" />
//   <row city="Dubrovnik,HR" code="DBV" />
//   <row city="Dubuque,US" code="DBQ" />
//   <row city="Dueren,DE" code="ZCY" />
//   <row city="Dugong,MZ" code="DGK" />
//   <row city="Duisburg,DE" code="DUI" />
//   <row city="Duluth,US" code="DLH" />
//   <row city="Dumaguete,PH" code="DGT" />
//   <row city="Dunbar,AU" code="DNB" />
//   <row city="Duncan,CA" code="DUQ" />
//   <row city="Duncan,US" code="DUC" />
//   <row city="Dundee,GB" code="DND" />
//   <row city="Dundo,AO" code="DUE" />
//   <row city="Dunedin,NZ" code="DUD" />
//   <row city="Dunhuang,CN" code="DNH" />
//   <row city="Dunk Island,AU" code="DKI" />
//   <row city="Dunkerque,FR" code="XDK" />
//   <row city="Dunkirk,US" code="DKK" />
//   <row city="Duqm,OM" code="JNJ" />
//   <row city="Duque De Caxias,BR" code="QDQ" />
//   <row city="Durango,MX" code="DGO" />
//   <row city="Durango,US" code="DRO" />
//   <row city="Durant,US" code="DUA" />
//   <row city="Durazno,UY" code="DZO" />
//   <row city="Durban,ZA" code="DUR" />
//   <row city="Durgapur,IN" code="RDP" />
//   <row city="Durham,GB" code="MME" />
//   <row city="Durham Downs,AU" code="DHD" />
//   <row city="Durrie,AU" code="DRR" />
//   <row city="Dushanbe,TJ" code="DYU" />
//   <row city="Dusseldorf,DE" code="DUS" />
//   <row city="Dutch Harbor,US" code="DUT" />
//   <row city="Dysart,AU" code="DYA" />
//   <row city="Dzaoudzi,YT" code="DZA" />
//   <row city="Eagle,US" code="EAA" />
//   <row city="Eagle,US" code="EGE" />
//   <row city="Eagle Lake,US" code="ELA" />
//   <row city="Eagle Pass,US" code="EGP" />
//   <row city="Eagle River,US" code="EGV" />
//   <row city="Earlton,CA" code="YXR" />
//   <row city="East Hampton,US" code="HTO" />
//   <row city="East Hartford,US" code="EHT" />
//   <row city="East London,ZA" code="ELS" />
//   <row city="East Midlands,GB" code="EMA" />
//   <row city="East Sound,US" code="ESD" />
//   <row city="East Stroudsburg,US" code="ESP" />
//   <row city="Easter Island,CL" code="IPC" />
//   <row city="Eastland,US" code="ETN" />
//   <row city="Easton,US" code="ESN" />
//   <row city="Eau Claire,US" code="EAU" />
//   <row city="Ebon,MH" code="EBO" />
//   <row city="Echuca,AU" code="ECH" />
//   <row city="Eday,GB" code="EOI" />
//   <row city="Eden,AU" code="QDN" />
//   <row city="Edenton,US" code="EDE" />
//   <row city="Edgewood,US" code="EDG" />
//   <row city="Edinburgh,GB" code="EDI" />
//   <row city="Edmonton,CA" code="YEA" />
//   <row city="Edna Bay,US" code="EDA" />
//   <row city="Edremit,TR" code="EDO" />
//   <row city="Edson,CA" code="YET" />
//   <row city="Edward River,AU" code="EDR" />
//   <row city="Edwards,US" code="EDW" />
//   <row city="Eek cities,US" code="EEK" />
//   <row city="Efogi,PG" code="EFG" />
//   <row city="Egegik,US" code="EGX" />
//   <row city="Egelsbach,DE" code="QEF" />
//   <row city="Egilsstadir,IS" code="EGS" />
//   <row city="Eindhoven,NL" code="EIN" />
//   <row city="Einsiedeln,CH" code="ZDZ" />
//   <row city="Eirunepe,BR" code="ERN" />
//   <row city="Eisenach,DE" code="EIB" />
//   <row city="Ekaterinburg,RU" code="SVX" />
//   <row city="Ekuk,US" code="KKU" />
//   <row city="Ekwok,US" code="KEK" />
//   <row city="El Aaiun,MA" code="EUN" />
//   <row city="El Arish,EG" code="AAC" />
//   <row city="El Bagre,CO" code="EBG" />
//   <row city="El Bolson,AR" code="EHL" />
//   <row city="El Cajon,US" code="CJN" />
//   <row city="El Calafate,AR" code="FTE" />
//   <row city="El Centro,US" code="IPL" />
//   <row city="El Dorado,US" code="ELD" />
//   <row city="El Fasher,SD" code="ELF" />
//   <row city="El Golea,DZ" code="ELG" />
//   <row city="El Maiten,AR" code="EMX" />
//   <row city="El Monte,US" code="EMT" />
//   <row city="El Nido,PH" code="ENI" />
//   <row city="El Obeid,SD" code="EBD" />
//   <row city="El Oued,DZ" code="ELU" />
//   <row city="El Paso,US" code="ELP" />
//   <row city="El Portillo Samana,DO" code="EPS" />
//   <row city="El Salvador,CL" code="ESR" />
//   <row city="El Tor,EG" code="ELT" />
//   <row city="El Vigia,VE" code="VIG" />
//   <row city="El Yopal,CO" code="EYP" />
//   <row city="Elat,IL" code="ETH" />
//   <row city="Elazig,TR" code="EZS" />
//   <row city="Elba Island,IT" code="EBA" />
//   <row city="Elblag,PL" code="ZBG" />
//   <row city="Elcho Island,AU" code="ELC" />
//   <row city="Eldoret,KE" code="EDL" />
//   <row city="Eldred Rock,US" code="ERO" />
//   <row city="Elfin Cove,US" code="ELV" />
//   <row city="Elim,US" code="ELI" />
//   <row city="Elista,RU" code="ESL" />
//   <row city="Elizabeth cities,US" code="ECG" />
//   <row city="Elizabethtown,US" code="EKX" />
//   <row city="Elk cities,US" code="ELK" />
//   <row city="Elkhart,US" code="EKI" />
//   <row city="Elkins,US" code="EKN" />
//   <row city="Elko,US" code="EKO" />
//   <row city="Ellamar,US" code="ELW" />
//   <row city="Elliot Lake,CA" code="YEL" />
//   <row city="Ellisras,ZA" code="ELL" />
//   <row city="Elmira,US" code="ELM" />
//   <row city="Elverum,NO" code="XUC" />
//   <row city="Ely Mn,US" code="LYU" />
//   <row city="Ely NV,US" code="ELY" />
//   <row city="Emae,VU" code="EAE" />
//   <row city="Embessa,PG" code="EMS" />
//   <row city="Embrach,CH" code="QEQ" />
//   <row city="Emden,DE" code="EME" />
//   <row city="Emerald,AU" code="EMD" />
//   <row city="Emeryville,US" code="JEM" />
//   <row city="Emirau,PG" code="EMI" />
//   <row city="Emmerich,DE" code="QEX" />
//   <row city="Emmonak,US" code="EMK" />
//   <row city="Emo PG,PG" code="EMO" />
//   <row city="Emporia,US" code="EMP" />
//   <row city="Enarotali,ID" code="EWI" />
//   <row city="Encarnacion,PY" code="ENO" />
//   <row city="Ende,ID" code="ENE" />
//   <row city="Enfidha,TN" code="NBE" />
//   <row city="Engelberg,CH" code="ZHB" />
//   <row city="English Bay,US" code="KEB" />
//   <row city="Enid,US" code="WDG" />
//   <row city="Enkoping,SE" code="XWQ" />
//   <row city="Enniskillen,IE" code="ENK" />
//   <row city="Enonekio,FI" code="ENF" />
//   <row city="Enschede,NL" code="ENS" />
//   <row city="Ensenada,MX" code="ESE" />
//   <row city="Enshi,CN" code="ENH" />
//   <row city="Entebbe,UG" code="EBB" />
//   <row city="Enterprise,US" code="ETS" />
//   <row city="Enugu,NG" code="ENU" />
//   <row city="Epernay,FR" code="XEP" />
//   <row city="Ephesus,TR" code="ADB" />
//   <row city="Epinal,FR" code="EPL" />
//   <row city="Eqalugaarsuit,GL" code="QFG" />
//   <row city="Erbil,IQ" code="EBL" />
//   <row city="Ercan,CY" code="ECN" />
//   <row city="Erdenet,MN" code="ERT" />
//   <row city="Erechim,BR" code="ERM" />
//   <row city="Erenhot,CN" code="ERL" />
//   <row city="Erfurt,DE" code="ERF" />
//   <row city="Erie,US" code="ERI" />
//   <row city="Erlangen,DE" code="ZCZ" />
//   <row city="Errachidia,MA" code="ERH" />
//   <row city="Erume,PG" code="ERU" />
//   <row city="Erzincan,TR" code="ERC" />
//   <row city="Erzurum,TR" code="ERZ" />
//   <row city="Esa Ala,PG" code="ESA" />
//   <row city="Esbjerg,DK" code="EBJ" />
//   <row city="Escanaba,US" code="ESC" />
//   <row city="Eschweiler,DE" code="ZEA" />
//   <row city="Eskilstuna,SE" code="EKT" />
//   <row city="Eskisehir,TR" code="ESK" />
//   <row city="Eskisehir cities,TR" code="AOE" />
//   <row city="Esmeraldas,EC" code="ESM" />
//   <row city="Esperance,AU" code="EPR" />
//   <row city="Espiritu Santo,VU" code="SON" />
//   <row city="Esquel,AR" code="EQS" />
//   <row city="Esquimalt,CA" code="YPF" />
//   <row city="Essaouira,MA" code="ESU" />
//   <row city="Essen,DE" code="ESS" />
//   <row city="Esslingen,DE" code="ZEB" />
//   <row city="Estevan,CA" code="YEN" />
//   <row city="Etadunna,AU" code="ETD" />
//   <row city="Eua To,TO" code="EUA" />
//   <row city="Eufaula,US" code="EUF" />
//   <row city="Eugene,US" code="EUG" />
//   <row city="Eureka,US" code="EKA" />
//   <row city="Euskirchen,DE" code="ZED" />
//   <row city="Evans Head,AU" code="EVH" />
//   <row city="Evanston,US" code="EVW" />
//   <row city="Evansville,US" code="EVV" />
//   <row city="Eveleth,US" code="EVM" />
//   <row city="Evensk,RU" code="SWV" />
//   <row city="Everett,US" code="PAE" />
//   <row city="Evian Les Bains,FR" code="XEB" />
//   <row city="Evreux,FR" code="EVX" />
//   <row city="Evry,FR" code="JEV" />
//   <row city="Excursion Inlet,US" code="EXI" />
//   <row city="Exeter,GB" code="EXT" />
//   <row city="Exmouth Gulf,AU" code="EXM" />
//   <row city="FUKUI,JP" code="FKJ" />
//   <row city="Faaite,PF" code="FAC" />
//   <row city="Faeroe Islands,DK" code="FAE" />
//   <row city="Fagernes,NO" code="VDB" />
//   <row city="Fair Isle,GB" code="FIE" />
//   <row city="Fairbanks,US" code="FAI" />
//   <row city="Fairfield,US" code="SUU" />
//   <row city="Fairmont,US" code="FRM" />
//   <row city="Fairmont Springs,CA" code="YCZ" />
//   <row city="Faisalabad,PK" code="LYP" />
//   <row city="Faizabad,AF" code="FBD" />
//   <row city="Fajardo,US" code="FAJ" />
//   <row city="Fak Fak,ID" code="FKQ" />
//   <row city="Fakarava,PF" code="FAV" />
//   <row city="Falkenberg,SE" code="XYM" />
//   <row city="Falkoping,SE" code="XYF" />
//   <row city="Fallon,US" code="NFL" />
//   <row city="Falls Creek,AU" code="FLC" />
//   <row city="Falmouth,US" code="FMH" />
//   <row city="False Island,US" code="FAK" />
//   <row city="False Pass,US" code="KFP" />
//   <row city="Falun,SE" code="XWF" />
//   <row city="Fane,PG" code="FNE" />
//   <row city="Fangatau,PF" code="FGU" />
//   <row city="Farafangana,MG" code="RVA" />
//   <row city="Fargo,US" code="FAR" />
//   <row city="Faridabad,IN" code="QNF" />
//   <row city="Farmingdale,US" code="FRG" />
//   <row city="Farmington,US" code="FMN" />
//   <row city="Farnborough Hampshire,GB" code="FAB" />
//   <row city="Faro,PT" code="FAO" />
//   <row city="Farsund,NO" code="FAN" />
//   <row city="Fauske,NO" code="ZXO" />
//   <row city="Fayetteville,US" code="FAY" />
//   <row city="Fayetteville,US" code="FYV" />
//   <row city="Feira De Santana,BR" code="FEC" />
//   <row city="Fera Island,SB" code="FRE" />
//   <row city="Fergana,UZ" code="FEG" />
//   <row city="Fergus Falls,US" code="FFM" />
//   <row city="Fernando De Noronha,BR" code="FEN" />
//   <row city="Fez Ma,MA" code="FEZ" />
//   <row city="Fianarantsoa,MG" code="WFI" />
//   <row city="Ficksburg,ZA" code="FCB" />
//   <row city="Figari,FR" code="FSC" />
//   <row city="Filadelfia,PY" code="FLM" />
//   <row city="Filton,GB" code="FZO" />
//   <row city="Findlay,US" code="FDY" />
//   <row city="Finschhafen,PG" code="FIN" />
//   <row city="Finse,NO" code="XKO" />
//   <row city="Fitzroy Crossing,AU" code="FIZ" />
//   <row city="Flagstaff,US" code="FLG" />
//   <row city="Flam,NO" code="XGH" />
//   <row city="Flamingo,CR" code="FMG" />
//   <row city="Flat,US" code="FLT" />
//   <row city="Flateyri,IS" code="FLI" />
//   <row city="Flen,SE" code="XYI" />
//   <row city="Flensburg,DE" code="FLF" />
//   <row city="Flin Flon,CA" code="YFO" />
//   <row city="Flinder Island,AU" code="FLS" />
//   <row city="Flint,US" code="FNT" />
//   <row city="Flippin,US" code="FLP" />
//   <row city="Florence,US" code="FLO" />
//   <row city="Florence,IT" code="FLR" />
//   <row city="Florencia,CO" code="FLA" />
//   <row city="Flores,GT" code="FRS" />
//   <row city="Floriano,BR" code="FLB" />
//   <row city="Florianopolis,BR" code="FLN" />
//   <row city="Floro,NO" code="FRO" />
//   <row city="Fluelen,CH" code="ZHD" />
//   <row city="Foggia,IT" code="FOG" />
//   <row city="Foix,FR" code="XFX" />
//   <row city="Foley,US" code="NHX" />
//   <row city="Font Romeu,FR" code="QZF" />
//   <row city="Fontainebleau,FR" code="XFB" />
//   <row city="Forbes,AU" code="FRB" />
//   <row city="Forde,NO" code="FDE" />
//   <row city="Forli,IT" code="FRL" />
//   <row city="Formosa,AR" code="FMA" />
//   <row city="Forrest cities,US" code="FCY" />
//   <row city="Forssa,FI" code="QVE" />
//   <row city="Forster,AU" code="FOT" />
//   <row city="Fort Bragg,US" code="FOB" />
//   <row city="Fort Bridger,US" code="FBR" />
//   <row city="Fort Chaffee,US" code="CCA" />
//   <row city="Fort Dauphin,MG" code="FTU" />
//   <row city="Fort Dodge,US" code="FOD" />
//   <row city="Fort Frances,CA" code="YAG" />
//   <row city="Fort Good Hope,CA" code="YGH" />
//   <row city="Fort Hope,CA" code="YFH" />
//   <row city="Fort Irwin,US" code="BYS" />
//   <row city="Fort Madison,US" code="FMS" />
//   <row city="Fort Meade,US" code="FME" />
//   <row city="Fort Myers,US" code="FMY" />
//   <row city="Fort Nelson,CA" code="YYE" />
//   <row city="Fort Pierce,US" code="FPR" />
//   <row city="Fort Polk,US" code="POE" />
//   <row city="Fort Scott,US" code="FSK" />
//   <row city="Fort Severn,CA" code="YER" />
//   <row city="Fort Simpson,CA" code="YFS" />
//   <row city="Fort Stockton,US" code="FST" />
//   <row city="Fort William,GB" code="FWM" />
//   <row city="Fortaleza,BR" code="FOR" />
//   <row city="Fortuna,CR" code="FON" />
//   <row city="Foshan,CN" code="ZCP" />
//   <row city="Fougamou,GA" code="FOU" />
//   <row city="Fox Glacier,NZ" code="FGL" />
//   <row city="Fox Harbour,CA" code="YFX" />
//   <row city="Franca,BR" code="FRC" />
//   <row city="Franceville Mvengue,GA" code="MVB" />
//   <row city="Francisco Beltrao,BR" code="FBE" />
//   <row city="Francistown,BW" code="FRW" />
//   <row city="Frankfort,US" code="FFT" />
//   <row city="Frankfurt,DE" code="FRA" />
//   <row city="Frankfurt An Der Oder,DE" code="ZFR" />
//   <row city="Franklin,US" code="FKN" />
//   <row city="Franklin,US" code="FKL" />
//   <row city="Franz Josef,NZ" code="WHO" />
//   <row city="Frauenfeld,CH" code="ZHE" />
//   <row city="Fredericia,DK" code="ZBJ" />
//   <row city="Frederick,US" code="FDK" />
//   <row city="Frederickshavn,DK" code="QFH" />
//   <row city="Fredericton,CA" code="YFC" />
//   <row city="Fredericton Junction,CA" code="XFC" />
//   <row city="Fredrikstad,NO" code="XKF" />
//   <row city="Freeport,BS" code="FPO" />
//   <row city="Freetown,SL" code="FNA" />
//   <row city="Fregate Island,SC" code="FRK" />
//   <row city="Freiburg,DE" code="QFB" />
//   <row city="Freilassing,DE" code="QFL" />
//   <row city="Frejus,FR" code="FRJ" />
//   <row city="Fremantle,AU" code="JFM" />
//   <row city="French Valley,US" code="RBK" />
//   <row city="Frenchville,US" code="WFK" />
//   <row city="Fresno,US" code="FAT" />
//   <row city="Fribourg,CH" code="ZHF" />
//   <row city="Friday Harbor,US" code="FRD" />
//   <row city="Friedrichshafen,DE" code="FDH" />
//   <row city="Fritzlar,DE" code="FRZ" />
//   <row city="Front Royal,US" code="FRR" />
//   <row city="Frosinone,IT" code="QFR" />
//   <row city="Frutillar,CL" code="FRT" />
//   <row city="Fryeburg,US" code="FRY" />
//   <row city="Ft Benning,US" code="QFE" />
//   <row city="Ft Collins,US" code="FNL" />
//   <row city="Ft De France,MQ" code="FDF" />
//   <row city="Ft Huachuca,US" code="FHU" />
//   <row city="Ft Lauderdale,US" code="FLL" />
//   <row city="Ft Leonard Wood,US" code="TBN" />
//   <row city="Ft McMurray,CA" code="YMM" />
//   <row city="Ft Smith,CA" code="YSM" />
//   <row city="Ft Smith,US" code="FSM" />
//   <row city="Ft St John,CA" code="YXJ" />
//   <row city="Ft Wayne,US" code="FWA" />
//   <row city="Ft Worth,US" code="FTW" />
//   <row city="Ft Yukon,US" code="FYU" />
//   <row city="Fuengirola,ES" code="FGR" />
//   <row city="Fuerte Olimpo,PY" code="OLK" />
//   <row city="Fuerth,DE" code="ZEF" />
//   <row city="Fukue,JP" code="FUJ" />
//   <row city="Fukuoka,JP" code="FUK" />
//   <row city="Fukushima,JP" code="FKS" />
//   <row city="Fukuyama,JP" code="QFY" />
//   <row city="Fulda,DE" code="ZEE" />
//   <row city="Fulleborn,PG" code="FUB" />
//   <row city="Fullerton,US" code="FUL" />
//   <row city="Funafuti,TV" code="FUN" />
//   <row city="Funchal,PT" code="FNC" />
//   <row city="Funter Bay,US" code="FNR" />
//   <row city="Fuoshan,CN" code="FUO" />
//   <row city="Furstenfeldbruck,DE" code="FEL" />
//   <row city="Futuna,PF" code="FUT" />
//   <row city="Fuyang,CN" code="FUG" />
//   <row city="Fuyun,CN" code="FYN" />
//   <row city="Fuzhou,CN" code="FOC" />
//   <row city="GOLD BEACH,US" code="GOL" />
//   <row city="GRINDELWALD,CH" code="ZHJ" />
//   <row city="GROZNY,RU" code="GRV" />
//   <row city="Gabala,AZ" code="GBB" />
//   <row city="Gabes,TN" code="GAE" />
//   <row city="Gaborone,BW" code="GBE" />
//   <row city="Gadsden,US" code="GAD" />
//   <row city="Gainesville,US" code="GLE" />
//   <row city="Gainesville,US" code="GNV" />
//   <row city="Gainesville,US" code="GVL" />
//   <row city="Gaithersburg,US" code="GAI" />
//   <row city="Galapagos Is,EC" code="GPS" />
//   <row city="Galela,ID" code="GLX" />
//   <row city="Galena,US" code="GAL" />
//   <row city="Galesburg,US" code="GBG" />
//   <row city="Galiano Island,CA" code="YMF" />
//   <row city="Galion,US" code="GQQ" />
//   <row city="Gallivare,SE" code="GEV" />
//   <row city="Gallup,US" code="GUP" />
//   <row city="Galveston,US" code="GLS" />
//   <row city="Galway,IE" code="GWY" />
//   <row city="Gamarra,CO" code="GRA" />
//   <row city="Gamba,GA" code="GAX" />
//   <row city="Gambela,ET" code="GMB" />
//   <row city="Gambell,US" code="GAM" />
//   <row city="Gambier Island,PF" code="GMR" />
//   <row city="Gan Island,MV" code="GAN" />
//   <row city="Gananoque,CA" code="XGW" />
//   <row city="Gander,CA" code="YQX" />
//   <row city="Ganes Creek,US" code="GEK" />
//   <row city="Ganzhou,CN" code="KOW" />
//   <row city="Gap France,FR" code="GAT" />
//   <row city="Garaina,PG" code="GAR" />
//   <row city="Garbsen,DE" code="ZEH" />
//   <row city="Garden cities,US" code="JHC" />
//   <row city="Garden cities,US" code="GCK" />
//   <row city="Garden Hill Island Lake,CA" code="YIV" />
//   <row city="Garden Point,AU" code="GPN" />
//   <row city="Garissa,KE" code="GAS" />
//   <row city="Garmisch Partenkirchen,DE" code="ZEI" />
//   <row city="Garoe,SO" code="GGR" />
//   <row city="Garoua,CM" code="GOU" />
//   <row city="Gary,US" code="GYY" />
//   <row city="Gasmata,PG" code="GMI" />
//   <row city="Gaspe,CA" code="YGP" />
//   <row city="Gassim,SA" code="ELQ" />
//   <row city="Gatineau Hull,CA" code="YND" />
//   <row city="Gatlinburg,US" code="GKT" />
//   <row city="Gatokae,SB" code="GTA" />
//   <row city="Gaua Island,VU" code="ZGU" />
//   <row city="Gavle,SE" code="GVX" />
//   <row city="Gaya,IN" code="GAY" />
//   <row city="Gaylord,US" code="GLR" />
//   <row city="Gaza,PS" code="GZA" />
//   <row city="Gaziantep,TR" code="GZT" />
//   <row city="Gazipasa,TR" code="GZP" />
//   <row city="Gbangbatok,SL" code="GBK" />
//   <row city="Gdansk,PL" code="GDN" />
//   <row city="Gdynia,PL" code="QYD" />
//   <row city="Geelong,AU" code="GEX" />
//   <row city="Geilenkirchen,DE" code="GKE" />
//   <row city="Geilo,NO" code="DLD" />
//   <row city="Geladi,ET" code="GLC" />
//   <row city="Gelendzhik,RU" code="GDZ" />
//   <row city="Gelsenkirchen,DE" code="ZEJ" />
//   <row city="Gemena,CD" code="GMA" />
//   <row city="Geneina,SD" code="EGN" />
//   <row city="General Pico,AR" code="GPO" />
//   <row city="General Roca,AR" code="GNR" />
//   <row city="General Santos,PH" code="GES" />
//   <row city="Geneva,CH" code="GVA" />
//   <row city="Genoa,IT" code="GOA" />
//   <row city="Genting,MY" code="GTB" />
//   <row city="George,ZA" code="GRJ" />
//   <row city="George Town,AU" code="GEE" />
//   <row city="George Town,BS" code="GGT" />
//   <row city="Georgetown,CA" code="XHM" />
//   <row city="Georgetown,US" code="GED" />
//   <row city="Georgetown,AU" code="GTT" />
//   <row city="Gera,DE" code="ZGA" />
//   <row city="Geraldton,CA" code="YGQ" />
//   <row city="Geraldton,AU" code="GET" />
//   <row city="Gethsemanie,CA" code="ZGS" />
//   <row city="Gettysburg,US" code="GTY" />
//   <row city="Gewoia,PG" code="GEW" />
//   <row city="Ghadames,LY" code="LTD" />
//   <row city="Ghardaia,DZ" code="GHA" />
//   <row city="Ghat,LY" code="GHT" />
//   <row city="Ghent,BE" code="GNE" />
//   <row city="Gibraltar,GI" code="GIB" />
//   <row city="Giessen,DE" code="ZQY" />
//   <row city="Gifu,JP" code="QGU" />
//   <row city="Gijon,ES" code="QIJ" />
//   <row city="Gilgit,PK" code="GIL" />
//   <row city="Gillam,CA" code="YGX" />
//   <row city="Gillette,US" code="GCC" />
//   <row city="Girardot,CO" code="GIR" />
//   <row city="Girona,ES" code="GRO" />
//   <row city="Gisborne,NZ" code="GIS" />
//   <row city="Gisenyi,RW" code="GYI" />
//   <row city="Gizan,SA" code="GIZ" />
//   <row city="Gizo,SB" code="GZO" />
//   <row city="Gizycko,PL" code="ZYC" />
//   <row city="Gjerstad,NO" code="XGS" />
//   <row city="Gjoa Haven,CA" code="YHK" />
//   <row city="Gjogur,IS" code="GJR" />
//   <row city="Gjovik,NO" code="ZYG" />
//   <row city="Glacier Bay,US" code="GST" />
//   <row city="Gladbeck,DE" code="ZEK" />
//   <row city="Gladstone,AU" code="GLT" />
//   <row city="Glarus,CH" code="ZHG" />
//   <row city="Glasgow,US" code="GLW" />
//   <row city="Glasgow,US" code="GGW" />
//   <row city="Glasgow,GB" code="GLA" />
//   <row city="Glen Innes,AU" code="GLI" />
//   <row city="Glencoe,CA" code="XZC" />
//   <row city="Glendale,US" code="JGX" />
//   <row city="Glendive,US" code="GDV" />
//   <row city="Glengyle,AU" code="GLG" />
//   <row city="Glennallen,US" code="GLQ" />
//   <row city="Glens Falls,US" code="GFL" />
//   <row city="Glenwood Springs,US" code="GWS" />
//   <row city="Gliwice,PL" code="QLC" />
//   <row city="Globe,US" code="GLB" />
//   <row city="Gloucester,GB" code="GLO" />
//   <row city="Goa In,IN" code="GOI" />
//   <row city="Goba,ET" code="GOB" />
//   <row city="Gobernador Gregores,AR" code="GGS" />
//   <row city="Gode,ET" code="GDE" />
//   <row city="Gods Lake Narrows,CA" code="YGO" />
//   <row city="Gods River,CA" code="ZGI" />
//   <row city="Goeppingen,DE" code="ZES" />
//   <row city="Goerlitz,DE" code="ZGE" />
//   <row city="Goettingen,DE" code="ZEU" />
//   <row city="Goiania,BR" code="GYN" />
//   <row city="Gol cities,NO" code="GLL" />
//   <row city="Gold Coast,AU" code="OOL" />
//   <row city="Goldsboro,US" code="GSB" />
//   <row city="Golfito,CR" code="GLF" />
//   <row city="Golovin,US" code="GLV" />
//   <row city="Goma,CD" code="GOM" />
//   <row city="Gombe,NG" code="GMO" />
//   <row city="Gomel,BY" code="GME" />
//   <row city="Gonalia,PG" code="GOE" />
//   <row city="Gondar,ET" code="GDQ" />
//   <row city="Goodland,US" code="GLD" />
//   <row city="Goodnews Bay,US" code="GNU" />
//   <row city="Goodyear,US" code="GYR" />
//   <row city="Goondiwindi,AU" code="GOO" />
//   <row city="Goose Bay,CA" code="YYR" />
//   <row city="Gora,PG" code="GOC" />
//   <row city="Gorakhpur,IN" code="GOP" />
//   <row city="Gordon,US" code="GRN" />
//   <row city="Gore,ET" code="GOR" />
//   <row city="Gore Bay,CA" code="YZE" />
//   <row city="Gorizia,IT" code="QGO" />
//   <row city="Gorna Orjahovica,BG" code="GOZ" />
//   <row city="Gorno Altaysk,RU" code="RGK" />
//   <row city="Goroka,PG" code="GKA" />
//   <row city="Gorom,BF" code="XGG" />
//   <row city="Gorontalo,ID" code="GTO" />
//   <row city="Gosford,AU" code="GOS" />
//   <row city="Goshen,US" code="GSH" />
//   <row city="Goslar,DE" code="ZET" />
//   <row city="Gossau,CH" code="ZHH" />
//   <row city="Gotha,DE" code="ZGO" />
//   <row city="Gothenburg,SE" code="GOT" />
//   <row city="Goulburn,AU" code="GUL" />
//   <row city="Gove,AU" code="GOV" />
//   <row city="Governador Valadares,BR" code="GVR" />
//   <row city="Governor S Harbour,BS" code="GHB" />
//   <row city="Goyang,KR" code="QYK" />
//   <row city="Gozo,MT" code="GZM" />
//   <row city="Graciosa Island,PT" code="GRW" />
//   <row city="Grafton,AU" code="GFN" />
//   <row city="Gramado,BR" code="QRP" />
//   <row city="Gran Canaria,ES" code="LPA" />
//   <row city="Granada,ES" code="GRX" />
//   <row city="Grand Canyon,US" code="GCN" />
//   <row city="Grand Cayman Island,KY" code="GCM" />
//   <row city="Grand Forks,CA" code="ZGF" />
//   <row city="Grand Forks,US" code="GFK" />
//   <row city="Grand Island,US" code="GRI" />
//   <row city="Grand Junction,US" code="GJT" />
//   <row city="Grand Marais,US" code="GRM" />
//   <row city="Grand Rapids,US" code="GPZ" />
//   <row city="Grand Rapids,US" code="GRR" />
//   <row city="Grand Turk,TC" code="GDT" />
//   <row city="Grande Prairie,CA" code="YQU" />
//   <row city="Grande Riviere,CA" code="XDO" />
//   <row city="Grantham,GB" code="XGM" />
//   <row city="Grants,US" code="GNT" />
//   <row city="Granville,FR" code="GFR" />
//   <row city="Gravatai,BR" code="GCV" />
//   <row city="Grayling,US" code="KGX" />
//   <row city="Graz,AT" code="GRZ" />
//   <row city="Great Barrier Island,NZ" code="GBZ" />
//   <row city="Great Barrington,US" code="GBR" />
//   <row city="Great Bend,US" code="GBD" />
//   <row city="Great Falls,US" code="GTF" />
//   <row city="Great Keppel Is,AU" code="GKL" />
//   <row city="Greeley,US" code="GXY" />
//   <row city="Green Bay,US" code="GRB" />
//   <row city="Green River,US" code="RVR" />
//   <row city="Green River,PG" code="GVI" />
//   <row city="Greeneville,US" code="GCY" />
//   <row city="Greenfield,US" code="GFD" />
//   <row city="Greensboro,US" code="GSO" />
//   <row city="Greenville,US" code="PGV" />
//   <row city="Greenville,US" code="GLH" />
//   <row city="Greenville,US" code="GSP" />
//   <row city="Greenville,US" code="GVT" />
//   <row city="Greenwood,CA" code="YZX" />
//   <row city="Greenwood,US" code="GRD" />
//   <row city="Greenwood,US" code="GWO" />
//   <row city="Greifswald,DE" code="ZGW" />
//   <row city="Grenada,GD" code="GND" />
//   <row city="Grenchen,CH" code="ZHI" />
//   <row city="Grenoble,FR" code="GNB" />
//   <row city="Greybull,US" code="GEY" />
//   <row city="Greymouth,NZ" code="GMN" />
//   <row city="Griffith,AU" code="GFF" />
//   <row city="Grimsby,CA" code="XGY" />
//   <row city="Grimsby,GB" code="GSY" />
//   <row city="Grimsey,IS" code="GRY" />
//   <row city="Grodna,BY" code="GNA" />
//   <row city="Groennedal,GL" code="JGR" />
//   <row city="Grong,NO" code="XKG" />
//   <row city="Groningen,NL" code="GRQ" />
//   <row city="Groote Eylandt,AU" code="GTE" />
//   <row city="Grootfontein,NA" code="GFY" />
//   <row city="Grosseto,IT" code="GRS" />
//   <row city="Grundarfjordur,IS" code="GUU" />
//   <row city="Gstaad,CH" code="ZHK" />
//   <row city="Guadalajara,ES" code="GDU" />
//   <row city="Guadalajara,MX" code="GDL" />
//   <row city="Guam,GU" code="GUM" />
//   <row city="Guamal,CO" code="GAA" />
//   <row city="Guanaja,HN" code="GJA" />
//   <row city="Guanambi,BR" code="GNM" />
//   <row city="Guanare,VE" code="GUQ" />
//   <row city="Guang Yuan,CN" code="GYS" />
//   <row city="Guangzhou,CN" code="CAN" />
//   <row city="Guantanamo,CU" code="GAO" />
//   <row city="Guapi,CO" code="GPI" />
//   <row city="Guarapari,BR" code="GUZ" />
//   <row city="Guarapuava,BR" code="GPB" />
//   <row city="Guaratingueta,BR" code="GUJ" />
//   <row city="Guari,PG" code="GUG" />
//   <row city="Guatemala cities,GT" code="GUA" />
//   <row city="Guayaquil,EC" code="GYE" />
//   <row city="Guayaramerin,BO" code="GYA" />
//   <row city="Guaymas,MX" code="GYM" />
//   <row city="Guelph,CA" code="XIA" />
//   <row city="Gueret,FR" code="XGT" />
//   <row city="Guernsey,GB" code="GCI" />
//   <row city="Guettin,DE" code="GTI" />
//   <row city="Guezzam,DZ" code="INF" />
//   <row city="Guilin,CN" code="KWL" />
//   <row city="Guiria,VE" code="GUI" />
//   <row city="Guiyang,CN" code="KWE" />
//   <row city="Gulf Shores,US" code="GUF" />
//   <row city="Gulfport,US" code="GPT" />
//   <row city="Gulkana,US" code="GKN" />
//   <row city="Gummersbach,DE" code="ZEW" />
//   <row city="Gunnedah,AU" code="GUH" />
//   <row city="Gunnison,US" code="GUC" />
//   <row city="Gunungsitoli,ID" code="GNS" />
//   <row city="Gurayat,SA" code="URY" />
//   <row city="Gurupi,BR" code="GRP" />
//   <row city="Gutersloh,DE" code="GUT" />
//   <row city="Guwahati,IN" code="GAU" />
//   <row city="Guymon,US" code="GUY" />
//   <row city="Guyuan Shi,CN" code="GYU" />
//   <row city="Gwadar,PK" code="GWD" />
//   <row city="Gwalior,IN" code="GWL" />
//   <row city="Gweru,ZW" code="GWE" />
//   <row city="Gyandzhan,AZ" code="KVD" />
//   <row city="Gympie,AU" code="GYP" />
//   <row city="Gyor,HU" code="QGY" />
//   <row city="HAVASUPAI,US" code="HAE" />
//   <row city="Ha Apai,TO" code="HPA" />
//   <row city="Haa Dhaalu Atoll,MV" code="HAQ" />
//   <row city="Hachijo Jima,JP" code="HAC" />
//   <row city="Hachinohe,JP" code="HHE" />
//   <row city="Hachioji,JP" code="QHY" />
//   <row city="Hafr Albatin,SA" code="HBT" />
//   <row city="Hagen,DE" code="ZEY" />
//   <row city="Hagerstown,US" code="HGR" />
//   <row city="Hagfors,SE" code="HFS" />
//   <row city="Hahn,DE" code="HHN" />
//   <row city="Hahnweide,DE" code="QHD" />
//   <row city="Haifa,IL" code="HFA" />
//   <row city="Haikou,CN" code="HAK" />
//   <row city="Hail,SA" code="HAS" />
//   <row city="Hailar,CN" code="HLD" />
//   <row city="Haines,US" code="HNS" />
//   <row city="Haiphong,VN" code="HPH" />
//   <row city="Hakodate,JP" code="HKD" />
//   <row city="Halberstadt,DE" code="ZHQ" />
//   <row city="Halden,NO" code="XKD" />
//   <row city="Half Moon Bay,US" code="HAF" />
//   <row city="Halifax,CA" code="YHZ" />
//   <row city="Hall Beach,CA" code="YUX" />
//   <row city="Halle,DE" code="ZHZ" />
//   <row city="Halls Creek,AU" code="HCQ" />
//   <row city="Hallsberg,SE" code="XWM" />
//   <row city="Halmstad,SE" code="HAD" />
//   <row city="Hamadan,IR" code="HDM" />
//   <row city="Hamar,NO" code="HMR" />
//   <row city="Hambantota,LK" code="HRI" />
//   <row city="Hamburg,DE" code="HAM" />
//   <row city="Hameenlinna,FI" code="QVM" />
//   <row city="Hameln,DE" code="ZEZ" />
//   <row city="Hami,CN" code="HMI" />
//   <row city="Hamilton,AU" code="HLT" />
//   <row city="Hamilton,NZ" code="HLZ" />
//   <row city="Hamilton,US" code="HAO" />
//   <row city="Hamilton,US" code="HAB" />
//   <row city="Hamilton,CA" code="YHM" />
//   <row city="Hamilton Island,AU" code="HTI" />
//   <row city="Hamina,FI" code="QVZ" />
//   <row city="Hamm,DE" code="ZNB" />
//   <row city="Hammerfest,NO" code="HFT" />
//   <row city="Hampton,US" code="LFI" />
//   <row city="Hana,US" code="HNM" />
//   <row city="Hanau,DE" code="ZNF" />
//   <row city="Handan,CN" code="HDG" />
//   <row city="Hangzhou,CN" code="HGH" />
//   <row city="Hanksville,US" code="HVE" />
//   <row city="Hannover,DE" code="HAJ" />
//   <row city="Hanoi,VN" code="HAN" />
//   <row city="Hanzhong,CN" code="HZG" />
//   <row city="Hao Island,PF" code="HOI" />
//   <row city="Harare,ZW" code="HRE" />
//   <row city="Harbin,CN" code="HRB" />
//   <row city="Harbour Island,BS" code="HBI" />
//   <row city="Hargeisa,SO" code="HGA" />
//   <row city="Harlingen,US" code="HRL" />
//   <row city="Harnosand,SE" code="XYZ" />
//   <row city="Harrisburg,US" code="HAR" />
//   <row city="Harrismith,ZA" code="HRS" />
//   <row city="Harrison,US" code="HRO" />
//   <row city="Harrogate,GB" code="HRT" />
//   <row city="Harstad,NO" code="HRD" />
//   <row city="Harstad Narvik,NO" code="EVE" />
//   <row city="Hartford,US" code="HFD" />
//   <row city="Hartsville,US" code="HVS" />
//   <row city="Harwich,GB" code="QQH" />
//   <row city="Hasselt,BE" code="QHA" />
//   <row city="Hassi Messaoud,DZ" code="HME" />
//   <row city="Hassleholm,SE" code="XWP" />
//   <row city="Hastings,US" code="HSI" />
//   <row city="Hasvik,NO" code="HAA" />
//   <row city="Hat Yai,TH" code="HDY" />
//   <row city="Hatay,TR" code="HTY" />
//   <row city="Hateruma,JP" code="HTR" />
//   <row city="Hatfield,GB" code="HTF" />
//   <row city="Hatteras,US" code="HNC" />
//   <row city="Hattiesburg,US" code="HBG" />
//   <row city="Haugastol,NO" code="ZWJ" />
//   <row city="Haugesund,NO" code="HAU" />
//   <row city="Havana,CU" code="HAV" />
//   <row city="Haverfordwest,GB" code="HAW" />
//   <row city="Havre,US" code="HVR" />
//   <row city="Havre St Pierre,CA" code="YGV" />
//   <row city="Hawabango,PG" code="HWA" />
//   <row city="Hawk Inlet,US" code="HWI" />
//   <row city="Hawker,AU" code="HWK" />
//   <row city="Hawthorne,US" code="HHR" />
//   <row city="Hawthorne,US" code="HTH" />
//   <row city="Hay AU,AU" code="HXX" />
//   <row city="Hay River,CA" code="YHY" />
//   <row city="Haycock,US" code="HAY" />
//   <row city="Hayden,US" code="HDN" />
//   <row city="Hayfields,PG" code="HYF" />
//   <row city="Hayman Island,AU" code="HIS" />
//   <row city="Hays,US" code="HYS" />
//   <row city="Hayward,US" code="HWD" />
//   <row city="Hayward,US" code="HYR" />
//   <row city="Hazebrouck,FR" code="HZB" />
//   <row city="Hazelton,US" code="HZL" />
//   <row city="Hazyview,ZA" code="HZV" />
//   <row city="Headquarters,US" code="HDQ" />
//   <row city="Healy Lake,US" code="HKB" />
//   <row city="Hearst,CA" code="YHF" />
//   <row city="Hechi,CN" code="HCJ" />
//   <row city="Hedemora,SE" code="XXU" />
//   <row city="Heerbrugg,CH" code="ZHL" />
//   <row city="Heerenveen,NL" code="QYZ" />
//   <row city="Hefei,CN" code="HFE" />
//   <row city="Heho,MM" code="HEH" />
//   <row city="Heide Buesum,DE" code="HEI" />
//   <row city="Heidelberg,DE" code="HDB" />
//   <row city="Heidenheim,DE" code="ZNI" />
//   <row city="Heihe,CN" code="HEK" />
//   <row city="Heilbronn,DE" code="ZNJ" />
//   <row city="Heimdal,NO" code="XUE" />
//   <row city="Helena,US" code="HLN" />
//   <row city="Helena,US" code="HEE" />
//   <row city="Helgoland,DE" code="HGL" />
//   <row city="Helsingborg,SE" code="JHE" />
//   <row city="Helsinki,FI" code="HEL" />
//   <row city="Hemavan,SE" code="HMV" />
//   <row city="Hemet,US" code="HMT" />
//   <row city="Hendaye,FR" code="XHY" />
//   <row city="Hengchun,TW" code="HCN" />
//   <row city="Hengelo,NL" code="QYH" />
//   <row city="Hengyang,CN" code="HNY" />
//   <row city="Heraklion,GR" code="HER" />
//   <row city="Herat,AF" code="HEA" />
//   <row city="Herceg Novi,ME" code="HNO" />
//   <row city="Herendeen,US" code="HED" />
//   <row city="Herford,DE" code="ZNK" />
//   <row city="Heringsdorf,DE" code="HDF" />
//   <row city="Herlong,US" code="AHC" />
//   <row city="Hermiston,US" code="HES" />
//   <row city="Hermosillo,MX" code="HMO" />
//   <row city="Herne,DE" code="ZNL" />
//   <row city="Herning,DK" code="XAK" />
//   <row city="Herning cities,DK" code="ZRY" />
//   <row city="Herrljunga,SE" code="XYC" />
//   <row city="Hervey,CA" code="XDU" />
//   <row city="Hervey Bay,AU" code="HVB" />
//   <row city="Herzogenbuchsee,CH" code="ZHN" />
//   <row city="Heviz,HU" code="HVZ" />
//   <row city="Hibbing,US" code="HIB" />
//   <row city="Hickory,US" code="HKY" />
//   <row city="High Level,CA" code="YOJ" />
//   <row city="High Prairie,CA" code="ZHP" />
//   <row city="High Wycombe,GB" code="HYC" />
//   <row city="Higuero,DO" code="JBQ" />
//   <row city="Hilden,DE" code="ZNN" />
//   <row city="Hildesheim,DE" code="ZNO" />
//   <row city="Hillsboro,US" code="HIO" />
//   <row city="Hilo,US" code="ITO" />
//   <row city="Hilton Head,US" code="HHH" />
//   <row city="Hilversum,NL" code="QYI" />
//   <row city="Hinchinbrooke Is,AU" code="HNK" />
//   <row city="Hinesville,US" code="LIY" />
//   <row city="Hingurakgoda,LK" code="HIM" />
//   <row city="Hiroshima,JP" code="HIJ" />
//   <row city="Hirtshals,DK" code="XAJ" />
//   <row city="Hiva Oa,PF" code="HIX" />
//   <row city="Hjerkinn,NO" code="YVH" />
//   <row city="Hluhluwe,ZA" code="HLW" />
//   <row city="Ho Chi Minh cities,VN" code="SGN" />
//   <row city="Hobart,AU" code="HBA" />
//   <row city="Hobart Bay,US" code="HBH" />
//   <row city="Hobbs,US" code="HOB" />
//   <row city="Hodeidah,YE" code="HOD" />
//   <row city="Hoedspruit,ZA" code="HDS" />
//   <row city="Hof De,DE" code="HOQ" />
//   <row city="Hofuf,SA" code="HOF" />
//   <row city="Hogatza,US" code="HGZ" />
//   <row city="Hohenems,AT" code="HOH" />
//   <row city="Hohhot,CN" code="HET" />
//   <row city="Hokitika,NZ" code="HKK" />
//   <row city="Holbrook,US" code="HBK" />
//   <row city="Holguin,CU" code="HOG" />
//   <row city="Holland,US" code="HLM" />
//   <row city="Hollis,US" code="HYL" />
//   <row city="Hollister,US" code="HLI" />
//   <row city="Hollywood,US" code="HWO" />
//   <row city="Holman Island,CA" code="YHI" />
//   <row city="Holmavik,IS" code="HVK" />
//   <row city="Holstebro,DK" code="QWO" />
//   <row city="Holy Cross,US" code="HCR" />
//   <row city="Holyhead,GB" code="HLY" />
//   <row city="Homburg,DE" code="QOG" />
//   <row city="Homer,US" code="HOM" />
//   <row city="Homestead,US" code="HST" />
//   <row city="Homs,SY" code="QHS" />
//   <row city="Hong Kong,HK" code="HKG" />
//   <row city="Honiara,SB" code="HIR" />
//   <row city="Honningsvag,NO" code="HVG" />
//   <row city="Honolulu,US" code="HNL" />
//   <row city="Hoofddorp,NL" code="QHZ" />
//   <row city="Hoolehua,US" code="MKK" />
//   <row city="Hoonah,US" code="HNH" />
//   <row city="Hooper Bay,US" code="HPB" />
//   <row city="Hope,CA" code="YHE" />
//   <row city="Hopedale,CA" code="YHO" />
//   <row city="Hopkinsville,US" code="HOP" />
//   <row city="Hoquaim,US" code="HQM" />
//   <row city="Horizontina,BR" code="HRZ" />
//   <row city="Horn Island,AU" code="HID" />
//   <row city="Hornafjordur,IS" code="HFN" />
//   <row city="Hornepayne,CA" code="YHN" />
//   <row city="Horsens,DK" code="ZIL" />
//   <row city="Horsham,AU" code="HSM" />
//   <row city="Horta,PT" code="HOR" />
//   <row city="Hoskins,PG" code="HKN" />
//   <row city="Hot Springs,US" code="HOT" />
//   <row city="Hot Springs,US" code="HSP" />
//   <row city="Hotan,CN" code="HTN" />
//   <row city="Houeisay,LA" code="HOE" />
//   <row city="Houghton,US" code="CMX" />
//   <row city="Houma,US" code="HUM" />
//   <row city="Houn,LY" code="HUQ" />
//   <row city="Houston,CA" code="ZHO" />
//   <row city="Houston,US" code="HOU" />
//   <row city="Hsinchun,TW" code="HSZ" />
//   <row city="Hu,VN" code="HUI" />
//   <row city="Hua Hin,TH" code="HHQ" />
//   <row city="Huahine,PF" code="HUH" />
//   <row city="Huai An,CN" code="HIA" />
//   <row city="Hualien,TW" code="HUN" />
//   <row city="Huambo,AO" code="NOV" />
//   <row city="Huanghua,CN" code="HHA" />
//   <row city="Huangshi,CN" code="HSD" />
//   <row city="Huangyan,CN" code="HYN" />
//   <row city="Huanuco,PE" code="HUU" />
//   <row city="Hubli,IN" code="HBX" />
//   <row city="Hudiksvall,SE" code="HUV" />
//   <row city="Hudson Bay,CA" code="YHB" />
//   <row city="Huelva,ES" code="HEV" />
//   <row city="Huerth,DE" code="ZNP" />
//   <row city="Huesca,ES" code="HSK" />
//   <row city="Hughenden,AU" code="HGD" />
//   <row city="Hughes,US" code="HUS" />
//   <row city="Huizhou,CN" code="HUZ" />
//   <row city="Hultsfred,SE" code="HLF" />
//   <row city="Humacao,US" code="HUC" />
//   <row city="Humberside,GB" code="HUY" />
//   <row city="Humera,ET" code="HUE" />
//   <row city="Huntingburg,US" code="HNB" />
//   <row city="Huntingdon,GB" code="XHU" />
//   <row city="Huntington,US" code="HTS" />
//   <row city="Huntsville,US" code="HSV" />
//   <row city="Huntsville,US" code="HTV" />
//   <row city="Hurghada,EG" code="HRG" />
//   <row city="Huron,US" code="HON" />
//   <row city="Husavik,IS" code="HZK" />
//   <row city="Huslia,US" code="HSL" />
//   <row city="Husum,DE" code="QHU" />
//   <row city="Hutchinson,US" code="HUT" />
//   <row city="Huzhou,CN" code="HZC" />
//   <row city="Hwange,ZW" code="HWN" />
//   <row city="Hyannis,US" code="HYA" />
//   <row city="Hydaburg,US" code="HYG" />
//   <row city="Hyder,US" code="WHD" />
//   <row city="Hyderabad,PK" code="HDD" />
//   <row city="Hyderabad,IN" code="HYD" />
//   <row city="Hyeres,FR" code="XHE" />
//   <row city="IGRIM,RU" code="IRM" />
//   <row city="Iamalele,PG" code="IMA" />
//   <row city="Iasi,RO" code="IAS" />
//   <row city="Ibadan,NG" code="IBA" />
//   <row city="Ibague,CO" code="IBE" />
//   <row city="Ibaraki,JP" code="IBR" />
//   <row city="Ibiza,ES" code="IBZ" />
//   <row city="Iboki,PG" code="IBI" />
//   <row city="Icy Bay,US" code="ICY" />
//   <row city="Ida Grove,US" code="IDG" />
//   <row city="Idaho Falls,US" code="IDA" />
//   <row city="Iejima,JP" code="IEJ" />
//   <row city="Igaliku,GL" code="QFX" />
//   <row city="Igarka,RU" code="IAA" />
//   <row city="Igdir,TR" code="IGD" />
//   <row city="Iginniarfik,GL" code="QFI" />
//   <row city="Igiugig,US" code="IGG" />
//   <row city="Igloolik,CA" code="YGT" />
//   <row city="Iguassu Falls,BR" code="IGU" />
//   <row city="Iguatu,BR" code="QIG" />
//   <row city="Iguazu,AR" code="IGR" />
//   <row city="Ihosy,MG" code="IHO" />
//   <row city="Ihu Pg,PG" code="IHU" />
//   <row city="Ikamiut,GL" code="QJI" />
//   <row city="Ikaria Island,GR" code="JIK" />
//   <row city="Ikerasaarsuk,GL" code="QRY" />
//   <row city="Iki Jp,JP" code="IKI" />
//   <row city="Ile D Yeu,FR" code="IDY" />
//   <row city="Ile Des Pins,NC" code="ILP" />
//   <row city="Iles De Madeleine,CA" code="YGR" />
//   <row city="Ilford,CA" code="ILF" />
//   <row city="Ilheus,BR" code="IOS" />
//   <row city="Iliamna,US" code="ILI" />
//   <row city="Illaga,ID" code="ILA" />
//   <row city="Illisheim,DE" code="ILH" />
//   <row city="Illizi,DZ" code="VVZ" />
//   <row city="Iloilo,PH" code="ILO" />
//   <row city="Ilorin,NG" code="ILR" />
//   <row city="Ilulissat,GL" code="JAV" />
//   <row city="Imonda,PG" code="IMD" />
//   <row city="Imperatriz,BR" code="IMP" />
//   <row city="Imperial Beach,US" code="NRS" />
//   <row city="Impfondo,CG" code="ION" />
//   <row city="Imphal,IN" code="IMF" />
//   <row city="In Amenas,DZ" code="IAM" />
//   <row city="In Salah,DZ" code="INZ" />
//   <row city="Inagua,BS" code="IGA" />
//   <row city="Incheon,KR" code="JCN" />
//   <row city="Indagen,PG" code="IDN" />
//   <row city="Independence,US" code="IDP" />
//   <row city="Independence,BZ" code="INB" />
//   <row city="Indiana,US" code="IDI" />
//   <row city="Indianapolis,US" code="IND" />
//   <row city="Indore,IN" code="IDR" />
//   <row city="Ingersoll,CA" code="XIB" />
//   <row city="Ingham,AU" code="IGH" />
//   <row city="Ingolstadt,DE" code="ZNQ" />
//   <row city="Ingolstadt Manching,DE" code="IGS" />
//   <row city="Inhambane,MZ" code="INH" />
//   <row city="Inisheer,IE" code="INQ" />
//   <row city="Inishmaan,IE" code="IIA" />
//   <row city="Inishmore,IE" code="IOR" />
//   <row city="Injune,AU" code="INJ" />
//   <row city="Inkerman,AU" code="IKP" />
//   <row city="Innamincka,AU" code="INM" />
//   <row city="Innarsuit,GL" code="IUI" />
//   <row city="Innsbruck,AT" code="INN" />
//   <row city="Inongo,CD" code="INO" />
//   <row city="Interlaken,CH" code="ZIN" />
//   <row city="International Falls,US" code="INL" />
//   <row city="Inukjuak,CA" code="YPH" />
//   <row city="Inuvik,CA" code="YEV" />
//   <row city="Invercargill,NZ" code="IVC" />
//   <row city="Inverell,AU" code="IVR" />
//   <row city="Inverness,GB" code="INV" />
//   <row city="Inyokern,US" code="IYK" />
//   <row city="Ioannina,GR" code="IOA" />
//   <row city="Iokea,PG" code="IOK" />
//   <row city="Ioma,PG" code="IOP" />
//   <row city="Iowa cities,US" code="IOW" />
//   <row city="Ipatinga,BR" code="IPN" />
//   <row city="Ipiales,CO" code="IPI" />
//   <row city="Ipiau,BR" code="IPU" />
//   <row city="Ipoh,MY" code="IPH" />
//   <row city="Ipota,VU" code="IPA" />
//   <row city="Ipswich,GB" code="IPW" />
//   <row city="Iqaluit,CA" code="YFB" />
//   <row city="Iquique,CL" code="IQQ" />
//   <row city="Iquitos,PE" code="IQT" />
//   <row city="Irece,BR" code="IRE" />
//   <row city="Iringa,TZ" code="IRI" />
//   <row city="Irkutsk,RU" code="IKT" />
//   <row city="Iron Mountain,US" code="IMT" />
//   <row city="Ironwood,US" code="IWD" />
//   <row city="Isabel Pass,US" code="ISL" />
//   <row city="Isafjordur,IS" code="IFJ" />
//   <row city="Ischia,IT" code="ISH" />
//   <row city="Iserlohn,DE" code="ZNR" />
//   <row city="Isfahan,IR" code="IFN" />
//   <row city="Ishigaki,JP" code="ISG" />
//   <row city="Isiro,CD" code="IRP" />
//   <row city="Isla Grande,US" code="SIG" />
//   <row city="Isla Mujeres,MX" code="ISJ" />
//   <row city="Islamabad,PK" code="ISB" />
//   <row city="Islay,GB" code="ILY" />
//   <row city="Isle Of Man,GB" code="IOM" />
//   <row city="Isle Of Skye Hebrides Islands,GB" code="SKL" />
//   <row city="Isles Of Scilly,GB" code="ISC" />
//   <row city="Islip,US" code="ISP" />
//   <row city="Ismailiya,EG" code="QIV" />
//   <row city="Isparta,TR" code="ISE" />
//   <row city="Istanbul,TR" code="IST" />
//   <row city="Istres,FR" code="QIE" />
//   <row city="Itabuna,BR" code="ITN" />
//   <row city="Itaituba,BR" code="ITB" />
//   <row city="Itajai,BR" code="ITJ" />
//   <row city="Itaperuna,BR" code="ITP" />
//   <row city="Itapetininga,BR" code="ZTP" />
//   <row city="Itauna,BR" code="QIA" />
//   <row city="Ithaca,US" code="ITH" />
//   <row city="Itilleq,GL" code="QJG" />
//   <row city="Itokama,PG" code="ITK" />
//   <row city="Ittoqqortoormiit,GL" code="OBY" />
//   <row city="Itu BR,BR" code="QTU" />
//   <row city="Itumbiara,BR" code="ITR" />
//   <row city="Iturup Island,RU" code="BVV" />
//   <row city="Ivalo,FI" code="IVL" />
//   <row city="Ivano Frankovsk,UA" code="IFO" />
//   <row city="Ivanof Bay,US" code="KIB" />
//   <row city="Ivanovo,RU" code="IWA" />
//   <row city="Ivujivik,CA" code="YIK" />
//   <row city="Iwakuni,JP" code="IWK" />
//   <row city="Iwami,JP" code="IWJ" />
//   <row city="Ixtepec,MX" code="IZT" />
//   <row city="Izhevsk,RU" code="IJK" />
//   <row city="Izmir,TR" code="IZM" />
//   <row city="Izmit,TR" code="QST" />
//   <row city="Izumo,JP" code="IZO" />
//   <row city="JINING,CN" code="JNG" />
//   <row city="Jabalpur,IN" code="JLR" />
//   <row city="Jabiru,AU" code="JAB" />
//   <row city="Jackpot,US" code="KPT" />
//   <row city="Jackson,US" code="MKL" />
//   <row city="Jackson,US" code="JAC" />
//   <row city="Jackson,US" code="JAN" />
//   <row city="Jackson,US" code="JXN" />
//   <row city="Jacksonville,US" code="LRF" />
//   <row city="Jacksonville,US" code="OAJ" />
//   <row city="Jacksonville,US" code="IJX" />
//   <row city="Jacksonville,US" code="JAX" />
//   <row city="Jacksonville,US" code="JKV" />
//   <row city="Jacobabad,PK" code="JAG" />
//   <row city="Jacquinot,PG" code="JAQ" />
//   <row city="Jaen,ES" code="JEA" />
//   <row city="Jaffna,LK" code="JAF" />
//   <row city="Jagdalpur,IN" code="JGB" />
//   <row city="Jaguaruna,BR" code="JJG" />
//   <row city="Jaipur,IN" code="JAI" />
//   <row city="Jaisalmer,IN" code="JSA" />
//   <row city="Jakarta,ID" code="JKT" />
//   <row city="Jalandhar,IN" code="QJU" />
//   <row city="Jalapa,MX" code="JAL" />
//   <row city="Jambi,ID" code="DJB" />
//   <row city="Jamestown,US" code="JHW" />
//   <row city="Jamestown,US" code="JMS" />
//   <row city="Jammu,IN" code="IXJ" />
//   <row city="Jamnagar,IN" code="JGA" />
//   <row city="Jamshedpur,IN" code="IXW" />
//   <row city="Janakpur,NP" code="JKR" />
//   <row city="Jandakot,AU" code="JAD" />
//   <row city="Jaragua Do Sul,BR" code="QJA" />
//   <row city="Jasper,CA" code="YJA" />
//   <row city="Jatai,BR" code="JTI" />
//   <row city="Jauja,PE" code="JAU" />
//   <row city="Jayapura,ID" code="DJJ" />
//   <row city="Jeddah,SA" code="JED" />
//   <row city="Jefferson cities,US" code="JEF" />
//   <row city="Jeju cities,KR" code="CJU" />
//   <row city="Jember,ID" code="JBB" />
//   <row city="Jena,DE" code="ZJS" />
//   <row city="Jerez De La Frontera,ES" code="XRY" />
//   <row city="Jersey,GB" code="JER" />
//   <row city="Jerusalem,IL" code="JRS" />
//   <row city="Jesolo,IT" code="JLO" />
//   <row city="Jessore,BD" code="JSR" />
//   <row city="Ji Parana,BR" code="JPR" />
//   <row city="Jia Ge Da Qi,CN" code="JGD" />
//   <row city="Jiamusi,CN" code="JMU" />
//   <row city="Jian,CN" code="JGS" />
//   <row city="Jiang Men,CN" code="ZBD" />
//   <row city="Jiaxing,CN" code="JXS" />
//   <row city="Jiayuguan,CN" code="JGN" />
//   <row city="Jijel,DZ" code="GJL" />
//   <row city="Jijiga,ET" code="JIJ" />
//   <row city="Jilin,CN" code="JIL" />
//   <row city="Jimma,ET" code="JIM" />
//   <row city="Jinan,CN" code="TNA" />
//   <row city="Jinchang,CN" code="JIC" />
//   <row city="Jingdezhen,CN" code="JDZ" />
//   <row city="Jinghong,CN" code="JHG" />
//   <row city="Jingzhou,CN" code="EJJ" />
//   <row city="Jinjiang,CN" code="JJN" />
//   <row city="Jinzhou,CN" code="JNZ" />
//   <row city="Jiujiang,CN" code="JIU" />
//   <row city="Jiwani,PK" code="JIW" />
//   <row city="Jixi,CN" code="JXA" />
//   <row city="Joacaba,BR" code="JCB" />
//   <row city="Joao Pessoa,BR" code="JPA" />
//   <row city="Jodhpur,IN" code="JDH" />
//   <row city="Joensuu,FI" code="JOE" />
//   <row city="Johannesburg,ZA" code="JNB" />
//   <row city="Johnston Island,UM" code="JON" />
//   <row city="Johnstown,US" code="JST" />
//   <row city="Johor Bahru,MY" code="JHB" />
//   <row city="Joinville,BR" code="JOI" />
//   <row city="Joliet,US" code="JOT" />
//   <row city="Joliette,CA" code="XJL" />
//   <row city="Jolo,PH" code="JOL" />
//   <row city="Jolon,US" code="HGT" />
//   <row city="Jonesboro,US" code="JBR" />
//   <row city="Jonkoping,SE" code="JKG" />
//   <row city="Jonquiere,CA" code="XJQ" />
//   <row city="Joplin,US" code="JLN" />
//   <row city="Jorhat,IN" code="JRH" />
//   <row city="Jos NG,NG" code="JOS" />
//   <row city="Jose De San Martin,AR" code="JSM" />
//   <row city="Jounieh,LB" code="QJN" />
//   <row city="Juan Les Pins,FR" code="JLP" />
//   <row city="Juanjui,PE" code="JJI" />
//   <row city="Juara,BR" code="JUA" />
//   <row city="Juazeiro Do Norte,BR" code="JDO" />
//   <row city="Juba,SS" code="JUB" />
//   <row city="Jubail,SA" code="QJB" />
//   <row city="Juchitan,MX" code="JUW" />
//   <row city="Juist,DE" code="JUI" />
//   <row city="Juiz De Fora,BR" code="JDF" />
//   <row city="Jujuy,AR" code="JUJ" />
//   <row city="Julia Creek,AU" code="JCK" />
//   <row city="Juliaca,PE" code="JUL" />
//   <row city="Jundiai,BR" code="QDV" />
//   <row city="Juneau,US" code="JNU" />
//   <row city="Jurado,CO" code="JUO" />
//   <row city="Juzhou,CN" code="JUZ" />
//   <row city="Jwaneng,BW" code="JWA" />
//   <row city="Jyvaskyla,FI" code="JYV" />
//   <row city="KITZBUEHEL,AT" code="XOH" />
//   <row city="KOMATIPOORT,ZA" code="KOF" />
//   <row city="KONGSBERG,NO" code="XKB" />
//   <row city="Kabala,SL" code="KBA" />
//   <row city="Kabri Dar,ET" code="ABK" />
//   <row city="Kabul,AF" code="KBL" />
//   <row city="Kabwum,PG" code="KBM" />
//   <row city="Kadhdhoo Island,MV" code="KDO" />
//   <row city="Kaduna,NG" code="KAD" />
//   <row city="Kaedi,MR" code="KED" />
//   <row city="Kagi,PG" code="KGW" />
//   <row city="Kagoshima,JP" code="KOJ" />
//   <row city="Kahramanmaras,TR" code="KCM" />
//   <row city="Kahului,US" code="OGG" />
//   <row city="Kaikoura,NZ" code="KBZ" />
//   <row city="Kailashahar,IN" code="IXH" />
//   <row city="Kaili,CN" code="KJH" />
//   <row city="Kaintiba,PG" code="KZF" />
//   <row city="Kairouan,TN" code="QKN" />
//   <row city="Kaiserslautern,DE" code="KLT" />
//   <row city="Kaitaia,NZ" code="KAT" />
//   <row city="Kajaani,FI" code="KAJ" />
//   <row city="Kakamega,KE" code="GGM" />
//   <row city="Kake,US" code="KAE" />
//   <row city="Kakhonak,US" code="KNK" />
//   <row city="Kalakaket,US" code="KKK" />
//   <row city="Kalamata,GR" code="KLX" />
//   <row city="Kalamazoo,US" code="AZO" />
//   <row city="Kalaupapa,US" code="LUP" />
//   <row city="Kalbarri,AU" code="KAX" />
//   <row city="Kalemie,CD" code="FMI" />
//   <row city="Kalemyo,MM" code="KMV" />
//   <row city="Kalgoorlie,AU" code="KGI" />
//   <row city="Kalibo,PH" code="KLO" />
//   <row city="Kaliningrad,RU" code="KGD" />
//   <row city="Kalispell,US" code="FCA" />
//   <row city="Kalmar,SE" code="KLR" />
//   <row city="Kalskag,US" code="KLG" />
//   <row city="Kaltag,US" code="KAL" />
//   <row city="Kaluga,RU" code="KLF" />
//   <row city="Kalymnos Island,GR" code="JKL" />
//   <row city="Kamalpur,IN" code="IXQ" />
//   <row city="Kameshli,SY" code="KAC" />
//   <row city="Kamina,PG" code="KMF" />
//   <row city="Kamloops,CA" code="YKA" />
//   <row city="Kampong Thom,KH" code="KZK" />
//   <row city="Kampot,KH" code="KMT" />
//   <row city="Kamuela,US" code="MUE" />
//   <row city="Kamur,ID" code="KCD" />
//   <row city="Kanab,US" code="KNB" />
//   <row city="Kanabea,PG" code="KEX" />
//   <row city="Kananga,CD" code="KGA" />
//   <row city="Kanazawa,JP" code="QKW" />
//   <row city="Kandahar,AF" code="KDH" />
//   <row city="Kandavu,FJ" code="KDV" />
//   <row city="Kandersteg,CH" code="ZHR" />
//   <row city="Kandla,IN" code="IXY" />
//   <row city="Kandrian,PG" code="KDR" />
//   <row city="Kandy,LK" code="KDW" />
//   <row city="Kandy Polgolla Reservoir,LK" code="KDZ" />
//   <row city="Kangaamiut,GL" code="QKT" />
//   <row city="Kangaatsiaq,GL" code="QPW" />
//   <row city="Kangding,CN" code="KGT" />
//   <row city="Kangerluk,GL" code="QGR" />
//   <row city="Kangerlussuaq,GL" code="SFJ" />
//   <row city="Kangersuatsiaq,GL" code="KGQ" />
//   <row city="Kangiqsualujjuaq,CA" code="XGR" />
//   <row city="Kangiqsujuaq,CA" code="YWB" />
//   <row city="Kangirsuk,CA" code="YKG" />
//   <row city="Kankakee,US" code="IKK" />
//   <row city="Kano,NG" code="KAN" />
//   <row city="Kanpur,IN" code="KNU" />
//   <row city="Kansas cities,US" code="MKC" />
//   <row city="Kaohsiung,TW" code="KHH" />
//   <row city="Kaolack,SN" code="KLC" />
//   <row city="Kapalua,US" code="JHM" />
//   <row city="Kapit,MY" code="KPI" />
//   <row city="Kapolei,US" code="JRF" />
//   <row city="Kapuskasing,CA" code="YYU" />
//   <row city="Karachi,PK" code="KHI" />
//   <row city="Karaganda,KZ" code="KGF" />
//   <row city="Karamay,CN" code="KRY" />
//   <row city="Karawari,PG" code="KRJ" />
//   <row city="Kariba Dam,ZW" code="KAB" />
//   <row city="Karimui,PG" code="KMR" />
//   <row city="Karimunjawa,ID" code="KWB" />
//   <row city="Karkar,PG" code="KRX" />
//   <row city="Karlovy Vary,CZ" code="KLV" />
//   <row city="Karlshamn,SE" code="XYO" />
//   <row city="Karlskoga,SE" code="KSK" />
//   <row city="Karlsruhe Baden Baden,DE" code="FKB" />
//   <row city="Karlstad,SE" code="KSD" />
//   <row city="Karluk,US" code="KYK" />
//   <row city="Karluk Lake,US" code="KKL" />
//   <row city="Karonga,MW" code="KGJ" />
//   <row city="Karoola,PG" code="KXR" />
//   <row city="Karpathos,GR" code="AOK" />
//   <row city="Karratha,AU" code="KTA" />
//   <row city="Kars,TR" code="KSY" />
//   <row city="Karshi,UZ" code="KSQ" />
//   <row city="Karumba,AU" code="KRB" />
//   <row city="Karup,DK" code="KRP" />
//   <row city="Kasaan,US" code="KXA" />
//   <row city="Kasaba Bay,ZM" code="ZKB" />
//   <row city="Kasabonika Lake,CA" code="XKS" />
//   <row city="Kasane,BW" code="BBK" />
//   <row city="Kasese,UG" code="KSE" />
//   <row city="Kashechewan,CA" code="ZKE" />
//   <row city="Kashi,CN" code="KHG" />
//   <row city="Kasigluk,US" code="KUK" />
//   <row city="Kasos Island,GR" code="KSJ" />
//   <row city="Kassala,SD" code="KSL" />
//   <row city="Kassel,DE" code="KSF" />
//   <row city="Kastamonu,TR" code="KFS" />
//   <row city="Kastelorizo,GR" code="KZS" />
//   <row city="Kastoria,GR" code="KSO" />
//   <row city="Katherine,AU" code="KTR" />
//   <row city="Kathmandu,NP" code="KTM" />
//   <row city="Katowice,PL" code="KTW" />
//   <row city="Katrineholm,SE" code="XXK" />
//   <row city="Katsina,NG" code="DKA" />
//   <row city="Kaubang,ID" code="KAZ" />
//   <row city="Kauehi,PF" code="KHZ" />
//   <row city="Kaukura,PF" code="KKR" />
//   <row city="Kaunas,LT" code="KUN" />
//   <row city="Kavalla,GR" code="KVA" />
//   <row city="Kavieng,PG" code="KVG" />
//   <row city="Kawthaung,MM" code="KAW" />
//   <row city="Kayseri,TR" code="ASR" />
//   <row city="Kazama,ZM" code="KAA" />
//   <row city="Kazan,RU" code="KZN" />
//   <row city="Kearney,US" code="EAR" />
//   <row city="Kebar,ID" code="KEQ" />
//   <row city="Kedougou,SN" code="KGG" />
//   <row city="Keene,US" code="EEN" />
//   <row city="Keetmanshoop,ZA" code="KMP" />
//   <row city="Kefalonia,GR" code="EFL" />
//   <row city="Kegaska,CA" code="ZKG" />
//   <row city="Kehl,DE" code="ZIW" />
//   <row city="Kelafo,ET" code="LFO" />
//   <row city="Kelle,CG" code="KEE" />
//   <row city="Kelowna,CA" code="YLW" />
//   <row city="Kelp Bay,US" code="KLP" />
//   <row city="Kelso,US" code="KLS" />
//   <row city="Kelsterbach,DE" code="QLH" />
//   <row city="Kemerovo,RU" code="KEJ" />
//   <row city="Kemi,FI" code="KEM" />
//   <row city="Kempsey,AU" code="KPS" />
//   <row city="Kempten,DE" code="ZNS" />
//   <row city="Kenai,US" code="ENA" />
//   <row city="Kendari,ID" code="KDI" />
//   <row city="Kenema,SL" code="KEN" />
//   <row city="Kengtung,MM" code="KET" />
//   <row city="Kenieba,ML" code="KNZ" />
//   <row city="Kennett,US" code="KNT" />
//   <row city="Kennosao Lake,CA" code="YKI" />
//   <row city="Kenora,CA" code="YQK" />
//   <row city="Kenosha,US" code="ENW" />
//   <row city="Kentland,US" code="KKT" />
//   <row city="Keokuk,US" code="EOK" />
//   <row city="Keperveyem,RU" code="KPW" />
//   <row city="Kepi,ID" code="KEI" />
//   <row city="Kerang,AU" code="KRA" />
//   <row city="Kerau,PG" code="KRU" />
//   <row city="Kerch,UA" code="KHC" />
//   <row city="Kerema,PG" code="KMA" />
//   <row city="Kericho,KE" code="KEY" />
//   <row city="Kerikeri,NZ" code="KKE" />
//   <row city="Kerinci,ID" code="KRC" />
//   <row city="Kerkyra,GR" code="CFU" />
//   <row city="Kerman,IR" code="KER" />
//   <row city="Kermanshah,IR" code="KSH" />
//   <row city="Kerpen,DE" code="ZNT" />
//   <row city="Kerrville,US" code="ERV" />
//   <row city="Kerry County,IE" code="KIR" />
//   <row city="Kerteh,MY" code="KTE" />
//   <row city="Keshod,IN" code="IXK" />
//   <row city="Ketapang,ID" code="KTG" />
//   <row city="Ketchikan,US" code="KTN" />
//   <row city="Key Largo,US" code="KYL" />
//   <row city="Key West,US" code="EYW" />
//   <row city="Keystone,US" code="QKS" />
//   <row city="Khabarovsk,RU" code="KHV" />
//   <row city="Khajuraho,IN" code="HJR" />
//   <row city="Khamis Mushait,SA" code="KMX" />
//   <row city="Khandyga,RU" code="KDY" />
//   <row city="Khanty Mansiysk,RU" code="HMA" />
//   <row city="Kharga,EG" code="UVL" />
//   <row city="Kharkov,UA" code="HRK" />
//   <row city="Khartoum,SD" code="KRT" />
//   <row city="Khasab,OM" code="KHS" />
//   <row city="Kherson,UA" code="KHE" />
//   <row city="Khon Kaen,TH" code="KKC" />
//   <row city="Khonuu,RU" code="MQJ" />
//   <row city="Khorramabad,IR" code="KHD" />
//   <row city="Khoy,IR" code="KHY" />
//   <row city="Khujand,TJ" code="LBD" />
//   <row city="Kiana,US" code="IAN" />
//   <row city="Kiel,DE" code="KEL" />
//   <row city="Kielce,PL" code="QKI" />
//   <row city="Kieta,PG" code="KIE" />
//   <row city="Kiev,UA" code="IEV" />
//   <row city="Kiffa,MR" code="KFA" />
//   <row city="Kigali,RW" code="KGL" />
//   <row city="Kigoma,TZ" code="TKQ" />
//   <row city="Kikaiga Shima,JP" code="KKX" />
//   <row city="Kikori,PG" code="KRI" />
//   <row city="Kil Sweden,SE" code="XXN" />
//   <row city="Kilimanjaro,TZ" code="JRO" />
//   <row city="Kilkenny,IE" code="KKY" />
//   <row city="Killeen,US" code="ILE" />
//   <row city="Killineq,CA" code="XBW" />
//   <row city="Kilwa,CD" code="KIL" />
//   <row city="Kilwa,TZ" code="KIY" />
//   <row city="Kimam,ID" code="KMM" />
//   <row city="Kimberley,CA" code="YQE" />
//   <row city="Kimberley,ZA" code="KIM" />
//   <row city="Kimmirut Lake Harbour,CA" code="YLC" />
//   <row city="Kincardine,CA" code="YKD" />
//   <row city="Kindersley,CA" code="YKY" />
//   <row city="Kindu,CD" code="KND" />
//   <row city="King cities,US" code="KIC" />
//   <row city="King Cove,US" code="KVC" />
//   <row city="King Island,AU" code="KNS" />
//   <row city="King Khalid Military cities,SA" code="KMC" />
//   <row city="King Of Prussia,US" code="KPD" />
//   <row city="King Salmon,US" code="AKN" />
//   <row city="Kingaroy,AU" code="KGY" />
//   <row city="Kingfisher Lake Indian Reserve,CA" code="KIF" />
//   <row city="Kingman,US" code="IGM" />
//   <row city="Kings Canyon,AU" code="KBJ" />
//   <row city="Kings Lynn,GB" code="KNF" />
//   <row city="Kingscote,AU" code="KGC" />
//   <row city="Kingston,CA" code="YGK" />
//   <row city="Kingston,JM" code="KIN" />
//   <row city="Kingsville,US" code="NQI" />
//   <row city="Kinmen,TW" code="KNH" />
//   <row city="Kinshasa,CD" code="FIH" />
//   <row city="Kinston,US" code="ISO" />
//   <row city="Kipnuk,US" code="KPN" />
//   <row city="Kira,PG" code="KIQ" />
//   <row city="Kirakira,SB" code="IRA" />
//   <row city="Kirensk,RU" code="KCK" />
//   <row city="Kirkenes,NO" code="KKN" />
//   <row city="Kirkland,CA" code="YKX" />
//   <row city="Kirksville,US" code="IRK" />
//   <row city="Kirkwall,GB" code="KOI" />
//   <row city="Kirov Pobedilovo,RU" code="KVX" />
//   <row city="Kirovsk,RU" code="KVK" />
//   <row city="Kiruna,SE" code="KRN" />
//   <row city="Kirundo,BI" code="KRE" />
//   <row city="Kiryat Shmona,IL" code="KSW" />
//   <row city="Kisangani,CD" code="FKI" />
//   <row city="Kisengan,PG" code="KSG" />
//   <row city="Kish Island,IR" code="KIH" />
//   <row city="Kismayu,SO" code="KMU" />
//   <row city="Kissimmee,US" code="ISM" />
//   <row city="Kisumu,KE" code="KIS" />
//   <row city="Kita Kyushu,JP" code="KKJ" />
//   <row city="Kitadaito,JP" code="KTD" />
//   <row city="Kitale,KE" code="KTL" />
//   <row city="Kitchener,CA" code="YKF" />
//   <row city="Kithira,GR" code="KIT" />
//   <row city="Kitoi Bay,US" code="KKB" />
//   <row city="Kitsissuarsuit,GL" code="QJE" />
//   <row city="Kittila,FI" code="KTT" />
//   <row city="Kitwe,ZM" code="KIW" />
//   <row city="Kiunga,PG" code="UNG" />
//   <row city="Kivalina,US" code="KVL" />
//   <row city="Klagenfurt,AT" code="KLU" />
//   <row city="Klamath Falls,US" code="LMT" />
//   <row city="Klawock,US" code="KLW" />
//   <row city="Kleinzee,ZA" code="KLZ" />
//   <row city="Klerksdorp,ZA" code="KXE" />
//   <row city="Klosters,CH" code="ZHS" />
//   <row city="Knock,IE" code="NOC" />
//   <row city="Knoxville,US" code="TYS" />
//   <row city="Kobe,JP" code="UKB" />
//   <row city="Koblenz,DE" code="ZNV" />
//   <row city="Kobuk,US" code="OBU" />
//   <row city="Kocaeli,TR" code="KCO" />
//   <row city="Kochi,IN" code="COK" />
//   <row city="Kochi,JP" code="KCZ" />
//   <row city="Kodiak,US" code="ADQ" />
//   <row city="Kogalym,RU" code="KGP" />
//   <row city="Koggala,LK" code="KCT" />
//   <row city="Koh Samui,TH" code="USM" />
//   <row city="Kohat,PK" code="OHT" />
//   <row city="Kokkola,FI" code="KOK" />
//   <row city="Kokoda,PG" code="KKD" />
//   <row city="Kokomo,US" code="OKK" />
//   <row city="Kokoro,PG" code="KOR" />
//   <row city="Kokshetau,KZ" code="KOV" />
//   <row city="Kolding,DK" code="ZBT" />
//   <row city="Kolhapur,IN" code="KLH" />
//   <row city="Koliganek,US" code="KGK" />
//   <row city="Kolkata,IN" code="CCU" />
//   <row city="Kolobrzeg,PL" code="QJY" />
//   <row city="Komatsu,JP" code="KMQ" />
//   <row city="Komotini,GR" code="ZKT" />
//   <row city="Komsomolsk Na Amure,RU" code="KXK" />
//   <row city="Kona,US" code="KOA" />
//   <row city="Kone,NC" code="KNQ" />
//   <row city="Konge,PG" code="KGB" />
//   <row city="Kongiganak,US" code="KKH" />
//   <row city="Kongolo,CD" code="KOO" />
//   <row city="Kongsvinger,NO" code="XZD" />
//   <row city="Konstanz,DE" code="QKZ" />
//   <row city="Konya,TR" code="KYA" />
//   <row city="Kooddoo Island,MV" code="GKK" />
//   <row city="Koolatah,AU" code="KOH" />
//   <row city="Kopasker,IS" code="OPA" />
//   <row city="Kopiago,PG" code="KPA" />
//   <row city="Koping,SE" code="XXI" />
//   <row city="Koppang,NO" code="YVK" />
//   <row city="Korhogo,CI" code="HGO" />
//   <row city="Korla,CN" code="KRL" />
//   <row city="Koro Island,FJ" code="KXF" />
//   <row city="Koror,PW" code="ROR" />
//   <row city="Kortrijk,BE" code="KJK" />
//   <row city="Kos Gr,GR" code="KGS" />
//   <row city="Kosice,SK" code="KSC" />
//   <row city="Kosrae,FM" code="KSA" />
//   <row city="Kostanay,KZ" code="KSN" />
//   <row city="Kostroma,RU" code="KMW" />
//   <row city="Koszalin,PL" code="OSZ" />
//   <row city="Kota,IN" code="KTU" />
//   <row city="Kota Bharu,MY" code="KBR" />
//   <row city="Kota Kinabalu,MY" code="BKI" />
//   <row city="Kota Mobagu,ID" code="BJG" />
//   <row city="Kotabaru,ID" code="KBU" />
//   <row city="Kotka,FI" code="QVW" />
//   <row city="Kotlas,RU" code="KSZ" />
//   <row city="Kotlik,US" code="KOT" />
//   <row city="Kotor,ME" code="ZKQ" />
//   <row city="Kotzebue,US" code="OTZ" />
//   <row city="Koulamoutou,GA" code="KOU" />
//   <row city="Koumac,NC" code="KOC" />
//   <row city="Kourou,GF" code="QKR" />
//   <row city="Koutaba,CM" code="KOB" />
//   <row city="Kouvola,FI" code="UTI" />
//   <row city="Kowanyama,AU" code="KWM" />
//   <row city="Koyuk,US" code="KKA" />
//   <row city="Koyukuk,US" code="KYU" />
//   <row city="Kozani,GR" code="KZI" />
//   <row city="Kozhikode,IN" code="CCJ" />
//   <row city="Krabi,TH" code="KBV" />
//   <row city="Krakow,PL" code="KRK" />
//   <row city="Kramfors,SE" code="KRF" />
//   <row city="Krasnodar,RU" code="KRR" />
//   <row city="Krasnoselkup,RU" code="KKQ" />
//   <row city="Krasnoyarsk,RU" code="KJA" />
//   <row city="Krefeld,DE" code="QKF" />
//   <row city="Kreuzlingen,CH" code="ZHU" />
//   <row city="Kristiansand,NO" code="KRS" />
//   <row city="Kristianstad,SE" code="KID" />
//   <row city="Kristiansund,NO" code="KSU" />
//   <row city="Kristinehamn,SE" code="XYN" />
//   <row city="Krivoy Rog,UA" code="KWG" />
//   <row city="Kuala Belait,BN" code="KUB" />
//   <row city="Kuala Lumpur, Malaysia" code="KUL" />
//   <row city="Kuala Terengganu,MY" code="TGG" />
//   <row city="Kuantan,MY" code="KUA" />
//   <row city="Kubin Island,AU" code="KUG" />
//   <row city="Kuching,MY" code="KCH" />
//   <row city="Kudat,MY" code="KUD" />
//   <row city="Kufrah,LY" code="AKF" />
//   <row city="Kugluktuk Coppermine,CA" code="YCO" />
//   <row city="Kullorsuaq,GL" code="KHQ" />
//   <row city="Kulob,TJ" code="TJU" />
//   <row city="Kulu,IN" code="KUU" />
//   <row city="Kulusuk,GL" code="KUS" />
//   <row city="Kumamoto,JP" code="KMJ" />
//   <row city="Kumasi,GH" code="KMS" />
//   <row city="Kume Jima,JP" code="UEO" />
//   <row city="Kumla,SE" code="XXV" />
//   <row city="Kundiawa,PG" code="CMU" />
//   <row city="Kunming,CN" code="KMG" />
//   <row city="Kunsan,KR" code="KUV" />
//   <row city="Kunshan,CN" code="KVN" />
//   <row city="Kununurra,AU" code="KNX" />
//   <row city="Kuopio,FI" code="KUO" />
//   <row city="Kupang,ID" code="KOE" />
//   <row city="Kuparuk,US" code="UUK" />
//   <row city="Kupiano,PG" code="KUP" />
//   <row city="Kuqa,CN" code="KCA" />
//   <row city="Kuressaare,EE" code="URE" />
//   <row city="Kurgan,RU" code="KRO" />
//   <row city="Kuria,KI" code="KUC" />
//   <row city="Kursk,RU" code="URS" />
//   <row city="Kuruman,ZA" code="KMH" />
//   <row city="Kusadasi,TR" code="XKU" />
//   <row city="Kushiro,JP" code="KUH" />
//   <row city="Kutahya,TR" code="KZR" />
//   <row city="Kutaisi,GE" code="KUT" />
//   <row city="Kuujjuaq,CA" code="YVP" />
//   <row city="Kuummiut,GL" code="KUZ" />
//   <row city="Kuusamo,FI" code="KAO" />
//   <row city="Kuwait,KW" code="KWI" />
//   <row city="Kwajalein,MH" code="KWA" />
//   <row city="Kwangju,KR" code="KWJ" />
//   <row city="Kwethluk,US" code="KWT" />
//   <row city="Kwigillingok,US" code="KWK" />
//   <row city="Kyaukpyu,MM" code="KYP" />
//   <row city="Kyoto,JP" code="UKY" />
//   <row city="Kyzyl,RU" code="KYZ" />
//   <row city="Kzyl Orda,KZ" code="KZO" />
//   <row city="LINCANG,CN" code="LNJ" />
//   <row city="La Baule,FR" code="LBY" />
//   <row city="La Ceiba,HN" code="LCE" />
//   <row city="La Chaux de Fonds,CH" code="ZHV" />
//   <row city="La Chorrera,CO" code="LCR" />
//   <row city="La Ciotat,FR" code="XCT" />
//   <row city="La Coruna,ES" code="LCG" />
//   <row city="La Crosse,US" code="LSE" />
//   <row city="La Desirade,GP" code="DSD" />
//   <row city="La Fria,VE" code="LFR" />
//   <row city="La Grande,CA" code="YGL" />
//   <row city="La Grande,US" code="LGD" />
//   <row city="La Grange,US" code="LGC" />
//   <row city="La Guaira,VE" code="LAG" />
//   <row city="La Malbaie,CA" code="YML" />
//   <row city="La Palma del Condado,ES" code="NDO" />
//   <row city="La Paz,MX" code="LAP" />
//   <row city="La Paz,BO" code="LPB" />
//   <row city="La Pedrera,CO" code="LPD" />
//   <row city="La Plagne,FR" code="PLG" />
//   <row city="La Plata,AR" code="LPG" />
//   <row city="La Porte,US" code="LPO" />
//   <row city="La Rioja,AR" code="IRJ" />
//   <row city="La Roche,FR" code="EDM" />
//   <row city="La Roche Sur Yon,FR" code="XRO" />
//   <row city="La Rochelle,FR" code="LRH" />
//   <row city="La Romana,DO" code="LRM" />
//   <row city="La Sarre,CA" code="SSQ" />
//   <row city="La Serena,CL" code="LSC" />
//   <row city="La Spezia,IT" code="QLP" />
//   <row city="La Tabatiere,CA" code="ZLT" />
//   <row city="La Tuque,CA" code="YLQ" />
//   <row city="La Verne,US" code="POC" />
//   <row city="Labasa,FJ" code="LBS" />
//   <row city="Lablab,PG" code="LAB" />
//   <row city="Labouchere Bay,US" code="WLB" />
//   <row city="Labuan,MY" code="LBU" />
//   <row city="Labuan Bajo,ID" code="LBJ" />
//   <row city="Labuha,ID" code="LAH" />
//   <row city="Lac Brochet Indian Reserve,CA" code="XLB" />
//   <row city="Lac Edouard,CA" code="XEE" />
//   <row city="Lac La Ronge,CA" code="YVC" />
//   <row city="Laconia,US" code="LCI" />
//   <row city="Ladysmith,CA" code="XEH" />
//   <row city="Ladysmith,ZA" code="LAY" />
//   <row city="Lae Pg,PG" code="LAE" />
//   <row city="Laeso Island,DK" code="BYR" />
//   <row city="Lafayette,US" code="LAF" />
//   <row city="Lafayette,US" code="LFT" />
//   <row city="Lago Agrio,EC" code="LGQ" />
//   <row city="Lago Argentino,AR" code="ING" />
//   <row city="Lagos,NG" code="LOS" />
//   <row city="Lagos De Moreno,MX" code="LOM" />
//   <row city="Lahad Datu,MY" code="LDU" />
//   <row city="Lahore,PK" code="LHE" />
//   <row city="Lahr,DE" code="LHA" />
//   <row city="Lahti,FI" code="QLF" />
//   <row city="Lajeado,BR" code="QLB" />
//   <row city="Lajes,BR" code="LAJ" />
//   <row city="Lake Charles,US" code="LCH" />
//   <row city="Lake cities,US" code="LCQ" />
//   <row city="Lake Evella,AU" code="LEL" />
//   <row city="Lake Havasu Cty,US" code="HII" />
//   <row city="Lake Jackson,US" code="LJN" />
//   <row city="Lake Minchumina,US" code="LMA" />
//   <row city="Lake Murray,PG" code="LMY" />
//   <row city="Lake Of The Ozarks,US" code="AIZ" />
//   <row city="Lake Placid,US" code="LKP" />
//   <row city="Lake Tahoe,US" code="TVL" />
//   <row city="Lakeba,FJ" code="LKB" />
//   <row city="Lakeland,US" code="LAL" />
//   <row city="Lakselv,NO" code="LKL" />
//   <row city="Lalibela,ET" code="LLI" />
//   <row city="Lamacarena,CO" code="LMC" />
//   <row city="Lamap,VU" code="LPM" />
//   <row city="Lamar,US" code="LAA" />
//   <row city="Lamassa,PG" code="LMG" />
//   <row city="Lambarene,GA" code="LBQ" />
//   <row city="Lamen Bay,VU" code="LNB" />
//   <row city="Lamezia Terme,IT" code="SUF" />
//   <row city="Lampang,TH" code="LPT" />
//   <row city="Lampedusa,IT" code="LMP" />
//   <row city="Lamu,KE" code="LAU" />
//   <row city="Lanai,US" code="LNY" />
//   <row city="Lancaster,GB" code="XQL" />
//   <row city="Lancaster,US" code="WJF" />
//   <row city="Lancaster,US" code="LNS" />
//   <row city="Landerneau,FR" code="XLD" />
//   <row city="Lands End,GB" code="LEQ" />
//   <row city="Landshut,DE" code="QLG" />
//   <row city="Landskrona,SE" code="JLD" />
//   <row city="Langenthal,CH" code="ZHW" />
//   <row city="Langeoog,DE" code="LGO" />
//   <row city="Langford,CA" code="XEJ" />
//   <row city="Langgur,ID" code="LUV" />
//   <row city="Langkawi,MY" code="LGK" />
//   <row city="Langley,CA" code="YLY" />
//   <row city="Lankaran,AZ" code="LLK" />
//   <row city="Lannion,FR" code="LAI" />
//   <row city="Lansdowne,CA" code="YLH" />
//   <row city="Lansing,US" code="LAN" />
//   <row city="Lanzarote,ES" code="ACE" />
//   <row city="Lanzhou,CN" code="LHW" />
//   <row city="Laoag,PH" code="LAO" />
//   <row city="Laon,FR" code="XLN" />
//   <row city="Lappeenranta,FI" code="LPP" />
//   <row city="Laquila,IT" code="QAQ" />
//   <row city="Laramie,US" code="LAR" />
//   <row city="Larantuka,ID" code="LKA" />
//   <row city="Laredo,US" code="LRD" />
//   <row city="Larisa,GR" code="LRA" />
//   <row city="Larnaca,CY" code="LCA" />
//   <row city="Larsen Bay,US" code="KLN" />
//   <row city="Larvik,NO" code="XKK" />
//   <row city="Las Cruces,US" code="LRU" />
//   <row city="Las Limas,HN" code="LLH" />
//   <row city="Las Piedras,VE" code="LSP" />
//   <row city="Las Termas De Rio Hondo,AR" code="RHD" />
//   <row city="Las Tunas,CU" code="VTU" />
//   <row city="Las Vegas,US" code="LAS" />
//   <row city="Las Vegas,US" code="LVS" />
//   <row city="Lashio,MM" code="LSH" />
//   <row city="Lastourville,GA" code="LTL" />
//   <row city="Latacunga,EC" code="LTX" />
//   <row city="Latakia,SY" code="LTK" />
//   <row city="Lathrop,US" code="LRO" />
//   <row city="Lathrop Wells,US" code="LTH" />
//   <row city="Latina,IT" code="QLT" />
//   <row city="Latrobe,US" code="LBE" />
//   <row city="Latur,IN" code="LTU" />
//   <row city="Launceston,AU" code="LST" />
//   <row city="Laurel,US" code="LUL" />
//   <row city="Lausanne,CH" code="QLS" />
//   <row city="Laval,FR" code="LVA" />
//   <row city="Laverton,AU" code="LVO" />
//   <row city="Lavras,BR" code="QLW" />
//   <row city="Lawas,MY" code="LWY" />
//   <row city="Lawrence,US" code="LWC" />
//   <row city="Lawrence,US" code="LWM" />
//   <row city="Lawrenceville,US" code="LZU" />
//   <row city="Lawton,US" code="LAW" />
//   <row city="Lazaro Cardenas Michoacan,MX" code="LZC" />
//   <row city="Le Creusot,FR" code="XCC" />
//   <row city="Le Havre,FR" code="LEH" />
//   <row city="Le Locle,CH" code="ZJA" />
//   <row city="Le Mans,FR" code="LME" />
//   <row city="Le Mars,US" code="LRJ" />
//   <row city="Le Puy,FR" code="LPY" />
//   <row city="Le Touquet,FR" code="LTQ" />
//   <row city="Leadville,US" code="LXV" />
//   <row city="Learmonth,AU" code="LEA" />
//   <row city="Lebakeng,LS" code="LEF" />
//   <row city="Lebanon,US" code="LEB" />
//   <row city="Lecce,IT" code="LCC" />
//   <row city="Leeds,GB" code="LBA" />
//   <row city="Leesburg,US" code="LEE" />
//   <row city="Leeton,AU" code="QLE" />
//   <row city="Leeuwarden,NL" code="LWR" />
//   <row city="Legaspi,PH" code="LGP" />
//   <row city="Leh IN,IN" code="IXL" />
//   <row city="Leicester,GB" code="QEW" />
//   <row city="Leiden,NL" code="LID" />
//   <row city="Leigh Creek,AU" code="LGH" />
//   <row city="Leinster,AU" code="LER" />
//   <row city="Leipzig,DE" code="LEJ" />
//   <row city="Leiria,PT" code="QLR" />
//   <row city="Lekana,CG" code="LKC" />
//   <row city="Leknes,NO" code="LKN" />
//   <row city="Leksand,SE" code="XXO" />
//   <row city="Lelystad,NL" code="LEY" />
//   <row city="Lemoore,US" code="NLC" />
//   <row city="Lencois,BR" code="LEC" />
//   <row city="Lencois Paulista,BR" code="QGC" />
//   <row city="Lens,FR" code="XLE" />
//   <row city="Lensk,RU" code="ULK" />
//   <row city="Lenzburg,CH" code="ZJC" />
//   <row city="Lenzerheide,CH" code="ZJD" />
//   <row city="Leon,MX" code="BJX" />
//   <row city="Leon,ES" code="LEN" />
//   <row city="Leonardtown,US" code="LTW" />
//   <row city="Leonora,AU" code="LNO" />
//   <row city="Leribe,LS" code="LRB" />
//   <row city="Lerida,ES" code="QLQ" />
//   <row city="Leros,GR" code="LRS" />
//   <row city="Lerwick,GB" code="LSI" />
//   <row city="Les Sables,FR" code="LSO" />
//   <row city="Les Saintes,GP" code="LSS" />
//   <row city="Lese,PG" code="LNG" />
//   <row city="Lesobeng,LS" code="LES" />
//   <row city="Lethbridge,CA" code="YQL" />
//   <row city="Leticia,CO" code="LET" />
//   <row city="Letterkenny,IE" code="LTR" />
//   <row city="Leuven,BE" code="ZGK" />
//   <row city="Levallois,FR" code="QBH" />
//   <row city="Levanger,NO" code="XUH" />
//   <row city="Levelock,US" code="KLL" />
//   <row city="Leverkusen,DE" code="ZOA" />
//   <row city="Levi,FI" code="XGX" />
//   <row city="Levuka,FJ" code="LEV" />
//   <row city="Lewisburg,US" code="LWB" />
//   <row city="Lewiston,US" code="LEW" />
//   <row city="Lewiston,US" code="LWS" />
//   <row city="Lewistown,US" code="LWT" />
//   <row city="Lexington,US" code="LEX" />
//   <row city="Lexington,US" code="LXN" />
//   <row city="Lhasa,CN" code="LXA" />
//   <row city="Lianping,CN" code="LIA" />
//   <row city="Lianyungang,CN" code="LYG" />
//   <row city="Liaoyang,CN" code="LQQ" />
//   <row city="Liberal,US" code="LBL" />
//   <row city="Liberia,CR" code="LIR" />
//   <row city="Libourne,FR" code="XLR" />
//   <row city="Libreville,GA" code="LBV" />
//   <row city="Lichfield,GB" code="XQT" />
//   <row city="Lichinga,MZ" code="VXC" />
//   <row city="Lidkoping,SE" code="LDK" />
//   <row city="Liege,BE" code="LGG" />
//   <row city="Liepaja,LV" code="LPX" />
//   <row city="Lifou,NC" code="LIF" />
//   <row city="Lightning Ridge,AU" code="LHG" />
//   <row city="Lihir Island,PG" code="LNV" />
//   <row city="Lihue,US" code="LIH" />
//   <row city="Lijiang cities,CN" code="LJG" />
//   <row city="Lilabari,IN" code="IXI" />
//   <row city="Lille,FR" code="LIL" />
//   <row city="Lille Hammer,NO" code="XXL" />
//   <row city="Lillestrom,NO" code="XKI" />
//   <row city="Lilongwe,MW" code="LLW" />
//   <row city="Lima,US" code="AOH" />
//   <row city="Lima,PE" code="LIM" />
//   <row city="Limassol,CY" code="QLI" />
//   <row city="Limbang,MY" code="LMN" />
//   <row city="Limburg,DE" code="ZNW" />
//   <row city="Lime Village,US" code="LVD" />
//   <row city="Limeira,BR" code="QGB" />
//   <row city="Limerick,IE" code="LMK" />
//   <row city="Limnos,GR" code="LXS" />
//   <row city="Limoges,FR" code="LIG" />
//   <row city="Limon,US" code="LIC" />
//   <row city="Limon,CR" code="LIO" />
//   <row city="Linares,CL" code="ZLR" />
//   <row city="Lincoln,US" code="LNK" />
//   <row city="Lindau,DE" code="QII" />
//   <row city="Linden,US" code="LDJ" />
//   <row city="Lindi,TZ" code="LDI" />
//   <row city="Ling Ling,CN" code="LLF" />
//   <row city="Lingshui,CN" code="LQS" />
//   <row city="Linhai,CN" code="LHC" />
//   <row city="Linkoping,SE" code="LPI" />
//   <row city="Lins,BR" code="LIP" />
//   <row city="Linyi,CN" code="LYI" />
//   <row city="Linz,AT" code="LNZ" />
//   <row city="Lipetsk,RU" code="LPK" />
//   <row city="Liping,CN" code="HZH" />
//   <row city="Lippstadt,DE" code="ZOB" />
//   <row city="Lisala,CD" code="LIQ" />
//   <row city="Lisbon,PT" code="LIS" />
//   <row city="Lisieux,FR" code="XLX" />
//   <row city="Lismore,AU" code="LSY" />
//   <row city="Little Cayman,KY" code="LYB" />
//   <row city="Little Grand Rapids,CA" code="ZGR" />
//   <row city="Little Port Walter,US" code="LPW" />
//   <row city="Little Rock,US" code="LIT" />
//   <row city="Liupanshui,CN" code="LPF" />
//   <row city="Liuzhou,CN" code="LZH" />
//   <row city="Livengood,US" code="LIV" />
//   <row city="Livermore,US" code="LVK" />
//   <row city="Liverpool,GB" code="LPL" />
//   <row city="Livingston,US" code="LVM" />
//   <row city="Livingstone,ZM" code="LVI" />
//   <row city="Livramento,BR" code="LVB" />
//   <row city="Lizard Island,AU" code="LZR" />
//   <row city="Ljubljana,SI" code="LJU" />
//   <row city="Lleida,ES" code="ILD" />
//   <row city="Lloydminster,CA" code="YLL" />
//   <row city="Locarno,CH" code="ZJI" />
//   <row city="Lochgilphead,GB" code="LPH" />
//   <row city="Lockhart,AU" code="IRG" />
//   <row city="Lockport,US" code="LOT" />
//   <row city="Lodja,CD" code="LJA" />
//   <row city="Lodwar,KE" code="LOK" />
//   <row city="Lodz,PL" code="LCJ" />
//   <row city="Loei,TH" code="LOE" />
//   <row city="Logan,US" code="LGU" />
//   <row city="Lognes,FR" code="XLG" />
//   <row city="Logrono,ES" code="RJL" />
//   <row city="Loja,EC" code="LOH" />
//   <row city="Lokichoggio,KE" code="LKG" />
//   <row city="Lome,TG" code="LFW" />
//   <row city="Lompoc,US" code="LPC" />
//   <row city="London,CA" code="YXU" />
//   <row city="London,GB" code="LON" />
//   <row city="London,US" code="LOZ" />
//   <row city="Londonderry,GB" code="LDY" />
//   <row city="Londrina,BR" code="LDB" />
//   <row city="Long Akah,MY" code="LKH" />
//   <row city="Long Banga,MY" code="LBP" />
//   <row city="Long Bawan,ID" code="LBW" />
//   <row city="Long Beach,US" code="LGB" />
//   <row city="Long Island,AU" code="HAP" />
//   <row city="Long Lellang,MY" code="LGL" />
//   <row city="Long Semado,MY" code="LSM" />
//   <row city="Long Seridan,MY" code="ODN" />
//   <row city="Longana,VU" code="LOD" />
//   <row city="Longmont,US" code="QWM" />
//   <row city="Longreach,AU" code="LRE" />
//   <row city="Longview,US" code="LOG" />
//   <row city="Longview,US" code="GGG" />
//   <row city="Longyan,CN" code="LCX" />
//   <row city="Longyearbyen,NO" code="LYR" />
//   <row city="Lonorore,VU" code="LNE" />
//   <row city="Lons Le Saunier,FR" code="XLL" />
//   <row city="Lopez Island,US" code="LPS" />
//   <row city="Lord Howe Island,AU" code="LDH" />
//   <row city="Lordsburg,US" code="LSB" />
//   <row city="Loreto,MX" code="LTO" />
//   <row city="Lorient,FR" code="LRT" />
//   <row city="Los Alamos,US" code="LAM" />
//   <row city="Los Angeles,US" code="LAX" />
//   <row city="Los Angeles,CL" code="LSQ" />
//   <row city="Los Banos,US" code="LSN" />
//   <row city="Los Chiles,CR" code="LSL" />
//   <row city="Los Mochis,MX" code="LMM" />
//   <row city="Losuia,PG" code="LSA" />
//   <row city="Louangphrabang,LA" code="LPQ" />
//   <row city="Loubomo,CG" code="DIS" />
//   <row city="Loughborough,GB" code="XQI" />
//   <row city="Louisville,US" code="LMS" />
//   <row city="Louisville,US" code="SDF" />
//   <row city="Lourdes,FR" code="LDE" />
//   <row city="Lower Zambezi Nat Park,ZM" code="RYL" />
//   <row city="Loyangalani,KE" code="LOY" />
//   <row city="Luanda,AO" code="LAD" />
//   <row city="Luang Namtha,LA" code="LXG" />
//   <row city="Lubango,AO" code="SDD" />
//   <row city="Lubbock,US" code="LBB" />
//   <row city="Lublin,PL" code="LUZ" />
//   <row city="Lubumbashi,CD" code="FBM" />
//   <row city="Lucas Do Rio Verde,BR" code="LVR" />
//   <row city="Lucca,IT" code="LCV" />
//   <row city="Lucerne,CH" code="QLJ" />
//   <row city="Luchon,FR" code="LXH" />
//   <row city="Lucknow,IN" code="LKO" />
//   <row city="Ludenscheid,DE" code="ZOC" />
//   <row city="Luderitz,NA" code="LUD" />
//   <row city="Ludhiana,IN" code="LUH" />
//   <row city="Ludington,US" code="LDM" />
//   <row city="Ludwigsburg,DE" code="ZOD" />
//   <row city="Ludwigshafen,DE" code="ZOE" />
//   <row city="Ludwigslust,DE" code="ZLU" />
//   <row city="Luebeck,DE" code="LBC" />
//   <row city="Luena,AO" code="LUO" />
//   <row city="Lueneburg,DE" code="ZOG" />
//   <row city="Luenen,DE" code="ZOH" />
//   <row city="Lufkin,US" code="LFK" />
//   <row city="Lugano,CH" code="LUG" />
//   <row city="Lugansk,UA" code="VSG" />
//   <row city="Lugo,ES" code="LUY" />
//   <row city="Lukla,NP" code="LUA" />
//   <row city="Lulea,SE" code="LLA" />
//   <row city="Luliang,CN" code="LLV" />
//   <row city="Lumberton,US" code="LBT" />
//   <row city="Lumi,PG" code="LMI" />
//   <row city="Lund C,SE" code="XGC" />
//   <row city="Luoyang,CN" code="LYA" />
//   <row city="Lusaka,ZM" code="LUN" />
//   <row city="Luton,GB" code="LTN" />
//   <row city="Lutsk,UA" code="UCK" />
//   <row city="Luwuk,ID" code="LUW" />
//   <row city="Luxembourg,LU" code="LUX" />
//   <row city="Luxi,CN" code="LUM" />
//   <row city="Luxor,EG" code="LXR" />
//   <row city="Luzhou,CN" code="LZO" />
//   <row city="Luzon Island,PH" code="CRK" />
//   <row city="Lvov,UA" code="LWO" />
//   <row city="Lycksele,SE" code="LYC" />
//   <row city="Lydd,GB" code="LYX" />
//   <row city="Lynchburg,US" code="LYH" />
//   <row city="Lynn Lake,CA" code="YYL" />
//   <row city="Lyon,FR" code="LYS" />
//   <row city="Lyon cities,FR" code="XYL" />
//   <row city="Lyon Cty,FR" code="XYD" />
//   <row city="Lysaker,NO" code="XUI" />
//   <row city="Lyss,CH" code="ZJL" />
//   <row city="M Banza Congo,AO" code="SSY" />
//   <row city="M Bigou,GA" code="MBC" />
//   <row city="MADISON,US" code="XMD" />
//   <row city="MINERAL WELLS,US" code="MWL" />
//   <row city="MOUSCRON,BE" code="MWW" />
//   <row city="MT CLEMENS,US" code="MTC" />
//   <row city="Maamigili Island,MV" code="VAM" />
//   <row city="Maan,JO" code="MPQ" />
//   <row city="Maastricht,NL" code="MST" />
//   <row city="Mabuiag Island,AU" code="UBB" />
//   <row city="Macae,BR" code="MEA" />
//   <row city="Macapa,BR" code="MCP" />
//   <row city="Macas,EC" code="XMS" />
//   <row city="Macau,MO" code="MFM" />
//   <row city="Macclesfield,GB" code="XMZ" />
//   <row city="Maceio,BR" code="MCZ" />
//   <row city="Macenta,GN" code="MCA" />
//   <row city="Machala,EC" code="MCH" />
//   <row city="Macheng,CN" code="HBM" />
//   <row city="Machu Picchu,PE" code="MFT" />
//   <row city="Mackay,AU" code="MKY" />
//   <row city="Mackinac Island,US" code="MCD" />
//   <row city="Macomb,US" code="MQB" />
//   <row city="Macon,FR" code="QNX" />
//   <row city="Macon,US" code="MCN" />
//   <row city="Madaba,JO" code="QMD" />
//   <row city="Madang,PG" code="MAG" />
//   <row city="Madera,US" code="MAE" />
//   <row city="Madinah,SA" code="MED" />
//   <row city="Madison,US" code="MDN" />
//   <row city="Madison,US" code="DXE" />
//   <row city="Madison,US" code="MSN" />
//   <row city="Madrid,ES" code="MAD" />
//   <row city="Madurai,IN" code="IXM" />
//   <row city="Mae Hongson,TH" code="HGN" />
//   <row city="Mae Sot,TH" code="MAQ" />
//   <row city="Maebashi,JP" code="QEB" />
//   <row city="Maewo,VU" code="MWF" />
//   <row city="Mafeteng,LS" code="MFC" />
//   <row city="Mafia,TZ" code="MFA" />
//   <row city="Magadan,RU" code="GDX" />
//   <row city="Magan,RU" code="GYG" />
//   <row city="Magas,RU" code="IGT" />
//   <row city="Magdalena,BO" code="MGD" />
//   <row city="Magdeburg,DE" code="ZMG" />
//   <row city="Magdeburg Cochstedt,DE" code="CSO" />
//   <row city="Magnitogorsk,RU" code="MQF" />
//   <row city="Magnolia,US" code="AGO" />
//   <row city="Magong,TW" code="MZG" />
//   <row city="Magwe,MM" code="MWQ" />
//   <row city="Mahanoro,MG" code="VVB" />
//   <row city="Mahe Island,SC" code="SEZ" />
//   <row city="Mahenye,ZW" code="MJW" />
//   <row city="Maiana,KI" code="MNK" />
//   <row city="Maiduguri,NG" code="MIU" />
//   <row city="Mainz,DE" code="QMZ" />
//   <row city="Maio,CV" code="MMO" />
//   <row city="Maitland,AU" code="MTL" />
//   <row city="Majunga,MG" code="MJN" />
//   <row city="Majuro,MH" code="MAJ" />
//   <row city="Makemo,PF" code="MKP" />
//   <row city="Makhachkala,RU" code="MCX" />
//   <row city="Makin Island,KI" code="MTK" />
//   <row city="Makkah,SA" code="QCA" />
//   <row city="Makkovik,CA" code="YMN" />
//   <row city="Makokou,GA" code="MKU" />
//   <row city="Makoua,CG" code="MKJ" />
//   <row city="Makurdi,NG" code="MDI" />
//   <row city="Mala Mala,ZA" code="AAM" />
//   <row city="Malabo,GQ" code="SSG" />
//   <row city="Malacca,MY" code="MKZ" />
//   <row city="Malaga,ES" code="AGP" />
//   <row city="Malakal,SS" code="MAK" />
//   <row city="Malalaua,PG" code="MLQ" />
//   <row city="Malang,ID" code="MLG" />
//   <row city="Malange,AO" code="MEG" />
//   <row city="Malatya,TR" code="MLX" />
//   <row city="Malda,IN" code="LDA" />
//   <row city="Malden,US" code="MAW" />
//   <row city="Male,MV" code="MLE" />
//   <row city="Malekolon,PG" code="MKN" />
//   <row city="Malelane,ZA" code="LLE" />
//   <row city="Malindi,KE" code="MYD" />
//   <row city="Malmo,SE" code="MMA" />
//   <row city="Malololailai,FJ" code="PTF" />
//   <row city="Maloy,NO" code="QFQ" />
//   <row city="Malta,MT" code="MLA" />
//   <row city="Mamai,PG" code="MAP" />
//   <row city="Mamburao,PH" code="MBO" />
//   <row city="Mammoth Lakes,US" code="MMH" />
//   <row city="Mamuju,ID" code="MJU" />
//   <row city="Man CI,CI" code="MJC" />
//   <row city="Mana Island,FJ" code="MNF" />
//   <row city="Manado,ID" code="MDC" />
//   <row city="Managua,NI" code="MGA" />
//   <row city="Manakara,MG" code="WVK" />
//   <row city="Mananara,MG" code="WMR" />
//   <row city="Mananjary,MG" code="MNJ" />
//   <row city="Manare,PG" code="MRM" />
//   <row city="Manassas,US" code="MNZ" />
//   <row city="Manaus,BR" code="MAO" />
//   <row city="Manchester,US" code="MHT" />
//   <row city="Manchester,GB" code="MAN" />
//   <row city="Mandabe,MG" code="WMD" />
//   <row city="Mandalay,MM" code="MDL" />
//   <row city="Mandalgobi,MN" code="MXW" />
//   <row city="Mandera,KE" code="NDE" />
//   <row city="Mandeville,JM" code="MVJ" />
//   <row city="Mandritsara,MG" code="WMA" />
//   <row city="Manega,GA" code="MGO" />
//   <row city="Manga,PG" code="MGP" />
//   <row city="Mangaia Island,CK" code="MGS" />
//   <row city="Mangalore,IN" code="IXE" />
//   <row city="Mangochi,MW" code="MAI" />
//   <row city="Mangole,ID" code="MAL" />
//   <row city="Mangrove Cay,BS" code="MAY" />
//   <row city="Mangunnyeon,KR" code="MWX" />
//   <row city="Manhattan,US" code="MHK" />
//   <row city="Manihi,PF" code="XMH" />
//   <row city="Maniitsoq,GL" code="JSU" />
//   <row city="Manila,US" code="MXA" />
//   <row city="Manila,PH" code="MNL" />
//   <row city="Maningrida,AU" code="MNG" />
//   <row city="Manistee,US" code="MBL" />
//   <row city="Manistique,US" code="ISQ" />
//   <row city="Manitouwadge,CA" code="YMG" />
//   <row city="Manitowoc,US" code="MTW" />
//   <row city="Manizales,CO" code="MZL" />
//   <row city="Manja,MG" code="MJA" />
//   <row city="Mankato,US" code="MKT" />
//   <row city="Manley Hot Springs,US" code="MLY" />
//   <row city="Mannheim Germany,DE" code="MHG" />
//   <row city="Manokotak,US" code="KMO" />
//   <row city="Manokwari,ID" code="MKW" />
//   <row city="Manono,CD" code="MNO" />
//   <row city="Mansa,ZM" code="MNS" />
//   <row city="Mansfield,GB" code="ZMA" />
//   <row city="Mansfield,US" code="MFD" />
//   <row city="Manston,GB" code="MSE" />
//   <row city="Manta,EC" code="MEC" />
//   <row city="Manteo,US" code="MEO" />
//   <row city="Manumu,PG" code="UUU" />
//   <row city="Manus Island,PG" code="MAS" />
//   <row city="Manzanillo,MX" code="ZLO" />
//   <row city="Manzanillo,CU" code="MZO" />
//   <row city="Manzhouli,CN" code="NZH" />
//   <row city="Maobi,GA" code="MGX" />
//   <row city="Maota,WS" code="MXS" />
//   <row city="Maputo,MZ" code="MPM" />
//   <row city="Mar Del Plata,AR" code="MDQ" />
//   <row city="Mara Lodges,KE" code="MRE" />
//   <row city="Maraba,BR" code="MAB" />
//   <row city="Maracaibo,VE" code="MAR" />
//   <row city="Maracay,VE" code="MYC" />
//   <row city="Marakai,KI" code="MZK" />
//   <row city="Marana,US" code="MZJ" />
//   <row city="Marathon,CA" code="YSP" />
//   <row city="Marathon,US" code="MTH" />
//   <row city="Marau Island,SB" code="RUS" />
//   <row city="Marbella,ES" code="QRL" />
//   <row city="Marble Bar,AU" code="MBB" />
//   <row city="Marble Canyon,US" code="MYH" />
//   <row city="Marburg An Der Lahn,DE" code="ZOI" />
//   <row city="Marco Island,US" code="MRK" />
//   <row city="Mardin,TR" code="MQM" />
//   <row city="Mare,NC" code="MEE" />
//   <row city="Mareeba,AU" code="MRG" />
//   <row city="Margaret River,AU" code="MQZ" />
//   <row city="Margaret River Station,AU" code="MGV" />
//   <row city="Margate,ZA" code="MGH" />
//   <row city="Marianske Lazne,CZ" code="MKA" />
//   <row city="Maribo,DK" code="MRW" />
//   <row city="Maribor,SI" code="MBX" />
//   <row city="Marie Galante,GP" code="GBJ" />
//   <row city="Mariehamn,FI" code="MHQ" />
//   <row city="Marietta,US" code="MGE" />
//   <row city="Marilia,BR" code="MII" />
//   <row city="Marina Di Massa,IT" code="QMM" />
//   <row city="Marinduque,PH" code="MRQ" />
//   <row city="Maringa,BR" code="MGF" />
//   <row city="Marion,US" code="MWA" />
//   <row city="Marion,US" code="MZZ" />
//   <row city="Mariposa,US" code="RMY" />
//   <row city="Mariupol,UA" code="MPW" />
//   <row city="Market Harborough,GB" code="XQM" />
//   <row city="Markovo,RU" code="KVM" />
//   <row city="Marl,DE" code="ZOJ" />
//   <row city="Marlborough,US" code="MXG" />
//   <row city="Marmande,FR" code="XMR" />
//   <row city="Marmaris,TR" code="QRQ" />
//   <row city="Marnardal,NO" code="ZYY" />
//   <row city="Maroantsetra,MG" code="WMN" />
//   <row city="Maroochydore,AU" code="MCY" />
//   <row city="Maroua,CM" code="MVR" />
//   <row city="Marquette,US" code="MQT" />
//   <row city="Marrakech,MA" code="RAK" />
//   <row city="Marsa Alam,EG" code="RMF" />
//   <row city="Marsala,IT" code="QMR" />
//   <row city="Marseille,FR" code="MRS" />
//   <row city="Marsh Harbour,BS" code="MHH" />
//   <row city="Marshall,US" code="MHL" />
//   <row city="Marshall,US" code="ASL" />
//   <row city="Marshall,US" code="MLL" />
//   <row city="Marshall,US" code="MML" />
//   <row city="Marshalltown,US" code="MIW" />
//   <row city="Marshfield,US" code="MFI" />
//   <row city="Martha S Vineyard,US" code="MVY" />
//   <row city="Martigny,CH" code="ZJM" />
//   <row city="Martinsburg,US" code="MRB" />
//   <row city="Marudi,MY" code="MUR" />
//   <row city="Mary,TM" code="MYP" />
//   <row city="Maryborough,AU" code="MBH" />
//   <row city="Marys Harbour,CA" code="YMH" />
//   <row city="Marysville,US" code="MYV" />
//   <row city="Masada,IL" code="MTZ" />
//   <row city="Masbate,PH" code="MBT" />
//   <row city="Maseru,LS" code="MSU" />
//   <row city="Mashad,IR" code="MHD" />
//   <row city="Masirah,OM" code="MSH" />
//   <row city="Mason cities,US" code="MCW" />
//   <row city="Massawa,ER" code="MSW" />
//   <row city="Massena,US" code="MSS" />
//   <row city="Masset,CA" code="ZMT" />
//   <row city="Masslo,ET" code="MZX" />
//   <row city="Masterton,NZ" code="MRO" />
//   <row city="Masvingo,ZW" code="MVZ" />
//   <row city="Matagami,CA" code="YNM" />
//   <row city="Mataiva,PF" code="MVT" />
//   <row city="Matam,SN" code="MAX" />
//   <row city="Matamata,NZ" code="MTA" />
//   <row city="Matamoros,MX" code="MAM" />
//   <row city="Matane,CA" code="YME" />
//   <row city="Matanzas,CU" code="VRO" />
//   <row city="Matapedia,CA" code="XLP" />
//   <row city="Mataram,ID" code="AMI" />
//   <row city="Matsaile,LS" code="MSG" />
//   <row city="Matsu,TW" code="MFK" />
//   <row city="Matsumoto,JP" code="MMJ" />
//   <row city="Matsuyama,JP" code="MYJ" />
//   <row city="Mattoon,US" code="MTO" />
//   <row city="Maturin,VE" code="MUN" />
//   <row city="Maubeuge,FR" code="XME" />
//   <row city="Mauke Island,CK" code="MUK" />
//   <row city="Maumere,ID" code="MOF" />
//   <row city="Maun,BW" code="MUB" />
//   <row city="Maupiti,PF" code="MAU" />
//   <row city="Mauritius,MU" code="MRU" />
//   <row city="Maxville,CA" code="XID" />
//   <row city="May Creek,US" code="MYK" />
//   <row city="Mayaguana,BS" code="MYG" />
//   <row city="Mayaguez,US" code="MAZ" />
//   <row city="Mayo,CA" code="YMA" />
//   <row city="Mazamari,PE" code="MZA" />
//   <row city="Mazar I Sharif,AF" code="MZR" />
//   <row city="Mazatlan,MX" code="MZT" />
//   <row city="Mbabane,SZ" code="QMN" />
//   <row city="Mbandaka,CD" code="MDK" />
//   <row city="Mbarara,UG" code="MBQ" />
//   <row city="Mbeya,TZ" code="MBI" />
//   <row city="Mbuji Mayi,CD" code="MJM" />
//   <row city="McAlester,US" code="MLC" />
//   <row city="McAllen,US" code="MFE" />
//   <row city="McArthur River,AU" code="MCV" />
//   <row city="McComb,US" code="MCB" />
//   <row city="McCook,US" code="MCK" />
//   <row city="McPherson,US" code="MPR" />
//   <row city="Mccall,US" code="MYL" />
//   <row city="Mccarthy,US" code="MXY" />
//   <row city="Mcgrath,US" code="MCG" />
//   <row city="Meadow Lake,CA" code="YLJ" />
//   <row city="Meadville,US" code="MEJ" />
//   <row city="Meaulte,FR" code="BYF" />
//   <row city="Mechelen,BE" code="ZGP" />
//   <row city="Medan,ID" code="MES" />
//   <row city="Medellin,CO" code="MDE" />
//   <row city="Medford,US" code="MDF" />
//   <row city="Medford,US" code="MFR" />
//   <row city="Medfra,US" code="MDR" />
//   <row city="Medicine Hat,CA" code="YXH" />
//   <row city="Medouneu,GA" code="MDV" />
//   <row city="Meekathara,AU" code="MKR" />
//   <row city="Megeve,FR" code="MVV" />
//   <row city="Meghauli,NP" code="MEY" />
//   <row city="Mehamn,NO" code="MEH" />
//   <row city="Meixian,CN" code="MXZ" />
//   <row city="Mekambo,GA" code="MKB" />
//   <row city="Mekane,ET" code="MKS" />
//   <row city="Mekele,ET" code="MQX" />
//   <row city="Meknes,MA" code="MEK" />
//   <row city="Mekoryuk,US" code="MYU" />
//   <row city="Melangguane,ID" code="MNA" />
//   <row city="Melbourne,US" code="MLB" />
//   <row city="Melbourne,AU" code="MEL" />
//   <row city="Melilla,ES" code="MLN" />
//   <row city="Melinda,BZ" code="MDB" />
//   <row city="Melo,UY" code="MLZ" />
//   <row city="Melville,CA" code="XEK" />
//   <row city="Memambetsu,JP" code="MMB" />
//   <row city="Memmingen,DE" code="QOX" />
//   <row city="Memphis,US" code="MEM" />
//   <row city="Mende,FR" code="MEN" />
//   <row city="Mendi,PG" code="MDU" />
//   <row city="Mendoza,AR" code="MDZ" />
//   <row city="Menominee,US" code="MNM" />
//   <row city="Menongue,AO" code="SPP" />
//   <row city="Menorca,ES" code="MAH" />
//   <row city="Menton,FR" code="XMT" />
//   <row city="Menyamya,PG" code="MYX" />
//   <row city="Merano,IT" code="ZMR" />
//   <row city="Merauke,ID" code="MKQ" />
//   <row city="Merced,US" code="MCE" />
//   <row city="Meribel,FR" code="MFX" />
//   <row city="Merida,ES" code="QWX" />
//   <row city="Merida,MX" code="MID" />
//   <row city="Merida,VE" code="MRD" />
//   <row city="Meridian,US" code="MEI" />
//   <row city="Merimbula,AU" code="MIM" />
//   <row city="Merlo,AR" code="RLO" />
//   <row city="Merowe,SD" code="MWE" />
//   <row city="Merrill,US" code="RRL" />
//   <row city="Merritt,CA" code="YMB" />
//   <row city="Mersa Matruh,EG" code="MUH" />
//   <row city="Mersin,TR" code="QIN" />
//   <row city="Mersing,MY" code="MEP" />
//   <row city="Merty,AU" code="RTY" />
//   <row city="Meru Kinna,KE" code="JJM" />
//   <row city="Mesa,US" code="MSC" />
//   <row city="Mesquite,US" code="MFH" />
//   <row city="Messina,ZA" code="MEZ" />
//   <row city="Messina,IT" code="QME" />
//   <row city="Metekel,ET" code="MKD" />
//   <row city="Metemma,ET" code="ETE" />
//   <row city="Metlakatla,US" code="MTM" />
//   <row city="Metz,FR" code="MZM" />
//   <row city="Metz Nancy,FR" code="ETZ" />
//   <row city="Mexicali,MX" code="MXL" />
//   <row city="Mexico cities,MX" code="MEX" />
//   <row city="Mfuwe,ZM" code="MFU" />
//   <row city="Miami,US" code="MIO" />
//   <row city="Miami,US" code="MIA" />
//   <row city="Mian Yang,CN" code="MIG" />
//   <row city="Miandrivazo,MG" code="ZVA" />
//   <row city="Mianwali,PK" code="MWD" />
//   <row city="Michigan cities,US" code="MGC" />
//   <row city="Middle Caicos,TC" code="MDS" />
//   <row city="Middlemount,AU" code="MMM" />
//   <row city="Middleton Island,US" code="MDO" />
//   <row city="Middletown,US" code="MWO" />
//   <row city="Midland,US" code="MAF" />
//   <row city="Midway Island,UM" code="MDY" />
//   <row city="Miedzyzdroje,PL" code="ZMC" />
//   <row city="Mikkeli,FI" code="MIK" />
//   <row city="Milan,IT" code="MIL" />
//   <row city="Mildenhall,GB" code="MHZ" />
//   <row city="Mildura,AU" code="MQL" />
//   <row city="Miles,AU" code="WLE" />
//   <row city="Miles cities,US" code="MLS" />
//   <row city="Milford,US" code="MLF" />
//   <row city="Milford Sound,NZ" code="MFN" />
//   <row city="Milingimbi,AU" code="MGT" />
//   <row city="Milledgeville,US" code="MLJ" />
//   <row city="Millinocket,US" code="MLT" />
//   <row city="Millville,US" code="MIV" />
//   <row city="Milos,GR" code="MLO" />
//   <row city="Milton,US" code="NSE" />
//   <row city="Milton Keynes,GB" code="KYN" />
//   <row city="Milwaukee,US" code="MKE" />
//   <row city="Minaki,CA" code="YMI" />
//   <row city="Minami Daito,JP" code="MMD" />
//   <row city="Minatitlan,MX" code="MTT" />
//   <row city="Minchumina,US" code="MHM" />
//   <row city="Minden,DE" code="ZOM" />
//   <row city="Minden,US" code="MEV" />
//   <row city="Mindiptana,ID" code="MDP" />
//   <row city="Mineralnye Vody,RU" code="MRV" />
//   <row city="Miners Bay,CA" code="YAV" />
//   <row city="Minneapolis,US" code="MSP" />
//   <row city="Minnipa,AU" code="MIN" />
//   <row city="Minocqua,US" code="ARV" />
//   <row city="Minot,US" code="MOT" />
//   <row city="Minsk,BY" code="MSQ" />
//   <row city="Minto,US" code="MNT" />
//   <row city="Minvoul,GA" code="MVX" />
//   <row city="Miramar,AR" code="MJR" />
//   <row city="Miramichi,CA" code="YCH" />
//   <row city="Miranda Downs,AU" code="MWY" />
//   <row city="Miri,MY" code="MYY" />
//   <row city="Mirny,RU" code="MJZ" />
//   <row city="Misawa,JP" code="MSJ" />
//   <row city="Misima Island,PG" code="MIS" />
//   <row city="Miskolc,HU" code="MCQ" />
//   <row city="Missoula,US" code="MSO" />
//   <row city="Misurata,LY" code="MRA" />
//   <row city="Mitchell,US" code="MHE" />
//   <row city="Mitiaro Island,CK" code="MOI" />
//   <row city="Mito,JP" code="QIS" />
//   <row city="Mittenwald,DE" code="QWD" />
//   <row city="Mitu,CO" code="MVP" />
//   <row city="Mitzic,GA" code="MZC" />
//   <row city="Miyakejima,JP" code="MYE" />
//   <row city="Miyako Jima,JP" code="MMY" />
//   <row city="Miyazaki,JP" code="KMI" />
//   <row city="Mjolby,SE" code="XXM" />
//   <row city="Mkuze,ZA" code="MZQ" />
//   <row city="Mmabatho,ZA" code="MBD" />
//   <row city="Mo I Rana,NO" code="MQN" />
//   <row city="Moa CU,CU" code="MOA" />
//   <row city="Moab,US" code="CNY" />
//   <row city="Moala,FJ" code="MFJ" />
//   <row city="Moanamani,ID" code="ONI" />
//   <row city="Moanda,CD" code="MNB" />
//   <row city="Moanda,GA" code="MFF" />
//   <row city="Moberly,US" code="MBY" />
//   <row city="Mobile,US" code="MOB" />
//   <row city="Mococa,BR" code="QOA" />
//   <row city="Modena,IT" code="ZMO" />
//   <row city="Modesto,US" code="MOD" />
//   <row city="Moelv,NO" code="XUJ" />
//   <row city="Moers,DE" code="ZON" />
//   <row city="Mogadishu,SO" code="MGQ" />
//   <row city="Mogi Das Cruzes,BR" code="QMI" />
//   <row city="Mogilev,BY" code="MVQ" />
//   <row city="Mohe County,CN" code="OHE" />
//   <row city="Moheli,KM" code="NWA" />
//   <row city="Mohenjodaro,PK" code="MJD" />
//   <row city="Mojave,US" code="MHV" />
//   <row city="Mokhotlong,LS" code="MKH" />
//   <row city="Mokpo,KR" code="MPK" />
//   <row city="Molde,NO" code="MOL" />
//   <row city="Moline,US" code="MLI" />
//   <row city="Mombasa,KE" code="MBA" />
//   <row city="Momeik,MM" code="MOE" />
//   <row city="Monaco,FR" code="XMM" />
//   <row city="Monastir,TN" code="MIR" />
//   <row city="Monbetsu,JP" code="MBE" />
//   <row city="Monclova,MX" code="LOV" />
//   <row city="Moncton,CA" code="YQM" />
//   <row city="Mongu,ZM" code="MNR" />
//   <row city="Monkey Mia,AU" code="MJK" />
//   <row city="Mono,SB" code="MNY" />
//   <row city="Monroe,US" code="MLU" />
//   <row city="Monroeville,US" code="MVC" />
//   <row city="Monrovia,LR" code="MLW" />
//   <row city="Mons,BE" code="QMO" />
//   <row city="Mont Dauphin,FR" code="SCP" />
//   <row city="Mont De Marsen,FR" code="XMJ" />
//   <row city="Mont Joli,CA" code="YYY" />
//   <row city="Mont Tremblant,CA" code="YTM" />
//   <row city="Montague,US" code="SIY" />
//   <row city="Montauban,FR" code="XMW" />
//   <row city="Montauk,US" code="MTP" />
//   <row city="Montbelliard,FR" code="XMF" />
//   <row city="Monte Carlo,MC" code="MCM" />
//   <row city="Monte Dourado,BR" code="MEU" />
//   <row city="Montego Bay,JM" code="MBJ" />
//   <row city="Montelimar,FR" code="XMK" />
//   <row city="Monterey,US" code="MRY" />
//   <row city="Monteria,CO" code="MTR" />
//   <row city="Monterrey,MX" code="MTY" />
//   <row city="Montes Claros,BR" code="MOC" />
//   <row city="Montevideo,US" code="MVE" />
//   <row city="Montevideo,UY" code="MVD" />
//   <row city="Montgomery,US" code="MGJ" />
//   <row city="Montgomery,US" code="MGM" />
//   <row city="Monticello,US" code="MSV" />
//   <row city="Montilla,ES" code="OZU" />
//   <row city="Montlucon,FR" code="MCU" />
//   <row city="Monto,AU" code="MNQ" />
//   <row city="Montpelier,US" code="MPV" />
//   <row city="Montpellier,FR" code="MPL" />
//   <row city="Montreal,CA" code="YMQ" />
//   <row city="Montreux,CH" code="ZJP" />
//   <row city="Montrose,US" code="MTJ" />
//   <row city="Montserrat,DM" code="MNI" />
//   <row city="Moolawatana,AU" code="MWT" />
//   <row city="Moomba,AU" code="MOO" />
//   <row city="Moorabbin,AU" code="MBW" />
//   <row city="Moorea,PF" code="MOZ" />
//   <row city="Moose Jaw,CA" code="YMJ" />
//   <row city="Moosonee,CA" code="YMO" />
//   <row city="Mopti,ML" code="MZI" />
//   <row city="Mora,SE" code="MXX" />
//   <row city="Morafenobe,MG" code="TVA" />
//   <row city="Moranbah,AU" code="MOV" />
//   <row city="Moree,AU" code="MRZ" />
//   <row city="Morehead,PG" code="MHY" />
//   <row city="Morelia,MX" code="MLM" />
//   <row city="Morgantown,US" code="MGW" />
//   <row city="Morges,CH" code="ZJQ" />
//   <row city="Morioka,JP" code="HNA" />
//   <row city="Morlaix,FR" code="MXN" />
//   <row city="Mornington,AU" code="ONG" />
//   <row city="Morobe,PG" code="OBM" />
//   <row city="Morombe,MG" code="MXM" />
//   <row city="Moron,ES" code="OZP" />
//   <row city="Morondava,MG" code="MOQ" />
//   <row city="Moroni,KM" code="YVA" />
//   <row city="Morotai Island,ID" code="OTI" />
//   <row city="Morristown,US" code="MMU" />
//   <row city="Morristown,US" code="MOR" />
//   <row city="Moruroa Atoll,PF" code="UOA" />
//   <row city="Moruya,AU" code="MYA" />
//   <row city="Morzine,FR" code="XMQ" />
//   <row city="Moscow,RU" code="MOW" />
//   <row city="Moser Bay,US" code="KMY" />
//   <row city="Moses Lake,US" code="MWH" />
//   <row city="Mosjoen,NO" code="MJF" />
//   <row city="Moss,NO" code="XKM" />
//   <row city="Moss cities,NO" code="RYG" />
//   <row city="Mossel Bay,ZA" code="MZY" />
//   <row city="Mossendjo,CG" code="MSX" />
//   <row city="Mossoro,BR" code="MVF" />
//   <row city="Mostar,BA" code="OMO" />
//   <row city="Mosteiros,CV" code="MTI" />
//   <row city="Mosul,IQ" code="OSM" />
//   <row city="Mota Lava,VU" code="MTV" />
//   <row city="Motherwell,GB" code="XQW" />
//   <row city="Mouila,GA" code="MJL" />
//   <row city="Moulin Sur Allier,FR" code="XMU" />
//   <row city="Moulmein,MM" code="MNU" />
//   <row city="Moultrie,US" code="MGR" />
//   <row city="Moundou,TD" code="MQQ" />
//   <row city="Mount Cook,NZ" code="MON" />
//   <row city="Mount Holly,US" code="LLY" />
//   <row city="Mount Hotham,AU" code="MHU" />
//   <row city="Mount Isa,AU" code="ISA" />
//   <row city="Mount Magnet,AU" code="MMG" />
//   <row city="Mount Pleasant,US" code="MPS" />
//   <row city="Mount Pleasant,US" code="MOP" />
//   <row city="Mount Pleasant,FK" code="MPN" />
//   <row city="Mount Shasta,US" code="MHS" />
//   <row city="Mount Union,US" code="MUU" />
//   <row city="Mount Vernon,US" code="MVW" />
//   <row city="Mountain Home,US" code="MUO" />
//   <row city="Mountain Home,US" code="WMH" />
//   <row city="Mountain View,US" code="NUQ" />
//   <row city="Mountain Village,US" code="MOU" />
//   <row city="Moutiers,FR" code="QMU" />
//   <row city="Moyale,ET" code="MYS" />
//   <row city="Mpache,NA" code="MPA" />
//   <row city="Mt Cook,NZ" code="GTN" />
//   <row city="Mt Gambier,AU" code="MGB" />
//   <row city="Mt Hagen,PG" code="HGU" />
//   <row city="Mt Pocono,US" code="MPO" />
//   <row city="Mt Vernon,US" code="MVN" />
//   <row city="Mtwara,TZ" code="MYW" />
//   <row city="Muang Xai,LA" code="ODY" />
//   <row city="Mudanjiang,CN" code="MDG" />
//   <row city="Mudgee,AU" code="DGE" />
//   <row city="Muelheim An Der Ruhr,DE" code="ZOO" />
//   <row city="Muenster,DE" code="FMO" />
//   <row city="Muharraq,BH" code="BAH" />
//   <row city="Muharraq Town,BH" code="GBQ" />
//   <row city="Mukah,MY" code="MKM" />
//   <row city="Mukalla,YE" code="MKX" />
//   <row city="Mukeiras,AO" code="UKR" />
//   <row city="Mulga Park,AU" code="MUP" />
//   <row city="Mulhouse,FR" code="MLH" />
//   <row city="Mulhouse Basel,FR" code="EAP" />
//   <row city="Mulia,ID" code="LII" />
//   <row city="Mulka,AU" code="MVK" />
//   <row city="Multan,PK" code="MUX" />
//   <row city="Mulu,MY" code="MZV" />
//   <row city="Mumbai,IN" code="BOM" />
//   <row city="Muncie,US" code="MIE" />
//   <row city="Munda,SB" code="MUA" />
//   <row city="Mungeranie,AU" code="MNE" />
//   <row city="Munich,DE" code="MUC" />
//   <row city="Murcia,ES" code="MJV" />
//   <row city="Muriae,BR" code="QUR" />
//   <row city="Murmansk,RU" code="MMK" />
//   <row city="Murray,US" code="CEY" />
//   <row city="Murray Island,AU" code="MYI" />
//   <row city="Mus Tr,TR" code="MSR" />
//   <row city="Muscat,OM" code="MCT" />
//   <row city="Muscatine,US" code="MUT" />
//   <row city="Muscle Shoals,US" code="MSL" />
//   <row city="Muskegon,US" code="MKG" />
//   <row city="Muskogee,US" code="MKO" />
//   <row city="Muskoka,CA" code="YQA" />
//   <row city="Muskrat Lake Dam Indian Rsve,CA" code="MSA" />
//   <row city="Musoma,TZ" code="MUZ" />
//   <row city="Mussau,PG" code="MWU" />
//   <row city="Mustique,DM" code="MQS" />
//   <row city="Mutare,ZW" code="UTA" />
//   <row city="Muting,ID" code="MUF" />
//   <row city="Muttaburra,AU" code="UTB" />
//   <row city="Muzzafarpu,IN" code="MZU" />
//   <row city="Mwanza,TZ" code="MWZ" />
//   <row city="Myeik,MM" code="MGZ" />
//   <row city="Myitkyina,MM" code="MYT" />
//   <row city="Mykonos,GR" code="JMK" />
//   <row city="Myrdal,NO" code="XOL" />
//   <row city="Myrtle Beach,US" code="MYR" />
//   <row city="Mys Kamenny,RU" code="YMK" />
//   <row city="Mysore,IN" code="MYQ" />
//   <row city="Mytilene,GR" code="MJT" />
//   <row city="Mzamba,ZA" code="MZF" />
//   <row city="Mzuzu,MW" code="ZZU" />
//   <row city="N Dende,GA" code="KDN" />
//   <row city="N Djamena,TD" code="NDJ" />
//   <row city="N Dola,ZM" code="NLA" />
//   <row city="N Gaoundere,CM" code="NGE" />
//   <row city="N Zeto,AO" code="ARZ" />
//   <row city="NEW IBERIA,US" code="ARA" />
//   <row city="NORRIDGEWOCK,US" code="OWK" />
//   <row city="NYKOBING MORS,DK" code="ZAW" />
//   <row city="Naberevnye Chelny,RU" code="NBC" />
//   <row city="Nabire,ID" code="NBX" />
//   <row city="Nacala,MZ" code="MNC" />
//   <row city="Nachingwea,TZ" code="NCH" />
//   <row city="Nacogdoches,US" code="OCH" />
//   <row city="Nadi,FJ" code="NAN" />
//   <row city="Nador,MA" code="NDR" />
//   <row city="Nadym,RU" code="NYM" />
//   <row city="Naga,PH" code="WNP" />
//   <row city="Nagano,JP" code="QNG" />
//   <row city="Nagasaki,JP" code="NGS" />
//   <row city="Nagoya,JP" code="NGO" />
//   <row city="Nagpur,IN" code="NAG" />
//   <row city="Naha,ID" code="NAH" />
//   <row city="Nain,CA" code="YDP" />
//   <row city="Nairobi,KE" code="NBO" />
//   <row city="Nakashibetsu,JP" code="SHB" />
//   <row city="Nakchivan,AZ" code="NAJ" />
//   <row city="Nakhon Phanom,TH" code="KOP" />
//   <row city="Nakhon Ratchasima,TH" code="NAK" />
//   <row city="Nakhon Si Thammarat,TH" code="NST" />
//   <row city="Nakina,CA" code="YQN" />
//   <row city="Naknek,US" code="NNK" />
//   <row city="Nakuru,KE" code="NUU" />
//   <row city="Nalchik,RU" code="NAL" />
//   <row city="Namangan,UZ" code="NMA" />
//   <row city="Namatanai,PG" code="ATN" />
//   <row city="Nambour,AU" code="NBR" />
//   <row city="Namdrik,MH" code="NDK" />
//   <row city="Namibe,AO" code="MSZ" />
//   <row city="Namlea,ID" code="NAM" />
//   <row city="Nampula,MZ" code="APL" />
//   <row city="Namsos,NO" code="OSY" />
//   <row city="Namure,BE" code="QNM" />
//   <row city="Nan Th,TH" code="NNT" />
//   <row city="Nanaimo,CA" code="YCD" />
//   <row city="Nanchang,CN" code="KHN" />
//   <row city="Nanchong,CN" code="NAO" />
//   <row city="Nancy,FR" code="ENC" />
//   <row city="Nanded,IN" code="NDC" />
//   <row city="Nangasuri Aru Island,ID" code="BJK" />
//   <row city="Nanisivik,CA" code="YSR" />
//   <row city="Nanjing,CN" code="NKG" />
//   <row city="Nanning,CN" code="NNG" />
//   <row city="Nanortalik,GL" code="JNN" />
//   <row city="Nantes,FR" code="NTE" />
//   <row city="Nantucket,US" code="ACK" />
//   <row city="Nanyang,CN" code="NNY" />
//   <row city="Nanyuki,KE" code="NYK" />
//   <row city="Naoro,PG" code="NOO" />
//   <row city="Napa,US" code="APC" />
//   <row city="Napakiak,US" code="WNA" />
//   <row city="Napanee,CA" code="XIF" />
//   <row city="Napaskiak,US" code="PKA" />
//   <row city="Napasoq,GL" code="QJT" />
//   <row city="Napier Hastings,NZ" code="NPE" />
//   <row city="Naples,US" code="APF" />
//   <row city="Naples,IT" code="NAP" />
//   <row city="Napuka Island,PF" code="NAU" />
//   <row city="Naracoorte,AU" code="NAC" />
//   <row city="Narathiwat,TH" code="NAW" />
//   <row city="Narbonne,FR" code="NNE" />
//   <row city="Nare,CO" code="NAR" />
//   <row city="Narrabri,AU" code="NAA" />
//   <row city="Narrandera,AU" code="NRA" />
//   <row city="Narromine,AU" code="QRM" />
//   <row city="Narsaq,GL" code="JNS" />
//   <row city="Narsaq Kujalleq,GL" code="QFN" />
//   <row city="Narsarsuaq,GL" code="UAK" />
//   <row city="Narvik,NO" code="NVK" />
//   <row city="Naryan Mar,RU" code="NNM" />
//   <row city="Nashua,US" code="ASH" />
//   <row city="Nashville,US" code="BNA" />
//   <row city="Nasik,IN" code="ISK" />
//   <row city="Nassau,BS" code="NAS" />
//   <row city="Nassjo,SE" code="XWX" />
//   <row city="Natal,BR" code="NAT" />
//   <row city="Natashquan,CA" code="YNA" />
//   <row city="Natchez,US" code="HEZ" />
//   <row city="Natuashish,CA" code="YNP" />
//   <row city="Naukiti Bay,US" code="NKI" />
//   <row city="Nauru Island,NR" code="INU" />
//   <row city="Navalmoral de la Mata,ES" code="QWW" />
//   <row city="Navegantes,BR" code="NVT" />
//   <row city="Navoi,UZ" code="NVI" />
//   <row city="Nawabshah,PK" code="WNS" />
//   <row city="Naxos,GR" code="JNX" />
//   <row city="Nay Pyi Taw,MM" code="NYT" />
//   <row city="Ndele,CF" code="NDL" />
//   <row city="Necochea,AR" code="NEC" />
//   <row city="Necocli,CO" code="NCI" />
//   <row city="Needles,US" code="EED" />
//   <row city="Neerlerit Inaat,GL" code="CNP" />
//   <row city="Nefteyugansk,RU" code="NFG" />
//   <row city="Negril,JM" code="NEG" />
//   <row city="Neiva,CO" code="NVA" />
//   <row city="Nejran,SA" code="EAM" />
//   <row city="Nelaug,NO" code="XHL" />
//   <row city="Nelson,NZ" code="NSN" />
//   <row city="Nelson Lagoon,US" code="NLG" />
//   <row city="Nelspruit,ZA" code="NLP" />
//   <row city="Nema,MR" code="EMN" />
//   <row city="Nenana,US" code="ENN" />
//   <row city="Nepalgunj,NP" code="KEP" />
//   <row city="Neryungri,RU" code="NER" />
//   <row city="Nesbyen,NO" code="XUL" />
//   <row city="Neslandsvatn,NO" code="XUM" />
//   <row city="Neubrandenburg,DE" code="FNB" />
//   <row city="Neuchatel,CH" code="QNC" />
//   <row city="Neuilly Sur Seine,FR" code="QNL" />
//   <row city="Neumuenster,DE" code="EUM" />
//   <row city="Neunkirchen,DE" code="ZOP" />
//   <row city="Neuquen,AR" code="NQN" />
//   <row city="Neuss,DE" code="ZOQ" />
//   <row city="Neustadt An Der Weinstrasse,DE" code="ZOR" />
//   <row city="Neuwied,DE" code="ZOU" />
//   <row city="Nevada,US" code="NVD" />
//   <row city="Nevers,FR" code="NVS" />
//   <row city="Nevis,KN" code="NEV" />
//   <row city="Nevsehir,TR" code="NAV" />
//   <row city="New Bedford,US" code="EWB" />
//   <row city="New Bern,US" code="EWN" />
//   <row city="New Carlisle,CA" code="XEL" />
//   <row city="New Haven,US" code="HVN" />
//   <row city="New London,US" code="GON" />
//   <row city="New Orleans,US" code="MSY" />
//   <row city="New Plymouth,NZ" code="NPL" />
//   <row city="New Richmond,CA" code="XEM" />
//   <row city="New Richmond,US" code="RNH" />
//   <row city="New Stuyahok,US" code="KNW" />
//   <row city="New Ulm,US" code="ULM" />
//   <row city="New Westminster,CA" code="YBD" />
//   <row city="New York,US" code="NYC" />
//   <row city="Newark,GB" code="XNK" />
//   <row city="Newark,US" code="EWR" />
//   <row city="Newburgh,US" code="SWF" />
//   <row city="Newbury,GB" code="EWY" />
//   <row city="Newcastle,CA" code="XEY" />
//   <row city="Newcastle,GB" code="NCL" />
//   <row city="Newcastle,ZA" code="NCS" />
//   <row city="Newcastle,AU" code="NTL" />
//   <row city="Newman,AU" code="ZNE" />
//   <row city="Newport,GB" code="XNE" />
//   <row city="Newport,US" code="ONP" />
//   <row city="Newport,US" code="NPT" />
//   <row city="Newport News,US" code="PHF" />
//   <row city="Newquay,GB" code="NQY" />
//   <row city="Newtok,US" code="WWT" />
//   <row city="Newton,US" code="TNU" />
//   <row city="Newton,US" code="EWK" />
//   <row city="Nha Trang,VN" code="NHA" />
//   <row city="Niagara Falls,CA" code="XLV" />
//   <row city="Niagara Falls,US" code="IAG" />
//   <row city="Niamey,NE" code="NIM" />
//   <row city="Niaqornaarsuk,GL" code="QMK" />
//   <row city="Nice,FR" code="NCE" />
//   <row city="Nicosia,CY" code="NIC" />
//   <row city="Nicoya,CR" code="NCT" />
//   <row city="Nieuw Nickerie,SR" code="ICK" />
//   <row city="Nightmute,US" code="NME" />
//   <row city="Niigata,JP" code="KIJ" />
//   <row city="Nikolai,US" code="NIB" />
//   <row city="Nikolayevsk Na Amure,RU" code="NLI" />
//   <row city="Nikolski,US" code="IKO" />
//   <row city="Nimes,FR" code="FNI" />
//   <row city="Ningbo,CN" code="NGB" />
//   <row city="Ninglang,CN" code="NLH" />
//   <row city="Ninilchik,US" code="NIN" />
//   <row city="Nioro,ML" code="NIX" />
//   <row city="Niort,FR" code="NIT" />
//   <row city="Nis Rs,RS" code="INI" />
//   <row city="Nissan,PG" code="IIS" />
//   <row city="Niteroi,BR" code="QNT" />
//   <row city="Niuatoputapu,TO" code="NTT" />
//   <row city="Niue Island,NU" code="IUE" />
//   <row city="Nizhnevartovsk,RU" code="NJC" />
//   <row city="Nizhniy Novgorod,RU" code="GOJ" />
//   <row city="Nizunau,KI" code="NIG" />
//   <row city="Nkaus,LS" code="NKU" />
//   <row city="Nkayi,CG" code="NKY" />
//   <row city="Noatak,US" code="WTK" />
//   <row city="Nogales,US" code="OLS" />
//   <row city="Nogales,MX" code="NOG" />
//   <row city="Nogeh,IR" code="NUJ" />
//   <row city="Nogliki,RU" code="NGK" />
//   <row city="Nojabrxsk,RU" code="NOJ" />
//   <row city="Nomad River,PG" code="NOM" />
//   <row city="Nome,US" code="OME" />
//   <row city="Nondalton,US" code="NNL" />
//   <row city="Nonouti,KI" code="NON" />
//   <row city="Noorvik,US" code="ORV" />
//   <row city="Noosa,AU" code="NSA" />
//   <row city="Noosaville,AU" code="NSV" />
//   <row city="Nordagutu,NO" code="XUO" />
//   <row city="Norderney,DE" code="NRD" />
//   <row city="Norderstedt,DE" code="ZOV" />
//   <row city="Nordfjordur,IS" code="NOR" />
//   <row city="Nordholz Spieka,DE" code="NDZ" />
//   <row city="Nordhorn,DE" code="ZOW" />
//   <row city="Norfolk,US" code="OFK" />
//   <row city="Norfolk,US" code="ORF" />
//   <row city="Norfolk Island,NF" code="NLK" />
//   <row city="Norilsk,RU" code="NSK" />
//   <row city="Norman Wells,CA" code="YVQ" />
//   <row city="Normanton,AU" code="NTN" />
//   <row city="Norrkoping,SE" code="NRK" />
//   <row city="Norseman,AU" code="NSM" />
//   <row city="Norsup,VU" code="NUS" />
//   <row city="North Battleford,CA" code="YQW" />
//   <row city="North Bay,CA" code="YYB" />
//   <row city="North Bend,US" code="OTH" />
//   <row city="North Caicos,TC" code="NCA" />
//   <row city="North Eleuthera,BS" code="ELH" />
//   <row city="North Grand Canyon,US" code="NGC" />
//   <row city="North Platte,US" code="LBF" />
//   <row city="North Ronaldsay,GB" code="NRL" />
//   <row city="North Spirit Indian Reserve,CA" code="YNO" />
//   <row city="Northallerton,GB" code="XNO" />
//   <row city="Northampton,GB" code="ORM" />
//   <row city="Northolt,GB" code="NHT" />
//   <row city="Northway,US" code="ORT" />
//   <row city="Norwalk,US" code="ORQ" />
//   <row city="Norway House,CA" code="YNE" />
//   <row city="Norwich,GB" code="NWI" />
//   <row city="Norwood,US" code="OWD" />
//   <row city="Nossi Be,MG" code="NOS" />
//   <row city="Notodden,NO" code="NTB" />
//   <row city="Nottingham,GB" code="XNM" />
//   <row city="Nottingham Uk,GB" code="NQT" />
//   <row city="Nouadhibou,MR" code="NDB" />
//   <row city="Nouakchott,MR" code="NKC" />
//   <row city="Noumea,NC" code="NOU" />
//   <row city="Nova Friburgo,BR" code="QGJ" />
//   <row city="Novato,US" code="NOT" />
//   <row city="Novgorod,RU" code="NVR" />
//   <row city="Novi Sad,RS" code="QND" />
//   <row city="Novo Hamburgo,BR" code="QHV" />
//   <row city="Novo Progresso,BR" code="NPR" />
//   <row city="Novokuznetsk,RU" code="NOZ" />
//   <row city="Novorossiysk,RU" code="NOI" />
//   <row city="Novosibirsk,RU" code="OVB" />
//   <row city="Novy Urengoy,RU" code="NUX" />
//   <row city="Nowata,PG" code="NWT" />
//   <row city="Nowra,AU" code="NOA" />
//   <row city="Nowy Dwor Mazowiecki,PL" code="WMI" />
//   <row city="Nowy Targ,PL" code="QWS" />
//   <row city="Nueva Gerona,CU" code="GER" />
//   <row city="Nuevo Laredo,MX" code="NLD" />
//   <row city="Nuiqsut,US" code="NUI" />
//   <row city="Nuku,PG" code="UKU" />
//   <row city="Nuku Alofa,TO" code="TBU" />
//   <row city="Nuku Hiva,PF" code="NHV" />
//   <row city="Nukus,UZ" code="NCU" />
//   <row city="Nukutavake,PF" code="NUK" />
//   <row city="Nukutepipi,PF" code="NKP" />
//   <row city="Nulato,US" code="NUL" />
//   <row city="Nullagine,AU" code="NLL" />
//   <row city="Nullarbor,AU" code="NUR" />
//   <row city="Numfoor,ID" code="FOO" />
//   <row city="Nunapitchuk,US" code="NUP" />
//   <row city="Nuneaton,GB" code="XNV" />
//   <row city="Nuoro,IT" code="QNU" />
//   <row city="Nuqui,CO" code="NQU" />
//   <row city="Nuremberg,DE" code="NUE" />
//   <row city="Nuuk,GL" code="GOH" />
//   <row city="Nuussuaq,GL" code="NSQ" />
//   <row city="Nuwara Eliya,LK" code="NUA" />
//   <row city="Nyac,US" code="ZNC" />
//   <row city="Nyagan,RU" code="NYA" />
//   <row city="Nyala,SD" code="UYL" />
//   <row city="Nyaung,MM" code="NYU" />
//   <row city="Nyborg,DK" code="ZIB" />
//   <row city="Nyeri,KE" code="NYE" />
//   <row city="Nyingchi,CN" code="LZY" />
//   <row city="Nykoing Sjaelland,DK" code="ZIJ" />
//   <row city="Nykoping,SE" code="XWZ" />
//   <row city="Nyngan,AU" code="NYN" />
//   <row city="Nyon,CH" code="ZRN" />
//   <row city="Nyurba,RU" code="NYR" />
//   <row city="OAKLAND,US" code="ODM" />
//   <row city="OLTEN,CH" code="ZJU" />
//   <row city="ORANGEBURG,US" code="OGB" />
//   <row city="OROVILLE,US" code="OVE" />
//   <row city="OZARK,US" code="OZR" />
//   <row city="Oak Harbor,US" code="ODW" />
//   <row city="Oakey,AU" code="OKY" />
//   <row city="Oakland,US" code="OAK" />
//   <row city="Oakville,CA" code="XOK" />
//   <row city="Oamaru,NZ" code="OAM" />
//   <row city="Oaxaca,MX" code="OAX" />
//   <row city="Oban,GB" code="OBN" />
//   <row city="Oberammergau,DE" code="ZOX" />
//   <row city="Oberhausen,DE" code="ZOY" />
//   <row city="Oberpfaffenhofen,DE" code="OBF" />
//   <row city="Obihiro,JP" code="OBO" />
//   <row city="Ocala,US" code="OCF" />
//   <row city="Ocana,CO" code="OCV" />
//   <row city="Ocean cities,US" code="OCE" />
//   <row city="Ocean Reef,US" code="OCA" />
//   <row city="Oceanside,US" code="OCN" />
//   <row city="Ocho Rios,JM" code="OCJ" />
//   <row city="Odate Noshiro,JP" code="ONJ" />
//   <row city="Odense,DK" code="ODE" />
//   <row city="Odessa,UA" code="ODS" />
//   <row city="Odienne,CI" code="KEO" />
//   <row city="Offenbach,DE" code="ZOZ" />
//   <row city="Offenburg,DE" code="ZPA" />
//   <row city="Ogallala,US" code="OGA" />
//   <row city="Ogden,US" code="OGD" />
//   <row city="Ogdensburg,US" code="OGS" />
//   <row city="Ogobsucum,PA" code="OGM" />
//   <row city="Ohakea,NZ" code="OHA" />
//   <row city="Ohotsk,RU" code="OHO" />
//   <row city="Ohrid,MK" code="OHD" />
//   <row city="Oita,JP" code="OIT" />
//   <row city="Okaba,ID" code="OKQ" />
//   <row city="Okaukuejo,NA" code="OKF" />
//   <row city="Okayama,JP" code="OKJ" />
//   <row city="Okeechobee,US" code="OBE" />
//   <row city="Okha,RU" code="OHH" />
//   <row city="Oki Island,JP" code="OKI" />
//   <row city="Okinawa,JP" code="OKA" />
//   <row city="Okino Erabu,JP" code="OKE" />
//   <row city="Oklahoma cities,US" code="OKC" />
//   <row city="Okondja,GA" code="OKN" />
//   <row city="Okoyo,CG" code="OKG" />
//   <row city="Oksapmin,PG" code="OKP" />
//   <row city="Oksibil,ID" code="OKL" />
//   <row city="Okushiri,JP" code="OIR" />
//   <row city="Olafsfjordur,IS" code="OFJ" />
//   <row city="Olafsvik,IS" code="OLI" />
//   <row city="Olanchito,HN" code="OAN" />
//   <row city="Olbia,IT" code="OLB" />
//   <row city="Old Crow,CA" code="YOC" />
//   <row city="Old Harbor,US" code="OLH" />
//   <row city="Oldenburg,DE" code="ZPD" />
//   <row city="Olenek,RU" code="ONK" />
//   <row city="Olga Bay,US" code="KOY" />
//   <row city="Olomouc,CZ" code="OLO" />
//   <row city="Olsztyn,PL" code="QYO" />
//   <row city="Olympia,US" code="OLM" />
//   <row city="Olympic Dam,AU" code="OLP" />
//   <row city="Omaha,US" code="OMA" />
//   <row city="Omboue,GA" code="OMB" />
//   <row city="Omiya,JP" code="QOM" />
//   <row city="Omsk,RU" code="OMS" />
//   <row city="Ondangwa,NA" code="OND" />
//   <row city="Oneonta,US" code="ONH" />
//   <row city="Ononge,PG" code="ONB" />
//   <row city="Onotoa,KI" code="OOT" />
//   <row city="Onslow,AU" code="ONS" />
//   <row city="Ontario,US" code="ONO" />
//   <row city="Ontario,US" code="ONT" />
//   <row city="Open Bay,PG" code="OPB" />
//   <row city="Opole,PL" code="QPM" />
//   <row city="Oppdal,NO" code="XOD" />
//   <row city="Oradea,RO" code="OMR" />
//   <row city="Oran,DZ" code="ORN" />
//   <row city="Orange,FR" code="XOG" />
//   <row city="Orange,AU" code="OAG" />
//   <row city="Oranjemund,NA" code="OMD" />
//   <row city="Ordos,CN" code="DSN" />
//   <row city="Ordu,TR" code="QOR" />
//   <row city="Ordu Giresun,TR" code="OGU" />
//   <row city="Orebro Bofors,SE" code="ORB" />
//   <row city="Orenburg,RU" code="REN" />
//   <row city="Oristano,IT" code="FNU" />
//   <row city="Orland,NO" code="OLA" />
//   <row city="Orlando,US" code="ORL" />
//   <row city="Orleans,FR" code="ORE" />
//   <row city="Ornskoldsvik,SE" code="OER" />
//   <row city="Orpheus Island,AU" code="ORS" />
//   <row city="Orsk,RU" code="OSW" />
//   <row city="Orsta Volda,NO" code="HOV" />
//   <row city="Oruro,BO" code="ORU" />
//   <row city="Osage Beach,US" code="OSB" />
//   <row city="Osaka,JP" code="OSA" />
//   <row city="Osasco,BR" code="QOC" />
//   <row city="Osceola,US" code="OEO" />
//   <row city="Osh Kg,KG" code="OSS" />
//   <row city="Oshakati,NA" code="OHI" />
//   <row city="Oshawa,CA" code="YOO" />
//   <row city="Oshima,JP" code="OIM" />
//   <row city="Oshkosh,US" code="OSH" />
//   <row city="Osijek,HR" code="OSI" />
//   <row city="Oskarshamn,SE" code="OSK" />
//   <row city="Oslo,NO" code="OSL" />
//   <row city="Osnabruck,DE" code="ZPE" />
//   <row city="Osorno,CL" code="ZOS" />
//   <row city="Ostende,BE" code="OST" />
//   <row city="Ostersund,SE" code="OSD" />
//   <row city="Ostrava,CZ" code="OSR" />
//   <row city="Ostrow Wielkopolski,PL" code="QDG" />
//   <row city="Otaru,JP" code="QOT" />
//   <row city="Ottawa,CA" code="YOW" />
//   <row city="Ottumwa,US" code="OTM" />
//   <row city="Otu Co,CO" code="OTU" />
//   <row city="Ouagadougou,BF" code="OUA" />
//   <row city="Ouargla,DZ" code="OGX" />
//   <row city="Oudtshoorn,ZA" code="OUH" />
//   <row city="Ouesso,CG" code="OUE" />
//   <row city="Oujda,MA" code="OUD" />
//   <row city="Oulu,FI" code="OUL" />
//   <row city="Ourense,ES" code="OUQ" />
//   <row city="Ourilandia,BR" code="OIA" />
//   <row city="Ourinhos,BR" code="OUS" />
//   <row city="Ourzazate,MA" code="OZZ" />
//   <row city="Ouvea,NC" code="UVE" />
//   <row city="Ouzinkie,US" code="KOZ" />
//   <row city="Ovalle,CL" code="OVL" />
//   <row city="Ovda,IL" code="VDA" />
//   <row city="Oviedo,ES" code="OVI" />
//   <row city="Owando,CG" code="FTX" />
//   <row city="Owatonna,US" code="OWA" />
//   <row city="Owen Sound,CA" code="YOS" />
//   <row city="Owensboro,US" code="OWB" />
//   <row city="Owerri,NG" code="QOW" />
//   <row city="Oxford,US" code="OXD" />
//   <row city="Oxford,GB" code="OXF" />
//   <row city="Oxford House,CA" code="YOH" />
//   <row city="Oxnard,US" code="OXR" />
//   <row city="Oyem,GA" code="OYE" />
//   <row city="Ozamis cities,PH" code="OZC" />
//   <row city="Ozona,US" code="OZA" />
//   <row city="PECOS,US" code="PEQ" />
//   <row city="Paamiut,GL" code="JFR" />
//   <row city="Pacific Harbour,FJ" code="PHR" />
//   <row city="Padang,ID" code="PDG" />
//   <row city="Paderborn,DE" code="PAD" />
//   <row city="Padova,IT" code="QPA" />
//   <row city="Paducah,US" code="PAH" />
//   <row city="Pagadian,PH" code="PAG" />
//   <row city="Page,US" code="PGA" />
//   <row city="Pago Pago,AS" code="PPG" />
//   <row city="Pagosa Springs,US" code="PGO" />
//   <row city="Pahokee,US" code="PHK" />
//   <row city="Pai cities,TH" code="PYY" />
//   <row city="Paimiut,US" code="PMU" />
//   <row city="Painesville,US" code="PVZ" />
//   <row city="Pajala,SE" code="PJA" />
//   <row city="Pakse,LA" code="PKZ" />
//   <row city="Pakuashipi,CA" code="YIF" />
//   <row city="Palacios,HN" code="PCH" />
//   <row city="Palanga,LT" code="PLQ" />
//   <row city="Palangkaraya,ID" code="PKY" />
//   <row city="Palanquero,CO" code="PAL" />
//   <row city="Palapye,BW" code="QPH" />
//   <row city="Palembang,ID" code="PLM" />
//   <row city="Palencia,ES" code="PCI" />
//   <row city="Palenque,MX" code="PQM" />
//   <row city="Palermo,IT" code="PMO" />
//   <row city="Palestine,US" code="PSN" />
//   <row city="Palm Desert,US" code="UDD" />
//   <row city="Palm Island,AU" code="PMK" />
//   <row city="Palm Springs,US" code="PSP" />
//   <row city="Palma Mallorca,ES" code="PMI" />
//   <row city="Palmar,CR" code="PMZ" />
//   <row city="Palmas,BR" code="PMW" />
//   <row city="Palmdale,US" code="PMD" />
//   <row city="Palmer,US" code="PAQ" />
//   <row city="Palmerston,NZ" code="PMR" />
//   <row city="Palo Alto,US" code="PAO" />
//   <row city="Palopo,ID" code="LLO" />
//   <row city="Palu,ID" code="PLW" />
//   <row city="Pamana cities,US" code="ECP" />
//   <row city="Pambwa,PG" code="PAW" />
//   <row city="Pamol,MY" code="PAY" />
//   <row city="Pamplona,ES" code="PNA" />
//   <row city="Panama cities,US" code="PFN" />
//   <row city="Panama cities,PA" code="PTY" />
//   <row city="Panambi,BR" code="QMB" />
//   <row city="Pancevo,RS" code="QBG" />
//   <row city="Pandie Pandie,AU" code="PDE" />
//   <row city="Panevezys,LT" code="PNV" />
//   <row city="Pangkalanbuun,ID" code="PKN" />
//   <row city="Pangkalpinang,ID" code="PGK" />
//   <row city="Pangkor,MY" code="PKG" />
//   <row city="Pangnirtung,CA" code="YXP" />
//   <row city="Panguitch,US" code="PNU" />
//   <row city="Panjgur,PK" code="PJG" />
//   <row city="Pantelleria,IT" code="PNL" />
//   <row city="Pantnagar,IN" code="PGH" />
//   <row city="Panzhihua,CN" code="PZI" />
//   <row city="Paonia,US" code="WPO" />
//   <row city="Papa Westray,GB" code="PPW" />
//   <row city="Papeete,PF" code="PPT" />
//   <row city="Paphos,CY" code="PFO" />
//   <row city="Par GB,GB" code="PCW" />
//   <row city="Paraburdoo,AU" code="PBO" />
//   <row city="Paragould,US" code="PGR" />
//   <row city="Paramakatoi,GY" code="PMT" />
//   <row city="Paramaribo,SR" code="PBM" />
//   <row city="Parana,AR" code="PRA" />
//   <row city="Paranagua,BR" code="PNG" />
//   <row city="Paranaiba,BR" code="PBB" />
//   <row city="Paraparaumu,NZ" code="PPQ" />
//   <row city="Parasi,SB" code="PRS" />
//   <row city="Pardubice,CZ" code="PED" />
//   <row city="Parent,CA" code="XFE" />
//   <row city="Parintins,BR" code="PIN" />
//   <row city="Paris,FR" code="PAR" />
//   <row city="Paris,US" code="PHT" />
//   <row city="Paris,US" code="PRX" />
//   <row city="Paris cities,FR" code="XJY" />
//   <row city="Park Rapids,US" code="PKD" />
//   <row city="Parkersburg,US" code="PKB" />
//   <row city="Parkes,AU" code="PKE" />
//   <row city="Parks,US" code="KPK" />
//   <row city="Parksville,CA" code="XPB" />
//   <row city="Parma,IT" code="PMF" />
//   <row city="Parnaiba,BR" code="PHB" />
//   <row city="Parnamirim,BR" code="QEU" />
//   <row city="Parnu,EE" code="EPU" />
//   <row city="Paro,BT" code="PBH" />
//   <row city="Paros,GR" code="PAS" />
//   <row city="Parry Sound,CA" code="YPD" />
//   <row city="Parsons,US" code="PPF" />
//   <row city="Pasadena,US" code="JPD" />
//   <row city="Pascagoula,US" code="PGL" />
//   <row city="Pasco,US" code="PSC" />
//   <row city="Pasewalk,DE" code="ZSK" />
//   <row city="Pasighat,IN" code="IXT" />
//   <row city="Pasni,PK" code="PSI" />
//   <row city="Paso De Los Libres,AR" code="AOL" />
//   <row city="Paso Robles,US" code="PRB" />
//   <row city="Passau,DE" code="ZPF" />
//   <row city="Passo Fundo,BR" code="PFB" />
//   <row city="Passos,BR" code="PSW" />
//   <row city="Pastaza,EC" code="PTZ" />
//   <row city="Pasto,CO" code="PSO" />
//   <row city="Pathankot,IN" code="IXP" />
//   <row city="Patna,IN" code="PAT" />
//   <row city="Pato Branco,BR" code="PTO" />
//   <row city="Patong Beach,TH" code="PBS" />
//   <row city="Patos De Minas,BR" code="POJ" />
//   <row city="Patras,GR" code="GPA" />
//   <row city="Patreksfjordur,IS" code="PFJ" />
//   <row city="Pattani,TH" code="PAN" />
//   <row city="Pattaya,TH" code="PYX" />
//   <row city="Patuxent River,US" code="NHK" />
//   <row city="Pau Fr,FR" code="PUF" />
//   <row city="Pauk,MM" code="PAU" />
//   <row city="Paulo Afonso,BR" code="PAV" />
//   <row city="Pauloff Harbor,US" code="KPH" />
//   <row city="Pavlodar,KZ" code="PWQ" />
//   <row city="Paysandu,UY" code="PDU" />
//   <row city="Payson,US" code="PJB" />
//   <row city="Peace River,CA" code="YPE" />
//   <row city="Peach Springs,US" code="PGS" />
//   <row city="Pecs,HU" code="PEV" />
//   <row city="Pedasi,PA" code="PDM" />
//   <row city="Pedro Bay,US" code="PDB" />
//   <row city="Peenemuende,DE" code="PEF" />
//   <row city="Peine,DE" code="ZPG" />
//   <row city="Pekanbaru,ID" code="PKU" />
//   <row city="Pelaneng,LS" code="PEL" />
//   <row city="Pelican,US" code="PEC" />
//   <row city="Pell cities,US" code="PLR" />
//   <row city="Pellston,US" code="PLN" />
//   <row city="Pelly Bay,CA" code="YBB" />
//   <row city="Pelotas,BR" code="PET" />
//   <row city="Pemba,TZ" code="PMA" />
//   <row city="Pemba,MZ" code="POL" />
//   <row city="Pembroke,CA" code="YTA" />
//   <row city="Penang,MY" code="PEN" />
//   <row city="Pender Harbour,CA" code="YPT" />
//   <row city="Pendleton,US" code="PDT" />
//   <row city="Penglai,CN" code="PNJ" />
//   <row city="Penneshaw,AU" code="PEA" />
//   <row city="Penrith,GB" code="XPF" />
//   <row city="Pensacola,US" code="PNS" />
//   <row city="Penticton,CA" code="YYF" />
//   <row city="Penza,RU" code="PEZ" />
//   <row city="Penzance,GB" code="PZE" />
//   <row city="Peoria,US" code="PIA" />
//   <row city="Perce,CA" code="XFG" />
//   <row city="Percex,CA" code="XGF" />
//   <row city="Pereira,CO" code="PEI" />
//   <row city="Perigueux,FR" code="PGX" />
//   <row city="Perito Moreno,AR" code="PMQ" />
//   <row city="Perm,RU" code="PEE" />
//   <row city="Perpignan,FR" code="PGF" />
//   <row city="Perry,US" code="PRO" />
//   <row city="Perryville,US" code="KPV" />
//   <row city="Perth,AU" code="PER" />
//   <row city="Perth,GB" code="PSL" />
//   <row city="Peru,US" code="VYS" />
//   <row city="Perugia,IT" code="PEG" />
//   <row city="Pescara,IT" code="PSR" />
//   <row city="Peschiei,IT" code="PEJ" />
//   <row city="Peshawar,PK" code="PEW" />
//   <row city="Petawawa,CA" code="YWA" />
//   <row city="Peterborough,GB" code="XVH" />
//   <row city="Peterborough,CA" code="YPQ" />
//   <row city="Petersburg,US" code="PSG" />
//   <row city="Petersburg,US" code="PTB" />
//   <row city="Petrolina,BR" code="PNZ" />
//   <row city="Petropavlovsk,KZ" code="PPK" />
//   <row city="Petropavlovsk Kamchatskiy,RU" code="PKC" />
//   <row city="Petropolis,BR" code="QPE" />
//   <row city="Petrozavodsk,RU" code="PES" />
//   <row city="Pevek,RU" code="PWE" />
//   <row city="Pforzheim,DE" code="UPF" />
//   <row city="Phalaborwa,ZA" code="PHW" />
//   <row city="Phan Thiet,VN" code="PHH" />
//   <row city="Phaplu,NP" code="PPL" />
//   <row city="Philadelphia,US" code="PHL" />
//   <row city="Philipsburg,US" code="PSB" />
//   <row city="Phitsanulok,TH" code="PHS" />
//   <row city="Phnom Penh,KH" code="PNH" />
//   <row city="Phoenix,US" code="PHX" />
//   <row city="Phoenix cities,US" code="AZA" />
//   <row city="Phrae,TH" code="PRH" />
//   <row city="Phu Quoc,VN" code="PQC" />
//   <row city="Phuket,TH" code="HKT" />
//   <row city="Piacenza,IT" code="QPZ" />
//   <row city="Piatra Neamt,RO" code="QPN" />
//   <row city="Picayune,US" code="PCU" />
//   <row city="Pickle Lake,CA" code="YPL" />
//   <row city="Pico Island,PT" code="PIX" />
//   <row city="Picton,NZ" code="PCN" />
//   <row city="Piedras Negras,MX" code="PDS" />
//   <row city="Pierre,US" code="PIR" />
//   <row city="Piestany,SK" code="PZY" />
//   <row city="Pietermaritzburg,ZA" code="PZB" />
//   <row city="Pikeville,US" code="PVL" />
//   <row city="Pikwitonei,CA" code="PIW" />
//   <row city="Pilot Point,US" code="PIP" />
//   <row city="Pilot Station,US" code="PQS" />
//   <row city="Pine Bluff,US" code="PBF" />
//   <row city="Pinehurst,US" code="SOP" />
//   <row city="Pingxiang,CN" code="PXG" />
//   <row city="Pinotepa Nacional,MX" code="PNO" />
//   <row city="Piracicaba,BR" code="QHB" />
//   <row city="Pirapora,BR" code="PIV" />
//   <row city="Pirassununga,BR" code="QPS" />
//   <row city="Pirmasens,DE" code="ZPI" />
//   <row city="Pisa,IT" code="PSA" />
//   <row city="Pisco,PE" code="PIO" />
//   <row city="Pitts Town,BS" code="PWN" />
//   <row city="Pittsburg,US" code="PTS" />
//   <row city="Pittsburgh,US" code="PIT" />
//   <row city="Pittsfield,US" code="PSF" />
//   <row city="Pituffik,GL" code="THU" />
//   <row city="Piura,PE" code="PIU" />
//   <row city="Placencia,BZ" code="PLJ" />
//   <row city="Placerville,US" code="PVF" />
//   <row city="Plainview,US" code="PVW" />
//   <row city="Planeta Rica,CO" code="PLC" />
//   <row city="Platinum,US" code="PTU" />
//   <row city="Plattsburgh,US" code="PBG" />
//   <row city="Playa Baracoa,CU" code="UPB" />
//   <row city="Playa Blanca,ES" code="QLY" />
//   <row city="Playa Del Carmen,MX" code="PCM" />
//   <row city="Playa Grande,GT" code="PKJ" />
//   <row city="Playa Samara,CR" code="PLD" />
//   <row city="Playa de los Cristianos,ES" code="QCI" />
//   <row city="Pleasanton,US" code="JBS" />
//   <row city="Pleiku,VN" code="PXU" />
//   <row city="Plettenberg Bay,ZA" code="PBZ" />
//   <row city="Pleven,BG" code="PVN" />
//   <row city="Plock,PL" code="QPC" />
//   <row city="Ploiesti,RO" code="QPL" />
//   <row city="Plovdiv,BG" code="PDV" />
//   <row city="Plymouth,GB" code="PLH" />
//   <row city="Plymouth,US" code="PLY" />
//   <row city="Plymouth,US" code="PYM" />
//   <row city="Pocatello,US" code="PIH" />
//   <row city="Pocos De Caldas,BR" code="POO" />
//   <row city="Podgorica,ME" code="TGD" />
//   <row city="Podor,SN" code="POD" />
//   <row city="Pohang,KR" code="KPO" />
//   <row city="Pohnpei,FM" code="PNI" />
//   <row city="Point Baker,US" code="KPB" />
//   <row city="Point Hope,US" code="PHO" />
//   <row city="Point Lay,US" code="PIZ" />
//   <row city="Point Lookout,US" code="PLK" />
//   <row city="Pointe A Pitre,GP" code="PTP" />
//   <row city="Pointe Aux Trembles,CA" code="XPX" />
//   <row city="Pointe Noire,CG" code="PNR" />
//   <row city="Poipet,KH" code="HPP" />
//   <row city="Poitiers,FR" code="PIS" />
//   <row city="Pokhara,NP" code="PKR" />
//   <row city="Polacca,US" code="PXL" />
//   <row city="Polk Inlet,US" code="POQ" />
//   <row city="Polokwane,ZA" code="PTG" />
//   <row city="Poltava,UA" code="PLV" />
//   <row city="Polyarny,RU" code="PYJ" />
//   <row city="Pomala,ID" code="PUM" />
//   <row city="Pomezia,IT" code="QEZ" />
//   <row city="Pompano Beach,US" code="PPM" />
//   <row city="Ponca cities,US" code="PNC" />
//   <row city="Ponce,US" code="PSE" />
//   <row city="Pond Inlet,CA" code="YIO" />
//   <row city="Pondicherry,IN" code="PNY" />
//   <row city="Ponferrada,ES" code="PFE" />
//   <row city="Ponta Delgada,PT" code="PDL" />
//   <row city="Ponta Grossa,BR" code="PGZ" />
//   <row city="Ponta Pora,BR" code="PMG" />
//   <row city="Pontevedra,ES" code="PTE" />
//   <row city="Pontiac,US" code="PTK" />
//   <row city="Pontianak,ID" code="PNK" />
//   <row city="Pontoise,FR" code="POX" />
//   <row city="Pontresina,CH" code="ZJV" />
//   <row city="Popayan,CO" code="PPN" />
//   <row city="Poplar Bluff,US" code="POF" />
//   <row city="Poplar Hill Indian Reserve,CA" code="YHP" />
//   <row city="Poplar River Indian Reserve,CA" code="XPP" />
//   <row city="Popondetta,PG" code="PNP" />
//   <row city="Poprad Tatry,SK" code="TAT" />
//   <row city="Porbandar,IN" code="PBD" />
//   <row city="Pordenone,IT" code="QAD" />
//   <row city="Porgera,PG" code="RGE" />
//   <row city="Pori,FI" code="POR" />
//   <row city="Porlamar,VE" code="PMV" />
//   <row city="Porsgrunn,NO" code="XKP" />
//   <row city="Port Alberni,CA" code="YPB" />
//   <row city="Port Alexander,US" code="PTD" />
//   <row city="Port Alice,US" code="PTC" />
//   <row city="Port Alsworth,US" code="PTA" />
//   <row city="Port Angeles,US" code="CLM" />
//   <row city="Port Antonio,JM" code="POT" />
//   <row city="Port Armstrong,US" code="PTL" />
//   <row city="Port Au Prince,HT" code="PAP" />
//   <row city="Port Augusta,AU" code="PUG" />
//   <row city="Port Bailey,US" code="KPY" />
//   <row city="Port Berge,MG" code="WPB" />
//   <row city="Port Blair,IN" code="IXZ" />
//   <row city="Port Clarence,US" code="KPC" />
//   <row city="Port Daniel,CA" code="XFI" />
//   <row city="Port Douglas,AU" code="PTI" />
//   <row city="Port Elizabeth,VC" code="BQU" />
//   <row city="Port Elizabeth,ZA" code="PLZ" />
//   <row city="Port Frederick,US" code="PFD" />
//   <row city="Port Gentil,GA" code="POG" />
//   <row city="Port Graham,US" code="PGM" />
//   <row city="Port Harcourt,NG" code="PHC" />
//   <row city="Port Hardy,CA" code="YZT" />
//   <row city="Port Hawkesbury,CA" code="YPS" />
//   <row city="Port Hedland,AU" code="PHE" />
//   <row city="Port Heiden,US" code="PTH" />
//   <row city="Port Hope,CA" code="XPH" />
//   <row city="Port Hope Simpson,CA" code="YHA" />
//   <row city="Port Hueneme,US" code="NTD" />
//   <row city="Port Huron,US" code="PHN" />
//   <row city="Port Lincoln,AU" code="PLO" />
//   <row city="Port Lions,US" code="ORI" />
//   <row city="Port Menier,CA" code="YPN" />
//   <row city="Port Moller,US" code="PML" />
//   <row city="Port Moresby,PG" code="POM" />
//   <row city="Port Of Spain,TT" code="POS" />
//   <row city="Port Pirie,AU" code="PPI" />
//   <row city="Port Protection,US" code="PPV" />
//   <row city="Port Said,EG" code="PSD" />
//   <row city="Port Stanley,FK" code="PSY" />
//   <row city="Port Sudan,SD" code="PZU" />
//   <row city="Port Vila,VU" code="VLI" />
//   <row city="Port Walter,US" code="PWR" />
//   <row city="Port Williams,US" code="KPR" />
//   <row city="Portage Creek,US" code="PCA" />
//   <row city="Portage La Prairie,CA" code="YPG" />
//   <row city="Porterville,US" code="PTV" />
//   <row city="Portimao,PT" code="PRM" />
//   <row city="Portland,US" code="PDX" />
//   <row city="Portland,AU" code="PTJ" />
//   <row city="Portland,US" code="PWM" />
//   <row city="Porto,PT" code="OPO" />
//   <row city="Porto Alegre,BR" code="POA" />
//   <row city="Porto Santo,PT" code="PXO" />
//   <row city="Porto Seguro,BR" code="BPS" />
//   <row city="Porto Velho,BR" code="PVH" />
//   <row city="Portoheli,GR" code="PKH" />
//   <row city="Portoroz,SI" code="POW" />
//   <row city="Portoviejo,EC" code="PVO" />
//   <row city="Portsmouth,US" code="PMH" />
//   <row city="Portsmouth,GB" code="PME" />
//   <row city="Portsmouth,US" code="PSM" />
//   <row city="Porvoo,FI" code="QXJ" />
//   <row city="Posadas,AR" code="PSS" />
//   <row city="Poso,ID" code="PSJ" />
//   <row city="Poste De La Baleine,CA" code="YGW" />
//   <row city="Postville,CA" code="YSO" />
//   <row city="Potchefstroom,ZA" code="PCF" />
//   <row city="Potenza,IT" code="QPO" />
//   <row city="Potosi,BO" code="POI" />
//   <row city="Potsdam,DE" code="XXP" />
//   <row city="Pottstown,US" code="PTW" />
//   <row city="Poughkeepsie,US" code="POU" />
//   <row city="Poulsbo,US" code="PUL" />
//   <row city="Poum,NC" code="PUV" />
//   <row city="Pouso Alegre,BR" code="PPY" />
//   <row city="Powell Lovell,US" code="POY" />
//   <row city="Powell River,CA" code="YPW" />
//   <row city="Poza Rica,MX" code="PAZ" />
//   <row city="Poznan,PL" code="POZ" />
//   <row city="Prague,CZ" code="PRG" />
//   <row city="Praia,CV" code="RAI" />
//   <row city="Prairie Du Chien,US" code="PCD" />
//   <row city="Praslin Island,SC" code="PRI" />
//   <row city="Prato,IT" code="QPR" />
//   <row city="Pratt,US" code="PTT" />
//   <row city="Praya,ID" code="LOP" />
//   <row city="Prescott,CA" code="XII" />
//   <row city="Prescott,US" code="PRC" />
//   <row city="Presidente Prudente,BR" code="PPB" />
//   <row city="Presque Isle,US" code="PQI" />
//   <row city="Preston,GB" code="XPT" />
//   <row city="Pretoria,ZA" code="PRY" />
//   <row city="Preveza,GR" code="PVK" />
//   <row city="Price,US" code="PUC" />
//   <row city="Prince Albert,CA" code="YPA" />
//   <row city="Prince George,CA" code="YXS" />
//   <row city="Prince Rupert,CA" code="YPR" />
//   <row city="Princeton,US" code="PCT" />
//   <row city="Princeville,US" code="HPV" />
//   <row city="Pristina,XK" code="PRN" />
//   <row city="Procida,IT" code="ZJJ" />
//   <row city="Prome,MM" code="PRU" />
//   <row city="Propriano,FR" code="PRP" />
//   <row city="Proserpine,AU" code="PPP" />
//   <row city="Prospect Creek,US" code="PPC" />
//   <row city="Providence,US" code="PVD" />
//   <row city="Providencia,CO" code="PVA" />
//   <row city="Providenciales,TC" code="PLS" />
//   <row city="Provincetown,US" code="PVC" />
//   <row city="Provins,FR" code="XPS" />
//   <row city="Provo,US" code="PVU" />
//   <row city="Prudhoe Bay,US" code="PUO" />
//   <row city="Prudhoe Bay Deadhorse,US" code="SCC" />
//   <row city="Pskov,RU" code="PKV" />
//   <row city="Pt Macquarie,AU" code="PQQ" />
//   <row city="Pucallpa,PE" code="PCL" />
//   <row city="Pucon,CL" code="ZPC" />
//   <row city="Puebla,MX" code="PBC" />
//   <row city="Pueblo,US" code="PUB" />
//   <row city="Puente Genil,ES" code="GEN" />
//   <row city="Puerto Aisen,CL" code="WPA" />
//   <row city="Puerto Armuelles,PA" code="AML" />
//   <row city="Puerto Asis,CO" code="PUU" />
//   <row city="Puerto Ayacucho,VE" code="PYH" />
//   <row city="Puerto Barrios,GT" code="PBR" />
//   <row city="Puerto Berrio,CO" code="PBE" />
//   <row city="Puerto Boyaca,CO" code="PYA" />
//   <row city="Puerto Cabello,VE" code="PBL" />
//   <row city="Puerto Carreno,CO" code="PCR" />
//   <row city="Puerto Del Rosario,ES" code="FUE" />
//   <row city="Puerto Deseado,AR" code="PUD" />
//   <row city="Puerto Escondido,MX" code="PXM" />
//   <row city="Puerto Inirida,CO" code="PDA" />
//   <row city="Puerto Jimenez,CR" code="PJM" />
//   <row city="Puerto Juarez,MX" code="PJZ" />
//   <row city="Puerto La Victoria,PY" code="PCJ" />
//   <row city="Puerto Leguizamo,CO" code="LQM" />
//   <row city="Puerto Madryn,AR" code="PMY" />
//   <row city="Puerto Maldonado,PE" code="PEM" />
//   <row city="Puerto Montt,CL" code="PMC" />
//   <row city="Puerto Natales,CL" code="PNT" />
//   <row city="Puerto Obaldia,PA" code="PUE" />
//   <row city="Puerto Ordaz,VE" code="PZO" />
//   <row city="Puerto Penasco,MX" code="PPE" />
//   <row city="Puerto Plata,DO" code="POP" />
//   <row city="Puerto Princesa,PH" code="PPS" />
//   <row city="Puerto Suarez,BO" code="PSZ" />
//   <row city="Puerto Vallarta,MX" code="PVR" />
//   <row city="Puerto Varas,CL" code="PUX" />
//   <row city="Puerto de Santa Maria,ES" code="PXS" />
//   <row city="Puerto de la Luz,ES" code="QUZ" />
//   <row city="Puertollano,ES" code="UER" />
//   <row city="Pukapuka,PF" code="PKP" />
//   <row city="Pukapuka Island,CK" code="PZK" />
//   <row city="Pukarua,PF" code="PUK" />
//   <row city="Pukatawagan,CA" code="XPK" />
//   <row city="Pula,HR" code="PUY" />
//   <row city="Pullman,US" code="PUW" />
//   <row city="Pumani,PG" code="PMN" />
//   <row city="Pune,IN" code="PNQ" />
//   <row city="Punia,CD" code="PUN" />
//   <row city="Punta Arenas,CL" code="PUQ" />
//   <row city="Punta Cana,DO" code="PUJ" />
//   <row city="Punta Del Este,UY" code="PDP" />
//   <row city="Punta Gorda,US" code="PGD" />
//   <row city="Punta Gorda,BZ" code="PND" />
//   <row city="Punta Islita,CR" code="PBP" />
//   <row city="Punta Renes,CR" code="JAP" />
//   <row city="Purnea,PG" code="PUI" />
//   <row city="Puvirnituq,CA" code="YPX" />
//   <row city="Pyongyang,KP" code="FNJ" />
//   <row city="Qaanaaq,GL" code="NAQ" />
//   <row city="Qaarsut,GL" code="JQA" />
//   <row city="Qachas Nek,LS" code="UNE" />
//   <row city="Qaisumah,SA" code="AQI" />
//   <row city="Qaqortoq,GL" code="JJU" />
//   <row city="Qasigiannguit,GL" code="JCH" />
//   <row city="Qassiarsuk,GL" code="QFT" />
//   <row city="Qassimiut,GL" code="QJH" />
//   <row city="Qeqertarsuaq,GL" code="JGO" />
//   <row city="Qeqertarsuatsiaat,GL" code="QEY" />
//   <row city="Qianjiang,CN" code="JIQ" />
//   <row city="Qiemo,CN" code="IQM" />
//   <row city="Qikiqtarjuaq,CA" code="YVM" />
//   <row city="Qingdao,CN" code="TAO" />
//   <row city="Qingyang,CN" code="IQN" />
//   <row city="Qinhuangdao,CN" code="SHP" />
//   <row city="Qionghai,CN" code="QHX" />
//   <row city="Qiqihar,CN" code="NDG" />
//   <row city="Qishn,YE" code="IHN" />
//   <row city="Quakertown,US" code="UKT" />
//   <row city="Qualicum,CA" code="XQU" />
//   <row city="Quaqtaq,CA" code="YQC" />
//   <row city="Quebec,CA" code="YQB" />
//   <row city="Queen Charlotte Island,CA" code="ZQS" />
//   <row city="Queenstown,NZ" code="ZQN" />
//   <row city="Queenstown,AU" code="UEE" />
//   <row city="Queenstown,ZA" code="UTW" />
//   <row city="Quelimane,MZ" code="UEL" />
//   <row city="Quepos,CR" code="XQP" />
//   <row city="Queretaro,MX" code="QRO" />
//   <row city="Quesnel,CA" code="YQZ" />
//   <row city="Quetta,PK" code="UET" />
//   <row city="Qui Nhon,VN" code="UIH" />
//   <row city="Quibdo,CO" code="UIB" />
//   <row city="Quilpie,AU" code="ULP" />
//   <row city="Quimper,FR" code="UIP" />
//   <row city="Quincy,US" code="GNF" />
//   <row city="Quincy,US" code="UIN" />
//   <row city="Quinhagak,US" code="KWN" />
//   <row city="Quirindi,AU" code="UIR" />
//   <row city="Quito,EC" code="UIO" />
//   <row city="Qurghonteppa,TJ" code="KQT" />
//   <row city="REFUGIO,US" code="RFG" />
//   <row city="Rabaraba,PG" code="RBP" />
//   <row city="Rabat,MA" code="RBA" />
//   <row city="Rabaul,PG" code="RAB" />
//   <row city="Rabi,FJ" code="RBI" />
//   <row city="Rach Gia,VN" code="VKG" />
//   <row city="Racine,US" code="RAC" />
//   <row city="Rade,NO" code="ZXX" />
//   <row city="Radom,PL" code="QXR" />
//   <row city="Rae Bareli,IN" code="BEK" />
//   <row city="Rafha,SA" code="RAH" />
//   <row city="Ragusa,IT" code="QRG" />
//   <row city="Raha,ID" code="RAQ" />
//   <row city="Rahim Yar  Khan,PK" code="RYK" />
//   <row city="Raiatea,PF" code="RFP" />
//   <row city="Railway Germany,DE" code="QYG" />
//   <row city="Railway Service,DK" code="XVX" />
//   <row city="Rainbow Lake,CA" code="YOP" />
//   <row city="Raipur,IN" code="RPR" />
//   <row city="Rajahmundry,IN" code="RJA" />
//   <row city="Rajkot,IN" code="RAJ" />
//   <row city="Raleigh,US" code="RDU" />
//   <row city="Rambouillet,FR" code="XRT" />
//   <row city="Ramingining,AU" code="RAM" />
//   <row city="Rampart,US" code="RMP" />
//   <row city="Ramsgate,GB" code="QQR" />
//   <row city="Ramstein,DE" code="RMS" />
//   <row city="Rancagua,CL" code="QRC" />
//   <row city="Ranchi,IN" code="IXR" />
//   <row city="Randers,DK" code="ZIR" />
//   <row city="Rangely,US" code="RNG" />
//   <row city="Ranger,US" code="RGR" />
//   <row city="Rangiroa Island,PF" code="RGI" />
//   <row city="Rankin Inlet,CA" code="YRT" />
//   <row city="Ranong,TH" code="UNN" />
//   <row city="Ransiki,ID" code="RSK" />
//   <row city="Rapid cities,US" code="RAP" />
//   <row city="Rapperswil,CH" code="ZJW" />
//   <row city="Rarotonga,CK" code="RAR" />
//   <row city="Ras Al Khaimah,AE" code="RKT" />
//   <row city="Rasht,IR" code="RAS" />
//   <row city="Raspberry Strait,US" code="RSP" />
//   <row city="Rastatt,DE" code="ZRW" />
//   <row city="Ratingen,DE" code="ZPJ" />
//   <row city="Ratnagiri,IN" code="RTC" />
//   <row city="Raton,US" code="RTN" />
//   <row city="Raufarhofn,IS" code="RFN" />
//   <row city="Raufoss,NO" code="ZMQ" />
//   <row city="Ravenna,IT" code="RAN" />
//   <row city="Ravensburg,DE" code="QRB" />
//   <row city="Ravensthorpe,AU" code="RVT" />
//   <row city="Rawalpindi,PK" code="RWP" />
//   <row city="Rawlins,US" code="RWL" />
//   <row city="Reading,GB" code="XRE" />
//   <row city="Reading,US" code="RDG" />
//   <row city="Reao,PF" code="REA" />
//   <row city="Rebun,JP" code="RBJ" />
//   <row city="Recife,BR" code="REC" />
//   <row city="Recklinghausen,DE" code="ZPL" />
//   <row city="Reconquista,AR" code="RCQ" />
//   <row city="Red Deer,CA" code="YQF" />
//   <row city="Red Devil,US" code="RDV" />
//   <row city="Red Lake,CA" code="YRL" />
//   <row city="Red Sucker Lake,CA" code="YRS" />
//   <row city="Redang,MY" code="RDN" />
//   <row city="Redding,US" code="RDD" />
//   <row city="Redencao,BR" code="RDC" />
//   <row city="Redhill,GB" code="KRH" />
//   <row city="Redmond,US" code="RDM" />
//   <row city="Redon,FR" code="XRN" />
//   <row city="Regensburg,DE" code="ZPM" />
//   <row city="Reggio Calabria,IT" code="REG" />
//   <row city="Reggio Nell Emilia,IT" code="XRL" />
//   <row city="Reggio Nellemilia,IT" code="ZRO" />
//   <row city="Regina,CA" code="YQR" />
//   <row city="Rehoboth Beach,US" code="REH" />
//   <row city="Reims,FR" code="RHE" />
//   <row city="Reims Champagne Ardenne,FR" code="XIZ" />
//   <row city="Remscheid,DE" code="ZPN" />
//   <row city="Rena,NO" code="XKE" />
//   <row city="Rengat,ID" code="RGT" />
//   <row city="Renmark,AU" code="RMK" />
//   <row city="Rennell,SB" code="RNL" />
//   <row city="Rennes,FR" code="RNS" />
//   <row city="Reno,US" code="RNO" />
//   <row city="Rensselaer,US" code="RNZ" />
//   <row city="Renton,US" code="RNT" />
//   <row city="Resende,BR" code="REZ" />
//   <row city="Resistencia,AR" code="RES" />
//   <row city="Resolute,CA" code="YRB" />
//   <row city="Retalhuleu,GT" code="RER" />
//   <row city="Rethymnon,GR" code="ZRE" />
//   <row city="Reunion Island,RE" code="RUN" />
//   <row city="Reus,ES" code="REU" />
//   <row city="Reutlingen,DE" code="ZPP" />
//   <row city="Revelstoke,CA" code="YRV" />
//   <row city="Rexburg,US" code="RXE" />
//   <row city="Reykholar,IS" code="RHA" />
//   <row city="Reykjavik,IS" code="REK" />
//   <row city="Reynosa,MX" code="REX" />
//   <row city="Rheine,DE" code="ZPQ" />
//   <row city="Rhinelander,US" code="RHI" />
//   <row city="Rhodes,GR" code="RHO" />
//   <row city="Ribeirao Preto,BR" code="RAO" />
//   <row city="Riberalta,BO" code="RIB" />
//   <row city="Richard Toll,SN" code="RDT" />
//   <row city="Richards Bay,ZA" code="RCB" />
//   <row city="Richfield,US" code="RIF" />
//   <row city="Richland,US" code="RLD" />
//   <row city="Richmond,AU" code="RCM" />
//   <row city="Richmond,US" code="RIC" />
//   <row city="Richmond,US" code="RID" />
//   <row city="Riesa,DE" code="IES" />
//   <row city="Riesa DE,DE" code="ZRX" />
//   <row city="Rieti,IT" code="QRT" />
//   <row city="Rifle,US" code="RIL" />
//   <row city="Riga,LV" code="RIX" />
//   <row city="Rigolet,CA" code="YRG" />
//   <row city="Rijeka,HR" code="RJK" />
//   <row city="Rikaze,CN" code="RKZ" />
//   <row city="Rimatara,PF" code="RMT" />
//   <row city="Rimini,IT" code="RMI" />
//   <row city="Rimouski,CA" code="YXK" />
//   <row city="Ringebu,NO" code="XUQ" />
//   <row city="Ringwood,GB" code="RNW" />
//   <row city="Rio Branco,BR" code="RBR" />
//   <row city="Rio Claro,BR" code="QIQ" />
//   <row city="Rio Cuarto,AR" code="RCU" />
//   <row city="Rio De Janeiro,BR" code="RIO" />
//   <row city="Rio Dulce,GT" code="LCF" />
//   <row city="Rio Gallegos,AR" code="RGL" />
//   <row city="Rio Grande,AR" code="RGA" />
//   <row city="Rio Grande,BR" code="RIG" />
//   <row city="Rio Hato,PA" code="RIH" />
//   <row city="Rio Mayo,AR" code="ROY" />
//   <row city="Rio Turbio,AR" code="RYO" />
//   <row city="Rio Verde,BR" code="RVD" />
//   <row city="Riohacha,CO" code="RCH" />
//   <row city="Rioja,PE" code="RIJ" />
//   <row city="Rishiri,JP" code="RIS" />
//   <row city="Rivera,UY" code="RVY" />
//   <row city="Rivers,CA" code="YYI" />
//   <row city="Riverside,US" code="RAL" />
//   <row city="Riverton,US" code="RIW" />
//   <row city="Riviere A Pierre,CA" code="XRP" />
//   <row city="Riviere Du Loup,CA" code="YRI" />
//   <row city="Riyadh,SA" code="RUH" />
//   <row city="Riyan,YE" code="RIY" />
//   <row city="Rize,TR" code="QRI" />
//   <row city="Roanne,FR" code="RNE" />
//   <row city="Roanoke,US" code="ROA" />
//   <row city="Roanoke Rapids,US" code="RZZ" />
//   <row city="Roatan,HN" code="RTB" />
//   <row city="Roberval,CA" code="YRJ" />
//   <row city="Robinhood,AU" code="ROH" />
//   <row city="Robinson River,PG" code="RNR" />
//   <row city="Roche Harbor,US" code="RCE" />
//   <row city="Rochefort,FR" code="RCO" />
//   <row city="Rochester,US" code="RCR" />
//   <row city="Rochester,GB" code="RCS" />
//   <row city="Rochester,US" code="ROC" />
//   <row city="Rochester,US" code="RST" />
//   <row city="Rock Hill,US" code="RKH" />
//   <row city="Rock Sound,BS" code="RSD" />
//   <row city="Rock Springs,US" code="RKS" />
//   <row city="Rockford,US" code="RFD" />
//   <row city="Rockhampton,AU" code="ROK" />
//   <row city="Rockland,US" code="RKD" />
//   <row city="Rockport,US" code="RKP" />
//   <row city="Rockwood,US" code="RKW" />
//   <row city="Rocky Mount,US" code="RWI" />
//   <row city="Rocky Mountain House,CA" code="YRM" />
//   <row city="Rodez,FR" code="RDZ" />
//   <row city="Rodrigues Island,MU" code="RRG" />
//   <row city="Roervik,NO" code="RVK" />
//   <row city="Rogers,US" code="ROG" />
//   <row city="Rognan,NO" code="ZXM" />
//   <row city="Roi Et,TH" code="ROI" />
//   <row city="Rolla,US" code="RLA" />
//   <row city="Roma,AU" code="RMA" />
//   <row city="Rome,US" code="RMG" />
//   <row city="Rome,IT" code="ROM" />
//   <row city="Ronda,ES" code="RRA" />
//   <row city="Rondon,CO" code="RON" />
//   <row city="Rondonopolis,BR" code="ROO" />
//   <row city="Ronneby,SE" code="RNB" />
//   <row city="Roosendaal,NL" code="ZYO" />
//   <row city="Roosevelt,US" code="ROL" />
//   <row city="Roros,NO" code="RRS" />
//   <row city="Rorschach,CH" code="ZJZ" />
//   <row city="Rosario,AR" code="ROS" />
//   <row city="Roseau,DM" code="DCF" />
//   <row city="Roseberth,AU" code="RSB" />
//   <row city="Roseburg,US" code="RBG" />
//   <row city="Rosenheim,DE" code="ZPR" />
//   <row city="Rosh Pina,NA" code="RHN" />
//   <row city="Rosh Pina,IL" code="RPN" />
//   <row city="Roskilde,DK" code="RKE" />
//   <row city="Rost,NO" code="RET" />
//   <row city="Rostock Laage,DE" code="RLG" />
//   <row city="Rostov,RU" code="ROV" />
//   <row city="Roswell,US" code="ROW" />
//   <row city="Rota,ES" code="ROZ" />
//   <row city="Rota,MP" code="ROP" />
//   <row city="Rothenburg,DE" code="QTK" />
//   <row city="Rothesay,GB" code="RAY" />
//   <row city="Roti,ID" code="RTI" />
//   <row city="Rotorua,NZ" code="ROT" />
//   <row city="Rotterdam,NL" code="RTM" />
//   <row city="Rottnest,AU" code="RTS" />
//   <row city="Rotuma Island,FJ" code="RTA" />
//   <row city="Rouen,FR" code="URO" />
//   <row city="Rourkela,IN" code="RRK" />
//   <row city="Rouyn Noranda,CA" code="YUY" />
//   <row city="Rovaniemi,FI" code="RVN" />
//   <row city="Rovno,UA" code="RWN" />
//   <row city="Rowan Bay,US" code="RWB" />
//   <row city="Roxas cities,PH" code="RXS" />
//   <row city="Royan,FR" code="RYN" />
//   <row city="Ruby,US" code="RBY" />
//   <row city="Ruesselsheim,DE" code="ZPS" />
//   <row city="Rugby,GB" code="XRU" />
//   <row city="Rugeley,GB" code="XRG" />
//   <row city="Ruidoso,US" code="RUI" />
//   <row city="Rum Cay,BS" code="RCY" />
//   <row city="Runcorn,GB" code="XRC" />
//   <row city="Rundu,NA" code="NDU" />
//   <row city="Rupsi,IN" code="RUP" />
//   <row city="Rurrenabaque,BO" code="RBQ" />
//   <row city="Rurutu,PF" code="RUR" />
//   <row city="Ruse,BG" code="ROU" />
//   <row city="Russell,US" code="RSL" />
//   <row city="Russian Mission,US" code="RSH" />
//   <row city="Ruston,US" code="RSN" />
//   <row city="Ruteng,ID" code="RTG" />
//   <row city="Rutland,US" code="RUT" />
//   <row city="Rutland Plains,AU" code="RTP" />
//   <row city="Rybinsk,RU" code="RYB" />
//   <row city="Rygge,NO" code="ZXU" />
//   <row city="Rzeszow,PL" code="RZE" />
//   <row city="SAAS FEE,CH" code="ZKI" />
//   <row city="SELMA,US" code="SES" />
//   <row city="SHOREHAM BY SEA,GB" code="ESH" />
//   <row city="SINOP,TR" code="NOP" />
//   <row city="SOLOTHURN,CH" code="ZKS" />
//   <row city="ST Johns,US" code="SJN" />
//   <row city="SWEETWATER,US" code="SWW" />
//   <row city="Sa Dah,YE" code="SYE" />
//   <row city="Saarbruecken,DE" code="SCN" />
//   <row city="Saarmelleek,HU" code="SOB" />
//   <row city="Saba Island,BQ" code="SAB" />
//   <row city="Sabadell,ES" code="QSA" />
//   <row city="Sabah,PG" code="SBV" />
//   <row city="Sabah,MY" code="GSA" />
//   <row city="Sabai Island,AU" code="SBR" />
//   <row city="Sachigo Lake Indian Reserve,CA" code="ZPB" />
//   <row city="Sackville,CA" code="XKV" />
//   <row city="Sacramento,US" code="SAC" />
//   <row city="Sacramento Cal,US" code="SMF" />
//   <row city="Safford,US" code="SAD" />
//   <row city="Safia,PG" code="SFU" />
//   <row city="Saga,JP" code="HSG" />
//   <row city="Sagarai,PG" code="SGJ" />
//   <row city="Saginaw,US" code="MBS" />
//   <row city="Sagwon,US" code="SAG" />
//   <row city="Saidor,PG" code="SDI" />
//   <row city="Saidpur,BD" code="SPD" />
//   <row city="Saidu Sharif,PK" code="SDT" />
//   <row city="Saint Cloud,US" code="STC" />
//   <row city="Saint Hyacinthe,CA" code="XIM" />
//   <row city="Saint Laurent du Maroni,GF" code="LDX" />
//   <row city="Saint Louis,FR" code="XLI" />
//   <row city="Saint Marie,MG" code="SMS" />
//   <row city="Saintes,FR" code="XST" />
//   <row city="Saipan,MP" code="SPN" />
//   <row city="Sakaiminato,JP" code="QKV" />
//   <row city="Sakkyryr,RU" code="SUK" />
//   <row city="Sakon Nakhon,TH" code="SNO" />
//   <row city="Sal Island,CV" code="SID" />
//   <row city="Sala,SE" code="XYX" />
//   <row city="Salalah,OM" code="SLL" />
//   <row city="Salamanca,ES" code="SLM" />
//   <row city="Salamo,PG" code="SAM" />
//   <row city="Saldanha Bay,ZA" code="SDB" />
//   <row city="Sale,AU" code="SXE" />
//   <row city="Salekhard,RU" code="SLY" />
//   <row city="Salem,IN" code="SXV" />
//   <row city="Salem,US" code="SLE" />
//   <row city="Salerno,IT" code="QSR" />
//   <row city="Salida,US" code="SLT" />
//   <row city="Salima,MW" code="LMB" />
//   <row city="Salina,IT" code="ZIQ" />
//   <row city="Salina,US" code="SLN" />
//   <row city="Salina Cruz,MX" code="SCX" />
//   <row city="Salinas,EC" code="SNC" />
//   <row city="Salinas,US" code="SNS" />
//   <row city="Salisbury,US" code="SRW" />
//   <row city="Salisbury,GB" code="XSR" />
//   <row city="Salisbury Ocean cities,US" code="SBY" />
//   <row city="Sallanches,FR" code="XSN" />
//   <row city="Salluit,CA" code="YZG" />
//   <row city="Salmon Arm,CA" code="YSN" />
//   <row city="Salo,FI" code="QVD" />
//   <row city="Salt Cay,TC" code="SLX" />
//   <row city="Salt Lake cities,US" code="SLC" />
//   <row city="Salta,AR" code="SLA" />
//   <row city="Saltillo,MX" code="SLW" />
//   <row city="Salto,UY" code="STY" />
//   <row city="Salton cities,US" code="SAS" />
//   <row city="Salvador,BR" code="SSA" />
//   <row city="Salzburg,AT" code="SZG" />
//   <row city="Salzgitter,DE" code="ZPU" />
//   <row city="Salzwedel,DE" code="ZSQ" />
//   <row city="Samana,DO" code="AZS" />
//   <row city="Samara,RU" code="KUF" />
//   <row city="Samarinda,ID" code="SRI" />
//   <row city="Samarkand,UZ" code="SKD" />
//   <row city="Sambava,MG" code="SVB" />
//   <row city="Samburu,KE" code="UAS" />
//   <row city="Samos,GR" code="SMI" />
//   <row city="Samsun,TR" code="SZF" />
//   <row city="San Andres,CO" code="ADZ" />
//   <row city="San Andros,BS" code="SAQ" />
//   <row city="San Angelo,US" code="SJT" />
//   <row city="San Antonio,VE" code="SVZ" />
//   <row city="San Antonio,US" code="SAT" />
//   <row city="San Antonio Oeste,AR" code="OES" />
//   <row city="San Bernardino,US" code="SBT" />
//   <row city="San Blas,PA" code="NBL" />
//   <row city="San Borja,BO" code="SRJ" />
//   <row city="San Carlos,US" code="SQL" />
//   <row city="San Carlos Bariloche,AR" code="BRC" />
//   <row city="San Cristobal,EC" code="SCY" />
//   <row city="San Cristobal De Las Casas,MX" code="SZT" />
//   <row city="San Crystobal,VE" code="SCI" />
//   <row city="San Diego,US" code="SAN" />
//   <row city="San Domino Island,IT" code="TQR" />
//   <row city="San Felipe,VE" code="SNF" />
//   <row city="San Felipe,MX" code="SFH" />
//   <row city="San Felix,VE" code="SFX" />
//   <row city="San Fernando,ES" code="FES" />
//   <row city="San Fernando,US" code="SFR" />
//   <row city="San Fernando,PH" code="SFE" />
//   <row city="San Fernando De Apure,VE" code="SFD" />
//   <row city="San Francisco,US" code="SFO" />
//   <row city="San Giovanni Rotondo,IT" code="GBN" />
//   <row city="San Ignacio,BZ" code="CYD" />
//   <row city="San Ignacio Velasco,BO" code="SNG" />
//   <row city="San Joaquin,BO" code="SJB" />
//   <row city="San Jose,US" code="SJC" />
//   <row city="San Jose,PH" code="SJI" />
//   <row city="San Jose,CR" code="SJO" />
//   <row city="San Jose Cabo,MX" code="SJD" />
//   <row city="San Jose Guaviare,CO" code="SJE" />
//   <row city="San Juan,AR" code="UAQ" />
//   <row city="San Juan,US" code="SJU" />
//   <row city="San Julian,AR" code="ULA" />
//   <row city="San Luis,AR" code="LUQ" />
//   <row city="San Luis Obispo,US" code="CSL" />
//   <row city="San Luis Potosi,MX" code="SLP" />
//   <row city="San Luis Rio Colorado,MX" code="UAC" />
//   <row city="San Marino,SM" code="SAI" />
//   <row city="San Matias,BO" code="MQK" />
//   <row city="San Miguel,US" code="SYL" />
//   <row city="San Miguel,PA" code="NMG" />
//   <row city="San Miguel Doaraguaia,BR" code="SQM" />
//   <row city="San Pablo,ES" code="SPO" />
//   <row city="San Pedro,CI" code="SPY" />
//   <row city="San Pedro,US" code="SPQ" />
//   <row city="San Pedro,BZ" code="SPR" />
//   <row city="San Pedro Sula,HN" code="SAP" />
//   <row city="San Pedro de Alcantara,ES" code="ZRC" />
//   <row city="San Quintin,MX" code="SNQ" />
//   <row city="San Rafael,AR" code="AFA" />
//   <row city="San Rafael,US" code="SRF" />
//   <row city="San Salvador,BS" code="ZSA" />
//   <row city="San Salvador,SV" code="SAL" />
//   <row city="San Sebastian,ES" code="EAS" />
//   <row city="San Sebastian De La Gomera,ES" code="GMZ" />
//   <row city="San Tome,VE" code="SOM" />
//   <row city="San Vincent,CO" code="SVI" />
//   <row city="Sanaa,YE" code="SAH" />
//   <row city="Sanana,ID" code="SQN" />
//   <row city="Sancti Spiritus,CU" code="USS" />
//   <row city="Sand Point,US" code="SDP" />
//   <row city="Sandakan,MY" code="SDK" />
//   <row city="Sandane,NO" code="SDN" />
//   <row city="Sanday,GB" code="NDY" />
//   <row city="Sandefjord,NO" code="ZYS" />
//   <row city="Sandnes,NO" code="XKC" />
//   <row city="Sandnessjoen,NO" code="SSJ" />
//   <row city="Sandoway,MM" code="SNW" />
//   <row city="Sandspit,CA" code="YZP" />
//   <row city="Sandusky,US" code="SKY" />
//   <row city="Sandvika,NO" code="ZYW" />
//   <row city="Sandy Lake,CA" code="ZSJ" />
//   <row city="Sanford,US" code="SFB" />
//   <row city="Sanford,US" code="SFM" />
//   <row city="Sanikiluaq,CA" code="YSK" />
//   <row city="Sanli Urfa,TR" code="SFQ" />
//   <row city="Sanliurfa,TR" code="GNY" />
//   <row city="Santa Ana,US" code="SNA" />
//   <row city="Santa Ana,BO" code="SBL" />
//   <row city="Santa Ana,SB" code="NNB" />
//   <row city="Santa Barbara,VE" code="STB" />
//   <row city="Santa Barbara,US" code="SBA" />
//   <row city="Santa Catalina,CO" code="SCA" />
//   <row city="Santa Cecilia,EC" code="WSE" />
//   <row city="Santa Clara,US" code="ZSM" />
//   <row city="Santa Clara,CU" code="SNU" />
//   <row city="Santa Cruz,ES" code="SPC" />
//   <row city="Santa Cruz,US" code="SRU" />
//   <row city="Santa Cruz,BO" code="SRZ" />
//   <row city="Santa Cruz,CR" code="SZC" />
//   <row city="Santa Cruz,AR" code="RZA" />
//   <row city="Santa Cruz Do Sul,BR" code="CSU" />
//   <row city="Santa Cruz Flores,PT" code="FLW" />
//   <row city="Santa Cruz Huatulco,MX" code="HUX" />
//   <row city="Santa Cruz Island,SB" code="SCZ" />
//   <row city="Santa Cruz Rio Pardo,BR" code="QNR" />
//   <row city="Santa Elena,VE" code="SNV" />
//   <row city="Santa Fe,US" code="SAF" />
//   <row city="Santa Fe,AR" code="SFN" />
//   <row city="Santa Isabel Rio Negro,BR" code="IRZ" />
//   <row city="Santa Katarina,EG" code="SKV" />
//   <row city="Santa Maria,PT" code="SMA" />
//   <row city="Santa Maria,US" code="SMX" />
//   <row city="Santa Maria,BR" code="RIA" />
//   <row city="Santa Marta,CO" code="SMR" />
//   <row city="Santa Monica,US" code="SMO" />
//   <row city="Santa Paula,US" code="SZP" />
//   <row city="Santa Rosa,EC" code="ETR" />
//   <row city="Santa Rosa,US" code="STS" />
//   <row city="Santa Rosa,AR" code="RSA" />
//   <row city="Santa Rosa De Copan,HN" code="SDH" />
//   <row city="Santa Rosalia,MX" code="SRL" />
//   <row city="Santa Terezinha,BR" code="STZ" />
//   <row city="Santa Ynez,US" code="SQA" />
//   <row city="Santander,ES" code="SDR" />
//   <row city="Santarem,BR" code="STM" />
//   <row city="Santiago,DO" code="STI" />
//   <row city="Santiago,PA" code="SYP" />
//   <row city="Santiago,CL" code="SCL" />
//   <row city="Santiago,CU" code="SCU" />
//   <row city="Santiago De Compostela,ES" code="SCQ" />
//   <row city="Santiago Del Estero,AR" code="SDE" />
//   <row city="Santo Angelo,BR" code="GEL" />
//   <row city="Santo Antao,CV" code="NTO" />
//   <row city="Santo Domingo,VE" code="STD" />
//   <row city="Santo Domingo,DO" code="SDQ" />
//   <row city="Santos,BR" code="SSZ" />
//   <row city="Sanya,CN" code="SYX" />
//   <row city="Sao Carlos,BR" code="QSC" />
//   <row city="Sao Filipe,CV" code="SFL" />
//   <row city="Sao Fransisco,BR" code="QFS" />
//   <row city="Sao Gabriel Da Cachoeira,BR" code="SJL" />
//   <row city="Sao Joao Del Rei,BR" code="QSJ" />
//   <row city="Sao Jorge Island,PT" code="SJZ" />
//   <row city="Sao Jose Do Rio Preto,BR" code="SJP" />
//   <row city="Sao Jose Dos Campos,BR" code="SJK" />
//   <row city="Sao Luiz,BR" code="SLZ" />
//   <row city="Sao Mateus,BR" code="SBJ" />
//   <row city="Sao Nicolau,CV" code="SNE" />
//   <row city="Sao Paulo,BR" code="SAO" />
//   <row city="Sao Paulo de Olivenca,BR" code="OLC" />
//   <row city="Sao Tome Is,ST" code="TMS" />
//   <row city="Sao Vicente,CV" code="VXE" />
//   <row city="Sapporo,JP" code="SPK" />
//   <row city="Sapporo cities,JP" code="CTS" />
//   <row city="Saqqaq,GL" code="QUP" />
//   <row city="Sara,VU" code="SSR" />
//   <row city="Sarajevo,BA" code="SJJ" />
//   <row city="Saranac Lake,US" code="SLK" />
//   <row city="Saransk,RU" code="SKX" />
//   <row city="Sarasota,US" code="SRQ" />
//   <row city="Saratov,RU" code="RTW" />
//   <row city="Saravena,CO" code="RVE" />
//   <row city="Sargans,CH" code="ZKA" />
//   <row city="Sargodha,PK" code="SGI" />
//   <row city="Sarh,TD" code="SRH" />
//   <row city="Sari,IR" code="SRY" />
//   <row city="Sarlat,FR" code="XSL" />
//   <row city="Sarmi,ID" code="ZRM" />
//   <row city="Sarnen,CH" code="ZKC" />
//   <row city="Sarnia,CA" code="YZR" />
//   <row city="Sarpsborg,NO" code="XKQ" />
//   <row city="Sarteneja,BZ" code="SJX" />
//   <row city="Sashylakh,RU" code="SYS" />
//   <row city="Saskatoon,CA" code="YXE" />
//   <row city="Sassandra,CI" code="ZSS" />
//   <row city="Sassari,IT" code="QSS" />
//   <row city="Sassnitz,DE" code="ZSI" />
//   <row city="Sasstown,LR" code="SAZ" />
//   <row city="Satna Airport,IN" code="TNI" />
//   <row city="Satu Mare,RO" code="SUJ" />
//   <row city="Saturna Island,CA" code="YAJ" />
//   <row city="Satwag,PG" code="SWG" />
//   <row city="Saudarkrokur,IS" code="SAK" />
//   <row city="Sault Ste Marie,CA" code="YAM" />
//   <row city="Sault Ste Marie,US" code="SSM" />
//   <row city="Saumlaki,ID" code="SXK" />
//   <row city="Saumur,FR" code="XSU" />
//   <row city="Saurimo,AO" code="VHC" />
//   <row city="Sausalito,US" code="JMC" />
//   <row city="Savannah,US" code="SAV" />
//   <row city="Savannakhet,LA" code="ZVK" />
//   <row city="Savonlinna,FI" code="SVL" />
//   <row city="Savoonga,US" code="SVA" />
//   <row city="Savusavu,FJ" code="SVU" />
//   <row city="Scammon Bay,US" code="SCM" />
//   <row city="Schaffhausen,CH" code="ZKJ" />
//   <row city="Schefferville,CA" code="YKL" />
//   <row city="Schenectady,US" code="SCH" />
//   <row city="Schiphol,NL" code="SPL" />
//   <row city="Schleswig,DE" code="QWI" />
//   <row city="Schleswig,DE" code="WBG" />
//   <row city="Schoena,DE" code="ZSC" />
//   <row city="Schwaebisch Gmuend,DE" code="ZPV" />
//   <row city="Schwanheide,DE" code="ZSD" />
//   <row city="Schweinfurt,DE" code="ZPW" />
//   <row city="Schwerin,DE" code="ZSR" />
//   <row city="Schwerin,DE" code="SZW" />
//   <row city="Schwyz,CH" code="ZKK" />
//   <row city="Scone,AU" code="NSO" />
//   <row city="Scottsbluff,US" code="BFF" />
//   <row city="Scottsdale,US" code="SCF" />
//   <row city="Scranton,US" code="AVP" />
//   <row city="Seal Bay,US" code="SYB" />
//   <row city="Searcy,US" code="SRC" />
//   <row city="Seattle,US" code="SEA" />
//   <row city="Sebha,LY" code="SEB" />
//   <row city="Sebring,US" code="SEF" />
//   <row city="Sechelt,CA" code="YHS" />
//   <row city="Seclin,FR" code="XSX" />
//   <row city="Secunda,ZA" code="ZEC" />
//   <row city="Sedalia,US" code="DMO" />
//   <row city="Sedona,US" code="SDX" />
//   <row city="Seefeld,AT" code="XOW" />
//   <row city="Sege,SB" code="EGM" />
//   <row city="Segou,ML" code="SZU" />
//   <row city="Segovia,ES" code="XOU" />
//   <row city="Segrate,IT" code="SWK" />
//   <row city="Seguela,CI" code="SEO" />
//   <row city="Sehonghong,LS" code="SHK" />
//   <row city="Seinajoki,FI" code="SJY" />
//   <row city="Seiyun,YE" code="GXF" />
//   <row city="Sekakes,LS" code="SKQ" />
//   <row city="Selawik,US" code="WLK" />
//   <row city="Selbang,PG" code="SBC" />
//   <row city="Seldovia,US" code="SOV" />
//   <row city="Selebi Phikwe,BW" code="PKW" />
//   <row city="Selibaby,MR" code="SEY" />
//   <row city="Semarang,ID" code="SRG" />
//   <row city="Semey,KZ" code="PLX" />
//   <row city="Semongkong,LS" code="SOK" />
//   <row city="Semporna,MY" code="SMM" />
//   <row city="Sendai,JP" code="SDJ" />
//   <row city="Senlis,FR" code="XSV" />
//   <row city="Senneterre,CA" code="XFK" />
//   <row city="Sens,FR" code="XSF" />
//   <row city="Seo de Urgel,ES" code="LEU" />
//   <row city="Seosan,KR" code="HMY" />
//   <row city="Seoul,KR" code="SEL" />
//   <row city="Sept Iles,CA" code="YZV" />
//   <row city="Sequim,US" code="SQV" />
//   <row city="Seronera,TZ" code="SEU" />
//   <row city="Serra Pelada,BR" code="RSG" />
//   <row city="Serravalle,SM" code="RSM" />
//   <row city="Sert,LY" code="SRX" />
//   <row city="Serui,ID" code="ZRI" />
//   <row city="Seshutes,LS" code="SHZ" />
//   <row city="Sete,FR" code="XSY" />
//   <row city="Sete Lagoas,BR" code="QHG" />
//   <row city="Setif,DZ" code="QSF" />
//   <row city="Setubal,PT" code="XSZ" />
//   <row city="Sevastopol,UA" code="UKS" />
//   <row city="Severac Le Chateau,FR" code="ZBH" />
//   <row city="Sevilla,ES" code="SVQ" />
//   <row city="Seward,US" code="SWD" />
//   <row city="Seymour,US" code="SER" />
//   <row city="Sfax,TN" code="SFA" />
//   <row city="Shafter,US" code="MIT" />
//   <row city="Shageluk,US" code="SHX" />
//   <row city="Shahre Kord,IR" code="CQD" />
//   <row city="Shakhtersk,RU" code="EKS" />
//   <row city="Shaktoolik,US" code="SKK" />
//   <row city="Shamattawa Indian Reserve,CA" code="ZTM" />
//   <row city="Shanghai,CN" code="SHA" />
//   <row city="Shanghai CN,CN" code="PVG" />
//   <row city="Shannon,IE" code="SNN" />
//   <row city="Shantou,CN" code="SWA" />
//   <row city="Shanzhou,CN" code="SZO" />
//   <row city="Shaoguan,CN" code="HSC" />
//   <row city="Shaoxing,CN" code="RNX" />
//   <row city="Shaoyang,CN" code="SYG" />
//   <row city="Sharjah,AE" code="SHJ" />
//   <row city="Shark Elowainat,EG" code="GSQ" />
//   <row city="Sharm El Sheik,EG" code="SSH" />
//   <row city="Sharurah,SA" code="SHW" />
//   <row city="Shashi,CN" code="SHS" />
//   <row city="Shawinigan,CA" code="XFL" />
//   <row city="Shawnee,US" code="SNL" />
//   <row city="Shawnigan,CA" code="XFM" />
//   <row city="She Kou,CN" code="ZCU" />
//   <row city="Sheboygan,US" code="SBM" />
//   <row city="Sheffield,GB" code="SZD" />
//   <row city="Shek Mum,HK" code="QDM" />
//   <row city="Shelbyville,US" code="SYI" />
//   <row city="Sheldon Point,US" code="SXP" />
//   <row city="Shemya Island,US" code="SYA" />
//   <row city="Shennongjia,CN" code="HPG" />
//   <row city="Shenyang,CN" code="SHE" />
//   <row city="Shenzhen,CN" code="SZX" />
//   <row city="Shepparton,AU" code="SHT" />
//   <row city="Sherbrooke,CA" code="YSC" />
//   <row city="Sheridan,US" code="SHR" />
//   <row city="Sherman,US" code="PNX" />
//   <row city="Shetland Islands Area,GB" code="SDZ" />
//   <row city="Shi Quan He,CN" code="NGQ" />
//   <row city="Shijiazhuang,CN" code="SJW" />
//   <row city="Shillong,IN" code="SHL" />
//   <row city="Shimkent,KZ" code="CIT" />
//   <row city="Shimojishima,JP" code="SHI" />
//   <row city="Shinyanga,TZ" code="SHY" />
//   <row city="Shirahama,JP" code="SHM" />
//   <row city="Shirak,AM" code="LWN" />
//   <row city="Shiraz,IR" code="SYZ" />
//   <row city="Shire Indaselassie,ET" code="SHC" />
//   <row city="Shismaref,US" code="SHH" />
//   <row city="Shiyan,CN" code="EJQ" />
//   <row city="Shizuoka cities,JP" code="FSZ" />
//   <row city="Sholapur,IN" code="SSE" />
//   <row city="Shonai,JP" code="SYO" />
//   <row city="Show Low,US" code="SOW" />
//   <row city="Shreveport,US" code="SHV" />
//   <row city="Shungnak,US" code="SHG" />
//   <row city="Shute Hrb,AU" code="JHQ" />
//   <row city="Sialkot,PK" code="SKT" />
//   <row city="Siassi,PG" code="SSS" />
//   <row city="Siauliai,LT" code="SQQ" />
//   <row city="Sibiu,RO" code="SBZ" />
//   <row city="Sibolga,ID" code="FLZ" />
//   <row city="Sibu,MY" code="SBW" />
//   <row city="Sidney,US" code="SNY" />
//   <row city="Sidney,US" code="SDY" />
//   <row city="Siegburg,DE" code="ZPY" />
//   <row city="Siegen,DE" code="SGE" />
//   <row city="Siem Reap,KH" code="REP" />
//   <row city="Siena,IT" code="SAY" />
//   <row city="Sierra Grande,AR" code="SGV" />
//   <row city="Sierre,CH" code="ZKO" />
//   <row city="Sigiriya,LK" code="GIU" />
//   <row city="Siglufjordur,IS" code="SIJ" />
//   <row city="Siguanea,CU" code="SZJ" />
//   <row city="Sikeston,US" code="SIK" />
//   <row city="Silchar,IN" code="IXS" />
//   <row city="Silistra,BG" code="SLS" />
//   <row city="Silkeborg,DK" code="XAH" />
//   <row city="Siloam Springs,US" code="SLG" />
//   <row city="Silver cities,US" code="SVC" />
//   <row city="Silver Creek,BZ" code="SVK" />
//   <row city="Simao,CN" code="SYM" />
//   <row city="Simbai,PG" code="SIM" />
//   <row city="Simberi,PG" code="NIS" />
//   <row city="Simenti,SN" code="SMY" />
//   <row city="Simferopol,UA" code="SIP" />
//   <row city="Simla,IN" code="SLV" />
//   <row city="Simra,NP" code="SIF" />
//   <row city="Sindelfingen,DE" code="ZPZ" />
//   <row city="Sines,PT" code="SIE" />
//   <row city="Singapore,SG" code="SIN" />
//   <row city="Singen,DE" code="ZQA" />
//   <row city="Singita Safari Lodge,ZA" code="SSX" />
//   <row city="Singleton,AU" code="SIX" />
//   <row city="Sinoe,LR" code="SNI" />
//   <row city="Sinop,BR" code="OPS" />
//   <row city="Sintang Borneo Island,ID" code="SQG" />
//   <row city="Sion,CH" code="SIR" />
//   <row city="Sioux cities,US" code="SUX" />
//   <row city="Sioux Falls,US" code="FSD" />
//   <row city="Sioux Lookout,CA" code="YXL" />
//   <row city="Siping,CN" code="OSQ" />
//   <row city="Sira,NO" code="XOQ" />
//   <row city="Siracusa,IT" code="QIC" />
//   <row city="Sirnak,TR" code="NKT" />
//   <row city="Sishen,ZA" code="SIS" />
//   <row city="Sisimiut,GL" code="JHS" />
//   <row city="Sitia,GR" code="JSH" />
//   <row city="Sitinak Island,US" code="SKJ" />
//   <row city="Sitka,US" code="SIT" />
//   <row city="Sittwe,MM" code="AKY" />
//   <row city="Sivas,TR" code="VAS" />
//   <row city="Siwa,EG" code="SEW" />
//   <row city="Skagen,DK" code="QJV" />
//   <row city="Skagway,US" code="SGY" />
//   <row city="Skardu,PK" code="KDU" />
//   <row city="Skelleftea,SE" code="SFT" />
//   <row city="Ski Norway,NO" code="YVS" />
//   <row city="Skiathos,GR" code="JSI" />
//   <row city="Skien,NO" code="SKE" />
//   <row city="Skiros,GR" code="SKU" />
//   <row city="Skitube,AU" code="QTO" />
//   <row city="Skive,DK" code="SQW" />
//   <row city="Skopje,MK" code="SKP" />
//   <row city="Skoppum,NO" code="XUR" />
//   <row city="Skovde,SE" code="KVB" />
//   <row city="Skrydstrup,DK" code="SKS" />
//   <row city="Skukuza,ZA" code="SZK" />
//   <row city="Sleetmute,US" code="SLQ" />
//   <row city="Sliac,SK" code="SLD" />
//   <row city="Sligo,IE" code="SXL" />
//   <row city="Slupsk,PL" code="OSP" />
//   <row city="Smara,MA" code="SMW" />
//   <row city="Smith Falls,CA" code="YSH" />
//   <row city="Smithers,CA" code="YYD" />
//   <row city="Smithfield,US" code="SFZ" />
//   <row city="Smithton,AU" code="SIO" />
//   <row city="Smolensk,RU" code="LNX" />
//   <row city="Smyrna,US" code="MQY" />
//   <row city="Snake Bay,AU" code="SNB" />
//   <row city="Snartemo,NO" code="XUS" />
//   <row city="Soalala,MG" code="DWB" />
//   <row city="Sobral,BR" code="QBX" />
//   <row city="Soc Trang,VN" code="SOA" />
//   <row city="Sochi,RU" code="AER" />
//   <row city="Socorro,US" code="ONM" />
//   <row city="Socotra,YE" code="SCT" />
//   <row city="Sodankyla,FI" code="SOT" />
//   <row city="Soddu,ET" code="SXU" />
//   <row city="Soderhamn,SE" code="SOO" />
//   <row city="Sodertalje,SE" code="JSO" />
//   <row city="Soelden,AT" code="XOO" />
//   <row city="Sofia,BG" code="SOF" />
//   <row city="Sogamoso,CO" code="SOX" />
//   <row city="Sogndal,NO" code="SOG" />
//   <row city="Sohag,EG" code="HMB" />
//   <row city="Soissons,FR" code="XSS" />
//   <row city="Sokcho,KR" code="SHO" />
//   <row city="Sokoto,NG" code="SKO" />
//   <row city="Sola,VU" code="SLH" />
//   <row city="Soldotna,US" code="SXQ" />
//   <row city="Solingen,DE" code="ZIO" />
//   <row city="Solingen DE,DE" code="ZQB" />
//   <row city="Solo,ID" code="SOC" />
//   <row city="Solomon,US" code="SOL" />
//   <row city="Solovetsky,RU" code="CSH" />
//   <row city="Solvesborg,SE" code="XYU" />
//   <row city="Solwezi,ZM" code="SLI" />
//   <row city="Somerset,US" code="SME" />
//   <row city="Son La,VN" code="SQH" />
//   <row city="Sonderborg,DK" code="SGD" />
//   <row city="Songea,TZ" code="SGX" />
//   <row city="Songpan,CN" code="JZH" />
//   <row city="Sonneberg,DE" code="ZSG" />
//   <row city="Sophia Antipolis,FR" code="SXD" />
//   <row city="Sopu,PG" code="SPH" />
//   <row city="Sora,IT" code="QXE" />
//   <row city="Soria,ES" code="XJO" />
//   <row city="Sorkjosen,NO" code="SOJ" />
//   <row city="Soroako,ID" code="SQR" />
//   <row city="Sorocaba,BR" code="SOD" />
//   <row city="Sorong,ID" code="SOQ" />
//   <row city="Sorrento,IT" code="RRO" />
//   <row city="Souanke,CG" code="SOE" />
//   <row city="Sousse,TN" code="QSO" />
//   <row city="South Andros,BS" code="TZN" />
//   <row city="South Bend,US" code="SBN" />
//   <row city="South Caicos,TC" code="XSC" />
//   <row city="South Indian Lake,CA" code="XSI" />
//   <row city="South Molle,AU" code="SOI" />
//   <row city="South Naknek,US" code="WSN" />
//   <row city="South West Bay,VU" code="SWJ" />
//   <row city="Southampton,GB" code="SOU" />
//   <row city="Southend,GB" code="SEN" />
//   <row city="Southern Cross,AU" code="SQC" />
//   <row city="Southport,AU" code="SHQ" />
//   <row city="Sovetskaya Gavan,RU" code="GVN" />
//   <row city="Sovetsky,RU" code="OVS" />
//   <row city="Soyo,AO" code="SZA" />
//   <row city="Spangdahlem,DE" code="SPM" />
//   <row city="Sparrevohn,US" code="SVW" />
//   <row city="Sparta,US" code="CMY" />
//   <row city="Sparta,GR" code="SPJ" />
//   <row city="Sparta,US" code="SAR" />
//   <row city="Spearfish,US" code="SPF" />
//   <row city="Spencer,US" code="SPW" />
//   <row city="Spetsai Island,GR" code="JSS" />
//   <row city="Speyer,DE" code="ZQC" />
//   <row city="Spiddal,IE" code="NNR" />
//   <row city="Spirit Lake,US" code="RTL" />
//   <row city="Split,HR" code="SPU" />
//   <row city="Spokane,US" code="GEG" />
//   <row city="Spring Point,BS" code="AXP" />
//   <row city="Springbok,ZA" code="SBU" />
//   <row city="Springdale,US" code="SPZ" />
//   <row city="Springfield,US" code="VSF" />
//   <row city="Springfield,US" code="SPI" />
//   <row city="Springfield,US" code="SFY" />
//   <row city="Springfield,US" code="SGF" />
//   <row city="Springfield,US" code="SGH" />
//   <row city="Srednekolymsk,RU" code="SEK" />
//   <row city="Srinagar,IN" code="SXR" />
//   <row city="St Andrews,GB" code="ADX" />
//   <row city="St Anthony,CA" code="YAY" />
//   <row city="St Anton,AT" code="ANT" />
//   <row city="St Anton am Arlberg,AT" code="XOV" />
//   <row city="St Augustine,US" code="UST" />
//   <row city="St Austell,GB" code="USX" />
//   <row city="St Barthelemy,GP" code="SBH" />
//   <row city="St Brieuc,FR" code="SBK" />
//   <row city="St Croix,US" code="STX" />
//   <row city="St Die,FR" code="XCK" />
//   <row city="St Etienne,FR" code="EBU" />
//   <row city="St Eustatius,BQ" code="EUX" />
//   <row city="St Francois,GP" code="SFC" />
//   <row city="St Gallen,CH" code="QGL" />
//   <row city="St George,AU" code="SGO" />
//   <row city="St George,US" code="SGU" />
//   <row city="St George Island,US" code="STG" />
//   <row city="St Gilles Croix De Vie,FR" code="XGV" />
//   <row city="St Helens,AU" code="HLS" />
//   <row city="St Jean De Luz,FR" code="XJZ" />
//   <row city="St John,CA" code="YSJ" />
//   <row city="St John Island,US" code="SJF" />
//   <row city="St Johns,CA" code="YYT" />
//   <row city="St Joseph,US" code="STJ" />
//   <row city="St Kitts,KN" code="SKB" />
//   <row city="St Leonard,CA" code="YSL" />
//   <row city="St Louis,SN" code="XLS" />
//   <row city="St Louis,US" code="STL" />
//   <row city="St Lucia,LC" code="SLU" />
//   <row city="St Maarten,SX" code="SXM" />
//   <row city="St Malo,FR" code="XSB" />
//   <row city="St Margrethen,CH" code="ZKF" />
//   <row city="St Martin,MF" code="SFG" />
//   <row city="St Marys,US" code="XSM" />
//   <row city="St Marys,CA" code="XIO" />
//   <row city="St Marys,US" code="KSM" />
//   <row city="St Michael,US" code="SMK" />
//   <row city="St Moritz,CH" code="SMV" />
//   <row city="St Nazaire,FR" code="SNR" />
//   <row city="St Omer,FR" code="XSG" />
//   <row city="St Paul,US" code="STP" />
//   <row city="St Paul Is,US" code="SNP" />
//   <row city="St Peter,DE" code="PSH" />
//   <row city="St Petersburg,US" code="SPG" />
//   <row city="St Petersburg,RU" code="LED" />
//   <row city="St Pierre,CA" code="YPM" />
//   <row city="St Pierre,CA" code="FSP" />
//   <row city="St Pierre Dela Reunion,RE" code="ZSE" />
//   <row city="St Pierre Des Corps,FR" code="XSH" />
//   <row city="St Polton,AT" code="POK" />
//   <row city="St Quentin,FR" code="XSJ" />
//   <row city="St Quentin en Yvelines,FR" code="XQY" />
//   <row city="St Raphael,FR" code="XSK" />
//   <row city="St Simons Is,US" code="SSI" />
//   <row city="St Theris Point,CA" code="YST" />
//   <row city="St Thomas,CA" code="YQS" />
//   <row city="St Thomas,US" code="STT" />
//   <row city="St Tropez,FR" code="LTT" />
//   <row city="St Vincent,VC" code="SVD" />
//   <row city="Stade,DE" code="ZQD" />
//   <row city="Stafford,GB" code="XVB" />
//   <row city="Stamford,US" code="ZTF" />
//   <row city="Stanthorpe,AU" code="SNH" />
//   <row city="Stara Zagora,BG" code="SZR" />
//   <row city="State College,US" code="SCE" />
//   <row city="Statesville,US" code="SVH" />
//   <row city="Stauning,DK" code="STA" />
//   <row city="Staunton,US" code="SHD" />
//   <row city="Stavanger,NO" code="SVG" />
//   <row city="Stavropol,RU" code="STW" />
//   <row city="Stawell,AU" code="SWC" />
//   <row city="Steamboat Bay,US" code="WSB" />
//   <row city="Steamboat Springs,US" code="SBS" />
//   <row city="Stebbins,US" code="WBB" />
//   <row city="Steinkjer,NO" code="XKJ" />
//   <row city="Stella Maris,BS" code="SML" />
//   <row city="Stendal,DE" code="ZSN" />
//   <row city="Stephenville,CA" code="YJT" />
//   <row city="Stephenville,US" code="SEP" />
//   <row city="Sterling,US" code="SQI" />
//   <row city="Sterling,US" code="STK" />
//   <row city="Stevenage,GB" code="XVJ" />
//   <row city="Stevens Point,US" code="STE" />
//   <row city="Stevens Village,US" code="SVS" />
//   <row city="Stewart Island,NZ" code="SZS" />
//   <row city="Stillwater,US" code="SWO" />
//   <row city="Stirling,GB" code="XWB" />
//   <row city="Stjordal,NO" code="XUU" />
//   <row city="Stockholm,PG" code="SMP" />
//   <row city="Stockholm,SE" code="STO" />
//   <row city="Stockport,GB" code="XVA" />
//   <row city="Stockton,US" code="SCK" />
//   <row city="Stoelmans Eiland,SR" code="SMZ" />
//   <row city="Stoke On Trent,GB" code="XWH" />
//   <row city="Stokmarknes,NO" code="SKN" />
//   <row city="Stolberg,DE" code="ZQE" />
//   <row city="Stony River,US" code="SRV" />
//   <row city="Stord,NO" code="SRP" />
//   <row city="Storekvina,NO" code="XUV" />
//   <row city="Storen,NO" code="XUW" />
//   <row city="Storm Lake,US" code="SLB" />
//   <row city="Stornoway,GB" code="SYY" />
//   <row city="Storuman,SE" code="SQO" />
//   <row city="Stowe,US" code="MVL" />
//   <row city="Strahan,AU" code="SRN" />
//   <row city="Stralsund,DE" code="ZSX" />
//   <row city="Strangnas,SE" code="XFH" />
//   <row city="Strasbourg,FR" code="SXB" />
//   <row city="Strasbourg cities,FR" code="XWG" />
//   <row city="Stratford,CA" code="XFD" />
//   <row city="Strathmore,AU" code="STH" />
//   <row city="Strathroy,CA" code="XTY" />
//   <row city="Straubing,DE" code="RBM" />
//   <row city="Streaky Bay,AU" code="KBY" />
//   <row city="Strezhevoy,RU" code="SWT" />
//   <row city="Stronsay,GB" code="SOY" />
//   <row city="Struer,DK" code="QWQ" />
//   <row city="Struga,MK" code="QXP" />
//   <row city="Stuart,US" code="SUA" />
//   <row city="Sturgeon Bay,US" code="SUE" />
//   <row city="Sturgis,US" code="IRS" />
//   <row city="Sturtevant,US" code="ZTV" />
//   <row city="Stuttgart,DE" code="STR" />
//   <row city="Stuttgart,US" code="SGT" />
//   <row city="Stykkisholmur,IS" code="SYK" />
//   <row city="Suai,TL" code="UAI" />
//   <row city="Suavanao,SB" code="VAO" />
//   <row city="Subic Bay,PH" code="SFS" />
//   <row city="Suceava,RO" code="SCV" />
//   <row city="Sucre,BO" code="SRE" />
//   <row city="Sudbury,CA" code="YSB" />
//   <row city="Sugar Land,US" code="SGR" />
//   <row city="Suhl,DE" code="ZSO" />
//   <row city="Sui PK,PK" code="SUL" />
//   <row city="Sukhothai,TH" code="THS" />
//   <row city="Sukhumi,GE" code="SUI" />
//   <row city="Suki,PG" code="SKC" />
//   <row city="Sukkur,PK" code="SKZ" />
//   <row city="Sulaymaniyah,IQ" code="ISU" />
//   <row city="Sule,PG" code="ULE" />
//   <row city="Sumare,BR" code="RWS" />
//   <row city="Sumbawa,ID" code="SWQ" />
//   <row city="Sumbawanga,TZ" code="SUT" />
//   <row city="Sumbe,AO" code="NDD" />
//   <row city="Summer Beaver,CA" code="SUR" />
//   <row city="Summerside,CA" code="YSU" />
//   <row city="Summit,US" code="UMM" />
//   <row city="Sumter,US" code="SSC" />
//   <row city="Sumy,UA" code="UMY" />
//   <row city="Sun cities,ZA" code="NTY" />
//   <row city="Sun Valley,US" code="SUN" />
//   <row city="Sundsvall,SE" code="SDL" />
//   <row city="Suntar,RU" code="SUY" />
//   <row city="Sunyani,GH" code="NYI" />
//   <row city="Superior,US" code="SUW" />
//   <row city="Sur Om,OM" code="SUH" />
//   <row city="Surabaya,ID" code="SUB" />
//   <row city="Surat,IN" code="STV" />
//   <row city="Surat Thani,TH" code="URT" />
//   <row city="Surfers Paradise,AU" code="SFP" />
//   <row city="Surgut,RU" code="SGC" />
//   <row city="Suria,PG" code="SUZ" />
//   <row city="Surigao,PH" code="SUG" />
//   <row city="Sursee,CH" code="ZKU" />
//   <row city="Susanville,US" code="SVE" />
//   <row city="Suva,FJ" code="SUV" />
//   <row city="Suwalki,PL" code="ZWK" />
//   <row city="Suwon,KR" code="SWU" />
//   <row city="Suzhou,CN" code="SZV" />
//   <row city="Sveg,SE" code="EVG" />
//   <row city="Svendborg,DK" code="QXV" />
//   <row city="Svolvaer,NO" code="SVJ" />
//   <row city="Swakopmund,NA" code="SWP" />
//   <row city="Swan Hill,AU" code="SWH" />
//   <row city="Swan River,CA" code="ZJN" />
//   <row city="Swansea,GB" code="SWS" />
//   <row city="Swift Current,CA" code="YYN" />
//   <row city="Swindon,GB" code="XWS" />
//   <row city="Swindon,GB" code="SWI" />
//   <row city="Sydney,CA" code="YQY" />
//   <row city="Sydney,AU" code="SYD" />
//   <row city="Syktyvkar,RU" code="SCW" />
//   <row city="Sylhet,BD" code="ZYL" />
//   <row city="Syracuse,US" code="SYR" />
//   <row city="Syros Island,GR" code="JSY" />
//   <row city="Szczecin,PL" code="SZZ" />
//   <row city="Szeged,HU" code="QZD" />
//   <row city="Szombathely,HU" code="ZBX" />
//   <row city="Szymany,PL" code="SZY" />
//   <row city="TAME,CO" code="TME" />
//   <row city="THUN,CH" code="ZTK" />
//   <row city="TIZIMIN,MX" code="TZM" />
//   <row city="Taba,EG" code="TCP" />
//   <row city="Tabarka,TN" code="TBJ" />
//   <row city="Tabatinga,BR" code="TBT" />
//   <row city="Tabiteuea North,KI" code="TBF" />
//   <row city="Tabiteuea South,KI" code="TSU" />
//   <row city="Tablas Island,PH" code="TBH" />
//   <row city="Tabora,TZ" code="TBO" />
//   <row city="Tabou,CI" code="TXU" />
//   <row city="Tabriz,IR" code="TBZ" />
//   <row city="Tabuaeran,KI" code="TNV" />
//   <row city="Tabuk,SA" code="TUU" />
//   <row city="Tacheng,CN" code="TCG" />
//   <row city="Tacloban,PH" code="TAC" />
//   <row city="Tacna,PE" code="TCQ" />
//   <row city="Tacoma,US" code="TIW" />
//   <row city="Tadoule Lake,CA" code="XTL" />
//   <row city="Taganrog,RU" code="TGK" />
//   <row city="Tagbilaran,PH" code="TAG" />
//   <row city="Tagula,PG" code="TGL" />
//   <row city="Taichung,TW" code="TXG" />
//   <row city="Taif,SA" code="TIF" />
//   <row city="Tainan,TW" code="TNN" />
//   <row city="Taipei,TW" code="TPE" />
//   <row city="Taitung,TW" code="TTT" />
//   <row city="Taiyuan,CN" code="TYN" />
//   <row city="Taiz,YE" code="TAI" />
//   <row city="Tak TH,TH" code="TKT" />
//   <row city="Takamatsu,JP" code="TAK" />
//   <row city="Takapoto,PF" code="TKP" />
//   <row city="Takaroa,PF" code="TKX" />
//   <row city="Takoradi,GH" code="TKD" />
//   <row city="Takotna,US" code="TCT" />
//   <row city="Taku Lodge,US" code="TKL" />
//   <row city="Talara,PE" code="TYL" />
//   <row city="Talavera De La Reina,ES" code="QWT" />
//   <row city="Talca,CL" code="TLX" />
//   <row city="Taldy Kurgan,KZ" code="TDK" />
//   <row city="Talkeetna,US" code="TKA" />
//   <row city="Talladega,US" code="ASN" />
//   <row city="Tallahassee,US" code="TLH" />
//   <row city="Tallinn,EE" code="TLL" />
//   <row city="Taloyoak,CA" code="YYH" />
//   <row city="Tamale,GH" code="TML" />
//   <row city="Tamana Island,KI" code="TMN" />
//   <row city="Tamanrasset,DZ" code="TMR" />
//   <row city="Tamarindo,CR" code="TNO" />
//   <row city="Tamatave,MG" code="TMM" />
//   <row city="Tambacounda,SN" code="TUD" />
//   <row city="Tambohorano,MG" code="WTA" />
//   <row city="Tambolaka,ID" code="TMC" />
//   <row city="Tambor,CR" code="TMU" />
//   <row city="Tambov,RU" code="TBW" />
//   <row city="Tamky,VN" code="VCL" />
//   <row city="Tampa,US" code="TPA" />
//   <row city="Tampere,FI" code="TMP" />
//   <row city="Tampico,MX" code="TAM" />
//   <row city="Tamworth,AU" code="TMW" />
//   <row city="Tan Tan,MA" code="TTA" />
//   <row city="Tana Toraja,ID" code="TTR" />
//   <row city="Tanacross,US" code="TSG" />
//   <row city="Tanah Merah,ID" code="TMH" />
//   <row city="Tanalian Point,US" code="TPO" />
//   <row city="Tanana,US" code="TAL" />
//   <row city="Tandil,AR" code="TDL" />
//   <row city="Tanega Shima,JP" code="TNE" />
//   <row city="Tanga,TZ" code="TGT" />
//   <row city="Tangalooma,AU" code="TAN" />
//   <row city="Tangier,MA" code="TNG" />
//   <row city="Tangshan,CN" code="TVS" />
//   <row city="Tanjung Manis,MY" code="TGC" />
//   <row city="Tanjung Pandan,ID" code="TJQ" />
//   <row city="Tanjung Pinang,ID" code="TNJ" />
//   <row city="Tanjung Redeb,ID" code="BEJ" />
//   <row city="Tanna,VU" code="TAH" />
//   <row city="Taormina,IT" code="TFC" />
//   <row city="Taos,US" code="TSM" />
//   <row city="Tapachula,MX" code="TAP" />
//   <row city="Tapini,PG" code="TPI" />
//   <row city="Tarakan,ID" code="TRK" />
//   <row city="Taramajima,JP" code="TRA" />
//   <row city="Taranto,IT" code="TAR" />
//   <row city="Tarapaca,CO" code="TCD" />
//   <row city="Tarapoa,EC" code="TPC" />
//   <row city="Tarapoto,PE" code="TPP" />
//   <row city="Tarawa,KI" code="TRW" />
//   <row city="Taraz,KZ" code="DMB" />
//   <row city="Tarbes,FR" code="XTB" />
//   <row city="Taree,AU" code="TRO" />
//   <row city="Targovishte,BG" code="TGV" />
//   <row city="Tari,PG" code="TIZ" />
//   <row city="Tarija,BO" code="TJA" />
//   <row city="Tarko Sale,RU" code="TQL" />
//   <row city="Tarragona,ES" code="QGN" />
//   <row city="Tartous,SY" code="QTR" />
//   <row city="Tartu,EE" code="TAY" />
//   <row city="Taschereau,CA" code="XFO" />
//   <row city="Tashkent,UZ" code="TAS" />
//   <row city="Tasiilaq,GL" code="AGM" />
//   <row city="Tasiujaq,CA" code="YTQ" />
//   <row city="Tatakoto,PF" code="TKV" />
//   <row city="Tatalina,US" code="TLJ" />
//   <row city="Tatitlek,US" code="TEK" />
//   <row city="Taubate,BR" code="QHP" />
//   <row city="Taupo,NZ" code="TUO" />
//   <row city="Tauramena,CO" code="TAU" />
//   <row city="Tauranga,NZ" code="TRG" />
//   <row city="Taveuni,FJ" code="TVU" />
//   <row city="Tavoy,MM" code="TVY" />
//   <row city="Tawau,MY" code="TWU" />
//   <row city="Taylor,US" code="TWE" />
//   <row city="Taylor,US" code="TYZ" />
//   <row city="Tbessa,DZ" code="TEE" />
//   <row city="Tbilisi,GE" code="TBS" />
//   <row city="Tchibanga,GA" code="TCH" />
//   <row city="Tchien,LR" code="THC" />
//   <row city="Te Anau,NZ" code="TEU" />
//   <row city="Tefe,BR" code="TFF" />
//   <row city="Tegucigalpa,HN" code="TGU" />
//   <row city="Tehachapi,US" code="TSP" />
//   <row city="Teheran,IR" code="THR" />
//   <row city="Tehuacan,MX" code="TCN" />
//   <row city="Teixeira De Freitas,BR" code="TXF" />
//   <row city="Tekirdag,TR" code="TEQ" />
//   <row city="Tel Aviv,IL" code="TLV" />
//   <row city="Tela,HN" code="TEA" />
//   <row city="Telefomin,PG" code="TFM" />
//   <row city="Telemaco Borba,BR" code="TEC" />
//   <row city="Telfer,AU" code="TEF" />
//   <row city="Telida,US" code="TLF" />
//   <row city="Teller,US" code="TLA" />
//   <row city="Telluride,US" code="TEX" />
//   <row city="Teminabuan,ID" code="TXM" />
//   <row city="Temora,AU" code="TEM" />
//   <row city="Temple,US" code="TPL" />
//   <row city="Temuco,CL" code="ZCO" />
//   <row city="Tena,EC" code="TNW" />
//   <row city="Tenakee,US" code="TKE" />
//   <row city="Tenerife,ES" code="TCI" />
//   <row city="Tengchong,CN" code="TCZ" />
//   <row city="Tenkodogo,BF" code="TEG" />
//   <row city="Tennant Creek,AU" code="TCA" />
//   <row city="Teofilo Otoni,BR" code="TFL" />
//   <row city="Tepic,MX" code="TPQ" />
//   <row city="Teptep,PG" code="TEP" />
//   <row city="Teramo,IT" code="QEA" />
//   <row city="Terapo,PG" code="TEO" />
//   <row city="Terceira,PT" code="TER" />
//   <row city="Teresina,BR" code="THE" />
//   <row city="Terezopolis,BR" code="QHT" />
//   <row city="Termez,UZ" code="TMJ" />
//   <row city="Ternate,ID" code="TTE" />
//   <row city="Ternopol,UA" code="TNL" />
//   <row city="Terrace,CA" code="YXT" />
//   <row city="Terrace Bay,CA" code="YTJ" />
//   <row city="Terre Haute,US" code="HUF" />
//   <row city="Terrell,US" code="TRL" />
//   <row city="Teruel,ES" code="TEJ" />
//   <row city="Tessenei,ER" code="TES" />
//   <row city="Tete,MZ" code="TET" />
//   <row city="Tete A La Baleine,CA" code="ZTB" />
//   <row city="Tetebedi,PG" code="TDB" />
//   <row city="Teterboro,US" code="TEB" />
//   <row city="Tetlin,US" code="TEH" />
//   <row city="Tetuan,MA" code="TTU" />
//   <row city="Texarkana,US" code="TXK" />
//   <row city="Tezpur,IN" code="TEZ" />
//   <row city="Tezu,IN" code="TEI" />
//   <row city="Thaba Nchu,ZA" code="TCU" />
//   <row city="Thaba Tseka,LS" code="THB" />
//   <row city="Thalwil,CH" code="ZKV" />
//   <row city="Thames,NZ" code="TMZ" />
//   <row city="Thangool,AU" code="THG" />
//   <row city="Thanh Hoa,VN" code="THD" />
//   <row city="Thanjavur,IN" code="TJV" />
//   <row city="Thargomindah,AU" code="XTG" />
//   <row city="The Dalles,US" code="DLS" />
//   <row city="The Hague,NL" code="HAG" />
//   <row city="The Pas,CA" code="YQD" />
//   <row city="Thermal,US" code="TRM" />
//   <row city="Thermopolis,US" code="THP" />
//   <row city="Thessaloniki,GR" code="SKG" />
//   <row city="Thicket Portage,CA" code="YTD" />
//   <row city="Thief River Falls,US" code="TVF" />
//   <row city="Thimarafushi,MV" code="TMF" />
//   <row city="Thingeyri,IS" code="TEY" />
//   <row city="Thionville,FR" code="XTH" />
//   <row city="Thira Island,GR" code="JTR" />
//   <row city="Thirsk,GB" code="XTK" />
//   <row city="Thiruvananthapuram,IN" code="TRV" />
//   <row city="Thisted,DK" code="TED" />
//   <row city="Thohoyandou,ZA" code="THY" />
//   <row city="Thomasville,US" code="TVI" />
//   <row city="Thompson,CA" code="YTH" />
//   <row city="Thorne Bay,US" code="KTB" />
//   <row city="Thorshofn,IS" code="THO" />
//   <row city="Thredbo,AU" code="QTH" />
//   <row city="Three Rivers,US" code="HAI" />
//   <row city="Thunder Bay,CA" code="YQT" />
//   <row city="Thursday Island,AU" code="TIS" />
//   <row city="Tianjin,CN" code="TSN" />
//   <row city="Tianmen,CN" code="TMV" />
//   <row city="Tianshui,CN" code="THQ" />
//   <row city="Tidjikja,MR" code="TIY" />
//   <row city="Tieling,CN" code="TTV" />
//   <row city="Tierp,SE" code="XFU" />
//   <row city="Tifton,US" code="TMA" />
//   <row city="Tiga,NC" code="TGJ" />
//   <row city="Tignes,FR" code="TGF" />
//   <row city="Tijuana,MX" code="TIJ" />
//   <row city="Tikal,GT" code="TKM" />
//   <row city="Tikehau,PF" code="TIH" />
//   <row city="Tiksi,RU" code="IKS" />
//   <row city="Timaru,NZ" code="TIU" />
//   <row city="Timika,ID" code="TIM" />
//   <row city="Timisoara,RO" code="TSR" />
//   <row city="Timmins,CA" code="YTS" />
//   <row city="Tin cities,US" code="TNC" />
//   <row city="Tindouf,DZ" code="TIN" />
//   <row city="Tingo Maria,PE" code="TGI" />
//   <row city="Tingwon,PG" code="TIG" />
//   <row city="Tinian,MP" code="TIQ" />
//   <row city="Tioman,MY" code="TOD" />
//   <row city="Tippi,ET" code="TIE" />
//   <row city="Tirana,AL" code="TIA" />
//   <row city="Tiree,GB" code="TRE" />
//   <row city="Tirgu Mures,RO" code="TGM" />
//   <row city="Tiruchirappali,IN" code="TRZ" />
//   <row city="Tirupati,IN" code="TIR" />
//   <row city="Titusville,US" code="TIX" />
//   <row city="Tivat,ME" code="TIV" />
//   <row city="Tlemcen,DZ" code="TLM" />
//   <row city="Tobago,TT" code="TAB" />
//   <row city="Tobolsk,RU" code="TOX" />
//   <row city="Tobruk,LY" code="TOB" />
//   <row city="Toccoa,US" code="TOC" />
//   <row city="Tocumwal,AU" code="TCW" />
//   <row city="Tofino,CA" code="YAZ" />
//   <row city="Togiak,US" code="TOG" />
//   <row city="Tok Ak,US" code="TKJ" />
//   <row city="Tokat,TR" code="TJK" />
//   <row city="Tokeen,US" code="TKI" />
//   <row city="Toksook Bay,US" code="OOK" />
//   <row city="Tokunoshima,JP" code="TKN" />
//   <row city="Tokushima,JP" code="TKS" />
//   <row city="Tokyo,JP" code="TYO" />
//   <row city="Tol PG,PG" code="TLO" />
//   <row city="Toledo,ES" code="XTJ" />
//   <row city="Toledo,US" code="TOL" />
//   <row city="Toledo,BR" code="TOW" />
//   <row city="Tolitoli,ID" code="TLI" />
//   <row city="Tolu,CO" code="TLU" />
//   <row city="Toluca,MX" code="TLC" />
//   <row city="Tom Price,AU" code="TPR" />
//   <row city="Tomakomai,JP" code="QTM" />
//   <row city="Tomanggong,MY" code="TMG" />
//   <row city="Tombouctou,ML" code="TOM" />
//   <row city="Toms River,US" code="MJX" />
//   <row city="Tomsk,RU" code="TOF" />
//   <row city="Tongcheng,CN" code="TGX" />
//   <row city="Tongliao,CN" code="TGO" />
//   <row city="Tongoa,VU" code="TGH" />
//   <row city="Tongren,CN" code="TEN" />
//   <row city="Tongxiang,CN" code="TVX" />
//   <row city="Tonopah,US" code="TPH" />
//   <row city="Tonsberg,NO" code="XKW" />
//   <row city="Tonu,PG" code="TON" />
//   <row city="Toowoomba,AU" code="TWB" />
//   <row city="Topeka,US" code="TOP" />
//   <row city="Torokina,PG" code="TOK" />
//   <row city="Toronto,CA" code="YTO" />
//   <row city="Torrance,US" code="TOA" />
//   <row city="Torremolinos,ES" code="UTL" />
//   <row city="Torreon,MX" code="TRC" />
//   <row city="Torres,VU" code="TOH" />
//   <row city="Torres,BR" code="TSQ" />
//   <row city="Torrington,US" code="TOR" />
//   <row city="Torsby,SE" code="TYF" />
//   <row city="Tortola,VG" code="TOV" />
//   <row city="Tortoli,IT" code="TTB" />
//   <row city="Tortuguero,CR" code="TTQ" />
//   <row city="Tottenham,GB" code="TTK" />
//   <row city="Tottori,JP" code="TTJ" />
//   <row city="Touba,CI" code="TOZ" />
//   <row city="Touggourt,DZ" code="TGR" />
//   <row city="Touho,NC" code="TOU" />
//   <row city="Toulon,FR" code="TLN" />
//   <row city="Toulouse,FR" code="TLS" />
//   <row city="Tournai,BE" code="ZGQ" />
//   <row city="Tours,FR" code="TUF" />
//   <row city="Toussus Le Noble,FR" code="TNF" />
//   <row city="Townsville,AU" code="TSV" />
//   <row city="Toyama,JP" code="TOY" />
//   <row city="Tozeur,TN" code="TOE" />
//   <row city="Trabzon,TR" code="TZX" />
//   <row city="Trang,TH" code="TST" />
//   <row city="Trapani,IT" code="TPS" />
//   <row city="Traralgon,AU" code="TGN" />
//   <row city="Trat,TH" code="TDX" />
//   <row city="Traverse cities,US" code="TVC" />
//   <row city="Treasure Cay,BS" code="TCB" />
//   <row city="Trelew,AR" code="REL" />
//   <row city="Trento,IT" code="ZIA" />
//   <row city="Trenton,CA" code="YTR" />
//   <row city="Trenton,US" code="TTN" />
//   <row city="Tres Arroyos,AR" code="OYO" />
//   <row city="Tres Cruces,AR" code="TCV" />
//   <row city="Tres Lagoas,BR" code="TJL" />
//   <row city="Tres Rios,BR" code="QIH" />
//   <row city="Treviso,IT" code="TSF" />
//   <row city="Trier,DE" code="ZQF" />
//   <row city="Trieste,IT" code="TRS" />
//   <row city="Trincomalee,LK" code="TRR" />
//   <row city="Trinidad,CU" code="TND" />
//   <row city="Trinidad,US" code="TAD" />
//   <row city="Trinidad,BO" code="TDD" />
//   <row city="Tripoli,LY" code="TIP" />
//   <row city="Trois Rivieres,CA" code="YRQ" />
//   <row city="Trollhattan,SE" code="THN" />
//   <row city="Trombetas,BR" code="TMT" />
//   <row city="Tromso,NO" code="TOS" />
//   <row city="Trona,US" code="TRH" />
//   <row city="Trondheim,NO" code="TRD" />
//   <row city="Troutdale,US" code="TTD" />
//   <row city="Troy,US" code="TOI" />
//   <row city="Troyes,FR" code="QYR" />
//   <row city="Truckee,US" code="TKF" />
//   <row city="Trujillo,PE" code="TRU" />
//   <row city="Truk,FM" code="TKK" />
//   <row city="Truro,CA" code="XLZ" />
//   <row city="Truscott Mungalalu,AU" code="TTX" />
//   <row city="Tsaratanana,MG" code="TTS" />
//   <row city="Tshikapa,CD" code="TSH" />
//   <row city="Tsiroanomandidy,MG" code="WTS" />
//   <row city="Tsu Jp,JP" code="QTY" />
//   <row city="Tsuen Wan,HK" code="ZTW" />
//   <row city="Tsukuba,JP" code="XEI" />
//   <row city="Tsumeb,NA" code="TSB" />
//   <row city="Tsushima,JP" code="TSJ" />
//   <row city="Tuba cities,US" code="TBC" />
//   <row city="Tubarao,BR" code="ZHX" />
//   <row city="Tubuai Island,PF" code="TUB" />
//   <row city="Tububil,PG" code="TBG" />
//   <row city="Tucson,US" code="TUS" />
//   <row city="Tucuma,BR" code="TUZ" />
//   <row city="Tucuman,AR" code="TUC" />
//   <row city="Tucumcari,US" code="TCC" />
//   <row city="Tucupita,VE" code="TUV" />
//   <row city="Tucurui,BR" code="TUR" />
//   <row city="Tudela,ES" code="EEL" />
//   <row city="Tuebingen,DE" code="ZQH" />
//   <row city="Tufi,PG" code="TFI" />
//   <row city="Tuguegarao,PH" code="TUG" />
//   <row city="Tuktoyaktuk,CA" code="YUB" />
//   <row city="Tulare,US" code="TLR" />
//   <row city="Tulcan,EC" code="TUA" />
//   <row city="Tulcea,RO" code="TCE" />
//   <row city="Tulear,MG" code="TLE" />
//   <row city="Tuli Block,BW" code="TLD" />
//   <row city="Tulle,FR" code="XTU" />
//   <row city="Tulsa,US" code="TUL" />
//   <row city="Tuluksak,US" code="TLT" />
//   <row city="Tulum,MX" code="TUY" />
//   <row city="Tumaco,CO" code="TCO" />
//   <row city="Tumbes,PE" code="TBP" />
//   <row city="Tumbler Ridge,CA" code="TUX" />
//   <row city="Tumut,AU" code="TUM" />
//   <row city="Tunica,US" code="UTM" />
//   <row city="Tunis,TN" code="TUN" />
//   <row city="Tuntatuliak,US" code="WTL" />
//   <row city="Tununak,US" code="TNK" />
//   <row city="Tunxi,CN" code="TXN" />
//   <row city="Tupelo,US" code="TUP" />
//   <row city="Turaif,SA" code="TUI" />
//   <row city="Turbat,PK" code="TUK" />
//   <row city="Turbo,CO" code="TRB" />
//   <row city="Turin,IT" code="TRN" />
//   <row city="Turkmanbashi,TM" code="KRW" />
//   <row city="Turkmenabad,TM" code="CRZ" />
//   <row city="Turku,FI" code="TKU" />
//   <row city="Turpan,CN" code="TLQ" />
//   <row city="Turtle Island,FJ" code="TTL" />
//   <row city="Turukhansk,RU" code="THX" />
//   <row city="Tuscaloosa,US" code="TCL" />
//   <row city="Tuskegee,US" code="TGE" />
//   <row city="Tuticorin,IN" code="TCR" />
//   <row city="Tuxtla Gutierrez,MX" code="TGZ" />
//   <row city="Tuy Hoa,VN" code="TBB" />
//   <row city="Tuzla,BA" code="TZL" />
//   <row city="Tver,RU" code="KLD" />
//   <row city="Twenty Nine Palms,US" code="TNP" />
//   <row city="Twin Falls,US" code="TWF" />
//   <row city="Twin Hills,US" code="TWA" />
//   <row city="Tyler,US" code="TYR" />
//   <row city="Tynset,NO" code="ZMX" />
//   <row city="Tyonek,US" code="TYE" />
//   <row city="Tyumen,RU" code="TJM" />
//   <row city="Tzaneen,ZA" code="LTA" />
//   <row city="U Tapao,TH" code="UTP" />
//   <row city="UPLAND,US" code="CCB" />
//   <row city="UZICE,RS" code="UZC" />
//   <row city="Ua Huka,PF" code="UAH" />
//   <row city="Ua Pou,PF" code="UAP" />
//   <row city="Ubatuba,BR" code="UBT" />
//   <row city="Ube Jp,JP" code="UBJ" />
//   <row city="Uberaba,BR" code="UBA" />
//   <row city="Uberlandia,BR" code="UDI" />
//   <row city="Ubon Ratchathani,TH" code="UBP" />
//   <row city="Udaipur,IN" code="UDR" />
//   <row city="Uden,NL" code="UDE" />
//   <row city="Udine,IT" code="UDN" />
//   <row city="Udon Thani,TH" code="UTH" />
//   <row city="Ufa RU,RU" code="UFA" />
//   <row city="Uganik,US" code="UGI" />
//   <row city="Uherske Hradiste,CZ" code="UHE" />
//   <row city="Uige,AO" code="UGO" />
//   <row city="Ujung Pandang,ID" code="UPG" />
//   <row city="Ukhta,RU" code="UCT" />
//   <row city="Ukiah,US" code="UKI" />
//   <row city="Ukunda,KE" code="UKA" />
//   <row city="Ulaanbaatar,MN" code="ULN" />
//   <row city="Ulan Ude,RU" code="UUD" />
//   <row city="Ulanhot,CN" code="HLH" />
//   <row city="Ulei,VU" code="ULB" />
//   <row city="Ulm,DE" code="QUL" />
//   <row city="Ulsan,KR" code="USN" />
//   <row city="Ulundi,ZA" code="ULD" />
//   <row city="Ulyanovsk,RU" code="ULY" />
//   <row city="Umea,SE" code="UME" />
//   <row city="Umiat,US" code="UMT" />
//   <row city="Umiujaq,CA" code="YUD" />
//   <row city="Umnak Island,US" code="UMB" />
//   <row city="Umtata,ZA" code="UTT" />
//   <row city="Umuarama,BR" code="UMU" />
//   <row city="Una BR,BR" code="UNA" />
//   <row city="Unalakleet,US" code="UNK" />
//   <row city="Union Island,VC" code="UNI" />
//   <row city="University Oxford,US" code="UOX" />
//   <row city="Unna,DE" code="ZQI" />
//   <row city="Unst,GB" code="UNT" />
//   <row city="Upernavik,GL" code="JUV" />
//   <row city="Upernavik Kujalleq,GL" code="UPK" />
//   <row city="Upington,ZA" code="UTN" />
//   <row city="Uppsala,SE" code="QYX" />
//   <row city="Uralsk,KZ" code="URA" />
//   <row city="Uranium cities,CA" code="YBE" />
//   <row city="Uray,RU" code="URJ" />
//   <row city="Urdzhar,KZ" code="UZR" />
//   <row city="Urgench,UZ" code="UGC" />
//   <row city="Urmieh,IR" code="OMH" />
//   <row city="Urrao,CI" code="URR" />
//   <row city="Uruapan,MX" code="UPN" />
//   <row city="Uruguaina,BR" code="URG" />
//   <row city="Urumqi,CN" code="URC" />
//   <row city="Usak,TR" code="USQ" />
//   <row city="Useless Loop,AU" code="USL" />
//   <row city="Ushuaia,AR" code="USH" />
//   <row city="Usinsk,RU" code="USK" />
//   <row city="Ust Kamenogorsk,KZ" code="UKK" />
//   <row city="Ust Kut,RU" code="UKX" />
//   <row city="Ust Kuyga,RU" code="UKG" />
//   <row city="Ust Maya,RU" code="UMS" />
//   <row city="Ust Nera,RU" code="USR" />
//   <row city="Ust Tsilma,RU" code="UTS" />
//   <row city="Ustaoset,NO" code="XUX" />
//   <row city="Utarom,ID" code="KNG" />
//   <row city="Utica,US" code="UCA" />
//   <row city="Utila,HN" code="UII" />
//   <row city="Utopia,US" code="UTO" />
//   <row city="Utrecht,NL" code="UTC" />
//   <row city="Utsunomiya,JP" code="QUT" />
//   <row city="Uummannaq,GL" code="UMD" />
//   <row city="Uvalde,US" code="UVA" />
//   <row city="Uvol,PG" code="UVO" />
//   <row city="Uzhgorod,UA" code="UDJ" />
//   <row city="Uzwil,CH" code="ZKX" />
//   <row city="VALLENAR,CL" code="VLR" />
//   <row city="VENDOME,FR" code="XVD" />
//   <row city="Vaasa,FI" code="VAA" />
//   <row city="Vadodara,IN" code="BDQ" />
//   <row city="Vadso,NO" code="VDS" />
//   <row city="Vaduz,LI" code="QVU" />
//   <row city="Vaeroy,NO" code="VRY" />
//   <row city="Val D Isere,FR" code="VAZ" />
//   <row city="Val D Or,CA" code="YVO" />
//   <row city="Valdez,US" code="VDZ" />
//   <row city="Valdivia,CL" code="ZAL" />
//   <row city="Valdosta,US" code="VLD" />
//   <row city="Valenca,BR" code="VAL" />
//   <row city="Valence,FR" code="VAF" />
//   <row city="Valencia,ES" code="VLC" />
//   <row city="Valencia,VE" code="VLN" />
//   <row city="Valenciennes,FR" code="XVS" />
//   <row city="Valentine,US" code="VTN" />
//   <row city="Valera,VE" code="VLV" />
//   <row city="Valesdir,VU" code="VLS" />
//   <row city="Valjevo,RS" code="QWV" />
//   <row city="Valladolid,ES" code="VLL" />
//   <row city="Valle,US" code="VLE" />
//   <row city="Valle De La Pascua,VE" code="VDP" />
//   <row city="Valledupar,CO" code="VUP" />
//   <row city="Vallejo,US" code="VLO" />
//   <row city="Vallemi,PY" code="VMI" />
//   <row city="Valparaiso,CL" code="VAP" />
//   <row city="Valparaiso,US" code="VPS" />
//   <row city="Valparaiso,US" code="VPZ" />
//   <row city="Valverde,ES" code="VDE" />
//   <row city="Van Horn,US" code="VHN" />
//   <row city="Van TR,TR" code="VAN" />
//   <row city="Vancouver,CA" code="YVR" />
//   <row city="Vandalia,US" code="VLA" />
//   <row city="Vanimo,PG" code="VAI" />
//   <row city="Vannes,FR" code="VNE" />
//   <row city="Vanrook,AU" code="VNR" />
//   <row city="Vanuabalavu,FJ" code="VBV" />
//   <row city="Varadero,CU" code="VRA" />
//   <row city="Varanasi,IN" code="VNS" />
//   <row city="Vardoe,NO" code="VAW" />
//   <row city="Varese,IT" code="QVA" />
//   <row city="Varginha,BR" code="VAG" />
//   <row city="Varkaus,FI" code="VRK" />
//   <row city="Varna,BG" code="VAR" />
//   <row city="Vasteras,SE" code="VST" />
//   <row city="Vastervik,SE" code="VVK" />
//   <row city="Vatomandry,MG" code="VAT" />
//   <row city="Vatulele Island,FJ" code="VTF" />
//   <row city="Vava U,TO" code="VAV" />
//   <row city="Vaxjo,SE" code="VXO" />
//   <row city="Vegarshei,NO" code="ZYV" />
//   <row city="Vejle,DK" code="VEJ" />
//   <row city="Velbert,DE" code="ZQJ" />
//   <row city="Veliky Ustyug,RU" code="VUS" />
//   <row city="Venetie,US" code="VEE" />
//   <row city="Venice,US" code="VNC" />
//   <row city="Venice,IT" code="VCE" />
//   <row city="Vennesla,NO" code="XXE" />
//   <row city="Ventspils,LV" code="VNT" />
//   <row city="Veracruz,MX" code="VER" />
//   <row city="Verbier,CH" code="ZKY" />
//   <row city="Verdal,NO" code="XXG" />
//   <row city="Verdun,FR" code="XVN" />
//   <row city="Verkhnevilyuysk,RU" code="VHV" />
//   <row city="Vermilion,CA" code="YVG" />
//   <row city="Vernal,US" code="VEL" />
//   <row city="Vernon,CA" code="YVE" />
//   <row city="Vero Beach,US" code="VRB" />
//   <row city="Verona,IT" code="VRN" />
//   <row city="Versailles,FR" code="XVE" />
//   <row city="Vesoul,FR" code="XVO" />
//   <row city="Vestmannaeyjar,IS" code="VEY" />
//   <row city="Veszprem,HU" code="ZFP" />
//   <row city="Vevey,CH" code="ZKZ" />
//   <row city="Viborg,DK" code="ZGX" />
//   <row city="Vicenza,IT" code="VIC" />
//   <row city="Vichy,FR" code="VHY" />
//   <row city="Vicksburg,US" code="VKS" />
//   <row city="Vicosa,BR" code="QVC" />
//   <row city="Victoria,CA" code="YYJ" />
//   <row city="Victoria,US" code="VCT" />
//   <row city="Victoria Falls,ZW" code="VFA" />
//   <row city="Victoria Harbour,CA" code="YWH" />
//   <row city="Victoria Island,NG" code="QVL" />
//   <row city="Victorville,US" code="VCV" />
//   <row city="Vidalia,US" code="VDI" />
//   <row city="Vidin,BG" code="VID" />
//   <row city="Viedma,AR" code="VDM" />
//   <row city="Vienna,AT" code="VIE" />
//   <row city="Vienne,FR" code="XVI" />
//   <row city="Vientiane,LA" code="VTE" />
//   <row city="Vieques,US" code="VQS" />
//   <row city="Viersen,DE" code="ZQK" />
//   <row city="Vierzon,FR" code="XVZ" />
//   <row city="Vieste,IT" code="VIF" />
//   <row city="Vieux Fort St Lucia,LC" code="UVF" />
//   <row city="Vigo,ES" code="VGO" />
//   <row city="Vijayawada,IN" code="VGA" />
//   <row city="Vila Real,PT" code="VRL" />
//   <row city="Vila Velha,BR" code="QVH" />
//   <row city="Vilanculos,MZ" code="VNX" />
//   <row city="Vilhelmina,SE" code="VHM" />
//   <row city="Vilhena,BR" code="BVH" />
//   <row city="Villa Constitucion,MX" code="VIB" />
//   <row city="Villa Gesell,AR" code="VLG" />
//   <row city="Villa Mercedes,AR" code="VME" />
//   <row city="Villagarzon,CO" code="VGZ" />
//   <row city="Villahermosa,MX" code="VSA" />
//   <row city="Villars,CH" code="ZLA" />
//   <row city="Villavicencio,CO" code="VVC" />
//   <row city="Villefranche Sur Saone,FR" code="XVF" />
//   <row city="Villepinte,FR" code="XVP" />
//   <row city="Villingen Schwenningen,DE" code="ZQL" />
//   <row city="Vilnius,LT" code="VNO" />
//   <row city="Vilyuysk,RU" code="VYI" />
//   <row city="Vina Del Mar,CL" code="KNA" />
//   <row city="Vinales,CU" code="VNL" />
//   <row city="Vincennes,US" code="OEA" />
//   <row city="Vinh cities,VN" code="VII" />
//   <row city="Vinnitsa,UA" code="VIN" />
//   <row city="Vinstra,NO" code="XKZ" />
//   <row city="Viqueque,TL" code="VIQ" />
//   <row city="Virac,PH" code="VRC" />
//   <row city="Virgin Gorda,VG" code="VIJ" />
//   <row city="Visalia,US" code="VIS" />
//   <row city="Visby,SE" code="VBY" />
//   <row city="Viseu,PT" code="VSE" />
//   <row city="Vishakhapatanam,IN" code="VTZ" />
//   <row city="Visp,CH" code="ZLB" />
//   <row city="Vitebsk,BY" code="VTB" />
//   <row city="Vitoria,ES" code="VIT" />
//   <row city="Vitoria,BR" code="VIX" />
//   <row city="Vitoria Da Conquista,BR" code="VDC" />
//   <row city="Vitre,FR" code="XVT" />
//   <row city="Vittel,FR" code="VTL" />
//   <row city="Vivigani,PG" code="VIV" />
//   <row city="Vladikavkaz,RU" code="OGZ" />
//   <row city="Vladivostok,RU" code="VVO" />
//   <row city="Vohemar,MG" code="VOH" />
//   <row city="Volgograd,RU" code="VOG" />
//   <row city="Vologda,RU" code="VGD" />
//   <row city="Volos,GR" code="VOL" />
//   <row city="Volta Redonda,BR" code="QVR" />
//   <row city="Vopnafjordur,IS" code="VPN" />
//   <row city="Vorkuta,RU" code="VKT" />
//   <row city="Voronezh,RU" code="VOZ" />
//   <row city="Voss,NO" code="XVK" />
//   <row city="Votuporanga,BR" code="VOT" />
//   <row city="Vryheid,ZA" code="VYD" />
//   <row city="Vung Tau,VN" code="VTG" />
//   <row city="Vuokatti,FI" code="XVM" />
//   <row city="Vyborg,RU" code="VBR" />
//   <row city="WENGEN,CH" code="ZLE" />
//   <row city="WHEATLAND,US" code="EAN" />
//   <row city="WILLOWS,US" code="WLW" />
//   <row city="WINTERTHUR,CH" code="ZLI" />
//   <row city="Wabo,PG" code="WAO" />
//   <row city="Wabush,CA" code="YWK" />
//   <row city="Waca,ET" code="WAC" />
//   <row city="Waco,US" code="ACT" />
//   <row city="Waco Kungo,AO" code="CEO" />
//   <row city="Waddington,GB" code="WTN" />
//   <row city="Wadi Al Dawaser,SA" code="WAE" />
//   <row city="Waedenswil,CH" code="ZLC" />
//   <row city="Wagga Wagga,AU" code="WGA" />
//   <row city="Wahpeton,US" code="WAH" />
//   <row city="Waiblingen,DE" code="ZQO" />
//   <row city="Waingapu,ID" code="WGP" />
//   <row city="Wainwright,US" code="AIN" />
//   <row city="Waitangi,NZ" code="WGN" />
//   <row city="Wajir,KE" code="WJR" />
//   <row city="Wake Island,UM" code="AWK" />
//   <row city="Wakefield Westgate,GB" code="XWD" />
//   <row city="Wakkanai,JP" code="WKJ" />
//   <row city="Wakunai,PG" code="WKN" />
//   <row city="Walaha,VU" code="WLH" />
//   <row city="Wales,US" code="WAA" />
//   <row city="Walgett,AU" code="WGE" />
//   <row city="Walla Walla,US" code="ALW" />
//   <row city="Wallis Island,WF" code="WLS" />
//   <row city="Walnut Ridge,US" code="ARG" />
//   <row city="Walterboro,US" code="RBW" />
//   <row city="Waltham,US" code="WLM" />
//   <row city="Walvis Bay,NA" code="WVB" />
//   <row city="Wamena,ID" code="WMX" />
//   <row city="Wanaka,NZ" code="WKA" />
//   <row city="Wanganui,NZ" code="WAG" />
//   <row city="Wangaratta,AU" code="WGT" />
//   <row city="Wangerooge,DE" code="AGE" />
//   <row city="Wanigela,PG" code="AGL" />
//   <row city="Wanning,CN" code="WXJ" />
//   <row city="Wanxian,CN" code="WXN" />
//   <row city="Wapakoneta,US" code="AXV" />
//   <row city="Wapenamanda,PG" code="WBM" />
//   <row city="Warangal,IN" code="WGC" />
//   <row city="Warder,ET" code="WRA" />
//   <row city="Warnemuende,DE" code="ZWD" />
//   <row city="Warri,NG" code="QRW" />
//   <row city="Warrington,GB" code="XWN" />
//   <row city="Warrnambool,AU" code="WMB" />
//   <row city="Warsaw,PL" code="WAW" />
//   <row city="Warwick,AU" code="WAZ" />
//   <row city="Washington,US" code="WAS" />
//   <row city="Washington,US" code="WSG" />
//   <row city="Wasilla,US" code="WWA" />
//   <row city="Waskaganish,CA" code="YKQ" />
//   <row city="Wasu,PG" code="WSU" />
//   <row city="Waterfall,US" code="KWF" />
//   <row city="Waterford,IE" code="WAT" />
//   <row city="Waterkloof,ZA" code="WKF" />
//   <row city="Waterloo,US" code="ALO" />
//   <row city="Watertown,US" code="ART" />
//   <row city="Watertown,US" code="ATY" />
//   <row city="Waterville,US" code="WVL" />
//   <row city="Watford,CA" code="XWA" />
//   <row city="Watson Lake,CA" code="YQH" />
//   <row city="Watsonville,US" code="WVI" />
//   <row city="Wau cities,SS" code="WUU" />
//   <row city="Wau PG,PG" code="WUG" />
//   <row city="Waukegan,US" code="UGN" />
//   <row city="Waukesha,US" code="UES" />
//   <row city="Wausau,US" code="AUW" />
//   <row city="Wavre,BE" code="ZGV" />
//   <row city="Wawa,CA" code="YXZ" />
//   <row city="Waynesburg,US" code="WAY" />
//   <row city="Weatherford,US" code="WEA" />
//   <row city="Webequie Indian Reserve,CA" code="YWP" />
//   <row city="Wedau,PG" code="WED" />
//   <row city="Wedjh,SA" code="EJH" />
//   <row city="Wee Waa,AU" code="WEW" />
//   <row city="Weihai,CN" code="WEH" />
//   <row city="Weinfelden,CH" code="ZLD" />
//   <row city="Weipa,AU" code="WEI" />
//   <row city="Welkom,ZA" code="WEL" />
//   <row city="Wellingborough,GB" code="XWE" />
//   <row city="Wellington,NZ" code="WLG" />
//   <row city="Wells,US" code="LWL" />
//   <row city="Wellsville,US" code="ELZ" />
//   <row city="Welshpool,AU" code="WHL" />
//   <row city="Wenatchee,US" code="EAT" />
//   <row city="Wenchang,CN" code="WEC" />
//   <row city="Wendover,US" code="ENV" />
//   <row city="Wenling,CN" code="WLI" />
//   <row city="Wenshan,CN" code="WNH" />
//   <row city="Wenzhou,CN" code="WNZ" />
//   <row city="Wesel,DE" code="ZQP" />
//   <row city="West Bend,US" code="ETB" />
//   <row city="West End,BS" code="WTD" />
//   <row city="West Kuparuk,US" code="XPU" />
//   <row city="West Memphis,US" code="AWM" />
//   <row city="West Palm Beach,US" code="PBI" />
//   <row city="West Point,US" code="KWP" />
//   <row city="West Wyalong,AU" code="WWY" />
//   <row city="West Yellowstone,US" code="WYS" />
//   <row city="Westerland,DE" code="GWT" />
//   <row city="Westerly,US" code="WST" />
//   <row city="Westhampton,US" code="FOK" />
//   <row city="Westport,NZ" code="WSZ" />
//   <row city="Westray,GB" code="WRY" />
//   <row city="Wettingen,CH" code="ZLF" />
//   <row city="Wetzikon,CH" code="ZKW" />
//   <row city="Wetzlar,DE" code="ZQQ" />
//   <row city="Wewak,PG" code="WWK" />
//   <row city="Wexford,IE" code="WEX" />
//   <row city="Weymont,CA" code="XFQ" />
//   <row city="Whakatane,NZ" code="WHK" />
//   <row city="Whale Cove,CA" code="YXN" />
//   <row city="Whale Pass,US" code="WWP" />
//   <row city="Whalsay,GB" code="WHS" />
//   <row city="Whangarei,NZ" code="WRE" />
//   <row city="Wharton,US" code="WHT" />
//   <row city="Wheeling,US" code="HLG" />
//   <row city="Whidbey Island,US" code="NUW" />
//   <row city="Whistler,CA" code="YWS" />
//   <row city="White Mountain,US" code="WMO" />
//   <row city="White Plains,US" code="HPN" />
//   <row city="White River,CA" code="YWR" />
//   <row city="Whitecourt,CA" code="YZU" />
//   <row city="Whitefield,US" code="HIE" />
//   <row city="Whitehorse,CA" code="YXY" />
//   <row city="Whiteriver,US" code="WTR" />
//   <row city="Whitesburg,US" code="BRG" />
//   <row city="Whyalla,AU" code="WYA" />
//   <row city="Wichita,US" code="ICT" />
//   <row city="Wichita Falls,US" code="SPS" />
//   <row city="Wick,GB" code="WIC" />
//   <row city="Wiesbaden,DE" code="UWE" />
//   <row city="Wigan,GB" code="XWI" />
//   <row city="Wil CH,CH" code="ZLH" />
//   <row city="Wildman Lake,US" code="EWD" />
//   <row city="Wilhelmshaven,DE" code="WVN" />
//   <row city="Wilkesboro,US" code="IKB" />
//   <row city="Williams Lake,CA" code="YWL" />
//   <row city="Williamsport,US" code="IPT" />
//   <row city="Williston,US" code="ISN" />
//   <row city="Willmar,US" code="ILL" />
//   <row city="Willow,US" code="WOW" />
//   <row city="Wilmington,US" code="ILN" />
//   <row city="Wilmington,US" code="ILG" />
//   <row city="Wilmington,US" code="ILM" />
//   <row city="Wilton,US" code="QCW" />
//   <row city="Wiluna,AU" code="WUN" />
//   <row city="Winchester,US" code="WGO" />
//   <row city="Windhoek,NA" code="WDH" />
//   <row city="Windorah,AU" code="WNR" />
//   <row city="Windsor,CA" code="YQG" />
//   <row city="Winfield,US" code="WLD" />
//   <row city="Winnemucca,US" code="WMC" />
//   <row city="Winnipeg,CA" code="YWG" />
//   <row city="Winona,US" code="ONA" />
//   <row city="Winslow,US" code="INW" />
//   <row city="Winston-Salem,US" code="INT" />
//   <row city="Winter Haven,US" code="GIF" />
//   <row city="Winter Park,US" code="QWP" />
//   <row city="Winton,AU" code="WIN" />
//   <row city="Wipim,PG" code="WPM" />
//   <row city="Wiscasset,US" code="ISS" />
//   <row city="Wisconsin Rapids,US" code="ISW" />
//   <row city="Wiseman,US" code="WSM" />
//   <row city="Wismar,DE" code="ZWM" />
//   <row city="Witten,DE" code="ZQR" />
//   <row city="Wittenberg,DE" code="ZWT" />
//   <row city="Witu,PG" code="WIU" />
//   <row city="Woburn,US" code="WBN" />
//   <row city="Woitape,PG" code="WTP" />
//   <row city="Woking,GB" code="XWO" />
//   <row city="Wolf Point,US" code="OLF" />
//   <row city="Wolfsburg,DE" code="ZQU" />
//   <row city="Wollogorang,AU" code="WLL" />
//   <row city="Wollongong,AU" code="WOL" />
//   <row city="Wolverhampton,GB" code="XVW" />
//   <row city="Wonju,KR" code="WJU" />
//   <row city="Wood River,US" code="WOD" />
//   <row city="Woodstock,CA" code="XIP" />
//   <row city="Woodward,US" code="WWR" />
//   <row city="Woomera,AU" code="UMR" />
//   <row city="Worcester,US" code="ORH" />
//   <row city="Worland,US" code="WRL" />
//   <row city="Worms,DE" code="ZQV" />
//   <row city="Worthington,US" code="OTG" />
//   <row city="Wrangell,US" code="WRG" />
//   <row city="Wroclaw,PL" code="WRO" />
//   <row city="Wuhai,CN" code="WUA" />
//   <row city="Wuhan,CN" code="WUH" />
//   <row city="Wuhu,CN" code="WHU" />
//   <row city="Wunnumin Lake,CA" code="WNN" />
//   <row city="Wuppertal,DE" code="UWP" />
//   <row city="Wurzburg,DE" code="QWU" />
//   <row city="Wuvulu Island,PG" code="WUV" />
//   <row city="Wuxi,CN" code="WUX" />
//   <row city="Wuyishan,CN" code="WUS" />
//   <row city="Wuzhou,CN" code="WUZ" />
//   <row city="Wyndham,AU" code="WYN" />
//   <row city="Wyoming,CA" code="XWY" />
//   <row city="Xanxere,BR" code="AXE" />
//   <row city="Xi An,CN" code="SIA" />
//   <row city="Xiahe,CN" code="GXH" />
//   <row city="Xiamen,CN" code="XMN" />
//   <row city="Xiangfan,CN" code="XFN" />
//   <row city="Xiangyang,CN" code="KLJ" />
//   <row city="Xianning,CN" code="IUO" />
//   <row city="Xiantao,CN" code="XTQ" />
//   <row city="Xiaogan,CN" code="XJW" />
//   <row city="Xieng Khouang,LA" code="XKH" />
//   <row city="Xilinhot,CN" code="XIL" />
//   <row city="Xin Hui,CN" code="ZBZ" />
//   <row city="Xingtai,CN" code="XNT" />
//   <row city="Xining,CN" code="XNN" />
//   <row city="Xinyang,CN" code="XYW" />
//   <row city="Xinyuan cities,CN" code="NLT" />
//   <row city="Xuzhou,CN" code="XUZ" />
//   <row city="YOSHKAR OLA,RU" code="JOK" />
//   <row city="Yacuiba,BO" code="BYC" />
//   <row city="Yakima,US" code="YKM" />
//   <row city="Yakushima,JP" code="KUM" />
//   <row city="Yakutat,US" code="YAK" />
//   <row city="Yakutsk,RU" code="YKS" />
//   <row city="Yalumet,PG" code="KYX" />
//   <row city="Yam Island,AU" code="XMY" />
//   <row city="Yamagata,JP" code="GAJ" />
//   <row city="Yamoussouro,CI" code="ASK" />
//   <row city="Yanan,CN" code="ENY" />
//   <row city="Yanbo,SA" code="YNB" />
//   <row city="Yancheng,CN" code="YNZ" />
//   <row city="Yandicoogina,AU" code="YNN" />
//   <row city="Yandina,SB" code="XYA" />
//   <row city="Yangon,MM" code="RGN" />
//   <row city="Yangyang,KR" code="YNY" />
//   <row city="Yangzhou,CN" code="YTY" />
//   <row city="Yanji,CN" code="YNJ" />
//   <row city="Yankton,US" code="YKN" />
//   <row city="Yantai,CN" code="YNT" />
//   <row city="Yaounde,CM" code="YAO" />
//   <row city="Yap Fm,FM" code="YAP" />
//   <row city="Yarmouth,CA" code="YQI" />
//   <row city="Yaroslavl,RU" code="IAR" />
//   <row city="Yazd,IR" code="AZD" />
//   <row city="Yechon,KR" code="YEC" />
//   <row city="Yellowknife,CA" code="YZF" />
//   <row city="Yeosu,KR" code="RSU" />
//   <row city="Yeovilton,GB" code="YEO" />
//   <row city="Yerevan,AM" code="EVN" />
//   <row city="Yes Bay,US" code="WYB" />
//   <row city="Yevlakh,AZ" code="YLV" />
//   <row city="Yeysk,RU" code="EIK" />
//   <row city="Yibin,CN" code="YBP" />
//   <row city="Yichang,CN" code="YIH" />
//   <row city="Yichun,CN" code="YIC" />
//   <row city="Yichun Shi,CN" code="LDS" />
//   <row city="Yinchuan,CN" code="INC" />
//   <row city="Yingkou,CN" code="JYQ" />
//   <row city="Yining,CN" code="YIN" />
//   <row city="Yiwu,CN" code="YIW" />
//   <row city="Ylivieska,FI" code="YLI" />
//   <row city="Yogyakarta,ID" code="JOG" />
//   <row city="Yokohama,JP" code="YOK" />
//   <row city="Yola,NG" code="YOL" />
//   <row city="Yonago,JP" code="YGJ" />
//   <row city="Yonaguni,JP" code="OGN" />
//   <row city="Yongai,PG" code="KGH" />
//   <row city="York,US" code="THV" />
//   <row city="York,GB" code="QQY" />
//   <row city="York Landing Indian Reserve,CA" code="ZAC" />
//   <row city="Yorke Island,AU" code="OKR" />
//   <row city="Yorkton,CA" code="YQV" />
//   <row city="Yoronjima,JP" code="RNJ" />
//   <row city="Yotvata,IL" code="YOT" />
//   <row city="Young,AU" code="NGA" />
//   <row city="Youngstown,US" code="YNG" />
//   <row city="Yreka,US" code="RKC" />
//   <row city="Yueyanng,CN" code="YUG" />
//   <row city="Yule Island,PG" code="RKU" />
//   <row city="Yulin,CN" code="UYN" />
//   <row city="Yuma,US" code="YUM" />
//   <row city="Yun Cheng,CN" code="YCU" />
//   <row city="Yurimaguas,PE" code="YMS" />
//   <row city="Yushu,CN" code="YUS" />
//   <row city="Yuyao,CN" code="YYP" />
//   <row city="Yuzhno Kurilsk,RU" code="DEE" />
//   <row city="Yuzhno Sakhalinsk,RU" code="UUS" />
//   <row city="Yverdon,CH" code="ZLJ" />
//   <row city="Zabljak,ME" code="ZBK" />
//   <row city="Zacatecas,MX" code="ZCL" />
//   <row city="Zachar Bay,US" code="KZB" />
//   <row city="Zadar,HR" code="ZAD" />
//   <row city="Zagora,MA" code="OZG" />
//   <row city="Zagreb,HR" code="ZAG" />
//   <row city="Zahedan,IR" code="ZAH" />
//   <row city="Zahle,LB" code="QZQ" />
//   <row city="Zakinthos,GR" code="ZTH" />
//   <row city="Zakopane,PL" code="QAZ" />
//   <row city="Zalaegerszeg,HU" code="ZLG" />
//   <row city="Zalengei,SD" code="ZLX" />
//   <row city="Zamboanga,PH" code="ZAM" />
//   <row city="Zamora,MX" code="ZMM" />
//   <row city="Zanaga,CG" code="ANJ" />
//   <row city="Zanesville,US" code="ZZV" />
//   <row city="Zanjan,IR" code="JWN" />
//   <row city="Zanzibar,TZ" code="ZNZ" />
//   <row city="Zapala,AR" code="APZ" />
//   <row city="Zaporozhe,UA" code="OZH" />
//   <row city="Zaqatala,AZ" code="ZTU" />
//   <row city="Zarafsan,UZ" code="AFS" />
//   <row city="Zaragoza,ES" code="ZAZ" />
//   <row city="Zaysan,KZ" code="SZI" />
//   <row city="Zemio,CF" code="IMO" />
//   <row city="Zermatt,CH" code="QZB" />
//   <row city="Zero,IN" code="ZER" />
//   <row city="Zhangjiakou,CN" code="ZQZ" />
//   <row city="Zhangye,CN" code="YZY" />
//   <row city="Zhanjiang,CN" code="ZHA" />
//   <row city="Zhaotong,CN" code="ZAT" />
//   <row city="Zhengzhou,CN" code="CGO" />
//   <row city="Zhenjiang,CN" code="ZUJ" />
//   <row city="Zhezkazgan,KZ" code="DZN" />
//   <row city="Zhi Jiang,CN" code="HJJ" />
//   <row city="Zhigansk,RU" code="ZIX" />
//   <row city="Zhijiang,CN" code="GJN" />
//   <row city="Zhob,PK" code="PZH" />
//   <row city="Zhongshan,CN" code="ZIS" />
//   <row city="Zhongwei,CN" code="ZHY" />
//   <row city="Zhoushan,CN" code="HSN" />
//   <row city="Zhuhai,CN" code="ZUH" />
//   <row city="Zhuzhou,CN" code="DHU" />
//   <row city="Zielona,PL" code="IEG" />
//   <row city="Ziguinchor,SN" code="ZIG" />
//   <row city="Zihuatanejo,MX" code="ZIH" />
//   <row city="Zilina,SK" code="ILZ" />
//   <row city="Zittau,DE" code="ZIT" />
//   <row city="Zlin,CZ" code="GTW" />
//   <row city="Zoersel,BE" code="OBL" />
//   <row city="Zofingen,CH" code="ZLL" />
//   <row city="Zonguldak,TR" code="ONQ" />
//   <row city="Zouerate,MR" code="OUZ" />
//   <row city="Zug Ch,CH" code="ZLM" />
//   <row city="Zurich,CH" code="ZRH" />
//   <row city="Zurs Lech,AT" code="ZRS" />
//   <row city="Zweibruecken,DE" code="ZQW" />
//   <row city="Zyryanka,RU" code="ZKP" />
//   <row city="khowai,IN" code="IXN" />
// </root>
// `;
// var result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
// var result3 = JSON.parse(result2);
// var result4 = result3.elements[0].elements[0];
// console.log(result3);

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})


export class HotelComponent implements OnInit {
  stickyTop: string = "sticky-top";
  public passengers_state;
  HotelDetails: any;
  error: any;
  showHotelLoader: boolean = true;
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
        this.showHotelLoader = false;
      }
      // success path
    );
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

