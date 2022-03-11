// Array.findIndex() returns the index of the first item matching a condition

// syntax: array.findIndex((item) => { return item > 50 });

const nums = [71, 4, 48, 61, 90, 39, 18, 35, 56, 66];

const index = nums.findIndex((item) => { 
  return item < 70 && item > 61;
});

console.log(index);