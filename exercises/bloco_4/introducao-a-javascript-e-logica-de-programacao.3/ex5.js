let n = 13
let espaço = '';
let asterisco = '*';
let espaçamento = ''
let base = '*'


for (let indiceColuna = 1; indiceColuna < (n+1)/2; indiceColuna+=1){
  base+='**'}

for (let indiceColuna = 0; indiceColuna < (n+1)/2; indiceColuna+=1){
  espaço = ''
for(let indiceEspaço = indiceColuna+1; indiceEspaço < (n+1)/2  ; indiceEspaço+=1){
  espaço +=" "
}
espaçamento = ' '
for(let indiceEspaçamento = 1; indiceEspaçamento<indiceColuna; indiceEspaçamento+=1){
  espaçamento +='  '
}

if (indiceColuna==0){console.log(espaço+asterisco)}
else if (indiceColuna == (n+1)/2-1){console.log(base)}

else{console.log(espaço+asterisco+espaçamento+asterisco)}
}