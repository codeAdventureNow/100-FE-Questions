//1. Data types
// Primitive data types= Number, String, Boolean Undefined, Null(empty value user assigned),BigInt and Symbol
//Non primitives = objects, arrays(technically an object)

// //let, const, var

// // function example() {
// //   if (false) {
// //     let ex = 5;
// //   }
// //   return ex;
// // }

// // //in example above it is as if
// // function example() {
// //   var ex;
// //   if (false) {
// //     ex = 5;
// //   }
// //   return ex;
// // }

// // const won't let us reassign the values of primitives
// // won't work
// const conEx = 5;
// conEx = 6;

// //will work
// const conEx2 = [];

// conEx.push(2);

// const Ex3 = {};
// conEx3.name = 'Dylan';

// //Pass by value, pass by reference

// https://www.joshwcomeau.com/javascript/the-const-deception/?from=newsletter
// //pass by value
//primitives are passing by value;
let example1 = 1;
let example2 = example1;

example2++;

console.log(example1, ` - `, example2);
console.log('hello');

//example 2
let a = 1;
let b = a;
console.log(a, b);
a = 2;
console.log(a, b);
b = 5;
console.log(a, b);

//non  primitive types are pass by reference, so in example 4 we are still referring to the same place memory as example3
// const example3 = [4, 5, 6, 6];
// const example4 = example3;
// const example5 = [...example3, 'Hire me'];
// example4.push(5);

// console.log(`Ex3`, example3, ` - `, `Ex4`, example4, `Ex5`, example5);

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me',
  },
};

//shallow copies
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
//deep copy
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'la la la';
obj.a = 1;
obj.b = 2;

clone2.a = 'car';

console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

// Won't it present problems when copy an object and the go and update the original object because all the object copied from that will be updating.

//What is the difference between map, filter, and reduce?

const prices = [1, 2, 3, 10, 20];

const newPrices = prices.map((price) => price + 30);

const pricesUnderTen = prices.filter((price) => price < 10);
const totalPrices = prices.reduce((acc, cur) => acc + cur, 0);

// Instead of .mapping, then .filtering -two iterations, can do the same thing in one reduce

const reduceArrayTwoSteps = prices
  .map((price) => price + 1)
  .filter((price) => price <= 20);

const reduceArrayExample = prices.reduce((acc, curr) => {
  const newValue = curr + 1;
  if (newValue <= 20) {
    acc.push(newValue);
  }
  return acc;
}, []);

console.log(newPrices);
console.log(pricesUnderTen);
console.log(totalPrices);
console.log(reduceArrayExample);
console.log(reduceArrayTwoSteps);

//What are falsey values?

const ex1 = undefined;
const ex2 = null;
const ex3 = NaN;
const ex4 = 0;
const ex5 = '';
const ex6 = false;

//Truthy
const ex7 = 1;
const ex8 = ' ';
const ex9 = 'Hello';

//Falsey
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(false));

//Truthy
console.log(Boolean(ex7));
console.log(Boolean(ex8));
console.log(Boolean(ex9));

//Jonas
const money = 0;

if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log('You need to make some money');
}

let height;

if (height) {
  console.log('Yay, height is defined');
} else {
  console.log('Height is undefined');
}

//This
console.log(this); //gives us the window object

const exampleObj = {
  first: 'Nate',
  last: 'Mueller',
  fullName() {
    return `${this.first} ${this.last}`;
  },
};

console.log(exampleObj.fullName());

//watch out because arrow functions break the scope of 'this' because it does not bind in the same way as regular functions
const exampleObj2 = {
  first: 'Bob',
  last: 'Sander',
  fullName: () => {
    return `${this.first} ${this.last}`;
  },
};

console.log(example2.fullName);

// == vs ===
const number5 = 5;
const string5 = '5';

console.log(number5 == string5);
console.log(number5 === string5);

//coercion
//implicit coercion  it concats the string 7 and coerces into a string
const total = 3 + 2 + '7';
console.log(typeof total);

//explicit coercion-  what you can do with the number strings and boolean

let number = '3';

console.log(typeof String(3));
console.log(typeof Boolean(0));
console.log(typeof Number(number));

//10 typeof

console.log(typeof 37 === 'number');
console.log(typeof NaN === 'number');
console.log(typeof `template literal` === 'string');
console.log(typeof '1' === 'string');
console.log(typeof true === 'boolean');
console.log(typeof undefined === 'undefined');

console.log(
  typeof {
    name: 'Mike',
  } === 'object'
);

console.log(typeof [1, 2, 4] === 'object');
console.log(Array.isArray([1, 2, 4]));
console.log(Array.isArray({}));

console.log(typeof new Date() === 'object');
console.log(typeof /regex/ === 'object');

console.log(null instanceof Object);
console.log(typeof null);
console.log({} instanceof Object);
console.log(typeof function () {} === 'function');

// 11 Delete
