var express = require("express");
var app = express();
var path = require('path');
var _ = require('lodash');
var uniqueId = require('lodash.uniqueid');


let stub = [
    {
    "name": "Christy Mathewson",
    "profitMargin": 97726.4,
    "sell_price": 169696,
    "buy_price": 55000
    },
    {
    "name": "Don Mattingly",
    "profitMargin": 15247.100000000006,
    "sell_price": 116969,
    "buy_price": 90025
    },
    {
    "name": "Dale Murphy",
    "profitMargin": 13515,
    "sell_price": 82250,
    "buy_price": 60510
    },
    {
    "name": "Shawn Green",
    "profitMargin": 12000,
    "sell_price": 90000,
    "buy_price": 69000
    },
    {
    "name": "Paul Molitor",
    "profitMargin": 10500,
    "sell_price": 75000,
    "buy_price": 57000
    },
    {
    "name": "Walter Johnson",
    "profitMargin": 9700,
    "sell_price": 83000,
    "buy_price": 65000
    },
    {
    "name": "Rob Dibble",
    "profitMargin": 6594.100000000006,
    "sell_price": 83999,
    "buy_price": 69005
    },
    {
    "name": "Kris Bryant",
    "profitMargin": 3131,
    "sell_price": 38000,
    "buy_price": 31069
    },
    {
    "name": "Chris Sale",
    "profitMargin": 2953.199999999997,
    "sell_price": 47388,
    "buy_price": 39696
    },
    {
    "name": "Mookie Betts",
    "profitMargin": 2799,
    "sell_price": 102000,
    "buy_price": 89001
    },
    {
    "name": "Paul Goldschmidt",
    "profitMargin": 2229,
    "sell_price": 38200,
    "buy_price": 32151
    },
    {
    "name": "Manny Machado",
    "profitMargin": 2200,
    "sell_price": 58000,
    "buy_price": 50000
    },
    {
    "name": "Cliff Floyd",
    "profitMargin": 2183.0999999999985,
    "sell_price": 20499,
    "buy_price": 16266
    },
    {
    "name": "Johnny Damon",
    "profitMargin": 1927,
    "sell_price": 21420,
    "buy_price": 17351
    },
    {
    "name": "Giancarlo Stanton",
    "profitMargin": 1801,
    "sell_price": 40890,
    "buy_price": 35000
    },
    {
    "name": "Mike Schmidt",
    "profitMargin": 1745.7000000000007,
    "sell_price": 19553,
    "buy_price": 15852
    },
    {
    "name": "Barry Larkin",
    "profitMargin": 1602.5,
    "sell_price": 21395,
    "buy_price": 17653
    },
    {
    "name": "Brian McCann",
    "profitMargin": 1590,
    "sell_price": 11500,
    "buy_price": 8760
    },
    {
    "name": "Clayton Kershaw",
    "profitMargin": 1590,
    "sell_price": 24300,
    "buy_price": 20280
    },
    {
    "name": "Buster Posey",
    "profitMargin": 1574,
    "sell_price": 20100,
    "buy_price": 16516
    },
    {
    "name": "Robin Yount",
    "profitMargin": 1522,
    "sell_price": 19480,
    "buy_price": 16010
    },
    {
    "name": "Carlos Gomez",
    "profitMargin": 1514.1000000000004,
    "sell_price": 13699,
    "buy_price": 10815
    },
    {
    "name": "Andrew Miller",
    "profitMargin": 1372,
    "sell_price": 30980,
    "buy_price": 26510
    },
    {
    "name": "Joe Carter",
    "profitMargin": 1365,
    "sell_price": 19750,
    "buy_price": 16410
    },
    {
    "name": "Cy Young",
    "profitMargin": 1322,
    "sell_price": 28700,
    "buy_price": 24508
    },
    {
    "name": "Lou Gehrig",
    "profitMargin": 1125,
    "sell_price": 20140,
    "buy_price": 17001
    },
    {
    "name": "Tony Gwynn",
    "profitMargin": 1115,
    "sell_price": 20350,
    "buy_price": 17200
    },
    {
    "name": "Jackie Robinson",
    "profitMargin": 1101.0999999999985,
    "sell_price": 19779,
    "buy_price": 16700
    },
    {
    "name": "Ian Kinsler",
    "profitMargin": 1099.0999999999985,
    "sell_price": 20999,
    "buy_price": 17800
    },
    {
    "name": "Alex Bregman",
    "profitMargin": 1096,
    "sell_price": 27440,
    "buy_price": 23600
    },
    {
    "name": "Corey Kluber",
    "profitMargin": 1094.0999999999985,
    "sell_price": 26499,
    "buy_price": 22755
    },
    {
    "name": "David Price",
    "profitMargin": 1079.1,
    "sell_price": 1199,
    "buy_price": 0
    },
    {
    "name": "Kevin Kiermaier",
    "profitMargin": 1077.3,
    "sell_price": 1197,
    "buy_price": 0
    },
    {
    "name": "Aroldis Chapman",
    "profitMargin": 1074.2999999999993,
    "sell_price": 31197,
    "buy_price": 27003
    },
    {
    "name": "Miles Mikolas",
    "profitMargin": 1070.1,
    "sell_price": 1189,
    "buy_price": 0
    },
    {
    "name": "Chipper Jones",
    "profitMargin": 1065,
    "sell_price": 20350,
    "buy_price": 17250
    },
    {
    "name": "Will Smith",
    "profitMargin": 1053,
    "sell_price": 1170,
    "buy_price": 0
    },
    {
    "name": "Tom Seaver",
    "profitMargin": 1050.5,
    "sell_price": 20395,
    "buy_price": 17305
    },
    {
    "name": "Ted Williams",
    "profitMargin": 999.0999999999985,
    "sell_price": 19999,
    "buy_price": 17000
    },
    {
    "name": "Carlos Martinez",
    "profitMargin": 990,
    "sell_price": 1100,
    "buy_price": 0
    },
    {
    "name": "Torii Hunter",
    "profitMargin": 984.1000000000004,
    "sell_price": 17999,
    "buy_price": 15215
    },
    {
    "name": "Justin Turner",
    "profitMargin": 949.0999999999985,
    "sell_price": 20499,
    "buy_price": 17500
    },
    {
    "name": "Frank Thomas",
    "profitMargin": 902.4000000000015,
    "sell_price": 19836,
    "buy_price": 16950
    },
    {
    "name": "Justin Verlander",
    "profitMargin": 890.0999999999985,
    "sell_price": 18439,
    "buy_price": 15705
    },
    {
    "name": "Matt Holliday",
    "profitMargin": 886,
    "sell_price": 18490,
    "buy_price": 15755
    },
    {
    "name": "Fernando Tatis Jr.",
    "profitMargin": 852.1000000000058,
    "sell_price": 73169,
    "buy_price": 65000
    },
    {
    "name": "Stan Musial",
    "profitMargin": 851,
    "sell_price": 19900,
    "buy_price": 17059
    },
    {
    "name": "Drew Jackson",
    "profitMargin": 822.6999999999998,
    "sell_price": 2803,
    "buy_price": 1700
    },
    {
    "name": "Josh Hader",
    "profitMargin": 820.5,
    "sell_price": 24245,
    "buy_price": 21000
    },
    {
    "name": "Felix Hernandez",
    "profitMargin": 816,
    "sell_price": 19740,
    "buy_price": 16950
    },
    {
    "name": "Evan Longoria",
    "profitMargin": 775,
    "sell_price": 20750,
    "buy_price": 17900
    },
    {
    "name": "Bob Feller",
    "profitMargin": 689,
    "sell_price": 20210,
    "buy_price": 17500
    },
    {
    "name": "Gary Carter",
    "profitMargin": 679,
    "sell_price": 18950,
    "buy_price": 16376
    },
    {
    "name": "Benito Santiago",
    "profitMargin": 652,
    "sell_price": 2980,
    "buy_price": 2030
    },
    {
    "name": "Frank Schwindel",
    "profitMargin": 650,
    "sell_price": 2000,
    "buy_price": 1150
    },
    {
    "name": "Brandon Phillips",
    "profitMargin": 599.7999999999993,
    "sell_price": 12222,
    "buy_price": 10400
    },
    {
    "name": "Edwin Diaz",
    "profitMargin": 590,
    "sell_price": 21850,
    "buy_price": 19075
    },
    {
    "name": "Andruw Jones",
    "profitMargin": 570.0999999999985,
    "sell_price": 27199,
    "buy_price": 23909
    },
    {
    "name": "Curtis Granderson",
    "profitMargin": 540,
    "sell_price": 19000,
    "buy_price": 16560
    },
    {
    "name": "Steve Finley",
    "profitMargin": 532,
    "sell_price": 17980,
    "buy_price": 15650
    },
    {
    "name": "Tony Sipp",
    "profitMargin": 507.4000000000001,
    "sell_price": 2066,
    "buy_price": 1352
    },
    {
    "name": "Anthony Rendon",
    "profitMargin": 500,
    "sell_price": 15000,
    "buy_price": 13000
    },
    {
    "name": "Austin Jackson",
    "profitMargin": 500,
    "sell_price": 2780,
    "buy_price": 2002
    },
    {
    "name": "Kerry Wood",
    "profitMargin": 486,
    "sell_price": 19440,
    "buy_price": 17010
    },
    {
    "name": "Mychal Givens",
    "profitMargin": 484.0999999999999,
    "sell_price": 1649,
    "buy_price": 1000
    },
    {
    "name": "Catfish Hunter",
    "profitMargin": 481.3000000000002,
    "sell_price": 6257,
    "buy_price": 5150
    },
    {
    "name": "Jung Ho Kang",
    "profitMargin": 479,
    "sell_price": 1320,
    "buy_price": 709
    },
    {
    "name": "Drew Smyly",
    "profitMargin": 469.0999999999999,
    "sell_price": 1999,
    "buy_price": 1330
    },
    {
    "name": "Yusei Kikuchi",
    "profitMargin": 467.4000000000001,
    "sell_price": 2086,
    "buy_price": 1410
    },
    {
    "name": "Pete Alonso",
    "profitMargin": 443,
    "sell_price": 1700,
    "buy_price": 1087
    },
    {
    "name": "Gary Sanchez",
    "profitMargin": 393,
    "sell_price": 3020,
    "buy_price": 2325
    },
    {
    "name": "Jay Bruce",
    "profitMargin": 383.9000000000001,
    "sell_price": 2121,
    "buy_price": 1525
    },
    {
    "name": "Roy Oswalt",
    "profitMargin": 377.2000000000007,
    "sell_price": 20198,
    "buy_price": 17801
    },
    {
    "name": "John Axford",
    "profitMargin": 368.20000000000005,
    "sell_price": 1798,
    "buy_price": 1250
    },
    {
    "name": "Nick Markakis",
    "profitMargin": 368,
    "sell_price": 2300,
    "buy_price": 1702
    },
    {
    "name": "Minnie Minoso",
    "profitMargin": 365.70000000000005,
    "sell_price": 2063,
    "buy_price": 1491
    },
    {
    "name": "Hanley Ramirez",
    "profitMargin": 357.5999999999999,
    "sell_price": 2624,
    "buy_price": 2004
    },
    {
    "name": "Asdrubal Cabrera",
    "profitMargin": 354.70000000000005,
    "sell_price": 1533,
    "buy_price": 1025
    },
    {
    "name": "Roberto Alomar",
    "profitMargin": 352.1999999999998,
    "sell_price": 2638,
    "buy_price": 2022
    },
    {
    "name": "Edinson Volquez",
    "profitMargin": 343.5,
    "sell_price": 1215,
    "buy_price": 750
    },
    {
    "name": "Kyle Hendricks",
    "profitMargin": 341.5,
    "sell_price": 1885,
    "buy_price": 1355
    },
    {
    "name": "Rick Porcello",
    "profitMargin": 340.4000000000001,
    "sell_price": 1856,
    "buy_price": 1330
    },
    {
    "name": "Manny Banuelos",
    "profitMargin": 339,
    "sell_price": 1390,
    "buy_price": 912
    },
    {
    "name": "Cal Ripken Jr.",
    "profitMargin": 324.2000000000007,
    "sell_price": 19388,
    "buy_price": 17125
    },
    {
    "name": "Devon Travis",
    "profitMargin": 322.5,
    "sell_price": 1775,
    "buy_price": 1275
    },
    {
    "name": "Josh Harrison",
    "profitMargin": 320.20000000000005,
    "sell_price": 1728,
    "buy_price": 1235
    },
    {
    "name": "Andrelton Simmons",
    "profitMargin": 317,
    "sell_price": 10800,
    "buy_price": 9403
    },
    {
    "name": "Cody Bellinger",
    "profitMargin": 313,
    "sell_price": 8500,
    "buy_price": 7337
    },
    {
    "name": "Trea Turner",
    "profitMargin": 310.5,
    "sell_price": 4795,
    "buy_price": 4005
    },
    {
    "name": "Dennis Eckersley",
    "profitMargin": 309.70000000000005,
    "sell_price": 1823,
    "buy_price": 1331
    },
    {
    "name": "Carlos Correa",
    "profitMargin": 308,
    "sell_price": 2900,
    "buy_price": 2302
    },
    {
    "name": "Jason Heyward",
    "profitMargin": 304.8000000000002,
    "sell_price": 2572,
    "buy_price": 2010
    },
    {
    "name": "Eloy Jimenez",
    "profitMargin": 300,
    "sell_price": 57000,
    "buy_price": 51000
    },
    {
    "name": "Carlos Carrasco",
    "profitMargin": 299.6999999999998,
    "sell_price": 3823,
    "buy_price": 3141
    },
    {
    "name": "Lee Smith",
    "profitMargin": 295.0999999999999,
    "sell_price": 2239,
    "buy_price": 1720
    },
    {
    "name": "Ervin Santana",
    "profitMargin": 294.5,
    "sell_price": 2305,
    "buy_price": 1780
    },
    {
    "name": "Jonathan Villar",
    "profitMargin": 291.20000000000005,
    "sell_price": 1448,
    "buy_price": 1012
    },
    {
    "name": "Dylan Moore",
    "profitMargin": 291.1,
    "sell_price": 779,
    "buy_price": 410
    },
    {
    "name": "John Brebbia",
    "profitMargin": 288,
    "sell_price": 600,
    "buy_price": 252
    },
    {
    "name": "A.J. Ramos",
    "profitMargin": 287,
    "sell_price": 1750,
    "buy_price": 1288
    },
    {
    "name": "Cliff Lee",
    "profitMargin": 279.89999999999964,
    "sell_price": 8421,
    "buy_price": 7299
    },
    {
    "name": "Babe Ruth",
    "profitMargin": 277.20000000000005,
    "sell_price": 1948,
    "buy_price": 1476
    },
    {
    "name": "Nolan Ryan",
    "profitMargin": 266,
    "sell_price": 19740,
    "buy_price": 17500
    },
    {
    "name": "Lorenzo Cain",
    "profitMargin": 265.5,
    "sell_price": 2485,
    "buy_price": 1971
    },
    {
    "name": "Chris Taylor",
    "profitMargin": 260.6,
    "sell_price": 504,
    "buy_price": 193
    },
    {
    "name": "Blake Snell",
    "profitMargin": 260.0999999999999,
    "sell_price": 4289,
    "buy_price": 3600
    },
    {
    "name": "Nicholas Castellanos",
    "profitMargin": 259.1,
    "sell_price": 899,
    "buy_price": 550
    },
    {
    "name": "Reed Garrett",
    "profitMargin": 256.5,
    "sell_price": 535,
    "buy_price": 225
    },
    {
    "name": "Patrick Corbin",
    "profitMargin": 250,
    "sell_price": 1750,
    "buy_price": 1325
    },
    {
    "name": "Eloy Jimenez",
    "profitMargin": 244.5999999999999,
    "sell_price": 2444,
    "buy_price": 1955
    },
    {
    "name": "Fernando Tatis Jr.",
    "profitMargin": 244.5,
    "sell_price": 3305,
    "buy_price": 2730
    },
    {
    "name": "George Springer",
    "profitMargin": 239.70000000000005,
    "sell_price": 1683,
    "buy_price": 1275
    },
    {
    "name": "Josh Donaldson",
    "profitMargin": 237,
    "sell_price": 4330,
    "buy_price": 3660
    },
    {
    "name": "Archie Bradley",
    "profitMargin": 230.70000000000005,
    "sell_price": 1723,
    "buy_price": 1320
    },
    {
    "name": "Cam Bedrosian",
    "profitMargin": 230,
    "sell_price": 1600,
    "buy_price": 1210
    },
    {
    "name": "Oliver Perez",
    "profitMargin": 228.29999999999995,
    "sell_price": 1477,
    "buy_price": 1101
    },
    {
    "name": "Trent Thornton",
    "profitMargin": 226.5,
    "sell_price": 585,
    "buy_price": 300
    },
    {
    "name": "Ryne Stanek",
    "profitMargin": 225.60000000000002,
    "sell_price": 584,
    "buy_price": 300
    },
    {
    "name": "Jason Kendall",
    "profitMargin": 225,
    "sell_price": 20000,
    "buy_price": 17775
    },
    {
    "name": "Joey Wendle",
    "profitMargin": 224.10000000000002,
    "sell_price": 699,
    "buy_price": 405
    },
    {
    "name": "Joe Musgrove",
    "profitMargin": 223.8,
    "sell_price": 562,
    "buy_price": 282
    },
    {
    "name": "Craig Kimbrel",
    "profitMargin": 223.5999999999999,
    "sell_price": 2694,
    "buy_price": 2201
    },
    {
    "name": "Max Muncy",
    "profitMargin": 220.70000000000005,
    "sell_price": 1143,
    "buy_price": 808
    },
    {
    "name": "Madison Bumgarner",
    "profitMargin": 219.29999999999995,
    "sell_price": 1467,
    "buy_price": 1101
    },
    {
    "name": "Trevor Rosenthal",
    "profitMargin": 218.39999999999998,
    "sell_price": 576,
    "buy_price": 300
    },
    {
    "name": "Alex Cobb",
    "profitMargin": 216.29999999999995,
    "sell_price": 1707,
    "buy_price": 1320
    },
    {
    "name": "Trevor Story",
    "profitMargin": 214.5999999999999,
    "sell_price": 3684,
    "buy_price": 3101
    },
    {
    "name": "Zack Greinke",
    "profitMargin": 214,
    "sell_price": 1380,
    "buy_price": 1028
    },
    {
    "name": "Bert Blyleven",
    "profitMargin": 213,
    "sell_price": 1710,
    "buy_price": 1326
    },
    {
    "name": "Brian McCann",
    "profitMargin": 210.20000000000005,
    "sell_price": 998,
    "buy_price": 688
    },
    {
    "name": "Jackie Bradley Jr.",
    "profitMargin": 210.10000000000002,
    "sell_price": 499,
    "buy_price": 239
    },
    {
    "name": "Gleyber Torres",
    "profitMargin": 207.4000000000001,
    "sell_price": 1346,
    "buy_price": 1004
    },
    {
    "name": "Wei-Yin Chen",
    "profitMargin": 203.8,
    "sell_price": 522,
    "buy_price": 266
    },
    {
    "name": "Matt Chapman",
    "profitMargin": 198,
    "sell_price": 2220,
    "buy_price": 1800
    },
    {
    "name": "Jose Leclerc",
    "profitMargin": 197.70000000000005,
    "sell_price": 1353,
    "buy_price": 1020
    },
    {
    "name": "Seranthony Dominguez",
    "profitMargin": 197.10000000000002,
    "sell_price": 1119,
    "buy_price": 810
    },
    {
    "name": "Felipe Vazquez",
    "profitMargin": 197.0999999999999,
    "sell_price": 2199,
    "buy_price": 1782
    },
    {
    "name": "Jonny Venters",
    "profitMargin": 196,
    "sell_price": 1640,
    "buy_price": 1280
    },
    {
    "name": "Didi Gregorius",
    "profitMargin": 195,
    "sell_price": 1600,
    "buy_price": 1245
    },
    {
    "name": "Richard Rodriguez",
    "profitMargin": 194.7,
    "sell_price": 553,
    "buy_price": 303
    },
    {
    "name": "Jason Giambi",
    "profitMargin": 194,
    "sell_price": 9550,
    "buy_price": 8401
    },
    {
    "name": "Jason Kendall",
    "profitMargin": 192.79999999999995,
    "sell_price": 582,
    "buy_price": 331
    },
    {
    "name": "Jedd Gyorko",
    "profitMargin": 191.60000000000002,
    "sell_price": 574,
    "buy_price": 325
    },
    {
    "name": "Ronald Acuna Jr.",
    "profitMargin": 190,
    "sell_price": 10100,
    "buy_price": 8900
    },
    {
    "name": "Brandon Nimmo",
    "profitMargin": 189.3,
    "sell_price": 517,
    "buy_price": 276
    },
    {
    "name": "Arodys Vizcaino",
    "profitMargin": 184.89999999999998,
    "sell_price": 461,
    "buy_price": 230
    },
    {
    "name": "Yasiel Puig",
    "profitMargin": 184.5999999999999,
    "sell_price": 1354,
    "buy_price": 1034
    },
    {
    "name": "Jurickson Profar",
    "profitMargin": 182.20000000000005,
    "sell_price": 618,
    "buy_price": 374
    },
    {
    "name": "Chris Ellis",
    "profitMargin": 181.5,
    "sell_price": 365,
    "buy_price": 147
    },
    {
    "name": "Jace Peterson",
    "profitMargin": 181,
    "sell_price": 390,
    "buy_price": 170
    },
    {
    "name": "Scooter Gennett",
    "profitMargin": 180.60000000000002,
    "sell_price": 834,
    "buy_price": 570
    },
    {
    "name": "A.J. Minter",
    "profitMargin": 180.5,
    "sell_price": 515,
    "buy_price": 283
    },
    {
    "name": "Robinson Cano",
    "profitMargin": 180,
    "sell_price": 1400,
    "buy_price": 1080
    },
    {
    "name": "Robbie Ray",
    "profitMargin": 177.20000000000005,
    "sell_price": 2258,
    "buy_price": 1855
    },
    {
    "name": "Brad Hand",
    "profitMargin": 177.0999999999999,
    "sell_price": 1319,
    "buy_price": 1010
    },
    {
    "name": "Anthony Rizzo",
    "profitMargin": 177,
    "sell_price": 2840,
    "buy_price": 2379
    },
    {
    "name": "Jose Abreu",
    "profitMargin": 176.20000000000005,
    "sell_price": 1408,
    "buy_price": 1091
    },
    {
    "name": "Eddie Mathews",
    "profitMargin": 175.5,
    "sell_price": 565,
    "buy_price": 333
    },
    {
    "name": "Aledmys Diaz",
    "profitMargin": 171.29999999999995,
    "sell_price": 647,
    "buy_price": 411
    },
    {
    "name": "Evan Longoria",
    "profitMargin": 171.10000000000002,
    "sell_price": 529,
    "buy_price": 305
    },
    {
    "name": "Eddie Rosario",
    "profitMargin": 170.20000000000005,
    "sell_price": 1328,
    "buy_price": 1025
    },
    {
    "name": "Cesar Hernandez",
    "profitMargin": 169.60000000000002,
    "sell_price": 524,
    "buy_price": 302
    },
    {
    "name": "Billy Hamilton",
    "profitMargin": 169,
    "sell_price": 1230,
    "buy_price": 938
    },
    {
    "name": "Eugenio Suarez",
    "profitMargin": 168.5,
    "sell_price": 1415,
    "buy_price": 1105
    },
    {
    "name": "Adam Duvall",
    "profitMargin": 167.5,
    "sell_price": 445,
    "buy_price": 233
    },
    {
    "name": "Chad Green",
    "profitMargin": 167.29999999999995,
    "sell_price": 2247,
    "buy_price": 1855
    },
    {
    "name": "J.T. Realmuto",
    "profitMargin": 166,
    "sell_price": 3240,
    "buy_price": 2750
    },
    {
    "name": "Brian Anderson",
    "profitMargin": 165,
    "sell_price": 1050,
    "buy_price": 780
    },
    {
    "name": "Zack Cozart",
    "profitMargin": 164.5,
    "sell_price": 395,
    "buy_price": 191
    },
    {
    "name": "Matt Adams",
    "profitMargin": 164.10000000000002,
    "sell_price": 499,
    "buy_price": 285
    },
    {
    "name": "Jose Peraza",
    "profitMargin": 162,
    "sell_price": 500,
    "buy_price": 288
    },
    {
    "name": "Garrett Richards",
    "profitMargin": 160.2,
    "sell_price": 408,
    "buy_price": 207
    },
    {
    "name": "Wilson Ramos",
    "profitMargin": 160.0999999999999,
    "sell_price": 1549,
    "buy_price": 1234
    },
    {
    "name": "David McKay",
    "profitMargin": 157.7,
    "sell_price": 233,
    "buy_price": 52
    },
    {
    "name": "Matt Barnes",
    "profitMargin": 157.60000000000002,
    "sell_price": 464,
    "buy_price": 260
    },
    {
    "name": "Wilmer Flores",
    "profitMargin": 156.60000000000002,
    "sell_price": 664,
    "buy_price": 441
    },
    {
    "name": "Diego Castillo",
    "profitMargin": 156.5,
    "sell_price": 715,
    "buy_price": 487
    },
    {
    "name": "Danny Farquhar",
    "profitMargin": 155,
    "sell_price": 250,
    "buy_price": 70
    },
    {
    "name": "Yuli Gurriel",
    "profitMargin": 155,
    "sell_price": 520,
    "buy_price": 313
    },
    {
    "name": "Robbie Ray",
    "profitMargin": 154.5,
    "sell_price": 655,
    "buy_price": 435
    },
    {
    "name": "Ryan Zimmerman",
    "profitMargin": 153.7,
    "sell_price": 533,
    "buy_price": 326
    },
    {
    "name": "Matt Festa",
    "profitMargin": 153.6,
    "sell_price": 264,
    "buy_price": 84
    },
    {
    "name": "Juan Soto",
    "profitMargin": 153.5999999999999,
    "sell_price": 1404,
    "buy_price": 1110
    },
    {
    "name": "Michael Wacha",
    "profitMargin": 153.39999999999998,
    "sell_price": 466,
    "buy_price": 266
    },
    {
    "name": "Rick Porcello",
    "profitMargin": 152.29999999999995,
    "sell_price": 647,
    "buy_price": 430
    },
    {
    "name": "D.J. LeMahieu",
    "profitMargin": 152,
    "sell_price": 650,
    "buy_price": 433
    },
    {
    "name": "Masahiro Tanaka",
    "profitMargin": 149.70000000000005,
    "sell_price": 1293,
    "buy_price": 1014
    },
    {
    "name": "Juan Lagares",
    "profitMargin": 149.60000000000002,
    "sell_price": 444,
    "buy_price": 250
    },
    {
    "name": "Keone Kela",
    "profitMargin": 149.60000000000002,
    "sell_price": 534,
    "buy_price": 331
    },
    {
    "name": "Ozzie Albies",
    "profitMargin": 149.0999999999999,
    "sell_price": 2399,
    "buy_price": 2010
    },
    {
    "name": "Gio Gonzalez",
    "profitMargin": 148.39999999999998,
    "sell_price": 466,
    "buy_price": 271
    },
    {
    "name": "Marcell Ozuna",
    "profitMargin": 148.0999999999999,
    "sell_price": 1299,
    "buy_price": 1021
    },
    {
    "name": "Alex Colome",
    "profitMargin": 147.60000000000002,
    "sell_price": 724,
    "buy_price": 504
    },
    {
    "name": "Matt Strahm",
    "profitMargin": 147.5,
    "sell_price": 395,
    "buy_price": 208
    },
    {
    "name": "Johan Camargo",
    "profitMargin": 146.2,
    "sell_price": 508,
    "buy_price": 311
    },
    {
    "name": "Jose Martinez",
    "profitMargin": 145.8,
    "sell_price": 472,
    "buy_price": 279
    },
    {
    "name": "Kolten Wong",
    "profitMargin": 145.10000000000002,
    "sell_price": 649,
    "buy_price": 439
    },
    {
    "name": "Matt Carpenter",
    "profitMargin": 145,
    "sell_price": 1450,
    "buy_price": 1160
    },
    {
    "name": "Kyle Gibson",
    "profitMargin": 144,
    "sell_price": 250,
    "buy_price": 81
    },
    {
    "name": "Dellin Betances",
    "profitMargin": 143.80000000000018,
    "sell_price": 3222,
    "buy_price": 2756
    },
    {
    "name": "Kurt Suzuki",
    "profitMargin": 143.70000000000005,
    "sell_price": 933,
    "buy_price": 696
    },
    {
    "name": "Charlie Morton",
    "profitMargin": 143,
    "sell_price": 1300,
    "buy_price": 1027
    },
    {
    "name": "Vladimir Guerrero",
    "profitMargin": 142.8,
    "sell_price": 382,
    "buy_price": 201
    },
    {
    "name": "Starling Marte",
    "profitMargin": 142.5,
    "sell_price": 1925,
    "buy_price": 1590
    },
    {
    "name": "Mallex Smith",
    "profitMargin": 142.10000000000002,
    "sell_price": 519,
    "buy_price": 325
    },
    {
    "name": "Michael Brantley",
    "profitMargin": 142,
    "sell_price": 500,
    "buy_price": 308
    },
    {
    "name": "Jeff Hoffman",
    "profitMargin": 139.9,
    "sell_price": 241,
    "buy_price": 77
    },
    {
    "name": "David Robertson",
    "profitMargin": 139.4000000000001,
    "sell_price": 1266,
    "buy_price": 1000
    },
    {
    "name": "Oliver Perez",
    "profitMargin": 139.10000000000002,
    "sell_price": 419,
    "buy_price": 238
    },
    {
    "name": "James Paxton",
    "profitMargin": 139,
    "sell_price": 2000,
    "buy_price": 1661
    },
    {
    "name": "Travis Shaw",
    "profitMargin": 138.60000000000002,
    "sell_price": 514,
    "buy_price": 324
    },
    {
    "name": "Jed Lowrie",
    "profitMargin": 138.2,
    "sell_price": 548,
    "buy_price": 355
    },
    {
    "name": "Robbie Erlin",
    "profitMargin": 138.10000000000002,
    "sell_price": 349,
    "buy_price": 176
    },
    {
    "name": "Darren O'Day",
    "profitMargin": 137.60000000000002,
    "sell_price": 564,
    "buy_price": 370
    },
    {
    "name": "Trevor Bauer",
    "profitMargin": 137.5,
    "sell_price": 3725,
    "buy_price": 3215
    },
    {
    "name": "Hunter Renfroe",
    "profitMargin": 136.5,
    "sell_price": 435,
    "buy_price": 255
    },
    {
    "name": "Eric Hosmer",
    "profitMargin": 135.5,
    "sell_price": 525,
    "buy_price": 337
    },
    {
    "name": "Francisco Cervelli",
    "profitMargin": 135.5,
    "sell_price": 995,
    "buy_price": 760
    },
    {
    "name": "Willie McCovey",
    "profitMargin": 135.10000000000002,
    "sell_price": 489,
    "buy_price": 305
    },
    {
    "name": "Tanner Roark",
    "profitMargin": 135,
    "sell_price": 500,
    "buy_price": 315
    },
    {
    "name": "Marcus Semien",
    "profitMargin": 134.5,
    "sell_price": 645,
    "buy_price": 446
    },
    {
    "name": "A.J. Burnett",
    "profitMargin": 134,
    "sell_price": 3050,
    "buy_price": 2611
    },
    {
    "name": "Mike Zunino",
    "profitMargin": 133.89999999999998,
    "sell_price": 1111,
    "buy_price": 866
    },
    {
    "name": "Chase Anderson",
    "profitMargin": 133.7,
    "sell_price": 223,
    "buy_price": 67
    },
    {
    "name": "Corey Knebel",
    "profitMargin": 133.60000000000002,
    "sell_price": 724,
    "buy_price": 518
    },
    {
    "name": "Phil Maton",
    "profitMargin": 133.6,
    "sell_price": 214,
    "buy_price": 59
    },
    {
    "name": "Taylor Rogers",
    "profitMargin": 132.60000000000002,
    "sell_price": 604,
    "buy_price": 411
    },
    {
    "name": "Ryan Weber",
    "profitMargin": 131.5,
    "sell_price": 185,
    "buy_price": 35
    },
    {
    "name": "Rickey Henderson",
    "profitMargin": 131.29999999999927,
    "sell_price": 17247,
    "buy_price": 15391
    },
    {
    "name": "J.A. Happ",
    "profitMargin": 131.20000000000005,
    "sell_price": 618,
    "buy_price": 425
    },
    {
    "name": "Trevor Williams",
    "profitMargin": 130.89999999999998,
    "sell_price": 501,
    "buy_price": 320
    },
    {
    "name": "Bruce Maxwell",
    "profitMargin": 130.1,
    "sell_price": 189,
    "buy_price": 40
    },
    {
    "name": "Jordan Montgomery",
    "profitMargin": 129.3,
    "sell_price": 457,
    "buy_price": 282
    },
    {
    "name": "Whit Merrifield",
    "profitMargin": 129.0999999999999,
    "sell_price": 2699,
    "buy_price": 2300
    },
    {
    "name": "Michael Conforto",
    "profitMargin": 129,
    "sell_price": 500,
    "buy_price": 321
    },
    {
    "name": "Tony Renda",
    "profitMargin": 128.6,
    "sell_price": 174,
    "buy_price": 28
    },
    {
    "name": "Jeff McNeil",
    "profitMargin": 128.2,
    "sell_price": 548,
    "buy_price": 365
    },
    {
    "name": "Paul Goldschmidt",
    "profitMargin": 127.89999999999998,
    "sell_price": 511,
    "buy_price": 332
    },
    {
    "name": "Eduardo Escobar",
    "profitMargin": 127.60000000000002,
    "sell_price": 574,
    "buy_price": 389
    },
    {
    "name": "Eduardo Nunez",
    "profitMargin": 127.5,
    "sell_price": 475,
    "buy_price": 300
    },
    {
    "name": "Harrison Bader",
    "profitMargin": 127.5,
    "sell_price": 575,
    "buy_price": 390
    },
    {
    "name": "Zack Britton",
    "profitMargin": 127.5,
    "sell_price": 515,
    "buy_price": 336
    },
    {
    "name": "Jon Lester",
    "profitMargin": 127.39999999999998,
    "sell_price": 696,
    "buy_price": 499
    },
    {
    "name": "Luke Voit",
    "profitMargin": 127,
    "sell_price": 320,
    "buy_price": 161
    },
    {
    "name": "Aaron Loup",
    "profitMargin": 126.5,
    "sell_price": 225,
    "buy_price": 76
    },
    {
    "name": "Ben Lively",
    "profitMargin": 126.5,
    "sell_price": 225,
    "buy_price": 76
    },
    {
    "name": "Isiah Kiner-Falefa",
    "profitMargin": 126.5,
    "sell_price": 185,
    "buy_price": 40
    },
    {
    "name": "Aaron Hicks",
    "profitMargin": 126.29999999999995,
    "sell_price": 1387,
    "buy_price": 1122
    },
    {
    "name": "Kyle Bird",
    "profitMargin": 125.80000000000001,
    "sell_price": 242,
    "buy_price": 92
    },
    {
    "name": "Nate Karns",
    "profitMargin": 125.4,
    "sell_price": 276,
    "buy_price": 123
    },
    {
    "name": "Miguel Andujar",
    "profitMargin": 125.39999999999998,
    "sell_price": 856,
    "buy_price": 645
    },
    {
    "name": "Brandon Brennan",
    "profitMargin": 125.1,
    "sell_price": 229,
    "buy_price": 81
    },
    {
    "name": "Brett Kennedy",
    "profitMargin": 125,
    "sell_price": 200,
    "buy_price": 55
    },
    {
    "name": "Logan Forsythe",
    "profitMargin": 124.89999999999998,
    "sell_price": 461,
    "buy_price": 290
    },
    {
    "name": "Tony Cingrani",
    "profitMargin": 124.69999999999999,
    "sell_price": 523,
    "buy_price": 346
    },
    {
    "name": "Asdrubal Cabrera",
    "profitMargin": 124.5,
    "sell_price": 495,
    "buy_price": 321
    },
    {
    "name": "Danny Farquhar",
    "profitMargin": 124,
    "sell_price": 480,
    "buy_price": 308
    },
    {
    "name": "Matt Albers",
    "profitMargin": 123.5,
    "sell_price": 175,
    "buy_price": 34
    },
    {
    "name": "Yoan Moncada",
    "profitMargin": 123.5,
    "sell_price": 705,
    "buy_price": 511
    },
    {
    "name": "J.T. Realmuto",
    "profitMargin": 123.30000000000001,
    "sell_price": 537,
    "buy_price": 360
    },
    {
    "name": "Anthony Swarzak",
    "profitMargin": 122.60000000000002,
    "sell_price": 364,
    "buy_price": 205
    },
    {
    "name": "Danny Barnes",
    "profitMargin": 122.5,
    "sell_price": 165,
    "buy_price": 26
    },
    {
    "name": "Jonathan Schoop",
    "profitMargin": 122.5,
    "sell_price": 625,
    "buy_price": 440
    },
    {
    "name": "Ryan Buchter",
    "profitMargin": 122.39999999999998,
    "sell_price": 386,
    "buy_price": 225
    },
    {
    "name": "Paul Konerko",
    "profitMargin": 122.30000000000018,
    "sell_price": 2997,
    "buy_price": 2575
    },
    {
    "name": "Lee Smith",
    "profitMargin": 122.10000000000002,
    "sell_price": 469,
    "buy_price": 300
    },
    {
    "name": "Elvis Andrus",
    "profitMargin": 121.79999999999995,
    "sell_price": 652,
    "buy_price": 465
    },
    {
    "name": "Andrew Heaney",
    "profitMargin": 121.10000000000002,
    "sell_price": 349,
    "buy_price": 193
    },
    {
    "name": "Jordan Hicks",
    "profitMargin": 121,
    "sell_price": 340,
    "buy_price": 185
    },
    {
    "name": "Paul Blackburn",
    "profitMargin": 120.80000000000001,
    "sell_price": 202,
    "buy_price": 61
    },
    {
    "name": "A.J. Pollock",
    "profitMargin": 120.60000000000002,
    "sell_price": 484,
    "buy_price": 315
    },
    {
    "name": "Kyle Freeland",
    "profitMargin": 120.5,
    "sell_price": 495,
    "buy_price": 325
    },
    {
    "name": "Richard Bleier",
    "profitMargin": 120.5,
    "sell_price": 345,
    "buy_price": 190
    },
    {
    "name": "Tony Watson",
    "profitMargin": 120.5,
    "sell_price": 495,
    "buy_price": 325
    },
    {
    "name": "Brandon Crawford",
    "profitMargin": 120.30000000000001,
    "sell_price": 497,
    "buy_price": 327
    },
    {
    "name": "Michael Pineda",
    "profitMargin": 120,
    "sell_price": 2000,
    "buy_price": 1680
    },
    {
    "name": "Pat Neshek",
    "profitMargin": 120,
    "sell_price": 880,
    "buy_price": 672
    },
    {
    "name": "Tucker Barnhart",
    "profitMargin": 119.60000000000002,
    "sell_price": 994,
    "buy_price": 775
    },
    {
    "name": "Ryne Harper",
    "profitMargin": 119.5,
    "sell_price": 405,
    "buy_price": 245
    },
    {
    "name": "Kike Hernandez",
    "profitMargin": 119.10000000000002,
    "sell_price": 439,
    "buy_price": 276
    },
    {
    "name": "Nathan Eovaldi",
    "profitMargin": 119.10000000000002,
    "sell_price": 449,
    "buy_price": 285
    },
    {
    "name": "Rex Brothers",
    "profitMargin": 118.80000000000001,
    "sell_price": 212,
    "buy_price": 72
    },
    {
    "name": "Danny Jansen",
    "profitMargin": 118.5,
    "sell_price": 245,
    "buy_price": 102
    },
    {
    "name": "Blake Parker",
    "profitMargin": 118,
    "sell_price": 500,
    "buy_price": 332
    },
    {
    "name": "Kirby Yates",
    "profitMargin": 118,
    "sell_price": 1260,
    "buy_price": 1016
    },
    {
    "name": "Kyle Seager",
    "profitMargin": 117.80000000000001,
    "sell_price": 382,
    "buy_price": 226
    },
    {
    "name": "Edwin Encarnacion",
    "profitMargin": 117.5,
    "sell_price": 595,
    "buy_price": 418
    },
    {
    "name": "Eric Lauer",
    "profitMargin": 117.5,
    "sell_price": 175,
    "buy_price": 40
    },
    {
    "name": "Fergie Jenkins",
    "profitMargin": 117.5,
    "sell_price": 575,
    "buy_price": 400
    },
    {
    "name": "Jake McGee",
    "profitMargin": 117.5,
    "sell_price": 175,
    "buy_price": 40
    },
    {
    "name": "Jon Berti",
    "profitMargin": 117.30000000000001,
    "sell_price": 297,
    "buy_price": 150
    },
    {
    "name": "Max Scherzer",
    "profitMargin": 117,
    "sell_price": 500,
    "buy_price": 333
    },
    {
    "name": "Ji-Man Choi",
    "profitMargin": 116.5,
    "sell_price": 215,
    "buy_price": 77
    },
    {
    "name": "Ender Inciarte",
    "profitMargin": 116.29999999999995,
    "sell_price": 577,
    "buy_price": 403
    },
    {
    "name": "Jimmie Foxx",
    "profitMargin": 116.20000000000005,
    "sell_price": 1268,
    "buy_price": 1025
    },
    {
    "name": "James Hoyt",
    "profitMargin": 116,
    "sell_price": 240,
    "buy_price": 100
    },
    {
    "name": "Rhys Hoskins",
    "profitMargin": 116,
    "sell_price": 1080,
    "buy_price": 856
    },
    {
    "name": "Frankie Montas",
    "profitMargin": 115.5,
    "sell_price": 185,
    "buy_price": 51
    },
    {
    "name": "Mike Moustakas",
    "profitMargin": 115.5,
    "sell_price": 595,
    "buy_price": 420
    },
    {
    "name": "Jose Urena",
    "profitMargin": 115.1,
    "sell_price": 259,
    "buy_price": 118
    },
    {
    "name": "Adam Ottavino",
    "profitMargin": 115,
    "sell_price": 1350,
    "buy_price": 1100
    },
    {
    "name": "Dereck Rodriguez",
    "profitMargin": 115,
    "sell_price": 430,
    "buy_price": 272
    },
    {
    "name": "Johnny Bench",
    "profitMargin": 115,
    "sell_price": 1350,
    "buy_price": 1100
    },
    {
    "name": "Jose Alvarado",
    "profitMargin": 115,
    "sell_price": 1800,
    "buy_price": 1505
    },
    {
    "name": "Jarrod Dyson",
    "profitMargin": 114.80000000000001,
    "sell_price": 252,
    "buy_price": 112
    },
    {
    "name": "J.T. Riddle",
    "profitMargin": 114.5,
    "sell_price": 245,
    "buy_price": 106
    },
    {
    "name": "Aaron Sanchez",
    "profitMargin": 114,
    "sell_price": 210,
    "buy_price": 75
    },
    {
    "name": "Jeurys Familia",
    "profitMargin": 114,
    "sell_price": 500,
    "buy_price": 336
    },
    {
    "name": "Luis Severino",
    "profitMargin": 114,
    "sell_price": 2290,
    "buy_price": 1947
    },
    {
    "name": "Roberto Osuna",
    "profitMargin": 114,
    "sell_price": 1400,
    "buy_price": 1146
    },
    {
    "name": "Tony Cingrani",
    "profitMargin": 114,
    "sell_price": 210,
    "buy_price": 75
    },
    {
    "name": "David Hess",
    "profitMargin": 113.80000000000001,
    "sell_price": 252,
    "buy_price": 113
    },
    {
    "name": "Eduardo Rodriguez",
    "profitMargin": 113.80000000000001,
    "sell_price": 482,
    "buy_price": 320
    },
    {
    "name": "Odubel Herrera",
    "profitMargin": 113.69999999999999,
    "sell_price": 393,
    "buy_price": 240
    },
    {
    "name": "Brian Dozier",
    "profitMargin": 113.5,
    "sell_price": 465,
    "buy_price": 305
    },
    {
    "name": "Randal Grichuk",
    "profitMargin": 113.39999999999998,
    "sell_price": 866,
    "buy_price": 666
    },
    {
    "name": "Evan Marshall",
    "profitMargin": 113.30000000000001,
    "sell_price": 207,
    "buy_price": 73
    },
    {
    "name": "Pedro Baez",
    "profitMargin": 113.19999999999999,
    "sell_price": 348,
    "buy_price": 200
    },
    {
    "name": "Dustin Pedroia",
    "profitMargin": 113.10000000000002,
    "sell_price": 499,
    "buy_price": 336
    },
    {
    "name": "Domingo German",
    "profitMargin": 113,
    "sell_price": 310,
    "buy_price": 166
    },
    {
    "name": "Joey Gallo",
    "profitMargin": 113,
    "sell_price": 2100,
    "buy_price": 1777
    },
    {
    "name": "Sammy Solis",
    "profitMargin": 113,
    "sell_price": 160,
    "buy_price": 31
    },
    {
    "name": "Ariel Miranda",
    "profitMargin": 112.9,
    "sell_price": 181,
    "buy_price": 50
    },
    {
    "name": "Adam Conley",
    "profitMargin": 112.30000000000001,
    "sell_price": 247,
    "buy_price": 110
    },
    {
    "name": "Will Clark",
    "profitMargin": 112,
    "sell_price": 2350,
    "buy_price": 2003
    },
    {
    "name": "Tim Collins",
    "profitMargin": 111.5,
    "sell_price": 165,
    "buy_price": 37
    },
    {
    "name": "Seth Lugo",
    "profitMargin": 111,
    "sell_price": 380,
    "buy_price": 231
    },
    {
    "name": "Sam Freeman",
    "profitMargin": 110.9,
    "sell_price": 181,
    "buy_price": 52
    },
    {
    "name": "Sergio Romo",
    "profitMargin": 110.69999999999999,
    "sell_price": 233,
    "buy_price": 99
    },
    {
    "name": "Ted Williams",
    "profitMargin": 110.60000000000002,
    "sell_price": 434,
    "buy_price": 280
    },
    {
    "name": "Alex Wood",
    "profitMargin": 110.5,
    "sell_price": 515,
    "buy_price": 353
    },
    {
    "name": "Javier Baez",
    "profitMargin": 110.5,
    "sell_price": 445,
    "buy_price": 290
    },
    {
    "name": "John Lamb",
    "profitMargin": 110,
    "sell_price": 150,
    "buy_price": 25
    },
    {
    "name": "Jorge Posada",
    "profitMargin": 110,
    "sell_price": 500,
    "buy_price": 340
    },
    {
    "name": "Sean Gilmartin",
    "profitMargin": 109.69999999999999,
    "sell_price": 233,
    "buy_price": 100
    },
    {
    "name": "Jon Gray",
    "profitMargin": 109.60000000000002,
    "sell_price": 494,
    "buy_price": 335
    },
    {
    "name": "Clayton Kershaw",
    "profitMargin": 109.5,
    "sell_price": 455,
    "buy_price": 300
    },
    {
    "name": "Julio Teheran",
    "profitMargin": 109.10000000000002,
    "sell_price": 499,
    "buy_price": 340
    },
    {
    "name": "Kyle Schwarber",
    "profitMargin": 109,
    "sell_price": 510,
    "buy_price": 350
    },
    {
    "name": "Tyler Skaggs",
    "profitMargin": 108.60000000000002,
    "sell_price": 344,
    "buy_price": 201
    },
    {
    "name": "David Dahl",
    "profitMargin": 108.5,
    "sell_price": 465,
    "buy_price": 310
    },
    {
    "name": "Yefry Ramirez",
    "profitMargin": 108.5,
    "sell_price": 295,
    "buy_price": 157
    },
    {
    "name": "Rene Rivera",
    "profitMargin": 108.19999999999999,
    "sell_price": 198,
    "buy_price": 70
    },
    {
    "name": "Blake Wood",
    "profitMargin": 108,
    "sell_price": 120,
    "buy_price": 0
    },
    {
    "name": "Collin McHugh",
    "profitMargin": 108,
    "sell_price": 370,
    "buy_price": 225
    },
    {
    "name": "Scott Kingery",
    "profitMargin": 108,
    "sell_price": 200,
    "buy_price": 72
    },
    {
    "name": "Tanner Scott",
    "profitMargin": 108,
    "sell_price": 260,
    "buy_price": 126
    },
    {
    "name": "Ivan Nova",
    "profitMargin": 107.5,
    "sell_price": 265,
    "buy_price": 131
    },
    {
    "name": "Keon Broxton",
    "profitMargin": 107.5,
    "sell_price": 265,
    "buy_price": 131
    },
    {
    "name": "Greg Garcia",
    "profitMargin": 106.9,
    "sell_price": 171,
    "buy_price": 47
    },
    {
    "name": "Josh Reddick",
    "profitMargin": 106.89999999999998,
    "sell_price": 471,
    "buy_price": 317
    },
    {
    "name": "Josh Fields",
    "profitMargin": 106.80000000000001,
    "sell_price": 342,
    "buy_price": 201
    },
    {
    "name": "Chris Sale",
    "profitMargin": 106.5,
    "sell_price": 485,
    "buy_price": 330
    },
    {
    "name": "Jameson Taillon",
    "profitMargin": 106.5,
    "sell_price": 1235,
    "buy_price": 1005
    },
    {
    "name": "Ryan Lavarnway",
    "profitMargin": 106.1,
    "sell_price": 179,
    "buy_price": 55
    },
    {
    "name": "Ian Desmond",
    "profitMargin": 105.9,
    "sell_price": 231,
    "buy_price": 102
    },
    {
    "name": "Kevin Newman",
    "profitMargin": 105.69999999999999,
    "sell_price": 173,
    "buy_price": 50
    },
    {
    "name": "Sean Manaea",
    "profitMargin": 105.60000000000002,
    "sell_price": 374,
    "buy_price": 231
    },
    {
    "name": "Cole Hamels",
    "profitMargin": 105,
    "sell_price": 340,
    "buy_price": 201
    },
    {
    "name": "Fernando Rodney",
    "profitMargin": 105,
    "sell_price": 11100,
    "buy_price": 9885
    },
    {
    "name": "Jordan Zimmermann",
    "profitMargin": 105,
    "sell_price": 200,
    "buy_price": 75
    },
    {
    "name": "Ian Kinsler",
    "profitMargin": 104.60000000000002,
    "sell_price": 524,
    "buy_price": 367
    },
    {
    "name": "Luis Castillo",
    "profitMargin": 104.29999999999995,
    "sell_price": 577,
    "buy_price": 415
    },
    {
    "name": "Jhoulys Chacin",
    "profitMargin": 104.19999999999999,
    "sell_price": 338,
    "buy_price": 200
    },
    {
    "name": "Touki Toussaint",
    "profitMargin": 104.19999999999999,
    "sell_price": 178,
    "buy_price": 56
    },
    {
    "name": "Mike Foltynewicz",
    "profitMargin": 104.10000000000002,
    "sell_price": 599,
    "buy_price": 435
    },
    {
    "name": "Daniel Gossett",
    "profitMargin": 104.1,
    "sell_price": 199,
    "buy_price": 75
    },
    {
    "name": "Dansby Swanson",
    "profitMargin": 104.1,
    "sell_price": 229,
    "buy_price": 102
    },
    {
    "name": "Pablo Lopez",
    "profitMargin": 104.1,
    "sell_price": 249,
    "buy_price": 120
    },
    {
    "name": "Ken Giles",
    "profitMargin": 104,
    "sell_price": 1240,
    "buy_price": 1012
    },
    {
    "name": "Steve Pearce",
    "profitMargin": 103.80000000000001,
    "sell_price": 522,
    "buy_price": 366
    },
    {
    "name": "Eric Sogard",
    "profitMargin": 103.6,
    "sell_price": 144,
    "buy_price": 26
    },
    {
    "name": "Jeremy Jeffress",
    "profitMargin": 103.5,
    "sell_price": 415,
    "buy_price": 270
    },
    {
    "name": "Carl Edwards Jr.",
    "profitMargin": 103.20000000000005,
    "sell_price": 848,
    "buy_price": 660
    },
    {
    "name": "Brett Gardner",
    "profitMargin": 103.19999999999999,
    "sell_price": 548,
    "buy_price": 390
    },
    {
    "name": "Liam Hendriks",
    "profitMargin": 103.19999999999999,
    "sell_price": 398,
    "buy_price": 255
    },
    {
    "name": "Jorge Alfaro",
    "profitMargin": 103.1,
    "sell_price": 249,
    "buy_price": 121
    },
    {
    "name": "Nick Markakis",
    "profitMargin": 102.19999999999999,
    "sell_price": 568,
    "buy_price": 409
    },
    {
    "name": "Jeremy Hellickson",
    "profitMargin": 102.1,
    "sell_price": 239,
    "buy_price": 113
    },
    {
    "name": "Paul DeJong",
    "profitMargin": 101.79999999999995,
    "sell_price": 622,
    "buy_price": 458
    },
    {
    "name": "Kyle Crick",
    "profitMargin": 101.69999999999999,
    "sell_price": 223,
    "buy_price": 99
    },
    {
    "name": "Seunghwan Oh",
    "profitMargin": 101.39999999999998,
    "sell_price": 446,
    "buy_price": 300
    },
    {
    "name": "C.J. Cron",
    "profitMargin": 101.19999999999999,
    "sell_price": 518,
    "buy_price": 365
    },
    {
    "name": "Ross Stripling",
    "profitMargin": 101.19999999999999,
    "sell_price": 328,
    "buy_price": 194
    },
    {
    "name": "Dylan Bundy",
    "profitMargin": 101.1,
    "sell_price": 279,
    "buy_price": 150
    },
    {
    "name": "Ken Griffey Sr.",
    "profitMargin": 101.09999999999991,
    "sell_price": 3099,
    "buy_price": 2688
    },
    {
    "name": "Mike Gerber",
    "profitMargin": 100.6,
    "sell_price": 174,
    "buy_price": 56
    },
    {
    "name": "Jose Pirela",
    "profitMargin": 100.1,
    "sell_price": 139,
    "buy_price": 25
    },
    {
    "name": "Austin Brice",
    "profitMargin": 100,
    "sell_price": 250,
    "buy_price": 125
    },
    {
    "name": "Christin Stewart",
    "profitMargin": 100,
    "sell_price": 200,
    "buy_price": 80
    },
    {
    "name": "Justin Upton",
    "profitMargin": 100,
    "sell_price": 330,
    "buy_price": 197
    },
    {
    "name": "Rosell Herrera",
    "profitMargin": 99.89999999999998,
    "sell_price": 321,
    "buy_price": 189
    },
    {
    "name": "Nelson Cruz",
    "profitMargin": 99.79999999999995,
    "sell_price": 2222,
    "buy_price": 1900
    },
    {
    "name": "Walker Buehler",
    "profitMargin": 99.5,
    "sell_price": 2095,
    "buy_price": 1786
    },
    {
    "name": "Jake Bauers",
    "profitMargin": 99.30000000000001,
    "sell_price": 177,
    "buy_price": 60
    },
    {
    "name": "Austin Dean",
    "profitMargin": 99,
    "sell_price": 350,
    "buy_price": 216
    },
    {
    "name": "Johnny Cueto",
    "profitMargin": 99,
    "sell_price": 410,
    "buy_price": 270
    },
    {
    "name": "Matt Kemp",
    "profitMargin": 99,
    "sell_price": 390,
    "buy_price": 252
    },
    {
    "name": "Alec Asher",
    "profitMargin": 98.9,
    "sell_price": 161,
    "buy_price": 46
    },
    {
    "name": "Tim Locastro",
    "profitMargin": 98.5,
    "sell_price": 195,
    "buy_price": 77
    },
    {
    "name": "Willians Astudillo",
    "profitMargin": 98.5,
    "sell_price": 235,
    "buy_price": 113
    },
    {
    "name": "Trevor May",
    "profitMargin": 98.19999999999999,
    "sell_price": 498,
    "buy_price": 350
    },
    {
    "name": "Justin Bour",
    "profitMargin": 98,
    "sell_price": 330,
    "buy_price": 199
    },
    {
    "name": "Avisail Garcia",
    "profitMargin": 97.80000000000001,
    "sell_price": 442,
    "buy_price": 300
    },
    {
    "name": "Mark Prior",
    "profitMargin": 97.5,
    "sell_price": 17555,
    "buy_price": 15702
    },
    {
    "name": "Christian Vazquez",
    "profitMargin": 97.19999999999999,
    "sell_price": 158,
    "buy_price": 45
    },
    {
    "name": "Kenta Maeda",
    "profitMargin": 97.19999999999999,
    "sell_price": 458,
    "buy_price": 315
    },
    {
    "name": "Carlos Gonzalez",
    "profitMargin": 97,
    "sell_price": 340,
    "buy_price": 209
    },
    {
    "name": "Chris Archer",
    "profitMargin": 97,
    "sell_price": 730,
    "buy_price": 560
    },
    {
    "name": "Zach Davies",
    "profitMargin": 96.80000000000001,
    "sell_price": 152,
    "buy_price": 40
    },
    {
    "name": "Will Harris",
    "profitMargin": 96.69999999999999,
    "sell_price": 453,
    "buy_price": 311
    },
    {
    "name": "Adam Warren",
    "profitMargin": 96.4,
    "sell_price": 146,
    "buy_price": 35
    },
    {
    "name": "Mike Minor",
    "profitMargin": 96,
    "sell_price": 330,
    "buy_price": 201
    },
    {
    "name": "Marcus Walden",
    "profitMargin": 95.80000000000001,
    "sell_price": 192,
    "buy_price": 77
    },
    {
    "name": "Spencer Kieboom",
    "profitMargin": 95.5,
    "sell_price": 135,
    "buy_price": 26
    },
    {
    "name": "Xander Bogaerts",
    "profitMargin": 95.5,
    "sell_price": 1375,
    "buy_price": 1142
    },
    {
    "name": "Austin Hedges",
    "profitMargin": 95,
    "sell_price": 200,
    "buy_price": 85
    },
    {
    "name": "Bryan Holaday",
    "profitMargin": 95,
    "sell_price": 250,
    "buy_price": 130
    },
    {
    "name": "Zach Duke",
    "profitMargin": 94.69999999999999,
    "sell_price": 153,
    "buy_price": 43
    },
    {
    "name": "Caleb Joseph",
    "profitMargin": 94.6,
    "sell_price": 144,
    "buy_price": 35
    },
    {
    "name": "Archie Bradley",
    "profitMargin": 94.5,
    "sell_price": 475,
    "buy_price": 333
    },
    {
    "name": "Craig Stammen",
    "profitMargin": 94.5,
    "sell_price": 405,
    "buy_price": 270
    },
    {
    "name": "Nick Ahmed",
    "profitMargin": 94.5,
    "sell_price": 225,
    "buy_price": 108
    },
    {
    "name": "Cheslor Cuthbert",
    "profitMargin": 94.30000000000001,
    "sell_price": 147,
    "buy_price": 38
    },
    {
    "name": "Jesus Aguilar",
    "profitMargin": 94.19999999999999,
    "sell_price": 488,
    "buy_price": 345
    },
    {
    "name": "Alex Wilson",
    "profitMargin": 94,
    "sell_price": 180,
    "buy_price": 68
    },
    {
    "name": "Jake Odorizzi",
    "profitMargin": 94,
    "sell_price": 400,
    "buy_price": 266
    },
    {
    "name": "Luis Cessa",
    "profitMargin": 94,
    "sell_price": 170,
    "buy_price": 59
    },
    {
    "name": "Jesse Chavez",
    "profitMargin": 93.7,
    "sell_price": 133,
    "buy_price": 26
    },
    {
    "name": "Chris Stewart",
    "profitMargin": 93.5,
    "sell_price": 135,
    "buy_price": 28
    },
    {
    "name": "Aramis Garcia",
    "profitMargin": 92.69999999999999,
    "sell_price": 173,
    "buy_price": 63
    },
    {
    "name": "Miguel Rojas",
    "profitMargin": 92.6,
    "sell_price": 184,
    "buy_price": 73
    },
    {
    "name": "Rajai Davis",
    "profitMargin": 92.6,
    "sell_price": 184,
    "buy_price": 73
    },
    {
    "name": "Jacob deGrom",
    "profitMargin": 92.5,
    "sell_price": 42555,
    "buy_price": 38207
    },
    {
    "name": "Bob Gibson",
    "profitMargin": 92,
    "sell_price": 430,
    "buy_price": 295
    },
    {
    "name": "Lou Trivino",
    "profitMargin": 91.5,
    "sell_price": 385,
    "buy_price": 255
    },
    {
    "name": "Albert Almora Jr.",
    "profitMargin": 91.19999999999999,
    "sell_price": 358,
    "buy_price": 231
    },
    {
    "name": "Robinson Chirinos",
    "profitMargin": 91.19999999999999,
    "sell_price": 198,
    "buy_price": 87
    },
    {
    "name": "Kerry Wood",
    "profitMargin": 91.10000000000002,
    "sell_price": 429,
    "buy_price": 295
    },
    {
    "name": "Maikel Franco",
    "profitMargin": 91.1,
    "sell_price": 269,
    "buy_price": 151
    },
    {
    "name": "Brett Phillips",
    "profitMargin": 91,
    "sell_price": 150,
    "buy_price": 44
    },
    {
    "name": "Freddie Freeman",
    "profitMargin": 91,
    "sell_price": 38990,
    "buy_price": 35000
    },
    {
    "name": "Jerad Eickhoff",
    "profitMargin": 91,
    "sell_price": 420,
    "buy_price": 287
    },
    {
    "name": "Jordan Luplow",
    "profitMargin": 91,
    "sell_price": 140,
    "buy_price": 35
    },
    {
    "name": "Khris Davis",
    "profitMargin": 90.70000000000005,
    "sell_price": 773,
    "buy_price": 605
    },
    {
    "name": "Nate Jones",
    "profitMargin": 90.5,
    "sell_price": 855,
    "buy_price": 679
    },
    {
    "name": "Tim Mayza",
    "profitMargin": 90.19999999999999,
    "sell_price": 158,
    "buy_price": 52
    },
    {
    "name": "Matthew Boyd",
    "profitMargin": 90,
    "sell_price": 200,
    "buy_price": 90
    },
    {
    "name": "Matt Andriese",
    "profitMargin": 89.80000000000001,
    "sell_price": 152,
    "buy_price": 47
    },
    {
    "name": "Alex Claudio",
    "profitMargin": 89.69999999999999,
    "sell_price": 173,
    "buy_price": 66
    },
    {
    "name": "Shane Greene",
    "profitMargin": 89.69999999999999,
    "sell_price": 143,
    "buy_price": 39
    },
    {
    "name": "Tyson Ross",
    "profitMargin": 89.6,
    "sell_price": 194,
    "buy_price": 85
    },
    {
    "name": "Mikie Mahtook",
    "profitMargin": 89.5,
    "sell_price": 135,
    "buy_price": 32
    },
    {
    "name": "Sean Rodriguez",
    "profitMargin": 89.4,
    "sell_price": 166,
    "buy_price": 60
    },
    {
    "name": "Danny Salazar",
    "profitMargin": 89.30000000000001,
    "sell_price": 447,
    "buy_price": 313
    },
    {
    "name": "Jake Lamb",
    "profitMargin": 89.30000000000001,
    "sell_price": 197,
    "buy_price": 88
    },
    {
    "name": "Tony Barnette",
    "profitMargin": 89.1,
    "sell_price": 99,
    "buy_price": 0
    },
    {
    "name": "Alex Cobb",
    "profitMargin": 88.69999999999999,
    "sell_price": 193,
    "buy_price": 85
    },
    {
    "name": "Ketel Marte",
    "profitMargin": 88.5,
    "sell_price": 255,
    "buy_price": 141
    },
    {
    "name": "Brandon Barnes",
    "profitMargin": 88.2,
    "sell_price": 128,
    "buy_price": 27
    },
    {
    "name": "Mike Freeman",
    "profitMargin": 88.1,
    "sell_price": 149,
    "buy_price": 46
    },
    {
    "name": "Andrew Toles",
    "profitMargin": 88,
    "sell_price": 170,
    "buy_price": 65
    },
    {
    "name": "John Hicks",
    "profitMargin": 87.8,
    "sell_price": 142,
    "buy_price": 40
    },
    {
    "name": "Austin Romine",
    "profitMargin": 87.6,
    "sell_price": 274,
    "buy_price": 159
    },
    {
    "name": "Nick Hundley",
    "profitMargin": 87.6,
    "sell_price": 164,
    "buy_price": 60
    },
    {
    "name": "Tommy Pham",
    "profitMargin": 87.5,
    "sell_price": 1215,
    "buy_price": 1006
    },
    {
    "name": "Ty Buttrey",
    "profitMargin": 87.5,
    "sell_price": 175,
    "buy_price": 70
    },
    {
    "name": "Sean Newcomb",
    "profitMargin": 87.4,
    "sell_price": 166,
    "buy_price": 62
    },
    {
    "name": "Leonys Martin",
    "profitMargin": 87.19999999999999,
    "sell_price": 208,
    "buy_price": 100
    },
    {
    "name": "Ronald Guzman",
    "profitMargin": 87.19999999999999,
    "sell_price": 148,
    "buy_price": 46
    },
    {
    "name": "Brad Miller",
    "profitMargin": 87.1,
    "sell_price": 169,
    "buy_price": 65
    },
    {
    "name": "Dallas Keuchel",
    "profitMargin": 87,
    "sell_price": 430,
    "buy_price": 300
    },
    {
    "name": "Silvino Bracho",
    "profitMargin": 86.80000000000001,
    "sell_price": 172,
    "buy_price": 68
    },
    {
    "name": "Nick Pivetta",
    "profitMargin": 86.69999999999999,
    "sell_price": 453,
    "buy_price": 321
    },
    {
    "name": "Carlos Rodon",
    "profitMargin": 86.6,
    "sell_price": 244,
    "buy_price": 133
    },
    {
    "name": "Kevin Gausman",
    "profitMargin": 86.5,
    "sell_price": 265,
    "buy_price": 152
    },
    {
    "name": "Paul Sewald",
    "profitMargin": 86.5,
    "sell_price": 125,
    "buy_price": 26
    },
    {
    "name": "Zack Godley",
    "profitMargin": 86.1,
    "sell_price": 199,
    "buy_price": 93
    },
    {
    "name": "Anthony DeSclafani",
    "profitMargin": 86,
    "sell_price": 190,
    "buy_price": 85
    },
    {
    "name": "Ichiro Suzuki",
    "profitMargin": 86,
    "sell_price": 130,
    "buy_price": 31
    },
    {
    "name": "Sandy Leon",
    "profitMargin": 86,
    "sell_price": 130,
    "buy_price": 31
    },
    {
    "name": "Kyle Tucker",
    "profitMargin": 85.80000000000001,
    "sell_price": 152,
    "buy_price": 51
    },
    {
    "name": "Drew Butera",
    "profitMargin": 85.6,
    "sell_price": 134,
    "buy_price": 35
    },
    {
    "name": "Curtis Granderson",
    "profitMargin": 85.5,
    "sell_price": 245,
    "buy_price": 135
    },
    {
    "name": "Jake Barrett",
    "profitMargin": 85.5,
    "sell_price": 125,
    "buy_price": 27
    },
    {
    "name": "Tyler Naquin",
    "profitMargin": 85.5,
    "sell_price": 175,
    "buy_price": 72
    },
    {
    "name": "Yolmer Sanchez",
    "profitMargin": 85.5,
    "sell_price": 145,
    "buy_price": 45
    },
    {
    "name": "Yasmani Grandal",
    "profitMargin": 85.09999999999991,
    "sell_price": 1539,
    "buy_price": 1300
    },
    {
    "name": "Gerardo Parra",
    "profitMargin": 85,
    "sell_price": 200,
    "buy_price": 95
    },
    {
    "name": "Taylor Williams",
    "profitMargin": 85,
    "sell_price": 130,
    "buy_price": 32
    },
    {
    "name": "Tony Sipp",
    "profitMargin": 85,
    "sell_price": 150,
    "buy_price": 50
    },
    {
    "name": "Wil Myers",
    "profitMargin": 84.5,
    "sell_price": 495,
    "buy_price": 361
    },
    {
    "name": "Ryan O'Hearn",
    "profitMargin": 84.4,
    "sell_price": 136,
    "buy_price": 38
    },
    {
    "name": "Matt Wieters",
    "profitMargin": 84.19999999999999,
    "sell_price": 168,
    "buy_price": 67
    },
    {
    "name": "Jose Altuve",
    "profitMargin": 84.10000000000002,
    "sell_price": 359,
    "buy_price": 239
    },
    {
    "name": "Yairo Munoz",
    "profitMargin": 84.1,
    "sell_price": 139,
    "buy_price": 41
    },
    {
    "name": "Chasen Shreve",
    "profitMargin": 83.8,
    "sell_price": 122,
    "buy_price": 26
    },
    {
    "name": "Adam Jones",
    "profitMargin": 83.60000000000002,
    "sell_price": 494,
    "buy_price": 361
    },
    {
    "name": "Jason Kipnis",
    "profitMargin": 83.6,
    "sell_price": 204,
    "buy_price": 100
    },
    {
    "name": "Niko Goodrum",
    "profitMargin": 83.19999999999999,
    "sell_price": 198,
    "buy_price": 95
    },
    {
    "name": "Neil Walker",
    "profitMargin": 83,
    "sell_price": 210,
    "buy_price": 106
    },
    {
    "name": "J.B. Shuck",
    "profitMargin": 82.9,
    "sell_price": 121,
    "buy_price": 26
    },
    {
    "name": "Matt Grace",
    "profitMargin": 82.9,
    "sell_price": 121,
    "buy_price": 26
    },
    {
    "name": "Jeimer Candelario",
    "profitMargin": 82.8,
    "sell_price": 142,
    "buy_price": 45
    },
    {
    "name": "Jose Osuna",
    "profitMargin": 82.5,
    "sell_price": 175,
    "buy_price": 75
    },
    {
    "name": "Lane Adams",
    "profitMargin": 82.5,
    "sell_price": 155,
    "buy_price": 57
    },
    {
    "name": "Jake Arrieta",
    "profitMargin": 82.30000000000001,
    "sell_price": 497,
    "buy_price": 365
    },
    {
    "name": "Ben Zobrist",
    "profitMargin": 82.10000000000002,
    "sell_price": 619,
    "buy_price": 475
    },
    {
    "name": "Jacob Barnes",
    "profitMargin": 82.1,
    "sell_price": 119,
    "buy_price": 25
    },
    {
    "name": "Joe Jimenez",
    "profitMargin": 82.1,
    "sell_price": 159,
    "buy_price": 61
    },
    {
    "name": "Martin Prado",
    "profitMargin": 82.1,
    "sell_price": 199,
    "buy_price": 97
    },
    {
    "name": "Jake Faria",
    "profitMargin": 81.9,
    "sell_price": 141,
    "buy_price": 45
    },
    {
    "name": "Chris Devenski",
    "profitMargin": 81.89999999999998,
    "sell_price": 441,
    "buy_price": 315
    },
    {
    "name": "Adam Frazier",
    "profitMargin": 81.5,
    "sell_price": 195,
    "buy_price": 94
    },
    {
    "name": "Juan Minaya",
    "profitMargin": 81.5,
    "sell_price": 155,
    "buy_price": 58
    },
    {
    "name": "Hector Neris",
    "profitMargin": 81.4,
    "sell_price": 226,
    "buy_price": 122
    },
    {
    "name": "Jonathan Holder",
    "profitMargin": 81.30000000000001,
    "sell_price": 167,
    "buy_price": 69
    },
    {
    "name": "Nick Goody",
    "profitMargin": 81.19999999999999,
    "sell_price": 168,
    "buy_price": 70
    },
    {
    "name": "Gregory Polanco",
    "profitMargin": 81,
    "sell_price": 420,
    "buy_price": 297
    },
    {
    "name": "Jett Bandy",
    "profitMargin": 81,
    "sell_price": 130,
    "buy_price": 36
    },
    {
    "name": "Pablo Sandoval",
    "profitMargin": 81,
    "sell_price": 170,
    "buy_price": 72
    },
    {
    "name": "Raisel Iglesias",
    "profitMargin": 80.89999999999998,
    "sell_price": 441,
    "buy_price": 316
    },
    {
    "name": "Dinelson Lamet",
    "profitMargin": 80.8,
    "sell_price": 122,
    "buy_price": 29
    },
    {
    "name": "Alex Avila",
    "profitMargin": 80.5,
    "sell_price": 145,
    "buy_price": 50
    },
    {
    "name": "Marwin Gonzalez",
    "profitMargin": 80.5,
    "sell_price": 545,
    "buy_price": 410
    },
    {
    "name": "Matt Moore",
    "profitMargin": 80.5,
    "sell_price": 145,
    "buy_price": 50
    },
    {
    "name": "Antonio Senzatela",
    "profitMargin": 80.1,
    "sell_price": 89,
    "buy_price": 0
    },
    {
    "name": "Tomas Nido",
    "profitMargin": 79.8,
    "sell_price": 122,
    "buy_price": 30
    },
    {
    "name": "Brandon Woodruff",
    "profitMargin": 79.6,
    "sell_price": 204,
    "buy_price": 104
    },
    {
    "name": "Chris Rusin",
    "profitMargin": 79.6,
    "sell_price": 144,
    "buy_price": 50
    },
    {
    "name": "Carlos Santana",
    "profitMargin": 79.5,
    "sell_price": 435,
    "buy_price": 312
    },
    {
    "name": "Nomar Mazara",
    "profitMargin": 79.5,
    "sell_price": 385,
    "buy_price": 267
    },
    {
    "name": "Victor Caratini",
    "profitMargin": 79.5,
    "sell_price": 125,
    "buy_price": 33
    },
    {
    "name": "Alex Reyes",
    "profitMargin": 79.4,
    "sell_price": 186,
    "buy_price": 88
    },
    {
    "name": "Craig Gentry",
    "profitMargin": 79.30000000000001,
    "sell_price": 187,
    "buy_price": 89
    },
    {
    "name": "Mike Clevinger",
    "profitMargin": 79.09999999999991,
    "sell_price": 1199,
    "buy_price": 1000
    },
    {
    "name": "Yoenis Cespedes",
    "profitMargin": 79.09999999999991,
    "sell_price": 1199,
    "buy_price": 1000
    },
    {
    "name": "David Peralta",
    "profitMargin": 79,
    "sell_price": 1200,
    "buy_price": 1001
    },
    {
    "name": "Jason Heyward",
    "profitMargin": 78.60000000000002,
    "sell_price": 394,
    "buy_price": 276
    },
    {
    "name": "Luiz Gohara",
    "profitMargin": 78.4,
    "sell_price": 146,
    "buy_price": 53
    },
    {
    "name": "Kyle Crockett",
    "profitMargin": 78.2,
    "sell_price": 118,
    "buy_price": 28
    },
    {
    "name": "Willson Contreras",
    "profitMargin": 78.10000000000002,
    "sell_price": 899,
    "buy_price": 731
    },
    {
    "name": "Adam Eaton",
    "profitMargin": 78,
    "sell_price": 420,
    "buy_price": 300
    },
    {
    "name": "Jose Alvarez",
    "profitMargin": 78,
    "sell_price": 130,
    "buy_price": 39
    },
    {
    "name": "Alen Hanson",
    "profitMargin": 77.80000000000001,
    "sell_price": 202,
    "buy_price": 104
    },
    {
    "name": "Chris Hatcher",
    "profitMargin": 77.5,
    "sell_price": 115,
    "buy_price": 26
    },
    {
    "name": "Freddy Peralta",
    "profitMargin": 77.5,
    "sell_price": 205,
    "buy_price": 107
    },
    {
    "name": "Pedro Strop",
    "profitMargin": 77.5,
    "sell_price": 445,
    "buy_price": 323
    },
    {
    "name": "Sean Reid-Foley",
    "profitMargin": 77.5,
    "sell_price": 285,
    "buy_price": 179
    },
    {
    "name": "Chris Herrmann",
    "profitMargin": 77.3,
    "sell_price": 117,
    "buy_price": 28
    },
    {
    "name": "Chris Bassitt",
    "profitMargin": 76.5,
    "sell_price": 85,
    "buy_price": 0
    },
    {
    "name": "Elvis Luciano",
    "profitMargin": 76.5,
    "sell_price": 405,
    "buy_price": 288
    },
    {
    "name": "Corey Dickerson",
    "profitMargin": 76.19999999999999,
    "sell_price": 448,
    "buy_price": 327
    },
    {
    "name": "Brandon Morrow",
    "profitMargin": 75.80000000000001,
    "sell_price": 552,
    "buy_price": 421
    },
    {
    "name": "Brock Stewart",
    "profitMargin": 75.8,
    "sell_price": 112,
    "buy_price": 25
    },
    {
    "name": "Tyler Mahle",
    "profitMargin": 75.7,
    "sell_price": 123,
    "buy_price": 35
    },
    {
    "name": "Pedro Severino",
    "profitMargin": 75.69999999999999,
    "sell_price": 163,
    "buy_price": 71
    },
    {
    "name": "A.J. Cole",
    "profitMargin": 75.6,
    "sell_price": 114,
    "buy_price": 27
    },
    {
    "name": "Adam Rosales",
    "profitMargin": 75.6,
    "sell_price": 114,
    "buy_price": 27
    },
    {
    "name": "Brock Holt",
    "profitMargin": 75.6,
    "sell_price": 114,
    "buy_price": 27
    },
    {
    "name": "Chaz Roe",
    "profitMargin": 75.6,
    "sell_price": 174,
    "buy_price": 81
    },
    {
    "name": "Hunter Strickland",
    "profitMargin": 75.5,
    "sell_price": 145,
    "buy_price": 55
    },
    {
    "name": "Ryan Goins",
    "profitMargin": 75.5,
    "sell_price": 175,
    "buy_price": 82
    },
    {
    "name": "Shane Bieber",
    "profitMargin": 75.5,
    "sell_price": 195,
    "buy_price": 100
    },
    {
    "name": "Teoscar Hernandez",
    "profitMargin": 75.5,
    "sell_price": 125,
    "buy_price": 37
    },
    {
    "name": "Josh Tomlin",
    "profitMargin": 75.1,
    "sell_price": 139,
    "buy_price": 50
    },
    {
    "name": "Matt Szczur",
    "profitMargin": 75,
    "sell_price": 160,
    "buy_price": 69
    },
    {
    "name": "Trevor Richards",
    "profitMargin": 74.69999999999999,
    "sell_price": 233,
    "buy_price": 135
    },
    {
    "name": "Elias Diaz",
    "profitMargin": 74.6,
    "sell_price": 184,
    "buy_price": 91
    },
    {
    "name": "D.J. Stewart",
    "profitMargin": 74.5,
    "sell_price": 195,
    "buy_price": 101
    },
    {
    "name": "Ramon Laureano",
    "profitMargin": 74.5,
    "sell_price": 175,
    "buy_price": 83
    },
    {
    "name": "Jace Fry",
    "profitMargin": 74.30000000000001,
    "sell_price": 177,
    "buy_price": 85
    },
    {
    "name": "Shohei Ohtani",
    "profitMargin": 74.20000000000005,
    "sell_price": 1218,
    "buy_price": 1022
    },
    {
    "name": "Starlin Castro",
    "profitMargin": 74.20000000000005,
    "sell_price": 1078,
    "buy_price": 896
    },
    {
    "name": "Devin Mesoraco",
    "profitMargin": 74.2,
    "sell_price": 128,
    "buy_price": 41
    },
    {
    "name": "Ryan Tepera",
    "profitMargin": 74.19999999999999,
    "sell_price": 238,
    "buy_price": 140
    },
    {
    "name": "Jonny Venters",
    "profitMargin": 74,
    "sell_price": 140,
    "buy_price": 52
    },
    {
    "name": "Roberto Perez",
    "profitMargin": 74,
    "sell_price": 110,
    "buy_price": 25
    },
    {
    "name": "Aaron Altherr",
    "profitMargin": 73.6,
    "sell_price": 134,
    "buy_price": 47
    },
    {
    "name": "Austin Wynns",
    "profitMargin": 73.5,
    "sell_price": 225,
    "buy_price": 129
    },
    {
    "name": "Koda Glover",
    "profitMargin": 73.5,
    "sell_price": 145,
    "buy_price": 57
    },
    {
    "name": "Pat Valaika",
    "profitMargin": 73.5,
    "sell_price": 135,
    "buy_price": 48
    },
    {
    "name": "Raimel Tapia",
    "profitMargin": 73.5,
    "sell_price": 115,
    "buy_price": 30
    },
    {
    "name": "Luke Gregerson",
    "profitMargin": 73.4,
    "sell_price": 136,
    "buy_price": 49
    },
    {
    "name": "Derek Holland",
    "profitMargin": 73,
    "sell_price": 170,
    "buy_price": 80
    },
    {
    "name": "Gorkys Hernandez",
    "profitMargin": 73,
    "sell_price": 110,
    "buy_price": 26
    },
    {
    "name": "Greg Bird",
    "profitMargin": 73,
    "sell_price": 170,
    "buy_price": 80
    },
    {
    "name": "Jhonatan Solano",
    "profitMargin": 73,
    "sell_price": 110,
    "buy_price": 26
    },
    {
    "name": "Mitch Haniger",
    "profitMargin": 73,
    "sell_price": 1200,
    "buy_price": 1007
    },
    {
    "name": "Rob Refsnyder",
    "profitMargin": 73,
    "sell_price": 180,
    "buy_price": 89
    },
    {
    "name": "Jake Junis",
    "profitMargin": 72.9,
    "sell_price": 181,
    "buy_price": 90
    },
    {
    "name": "Bobby Wilson",
    "profitMargin": 72.8,
    "sell_price": 142,
    "buy_price": 55
    },
    {
    "name": "Sonny Gray",
    "profitMargin": 72.6,
    "sell_price": 154,
    "buy_price": 66
    },
    {
    "name": "Jonathan Loaisiga",
    "profitMargin": 72.3,
    "sell_price": 87,
    "buy_price": 6
    },
    {
    "name": "Kevin Kramer",
    "profitMargin": 72.1,
    "sell_price": 149,
    "buy_price": 62
    },
    {
    "name": "Reynaldo Lopez",
    "profitMargin": 72.1,
    "sell_price": 159,
    "buy_price": 71
    },
    {
    "name": "Hector Rondon",
    "profitMargin": 72,
    "sell_price": 380,
    "buy_price": 270
    },
    {
    "name": "Jose Ruiz",
    "profitMargin": 71.8,
    "sell_price": 92,
    "buy_price": 11
    },
    {
    "name": "Andrew Suarez",
    "profitMargin": 71.6,
    "sell_price": 124,
    "buy_price": 40
    },
    {
    "name": "Ryan McMahon",
    "profitMargin": 71.3,
    "sell_price": 87,
    "buy_price": 7
    },
    {
    "name": "Curt Casali",
    "profitMargin": 71,
    "sell_price": 120,
    "buy_price": 37
    },
    {
    "name": "Dilson Herrera",
    "profitMargin": 71,
    "sell_price": 130,
    "buy_price": 46
    },
    {
    "name": "Joey Lucchesi",
    "profitMargin": 71,
    "sell_price": 170,
    "buy_price": 82
    },
    {
    "name": "Matt Joyce",
    "profitMargin": 71,
    "sell_price": 180,
    "buy_price": 91
    },
    {
    "name": "Yandy Diaz",
    "profitMargin": 71,
    "sell_price": 190,
    "buy_price": 100
    },
    {
    "name": "Chris Owings",
    "profitMargin": 70.80000000000001,
    "sell_price": 162,
    "buy_price": 75
    },
    {
    "name": "Cory Spangenberg",
    "profitMargin": 70.8,
    "sell_price": 112,
    "buy_price": 30
    },
    {
    "name": "Eric Young Jr.",
    "profitMargin": 70.8,
    "sell_price": 112,
    "buy_price": 30
    },
    {
    "name": "Tyler Kinley",
    "profitMargin": 70.5,
    "sell_price": 85,
    "buy_price": 6
    },
    {
    "name": "Bruce Rondon",
    "profitMargin": 70.4,
    "sell_price": 106,
    "buy_price": 25
    },
    {
    "name": "Ryan Cordell",
    "profitMargin": 70.30000000000001,
    "sell_price": 157,
    "buy_price": 71
    },
    {
    "name": "Greg Allen",
    "profitMargin": 70.2,
    "sell_price": 108,
    "buy_price": 27
    },
    {
    "name": "Melky Cabrera",
    "profitMargin": 70.19999999999999,
    "sell_price": 158,
    "buy_price": 72
    },
    {
    "name": "Scott Alexander",
    "profitMargin": 70.1,
    "sell_price": 139,
    "buy_price": 55
    },
    {
    "name": "Freddy Galvis",
    "profitMargin": 70,
    "sell_price": 180,
    "buy_price": 92
    },
    {
    "name": "Justin Smoak",
    "profitMargin": 70,
    "sell_price": 200,
    "buy_price": 110
    },
    {
    "name": "Byron Buxton",
    "profitMargin": 69.69999999999999,
    "sell_price": 233,
    "buy_price": 140
    },
    {
    "name": "Jonathan Lucroy",
    "profitMargin": 69.5,
    "sell_price": 175,
    "buy_price": 88
    },
    {
    "name": "Matt Bowman",
    "profitMargin": 69.3,
    "sell_price": 77,
    "buy_price": 0
    },
    {
    "name": "Nestor Cortes Jr.",
    "profitMargin": 69.3,
    "sell_price": 77,
    "buy_price": 0
    },
    {
    "name": "Greg Holland",
    "profitMargin": 69.1,
    "sell_price": 149,
    "buy_price": 65
    },
    {
    "name": "Jeff Mathis",
    "profitMargin": 69,
    "sell_price": 110,
    "buy_price": 30
    },
    {
    "name": "John Ryan Murphy",
    "profitMargin": 69,
    "sell_price": 120,
    "buy_price": 39
    },
    {
    "name": "Manuel Margot",
    "profitMargin": 68.69999999999999,
    "sell_price": 173,
    "buy_price": 87
    },
    {
    "name": "Marco Gonzales",
    "profitMargin": 68.60000000000002,
    "sell_price": 394,
    "buy_price": 286
    },
    {
    "name": "Brandon Workman",
    "profitMargin": 68.5,
    "sell_price": 105,
    "buy_price": 26
    },
    {
    "name": "Gio Urshela",
    "profitMargin": 68.5,
    "sell_price": 105,
    "buy_price": 26
    },
    {
    "name": "Derek Dietrich",
    "profitMargin": 68.4,
    "sell_price": 76,
    "buy_price": 0
    },
    {
    "name": "Ryan Braun",
    "profitMargin": 68.10000000000002,
    "sell_price": 399,
    "buy_price": 291
    },
    {
    "name": "Colin Moran",
    "profitMargin": 68.1,
    "sell_price": 109,
    "buy_price": 30
    },
    {
    "name": "Joey Rickard",
    "profitMargin": 68.1,
    "sell_price": 179,
    "buy_price": 93
    },
    {
    "name": "Hyun-Jin Ryu",
    "profitMargin": 68,
    "sell_price": 520,
    "buy_price": 400
    },
    {
    "name": "Steven Matz",
    "profitMargin": 68,
    "sell_price": 220,
    "buy_price": 130
    },
    {
    "name": "Tyler Lyons",
    "profitMargin": 67.6,
    "sell_price": 184,
    "buy_price": 98
    },
    {
    "name": "Chase Headley",
    "profitMargin": 67.5,
    "sell_price": 75,
    "buy_price": 0
    },
    {
    "name": "Dan Otero",
    "profitMargin": 67.5,
    "sell_price": 105,
    "buy_price": 27
    },
    {
    "name": "JaCoby Jones",
    "profitMargin": 67.5,
    "sell_price": 175,
    "buy_price": 90
    },
    {
    "name": "Jeff Samardzija",
    "profitMargin": 67.5,
    "sell_price": 415,
    "buy_price": 306
    },
    {
    "name": "Jose Iglesias",
    "profitMargin": 67.5,
    "sell_price": 445,
    "buy_price": 333
    },
    {
    "name": "Miguel Castro",
    "profitMargin": 67.5,
    "sell_price": 75,
    "buy_price": 0
    },
    {
    "name": "Dee Gordon",
    "profitMargin": 67.29999999999995,
    "sell_price": 627,
    "buy_price": 497
    },
    {
    "name": "Garrett Hampson",
    "profitMargin": 67.2,
    "sell_price": 108,
    "buy_price": 30
    },
    {
    "name": "Zac Rosscup",
    "profitMargin": 67.2,
    "sell_price": 108,
    "buy_price": 30
    },
    {
    "name": "Caleb Ferguson",
    "profitMargin": 67.1,
    "sell_price": 209,
    "buy_price": 121
    },
    {
    "name": "Matt Koch",
    "profitMargin": 67.1,
    "sell_price": 129,
    "buy_price": 49
    },
    {
    "name": "Justin Anderson",
    "profitMargin": 66.6,
    "sell_price": 74,
    "buy_price": 0
    },
    {
    "name": "Max Stassi",
    "profitMargin": 66.5,
    "sell_price": 115,
    "buy_price": 37
    },
    {
    "name": "Brett Graves",
    "profitMargin": 66.2,
    "sell_price": 88,
    "buy_price": 13
    },
    {
    "name": "Max Fried",
    "profitMargin": 66.1,
    "sell_price": 169,
    "buy_price": 86
    },
    {
    "name": "Robert Stock",
    "profitMargin": 66.1,
    "sell_price": 119,
    "buy_price": 41
    },
    {
    "name": "Anthony Santander",
    "profitMargin": 66,
    "sell_price": 90,
    "buy_price": 15
    },
    {
    "name": "Dean Kiekhefer",
    "profitMargin": 65.7,
    "sell_price": 73,
    "buy_price": 0
    },
    {
    "name": "Tyler Saladino",
    "profitMargin": 65.7,
    "sell_price": 73,
    "buy_price": 0
    },
    {
    "name": "Shelby Miller",
    "profitMargin": 65.6,
    "sell_price": 104,
    "buy_price": 28
    },
    {
    "name": "Jose Bautista",
    "profitMargin": 65.5,
    "sell_price": 105,
    "buy_price": 29
    },
    {
    "name": "Matt Bush",
    "profitMargin": 65.4,
    "sell_price": 106,
    "buy_price": 30
    },
    {
    "name": "Travis Jankowski",
    "profitMargin": 65.2,
    "sell_price": 108,
    "buy_price": 32
    },
    {
    "name": "Kevin Plawecki",
    "profitMargin": 65,
    "sell_price": 100,
    "buy_price": 25
    },
    {
    "name": "Ryan Schimpf",
    "profitMargin": 65,
    "sell_price": 100,
    "buy_price": 25
    },
    {
    "name": "Tommy Kahnle",
    "profitMargin": 65,
    "sell_price": 200,
    "buy_price": 115
    },
    {
    "name": "Trevor Gott",
    "profitMargin": 65,
    "sell_price": 140,
    "buy_price": 61
    },
    {
    "name": "Tyler Thornburg",
    "profitMargin": 65,
    "sell_price": 110,
    "buy_price": 34
    },
    {
    "name": "Yadiel Rivera",
    "profitMargin": 65,
    "sell_price": 80,
    "buy_price": 7
    },
    {
    "name": "Robert Stephenson",
    "profitMargin": 64.9,
    "sell_price": 81,
    "buy_price": 8
    },
    {
    "name": "Jose Fernandez",
    "profitMargin": 64.8,
    "sell_price": 72,
    "buy_price": 0
    },
    {
    "name": "David Phelps",
    "profitMargin": 64.5,
    "sell_price": 125,
    "buy_price": 48
    },
    {
    "name": "Grayson Greiner",
    "profitMargin": 64.5,
    "sell_price": 135,
    "buy_price": 57
    },
    {
    "name": "Sam Tuivailala",
    "profitMargin": 64.5,
    "sell_price": 105,
    "buy_price": 30
    },
    {
    "name": "Ryan Pressly",
    "profitMargin": 64.19999999999999,
    "sell_price": 448,
    "buy_price": 339
    },
    {
    "name": "Jesse Biddle",
    "profitMargin": 64.1,
    "sell_price": 139,
    "buy_price": 61
    },
    {
    "name": "Trevor Plouffe",
    "profitMargin": 64.1,
    "sell_price": 99,
    "buy_price": 25
    },
    {
    "name": "Adam Wainwright",
    "profitMargin": 64,
    "sell_price": 110,
    "buy_price": 35
    },
    {
    "name": "Phil Gosselin",
    "profitMargin": 63.9,
    "sell_price": 71,
    "buy_price": 0
    },
    {
    "name": "Braden Bishop",
    "profitMargin": 63.599999999999994,
    "sell_price": 144,
    "buy_price": 66
    },
    {
    "name": "Chad Kuhl",
    "profitMargin": 63.599999999999994,
    "sell_price": 144,
    "buy_price": 66
    },
    {
    "name": "Ben Meyer",
    "profitMargin": 63.5,
    "sell_price": 85,
    "buy_price": 13
    },
    {
    "name": "Fernando Romero",
    "profitMargin": 63.5,
    "sell_price": 135,
    "buy_price": 58
    },
    {
    "name": "Wilmer Difo",
    "profitMargin": 63.5,
    "sell_price": 105,
    "buy_price": 31
    },
    {
    "name": "Eduardo Paredes",
    "profitMargin": 63.400000000000006,
    "sell_price": 76,
    "buy_price": 5
    },
    {
    "name": "Zack Wheeler",
    "profitMargin": 63.30000000000001,
    "sell_price": 527,
    "buy_price": 411
    },
    {
    "name": "Thyago Vieira",
    "profitMargin": 63.3,
    "sell_price": 77,
    "buy_price": 6
    },
    {
    "name": "Peter Bourjos",
    "profitMargin": 63.2,
    "sell_price": 98,
    "buy_price": 25
    },
    {
    "name": "Moises Sierra",
    "profitMargin": 63.099999999999994,
    "sell_price": 99,
    "buy_price": 26
    },
    {
    "name": "Daniel Winkler",
    "profitMargin": 63,
    "sell_price": 370,
    "buy_price": 270
    },
    {
    "name": "Jake Cave",
    "profitMargin": 63,
    "sell_price": 180,
    "buy_price": 99
    },
    {
    "name": "Christopher Bostick",
    "profitMargin": 62.900000000000006,
    "sell_price": 81,
    "buy_price": 10
    },
    {
    "name": "Lourdes Gurriel Jr.",
    "profitMargin": 62.599999999999994,
    "sell_price": 154,
    "buy_price": 76
    },
    {
    "name": "Jerry Vasto",
    "profitMargin": 62.5,
    "sell_price": 75,
    "buy_price": 5
    },
    {
    "name": "Trevor Hildenberger",
    "profitMargin": 62.5,
    "sell_price": 125,
    "buy_price": 50
    },
    {
    "name": "Wade Davis",
    "profitMargin": 62.5,
    "sell_price": 425,
    "buy_price": 320
    },
    {
    "name": "Lance Lynn",
    "profitMargin": 62.3,
    "sell_price": 117,
    "buy_price": 43
    },
    {
    "name": "J.D. Davis",
    "profitMargin": 62.2,
    "sell_price": 88,
    "buy_price": 17
    },
    {
    "name": "Andrew McCutchen",
    "profitMargin": 62.10000000000002,
    "sell_price": 649,
    "buy_price": 522
    },
    {
    "name": "Magneuris Sierra",
    "profitMargin": 62.099999999999994,
    "sell_price": 79,
    "buy_price": 9
    },
    {
    "name": "Joc Pederson",
    "profitMargin": 62,
    "sell_price": 440,
    "buy_price": 334
    },
    {
    "name": "Joe Kelly",
    "profitMargin": 62,
    "sell_price": 180,
    "buy_price": 100
    },
    {
    "name": "Brad Peacock",
    "profitMargin": 61.80000000000001,
    "sell_price": 422,
    "buy_price": 318
    },
    {
    "name": "Bud Norris",
    "profitMargin": 61.599999999999994,
    "sell_price": 104,
    "buy_price": 32
    },
    {
    "name": "Merandy Gonzalez",
    "profitMargin": 61.5,
    "sell_price": 75,
    "buy_price": 6
    },
    {
    "name": "Leury Garcia",
    "profitMargin": 61.30000000000001,
    "sell_price": 147,
    "buy_price": 71
    },
    {
    "name": "Adam Morgan",
    "profitMargin": 61.099999999999994,
    "sell_price": 119,
    "buy_price": 46
    },
    {
    "name": "Logan Forsythe",
    "profitMargin": 61.099999999999994,
    "sell_price": 99,
    "buy_price": 28
    },
    {
    "name": "Nick Wittgren",
    "profitMargin": 61.099999999999994,
    "sell_price": 99,
    "buy_price": 28
    },
    {
    "name": "Willie Calhoun",
    "profitMargin": 61.099999999999994,
    "sell_price": 99,
    "buy_price": 28
    },
    {
    "name": "Corbin Burnes",
    "profitMargin": 60.80000000000001,
    "sell_price": 162,
    "buy_price": 85
    },
    {
    "name": "Luke Farrell",
    "profitMargin": 60.7,
    "sell_price": 123,
    "buy_price": 50
    },
    {
    "name": "Drew Anderson",
    "profitMargin": 60.599999999999994,
    "sell_price": 74,
    "buy_price": 6
    },
    {
    "name": "Daniel Coulombe",
    "profitMargin": 60.5,
    "sell_price": 95,
    "buy_price": 25
    },
    {
    "name": "Drew Pomeranz",
    "profitMargin": 60.5,
    "sell_price": 125,
    "buy_price": 52
    },
    {
    "name": "Omar Narvaez",
    "profitMargin": 60.5,
    "sell_price": 95,
    "buy_price": 25
    },
    {
    "name": "Amed Rosario",
    "profitMargin": 60.400000000000006,
    "sell_price": 156,
    "buy_price": 80
    },
    {
    "name": "Chris Young",
    "profitMargin": 60.400000000000006,
    "sell_price": 96,
    "buy_price": 26
    },
    {
    "name": "Zach Eflin",
    "profitMargin": 60.30000000000001,
    "sell_price": 167,
    "buy_price": 90
    },
    {
    "name": "Jim Johnson",
    "profitMargin": 60.099999999999994,
    "sell_price": 99,
    "buy_price": 29
    },
    {
    "name": "Shane Robinson",
    "profitMargin": 60.099999999999994,
    "sell_price": 99,
    "buy_price": 29
    },
    {
    "name": "Kevin Quackenbush",
    "profitMargin": 60,
    "sell_price": 100,
    "buy_price": 30
    },
    {
    "name": "Mike Dunn",
    "profitMargin": 60,
    "sell_price": 100,
    "buy_price": 30
    },
    {
    "name": "Gabby Guerrero",
    "profitMargin": 59.80000000000001,
    "sell_price": 222,
    "buy_price": 140
    },
    {
    "name": "Marcus Stroman",
    "profitMargin": 59.80000000000001,
    "sell_price": 152,
    "buy_price": 77
    },
    {
    "name": "Daniel Vogelbach",
    "profitMargin": 59.8,
    "sell_price": 122,
    "buy_price": 50
    },
    {
    "name": "Nick Williams",
    "profitMargin": 59.8,
    "sell_price": 122,
    "buy_price": 50
    },
    {
    "name": "Tyler Clippard",
    "profitMargin": 59.8,
    "sell_price": 122,
    "buy_price": 50
    },
    {
    "name": "J.T. Chargois",
    "profitMargin": 59.5,
    "sell_price": 95,
    "buy_price": 26
    },
    {
    "name": "Martin Maldonado",
    "profitMargin": 59.5,
    "sell_price": 205,
    "buy_price": 125
    },
    {
    "name": "Tyler Wade",
    "profitMargin": 59.5,
    "sell_price": 75,
    "buy_price": 8
    },
    {
    "name": "Ben Gamel",
    "profitMargin": 59.400000000000006,
    "sell_price": 96,
    "buy_price": 27
    },
    {
    "name": "Kazuhisa Makita",
    "profitMargin": 59.4,
    "sell_price": 66,
    "buy_price": 0
    },
    {
    "name": "Tony Kemp",
    "profitMargin": 59.2,
    "sell_price": 98,
    "buy_price": 29
    },
    {
    "name": "Yadier Molina",
    "profitMargin": 59.10000000000002,
    "sell_price": 899,
    "buy_price": 750
    },
    {
    "name": "Michael Kopech",
    "profitMargin": 59.099999999999994,
    "sell_price": 139,
    "buy_price": 66
    },
    {
    "name": "Brandon Belt",
    "profitMargin": 59,
    "sell_price": 460,
    "buy_price": 355
    },
    {
    "name": "Eric Thames",
    "profitMargin": 58.900000000000006,
    "sell_price": 111,
    "buy_price": 41
    },
    {
    "name": "Josh Bell",
    "profitMargin": 58.900000000000006,
    "sell_price": 191,
    "buy_price": 113
    },
    {
    "name": "Carlos Tocci",
    "profitMargin": 58.9,
    "sell_price": 71,
    "buy_price": 5
    },
    {
    "name": "Chris Flexen",
    "profitMargin": 58.9,
    "sell_price": 71,
    "buy_price": 5
    },
    {
    "name": "Chris Iannetta",
    "profitMargin": 58.5,
    "sell_price": 95,
    "buy_price": 27
    },
    {
    "name": "Lance McCullers Jr.",
    "profitMargin": 58.5,
    "sell_price": 415,
    "buy_price": 315
    },
    {
    "name": "Ryan Sherriff",
    "profitMargin": 58.5,
    "sell_price": 75,
    "buy_price": 9
    },
    {
    "name": "Shin-Soo Choo",
    "profitMargin": 58.5,
    "sell_price": 155,
    "buy_price": 81
    },
    {
    "name": "Socrates Brito",
    "profitMargin": 58.5,
    "sell_price": 195,
    "buy_price": 117
    },
    {
    "name": "Devon Travis",
    "profitMargin": 58.19999999999999,
    "sell_price": 148,
    "buy_price": 75
    },
    {
    "name": "Joaquin Benoit",
    "profitMargin": 58.099999999999994,
    "sell_price": 119,
    "buy_price": 49
    },
    {
    "name": "Carson Smith",
    "profitMargin": 58,
    "sell_price": 130,
    "buy_price": 59
    },
    {
    "name": "Drew Steckenrider",
    "profitMargin": 58,
    "sell_price": 260,
    "buy_price": 176
    },
    {
    "name": "Evan Gattis",
    "profitMargin": 58,
    "sell_price": 160,
    "buy_price": 86
    },
    {
    "name": "Steven Okert",
    "profitMargin": 58,
    "sell_price": 70,
    "buy_price": 5
    },
    {
    "name": "Patrick Kivlehan",
    "profitMargin": 57.9,
    "sell_price": 71,
    "buy_price": 6
    },
    {
    "name": "Nick Franklin",
    "profitMargin": 57.8,
    "sell_price": 92,
    "buy_price": 25
    },
    {
    "name": "Felix Hernandez",
    "profitMargin": 57.7,
    "sell_price": 103,
    "buy_price": 35
    },
    {
    "name": "Josh Harrison",
    "profitMargin": 57.69999999999999,
    "sell_price": 203,
    "buy_price": 125
    },
    {
    "name": "Sal Romano",
    "profitMargin": 57.5,
    "sell_price": 115,
    "buy_price": 46
    },
    {
    "name": "Cedric Mullins",
    "profitMargin": 57.400000000000006,
    "sell_price": 236,
    "buy_price": 155
    },
    {
    "name": "Junior Guerra",
    "profitMargin": 57.3,
    "sell_price": 97,
    "buy_price": 30
    },
    {
    "name": "Renato Nunez",
    "profitMargin": 57.3,
    "sell_price": 77,
    "buy_price": 12
    },
    {
    "name": "Santiago Casilla",
    "profitMargin": 57.3,
    "sell_price": 97,
    "buy_price": 30
    },
    {
    "name": "Jaime Barria",
    "profitMargin": 57.099999999999994,
    "sell_price": 99,
    "buy_price": 32
    },
    {
    "name": "Paulo Orlando",
    "profitMargin": 57.099999999999994,
    "sell_price": 99,
    "buy_price": 32
    },
    {
    "name": "Trey Mancini",
    "profitMargin": 57.099999999999994,
    "sell_price": 169,
    "buy_price": 95
    },
    {
    "name": "Daniel Palka",
    "profitMargin": 57,
    "sell_price": 140,
    "buy_price": 69
    },
    {
    "name": "Jorge Soler",
    "profitMargin": 57,
    "sell_price": 130,
    "buy_price": 60
    },
    {
    "name": "Kevin Pillar",
    "profitMargin": 57,
    "sell_price": 480,
    "buy_price": 375
    },
    {
    "name": "Roman Quinn",
    "profitMargin": 57,
    "sell_price": 100,
    "buy_price": 33
    },
    {
    "name": "Deven Marrero",
    "profitMargin": 56.8,
    "sell_price": 82,
    "buy_price": 17
    },
    {
    "name": "Pedro Araujo",
    "profitMargin": 56.8,
    "sell_price": 82,
    "buy_price": 17
    },
    {
    "name": "Tony Wolters",
    "profitMargin": 56.8,
    "sell_price": 102,
    "buy_price": 35
    },
    {
    "name": "Randall Delgado",
    "profitMargin": 56.7,
    "sell_price": 63,
    "buy_price": 0
    },
    {
    "name": "Rhiner Cruz",
    "profitMargin": 56.7,
    "sell_price": 63,
    "buy_price": 0
    },
    {
    "name": "Anibal Sanchez",
    "profitMargin": 56.599999999999994,
    "sell_price": 174,
    "buy_price": 100
    },
    {
    "name": "Charlie Culberson",
    "profitMargin": 56.5,
    "sell_price": 125,
    "buy_price": 56
    },
    {
    "name": "Matt den Dekker",
    "profitMargin": 56.5,
    "sell_price": 95,
    "buy_price": 29
    },
    {
    "name": "James Norwood",
    "profitMargin": 56.2,
    "sell_price": 68,
    "buy_price": 5
    },
    {
    "name": "Jose Briceno",
    "profitMargin": 56.2,
    "sell_price": 118,
    "buy_price": 50
    },
    {
    "name": "Mike Zagurski",
    "profitMargin": 56.2,
    "sell_price": 68,
    "buy_price": 5
    },
    {
    "name": "Ryan Rua",
    "profitMargin": 56.2,
    "sell_price": 98,
    "buy_price": 32
    },
    {
    "name": "Kyle Barraclough",
    "profitMargin": 56.19999999999999,
    "sell_price": 168,
    "buy_price": 95
    },
    {
    "name": "James McCann",
    "profitMargin": 56,
    "sell_price": 140,
    "buy_price": 70
    },
    {
    "name": "Justin Wilson",
    "profitMargin": 56,
    "sell_price": 120,
    "buy_price": 52
    },
    {
    "name": "Michael Fulmer",
    "profitMargin": 56,
    "sell_price": 640,
    "buy_price": 520
    },
    {
    "name": "Welington Castillo",
    "profitMargin": 56,
    "sell_price": 130,
    "buy_price": 61
    },
    {
    "name": "Chad Wallach",
    "profitMargin": 55.8,
    "sell_price": 62,
    "buy_price": 0
    },
    {
    "name": "Hansel Robles",
    "profitMargin": 55.7,
    "sell_price": 93,
    "buy_price": 28
    },
    {
    "name": "Daniel Hudson",
    "profitMargin": 55.5,
    "sell_price": 145,
    "buy_price": 75
    },
    {
    "name": "Franmil Reyes",
    "profitMargin": 55.5,
    "sell_price": 135,
    "buy_price": 66
    },
    {
    "name": "Tim Beckham",
    "profitMargin": 55.5,
    "sell_price": 135,
    "buy_price": 66
    },
    {
    "name": "Jimmy Yacabonis",
    "profitMargin": 55.2,
    "sell_price": 68,
    "buy_price": 6
    },
    {
    "name": "Mark Canha",
    "profitMargin": 55.19999999999999,
    "sell_price": 148,
    "buy_price": 78
    },
    {
    "name": "Javy Guerra",
    "profitMargin": 55.1,
    "sell_price": 69,
    "buy_price": 7
    },
    {
    "name": "Preston Guilmet",
    "profitMargin": 55.1,
    "sell_price": 69,
    "buy_price": 7
    },
    {
    "name": "Austin Barnes",
    "profitMargin": 55.099999999999994,
    "sell_price": 139,
    "buy_price": 70
    },
    {
    "name": "Austin Gomber",
    "profitMargin": 55.099999999999994,
    "sell_price": 119,
    "buy_price": 52
    },
    {
    "name": "Edwin Jackson",
    "profitMargin": 55.099999999999994,
    "sell_price": 89,
    "buy_price": 25
    },
    {
    "name": "Luis Garcia",
    "profitMargin": 55.099999999999994,
    "sell_price": 89,
    "buy_price": 25
    },
    {
    "name": "Framber Valdez",
    "profitMargin": 55,
    "sell_price": 70,
    "buy_price": 8
    },
    {
    "name": "Brad Keller",
    "profitMargin": 54.900000000000006,
    "sell_price": 111,
    "buy_price": 45
    },
    {
    "name": "Ehire Adrianza",
    "profitMargin": 54.900000000000006,
    "sell_price": 111,
    "buy_price": 45
    },
    {
    "name": "Austin Jackson",
    "profitMargin": 54.8,
    "sell_price": 92,
    "buy_price": 28
    },
    {
    "name": "Brandon Guyer",
    "profitMargin": 54.7,
    "sell_price": 103,
    "buy_price": 38
    },
    {
    "name": "Jimmy Nelson",
    "profitMargin": 54.60000000000002,
    "sell_price": 414,
    "buy_price": 318
    },
    {
    "name": "Danny Duffy",
    "profitMargin": 54.599999999999994,
    "sell_price": 154,
    "buy_price": 84
    },
    {
    "name": "Dominic Leone",
    "profitMargin": 54.599999999999994,
    "sell_price": 94,
    "buy_price": 30
    },
    {
    "name": "Wander Suero",
    "profitMargin": 54.599999999999994,
    "sell_price": 124,
    "buy_price": 57
    },
    {
    "name": "Chase Whitley",
    "profitMargin": 54.5,
    "sell_price": 105,
    "buy_price": 40
    },
    {
    "name": "Jason Vargas",
    "profitMargin": 54.5,
    "sell_price": 105,
    "buy_price": 40
    },
    {
    "name": "Joakim Soria",
    "profitMargin": 54.5,
    "sell_price": 105,
    "buy_price": 40
    },
    {
    "name": "Delino DeShields Jr.",
    "profitMargin": 54.400000000000006,
    "sell_price": 216,
    "buy_price": 140
    },
    {
    "name": "Aaron Slegers",
    "profitMargin": 54.3,
    "sell_price": 67,
    "buy_price": 6
    },
    {
    "name": "Mike Tauchman",
    "profitMargin": 54.2,
    "sell_price": 68,
    "buy_price": 7
    },
    {
    "name": "Tommy Hunter",
    "profitMargin": 54.19999999999999,
    "sell_price": 158,
    "buy_price": 88
    },
    {
    "name": "Matt Shoemaker",
    "profitMargin": 54.099999999999994,
    "sell_price": 199,
    "buy_price": 125
    },
    {
    "name": "Rafael Devers",
    "profitMargin": 54.099999999999994,
    "sell_price": 139,
    "buy_price": 71
    },
    {
    "name": "Adrian Sampson",
    "profitMargin": 54,
    "sell_price": 60,
    "buy_price": 0
    },
    {
    "name": "Clay Holmes",
    "profitMargin": 54,
    "sell_price": 70,
    "buy_price": 9
    },
    {
    "name": "Colten Brewer",
    "profitMargin": 54,
    "sell_price": 60,
    "buy_price": 0
    },
    {
    "name": "Erik Kratz",
    "profitMargin": 54,
    "sell_price": 140,
    "buy_price": 72
    },
    {
    "name": "Juan Nicasio",
    "profitMargin": 54,
    "sell_price": 170,
    "buy_price": 99
    },
    {
    "name": "Rougned Odor",
    "profitMargin": 54,
    "sell_price": 500,
    "buy_price": 396
    },
    {
    "name": "Yoan Lopez",
    "profitMargin": 54,
    "sell_price": 60,
    "buy_price": 0
    },
    {
    "name": "Stephen Vogt",
    "profitMargin": 53.900000000000006,
    "sell_price": 121,
    "buy_price": 55
    },
    {
    "name": "Adam Plutko",
    "profitMargin": 53.7,
    "sell_price": 93,
    "buy_price": 30
    },
    {
    "name": "Francisco Liriano",
    "profitMargin": 53.5,
    "sell_price": 65,
    "buy_price": 5
    },
    {
    "name": "James Pazos",
    "profitMargin": 53.5,
    "sell_price": 115,
    "buy_price": 50
    },
    {
    "name": "Josh James",
    "profitMargin": 53.5,
    "sell_price": 85,
    "buy_price": 23
    },
    {
    "name": "Kelvin Herrera",
    "profitMargin": 53.5,
    "sell_price": 555,
    "buy_price": 446
    },
    {
    "name": "Kyle Higashioka",
    "profitMargin": 53.5,
    "sell_price": 65,
    "buy_price": 5
    },
    {
    "name": "Stephen Gonsalves",
    "profitMargin": 53.5,
    "sell_price": 65,
    "buy_price": 5
    },
    {
    "name": "Zack Littell",
    "profitMargin": 53.5,
    "sell_price": 65,
    "buy_price": 5
    },
    {
    "name": "Boog Powell",
    "profitMargin": 53.4,
    "sell_price": 66,
    "buy_price": 6
    },
    {
    "name": "Mark Trumbo",
    "profitMargin": 53.10000000000002,
    "sell_price": 299,
    "buy_price": 216
    },
    {
    "name": "Richard Urena",
    "profitMargin": 53.1,
    "sell_price": 69,
    "buy_price": 9
    },
    {
    "name": "Cody Anderson",
    "profitMargin": 53.099999999999994,
    "sell_price": 99,
    "buy_price": 36
    },
    {
    "name": "Josh Smoker",
    "profitMargin": 53.099999999999994,
    "sell_price": 109,
    "buy_price": 45
    },
    {
    "name": "Michael Taylor",
    "profitMargin": 53,
    "sell_price": 240,
    "buy_price": 163
    },
    {
    "name": "Ryan Borucki",
    "profitMargin": 52.900000000000006,
    "sell_price": 111,
    "buy_price": 47
    },
    {
    "name": "Tyler Duffey",
    "profitMargin": 52.7,
    "sell_price": 103,
    "buy_price": 40
    },
    {
    "name": "Clint Frazier",
    "profitMargin": 52.6,
    "sell_price": 64,
    "buy_price": 5
    },
    {
    "name": "Allen Webster",
    "profitMargin": 52.5,
    "sell_price": 65,
    "buy_price": 6
    },
    {
    "name": "Amir Garrett",
    "profitMargin": 52.5,
    "sell_price": 95,
    "buy_price": 33
    },
    {
    "name": "Chris Davis",
    "profitMargin": 52.5,
    "sell_price": 65,
    "buy_price": 6
    },
    {
    "name": "Cody Carroll",
    "profitMargin": 52.5,
    "sell_price": 75,
    "buy_price": 15
    },
    {
    "name": "Mike Morin",
    "profitMargin": 52.5,
    "sell_price": 125,
    "buy_price": 60
    },
    {
    "name": "Roberto Gomez",
    "profitMargin": 52.5,
    "sell_price": 65,
    "buy_price": 6
    },
    {
    "name": "Sam Howard",
    "profitMargin": 52.4,
    "sell_price": 66,
    "buy_price": 7
    },
    {
    "name": "Trevor Oaks",
    "profitMargin": 52.4,
    "sell_price": 66,
    "buy_price": 7
    },
    {
    "name": "Nick Rumbelow",
    "profitMargin": 52.3,
    "sell_price": 67,
    "buy_price": 8
    },
    {
    "name": "Brandon Snyder",
    "profitMargin": 52.2,
    "sell_price": 58,
    "buy_price": 0
    },
    {
    "name": "Justin Grimm",
    "profitMargin": 52.2,
    "sell_price": 128,
    "buy_price": 63
    },
    {
    "name": "Mike Hauschild",
    "profitMargin": 52.2,
    "sell_price": 58,
    "buy_price": 0
    },
    {
    "name": "Troy Scribner",
    "profitMargin": 52.2,
    "sell_price": 58,
    "buy_price": 0
    },
    {
    "name": "Ervin Santana",
    "profitMargin": 52.19999999999999,
    "sell_price": 198,
    "buy_price": 126
    },
    {
    "name": "Brandon Drury",
    "profitMargin": 52,
    "sell_price": 140,
    "buy_price": 74
    },
    {
    "name": "Evan Phillips",
    "profitMargin": 52,
    "sell_price": 80,
    "buy_price": 20
    },
    {
    "name": "Rob Whalen",
    "profitMargin": 51.7,
    "sell_price": 63,
    "buy_price": 5
    },
    {
    "name": "Adam McCreery",
    "profitMargin": 51.599999999999994,
    "sell_price": 74,
    "buy_price": 15
    },
    {
    "name": "Tyler O'Neill",
    "profitMargin": 51.599999999999994,
    "sell_price": 124,
    "buy_price": 60
    },
    {
    "name": "Brad Boxberger",
    "profitMargin": 51.5,
    "sell_price": 135,
    "buy_price": 70
    },
    {
    "name": "Erik Goeddel",
    "profitMargin": 51.5,
    "sell_price": 85,
    "buy_price": 25
    },
    {
    "name": "Ranger Suarez",
    "profitMargin": 51.5,
    "sell_price": 65,
    "buy_price": 7
    },
    {
    "name": "Hunter Harvey",
    "profitMargin": 51.4,
    "sell_price": 66,
    "buy_price": 8
    },
    {
    "name": "Dylan Floro",
    "profitMargin": 51.2,
    "sell_price": 118,
    "buy_price": 55
    },
    {
    "name": "Joe Panik",
    "profitMargin": 51.2,
    "sell_price": 108,
    "buy_price": 46
    },
    {
    "name": "Alex Gordon",
    "profitMargin": 51.099999999999994,
    "sell_price": 99,
    "buy_price": 38
    },
    {
    "name": "Nick Kingham",
    "profitMargin": 51,
    "sell_price": 130,
    "buy_price": 66
    },
    {
    "name": "Parker Bridwell",
    "profitMargin": 51,
    "sell_price": 90,
    "buy_price": 30
    },
    {
    "name": "Steven Souza Jr.",
    "profitMargin": 51,
    "sell_price": 120,
    "buy_price": 57
    },
    {
    "name": "Rich Hill",
    "profitMargin": 50.89999999999998,
    "sell_price": 611,
    "buy_price": 499
    },
    {
    "name": "Nick Gardewine",
    "profitMargin": 50.8,
    "sell_price": 62,
    "buy_price": 5
    },
    {
    "name": "Pat Venditte",
    "profitMargin": 50.7,
    "sell_price": 63,
    "buy_price": 6
    },
    {
    "name": "Cory Gearrin",
    "profitMargin": 50.5,
    "sell_price": 95,
    "buy_price": 35
    },
    {
    "name": "Hanley Ramirez",
    "profitMargin": 50.5,
    "sell_price": 85,
    "buy_price": 26
    },
    {
    "name": "Pedro Alvarez",
    "profitMargin": 50.3,
    "sell_price": 87,
    "buy_price": 28
    },
    {
    "name": "Chase De Jong",
    "profitMargin": 50.2,
    "sell_price": 78,
    "buy_price": 20
    },
    {
    "name": "Denard Span",
    "profitMargin": 50.2,
    "sell_price": 118,
    "buy_price": 56
    },
    {
    "name": "Keynan Middleton",
    "profitMargin": 50.2,
    "sell_price": 88,
    "buy_price": 29
    },
    {
    "name": "Sandy Alcantara",
    "profitMargin": 50.2,
    "sell_price": 88,
    "buy_price": 29
    },
    {
    "name": "Luke Weaver",
    "profitMargin": 50.099999999999994,
    "sell_price": 139,
    "buy_price": 75
    },
    {
    "name": "Jorge Bonifacio",
    "profitMargin": 50,
    "sell_price": 100,
    "buy_price": 40
    },
    {
    "name": "Travis d'Arnaud",
    "profitMargin": 50,
    "sell_price": 140,
    "buy_price": 76
    },
    {
    "name": "Aristides Aquino",
    "profitMargin": 49.900000000000006,
    "sell_price": 111,
    "buy_price": 50
    },
    {
    "name": "Jake Smolinski",
    "profitMargin": 49.900000000000006,
    "sell_price": 141,
    "buy_price": 77
    },
    {
    "name": "Logan Morrison",
    "profitMargin": 49.900000000000006,
    "sell_price": 111,
    "buy_price": 50
    },
    {
    "name": "Domingo Acevedo",
    "profitMargin": 49.9,
    "sell_price": 61,
    "buy_price": 5
    },
    {
    "name": "Ryder Jones",
    "profitMargin": 49.9,
    "sell_price": 61,
    "buy_price": 5
    },
    {
    "name": "Buddy Baumann",
    "profitMargin": 49.7,
    "sell_price": 63,
    "buy_price": 7
    },
    {
    "name": "Heath Hembree",
    "profitMargin": 49.7,
    "sell_price": 93,
    "buy_price": 34
    },
    {
    "name": "Yan Gomes",
    "profitMargin": 49.69999999999999,
    "sell_price": 153,
    "buy_price": 88
    },
    {
    "name": "Ben Taylor",
    "profitMargin": 49.5,
    "sell_price": 55,
    "buy_price": 0
    },
    {
    "name": "Blake Swihart",
    "profitMargin": 49.5,
    "sell_price": 85,
    "buy_price": 27
    },
    {
    "name": "Daniel Norris",
    "profitMargin": 49.5,
    "sell_price": 85,
    "buy_price": 27
    },
    {
    "name": "Daniel Zamora",
    "profitMargin": 49.5,
    "sell_price": 55,
    "buy_price": 0
    },
    {
    "name": "Jeremy Bleich",
    "profitMargin": 49.5,
    "sell_price": 55,
    "buy_price": 0
    },
    {
    "name": "Scott Schebler",
    "profitMargin": 49.5,
    "sell_price": 105,
    "buy_price": 45
    },
    {
    "name": "Terrance Gore",
    "profitMargin": 49.4,
    "sell_price": 66,
    "buy_price": 10
    },
    {
    "name": "Jarlin Garcia",
    "profitMargin": 49.3,
    "sell_price": 77,
    "buy_price": 20
    },
    {
    "name": "Matt Wisler",
    "profitMargin": 49.2,
    "sell_price": 88,
    "buy_price": 30
    },
    {
    "name": "Casey Sadler",
    "profitMargin": 49,
    "sell_price": 120,
    "buy_price": 59
    },
    {
    "name": "Heath Fillmyer",
    "profitMargin": 49,
    "sell_price": 110,
    "buy_price": 50
    },
    {
    "name": "Jon Jay",
    "profitMargin": 49,
    "sell_price": 130,
    "buy_price": 68
    },
    {
    "name": "Jonathan Davis",
    "profitMargin": 49,
    "sell_price": 120,
    "buy_price": 59
    },
    {
    "name": "Keury Mella",
    "profitMargin": 49,
    "sell_price": 60,
    "buy_price": 5
    },
    {
    "name": "Michael Reed",
    "profitMargin": 49,
    "sell_price": 60,
    "buy_price": 5
    },
    {
    "name": "Scott Copeland",
    "profitMargin": 49,
    "sell_price": 60,
    "buy_price": 5
    },
    {
    "name": "Shawn Armstrong",
    "profitMargin": 49,
    "sell_price": 60,
    "buy_price": 5
    },
    {
    "name": "Wily Peralta",
    "profitMargin": 49,
    "sell_price": 60,
    "buy_price": 5
    },
    {
    "name": "Dixon Machado",
    "profitMargin": 48.8,
    "sell_price": 72,
    "buy_price": 16
    },
    {
    "name": "Scott Oberg",
    "profitMargin": 48.8,
    "sell_price": 132,
    "buy_price": 70
    },
    {
    "name": "Jharel Cotton",
    "profitMargin": 48.69999999999999,
    "sell_price": 143,
    "buy_price": 80
    },
    {
    "name": "Justin Shafer",
    "profitMargin": 48.6,
    "sell_price": 54,
    "buy_price": 0
    },
    {
    "name": "Taylor Guerrieri",
    "profitMargin": 48.6,
    "sell_price": 54,
    "buy_price": 0
    },
    {
    "name": "Joe Smith",
    "profitMargin": 48.5,
    "sell_price": 145,
    "buy_price": 82
    },
    {
    "name": "Ryan Madson",
    "profitMargin": 48.5,
    "sell_price": 145,
    "buy_price": 82
    },
    {
    "name": "Wade LeBlanc",
    "profitMargin": 48.5,
    "sell_price": 165,
    "buy_price": 100
    },
    {
    "name": "Xavier Cedeno",
    "profitMargin": 48.5,
    "sell_price": 85,
    "buy_price": 28
    },
    {
    "name": "Yacksel Rios",
    "profitMargin": 48.5,
    "sell_price": 65,
    "buy_price": 10
    },
    {
    "name": "Justin R. Miller",
    "profitMargin": 48.2,
    "sell_price": 98,
    "buy_price": 40
    },
    {
    "name": "Matt Duffy",
    "profitMargin": 48.2,
    "sell_price": 98,
    "buy_price": 40
    },
    {
    "name": "Chris Martin",
    "profitMargin": 48.099999999999994,
    "sell_price": 109,
    "buy_price": 50
    },
    {
    "name": "Hunter Pence",
    "profitMargin": 48.099999999999994,
    "sell_price": 109,
    "buy_price": 50
    },
    {
    "name": "Taylor Cole",
    "profitMargin": 48.099999999999994,
    "sell_price": 99,
    "buy_price": 41
    },
    {
    "name": "Daniel Murphy",
    "profitMargin": 48,
    "sell_price": 1200,
    "buy_price": 1032
    },
    {
    "name": "Dwight Smith Jr.",
    "profitMargin": 48,
    "sell_price": 70,
    "buy_price": 15
    },
    {
    "name": "Elieser Hernandez",
    "profitMargin": 48,
    "sell_price": 60,
    "buy_price": 6
    },
    {
    "name": "Luis Guillorme",
    "profitMargin": 48,
    "sell_price": 60,
    "buy_price": 6
    },
    {
    "name": "Tayron Guerrero",
    "profitMargin": 48,
    "sell_price": 60,
    "buy_price": 6
    },
    {
    "name": "Andrew Triggs",
    "profitMargin": 47.8,
    "sell_price": 142,
    "buy_price": 80
    },
    {
    "name": "Isaac Galloway",
    "profitMargin": 47.8,
    "sell_price": 62,
    "buy_price": 8
    },
    {
    "name": "Mike Montgomery",
    "profitMargin": 47.8,
    "sell_price": 102,
    "buy_price": 44
    },
    {
    "name": "Manny Pina",
    "profitMargin": 47.7,
    "sell_price": 133,
    "buy_price": 72
    },
    {
    "name": "Jose Lobaton",
    "profitMargin": 47.599999999999994,
    "sell_price": 84,
    "buy_price": 28
    },
    {
    "name": "Jordy Mercer",
    "profitMargin": 47.5,
    "sell_price": 95,
    "buy_price": 38
    },
    {
    "name": "Kendrys Morales",
    "profitMargin": 47.5,
    "sell_price": 135,
    "buy_price": 74
    },
    {
    "name": "Williams Jerez",
    "profitMargin": 47.5,
    "sell_price": 65,
    "buy_price": 11
    },
    {
    "name": "Domingo Santana",
    "profitMargin": 47.19999999999999,
    "sell_price": 228,
    "buy_price": 158
    },
    {
    "name": "Jake Diekman",
    "profitMargin": 47.099999999999994,
    "sell_price": 119,
    "buy_price": 60
    },
    {
    "name": "Josh Phegley",
    "profitMargin": 47.099999999999994,
    "sell_price": 109,
    "buy_price": 51
    },
    {
    "name": "Michael Feliz",
    "profitMargin": 47.099999999999994,
    "sell_price": 119,
    "buy_price": 60
    },
    {
    "name": "Nicky Delmonico",
    "profitMargin": 47.099999999999994,
    "sell_price": 99,
    "buy_price": 42
    },
    {
    "name": "Phillip Ervin",
    "profitMargin": 47.099999999999994,
    "sell_price": 99,
    "buy_price": 42
    },
    {
    "name": "Jack Flaherty",
    "profitMargin": 47,
    "sell_price": 550,
    "buy_price": 448
    },
    {
    "name": "John Means",
    "profitMargin": 47,
    "sell_price": 70,
    "buy_price": 16
    },
    {
    "name": "Chris Rowley",
    "profitMargin": 46.8,
    "sell_price": 52,
    "buy_price": 0
    },
    {
    "name": "Franchy Cordero",
    "profitMargin": 46.8,
    "sell_price": 62,
    "buy_price": 9
    },
    {
    "name": "Jon Edwards",
    "profitMargin": 46.8,
    "sell_price": 52,
    "buy_price": 0
    },
    {
    "name": "Jacoby Ellsbury",
    "profitMargin": 46.599999999999994,
    "sell_price": 164,
    "buy_price": 101
    },
    {
    "name": "Anthony Alford",
    "profitMargin": 46.5,
    "sell_price": 65,
    "buy_price": 12
    },
    {
    "name": "Yimi Garcia",
    "profitMargin": 46.5,
    "sell_price": 85,
    "buy_price": 30
    },
    {
    "name": "Ryon Healy",
    "profitMargin": 46.30000000000001,
    "sell_price": 157,
    "buy_price": 95
    },
    {
    "name": "Gift Ngoepe",
    "profitMargin": 46.3,
    "sell_price": 57,
    "buy_price": 5
    },
    {
    "name": "Matt Hall",
    "profitMargin": 46.3,
    "sell_price": 57,
    "buy_price": 5
    },
    {
    "name": "Stephen Tarpley",
    "profitMargin": 46.3,
    "sell_price": 57,
    "buy_price": 5
    },
    {
    "name": "Colby Rasmus",
    "profitMargin": 46.2,
    "sell_price": 88,
    "buy_price": 33
    },
    {
    "name": "Kyle McGowin",
    "profitMargin": 46.1,
    "sell_price": 69,
    "buy_price": 16
    },
    {
    "name": "Tyler Danish",
    "profitMargin": 46.1,
    "sell_price": 59,
    "buy_price": 7
    },
    {
    "name": "David Bote",
    "profitMargin": 46.099999999999994,
    "sell_price": 79,
    "buy_price": 25
    },
    {
    "name": "Cam Bedrosian",
    "profitMargin": 46,
    "sell_price": 80,
    "buy_price": 26
    },
    {
    "name": "Derek Law",
    "profitMargin": 46,
    "sell_price": 120,
    "buy_price": 62
    },
    {
    "name": "Hoby Milner",
    "profitMargin": 46,
    "sell_price": 60,
    "buy_price": 8
    },
    {
    "name": "Jake Marisnick",
    "profitMargin": 46,
    "sell_price": 100,
    "buy_price": 44
    },
    {
    "name": "Kevin Jepsen",
    "profitMargin": 46,
    "sell_price": 80,
    "buy_price": 26
    },
    {
    "name": "Reese McGuire",
    "profitMargin": 46,
    "sell_price": 190,
    "buy_price": 125
    },
    {
    "name": "Sam Dyson",
    "profitMargin": 46,
    "sell_price": 90,
    "buy_price": 35
    },
    {
    "name": "Spencer Turnbull",
    "profitMargin": 45.9,
    "sell_price": 51,
    "buy_price": 0
    },
    {
    "name": "Carlos Perez",
    "profitMargin": 45.7,
    "sell_price": 83,
    "buy_price": 29
    },
    {
    "name": "Francisco Mejia",
    "profitMargin": 45.5,
    "sell_price": 125,
    "buy_price": 67
    },
    {
    "name": "Troy Tulowitzki",
    "profitMargin": 45.5,
    "sell_price": 245,
    "buy_price": 175
    },
    {
    "name": "Odrisamer Despaigne",
    "profitMargin": 45.4,
    "sell_price": 56,
    "buy_price": 5
    },
    {
    "name": "A.J. Ramos",
    "profitMargin": 45.3,
    "sell_price": 87,
    "buy_price": 33
    },
    {
    "name": "D.J. Johnson",
    "profitMargin": 45.3,
    "sell_price": 57,
    "buy_price": 6
    },
    {
    "name": "Trey Wingenter",
    "profitMargin": 45.3,
    "sell_price": 57,
    "buy_price": 6
    },
    {
    "name": "Yoshihisa Hirano",
    "profitMargin": 45.2,
    "sell_price": 128,
    "buy_price": 70
    },
    {
    "name": "C.C. Sabathia",
    "profitMargin": 45.19999999999999,
    "sell_price": 178,
    "buy_price": 115
    },
    {
    "name": "Jake Petricka",
    "profitMargin": 45.1,
    "sell_price": 59,
    "buy_price": 8
    },
    {
    "name": "Dexter Fowler",
    "profitMargin": 45.099999999999994,
    "sell_price": 89,
    "buy_price": 35
    },
    {
    "name": "Emilio Pagan",
    "profitMargin": 45.099999999999994,
    "sell_price": 99,
    "buy_price": 44
    },
    {
    "name": "Taijuan Walker",
    "profitMargin": 45.099999999999994,
    "sell_price": 139,
    "buy_price": 80
    },
    {
    "name": "Drew Smyly",
    "profitMargin": 45,
    "sell_price": 150,
    "buy_price": 90
    },
    {
    "name": "Jake Jewell",
    "profitMargin": 45,
    "sell_price": 50,
    "buy_price": 0
    },
    {
    "name": "Brandon Lowe",
    "profitMargin": 44.900000000000006,
    "sell_price": 111,
    "buy_price": 55
    },
    {
    "name": "Ian Kennedy",
    "profitMargin": 44.8,
    "sell_price": 122,
    "buy_price": 65
    },
    {
    "name": "Yusmeiro Petit",
    "profitMargin": 44.599999999999994,
    "sell_price": 144,
    "buy_price": 85
    },
    {
    "name": "Franklin Barreto",
    "profitMargin": 44.5,
    "sell_price": 55,
    "buy_price": 5
    },
    {
    "name": "Mike Wright Jr.",
    "profitMargin": 44.3,
    "sell_price": 77,
    "buy_price": 25
    },
    {
    "name": "Tyler Cloyd",
    "profitMargin": 44.3,
    "sell_price": 77,
    "buy_price": 25
    },
    {
    "name": "Mark Reynolds",
    "profitMargin": 44.2,
    "sell_price": 108,
    "buy_price": 53
    },
    {
    "name": "Jack Reinheimer",
    "profitMargin": 44.1,
    "sell_price": 49,
    "buy_price": 0
    },
    {
    "name": "Phillip Evans",
    "profitMargin": 44.1,
    "sell_price": 49,
    "buy_price": 0
    },
    {
    "name": "Preston Tucker",
    "profitMargin": 44.1,
    "sell_price": 49,
    "buy_price": 0
    },
    {
    "name": "Brandon Phillips",
    "profitMargin": 44,
    "sell_price": 110,
    "buy_price": 55
    },
    {
    "name": "Stephen Piscotty",
    "profitMargin": 44,
    "sell_price": 550,
    "buy_price": 451
    },
    {
    "name": "Alex Blandino",
    "profitMargin": 43.6,
    "sell_price": 54,
    "buy_price": 5
    },
    {
    "name": "Homer Bailey",
    "profitMargin": 43.6,
    "sell_price": 54,
    "buy_price": 5
    },
    {
    "name": "Ray Black",
    "profitMargin": 43.6,
    "sell_price": 54,
    "buy_price": 5
    },
    {
    "name": "Chris Beck",
    "profitMargin": 43.5,
    "sell_price": 55,
    "buy_price": 6
    },
    {
    "name": "Lucas Duda",
    "profitMargin": 43.5,
    "sell_price": 115,
    "buy_price": 60
    },
    {
    "name": "Caleb Frare",
    "profitMargin": 43.4,
    "sell_price": 56,
    "buy_price": 7
    },
    {
    "name": "Ross Detwiler",
    "profitMargin": 43.4,
    "sell_price": 56,
    "buy_price": 7
    },
    {
    "name": "Robbie Grossman",
    "profitMargin": 43.3,
    "sell_price": 97,
    "buy_price": 44
    },
    {
    "name": "Andrew Stevenson",
    "profitMargin": 43.2,
    "sell_price": 48,
    "buy_price": 0
    },
    {
    "name": "Drew Hutchison",
    "profitMargin": 43.2,
    "sell_price": 48,
    "buy_price": 0
    },
    {
    "name": "Zack Weiss",
    "profitMargin": 43.2,
    "sell_price": 48,
    "buy_price": 0
    },
    {
    "name": "Chad Pinder",
    "profitMargin": 43.19999999999999,
    "sell_price": 148,
    "buy_price": 90
    },
    {
    "name": "Jose Quintana",
    "profitMargin": 43.10000000000002,
    "sell_price": 399,
    "buy_price": 316
    },
    {
    "name": "Brandon Dixon",
    "profitMargin": 43.1,
    "sell_price": 59,
    "buy_price": 10
    },
    {
    "name": "Steven Brault",
    "profitMargin": 43.1,
    "sell_price": 59,
    "buy_price": 10
    },
    {
    "name": "Clay Buchholz",
    "profitMargin": 43,
    "sell_price": 140,
    "buy_price": 83
    },
    {
    "name": "Garrett Cooper",
    "profitMargin": 43,
    "sell_price": 60,
    "buy_price": 11
    },
    {
    "name": "Jose Reyes",
    "profitMargin": 43,
    "sell_price": 80,
    "buy_price": 29
    },
    {
    "name": "Howie Kendrick",
    "profitMargin": 42.7,
    "sell_price": 133,
    "buy_price": 77
    },
    {
    "name": "Edward Paredes",
    "profitMargin": 42.5,
    "sell_price": 55,
    "buy_price": 7
    },
    {
    "name": "Kyle Wright",
    "profitMargin": 42.5,
    "sell_price": 55,
    "buy_price": 7
    },
    {
    "name": "Drew Gagnon",
    "profitMargin": 42.3,
    "sell_price": 57,
    "buy_price": 9
    },
    {
    "name": "Joey Krehbiel",
    "profitMargin": 42.3,
    "sell_price": 47,
    "buy_price": 0
    },
    {
    "name": "John Curtiss",
    "profitMargin": 42.3,
    "sell_price": 47,
    "buy_price": 0
    },
    {
    "name": "Johnny Barbato",
    "profitMargin": 42.3,
    "sell_price": 47,
    "buy_price": 0
    },
    {
    "name": "Ryan Carpenter",
    "profitMargin": 42.3,
    "sell_price": 47,
    "buy_price": 0
    },
    {
    "name": "Sam Gaviglio",
    "profitMargin": 42.2,
    "sell_price": 108,
    "buy_price": 55
    },
    {
    "name": "Yency Almonte",
    "profitMargin": 42.2,
    "sell_price": 58,
    "buy_price": 10
    },
    {
    "name": "Noe Ramirez",
    "profitMargin": 42.099999999999994,
    "sell_price": 99,
    "buy_price": 47
    },
    {
    "name": "Kyle Hendricks",
    "profitMargin": 42,
    "sell_price": 400,
    "buy_price": 318
    },
    {
    "name": "Oliver Drake",
    "profitMargin": 42,
    "sell_price": 120,
    "buy_price": 66
    },
    {
    "name": "Guillermo Heredia",
    "profitMargin": 41.8,
    "sell_price": 102,
    "buy_price": 50
    },
    {
    "name": "P.J. Conlon",
    "profitMargin": 41.8,
    "sell_price": 52,
    "buy_price": 5
    },
    {
    "name": "Alex McRae",
    "profitMargin": 41.7,
    "sell_price": 53,
    "buy_price": 6
    },
    {
    "name": "Carlos Ramirez",
    "profitMargin": 41.7,
    "sell_price": 53,
    "buy_price": 6
    },
    {
    "name": "Austin Adams",
    "profitMargin": 41.6,
    "sell_price": 64,
    "buy_price": 16
    },
    {
    "name": "Eric Skoglund",
    "profitMargin": 41.599999999999994,
    "sell_price": 144,
    "buy_price": 88
    },
    {
    "name": "Jason Hammel",
    "profitMargin": 41.599999999999994,
    "sell_price": 74,
    "buy_price": 25
    },
    {
    "name": "Cameron Maybin",
    "profitMargin": 41.5,
    "sell_price": 135,
    "buy_price": 80
    },
    {
    "name": "Connor Sadzeck",
    "profitMargin": 41.5,
    "sell_price": 55,
    "buy_price": 8
    },
    {
    "name": "Jorge Polanco",
    "profitMargin": 41.5,
    "sell_price": 155,
    "buy_price": 98
    },
    {
    "name": "Andrew Vasquez",
    "profitMargin": 41.4,
    "sell_price": 46,
    "buy_price": 0
    },
    {
    "name": "Brooks Pounders",
    "profitMargin": 41.4,
    "sell_price": 46,
    "buy_price": 0
    },
    {
    "name": "Taylor Ward",
    "profitMargin": 41.4,
    "sell_price": 46,
    "buy_price": 0
    },
    {
    "name": "Erasmo Ramirez",
    "profitMargin": 41.3,
    "sell_price": 117,
    "buy_price": 64
    },
    {
    "name": "David Fletcher",
    "profitMargin": 41.099999999999994,
    "sell_price": 99,
    "buy_price": 48
    },
    {
    "name": "Lucas Giolito",
    "profitMargin": 41.099999999999994,
    "sell_price": 149,
    "buy_price": 93
    },
    {
    "name": "Alcides Escobar",
    "profitMargin": 41,
    "sell_price": 110,
    "buy_price": 58
    },
    {
    "name": "Jake Newberry",
    "profitMargin": 40.8,
    "sell_price": 52,
    "buy_price": 6
    },
    {
    "name": "Kyle McGrath",
    "profitMargin": 40.8,
    "sell_price": 62,
    "buy_price": 15
    },
    {
    "name": "Steve Cishek",
    "profitMargin": 40.69999999999999,
    "sell_price": 463,
    "buy_price": 376
    },
    {
    "name": "Fernando Rodney",
    "profitMargin": 40.599999999999994,
    "sell_price": 94,
    "buy_price": 44
    },
    {
    "name": "Bobby Poyner",
    "profitMargin": 40.5,
    "sell_price": 45,
    "buy_price": 0
    },
    {
    "name": "Chih-Wei Hu",
    "profitMargin": 40.5,
    "sell_price": 45,
    "buy_price": 0
    },
    {
    "name": "Cody Allen",
    "profitMargin": 40.5,
    "sell_price": 345,
    "buy_price": 270
    },
    {
    "name": "Lewis Brinson",
    "profitMargin": 40.5,
    "sell_price": 65,
    "buy_price": 18
    },
    {
    "name": "Luke Bard",
    "profitMargin": 40.5,
    "sell_price": 45,
    "buy_price": 0
    },
    {
    "name": "Matt Davidson",
    "profitMargin": 40.5,
    "sell_price": 45,
    "buy_price": 0
    },
    {
    "name": "Max Kepler",
    "profitMargin": 40.5,
    "sell_price": 155,
    "buy_price": 99
    },
    {
    "name": "Peter O'Brien",
    "profitMargin": 40.5,
    "sell_price": 55,
    "buy_price": 9
    },
    {
    "name": "Ryan Meisinger",
    "profitMargin": 40.5,
    "sell_price": 45,
    "buy_price": 0
    },
    {
    "name": "Steve Wilkerson",
    "profitMargin": 40.5,
    "sell_price": 55,
    "buy_price": 9
    },
    {
    "name": "Todd Frazier",
    "profitMargin": 40.5,
    "sell_price": 125,
    "buy_price": 72
    },
    {
    "name": "Ty Blach",
    "profitMargin": 40.5,
    "sell_price": 45,
    "buy_price": 0
    },
    {
    "name": "Tyler Glasnow",
    "profitMargin": 40.5,
    "sell_price": 155,
    "buy_price": 99
    },
    {
    "name": "Caleb Smith",
    "profitMargin": 40,
    "sell_price": 390,
    "buy_price": 311
    },
    {
    "name": "J.B. Wendelken",
    "profitMargin": 40,
    "sell_price": 50,
    "buy_price": 5
    },
    {
    "name": "Jean Segura",
    "profitMargin": 40,
    "sell_price": 850,
    "buy_price": 725
    },
    {
    "name": "Paul Fry",
    "profitMargin": 40,
    "sell_price": 50,
    "buy_price": 5
    },
    {
    "name": "Russell Martin",
    "profitMargin": 40,
    "sell_price": 140,
    "buy_price": 86
    },
    {
    "name": "Jose Castillo",
    "profitMargin": 39.900000000000006,
    "sell_price": 121,
    "buy_price": 69
    },
    {
    "name": "Jacob Nix",
    "profitMargin": 39.9,
    "sell_price": 51,
    "buy_price": 6
    },
    {
    "name": "Adrian Houser",
    "profitMargin": 39.8,
    "sell_price": 52,
    "buy_price": 7
    },
    {
    "name": "Adrian Sanchez",
    "profitMargin": 39.8,
    "sell_price": 62,
    "buy_price": 16
    },
    {
    "name": "Daniel Descalso",
    "profitMargin": 39.8,
    "sell_price": 72,
    "buy_price": 25
    },
    {
    "name": "Chad Bettis",
    "profitMargin": 39.7,
    "sell_price": 83,
    "buy_price": 35
    },
    {
    "name": "Dovydas Neverauskas",
    "profitMargin": 39.6,
    "sell_price": 44,
    "buy_price": 0
    },
    {
    "name": "Hector Santiago",
    "profitMargin": 39.6,
    "sell_price": 44,
    "buy_price": 0
    },
    {
    "name": "Adrian Gonzalez",
    "profitMargin": 39.5,
    "sell_price": 75,
    "buy_price": 28
    },
    {
    "name": "Gregory Infante",
    "profitMargin": 39.5,
    "sell_price": 75,
    "buy_price": 28
    },
    {
    "name": "Javy A. Guerra",
    "profitMargin": 39.5,
    "sell_price": 55,
    "buy_price": 10
    },
    {
    "name": "Osmer Morales",
    "profitMargin": 39.5,
    "sell_price": 55,
    "buy_price": 10
    },
    {
    "name": "Shawn Kelley",
    "profitMargin": 39.5,
    "sell_price": 355,
    "buy_price": 280
    },
    {
    "name": "Zach McAllister",
    "profitMargin": 39.5,
    "sell_price": 75,
    "buy_price": 28
    },
    {
    "name": "David Paulino",
    "profitMargin": 39.3,
    "sell_price": 57,
    "buy_price": 12
    },
    {
    "name": "Mark Leiter Jr.",
    "profitMargin": 39.3,
    "sell_price": 77,
    "buy_price": 30
    },
    {
    "name": "Matt Harvey",
    "profitMargin": 39.3,
    "sell_price": 77,
    "buy_price": 30
    },
    {
    "name": "Miguel Gonzalez",
    "profitMargin": 39.3,
    "sell_price": 77,
    "buy_price": 30
    },
    {
    "name": "Wade Miley",
    "profitMargin": 39.3,
    "sell_price": 77,
    "buy_price": 30
    },
    {
    "name": "Alex Verdugo",
    "profitMargin": 39.1,
    "sell_price": 49,
    "buy_price": 5
    },
    {
    "name": "Dominic Smith",
    "profitMargin": 39.1,
    "sell_price": 49,
    "buy_price": 5
    },
    {
    "name": "Wes Parsons",
    "profitMargin": 39.1,
    "sell_price": 49,
    "buy_price": 5
    },
    {
    "name": "Gabriel Moya",
    "profitMargin": 39.099999999999994,
    "sell_price": 99,
    "buy_price": 50
    },
    {
    "name": "Alexi Ogando",
    "profitMargin": 39,
    "sell_price": 50,
    "buy_price": 6
    },
    {
    "name": "Jimmie Sherfy",
    "profitMargin": 39,
    "sell_price": 60,
    "buy_price": 15
    },
    {
    "name": "Mitch Walding",
    "profitMargin": 39,
    "sell_price": 50,
    "buy_price": 6
    },
    {
    "name": "Noel Cuevas",
    "profitMargin": 39,
    "sell_price": 50,
    "buy_price": 6
    },
    {
    "name": "Reyes Moronta",
    "profitMargin": 39,
    "sell_price": 510,
    "buy_price": 420
    },
    {
    "name": "Tyler Webb",
    "profitMargin": 39,
    "sell_price": 50,
    "buy_price": 6
    },
    {
    "name": "David Hernandez",
    "profitMargin": 38.8,
    "sell_price": 132,
    "buy_price": 80
    },
    {
    "name": "Andrew Kittredge",
    "profitMargin": 38.7,
    "sell_price": 43,
    "buy_price": 0
    },
    {
    "name": "C.D. Pelham",
    "profitMargin": 38.7,
    "sell_price": 43,
    "buy_price": 0
    },
    {
    "name": "Christian Arroyo",
    "profitMargin": 38.7,
    "sell_price": 43,
    "buy_price": 0
    },
    {
    "name": "Luis Santos",
    "profitMargin": 38.6,
    "sell_price": 54,
    "buy_price": 10
    },
    {
    "name": "Reymin Guduan",
    "profitMargin": 38.6,
    "sell_price": 54,
    "buy_price": 10
    },
    {
    "name": "George Kontos",
    "profitMargin": 38.5,
    "sell_price": 75,
    "buy_price": 29
    },
    {
    "name": "Carlos Torres",
    "profitMargin": 38.1,
    "sell_price": 49,
    "buy_price": 6
    },
    {
    "name": "Dalton Pompey",
    "profitMargin": 38.099999999999994,
    "sell_price": 209,
    "buy_price": 150
    },
    {
    "name": "Edubray Ramos",
    "profitMargin": 38.099999999999994,
    "sell_price": 119,
    "buy_price": 69
    },
    {
    "name": "Nick Burdi",
    "profitMargin": 37.8,
    "sell_price": 42,
    "buy_price": 0
    },
    {
    "name": "Robby Scott",
    "profitMargin": 37.8,
    "sell_price": 52,
    "buy_price": 9
    },
    {
    "name": "Tom Murphy",
    "profitMargin": 37.8,
    "sell_price": 42,
    "buy_price": 0
    },
    {
    "name": "Ty Kelly",
    "profitMargin": 37.8,
    "sell_price": 42,
    "buy_price": 0
    },
    {
    "name": "Yohander Mendez",
    "profitMargin": 37.8,
    "sell_price": 42,
    "buy_price": 0
    },
    {
    "name": "Ryan Brasier",
    "profitMargin": 37.7,
    "sell_price": 83,
    "buy_price": 37
    },
    {
    "name": "Willy Adames",
    "profitMargin": 37.7,
    "sell_price": 103,
    "buy_price": 55
    },
    {
    "name": "Dillon Maples",
    "profitMargin": 37.5,
    "sell_price": 75,
    "buy_price": 30
    },
    {
    "name": "Gerson Bautista",
    "profitMargin": 37.3,
    "sell_price": 47,
    "buy_price": 5
    },
    {
    "name": "Erik Gonzalez",
    "profitMargin": 37.2,
    "sell_price": 48,
    "buy_price": 6
    },
    {
    "name": "Austin Davis",
    "profitMargin": 37.1,
    "sell_price": 49,
    "buy_price": 7
    },
    {
    "name": "Blaine Boyer",
    "profitMargin": 37.1,
    "sell_price": 49,
    "buy_price": 7
    },
    {
    "name": "Rio Ruiz",
    "profitMargin": 37.1,
    "sell_price": 49,
    "buy_price": 7
    },
    {
    "name": "Tyler Olson",
    "profitMargin": 37.099999999999994,
    "sell_price": 79,
    "buy_price": 34
    },
    {
    "name": "Blaine Hardy",
    "profitMargin": 36.9,
    "sell_price": 41,
    "buy_price": 0
    },
    {
    "name": "Peter Moylan",
    "profitMargin": 36.9,
    "sell_price": 41,
    "buy_price": 0
    },
    {
    "name": "Rob Scahill",
    "profitMargin": 36.9,
    "sell_price": 41,
    "buy_price": 0
    },
    {
    "name": "Zach Vincej",
    "profitMargin": 36.9,
    "sell_price": 41,
    "buy_price": 0
    },
    {
    "name": "Patrick Wisdom",
    "profitMargin": 36.400000000000006,
    "sell_price": 96,
    "buy_price": 50
    },
    {
    "name": "Jim Adduci",
    "profitMargin": 36.4,
    "sell_price": 46,
    "buy_price": 5
    },
    {
    "name": "Ryan Burr",
    "profitMargin": 36.3,
    "sell_price": 47,
    "buy_price": 6
    },
    {
    "name": "Steve Baron",
    "profitMargin": 36.1,
    "sell_price": 49,
    "buy_price": 8
    },
    {
    "name": "Mitch Moreland",
    "profitMargin": 36.099999999999994,
    "sell_price": 129,
    "buy_price": 80
    },
    {
    "name": "Dan Jennings",
    "profitMargin": 36,
    "sell_price": 40,
    "buy_price": 0
    },
    {
    "name": "Jason Adam",
    "profitMargin": 36,
    "sell_price": 40,
    "buy_price": 0
    },
    {
    "name": "Joe Biagini",
    "profitMargin": 36,
    "sell_price": 60,
    "buy_price": 18
    },
    {
    "name": "Kaleb Cowart",
    "profitMargin": 36,
    "sell_price": 40,
    "buy_price": 0
    },
    {
    "name": "Matt Reynolds",
    "profitMargin": 36,
    "sell_price": 40,
    "buy_price": 0
    },
    {
    "name": "Andrew Chafin",
    "profitMargin": 35.7,
    "sell_price": 123,
    "buy_price": 75
    },
    {
    "name": "Yangervis Solarte",
    "profitMargin": 35.7,
    "sell_price": 93,
    "buy_price": 48
    },
    {
    "name": "Chance Adams",
    "profitMargin": 35.5,
    "sell_price": 45,
    "buy_price": 5
    },
    {
    "name": "Glenn Sparkman",
    "profitMargin": 35.5,
    "sell_price": 45,
    "buy_price": 5
    },
    {
    "name": "Jalen Beeks",
    "profitMargin": 35.5,
    "sell_price": 45,
    "buy_price": 5
    },
    {
    "name": "Rowdy Tellez",
    "profitMargin": 35.5,
    "sell_price": 135,
    "buy_price": 86
    },
    {
    "name": "Adam Cimber",
    "profitMargin": 35.4,
    "sell_price": 46,
    "buy_price": 6
    },
    {
    "name": "Brian Duensing",
    "profitMargin": 35.4,
    "sell_price": 46,
    "buy_price": 6
    },
    {
    "name": "Hunter Dozier",
    "profitMargin": 35.3,
    "sell_price": 47,
    "buy_price": 7
    },
    {
    "name": "Adalberto Mejia",
    "profitMargin": 35.1,
    "sell_price": 39,
    "buy_price": 0
    },
    {
    "name": "Hector Velazquez",
    "profitMargin": 35.1,
    "sell_price": 39,
    "buy_price": 0
    },
    {
    "name": "Jerry Blevins",
    "profitMargin": 35.099999999999994,
    "sell_price": 109,
    "buy_price": 63
    },
    {
    "name": "John Andreoli",
    "profitMargin": 35.099999999999994,
    "sell_price": 139,
    "buy_price": 90
    },
    {
    "name": "Mitch Garver",
    "profitMargin": 35.099999999999994,
    "sell_price": 149,
    "buy_price": 99
    },
    {
    "name": "Zac Reininger",
    "profitMargin": 35,
    "sell_price": 50,
    "buy_price": 10
    },
    {
    "name": "Victor Arano",
    "profitMargin": 34.80000000000001,
    "sell_price": 222,
    "buy_price": 165
    },
    {
    "name": "Hernan Perez",
    "profitMargin": 34.8,
    "sell_price": 122,
    "buy_price": 75
    },
    {
    "name": "J.C. Ramirez",
    "profitMargin": 34.8,
    "sell_price": 72,
    "buy_price": 30
    },
    {
    "name": "Yonny Chirinos",
    "profitMargin": 34.7,
    "sell_price": 133,
    "buy_price": 85
    },
    {
    "name": "Ricardo Rodriguez",
    "profitMargin": 34.6,
    "sell_price": 44,
    "buy_price": 5
    },
    {
    "name": "Daniel Corcino",
    "profitMargin": 34.5,
    "sell_price": 55,
    "buy_price": 15
    },
    {
    "name": "Dennis Santana",
    "profitMargin": 34.5,
    "sell_price": 55,
    "buy_price": 15
    },
    {
    "name": "Drew Robinson",
    "profitMargin": 34.5,
    "sell_price": 45,
    "buy_price": 6
    },
    {
    "name": "Dylan Covey",
    "profitMargin": 34.5,
    "sell_price": 45,
    "buy_price": 6
    },
    {
    "name": "Ian Happ",
    "profitMargin": 34.5,
    "sell_price": 75,
    "buy_price": 33
    },
    {
    "name": "Jared Hughes",
    "profitMargin": 34.5,
    "sell_price": 45,
    "buy_price": 6
    },
    {
    "name": "Matt Holliday",
    "profitMargin": 34.5,
    "sell_price": 75,
    "buy_price": 33
    },
    {
    "name": "Bobby Wahl",
    "profitMargin": 34.2,
    "sell_price": 38,
    "buy_price": 0
    },
    {
    "name": "Joe Ross",
    "profitMargin": 34.2,
    "sell_price": 68,
    "buy_price": 27
    },
    {
    "name": "Boone Logan",
    "profitMargin": 34,
    "sell_price": 70,
    "buy_price": 29
    },
    {
    "name": "Chris O'Grady",
    "profitMargin": 34,
    "sell_price": 60,
    "buy_price": 20
    },
    {
    "name": "Michael Lorenzen",
    "profitMargin": 34,
    "sell_price": 70,
    "buy_price": 29
    },
    {
    "name": "Brandon Cumpton",
    "profitMargin": 33.9,
    "sell_price": 71,
    "buy_price": 30
    },
    {
    "name": "Danny Santana",
    "profitMargin": 33.7,
    "sell_price": 43,
    "buy_price": 5
    },
    {
    "name": "Martin Perez",
    "profitMargin": 33.7,
    "sell_price": 43,
    "buy_price": 5
    },
    {
    "name": "Mason Williams",
    "profitMargin": 33.7,
    "sell_price": 43,
    "buy_price": 5
    },
    {
    "name": "Drew Smith",
    "profitMargin": 33.6,
    "sell_price": 44,
    "buy_price": 6
    },
    {
    "name": "Rowan Wick",
    "profitMargin": 33.6,
    "sell_price": 44,
    "buy_price": 6
    },
    {
    "name": "Chris Stratton",
    "profitMargin": 33.5,
    "sell_price": 65,
    "buy_price": 25
    },
    {
    "name": "Jason Castro",
    "profitMargin": 33.5,
    "sell_price": 115,
    "buy_price": 70
    },
    {
    "name": "Jesse Winker",
    "profitMargin": 33.5,
    "sell_price": 185,
    "buy_price": 133
    },
    {
    "name": "Bartolo Colon",
    "profitMargin": 33.2,
    "sell_price": 68,
    "buy_price": 28
    },
    {
    "name": "Jefry Rodriguez",
    "profitMargin": 33.2,
    "sell_price": 48,
    "buy_price": 10
    },
    {
    "name": "Orlando Arcia",
    "profitMargin": 33.2,
    "sell_price": 68,
    "buy_price": 28
    },
    {
    "name": "Chad Sobotka",
    "profitMargin": 33.1,
    "sell_price": 49,
    "buy_price": 11
    },
    {
    "name": "Adam Liberatore",
    "profitMargin": 33,
    "sell_price": 100,
    "buy_price": 57
    },
    {
    "name": "Daniel Robertson",
    "profitMargin": 33,
    "sell_price": 120,
    "buy_price": 75
    },
    {
    "name": "Edgar Santana",
    "profitMargin": 33,
    "sell_price": 120,
    "buy_price": 75
    },
    {
    "name": "Kole Calhoun",
    "profitMargin": 33,
    "sell_price": 90,
    "buy_price": 48
    },
    {
    "name": "Trevor Cahill",
    "profitMargin": 33,
    "sell_price": 90,
    "buy_price": 48
    },
    {
    "name": "Cionel Perez",
    "profitMargin": 32.8,
    "sell_price": 42,
    "buy_price": 5
    },
    {
    "name": "Corey Oswalt",
    "profitMargin": 32.599999999999994,
    "sell_price": 114,
    "buy_price": 70
    },
    {
    "name": "Aaron Wilkerson",
    "profitMargin": 32.5,
    "sell_price": 45,
    "buy_price": 8
    },
    {
    "name": "Chance Sisco",
    "profitMargin": 32.5,
    "sell_price": 45,
    "buy_price": 8
    },
    {
    "name": "James Shields",
    "profitMargin": 32.5,
    "sell_price": 65,
    "buy_price": 26
    },
    {
    "name": "Kendall Graveman",
    "profitMargin": 32.5,
    "sell_price": 75,
    "buy_price": 35
    },
    {
    "name": "Luke Maile",
    "profitMargin": 32.5,
    "sell_price": 125,
    "buy_price": 80
    },
    {
    "name": "Ryan Dull",
    "profitMargin": 32.5,
    "sell_price": 125,
    "buy_price": 80
    },
    {
    "name": "Randy Rosario",
    "profitMargin": 32.4,
    "sell_price": 36,
    "buy_price": 0
    },
    {
    "name": "Sherman Johnson",
    "profitMargin": 32.4,
    "sell_price": 36,
    "buy_price": 0
    },
    {
    "name": "Tim Peterson",
    "profitMargin": 32.4,
    "sell_price": 36,
    "buy_price": 0
    },
    {
    "name": "Yovani Gallardo",
    "profitMargin": 32.4,
    "sell_price": 36,
    "buy_price": 0
    },
    {
    "name": "Juan Centeno",
    "profitMargin": 32.3,
    "sell_price": 47,
    "buy_price": 10
    },
    {
    "name": "Sandy Baez",
    "profitMargin": 32.3,
    "sell_price": 47,
    "buy_price": 10
    },
    {
    "name": "Corban Joseph",
    "profitMargin": 32.2,
    "sell_price": 58,
    "buy_price": 20
    },
    {
    "name": "Danny Valencia",
    "profitMargin": 32.2,
    "sell_price": 98,
    "buy_price": 56
    },
    {
    "name": "Lonnie Chisenhall",
    "profitMargin": 32,
    "sell_price": 110,
    "buy_price": 67
    },
    {
    "name": "Tyler White",
    "profitMargin": 32,
    "sell_price": 80,
    "buy_price": 40
    },
    {
    "name": "Jesus Sucre",
    "profitMargin": 31.799999999999997,
    "sell_price": 132,
    "buy_price": 87
    },
    {
    "name": "Matt Skole",
    "profitMargin": 31.799999999999997,
    "sell_price": 42,
    "buy_price": 6
    },
    {
    "name": "David Hale",
    "profitMargin": 31.700000000000003,
    "sell_price": 63,
    "buy_price": 25
    },
    {
    "name": "Nick Tropeano",
    "profitMargin": 31.6,
    "sell_price": 64,
    "buy_price": 26
    },
    {
    "name": "Edmundo Sosa",
    "profitMargin": 31.5,
    "sell_price": 35,
    "buy_price": 0
    },
    {
    "name": "Hanser Alberto",
    "profitMargin": 31.5,
    "sell_price": 45,
    "buy_price": 9
    },
    {
    "name": "Josh Lucas",
    "profitMargin": 31.5,
    "sell_price": 35,
    "buy_price": 0
    },
    {
    "name": "Josh Osich",
    "profitMargin": 31.5,
    "sell_price": 35,
    "buy_price": 0
    },
    {
    "name": "Rafael Montero",
    "profitMargin": 31.5,
    "sell_price": 35,
    "buy_price": 0
    },
    {
    "name": "Dan Straily",
    "profitMargin": 31.4,
    "sell_price": 66,
    "buy_price": 28
    },
    {
    "name": "Harold Castro",
    "profitMargin": 31.4,
    "sell_price": 46,
    "buy_price": 10
    },
    {
    "name": "Brent Suter",
    "profitMargin": 31.299999999999997,
    "sell_price": 77,
    "buy_price": 38
    },
    {
    "name": "Adam Engel",
    "profitMargin": 31,
    "sell_price": 40,
    "buy_price": 5
    },
    {
    "name": "Akeel Morris",
    "profitMargin": 31,
    "sell_price": 40,
    "buy_price": 5
    },
    {
    "name": "Nick Vincent",
    "profitMargin": 30.900000000000006,
    "sell_price": 111,
    "buy_price": 69
    },
    {
    "name": "Luis Sardinas",
    "profitMargin": 30.9,
    "sell_price": 41,
    "buy_price": 6
    },
    {
    "name": "Mike Fiers",
    "profitMargin": 30.700000000000003,
    "sell_price": 123,
    "buy_price": 80
    },
    {
    "name": "Michael Pineda",
    "profitMargin": 30.69999999999999,
    "sell_price": 173,
    "buy_price": 125
    },
    {
    "name": "Miguel Socolovich",
    "profitMargin": 30.6,
    "sell_price": 34,
    "buy_price": 0
    },
    {
    "name": "Pedro Florimon",
    "profitMargin": 30.6,
    "sell_price": 34,
    "buy_price": 0
    },
    {
    "name": "Tyler Austin",
    "profitMargin": 30.5,
    "sell_price": 95,
    "buy_price": 55
    },
    {
    "name": "Chris Shaw",
    "profitMargin": 30.4,
    "sell_price": 46,
    "buy_price": 11
    },
    {
    "name": "Cory Mazzoni",
    "profitMargin": 30.4,
    "sell_price": 56,
    "buy_price": 20
    },
    {
    "name": "J.J. Hoover",
    "profitMargin": 30.299999999999997,
    "sell_price": 47,
    "buy_price": 12
    },
    {
    "name": "Andrew Susac",
    "profitMargin": 30.1,
    "sell_price": 39,
    "buy_price": 5
    },
    {
    "name": "Charlie Tilson",
    "profitMargin": 30.1,
    "sell_price": 39,
    "buy_price": 5
    },
    {
    "name": "Jose Trevino",
    "profitMargin": 30.1,
    "sell_price": 39,
    "buy_price": 5
    },
    {
    "name": "Tanner Rainey",
    "profitMargin": 30.1,
    "sell_price": 39,
    "buy_price": 5
    },
    {
    "name": "Matt Olson",
    "profitMargin": 30.09999999999991,
    "sell_price": 1339,
    "buy_price": 1175
    },
    {
    "name": "Aaron Brooks",
    "profitMargin": 30,
    "sell_price": 40,
    "buy_price": 6
    },
    {
    "name": "Brandon Finnegan",
    "profitMargin": 30,
    "sell_price": 70,
    "buy_price": 33
    },
    {
    "name": "Carson Fulmer",
    "profitMargin": 30,
    "sell_price": 40,
    "buy_price": 6
    },
    {
    "name": "Harrison Musgrave",
    "profitMargin": 30,
    "sell_price": 40,
    "buy_price": 6
    },
    {
    "name": "Ryan Yarbrough",
    "profitMargin": 30,
    "sell_price": 150,
    "buy_price": 105
    },
    {
    "name": "T.J. McFarland",
    "profitMargin": 30,
    "sell_price": 50,
    "buy_price": 15
    },
    {
    "name": "Ronald Torreyes",
    "profitMargin": 29.80000000000001,
    "sell_price": 172,
    "buy_price": 125
    },
    {
    "name": "Clayton Richard",
    "profitMargin": 29.799999999999997,
    "sell_price": 42,
    "buy_price": 8
    },
    {
    "name": "Julio Urias",
    "profitMargin": 29.799999999999997,
    "sell_price": 122,
    "buy_price": 80
    },
    {
    "name": "Sam Travis",
    "profitMargin": 29.799999999999997,
    "sell_price": 42,
    "buy_price": 8
    },
    {
    "name": "Brandon Maurer",
    "profitMargin": 29.7,
    "sell_price": 33,
    "buy_price": 0
    },
    {
    "name": "Brett Cecil",
    "profitMargin": 29.7,
    "sell_price": 33,
    "buy_price": 0
    },
    {
    "name": "Kohl Stewart",
    "profitMargin": 29.7,
    "sell_price": 33,
    "buy_price": 0
    },
    {
    "name": "Andrew Benintendi",
    "profitMargin": 29.59999999999991,
    "sell_price": 1144,
    "buy_price": 1000
    },
    {
    "name": "Carlos Gomez",
    "profitMargin": 29.5,
    "sell_price": 65,
    "buy_price": 29
    },
    {
    "name": "Andrew Knapp",
    "profitMargin": 29.299999999999997,
    "sell_price": 47,
    "buy_price": 13
    },
    {
    "name": "Tommy Milone",
    "profitMargin": 29.200000000000003,
    "sell_price": 38,
    "buy_price": 5
    },
    {
    "name": "Tyler Anderson",
    "profitMargin": 29.200000000000003,
    "sell_price": 128,
    "buy_price": 86
    },
    {
    "name": "Wilmer Font",
    "profitMargin": 29.200000000000003,
    "sell_price": 38,
    "buy_price": 5
    },
    {
    "name": "Dean Deetz",
    "profitMargin": 29.1,
    "sell_price": 39,
    "buy_price": 6
    },
    {
    "name": "Jose Rondon",
    "profitMargin": 29.1,
    "sell_price": 39,
    "buy_price": 6
    },
    {
    "name": "Kyle Farmer",
    "profitMargin": 29.1,
    "sell_price": 39,
    "buy_price": 6
    },
    {
    "name": "Marc Rzepczynski",
    "profitMargin": 29.1,
    "sell_price": 49,
    "buy_price": 15
    },
    {
    "name": "Steven Duggar",
    "profitMargin": 29.1,
    "sell_price": 39,
    "buy_price": 6
    },
    {
    "name": "Jose Berrios",
    "profitMargin": 29,
    "sell_price": 900,
    "buy_price": 781
    },
    {
    "name": "Pablo Reyes",
    "profitMargin": 29,
    "sell_price": 40,
    "buy_price": 7
    },
    {
    "name": "Nick Martini",
    "profitMargin": 28.9,
    "sell_price": 41,
    "buy_price": 8
    },
    {
    "name": "Mike Mayers",
    "profitMargin": 28.8,
    "sell_price": 32,
    "buy_price": 0
    },
    {
    "name": "Nate Orf",
    "profitMargin": 28.8,
    "sell_price": 32,
    "buy_price": 0
    },
    {
    "name": "Austin Slater",
    "profitMargin": 28.799999999999997,
    "sell_price": 42,
    "buy_price": 9
    },
    {
    "name": "Andrew Cashner",
    "profitMargin": 28.5,
    "sell_price": 45,
    "buy_price": 12
    },
    {
    "name": "Luis Avilan",
    "profitMargin": 28.400000000000006,
    "sell_price": 106,
    "buy_price": 67
    },
    {
    "name": "Blake Trahan",
    "profitMargin": 28.299999999999997,
    "sell_price": 37,
    "buy_price": 5
    },
    {
    "name": "Austen Williams",
    "profitMargin": 28.1,
    "sell_price": 49,
    "buy_price": 16
    },
    {
    "name": "Bryan Shaw",
    "profitMargin": 28.1,
    "sell_price": 59,
    "buy_price": 25
    },
    {
    "name": "Addison Russell",
    "profitMargin": 28,
    "sell_price": 80,
    "buy_price": 44
    },
    {
    "name": "Anthony Bass",
    "profitMargin": 28,
    "sell_price": 50,
    "buy_price": 17
    },
    {
    "name": "Austin Meadows",
    "profitMargin": 28,
    "sell_price": 120,
    "buy_price": 80
    },
    {
    "name": "Marco Estrada",
    "profitMargin": 28,
    "sell_price": 120,
    "buy_price": 80
    },
    {
    "name": "Cam Gallagher",
    "profitMargin": 27.9,
    "sell_price": 31,
    "buy_price": 0
    },
    {
    "name": "Stuart Turner",
    "profitMargin": 27.799999999999997,
    "sell_price": 42,
    "buy_price": 10
    },
    {
    "name": "Adeiny Hechavarria",
    "profitMargin": 27.700000000000003,
    "sell_price": 63,
    "buy_price": 29
    },
    {
    "name": "Ramon Torres",
    "profitMargin": 27.5,
    "sell_price": 85,
    "buy_price": 49
    },
    {
    "name": "Ian Hamilton",
    "profitMargin": 27.299999999999997,
    "sell_price": 37,
    "buy_price": 6
    },
    {
    "name": "Andrew Velazquez",
    "profitMargin": 27,
    "sell_price": 130,
    "buy_price": 90
    },
    {
    "name": "Christian Walker",
    "profitMargin": 27,
    "sell_price": 50,
    "buy_price": 18
    },
    {
    "name": "Francisco Pena",
    "profitMargin": 27,
    "sell_price": 40,
    "buy_price": 9
    },
    {
    "name": "Jackson Stephens",
    "profitMargin": 27,
    "sell_price": 30,
    "buy_price": 0
    },
    {
    "name": "Luke Jackson",
    "profitMargin": 27,
    "sell_price": 30,
    "buy_price": 0
    },
    {
    "name": "Taylor Motter",
    "profitMargin": 27,
    "sell_price": 30,
    "buy_price": 0
    },
    {
    "name": "Tzu-Wei Lin",
    "profitMargin": 26.9,
    "sell_price": 41,
    "buy_price": 10
    },
    {
    "name": "Addison Reed",
    "profitMargin": 26.599999999999994,
    "sell_price": 174,
    "buy_price": 130
    },
    {
    "name": "Jacob Rhame",
    "profitMargin": 26.5,
    "sell_price": 35,
    "buy_price": 5
    },
    {
    "name": "Jeanmar Gomez",
    "profitMargin": 26.5,
    "sell_price": 35,
    "buy_price": 5
    },
    {
    "name": "Miguel Gomez",
    "profitMargin": 26.5,
    "sell_price": 35,
    "buy_price": 5
    },
    {
    "name": "Kolby Allard",
    "profitMargin": 26.4,
    "sell_price": 36,
    "buy_price": 6
    },
    {
    "name": "Mac Williamson",
    "profitMargin": 26.299999999999997,
    "sell_price": 37,
    "buy_price": 7
    },
    {
    "name": "Andrew Romine",
    "profitMargin": 26.1,
    "sell_price": 39,
    "buy_price": 9
    },
    {
    "name": "Jimmy Cordero",
    "profitMargin": 26.1,
    "sell_price": 49,
    "buy_price": 18
    },
    {
    "name": "Zac Curtis",
    "profitMargin": 26.1,
    "sell_price": 29,
    "buy_price": 0
    },
    {
    "name": "Enyel De Los Santos",
    "profitMargin": 26,
    "sell_price": 40,
    "buy_price": 10
    },
    {
    "name": "Ian Krol",
    "profitMargin": 26,
    "sell_price": 40,
    "buy_price": 10
    },
    {
    "name": "John Axford",
    "profitMargin": 26,
    "sell_price": 40,
    "buy_price": 10
    },
    {
    "name": "Lucas Sims",
    "profitMargin": 25.6,
    "sell_price": 34,
    "buy_price": 5
    },
    {
    "name": "Nick Ciuffo",
    "profitMargin": 25.5,
    "sell_price": 35,
    "buy_price": 6
    },
    {
    "name": "Raffy Lopez",
    "profitMargin": 25.5,
    "sell_price": 35,
    "buy_price": 6
    },
    {
    "name": "Taylor Davis",
    "profitMargin": 25.5,
    "sell_price": 35,
    "buy_price": 6
    },
    {
    "name": "Dillon Peters",
    "profitMargin": 25.2,
    "sell_price": 28,
    "buy_price": 0
    },
    {
    "name": "Tyler Beede",
    "profitMargin": 25.2,
    "sell_price": 28,
    "buy_price": 0
    },
    {
    "name": "Jacob Stallings",
    "profitMargin": 25,
    "sell_price": 40,
    "buy_price": 11
    },
    {
    "name": "Jorge De La Rosa",
    "profitMargin": 25,
    "sell_price": 50,
    "buy_price": 20
    },
    {
    "name": "Bryan Mitchell",
    "profitMargin": 24.9,
    "sell_price": 61,
    "buy_price": 30
    },
    {
    "name": "Braxton Lee",
    "profitMargin": 24.799999999999997,
    "sell_price": 42,
    "buy_price": 13
    },
    {
    "name": "Brandon Kintzler",
    "profitMargin": 24.7,
    "sell_price": 33,
    "buy_price": 5
    },
    {
    "name": "Brian Flynn",
    "profitMargin": 24.7,
    "sell_price": 33,
    "buy_price": 5
    },
    {
    "name": "Darnell Sweeney",
    "profitMargin": 24.7,
    "sell_price": 33,
    "buy_price": 5
    },
    {
    "name": "Myles Straw",
    "profitMargin": 24.7,
    "sell_price": 33,
    "buy_price": 5
    },
    {
    "name": "Bradley Zimmer",
    "profitMargin": 24.5,
    "sell_price": 105,
    "buy_price": 70
    },
    {
    "name": "Buck Farmer",
    "profitMargin": 24.3,
    "sell_price": 27,
    "buy_price": 0
    },
    {
    "name": "Dustin Peterson",
    "profitMargin": 24.3,
    "sell_price": 27,
    "buy_price": 0
    },
    {
    "name": "J.P. Crawford",
    "profitMargin": 24.3,
    "sell_price": 27,
    "buy_price": 0
    },
    {
    "name": "Roenis Elias",
    "profitMargin": 24.200000000000003,
    "sell_price": 38,
    "buy_price": 10
    },
    {
    "name": "Vidal Nuno",
    "profitMargin": 24.200000000000003,
    "sell_price": 38,
    "buy_price": 10
    },
    {
    "name": "Erick Fedde",
    "profitMargin": 23.8,
    "sell_price": 32,
    "buy_price": 5
    },
    {
    "name": "Jose Ramirez",
    "profitMargin": 23.8,
    "sell_price": 32,
    "buy_price": 5
    },
    {
    "name": "Mike Soroka",
    "profitMargin": 23.8,
    "sell_price": 32,
    "buy_price": 5
    },
    {
    "name": "Braden Shipley",
    "profitMargin": 23.700000000000003,
    "sell_price": 43,
    "buy_price": 15
    },
    {
    "name": "Donnie Hart",
    "profitMargin": 23.700000000000003,
    "sell_price": 43,
    "buy_price": 15
    },
    {
    "name": "Engelb Vielma",
    "profitMargin": 23.7,
    "sell_price": 33,
    "buy_price": 6
    },
    {
    "name": "Rafael Ortega",
    "profitMargin": 23.7,
    "sell_price": 33,
    "buy_price": 6
    },
    {
    "name": "Sean Doolittle",
    "profitMargin": 23.699999999999818,
    "sell_price": 2333,
    "buy_price": 2076
    },
    {
    "name": "Brad Wieck",
    "profitMargin": 23.6,
    "sell_price": 54,
    "buy_price": 25
    },
    {
    "name": "Dylan Cozens",
    "profitMargin": 23.6,
    "sell_price": 34,
    "buy_price": 7
    },
    {
    "name": "Fernando Salas",
    "profitMargin": 23.5,
    "sell_price": 35,
    "buy_price": 8
    },
    {
    "name": "Ildemaro Vargas",
    "profitMargin": 23.4,
    "sell_price": 26,
    "buy_price": 0
    },
    {
    "name": "Jhan Marinez",
    "profitMargin": 23.4,
    "sell_price": 26,
    "buy_price": 0
    },
    {
    "name": "Derek Fisher",
    "profitMargin": 23.299999999999997,
    "sell_price": 37,
    "buy_price": 10
    },
    {
    "name": "Hunter Wood",
    "profitMargin": 23.299999999999997,
    "sell_price": 37,
    "buy_price": 10
    },
    {
    "name": "Yonder Alonso",
    "profitMargin": 23.099999999999994,
    "sell_price": 149,
    "buy_price": 111
    },
    {
    "name": "Cody Reed",
    "profitMargin": 22.8,
    "sell_price": 32,
    "buy_price": 6
    },
    {
    "name": "Kevin Kaczmarski",
    "profitMargin": 22.8,
    "sell_price": 32,
    "buy_price": 6
    },
    {
    "name": "Pete Kozma",
    "profitMargin": 22.8,
    "sell_price": 32,
    "buy_price": 6
    },
    {
    "name": "Chase d'Arnaud",
    "profitMargin": 22.7,
    "sell_price": 33,
    "buy_price": 7
    },
    {
    "name": "Gregor Blanco",
    "profitMargin": 22.6,
    "sell_price": 34,
    "buy_price": 8
    },
    {
    "name": "Adolis Garcia",
    "profitMargin": 22.5,
    "sell_price": 55,
    "buy_price": 27
    },
    {
    "name": "Alfredo Gonzalez",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Austin Voth",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Christian Bergman",
    "profitMargin": 22.5,
    "sell_price": 35,
    "buy_price": 9
    },
    {
    "name": "David Freese",
    "profitMargin": 22.5,
    "sell_price": 125,
    "buy_price": 90
    },
    {
    "name": "Jeff Beliveau",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Jeffrey Springs",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Kevin McCarthy",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Matt Belisle",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Ronny Rodriguez",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Victor Alcantara",
    "profitMargin": 22.5,
    "sell_price": 25,
    "buy_price": 0
    },
    {
    "name": "Jose Valdez",
    "profitMargin": 22.299999999999997,
    "sell_price": 47,
    "buy_price": 20
    },
    {
    "name": "Shane Carle",
    "profitMargin": 22.299999999999997,
    "sell_price": 37,
    "buy_price": 11
    },
    {
    "name": "Breyvic Valera",
    "profitMargin": 22,
    "sell_price": 30,
    "buy_price": 5
    },
    {
    "name": "Scott Barlow",
    "profitMargin": 22,
    "sell_price": 30,
    "buy_price": 5
    },
    {
    "name": "Daniel Castro",
    "profitMargin": 21.9,
    "sell_price": 41,
    "buy_price": 15
    },
    {
    "name": "Brad Brach",
    "profitMargin": 21.799999999999997,
    "sell_price": 72,
    "buy_price": 43
    },
    {
    "name": "Rob Zastryzny",
    "profitMargin": 21.799999999999997,
    "sell_price": 52,
    "buy_price": 25
    },
    {
    "name": "David Freitas",
    "profitMargin": 21.6,
    "sell_price": 34,
    "buy_price": 9
    },
    {
    "name": "Gordon Beckham",
    "profitMargin": 21.6,
    "sell_price": 24,
    "buy_price": 0
    },
    {
    "name": "Nolan Fontana",
    "profitMargin": 21.6,
    "sell_price": 24,
    "buy_price": 0
    },
    {
    "name": "Chris Volstad",
    "profitMargin": 21.5,
    "sell_price": 35,
    "buy_price": 10
    },
    {
    "name": "Tanner Anderson",
    "profitMargin": 21.299999999999997,
    "sell_price": 37,
    "buy_price": 12
    },
    {
    "name": "Louis Coleman",
    "profitMargin": 21.1,
    "sell_price": 29,
    "buy_price": 5
    },
    {
    "name": "Vince Velasquez",
    "profitMargin": 21.099999999999994,
    "sell_price": 229,
    "buy_price": 185
    },
    {
    "name": "Brett Anderson",
    "profitMargin": 21,
    "sell_price": 30,
    "buy_price": 6
    },
    {
    "name": "German Marquez",
    "profitMargin": 21,
    "sell_price": 540,
    "buy_price": 465
    },
    {
    "name": "Mark Melancon",
    "profitMargin": 21,
    "sell_price": 110,
    "buy_price": 78
    },
    {
    "name": "Juan Graterol",
    "profitMargin": 20.7,
    "sell_price": 23,
    "buy_price": 0
    },
    {
    "name": "Kevin Shackelford",
    "profitMargin": 20.7,
    "sell_price": 23,
    "buy_price": 0
    },
    {
    "name": "Adam Moore",
    "profitMargin": 20.6,
    "sell_price": 34,
    "buy_price": 10
    },
    {
    "name": "Johnny Field",
    "profitMargin": 20.6,
    "sell_price": 34,
    "buy_price": 10
    },
    {
    "name": "Artie Lewicki",
    "profitMargin": 20.5,
    "sell_price": 35,
    "buy_price": 11
    },
    {
    "name": "Tyler Chatwood",
    "profitMargin": 20.5,
    "sell_price": 45,
    "buy_price": 20
    },
    {
    "name": "Victor Robles",
    "profitMargin": 20.400000000000006,
    "sell_price": 156,
    "buy_price": 120
    },
    {
    "name": "Miguel Cabrera",
    "profitMargin": 20.200000000000045,
    "sell_price": 1528,
    "buy_price": 1355
    },
    {
    "name": "Burch Smith",
    "profitMargin": 20.2,
    "sell_price": 28,
    "buy_price": 5
    },
    {
    "name": "Victor Reyes",
    "profitMargin": 20.1,
    "sell_price": 29,
    "buy_price": 6
    },
    {
    "name": "Neil Ramirez",
    "profitMargin": 20,
    "sell_price": 30,
    "buy_price": 7
    },
    {
    "name": "Thomas Pannone",
    "profitMargin": 20,
    "sell_price": 150,
    "buy_price": 115
    },
    {
    "name": "Tim Federowicz",
    "profitMargin": 20,
    "sell_price": 30,
    "buy_price": 7
    },
    {
    "name": "Miguel Sano",
    "profitMargin": 19.900000000000006,
    "sell_price": 111,
    "buy_price": 80
    },
    {
    "name": "Trayce Thompson",
    "profitMargin": 19.9,
    "sell_price": 31,
    "buy_price": 8
    },
    {
    "name": "Max Moroff",
    "profitMargin": 19.8,
    "sell_price": 22,
    "buy_price": 0
    },
    {
    "name": "Brian Johnson",
    "profitMargin": 19.7,
    "sell_price": 33,
    "buy_price": 10
    },
    {
    "name": "Daniel Ponce de Leon",
    "profitMargin": 19.5,
    "sell_price": 55,
    "buy_price": 30
    },
    {
    "name": "Giovanny Gallegos",
    "profitMargin": 19.5,
    "sell_price": 55,
    "buy_price": 30
    },
    {
    "name": "Drew VerHagen",
    "profitMargin": 19.3,
    "sell_price": 27,
    "buy_price": 5
    },
    {
    "name": "Matt Magill",
    "profitMargin": 19.3,
    "sell_price": 27,
    "buy_price": 5
    },
    {
    "name": "Mark Zagunis",
    "profitMargin": 19.2,
    "sell_price": 28,
    "buy_price": 6
    },
    {
    "name": "Adam Kolarek",
    "profitMargin": 19,
    "sell_price": 30,
    "buy_price": 8
    },
    {
    "name": "Tomas Telis",
    "profitMargin": 19,
    "sell_price": 30,
    "buy_price": 8
    },
    {
    "name": "Francisco Arcia",
    "profitMargin": 18.9,
    "sell_price": 31,
    "buy_price": 9
    },
    {
    "name": "Chris Tillman",
    "profitMargin": 18.8,
    "sell_price": 32,
    "buy_price": 10
    },
    {
    "name": "Junichi Tazawa",
    "profitMargin": 18.8,
    "sell_price": 32,
    "buy_price": 10
    },
    {
    "name": "Robert Gsellman",
    "profitMargin": 18.8,
    "sell_price": 32,
    "buy_price": 10
    },
    {
    "name": "Ryan LaMarre",
    "profitMargin": 18.8,
    "sell_price": 32,
    "buy_price": 10
    },
    {
    "name": "Jay Bruce",
    "profitMargin": 18.5,
    "sell_price": 115,
    "buy_price": 85
    },
    {
    "name": "Austin Pruitt",
    "profitMargin": 18.4,
    "sell_price": 26,
    "buy_price": 5
    },
    {
    "name": "Luis Perdomo",
    "profitMargin": 18.200000000000003,
    "sell_price": 48,
    "buy_price": 25
    },
    {
    "name": "Michael Perez",
    "profitMargin": 18,
    "sell_price": 20,
    "buy_price": 0
    },
    {
    "name": "Tim Anderson",
    "profitMargin": 18,
    "sell_price": 120,
    "buy_price": 90
    },
    {
    "name": "Tyler Bashlor",
    "profitMargin": 18,
    "sell_price": 20,
    "buy_price": 0
    },
    {
    "name": "Dustin Fowler",
    "profitMargin": 17.8,
    "sell_price": 32,
    "buy_price": 11
    },
    {
    "name": "Phil Hughes",
    "profitMargin": 17.799999999999997,
    "sell_price": 42,
    "buy_price": 20
    },
    {
    "name": "Bryse Wilson",
    "profitMargin": 17.5,
    "sell_price": 25,
    "buy_price": 5
    },
    {
    "name": "Tim Hill",
    "profitMargin": 17.4,
    "sell_price": 26,
    "buy_price": 6
    },
    {
    "name": "Anthony Banda",
    "profitMargin": 17,
    "sell_price": 30,
    "buy_price": 10
    },
    {
    "name": "Dustin Garneau",
    "profitMargin": 17,
    "sell_price": 30,
    "buy_price": 10
    },
    {
    "name": "Michael Hermosillo",
    "profitMargin": 17,
    "sell_price": 30,
    "buy_price": 10
    },
    {
    "name": "Jesmuel Valentin",
    "profitMargin": 16.799999999999997,
    "sell_price": 42,
    "buy_price": 21
    },
    {
    "name": "Aaron Bummer",
    "profitMargin": 16.6,
    "sell_price": 24,
    "buy_price": 5
    },
    {
    "name": "Chasen Bradford",
    "profitMargin": 16.5,
    "sell_price": 25,
    "buy_price": 6
    },
    {
    "name": "Jorge Lopez",
    "profitMargin": 16.5,
    "sell_price": 25,
    "buy_price": 6
    },
    {
    "name": "Justus Sheffield",
    "profitMargin": 16.5,
    "sell_price": 25,
    "buy_price": 6
    },
    {
    "name": "Ryan Flaherty",
    "profitMargin": 16.5,
    "sell_price": 25,
    "buy_price": 6
    },
    {
    "name": "Dan Altavilla",
    "profitMargin": 16.299999999999997,
    "sell_price": 107,
    "buy_price": 80
    },
    {
    "name": "Alex Meyer",
    "profitMargin": 16,
    "sell_price": 50,
    "buy_price": 29
    },
    {
    "name": "Miguel Almonte",
    "profitMargin": 15.7,
    "sell_price": 23,
    "buy_price": 5
    },
    {
    "name": "Jordan Lyles",
    "profitMargin": 15.5,
    "sell_price": 45,
    "buy_price": 25
    },
    {
    "name": "Dawel Lugo",
    "profitMargin": 15.2,
    "sell_price": 28,
    "buy_price": 10
    },
    {
    "name": "Cliff Pennington",
    "profitMargin": 15.100000000000001,
    "sell_price": 29,
    "buy_price": 11
    },
    {
    "name": "Miguel Diaz",
    "profitMargin": 15,
    "sell_price": 50,
    "buy_price": 30
    },
    {
    "name": "Albert Pujols",
    "profitMargin": 14.5,
    "sell_price": 115,
    "buy_price": 89
    },
    {
    "name": "Abraham Almonte",
    "profitMargin": 14.200000000000003,
    "sell_price": 38,
    "buy_price": 20
    },
    {
    "name": "Alec Mills",
    "profitMargin": 14.200000000000003,
    "sell_price": 38,
    "buy_price": 20
    },
    {
    "name": "A.J. Reed",
    "profitMargin": 14.2,
    "sell_price": 28,
    "buy_price": 11
    },
    {
    "name": "Brian Goodwin",
    "profitMargin": 14,
    "sell_price": 100,
    "buy_price": 76
    },
    {
    "name": "Salvador Perez",
    "profitMargin": 14,
    "sell_price": 800,
    "buy_price": 706
    },
    {
    "name": "Justin Williams",
    "profitMargin": 13.7,
    "sell_price": 23,
    "buy_price": 7
    },
    {
    "name": "Rafael Bautista",
    "profitMargin": 13,
    "sell_price": 20,
    "buy_price": 5
    },
    {
    "name": "Carson Kelly",
    "profitMargin": 12.899999999999999,
    "sell_price": 31,
    "buy_price": 15
    },
    {
    "name": "Kelby Tomlinson",
    "profitMargin": 12.8,
    "sell_price": 22,
    "buy_price": 7
    },
    {
    "name": "Tyler Flowers",
    "profitMargin": 12.5,
    "sell_price": 125,
    "buy_price": 100
    },
    {
    "name": "Yu Darvish",
    "profitMargin": 12.5,
    "sell_price": 1125,
    "buy_price": 1000
    },
    {
    "name": "Daniel Stumpf",
    "profitMargin": 12.100000000000001,
    "sell_price": 19,
    "buy_price": 5
    },
    {
    "name": "Rocky Gale",
    "profitMargin": 12,
    "sell_price": 30,
    "buy_price": 15
    },
    {
    "name": "Billy McKinney",
    "profitMargin": 11.799999999999997,
    "sell_price": 52,
    "buy_price": 35
    },
    {
    "name": "Felix Pena",
    "profitMargin": 11.799999999999997,
    "sell_price": 102,
    "buy_price": 80
    },
    {
    "name": "Tommy La Stella",
    "profitMargin": 10.5,
    "sell_price": 95,
    "buy_price": 75
    },
    {
    "name": "Jaime Schultz",
    "profitMargin": 10.2,
    "sell_price": 28,
    "buy_price": 15
    },
    {
    "name": "Daniel Mengden",
    "profitMargin": 10,
    "sell_price": 100,
    "buy_price": 80
    },
    {
    "name": "Beau Taylor",
    "profitMargin": 9.8,
    "sell_price": 22,
    "buy_price": 10
    },
    {
    "name": "Gregorio Petit",
    "profitMargin": 8,
    "sell_price": 20,
    "buy_price": 10
    },
    {
    "name": "John Gant",
    "profitMargin": 8,
    "sell_price": 20,
    "buy_price": 10
    },
    {
    "name": "Dakota Hudson",
    "profitMargin": 7.800000000000001,
    "sell_price": 22,
    "buy_price": 12
    },
    {
    "name": "Kevan Smith",
    "profitMargin": 7,
    "sell_price": 100,
    "buy_price": 83
    },
    {
    "name": "Wandy Peralta",
    "profitMargin": 3,
    "sell_price": 10,
    "buy_price": 6
    },
    {
    "name": "Mike Leake",
    "profitMargin": 0,
    "sell_price": 100,
    "buy_price": 90
    },
    {
    "name": "Aaron Nola",
    "profitMargin": -25.899999999999636,
    "sell_price": 14999,
    "buy_price": 13525
    },
    {
    "name": "Blake Treinen",
    "profitMargin": -50,
    "sell_price": 2500,
    "buy_price": 2300
    },
    {
    "name": "Adalberto Mondesi",
    "profitMargin": -70,
    "sell_price": 1000,
    "buy_price": 970
    },
    {
    "name": "Buster Posey",
    "profitMargin": -138.9000000000001,
    "sell_price": 2279,
    "buy_price": 2190
    },
    {
    "name": "Charlie Blackmon",
    "profitMargin": -150,
    "sell_price": 3000,
    "buy_price": 2850
    },
    {
    "name": "Corey Seager",
    "profitMargin": -150,
    "sell_price": 4000,
    "buy_price": 3750
    },
    {
    "name": "Stephen Strasburg",
    "profitMargin": -165,
    "sell_price": 15500,
    "buy_price": 14115
    },
    {
    "name": "Max Scherzer",
    "profitMargin": -175,
    "sell_price": 41750,
    "buy_price": 37750
    },
    {
    "name": "J.D. Martinez",
    "profitMargin": -202,
    "sell_price": 37000,
    "buy_price": 33502
    },
    {
    "name": "Jose Altuve",
    "profitMargin": -211,
    "sell_price": 41000,
    "buy_price": 37111
    },
    {
    "name": "Jose Ramirez",
    "profitMargin": -254.5,
    "sell_price": 62495,
    "buy_price": 56500
    },
    {
    "name": "Noah Syndergaard",
    "profitMargin": -351.7999999999993,
    "sell_price": 28498,
    "buy_price": 26000
    },
    {
    "name": "Gerrit Cole",
    "profitMargin": -400,
    "sell_price": 14000,
    "buy_price": 13000
    },
    {
    "name": "Javier Baez",
    "profitMargin": -400,
    "sell_price": 42000,
    "buy_price": 38200
    },
    {
    "name": "Aaron Judge",
    "profitMargin": -450,
    "sell_price": 57500,
    "buy_price": 52200
    },
    {
    "name": "Joey Votto",
    "profitMargin": -452.90000000000146,
    "sell_price": 29499,
    "buy_price": 27002
    },
    {
    "name": "Nolan Arenado",
    "profitMargin": -469.8000000000029,
    "sell_price": 71998,
    "buy_price": 65268
    },
    {
    "name": "Rich Gossage",
    "profitMargin": -606.7999999999993,
    "sell_price": 25998,
    "buy_price": 24005
    },
    {
    "name": "Bryce Harper",
    "profitMargin": -655,
    "sell_price": 71500,
    "buy_price": 65005
    },
    {
    "name": "Christian Yelich",
    "profitMargin": -906.8000000000029,
    "sell_price": 53998,
    "buy_price": 49505
    },
    {
    "name": "Francisco Lindor",
    "profitMargin": -1005,
    "sell_price": 60000,
    "buy_price": 55005
    },
    {
    "name": "Joe Torre",
    "profitMargin": -1100,
    "sell_price": 35000,
    "buy_price": 32600
    },
    {
    "name": "Richie Martin",
    "profitMargin": -1811,
    "sell_price": 0,
    "buy_price": 1811
    },
    {
    "name": "Mike Trout",
    "profitMargin": -2810.7999999999884,
    "sell_price": 187988,
    "buy_price": 172000
    },
    {
    "name": "Kenley Jansen",
    "profitMargin": -18500,
    "sell_price": 0,
    "buy_price": 18500
    },
    {
    "name": "Bret Boone",
    "profitMargin": -98000,
    "sell_price": 0,
    "buy_price": 98000
    }
    ]



const request = require('request');



app.listen(3000, () => {
 let wholeCollection = [];
 let initialIterator = 1;

 app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
})

 app.get("/requestPlayers", (req, res, next) => {
    callToAPI(res, initialIterator, "MLB_Card");
 })

 app.get("/requestPlayers/:pageId", (req, res, next) => {
    callToAPI(res, initialIterator, "MLB_Card", req);
 })

 app.get("/outbidCheck/:originalPage", (req, res, next) => {
     let params=req && req.params,
     originalPage=params.originalPage

    returnOutbidAlert(res, originalPage);
 })


 app.get("/requestStadiums", (req, res, next) => {
    callToAPI(res, initialIterator, "Stadium");
 })

 app.get("/requestEquipment", (req, res, next) => {
    callToAPI(res, initialIterator, "Equipment");
 })

 app.get("/requestSponsorships", (req, res, next) => {
    callToAPI(res, initialIterator, "Sponsorship");
 })

 app.get("/requestUnlockables", (req, res, next) => {
    callToAPI(res, initialIterator, "Unlockable");
 });


returnOutbidAlert = (res, originalPage) =>{
    request("https://theshownation.com/mlb20/apis/listings.json?type=MLB_Card&page="+originalPage, function (error, response, body) {
        let resp = JSON.parse(response.body);
        res.send(resp.listings);
    })
}

 function callToAPI(res, iterator, type, req){
    let pageIdToCall = req && req.params && req.params.pageId || false;
    

    if(pageIdToCall === false){
        request("https://theshownation.com/mlb20/apis/listings.json?type="+type+"&page="+iterator, function (error, response, body) {
            //get the response, parse it down to just the body
            let resp = JSON.parse(response.body)
            

            //append the original page for future ease of grabbing a specific set, performance
            for(let i=0;i<resp.listings.length;i++){
                resp.listings[i].originalPage=resp.page;
                resp.listings[i].uniqueId=_.uniqueId("uid");
            }

            
            //push the current set to the global array
            wholeCollection.push(resp.listings);

            //recursively iterate through
            if(resp.listings.length != 0){
                initialIterator++;
                callToAPI(res, initialIterator, type);
            }else{
                //reset the iterator for future calls
                initialIterator = 1;
                //when it is all done, send it to the consume data method
                res.send(consumeData(wholeCollection.flat()));
            }
        })      
    } 

    // use stub data.....
    // res.send(consumeData(stub.flat()));

}

function consumeData(collection, pageId){
    let draftArr = [];
    
    for(let i = 0; i<collection.length;i++){
        let pm = ((collection[i].best_sell_price - collection[i].best_sell_price * .10) - collection[i].best_buy_price);
        let pr = pm / collection[i].best_buy_price;
        draftArr.push ({
            "name": collection[i].name,
            "profitMargin": pm,
            "sell_price": collection[i].best_sell_price,
            "buy_price": collection[i].best_buy_price,
            "original_page": collection[i].originalPage,
            "profitRatio": pr
        })
    }
      
      draftArr.sort(compare);
      wholeCollection = [];

    return draftArr;
}

   });



   //helpers
   function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i].uniqueId === a[j].uniqueId)
                a.splice(j--, 1);
        }
    }

    return a;
}


function compare(a,b) {
    if (a.profitMargin > b.profitMargin)
      return -1;
    if (a.profitMargin < b.profitMargin)
      return 1;
    return 0;
  }
