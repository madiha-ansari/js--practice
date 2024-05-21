// q no 1
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// Answer:

// let input = prompt("Write a character that checked your character is a number or latter or not valid:");

// if (!isNaN(input)){
//     alert(input + " is a number")
// }
// else if (input >= "A" && input <= "Z"){
//     alert(input + " is an UpperCase Letter")
// }
// else if (input >= "a" && input <= "a"){
//     alert(input + " is an LowerCase Letter")
// }
// else {
//     alert(input + " is not a valid character");
// }


// q no 2
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// Answer :
// start 
let num1 = +prompt("Enter your first number that i check your number is larger or smaller"); 
var num2 = +prompt("Enter your  second number that i check your number is larger or smaller"); 

if (num1 > num2){
    alert (num1 + " is larger than " + num2);
}
else if (num1 < num2 ){
    alert (num1 + " is smaller than " + num2);
}
else if (num1 = num2){
    alert (num1 + " is equal to" + num2);
}
// end


// q no 3
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// Answer
// start
let userNumber = +prompt("Enter a number i am Check your number is positive or negative:");

// conditions
if (userNumber < 0){
    alert(userNumber + " is nagative number ");
}
else{
    alert(userNumber + " is positive number ");
}
// end


// q no 4
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// Answer
// start
// let vowelLetter = prompt('Write a letter i am check your letter is vowel or not:')
// let vowel = 'a ' + 'e' + 'i' + 'o' + 'u' + 'A' + 'E' + 'I' + 'O' + 'U';

// if (vowelLetter === vowel){
//     return true;
// }
// else{
//     return false;
// }
// end


//question-5
/*Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.  Validate the two passwords: 
i. Check if user has entered password. If not, then 
give message “ Please enter your password” 
ii. Check if both passwords are same. If they are 
same, show message “Correct! The password you 
entered matches the original password”. Show 
“Incorrect password” otherwise. */

// answer
var password = "madihaansari514";
var userInput = prompt("Enter a password");

if (userInput == "") {
    alert("please enter your a password!")
} else if (userInput === password) {
    alert("password is correct")
} else {
    alert("password is incorrect")
}

//question-6
/*This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else 
greeting = "Good evening"; 
} */

// Answer

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"}
// else {greeting = "Good evening"};


//question-7
/*Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements  */
// Answer
var userInput = +prompt("Enter the time in 24 hours clock format");

if (userInput >= 0 && userInput <=1200) {
    alert("Good Morning, Have a Good Day!")
}
else if(userInput >= 1200 && userInput <= 1700){
    alert("Good Afternoon! Can you go with me for a lunch?")
}
else if(userInput >=1700 && userInput <= 2000){
    alert("Good Evening, You Should Take Tea!")
}
else if(userInput >= 2000 && userInput <= 2400){
    alert("Good Night, Have a sweet Dreams!")
}
else{
    alert("please enter a 24 hours clock format!")
}

//_______________________ending coading_______________________________________________