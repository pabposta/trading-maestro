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
	name: 'Adecco SA 99/00 ~5:20',
	startingMoney: 10000,
	// the positions of the different prices in a price entry
	openPricePosition: 0,
	highPricePosition: 1,
	lowPricePosition: 2,
	closePricePosition: 3,
	currency: 'CHF',
	decimals: 2,
	data: [
		[83.9,85,83.4,84.3],
		[83.5,85.4,83.3,85.3],
		[87,87,85.2,85.5],
		[85.5,85.5,83.1,84],
		[83.4,85.9,83.4,85.7],
		[86.4,88,85.8,87.5],
		[87.4,87.5,86.5,87],
		[87,87.8,86.7,86.7],
		[87,87,84,85],
		[85,85.5,84.8,85.5],
		[85.3,87.9,84.1,87.7],
		[84.5,88,84.5,85.9],
		[87.4,87.4,83.5,84],
		[83.5,83.9,79,79.1],
		[79.8,81,79.5,80.2],
		[80.5,81.3,79.6,79.6],
		[80.3,80.8,79.8,80.3],
		[81,81.3,79.2,79.7],
		[80,82.8,79.5,82.3],
		[82.5,82.5,80,80.5],
		[80.3,81.1,78.6,79.3],
		[79.9,84.7,79.7,83.5],
		[83.1,85.4,81.3,84.3],
		[84,84.8,83.1,84.1],
		[84,84.5,82.9,83.3],
		[82,83,80.8,82.5],
		[83.4,84.2,83.1,84],
		[83.6,84.3,82.9,82.9],
		[82.8,83.2,80.9,81.7],
		[82.5,83.3,81.8,83.3],
		[84,87.2,83.6,85.7],
		[85.2,86.2,84.8,86],
		[85.4,85.5,83.8,85.5],
		[85.6,85.6,83,83],
		[84.9,86,81.7,82.5],
		[83,83.5,81,81.3],
		[81.1,83.5,81,82.9],
		[83.3,83.9,82.5,83.8],
		[84.1,84.3,82.7,83.1],
		[83,85.8,82.9,85],
		[85.6,85.9,84.8,85.1],
		[85.5,85.5,84.9,85.3],
		[84.9,85.8,84.4,85.3],
		[85,85,83.5,83.5],
		[84.2,84.9,83.8,84.8],
		[84.8,85,83.2,83.3],
		[83.9,85.4,83.2,85],
		[85,85,84,84.1],
		[84.7,84.7,83.6,83.6],
		[83.1,83.5,82.5,82.6],
		[82.9,83,81.7,82.1],
		[82.8,83.1,82,82.7],
		[82.9,83.1,82,82.1],
		[82.7,83,81.5,81.5],
		[81.2,83,81.1,82.2],
		[81.6,83,81.5,82.7],
		[81.5,83.5,81.5,83.2],
		[83.5,84.3,83.2,84],
		[84.5,84.5,82.4,83.4],
		[82.4,84.2,82.4,83],
		[83.2,83.8,83.1,83.5],
		[82.6,84.6,82.1,84.3],
		[84.1,84.4,83,84.4],
		[84.2,84.3,83.4,83.9],
		[82,84.1,82,83.7],
		[83.9,84.1,82.9,83.9],
		[84.4,85.8,84,84.2],
		[85,87.5,84,86.5],
		[86.5,87.5,86,87.4],
		[87.5,88.3,86.8,87.2],
		[87.5,89.4,87.2,88.3],
		[87.6,90,87.6,90],
		[89.2,90,88.8,90],
		[90,90.3,89.2,89.7],
		[89,90.4,88.3,89.7],
		[89.9,92,89.7,91.2],
		[91,91.5,89,91.5],
		[91.5,91.5,88.8,90],
		[90.1,90.8,89.8,89.9],
		[89.8,90.5,89.1,90.5],
		[90,90.3,87.1,88.5],
		[88.1,89.5,87.3,87.9],
		[89.6,89.6,87.5,88.6],
		[89.3,90.3,88.5,88.5],
		[88.1,88.6,86,87],
		[87.5,90.9,87.5,90.9],
		[90.9,92.4,90.5,92.4],
		[92,92.4,90.2,92.3],
		[91.5,92.2,91.2,91.7],
		[87,89.5,86.5,87.9],
		[88,91.7,88,88.2],
		[88.4,89.9,88.4,89.7],
		[89.8,90.2,89.2,90.1],
		[89.2,91.7,89.2,91.5],
		[92,95.6,91.5,94.6],
		[94,94.8,93.7,94.7],
		[94.8,96.2,93.8,96.1],
		[95.1,98.5,94.8,98.5],
		[99.3,99.3,96.7,97.5],
		[97,99.5,96.8,98.7],
		[99.5,100.1,98.4,99],
		[97.9,99.3,97.4,98.8],
		[98.7,98.7,97,97],
		[98.4,98.7,97.1,98.7],
		[98.5,99.6,97.2,99],
		[99.5,99.8,98.4,99.1],
		[98,100,98,98.5],
		[98.1,101.7,97.1,101.7],
		[101.4,104.1,100.4,102.9],
		[102,107.7,101.5,106.2],
		[105.5,107.4,103.8,104.5],
		[103.3,104.5,101,102.2],
		[101.4,104.7,101.4,102.3],
		[102.3,105.9,102.3,105.8],
		[106,111.8,106,111.8],
		[112.5,116,110.4,113.4],
		[114.4,115,110.2,113],
		[112.5,113.5,111.4,111.4],
		[110.7,114.7,110.1,113.4],
		[112.8,115.2,112.4,114.5],
		[113,117.5,112.8,117.4],
		[117.1,124.8,116.3,122.3],
		[122,124.3,120.4,122.4],
		[122.2,125.8,121.7,123.2],
		[124.9,125.1,122.4,123.8],
		[123.8,125,123.5,125],
		[125.2,125.3,123.2,125.3],
		[124.9,125.5,122.5,124.3],
		[123.1,125.3,123.1,124],
		[123.5,124,118.7,122],
		[120,120,115,115],
		[114.1,116,111.5,114.1],
		[114.4,118.6,114.4,117.5],
		[118.9,122.6,118.9,120.4],
		[120.4,122.4,118.8,122.4],
		[122.7,122.7,112.1,117.7],
		[117.6,118.5,113.9,115.2],
		[115,115,111.1,111.5],
		[112,113.3,107.2,109.9],
		[110.4,111.2,108,108.5],
		[108.9,109.4,107.8,109.1],
		[110,110,103.8,105.7],
		[102.7,107.3,102,107],
		[107.5,112.9,107,110.5],
		[109.8,111.7,106.9,106.9],
		[108.2,117.3,108,117.3],
		[120,122.5,118.9,122],
		[123.7,132,123.7,127.5],
		[125.1,127.7,124.1,124.1],
		[128,128.8,125.9,128.8],
		[130,131,126.4,128.1],
		[127.1,128.1,122.6,125],
		[125.7,127,122.2,124],
		[125.7,126.5,122.9,125],
		[125,131.3,124.3,128.5],
		[129.2,130,128.4,129.3],
		[129.3,130.3,126,128.5],
		[128.4,129.5,125.6,127.8],
		[128.9,128.9,120.5,121],
		[120.3,121.6,114.6,115.6],
		[116.3,125.3,116.3,123.1],
		[122.9,130.2,122.6,128.5],
		[128.8,131.3,126.6,129.5],
		[125.5,129,122.5,127.5],
		[126.9,132,126.9,131],
		[132.5,136.2,131.1,136],
		[135.5,142,135.5,137],
		[139.9,143,136.1,138.7],
		[138.5,139.5,133.2,134.9],
		[137.1,137.1,130.3,132],
		[133.6,135.1,130.5,134],
		[132.1,138,132.1,138],
		[139.3,139.5,136.6,137.7],
		[137.5,142.5,136.5,141],
		[142,144,139,139],
		[137.3,137.5,130.1,131.9],
		[131.9,131.9,125.6,129.8],
		[130,130,127.2,129.6],
		[126.5,127.8,123.9,125],
		[125.6,131.9,125.6,130.3],
		[129.6,135,129.6,133.5],
		[136,137,130,131.8],
		[136.6,136.6,122.4,123.7],
		[124.5,128,123.5,127.8],
		[127,130.4,123.8,124],
		[124,126.7,121.4,126.7],
		[126,128.3,123,126.9],
		[128.5,130.4,125.9,125.9],
		[125.9,128.7,125.8,125.9],
		[125,126.5,124.5,125.7],
		[125.1,125.5,123,123.7],
		[123.1,123.1,117,118.4],
		[117.5,120.4,114.7,115],
		[115.2,119.9,115,118],
		[120,124.4,119,123],
		[125,129.4,123.8,128],
		[128.3,134.6,128,132.9],
		[133,134.4,130.6,133.6],
		[134.9,135.9,128.5,131],
		[129.5,132.4,128.9,131.2],
		[133.3,137.5,132,135.9],
		[135.9,140.8,135.5,140.1],
		[138.9,140.8,134,136.5],
		[127.3,134.6,127.3,132],
		[134.3,139.5,134.1,139.5],
		[140.8,147,140.8,145.2],
		[145,151.6,145,150],
		[147,150.2,145.8,150],
		[149.4,149.4,145,146.3],
		[147.9,147.9,142.6,144],
		[144.7,145.5,141.5,141.5],
		[142.3,143.5,140,143.4],
		[143.2,148,142.2,146],
		[145.2,147.5,144.1,146],
		[146,147.5,144.8,146],
		[145,146.4,144.4,146.2],
		[146,147.5,145.5,146.7],
		[145.5,147.4,144,144.1],
		[142.1,145.1,142.1,144],
		[144,144.7,141.2,144.7],
		[144.3,144.4,141,141],
		[142.2,143.5,140,140],
		[140,141,139.8,140],
		[140.9,143.9,140.2,143.8],
		[145.5,145.5,142,143],
		[143.8,144,139,139],
		[140.9,141.3,136.6,140],
		[137.5,138.4,136.3,137.6],
		[138.5,139.7,136,139.7],
		[137.5,139.3,133.2,136],
		[137.4,137.9,133,135],
		[136,136,130.8,132.9],
		[133.5,135,132.5,133.2],
		[135,138,132,135.1],
		[135.5,139.2,135.5,137.1],
		[139,140.4,137.2,139.4],
		[140,145.7,139.1,143.1],
		[144.5,146.5,143.5,144.5],
		[146.8,149,145.5,146],
		[145.7,146,142.3,144.4],
		[144.5,144.5,140.3,142.5],
		[143.5,144.8,140.6,140.6],
		[143.4,143.4,138,142.2],
		[142,142.8,138.6,142.8],
		[141.8,142.2,138,139.2],
		[140.6,140.6,137.3,137.9],
		[138,138.2,134,134.6],
		[135,135,132.7,133.7],
		[132.7,134,131.5,133.2],
		[132.7,139.2,132.5,137.6],
		[138,138,136.4,137],
		[136.3,138,134.3,136.5],
		[138,139.4,137.2,138.6]
	]
});
