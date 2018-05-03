'use strict';

function createRandArr() {
	var arrRand = [];
	for (var i = 1; i <= 10; i++) {
		arrRand.push((Math.floor(Math.random() * 100))+1);
	}
	return arrRand;
}

function compareNumbers(a, b) { 
	return b - a;
}

var arrSorted = createRandArr();
arrSorted.sort(compareNumbers);
var mult = arrSorted[0] * arrSorted[1] * arrSorted[2];

console.log( "Sorted array from max to min: \n" + arrSorted );
console.log( "Multiply of 3 greatest values equals: \n" + mult );