// Generador de frases aletorias
let quotes = [
    "'Nadie existe a propósito. Nadie pertenece a ninguna parte. Todos vamos a morir. Ven a ver la televisión'",
    "'Científicamente hablando, las tradiciones son estúpidas'",
    "'Las bodas son básicamente funerales con un pastel'",
    "'Lo que la gente llama ‘amor’ es sólo una reacción química que motiva a los animales a aparearse'",
    "'A veces la ciencia es más arte que ciencia. Mucha gente no entiende eso'",
    "'Estás creciendo, Morty. Creciendo como una enorme espina dentro de mi trasero'",
    "'Haces muchas preguntas, Morty. No resulta muy carismático'",
    "'En una sociedad, trabajan unos para otros. Eso sólo suena como a esclavitud con pasos extras'",
    "'No me gusta este lugar, Morty. No soporto la burocracia. No me agrada que me digan dónde ir y qué hacer. Lo considero una violación. ¿Metiste esas semillas bien arriba en tu trasero?'",
    "'Les gusta la referencia Redgren Grumbholdt? Sí, bueno… ¿Adivinen qué? La inventé. Realmente son los hijos de su padre. Piensen por ustedes mismos, no seas ovejas'",
    "'Pero los discursos son para hacer campaña. Ahora es el momento para la acción'",
    "'Qué hay sobre la realidad en la que Hitler curó el cáncer, Morty? La respuesta es: no pienses en ello'",
    "'Píntales dedo. Les dije que significa ‘paz entre los mundos'",
    "'Bueno, no puedo curar la muerte'",
    "'No me vas a creer, porque casi nunca pasa, pero cometí un error'",
    ]
  
  let btnQuote = document.querySelector("#button-new");
  btnQuote.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.querySelector("#newQuoteSection").innerHTML = quotes[randomNumber];
  });  
  
  let btnTweet = document.querySelector("#button-tweet");
  btnTweet.addEventListener("click", function(){
    const generatedQuote = document.getElementById('newQuoteSection').innerHTML;
    const tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote);
     window.open(tweetUrl);
  });  

  // ----------------------------------------------------------------------------------------

  //Función de filtrado
const filterData = (data, key, value) => {
  let filterResult = data.filter(element => element[key] === value);    
  console.log(key);
  console.log(value);
  console.log(filterResult);
  return filterResult;
};

//Funciones select
const sortDataAZ = (data) => {
  data.sort((a,b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return data;
};

const sortDataZA = (data) => {
  data.sort((a,b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });
  return data;
};


//Declara métodos globales
window.filterData = filterData;
window.sortDataZA = sortDataZA;
window.sortDataAZ = sortDataAZ;