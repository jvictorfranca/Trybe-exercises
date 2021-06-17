const maiorPalavra = (string) => {
  let array = string.split(' ');
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (maior.length < array[index].length) {
      maior = array[index];
    }
  }
  return maior;
};

console.log(
  maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')
);
