let array = [2, 3, 2, 5, 8, 2, 3]


//Acha o maximo
let maximo = array[0]
for (let index in array) {
if(maximo<array[index]){maximo = array[index]}

}


//Conta todos os numeros até o maximo
let aparição = []
let soma = 0

for (indexM = 0; indexM <= maximo ; indexM+=1){
  soma = 0
  for(index in array){
    if(array[index] === indexM) {soma +=1}
  }

aparição.push(soma)
// console.log(indexM + ': '+ soma)                             LOGA AS APARIÇÕES DE CADA ITEM (INDEXM) 
}
// console.log('vetor aparição :' + '[' + aparição + ']')        MOSTRA O VETOR DE APARIÇÕES

//Acha a maior aparição

maximo = aparição[0]
for (let index in array) {
if(maximo<aparição[index]){maximo = aparição[index]}
}
// console.log("Max aparição :"+ maximo)                            LOGA A APARIÇÃO


for(let index in aparição) {
  if (aparição[index] === maximo) {console.log('numero ' + index)}

}

