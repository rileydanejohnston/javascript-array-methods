// the purpose of this file is to generate random numbers for the array methods.

let numString = '';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < 10; ++i) {
  if (i === 9) {
    numString += getRandomInt(100);
  }
  else {
    numString += `${getRandomInt(100)}, `;
  }
  
}

console.log(numString);