function GCD(F,S){
        for(var i= Math.min(F,S);i>=1;i++){
            if(F%i==0&&S%i==0){
                console.log(i);
                break;
            }
        }
}

GCD(10,20);