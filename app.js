//.............................................Rounding numbers......................................





// var a = Math.abs(parseFloat(prompt("Enter any Number")));
// console.log(a)


// var a = 3.45214;
// console.log(a);
// var b = Math.round(a);
// console.log(b);
// var c = Math.ceil(a);
// console.log(c);
// var d = Math.floor(a);
// console.log(d);



// var a = -Math.abs(parseFloat(prompt("Enter any number")));
// console.log(a);


// var a = -2.678;
// console.log(a);
// var b = Math.round(a);
// console.log(b);
// var c = Math.ceil(a);
// console.log(c);
// var d = Math.floor(a);
// console.log(d);









// .....................................Generating random numbers.....................................





// var a = Math.random();
// var b = (a * 6) + 1;
// var c = Math.floor(b);

// console.log(a);
// console.log(b);
// console.log(c)
// document.write("DICE " + c)


// var a = Math.random();
// var b = (a * 2)+1;
// var c = Math.floor(b);
// console.log(a);
// console.log(b);
// console.log(c);
// document.write("Heads = 2 , Tails = 1 " + "<br>" +  c)


// var a = Math.random();
// var b = (a*10)+1;
// var c = Math.floor(b);
// console.log(b);
// console.log(c);

// var d = parseInt(prompt("Enter any number 1-10"));
// console.log(d);


// if (d==c){

//     alert("Correct! Answer")

// }
// else{
//     alert("Wrong! Answer")
// }


// var a = parseInt(prompt("Enter Weight"));
// alert(a)

// var a = parseInt(prompt("Enter your weight"));
// alert(a+"kgs")


// var a = parseFloat(prompt("Enter your weight"));
// alert(a+"kgs")

// var a = parseFloat(prompt("Enter your Weight"));
// alert(a+"kilograms")








// ...................................Converting strings to numbers, numbers to strings....................




// var a = "472";
// console.log(a);
// var b = Number(a);
// console.log(b)
// document.write(a + typeof(a) + " " +  b  + typeof(b))


// var a = 35.36;
// console.log(a)
// var b = a.toString();
// b = b.replace(".","")
// console.log(b)
// document.write(a + typeof(a) + " " + b + typeof(b))


// var a = 30/45*100;
// console.log(a)
// var b = a.toFixed(2);
// console.log(b) 

// .................................DATE METHODS(CHAPTERS 31-34)...........................................



// var a = new Date();
// console.log(a);


// var b = ["January","February","March","April","May","June","July","August","September","October","November","December"]

// alert("Current Month =  " + b[a.getMonth()])


// var b = a.toDateString();
// var c = b.slice(0,3);
// console.log(c)


// var d = a.getDay();
// console.log(d);

// if (d === 0 || d===6){
//     alert("It's Funday")
// }
// else{
//     alert("Working Day")
// }


// var e = a.getDate();
// console.log(e);
// if(e > 15 && e <=31){
//     alert("Last days of the month")
// }
// else if (e <= 15 && e>0){
//     alert("First fifteen days of the month")
// }


// var d = a.getTime();
// console.log(d);
// console.log(Math.floor(d /  60000))
// document.write("Current Time " +a + "<br>" + "Elapsed miliseconds since January-01-1970: " + d + "<br>" + "Elapsed Minutes since January-01-1970 : " + Math.floor(d /  60000))


// var e = a.getHours();
// console.log(e);
// if(e > 12 && e <=24){
//     alert("It's PM")
// }
// else if (e >= 0 && e <=12){
//     alert("It's AM")
// }



// var a = new Date();
// console.log(a)

// a.setMonth(11),a.setDate(31), a.setHours(00), a.setMinutes(00), a.setSeconds(00);
// console.log(a)


// var a = new Date()
// console.log(a);
// var b = new Date("06/18/2015");
// console.log(b);
// var c = a.getTime() - b.getTime();
// console.log(c);
// var d = c/(1000 * 3600 * 24);
// console.log(d);
// var e = Math.round(d);
// console.log(e)

// document.write(e + " Days have passed since 1<sup>st</sup> Ramadan, 2015");



// var a = new Date();
// console.log(a);
// var b = new Date("01/01/2015");
// console.log(b);
// var c = a.getTime() - b.getTime();
// console.log(c);
// var d = c/ 1000;
// console.log(d)

// document.write("On reference Date " + a + " , " + d + " seconds had passed since beginning of 2015");



// var a = new Date();
// console.log(a);

// var b = new Date();
// b.setHours(b.getHours()+1);
// console.log(b);

// document.write("Current Date : " + b + "<br>" + "1 hour ago, it was : " + a)


// var a = new Date();
// console.log(a);
// var b = new Date();
// b.setFullYear(b.getFullYear()-100);
// console.log(b);

// alert("Current Date : " + a);
// alert("100 years back it was : " + b)



// var a = new Date();
// var b = a.getFullYear();
// console.log(b);
// var c = parseInt(prompt("Enter your age"));
// var d = b-c;
// alert("Your age is " + c + "\n" + "Your birth Year is "  + d);



// var a = "ABC Customer"
// var date = new Date();
// var b = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var units = 450;
// var charges = 17;
// var lateCharges = 350;

// document.write("<h1>K-ELECTRIC BILL</h1> Customer Name : " + a + "<br>" + "Month : " + b[date.getMonth()] + "<br>" + "Number of units : "+ units +"<br>" + "Charges per unit : " + charges + "<br>" + 
// "<br> <br> Net Amount Payable in Due Date : " + units*charges + "<br>" + "Late Payment Charges : " +  lateCharges + "<br>" +"Gross Amount Payable (after Due Date) : " + (units*charges+lateCharges) );
