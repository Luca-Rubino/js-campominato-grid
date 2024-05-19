console.log('Js-campominato-grid')


// inserisco il titolo dell'esercizio attraverso il js
const bodySelector = document.querySelector('body')
const section = document.createElement('section')
const h1 = document.createElement('h1')
bodySelector.appendChild(section)
section.appendChild(h1)
h1.textContent='Js-campominato-grid'

// inizio esercizio

const sectionSecondo = document.createElement('section')// creazione sezione per inserire i quadrati numerati
sectionSecondo.classList.add('griglia')// aggiungo classe griglia per la personalizzazione con il file css

let elQuadrato

// ciclo per creare i quadrati da 1 a 100
for (let i = 0; i < 100; i++){
    bodySelector.appendChild(sectionSecondo)// inserisco nel body la sezione dei quadrati
    elQuadrato = document.createElement('article')// creo l'elemento article che sarà il quadrato numerato 
    elQuadrato.classList.add('quadrato')// aggiungo la classe per la personalizzazione con il file css
    sectionSecondo.appendChild(elQuadrato)// aggiungo come figlio di section i vari article
    elQuadrato.append(i+1)// inserisco in ogni singolo article il valore numerico
}