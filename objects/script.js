let obj = {}; // empty object

obj = {
  key1: "value1", // property
  key2: "value2" // property
};

const student = {
  firstName: "Tim",
  age: 31,
  email: "tim@ironhack.com",
  hobbies: ["cycling"]
};

// dot notation
// to add property
student.nationality = "Welsh";
// to read property
console.log(student.firstName); // "Tim"
// to update a property
student.email = "tim1@ironhack.com";

// square bracket notation
student["age"] = 30;

student["home address"] = "36 LobeckStr.";

const keyName = "hobbies";
console.log(student.hobbies);
console.log(student["hobbies"]);
console.log(student[keyName]);

console.log(student.contact); // undefined

student.contact = {
  phoneNumber: "+123456",
  email: "tim1@ironhack.com"
};

delete student.email;

console.log(student.contact.email);

// console.log(student.foo.phoneNumber); ❌

student["42"] = 45;
student["0"] = 1;

// console.log(student);

// looping through keys

for (const bar in student) {
  console.log("key: ", bar);
  console.log("value: ", student[bar]); // dynamic key
}

// Object.keys(obj) returns an array with all the keys
Object.keys(student); // ["0", "42", "firstName", "age", "hobbies", "nationality", "home address", "contact"]

// Object.values(obj) returns an array with all the values
Object.values(student); // [1, 45, "Tim", 30, Array(1), "Welsh", "36 LobeckStr.", {…}]

console.clear();

// Value vs Reference

// primitives are immutable
const title = "javaScript: the Good Parts";
title[0] = title[0].toUpperCase(); // "javaScript: the Good Parts"

let string1 = "Hello";
let string2 = "Hello";

string1 === string2; // true

let string3 = string1;

string3 === string1; // true

42 === 42; // true
"Hello" === "Hello"; // true

// objects

let arr1 = ["Hello"];
let arr2 = ["Hello"];

// comparing references
arr1 !== arr2; // true

// passing reference of arr1
let arr3 = arr1;

// comparing arr3 to arr2 is the same as comparing arr1 to arr2
arr3 !== arr2; // true

// same reference
arr3 === arr1; // true

arr3[0] = "Goodbye";

arr1.push("Thank you");

// const arr4 = [];

// for (let i = 0; i < arr1.length; i += 1) {
//   arr4.push(arr1[i]);
// }

arr1.push({
  foo: "bar"
});

// shallow copy
// any object (or array) from arr1 will be copied by reference (and thus there could be elements in arr4 that have the same reference as elements in arr1)
const arr4 = arr1.slice(0);

arr4.push("!");

arr1.push({});

// mutate the nested object
arr1[2].foo = "qux";

const arr42 = [[]];
const arr43 = arr42.slice(0); // shallow copy
