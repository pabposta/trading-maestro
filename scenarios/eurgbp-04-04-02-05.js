/**
Copyright 2014, Pablo Daniel Poveda Stahl

This file is part of Trading Maestro.

Trading Maestro is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Trading Maestro is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Trading Maestro.  If not, see <http://www.gnu.org/licenses/>.
**/

scenarioManager.add({
	name: 'Euro/Pound 04/05 ~5:00',
	names: {
		'de-DE': 'Euro/Pfund 04/05 ~5:00',
		'es-ES': 'Euro/Libra 04/05 ~5:00'
	},
	startingMoney: 1000,
	// the positions of the different prices in a price entry
	openPricePosition: 0,
	highPricePosition: 1,
	lowPricePosition: 2,
	closePricePosition: 3,
	currency: '&pound;',
	decimals: 4,
	data: [
		[0.66705,0.668,0.6639,0.66575],
		[0.6658,0.6679,0.6614,0.6633],
		[0.6624,0.66565,0.6596,0.66],
		[0.65995,0.6604,0.6565,0.6572],
		[0.6572,0.662,0.656,0.66165],
		[0.66155,0.66275,0.6583,0.659],
		[0.659,0.6608,0.6589,0.6592],
		[0.6591,0.65985,0.65605,0.6567],
		[0.6567,0.65805,0.6549,0.6567],
		[0.65695,0.66905,0.65605,0.66785],
		[0.6678,0.6706,0.6662,0.6685],
		[0.66835,0.6714,0.6666,0.667],
		[0.66835,0.66885,0.66425,0.66475],
		[0.6648,0.66605,0.6628,0.66435],
		[0.6642,0.66995,0.66305,0.66715],
		[0.66705,0.67265,0.6659,0.6703],
		[0.67035,0.6726,0.66695,0.6686],
		[0.6669,0.66725,0.66285,0.664],
		[0.66395,0.66685,0.66245,0.66535],
		[0.6653,0.6688,0.66395,0.6685],
		[0.6682,0.67555,0.6679,0.67445],
		[0.6745,0.6766,0.67315,0.6738],
		[0.67365,0.6762,0.67295,0.67385],
		[0.67395,0.67605,0.6718,0.67345],
		[0.6735,0.67915,0.67285,0.6791],
		[0.679,0.6797,0.67235,0.67265],
		[0.6727,0.67455,0.66495,0.66505],
		[0.6656,0.66823,0.66405,0.66675],
		[0.6668,0.67655,0.6661,0.67605],
		[0.67535,0.6763,0.66885,0.67135],
		[0.6717,0.6737,0.66955,0.6708],
		[0.6708,0.67585,0.6702,0.6749],
		[0.6756,0.68155,0.67515,0.6796],
		[0.67965,0.6814,0.67515,0.6761],
		[0.6762,0.6778,0.67215,0.67345],
		[0.6734,0.6761,0.6715,0.6732],
		[0.6732,0.67495,0.67,0.67035],
		[0.6707,0.6713,0.6676,0.67085],
		[0.6712,0.6712,0.6669,0.66775],
		[0.6677,0.66885,0.6661,0.66735],
		[0.6673,0.6693,0.66515,0.66715],
		[0.6673,0.6685,0.66505,0.66705],
		[0.6678,0.66785,0.6642,0.66525],
		[0.6654,0.667,0.66445,0.6658],
		[0.66575,0.6678,0.66415,0.6659],
		[0.6657,0.6673,0.66285,0.6644],
		[0.6643,0.6682,0.6625,0.6674],
		[0.6683,0.6711,0.66725,0.66915],
		[0.6691,0.6702,0.66755,0.6683],
		[0.6683,0.66835,0.658,0.6584],
		[0.65825,0.66205,0.65655,0.65685],
		[0.6567,0.6616,0.65445,0.66005],
		[0.6607,0.66605,0.6582,0.66555],
		[0.6656,0.66625,0.66275,0.66365],
		[0.6636,0.6641,0.6561,0.6572],
		[0.6573,0.65835,0.6551,0.6567],
		[0.657,0.6608,0.6548,0.6603],
		[0.66065,0.66175,0.65835,0.6615],
		[0.6616,0.66555,0.6603,0.66495],
		[0.6651,0.6684,0.664,0.6658],
		[0.6658,0.66945,0.66445,0.66685],
		[0.66685,0.6681,0.66495,0.66665],
		[0.6673,0.6673,0.6652,0.66575],
		[0.66595,0.67095,0.6656,0.6686],
		[0.66845,0.6725,0.66805,0.67015],
		[0.6701,0.6709,0.66815,0.66835],
		[0.6685,0.67335,0.66725,0.67255],
		[0.6732,0.6734,0.67015,0.67165],
		[0.6714,0.67235,0.6668,0.6669],
		[0.66695,0.66965,0.6663,0.6665],
		[0.6669,0.67015,0.666,0.66965],
		[0.6699,0.67015,0.6669,0.6677],
		[0.66735,0.6679,0.665,0.66645],
		[0.6666,0.66715,0.6632,0.66385],
		[0.6638,0.66845,0.66335,0.6671],
		[0.6671,0.66865,0.66625,0.6667],
		[0.66655,0.6682,0.66365,0.66485],
		[0.6648,0.66625,0.663,0.6662],
		[0.66635,0.66865,0.66505,0.6654],
		[0.6652,0.66785,0.6648,0.6658],
		[0.6658,0.6675,0.66375,0.6648],
		[0.6651,0.6657,0.66015,0.6602],
		[0.66055,0.6618,0.65925,0.6597],
		[0.66,0.66325,0.65845,0.66195],
		[0.6618,0.6632,0.66035,0.6606],
		[0.6609,0.66495,0.66025,0.6629],
		[0.6628,0.665,0.65975,0.6605],
		[0.6619,0.66295,0.65785,0.65815],
		[0.65825,0.66225,0.658,0.66025],
		[0.66,0.66115,0.6592,0.66015],
		[0.66025,0.66205,0.6598,0.66095],
		[0.66115,0.6676,0.6601,0.66685],
		[0.6668,0.66715,0.66518,0.6666],
		[0.6664,0.67035,0.6662,0.66975],
		[0.6696,0.6699,0.66755,0.66775],
		[0.6676,0.67275,0.667,0.6723],
		[0.67235,0.6725,0.66965,0.67135],
		[0.6718,0.67225,0.6685,0.6718],
		[0.67175,0.67595,0.67095,0.67585],
		[0.6761,0.677,0.6742,0.67645],
		[0.6764,0.67845,0.6743,0.6747],
		[0.67455,0.67805,0.67405,0.677],
		[0.6766,0.6783,0.6711,0.6716],
		[0.6715,0.67595,0.67105,0.6741],
		[0.6739,0.6745,0.67185,0.6727],
		[0.67265,0.67445,0.6715,0.67367],
		[0.6738,0.67444,0.67049,0.67085],
		[0.67067,0.6735,0.67045,0.67125],
		[0.6714,0.6774,0.6709,0.6759],
		[0.67605,0.68085,0.67535,0.67985],
		[0.6798,0.6811,0.67803,0.68005],
		[0.6799,0.68155,0.67805,0.67865],
		[0.67833,0.6799,0.67715,0.67766],
		[0.6778,0.68295,0.67635,0.68295],
		[0.6829,0.68315,0.67845,0.68212],
		[0.68215,0.68405,0.6814,0.6838],
		[0.68355,0.685,0.6822,0.68247],
		[0.68178,0.68355,0.67935,0.6824],
		[0.6827,0.68285,0.68085,0.68166],
		[0.6817,0.68555,0.68135,0.68379],
		[0.684,0.68435,0.67785,0.67945],
		[0.6796,0.68073,0.67883,0.67955],
		[0.67901,0.68187,0.6789,0.6815],
		[0.6815,0.6868,0.68102,0.68667],
		[0.6868,0.6868,0.68243,0.68389],
		[0.68426,0.68495,0.6816,0.68323],
		[0.683,0.684,0.67933,0.67955],
		[0.68016,0.68143,0.67855,0.67955],
		[0.6796,0.6807,0.67825,0.6799],
		[0.68,0.68561,0.67909,0.6854],
		[0.68555,0.68785,0.68435,0.68631],
		[0.6864,0.69175,0.68545,0.6904],
		[0.68998,0.69074,0.68738,0.68865],
		[0.6885,0.6913,0.68655,0.69075],
		[0.69073,0.69165,0.68728,0.69051],
		[0.6905,0.69135,0.689,0.68925],
		[0.6893,0.69261,0.68817,0.69135],
		[0.69106,0.69215,0.68835,0.68872],
		[0.6887,0.68985,0.6875,0.68794],
		[0.6879,0.68845,0.68515,0.6882],
		[0.68819,0.6905,0.6856,0.6893],
		[0.68935,0.69255,0.68875,0.6913],
		[0.6908,0.69575,0.6908,0.69475],
		[0.6947,0.69565,0.69336,0.69379],
		[0.69376,0.6966,0.692,0.6925],
		[0.6926,0.69315,0.68913,0.69034],
		[0.6902,0.6942,0.6893,0.6939],
		[0.69451,0.69588,0.6939,0.69559],
		[0.6957,0.6969,0.69405,0.6959],
		[0.6957,0.69592,0.6936,0.69551],
		[0.69558,0.69743,0.69325,0.69649],
		[0.69635,0.69759,0.69415,0.6967],
		[0.69612,0.69734,0.6948,0.69525],
		[0.6953,0.6959,0.68965,0.69215],
		[0.6923,0.69413,0.68995,0.69334],
		[0.69325,0.6995,0.6931,0.69795],
		[0.69795,0.69965,0.6968,0.69877],
		[0.69891,0.69992,0.6957,0.69587],
		[0.696,0.69788,0.69415,0.69445],
		[0.6944,0.70035,0.6942,0.6981],
		[0.69815,0.70098,0.69725,0.70065],
		[0.7007,0.70138,0.6978,0.69884],
		[0.6993,0.7015,0.69795,0.70105],
		[0.7011,0.70178,0.69905,0.69926],
		[0.69925,0.7025,0.69875,0.70086],
		[0.7009,0.70315,0.6995,0.70052],
		[0.70045,0.70315,0.69953,0.70131],
		[0.7017,0.70316,0.70079,0.7014],
		[0.7015,0.7016,0.69855,0.70033],
		[0.70005,0.70122,0.6991,0.70084],
		[0.7009,0.70195,0.69944,0.70085],
		[0.7012,0.70205,0.6988,0.70198],
		[0.70171,0.70315,0.70007,0.70133],
		[0.7012,0.7025,0.69475,0.69539],
		[0.69544,0.6966,0.68899,0.68987],
		[0.68985,0.69129,0.6875,0.6895],
		[0.6896,0.6934,0.68915,0.6922],
		[0.692,0.69295,0.6906,0.69149],
		[0.6915,0.69194,0.68965,0.68985],
		[0.6898,0.69117,0.6871,0.68938],
		[0.68955,0.69435,0.6885,0.69131],
		[0.6913,0.69253,0.69035,0.69073],
		[0.6914,0.69325,0.69075,0.69145],
		[0.69135,0.69288,0.68941,0.68985],
		[0.68975,0.69151,0.68924,0.68968],
		[0.68955,0.69135,0.6847,0.68535],
		[0.68525,0.68663,0.68425,0.68532],
		[0.68649,0.6886,0.68505,0.68814],
		[0.6881,0.6947,0.6869,0.69356],
		[0.69325,0.70015,0.69253,0.69845],
		[0.69855,0.70405,0.69837,0.7025],
		[0.7029,0.7059,0.7018,0.70343],
		[0.70346,0.70635,0.7026,0.7042],
		[0.7042,0.7063,0.70225,0.70607],
		[0.706,0.71075,0.70442,0.70924],
		[0.7091,0.70994,0.7076,0.70823],
		[0.7081,0.70865,0.705,0.70657],
		[0.70628,0.70945,0.70475,0.70705],
		[0.70691,0.70783,0.705,0.7054],
		[0.7054,0.70705,0.70252,0.70445],
		[0.7043,0.70515,0.70185,0.7025],
		[0.70246,0.70355,0.6975,0.69765],
		[0.69781,0.69977,0.6969,0.69715],
		[0.69715,0.70116,0.697,0.69786],
		[0.6979,0.70295,0.6976,0.7011],
		[0.70115,0.7035,0.69995,0.70245],
		[0.70235,0.7029,0.69965,0.70095],
		[0.70063,0.7039,0.69985,0.70272],
		[0.70245,0.70295,0.6971,0.69758],
		[0.6976,0.69875,0.69405,0.69525],
		[0.6953,0.6964,0.69155,0.6926],
		[0.69245,0.6982,0.69194,0.69497],
		[0.69412,0.6961,0.6939,0.69435],
		[0.69439,0.69643,0.69255,0.696],
		[0.69595,0.69615,0.6925,0.6946],
		[0.69465,0.6959,0.69015,0.69035],
		[0.6904,0.69288,0.68963,0.69065],
		[0.69086,0.69388,0.68984,0.69245],
		[0.69238,0.69385,0.69165,0.69245],
		[0.69245,0.69471,0.6905,0.6908],
		[0.69065,0.69179,0.68855,0.6894],
		[0.6894,0.69,0.6851,0.6861],
		[0.6864,0.68795,0.68491,0.68685],
		[0.6869,0.68927,0.68633,0.6881],
		[0.6879,0.68935,0.68545,0.68909],
		[0.68913,0.69019,0.68705,0.68895],
		[0.6889,0.6908,0.68783,0.6886],
		[0.68933,0.68995,0.686,0.6873],
		[0.6872,0.68895,0.68618,0.68661],
		[0.6867,0.69298,0.6865,0.6911],
		[0.691,0.6922,0.68955,0.6896],
		[0.6896,0.6909,0.68836,0.6901],
		[0.68897,0.69038,0.6878,0.68885],
		[0.6885,0.69415,0.68835,0.6936],
		[0.6936,0.69475,0.6915,0.69245],
		[0.6924,0.69645,0.69034,0.69105],
		[0.6909,0.692,0.6887,0.69005],
		[0.6905,0.6909,0.6882,0.68855]
	]
});
