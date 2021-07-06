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

let curriculo = document.querySelector('#curriculo')

function clicaBotao(){
if (checaTudo() === true){
  let divcurriculo = document.createElement('div')
  
}
}

document.getElementById('inicio').DatePickerX.init()//Inicia o datePicker para fazer o input de data biito

new window.JustValidate('#formulario') // Valida o formulario. OBS: No HTML tem as propriedades :  required data-validate-field="text" Que a documentação manda por