let peopleImage = document.querySelector("#people_img")
let shipsImage = document.querySelector('#ships_img')
let nextBtn = document.querySelector('#next_button')
let previousBtn = document.querySelector('#back_button')

peopleImage.addEventListener('click',getPeopleFetch)
nextBtn.addEventListener('click',nextURL)
previousBtn.addEventListener('click',getPeopleFetch)

// let peopleUrL = "https://swapi.dev/api/people/?page=1"
// let nextPeopleUrl = "https://swapi.dev/api/people/?page=2"
let urls = [
"https://swapi.dev/api/people/?page=1",
"https://swapi.dev/api/people/?page=2",
"https://swapi.dev/api/people/?page=3",
"https://swapi.dev/api/people/?page=4",
"https://swapi.dev/api/people/?page=5",
"https://swapi.dev/api/people/?page=6",
"https://swapi.dev/api/people/?page=7",
"https://swapi.dev/api/people/?page=8",
"https://swapi.dev/api/people/?page=9"
]
let mainUrl = "https://swapi.dev/api/people/"



function nextURL(){
      let nexturl=`${mainUrl}?page=${page}`
      console.log(nexturl)
      fetch(nexturl)
      .then(function(res){
         return res.json()
      })
      .then(function(data){
         printPeople(mainEl , data)
      })
      
     
    
    
   } 
   
   
// function next(){
//    fetch(urls[2])
//    .then(function(res){
//       return res.json()
//    })
//    .then(function(data){
//       printPeople(mainEl,data)
//    })
 



function getPeopleFetch(){

   let tableWindow = document.querySelector('.table_div')
   let shadow = document.querySelector('.overlay')
   let h1Text = document.querySelector('.h1People')

   tableWindow.style.display = 'block'
   shadow.style.display = 'block'
   h1Text.style.display = "block"
   
   fetch(urls[0])
   let peopleurl = `${mainUrl}?page=${page}`
   .then(function(res){
      return res.json()
   })
   .then(function(data){
      printPeople(mainEl , data)
   })

}



function printPeople(mainEl,peopleData) {
   let tableContent =""
   mainEl=`
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
    for(people of peopleData.results){
      tableContent +=`
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

    document.querySelector('#mainEl').innerHTML=mainEl
    document.querySelector('table').innerHTML += tableContent
  
   
}

  


  







// function printShips(data) {
//    let resultTable = document.getElementsByTagName('tbody')[0]
//    resultTable.innerHTML = ""
//    resultTable.innerHTML += `
//    <tr>
//       <td>Name:</td>
//       <td>${data.name}</td>
//    </tr>   
//    <tr>
//        <td>Model:</td>
//       <td>${data.model}</td>
//    </tr>  
//    <tr>
//       <td>Manufacturer:</td>
//       <td>${data.manufacturer}</td>
//    </tr>  
//    <tr>
//       <td>Cost:</td>
//       <td>${data.cost_in_credits} credits</td>
//    </tr>  
//    <tr>
//       <td>People Capacity:</td>
//       <td>${data.crew + data.passengers}</td>
//    </tr>  
//    <tr>
//       <td>Class:</td>
//       <td>${data.starship_class}</d>
   
//    `
// }



// shipsImage.addEventListener("click", function () {

//    fetch('https://swapi.dev/api/starships/?page=1')
//    .then(function (data) {
//       console.log('SUCCESS');
//       return data.json()
//    })
//    .then(function (myJson) {
//       console.log(myJson)
//       printShips(myJson)
//    })



//    let tableWindow = document.querySelector('.table_div')
//    let shadow = document.querySelector('.overlay')
//    let h1TextS = document.querySelector('.h1Ships')

//    tableWindow.style.display = 'block'
//    shadow.style.display = 'block'
//    h1TextS.style.display = 'block'

   

// })