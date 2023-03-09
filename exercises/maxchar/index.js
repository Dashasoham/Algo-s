// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let char = {};
  for (let character of str) {
    if (char[character]) {
      char[character]++;
    } else {
      char[character] = 1;
    }
  }
}

module.exports = maxChar;
