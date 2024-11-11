// console.log("Arham Hussain");
// console.log(123);
// console.log(2+5);
// console.log("Arham","Anas",2);
// console.log("Hello World!");

// let a=10;
// let b=5;
// console.log("The sum is:",a+b);

// template literals
// let n=25;
// let m=5;
// console.log(n);
// console.log(m);
// console.log(`the sum of ${n} and ${m} is ${m+n}. `);

// comparison operator
// let age=18;
// console.log(age>=18);

// conditional statements

// let age=32;
// if(age>=18){
//     console.log("You can drive");
//     let a=5;
//     console.log(age+a);
// }

// practice qss if
// let color="Green";

// if(color==="red") {
//     console.log("Stop!");
// }
// if(color==="yellow"){
//     console.log("Slow Down");
// }
// if(color==="green"){
//     console.log("Go!");
// }

// if elseif

// let color="green";

// if(color==="red") {
//     console.log("Stop!");
//  } else if (color==="yellow") {
//     console.log("Slow Down");
//  }else if (color==="green") {
//     console.log("Go!");
//  }

// let age=24;

// if(age>=18) {
//     console.log("you can vote and drive");
// } else if(age<18){
//     console.log("you cannot vote or drive");
// }


// if else
// let color="yellow";

// if(color==="red") {
//     console.log("Stop!");
//  } else if (color==="yellow") {
//     console.log("Slow Down");
//  }else if (color==="green") {
//     console.log("Go!");
//  }else {
//     console.log("Traffic light is broken");
//  }

// practice qs

// let size='M';

// if(size==='XL'){
//     console.log("Price is Rs 250/-.");
// } else if (size==='L') {
//     console.log("Price is Rs 200/-."); 
// } else if (size==='M') {
//     console.log("Price is Rs 100/-."); 
// } else {
//     console.log("Price is Rs 50/-."); 
// }

// nested if-else

// let marks=12;

// if(marks>=33) {
//     if(marks>=80){
//         console.log(" Grade:O");
//     } else {
//         console.log('Grade:A');
//     }
// } else {
//     console.log("better luck next time");
// }

// logical && and || and !

// let marks=90;

// if(marks>=33 && marks>=80) {
//     console.log("pass");
// } else{
//     console.log("Fail!");
// }

// let marks=50;

// if(marks>=33 || marks>=80) {
//     console.log("pass");
// } else{
//     console.log("Fail!");
// }

// let marks=55;

// if(!(marks<33)) {
//     console.log("A+");
// }else{
//     console.log("Fail!");
// }

// let str="apple";

// if ((str[0]==='a') && (str.length>3)) {
//     console.log("String is good");
// }
// else {
//     console.log("String is not good");
// }

// let num=12;
// if ((num%3===0) && ((num+1==15)|| (num-1==11))) {
//     console.log("safe");
// }
// else {
//     console.log("Unsafe");
// }

// truthy and falsy

// if(NaN){
//     console.log("it has a true value");
// } else {
//     console.log("it has a false value");
// }

// let color="yellow";

// switch(color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("Slow Down!");
//         break;
//     case "green":
//         console.log("Go!");
//         break;
//     default:
//         console.log("Broken light");
// }

// let day=5;

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console,log("Saturday");
//         break;
//     case 7:
//         console,log("Sunday");
//         break;
//     default:
//         console.log("Not a day");
// }

// alert("Something is wrong");
// alert("Danger!");
// console.error("There is an error");
// console.warn("This is a warning");
// let x=prompt("Enter your name");
// console.log(x);

// alert("SOMETHING IS WRONG");
// console.error("this is an error");
// console.warn("this is a warning");

// let firstName=prompt("Enter your name:");
// console.log(firstName);

// let rollno= prompt("enter  your roll no:");
// console.log(rollno);

// let firstName= prompt("Enter first name:");
// let lastName= prompt("Enter last name:");
// let msg="Welcome"+" "+firstName+" "+lastName+"!";
// alert(msg);

// assignment question1

// let num=99;

// if(num%10===0) {
//     console.log("num is good");
// }
// else{
//     console.log("num is bad");
// }

// assignment question2

// let name= prompt("Enter user name:");
// let age= prompt("Enter your age:");

// alert(`${name} is ${age} years old`);

// assignment question3

// let Quarter=10;

// switch(Quarter) {
//     case 1:
//         console.log("January","February","March");
//         break;
//     case 2:
//         console.log("April","May","June");
//         break;
//     case 3:
//         console.log("July","August","September");
//         break;
//     case 4:
//         console.log("October","November","December");
//         break;
//     default:
//         console.log("Not a valid number.")
// }

// assignment question4
// let str="para";

// if (((str[0]==='a')||(str[0]==='A')) && (str.length>5)) {
//     console.log("It is a golden string");
// }
// else {
//     console.log("it is not a golden string");
// }

// assignment question5

// let a=1000;
// let b=90;
// let c=30;

// if((a>b)&& (a>c)) {
//     console.log(`The number ${a} is largest`);
// }
// else if (b>c) {
//     console.log(`The number ${b} is largest`);
// }
// else {
//     console.log(`The number ${c} is largest`);
// }

// assignment question6 log method

// let num1= '1234';
// let num2= '123674';

// if ((num1[num1.length-1])===(num2[num2.length-1])) {
//     console.log(`num1 and num2 has same last digit ${num1[num1.length-1]} `);
//  }
// else {
//     console.log("num1 and num2 doesnot have same last digit");
// }

// assignment question5 pdf method

// let a=10,b=20,c=30;

// if(a>b){
//     if (a>c){
//         console.log(a,"is largest");
//     } else {
//         console.log(c,"is largest");
//     }
// }
// else{
//      if (b>c){
//     console.log(b,"is largest");
//     } else {
//         console.log(c,"is largest");
//     }
// }

// assignment question6 pdf ans remainder method

// let num1=32;
// let num2=47852;

// if(num1%10===num2%10) {
//     console.log("The numbers have same last digit", num1%10);
// }else {
//     console.log("The numbers doesnot have the same last digits");
// }
