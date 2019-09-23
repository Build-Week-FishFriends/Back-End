
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('water-bodies').insert([
        {
          "facilityName": "Cow Lake",
          "latitude": 47.135255996919575,
          "longitude": -118.15495300359936,
          "directions": "From Ritzville take Wellsandt Rd to east for 11.8 miles to Cow Lake Rd.  Right on Cow Lake Rd (south) for 1.6 miles."
      },
      {
          "facilityName": "Lyle Lake",
          "latitude": 46.89539955746871,
          "longitude": -119.20315122196122,
          "directions": "4.7 mi N on McManamon Road from Othello, R at sign, 1.3 mi."
      },
      {
          "facilityName": "Vernita Bridge",
          "latitude": 46.64004463812574,
          "longitude": -119.744314010078,
          "directions": "East from Yakima on Hwy 24 (mile post 45) cross the river left on Hwy 243 approximately .5 to .75 miles left side of the Hwy."
      },
      {
          "facilityName": "Bezona",
          "latitude": 46.03514699889784,
          "longitude": -117.27290800044979,
          "directions": "Go south from the traffic light in Asotin 31.4 on Highway 129 to Grande Ronde Bridge, then west 1 miles on Grande Ronde Road to Benzona Parking Area."
      },
      {
          "facilityName": "Botts",
          "latitude": 46.030515999463994,
          "longitude": -117.31678299959167,
          "directions": "Go south from traffic light in Asotin 31.6 miles on Highway 129 to Grand Ronde Bridge, then west 1.3 miles on Grande Ronde Road to Botts Parking Area."
      },
      {
          "facilityName": "C. Boggan",
          "latitude": 46.03736699887411,
          "longitude": -117.25255100026327,
          "directions": "Go south from the traffic light in Asotin 31.4 miles on Highway 129 to Access Road on left, go east 1500' to Parking Area on the right."
      },
      {
          "facilityName": "Cottonwood",
          "latitude": 46.03861938002422,
          "longitude": -117.29552382893426,
          "directions": "Go south from traffic light in Asotin 31.4 miles on Highway 129 to Grande Ronde Bridge, then west 2.6 miles on Grand Ronde Road to Cottonwood area on the left."
      },
      {
          "facilityName": "Couse Creek",
          "latitude": 46.205512291885455,
          "longitude": -116.96727652403577,
          "directions": "At intersection of Snake River Rd and Couse Creek Rd approximately 11 miles south of Asotin."
      },
      {
          "facilityName": "Ebsen",
          "latitude": 46.063064883948286,
          "longitude": -116.99611047694614,
          "directions": "From traffic light in Asotin, go south 26 miles on Snake River Road to area on the left."
      },
      {
          "facilityName": "Heller Bar",
          "latitude": 46.08575227415542,
          "longitude": -116.98337450809255,
          "directions": null
      },
      {
          "facilityName": "R. Boggan",
          "latitude": 46.04176399944065,
          "longitude": -117.2535180003232,
          "directions": "Go south from traffic light in Asotin 31.6 miles on Highway 129 to south side of Grande Ronde Bridge to the Parking Area on the right."
      },
      {
          "facilityName": "Shumaker Grade",
          "latitude": 46.044525998993215,
          "longitude": -117.10216700061937,
          "directions": "From Anatone, go south 1.6 miles, then east 1 mile on Montgomery Ridge Road, then south on Shumaker Grade Road 7.1 miles to Parking Area on the left."
      },
      {
          "facilityName": "Benton City",
          "latitude": 46.254846999135154,
          "longitude": -119.47444699962826,
          "directions": "Exit 96 on I-82 (eastbound), Left at stop sign.  Cross the river. Access right side of the road."
      },
      {
          "facilityName": "Upper Dryden",
          "latitude": 47.54444894574155,
          "longitude": -120.57273066221396,
          "directions": "NW from Dryden, cross Wenatchee River, left on Alice Avenue, right on Joesphine to the end on left."
      },
      {
          "facilityName": "Lower Dryden",
          "latitude": 47.54068948542332,
          "longitude": -120.54751881936564,
          "directions": "Turn into town of Dryden on Dryden Ave. Go .01 of a mile turn right onto Main St. Go 70 feet turn left onto Depot Rd. Go .6 of a mile turn left at Public Fishing sign."
      },
      {
          "facilityName": "Fox Miller",
          "latitude": 47.53182877417103,
          "longitude": -120.53238177479395,
          "directions": "In Cashmere go 3.1 mi NW on Sunset Hwy, on access rd, go E .2 mi to parking area."
      },
      {
          "facilityName": "Lower Monitor",
          "latitude": 47.48745413726787,
          "longitude": -120.41518236417679,
          "directions": "Go W into Monitor (by county park), cross bridge, go .1 mi to parking area."
      },
      {
          "facilityName": "Peshastin",
          "latitude": 47.56943299874418,
          "longitude": -120.59539900027431,
          "directions": "In Peshastin go E on School Rd .4 mi to access area."
      },
      {
          "facilityName": "Turkey Shoot",
          "latitude": 47.53332367608273,
          "longitude": -120.5080339362002,
          "directions": "From Casmere go NW on Applets Way go .4 of a mile, turn right on Sunset Ave. Go .5 of a mile, turn right on Turkey Shoot Road, go .7 of a mile to access area."
      },
      {
          "facilityName": "Roses Lake",
          "latitude": 47.90227699900323,
          "longitude": -120.15834400008498,
          "directions": "Approximately 1 mile north of Manson, on Green Ave 0.4 mi north of intersection with Pine Street."
      },
      {
          "facilityName": "Bear Creek",
          "latitude": 48.06124923398376,
          "longitude": -124.23379082327419,
          "directions": "Helstrom Road, Beaver: N from Forks 14.7 mi on Hwy 101, R on Hilstrom Rd to its end."
      },
      {
          "facilityName": "City of P.A.",
          "latitude": 48.113983297370645,
          "longitude": -123.55301566144712,
          "directions": "West from Port Angeles 5.1 mi Hwy 101, north .6 mi on Laird Rd (Lower Elwha Tribal Center), West on Elwha River Rd.8 mi, left on Crown Z Water Rd, access on left."
      },
      {
          "facilityName": "DOT Site",
          "latitude": 48.109842383270234,
          "longitude": -123.55159730119433,
          "directions": "West from Port Angeles 5.1 mi on Hwy 101, north .6 mi on Laird Rd, west 1.1 mi on Elwha River Rd, left after Elwha River Bridge."
      },
      {
          "facilityName": "Leyendecker Park",
          "latitude": 47.91419860150785,
          "longitude": -124.54091443768922,
          "directions": "North from Forks 1.6 mi on Hwy 101, west 8 mi on LaPush Rd, right .3 mi on Mora Rd, left at County Park Rd."
      },
      {
          "facilityName": "Rearing Pond",
          "latitude": 47.93447114986229,
          "longitude": -124.44118924073834,
          "directions": "West from Forks on Bogachiel Wy appx 3.3 mi to end, access just beyond Bogachiel Rearing Pond and WDFW staff housing."
      },
      {
          "facilityName": "Maxfield Road",
          "latitude": 48.022693778835,
          "longitude": -124.38468856335889,
          "directions": "Maxfield Drive, Forks: starting at the Calawah River Bridge north of Forks, go 4.8 mi north on hwy 101, take right on Mayfield Dr, north 2 mi on right"
      },
      {
          "facilityName": "Salmon Hatchery",
          "latitude": 48.05672575825655,
          "longitude": -124.30840535005267,
          "directions": "N from Forks 11.9 mi on Hwy 101, right on Mary Clark Rd, immediate right 1.6 mi at Public Fishing/Hatchery Rd sign, access on right."
      },
      {
          "facilityName": "Sisson",
          "latitude": 48.11905597630217,
          "longitude": -123.55767510658785,
          "directions": "Sission Road, Port Angeles: west from Port Angeles 5.1 mi on Hwy 101, north on Laird Rd .6 mi, west on Elwha River Rd 1.2 mi, NE on Sisson Rd .2 mi."
      },
      {
          "facilityName": "Lake Sutherland",
          "latitude": 48.07426774776998,
          "longitude": -123.71086619804022,
          "directions": "West from Port Angeles 12 mi on Hwy 101, L 1.7 mi on South Shore Rd, R 150 ft on Yew Tree Dr, left into parking area."
      },
      {
          "facilityName": "Thomas",
          "latitude": 47.88736303635017,
          "longitude": -124.3512983791847,
          "directions": "Kallman Road, Forks: SOUTH FROM Forks 6.5 mi on Hwy 101, east .2 on Kallman Rd access on right."
      },
      {
          "facilityName": "Whitcomb-Dimmel",
          "latitude": 47.98065524669576,
          "longitude": -124.39455937278359,
          "directions": "Whitcomb Dimmel, Forks: n from Forks 2.4 mi on Hwy 101, r 1.5 mi on Whitcomb-Dimmel Rd to end."
      },
      {
          "facilityName": "Wilson Bridge",
          "latitude": 47.918332628764496,
          "longitude": -124.49748108551344,
          "directions": "North from Forks 1.6 mi on Hwy 101, west 5.8 mi on SR 110 (LaPush Rd), left appx 1 mi on Wilson Rd to end."
      },
      {
          "facilityName": "Barber",
          "latitude": 45.61637659704946,
          "longitude": -122.34123881193219,
          "directions": "From SR 14 east, turn north on 15th street in Washougal, follow Washougal River Road 31. miles to access on right."
      },
      {
          "facilityName": "Langsdorf Landing",
          "latitude": 45.70412354776459,
          "longitude": -122.75949114111998,
          "directions": "I-5 to Vancouver exit, West on Fourth Plain, N on Lower River Road, boat ramp access just past the marina."
      },
      {
          "facilityName": "Cedar Creek",
          "latitude": 45.93630499929686,
          "longitude": -122.62034400036114,
          "directions": "From I-5 take exit 21 (Woodland) head east on SR 503, go 1 block turn right across bridge, turn left on Hayes Road. Go 12.1 miles (Hayes Road turns into NE Cedar Creek Road) turn left onto NE Etna Road site on your left."
      },
      {
          "facilityName": "County Line",
          "latitude": 45.618107405095095,
          "longitude": -122.25516655396488,
          "directions": "From SR 14, turn north on 15th Street in Washougal, follow Washougal River Road 8.5 miles to access right. Drift boat access and parking."
      },
      {
          "facilityName": "Lacamas Lake",
          "latitude": 45.61569109371274,
          "longitude": -122.41986613916153,
          "directions": null
      },
      {
          "facilityName": "Vancouver Lake",
          "latitude": 45.663673738510425,
          "longitude": -122.71715753968937,
          "directions": "From I-5 exit 1-d in Vancouver (4th Plain Blvd), go west on 4th Plain Blvd 1.5 miles, turn right on Fruit Valley Road, go 0.4 miles, then turn left on LaFrambois Road, go 1.7 miles to the access area. Parking lots and unimproved boat access."
      },
      {
          "facilityName": "Beginners' Hole",
          "latitude": 46.046855998701105,
          "longitude": -122.80710300040076,
          "directions": "From I-5 take exit 32, turn east on Kalama River Road, go 1.2 miles, past store."
      },
      {
          "facilityName": "Island",
          "latitude": 45.93933099863727,
          "longitude": -122.68163699937047,
          "directions": "From I-5 take exit 21 (Woodland), go east on SR 503 4.9 miles, turn right into access. Boat access and bank fishing."
      },
      {
          "facilityName": "Kress Lake",
          "latitude": 46.04651114160943,
          "longitude": -122.85356250865807,
          "directions": "From I-5 take exit 32, turn east on Kalama River rd., go 0.3 miles, turn left on old hwy 99, go 0.3 miles, turn right into access."
      },
      {
          "facilityName": "Pekin Ferry",
          "latitude": 45.86789840994626,
          "longitude": -122.72435088114128,
          "directions": "From I-5 take exit 21 (Woodland), go west on SR 503 (Goerig Road) 2 blocks west of I-5 bridge, turn left on Lakeshore Drive, go 1.3 miles, turn left on South Pekin Road. Follow 2 miles to access. Bank fishing and boat access."
      },
      {
          "facilityName": "Modrow Bridge",
          "latitude": 46.047477999346825,
          "longitude": -122.83670300030063,
          "directions": "From I-5 take exit 32 turn east on Kalama River Road, go 1.2 miles, turn east across Modrow Bridge, just past bridge turn left down dirt road to access. Bank fishing and boat access."
      },
      {
          "facilityName": "Olequa Creek",
          "latitude": 46.367827338522005,
          "longitude": -122.93422456025526,
          "directions": "From I-5 take exit 57, go west 0.1 miles, turn left on Barnes Drive, go 2 miles, turn right on Imboden Road, go 0.1 miles, turn left on Miekler Road, go 0.3 miles to boat access."
      },
      {
          "facilityName": "Prichard",
          "latitude": 46.04617599927214,
          "longitude": -122.77362999956144,
          "directions": "Exit 32, I-5.  Kalama River Rd.  Go 5 mi. east, across from Prichard Store.  Access on right (river side)."
      },
      {
          "facilityName": "Silver Lake",
          "latitude": 46.31068799899915,
          "longitude": -122.77793199969844,
          "directions": "From I-5 take exit 49, go east on SR 504 7.2 miles, turn right on Kerr Road, go 0.5 miles to access. Public fishing, boat access, and fishing dock."
      },
      {
          "facilityName": "Fisherman's Loop",
          "latitude": 46.03886799864952,
          "longitude": -122.86430699993568,
          "directions": "I-5 to Exit 32, west on Kalama River Road for 0.3 mi, left on Fisherman's Loop Rd (Private Road) to site."
      },
      {
          "facilityName": "Sportsman's Club",
          "latitude": 46.038879384719834,
          "longitude": -122.87395511838068,
          "directions": "I-5 to Exit 32, west on Kalama River Road 0.5 mi, left on Sportsmens Club Rd to site."
      },
      {
          "facilityName": "Hand",
          "latitude": 46.044299999229615,
          "longitude": -122.79842200024494,
          "directions": "Kalama River Road, Kalama.  From I-5 go 3.5 mi.  Turn right on dirt road to access area."
      },
      {
          "facilityName": "Woodland Bottoms",
          "latitude": 45.919108296319386,
          "longitude": -122.80261071089963,
          "directions": "From I-5 take exit 22 (Dike access Rd.) Go west on Dike access Rd. 2.5 mi. Turn right on gravel access Rd."
      },
      {
          "facilityName": "Grimes Lake",
          "latitude": 47.721494234278836,
          "longitude": -119.60004721641906,
          "directions": "Enter Mansfield on hwy 172, go straight on railway Ave for .2/10 of a mile, turn left on Mansfield Blvd., go 7.8 miles turn left on graveled road go 1/2 mile to access"
      },
      {
          "facilityName": "Jameson Lake",
          "latitude": 47.67481797573987,
          "longitude": -119.62783142830304,
          "directions": "20 mi W of Coulee City on Hwy 2, R on Jameson Rd for 6.5 mi to resort, .7 to access."
      },
      {
          "facilityName": "Clark Pond",
          "latitude": 46.51860899883868,
          "longitude": -119.06978699987285,
          "directions": "West approx 2 miles on Sheffield Road from Mesa, Left 4.4 miles on Langford Road, Right .9 miles on Ironwood Rd., Right at Public Hunting sign."
      },
      {
          "facilityName": "Mesa Lake",
          "latitude": 46.56511916793313,
          "longitude": -119.04642393936716,
          "directions": "From Mesa, go west on Sheffield Rd. approx 2 miles, left on Langford Rd. .9 miles, left at public use sign."
      },
      {
          "facilityName": "Ringold",
          "latitude": 46.50525599946093,
          "longitude": -119.26010400047836,
          "directions": "From Basin City, go south on County Road 170 approx 7.8 miles, Right .8 miles on Ringold River Road to \"T\", Right then Left on right side of canal .2 miles to access"
      },
      {
          "facilityName": "Frenchman Hills 1",
          "latitude": 46.964025148966826,
          "longitude": -119.49646310293963,
          "directions": "25 mi S of Ephrata on Dodson Rd to Frenchman Hills Rd, L 3 mi."
      },
      {
          "facilityName": "Winchester Lake 1",
          "latitude": 47.1073261106996,
          "longitude": -119.61850977758458,
          "directions": "14 mi S of Ephrata on Dodson Rd. R onto Frontage rd for 3 mi."
      },
      {
          "facilityName": "Winchester Lake 2",
          "latitude": 47.117841154743346,
          "longitude": -119.62031354036634,
          "directions": "14 mi S of Ephrata on Frontage Rd., R onto Frontage Rd for 2 mi, R on E NW for 1 mi, L on 2 NW"
      },
      {
          "facilityName": "Frenchman Hills 3",
          "latitude": 46.978480671906496,
          "longitude": -119.58562441065303,
          "directions": "25 mi S of Ephrata on Dodson Rd to Frenchman HIlls Rd, R 1 mi."
      },
      {
          "facilityName": "Winchester Lake 3",
          "latitude": 47.14180235148345,
          "longitude": -119.63919205385332,
          "directions": "3.8 miles S of Ephrata on Hwy 28, L on E NW for 8.5, R on 3 NW for 2.2 mi."
      },
      {
          "facilityName": "Adams Road",
          "latitude": 47.016011002428996,
          "longitude": -119.77061207793011,
          "directions": "5 mi S of George on S Frontage Rd, R on Adams Rd, L at sign."
      },
      {
          "facilityName": "Alkali Lake",
          "latitude": 47.522964286199795,
          "longitude": -119.49476962650266,
          "directions": "N of Soap Lake 9.8 mi, R at sign."
      },
      {
          "facilityName": "Ankeny Road North",
          "latitude": 47.63977574938932,
          "longitude": -119.3220106448677,
          "directions": "West from Coulee City on Hwy 2, go approximately 2 mi. and turn right at public fishing sign.  Go 1.2 mi. to campground and boat launch."
      },
      {
          "facilityName": "Ankeny Road South",
          "latitude": 47.628371806656524,
          "longitude": -119.32840119518163,
          "directions": "West from Coulee City on Hwy 2, go approximately 2 mi. and trn right at public fishing sign.  Go .2 mi. to turn right at \"Y\" to boat launch."
      },
      {
          "facilityName": "Barker Canyon",
          "latitude": 47.90273282366699,
          "longitude": -119.1653523040026,
          "directions": "From Grand Coulee on Hwy 174 going north and west go about 10 mi. to Barker Canyon Rd.  Turn left, go 6.1 mi. to access."
      },
      {
          "facilityName": "Beda Lake",
          "latitude": 47.049037109455384,
          "longitude": -119.54710595939248,
          "directions": "18 m. S of Ephrata on Dodson Rd.  Access road 3.8 mi south of I-90."
      },
      {
          "facilityName": "Billy Clapp Lake",
          "latitude": 47.452754646276,
          "longitude": -119.25278632634533,
          "directions": "From Soap Lake go east on HWY 28 for 10 mi.  To J NE turn left go 2.6 mi. to access at end of Rd."
      },
      {
          "facilityName": "Blue Lake",
          "latitude": 47.55926310882478,
          "longitude": -119.45123718081334,
          "directions": "11.8 mi N of Soap Lake on Hwy 17, R on Moore Rd 1.6 mi, L on B St."
      },
      {
          "facilityName": "Blythe",
          "latitude": 46.96974603888052,
          "longitude": -119.33437495724553,
          "directions": "Moses Lake to 17 to M SE to O'Sullivan Dam Rd, R 7.1 mi"
      },
      {
          "facilityName": "Buckshot",
          "latitude": 46.71065245167367,
          "longitude": -119.95248463088446,
          "directions": "2 mi S on Hwy 243 past Mattawa, R at sign, 1 3/4 mi access area."
      },
      {
          "facilityName": "Caliche Lakes",
          "latitude": 47.03292410655136,
          "longitude": -119.92791057267691,
          "directions": "4 mi So of George on S Frontage Rd, L at sign."
      },
      {
          "facilityName": "Stan Coffin Lake",
          "latitude": 47.14939216162619,
          "longitude": -119.91946735613955,
          "directions": "4.6 mi S of Quincy on Hwy 281 R on 5 NW for 3.2 mi, L for 0.9 mi to access."
      },
      {
          "facilityName": "Corral Lake",
          "latitude": 46.96924866640927,
          "longitude": -119.31112775248022,
          "directions": "From Moses Lake take Hwy 17 to Rd M.  Take Rd M south to O'Sullivan Dam Rd.  West on O'Sullivan Dam Rd for 6.2 mi.  Left at fishing access sign."
      },
      {
          "facilityName": "Crab Creek",
          "latitude": 47.0662542989824,
          "longitude": -119.35936233419216,
          "directions": "Moses Lake take I-90 W to exit 174 (South Frontage Road).  From exit 174 turn left on Hansen Rd.  Turn right on S Frontage Rd NW and continue for 2.4 mi and turn left at fishing access sign.  Continue for 2.7 mi to \"T\" and turn left.  Continue for 105 ft and turn right.  Continue for 1 mi.     "
      },
      {
          "facilityName": "Dodson & Winchester",
          "latitude": 47.05373162316905,
          "longitude": -119.55555588871918,
          "directions": "From Ephrata on Dodson rd. go south for 17.9 miles, turn left at Public fishing/hunting sign"
      },
      {
          "facilityName": "Evergreen Reservoir East",
          "latitude": 47.12492608676697,
          "longitude": -119.89786444302928,
          "directions": "From Quincy proceed south on Hwy 281 for 6.9 mi to Rd 3 NW.  Turn right onto Rd 3 NW and continue 2.5 mi. "
      },
      {
          "facilityName": "Burke Lake East",
          "latitude": 47.13105773035474,
          "longitude": -119.90007606574152,
          "directions": "6.5 mi S of Quincy on Hwy 281, R on 3 NW for 1.1 mi after canal."
      },
      {
          "facilityName": "Evergreen Reservoir Southwest",
          "latitude": 47.12707895208518,
          "longitude": -119.93211856536209,
          "directions": "4.6 mi S of Quincy on Hwy 281. R on 5 NW for 3.2 mi, L at sign, 3 mi."
      },
      {
          "facilityName": "Fidesco-Harris",
          "latitude": 46.99485530154199,
          "longitude": -119.42561166087623,
          "directions": "ML to 17 to M SE to O'Sullivan Dam, R for 11.8 mi, R at sign, 3 mi."
      },
      {
          "facilityName": "Gage Station",
          "latitude": 47.51324972971305,
          "longitude": -119.50212274736398,
          "directions": "From Soap Lake head North on Hwy 17 for 9 miles take left to access."
      },
      {
          "facilityName": "Glen Williams",
          "latitude": 46.98292428329127,
          "longitude": -119.25571637817355,
          "directions": "From junction of Hwy 17 and I-90 in Moses Lake take Hwy 17 S for 2.1 mi.  Turn Right on Rd M SE and proceed 6.5 mi to O'Sullivan Dam Rd.  Turn right on O'Sullivan Dam Rd and proceed 2.4 mi.  Destination is on the right, just before O'Sullivan Dam.  "
      },
      {
          "facilityName": "Lind Coulee Island",
          "latitude": 46.987101426693144,
          "longitude": -119.22253798377236,
          "directions": "ML to 17 to M SE to O'Sullivan Rd Turn R .7 mies turn right."
      },
      {
          "facilityName": "Lenice Lake",
          "latitude": 46.834361185176675,
          "longitude": -119.83355066746432,
          "directions": ".6 mi N of Schwana on Hwy 243, R on Bev/Crab Ck Rd for 4.1 mi."
      },
      {
          "facilityName": "Lind Coulee Bridge East",
          "latitude": 46.99352825070182,
          "longitude": -119.20792704918479,
          "directions": "2.2 mi S of ML on 17 to Rd M SE approx 6.1 mi, L before bridge."
      },
      {
          "facilityName": "Lind Coulee Bridge West",
          "latitude": 46.98926897913054,
          "longitude": -119.2097711449859,
          "directions": "From Moses Lake, WA 17 south, cross I-90 and go 2.2 mi, right on Road M SE 6.1 mi, right at public fishing sign just before bridge"
      },
      {
          "facilityName": "Long Lake",
          "latitude": 46.9284587400185,
          "longitude": -119.19712293966654,
          "directions": "From Moses Lake, south on WA 17, right on Rd M SE for 6.4 mi, left on O'Sullivan Dam Rd for 0.5 mi , right on Seep Lakes Rd for 4 mi to access road on right"
      },
      {
          "facilityName": "Lower Goose Lake",
          "latitude": 46.92419429547534,
          "longitude": -119.29503241260072,
          "directions": ".7 mi from Mardon Resort on O'Sullivan Dam Rd, L on Rd H SE for 4 mi, L for 2.7 mi."
      },
      {
          "facilityName": "Martha Lake",
          "latitude": 47.094832307057445,
          "longitude": -119.83855589812805,
          "directions": "2 mi E of George on the Frontage Rd, R at the sign."
      },
      {
          "facilityName": "Medicare East",
          "latitude": 46.990342931879745,
          "longitude": -119.26702268129249,
          "directions": "ML to 17 to Rd M SE, S approx 5.3 mi, R on Rd 6 SE, 2.7 mi."
      },
      {
          "facilityName": "Million Dollar Mile North",
          "latitude": 47.75554520652649,
          "longitude": -119.22460865709452,
          "directions": "From Coulee City go northeast on Hwy 2.  Stay north which turns into 155. Go approximately 9 mi. turn left at public fishing sign."
      },
      {
          "facilityName": "Million Dollar Mile South",
          "latitude": 47.71943419519089,
          "longitude": -119.2579739030935,
          "directions": "From Coulee City going northeast on Hwy 12 stay to the north which turns into 155.  Go approximately 6 mi. turn left at public fishing sign."
      },
      {
          "facilityName": "Warden Lake North",
          "latitude": 46.98102305639294,
          "longitude": -119.159089507218,
          "directions": "From Moses Lake, south on WA 17, right on Rd M SE for 6.4 mi, left on O'Sullivan Dam Rd for 2 mi to Warden Lake Road on right."
      },
      {
          "facilityName": "Moses Lake North",
          "latitude": 47.22969383940225,
          "longitude": -119.42866981258811,
          "directions": "7.2 miles S of Ephrata on Hwy 282, R on Neppel Rd for 1/4 mi & R 1000' down hill."
      },
      {
          "facilityName": "North Outlet",
          "latitude": 47.08354252840657,
          "longitude": -119.33335342848738,
          "directions": "From Moses lake head west on I-90, take Mae Valley exit, cross over I-90 take left at T, go .5 miles and take a right, 1.5 miles to access."
      },
      {
          "facilityName": "Lenore Lake North",
          "latitude": 47.53062234074938,
          "longitude": -119.49344615516942,
          "directions": "From Soap Lake head North on Hwy 17 for 10.3 miles take left to access."
      },
      {
          "facilityName": "Evergreen Reservoir North",
          "latitude": 47.13340999881611,
          "longitude": -119.92738999951789,
          "directions": "From Quincy go south on HWY 281 4.9 mi.  Turn right on Rd. 5.  Go 3.1 mi. turn left at public fishing sign.  Go 2.3 mi. to access."
      },
      {
          "facilityName": "Osborn Bay Lake",
          "latitude": 47.91735376766024,
          "longitude": -119.05345306534922,
          "directions": "From Electric City on 155 going southwest about 1 mi.  Turn left at public fishing sign."
      },
      {
          "facilityName": "Lind Coulee Point",
          "latitude": 46.98478511586829,
          "longitude": -119.24283436843614,
          "directions": "ML to 17 to Rd M SE go 6 + mi to O'Sullivan Rd, R go 1 + mi & R at sign."
      },
      {
          "facilityName": "Quincy Lake",
          "latitude": 47.14141410252096,
          "longitude": -119.92764595456413,
          "directions": "4.6 mi S of Quincy on Hwy 281, R onto 5 NW, go 3.2 mi."
      },
      {
          "facilityName": "Rocky Ford Hatchery",
          "latitude": 47.321929089450855,
          "longitude": -119.4397799995868,
          "directions": "3.8 mi S of Soap Lake on Hwy 17, L onto Trout Lodge Rd for 2.1 mi to \"T\" in rd, R .5 mi."
      },
      {
          "facilityName": "Sam Israel",
          "latitude": 47.47485122191269,
          "longitude": -119.51746623911816,
          "directions": "6.2 mi N of Soap Lake on Hwy 17, L at entrance sign."
      },
      {
          "facilityName": "Sampson's Pit",
          "latitude": 46.98771210947069,
          "longitude": -119.24601212134955,
          "directions": "ML to 17 to Rd M SE go S 5.3 mi, R on Rd 6 SE for 1.6 mi, turn L on Rd K.5 for .5 mi."
      },
      {
          "facilityName": "South Outlet",
          "latitude": 47.07950712575221,
          "longitude": -119.33326753019671,
          "directions": "From Moses lake head west on I-90, take Mae Valley exit, cross over I-90 take left at T, go .5 miles and take a right, 2 miles to access"
      },
      {
          "facilityName": "Burke Lake South",
          "latitude": 47.13430259691519,
          "longitude": -119.92546842749522,
          "directions": "4.6 m. S of Quincy on Hwy 281, R on 5 NW for 3.2 mi, L for 2.6 mi."
      },
      {
          "facilityName": "Sunland Estates",
          "latitude": 47.06957999948571,
          "longitude": -120.02544999954428,
          "directions": "Baseline Rd,R 5.1 mi to \"T\",L on W SW,1 mi to Y,R on Sunland Rd 2.9 mi."
      },
      {
          "facilityName": "Warden Outfall",
          "latitude": 46.99188363842804,
          "longitude": -119.17089363964146,
          "directions": "ML to 17 to M SE to O'Sullivan Rd, L for .5 mi., L at sign for 1.5 mi."
      },
      {
          "facilityName": "Burke Lake West",
          "latitude": 47.137529065093005,
          "longitude": -119.93137966491976,
          "directions": "4.6 mi S of Quincy on Hwy 281, R on 5 NW for 3.2 mi, L at sign, 1.9 mi."
      },
      {
          "facilityName": "Black Creek",
          "latitude": 47.010569880404184,
          "longitude": -123.65338899094074,
          "directions": "Devonshire Road, Montesano: west from Montesano .9 mi on Hwy 12, north on Wynoochee Lake-Devonshire Rd exit, north on Wynoochee Valley Rd 3.2 mi, access on left."
      },
      {
          "facilityName": "East Fork Hoquiam",
          "latitude": 47.03767983294362,
          "longitude": -123.8679801339597,
          "directions": "North from Aberdeen 3.2 mi on Hwy 101, east on 16th St 5 mi to public fishing sign, access on left."
      },
      {
          "facilityName": "Failor Lake",
          "latitude": 47.10752514811844,
          "longitude": -123.96427849643071,
          "directions": "Failor Lake Road, Hoquiam: north from Hoquiam 9.9 mi on Hwy 101, left on Failer Lake Rd (public fishing sign) 3.7 mi to access at end of road."
      },
      {
          "facilityName": "Fuller Bridge",
          "latitude": 46.9791058434028,
          "longitude": -123.47854836495652,
          "directions": "Keys Road, Montesano: west from Elma 4.1 mi on Hwy 8, south on Keys Rd 1.4 mi, right at Public Fishing sign (before bridge on dead end road)"
      },
      {
          "facilityName": "Humptulips River - Hwy 101",
          "latitude": 47.23123376915603,
          "longitude": -123.97395760038872,
          "directions": "Highway 101, Humptulips: starting at the Little Hoquiam River bridge in Hoquiam, go north 20 mi on Hwy 101, left at Public Fishing sign, access at end of road."
      },
      {
          "facilityName": "Johns River",
          "latitude": 46.8995757067623,
          "longitude": -123.99613863918569,
          "directions": "West from Aberdeen on Hwy 105 to John's River, cross bridge and turn left .1 mi on John's River Road, left on George Clark Rd .1 mi to area."
      },
      {
          "facilityName": "Tornow Drive",
          "latitude": 47.1539017228881,
          "longitude": -123.50060464787799,
          "directions": "West from Elma 5.6 mi. on Hwy 8, North .3 mi. on Old Monte Brady rd, North 11 mi. on Satsop Rd, northwest 3.1 mi. on West Boundry Rd, West .5 mi. on Tornow Drive. Access on both sides of road."
      },
      {
          "facilityName": "Long Swamp",
          "latitude": 47.03949316498824,
          "longitude": -123.8025122093272,
          "directions": "From Aberdeen at intersection of Market St and Wishkaw River Rd, go west 4.7 mi access on right."
      },
      {
          "facilityName": "Morley",
          "latitude": 47.049436308783086,
          "longitude": -124.04405603314214,
          "directions": "Highway 109: north from Hoquiam 10.4 mi on Hwy 109, just before the Humptulips River turn left at public fishing sign, access is at end of gravel rd."
      },
      {
          "facilityName": "Oakville - Black River",
          "latitude": 46.82996106588227,
          "longitude": -123.18550895817985,
          "directions": "Highway 12, Oakville: southeast 2.6 mi from Oakville on Hwy 12, just after crossing the Black River bridge turn right at public fishing sign."
      },
      {
          "facilityName": "Oakville - Chehalis River",
          "latitude": 46.850185603605325,
          "longitude": -123.2530513323686,
          "directions": "North from Oakville .3 mi on Hwy 12, left on Elma Gate Rd .5 mi to access on left."
      },
      {
          "facilityName": "Porter Bridge",
          "latitude": 46.93871501729612,
          "longitude": -123.3155379956848,
          "directions": "From Elma, go east on Hwy 12 5.9 miles, turn right on Porter Creek Road West, go .1 mile to site on the left after crossing bridge."
      },
      {
          "facilityName": "Reynvaan Bar",
          "latitude": 47.15301435085066,
          "longitude": -124.01670380549905,
          "directions": "Starting in North Hoquiam at Little Hoquiam River bridge, go north 21 mi on Hwy 101, west 8.3 mi on Pacific Beach-Copalis Beach Rd, left at public fishing sign, access at end of dirt road."
      },
      {
          "facilityName": "South Montesano",
          "latitude": 46.963078618676974,
          "longitude": -123.6032284490327,
          "directions": "South from Montesano .8 mi on Hwy 107, left at public fishing sign before bridge over Chehalis River, access at end of road appx .2 mi (past lunber mill yard)"
      },
      {
          "facilityName": "Thorberg",
          "latitude": 47.090612999684325,
          "longitude": -124.06149704595727,
          "directions": "North from Hoquiam 10.1 mi on Hwy 109, right on Powell Rd 2.1 mi, northwest on Copalis Crossing Road 2.2 mi, left at public fishing sign, stay to left, access at end of road."
      },
      {
          "facilityName": "West Fork Satsop",
          "latitude": 47.03668476824208,
          "longitude": -123.52842165288092,
          "directions": "West from Elma on Hwy 12, exit at Brady and go north .3 mi to stop sign, continue north 3.3 mi on Satsop Rd, access on right."
      },
      {
          "facilityName": "Wishkah",
          "latitude": 47.12325399894067,
          "longitude": -123.77536499946785,
          "directions": "From Aberdeen, go north on Wishkah River RD appx 13 mi, turn left on West Branch Rd, access is just before the bridge on right."
      },
      {
          "facilityName": "White Bridge",
          "latitude": 47.104332413756474,
          "longitude": -123.67450038693106,
          "directions": "West from Montesano .9 mi on Hwy 8, exit at Wynoochee Lake-Devonshire Rd and go north on Wynoochee Valley Rd 11.7 mi, left at public fishing sign appx .5 mi on dirt rd to end."
      },
      {
          "facilityName": "White Bridge West",
          "latitude": 47.10459144857993,
          "longitude": -123.67538147525369,
          "directions": "From Montesano, go west .9 mi on Hwy 8, exit at Devonsire Rd, go north 8.7 mi on Wynoochee Valley Rd, then west .6 mi on Wynoochee Wishkah Rd, then E 2 mi on Old Wynoochee Rd to its end."
      },
      {
          "facilityName": "Wharton",
          "latitude": 46.98824873003046,
          "longitude": -123.4921673510854,
          "directions": "West from Elma on Hwy 12, 5.6 mi. South on Monty/Brady Rd., 0.1 mi. East on Brady loop rd 1.1 mi, left on Hiram Hall rd. to end."
      },
      {
          "facilityName": "Deer Lake",
          "latitude": 47.9741063359683,
          "longitude": -122.38023536527083,
          "directions": "From Clinton (So. Whidbey Is.) turn west on Deer Lake Rd."
      },
      {
          "facilityName": "Crocker Lake",
          "latitude": 47.93629549047316,
          "longitude": -122.88449332020585,
          "directions": "North from Quilcene 8.6 mi on Hwy 101, access on right."
      },
      {
          "facilityName": "Leland Lake",
          "latitude": 47.89776264008162,
          "longitude": -122.87656125114228,
          "directions": "North from Quilcene 4.7 mi. on Hwy 101, West on Leland Cut-off Rd 1.4 mi., Left at Public Fishing sign."
      },
      {
          "facilityName": "Big Quilcene River",
          "latitude": 47.81155039916009,
          "longitude": -122.91095402488646,
          "directions": "South from Quilcene 2 mi. on Hwy 101, West before crossing the Quilcene River Bridge, access on right."
      },
      {
          "facilityName": "Tarboo Lake",
          "latitude": 47.92122080546326,
          "longitude": -122.84915357458611,
          "directions": "North from Quilcene 5.5 mi. on Center Road, West on Tarboo Lake Rd 3 mi. on main gravel road to access at end of road."
      },
      {
          "facilityName": "Vannausdle",
          "latitude": 47.87240770513806,
          "longitude": -124.29814921752039,
          "directions": "Dowans Road, Forks: South from Forks 7.6 mi on Hwy 101, east on Dowan's Rd 2.5 mi to access on left."
      },
      {
          "facilityName": "Upper Tolt",
          "latitude": 47.67244965681751,
          "longitude": -121.8556205743126,
          "directions": "Hwy 203 north to city of Carnation, In center of town turn right on Entwhistle Street approx 4 mi to fork in road (80th)."
      },
      {
          "facilityName": "Lake Alice",
          "latitude": 47.53217909521762,
          "longitude": -121.88356545031797,
          "directions": "From Fall City, south on Preston-Fall City Rd for 1/2 mi; left on SE 47th St (Lake Alice Rd) for 2.8 mi to site on right."
      },
      {
          "facilityName": "Bass Lake",
          "latitude": 47.253641118528854,
          "longitude": -121.99154332515303,
          "directions": "Driving south on Hwy. #169 from the Town of Black Diamond cross over the Green River Bridge.  The access is on the right 1.8 miles.from town."
      },
      {
          "facilityName": "Beaver Lake",
          "latitude": 47.586725872892885,
          "longitude": -121.99974914168072,
          "directions": "Take I #90 East from Bellevue.  In Issaquah, take exit 17 (Front St.).  Then turn left back under Hwy. and drive .3 miles and turn right (uphill) on SE Issaquah-Fall City Rd.  Drive 3.3 miles and turn left on Issaquah-Beaver Lk. Rd.  Then drive .5 miles."
      },
      {
          "facilityName": "Lake Desire",
          "latitude": 47.446355144787475,
          "longitude": -122.10803551480066,
          "directions": "Driving Hwy. #18 east from Auburn and take exit to Maple Valley (Hwy. #169).  Then turn left and drive back over Hwy. #18 and right on to Petrovitsky Rd.  Drive approximately 5 miles and turn right on to SE 184th St.  Then tunr left on 172Ave. SE."
      },
      {
          "facilityName": "Lake Dolloff",
          "latitude": 47.323522727687504,
          "longitude": -122.28454679654031,
          "directions": "Driving I-5 north from Tacoma take exit #143 in Federal Way(320th S.) and turn right.  Then drive .7 miles just pass Military Rd. to S.321 St. turn left and then left again on to 44th Ave. S.  Drive .5 miles and turn left on to 312th S.  Access on left .2"
      },
      {
          "facilityName": "Lake Fenwick",
          "latitude": 47.36588357371438,
          "longitude": -122.27225834379496,
          "directions": "From Tacoma, I-5 North to exit 147, right onto 272nd Street, approx 1 mile to left on Lake Fenwick Drive to access on the right"
      },
      {
          "facilityName": "Fish Lake",
          "latitude": 47.26829482490941,
          "longitude": -121.95534525395377,
          "directions": "In the Town of Enumclaw driving east on Hwy. #410.  At the east end of town turn left on Farman St. N.  Then drive 4.6 miles and turn left on 295 Ave. SE.  Drive .3 miles and turn left on 286 Ave. SE (SE 371 St.).  Drive down gravel road."
      },
      {
          "facilityName": "Lake Geneva",
          "latitude": 47.29038971009647,
          "longitude": -122.2853025049797,
          "directions": "I5 N from Tacoma to Hwy 18 E, 1st exit \"Weyerhauser Wy\", TR at top of off ramp, then take 1st L S 344th Wy, TR on 38th AV S, access 2/10 mi on L."
      },
      {
          "facilityName": "Lake Holm",
          "latitude": 47.30077069001939,
          "longitude": -122.12387886020974,
          "directions": "From the City of Auburn on Hwy. #18 east take exit Auburn-Black Diamond.  At the end of exit ramp turn right and drive 2.4 miles and then turn right up-hill on to 152nd Ave. SE (148th Way SE).  Drive 1.2 miles and turn left on to SE Lk.Holm Rd.  Drive 1 m"
      },
      {
          "facilityName": "Kenmore",
          "latitude": 47.75389804129622,
          "longitude": -122.25035349048404,
          "directions": "Hwy 405 N from Renton to Hwy 522 W (Bothell) keep to L, pass 1st light follow around sppx 4 mi, TL on Juanita Dr, access immediately on R over bridge."
      },
      {
          "facilityName": "Lake Killarney",
          "latitude": 47.2901383612565,
          "longitude": -122.28636341071751,
          "directions": "I-5 north from Tacoma exit on to Hwy. #18 east.  Then take the immediate exit to Weyerhaeuser Way.  Then turn right and then take next left on to S. 344th.   Way.  Then drive to 38th Ave, S. and turn right.  The access is on the left .2 miles."
      },
      {
          "facilityName": "Lower Tolt",
          "latitude": 47.63871195520033,
          "longitude": -121.9270196799453,
          "directions": "On Hwy. #203 just south of the town of Carnation turn right after crossing over bridge on to NE Tolt Hill Rd.  The access is on the right .4 miles before crossing over the bridge."
      },
      {
          "facilityName": "Green River",
          "latitude": 47.30109707113763,
          "longitude": -122.17510469423449,
          "directions": "From the City of Auburn on Hwy. #18 east take exit Auburn-Black Diamond. At the end of exit ramp turn right, then right again on SE Greenvalley Rd.  Access is on the left 300ft"
      },
      {
          "facilityName": "Langlois Lake",
          "latitude": 47.63485901817064,
          "longitude": -121.88420828629044,
          "directions": "From the Town of Fall City, take Hwy. #203 north and drive approximately 4.6 miles. Then turn right on to NE 24th St.  Access is on the left 1.7 miles."
      },
      {
          "facilityName": "Lake Margaret",
          "latitude": 47.767497860539535,
          "longitude": -121.9026287129458,
          "directions": "Hwy 203 N just past City of Duval Fork R, up hill on NE Cherry Valley Rd, continue to 318th Wy NE L, stay to R of forks onto 320th AV NE, TR on Lake Margaret RD, stay R"
      },
      ]);
};
