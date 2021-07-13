function encode(string) {
  let codificador = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let codigo = '';
  let adicao;
  for (let index = 0; index < string.length; index += 1) {
    adicao = '';
    for (let key in codificador) {
      if (string[index] === key) {
        adicao += codificador[key];
      }
    }
    if (adicao.length === 1) {
      codigo += adicao;
    } else {
      codigo += string[index];
    }
  }
  return codigo;
}
function decode(string) {
  let decodificador = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let codigo = '';
  let adicao;
  for (let index = 0; index < string.length; index += 1) {
    adicao = '';
    for (let key in decodificador) {
      if (string[index] === key) {
        adicao += decodificador[key];
      }
    }
    if (adicao.length === 1) {
      codigo += adicao;
    } else {
      codigo += string[index];
    }
  }
  return codigo;
}

module.exports = {
  encode,
  decode
}