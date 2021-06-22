const checkLength = (password) => {
  if (password.length >= 8) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
};

const checkNotNull = (password) => {
  if (password === 'null' || password === null || password === '') {
    answer = false;
  } else {
    answer = true;
  }
  return answer;
};

const checkLower = (password) => {
  if (password.toUpperCase() !== password) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
};

const checkUpper = (password) => {
  if (password.toLowerCase() !== password) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
};

const testNumber = (password) => /\d/.test(password);

const testPassword = (password) => {
  let sum = 0;
  if (checkLength(password) === true) {
    sum += 1;
  }
  if (checkNotNull(password) === true) {
    sum += 1;
  }
  if (checkUpper(password) === true) {
    sum += 1;
  }
  if (checkLower(password) === true) {
    sum += 1;
  }
  if (testNumber(password) === true) {
    sum += 1;
  }

  let answer;
  if (sum < 3) {
    answer = 'not good enough';
  }
  if (sum >= 3) {
    answer = 'OK';
  }
  if (sum === 5) {
    answer = 'Supeer';
  }
  return answer;
};

const assert = require('assert');

assert.strictEqual(testPassword(''), 'not good enough');
assert.strictEqual(testPassword('oO1i'), 'OK', 'Ta ok não');
assert.strictEqual(testPassword('OoI12EssaÉBemBoaEin'), 'Supeer');
