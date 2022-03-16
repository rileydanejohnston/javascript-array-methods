// flat can be used when you have an array within an array
// it 'flattens' the array by concatenating the inner array to the outer array

const nums = [86, 97, 20, 88, 72, 17, 37, 81, 7, 42, [60, 70, 80]];
const manyLayers = [30, 58, 60, 77, 6, 75, 7, 3, 26, 23, [[[[5, 6, 7]]]]];

// flat() with no arguments will remove a single layer of brackets
const flatArray = nums.flat();
//console.log(flatArray);

// the argument 4 represents the depth - how many brackets are the numbers wrapped in?
const flatArray2 = manyLayers.flat(4);

console.log(flatArray2);
