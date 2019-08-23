
const filterAz = document.getElementById('order'); //Filter options button
const spaceCards = document.getElementById('cards-data'); //Section where data is going to appear
const urlData = "./data/rickandmorty/rickandmorty.json";
let newDataApi = '';
const searching = document.querySelector('#searchForm');
const buttonS = document.querySelector('#button');
let data = []

// Filtrar
const filter = (text, data) =>{
  // console.log(searching.value); 
  for(let objectResult of data) {
    let nameChar = objectResult.name.toLowerCase();
    console.log((nameChar.indexOf(text)));
    
    if(nameChar.indexOf(text) > -1){
      return (objectResult)

    }
  }
  
}

buttonS.addEventListener('click', () =>{
  const text = searching.value.toLowerCase()
  console.log(filter(text, data))
} );




// Traer data del archivo json
const getData = async(url) => {
  const request = await fetch(url);
  return await request.json();
};

// Inicializando 
const main = async() => {
  fullData = await getData(urlData);
  showData(fullData.results);
  console.log(fullData.results)
  data = fullData.results

filterAz.addEventListener('change', () => { 
  const sortOrder= event.target.value;
  //console.log(sortOrder);
  const result = window.sortData(fullData.results, sortOrder)
  //console.log(result);
  showData(result)
})
}


// Mostrar data
const template = (character) => {
  return ` <div class="card ${character.species} ${origin}">
  <div class="face">
  <div class="name">
  <p> ${character.name}</p></div>
  <br>  
  <div class="img"> 
  <img src="${character.image}"></img>
  </div>
<div class="info">
  <p> Status: ${character.status} </p>
  <p> Especie: ${character.species} </p>
  <p> tamaño: ${character.origin.name} </p>
  <p> Origen: ${character.location.name}</p>
  </div>
  </div>
  </div>
  ` 
}

const showData = data => {
  let str = '';
  console.log(data);
  data.forEach(element => str += template(element));
  spaceCards.innerHTML = str;
}


const allCards = document.getElementsByClassName('card');




window.addEventListener('load', main);







