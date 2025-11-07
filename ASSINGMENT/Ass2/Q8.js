var arr = [1, 2, 3, 4, 5, 0, 0, -1, -2, -3];

var positive = 0;
var negative = 0;
var zero = 0;

for (let i = 0; i < arr.length; i++) 
{
    if(arr[i]>0){
        positive++;
    }
    else if(arr[i]<0){
        negative++;
    }
    else{
        zero++;
    }
}

console.log("Positive numbers are: "+positive);
console.log("Negative numbers are: "+negative);
console.log("Zeroes are: "+zero);