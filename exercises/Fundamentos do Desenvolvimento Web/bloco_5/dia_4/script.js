//fundo
let body = document.querySelector('body')
//cor
let text = document.querySelector('div#texto')

//adiciona if fundo

if (localStorage['fundo'] === undefined){ body.style.backgroundColor = 'black'}
else {
    body.style.backgroundColor = localStorage['fundo']}

//adiciona if cor

if (localStorage['cor'] === undefined){ text.style.color = 'black'}
else {
    text.style.color = localStorage['cor']}




function criaButaoCor(cor){
let lButCor1 = document.querySelector('#fundo')
let butCor1 = document.createElement('div')
lButCor1.appendChild(butCor1)
butCor1.style.backgroundColor = cor;
butCor1.style.width = '20px'
butCor1.style.height = '20px'
butCor1.style.margin = '5px'
butCor1.style.display = 'inline-block'
butCor1.className = 'fundo';


}

criaButaoCor('lightblue')
criaButaoCor('lightyellow')
criaButaoCor('white')

function criaButaoCorLetra(cor){
    let lButCor1 = document.querySelector('#cor')
    let butCor1 = document.createElement('div')
    lButCor1.appendChild(butCor1)
    butCor1.style.backgroundColor = cor;
    butCor1.style.width = '20px'
    butCor1.style.height = '20px'
    butCor1.style.margin = '5px'
    butCor1.style.display = 'inline-block';
    butCor1.className = 'cor';
}

criaButaoCorLetra('red')
criaButaoCorLetra('black')
criaButaoCorLetra('blue')


function mudaFundo(event){
    body.style.backgroundColor = event.target.style.backgroundColor
    localStorage['fundo'] = event.target.style.backgroundColor


}

let botaoFundo = document.querySelectorAll('#fundo div')
for (i = 0 ; i<botaoFundo.length; i+=1){
botaoFundo[i].addEventListener('click', mudaFundo)
}



function mudaLetra(event){
  text.style.color = event.target.style.backgroundColor
  localStorage['cor'] = event.target.style.backgroundColor
}




let botaoCor = document.querySelectorAll('div.cor')
for (i = 0 ; i < botaoCor.length; i+=1){
botaoCor[i].addEventListener('click', mudaLetra)
}