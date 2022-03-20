// interesting that if you have 2 successful responses (like there currently is), the response will be an array of both successful responses

// if one fails, the response array is only the failed response

// if you make them both fail, it only prints the first fail... interesting.

const promise1 = new Promise((resolve, reject) => {
  const randomNum = 50;

  if (randomNum > 10) {
    resolve('promise1: success');
  } 
  else {
    reject('promise1: fail');
  }
});

const promise2 = new Promise((resolve, reject) => {
  const randomNum = 50;

  if (randomNum > 10) {
    resolve('promise2: success');
  } 
  else {
    reject('promise2: fail');
  }
});

const myPromises = [promise1, promise2];

Promise.all(myPromises)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })