// Q141. Middle Character(s) of a String

// function middleCharOfStr(str){
//     let len = str.length;
//     let mid = Math.floor(len/2);
    
//     if(len%2==0){
//         return str[mid-1] + str[mid];
//     }
//     else{
//         return str[mid];
//     }
// }

// console.log(middleCharOfStr("ABA"));
// console.log(middleCharOfStr("ABBA"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q142. Starts with 'a' (case-insensitive)

// function srtWithA(str){
//     if(str[0]=='a'||str[0]=='A'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(srtWithA("abcd"));
// console.group(srtWithA("vdv"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q143. Ends with '!'

// function endWithexcla(str){
//     let len = str.length-1;
//     if(str[len]== '!'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(endWithexcla("avdvfv!"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q144. Count Spaces in String

// function countSpaces(str){
//     let count = 0;
// for(let i=0;i<str.length;i++){
//     if(str[i]==" "){
//         count++;
//     }
// }

// return count;
// }

// console.log(countSpaces("acc acac cacac"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q145. Remove Leading and Trailing Spaces (Trim)

// function spaceTrim(str){
//     let res = str.trim();
//     return res;
// }

// console.log(spaceTrim("    BAB "));

//--------------------------------------------------------------------------------------------------------------------------//

// Q146. Replace All '?' with '!'

// function replace(str){
//     let res = str.split('?').join('!');

//     return res;
// }

// console.log(replace("where?"));

// function replace(str){
//     let res="";
//     for(let char of str){
//         if(char=='?'){
//             res+='!';
//         }
//         else{
//             res+=char;
//         }
//     }
//     return res;
// }

// console.log(replace("fjn????"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q147. Join Two Strings with a Space

// function joinStr(str1,str2){
//   let res = str1 + " " + str2;
//   return res;
// }

// console.log(joinStr("ab","cd"));

//--------------------------------------------------------------------------------------------------------------------------//

// // Q148. First Word of a Sentence

// function firstWord(str){
//     let res = str.split(" ");

//     return res[0];
// }

// console.log(firstWord("Hello shello"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q149. Last Word of a Sentence

// function LastWord(str){
//     let res = str.split(" ");

//     return res[res.length-1];
// }

// console.log(LastWord("Hello shello"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q150. Length of Longest Word in a Sentence


// function longestWord(str){
//     let res = str.split(" ");
//     let maxLength = 0;
//     for(let word of res){
//          if(word.length>maxLength){
//             maxLength = word.length;
//          }
//     }

//     return maxLength;
// }

// console.log(longestWord("ab abc abcd"));

// function longestWord(str){
//     let count = 0;
//     let res = [];
//     for(let i=0; i<str.length; i++){
//         if(i == str.length-1 && str[i] != " "){
//             count++;
//             res.push(count);
//         }
//         else if(str[i] != " "){
//             count++;
//         }
//         else if(count>0){
//             res.push(count);
//             count=0;
//         }
//     }
//     console.log(Math.max(...res));

    
// }

// function longestWord(str){
//     let words = str.split(" ");
//   let maxLen = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLen) {
//       maxLen = words[i].length;
//     }
//   }

//   return maxLen;
// }

// console.log(longestWord(' Hello! this is the problem solving class with JavaScript'))

//--------------------------------------------------------------------------------------------------------------------------//

// Q151. Shortest Word in a Sentence


// function shortestWord(str){
//     let res = str.split(" ");
//     let minLength = res[0].length;
//     for(let word of res){
//          if(word.length<minLength){
//             minLength = word.length;
//          }
//     }

//     return minLength;
// }

// console.log(shortestWord("ab abc abcd"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q152. Count 'the' as a Whole Word

// function countTHE(str){
//     let res = str.split(" ");
//     let count = 0;

//     for(let char of res){
//         if(char=="the"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countTHE("the meaning of the word the is"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q153. Contains Any Vowel

// function containsVowel(str) {
//     const vowels = "aeiou";
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(containsVowel("ABASCD"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q154. Contains Only Digits


// function containsOnlyDigits(str) {
//     if (str.length === 0) return false;

//     const digits = "0123456789";
//     for (let char of str) {
//         if (!digits.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(containsOnlyDigits("1234"))

//--------------------------------------------------------------------------------------------------------------------------//

// Q155. Contains Only Letters

// function containsOnlyDigits(str) {
//     if (str.length === "") return false;

//     const digits = "abcdefghijklmnopqrstvwxyz";
//     for (let char of str.toLowerCase()) {
//         if (!digits.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(containsOnlyDigits("abcsA"))

//--------------------------------------------------------------------------------------------------------------------------//

// Q156. Repeat Each Character Twice

// function repeatTwice(str){
//     let res = ''

//     for(let char of str){
//         res = res + char+char;
//     }

//     return res;
// }

// console.log(repeatTwice("abc"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q157. Remove Special Characters (Keep Only Letters and Digits)

// function removeSpecialChars(str) {
//     let result = '';
//     for (let char of str) {
       
//         if (
//             (char >= 'a' && char <= 'z') ||
//             (char >= 'A' && char <= 'Z') ||
//             (char >= '0' && char <= '9')
//         ) {
//             result += char;
//         }
//     }
//     return result;
// }

// console.log(removeSpecialChars("avdbd%#op"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q158. Count Words with Length ≥ 5

// function countWords(str){
//     let count = 0;
//     let res = str.split(" ");

//     for(let word of res){
//         if(word.length>=5){
//             count++
//         }
//     }

//     return count;
// }

// console.log(countWords("aba dbfbfbfb vbbf"));

//--------------------------------------------------------------------------------------------------------------------------//

// Q159. Anagram Check (Ignore Spaces and Case)

// function Anagram(str1, str2) {
//     let str1Arr = str1.split("");
//     let str2Arr = str2.split("");

//     let istrue = true;

//     for (let i = 0; i < str1Arr.length; i++) {
//         if (!(str2Arr.includes(str1Arr[i]))) {
//             istrue = false;
//             break
//         }
//     }
//     console.log(istrue);
// }

// Anagram("ABA","BAA");

//--------------------------------------------------------------------------------------------------------------------------//

// Q160. Pangram Check

// function Pangram(str){
//     str = str.toLowerCase();

//     for(let i = 97;i<=122;i++){
//         let letter = String.fromCharCode(i);
//         if(!str.includes(letter)){
//             return false;
//         }
//     }

//     return true;

// }

// console.log(Pangram("ABCD"));
// console.log(Pangram("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
// console.log(Pangram("Sphinx of black quartz, judge my vow"));

// function pangram(str) {
//   let arr = str.toLowerCase().split("").sort();
//   let ascii = 97;
//   for (let i = 0; i < arr.length; i++) {
//     let check = arr[i].charCodeAt();
//     if (ascii == check) {
//       ascii++;
//     }
//   }
//   console.log(ascii >= 123 ? true : false);
// }

// pangram("The quick brown fox jumps over a lazy dog")