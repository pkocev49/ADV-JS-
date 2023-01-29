let callBtn = document.querySelector('#button')
callBtn.addEventListener('click',getFetch)

let starWarsUrl = "https://swapi.dev/api/planets/?page=1"

function getFetch(){
    
    fetch(starWarsUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        pritnPlanets(mainEl,data)
    })
}


function pritnPlanets(mainEl,plData) {
    let tableContent =""
    mainEl.innerHmtl =`
    <tbody>
    <td>Planet Name:</td>
    <td>Population:</td>
    <td>Climate:</td>
    <td>Gravity</td>
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
    document.querySelector('table').innerHTML += tableContent
}

