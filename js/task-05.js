// let inputEl = document.querySelector('#name-input');
// inputEl.addEventListener('input', onInputChange);

// let outputEl = document.querySelector('#name-output');

// function onInputChange(event) {
//   inputEl = event.curentTarget.value;
//   console.log(inputEl);

//   inputEl === '' ? "Anonymous" : (outputEl.innerText = inputEl.trim());
// }


let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    outputEl.textContent = event.target.value

    if (event.target.value === '') {
        outputEl.textContent = 'Anonymous'
    }
});

