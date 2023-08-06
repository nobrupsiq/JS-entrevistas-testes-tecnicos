// • Crie um programa que une dois arrays
// • Você pode criar uma função que recebe dois arrays como argumentos
// • E no retorno um novo array com os dois arrays originais
// • Exiba os resultados no console ou na tela (HTML)

function concatArrays(array, array2) {
  return array.concat(array2);
}

const arr = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd'];

console.log(concatArrays(arr, arr2));
