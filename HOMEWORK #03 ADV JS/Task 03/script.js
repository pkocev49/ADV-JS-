let callBtn = document.querySelector('#button')
let nextBtn = document.querySelector('.next')
let previousBtn = document.querySelector('.previous')


callBtn.addEventListener('click',getFetch)
nextBtn.addEventListener('click',nextFetc)
previousBtn.addEventListener('click',getFetch)


let starWarsUrl = "https://swapi.dev/api/planets/?page=1"
let nextButtonUrl = "https://swapi.dev/api/planets/?page=2"


function getFetch(){
    
    nextBtn.style.display = "block"
    previousBtn.style.display="none"
    fetch(starWarsUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        pritnPlanets(mainEl,data)
    })
}

function nextFetc(){

    previousBtn.style.display = "block"
    nextBtn.style.display= "none"

    fetch(nextButtonUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        pritnPlanets(nextEl,data)
    })
}

function pritnPlanets(mainEl,plData) {
    
    let tableContent =""
    mainEl=`
    <tbody>
    <tr>
    <th>Planet Name:</th>
    <th>Population:</th>
    <th>Climate:</th>
    <th>Gravity:</th>
   </tr>
    </tbody>
    
    `
   
    for(planet of plData.results){
        tableContent +=`
        
        <tr>
        
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
        </tr>
        
        `
    }

    
    document.querySelector('#mainEl').innerHTML=mainEl
    document.querySelector('table').innerHTML += tableContent
    
}

