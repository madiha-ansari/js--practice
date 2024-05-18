// chapter no 5
// Math Expressions:

// q no 1
document.write("<h4>QUESTION NO 1</h4>");
let num = 3 + 5;
document.write("Sum of 3 and 5 is " + num + "<br></br>");

// Question no 2
document.write("<h4>QUESTION NO 2</h4>");

// subtrsction
var num1 = 3 - 5;
document.write("Substract 3 from 5 is " + num1 + "<br></br>");

// multiplication
var num1 = 3 * 5;
document.write("multiplication 3 from 5 is " + num1 + "<br></br>");

// division
var num1 = 3 / 5;
document.write("division 3 from 5 is " + num1 + "<br></br>");

// modulus
var num1 = 3 % 5;
document.write("modulus 3 from 5 is " + num1 + "<br></br>");

// q 3
document.write("<h4>QUESTION NO 3 </h4>");

let number ;
document.write("Value after varriables declaration is " + number + "<br></br>");

let initialization = 5;
document.write("Initial Value is :" + initialization + "<br></br>");

let inital = 5;
++inital;
document.write("Value after increment is :" + inital + "<br></br>");

let add = 6 +7;
document.write("Value after addition is :" +add + "<br></br>");

let decreament = 24;
document.write("Value after decrement is :" + decreament + "<br></br>")

let remainder = 5;
document.write("The reminder is : " + remainder%4);
// ___________________________________________________

// question 4
document.write("<h4>QUESTION NO 4</h4>");

let ticketPrice = 600;
let ticketQuantity = 5;

let totalPrice = ticketPrice * ticketQuantity;
document.write("Total cost to buy 5 tickets of movie is " + totalPrice + " PKR");

// Question 05
document.write("<h4>QUESTION NO 5</h4>");

let  $1 =  "5 x 1 = " + (5 * 1) + "<br></br>";
let  $2 =  "5 x 2 = " + (5 * 2) + "<br></br>";
let  $3 =  "5 x 3 = " + (5 * 3) + "<br></br>";
let  $4 =  "5 x 4 = " + (5 * 4) + "<br></br>";
let  $5 =  "5 x 5 = " + (5 * 5) +  "<br></br>";
let  $6 =  "5 x 6 = " + (5 * 6) +  "<br></br>";
let  $7 =  "5 x 7 = " + (5 * 7) +  "<br></br>";
let  $8 =  "5 x 8 = " + (5 * 8) + "<br></br>";
let  $9 =  "5 x 9 = " + (5 * 9) +  "<br></br>";
let  $10 = "5 x 10 = " + (5 * 10) + "<br></br>";

document.write($1 + $2 + $3 + $4, $5, $6, $7, $8, $9, $10);
// question no 6
document.write("<h4> Question 06</h4>");

// ___________start coading _____________________
// Step 1: Declare a variable for Celsius temperature
let celsiusTemp = 25; // You can change this value to any other Celsius temperature
// Step 2: Convert Celsius to Fahrenheit using the formula F = (C * 9/5) + 32
let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// Step 3: Convert Fahrenheit back to Celsius using the formula C = (F - 32) * 5/9
let convertedCelsiusTemp = (fahrenheitTemp - 32) * 5/9;
// output
document.write("Original Celsius Temperature: " + celsiusTemp + "°C");
document.write("Converted Fahrenheit Temperature: " + fahrenheitTemp + "°F ");
document.write("Converted Back Celsius Temperature: " + convertedCelsiusTemp + "°C");
// __________end coading______________________________

// question no 7
document.write("<h4> Question 07 </h4>");


document.write("<h4>Shopping Cart</h4>");

let itemOne = 650;
let item1Quantity = 3;
let itemTwo = 100;
let item2Quantity = 7;
var shipCharges = 100;

document.write("Price of item 1 is " + itemOne + "<br></br>" +
 "Quantity of item 1 is " + item1Quantity + "<br></br>" +
    "Price of item 2 is" + itemTwo + "<br></br>" +
    "Quantity of item 2 is " + item2Quantity + "<br></br>" +
    "Shipping Charges" + shipCharges + "<br></br>" + "<br></br>");

let  total = (itemOne * item1Quantity + itemTwo * item2Quantity + shipCharges);
document.write("Total cost of your order is " + total);

// question no 8 

document.write("<h4> Question 08 </h4>");

document.write("<h4> MARK SHEET : </h4>");
let totalMark = 980;
let obtainedMark = 804 ;
let percentage = (totalMark / obtainedMark) * 100;

document.write("Total mark is " + totalMark + "<br></br>");
document.write("Mark obtained is " + obtainedMark + "<br></br>");
document.write("Percentage : " + percentage + "%"  + "<br></br>");

// question no 9
document.write("<h4> Question 09 </h4>");

document.write("<h4> Currency in PKR :  </h4>");
let CurrencyChange = (10 * 104.80) + (25 * 28);
document.write("Total currency in PKR : " + CurrencyChange );


// question no 10 
document.write("<h4> Question 10 </h4>");

var numOne = 50;
document.write(numOne + 5 * 10 / 2);

// Question 11
document.write("<h4>Question 11 </h4>");

document.write("<h4> Age Calculator </h4>");

var currentYear = 2016;
var birthYear = 1992;
document.write("Current Year : " + currentYear + "<br></br>");
document.write("Birth Year : " + birthYear + "<br></br>");

var age = 2016 - 1992;
document.write("Your Age : " + age + "<br></br>");



// Question 12
document.write("<h4>Question 12 </h4>");

document.write("<h4> The Geometrizer </h4>");

let radius = 20;
let circumfrances = 2 * 3.142 * radius ;
let area = 3.142 * (radius * 20);

document.write("Radius of circle is : " + radius + "<br></br>")
document.write("The Circumfrances : " + circumfrances + "<br></br>");
document.write("The Area : " + area + "<br></br>");


// Question 13
document.write("<h4>Question 13 </h4>");

document.write("<h4> The Lifetime Supply Calculator </h4>");

let favouriteSnack = ("Mackroni");
let currentAge = 15 ;
let maximumAge = 65 ;
let estimatedAmount = 3 ;

document.write( "Favourite snack : " + favouriteSnack + "<br></br>");
document.write( "Current age : " + currentAge  +  "<br></br>");
document.write( "Estimated Maximum age : " + maximumAge  +  "<br></br>" );
document.write( "Amount of snack per day : " + estimatedAmount +  "<br></br>");

let  totalAns = "You will need " + ( maximumAge - currentAge) 
* estimatedAmount + " " + favouriteSnack + " to last until you rip the age " + maximumAge ;

document.write(totalAns);