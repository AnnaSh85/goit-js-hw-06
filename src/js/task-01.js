// const atribyts = document.querySelectorAll(".item");
// console.log(`Numbers of categories: ${atribyts.length}`);
// for (let a = 0; a < atribyts.length; a++){
//     console.log(`Categories: ${h2.textContent}`);
//     console.log(`Elements: ${h2.textContent}`);

// }

const categoriesItems = document.querySelectorAll('#categories > .item');

console.log('Number of categories: ', categoriesItems.length);

categoriesItems.forEach(element => {
  console.log('Category: ', element.querySelector('h2').textContent);
  console.log('Elements: ', element.querySelectorAll('li').length);
});