// defining elements
let inputElement = document.getElementById('color-input');
let pallatesElement = document.querySelectorAll('.pallate')

//event listener
document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault();
    let colorValue = inputElement.value.slice(1)
    findColor(colorValue)
})

//function for the api function

function findColor(value){
    let apiUrl = `https://www.thecolorapi.com/scheme?hex=${value}`
    axios.get(apiUrl).then(renderColor)
}

//function for rendering out the data

function renderColor(response){
    console.log(response.data)
    pallatesElement.forEach((pallate, index) => {
        pallate.style.backgroundColor = response.data.colors[index].hex.value
       
    })
}