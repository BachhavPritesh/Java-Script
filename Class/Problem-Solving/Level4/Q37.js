function rev(str){


    let arr = "";
    for(var i = str.length-1;i>=0;i--){
        arr = arr+str[i];
    }
    console.log(arr);
}

rev("ABCD");

