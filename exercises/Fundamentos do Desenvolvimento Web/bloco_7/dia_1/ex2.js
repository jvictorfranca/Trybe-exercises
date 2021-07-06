//com .sort
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(
//   `Os números ${oddsAndEvens.sort(function (a, b) {
//     return a - b;
//   })} estão em ordem crescente`
// );

//Sem .sort

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescentePasso = (array) => {
  const crescente = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1]) {
      crescente.push(array[index + 1]);
      crescente.push(array[index]);
      index += 1;
    } else {
      crescente.push(array[index]);
    }
  }
  return crescente;
};

const crescente = (array) => {
  let resultado = array;
  for (let index = 0; index < array.length + 1; index += 1) {
    resultado = crescentePasso(resultado);
  }
  return resultado;
};

console.log(`Os números ${crescente(oddsAndEvens)} estão na ordem crescente`);
