// • Crie um programa que detecta e remove os itens duplicados de um array
// • Você pode utilizar uma função que receber um array como argumento e retorna apenas os elementos únicos
// • Exiba os resultados no console ou na tela (HTML).

function removeDuplicateElements(array) {
  return Array.from(new Set(array)); // new Set() retorna apenas elementos únicos
}

console.log(removeDuplicateElements([50, 60, 90, 30, 50, 45, 3, 1, 7, 90, 3]));
