// // Q161. Count Positive, Negative, and Zero

// function count(arr){
//     let positive = 0;
//     let Negative = 0;
//     let zero = 0;

//     for(let num of arr){
//         if(num>0){
//             positive++;
//         }
//         else if(num<0){
//             Negative++
//         }
//         else{
//             zero++;
//         }
//     }

//     console.log("Positive: "+ positive + ","+ "Negative: " + Negative + ","+ "Zero: " + zero);
    

// }

// count([1,2,3,4,0,0,0,-1,-2]);


//-----------------------------------------------------------------------------------------------------------------//

// Q162. Triple Each Element

// function triple(arr){
//     let res = [];

//     for(let num of arr){
//         res.push(num*3);
//     }

//     return res;
// }

// console.log(triple([1,2,3]));

//-----------------------------------------------------------------------------------------------------------------//

// Q163. Absolute Values of Array Elements

// function absolute(arr){
//     let res = [];

//     for(let num of arr){
//         res.push(Math.abs(num));
//     }

//     return res;
// }

// console.log(absolute([1,2,-3]));

//-----------------------------------------------------------------------------------------------------------------//

// Q164. All Elements Even?

// function allEven(arr){
//     for(let num of arr){
//         if(num%2 == 0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }

// console.log(allEven([2,4,6]));

//-----------------------------------------------------------------------------------------------------------------//

// Q165. At Least One Even?

// function OneEven(arr){
//     for(let num of arr){
//         if(num%2 == 0){
//             return true;
//         }
    
//     }

//      return false;
// }

// console.log(OneEven([1,2,3,3,3]));

//-----------------------------------------------------------------------------------------------------------------//

// Q166. All Elements Positive?

// function allPositive(arr){
//     for(let num of arr){
//         if(num<=0){
//             return false;
//         }
    
//     }

//    return true;

// }

// console.log(allPositive([1,2,3,4,5,-1]));

//-----------------------------------------------------------------------------------------------------------------//

// Q167. Count Elements Greater Than k

// function countElements(arr){
//     let k = 5;
//     let count = 0
//     for(let num of arr){
//         if(num>k){
//             count++
//         }
//     }

//     return count;
// }

// console.log(countElements([1,2,3,4,5,6,7,87,9]));

//-----------------------------------------------------------------------------------------------------------------//

// Q168. Index of Maximum Element

// function indexMax(arr){
//     let max = arr[0];
//     let index;

//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//             index = i;  
//         }
//     }

//     return index;
// }

// console.log(indexMax([1,2,34,5,65]));

//-----------------------------------------------------------------------------------------------------------------//

// Q169. Index of Minimum Element

// function indexMin(arr){
//     let min = arr[0];
//     let index = 0;

//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]<min){
//             min = arr[i];
//             index = i;  
//         }
//     }

//     return index;
// }

// console.log(indexMin([1,2,34,5,65,0]));

//-----------------------------------------------------------------------------------------------------------------//

// Q170. Contains Any Duplicate?

// function Duplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }


// console.log(Duplicate([1, 2, 3, 1])); 

//-----------------------------------------------------------------------------------------------------------------//

// Q171. Unique Elements Without Set

// function Unique(arr){
//     let res = [];

//     for(let i = 0;i<arr.length;i++){
//         let present = false;
//         for(let j = 0;j<res.length;j++){
//             if(arr[i]===res[j]){
//                 present = true;
//                 break;
//             }
//         }

//         if(present == false){
//             res.push(arr[i]);
//         }
//     }

//     return res;
// }

// console.log(Unique([1,1,1,2,3,3,2]));

// function unique(arr){
//     let res = [];
//     let obj = {};

//     for(let num of arr){
//         if(obj[num]==undefined){
//             obj[num]=true;
//             res.push(num);
//         }
//     }

//     return res;
// }

// console.log(unique([1,1,1,2,3,4,4]));

//-----------------------------------------------------------------------------------------------------------------//

// Q172. Strictly Increasing Sorted Array?

// function strictySorted(arr){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]>=arr[i+1]){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(strictySorted([1,2,3,4]));
// console.log(strictySorted([2,1,2,3,4]));

// function strictySorted(arr){
//     let obj = {}
//     obj.prev = arr[0];

//     for(let num of arr){
//         if(obj.prev>num){
//             return false;
//         }

//         obj.prev = num;
//     }

//     return true;
// }

// console.log(strictySorted([1,2,3,4]));
// console.log(strictySorted([1,2,3,2]));

//-----------------------------------------------------------------------------------------------------------------//

// Q173. Move All Negative Numbers to Front

// function move(arr){
//     let res = [];

//     for(let num of arr){
//         if(num>0){
//             res.push(num);
//         }
//         else{
//             res.unshift(num);
//         }
//     }

//     return res;
// }

// console.log(move([1,2,3,4,-1,-2,-3]));

// function move(arr){
//     let obj = {
//         negative : [],
//         others : []
//     }

//     for(let num of arr){
//         if(num<0){
//             obj.negative.push(num);
//         }
//         else{
//             obj.others.push(num);
//         }
//     }

//     return obj.negative.concat(obj.others);
// }

// console.log(move([1,2,3,4,0,-1,-2,-3,-4]));

//-----------------------------------------------------------------------------------------------------------------//

// Q174. Maximum Difference (max - min)

// function maximumDifference(arr){
//     let max = arr[0];
//     let min = arr[0];

//     for(let num of arr){
//         if(num>max){
//             max=num;
//         }
//     }

//     for(let num of arr){
//         if(num<min){
//             min = num;
//         }
//     }

//     return max-min;
// }

// console.log(maximumDifference([1,2,3,4,5]));

//-----------------------------------------------------------------------------------------------------------------//

// Q175. Elements at Even Indices

// function evenIndex(arr){

//     let res = []

//     for(let i = 0;i<arr.length;i++){
//         if(i%2==0){
//            res.push(arr[i]);
//         }
//     }

//     return res;
// }

// console.log(evenIndex([1,2,3,4,5,6]));

//-----------------------------------------------------------------------------------------------------------------//

// Q176. Elements at Odd Indices

// function oddIndex(arr){

//     let res = []

//     for(let i = 0;i<arr.length;i++){
//         if(i%2!=0){
//            res.push(arr[i]);
//         }
//     }

//     return res;
// }

// console.log(oddIndex([1,2,3,4,5,6]));

//-----------------------------------------------------------------------------------------------------------------//

// Q177. Count Strings with Length > 3

// function string(str){

//     let count = 0;

//     for(let char of str){
//         if(char.length>3){
//             count++;
//         }
//     }

//     return count;
// }
// console.log(string(["abv","sfsd","fdfdfff"]));

// -----------------------------------------------------------------------------------------------------------------//

// Q178. First Character of Each String

// function first(str){
//     let res = [];
//     for(let word of str){
//         res.push(word[0]);
//     }
//     return res;
// }

// console.log(first(["fbfb","ADS"]));

// -----------------------------------------------------------------------------------------------------------------//

// Q179. Remove Empty Strings from Array

// function empty(str){
//     let res = [];

//     for(let char of str){
//         if(char != ""){
//             res.push(char);
//         }
//     }

//     return res;
// }

// console.log(empty(["","wfefff","","dfd"]));

// function empty(str){
//     const arr = str.filter(word => word != "");
//     return arr;
// }

// console.log(empty(["","fsdff"]));

// function empty(str){
//     for(let i = 0;i<str.length;i++){
//         if(str[i]==""){
//             str.splice(i,1);
//             i=i-1
//         }
//     }

//     console.log(str);
// }

// empty(["","sfdf",""]);

// -----------------------------------------------------------------------------------------------------------------//

// Q180. Sum of Even Numbers in Array

// function sumEven(arr){
//     let sum = 0;
//     for(let num of arr){
//         if(num%2==0){
//             sum = sum+num;
//         }
//     }

//     return sum;
// }

// console.log(sumEven([1,2,3,4,5]));

// function sumEven(arr) {
//   return arr.reduce((sum, num) => {
//     if (num % 2 === 0) {
//       sum += num;  
//     }
//     return sum;
//   }, 0);
// }

// console.log(sumEven([1, 2, 3, 4, 5])); 


// -----------------------------------------------------------------------------------------------------------------//