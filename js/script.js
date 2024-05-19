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