'use strict';
function countSecToday() {
	var curr = new Date();
	var today = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate());
    var amount = curr - today;
	
	return Math.round(amount / 1000);
}
alert( countSecToday() );