// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1Localiza = document.querySelector('body')
let h1 = document.createElement('h1')
h1.innerText = 'Exercício 5.2 - JavaScript DOM'
h1Localiza.appendChild(h1)
// 2. Adicione a tag div com a classe main-content como filho da tag body ;
let divMainLocaliza = document.querySelector('body')
let divMain = document.createElement('div')
divMain.className = 'main-content'
divMainLocaliza.appendChild(divMain)
// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divCenterLocaliza = document.querySelector('.main-content')
let divCenter = document.createElement('div')
divCenter.className='center-content'
divCenterLocaliza.appendChild(divCenter)
// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let pLocaliza = document.querySelector('div.center-content')
let p = document.createElement('p')
p.innerText = 'isso é um belo texto sim meu amigo'
pLocaliza.appendChild(p)


// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divLeftLocaliza = divCenterLocaliza
let divLeft=document.createElement('div')
divLeft.className = 'left-content'
divLeftLocaliza.appendChild(divLeft)
// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divRightLocaliza = divCenterLocaliza
let divRight=document.createElement('div')
divRight.className = 'right-content'
divRightLocaliza.appendChild(divRight)
// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let imgLocaliza = document.querySelector('div.left-content')
let img = document.createElement('img')
img.src= 'https://picsum.photos/200'
img.className='small-image'
imgLocaliza.appendChild(img)
// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ulLocaliza = document.querySelector('div.right-content')
let ul = document.createElement('ol')
ulLocaliza.appendChild(ul)

function addLi(texto){
  let liLocaliza = document.querySelector('div.right-content').firstChild
  let li = document.createElement('li')
  li.innerText = texto
  liLocaliza.appendChild(li)
}

addLi('um')
addLi('dois')
addLi('tres')
addLi('quatro')
addLi('cinco')
addLi('seis')
addLi('sete')
addLi('oito')
addLi('nove')
addLi('dez')
// 9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
function addH3(texto){
  let h3Localiza = document.querySelector('.main-content')
  let h3 = document.createElement('h3')
  h3.innerText=texto
  h3.className = 'description'
  h3Localiza.appendChild(h3)
}

addH3('olar')
addH3('como')
addH3('vai?')

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 1. Adicione a classe title na tag h1 criada;
h1.className += ' title'
// 2. Adicione a classe description nas 3 tags h3 criadas;
let h3 = document.createElement('h3')
h3.className += ' description'
// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let removeLocaliza = document.querySelector('.main-content')
removeLocaliza.removeChild(removeLocaliza.firstChild.nextSibling)
// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
let centerDiv = document.querySelector('.right-content');
centerDiv.style.marginRight = 'auto'

// 5. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
let trocaCor = document.querySelector('.center-content').parentNode
trocaCor.style.backgroundColor = 'green'
// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
localizaLista = document.querySelector('ol')
localizaLista.removeChild(localizaLista.childNodes[9])
localizaLista.removeChild(localizaLista.childNodes[8])