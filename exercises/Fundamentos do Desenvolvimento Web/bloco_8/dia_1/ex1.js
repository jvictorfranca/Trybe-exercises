const newEmployees = (criaPessoa) => {
  const employees = {
    id1: criaPessoa('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: criaPessoa('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: criaPessoa('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const criaEmail = (nomeCompleto) => {
  nomeCompleto = nomeCompleto.toLowerCase();
  let nomeArray = nomeCompleto.split(' ');
  let email = '';

  for (let index = 0; index < nomeArray.length; index += 1) {
    email += nomeArray[index] + '_';
  }

  email = email.slice(0, -1);

  email += '@trybe.com';

  return email;
};

const pessoa = (nomeCompleto) => {
  const pessoa = {};
  pessoa['nome'] = nomeCompleto;

  pessoa['email'] = criaEmail(nomeCompleto);

  return pessoa;
};

console.log(newEmployees(pessoa));
