var arr = [1, 2, 3, 4, 5];
var min = arr[0];
var length = arr.length;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]<min){
        mix = arr[i];
    }
}

console.log(min, "Is the Smallest number in the array of length");