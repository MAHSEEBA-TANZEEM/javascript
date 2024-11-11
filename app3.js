// Practice qs1
// let msg="  help!  ";
// let newMsg= msg.trim().toUpperCase();
// console.log(newMsg);

// Practice qs2
// let name="ApnaCollege";
// name.slice(4,9);
// name.indexOf("na");
// name.replace("Apna","Our");

// Practice qs3
// let newName= name.slice(4);
// console.log(newName);
// newName= newName.replace('l','t');
// console.log(newName);


// let a="   Anas   ";
// console.log(a);
// console.log(a.trim());

// let password= prompt("Set your password");
// let newPass= password.trim();
// console.log(newPass);
// console.log(password);

// let str="Random String.";
// let x=str.toUpperCase();
// let y=str.toLowerCase();
// console.log(x);
// console.log(y);

// let name="Mahseeba Tanzeem.";
// let x=name.toUpperCase();
// let y=name.toLowerCase();
// console.log(x);
// console.log(y);

// let str="Mera bada beta Arham Hussain."

// console.log(str.indexOf("beta"));
// console.log(str.indexOf("r"));
// console.log(str.indexOf("b"));
// console.log(str.indexOf("x"));


// method chaining
// let msg="   Arham   ";
// console.log(msg.trim().toUpperCase());

// slice method
// let str="Arham Hussain."
// console.log(str.slice(2)); //str starts from index 2
// console.log(str.slice(2,8)); //str starts from index 2 to 7
// console.log(str.slice(-2)); // str displays last digits of given no
// console.log(str.slice(-8));  

// let msg="hello";
// console.log(msg.slice(0,4));
// console.log(msg.slice(1));
// console.log(msg.slice(1,msg.length));
// console.log(msg.slice(-2));

// replace method
// let str="Mera bada beta Arham Hussain.";
// console.log(str);
// console.log(str.replace("Mera","Tera").replace("bada","chota"));
// console.log(str.replace("bada","chota"));
// console.log(str.replace('m','n'));

// repeat method
// let str1="Waseem";
// console.log(str1.repeat(3));

// arrays
// let students=["Arham","Anas","Waseem"];
// console.log(students);
// console.log(students[0]);
// console.log(students[0][1]);
// console.log(students.length);
// console.log(typeof students);

// arrays are mutable
// let fruits=["Apple","Banana","Mango","Orange","Papaya"];
// console.log(fruits);
// fruits[0]="Jackfruit";
// console.log(fruits[0]);
// console.log(fruits);
// fruits[6]="Watermelon";
// console.log(fruits);

// arraymethods

// let cars=["audi","bmw","maruti"];
// cars.push("toyota"); //adds to last
  

// cars.push("ferrari"); //adds to last 
   
// cars.pop(); //removes last
   
// cars.pop();  //removes last
   
// cars.unshift("toyota"); //adds to first index
   
// cars.unshift("ferrari");  //adds to first index
   
// cars.shift(); // removes first element

// practice qs
// let months=["January","July","March","August"];
// months.shift();
// months.shift();
// months.unshift("June");
// months.unshift("July");

// practice qs2
// let code=["C+","C++","HTML","JavaScript","Python","Java","C#","SQL"];
// console.log(code.reverse().indexOf("JavaScript"));

// array references(memory)
// let arr=["a","b","c"];
// arr=arrCopy;
// arrCopy.push("c");

// constant arrays
// const g=10;
// g=9.8; gives an error
// g=a; gives an error

// nested arrays
// let nums=[[2,3],[4,5,6],[7,8,9,0]];
// (3) [Array(2), Array(3), Array(4)]
// nums[2][3]=0

// let game=[["X",null,"O"],[null,"X",null],["O",null,"X"]];

// assignment questions

// let arr=[7,9,0,-2];
// let n=3;

// let ans=arr.slice(0,n);
// console.log(ans);
// let ans2=arr.slice(arr.length-n);
// console.log(ans2);

// let str=prompt("Enter the string");

// if(str.length==0) {
//     console.log("str is empty");
// }else{
//     console.log("str is not empty:",str);
// }

// let str=prompt("Enter the string");
// let idx=3;

// if(str[idx]==str[idx].toLowerCase()){
//     console.log("Character is lowercase:",str[idx]);
// }else {
//     console.log("Character is Uppercase:",str[idx]);
// }

// let str=prompt("Enter the string");
// console.log(`original string=${str}`);
// console.log(`string without spaces=${str.trim()}`);

// let arr=[1,2,3,4,5];
// let num=0;

// if(arr.indexOf(num)!=-1){
//     console.log("element exists in an array");
// }else {
//     console.log("element doesnot exists in an array");
// }