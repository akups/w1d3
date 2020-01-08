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

console.clear();

// Object.keys(obj) returns an array with all the keys
Object.keys(student); // ["0", "42", "firstName", "age", "hobbies", "nationality", "home address", "contact"]

// Object.values(obj) returns an array with all the values
Object.values(student); // [1, 45, "Tim", 30, Array(1), "Welsh", "36 LobeckStr.", {…}]
