// • Crie um objeto com diversas propriedades e valores
// • Depois crie uma função que filtra as propriedades permitidas
// • A função deve receber o objeto, e um array com as propriedades que podem ser exibidas
// • Exiba os resultados no console ou na tela (HTML)

const severalProperties = {
  name: 'Bruno',
  years: 28,
  sexo: 'M',
  cpf: 99999999999,
  location: 'Brasil',
  state: 'Rio de janeiro',
  city: 'Saquarema',
  zipCode: 11111,
};

function allowedProperties(obj, propAllowed) {
  const newObj = {};

  for (const prop of propAllowed) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
}

const allowed = ['name', 'years'];

console.log(allowedProperties(severalProperties, allowed));

// OBS: O FOR IN VAI DIRETO NOS VALORES DO OBJETO
// OBS: O FOR OF VAI DIRETO NAS PROPRIEDADES
