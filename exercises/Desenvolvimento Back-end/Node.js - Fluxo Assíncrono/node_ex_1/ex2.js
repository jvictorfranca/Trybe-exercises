// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
const funcao = (param1, param2, param3) => {
  return new Promise((resolve, reject)=>{
    if(typeof param1 !== "number" 
    ||typeof param2 !== "number" 
    ||typeof param3 !== "number" ){
      reject(new Error("Informe apenas números"))
    }
    const result = (param1 + param2) * param3;
    if(result < 50){reject(new Error("Valor muito baixo"))}
    resolve(result)

  })
}

funcao(Math.floor(Math.random() * 2 + 1),
 Math.floor(Math.random() * 100 + 1),
 Math.floor(Math.random() * 100 + 1))
.then(result => console.log(result))
.catch(err => console.log(err))