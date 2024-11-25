//ESERCIZIO 1

// Dato un array di oggetti rappresentanti degli sviluppatori:

// - crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa

function addSaluto(list) {
    return list.map(dev => {
      dev.saluto = `Ciao ${dev.firstName}, ${dev.language}?`;
      return dev; 
    });
  }
  
  let list = [
    { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
  let updatedList = addSaluto(list);
  
  console.log(updatedList);
  