/* 
Consegna

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno:
:mando: Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/




//L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata


// Genera una grigli attraverso una funzione
/**
 * Genera una griglia
 * @param {string} selettore selettore
 * @param {string} nome_tag nome del tag
 * @param {string} nome_classe nome della classe
 * @param {number} limite numero limite di elementi
 */
function generaGriglia(selettore, nome_tag, nome_classe, limite) {
    const cellsElement = document.querySelector(selettore);

    for (let i = 1; i <= limite; i++) {
        const cellItem = document.createElement(nome_tag);
        cellItem.classList.add(nome_classe);
        cellsElement.append(cellItem);
    }
};

// funzione che genera numeri in base alla difficoltà
function generaNumeri(limite) {
    for (i = 1; i <= limite; i++){
        let numeri = [];
        let numero = Math.floor(Math.random() * 101);
        numeri.push(numero);
        numeri.sort((a, b) => a - b);
        console.log(numeri);

    }
}

generaNumeri(100);


let play = document.getElementById('play');
play.addEventListener('click', function(event) {
    event.preventDefault();
    /*
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
 */
    const limite = document.getElementById('difficolta').value;
    //console.log(limite);

    let limite_num;

    if (limite == 'easy') {
        limite_num = 49;
    } else if (limite == 'medium'){
        limite_num = 81;
    } else if (limite == 'hard'){
        limite_num = 100;
    }
    //console.log(limite_num);

    generaGriglia('.cells', 'div', 'cell', limite_num)
    /* selectElements('.cell', 'active') */
   
});




//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
