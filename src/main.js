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

// var req = new XMLHttpRequest();
// req.open('GET', 'http://www.mozilla.org/', false); 
// req.send(null);
// if (req.status == 200)
//   dump(req.responseText);

async function getCharacters(path){
  let rawCharacters = await fetch(path);
  characters = await rawCharacters.json();
  generateCards(characters);
  return characters;
}

let personajes= getCharacters(path);

function generateCards(data){
  data.results.map(d=> {
    const {image, name, gender, status, id, origin, location}=d ;
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


// 

const formulario = document.querySelector('#searchForm');
const boton = document.querySelector('#boton');

function filtrar (data){
  root.innerHTML= '';
  // console.log(data)
  data.map(e=>{
    const texto = formulario.value.toLowerCase();
    console.log(path);
    for(let nombre of data.name){
      let nameCharacter = data.name.toLowerCase();
      if(nameCharacter.indexOf(texto) !== -1){
        root.innerHTML += `
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
                         <but
                         <a id="backTo">Regresar</a>               
                       </div></div>
        </div>`
      }
    }
    if(root.innerHTML === ''){
      root.innerHTML += `
      <h1>Result not found</h1>
      `
    }
  
  })

}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)
console.log(personajes);
filtrar(personajes.results);



// const filtrar = () => {
//   resultado.innerHTML= '';
//   // console.log(resultado.value);
//   const texto = formulario.value.toLowerCase();

//   for(let producto of path.results){
//     let nombre = producto.name.toLowerCase();
//     if(nombre.indexOf(texto) !== -1){
//       resultado.innerHTML += `
//       <div class="card">
//       <div class='front'>
//       <div class="data-front" id="${id}">
//                        <h1  class="emboss">${name}</h1>
//                        <img src="${image}" alt="" class="card-img"></div>  
//                     <div class="back">
//                        <h1  class="emboss">${name}</h1>
//                        <p>Genero: ${gender}</p>
//                        <p>Status: ${status}</p>
//                        <p>Origen: ${origin.name}</p>
//                        <p>Ubicación: ${location.name}</p>
//                        <but
//                        <a id="backTo">Regresar</a>               
//                      </div></div>
//       </div>`
//     }
//   }

//   if(resultado.innerHTML === ''){
//     resultado.innerHTML += `
//     <h1>Result not found</h1>
//     `
//   }
// }

// boton.addEventListener('click', filtrar)
// formulario.addEventListener('keyup', filtrar)

// filtrar();
// ;
