function countDigits(str) {
  let count = 0;
  for (let char of str) {
    if (char >= '0' && char <= '9') {
      count++;
    }
  }
  return count;
}

console.log(countDigits("abc123"));    
console.log(countDigits("2025 year"));  
console.log(countDigits("no digits"));  
