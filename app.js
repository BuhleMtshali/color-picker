// defining elements
let inputElement = document.getElementById('color-input');
let pallatesElement = document.querySelectorAll('.pallate')

//event listener
document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();
    let colorValue = inputElement.value.slice(1)
    console.log(colorValue)
})