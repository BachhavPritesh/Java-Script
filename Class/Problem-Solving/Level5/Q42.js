// function replaceAwithE(str) {
//     return str.replaceAll('a', 'e');
// }

// console.log(replaceAwithE("banana"));
// console.log(replaceAwithE("apple"));  
// console.log(replaceAwithE("cat"));   


function replaceAwithE(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            result += 'e';
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(replaceAwithE("abbac"));
