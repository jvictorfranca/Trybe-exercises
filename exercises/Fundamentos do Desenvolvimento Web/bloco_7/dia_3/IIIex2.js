const assert = require('assert');
const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let numberTrade = 1;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results += numberTrade.toString();
      numberTrade += 1;
    } else {
      results += characters[index];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
