/*Enter text to convert to l33tsp34k*/
var text = "Given a paragraph of text as a string, print the paragraph in leetspeak. To translate a string to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase)";

var textUpper = text.toUpperCase()

var leet1 = textUpper.replace(/A/g, "4");
var leet2 = leet1.replace(/E/g, "3");
var leet3 = leet2.replace(/G/g, "6");
var leet4 = leet3.replace(/I/g, "1");
var leet5 = leet4.replace(/O/g, "0");
var leet6 = leet5.replace(/S/g, "5");
var leet7 = leet6.replace(/T/g, "7");

console.log(leet7);
