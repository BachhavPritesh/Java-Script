// Q121. Multiple of 10

// function multi(num){
//     if(num%10==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(multi(20));

//---------------------------------------------------------------------------------------------------------------//

// Q122. Minimum of Two Numbers

// function Minimum(num1,num2){

//     if(num1<num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

// console.log(Minimum(5,8))

//---------------------------------------------------------------------------------------------------------------//

// Q123. Minimum of Three Numbers

// function minOfThree(a, b, c) {
//   return Math.min(a, b, c);
// }

// function minOfThree(a, b, c) {
//   let min = a;

//   if (b < min) min = b;
//   if (c < min) min = c;

//   return min;
// }

// console.log(minOfThree(1,2,3));

//---------------------------------------------------------------------------------------------------------------//

// Q124. Print from n Down to 1

// function nTo1(n){
//     for(let i = n;i>0;i--){
//         console.log(i);
//     }
// }

// nTo1(5);

//---------------------------------------------------------------------------------------------------------------//

// Q125. Sum of All Even Numbers from 1 to n

// function even(n){
// let sum = 0;
//     for(let i = 1;i<=n;i++){
//         if(i%2==0){
//             sum = sum+i;
//         }
//     }
//    console.log(sum);
// }

// even(5);

//---------------------------------------------------------------------------------------------------------------//

// Q126. Sum of All Odd Numbers from 1 to n

// function odd(n){
// let sum = 0;
//     for(let i = 1;i<=n;i++){
//         if(i%2==1){
//             sum = sum+i;
//         }
//     }
//    console.log(sum);
// }

// odd(5);

//---------------------------------------------------------------------------------------------------------------//

// Q127. Count Numbers Divisible by 2 or 3 (1 to n)

// function countDivisibleBy2Or3(n) {
//   let count = 0;
  
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 || i % 3 === 0) {
//       count++;
//     }
//   }
  
//   return count;
// }

// console.log(countDivisibleBy2Or3(6));

//---------------------------------------------------------------------------------------------------------------//

// Q128. Count Numbers Divisible by Both 2 and 5 (1 to n)

// function count(n) {
//   let count = 0;
  
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 && i % 5 === 0) {
//       count++;
//     }
//   }
  
//   return count;
// }

// console.log(count(20));

//---------------------------------------------------------------------------------------------------------------//

// Q129. Perfect Number

// function isPerfectNumber(n) {


//   let sum = 0;

//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//       sum += i;
//     }
//   }

//   return sum === n;
// }

//---------------------------------------------------------------------------------------------------------------//

// Q130. Co-prime Numbers

// function coPrime(n1,n2){
//     let range = Math.min(n1,n2);
//      let GCD;
//     for(let i = range;i>=1;i--){
//         if(n1%i == 0 && n2%i == 0){
//             GCD = i;
//             break;
//         }
//     }
//     console.log(GCD==1);
// }

// coPrime(12,18);

//---------------------------------------------------------------------------------------------------------------//

// Q131. Largest Digit in a Number

// function largestDigit(n) {
//   n = Math.abs(n); 
//   let maxDigit = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     if (digit > maxDigit) {
//       maxDigit = digit;
//     }
//     n = Math.floor(n / 10);
//   }

//   return maxDigit;
// }

// function largestDigit(n) {
//   return Math.max(...String(Math.abs(n)).split(''));
// }


// console.log(largestDigit(5823)); 
// console.log(largestDigit(709));  
// console.log(largestDigit(4));    

//---------------------------------------------------------------------------------------------------------------//

// Q132. Smallest Digit in a Number

// function Smallest(n) {
//   return Math.min(...String(Math.abs(n)).split(''));
// }

// console.log(Smallest(123));

//---------------------------------------------------------------------------------------------------------------//

// Q133. Count Even Digits in a Number

// function countEvenDigits(n) {
//   let count = 0;
//   n = Math.abs(n); 

//   while (n > 0) {
//     let digit = n % 10;
//     if (digit % 2 === 0) {
//       count++;
//     }
//     n = Math.floor(n / 10);
//   }

//   return count;
// }


// console.log(countEvenDigits(1234));

//---------------------------------------------------------------------------------------------------------------//

// Q134. Count Odd Digits in a Number

// function countOddDigits(n) {
//   let count = 0;
//   n = Math.abs(n); 

//   while (n > 0) {
//     let digit = n % 10;
//     if (digit % 2 === 1) {
//       count++;
//     }
//     n = Math.floor(n / 10);
//   }

//   return count;
// }


// console.log(countOddDigits(1234));

//---------------------------------------------------------------------------------------------------------------//

// Q135. Absolute Difference of Two Numbers

// function absDifference(n1,n2){
//     if(n1>n2){
//         return n1-n2;
//     }
//     else{
//         n2-n1;
//     }
// }

// console.log(absDifference(5,3));

//---------------------------------------------------------------------------------------------------------------//

// Q136. Is 3-digit Number

// function isThreeDigit(n) {
//   return n >= 100 && n <= 999;
// }

// console.log(isThreeDigit(999));
// console.log(isThreeDigit(4));

//---------------------------------------------------------------------------------------------------------------//

// Q137. Sum of Squares 1² + 2² + … + n²

// function sumOfSquare(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i*i;
//     }
//     return sum;
// }

// console.log(sumOfSquare(3));

//---------------------------------------------------------------------------------------------------------------//

// Q138. Sum of Cubes 1³ + 2³ + … + n³

// function sumOfSquare(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i*i*i;
//     }
//     return sum;
// }

// console.log(sumOfSquare(3));

//---------------------------------------------------------------------------------------------------------------//

// Q139. Harshad Number (Niven Number)

// function isHarshad(n) {
//   let sum = 0;
//   let temp = Math.abs(n);

//   while (temp > 0) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
//   }

//   return n % sum === 0;
// }


// console.log(isHarshad(18));

//---------------------------------------------------------------------------------------------------------------//

// Q140. Automorphic Number

// function isAutomorphic(n) {
//   let square = n * n;
//   let temp = n;

//   while (temp > 0) {
//     if (square % 10 !== temp % 10) {
//       return false;
//     }
//     square = Math.floor(square / 10);
//     temp = Math.floor(temp / 10);
//   }

//   return true;
// }


// console.log(isAutomorphic(5)); 

