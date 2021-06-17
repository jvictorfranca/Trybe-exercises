//Sem recurssividade

// const fatorial = (n) => {
//   let resultado = 1;
//   for (let index = 1; index <= n; index += 1) {
//     resultado = resultado * index;
//   }
//   return resultado;
// };

const fatorial = (n) => (n <= 1 ? 1 : n * fatorial(n - 1));

console.log(fatorial(5));
