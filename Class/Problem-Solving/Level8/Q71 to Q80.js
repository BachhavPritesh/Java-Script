// Q71. Remove Even Numbers (Keep Only Odd)

// function rmvEven(arr){
//     var arr2 = [];

// for(let data of arr){
//     if(data%2==1){
//         arr2.push(data);
//     }
// }

// return arr2;
// }

// console.log(rmvEven([1,2,3,4]));

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] % 2 == 0) {
//     arr.splice(i, 1);
//     i=i-1;
//   }
// }

// console.log(arr); 



//---------------------------------------------------------------------------------------------------------------------------//

// Q72. Remove Duplicates

// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }


// console.log(removeDuplicates([1, 2, 2, 3, 3, 3])); 


// let arr = [1,2,3,4,4];

// let res =  new Set(arr);
// console.log(res);
// console.log([...res]);

// function removeDupli(arr) {
//   let obj = {}; 
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (!obj[item]) {   
//       obj[item] = true; 
//       result.push(item);  
//     }
//   }

//   return result;
// }


// console.log(removeDupli([1, 2, 2, 3, 3, 3])); 


//---------------------------------------------------------------------------------------------------------------------------//

// Q73. Concatenate Two Arrays
              

// function concatenateArrays(arr1, arr2) {
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     result.push(arr2[i]);
//   }

//   return result;
// }


// console.log(concatenateArrays([1, 2], [3, 4]));      


// function concatenateArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }


// console.log(concatenateArrays([1, 2], [3, 4]));       
   
// ---------------------------------------------------------------------------------------------------------------------------//

// Q74. Intersection of Two Arrays (Common Elements)

// function intersection(arr1, arr2) {
//   let seen = {};   
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     let item = arr1[i];

//     if (arr2.includes(item) && !seen[item]) {
//       seen[item] = true;  
//       result.push(item);  
//     }
//   }
//   return result;
// }


// console.log(intersection([1, 2, 3, 4], [3, 4, 5]));  


// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 4, 5];

// let res = [];

// let i = 0;
// let j = 0;

// while (i < arr1.length && j < arr2.length) {

//   if (arr1[i] === arr2[j]) {
//     res.push(arr1[i]);
//     i++;
//     j++;
//   }
//   else if (arr1[i] < arr2[j]) {
//     i++;   
//   }
//   else {
//     j++;  
//   }
// }

// console.log(res);  

//----------------------------------------------------------------------------------------------------------//

// Q75. Rotate Array Right by 1

// function rotateRight(arr) {
//   if (arr.length <= 1) return arr;

//   let last = arr.pop();    
//   arr.unshift(last);        

//   return arr;
// }

// function rotateRight(arr){
//   var arr2 = [];
//   arr2.push(arr[arr.length-1]);

//   for(var i =0;i<arr.length-1;i++){
//     arr2.push(arr[i]);
//   }

//   return arr2;
// }



// console.log(rotateRight([1, 2, 3, 4]));  
// console.log(rotateRight([1]));

//----------------------------------------------------------------------------------------------------------//

// Q76. Rotate Array Left by 1
       
// function rotateLeft(arr) {
//   if (arr.length <= 1) return arr;

//   let f = arr.shift();    
//   arr.push(f);        

//   return arr;
// }



// console.log(rotateLeft([1, 2, 3, 4]));  
// console.log(rotateLeft([1]));

//----------------------------------------------------------------------------------------------------------//

// Q77. Count Elements Greater than Average

// function countGreaterThanAverage(arr) {
//     if (arr.length === 0) return 0;


//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

 
//     let avg = sum / arr.length;


//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > avg) {
//             count++;
//         }
//     }

//     return count;
// }


// console.log(countGreaterThanAverage([1, 2, 3, 4, 5])); 
// console.log(countGreaterThanAverage([10, 10, 10]));    
// console.log(countGreaterThanAverage([5, 15]));        

//----------------------------------------------------------------------------------------------------------//

// Q78. Largest Positive and Smallest Negative

// function findLargestAndSmallest(arr) {
//     let largestPositive = null;
//     let smallestNegative = null;

//     for (let num of arr) {
//         if (num > 0) {
//             if (largestPositive === null || num > largestPositive) {
//                 largestPositive = num;
//             }
//         } else if (num < 0) {
//             if (smallestNegative === null || num < smallestNegative) {
//                 smallestNegative = num;
//             }
//         }
//     }

//     return {
//         largestPositive,
//         smallestNegative
//     };
// }


// console.log(findLargestAndSmallest([-5, -1, 3, 7, -2]));


// console.log(findLargestAndSmallest([1, 2, 3]));


// console.log(findLargestAndSmallest([-3, -1]));

// let arr=[1,1,-2,10,100,-10];
// let max=Math.max( ... arr);
// let min=Math.min( ... arr);
// console. log(max>0 ? max:null);
// console. log(min<0 ? min:null);


//----------------------------------------------------------------------------------------------------------//

// Q79. Count 0s and 1s in Binary Array

// function count(arr){
//   let count1 = 0;
//   let count2 = 0;

//   for(var i = 0;i<arr.length;i++){
//     if(arr[i]==0){
//       count1++;
//     }
//     else{
//       count2++;
//     }
//   }

//   console.log("ZERO: "+ count1);
//   console.log("ONE: ",count2);
// }

// count([1,0,1]);

//----------------------------------------------------------------------------------------------------------//

// Q80. Separate Even and Odd into Two Arrays

// function evenOdd(arr){
//   var ev = [];
//   var od = [];

//   for(var i = 0;i<arr.length-1;i++){
//     if(arr[i]%2==0){
//       ev.push(arr[i]);
//     }
//     else{
//       od.push(arr[i]); 
//     }
//   }

//   return{
//     ev,od
//   }
// }

// console.log(evenOdd([1,2,3,4,5]));