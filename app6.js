// functions

// function hello() {
//     console.log("Hello World!!");
// }

// hello(); 

// function printName() {
//     console.log("Tanzeem");
//     console.log("Waseem");
// }

// printName();

// function print1to5 (){
//     for(let i=1; i<=5; i++) {
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult() {
//     let age=18;
//     if(age>=18) {
//         console.log("adult");
//     } else {
//         console.log("not adult");
//     }
// }
// isAdult();

//print poem
// function printPoem() {
//     console.log("Twinkle Twinkle Little Star");
//     console.log("How I Wonder What You Are!");
//     console.log("Up Above The World So High");
//     console.log("Like A Diamond In A Sky");
// };

// printPoem();

//rollDice
// let rand = Math.floor(Math.random()*6)+1;

// function rollDice() {
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }

// rollDice();

// functions with arguments
// function printName(name) {
//     console.log(name);
// }

// printName("Anas");

// function printInfo(name,age) {
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo("Anas",2);
// printInfo("Arham",5);

// printInfo("karan");
// printInfo("12");

// function sum(a,b) {
//     console.log(a+b);
// }
// sum(1,2);
// sum(4,5);
// sum(7,8);

// function calcAvg(a,b,c) {
//     let avg=(a+b+c)/3;
//     console.log(avg);
// }

// calcAvg(2,4,6);

// function printTable(n) {
//     for(let i=n; i<=n*10; i+=n) {
//         console.log(i);
//     }
// }

// printTable(5);

// return (keyword)
// function sum(a,b) {
//     return a+b;
// }
// let s=sum(3,4);
// console.log(s);
// console.log(sum(sum(1,2),3));

// function sum(a,b) {
//     console.log("hello");
//     console.log("hi");
//     return a+b;
//     console.log("bye");
// }
// console.log(sum(1,2));

// function isAdult(age) {
//     if(age>=18) {
//         return "adult";
//     } else {
//         return "not adult";
//     }
//     console.log("bye");
// }

// function getSum (n) {
//     let sum=0;
//     for(let i=1; i<=n; i++) {
//         sum+=i;
//     }
//     return sum;
// }

// let str=["hi","hello","bye","!"];

// function concat(str) {
//     let result="";

//     for(let i=0; i<str.length; i++) {
//         result+=str[i];
//     }
//     return result;
// }

//function scope
// function calSum(a,b) {
//     let sum=a+b;
// }
// console.log(sum);//error sum is not defined
// calSum(1,2);

// {
//     let a=24;
// }
// console.log(a);//error block scope

// {
//     var a=25;
// }
// console.log(a);//global scope

// for(let i=1; i<=5; i++) {
//     console.log(i);
// }
// console.log(i);//error block scope

// let age=25;
// if(age>=18) {
//     let str="adult";
// }
// console.log(str);//bloxk scope error

// lexical scope
// function outerFunc() {
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }

// function outerFunc() {
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     let x=5;
//     let y=6;
//     innerFunc();
// }

// function outerFunc() {
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         let a=10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a);
//     innerFunc();
// }

// practice qs7
// let  greet= "hello";//global scope

// function changeGreet() {
//     let greet="namaste";//function scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);//lexical scope
//     }
//     innerGreet();//innerGreet should be called inside the outerGreet.
// }
// console.log(greet);
// changeGreet();

// function expressions
// const sum = function(a,b){
//     return a+b;
// }

// let hello= function(){
//     console.log("hello tanzeem");
// }

// higher order functions(take function/s as arguments)
// function multipleGreet(func,n) {
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }
// let greet= function() {
//     console.log("hello");
// }

// multipleGreet(greet,200);

// returns a function
// let odd=function(n) {
//     console.log(!(n%2==0));
// }

// let even=function(n){
//     console.log(n%2==0);
// }

// function oddEvenTest(request) {
//     if(request=="odd") {
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     } else if(request=="even") {
//         return function(n) {
//             console.log(n%2==0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }

// let request="even";

// methods
// const calculator = {
//     add: function(a,b) {
//         return a+b;
//     },
//     sub: function(a,b) {
//         return a-b;
//     },
//     mul: function(a,b) {
//         return a*b;
//     }
// };

// method shorthand
// const calculator= {
//     add(a,b) {
//         return a+b;
//     },
//     sub(a,b) {
//         return a-b;
//     },
//     mul(a,b) {
//         return a*b;
//     }
// };

// assignment ques
// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;

// function getElements (arr,num) {
//     for(i=0;i<arr.length; i++) {
//         if(arr[i]>num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements (arr,num);

// let str="abcdabcdefgggh";

// function getUnique (str) {
//     let ans="";

//     for(let i=0; i<str.length; i++) {
//         let currChar=str[i];
//         if(ans.indexOf(currChar)==-1) {
//             ans+=currChar;
//         }
//     }
//     return ans;
// }

// getUnique(str);

// let country=["Australia","Germany","United States of America"];

// function longestName(country) {
//     let ansIdx=0;
//     for(let i=0; i<country.length; i++) {
//         let ansLen=country[ansIdx].length;
//         let currLen=country[i].length;
//         if(currLen>ansLen) {
//             ansIdx=i;
//         }
//     }
//     return country [ansIdx];
// }
// longestName(country);

// let str="apnacollege";

// function countVowels(str) {
//     let count=0;
//     for(let i=0;i<str.length; i++) {
//         if(
//             str.charAt(i)== "a" ||
//             str.charAt(i)== "e" ||
//             str.charAt(i)== "i" ||
//             str.charAt(i)== "o" ||
//             str.charAt(i)== "u"
//         ) {
//             count++;
//         }
//     }
//     return count;
// }

// let start=100;
// let end=200;

// function generateRandom(start,end) {
//     let diff = end-start;
//     return Math.floor(Math.random() * diff)+ start;
// }