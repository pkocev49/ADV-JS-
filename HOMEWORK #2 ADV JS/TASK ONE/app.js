
function printFilmNames(resultElement, response) {
    let resultList=resultElement.querySelector('ul')
    resultList.innerHTML=""
    for(film of response){
    resultList.innerHTML += `<li>${film.title}</li>`
   }
   
}

$(document).ready(function () {
    let btn = document.querySelector('#button')
    let result = document.querySelector('#result')
    btn.addEventListener("click", function () {
        $.ajax({
            url: "https://swapi.dev/api/films ",
            success: function (response) {
                console.log("success")
                
                printFilmNames(result,response.results)
            },
            error: function (error) {
                console.log(error)
            }
        })
    })
})

 


// function printTitles(response){
//     let resultList = document.querySelector("ul")
//     resultList.innerHTML="";
//     for(let films of response){
//         resultList.innerHTML+=`<li>${films.title}</li>`
//     }
// }
// let callBtn = document.querySelector('#button')
// callBtn.addEventListener('click',getFets)

// function getFets(){
//     fetch('https://swapi.dev/api/films')
//     .then(function(response){
        
//         return response.json()
//     })
//     .then(function(myJson){
       
//         printTitles(myJson.results)
//     })
 
// }



