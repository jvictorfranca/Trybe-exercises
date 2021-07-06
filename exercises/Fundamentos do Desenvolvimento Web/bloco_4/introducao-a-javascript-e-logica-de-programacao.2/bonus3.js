let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sNumbers = []

for(let indice = 0; indice<numbers.length; indice+=1){
  let nextNumber;
  if(indice< numbers.length - 1) {nextNumber = numbers[indice+1]}
  else{nextNumber=2}
  sNumbers.push(numbers[indice]*nextNumber)
}
console.log(sNumbers)

