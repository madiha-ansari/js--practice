// Q no 1
// function dateAndTime(){
// let date = new Date();
// console.log(date);
// }
// dateAndTime();

// Q no 2
// let greet = prompt("Enter your first and last name");
// function greetUser(){
//     console.log(`Hii ${greet} welcome!`);
// }
// greetUser();

// Q no 3
// function addTwoNumbers() {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
//     let sum = num1 + num2;
//     document.write( `The sum of ${num1} and ${num2} is ${sum}.`);
// }
// addTwoNumbers();

// Q no 4
// function calculate(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Error: Division by zero";
//             }
//             break;
//         default:
//             result = "Error: Invalid operator";
//     }
//     return result;
// }
// function performOperation() {
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));
//     let operator = prompt("Enter the operator (+, -, *, /):");
//     let result = calculate(num1, num2, operator);
//     document.write(`The result of ${num1} ${operator} ${num2} is ${result}.`);
// }
// performOperation();

// Q no 5
// function square(number) {
//     return number * number;
// }
// function squareNumber() {
//     let num = parseFloat(prompt("Enter a number to square:"));
//     let squaredNum = square(num);
// document.write( `The square of ${num} is ${squaredNum}.`);
// }
// squareNumber();

// Q no 6
// function factorial(n) {
//     if (n < 0) {
//         return "Error: Factorial of a negative number is undefined.";
//     } else if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// function computeFactorial() {
//     // Prompt the user to enter a number
//     const num = parseInt(prompt("Enter a number to compute its factorial:"));
//     // Check if the input is a valid number
//     // Calculate the factorial of the number
//     const fact = factorial(num);
//     // Display the result in the browser
//     document.getElementById('result').innerText = `The factorial of ${num} is ${fact}.`;
// }

// Q no 7
// function displayCounting() {
//     let startNumber = parseInt(prompt("Enter the start number:"));
//     let endNumber = parseInt(prompt("Enter the end number:"));
//     // Check if the inputs are valid numbers
//     if (isNaN(startNumber) || isNaN(endNumber)) {
//         alert("Please enter valid numbers.");
//         return;
//     }

//     let countingArray = [];
//     if (startNumber <= endNumber) {
//         for (let i = startNumber; i <= endNumber; i++) {
//             countingArray.push(i);
//         }
//     } else {
//         for (let i = startNumber; i >= endNumber; i--) {
//             countingArray.push(i);
//         }
//     }
//     document.write( countingArray.join(', '));
// }
// displayCounting();

// Q no 8
// function calculateHypotenus(){
// function calculateSquare(x){
//  return x*x
// }
// var base = +prompt("Enter the base of a right angle triangle")
// var perpendicular = +prompt("Enter the perpendicular of a right angle triangle")
// var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))
// alert("The hypotenuse of a right angle triangle with base" +base+ "and perpendicular" + perpendicular + "is" + hypotenuse)
// }
// calculateHypotenus();

// Q no 9
// function calcAreaAsValues(width, height) {
//     const area = width * height;
//     return area;
// }
// function calcAreaAsVariables(width, height) {
//     const area = width * height;
//     return area;
// }

// function calculateAreaValues() {
//     // Prompt the user to enter width and height as values
//     const width = parseFloat(prompt("Enter the width of the rectangle (values):"));
//     const height = parseFloat(prompt("Enter the height of the rectangle (values):"));

//     // Check if the inputs are valid numbers
//     if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
//         alert("Please enter valid width and height.");
//         return;
//     }

//     // Calculate the area using values
//     const area = calcAreaAsValues(width, height);

//     // Display the result in the browser
//     document.write(`The area of the rectangle (values) is ${area}`);
// }

// function calculateAreaVariables() {
//     // Prompt the user to enter width and height as variables
//     const width = parseFloat(prompt("Enter the width of the rectangle (variables):"));
//     const height = parseFloat(prompt("Enter the height of the rectangle (variables):"));

//     // Check if the inputs are valid numbers
//     if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
//         alert("Please enter valid width and height.");
//         return;
//     }

//     // Calculate the area using variables
//     const area = calcAreaAsVariables(width, height);

//     // Display the result in the browser
//     document.write(`The area of the rectangle (variables) is ${area}`);
// }

// calculateAreaVariables();



// Q no 10
// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     let reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// function checkPalindrome() {
   
//     let inputStr = prompt("Enter a string to check if it's a palindrome:");
// let  result = isPalindrome(inputStr);

//     if (result) {document.write( `"${inputStr}" is a palindrome word.`);
//     } else {document.write( `"${inputStr}" is not a palindrome word.`);
//     }
// }
// checkPalindrome();

// Q no 11

// function capitalizeFirstLetter(str) {
//     const words = str.split(' ');

//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     });

//     return capitalizedWords.join(' ');
// }

// function capitalizeWords() {
    
//     const inputStr = prompt("Enter a string:");

//     const result = capitalizeFirstLetter(inputStr);

//     document.write(`Result: ${result}`);
// }
// capitalizeWords();


// Q no 12

// function getLongestWord(str) {
    
//     const words = str.split(' ');

//     let longestWord = "";

//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// function findLongestWord() {
//     const inputStr = prompt("Enter a string:");

//     const longestWord = getLongestWord(inputStr);

//     document.write( `The longest word is: ${longestWord}`);
// }
// findLongestWord();

// Q no 13
// function countOccurrences(str, letter) {
//     let count = 0;
//     for (let char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// function countLetterOccurrences() {
//     const inputStr = prompt("Enter a string:");
//     const inputLetter = prompt("Enter a letter to count its occurrences:");
//     if (inputLetter.length !== 1) {
//         alert("Please enter a single letter.");
//         return;
//     }
//     const occurrences = countOccurrences(inputStr, inputLetter);
//     document.write(`The letter '${inputLetter}' occurs ${occurrences} times in the string '${inputStr}'.`);
// }
// countLetterOccurrences();

// Q no 14
// function calcCircumference(radius) 
// {
//     const circumference = 2 * Math.PI * radius;
//     return circumference.toFixed(2); // Rounded to 2 decimal places
// }
// function calcArea(radius) 
// {
//     const area = Math.PI * Math.pow(radius, 2);
//     return area.toFixed(2); // Rounded to 2 decimal places
// }
// function calculateProperties() {
//     const radius = parseFloat(prompt("Enter the radius of the circle:"));
//     if (isNaN(radius) || radius <= 0) {
//         alert("Please enter a valid radius.");
//         return;
//     }
//     const circumference = calcCircumference(radius);
//     const area = calcArea(radius);
//     document.write(`The circumference is ${circumference}`);
//     document.write(`The area is ${area}`);
// }
// calculateProperties();
