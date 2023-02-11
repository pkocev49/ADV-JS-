let peopleImage = document.querySelector("#people_img")
let shipsImage = document.querySelector('#ships_img')
let nextBtn = document.querySelector('#next_button')
let previousBtn = document.querySelector('#back_button')

peopleImage.addEventListener('click', getPeopleFetch)
nextBtn.addEventListener('click', next)
previousBtn.addEventListener('click', previous)

let peopleurl = "https://swapi.dev/api/people/?page="
let shipsUrl = "https://swapi.dev/api/starships/?page="
let pageNumber = 1




function previous() {
   pageNumber--
   fetch(`${peopleurl}${pageNumber}`)
      .then(function (res) {
         return res.json()
      })
      .then(function (data) {
         printPeople(mainEl, data)
      })
   nextBtn.style.display = 'block'
   if (pageNumber === 1) {
      previousBtn.style.display = 'none'
   }
}

function next() {
   pageNumber++
   fetch(`${peopleurl}${pageNumber}`)
      .then(function (res) {
         return res.json()
      })
      .then(function (data) {
         printPeople(mainEl, data)
      })

   if (pageNumber === 9) {
      nextBtn.style.display = 'none'
   } else (pageNumber < 1)
   previousBtn.style.display = 'block'




}




function getPeopleFetch() {

   let tableWindow = document.querySelector('.table_div')
   let shadow = document.querySelector('.overlay')
   let h1Text = document.querySelector('.h1People')

   tableWindow.style.display = 'block'
   shadow.style.display = 'block'
   h1Text.style.display = "block"
   fetch(`${peopleurl}${pageNumber}`)
      .then(function (res) {
         return res.json()
      })
      .then(function (data) {
         printPeople(mainEl, data)
      })

}



function printPeople(mainEl, peopleData) {
   let tableContent = ""
   mainEl = `
      <tbody>
      <tr>
         <th>Name:</th>
         <th>Height:</th>
         <th>Mass:</th>
         <th>Birth Year:</th>
         <th>Gender</th>
         <th>Appearances:</th>
      </tr>
      </tbody>

      
   `
   for (people of peopleData.results) {
      tableContent += `
         <tr>
            <td>${people.name}</td>
            <td>${people.height}cm</td>
            <td>${people.mass}kg</td>
            <td>${people.birth_year}</td>
            <td>${people.gender}</td>
            <td>${people.films.length}</td>
           
          
         </tr>
      `
   }

   document.querySelector('#mainEl').innerHTML = mainEl
   document.querySelector('table').innerHTML += tableContent


}




function printShips(mainEl, shipsData) {
   let tableContent = ""
   mainEl = `
      <tbody>
      <tr>
         <th>Name:</th>
         <th>Model:</th>
         <th>Manufacturer:</th>
         <th>Cost:</th>
         <th>People Capacity:</th>
         <th>Class:</th>
      </tr>
      </tbody>
   `

   for (ships of shipsData.results) {


      if (ships.crew.includes('unknown' && 'n/a')) {
         ships.crew = 0

      } if (ships.passengers.includes("unknown" && 'n/a')) {
         ships.passengers = 0
      }
      let sum = ships.crew * ships.passengers
      sum = parseInt(sum)
      tableContent += `
              <tr>
                 <td>${ships.name}</td>
                 <td>${ships.model}</td>
                 <td>${ships.manufacturer}kg</td>
                 <td>${ships.cost_in_credits}credits</td>
                 <td>${sum}</td>
                 <td>${ships.starship_class}</td>
              </tr>
           `
   }
   document.querySelector('#mainEl').innerHTML = mainEl
   document.querySelector('table').innerHTML += tableContent
}




shipsImage.addEventListener("click", function () {

   fetch(`${shipsUrl}${pageNumber}`)
      .then(function (res) {
         return res.json()
      })
      .then(function (data) {

         printShips(mainEl, data)
      })



   let tableWindow = document.querySelector('.table_div')
   let shadow = document.querySelector('.overlay')
   let h1TextS = document.querySelector('.h1Ships')

   tableWindow.style.display = 'block'
   shadow.style.display = 'block'
   h1TextS.style.display = 'block'



})