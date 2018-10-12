// url: https://www.codewars.com/kata/ones-and-zeros/train/javascript
// Given an array of one's and zero's convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

function binaryArrayToNumber(arr){
   return arr.reverse().map( (x,i) => x*Math.pow(2,i)).reduce((prev,next)=> prev+next,prev = 0);
}

function binaryArrayToNumber2(arr){
    return parseInt(arr.join(""),2);
 }

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));

console.log(binaryArrayToNumber([0, 1, 1, 0]));
console.log(binaryArrayToNumber([1, 0, 1, 1]));
console.log(binaryArrayToNumber([0, 1, 0, 1]));