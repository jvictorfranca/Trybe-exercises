const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  let numeroArray = [];
  for (let index = 0; index < array.length; index += 1)
    numeroArray.push(array[index].length);
  return numeroArray;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
