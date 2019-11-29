let characters;
const data = RICKANDMORTY.results;
const screenPersonajes = document.getElementById("character");
const buttonFilter = document.getElementById("input-filter-personajes");
const buttonSort = document.getElementById("input-sort-personajes");

//Función para pintar la data 
let printDataPersonajes = (data) => {
  let str = "";
  data.forEach(element => { 
    str += `<div class="card">
      <div class="front">
          <div class="data-front" id="${element.id}">
            <h1  class="emboss">${element.name}</h1>
            <img src="${element.image}" alt="" class="card-img"></div>  
          <div class="back">
                  <h3 class="emboss">${element.name}</h3>
                  <p>Especie: ${element.species}</p>
                  <p>Género: ${element.gender}</p>
                  <p>Origen: ${element.origin.name}</p>
                  <p>Estatus: ${element.status}</p>
          </div>
      </div>
  </div>`
  });
  document.querySelector("#root").innerHTML = str;
  }
  printDataPersonajes(data);

//Función para filtrar data    
let filterData1 = () => {
  let filterValue = buttonFilter.value;
  let splitFilterValue = filterValue.split(".");//Método split que permite obtener del value del input los parámetros para filtrar
  let key = splitFilterValue[0];//Obtiene key de la entrada del objeto, como cirterio de filtrado
  let value = splitFilterValue[1];//Obtiene el valor elegido para filtrar
  let filterResult = window.filterData(data, key, value);
  printDataPersonajes(filterResult);
};
filterData1();

//Función para select
let sortData = () => {
  let sortValue = buttonSort.value; 
  if (sortValue === "sortAZ") {
      sortResult = window.sortDataAZ(data, sortValue);
      printDataPersonajes(sortResult);
  } else if (sortValue === "sortZA") {
      sortResult = window.sortDataZA(data, sortValue);
      printDataPersonajes(sortResult);
  }
};
sortData();

//Funciones del DOM
buttonFilter.addEventListener("change", filterData1);
buttonSort.addEventListener("change", sortData);

