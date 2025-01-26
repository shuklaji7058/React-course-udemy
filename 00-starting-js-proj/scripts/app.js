import { apiKey } from "./util.js";
import { apiKey, abc as content } from "./util.js";
console.log(apiKey, content);
import * as util from "./util.js";
console.log(util.xyz);

// import { xyz } from "./util.js";
// console.log(xyz);

// //let
// let userMeassage = "Anish Shukla";
// console.log(userMeassage);
// console.log(userMeassage);

// //const
// let clientMeassage = "Ravi Shukla";
// console.log(clientMeassage);
// console.log(clientMeassage);

// //operators

// // console.log(10===5);
// if (10 === 10) {
//   console.log("works");
// }

//Fuctions

// function greet() {
//   console.log("Anish");
// }
// greet();

function createGreeting(userName, meassage) {
  // console.log(userName);
  // console.log(meassage);
  return "Hi, I am " + userName + " " + meassage;
}
// greetUser("Shukla");
// greetUser("Ravi", "Shukla");
const greeting1 = createGreeting("Anish", "shukla");
console.log(greeting1);
const greeting2 = createGreeting("Ravi", "Hello, what's up?");
console.log(greeting2);

// Arrow fuction
export default (userName, message) => {
  console.log("hello");
  return userName + message;
};

// (userName)=>{anihs} instead of this
// userName=>{anihs} you could write this

// userName,userAge=>{ansih} not omit paranthesis
// (userName, userAge) => {anihs} omit paranthesis

// Instead of
// number => {
//   return number * 3;
// }

// you could write
// number => number * 3;

// The following code would be invalid:
// number => return number * 3; // invalid because return keyword must also be omitted!
// number => if (number === 2) { return 5 }; // invalid because if statements can't be returned

// invalid code:
// number => { age: number }; trying to return an object

// the code would need to be adjusted like this:
// number => ({ age: number });  wrapping the object in extra parentheses

//Object & classes
// const person = {
//   name: "Anish",
//   age: 21,
//   number: 123456789,
//   greet() {
//     console.log("Hello");
//     console.log(this.name);
//   },
// };
// console.log(person.number);
// person.greet();

// //Blueprint
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }
// const person1 = new Person("ANISH", 21);
// console.log(person1);
// person1.greet();

//Arrays
const watching = ["Cricket", "Football", "Kabbadi"];
console.log(watching[1]);

watching.push("Hockey");
console.log(watching);

const index = watching.findIndex((item) => item === "Cricket");
console.log(index);

const editWatching = watching.map((item) => item + "!");
console.log(editWatching);

//Desctructuring
// const [firstName, lastName] = ["Anish", "Shukla"];

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];
// console.log(firstName, lastName);
// const { name: userName, age } = {
//   name: "Anish",
//   age: 21,
// };
// console.log(userName, age);

//Spread operator
const hobbies = ["Learning", "Playing"];
const user = {
  name: "Anish",
  age: 21,
};

let newHobies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobies];
console.log(mergedHobbies);

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);

// control structure
// const Password = prompt("Enter passsword");
// if (Password === "Anish") {
//   console.log("Granted");
// } else if (Password === "anish") {
//   console.log("Granted");
// } else {
//   console.log("Not Granted");
// }

// const password = ["Anish", "anish"];
// for (const pass of password) {
//   console.log(pass);
// }

// const list = document.querySelector("ul");
// list.remove();

//Using a function as a value
// function handleTimeout() {
//   console.log("Timeout!");
// }
// const handleTimeout2 = () => {
//   console.log("Timeout..again!");
// };
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 2500);
// setTimeout(() => {
//   console.log("More time out..");
// }, 3000);

// function greeter(greetFn) {
//   greetFn();
// }
// greeter(() => console.log("Hi.."));

// //Function inside of function
// function init() {
//   function greet() {
//     console.log("Hi..");
//   }
//   greet();
// }
// init();

// Array function
const words = [2, 4, 7, 9, 14, 11];
const result = words.findIndex((word) => word > 12);
console.log(result);

const error = [2, 4, 7, 9, 19, 11];
const find = error.find((element) => element > 10);
console.log(find);
//output:19

const array1 = ["a", "b", "c", "d"];
const array2 = ["e", "f", "g", "h"];
const array3 = array1.concat(array2);
console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
