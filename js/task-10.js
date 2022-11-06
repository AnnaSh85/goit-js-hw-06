const number = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const innerBox = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = () => {
  innerBox.innerHTML = '';
  for (let i = 1; i <= number.value; i += 1) {
    const box = document.createElement('div');
    box.style.height = box.style.width = 20 + i * 10 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    innerBox.append(box);
  }
};

const destroyBoxes = () => {
  innerBox.innerHTML = '';
  number.value = '';
};

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);