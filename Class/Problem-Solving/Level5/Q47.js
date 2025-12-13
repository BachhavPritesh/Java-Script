function countUppercase(str) {
  let count = 0;

  for (let char of str) {
    if (char >= 'a' && char <= 'z') {
      count++;
    }
  }
  

  return count;
}

// function countUppercase(str) {

//   let count2 = 0;
//   for(let i = 0;i<str.lenghth;i++){
//     if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
//       count2++;
//     }
//   }

//   return count2;
// }

console.log(countUppercase("HeLLo"));   
console.log(countUppercase("javascript"));
console.log(countUppercase("JS 101"));   
