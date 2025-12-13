

// function removeSpaces(str) {
//     let result = "";     

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             result += str[i];
//         }
//     }

//     return result;
// }


// console.log(removeSpaces("hello world"));   
// console.log(removeSpaces("  a b  c  "));   
// console.log(removeSpaces("no_spaces"));   


// function removeSpaces(str) {
//     return str.replaceAll(" ", "");
// }

function rm(str){
    var res = str.split(" ").join("");
    console.log(res);
}

rm("a b b");