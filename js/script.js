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

// funzione che genera la griglia richiesta
buttonPlay.addEventListener("click", () => {
    const livello = modalitaDiGioco.value; // costante per richiamare i value dei tag option per le difficolta
    console.log(livello);
    // uso l'espressione switch per impostare la generazione delle celle in base alla difficoltà selezionata 
    switch (livello) {
        case '0':
            numCelle = 100;
            larghezzaRem = 3.5;
            break;
        case '1':
            numCelle = 81;
            larghezzaRem = 3.7;
            break;
        case '2':
             numCelle = 49;
             larghezzaRem = 5;       
    }
    console.log(numCelle);
    console.log(larghezzaRem);
});