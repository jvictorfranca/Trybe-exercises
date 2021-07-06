let pessoas = [
  {
    name: 'Joao',
    state: 'Mg',
  },

  {
    name: 'Caio',
    state: 'Sp',
  },

  {
    name: 'Luan',
    state: 'Rj',
  },
];

let states = [
  {
    short: 'Mg',
    full: 'Minas-Gerais',
  },
  {
    short: 'Sp',
    full: 'São Paulo',
  },

  {
    short: 'Rj',
    full: 'Rio de Janeiro',
  },
];

let logar = pessoas.map((pessoa) => {
  let findState = states.find((state) => state.short === pessoa.state);
  return `${pessoa.name} mora em ${findState.full}`;
});

console.log(logar);
