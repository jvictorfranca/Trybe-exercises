function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
for (i=0; i<dezDaysList.length; i+=1){
  locDay = document.querySelector('ul#days')
  let day = document.createElement('li')
  day.innerText = dezDaysList[i]
  day.className = 'day'
  if(dezDaysList[i] === 4
    || dezDaysList[i] === 11
    || dezDaysList[i] === 18
    || dezDaysList[i] === 25){
      day.className += ' fryday'
    }
    if(dezDaysList[i] === 24
      || dezDaysList[i] === 25
      || dezDaysList[i] === 31){
        day.className += ' holyday'
      }
  locDay.appendChild(day)
}

const feriados = []


//2

function feriadosButao(){
  let but = document.createElement('button')
  but.id = 'btn-holiday'
  butLocal = document.querySelector('div.buttons-container')
  butLocal.appendChild(but)
  but.innerText = 'Feriados'
}
feriadosButao()
//3
let background = 'lightblue'
let normalColor = '#eee'
let localizaHolyday = document.querySelectorAll('.holyday')

function mudaCor(){
  for (i=0; i<localizaHolyday.length; i+=1){
    if (localizaHolyday[i].style.backgroundColor === background){
  localizaHolyday[i].style.backgroundColor = normalColor
    }else {
    localizaHolyday[i].style.backgroundColor = background}

  }
}
let but = document.querySelector('#btn-holiday')
but.addEventListener('click', mudaCor)

//4

function sextasButao(){
  let but = document.createElement('button')
  but.id = 'btn-fryday'
  butLocal = document.querySelector('div.buttons-container')
  butLocal.appendChild(but)
  but.innerText = 'Sexta'
}
sextasButao()
//5.
let sextou = document.querySelectorAll('.fryday')

let originalSexta = [];
  for (let i=0; i<sextou.length; i+=1){
    originalSexta.push(sextou[i].innerText)
  }
  
function mudaSextou(){
  
  for (let i = 0; i < sextou.length; i+=1){
    if (sextou[i].innerText === 'sextou'){
      sextou[i].innerText = originalSexta[i]
    }else{
      sextou[i].innerText = 'sextou'
    }
  }
}




let but2 = document.querySelector('#btn-fryday')
but2.addEventListener('click', mudaSextou)




//6
let days2 = document.querySelector('#days')

days2.addEventListener("mouseover", zoomIn)
days2.addEventListener("mouseout", zoomOut)


function zoomIn(event) {
  event.target.style.fontSize = '30px'
}

function zoomOut(event) {
  event.target.style.fontSize = '18px'
}

//7

function criaSpan(texto){
  let span1 = document.createElement('span')
  span1.innerText = texto
  let locateDiv = document.querySelector('.my-tasks')
  locateDiv.appendChild(span1)
}

criaSpan('oi tenho tarefa')
criaSpan('muita tarefa')

//8
function corPraVida(cor){
  let div = document.createElement('div')
  div.style.backgroundColor = cor
  let locate = document.querySelector('.my-tasks')
  locate.appendChild(div)

}

corPraVida('red')

function taskSelected(event){
  if (event.target.style.backgroundColor === "red")
  {event.target.style.backgroundColor = 'green'
  }else{event.target.style.backgroundColor = 'red'}
}

let div2 = document.querySelector('div.my-tasks div')

div2.addEventListener('click', taskSelected)


//bonus

let button = document.querySelector('#btn-add')
let input = document.querySelector('#task-input')
let tasklist = document.querySelector('.my-tasks')

function adicionaTask(){
  let msg = input.value
  if (msg.length > 0) {
    liNova = document.createElement('li')
    liNova.innerText = msg
    tasklist.appendChild(liNova)
    input.value = ''
  }else{alert('erro irmao')}
  
}

function adicionaTaskEnter(event){
  let msg = input.value
  if (msg.length > 0 && event.keyCode===13) {
    liNova = document.createElement('li')
    liNova.innerText = msg
    tasklist.appendChild(liNova)
    input.value = ''
  }else if (msg.length ==0 && event.keyCode===13){alert('erro irmao')}
  
}

button.addEventListener('click', adicionaTask)
input.addEventListener('keyup', adicionaTaskEnter)
