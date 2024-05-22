console.log('Js-campominato-grid')

// esercizio

// inizio esercizio

const bodySelector = document.querySelector('body')
const sectionSecondo = document.createElement('section')// creazione sezione per inserire i quadrati numerati
sectionSecondo.classList.add('griglia')// aggiungo classe griglia per la personalizzazione con il file css


let elQuadrato, i

const buttonPlay = document.querySelector('button')
buttonPlay.addEventListener("click", playGame)
function playGame(){
    // ciclo per creare i quadrati da 1 a 100
    for (i = 0; i < 100; i++){
        bodySelector.appendChild(sectionSecondo)// inserisco nel body la sezione dei quadrati
        elQuadrato = document.createElement('article')// creo l'elemento article che sarà il quadrato numerato 
        elQuadrato.classList.add('quadrato')// aggiungo la classe per la personalizzazione con il file css
        sectionSecondo.appendChild(elQuadrato)// aggiungo come figlio di section i vari article
        elQuadrato.addEventListener("click", sfondoCeleste)
        function sfondoCeleste() {
            elQuadrato.classList.add('bk-celeste')
            elQuadrato.append()// inserisco in ogni singolo article il valore numerico
        }}};