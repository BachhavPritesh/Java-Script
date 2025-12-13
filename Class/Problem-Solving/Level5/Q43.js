// function check(str){
//     if(str.includes('e')){
//         console.log("TRUE");
//     }
//     else{
//         console.log("false");
//     }
// }

// check("abce");

function check(str){
    for(var i = 0;i < str.length;i++){
        if(str[i]=='e'){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}

check("aba");