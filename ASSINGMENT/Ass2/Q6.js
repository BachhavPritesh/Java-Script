var arr = [1, 2, 3, 4, 5];

var evenCount = 0;
var oddCount = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even numbers count: " + evenCount);
console.log("Odd numbers count: " + oddCount);