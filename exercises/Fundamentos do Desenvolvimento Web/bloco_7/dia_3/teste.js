
function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // for (let index = 0; remaining <= 0 ; index=index){
  //   console.log(remaining)
  //   if (remaining >= coins[index]){
  //     change.push(coins[index])
  //     remaining = remaining - coins[index]
  //   }
  //   else
  //    {index +=1}
  // }


let index = 0

  while(remaining!== 0){

      if (remaining >= coins[index]){
        change.push(coins[index])
        remaining = remaining - coins[index]
      }
      else
       {index +=1}
      console.log(remaining)
      console.log(change)
      }
    
      return change;
  }
  // escreva seu código aqui...

 

getChange(245, 300)
