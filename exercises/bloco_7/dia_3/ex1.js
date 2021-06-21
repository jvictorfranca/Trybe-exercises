const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9, 'Ne 9 não senhor');
assert.strictEqual(sum(0, 0), 0, 'Ne 0 não senhor');
assert.throws(() => {
  sum('5', 5);
}, /^Error: parameters must be numbers$/);
