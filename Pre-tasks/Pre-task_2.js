'use strict';
function countSecToday() {
	var currDate = new Date();
	var dayStart = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate());
    var amount = currDate - dayStart;
	
	return Math.round(amount / 1000);
}
console.log( countSecToday() + '\nThis is total amount of seconds starting from the beginning of today till now' );