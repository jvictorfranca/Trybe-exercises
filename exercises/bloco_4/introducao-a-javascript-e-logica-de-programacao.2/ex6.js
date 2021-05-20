let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares=0
for(index=0; index<numbers.length; index+=1){
  if (numbers[index]%2 != 0 ) {impares = impares+1}
  else{impares=impares}
} 

if(impares>0) {console.log('Há ' + impares + ' números ímpares')}
else{console.log('Não há impares')}
