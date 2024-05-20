// question no 1
// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”


let city = prompt("Enter your favourite city name of Pakistan?");

if(city == "karachi"){
    alert("Welcome To The City Of Light ");
}

// question no 2
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

let gender = prompt("What is your gender?");

if(gender == "male"){
    alert("Good Morning Sir!");
}
else if(gender == "female"){
    alert("Good Morning Ma'am!");
}

// question no 3
// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

let signalColor = prompt (" Write the color road signal?");

if (signalColor == "red"){
alert ("Red : Must Stop");
}
else if (signalColor == "yellow"){
alert ("Yellow : Ready to Move");
}
else if (signalColor == "Green"){
alert ("Green : Move Now");
}  

// question no 4
// Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”

var fuel = +prompt("How many fuel is remaining in your car");

if (fuel >= 0.25){
alert("Please refill the fuel in your car!");
}
else{
alert("Have a great Journey!");
}

// question no 5
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5){     //true
alert(' Given condition of variable a is true');
}

var b = 82;
if (b++ === 83){     //true
alert(' Given condition of variable b is true');
}

var c = 12;
if (c++ === 13){     //true
alert('Condition 1 is true');
}

if (c === 13){     //false
alert('Condition 2 is true');
}

if (++c < 14){     //false
alert('Condition 3 is true')
}

if (c === 14){    //true
alert('Condition 4 is true')
}

var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost;

if (totalCost === materialCost + labourCost){
alert ('The Cost Equal');
}

if (true){
alert('True');
}

if (false){
alert('False');
}

if ( 'car' < 'cat'){
alert('Car is smaller than cat');
}

//question no 6

/*Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute 
grade as per following table:  */

// Marksheet :
// _____________________start_________________________________________
let sub1Marks = +prompt("How many marks do you get in English");
let sub2Marks = +prompt("How many marks do you get in Urdu");
let sub3Marks = +prompt("How many marks do you get in Math");
let subTotalMarks = sub1Marks + sub2Marks + sub3Marks ;

let totalMarks = +prompt("Write Total Marks");

let percentage = ( subTotalMarks / totalMarks) *100;
let percent = Math.floor(percentage);

document.write("<h1>Marksheet</h1>"  + "<br></br>");
document.write("Total Marks : " + totalMarks  + "<br></br>");
document.write("Marks Obtained : " + subTotalMarks + "<br></br>");
document.write("Percentage : " + percent + "%" + "<br></br>");

if (percent >= 80){
  document.write("Grade : A-one" + "<br></br>" + "Remarks : Excellant");
}
else if (percent >= 70){
  document.write("Grade : A" + "<br></br>" + "Remarks : Good");
}
else if (percent >= 60){
  document.write("Grade : B" + "<br></br>" + "Remarks : You Need To Improve");
}
else if (percent < 50){
  document.write("Grade : Fail" + "<br></br>" + "Remarks : Sorry");
}
// ________________________________end_____________________________________________

// q no 7
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// Guessing Number :

var secretNumber = 4;
var userNumber = +prompt("Guess any number from 1 to 10?");

if (userNumber === secretNumber){
  alert("Bingo! Correct Answer");
}
else if(userNumber++ === 6 ){
 alert("Close enough to write answer");
}
else if(userNumber !== secretNumber){
  alert(" So Sorry! Try again");
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

let number = +prompt("Enter your number !");

if (number / 3 ){
  alert(number + " is divisable by 3");
}
else{
  alert(number + " is not divisable by 3 ");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number

// odd or even numbers
let checkNumber = +prompt("Write any number for check the number is even or odd?");

let result = checkNumber % 2;
if (result === 0){
  alert( checkNumber + " is even" );
}
else{
  alert( checkNumber + " is odd");
}

// question no 10
// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = +prompt("How many temperature in your city?");

if (temperature > 40){
  alert("It is too hot outside.");
}
else if (temperature > 30){
  alert("The weather today is normal");
}
else if (temperature > 20){
  alert("Today weather is cool");
}
else if (temperature > 10){
  alert("OMG! Today weather is so cool");
}

// question no 11

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to userNumber.

// calculator 

var numOne = +prompt("Enter your first number?");
var numTwo = +prompt("Enter your second number?");
var operator = prompt("Write a operator which operation do you want to perform eg: (+ - * / % )");

if ( operator === "+" ){
  alert ("Your answer is " + (numOne + numTwo))
}
else if ( operator === "-" ){
  alert ("Your answer is " + (numOne - numTwo))
}
else if ( operator === "*" ){
  alert ("Your answer is " + (numOne * numTwo))
}
else if ( operator === "/"){
  alert ("Your answer is " + (numOne / numTwo))
}
else if ( operator === "%" ){
  alert ("Your answer is " + (numOne % numTwo))
}

// _____________________________________
//           "ENDING" :
// _____________________________________