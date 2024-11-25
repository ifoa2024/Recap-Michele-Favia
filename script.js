//ESERCIZIO 1

// Dato un array di oggetti rappresentanti degli sviluppatori:

// - crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa

// function countDevelopers(list, continent, language) {
//     return list.filter(dev => dev.continent === continent && dev.language === language).length;
//   }
  
//   let list = [
//     { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];
  
//   // Esempio di utilizzo della funzione:
//   let continent = 'Europe';
//   let language = 'JavaScript';
  
//   let count = countDevelopers(list, continent, language);
//   console.log(`Numero di sviluppatori ${language} provenienti da ${continent}:`, count);
// -------------------------------------------------------------------------------------------
// ESERCIZIO 2
//  Dato un array di oggetti:

// - crea una funzione che ritorni un array
// - e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
//     - “Awe < firstName >, io lavoro con < language here >, ma effettivamente è meglio javascript”
