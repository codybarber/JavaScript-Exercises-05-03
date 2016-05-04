/* Enter Amount of Bill*/
var bill = 100.00;
/*Enter Quality of Service (Good, Fail, or Bad)*/
var service = "Bad";
var totalbill;
if (service === "Good") {
  totalbill = bill * 1.2;
} else if (service === "Fail") {
  totalbill = bill * 1.15;
} else if (service === "Bad") {
  totalbill = bill * 1.10;
}
console.log(totalbill.toFixed(2));
