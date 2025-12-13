function checkPrime(x){
    var count = 0;
    for(var i = 1;i<=x;i++){
        if(x%i==0){
            count++;
        }
    }
    if(count==2)return true;
    else return false;
}

function PrintPrime(n){
    var res =[];
      for(var i = 0;i<=n;i++){
        if(checkPrime(i)){
            res.push(i);
        }
    }
    
    console.log(res.join(" "));

}

PrintPrime(10);