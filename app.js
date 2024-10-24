// defining elements
let inputElement = document.getElementById('color-input');
let pallatesElement = document.querySelectorAll('.pallate')
let paintBrush = document.getElementById('paint')

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
        const colorHex = response.data.colors[index].hex.value;
        pallate.style.backgroundColor = response.data.colors[index].hex.value
      pallate.innerHTML = response.data.colors[index].hex.value
      pallate.style.color = 'white'
      pallate.style.fontWeight = 'bold'
paintBrush.style.color = response.data.colors[index].hex.value

      //adding copy to clipboard function
pallate.addEventListener('click', () => {
    navigator.clipboard.writeText(colorHex)
    .then(() => {
        alert(`Copied ${colorHex} to Clipboard!`)
    })
    .catch(err => {
        console.error('Failed to copy text: ', err)
    })
})
     
    })
}