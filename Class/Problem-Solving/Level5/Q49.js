// function removeVowels(str) {
//   let result = "";

//   for (let char of str) {
//     if (
//      char!=0 && char!=1 &&  char!=2 && char!=3 &&   char!=4 && char!=5 &&   char!=6 && char!=7 &&  char!=8 && char!=9
     
//     ) {
//       result += char;
//     }
//   }

//   return result;
// }


// function removeVowels(str){
//    let result = "";
//    let vowel = "0123456789";

//    for(let char of str){
//     if(!vowel.includes(char)){
//         result+=char;
//     }
//    }

//    return result;

// }

function removeVowels(str){
   str = str.replaceAll('a',"").replaceAll('e',"").replaceAll('i',"").replaceAll('o',"").replaceAll('u',"").replaceAll('A',"").replaceAll('E',"").replaceAll('I',"").replaceAll('O',"").replaceAll('U',"");
   return str;
}




console.log(removeVowels("he2llo"));      
console.log(removeVowels("Java997Script"));  
console.log(removeVowels("AE875IOU"));      