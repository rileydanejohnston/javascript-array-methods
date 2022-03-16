// the from array takes input like a string and returns an array verson
// it can also be used to modify an array via callback function

// syntax: Array.from('Riley') = ['r', 'i', 'l', 'e', 'y'];

const name = 'riley';
const numArray = [1, 5, 10, 15];

const nameArray = Array.from(name);
const tripleArray = Array.from(numArray, item => item * 3);

console.log(nameArray);
console.log(tripleArray);