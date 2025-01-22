// import { apiKey } from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// console.log(apiKey, content);
// import * as util from "./util.js";
// console.log(util.xyz);

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
