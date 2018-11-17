// tripledouble(num1,num2)
// which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
// For example:
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1


function tripledouble(num1, num2) {
    const matches = num1.toString().match(/(\d)\1{2}/g);
    if(matches.length == 0){
        return 0;
    }
    const digit = matches[0][0];
    const regexS = `${digit}{2}`;
    const re = new RegExp(regexS, "g");
    if(re.test(num2)){
        return 1;
    }
    //return ( /(\d)\1{2}/g.test(num1) && /(\d)\1{1}/g.test(num2) ) ? 1 : 0
}