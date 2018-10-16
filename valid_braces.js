// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
// Write a function that takes a string of braces, and determines if the order of the braces is valid.It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets[], and curly braces { }.Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{ }.

// What is considered Valid ?
//     A string of braces is considered valid if all braces are matched with the correct brace.

//         Examples
// "(){}[]"   => True
// "([{}])"   => True
// "(}"       => False
// "[(])"     => False
// "[({})](]" => False
const matches = {
  "(": ")",
  "{": "}",
  "[": "]"
};
function validBraces(braces) {
  const shouldMatch = [];
  for(let i = 0; i < braces.length; i++){
      const current = braces[i];
      if (matches[current]) {
          shouldMatch.push(matches[current]);
    }
      else if (current != shouldMatch.pop()) {
        return false;
    }
  }
    return shouldMatch == 0;
}

console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("(}"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));

// Second solution
function validBraces2(braces) {
    while (/\(\)|\[\]|\{\}/g.test(braces)) { braces = braces.replace(/\(\)|\[\]|\{\}/g, "") }
    return !braces.length;
}
