// This is just some review of the theory of promises. 
// I'm more used to promises with fetch requests.

const request = new Promise((resolve, reject) => {
  const randomNum = 50;

  if (randomNum > 10) {
    resolve('num is greater than 10');
  } 
  else {
    reject('num is less than 10');
  }
})

request
  .then((res) => console.log(res))
  .catch((err) => console.log(err));