/*Enter text to reverse*/
var string = "this one was pretty hard";

function reverse(str) {
  return str.split("").reverse().join("");

}

console.log(reverse(string));


/*
var string = "JavaScript";
var length = string.length;
var reversedString = "";
var counter = length - 1;
while (counter >= 0) {
  var letter = string.charAt(counter);
  reversedString = reversedString + letter;
  counter--;
}

console.log(reversedString);
*/
