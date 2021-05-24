function sum(array){
  let soma = 0;
  for(let index=0 ; index<array.length ; index+=1){
    soma += array[index]
    }
  return soma
}

console.log(sum([5, 3, 1]))