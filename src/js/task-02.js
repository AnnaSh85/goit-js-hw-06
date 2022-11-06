const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');

ingredients.forEach(element => {
  const liIngredient = document.createElement('li');
   liIngredient.textContent = `${element}`;
   liIngredient.classList.add('item');
   ul.append(liIngredient);
});
console.log(ul);

//const ulEl = document.querySelector('#ingredients');

//const list = ingredients
//.map((ingredient) => `<li class="item">${ingredient}</li>`)
//.join("");

//ulEl.innerHTML = list;
//console.log(ulEl);