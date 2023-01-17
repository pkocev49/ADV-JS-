let inputColor = document.querySelector('#color')
let inputFont = document.querySelector('#font')
let inputItem = document.querySelector('#item')
let button = document.querySelector('#button')
let result = document.querySelector('#result')


function create() {
    let colorValue = inputColor.value

    let fontValue = inputFont.value
    let itemValue = inputItem.value

    let items = itemValue.split(",")
    let newList = document.createElement("ul")
    newList.style.color = colorValue
    newList.style.fontSize = fontValue

    for (i = 0; i < items.length; i++) {
        let newItem = document.createElement("li")
        newItem.innerText = items[i]
        newList.appendChild(newItem)
    }
    result.appendChild(newList)
}

button.addEventListener('click', create)
