
exports.seed = function(knex) {
      return knex('table_name').insert([
        {
          "facilityName": "Lake Meridian",
          "latitude": 47.36152717898904,
          "longitude": -122.14433883742281,
          "directions": "Hwy 18 E from Auburn, to Kent-Kangley RD, exit, TL at signal, drive to 152nd AV SE, TR, drive another 3.4/10 mi."
      },
      {
          "facilityName": "Lake Morton",
          "latitude": 47.325307100846835,
          "longitude": -122.0886793828883,
          "directions": "Hwy 18 from Auburn to Hwy 516 (Kent Kangley Rd) TL, go to 152nd Av SE, TL, cont. on to Kent Blk Diamon dRd. Trun on SE 328th Pl. L on 325 Av SE TR to 320th SE. TR onto Lake Morton Rd, access down rd on R."
      },
      {
          "facilityName": "North Lake",
          "latitude": 47.30807157986522,
          "longitude": -122.2891589588921,
          "directions": "I5 N from Tacoma to Hwy 18 E, take 1st exit \"Weyerhauser Wy\" TL, taking Rd on R, at fork access appx 3 mi."
      },
      {
          "facilityName": "Panther Lake",
          "latitude": 47.422598438492855,
          "longitude": -122.18706524945996,
          "directions": "In city of Kent go N on Hwy 515 (108th Ave SE), turn R on 192nd ST SE, then R again on 116th Ave SE, access at end of rd."
      },
      {
          "facilityName": "Plum 1",
          "latitude": 47.551217828254465,
          "longitude": -121.84470737271161,
          "directions": "From the Town of Fall City go north on Hwy. #202 east.  Drive 1.5 miles and turn right on to 361 St. Ave. SE.  Go to stop sign (Fish Hatchery Rd.) and turn left.  The access is on the right .9 miles"
      },
      {
          "facilityName": "Plum 2",
          "latitude": 47.551466590327855,
          "longitude": -121.8505419831279,
          "directions": "From the Town of Fall City go north on Hwy. #202 east.  Drive 1.5 miles and turn right on to 361 St. Ave. SE.  Go to stop sign (Fish Hatchery Rd.) and turn left.  The access is on the right .6 miles."
      },
      {
          "facilityName": "Raging River",
          "latitude": 47.56789040572174,
          "longitude": -121.88256553039112,
          "directions": "In the town of Fall City, turn on Preston-Fall City Rd. toward the town of Preston and I #90.  Cross over Raging River Bridge on immediately turn left on to (SE 44 Pl.).  Access is on the left .5 miles at sharp right curve in road"
      },
      {
          "facilityName": "Richter",
          "latitude": 47.596036852875784,
          "longitude": -121.91384015068236,
          "directions": "In the Town of Fall City go north on Hwy. #203.  After the traffic circle, immediately turn left on to Neal Rd.  Access is on the left 2.8 miles."
      },
      {
          "facilityName": "Shadow Lake",
          "latitude": 47.41103327200362,
          "longitude": -122.08553701769362,
          "directions": "Hwy. #18 east from Auburn take the Maple Valley exit (Hwy. # 169).  Turn left and drive back over Hwy. and continue straight up hill 1.6 miles.  Turn right on to 196th Ave. SE.  Drive 1.3 miles and access is on left at intersection of E 213 St."
      },
      {
          "facilityName": "Shady Lake",
          "latitude": 47.42800260539499,
          "longitude": -122.10678619099392,
          "directions": "Driving Hwy. #18 east from Auburn and take exit to Maple Valley (Hwy. #169).  Then turn left and drive back over Hwy. #18 and right on to Petrovitsky Rd.  Drive approximately 4.2 miles and turn right on to 196th Dr. SE.  The access is on the left."
      },
      {
          "facilityName": "Spring Lake",
          "latitude": 47.436763330800055,
          "longitude": -122.09245019790396,
          "directions": "Driving on Hwy. #18 east from Auburn and take exit to Maple Valley (Hwy. #169).  Then turn left and drive back over Hwy. #18 and right on to Petrovitsky Rd.  Drive approximately 3 miles and turn right on to 196th Ave. SE.  Go 1.1 miles and turn left on 18"
      },
      {
          "facilityName": "Steel Lake",
          "latitude": 47.325870998698356,
          "longitude": -122.29998999948828,
          "directions": "I-5 north of Tacoma, take exit #143 (S. 320th St.).  Then turn left and drive .8 miles and then right on Hwy. #99 (Pacific Hwy. S.).  Then drive .5 miles and then right on to S. 312th St.  Go .6 miles and then left in to City of Federal Way park."
      },
      {
          "facilityName": "Taylor Landing",
          "latitude": 47.744917796768405,
          "longitude": -121.98670449511441,
          "directions": "North from Duvall on SR203 to northern city limit, Left at Public Fishing sign .1 mi down gravel road."
      },
      {
          "facilityName": "Lake Number 12",
          "latitude": 47.323965435123995,
          "longitude": -121.97212815221731,
          "directions": "In the Town of Black Diamond, driving south on Hwy. #169.  Turn left on to SE Green River Gorge Rd. (Lawson St.).  The access is on left 1.9 miles."
      },
      {
          "facilityName": "Walker Lake",
          "latitude": 47.263301397029274,
          "longitude": -121.91074745330738,
          "directions": "In the Town of Enumclaw driving east on Hwy. #410.  At the east end of town turn left on Farman St. N.  Drive 5.8 miles and turn right on to SE Lk. Walker Rd.  Then stay to sharp right in road and continuing over bridge and then up hill.  At the top of hill."
      },
      {
          "facilityName": "Wilderness Lake",
          "latitude": 47.37412960983043,
          "longitude": -122.03754161779752,
          "directions": "Driving east on Hwy. #18 from Auburn.  Take the Maple Valley exit (Hwy. #169).  Turn right and then right again on to Hwy. #169 towards Enumclaw.  Drive .2 miles and turn right on to Witte Rd. SE and go 1.7 miles to 248th St. SE and turn left."
      },
      {
          "facilityName": "Buck Lake",
          "latitude": 47.91118861625813,
          "longitude": -122.55816745714895,
          "directions": "Buck Lake Road: south from Hansville .6 mi on Buck Lake Rd, continue south from public fishing sign to access at end of road."
      },
      {
          "facilityName": "Horseshoe Lake",
          "latitude": 47.40697886572226,
          "longitude": -122.66691312502955,
          "directions": "Sidney Road: west from Purdy 2.6 mi on Hwy 302, right 1.4 mi on 94th Ave NW to public fishing sign (just past county park on right.)"
      },
      {
          "facilityName": "Kitsap Lake",
          "latitude": 47.565714411450884,
          "longitude": -122.70892918207832,
          "directions": "North from Bremerton Naval Shipyard 2.6 mi on Hwy 3, exit at Austin Dr, west .3 mi to stop sign, right .6 mi on Ktisap Wy, left on North Lake Dr .6 mi, left on Kitsap Lake Rd .4 mi to access on left."
      },
      {
          "facilityName": "Long Lake",
          "latitude": 47.4852228561407,
          "longitude": -122.59319150509562,
          "directions": "North from Purdy on Purdy Dr 1 mi to Hwy 16 W 6.8 mi on Hwy 16, exit at Sedgewick Rd and go E 2.5 mi, S on Long Lake Drive SE .4 mi, right at public fishing sign (Clover Valley Rd), south on Clover Valley Rd 1.1 mi to public fishing sign, site on left."
      },
      {
          "facilityName": "Mission Lake",
          "latitude": 47.533385999497135,
          "longitude": -122.82252599945593,
          "directions": "North from Belfair 3.6 mi on Old Belfair Hwy, left 1.8 mi on Belfair-Dewatto Rd, right 2.1 mi on Tiger Mission Rd to public fishing sign, access on left."
      },
      {
          "facilityName": "Tahuya River",
          "latitude": 47.39099720768554,
          "longitude": -123.02227997034943,
          "directions": "West from Belfair 14.7 mi on Hwy 300 to Belfair-Tahuha Rd, .5 mi to Tahuha River Rd, east 1.2 mi to public fishing sign, turn right to access."
      },
      {
          "facilityName": "Tiger Lake",
          "latitude": 47.5221070176919,
          "longitude": -122.82932636399433,
          "directions": "North from Belfair 3.6 mi on Old Belfair Hwy, left 1.8 mi on Belfair-Dewatto Rd, right 1.1 mi on Tiger Mission Rd, left on Tiger Rd .3 mi, left at public fishing sign."
      },
      {
          "facilityName": "Wildcat Lake",
          "latitude": 47.60235831285774,
          "longitude": -122.76593721120874,
          "directions": "Southwest from Seabeck 3.7 mi on Seabeck-Holly Rd, left 4.7 mi on Holly Rd, left .3 mi on Lakeview Ave, left at public fishing sign on Lakeview NW Ct appx 300 ft, access on left."
      },
      {
          "facilityName": "Wye Lake",
          "latitude": 47.42201501449676,
          "longitude": -122.75891335871673,
          "directions": "West from Key Center 2.8 mi on Hwy 302, right 3.9 mi on Wright-Bliss Rd, left 1 mi on Wye Lake Blvd to access area."
      },
      {
          "facilityName": "Fiorito Ponds",
          "latitude": 46.93946804715386,
          "longitude": -120.50620652791937,
          "directions": "I-82 westbound exit #3, turn left at stop sign, make an immediate left onto Road #6 travel for 1.2 mi.  \"Public Fishing\" sign left side of Rd.  I-90 eastbound exit #109, turn right at stop sign onto Tjossem Rd. Go for 1.5 mi, turn right onto #6 Rd."
      },
      {
          "facilityName": "King Horn Slough",
          "latitude": 47.214769436989236,
          "longitude": -121.09182232811503,
          "directions": "On I-90 between Cle Elum and Easton take East Nelson Siding Exit, On North side of I-90 go 2.2 miles on Hundley Road to access entrance."
      },
      {
          "facilityName": "Cle Elum Lake",
          "latitude": 47.300373788360666,
          "longitude": -121.10206745169388,
          "directions": "North on SR 903 from Roslyn, 2.5 miles north of Last Resort Restaurant, left at the \"Memorial to Bell Family\" sign."
      },
      {
          "facilityName": "Lavender Lake",
          "latitude": 47.218883935998825,
          "longitude": -121.13144272563648,
          "directions": "West From Cle-Ellum on I-90 Take Exit 74 (West Nelson Siding), Right 50 feet, (on North side of I-90."
      },
      {
          "facilityName": "Mattoon Lake",
          "latitude": 46.97846394556277,
          "longitude": -120.55327834237393,
          "directions": "On I-90 Take Exit 109 at Ellensburg, North .5 miles on Canyon Rd, Left .6 miles on Dammon Road, Left at entrance to access."
      },
      {
          "facilityName": "Teanaway Junction",
          "latitude": 47.171661711149135,
          "longitude": -120.85771484951499,
          "directions": "Three miles E of Cle Elum at junction of Highways 970 & 10; S over railroad to access area."
      },
      {
          "facilityName": "Thrall",
          "latitude": 46.92687385946756,
          "longitude": -120.5167511191774,
          "directions": "On I-90 at Ellensburg, take Exit 109, South on Canyon Road 3.3 miles, West on Ringer Road .3 miles to access on left (note: Ringer Road is a loop road)."
      },
      {
          "facilityName": "Leidl",
          "latitude": 45.93768550532986,
          "longitude": -121.11907311543426,
          "directions": "From Goldendale go west on SR 142 11 miles, turn right on Glenwood Highway, go 11 miles to Leidle Bridge, across bridge access sites are on both sides of road, ramp on south side of road. Bank fishing and boat access."
      },
      {
          "facilityName": "Mineral Springs",
          "latitude": 45.81886834205784,
          "longitude": -121.11773125157028,
          "directions": "From SR 14 at Lyle take SR142 north, go 15.5 miles (through Klickitat) to access on left."
      },
      {
          "facilityName": "Rowland Lake",
          "latitude": 45.70981552389844,
          "longitude": -121.38081092116302,
          "directions": "From Bingen/White Salmon go east on SR 14 for 4 miles, turn left on County Road 1230, follow road 0.3 miles to access on right."
      },
      {
          "facilityName": "Stinson Flats",
          "latitude": 45.92418844561706,
          "longitude": -121.11025595281315,
          "directions": "From Goldendale go west on SR 142 11 miles, turn north on Glenwood Highway, go 10 miles, turn left down hill to access area."
      },
      {
          "facilityName": "I-5",
          "latitude": 46.413445052443414,
          "longitude": -122.89092962945321,
          "directions": "From I-5 take exit 57, go west through intersection (Rodgers Road) 1.1 miles, turn right on Mandy Road, go 2.4 miles, turn left into access."
      },
      {
          "facilityName": "Massey Bar",
          "latitude": 46.458752939629235,
          "longitude": -122.80758633277216,
          "directions": "From I-5 take exit 63 to SR 505, go east 2.3 miles, turn left on Jackson Highway, go 1.1 miles, turn right on Spencer Road, go 0.8 miles, turn right on Buckley Road, follow road 0.7 miles to access."
      },
      {
          "facilityName": "Mineral Lake",
          "latitude": 46.71927823959158,
          "longitude": -122.18191026087477,
          "directions": "Go north from the town of Mineral 0.3 miles on west side of lake to boat ramp and parking."
      },
      {
          "facilityName": "Plummer Lake",
          "latitude": 46.71798011013512,
          "longitude": -122.97512503651213,
          "directions": "From I-5, exit 81 east on Mellon to Ellsbury St on the left, to Lakeshore Drive on the left, around lake to Tilley Ave, to North on Lewis St, follow Lewis St  to access at end."
      },
      {
          "facilityName": "Wallace",
          "latitude": 46.40611699890037,
          "longitude": -122.93182599981772,
          "directions": "I-5 to Exit 57.  W on Barnes Dr and continue straignt onto Rogers Rd.  After 2 mi, R on Mandy Rd. After 0.5 mi, L into Wallace Rock Products and follow Public Fishing sign to parking lot.  Follow gravel path to river bank."
      },
      {
          "facilityName": "Fishtrap Lake",
          "latitude": 47.35501877235079,
          "longitude": -117.8243846969593,
          "directions": "From Spokane, go west on I-90 to Fishtrap Exit, then south 2 miles on Old State Highway to Scroggie Road, then east 1.5 miles to Public Fishing sign."
      },
      {
          "facilityName": "Fourth of July Lake",
          "latitude": 47.269778148919706,
          "longitude": -117.96602510706522,
          "directions": "From Spokane, go west on I-90, go 36 miles to Sprague Exit State Highway 23, then south on State Highway 23, go 2 miles to Public Fishing sign, then west 1 mile to access."
      },
      {
          "facilityName": "Benson Lake",
          "latitude": 47.33707399882008,
          "longitude": -122.92104200023132,
          "directions": "East from Shelton 10 mi on Hwy 3, north 1.9 mi on East Benson Lake Rd, south .1 mi to Benson Lake Access Area on right."
      },
      {
          "facilityName": "Cady Lake",
          "latitude": 47.42783680571338,
          "longitude": -123.05063199614156,
          "directions": "From Belfair go W on Hwy 300 3.4 mi, then N 7.4 mi on Belfair Tahuya Rd, then R on Dewatto Rd 1.8 mi, L on Cady Rd, site at end of gravel rd."
      },
      {
          "facilityName": "Devereaux Lake",
          "latitude": 47.407586637747116,
          "longitude": -122.84408639335206,
          "directions": "From Belfair, go south on Hwy 3 3.4 mi, then west on Lake Deveraux Rd .3 mi access on left."
      },
      {
          "facilityName": "Haven Lake",
          "latitude": 47.457167334138774,
          "longitude": -122.97712560141028,
          "directions": "From Belfair go west on Hwy 300 3.4 mi, turn right on Belfair-Tahuha Rd, go 4 mi, turn right on NE Haven Wy, go 1.6 mi turn left on Rhodeodendron Dr, go 100 yds, take right to its end."
      },
      {
          "facilityName": "Skokomish River - Hwy 101",
          "latitude": 47.30909013890741,
          "longitude": -123.17651140777305,
          "directions": "Just south of Skokomish River bridge on Hwy 101, Access on East side of Hwy."
      },
      {
          "facilityName": "Isabella Lake",
          "latitude": 47.16690685318122,
          "longitude": -123.11683252737011,
          "directions": "Delight Park Road, Shelton: at south Shelton exit on Hwy 101, go south .9 mi on Storey Rd, right on Delight Park-Isabella Lk Rd 1 mi to access area."
      },
      {
          "facilityName": "Island Lake",
          "latitude": 47.25006783596601,
          "longitude": -123.11925901632318,
          "directions": "North from Shelton appx 3 mi (mp344), right .6 mi on Shelton Springs Rd, left .4 mi on Island Lake DR to Island Lake access on right."
      },
      {
          "facilityName": "Lake Limerick",
          "latitude": 47.280580967500214,
          "longitude": -123.0509517732647,
          "directions": "East from Shelton 4.2 mi on Hwy 3, left on Mason Lake Rd 2.2 mi, left on St. Andrew Dr .5 mi to Limerick Lake access area."
      },
      {
          "facilityName": "Lost Lake",
          "latitude": 47.16431540438563,
          "longitude": -123.24653431882517,
          "directions": "West from south Shelton 9.3 mi on Lost Lake Rd (Cloquallum Rd), right on Lost Lake Rd Rd 1 mi, to access on left."
      },
      {
          "facilityName": "Maggie Lake",
          "latitude": 47.403498276326836,
          "longitude": -123.03061886019954,
          "directions": "West from Belfair 14.7 mi on Hwy 300, right on Belfair-Tahuha Rd 3.2 mi, right on Lakeshore Dr S to stop sign, left on Lakeshore Dr N .4 mi, right at public fishing sign."
      },
      {
          "facilityName": "Nahwatzel Lake",
          "latitude": 47.24047674643729,
          "longitude": -123.32658813569564,
          "directions": "From Hwy 101 at the Matlock exit go west on Shelton-Matlock Rd 10.6 mi to Nahwatzel Lake access area (just before the store, turn right)"
      },
      {
          "facilityName": "Panther Lake",
          "latitude": 47.51859306768911,
          "longitude": -122.85209590621494,
          "directions": "North from Belfair 3.6 mi on Old Belfair Hwy, right on Belfair-Dewatto Rd 4 mi to public fishing sign, access on both sides of rd."
      },
      {
          "facilityName": "Phillips Lake",
          "latitude": 47.257154998769884,
          "longitude": -122.9540529995819,
          "directions": "Northeast from Shelton appx 7 mi on Hwy 3, right on Pickering-Spencer Rd 1 mi, right on Phillips Lake Lp Rd stay to left .9 mi to access."
      },
      {
          "facilityName": "Smith",
          "latitude": 47.319625325073496,
          "longitude": -123.20099899273917,
          "directions": "Sunnyside RoadNorth from Shelton 6.9 mi on Hwy 101, left on Sunnyside Rd 1.5 mi to access on left."
      },
      {
          "facilityName": "Spencer Lake",
          "latitude": 47.262106234993325,
          "longitude": -122.96870476114418,
          "directions": "Northeast from Shelton appx 7 mi on Hwy 3, right on Pikcering Rd 3 mi, right on Spencer Lk Rd 1 mi to acces on left."
      },
      {
          "facilityName": "Tee Lake",
          "latitude": 47.43719058182446,
          "longitude": -123.02239469012007,
          "directions": "Tee Lake Road: from Belfair go west on Hwy 300 3.4 mi then north on Belfair-Tahuha Rd 7.5 mi then west on NE Dewatto Rd .3 mi then east on Tee Lk Rd 1 mi turn left at public fishing sign."
      },
      {
          "facilityName": "Trails End Lake",
          "latitude": 47.375685719238014,
          "longitude": -122.8920034006736,
          "directions": "Trails End Drive: from Belfair go south on Hwy 3 turn west on Hwy 106, go 4 mi, turn left on E Trails Rd, go 1.5 mi, turn left on Trails End Drive, go .3 mi access on left."
      },
      {
          "facilityName": "Twin Lakes",
          "latitude": 47.48259550194078,
          "longitude": -122.95041306914852,
          "directions": "From Belfair W on Hwy 300 3.4 mi, TR on Belfair-Tahuha Rd 4 mi, TR NE Haven Wy 2.4 mi, TL @ NE Mtn Vw Dr .2 mi, TR @ stop sign .7 mi, TL Tahuha Blacksmith Rd (gravel), .5 mi TR gravel Rd not named, 1.2 mi TL @ Twinn Lakes sign, access is .5 mi on R"
      },
      {
          "facilityName": "Union River",
          "latitude": 47.447185427460724,
          "longitude": -122.84132797574244,
          "directions": "Highway 300, Belfair: from Belfair go west on Hwy 300 .8 mi, site on left."
      },
      {
          "facilityName": "Lake Wooten",
          "latitude": 47.46472336508072,
          "longitude": -122.98552750156175,
          "directions": "Mountain View Drive: from Belfair go west on Hwy 300 3.4 mi, turn right on Belfair-Tahuha Rd, go 4 mi, turn right on NE Haven Wy go 2.4 mi, take left at stop sign, Mtn View Dr, go .1 mi, access on right."
      },
      {
          "facilityName": "Blue Lake South",
          "latitude": 48.67221391750868,
          "longitude": -119.69029556491127,
          "directions": "From the town of Loomis take Broadway street (Sinlahekin Rd) go South for approx. 11.5 miles turn right at public fishing sign."
      },
      {
          "facilityName": "Blue Lake North",
          "latitude": 48.682710495256806,
          "longitude": -119.6875310798434,
          "directions": "From the town of Loomis take Broadway street (Sinlahekin Rd) go south for approx. 10.5 miles turn right at public fishing sign."
      },
      {
          "facilityName": "Spectacle Lake East",
          "latitude": 48.81361034174345,
          "longitude": -119.53486237684676,
          "directions": "From the town of Loomis go east on road for 5 mi. turn right at public fishing sign."
      },
      {
          "facilityName": "Aeneas Lake",
          "latitude": 48.677001778371825,
          "longitude": -119.50800934284304,
          "directions": "From Tonasket go .3 miles on 4th St. go acroos bridge and turn left,  .5 miles on hwy 7, turn right on north Pine creek Road, go 3.6 miles, turn right at access"
      },
      {
          "facilityName": "Averill",
          "latitude": 48.151416165319105,
          "longitude": -120.0574678890221,
          "directions": "Highway 153, Methow.  14.7 mi. north of Pateros.  Turn left at public fishing sign."
      },
      {
          "facilityName": "Bendtsen",
          "latitude": 48.21615657395438,
          "longitude": -120.1259127283015,
          "directions": "Highway 153, Carlton.  South of Carlton."
      },
      {
          "facilityName": "Campbell Lake",
          "latitude": 48.44044049585835,
          "longitude": -120.06657667886292,
          "directions": "From Winthrop, Eastside County Rd for 1.3 miles; right onto Bear Creek Rd for 1.8 mi; left onto Lester Rd for 2.4 mi; right Campbell Lake Rd for 0.9 mi to site on left"
      },
      {
          "facilityName": "Conners Lake",
          "latitude": 48.75107509344926,
          "longitude": -119.66274312807913,
          "directions": "At north end of Sinlahekin wildlife area next to headquarters."
      },
      {
          "facilityName": "Cutchie 1",
          "latitude": 48.98782137557301,
          "longitude": -119.71912392254528,
          "directions": "From Loomis, north on Loomis-Oroville Rd for 9.4 mi; left on Chopaka Rd for 7.2 mi to site on right"
      },
      {
          "facilityName": "Cutchie 2",
          "latitude": 48.95799124596642,
          "longitude": -119.71475325636645,
          "directions": "From Loomis, north on the Loomis-Oroville Rd for 9.4 mi; left on Chopaka Rd for 4.3 mi to site on right"
      },
      {
          "facilityName": "Cutchie 3",
          "latitude": 48.948745711729515,
          "longitude": -119.65299739620514,
          "directions": "Loomis Oroville Highway, Loomis"
      },
      {
          "facilityName": "Davis Lake",
          "latitude": 48.44258201837537,
          "longitude": -120.12133963425528,
          "directions": "From Twisp go north on Old Twisp WinThorp rd. east side of river, 7.2 miles to Bear Creek Rd., turn right go 1.6 miles to Davis Lake rd., turn right, .8 miles to public fishing sign."
      },
      {
          "facilityName": "Driscoll Island",
          "latitude": 48.914408371978254,
          "longitude": -119.42368649667806,
          "directions": "From Oroville, south on US 97 for 2 miles to site on right"
      },
      {
          "facilityName": "Fish Lake 1",
          "latitude": 48.61014636082139,
          "longitude": -119.68507132724913,
          "directions": "Head north from Omak on Hwy 97 for about 15 mi.  Take left on Pine Creek follow Rd. for about 6 mi. until you come to lake and wildlife area."
      },
      {
          "facilityName": "Carlton",
          "latitude": 48.24653825169334,
          "longitude": -120.11755424332702,
          "directions": "Located right in town of Carlton 10 mi. south of Twisp."
      },
      {
          "facilityName": "Ell Lake",
          "latitude": 48.601935318627916,
          "longitude": -119.11773887438561,
          "directions": "From Tonasket, east on WA 20 for 13.5 miles, left on Aeneas Valley Road 5.8 miles to site on left"
      },
      {
          "facilityName": "Forde Lake",
          "latitude": 48.73717921397384,
          "longitude": -119.67000378150394,
          "directions": "From Loomis, south on Sinlahekin Road for 6 miles to site on left"
      },
      {
          "facilityName": "Green Lake",
          "latitude": 48.45108069735956,
          "longitude": -119.62709326558937,
          "directions": "From Omak, west on Kermel Road for 2 miles, right on Conconully Road for 4.5 miles, left on Green Lakes Road for 3.3 miles to site on right"
      },
      {
          "facilityName": "Halterman's Hole",
          "latitude": 48.34849651662297,
          "longitude": -120.1072670298569,
          "directions": "From Twisp, Twisp-Carlton Road for 1.2 miles to site on left"
      },
      {
          "facilityName": "Blue Lake - Limebelt",
          "latitude": 48.56833089955434,
          "longitude": -119.6118098263742,
          "directions": "From Omak, Kermel Grade Road for 2.1 miles, right on Conconully Road for 7.3 miles, right on Limebelt Road for 5.9 miles to site on left"
      },
      {
          "facilityName": "Little Green Lake",
          "latitude": 48.43654619587675,
          "longitude": -119.6282360928788,
          "directions": "Green Lake Road"
      },
      {
          "facilityName": "Long Lake",
          "latitude": 48.61203787274392,
          "longitude": -119.1323760798421,
          "directions": "From Tonasket, WA 20 east for 13.5 miles, right on Aeneas Valley Road for 4.8 miles to site on left"
      },
      {
          "facilityName": "Fish Lake 4",
          "latitude": 48.61811449863772,
          "longitude": -119.70677448680271,
          "directions": "Head north from Omak on Hwy 97 for about 15 mi.  Take left on Pine Creek follow Rd. for about 6 mi. until you come to lake and wildlife area."
      },
      {
          "facilityName": "Blue Lake",
          "latitude": 48.90209474968641,
          "longitude": -119.49795460458158,
          "directions": "From Oroville, south on Hwy 7 to Ellemehan Mountain Road, immediate left on Golden Rd for 2.1 miles, right on Blue Lake Road for 2.4 miles to site on right"
      },
      {
          "facilityName": "Patterson Lake",
          "latitude": 48.46154626399604,
          "longitude": -120.24384403324449,
          "directions": "Patterson Lake Road.  From Winthrop go south on Twin Lakes Rd. approximately 3 mi. Turn right on Patterson Lake Rd.  Go about 4.5 mi. turn left at public fishing sign."
      },
      {
          "facilityName": "Pearrygin Lake",
          "latitude": 48.49427249039487,
          "longitude": -120.15937615326378,
          "directions": "Bear Creek Road, Winthrop"
      },
      {
          "facilityName": "Rat Lake",
          "latitude": 48.17618815325612,
          "longitude": -119.80809043880814,
          "directions": "From Brewster, Paradise Hill Road north for 3.8 miles, right on Rat Lake Road for 1.7 miles to site"
      },
      {
          "facilityName": "Rice",
          "latitude": 48.09305904552479,
          "longitude": -120.01875717042115,
          "directions": "From Pateros go north on 153 for 8 mi.  Turn right at public fishing sign."
      },
      {
          "facilityName": "Riverside",
          "latitude": 48.50191675550021,
          "longitude": -119.50243200016429,
          "directions": "From Omak, north on US 97 for 6.4 miles, right on Kendall St for .25 mile, right on Cooper St to site at end of road"
      },
      {
          "facilityName": "Round Lake",
          "latitude": 48.60511827710521,
          "longitude": -119.12322293553295,
          "directions": "From Tonasket, east on WA 20 for 13.5 miles, right at Aeneas Valley Road for 5.1 miles to site on left."
      },
      {
          "facilityName": "Sidley Lake",
          "latitude": 48.99187034496381,
          "longitude": -119.22191729283081,
          "directions": "From Oroville, Chesaw Road for 9.1 miles, left on Molson Road for 5.7 miles to site on left"
      },
      {
          "facilityName": "Silver Nail Lake",
          "latitude": 48.99340336034698,
          "longitude": -119.46253854961328,
          "directions": "From Oroville, north on US 97 for 4.1 miles, left at Boundary Point Road for 0.13 mile, left onto access road on left"
      },
      {
          "facilityName": "Twin Lakes",
          "latitude": 48.44778709873554,
          "longitude": -120.19133860056073,
          "directions": null
      },
      {
          "facilityName": "Wannacut Lake",
          "latitude": 48.86882199908522,
          "longitude": -119.51783300067159,
          "directions": "From Tonasket, north on Loomis-Oroville Road for 5.2 miles, right on Wannacut Lake Road 4.4 miles to site on right"
      },
      {
          "facilityName": "Whitestone Lake",
          "latitude": 48.791962247177466,
          "longitude": -119.46980731768178,
          "directions": "From Tonasket, north Loomis-Oroville Road for 8 miles to site on left"
      },
      ]);
};
