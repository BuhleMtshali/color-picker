let inputElement = document.getElementById('color-input')
document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault()
    let colorValue = inputElement.value.slice(1)
    getColor(colorValue)
    console.log(colorValue)
})

function getColor(value){
    let apiUrl = `https://www.thecolorapi.com/scheme?hex=${value}&mode=triad&count=6`;
    axios.get(apiUrl).then(renderColor)
}
function renderColor(response){
    console.log(response.data)
    

}

/*let inputColor = document.getElementById('color-input')
document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(inputColor.value)
})*/