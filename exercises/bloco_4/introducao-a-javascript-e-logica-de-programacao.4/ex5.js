let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente']='sim'


info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
};
info2['recorrente']='sim'


for(let key in info){

if (info['recorrente'] === info2['recorrente'] && info[key] == 'sim') {console.log ('ambos ' + key +'s' )}
  else {console.log(key + ': ' + info[key] + ' e ' + info2[key])}
}