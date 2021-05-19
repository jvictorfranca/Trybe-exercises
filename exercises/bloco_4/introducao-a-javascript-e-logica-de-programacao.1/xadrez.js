let peca = "picanha"

switch(peca){
  case "peao":
    console.log("UMA casa na horizontal ou vertical")
    break;
  case "bispo":
    console.log("INFINITAS casas na diagonal")
    break;
    case "rei":
      console.log("UMA casa em qualquer posiçao")
      break;
    case "rainha":
      console.log("INFINITAS casas em qualquer posiçao")
      break;
    case "torre":
      console.log("Infinitas casas na horizontal ou vertical")
      break;
    case "cavalo":
      console.log("Movimento em L, duas casas na vertical e 1 na horizontal ou vice-versa.")
      break;
    default:
      console.log("isso não é uma peça")
}