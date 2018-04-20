'use strict';
var values = {
	"health": 4,
	"friends": 2,
	"family": 5,
	"work": 3,
	"religion": 1
}

function sortByPriority(obj) {
  // convert object into array
	var arr = [];
	for(var key in values)
		if(values.hasOwnProperty(key))
			arr.push([key, values[key]]); // each item is an array in format [key, value]
	
	// sort items by value
	arr.sort(
	function(a, b) {
	  return b[1]-a[1]; // compare numbers
	});
	return arr; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}
alert( sortByPriority(values) );