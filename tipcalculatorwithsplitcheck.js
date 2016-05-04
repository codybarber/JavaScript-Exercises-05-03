/* Enter Amount of Bill*/
var bill = 100.00;
/*Enter Quality of Service (Good, Fail, or Bad)*/
var service = "Fail";
/*Enter Amount of People Splitting Check*/
var people = 2;
var totalbill;

if (service === "Good") {
  totalbill = bill * 1.2;
} else if (service === "Fail") {
  totalbill = bill * 1.15;
} else if (service === "Bad") {
  totalbill = bill * 1.1;
}
var splitCheck = totalbill / people;
console.log(splitCheck.toFixed(2));
