let array = [2, 3, 2, 5, 8, 2, 3]


//Acha o maximo
let maximo = array[0]
for (let index in array) {
if(maximo<array[index]){maximo = array[index]}

}


//Conta todos os numeros até o maximo
let aparição={};
let soma = 0

for (indexM = 0; indexM <= maximo ; indexM+=1){
  soma = 0
  for(index in array){
    if(array[index] === indexM) {soma +=1}
  }

aparição[indexM]=soma
  
}
console.table(aparição)

