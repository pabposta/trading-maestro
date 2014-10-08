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
	name: 'Wal-Mart Stores Inc 06/07 ~3:40',
	startingMoney: 10000,
	// the positions of the different prices in a price entry
	openPricePosition: 0,
	highPricePosition: 1,
	lowPricePosition: 2,
	closePricePosition: 3,
	currency: '$',
	decimals: 2,
	data: [
		[47.89,48.2,47.19,47.66],
		[48,48.08,47.58,47.68],
		[47.98,47.99,47.51,47.91],
		[47.75,47.82,47.41,47.5],
		[47.5,48.24,47.42,47.72],
		[47.76,47.98,47.61,47.81],
		[47.81,48.21,47.78,48.03],
		[47.72,48.05,47.55,47.9],
		[47.34,47.47,46.55,46.61],
		[46.61,46.89,46.48,46.71],
		[46.89,47.33,46.63,46.89],
		[46.51,46.73,46.02,46.1],
		[46,46.1,45.42,45.87],
		[46.03,46.51,45.95,46.29],
		[46.25,46.55,46.07,46.48],
		[46.48,46.75,46.36,46.54],
		[46.78,46.8,46.36,46.37],
		[46.3,46.62,46.28,46.35],
		[46.28,46.41,45.92,46],
		[45.98,46.17,45.59,45.65],
		[45.9,46.03,45.8,45.9],
		[46,46.61,46,46.52],
		[46.63,46.89,46.4,46.45],
		[46.5,46.8,46.28,46.37],
		[46.07,46.24,45.86,46.09],
		[46,46.13,45.87,45.87],
		[45.95,46.06,45.61,45.71],
		[45.6,45.8,45.33,45.54],
		[45.45,46.29,45.31,46.11],
		[46.09,46.25,45.87,46.16],
		[45.82,46.2,45.82,46.01],
		[46.2,46.61,46.03,46.18],
		[47.1,48.23,47.06,47.55],
		[47.61,47.99,47.32,47.78],
		[47.67,47.8,47.15,47.39],
		[47.1,47.31,46.9,47],
		[47.48,47.66,47.18,47.39],
		[47.22,47.62,47.09,47.28],
		[47.35,47.73,47.21,47.6],
		[47.62,48.11,47.21,47.98],
		[47.98,48.48,47.88,48.31],
		[48.32,48.41,48.09,48.2],
		[48.18,48.78,48.09,48.39],
		[48.6,48.74,48.19,48.31],
		[48.16,48.25,47.61,47.96],
		[47.96,48.15,47.46,47.81],
		[48.07,48.7,47.99,48.61],
		[48.61,48.64,48.09,48.15],
		[48.05,48.36,47.47,47.67],
		[47.6,47.88,47.5,47.63],
		[47.75,47.84,46.92,47.28],
		[47.31,47.96,47.04,47.69],
		[47.51,48.08,47.44,47.78],
		[47.75,48.42,47.64,48.08],
		[48.5,48.9,48.42,48.52],
		[48.53,48.77,48.32,48.58],
		[48.42,48.75,48.28,48.58],
		[48.36,48.6,48.13,48.31],
		[48.37,48.54,47.67,47.97],
		[48.15,48.24,47.68,47.74],
		[47.8,48.17,47.74,47.98],
		[48.08,48.13,47.75,47.87],
		[47.82,48.54,47.82,48.36],
		[48.38,48.85,48.25,48.48],
		[49.86,50.29,49.41,50.26],
		[50.01,50.42,49.92,49.97],
		[49.97,50.18,49.55,49.69],
		[49.55,49.89,49.29,49.57],
		[49.57,50.05,49.45,49.98],
		[49.6,49.78,48.2,48.2],
		[48.25,48.66,48.01,48.3],
		[47.8,48.17,47.45,47.89],
		[47.85,48.32,47.71,47.81],
		[47.65,48.27,47.44,47.47],
		[47.84,48.29,47.75,48.04],
		[48.06,48.25,47.61,47.93],
		[47.79,48.15,47.38,47.88],
		[48.02,48.13,47.15,47.42],
		[47.42,47.63,47.1,47.26],
		[46.99,47.13,46.04,46.18],
		[46.09,46.18,45.06,45.73],
		[45.83,46.14,45.49,46],
		[46.05,46.78,45.75,46.21],
		[46.51,46.82,46.38,46.59],
		[46.48,47.4,46.44,47.3],
		[47.22,47.85,46.95,47.77],
		[47.79,48.2,47.56,48.01],
		[48.01,48.15,47.75,47.91],
		[47.81,47.92,47.15,47.84],
		[47.57,47.8,47.03,47.49],
		[47.1,47.19,46.46,46.64],
		[47,47.04,46.36,46.72],
		[46.86,47.09,46.64,46.95],
		[47.06,47.52,46.85,47.4],
		[47.51,48.29,47.47,48.1],
		[48,48.32,47.9,48.05],
		[47.89,48.45,47.86,48.27],
		[48.27,48.55,47.89,48.47],
		[48.31,48.42,47.94,47.94],
		[47.95,48.11,47.06,47.27],
		[47.21,47.5,46.91,47.26],
		[47.19,47.42,46.83,47.41],
		[47.63,48.12,47.51,48.07],
		[48.31,48.42,47.89,48.17],
		[47.96,48.18,47.83,47.97],
		[47.68,48.38,47.65,48.34],
		[48.84,49.84,48.59,49.76],
		[49.6,49.95,48.91,48.93],
		[48.6,48.85,48.13,48.69],
		[48.85,49.1,48.63,48.81],
		[48.73,49.06,48.57,48.7],
		[48.52,48.69,48.32,48.34],
		[48.34,48.66,47.87,47.92],
		[47.92,48.56,47.51,48.33],
		[48.3,48.74,48.17,48.28],
		[48.52,48.75,48.2,48.36],
		[48.43,48.5,48.05,48.27],
		[48.43,48.88,48.28,48.61],
		[48.37,48.64,48.08,48.1],
		[48.07,48.28,47.84,47.93],
		[47.6,48.33,47.56,47.75],
		[47.84,47.91,47.41,47.78],
		[47.66,47.99,47.49,47.84],
		[48,48.1,47.41,47.62],
		[47.49,47.74,46.98,47.18],
		[47.06,47.39,47.02,47.11],
		[47.31,47.36,47.18,47.27],
		[47.13,47.25,46.62,46.62],
		[46.5,46.8,46.47,46.54],
		[46.74,47.14,46.32,46.33],
		[46.41,46.95,46.35,46.65],
		[46.8,47,46.64,46.91],
		[47.13,47.54,46.76,46.94],
		[46.7,47.15,46.47,47.12],
		[47.29,47.8,47.1,47.6],
		[47.9,49.94,47.73,49.47],
		[50.3,51.44,50.25,51.21],
		[51.12,51.2,50.36,50.52],
		[50.3,51.04,50.2,50.75],
		[50.39,50.61,49.61,49.76],
		[49.89,50.15,49.6,50.08],
		[49.9,50.12,49.55,49.81],
		[49.53,49.81,48.9,48.91],
		[49.18,49.54,48.97,49.5],
		[49.53,49.65,48.98,49.28],
		[49.5,49.68,49.21,49.34],
		[49.25,49.45,49.07,49.11],
		[48.93,48.97,48.59,48.81],
		[49.06,49.25,48.56,48.59],
		[48.71,48.79,48.08,48.39],
		[48.25,48.42,47.83,47.83],
		[48,48.12,47.69,47.82],
		[47.82,48.49,47.75,47.97],
		[47.83,48.49,47.76,48.46],
		[48.33,48.5,48.18,48.21],
		[48.31,48.5,47.87,48.11],
		[48.2,48.49,48.14,48.33],
		[48.34,48.47,48.13,48.47],
		[48.36,48.46,48.08,48.09],
		[48.09,48.49,47.99,48.38],
		[48.38,48.82,48.26,48.5],
		[48.1,48.25,47.49,47.58],
		[47.45,47.89,47.23,47.68],
		[49.11,49.23,48.61,48.83],
		[48.73,49.26,48.67,49.15],
		[48.91,49.08,48.7,48.94],
		[48.78,48.88,48.3,48.35],
		[48.35,48.74,47.96,48.04],
		[48.1,48.98,48.1,48.79],
		[48.48,48.87,47.92,48.06],
		[48.3,48.4,47.95,48.11],
		[47.95,48.66,47.92,48.02],
		[48.42,48.45,47.55,47.87],
		[47.51,47.77,46.53,46.82],
		[46.72,46.85,45.92,45.94],
		[45.86,46.46,45.8,46.21],
		[46.4,46.81,45.9,45.95],
		[45.9,46.24,45.48,46.22],
		[46.2,47.11,46.08,46.73],
		[46.65,46.72,45.5,45.52],
		[45.89,47.05,45.78,47.02],
		[46.72,47.48,46.55,47.06],
		[47.35,48.42,46.7,48.42],
		[47.75,48,46.39,46.45],
		[46,47.27,45.7,46.07],
		[46.31,46.6,46.08,46.17]
	]
});
