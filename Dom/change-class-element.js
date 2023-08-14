// • Crie uma div e um botão no HTML
// • No CSS estilize a div e crie uma outra classe chamada ativo, muda a cor de fundo do elemento que tiver essa classe
// • O único botão que você criou deve colocar e tirar a classe ativo da div
function changeColor() {
  const square = document.querySelector('.square');
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => square.classList.toggle('ativo'));
}

changeColor();
