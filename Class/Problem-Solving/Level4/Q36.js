// let str = "ABCD";
// let UpperCase = str.toLowerCase();

// console.log(UpperCase);


function func(str){
    let res = "";
    for(let i=0;i<str.length;i++){
        let value = str.charCodeAt(i);
        if(value>=65 && value<=90){
            res=res+String.fromCharCode(value+32)
        }
        else{
            res=res+str[i];
        }
       
    }
       console.log(res);
}

func("123ABC");