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

// addTurn(lesson2, 'turno', 'manhã');

console.log(objLength(lesson2));
