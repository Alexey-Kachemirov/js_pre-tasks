'use strict';
function countSecToday() {
	var curr = new Date();
	var dayStart = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate());
    var amount = curr - dayStart;
	
	return Math.round(amount / 1000);
}
console.log( countSecToday() + '\nThis is total amount of seconds starting from the beginning of today till now' );