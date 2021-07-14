const Animals = require('./ex6')

const findAnimalByName = (name) => (
  Animals.find((animal)=> animal.name === name)
);

const  getAnimalbyAge = async(age) => {
  // Adicione o código aqui.
let answer =  Animals.find((animal)=> animal.age === age)

if (answer !== undefined) {return answer}
else {throw('Nenhum animal com essa idade!')}
};
// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalbyAge(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalbyAge(15).catch(error => {
        expect(error).toEqual('Nenhum animal com essa idade!');
      });
    });
  });
});