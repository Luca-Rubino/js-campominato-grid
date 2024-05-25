Esercizio: Griglia Campo Minato

> Consegna:

> L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. 

> Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus:

> Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- Con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- Con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- Con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

> Svolgimento + bonus:

- Creare costanti per richiamare gli elementi nel dom già presenti
- Creare elementi che andranno aggiunti nel dom
- Creare funzione che genera la griglia richiesta al click del pulsante button
- All'interno di data funzione uso l'espressione switch per impostare la generazione delle celle in base alla difficoltà selezionata
- Sempre nella stessa funzione inserisco il richiamo alla funzione che genera i quadrati in base alla difficolta selezionata e creo la funzione per colorare le singole caselle
- Creo funzione per creare i quadrati e numeri della griglia
- Personalizzo il tutto con il file style.css