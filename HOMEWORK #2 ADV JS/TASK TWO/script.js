// function printName(name) {
//     let resultName = document.getElementsByTagName("h1")[0]
//     resultName.innerText = name;
// }

// function printStats(response) {
//     let resultTable = document.getElementsByTagName("tbody")[0]
//     resultTable.innerHTML = ""
//     resultTable.innerHTML += `
//     <tr>
//         <td>Model:</td>
//         <td>${response.model}</td>
//     </tr>  
//     <tr>
//         <td>Manufacturer:</td>
//         <td>${response.manufacturer}</td>
//     </tr> 
//     <tr>
//          <td>Crew:</td>
//         <td>${response.crew}</td>
//     </tr> 
//     <tr>
//         <td>Passengers:</td>
//         <td>${response.passengers}</td>
//     </tr> 
//     <tr>
//         <td>Class:</td>
//         <td>${response.vehicle_class}</td>
//     </tr>   

//     `
// }

// let button = document.querySelector('#button')
// let result = document.querySelector('#print')
// button.addEventListener("click", printList)

// function printList(){
//     fetch('https://swapi.dev/api/vehicles/20')
//     .then(function(response){
//         console.log('SUCCESS')
//         return response.json()
//     })
//     .then(function(myJson){
//         console.log(myJson)
//         printName(myJson.name)
//         printStats(myJson)
//     })
// }




function printName(resEl, name) {
    let resultTitle = resEl.getElementsByTagName("h1")[0]
    resultTitle.innerText = name;
}

function printStats(resEl, response) {
    let resultTable = resEl.getElementsByTagName("tbody")[0]
    resultTable.innerHTML = ""
    resultTable.innerHTML += `
    <tr>
    <td>Model:</td>
     <td>${response.model}</td>
  </tr>  
 <tr>
     <td>Manufacturer:</td>
     <td>${response.manufacturer}</td>
 </tr> 
 <tr>
      <td>Crew:</td>
     <td>${response.crew}</td>
 </tr> 
 <tr>
     <td>Passengers:</td>
     <td>${response.passengers}</td>
 </tr> 
 <tr>
     <td>Class:</td>
     <td>${response.vehicle_class}</td>
 </tr>   
 
    `
}

$(function(){
    let button = document.querySelector('#button')
    let result = document.querySelector('#print')
    button.addEventListener("click", function(){
        $.ajax({
            url : "https://swapi.dev/api/vehicles/20",
            success :function(response){
                console.log('SUCCESS')
                printName(result, response.name)
                printStats(result, response)
            },
            error: function(error){
                console.log(error)
            }
        })
    })
})

