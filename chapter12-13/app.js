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

// q no 5
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// Answer

let greeting;
let time = 15;

if (time < 18 ){
    greeting = ' Good Day! '
}
else{
    greeting = ' Good Evening! '    
}

let hour = +prompt('write a hour in 24 hour format:' , 'from 0-24');
var minutes = +prompt('Writa minutes from 0-59')
if (hour >= 0 && hour <= 24  ){
    alert ('The time in 12-hour clock format is: ' )
}