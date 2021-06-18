const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (object, key, value) => {
  let newKey = key;
  let newValue = value;
  object[newKey] = newValue;
};

const listKeys = (object) => Object.keys(object);

const objLength = (object) => Object.keys(object).length;

const objValues = (object) => Object.values(object);

// addTurn(lesson2, 'turno', 'manhã');

// let allLessons = { lesson1, lesson2, lesson3 }; // Para juntar objetos dentro de um objeto.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const contaAlunos = (objeto) => {
  let contador = 0;
  for (let index = 0; index < Object.keys(objeto).length; index += 1) {
    contador += objeto[Object.keys(objeto)[index]].numeroEstudantes;
  }
  return contador;
};

console.log(contaAlunos(allLessons));

const obtemValor = (objeto, posição) => {
  let key = Object.values(objeto)[posição];

  return key;
};

const existeNoObj = (objeto, chave, valor) => {
  let answer;
  if (objeto[chave] === valor) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
};

console.log(existeNoObj(lesson3, 'turno', 'manha'));
