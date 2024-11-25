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

// function addGreeting(list) {
//     return list.map(person => {
//       return {
//         ...person,
//         greeting: `Ciao ${person.firstName}, cosa ti piace di più di ${person.language}?`
//       };
//     });
//   }
  
//   let list = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Luca', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Lucia', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
//   ];
  
//   let updatedList = addGreeting(list);
//   console.log(updatedList);
  

//   [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//       greeting: 'Ciao Sofia, cosa ti piace di più di Java?'
//     },
//     { firstName: 'Luca', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//       greeting: 'Ciao Luca, cosa ti piace di più di Python?'
//     },
//     { firstName: 'Lucia', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//       greeting: 'Ciao Madonna, cosa ti piace di più di Ruby?'
//     }
//   ]
// ---------------------------------------------------------------------------------------------------------
// ESERCIZIO 3
