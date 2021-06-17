const mudaX = (string, nome) => {
  let array = string.split('x');

  let resposta = '';

  for (let index = 0; index < array.length; index += 1) {
    if (index == !array.length) {
      resposta = resposta + array[index] + nome;
    } else {
      resposta = resposta + array[index];
    }
  }
  return resposta;
};

// mudaX('Tryber x aqui!', 'jao');

const habilidades = (habilidades, string) => {
  habilidades = habilidades.sort();
  let answer = '';
  for (let index = 0; index < habilidades.length; index += 1) {
    answer += habilidades[index] + ', ';
  }
  return `${string} Minhas melhores habilidades são: ${answer}`;
};

console.log(
  habilidades(
    ['jogar bem', 'ser bunito', 'olar', 'amar ao proximo'],
    mudaX('Ola tryber x aqui!', 'João')
  )
);
