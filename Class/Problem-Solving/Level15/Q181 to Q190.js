// Q181. Sum of Odd Numbers in Array

// function sumOdd(arr){
//     let sum = 0;
//     for(let num of arr){
//         if(num%2==1){
//             sum = sum+num;
//         }
//     }

//     return sum;
// }

// console.log(sumOdd([1,2,3,4,5]));

// function sumOdd(arr) {
//   return arr.reduce((sum, num) => {
//     if (num % 2 === 1) {
//       sum += num;  
//     }
//     return sum;
//   }, 0);
// }

// console.log(sumOdd([1, 2, 3, 4, 5])); 

//--------------------------------------------------------------------------------------------------------------//

// Q182. Swap Elements at Indices i and j

// function swap(arr, i, j) {
//   if (i === j) return arr;  

//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;

//   return arr;
// }


// console.log(swap([1, 2, 3, 4], 1, 3));  

// function swap(arr, i, j) {
//   if (i === j) return arr;  

//  [arr[i],arr[j]] = [arr[j],arr[i]]

//   return arr;
// }


// console.log(swap([1, 2, 3, 4], 1, 3));  

//--------------------------------------------------------------------------------------------------------------//

// Q187. Selection Sort (Ascending)
// function SelectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let max = arr[0];
//         let index = 0;

      
//         for (let j = 1; j < arr.length - i; j++) {
//             if (arr[j] > max) {
//                 max = arr[j];
//                 index = j;
//             }
//         }

    
//         [arr[index], arr[arr.length - 1 - i]] =
//         [arr[arr.length - 1 - i], arr[index]];
//     }

//     console.log(arr);
// }


// SelectionSort([5,3,2,1]);

//--------------------------------------------------------------------------------------------------------------//

// Q188. Insertion Sort (Ascending)


// function insertionSort(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }

//     console.log(arr);
// }

// insertionSort([44,233,55,2,1]);
 
//--------------------------------------------------------------------------------------------------------------//

// Q189. k-th Smallest Element (Using Sort)

// function kthSmallest(arr, k) {
   
//     arr.sort((a, b) => a - b);
    
    
//     return arr[k - 1];
// }


// console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); 


// function kthSmallest(arr, k) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
              
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

    
//     return arr[k - 1];
// }


// console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); 

//--------------------------------------------------------------------------------------------------------------//

// Q190. k-th Largest Element (Using Sort)

function kthLargest(arr, k) {
    let n = arr.length;

   
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }

 
    return arr[n - k];
}


console.log(kthLargest([7, 10, 4, 3, 20, 15], 2)); 

