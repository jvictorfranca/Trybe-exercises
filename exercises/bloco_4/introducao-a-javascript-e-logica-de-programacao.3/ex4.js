let n = 21
let asteriscos= '*'
let espaços= ''

// Fazer o for de numero de colunas

for(let indexColuna = 0 ; indexColuna < ((n+1)/2); indexColuna+=1 ) {

  
  // fazer o For do numero de asteriscos
  asteriscos = '*'
  for(let indexAsterisco=0; indexAsterisco < indexColuna ; indexAsterisco+=1 ){
    asteriscos +="**"
  }
  //fazer o for do numero de espaços
  espaços=''
  for(let indexEspaços = indexColuna; indexEspaços<((n-1)/2) ; indexEspaços +=1 ){
    espaços +=' '
  }
//logar
console.log(espaços+asteriscos)
}


