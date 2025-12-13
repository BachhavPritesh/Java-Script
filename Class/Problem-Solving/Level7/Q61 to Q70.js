// Q61. Double Each Element

// function doubleArray(arr) {
//   let result = [];
//   for (let num of arr) {
//     result.push(num * 2);
//   }
//   return result;
// }

// console.log(doubleArray([1,2,3,4]));

//--------------------------------------------------------------------------------------------------------------------//

// Q62. Square Each Element

// function squareArray(arr) {
//   let result = [];
//   for (let num of arr) {
//     result.push(num * num);
//   }
//   return result;
// }

// console.log(squareArray([1,2,3,4]));

//--------------------------------------------------------------------------------------------------------------------//

// Q63. Reverse Array into New Array

// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }

// console.log(reverseArray([1,2,3]));

// let arr1 = [1,3,4,4];

// console.log(arr1.reverse());

// let arr = [1,2,3,4];
// let i = 0;
// let j = arr.length - 1;

// while(i<=j){
//     [arr[i],arr[j]] = [arr[j],arr[i]];
//     i++;
//     j--;
// }

// console.log(arr);
//--------------------------------------------------------------------------------------------------------------------//

// Q64. Copy Array

// let arr = [1,2,3,4];
// let arr2 = [];

// for(let num of arr){
//     arr2.push(num);
// }

// console.log(arr2);

//--------------------------------------------------------------------------------------------------------------------//

// Q65. Check if Array Contains a Value

// function Check(arr){
//     return (arr.includes(2));
// }

// console.log(Check([1,2,3,4]));

// let arr = [1,2,3,4];
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]==1){
//         console.log("PRESENT");
//     }
// }

// --------------------------------------------------------------------------------------------------------------------//

// Q66. Find Index of a Value

// function findIndex(arr, value) {
//   return arr.indexOf(value);
// }


// console.log(findIndex([1,2,3],2));

// let arr = [1,2,3,4];

// for(var i = 0;i<arr.length;i++){
//     if(arr[i]==1){
//         console.log(i);
//     }
//  
// }






// --------------------------------------------------------------------------------------------------------------------//

// Q67. Frequency of a Value

// function countFrequency(arr, value) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countFrequency([1, 2, 2, 3, 2], 2));
// console.log(countFrequency([5, 5, 5], 5));      
// console.log(countFrequency([1, 2, 3], 4));       


// function frequencyUsingObject(arr, value) {
//   const freq = {};
  

//   arr.forEach(v => {
//     freq[v] = (freq[v] || 0) + 1;
//   });

  
//   return freq[value] || 0;
// }

// console.log(frequencyUsingObject([1, 2, 2, 3, 2], 2));
// console.log(frequencyUsingObject([5, 5, 5], 5));      
// console.log(frequencyUsingObject([1, 2, 3], 4));      

// let arr = [1,2,3,4,5,6,6];
// let value = 6;
// let obj = {};

// for(let i = 0;i<arr.length;i++){
//     if(obj[arr[i]]!=undefined){
//         obj[arr[i]]++;
//     }
//     else{
//         obj[arr[i]]=1;
//     }
// }

// console.log(obj[value]);


// --------------------------------------------------------------------------------------------------------------------//

// Q68. Check if Array is Sorted (Increasing)

// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return false; 
//     }
//   }
//   return true; 
// }


// console.log(isSorted([1, 2, 3, 4])); 
// console.log(isSorted([1, 2, 2, 3])); 
// console.log(isSorted([3, 2, 1]));    

// --------------------------------------------------------------------------------------------------------------------//

// Q69. Second Largest Element

// function secondLargest(arr) {

//   arr.sort((a, b) => b - a);
//   return arr[1]; 
// }


// console.log(secondLargest([10, 5, 8, 20])); 
// console.log(secondLargest([3, 1, 2]));     
// console.log(secondLargest([100, 50]));    

// let arr = [1,2,3,4,5];

// let max = arr[0];
// let smax = arr[0];

// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }

// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>smax && arr[i]<max){
//         smax = arr[i];
//     }
// }

// console.log(smax);

// --------------------------------------------------------------------------------------------------------------------//

// Q70. Second Smallest Element


// function secondSmallest(arr) {

//   arr.sort((a, b) => b - a);
//   return arr[arr.length-2]; 
// }


// console.log(secondSmallest([10, 5, 8, 20])); 

// let arr = [1,2,3,4,5];

// let min = Infinity;
// let smin = Infinity;


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > min && arr[i] < smin){
//         smin = arr[i];
//     }
// }

// console.log(smin);
