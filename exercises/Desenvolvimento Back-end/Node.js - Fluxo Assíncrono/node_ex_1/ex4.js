// *Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// *Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
// *Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
// *Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
//*Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// *Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

const fs = require('fs').promises
const leArquivo = (name) => {
  
  try{
    const data = fs.readFileSync(`${name}`, "utf8")
    newData =  data
    console.log(newData)
  }catch(err){
    console.log(err.message)
  }
 
  
}

// leArquivo("simpsons.json")

const achaPersonagem = (id) => {
  try{
    const data = fs.readFileSync(`./simpsons.json`, "utf8")
    personagem = JSON.parse(data)[id-1]
    //console.log( `name: ${personagem.name}` )
    return personagem
  }catch(err){
    console.log(err.message)
  }
}

//achaPersonagem(2)


const achaPersonagemECaracteristica = (id) => {
  return new Promise((resolve, reject)=> {
    personagem = achaPersonagem(id)
    if(personagem){resolve(personagem)
    }
    reject(new Error("Personagem não encontrado"))
  })
}

// logaPersonagem = async() => {
  
//   const answer = await achaPersonagemECaracteristica(2)
//   console.log(answer)
// }


// logaPersonagem()

const tiraIDs = (arrayIds) => {
  const data = fs.readFile(`./simpsons.json`, "utf8")
  .then(result => JSON.parse(result))
  .then(result => {
    outputData = result
    arrayIds.forEach((item)=> {
      outputData = outputData.filter((itemData)=> itemData.id!= item )
    })
    fs.writeFile('./simpsons.json', JSON.stringify(outputData))
  })
 
}

//tiraIDs([6,10])



const soAlgunsIds = (arrayIds) => {
  const data = fs.readFile(`./simpsons.json`, "utf8")
  .then(result => JSON.parse(result))
  .then(result => {
      answer = result.filter((itemData)=> arrayIds.includes(parseInt(itemData.id))  )
    console.log(answer)
  })
 
}

soAlgunsIds([1,2])