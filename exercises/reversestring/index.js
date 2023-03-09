// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//.I
// function reverse(str) {
//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

//II.
// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

//III.

function reverse(str) {
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}
reverse("asdf");

module.exports = reverse;
