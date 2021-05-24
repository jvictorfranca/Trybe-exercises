//let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maiorNome(array)
{
let maximo = array[0].length
for (let index in array) {
  if (array[index].length > maximo) {maximo = array[index].length}
}

for (let index in array) {
  if (array[index].length=== maximo) {console.log(array[index])}
}

}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])