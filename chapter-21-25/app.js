// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// answer

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = ("Assalam o Alaikum, Good Morning "+ firstName +" " + lastName) ;
// alert(fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// answer

// let favouriteMobile = prompt("Enter your favourite mobile phone model");
// let numLength = favouriteMobile.length;
// document.write("My favourite phone is : "+ favouriteMobile + "<br>" + " Length of string: "+numLength)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// answer

// let str = "Pakistani";
// let findIndex = str.indexOf("n");
// document.write("String : " + str + "<br/>" + " Index of 'n': " + findIndex )

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// answer

// let str = "Hello World";
// let findIndex = str.lastIndexOf("l")
// document.write("String : " + str + "<br/>" + "Last index Of ' l ':" + findIndex)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// answer

// let str = "Pakistani";
// let findIndex = str.charAt(3);
// document.write("String : " + str+ "<br/>" + " Character at index 3 : " +findIndex)

// 6. Repeat Q1 using string concat() method.

// answer

// let firstName = prompt("Enter your first name");
// let lastName = prompt("Enter your last name");
// let fullName = ("Assalam o Alaikum, Good Morning " + firstName + " ".concat(lastName));
// alert(fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// answer

// let city = "Hyderabad";
// let replaceValue = city.replace("Hyder","Islam");
// document.write("City : "+ city + "<br/>" + "After replacment : " + replaceValue)
 
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// answer

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var changingTheValue = message.replaceAll("and","&")
// document.write(changingTheValue);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// answer

// let convert = "472";
// document.write("Value: " + convert + "<br/>" + "TypeOf: " + typeof convert + "<br/>" +  "Value: " + +convert +  "<br/>" +  "TypeOf: " +  typeof +convert)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// answer

// let userInput = prompt("enter your favourite fruit");
// let user = userInput.toLocaleUpperCase();
// document.write("User input : " + userInput + "<br>" + "Upper case : " + user) 

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// answer

// let titleCase = prompt("Enter a word ");
// document.write("User input: " + titleCase + "<br/>" + "Title case: " + titleCase.charAt(0).toUpperCase() + titleCase.slice(1));

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// answer

// var num = 35.36 ;
// document.write("Number : " + num + "<br/>" +  "Result : " + num.toString().replace(".", ""))

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// answer

// let userName = prompt("enter your name: ");

// for(let i=0; i<userName.length; i++){
//     let charCode = userName.charCodeAt(i);
//     if(charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64 ){
//         alert("enter a valid variable");
//         break;
//     }
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// answer

// let bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userAsk = prompt("welcome to ABC Bakery. what do you want to order sir/ma'am?").toLowerCase()

// if(bakkeryItems.includes(userAsk)){
//     alert(`${userAsk} is available at index ${bakkeryItems.indexOf(userAsk)} in our bakkery`)
// }
// else{
//     alert(`We are sorry.${userAsk} is not available in our bakkery`)
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


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

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// let university = "University of Karachi";
// let splitted = university.split('')
// for(let i of splitted){
//     console.log(`${i}`)
// }

// 17. Write a program to display the last character of a user
// input.

// let userinput = prompt("write any word to find last character of word")
// document.write(`User input: ${userinput} <br/> Last character of input ${userinput.charAt(userinput.length-1)}`)

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.



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

























