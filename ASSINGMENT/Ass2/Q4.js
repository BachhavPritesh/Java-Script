var arr = [1, 2, 3, 4, 5];
var max = arr[0];
var sec = arr[0];
var length = arr.length;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max = arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>sec && arr[i]<max){
        sec= arr[i];
    }
}


console.log(max, "Is the largest number in the array of length");
console.log(sec, "Is the Second largest number in the array of length");


// #include <stdio.h>

// int main() {
  
//   int n=153,result=0,remaind,count=0,original;
  
//   original=n;
  
//   int temp=n;
  
//   while(temp>0){
//      temp/=10;
//       count++;
//   }
//   temp=n;
  
//   while(temp>0){
//       remaind=temp%10;
//       int power = 1;
      
//       for(int i = 0;i<count;i++){
//           power=power*remaind;
//       }
//       result=result+power;
//       temp=temp/10;
//   }
  
//    if (result == n)
//         printf("%d is an Armstrong number.\n", n);
//     else
//         printf("%d is not an Armstrong number.\n", n);

//     return 0;
// }

var a=22000022222;
var b=0;

while(a>0){
    a=Math.floor(a/10);
    b++;

}

console.log(b, "Is the number of digits in the number");    