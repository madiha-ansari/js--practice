// Q no 1
// let today = new Date();
// document.write(today);

// Q no 2
// let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","Deember"];
// let month = new Date();
// let result= month.getMonth();
// let currentMonth = monthArray[result]
// alert(`Current Month : ${currentMonth}`);

// Q no 3
// let dayArray = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// let day = new Date();
// let result= day.getDay();
// let currentDay = dayArray[result]
// alert(`Today is ${currentDay}`);

// Q no 4
// // Get the current date
// const currentDate = new Date();
// const currentDayIndex = currentDate.getDay();

// if (currentDayIndex === 0 || currentDayIndex === 6) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }


// Q no 5
// const currentDate = new Date();
// const currentDay = currentDate.getDate();
// if (currentDay < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// Q no 6
// const currentDate = new Date();
// document.write(`Current Date:${currentDate}</br>`)
// const millisecondsSince = currentDate.getTime();
// document.write(`Elapsed miliseconds since midnight, Jan. 1, 1970:${millisecondsSince}</br>`)
// const minutesSince = Math.floor(millisecondsSince / (1000 * 60));
// document.write(`Elapsed minutes since midnight, Jan. 1, 1970: ${minutesSince}`);

// Q no 7
// let today = new Date();
// let hours = today.getHours()%12;
// let minutes = today.getMinutes();
// let ampm;

// if(hours >= 12){
// ampm = "AM";
// }else{
//     ampm = "PM"
// }
// document.write("It's PM")

// Q no 8
// let laterDate = new Date(2020, 11, 31);
// document.write(laterDate);

// Q no 9
// function calculateDaysBetween(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000; // Hours*minutes*seconds*milliseconds
//     const diffInTime = date2.getTime() - date1.getTime();
//     return Math.round(diffInTime / oneDay);
// }
// let firstRamadan = new Date(2015, 5, 18);
// let currentRamadanStartDate = new Date(2024, 2, 10); 
// let daysPast = calculateDaysBetween(firstRamadan, currentRamadanStartDate);
// alert(`Number of days past since 1st Ramadan: ${daysPast}`);

// Q no 10
// function calculateElapsedSeconds(referenceDate) {
//     const beginningOf2015 = new Date('2015-01-01T00:00:00');
// document.write(`On reference date ${beginningOf2015} </br>` )
//     const elapsedMilliseconds =  referenceDate -  beginningOf2015;
//     const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
//     document.write(`Seconds elapsed: ${elapsedSeconds}`);
// }
// const referenceDate = new Date();
// calculateElapsedSeconds(referenceDate);

// Q no 11
// const currentDate = new Date();
// const currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write(`<p>Updated Date and Time: ${currentDate}`);

// Q no 12
// const currentDate = new Date();
// const pastDate = new Date(currentDate);
// pastDate.setFullYear(currentDate.getFullYear() - 100);
// alert(`Date 100 years ago: ${pastDate}`);

// Q no 13
// const age = prompt("Please enter your age:");
// document.write(`Your age is: ${age} </br>`)
//         const currentYear = new Date().getFullYear();
//         const birthYear = currentYear - age;
//         document.write(`Your birth year is: ${birthYear}`);

// Q no 14
//  const customerName = "John Doe";
//  const currentMonth = "July";  
//  const numberOfUnits = 200;  
//  const chargesPerUnit = 15.5;  
//  const latePaymentSurchargeRate = 0.1;  
//  const netAmountPayable = numberOfUnits * chargesPerUnit;
//  const latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate;
//  const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

//  const netAmountPayableRounded = netAmountPayable.toFixed(2);
//  const latePaymentSurchargeRounded = latePaymentSurcharge.toFixed(2);
//  const grossAmountPayableRounded = grossAmountPayable.toFixed(2);

//  document.write(`
//      <p><strong>Customer Name:</strong> ${customerName}
//      <p><strong>Current Month:</strong> ${currentMonth}
//      <p><strong>Number of units:</strong> ${numberOfUnits}
//      <p><strong>Charges per unit:</strong> $${chargesPerUnit.toFixed(2)}
//      <p><strong>Net Amount Payable (within Due Date):</strong> $${netAmountPayableRounded}
//      <p><strong>Late Payment Surcharge:</strong> $${latePaymentSurchargeRounded}
//      <p><strong>Gross Amount Payable (after Due Date):</strong> $${grossAmountPayableRounded}
//  `);
