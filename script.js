

/* Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: 
:avviso:non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile,
 per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. 
Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo 
perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. 
Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta. */

// Creo funzione per generare celle
function createCell(number){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.append(number);
    return cell;
}
// Creo funzione per generare un numero random
function getRandomNumber (min, max, blacklist){
    let randomNumber;
    do{
        randomNumber = Math.floor(Math.random()*(max + 1 - min)) + min;
    } while(blacklist.includes(randomNumber));
    return randomNumber;
}

// Prendo elementi dal DOM
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const h2 = document.querySelector('h2');
const select = document.getElementById('difficulty');
const grid = document.querySelector('.grid');

// Event listener al button
button.addEventListener('click', function(){
    const userChoise = select.value;
    let rows = 10;
    let cols = 10;
    if(userChoise === 'medium'){
        rows = 9;
        cols = 9;
    } else if (userChoise === 'hard') {
        rows = 7;
        cols = 7;
    }
    const totalCells = rows * cols; 


    let score = 0;

    const bombs = [];
 
    grid.innerHTML = '';

    // Genero 16 numeri casuali
    for (let i = 1; i <= 16; i++){
        //Aggiungo i numeri random nell'array bombe
        const nRandom = getRandomNumber(1, totalCells, bombs);
        bombs.push(nRandom);
    }
    console.log(bombs);

    // Genero griglia
    for(let i = 1 ; i <= totalCells; i++){
        const cell = createCell(i);
           
        if(userChoise === 'hard'){
           grid.classList.add('hard');
        } else if (userChoise === 'medium'){
            grid.classList.add('medium');
        }else{
           grid.classList.add('easy')
        }
        
       
        
        
    }
});