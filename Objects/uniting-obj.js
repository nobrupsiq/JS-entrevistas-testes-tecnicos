// • Crie uma função que recebe dois objetos como argumento
// • O retorno deve ser estes dois objetos concatenados
// • Ou seja, uma união de todas as propriedades
// • Exiba os resultados no console ou na tela(HTML)

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { name: 'Bruno', working: 'true' };

function unitingObj(a, b) {
  return { ...a, ...b };
}

console.log(unitingObj(obj1, obj2));
