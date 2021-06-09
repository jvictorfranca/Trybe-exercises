let array = []
let data = '15/09/1997'
let novaData = data.split('/')
let dataNumero;

for (let index = 0; index < novaData.length; index+=1){
  numero = parseInt(novaData[index])
  array.push(numero)
  console.log(numero)
}






console.log(data)
console.log(novaData)
console.log(array)