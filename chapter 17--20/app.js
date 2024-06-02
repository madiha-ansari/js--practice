// LOOPS AND ARRARY
// assignment

// _______________________________________start______________________________________________________
// Question 1
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var emptyArrary = [[], []];

// Question 2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var matrixFormArrary = [["0 1 2 3"], ["1 0 1 2"], ["2 1 0 1"]];
document.write(matrixFormArrary[0] ,"<br>" , matrixFormArrary[1],"<br>", matrixFormArrary[2]);

// Question 3
// 3. Write a program to print numeric counting from 1 to 10.

// for (let i=1; i<= 10; i++) {
// console.log(i);
// };

// Question 4
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

document.write('<center> <h1> Multiplication of table of 2  </h1> </center>');
document.write('<center> <h1>Length 15 </h1> </center>');

var table = +prompt("Enter a number to multiplication of table");
var tableLength = +prompt("Enter the length of multiplication of table");

for(i = 1; i <= tableLength; i++){
document.write( "<center>" + table + '   X  ' + i + '  =   ' + table*i + '<br>' + "</center>");
}

// Question 5
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// fruits arrary
var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry'];

// Line by line fruits name
for(i = 0; i<fruits.length; i++ ){
document.write("<b>" + fruits[i] + '<br>' + "</b>"  );
}

document.write("<br><br>");

//line by line fruits index
for( i = 0; i<fruits.length; i++){
document.write("<b>" + 'Element at index  ' + i + ' is ' + fruits[i] + '<br>'+ "</b>");
}

// Question 6
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//counting
document.write("<h2>Counting:</h2>");
var counting= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for(i=0; i<counting.length; i++){
document.write(counting[i] + ", ");
};

//reverse counting
document.write("<h2>Reverse Counting:</h2>");
for(i=10; i >= 1; i--){
document.write([i] + ", ")
};

//even 
document.write("<h2>Even:</h2>");
var even= [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for(i=0; i<even.length; i++){
document.write(even[i] + ", ");
};

//odd
document.write("<h2>Odd:</h2>");
var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for(i=0; i<odd.length; i++){
document.write(odd[i] + ", ")
};

//Series
document.write("<h2>Series:</h2>");
var series =[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for(i=0; i<series.length; i++){
document.write(series[i] + "k, ")
};

// Question 7
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var bakeriesItem = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var index = bakeriesItem.indexOf(userInput);

if(bakeriesItem.includes(userInput)){
alert(`${userInput} is available at index ${index} in our bakery`)
}
else{
alert(`${userInput} is not available in our bakery`)
};

// Question 8
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
document.write("<h2>" +"<br><br>" + 'Array items: '+ A + "</h2>");
document.write("<h2>" + '<br> The largest number is: '+ Math.max(...A) + "</h2>");
 
// Question 9
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];

document.write("<h2>" +"<br><br>" + 'Array items: '+ A + "</h2>");
document.write("<h2>" + '<br> The Smallest number is: '+ Math.min(...A) + "</h2>" + '<br><br>');
 
// Question 10
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for (let i = 1; i <= 100; i++) {
if (i % 5 === 0) {
document.write( i + ",");
}
};

// ________________________________end___________________________________________