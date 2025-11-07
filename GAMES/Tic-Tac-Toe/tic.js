

const boxes = document.querySelectorAll(".btn");
var player = true;

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


function disablebtn(){
    for(var b of boxes){
        b.innerHTML = "";
        b.disabled = false;
    }

};

function displayWinner(){
    for(let a of winner){
        var btn1 = boxes[a[0]].innerHTML;
        var btn2 = boxes[a[1]].innerHTML;
        var btn3 = boxes[a[2]].innerHTML;
        if(btn1!=""&& btn2!="" && btn3!=""){
            if(btn1 === btn2 && btn2 === btn3){
                if(btn1 === "O"){
                    console.log("The winner is PlayerO");
                }
                else{
                    console.log("The winner is Player1");
                }
                disablebtn();
            }
        }
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player){
            box.innerHTML = "O";
            player = false;
        }
        else{
            box.innerHTML = "X";
            player = true;
        }
        box.disabled = true;
        displayWinner();
    });
})

var a = [1,2,3,4,5,10,11,13,15,19];

// a.forEach((i)=>{
//     console.log(i);
// })

for(var b of a){
    console.log(b);
}

var c = [11,22,33,44,55,66];

// c.forEach((i)=>{
//     console.log(i);
// })

for( var b of c){
    console.log(b);
}

for( var f in a){
   console.log(f);
}