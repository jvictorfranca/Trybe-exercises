
function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

let operador = 0;
  for (let index = 0; index < coins.length; index+=1){
operador = remaining/coins[index]
operador = Math.floor(operador)
    for(let index2=0; index2<operador; index2+=1){
      change.push(coins[index])
    }
    remaining = remaining - operador*coins[index]

}
return change
}

getChange(12, 400)