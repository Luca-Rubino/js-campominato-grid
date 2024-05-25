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
    sectionSecondo.innerHTML = '';// imposto la rigenerazione della griglia ad ogni click del bottone play
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
    // creo ciclo per creare i quadrati in base alla difficolta selezionata
    i = 1;
    while (i <= numCelle){
        const quadrati = generazioneQuadrati (i, larghezzaRem);
        quadrati.addEventListener("click", () => {
            quadrati.classList.add('bk-celeste');
        });
        i++
    };
});

// funzione per creare quadrati e numeri all'interno
function generazioneQuadrati (num, width) {
    //  generare classe e dimensioni dei quadratini
    quadrato = document.createElement('article');// creo l'elemento article che sarà il quadrato numerato
    sectionSecondo.appendChild(quadrato);// aggiungo come figli di section i vari article
    quadrato.classList.add('quadrato');// aggiungo la classe per la personalizzazione con il file css
    quadrato.style.width = `${width}rem`;// aggiungo all'elemento quadrato tramite il .style un width che avra valore variabile a seconda del valore larghezzaRem presente nell'espressione switch
    quadrato.querySelector('article');
    // crea un numero da inserire nel nodo precedente e chiudiamo la funzione
    quadrato.append(num);
     return quadrato;
};