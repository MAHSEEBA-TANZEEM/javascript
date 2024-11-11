// PART 4 JAVASCRIPT

// for loop
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// backward for loop
// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// even
// for(let i=2; i<=20; i=i+2){
//     console.log(i);
// }


// odd
// for(let i=1; i<=20; i=i+2){
//     console.log(i);
// }

// multiplication table
// let n=4;

// for(let i=1; i<=10; i++){
//     console.log(i*n);
// }

// for(let i=5; i<=50; i=i+5) {
//     console.log(i);
// }

// let n=prompt("Enter the number");
// n=parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// nested for loop
// for (let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// let i=0;
// while(i<=20){
//     console.log(i);
//     i++;
// }

// let i=0;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

// let i=1;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

// break keyword
// let i=1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// favorite movie
// const favMovie= "avatar";
// let guess=prompt("Guess my favorite movie");

// while((guess != favMovie) && (guess!="quit")) {

//     guess=prompt("wrong guess please try again!");
// }
// if (guess==favMovie) {
//     console.log("congrats");
// } else {
//     console.log("Quit");
// }

// const favMovie= "avatar";
// let guess=prompt("Guess my favorite movie");

// while(guess != favMovie){
//     if(guess=="quit"){
//         console.log("You Quit");
//         break;
//     }
//     guess=prompt("wrong guess please try again!");
// }

// if (guess==favMovie) {
//     console.log("congrats!!");
// }

// loops with arrays

// let fruits=["mango","apple","banana","litchi","orange"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// for(let i=(fruits.length-1); i>=0; i--){
//     console.log(i,fruits[i]);
// }

//nested loops with nested arrays

// let heroes= [["ironman","spiderman","thor"],["superwoman","wonderwoman","flash"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(`list ${i}`);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let heroes= [["ironman","spiderman","thor"],["superwoman","wonderwoman","flash"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }

// let student=[["aman",95],["shradha", 94.4],["karan",100]];

// for(let i=0; i<student.length; i++) {
//     for(let j=0; j<student[i].length; j++) {
//         console.log(student[i][j]);
//     }
// }

// for of loop
// let fruits=["apple","orange","papaya","banana","litchi"];

// for(fruit of fruits) {
//     console.log(fruit);
// }

// for (char of "apnacollege") {
//     console.log(char);
// }

// nested for of loops
// let heroes= [["ironman","spiderman","thor"],["superwoman","wonderwoman","flash"]];

// for(hero of heroes){
//     for(item of hero){
//         console.log(item);
//     }
// }

// qs1 delete 2 occurences
// let arr=[ 1,2,3,4,5,6,2,3];
// console.log(arr);
// let num=2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     } 
// }
// console.log(arr);

// qs2 find no of digits

// let num=0;
// console.log(num);
// let count=0;

// if (num === 0) {
//     count = 1;
//  } 
// let copy=num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// qs3 sum of digits

// let num=287152;
// console.log(num);
// let sum=0;

// let copy=num;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

// qs4 factorial of number

// let n=5;
// let fact=1;

// for( let i=1; i<=n; i++){
//     fact*=i;
// }
// console.log(`factorial of ${n} is ${fact}`);

// qs5 largest no in an array

// let arr=[2,5,10,4,2,7,1,9];
// console.log(arr);
// let largest=0;

// for(let i=0; i<=arr.length; i++) {
//     if(largest<arr[i]){
//         largest=arr[i];
//     }
// }
//     console.log(largest);
