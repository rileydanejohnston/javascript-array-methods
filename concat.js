// Array.concat() combines 2 arrays.
// think about concatenating a string, you're adding one to the other

// syntax
// array1.concat(array2)

const arr1 = [17, 54, 34, 32, 91, 67, 13, 98, 38, 43];
const arr2 = [38, 31, 25, 14, 11, 24, 89, 67, 30, 88];
const arr3 = [77, 76, 73, 45, 18];


const concatArray1 = arr1.concat(arr3);
const concatArray2 = arr2.concat(arr1);

console.log(concatArray1);
console.log(concatArray2);