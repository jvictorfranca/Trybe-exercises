let estados = ['Acre (AC)','Alagoas (AL)', 'Amapá (AP)','Amazonas (AM)','Bahia (BA)',
'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 
'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)','Pará (PA)', 'Paraíba (PB)',
'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)',
'Rio Grande do Sul (RS)','Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)' , 
'Sergipe (SE)', 'Tocantins (TO)' ]

let selection = document.querySelector('#estado')

for (let index = 0 ; index < estados.length; index+=1) {
  let option = document.createElement('option')
  option.innerText = estados[index]
  option.classList.add('estado')
selection.appendChild(option)
}

let interrupt = document.querySelector('#interrupt')

function preventDef(event) {
  event.preventDefault();
}

let buton = document.querySelector('#interrupt')
buton.addEventListener('click', preventDef)


function checaNome(){
  let answer;
  let nome = document.querySelector('#name').value
  let n = nome.length
  if (n < 10 && n > 0) {
answer = true;

  }else {answer = false  
    alert('Número de caracteres incoerentes no seu nome')}
  return answer
}

function transformaData(string){
let array = [];
let data = string
let novaData = data.split('/')

for (let index = 0; index < novaData.length; index+=1){
  let numero = parseInt(novaData[index])
  array.push(numero)
}
return array
}

function confereDia(array){
  let answer;
  if (array[0] > 0 && array[0] <= 31){
    answer = true
  }else {answer = false}
  return answer
}

function confereMes(array){
  let answer;
  if (array[1] > 0 && array[1] <= 12){
    answer = true
  }else {answer = false}
  return answer
}

function confereAno(array){
  let answer;
  if (array[2] > 0){
    answer = true
  }else {answer = false}
  return answer
}

function confereData(string){
  let arrayData = transformaData(string)
  let answer;
  if (
    confereDia(arrayData) === true && confereMes(arrayData) === true && confereAno(arrayData) === true
  ) {answer = true} else{answer = false 
  alert('data no formato errado')}
  return answer
}

function checaTudo(){
  let data = document.querySelector('#inicio').value
  let name = document.querySelector('#name').value
  let answer
  if (confereData(data) === true && checaNome(name) === true) {
    answer = true

  }else {answer = false}
  return answer

}


let curriculo = document.querySelector('#curriculo')

function clicaBotao(){
if (checaTudo() === true){
  let divcurriculo = document.createElement('div')
  
}
}