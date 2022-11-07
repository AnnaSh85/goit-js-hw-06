const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients');
const liArray = [];
ingredients.forEach(element => {
  const liIngredient = document.createElement('li');
   liIngredient.textContent = `${element}`;
   liIngredient.classList.add('item');
   liArray.push(liIngredient);
});
ul.append(...liArray);
console.log(ul);

//const ulEl = document.querySelector('#ingredients');

//const list = ingredients
//.map((ingredient) => `<li class="item">${ingredient}</li>`)
//.join("");

//ulEl.innerHTML = list;
//console.log(ulEl);

