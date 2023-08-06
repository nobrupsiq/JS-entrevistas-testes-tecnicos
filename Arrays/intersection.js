// • Crie um programa que encontra a interseção de dois arrays
// • Ou seja, quais elementos eles têm em comum
// • Você pode criar uma função que recebe os dois
// • Exiba os resultados no console ou na tela (HTML)

function intersectionArray(arr, arr2) {
  return arr.filter((el) => arr2.includes(el));
}

const array = [1, 2, 4, 5, 6, 7];
const array2 = [5, 6, 7, 8, 9, 10];

console.log(intersectionArray(array, array2));
