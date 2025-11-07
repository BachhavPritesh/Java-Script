let num1 = 45;
let num2 = 89;
let num3 = 72;

let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}


console.log("Number 1:", num1);
console.log("Number 2:", num2);
console.log("Number 3:", num3);
console.log("The largest number is:", largest);
