

// Ordenando el arreglo oselectionBtenido
const sortData = (data, sortOrder) =>{
  return data.sort((a, b) => {
    let selectionA = a.name.toUpperCase();
    let selectionB = b.name.toUpperCase();
    if (sortOrder === 'a-z'){
      if (selectionA < selectionB){
        return -1;
      }else if(selectionA > selectionB){
        return 1;
      }else {
        return 0;           
      }
    }else{
      if (selectionA > selectionB){
        return -1;
      }else if(selectionA < selectionB){
        return 1;
      }else {
        return 0;           
      }
    }
  });
  // return 
};


window.sortData = sortData;
