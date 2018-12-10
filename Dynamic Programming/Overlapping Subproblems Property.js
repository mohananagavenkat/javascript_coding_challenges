//https://www.geeksforgeeks.org/overlapping-subproblems-property-in-dynamic-programming-dp-1/
// go to the above link to know about the dynamic programming paradigm in algorithm thinking and the cases where they play important role
function feb1(n){
	if(n <= 1)
		return n;
	return feb1(n-1)+feb1(n-2);
}
const lookup = {

};

function feb2(n){
	if(lookup[n] == undefined){
		if(n <= 1)
			lookup[n] = n;
		else
			lookup[n] = feb2(n-1)+feb2(n-2);
	}
	return lookup[n];
}

console.time("without lookup table");
feb1(20);
console.timeEnd("without lookup table");
console.time("with lookup table");
feb2(20);
console.timeEnd("with lookup table");