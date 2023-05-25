//11 delete

const user = {
  firstName: 'Dylan',
  lastName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God',
};

delete user.firstName;

// A better approach would

// user.firstName = '';

console.log(user.hasOwnProperty('firstName'));
console.log(user);

//12 Object Notation  What are a few different ways of accessing properties on an object

const user2 = {
  firstName: 'BoB',
  lastName: 'Justin',
  age: 54,
  nickName: 'Julio',
};

console.log(user2.lastName);
console.log(user2['nickName']);

for (let property in user2) {
  console.log(user2[property]);
}

// James Quick

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

const charactersByEyeColor = characters.reduce((acc, character) => {
  const color = character.eye_color;

  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
console.log(charactersByEyeColor);

// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

// function nameScore(name) {
//   const score = [...name].reduce((a, c) => a + scores[c], 0);
//   if (score <= 60) return 'NOT TOO GOOD';
//   if (score <= 300) return 'PRETTY GOOD';
//   if (score <= 600) return 'VERY GOOD';
//   return 'THE BEST';
// }

function nameScore(name) {
  const score = [...name].reduce((a, c) => a + scores[c], 0);

  return score;
}

//can do use bracket notation for dynamic object keys

// const hasFirstName = true;
// let nameKey = hasFirstName ? 'firstName' : 'name'
// let person = {};
// person[nameKey] = 'Ganesh';
// person['age'] = 30

// person; //{firstName: "Ganesh", age: 30}

//13. What does use strict do?

// 'use strict';  when enabled at the top of the js will throw an error for situations like below, as a linter will just make suggestions:

//prevent globally assigned variables
// x = 10;

//deleting variable like so

// delete x

// same name params
// function name(param1, param 1) {

// }

//14  What is an anonymous function?

function add(num1, num2) {
  return num1 + num2;
}

const add2 = function (num1, num2) {
  return num1 + num2;
};

// What is a callback?
const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((number) => number + 3);
const arr3 = arr.map(add5);

function add5(val) {
  return val + 5;
}

console.log(arr2);
console.log(arr3);

// Closure?
//setting counter in the global scope, someone could reset it and throw the whole code off
// let counter = 0;
// function add1(num) {
//   counter++;
//   return counter;
// }

//ex. closure with an IIFE
const add1 = (function () {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

console.log(add1());
console.log(add1());
console.log(add1());

//Jonas example
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//must call () twice with function in function.
// secureBooking()();

//or you can do it this way, which the variable contains an invoked function.
const booker = secureBooking();

//then you call it again like so
booker();
booker();
booker();

//17. What are some naming conventions you have followed in JS?

//Search, readable, understandalbe

//ex. 1  BAD Code
// function factorialize(num) {
//   let COUNT = num;

//   if (COUNT === 0) {
//     return 1;
//   }

//   for (let i = 1; i < COUNT; i++) {
//     num = num * 1;
//   }
// }

//W

function factorialize(num) {
  //bad name
  // let totalMultiplications = num;

  //good name
  let factorialTotal = num;
  if (num === 0) {
    return 1;
  }

  for (let i = 1; i < COUNT; i++) {
    factorialTotal = num * 1;
  }

  return factorialTotal;
}

// console.log(factorialize());

//ex. 2
function getTodaysDate() {
  // const d = new Date();
  const getTodaysDate = new Date();
  return getTodaysDate;
}

//ex 3.
// function incrementalBackups(lastBackupTime, changes) {
//bad name
// const fileIds = [];

//Good name
//   const fileIdsToUpdate = [];

//   for (let i = 0; i < changes.length; i++) {
//     if (changes[i][0] > lastBackupTime) {
//       if (!fileIdsToUpdate.includes(changes[i][1])) {
//         fileIdsToUpdate.push(changes[i][1]);
//       }
//     }
//   }
//   return fileIdsToUpdate.sort((fileId1, fileId2) => fileId1 - fileId2);
// }

//times for short variable names and times for long variable names

//using for of loop allows us to rid of the [i] and sound more descriptive
// function incrementalBackups(lastBackupTime, changes) {
//   const fileIdsToUpdate = [];

//   for (let change of changes) {
//     if (change[0] > lastBackupTime) {
//       if (!fileIdsToUpdate.includes(change[1])) {
//         fileIdsToUpdate.push(change[1]);
//       }
//     }
//   }
//   return fileIdsToUpdate.sort((fileId1, fileId2) => fileId1 - fileId2);
// }

//refactor 3

function incrementalBackups(lastBackupTime, changes) {
  const fileIdsToBackup = [];

  for (let change of changes) {
    const [lastUpdatedTime, updatedFileID] = change;
    if (lastUpdatedTime > lastBackupTime) {
      if (!fileIdsToBackup.includes(updatedFileID)) {
        fileIdsToBackup.push(updatedFileID);
      }
    }
  }
  return fileIdsToBackup.sort((fileId1, fileId2) => fileId1 - fileId2);
}

// Dont prefix property names with the object name

// friendsCat.catAge = 10;
// friendsCat.catName = 'Tito';

//Avoic magic numbers

//What does 6367.4447 this number mean
// const c = Math.pow(6367.4447)
//give context
const EARTH_RADIUS = 6367.4447;
const c = Math.pow(EARTH_RADIUS);

//18. How might you empty an array in JS?

let array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 3];
const array4 = [1, 2, 3];
const array5 = [1, 2, 3];

array1 = [];
array2.length = 0;
array3.splice(0);

while (array4.length > 0) {
  array4.pop();
}

while (array5.length > 0) {
  array5.shift();
}

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);
