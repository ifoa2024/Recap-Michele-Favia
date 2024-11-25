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
// function hasGreenEyes(list) {
//     return list.some(person => person.eyes === 'Green');
//   }
  
//   let list = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
//   ];
  
//   let result = hasGreenEyes(list);
//     console.log(result);  // Risultato: true
    
// ---------------------------------------------------------------------------------------------------------
// ESERCIZIO 4
// function findDeveloperByLanguage(list, language) {
//     // Trova il primo sviluppatore con il linguaggio specificato
//     const developer = list.find(person => person.language === language);
  
//     // Se trovato, ritorna il nome e il paese, altrimenti ritorna il messaggio di non trovato
//     if (developer) {
//       return `${developer.firstName}, ${developer.country}`;
//     } else {
//       return `Non ci sono sviluppatori ${language}`;
//     }
//   }
  
//   let list = [
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//   ];
  
//   // Chiamata per cercare uno sviluppatore Python
//   let result = findDeveloperByLanguage(list, 'Python');
//   console.log(result);
  
//   // Chiamata per cercare uno sviluppatore Ruby
//   result = findDeveloperByLanguage(list, 'Ruby');
//   console.log(result);  // Risultato: "Non ci sono sviluppatori Ruby"
  // ---------------------------------------------------------------------------------------------------------
// ESERCIZIO 5
// function showUserStatus(list) {
//     const loggedTrue = true;  
//     const loggedFalse = false; 
  
//     list.forEach(user => {
//       if (user.logged === loggedTrue) {  
//         alert("L'utente è stato registrato.");
//       } else if (user.logged === loggedFalse) {
//         alert("L'utente non è registrato.");
//       }
//     });
//   }
  
//   let list = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
//   ];
  
//   // Chiamata della funzione per mostrare gli alert
//   showUserStatus(list);
// ---------------------------------------------------------------------------------------------------------
// ESERCIZIO 6
// let text = prompt('Come ti chiami?');
// document.getElementById('output').textContent = 'Ciao, ' + text + '!';
// ---------------------------------------------------------------------------------------------------------
// ESERCIZIO 7
// Array dei giorni e degli orari di apertura
// let openingDays = [
//     { day: 'Lunedi', from: '9.00', to: '18.00' },
//     { day: 'Martedi', from: '9.00', to: '18.00' },
//     { day: 'Mercoledi', from: '9.00', to: '18.00' },
//     { day: 'Giovedi', from: '9.00', to: '18.00' },
//     { day: 'Sabato', from: '9.00', to: '18.00' },
//     { day: 'Domenica', from: '9.00', to: '18.00' }
//   ];
  
  
//   function createOpeningHoursList() {
    
//     const ulElement = document.getElementById('openings');
  
 
//     openingDays.forEach(dayInfo => {

//       const li = document.createElement('li');
      

//       li.textContent = `${dayInfo.day}: dalle ${dayInfo.from} alle ${dayInfo.to}`;
      
      
//       ulElement.appendChild(li);
//     });
//   }
  

//   createOpeningHoursList();
  
// ---------------------------------------------------------------------------------------------------------
// ESERCIZIO 8


