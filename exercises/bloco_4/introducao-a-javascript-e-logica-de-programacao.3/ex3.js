let n = 5
let asteriscos= ''
let espaços= ''


for (let index=0 ; index<n; index+=1) {
  asteriscos+= '*'
  espaços=''
  for(let index2=0 ; index2<(n-index); index2+=1){
    espaços += ' '
  }
  console.log(espaços+asteriscos)
}





