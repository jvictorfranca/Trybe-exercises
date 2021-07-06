const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = (array) => {
  let otherWords = [];
  let middleWord = [];
  for (let index = 0; index < array.length; index += 1) {
    if (index === (array.length - 1) / 2) {
      middleWord.push(array[index]);
    } else {
      otherWords.push(array[index]);
    }
  }

  array.splice((array.length - 1) / 2, 1);

  return middleWord;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
