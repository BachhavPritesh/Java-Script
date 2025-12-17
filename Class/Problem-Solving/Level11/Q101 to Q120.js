// Q101. Square of a Number

// function square(n) {
//   return n * n;
// }

// console.log(square(2));

//---------------------------------------------------------------------------------------------------------------//

// 102. Sum of Two Numbers

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5,6));

//---------------------------------------------------------------------------------------------------------------//

// Q103. Greet by Name

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("PRITESH"));

//---------------------------------------------------------------------------------------------------------------//

// Q104. Check Even (true/false)

// function isEven(n) {
//   return n % 2 === 0;
// }

// console.log(isEven(4));

//---------------------------------------------------------------------------------------------------------------//

// Q105. Check Odd (true/false)

// function isOdd(n) {
//   return n % 2 === 1;
// }

// console.log(isOdd(4));

//---------------------------------------------------------------------------------------------------------------//

// Q106. Is Between 1 and 100

// function isBetween1And100(n) {
//   return n >= 1 && n <= 100;
// }

// console.log(isBetween1And100(56));

//---------------------------------------------------------------------------------------------------------------//

// Q107. Is First Number Greater Than Second

// function isFirstGreater(a, b) {
//   return a > b;
// }

// console.log(isFirstGreater(2,4));

//---------------------------------------------------------------------------------------------------------------//

// Q108. Is String Length > 5

// function isStringLengthGreaterThan5(str) {
//   let count = 0;

//   for (let char of str) {
//     count++;
//     if (count > 5) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(isStringLengthGreaterThan5("ssfsffff"));

//---------------------------------------------------------------------------------------------------------------//

// Q109. First Character of String

// function getFirstCharacter(str) {
//   return str[0];
// }

// console.log(getFirstCharacter("ABCD"));

// ---------------------------------------------------------------------------------------------------------------//

// Q110. Last Character of String

// function getFirstCharacter(str) {
//   return str[str.length-1];
// }

// console.log(getFirstCharacter("ABCD"));

// ---------------------------------------------------------------------------------------------------------------//

// Q111. Longer of Two Strings

// function longerString(str1, str2) {

//   if (str1.length >= str2.length) {
//     return str1; 
//   } else {
//     return str2;
//   }
// }

// console.log(longerString("ABC","ABCDEFG"));

// ---------------------------------------------------------------------------------------------------------------//

// Q112. Average of Three Numbers

// function averageOfThree(a, b, c) {
//   return (a + b + c) / 3;
// }

// console.log(averageOfThree(1,2,3));

// ---------------------------------------------------------------------------------------------------------------//

// Q113. Sign of Number as Text

// function posNev(num){
// if(num>0){
//     console.log("POSITIVE");
// }
// else{
//     console.log("negative");
// }
// }

// posNev(3);

// ---------------------------------------------------------------------------------------------------------------//

// Q114. Eligible to Vote

// function Eligible(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(Eligible(12));

// ---------------------------------------------------------------------------------------------------------------//

// Q115. Hours to Minutes

// function hourToMinute(time){
//     let multi = 60;
//     multi = time*multi;

//     return multi;
// }

// console.log(hourToMinute(1)+" Minutes");

// ---------------------------------------------------------------------------------------------------------------//

// Q116. Minutes to Seconds

// function minutesToSeconds(time){
//     let multi = 60;
//     multi = time*multi;
//     return multi;
// }

// console.log(minutesToSeconds(2)+" seconds");

// ---------------------------------------------------------------------------------------------------------------//

// Q117. Celsius to Fahrenheit

// function celsiusToFahren(temp){
//     let f = (temp*9/5)+32;
    
//     return f;
// }

// console.log(celsiusToFahren(23));

// ---------------------------------------------------------------------------------------------------------------//

// Q118. Fahrenheit to Celsius

// function farenToCelsius(temp){
//     let f = (f-32)*5/9;
    
//     return f;
// }

// console.log(ferenToCelsius(23));

// ---------------------------------------------------------------------------------------------------------------//

// Q119. Area of a Triangle

// function areaOfTriangle(base,height){
//     let area = 0.5*base*height;
//     return area;
// }

// console.log(areaOfTriangle(5,6));

// ---------------------------------------------------------------------------------------------------------------//

// Q120. Area of a Circle

function areaOfCircle(r){
    let area = 3.14*r*r;
    return area;
}

console.log(areaOfCircle(3));