function indexMax (array){


  let minimo = array[0]
  
  for (let index in array) {
    
  if (minimo >= array[index]) {minimo = array[index]}
  
  
  }
  
  
  
  for (let index in array) {if (array[index] === minimo ) {console.log (index)}
  
  }
  
   }