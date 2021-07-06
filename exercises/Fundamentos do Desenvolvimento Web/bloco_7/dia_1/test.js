let customer = {
  name: 'joao',
  lastname: 'victor',
  workAs: 'estudante',
};

const atualizaObjeto = (object, key, value) => {
  let newKey = key;
  let keyValue = value;
  object[newKey] = keyValue;
};

atualizaObjeto(customer, 'food', 'hamburguer');

console.log(Object.entries(customer));

for (let index = 0; index < Object.entries(customer).length; index += 1) {
  console.log(
    `${Object.entries(customer)[index][0]} : ${
      Object.entries(customer)[index][1]
    }`
  );
}
