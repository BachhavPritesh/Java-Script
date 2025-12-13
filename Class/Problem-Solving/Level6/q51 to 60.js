// Q51. Print All Elements of an Array

// const arr = [1, 2, 3];

// arr.forEach(element => {
//   console.log(element);
// });

//--------------------------------------------------------------------------------------------------------------------//

// Q52. Sum of Array Elements

// function sumArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }
// var arr = [1,2,3];

//--------------------------------------------------------------------------------------------------------------------//

// Q53. Maximum in Array

// function maxInArray(arr) {
//   if (arr.length === 0) return undefined;
  
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// function maxInArray(arr) {
//  let sortedARRAY = arr.sort((a,b)=>b-a);
//  return sortedARRAY[0];
// }

// function maxInArray(arr) {
//   let max = Math.max(...arr);
//   return max;
// }

// console.log(maxInArray([1,2,3,4,5]));

//--------------------------------------------------------------------------------------------------------------------//

// Q54. Minimum in Array

// function minInArray(arr) {
//   if (arr.length === 0) return undefined;
  
//   let min = arr[0];
//   for (let num of arr) {
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// function minInArray(arr) {
//  let sortedARRAY = arr.sort((a,b)=>b-a);
//  return sortedARRAY[sortedARRAY.length-1];
// }

// function minInArray(arr) {
//   let min = Math.min(...arr);
//   return min;
// }

// console.log(minInArray([1,2,3,4,5]));

//--------------------------------------------------------------------------------------------------------------------//

// Q55. Count Even Numbers in Array

// function countEven(arr) {
//   let count = 0;
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countEven([1, 2, 3, 4, 5, 6])); 
// console.log(countEven([1, 3, 5]));          
// console.log(countEven([2, 4, 8]));          

//--------------------------------------------------------------------------------------------------------------------//

// Q56. Count Odd Numbers in Array

// function countOdd(arr) {
//   let count = 0;
//   for (let num of arr) {
//     if (num % 2 === 1) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOdd([1, 2, 3, 4, 5, 6])); 

//--------------------------------------------------------------------------------------------------------------------//
   
// Q57. Print Only Positive Numbers

// function printPositive(arr) {
//   for (let num of arr) {
//     if (num > 0) {
//       console.log(num);
//     }
//   }
// }

// printPositive([-1, 0, 5, 3, -2]);

//--------------------------------------------------------------------------------------------------------------------//

// Q58. Print Only Negative Numbers

// function printNegative(arr) {
//   for (let num of arr) {
//     if (num < 0) {
//       console.log(num);
//     }
//   }
// }

// printNegative([-1, 0, 5, 3, -2]);

//--------------------------------------------------------------------------------------------------------------------//

// Q59. Print Elements Greater than 10

// function printGreaterThan10(arr) {
//   for (let num of arr) {
//     if (num > 10) {
//       console.log(num);
//     }
//   }
// }

// printGreaterThan10([5, 12, 7, 20, 3]);

//--------------------------------------------------------------------------------------------------------------------//

// Q60. Average of Array Elements

// function average(arr) {
//   if (arr.length === 0) return 0; // convention for empty array

//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum / arr.length;
// }

// console.log(average([1, 2, 3, 4]));
// console.log(average([5, 15]));     
// console.log(average([7]));        
   
