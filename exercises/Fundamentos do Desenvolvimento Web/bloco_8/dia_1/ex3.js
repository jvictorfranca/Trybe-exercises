const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrigeGabarito = (respostas, gabarito, checaCorreto) => {
  let nota = checaCorreto(gabarito, respostas);
  console.log(nota);
};

const checaCorreto = (gabarito, respostas) => {
  if (gabarito.length !== respostas.length) {
    return 'erro';
  }
  let sum = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostas[index]) {
      sum += 1;
    } else if (respostas[index] !== 'N.A') {
      sum -= 0.5;
    }
  }
  return sum;
};

corrigeGabarito(studentAnswers, rightAnswers, checaCorreto);
