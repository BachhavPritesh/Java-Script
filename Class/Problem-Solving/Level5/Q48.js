// function removeVowels(str) {
//   let result = "";

//   for (let char of str) {
//     if (
//       char !== 'a' && char !== 'e' && char !== 'i' &&
//       char !== 'o' && char !== 'u' &&
//       char !== 'A' && char !== 'E' && char !== 'I' &&
//       char !== 'O' && char !== 'U'
//     ) {
//       result += char;
//     }
//   }

//   return result;
// }

function removeVowels(str){
   let result = "";
   let vowel = "aeiouAEIOU";

   for(let char of str){
    if(!vowel.includes(char)){
        result+=char;
    }
   }

   return result;

}


console.log(removeVowels("hello"));      
console.log(removeVowels("JavaScript"));  
console.log(removeVowels("AEIOU"));      
