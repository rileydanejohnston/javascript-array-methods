// Array.filter() returns a new array based on conditions

// syntax: array.filter((item) => { return item > 5 })

const nums = [30, 81, 10, 43, 20, 0, 52, 93, 84, 11];
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

const overFifty = nums.filter((item) => {return item > 50});
const underFifty = obj.filter((item) => { return item.second < 50 });

console.log(overFifty);
console.log(underFifty);