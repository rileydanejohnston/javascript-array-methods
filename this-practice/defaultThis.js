function logThisStrict() {
  'use strict';
  console.log(this);
}



function logThis() {
  console.log(this);
}

logThis();

// logThisStrict();