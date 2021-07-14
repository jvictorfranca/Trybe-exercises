const Animals = require('./ex6')

const findAnimalByName = (name) => (
  Animals.find((animal)=> animal.name === name)
);

const  getAnimal = async(name) => {

  return new Promise ((resolve, reject)=>{
    setTimeout( () => {
      let answer =  Animals.find((animal)=> animal.name === name)
    
      if (answer !== undefined) {resolve(answer)}
      else {reject('Nenhum animal com esse nome!')}
    }, 300)
  })



}






// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => {
        expect(error).toEqual('Nenhum animal com esse nome!');
      });
    });
  });
});