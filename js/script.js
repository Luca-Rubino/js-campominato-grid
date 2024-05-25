console.log('Js-campominato-grid')

// esercizio

// inizio esercizio


// elenco variabili utilizzate
let i, quadrato, numCelle, cellePerLato;

// richiamo in una costante gli elementi nel dom già presenti
const buttonPlay = document.querySelector('button');
const modalitaDiGioco = document.getElementById('modalità-di-gioco');

// creo elementi che andranno aggiunti nel dom
const bodySelector = document.querySelector('body');// seleziono il tag body nel dom
const sectionSecondo = document.createElement('section');// creazione sezione per inserire i quadrati numerati
sectionSecondo.classList.add('griglia');// aggiungo classe griglia per la personalizzazione con il file css
bodySelector.appendChild(sectionSecondo);// inserisco nel body la sezione dei quadrati