const resultSorteio = (nApostado, funcaoCheckIgual) => {
  const sorteado = Math.floor(Math.random() * 5) + 1;
  let result = funcaoCheckIgual(nApostado, sorteado);
  if (result === true) {
    console.log('Parabéns você ganhou');
  } else {
    console.log('Tente Novamente');
  }
};

const checkIgual = (apostado, sorteado) => apostado === sorteado;

resultSorteio(4, checkIgual);
