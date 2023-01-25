// function printFilmNames(resEl, results) {
//     let resList = resEl.getElementByTagName = ("ul")[0]
   
//    resList.innerText += `<li>${results.title}</li>`
// }

// $(document).ready(function () {
//     let btn = document.querySelector('#button')
//     let result = document.querySelector('#res')
//     btn.addEventListener("click", function () {
//         $.ajax({
//             url: "https://swapi.dev/api/films ",
//             success: function (results) {
//                 console.log("success")
//                 printFilmNames(result, results.title)
//             },
//             error: function (error) {
//                 console.log(error)
//             }
//         })
//     })
// })

// app.js:2 Uncaught TypeError: Cannot set properties of null (setting 'getElementByTagName')
// at printFilmNames (app.js:2:45)
// at Object.success (app.js:15:17)
// at fire (jquery-3.6.3.js:3564:31)
// at Object.fireWith [as resolveWith] (jquery-3.6.3.js:3694:7)
// at done (jquery-3.6.3.js:9906:14)
// at XMLHttpRequest.<anonymous> (jquery-3.6.3.js:10167:9)
 
//AKO MOZE POMOS NEZNAM SOSTO MI GO VADI EROROV POGORE

// function printList(response) {
//     let resultList = document.getElementsByTagName('ul')
//     resultList.innerHTML = ""

//     resultList.innerHTML +=`<li>${response}</li>`;


// }

// let callBtn = document.querySelector('#button');
// let result = document.querySelector('#result');
// callBtn.addEventListener("click", printTitle)

// function printTitle() {
//     fetch('https://swapi.dev/api/films')
//         .then(function (response) {
//           console.log("REQUEST WAST SUCCESSFUL!")
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             printTitle(data.response)

//         })

// }

//AKO MOZE POMOS.BEZ PREKIN MI GI PRINTA VO CONZOLATA 41 I 45 LINIJA NEZNAM SOSTO