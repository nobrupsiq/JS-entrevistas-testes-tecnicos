// • Crie uma lista com vários li's e um botão no HTML
// • Ao clicar neste botão um novo item deve ser adicionado a esta lista

const lista = document.querySelector('.lista');
const listaLi = document.querySelectorAll('.lista li');
const btn = document.querySelector('.btn');
let count = listaLi.length;

console.log(lista);
function addedElement() {
  let elem = document.createElement('li');
  elem.innerHTML = `Item ${count + 1}`;
  lista.appendChild(elem);
  count++;
}

btn.addEventListener('click', addedElement);
