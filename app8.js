// forEach 

// let arr = [1,2,3,4,5];

// function print (el) {
//     console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function print (el) {
//      console.log(el);
//     });

// arr.forEach((el) => {
//     console.log(el);
//     });

// array of objects
// let arr = [ {
//        name: "aman",
//        marks: 95
//     },
//     {
//        name: "shradha",
//        marks: 94
//     },
//     {
//        name: "karan",
//        marks: 99
//     }
// ];

// arr.forEach((student)=> {
//     // console.log(student);
//     console.log(student.marks);
// });

// map
// let num= [1,2,3,4];
// let double = num.map(function (el){
//     return el*2;
// });

let nothing = num.map((el)=> {});

let students = [
    {
        name: "aman",
        marks:95
    },
    {
        name: "shradha",
        marks: 93.4
    },
    {
        name: "karan",
        marks: 99
    }
];
let gpa = students.map((el)=>{
    return el.marks/10;
});

// filter
// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((num)=> (num%2==0));

// let ans = nums.filter((el)=> {
//     return el%2==0;
// });

// every
let ans = [1,2,3,4].every((el)=> (el%2==0));

let ans2 = [2,4].every((el)=> (el%2==0));

// some
let ans3 = [1,2,3,4].some((el)=> el%2==0);

let ans4 = [1,3].some((el)=> el%2==0);

// reduce
let ans5 = [1,2,3,4].reduce((res,el)=> res+el);

// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(finalVal);

// maximum in array
// let nums = [2,3,4,5,3,4,7,8,1,2];
// let result = nums.reduce((max,el)=> {
//     if(el>max) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(result);

// let arr = [1,4,2,5,6,7,2,9,2];
// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if(max<arr[i]) {
//         max= arr[i];
//     }
// }
// console.log(max);

// practice qs
// chwck if all numbers in array are multiples of 10 or not

// let nums = [10,20,30,40];

// let ans = nums.every((el)=> el%10==0);
// console.log(ans);

// create a function to fnd the min number in an array

// let nums = [10,20,30,40,5];

// let min= nums.reduce((min,el)=> {
//     if(min<el){
//         return min;
//     } else {
//         return el;
//     }
// });
// console.log(min);

// function getMin(nums) {
//     let min= nums.reduce((min,el)=> {
//         if(min<el){
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return min;
// }

// default parameters
// function sum(a,b=3) {
//     return a+b;
// }

// function sum(a=2,b=4) {
//     return a+b;
// }

// spread
// let arr = [1,2,3,4,5];

// let ans = Math.min(...arr);
// console.log(...arr);// array values
// console.log(arr);// array object

// spread array literals
// let arr = [1,2,3,4,5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd,...even];

// spread object literals
let arr= [1,2,3,4,5];
let obj1 = {...arr};

let data= {
    email:"ironman@yahoo.in",
    password: "abcd"
};

let datacopy = {...data,id:123};

let obj2 = {..."hello"};

// rest
// function sum(...args) {
//     return args.reduce((add,el)=> add+el);
// }

// function sum(...args) {
//     for(let i=0; i<args.length; i++) {
//         console.log("You gave us:", args[i]);
//     }
// }

// function min(a,b,c,d) {
//     console.log(arguments);
// }

// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
//     // arguments.push(1); //error arguments is a collection not an array
// }

// function sum() {
//     return arguments.reduce((sum,el)=> sum+el);// it is not a function
// }

function sum(...args) {
    return args.reduce((sum,el)=> sum+el);
}

// function min(...args) {
//     return args.reduce((min,el)=> {
        // if(min>el) {
        //     return el;
        // } else {
        //     return min;
        // }
//     });
// }

function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min,el)=> {
        if(min>el) {
            return el;
        } else {
            return min;
        }
    });
}

// assignment qs 1
// square and sum the array elements using arrow function and then find average

let nums = [1,2,3,4,5];

const square = nums.map((num)=> num*num);
console.log(square);

let sum=square.reduce((acc,cur)=> acc+cur,0);

let avg = sum/nums.length;
console.log(avg);

// assignment qs2
// create a new array using map function whose each element is equal to the original element plus 5

let numbers = [2,4,6,8,-2,-4];
console.log(numbers.map((number)=> number+5));

// assignment qs3
// create a new array whose elements are in uppercase of words present in the original array

let strings = ["adam","bob","catlyn","donold","eve"];
console.log(strings.map((string)=> string.toUpperCase()));

// assignment qs4
// write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function
// should return a new array wth the original array values and all of the additional arguments doubled

const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map((v)=>v*2)];
let answer1= doubleAndReturnArgs([1,2,3],4,4);
let answer2= doubleAndReturnArgs([2],10,4);

// assignment qs5
// Write a function called mergeObjects that accepts two objects nd returns a new object which contains all the keys and
// values of the first object and second object

const mergeObjects = (obj1,obj2)=> ({...obj1,...obj2});

let answer3 = mergeObjects({a:1,b:2},{c:3,d:4});