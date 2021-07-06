const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((sumA, curr) => {
    for (let index = 0; index < curr.length; index += 1) {
      if (curr[index].toLowerCase() === 'a') {
        sumA += 1;
      }
    }
    return sumA;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);
