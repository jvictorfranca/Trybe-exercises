// Crie uma função que recebe três parâmetros retorna uma Promise 

// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.


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

funcao("olar", 2,true)
.then(result => console.log(result))
.catch(err => console.log(err))
