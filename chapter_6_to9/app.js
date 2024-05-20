/*Write a program to take a number in a variable, do the 
required arithmetic to display the following result in your 
browser:  */

// question no 1
let a = 10;

document.write("<h1>Question 01</h1>");

document.write("<h2> Result :</h2>");
document.write("The value of a is :" + a);
document.write("<br>................................................................</br>");
document.write("<br> The value of ++a is :" + ++a + "<br> Now the value of a is :" + a);
document.write("<br><br><br> The value of ++a is :" +a++ + "<br> Now the value of a is :" + a);
document.write("<br><br><br> The value of --a is :" +  --a + "<br> Now the value of a is :" + a);
document.write("<br><br><br> The value of a-- is :" + a-- + "<br> Now the value of a is :" + a);


// question no 2
/*What will be the output in variables a, b & result after 
execution of the following script: 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; */

/*var a = 2; //1
var b = 1; // 0 , 1 , 0
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  + 1
//               1     +    2
//                     3

document.write("a = " + a);
document.write("<br>b = " + b);
document.write("<br>result = " + result);*/

//question-3
/*Write a program that takes input a name from user & 
greet the user. */

let name = prompt("Enter your name ");
let greet = alert(`Hellow ${name} Have a good day !`);

//question-4
/*Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default. */

let table = prompt("Enter a table number");

document.write("<h2> TABLE OF " + table + "</h2>");

document.write(table + " x " + " 1   " + "   = " + table * 1);
document.write("<br>" + table + " x " + " 2 " + " = " + table * 2);
document.write("<br>" + table + " x " + " 3 " + " = " + table * 3);
document.write("<br>" + table + " x " + " 4 " + " = " + table * 4);
document.write("<br>" + table + " x " + " 5 " + " = " + table * 5);
document.write("<br>" + table + " x " + " 6 " + " = " + table * 6);
document.write("<br>" + table + " x " + " 7 " + " = " + table * 7);
document.write("<br>" + table + " x " + " 8 " + " = " + table * 8);
document.write("<br>" + table + " x " + " 9 " + " = " + table * 9);
document.write("<br>" + table + " x " + " 10 " + " = " + table * 10);

// question no 5

let subOne = prompt("Enter your first subject name", "Physic");
let subTwo = prompt("Enetr your second subject name", "Computer");
let subThree = prompt("Enetr your third subject name", "maths");
let totalMarksEachSubject = 100;

let subOneObtainedMarks = +prompt("Enter your " + subOne + " Obtained Marks");
let subTwoObtainedMarks = +prompt("Enter your " + subTwo + " Obtained Marks");
let subThreeObtainedMarks = +prompt("Enter your " + subThree + " Obtained Marks");

let totalMarks = 300;

totalMarksObtained = subOneObtainedMarks + subTwoObtainedMarks + subThreeObtainedMarks;

let eachsubjectPercentage1 = (subOneObtainedMarks / totalMarksEachSubject) * 100;
let eachsubjectPercentage2 = (subTwoObtainedMarks / totalMarksEachSubject) * 100;
let eachsubjectPercentage3 = (subThreeObtainedMarks / totalMarksEachSubject) * 100;
let allSubjectPercentage = (totalMarksObtained / totalMarks) * 100;

document.write(`<table border="1" style="width: 50%; margin: 0 auto; text-align: center;">
<tr>
      <th>Subject</th>
      <th>Obtained Marks</th>
      <th>Total Marks</th>
      <th>Percentage %</th>
</tr>
    
<tr>
      <td>${subOne}</td>
      <td>${totalMarksEachSubject}</td>
      <td>${subOneObtainedMarks}</td>
      <td>${eachsubjectPercentage1}%</td>
</tr>

<tr>
      <td>${subTwo}</td>
      <td>${totalMarksEachSubject}</td>
      <td>${subTwoObtainedMarks}</td>
      <td>${eachsubjectPercentage2}%</td>
</tr>

<tr>
      <td>${subThree}</td>
      <td>${totalMarksEachSubject}</td>
      <td>${subThreeObtainedMarks}</td>
      <td>${eachsubjectPercentage3}%</td>
</tr>
 
<tr>
      <th colspan="2">Total Marks Obtained</th>
      <td>${totalMarksObtained}</td>
</tr>

<tr>    
      <th colspan="2">Overall Total Marks</th>
      <td>${totalMarks}</td>
</tr>

<tr>
      <th colspan="3">Percentage</th>
      <td>${allSubjectPercentage.toFixed(2)}%</td>
</tr>

</table>`);


// +++++++++++++++++++++***********************____________________________________
//                      ENDING COADING :
// +++++++++++++++++++++***********************____________________________________