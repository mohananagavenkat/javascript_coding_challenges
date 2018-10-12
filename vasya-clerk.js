// url: https://www.codewars.com/kata/vasya-clerk
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

// ###Examples:

// // === JavaScript ==

// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(people){
    let result = "YES";
    let previousChange = {
        "25":0,
        "50":0,
        "100":0
    };
    for (let i = 0; i < people.length; i++) {
        if(people[i] == 25){
            previousChange["25"]++;
        }else if(people[i] == 50){
            if(previousChange["25"] > 0){
                previousChange["25"]--;
                previousChange["50"]++;
            }else{
                result = "NO";
                break;
            }
        }
        else if( people[i] == 100 ){
            if(previousChange["25"] >= 3){
                previousChange["25"]-= 3;
                previousChange["100"]++;
            }else if( previousChange["25"] > 0 && previousChange["50"] > 0 ){
                previousChange["25"]--;
                previousChange["50"]--;
                previousChange["100"]++;
            }else{
                result = "NO";
                break;
            }
        }
        // console.log(previousChange);
    }
    return result;
}

console.log(
    tickets([25, 25, 50, 50])
);

console.log(tickets([25, 100]));