function sumOfDigit(n){
     let digit=0;
     while(n!=0){
        digit = digit+n%10;
        n=Math.floor(n/10);
     }

     console.log(digit);
}

sumOfDigit(12);