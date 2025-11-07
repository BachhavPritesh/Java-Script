var arr = [2, 34, 21, 45, 35,92, 39];
var evenSum = 0;
var evenCount = 0;
var oddSum = 0;
var oddCount = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenSum += arr[i];
    evenCount++;
  } else {
    oddSum += arr[i];
    oddCount++;
  }
}
console.log("Sum of even numbers: " + evenSum);
console.log("Sum of odd numbers: " + oddSum);

console.log("average of even numbrs: " + evenSum/evenCount);
console.log("average of odd numbrs: " + oddSum/oddCount);