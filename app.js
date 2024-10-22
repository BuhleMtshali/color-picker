let inputElement = document.getElementById('color-input')
document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault()
    getColor(inputElement.value)
    console.log(inputElement.value)
})

function getColor(value){
    let apiUrl = `https://cors-anywhere.herokuapp.com/https://csscolorsapi.com/api/colors/group/${value}`
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