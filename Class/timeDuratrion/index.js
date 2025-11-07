// function msg(){
//     console.log("betu andu");
// };

// setInterval(msg,4000);
var count = 0;

function msg(){
    count++;
    if(count<=10){
        console.log("j2 anand");
    }
    else{
        clearInterval(ints);
    }
};

let ints = setInterval(msg,2000);