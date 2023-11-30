"use strict";

let nums = [82, 83, 84, 85, 86];
console.log(nums);
const multiplyBy2 = nums.map(multipliedBy2);
const keepEvens = nums.filter(evensKept);
const skipEvens = nums.filter(evensSkipt);
const logEach = nums.forEach(eachLogged);
function multipliedBy2(num) {
  return num * 2;
}

function evensKept(num) {
  return num % 2 === 0;
}

function evensSkipt(num) {
  return num % 2 !== 0;
}

// function eachLogged(num) {
//   for (let index = 0; index < 1; index++) {
//     console.log(num);
//   }
// }

function eachLogged(num) {
  console.log(num);
}
