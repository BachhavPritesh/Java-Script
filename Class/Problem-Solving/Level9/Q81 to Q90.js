// Q81. Square Pattern of * of Size N

// function squarePattern(N) {
//     for (let i = 0; i < N; i++) {      
//         let row = "";
//         for (let j = 0; j < N; j++) {   
//             row = row + "* ";
//         }
//         console.log(row);
//     }
// }


// squarePattern(3);

//--------------------------------------------------------------------------------------------------------------------//

// Q82. Right-Angled Triangle of *

// function rightAngledTriangle(N) {
//     for (let i = 1; i <= N; i++) {     
//         let row = "";
//         for (let j = 1; j <= i; j++) { 
//             row = row + "* ";
//         }
//         console.log(row);
//     }
// }


// rightAngledTriangle(4);

//--------------------------------------------------------------------------------------------------------------------//

// Q83. Number Triangle Increasing Each Row

// function rightAngledTriangle(N) {
//     for (let i = 1; i <= N; i++) {     
//         let row = "";
//         for (let j = 1; j <= i; j++) { 
//             row = row + j;
//         }
//         console.log(row);
//     }
// }


// rightAngledTriangle(4);

//--------------------------------------------------------------------------------------------------------------------//

// Q84. Triangle with Repeated Row Number

// function repeatedNumberTriangle(N) {
//     for (let i = 1; i <= N; i++) {      
//         let row = "";
//         for (let j = 1; j <= i; j++) {    
//             row = row + i + " ";
//         }
//         console.log(row);
//     }
// }


// repeatedNumberTriangle(4);

//--------------------------------------------------------------------------------------------------------------------//

// Q85. Print Multiplication Tables from 1 to 10

// function printTables() {
//     for (let i = 1; i <= 10; i++) {         
//         let row = "Table of " + i + ": ";
        
//         for (let j = 1; j <= 10; j++) {     
//             row = row + (i * j) + " ";
//         }
        
//         console.log(row);
//     }
// }


// printTables();

//--------------------------------------------------------------------------------------------------------------------//
    
// Q86. Sum of Each Row in 2D Array

// function rowSums(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//     result.push(sum);
//   }

//   return result;
// }

// console.log(rowSums([[1, 2, 3], [4, 5, 6]])); 

//--------------------------------------------------------------------------------------------------------------------//

// Q87. Check Perfect Square

// function isPerfectSquare(n) {
//     if (n < 0) return false;
//     const x = Math.floor(Math.sqrt(n));
//     return x * x === n;
// }

// console.log(isPerfectSquare(16));


//--------------------------------------------------------------------------------------------------------------------//

// Q88. Armstrong Number (3-digit)

// function isArmstrong(n) {
//     let temp = n;
//     let sum = 0;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit * digit * digit;
//         temp = Math.floor(temp / 10);
//     }

//     return sum === n;
// }

// console.log(isArmstrong(153));

// let number = 153;

// let arr =String(number).split("");
// let res = arr.reduce((current,value)=>{
//     return Number(current)+Number(value)**arr.length;
// })

// console.log(res);

//--------------------------------------------------------------------------------------------------------------------//

// Q89. Length of Each String in Array

// function stringLengths(arr) {
//     return arr.map(str => str.length);
// }

// console.log(stringLengths(["abx","fdfdgg","ddvdjvn"]));

//--------------------------------------------------------------------------------------------------------------------//

// Q90. Longest String in Array

function longestString(arr) {
    if (arr.length === 0) return "";

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(longestString(["fefe","sfefefgege"]));