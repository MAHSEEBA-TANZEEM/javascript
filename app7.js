// this keyword
// const student = {
//     name :"shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy)/3;
//         // console.log(avg);
//         console.log(this);
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }

// }

// try and catch
// console.log(a); //error
// try {
//     console.log(a);
// } catch {
//     console.log("variable a is not defined"); //no error
// }

// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch (err) {
//     console.log("caught an error... a is not defined");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");

// arrow functions

// const sum = (a,b) => {
//     console.log(a+b);
// }

// const cube= (n) => {
//     return (n*n*n);
// }

// const pow = (a,b) => {
//     return a**b;
// }

// const hello =() => {
//     console.log("hello");
// }

// implicit functions

// const hello = () => console.log("hello world");

// const sum =(a,b) => a+b;
// const mul =(a,b) => a*b;
// const cube =(n) => n*n*n;

// set Timeout function
// console.log("hi there!");

// setTimeout (() => {
//     console.log("Apna College");
// },4000);

// console.log("welcome to");

// set Interval function
// let id = setInterval (() => {
//     console.log("Apna college");
// },2000);

// set interval function
// let id = setInterval(()=> {
//     console.log("Apna College");
// },2000);
// console.log(id);

// let id2 = setInterval(()=> {
//     console.log("Hello World");
// },3000);
// console.log(id2);

// this with arrow function
// const student = {
//      name : "aman",
//      marks : 95,
//      prop: this
// };

// const student = {
//     name : "aman",
//     marks : 95,
//     prop: this,
//     getName : function() {
//         console.log(this);
//         return this.name;
//     },
//     getMarks : () => {
//         console.group(this);
//         return this.marks;
//     },
//     getInfo1 : function() {
//         setTimeout(()=> {
//             console.log(this);
//         },2000);
//     },
//     getInfo2 : function() {
//         setTimeout(function() {
//             console.log(this);
//         },2000);
//     }
// };

// practice qs1
// write an arrow function that returns square of number n

// const square = (n) => n*n;

// practice qs2
// write a function that prints" Hello World" 5 times at intervals of 2s each

// let id = setInterval (()=> {
//     console.log("Hello World");
// },2000);

// setTimeout(()=> {
//     clearInterval(id);
//     console.log("clear interval ran");
// },10000);

// assignment qs1
// write an arrow function named arrayAverage that accepts an array of numbers and returns the average
// of those numbers

// const arrayAverage = (arr)=> {
//     let total = 0;
//     for(let number of arr) {
//         total+= number;
//     }
//     return total /arr.length;
// };

// let arr=[5,5,5];
// // let arr = [1,2,3,4,5,6];
// console.log(arrayAverage(arr));

// assignment qs2
// write an arrow function named isEven() that takes a single number as argument and returns if it is even 
//  or odd

// const isEven = (num) => num%2 === 0;

// assignment qs3
// what is the output of following code

// const object = {
//     message : "Hello World!",
//     logMesssage () {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMesssage,1000);

// assignment qs4
// what is the output of following code

// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length : 5,
//     method(callback) {
//         callback();
//     },
// };
// object.method(callback);
// doubt