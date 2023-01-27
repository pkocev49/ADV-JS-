let inputColor = document.querySelector('#ColorOfText')
let inputFont = document.querySelector('#fontSize')
let headerelement = document.querySelector("h1")
let button = document.querySelector('#button')


let changeColor = (element, color) => {
    color = inputColor.value
    element = headerelement
    element.style.color = color

}

let changeFont = (element, font) => {
    font = inputFont.value
    element = headerelement
    
    if(font === ""){
        element.style.fontSize = "24px"
    }else{
        element.style.fontSize = font
    }
}

button.addEventListener('click', changeColor)
button.addEventListener('click', changeFont)