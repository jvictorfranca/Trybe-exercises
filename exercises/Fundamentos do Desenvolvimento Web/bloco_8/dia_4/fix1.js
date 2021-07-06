const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = (soma, numero) => (numero % 2 === 0 ? (soma += numero) : soma);

console.log(numbers.reduce(somaPar, 0));
