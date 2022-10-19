// Code goes here!

// const userName = "Max";

// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }

// var age = 30;
// if (age < 20) {
//   var isOld = true;
// }

// ---------------

// const add = (a: number, b: number = 9) => {
//   return a + b;
// };

// const add2 = (a: number, b: number) => a + b;

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector("button");
// button?.addEventListener("click", (e) => console.log(e));

// -------------------

const hobbies = ["sports", "cooking"];
const activeHobbies = ["Hiking", ...hobbies];

console.log(activeHobbies);

const person = {
  firstName: "max",
  age: 22,
};

const copiedPerson = {
  ...person,
};

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3, 7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName: username, age } = person;
