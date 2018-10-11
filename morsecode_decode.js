// challange : https://www.codewars.com/kata/decode-the-morse-code
const morseObject = { "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z", "--..--": ",", ".-.-.-": ".", "---...": ":", "-.-.-.": ";", "..--..": "?", "-...-": "=", ".----.": "'", "-..-.": "/", "-.-.--": "!", "-....-": "-", "..--.-": "_", "-.--.": "(", "-.--.-": ")", "...-..-": "$", ". . . .": "&", ".--.-.": "@", "...---...": "SOS" };

function decodeMorse(encodedString) {
  const words = encodedString.trim().split("   "); // removes space and splits string into words
  return words
    .map(word => {
      const letters = word.split(" "); // splits words into letters
      return letters.map(letter => morseObject[letter]).join(""); // join letters to form word
    })
    .join(" "); // join words to form setence
}

console.log(decodeMorse("  .... . -.--   .--- ..- -.. .   "));
