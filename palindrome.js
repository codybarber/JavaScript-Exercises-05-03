/*Enter potential palindrome below*/
var string1 = "cody";

function reverse(str) {
  return str.split("").reverse().join("");
}

var string2 = (reverse(string1));

if (string1 === string2) {
  console.log(string1 + " is a palindrome.");
} else if (string1 !== string2) {
  console.log(string1 + " is not a palindrome.");
}
