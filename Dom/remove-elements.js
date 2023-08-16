// • Crie uma lista com vários itens no HTML
// • Adicione um evento de click a todos os li's da lista
// • Quando clicar em um item, o mesmo deve ser removido do HTML

const lista = document.querySelectorAll('.lista li');

lista.forEach((item) => {
  item.addEventListener('click', () => {
    item.remove();
  });
});
