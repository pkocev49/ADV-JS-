let peopleImage = document.querySelector("#people_img");
let shipsImage = document.querySelector("#ships_img");
let nextBtn = document.querySelector("#next_button");
let previousBtn = document.querySelector("#back_button");
let previousShips_btn = document.querySelector("#previousShips_button");
let nextShips_btn = document.querySelector("#nextShips_button");
let closeButton = document.querySelector(".close");
let tableWindow = document.querySelector(".table_div");
let shadow = document.querySelector(".overlay");
let h1TextS = document.querySelector(".h1Ships");
let buttonDiv = document.querySelector(".button_div");
let h1Text = document.querySelector(".h1People");
let secondButtonDiv = document.querySelector(".secondButton_div");

peopleImage.addEventListener("click", getPeopleFetch);
shipsImage.addEventListener("click", getShipsFetch);
nextBtn.addEventListener("click", nextPeople);
previousBtn.addEventListener("click", previousPeople);
previousShips_btn.addEventListener("click", previousShips);
nextShips_btn.addEventListener("click", nextShips);
closeButton.addEventListener("click", closeBtn);

let peopleurl = "https://swapi.dev/api/people/?page=";
let shipsUrl = "https://swapi.dev/api/starships/?page=";
let pageNumber = 1;

function previousPeople() {
  pageNumber--;
  fetch(`${peopleurl}${pageNumber}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      printPeople(mainEl, data);
    });
  nextBtn.style.display = "block";
  if (pageNumber === 1) {
    previousBtn.style.display = "none";
  }
}

function previousShips() {
  pageNumber--;
  fetch(`${shipsUrl}${pageNumber}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      printShips(mainEl, data);
    });
  nextShips_btn.style.display = "block";
  if (pageNumber === 1) {
    previousShips_btn.style.display = "none";
  }
}

function nextPeople() {
  pageNumber++;
  fetch(`${peopleurl}  ${pageNumber}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      printPeople(mainEl, data);
    });

  if (pageNumber === 9) {
    nextBtn.style.display = "none";
  } else pageNumber < 1;
  previousBtn.style.display = "block";
}
function nextShips() {
  pageNumber++;
  fetch(`${shipsUrl}  ${pageNumber}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      printShips(mainEl, data);
    });

  if (pageNumber === 4) {
    nextShips_btn.style.display = "none";
  } else pageNumber < 1;
  previousShips_btn.style.display = "block";
}

function getShipsFetch() {
  fetch(`${shipsUrl}${pageNumber}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      printShips(mainEl, data);
    });

  tableWindow.style.display = "block";
  shadow.style.display = "block";
  h1TextS.style.display = "block";
  buttonDiv.style.display = "none";
}

function getPeopleFetch() {
  fetch(`${peopleurl}${pageNumber}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      printPeople(mainEl, data);
    });

  secondButtonDiv.style.display = "none";
  tableWindow.style.display = "block";
  shadow.style.display = "block";
  h1Text.style.display = "block";
}

function printPeople(mainEl, peopleData) {
  let tableContent = "";
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

      
   `;
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
      `;
  }

  document.querySelector("#mainEl").innerHTML = mainEl;
  document.querySelector("table").innerHTML += tableContent;
}

function printShips(mainEl, shipsData) {
  let tableContent = "";
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
      `;

  for (ships of shipsData.results) {
    if (ships.crew.includes(",")) {
      ships.crew = ships.crew.split(",").join("");
    } else if (ships.crew.includes("-")) {
      ships.crew = ships.crew.split("-");
      ships.crew.length;
      ships.crew = ships.crew.reduce((num1, num2) => {
        return parseInt(num1) + parseInt(num2) / 2;
      });
      console.log(ships.crew);
    } else if (ships.crew.includes("unknown")) {
      ships.crew = 0;
    }
    if (ships.passengers.includes(",")) {
      ships.passengers = ships.passengers.split(",").join("");
    } else if (ships.passengers.includes("unknown")) {
      ships.passengers = 0;
    } else if (ships.passengers.includes("n/a")) {
      ships.passengers = 0;
    }

    let crewAndPassengers = parseInt(ships.crew) + parseInt(ships.passengers);

    tableContent += `
              <tr>
                 <td>${ships.name}</td>
                 <td>${ships.model}</td>
                 <td>${ships.manufacturer}kg</td>
                 <td>${ships.cost_in_credits} credits</td>
                 <td>${crewAndPassengers}</td>
                 <td>${ships.starship_class}</td>
              </tr>
           `;
  }
  document.querySelector("#mainEl").innerHTML = mainEl;
  document.querySelector("table").innerHTML += tableContent;
}

function closeBtn() {
  tableWindow.style.display = "none";
  shadow.style.display = "none";
  secondButtonDiv.style.display = "none";
  h1Text.style.display = "none";
  h1TextS.style.display = "none";
}
