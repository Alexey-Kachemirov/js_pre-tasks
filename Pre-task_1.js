'use strict';

var arr = [];

function createRandArr() {
	for (var i = 1; i <= 10; i++) {
		arr.push((Math.floor(Math.random() * 100))+1);
	}
}

function compareNumbers(a, b) { 
	return b - a;
}

createRandArr();
arr.sort(compareNumbers);

var mult = arr[0] * arr[1] * arr[2];

console.log( "Sorted array from max to min: \n" + arr );
console.log( "Multiply of 3 greatest values equals: \n" + mult );