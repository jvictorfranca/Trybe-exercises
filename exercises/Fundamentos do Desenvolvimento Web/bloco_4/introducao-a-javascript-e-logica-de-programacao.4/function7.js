function checaFim(word, ending){
  let soma=0
  for(let index = 0; index<ending.length ; index+=1){
    if(ending[index] === word[word.length-ending.length+index]) {soma +=1}
  }
if (soma === ending.length) {console.log ('Deu bom')}
else {console.log('Deu ruim')}



}

checaFim('So baum dimais', 'o baum dimais')
