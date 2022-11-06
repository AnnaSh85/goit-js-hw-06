let counterValue = document.querySelector('#value');
let valueElem = Number(document.querySelector('#value').textContent);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener('click', event => {
    valueElem += 1;
    counterValue.innerText = valueElem;
});

decrementBtn.addEventListener('click', event => {
    valueElem -= 1;
    counterValue.innerText = valueElem;
});