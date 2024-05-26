// 5 assignment
// ARRARY:

// 1. Declare an empty array using JS literal notation to store
// student names in future.
let studentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
let studName = new Array();

// 3. Declare and initialize a strings array.
let bestFiend = ["Kahtija","Fatima","zainab","uamaima"];

// 4. Declare and initialize a numbers array.
let numberArrary = [5,10,15,20,25];

// 5. Declare and initialize a boolean array.
let booleanArrary = [true,false,true,false];

// 6. Declare and initialize a mixed array.
let mixedArrary = ["madiha",5,true];

/* 7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:*/

let qualifications = ["SSC","HCS","BCS","BS","BCOM","MS","M.Phil.","PhD"];

document.write("<h1>Qualifications</h1>")

document.write("<h1> 1)",qualifications[0],"<br> 2)",qualifications[1],"<br> 3)",qualifications[2],
"<br> 4)",qualifications[3],"<br> 5)",qualifications[4],"<br> 6)",qualifications[5],"<br> 6)",qualifications[6],"<br> 7)",qualifications[7]);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let students = ["Khatija", "fatima", "Zainab"];
let score = [320, 230, 480];
let totalScore = 500;

let percentageStudent1 = (score[0] / totalScore) * 100;
let percentageStudent2 = (score[1] / totalScore)* 100;
let percentageStudent3 = (score[2] / totalScore) * 100;

document.write("<h1>Score of " + students[0] + " is " + score[0] + " and Percentage: " + percentageStudent1 + "%" );
document.write("<h1>Score of " + students[1] + " is " + score[1] + " and Percentage: " + percentageStudent2 + "%" );
document.write("<h1>Score of " + students[2] + " is " + score[2] + " and Percentage: " + percentageStudent3 + "%" )

/* 9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then

Arrays | JAVASCRIPT

Page 3 of 6
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */

// step no 1
let colorNames = ["pink","yellow","brown","black","white","skin"];
document.write("<h1> <br><br>  Arrary " + colorNames);

// step no 2
let userColor = prompt("Which color do you want to add to the begining?");
colorNames.unshift(userColor);
document.write("<h2>first Updated Array " + colorNames);

// step no 3
let lastUserColor = prompt("Which color do you want to add to the end?");
colorNames.push(lastUserColor);
document.write("<h2>Second Updated Array " + colorNames);

// step no 4
colorNames.unshift(" orange", " green ");
document.write("<h2>Third Updated Array " + colorNames);

// step no 5
colorNames.shift();
document.write("<h2>Forth Updated Array " + colorNames);

// step no 6
colorNames.pop();
document.write("<h2>Fifth Updated Array " + colorNames);

// step no 7
let colorIndex = prompt("Which index do you want to add color?");
let colorInputName = prompt("Which color do you want to add?");

// step no 8
colorNames.splice(colorIndex , 0 , colorInputName);
document.write("<h2>Sixth Updated Array " + colorNames.join(", "));

// step no 9
let colorInputIndexDelete = prompt("Which index do you want to delete color?");
let colorInputDelete = prompt("How many colors do you wants to delete?");

// step no 10
colorNames.splice(colorInputIndexDelete , colorInputDelete );
document.write("<h2>Seventh Updated Array " + colorNames);
// _____________end this question _____________

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let scores = [320, 230, 480, 450, 120];
document.write("<h2> <br><br> Scores of Students : " + scores);
document.write("<br>Ordered Scores of Students : " + scores.sort());

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi","Lahore","Islamabad","Queeta","Peshware"];
document.write("<br><br> Cities Lists :" + "<br>" + cities);

let selectedCities = ["Islamabad","Queeta"];
document.write("<br><br> Selected Cities Lists :" + "<br>" + selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let arr = ["This", " is", " my", " cat"];
document.write("<h1>Array: " + arr);
document.write("<br>String: " + arr.join(" "));
document.write("<br>String: " + arr.join("-"));
document.write("<br>String: " + arr.join("_"));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let newArray = [];

newArray.push("Keyboard");
newArray.push("Mouse");
newArray.push("Printer");
newArray.push("Monitor");

document.write("<h1>Devices: <br>" + newArray);

let removeFiFo1 = newArray.shift();
let removeFiFo2 = newArray.shift();
let removeFiFo3 = newArray.shift();
let removeFiFo4 = newArray.shift();

document.write("<br><br> <h1> Out: <br>" + removeFiFo1 + "<br> Out: <br>" + removeFiFo2 + "<br> Out: <br>" + removeFiFo3 + "<br> Out: <br>" + removeFiFo4);

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// Answer
// let emptyArray = [];

// emptyArray.push("Keyboard");
// emptyArray.push("Mouse");
// emptyArray.push("Printer");
// emptyArray.push("Monitor");

// console.log(emptyArray);
// document.write("<h2>Devices: <br>" + emptyArray);

// let removeFiFo1 = emptyArray.pop();
// let removeFiFo2 = emptyArray.pop();
// let removeFiFo3 = emptyArray.pop();
// let removeFiFo4 = emptyArray.pop();

// document.write("<br><br> Out: <br>" + removeFiFo1 + "<br> Out: <br>" + removeFiFo2 + "<br> Out: <br>" + removeFiFo3 + "<br> Out: <br>" + removeFiFo4);*/

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// Answer
let phoneManufacturers = ["Apple", "Samsung"," Motorola"," Nokia", "Sony" , "Haier"];
document.write('<label for="manufacturers">Choose a phone manufacturer:</label>');
document.write('<select id="manufacturers" name="manufacturers">');
document.write('<option value="' + phoneManufacturers[0] + '">' + phoneManufacturers[0] + '</option>');
document.write('<option value="' + phoneManufacturers[1] + '">' + phoneManufacturers[1] + '</option>');
document.write('<option value="' + phoneManufacturers[2] + '">' + phoneManufacturers[2] + '</option>');
document.write('<option value="' + phoneManufacturers[3] + '">' + phoneManufacturers[3] + '</option>');
document.write('<option value="' + phoneManufacturers[4] + '">' + phoneManufacturers[4] + '</option>');
document.write('<option value="' + phoneManufacturers[5] + '">' + phoneManufacturers[5] + '</option>');
document.write('</select>');
// ending coading
