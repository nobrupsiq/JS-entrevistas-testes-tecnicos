// • Crie um programa que calcula a média dos elementos de um array
// • Pode ser uma função que recebe um array e retorna a média dos itens
// • Exiba os resultados no console ou na tela (HTML)

function averageElements(array) {
  let count = 0;

  array.forEach((elem) => {
    count += elem;
  });

  const average = count / array.length;

  return average;
}

const arr = [7, 6, 4, 8, 6];

console.log(averageElements(arr));

// UTILIZANDO O REDUCE

function averageCount(arr) {
  const soma = arr.reduce((acumulator, value) => acumulator + value, 0);
  return soma / arr.length;
}

const numbers = [6, 7, 5, 3, 9];
console.log(averageCount(numbers));
