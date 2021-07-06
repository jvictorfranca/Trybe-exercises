let n = 21
let primos = []

for (index=1; index<=n ; index+=1){
let soma = 0
  for (divisores=1; divisores<=n; divisores+=1){
    if(index%divisores == 0) {soma += 1}
  }
  if (soma==2){primos.push(index)}
}
console.log(primos)