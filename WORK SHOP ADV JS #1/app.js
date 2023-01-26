let peopleImage = document.querySelector("#people_img")
let shipsImage = document.querySelector('#ships_img')


function printPeople(response) {
   let resultTable = document.getElementsByTagName('tbody')[0]
   resultTable.innerHTML = ""
   resultTable.innerHTML += `
   <tr>
      <td>Name:</td>
      <td>${response.name}</td>
   </tr>   
   <tr>
       <td>Height:</td>
      <td>${response.height}cm</td>
   </tr>  
   <tr>
      <td>Mass:</td>
      <td>${response.mass}kg</td>
   </tr>  
   <tr>
      <td>Gender:</td>
      <td>${response.gender}</td>
   </tr>  
   <tr>
      <td>Birth Year:</td>
      <td>${response.birth_year}</td>
   </tr>  
  
   `
}


peopleImage.addEventListener("click", function () {
   fetch('https://swapi.dev/api/people/?page=1')
   .then(function (response) {
      console.log('SUCCESS');
      return response.json()
   })
   .then(function (myJson) {
      console.log(myJson)
      printPeople(myJson)
   })


   let tableWindow = document.querySelector('.table_div')
   let shadow = document.querySelector('.overlay')
   let h1Text = document.querySelector('.h1People')

   tableWindow.style.display = 'block'
   shadow.style.display = 'block'
   h1Text.style.display = "block"

  


})




function printShips(data) {
   let resultTable = document.getElementsByTagName('tbody')[0]
   resultTable.innerHTML = ""
   resultTable.innerHTML += `
   <tr>
      <td>Name:</td>
      <td>${data.name}</td>
   </tr>   
   <tr>
       <td>Model:</td>
      <td>${data.model}</td>
   </tr>  
   <tr>
      <td>Manufacturer:</td>
      <td>${data.manufacturer}</td>
   </tr>  
   <tr>
      <td>Cost:</td>
      <td>${data.cost_in_credits} credits</td>
   </tr>  
   <tr>
      <td>People Capacity:</td>
      <td>${data.crew + data.passengers}</td>
   </tr>  
   <tr>
      <td>Class:</td>
      <td>${data.starship_class}</d>
   
   `
}



shipsImage.addEventListener("click", function () {

   fetch('https://swapi.dev/api/starships/?page=1')
   .then(function (data) {
      console.log('SUCCESS');
      return data.json()
   })
   .then(function (myJson) {
      console.log(myJson)
      printShips(myJson)
   })



   let tableWindow = document.querySelector('.table_div')
   let shadow = document.querySelector('.overlay')
   let h1TextS = document.querySelector('.h1Ships')

   tableWindow.style.display = 'block'
   shadow.style.display = 'block'
   h1TextS.style.display = 'block'

   

})