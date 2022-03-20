// Promise.resolve
// Promise.reject
// Promise.all

// I use Promise.reject() in my API classes but it's cool to know you can manipulate the promise outcome without creating a promise instance with new Promise()


Promise.resolve('PROMISE WORKED')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.reject('PROMISE FAILED')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));