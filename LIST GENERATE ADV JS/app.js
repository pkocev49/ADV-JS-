let button = document.querySelector('#button')

let arr = ["Pavel","Nikola","Petar","Kiko","Trajce"]
let body = document.body

let li = "";


for(i=0; i < arr.length; i++){
    li += `<li>${arr[i]}</li>`
}


button.addEventListener('click', function(){
    body.innerHTML +=`<ul>${li}</ul>`
})