//JSON com as informações de cada subprefeitura
var regions = [
 {
   "region_code": "AD",
   "region_name": "Cidade Ademar",
   "total_areas": 26,
   "total_setores": 51,
   "total_moradias": 6667,
   "s_pmsp_r1": 9,
   "s_pmsp_r2": 21,
   "s_pmsp_r3": 19,
   "s_pmsp_r4": 2,
   "m_pmsp_r1": 1380,
   "m_pmsp_r2": 3156,
   "m_pmsp_r3": 2061,
   "m_pmsp_r4": 70,
   "diff_m_r1": "↑ 302",
   "diff_m_r2": "↑ 153",
   "diff_m_r3": "↑ 971",
   "diff_m_r4": "↓ 81",
   "m2_escorr": 351779.8,
   "m2_solapa": 305124.5,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 633822.8,
   "m2_pmsp": 656904.3,
   "m2_diff": "↑ 23.081,4"
 },
 {
   "region_code": "AF",
   "region_name": "Aricanduva/Formosa/Carrão",
   "total_areas": 6,
   "total_setores": 17,
   "total_moradias": 606,
   "s_pmsp_r1": 4,
   "s_pmsp_r2": 4,
   "s_pmsp_r3": 9,
   "s_pmsp_r4": 0,
   "m_pmsp_r1": 253,
   "m_pmsp_r2": 112,
   "m_pmsp_r3": 241,
   "m_pmsp_r4": 0,
   "diff_m_r1": "↑ 63",
   "diff_m_r2": "↓ 63",
   "diff_m_r3": "↑ 122",
   "diff_m_r4": "↓ 41",
   "m2_escorr": 17677.5,
   "m2_solapa": 40015.3,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 66254.5,
   "m2_pmsp": 57692.8,
   "m2_diff": "↓ 8.561,6"
 },
 {
   "region_code": "BT",
   "region_name": "Butantã",
   "total_areas": 26,
   "total_setores": 66,
   "total_moradias": 17129,
   "s_pmsp_r1": 16,
   "s_pmsp_r2": 26,
   "s_pmsp_r3": 20,
   "s_pmsp_r4": 4,
   "m_pmsp_r1": 3608,
   "m_pmsp_r2": 9282,
   "m_pmsp_r3": 3843,
   "m_pmsp_r4": 396,
   "diff_m_r1": "↑ 2.946",
   "diff_m_r2": "↑ 4.807",
   "diff_m_r3": "↑ 3.494",
   "diff_m_r4": "↑ 135",
   "m2_escorr": 519145.0,
   "m2_solapa": 116917.3,
   "m2_escorr_solapa": 23349.3,
   "m2_ipt": 617020.0,
   "m2_pmsp": 659411.6,
   "m2_diff": "↑ 42.391,6"
 },
 {
   "region_code": "CL",
   "region_name": "Campo Limpo",
   "total_areas": 38,
   "total_setores": 109,
   "total_moradias": 17143,
   "s_pmsp_r1": 19,
   "s_pmsp_r2": 40,
   "s_pmsp_r3": 37,
   "s_pmsp_r4": 13,
   "m_pmsp_r1": 3098,
   "m_pmsp_r2": 9996,
   "m_pmsp_r3": 3711,
   "m_pmsp_r4": 338,
   "diff_m_r1": "↑ 1.418",
   "diff_m_r2": "↑ 3.796",
   "diff_m_r3": "↑ 1.010",
   "diff_m_r4": "↑ 71",
   "m2_escorr": 725079.8,
   "m2_solapa": 419567.5,
   "m2_escorr_solapa": 159060.4,
   "m2_ipt": 1110406.5,
   "m2_pmsp": 1303707.7,
   "m2_diff": "↑ 193.301,2"
 },
 {
   "region_code": "CS",
   "region_name": "Capela do Socorro",
   "total_areas": 42,
   "total_setores": 70,
   "total_moradias": 8700,
   "s_pmsp_r1": 22,
   "s_pmsp_r2": 31,
   "s_pmsp_r3": 13,
   "s_pmsp_r4": 4,
   "m_pmsp_r1": 2679,
   "m_pmsp_r2": 5212,
   "m_pmsp_r3": 569,
   "m_pmsp_r4": 240,
   "diff_m_r1": "↓ 76",
   "diff_m_r2": "↑ 725",
   "diff_m_r3": "↓ 335",
   "diff_m_r4": "↓ 74",
   "m2_escorr": 730013.4,
   "m2_solapa": 185920.9,
   "m2_escorr_solapa": 262258.4,
   "m2_ipt": 1203003.1,
   "m2_pmsp": 1178192.6,
   "m2_diff": "↓ 24.810,5"
 },
 {
   "region_code": "CT",
   "region_name": "Cidade Tiradentes",
   "total_areas": 7,
   "total_setores": 26,
   "total_moradias": 2034,
   "s_pmsp_r1": 1,
   "s_pmsp_r2": 11,
   "s_pmsp_r3": 10,
   "s_pmsp_r4": 4,
   "m_pmsp_r1": 50,
   "m_pmsp_r2": 766,
   "m_pmsp_r3": 903,
   "m_pmsp_r4": 315,
   "diff_m_r1": "↑ 4",
   "diff_m_r2": "↑ 214",
   "diff_m_r3": "↑ 348",
   "diff_m_r4": "↑ 95",
   "m2_escorr": 236529.0,
   "m2_solapa": 160779.2,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 322487.3,
   "m2_pmsp": 397308.2,
   "m2_diff": "↑ 74.820,9"
 },
 {
   "region_code": "CV",
   "region_name": "Casa Verde",
   "total_areas": 22,
   "total_setores": 64,
   "total_moradias": 3893,
   "s_pmsp_r1": 9,
   "s_pmsp_r2": 30,
   "s_pmsp_r3": 18,
   "s_pmsp_r4": 7,
   "m_pmsp_r1": 745,
   "m_pmsp_r2": 1583,
   "m_pmsp_r3": 1135,
   "m_pmsp_r4": 430,
   "diff_m_r1": "↑ 284",
   "diff_m_r2": "↑ 161",
   "diff_m_r3": "↑ 470",
   "diff_m_r4": "↓ 57",
   "m2_escorr": 151501.7,
   "m2_solapa": 63698.6,
   "m2_escorr_solapa": 63594.5,
   "m2_ipt": 359111.6,
   "m2_pmsp": 278794.8,
   "m2_diff": "↓ 80.316,8"
 },
 {
   "region_code": "EM",
   "region_name": "Ermelino Matarazzo",
   "total_areas": 6,
   "total_setores": 13,
   "total_moradias": 1230,
   "s_pmsp_r1": 0,
   "s_pmsp_r2": 7,
   "s_pmsp_r3": 4,
   "s_pmsp_r4": 2,
   "m_pmsp_r1": 0,
   "m_pmsp_r2": 760,
   "m_pmsp_r3": 400,
   "m_pmsp_r4": 70,
   "diff_m_r1": "-",
   "diff_m_r2": "↑ 147",
   "diff_m_r3": "↑ 252",
   "diff_m_r4": "↓ 124",
   "m2_escorr": 39287.5,
   "m2_solapa": 69211.4,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 97987.9,
   "m2_pmsp": 108498.9,
   "m2_diff": "↑ 10.511,0"
 },
 {
   "region_code": "FO",
   "region_name": "Freguesia do Ó/Brasilândia",
   "total_areas": 34,
   "total_setores": 89,
   "total_moradias": 11346,
   "s_pmsp_r1": 19,
   "s_pmsp_r2": 28,
   "s_pmsp_r3": 32,
   "s_pmsp_r4": 10,
   "m_pmsp_r1": 1390,
   "m_pmsp_r2": 5132,
   "m_pmsp_r3": 2991,
   "m_pmsp_r4": 1833,
   "diff_m_r1": "↑ 541",
   "diff_m_r2": "↑ 1.220",
   "diff_m_r3": "↑ 1.328",
   "diff_m_r4": "↑ 1.396",
   "m2_escorr": 847837.2,
   "m2_solapa": 71717.1,
   "m2_escorr_solapa": 143429.6,
   "m2_ipt": 788605.8,
   "m2_pmsp": 1062983.8,
   "m2_diff": "↑ 274.378,0"
 },
 {
   "region_code": "G",
   "region_name": "Guaianases",
   "total_areas": 20,
   "total_setores": 55,
   "total_moradias": 5132,
   "s_pmsp_r1": 14,
   "s_pmsp_r2": 19,
   "s_pmsp_r3": 15,
   "s_pmsp_r4": 7,
   "m_pmsp_r1": 1562,
   "m_pmsp_r2": 2329,
   "m_pmsp_r3": 1011,
   "m_pmsp_r4": 230,
   "diff_m_r1": "↑ 1.104",
   "diff_m_r2": "↑ 749",
   "diff_m_r3": "↑ 403",
   "diff_m_r4": "↑ 127",
   "m2_escorr": 345064.2,
   "m2_solapa": 87722.3,
   "m2_escorr_solapa": 47218.6,
   "m2_ipt": 496147.7,
   "m2_pmsp": 480005.2,
   "m2_diff": "↓ 16.142,5"
 },
 {
   "region_code": "IP",
   "region_name": "Ipiranga",
   "total_areas": 5,
   "total_setores": 13,
   "total_moradias": 2024,
   "s_pmsp_r1": 0,
   "s_pmsp_r2": 6,
   "s_pmsp_r3": 5,
   "s_pmsp_r4": 2,
   "m_pmsp_r1": 0,
   "m_pmsp_r2": 1306,
   "m_pmsp_r3": 328,
   "m_pmsp_r4": 390,
   "diff_m_r1": "-",
   "diff_m_r2": "↑ 476",
   "diff_m_r3": "↑ 157",
   "diff_m_r4": "↑ 15",
   "m2_escorr": 60345.7,
   "m2_solapa": 48739.7,
   "m2_escorr_solapa": 3465.6,
   "m2_ipt": 108829.9,
   "m2_pmsp": 112551.0,
   "m2_diff": "↑ 3.721,1"
 },
 {
   "region_code": "IQ",
   "region_name": "Itaquera",
   "total_areas": 20,
   "total_setores": 63,
   "total_moradias": 6227,
   "s_pmsp_r1": 5,
   "s_pmsp_r2": 24,
   "s_pmsp_r3": 24,
   "s_pmsp_r4": 10,
   "m_pmsp_r1": 287,
   "m_pmsp_r2": 3880,
   "m_pmsp_r3": 1627,
   "m_pmsp_r4": 433,
   "diff_m_r1": "↑ 17",
   "diff_m_r2": "↑ 668",
   "diff_m_r3": "↑ 682",
   "diff_m_r4": "↑ 214",
   "m2_escorr": 516897.7,
   "m2_solapa": 186098.7,
   "m2_escorr_solapa": 63122.0,
   "m2_ipt": 587636.7,
   "m2_pmsp": 766118.4,
   "m2_diff": "↑ 178.481,7"
 },
 {
   "region_code": "IT",
   "region_name": "Itaim Paulista",
   "total_areas": 13,
   "total_setores": 56,
   "total_moradias": 7386,
   "s_pmsp_r1": 6,
   "s_pmsp_r2": 19,
   "s_pmsp_r3": 22,
   "s_pmsp_r4": 9,
   "m_pmsp_r1": 236,
   "m_pmsp_r2": 4650,
   "m_pmsp_r3": 1915,
   "m_pmsp_r4": 585,
   "diff_m_r1": "↑ 117",
   "diff_m_r2": "↑ 2.375",
   "diff_m_r3": "↑ 966",
   "diff_m_r4": "↓ 228",
   "m2_escorr": 0.0,
   "m2_solapa": 604188.3,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 586005.3,
   "m2_pmsp": 604188.3,
   "m2_diff": "↑ 18.183,0"
 },
 {
   "region_code": "JA",
   "region_name": "Jabaquara",
   "total_areas": 13,
   "total_setores": 19,
   "total_moradias": 2650,
   "s_pmsp_r1": 2,
   "s_pmsp_r2": 4,
   "s_pmsp_r3": 10,
   "s_pmsp_r4": 3,
   "m_pmsp_r1": 10,
   "m_pmsp_r2": 850,
   "m_pmsp_r3": 1520,
   "m_pmsp_r4": 270,
   "diff_m_r1": "↓ 91",
   "diff_m_r2": "↓ 16",
   "diff_m_r3": "↓ 159",
   "diff_m_r4": "↑ 3",
   "m2_escorr": 69626.8,
   "m2_solapa": 213388.8,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 285839.7,
   "m2_pmsp": 283015.6,
   "m2_diff": "↓ 2.824,1"
 },
 {
   "region_code": "JT",
   "region_name": "Jaçanã/Tremembé",
   "total_areas": 22,
   "total_setores": 82,
   "total_moradias": 8003,
   "s_pmsp_r1": 14,
   "s_pmsp_r2": 27,
   "s_pmsp_r3": 35,
   "s_pmsp_r4": 6,
   "m_pmsp_r1": 1092,
   "m_pmsp_r2": 4620,
   "m_pmsp_r3": 1907,
   "m_pmsp_r4": 384,
   "diff_m_r1": "↑ 562",
   "diff_m_r2": "↑ 1.618",
   "diff_m_r3": "↑ 877",
   "diff_m_r4": "↑ 7",
   "m2_escorr": 1189083.4,
   "m2_solapa": 71637.8,
   "m2_escorr_solapa": 54919.1,
   "m2_ipt": 1047312.7,
   "m2_pmsp": 1315640.4,
   "m2_diff": "↑ 268.327,7"
 },
 {
   "region_code": "LA",
   "region_name": "Lapa",
   "total_areas": 7,
   "total_setores": 16,
   "total_moradias": 2764,
   "s_pmsp_r1": 5,
   "s_pmsp_r2": 6,
   "s_pmsp_r3": 3,
   "s_pmsp_r4": 2,
   "m_pmsp_r1": 188,
   "m_pmsp_r2": 2276,
   "m_pmsp_r3": 75,
   "m_pmsp_r4": 225,
   "diff_m_r1": "↑ 188",
   "diff_m_r2": "↑ 1.204",
   "diff_m_r3": "↑ 64",
   "diff_m_r4": "↑ 178",
   "m2_escorr": 210678.7,
   "m2_solapa": 19538.2,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 170105.0,
   "m2_pmsp": 230216.9,
   "m2_diff": "↑ 60.112,0"
 },
 {
   "region_code": "MB",
   "region_name": "M'Boi Mirim",
   "total_areas": 60,
   "total_setores": 155,
   "total_moradias": 29471,
   "s_pmsp_r1": 19,
   "s_pmsp_r2": 58,
   "s_pmsp_r3": 63,
   "s_pmsp_r4": 15,
   "m_pmsp_r1": 3941,
   "m_pmsp_r2": 16535,
   "m_pmsp_r3": 7461,
   "m_pmsp_r4": 1534,
   "diff_m_r1": "↑ 2.058",
   "diff_m_r2": "↑ 8.451",
   "diff_m_r3": "↑ 4.645",
   "diff_m_r4": "↑ 335",
   "m2_escorr": 2286863.5,
   "m2_solapa": 351069.7,
   "m2_escorr_solapa": 47194.2,
   "m2_ipt": 2320485.1,
   "m2_pmsp": 2685127.3,
   "m2_diff": "↑ 364.642,2"
 },
 {
   "region_code": "MG",
   "region_name": "Vila Maria/Vila Guilherme",
   "total_areas": 3,
   "total_setores": 14,
   "total_moradias": 1515,
   "s_pmsp_r1": 6,
   "s_pmsp_r2": 4,
   "s_pmsp_r3": 4,
   "s_pmsp_r4": 0,
   "m_pmsp_r1": 865,
   "m_pmsp_r2": 240,
   "m_pmsp_r3": 410,
   "m_pmsp_r4": 0,
   "diff_m_r1": "↑ 629",
   "diff_m_r2": "↑ 140",
   "diff_m_r3": "↑ 215",
   "diff_m_r4": "=",
   "m2_escorr": 62702.6,
   "m2_solapa": 39303.9,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 32308.5,
   "m2_pmsp": 102006.5,
   "m2_diff": "↑ 69.697,9"
 },
 {
   "region_code": "MO",
   "region_name": "Mooca",
   "total_areas": 1,
   "total_setores": 3,
   "total_moradias": 73,
   "s_pmsp_r1": 0,
   "s_pmsp_r2": 1,
   "s_pmsp_r3": 1,
   "s_pmsp_r4": 1,
   "m_pmsp_r1": 0,
   "m_pmsp_r2": 60,
   "m_pmsp_r3": 5,
   "m_pmsp_r4": 8,
   "diff_m_r1": "-",
   "diff_m_r2": "↑ 60",
   "diff_m_r3": "↑ 5",
   "diff_m_r4": "↑ 8",
   "m2_escorr": 0.0,
   "m2_solapa": 6641.8,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 0.0,
   "m2_pmsp": 6641.8,
   "m2_diff": "↑ 6.641,8"
 },
 {
   "region_code": "MP",
   "region_name": "São Miguel Paulista",
   "total_areas": 7,
   "total_setores": 18,
   "total_moradias": 1370,
   "s_pmsp_r1": 3,
   "s_pmsp_r2": 8,
   "s_pmsp_r3": 5,
   "s_pmsp_r4": 2,
   "m_pmsp_r1": 100,
   "m_pmsp_r2": 830,
   "m_pmsp_r3": 150,
   "m_pmsp_r4": 290,
   "diff_m_r1": "↑ 39",
   "diff_m_r2": "↑ 280",
   "diff_m_r3": "↓ 111",
   "diff_m_r4": "↑ 94",
   "m2_escorr": 6712.2,
   "m2_solapa": 193341.9,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 205349.9,
   "m2_pmsp": 200054.1,
   "m2_diff": "↓ 5.295,8"
 },
 {
   "region_code": "PA",
   "region_name": "Parelheiros",
   "total_areas": 11,
   "total_setores": 18,
   "total_moradias": 2580,
   "s_pmsp_r1": 5,
   "s_pmsp_r2": 6,
   "s_pmsp_r3": 7,
   "s_pmsp_r4": 0,
   "m_pmsp_r1": 610,
   "m_pmsp_r2": 1645,
   "m_pmsp_r3": 325,
   "m_pmsp_r4": 0,
   "diff_m_r1": "↑ 441",
   "diff_m_r2": "↑ 133",
   "diff_m_r3": "↑ 86",
   "diff_m_r4": "↓ 47",
   "m2_escorr": 267336.3,
   "m2_solapa": 0.0,
   "m2_escorr_solapa": 83001.6,
   "m2_ipt": 349369.8,
   "m2_pmsp": 350338.0,
   "m2_diff": "↑ 968,2"
 },
 {
   "region_code": "PE",
   "region_name": "Penha",
   "total_areas": 6,
   "total_setores": 19,
   "total_moradias": 1967,
   "s_pmsp_r1": 1,
   "s_pmsp_r2": 9,
   "s_pmsp_r3": 7,
   "s_pmsp_r4": 2,
   "m_pmsp_r1": 20,
   "m_pmsp_r2": 1650,
   "m_pmsp_r3": 107,
   "m_pmsp_r4": 190,
   "diff_m_r1": "↑ 1",
   "diff_m_r2": "↑ 198",
   "diff_m_r3": "↓ 30",
   "diff_m_r4": "↑ 79",
   "m2_escorr": 144379.9,
   "m2_solapa": 5609.9,
   "m2_escorr_solapa": 7345.1,
   "m2_ipt": 162657.7,
   "m2_pmsp": 157334.9,
   "m2_diff": "↓ 5.322,8"
 },
 {
   "region_code": "PI",
   "region_name": "Pinheiros",
   "total_areas": 0,
   "total_setores": 0,
   "total_moradias": 0,
   "s_pmsp_r1": 0,
   "s_pmsp_r2": 0,
   "s_pmsp_r3": 0,
   "s_pmsp_r4": 0,
   "m_pmsp_r1": 0,
   "m_pmsp_r2": 0,
   "m_pmsp_r3": 0,
   "m_pmsp_r4": 0,
   "diff_m_r1": 0,
   "diff_m_r2": 0,
   "diff_m_r3": 0,
   "diff_m_r4": 0,
   "m2_escorr": "0,0",
   "m2_solapa": "0,0",
   "m2_escorr_solapa": "0,0",
   "m2_ipt": "0,0",
   "m2_pmsp": "0,0",
   "m2_diff": "0,0"
 },
 {
   "region_code": "PJ",
   "region_name": "Pirituba/Jaraguá",
   "total_areas": 22,
   "total_setores": 58,
   "total_moradias": 5266,
   "s_pmsp_r1": 16,
   "s_pmsp_r2": 25,
   "s_pmsp_r3": 14,
   "s_pmsp_r4": 3,
   "m_pmsp_r1": 1964,
   "m_pmsp_r2": 2455,
   "m_pmsp_r3": 747,
   "m_pmsp_r4": 100,
   "diff_m_r1": "↑ 1.850",
   "diff_m_r2": "↓ 1.151",
   "diff_m_r3": "↑ 21",
   "diff_m_r4": "↓ 70",
   "m2_escorr": 711072.1,
   "m2_solapa": 72886.9,
   "m2_escorr_solapa": 188750.7,
   "m2_ipt": 912707.4,
   "m2_pmsp": 972709.7,
   "m2_diff": "↑ 60.002,3"
 },
 {
   "region_code": "PR",
   "region_name": "Perus",
   "total_areas": 27,
   "total_setores": 47,
   "total_moradias": 5857,
   "s_pmsp_r1": 7,
   "s_pmsp_r2": 23,
   "s_pmsp_r3": 14,
   "s_pmsp_r4": 3,
   "m_pmsp_r1": 348,
   "m_pmsp_r2": 3659,
   "m_pmsp_r3": 1544,
   "m_pmsp_r4": 306,
   "diff_m_r1": "↑ 275",
   "diff_m_r2": "↑ 1.500",
   "diff_m_r3": "↑ 864",
   "diff_m_r4": "↑ 66",
   "m2_escorr": 817096.8,
   "m2_solapa": 70660.8,
   "m2_escorr_solapa": 5761.4,
   "m2_ipt": 599459.6,
   "m2_pmsp": 893519.0,
   "m2_diff": "↑ 294.059,4"
 },
 {
   "region_code": "SA",
   "region_name": "Santo Amaro",
   "total_areas": 3,
   "total_setores": 4,
   "total_moradias": 190,
   "s_pmsp_r1": 1,
   "s_pmsp_r2": 1,
   "s_pmsp_r3": 1,
   "s_pmsp_r4": 1,
   "m_pmsp_r1": 11,
   "m_pmsp_r2": 25,
   "m_pmsp_r3": 50,
   "m_pmsp_r4": 104,
   "diff_m_r1": "↓ 90",
   "diff_m_r2": "↑ 25",
   "diff_m_r3": "=",
   "diff_m_r4": "↑ 104",
   "m2_escorr": 3633.0,
   "m2_solapa": 6577.6,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 11561.0,
   "m2_pmsp": 10210.6,
   "m2_diff": "↓ 1.350,4"
 },
 {
   "region_code": "SB",
   "region_name": "Sapopemba",
   "total_areas": 9,
   "total_setores": 39,
   "total_moradias": 7007,
   "s_pmsp_r1": 10,
   "s_pmsp_r2": 11,
   "s_pmsp_r3": 8,
   "s_pmsp_r4": 10,
   "m_pmsp_r1": 2120,
   "m_pmsp_r2": 3167,
   "m_pmsp_r3": 270,
   "m_pmsp_r4": 1450,
   "diff_m_r1": "↑ 1.912",
   "diff_m_r2": "↑ 1.115",
   "diff_m_r3": "↓ 225",
   "diff_m_r4": "↑ 787",
   "m2_escorr": 221868.0,
   "m2_solapa": 83064.1,
   "m2_escorr_solapa": 40610.8,
   "m2_ipt": 314941.2,
   "m2_pmsp": 345542.9,
   "m2_diff": "↑ 30.601,7"
 },
 {
   "region_code": "SE",
   "region_name": "Sé",
   "total_areas": 0,
   "total_setores": 0,
   "total_moradias": 0,
   "s_pmsp_r1": 0,
   "s_pmsp_r2": 0,
   "s_pmsp_r3": 0,
   "s_pmsp_r4": 0,
   "m_pmsp_r1": 0,
   "m_pmsp_r2": 0,
   "m_pmsp_r3": 0,
   "m_pmsp_r4": 0,
   "diff_m_r1": 0,
   "diff_m_r2": 0,
   "diff_m_r3": 0,
   "diff_m_r4": 0,
   "m2_escorr": "0,0",
   "m2_solapa": "0,0",
   "m2_escorr_solapa": "0,0",
   "m2_ipt": "0,0",
   "m2_pmsp": "0,0",
   "m2_diff": "0,0"
 },
 {
   "region_code": "SM",
   "region_name": "São Mateus",
   "total_areas": 28,
   "total_setores": 113,
   "total_moradias": 11731,
   "s_pmsp_r1": 24,
   "s_pmsp_r2": 46,
   "s_pmsp_r3": 35,
   "s_pmsp_r4": 8,
   "m_pmsp_r1": 3511,
   "m_pmsp_r2": 6419,
   "m_pmsp_r3": 1493,
   "m_pmsp_r4": 308,
   "diff_m_r1": "↑ 3.492",
   "diff_m_r2": "↑ 2.216",
   "diff_m_r3": "↑ 270",
   "diff_m_r4": "↓ 615",
   "m2_escorr": 1282441.3,
   "m2_solapa": 191027.4,
   "m2_escorr_solapa": 230765.0,
   "m2_ipt": 1219708.4,
   "m2_pmsp": 1704233.7,
   "m2_diff": "↑ 484525,2"
 },
 {
   "region_code": "ST",
   "region_name": "Santana/Tucuruvi",
   "total_areas": 1,
   "total_setores": 3,
   "total_moradias": 65,
   "s_pmsp_r1": 2,
   "s_pmsp_r2": 1,
   "s_pmsp_r3": 0,
   "s_pmsp_r4": 0,
   "m_pmsp_r1": 55,
   "m_pmsp_r2": 10,
   "m_pmsp_r3": 0,
   "m_pmsp_r4": 0,
   "diff_m_r1": "↑ 9",
   "diff_m_r2": "↓ 1",
   "diff_m_r3": "↓ 1",
   "diff_m_r4": "=",
   "m2_escorr": 1338.7,
   "m2_solapa": 2528.5,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 4198.0,
   "m2_pmsp": 3867.1,
   "m2_diff": "↓ 330,9"
 },
 {
   "region_code": "VM",
   "region_name": "Vila Mariana",
   "total_areas": 0,
   "total_setores": 0,
   "total_moradias": 0,
   "s_pmsp_r1": 0,
   "s_pmsp_r2": 0,
   "s_pmsp_r3": 0,
   "s_pmsp_r4": 0,
   "m_pmsp_r1": 0,
   "m_pmsp_r2": 0,
   "m_pmsp_r3": 0,
   "m_pmsp_r4": 0,
   "diff_m_r1": 0,
   "diff_m_r2": 0,
   "diff_m_r3": 0,
   "diff_m_r4": 0,
   "m2_escorr": "0,0",
   "m2_solapa": "0,0",
   "m2_escorr_solapa": "0,0",
   "m2_ipt": "0,0",
   "m2_pmsp": "0,0",
   "m2_diff": "0,0"
 },
 {
   "region_code": "VP",
   "region_name": "Vila Prudente",
   "total_areas": 4,
   "total_setores": 14,
   "total_moradias": 1025,
   "s_pmsp_r1": 3,
   "s_pmsp_r2": 7,
   "s_pmsp_r3": 3,
   "s_pmsp_r4": 1,
   "m_pmsp_r1": 300,
   "m_pmsp_r2": 430,
   "m_pmsp_r3": 245,
   "m_pmsp_r4": 50,
   "diff_m_r1": "↑ 165",
   "diff_m_r2": "↑ 430",
   "diff_m_r3": "↑ 130",
   "diff_m_r4": "↑ 50",
   "m2_escorr": 0.0,
   "m2_solapa": 75881.2,
   "m2_escorr_solapa": 0.0,
   "m2_ipt": 16190.4,
   "m2_pmsp": 75881.2,
   "m2_diff": "↑ 59.690,8"
 }
];

//identificar o maior valor para colorir as subprefeituras
var temp_array = regions.map(function (item) {
  return item.total_moradias;
});

var highest_value = Math.max.apply(Math, temp_array);

//colore com base no valor anterior
$(function () {
  for (i = 0; i < regions.length; i++) {
    if (regions[i].total_moradias == 0) {
      $("#" + regions[i].region_code)
        .css({
          fill: "rgba(125,125,125)"
        })
        .data("region", regions[i]);
    } else {
      $("#" + regions[i].region_code)
        .css({
          fill:
            "rgba(16, 0, 163," +
            (regions[i].total_moradias * 2) / highest_value +
            ")"
        })
        .data("region", regions[i]);
    }
  }

  // função que anima as caixinhas com o hover do mouse
  $(".map path")
    .mouseover(function (e) {
      var region_data = $(this).data("region");
      if (region_data.total_moradias == 0) {
        $(
          '<div class="info_panel">' +
            region_data.region_name +
            "<hr>" +
            "Não possui áreas mapeadas" +
            "</div>"
        ).appendTo("body");
      } else {
        $(
          '<div class="info_panel">' +
            region_data.region_name +
            "<hr>" +
            //'<p class="header">MAPEAMENTO PMSP</p>' +
            '<table class="unstyledTable">' +
            "<tbody>" +
            '<tr class="header"><td>Risco</td><td>PMSP</td><td>IPT</td></tr>' +
            "<tr>" +
            '<td class="r1">R1</td><td class="r1">' +
            region_data.m_pmsp_r1.toLocaleString("pt-BR") +
            "</td><td>"+
            region_data.diff_m_r1.toLocaleString("pt-BR") +
            "</td></tr><tr>" +

            '<td class="r2">R2</td><td class="r2">' +
            region_data.m_pmsp_r2.toLocaleString("pt-BR") +
            "</td><td>" +
            region_data.diff_m_r2.toLocaleString("pt-BR") +
            "</td></tr><tr>" +

            '<td class="r3">R3</td><td class="r3">' +
            region_data.m_pmsp_r3.toLocaleString("pt-BR") +
            "</td><td>" +
            region_data.diff_m_r3.toLocaleString("pt-BR") +
            "</td></tr><tr>" +

            '<td class="r4">R4</td><td class="r4">' +
            region_data.m_pmsp_r4.toLocaleString("pt-BR") +
            "</td><td>"+
            region_data.diff_m_r4.toLocaleString("pt-BR") +
            "</td></tr>" +
            "</tbody></table>" +
            "<br>" +
            "Total de moradias: " +
            region_data.total_moradias.toLocaleString("pt-BR") +
            "</div>"
        ).appendTo("body");
      }
      var mouseX = e.pageX, // X coordinates of mouse
        mouseY = e.pageY; // Y coordinates of mouse

      $(".info_panel").css({
        top: mouseY - 80,
        left: mouseX - (1.3 * $(".info_panel").width())
      });
    })
    .mouseleave(function () {
      $(".info_panel").remove();
    });
});
