 function indexMax (array){


let maximo = array[0]

for (let index in array) {
  
if (maximo <= array[index]) {maximo = array[index]}


}



for (let index in array) {if (array[index] === maximo ) {console.log (index)}

}

 }

