// function rev(str){
//     let arr = str.split("").reverse().join("");
    
//     if(arr === str){
//         console.log("True");
//     }
//     else{
//         console.log("False");
//     }
// }

// rev("ABA");
// function rev(str){
//     let arr = str.split("").reverse().join("");
//     if(str == arr){
//         console.log("it is a palindrome");
//     }
//     else{
//         console.log("It is not a palindrome");
//     }
// }

// rev("ABA");

function isPalindrome(str){
var left = 0;
var right = str.length-1;

while(left<right){
    if(str[left]!=str[right]){
        return false;
    }
    left++;
    right--;
}
return true; 
}

console.log(isPalindrome("ABA"));

