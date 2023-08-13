// • Crie vários parágrafos no HTML
// • Selecione estes elementos com javascript
// • modifique a cor de todos eles

const colors = document.querySelectorAll('.square p');

for (const i of colors) {
  i.style.color = 'red';
}
