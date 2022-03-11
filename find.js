// Array.find() checks if an item exists in an array

// syntax: num.find((item) => { return item === 50 });

const nums = [39, 39, 5, 57, 59, 68, 17, 47, 81, 54];
const obj = [
  {
    first: 30,
    second: 81,
    third: 10
  },
  {
    first: 43,
    second: 20,
    third: 0
  },
  {
    first: 52,
    second: 93,
    third: 84
  }
]

const findFive = nums.find((item) => { return item === 5 });

// returns first number under 50
const findUnderFifty = nums.find((item) => { return item < 50 });

// returns the object, not a new array
const objsUnderFifty = obj.find(({first, second, third}) => { 
  return first < 50 && second < 50 && third < 50;
})

console.log(findFive);
console.log(findUnderFifty);
console.log(objsUnderFifty);