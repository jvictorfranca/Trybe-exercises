const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// // Sem reduce
// function flatten() {
//   let flattened = [];
//   arrays.forEach((array) => array.forEach((value) => flattened.push(value)));
//   return flattened;
// }

function flatten() {
  return arrays.reduce((flattened, curr) => flattened.concat(curr), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
