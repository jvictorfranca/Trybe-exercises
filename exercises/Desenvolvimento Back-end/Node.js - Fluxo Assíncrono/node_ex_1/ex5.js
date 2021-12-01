// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .

const fs = require('fs').promises

async function criaVariosArquivos(n){
  let promisesArray = []
  for(let index = 0; index<n; index+=1){
    promisesArray.push(fs.writeFile(`./meu_arquivo${index}.txt`, `Esse é meu belo arquivo numero ${index}.`))
  }
  await Promise.all(promisesArray)
}

//criaVariosArquivos(3)

async function leVariosArquivos(n){
  let promisesArray = []
  for(let index = 0; index<n; index+=1){
    promisesArray.push(fs.readFile(`./meu_arquivo${index}.txt`, 'utf-8'))
  }
  const answer = await Promise.all(promisesArray)
  console.log(answer)
}

leVariosArquivos(3)