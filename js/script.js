console.log('Js-campominato-grid')

// esercizio

// inizio esercizio
let elQuadrato, i
const buttonPlay = document.querySelector('button')
const bodySelector = document.querySelector('body');
const sectionSecondo = document.createElement('section');// creazione sezione per inserire i quadrati numerati
sectionSecondo.classList.add('griglia');// aggiungo classe griglia per la personalizzazione con il file css
bodySelector.appendChild(sectionSecondo);// inserisco nel body la sezione dei quadrati

buttonPlay.addEventListener("click", () => {
    sectionSecondo.innerHTML = '';// imposto la rigenerazione della griglia ad ogni click del bottone play
    // ciclo per creare i quadrati da 1 a 100
    i = 0;
    while (i < 100){
        elQuadrato = document.createElement('article');// creo l'elemento article che sarà il quadrato numerato
        elQuadrato.addEventListener("click", sfondoCeleste)
        sectionSecondo.appendChild(elQuadrato);// aggiungo come figlio di section i vari article
        elQuadrato.classList.add('quadrato');// aggiungo la classe per la personalizzazione con il file css
        elQuadrato.querySelector('article')
        function sfondoCeleste() {
            elQuadrato.classList.add('bk-celeste')
            // elQuadrato.append(i)// inserisco in ogni singolo article il valore numerico
        }; 
        i++
    };
});