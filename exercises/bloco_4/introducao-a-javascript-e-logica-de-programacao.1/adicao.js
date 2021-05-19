let a = 6
let b = 5
let conta="modulo"

let adicao = a+b
let subtracao = a-b
let multiplicacao = a*b
let divisão = a/b
let modulo = a%b

switch(conta){
  case "adicao":
    console.log(adicao)
    break;
  case "subtracao":
    console.log(subtracao)
    break;
  case "multiplicacao":
    console.log(multiplicacao)
    break;
  case "divisao":
    console.log(divisão)
    break;
  case "modulo":
    console.log(modulo)
    break;
  default:
    console.log("adicione a conta: adicao, subtracao, multiplicacao, divisao, modulo") 
}

