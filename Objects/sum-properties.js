// • Crie um objeto com diversas propriedades, e o valor delas precisa ser um número
// • Depois crie uma função que recebe este objeto, e entrega a soma de todas as propriedades como retorno
// • Exiba os resultados no console ou na tela (HTML)

const properties = {
  a: 4,
  b: 21,
  c: 44,
  d: 9,
};

function sumValueObject(obj) {
  let values = Object.values(obj);
  let result = values.reduce((acumulador, item) => acumulador + item);
  return `Reduce: ${result}`;
}

console.log(sumValueObject(properties));

// OUTRA FORMA UTILIZANDO O FOR OF

function forSumObjects(obj) {
  let sum = 0;

  for (const key in obj) {
    // validation
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  return `For in: ${sum}`;
}

console.log(forSumObjects(properties));
