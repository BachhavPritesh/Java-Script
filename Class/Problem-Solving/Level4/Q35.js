// let str = "abcde";
// let lowercase = str.toUpperCase();

// console.log(lowercase);

function func(str){
    let res = "";
    for(let i=0;i<str.length;i++){
        let value = str.charCodeAt(i);
        if(value>=97 && value<=122){
            res=res+String.fromCharCode(value-32)
        }
        else{
            res=res+str[i];
        }
       
    }
       console.log(res);
}

func("123abc");