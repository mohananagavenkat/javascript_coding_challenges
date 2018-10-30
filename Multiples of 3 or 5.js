// url: https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    const result = new Set();
    let i = 1;
    let te, fe;
    while (i) {
        if (!te && 3 * i < number) {
            result.add(3 * i);
        } else {
            te = true;
        }
        if (!fe && 5 * i < number) {
            result.add(5 * i);
        } else {
            fe = true;
        }
        if (te && fe) {
            break;
        }
        i++
    };
    return Array.from(result).reduce((prev, next) => prev + next, 0);
}

// better solutions

function solution1(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}


function solution2(number) {
    var n3 = Math.floor(--number / 3), n5 = Math.floor(number / 5), n15 = Math.floor(number / 15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}