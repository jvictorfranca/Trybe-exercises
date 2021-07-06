//Define Variaveis e objetos
function nRomanos (numero){
let numerico=[]
let romanos = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000,

}

for (keys in romanos){
  console.log (keys + ': ' + romanos[keys])
}

//Transforma em array numerico

for (let index = 0; index<numero.length; index+=1){
  for(key in romanos){
      if(numero[index]===key) {numerico.push(romanos[key])}
  }

}
console.log(numerico)


//Soma os romanos
let conta = []
for(let index = 0; index<numerico.length; index+=1 ){
  if(numerico[index] < numerico[index+1]) {
    conta.push(numerico[index+1] - numerico[index])
    index+=1
  }
else {conta.push(numerico[index])}
}
console.log(conta)
let soma = 0
for(let index=0; index<conta.length; index+=1){
soma+= conta[index]
}
console.log(soma)
}

nRomanos("CMLXXV")