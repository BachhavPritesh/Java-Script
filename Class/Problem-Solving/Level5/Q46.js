function countUppercase(str) {
  let count = 0;

  for (let char of str) {
    if (char >= 'A' && char <= 'Z') {
      count++;
    }
  }

  return count;
}

console.log(countUppercase("HeLLo"));   
console.log(countUppercase("javascript"));
console.log(countUppercase("JS 101"));   
