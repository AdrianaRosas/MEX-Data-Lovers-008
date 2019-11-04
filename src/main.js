let characters;
const root = document.getElementById("root");
root.addEventListener("click", getClick);
const path = "https://rickandmortyapi.com/api/character/";

function changeContent(data) {
  root.innerHTML = data;
}

function addContent(data) {
  root.innerHTML +=  data;
}

function clearContent(){
  root.innerHTML ="";
}

function getClick(event) {
  let card = event.path.filter((Me) => event.className == "card");

     if(!!card[0]) {
       let character = characters.results.filter(
         (character) => character.id == card[0].id)
       generateDetail(character[0]);
     }
     if (event.target.id == "backTo"){
       clearContent();
       generateCards(characters);
     }
     if(event.target.id == "prev" && !!characters.info.prev){
       getCharacters(characters.info.prev);
     }
     if(event.target.id == "next" && !!characters.info.next){
       clearContent();
       getCharacters(characters.info.next);
     }
     if(event.target.id.includes("?page=")){
       clearContent();
       getCharacters(path.concat(event.target.id));
     }
}



async function getCharacters(path){
  let rawCharacters = await fetch(path);
  characters = await rawCharacters.json();
  generateCards(characters);
}


function generateCards(data){
  data.results.map(d => {
    const {image, name, gender, status, id, origin, location, species} =d;
    let card = `
    <div class="card">
    <div class='front'>
    <div class="data-front" id="${id}">
                     <h1  class="emboss">${name}</h1>
                     <img src="${image}" alt="" class="card-img"></div>  
                  <div class="back">
                     <h1  class="emboss">${name}</h1>
                     <p>Genero: ${gender}</p>
                     <p>Status: ${status}</p>
                     <p>Origen: ${origin.name}</p>
                     <p>Ubicación: ${location.name}</p>
                     <p>Especie: ${species}</p>
                     <but
                     <a id="backTo">Regresar</a>               
                   </div></div>
    </div>`; 
                addContent(card);
  });
  generatePagination(data);
}


function generatePagination(data) {
  let currentPath = data.info.prev;
  let numbers = "";
  let prev = `<div class="btn-btn"><a class="btn" id="prev">Previous</a></div>`;
  let next = `<div class="btn-btn"><a class="btn" id="next">Next</a></div>`;
  let current = !!currentPath ? currentPath.indexOf("=") !== -1 ? Number(currentPath.slice(currentPath.indexOf("=") +1,
          currentPath.length)) +1 : null :1;
  for (let index = 1; index <= data.info.pages; index++) {
    numbers +=
       index === current
       ? `
       <span class="number-current" id="?page=${index}">${index}</span>`
       : `<span class="number" id="?page=${index}">${index}</span>
       `;
  }

  addContent(
    `<div id="pagination"> ${prev} 
    <div id="numbers">${numbers}
    </div> ${next} </div>`,);
}
getCharacters(path);

