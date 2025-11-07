var text = "ABA";
var length = text.length;

for(let i=0; i<length/2; i++){
    if(text.charAt(i) !== text.charAt(length-i-1)){
        console.log("Not a Palindrome");
        break;
    }
    else{
        console.log("Is a Palindrome");
        break;
    }
}

console.log(text[0]);