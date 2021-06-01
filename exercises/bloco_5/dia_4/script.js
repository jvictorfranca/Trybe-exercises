//fundo
let body = document.querySelector('body')

if (localStorage['fundo'] === undefined){ body.style.backgroundColor = 'black'}
else {
    body.style.backgroundColor = localStorage['fundo']}

//adiciona cor



function criaButaoCor(cor){
let lButCor1 = document.querySelector('#fundo')
let butCor1 = document.createElement('div')
lButCor1.appendChild(butCor1)
butCor1.style.backgroundColor = cor;
butCor1.style.width = '20px'
butCor1.style.height = '20px'
butCor1.style.margin = '5px'
butCor1.style.display = 'inline-block'
butCor1.className = cor;


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
    butCor1.className = cor;
}

criaButaoCorLetra('red')
criaButaoCorLetra('black')
criaButaoCorLetra('blue')


function mudaFundo(event){
    body.style.backgroundColor = event.target.style.backgroundColor
    localStorage['fundo'] = event.target.style.backgroundColor


}

let botao = document.querySelectorAll('#fundo div')
for (i = 0 ; i<botao.length; i+=1){
botao[i].addEventListener('click', mudaFundo)
}
