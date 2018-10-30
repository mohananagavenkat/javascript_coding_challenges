// url: https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {
    //your code here
    if (names.length === 0) {
        return "";
    }
    switch (names.length) {
        case 1: return names[0].name;
            break;
        case 2: return names.map(hash => hash.name).join(" & ");
            break;
        default: return names.slice(0, names.length - 2).map(hash => hash.name).join(", ") + ", " + names.slice(names.length - 2).map(hash => hash.name).join(" & ");
            break;
    }
}


// Tests

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]))
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]))
// returns 'Bart'

console.log(list([]))
// returns ''

