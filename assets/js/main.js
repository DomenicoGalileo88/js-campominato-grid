/* 
Consegna

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


//L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata

// Genera una griglia attraverso una funzione
/**
 * Genera una griglia
 * @param {string} selettore selettore
 * @param {string} nome_tag nome del tag
 * @param {string} nome_classe nome della classe
 * @param {number} limite numero limite di elementi
 */
function generaGriglia(selettore, nome_tag, nome_classe, limite) {
    const cellsElement = document.querySelector(selettore);
    
    cellsElement.innerHTML = ''; //Pulizia celle

    for (let i = 1; i <= limite; i++) {
        const cellItem = document.createElement(nome_tag);
        cellItem.classList.add(nome_classe);
        cellItem.innerHTML = i;
        cellsElement.append(cellItem);
    }
};

// Funzione che seleziona un elemento e gli aggiunge una classe al click su una cella
/**
 * Funzione che attiva una classe al click su una cella
 * @param {string} selettore 
 * @param {*} classe_attivata 
 */
function selectElements(selettore, classe_attivata) {
    const cells = document.querySelectorAll(selettore);

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        cell.addEventListener('click', function () {
            //console.log(this, i);
            this.classList.toggle(classe_attivata);
        });
    };
};

// quando clicca su play
let play = document.getElementById('play');
play.addEventListener('click', function(event) {
    event.preventDefault();

    const limite = document.getElementById('difficolta').value;
    //console.log(limite);
   
    // Numero di celle assegnato per difficoltà
    let limite_num;
    
    if (limite == 'easy') {
        limite_num = 49;
    } else if (limite == 'medium'){
        limite_num = 81;
    } else if (limite == 'hard'){
        limite_num = 100;
    }
    //console.log(limite_num);
    generaGriglia('.cells', 'div', 'cell', limite_num);

    //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
    selectElements('.cell', 'bg_blue');
    
    // In base alla scelta della difficoltà cambia la grandezza della cella e della griglia
    const cells = document.querySelectorAll('.cell');

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        if (limite == 'easy') {
            cell.classList.add('cell_easy');
        } else if (limite == 'medium'){
            cell.classList.add('cell_medium');
        } else if (limite == 'hard') {
            cell.classList.add('cell_hard');
        }
    }
});
