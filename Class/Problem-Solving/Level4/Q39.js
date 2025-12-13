function count (str){
var c = 0;
    for(var i = 0;i<str.length;i++){
        if(str[i] == 'a' || str[i]=='A'){
          c++;
        }

        
    }

    console.log(c);

}

count("ABA");