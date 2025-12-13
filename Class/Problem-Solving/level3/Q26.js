function primeNumber(num){
    var result = 0;
    for(var a = 2; a<num; a++){
        if(num % a == 0){
            result = 1;
            break;
        }
    }
    if(result == 0){
        console.log("TRUE");
    }
    else{
        console.log("FALSE");
    }
}

primeNumber(17);