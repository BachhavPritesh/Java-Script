//  Q91. Frequency of Numbers in Array (Object)

// function frequency(arr) {
//   return arr.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
//   }, {});
// }

// function frequency(arr) {
//   const obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === undefined) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }
//   }

//   return obj;
// }





// console.log(frequency([1,1,1,3,3]));

//-------------------------------------------------------------------------------------------------------------//

// Q92. Most Frequent Number in Array

// function frequency(arr) {
//   const obj = {};
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === undefined) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }
//     if(highest<obj[arr[i]]){
//         highest = obj[arr[i]];
//     }
//   }

//   return highest;
// }

// console.log(frequency([1,1,1,3,3]));

//-------------------------------------------------------------------------------------------------------------//

// Q93. Character Frequency in String (Object)

// function charFrequency(str) {
//   const obj = {};

//   for (let i = 0; i < str.length; i++) {
//     const ch = str[i];

//     if (obj[ch] === undefined) {
//       obj[ch] = 1;
//     } else {
//       obj[ch]++;
//     }
//   }

//   return obj;
// }

// console.log(charFrequency("afdvvdv"))

//-------------------------------------------------------------------------------------------------------------//

// Q94. Highest Marks from Array of Students

// function highestMarks(students) {
//   if (students.length === 0) return null;

//   let topStudent = students[0];

//   for (let i = 1; i < students.length; i++) {
//     if (students[i].marks > topStudent.marks) {
//       topStudent = students[i];
//     }
//   }

//   return topStudent;
// }

// console.log(highestMarks([
//   { name: "A", marks: 50 },
//   { name: "B", marks: 80 },
//   { name: "C", marks: 70 }
// ]));

//-------------------------------------------------------------------------------------------------------------//

// 95. Total Cost from Product Price Object

// function totalCost(products) {
//   let total = 0;

//   for (let item in products) {
//     total += products[item];
//   }

//   return total;
// }

// console.log(totalCost({ apple: 50, banana: 20, mango: 30 }));

//-------------------------------------------------------------------------------------------------------------//

// Q96. Average Marks from Subject-Marks Object

// function averageMarks(subjects) {
//   const marks = Object.values(subjects);
//   let sum = 0;

//   for (let i = 0; i < marks.length; i++) {
//     sum += marks[i];
//   }

//   const avg = marks.length === 0 ? 0 : sum / marks.length;
//   return { average: avg };
// }

// console.log(averageMarks({math: 80, science: 90, english: 70}));

//-------------------------------------------------------------------------------------------------------------//

// Q97. Print All Keys of Object

// function getObjectKeys(obj) {
//   return { keys: Object.keys(obj) };
// }

// console.log(getObjectKeys({ a: 1, b: 2, c: 3 }));

//-------------------------------------------------------------------------------------------------------------//

// Q98. Print All Values of Object

// function getObjectValues(obj) {
//   return Object.values(obj);
// }


// console.log(getObjectValues({ a: 1, b: 2, c: 3 }));

//-------------------------------------------------------------------------------------------------------------//

// 99. Count Key-Value Pairs in Object

// function countPairs(obj) {
//   return Object.keys(obj).length;
// }

// console.log(countPairs({ a: 1, b: 2, c: 3 }));

//-------------------------------------------------------------------------------------------------------------//


// Q100. Filter Adults from Array of People

// function filterAdults(people) {
//   return people.filter(person => person.age > 18);
// }

// console.log(filterAdults([
//   { name: "A", age: 17 },
//   { name: "B", age: 20 },
//   { name: "C", age: 18 }
// ]));