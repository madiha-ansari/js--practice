// Q no 1
// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = `Assalam o Alaikum, Good Morning ${firstName} ${lastName}`;
//  alert(fullName);

// Q no 2

// let favouriteMobile = prompt("Enter your favourite mobile phone model");
// let numLength = favouriteMobile.length;
// document.write(`My favourite phone is:${favouriteMobile} <br/> Length of string: ${numLength}`)


// Q no 3

// let str = "pakistani";
// let findIndex = str.indexOf("n");
//  document.write(`String: ${str} <br/> Indexof 'n': ${findIndex}`)

// Q no 4
// let str = "Hello World";
// let findIndex = str.lastIndexOf("l")
//  document.write(`String: ${str} <br/> Last indexOf 'l': ${findIndex}`)

// Q no 5


// let str = "pakistani";

// let findIndex = str.charAt(3);

// document.write(`String: ${str} <br/> Character at index 3: ${findIndex}`)


//Q no 6

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = `Assalam o Alaikum, Good Morning ${firstName}`.concat(lastName);
//  alert(fullName);


// Q no 7

// let city = "Hyderabad";
// let changeValue = city.replace("Hyder","Islam");
// document.write(`City: ${city} <br/> After replacment: ${changeValue}`)

// Q no 8


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var changingValue = message.replaceAll("and","&")
// document.write(changingValue);

// Q no 9

//  let convert = "472";
//  document.write(`Value: ${convert} <br/> TypeOf: ${typeof convert} <br/> Value: ${+convert} <br/> TypeOf: ${typeof +convert}`)


// Q no 10

// let userInput = prompt("Enter your favourite nut");
//  let users = userInput.toUpperCase();

//   document.write(`User Input : ${userInput} </br> Upper Case : ${users}`);


// Q no 11


//  let titleCase = prompt("Enter a word ");
//  document.write(`User input: ${titleCase} <br/> Title case: ${titleCase.charAt(0).toUpperCase() + titleCase.slice(1)}`)


// Q no 12

//  var num = 35.36 ;
//  document.write(`Number: ${num} <br/> Result: ${num.toString().replace(".", "")}`)

// Q no 13

// let userName = prompt("enter your name: ");

// for(let i=0; i<userName.length; i++){
//     let charCode = userName.charCodeAt(i);
//     if(charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64 ){
//         alert("enter a valid variable");
//         break;
//     }
// }




// Q no 14

// let bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userAsk = prompt("welcome to ABC Bakery. what do you want to order sir/ma'am?").toLowerCase()

// if(bakkeryItems.includes(userAsk)){
//     alert(`${userAsk} is available at index ${bakkeryItems.indexOf(userAsk)} in our bakkery`)
// }
// else{
//     alert(`We are sorry.${userAsk} is not available in our bakkery`)
// }


// Q no 15


// function isValidPassword(password) {
//     // Check if password is at least 6 characters long
//     if (password.length < 6) {
//         return false;
//     }

//     // Check if the first character is a number
//     if (!isNaN(password.charAt(0))) {
//         return false;
//     }

//     // Check if password contains both alphabets and numbers
//     let hasAlphabet = false;
//     let hasNumber = false;

//     for (let i = 0; i < password.length; i++) {
//         let charCode = password.charCodeAt(i);

//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         }

//         if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

//     return hasAlphabet && hasNumber;
// }

// function getPasswordInput() {
//     let password = prompt("Please enter your password:");

//     while (!isValidPassword(password)) {
//         alert("Invalid password. It must be at least 6 characters long, contain both alphabets and numbers, and not start with a number.");
//         password = prompt("Please enter a valid password:");
//     }

//     alert("Password accepted!");
// }

// getPasswordInput();




// Q no 16
// let university = "University of Karachi";
// let splitted = university.split('')
// for(let i of splitted){
//     console.log(`${i}`)
// }


// Q no 17



// let userinput = prompt("write any word to find last character of word")
// document.write(`User input: ${userinput} <br/> Last character of input ${userinput.charAt(userinput.length-1)}`)

// Q no 18




// let str = "The quick brown fox jumps over the lazy dog";

// // Convert the string to lowercase to ensure case-insensitive matching
// let lowerStr = str.toLowerCase();

// // Use a regular expression to find all occurrences of the word "the"
// let occurrences = lowerStr.match(/\bthe\b/g);

// // Count the number of occurrences
// let count = occurrences ? occurrences.length : 0;

// // Display the result
// console.log(`Number of occurrences of the word "the": ${count}`);
// document.write(`Number of occurrences of the word "the": ${count}`);


