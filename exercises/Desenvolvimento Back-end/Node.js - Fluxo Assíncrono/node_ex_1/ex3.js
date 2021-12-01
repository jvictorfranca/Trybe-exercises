// Reescreva o código do exercício anterior para que utilize async/await .

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


const daResultado = async()=> {
  try{
    const resultado = await funcao(
      Math.floor(Math.random() * 2 + 1),
      Math.floor(Math.random() * 100 + 1),
      Math.floor(Math.random() * 100 + 1))
      console.log(resultado)      
  } catch(error){
    console.log(error.message)
  }

  

  }

daResultado()