const user = {
  username: 'Peter',
  auth(greeting) { // now this function has the greeting parameter
    console.log(`${greeting} ${this.username}`);
  }
};

const adminAuth = user.auth;

adminAuth.call(user, 'Hello');