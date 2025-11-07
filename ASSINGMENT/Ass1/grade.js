var subject1 = 90;
var subject2 = 80;
var subject3 = 60;
var subject4 = 98;
var subject5 = 83;

var total = subject1+subject2+subject3+subject4+subject5;

var percentage = (total/500)*100;



if(percentage>=90){
    console.log("grade A");
}
else if(percentage>=80){
    console.log("grade B");
}
else if(percentage>=70){
    console.log("grade C");
}
else if(percentage>=60){
    console.log("grade D");
}
else{
    console.log("FAIL");
}