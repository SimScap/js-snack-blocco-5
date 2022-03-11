/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */


/*
const alphabet = "abcdefghijklmnopqrstuvwxyz"

const player = [
{
codice : '',    
nome: '',
cognome: '',
età: '',
mediaPunti:'',
percTiri:'',
}
];

const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomCharacter);

*/


// ---------- SNACK2 ------------


/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */


    /**
     * const cars = [
        {
            marca: 'Audi',
            modello: 'cabrio',
            alimentazione: 'benzina',
        },
        {
            marca: 'Audi',
            modello: 'station',
            alimentazione: 'diesel',
        },
        {
            marca: 'Audi',
            modello: 'suv',
            alimentazione: 'gpl',
        },
        {
            marca: 'Mercedes',
            modello: 'cabrio',
            alimentazione: 'benzina',
        },
        {
            marca: 'Mercedes',
            modello: 'station',
            alimentazione: 'diesel',
        },
        {
            marca: 'Mercedes',
            modello: 'suv',
            alimentazione: 'gpl',
        },
        {
            marca: 'Ford',
            modello: 'cabrio',
            alimentazione: 'benzina',
        },
        {
            marca: 'Ford',
            modello: 'station',
            alimentazione: 'diesel',
        },
        {
            marca: 'Ford',
            modello: 'suv',
            alimentazione: 'gpl',
        },
        {
            marca: 'Opel',
            modello: 'cabrio',
            alimentazione: 'benzina',
        },
        {
            marca: 'Opel',
            modello: 'station',
            alimentazione: 'diesel',
        },
        {
            marca: 'Opel',
            modello: 'suv',
            alimentazione: 'gpl',
        },  
    ];

    const fuelTypeGasoline = cars.filter((element) =>{
        if (element.alimentazione == "benzina") return true
    });
    const fuelTypeDiesel = cars.filter((element) =>{
        if (element.alimentazione == "diesel") return true
    });
    const fuelTypeOthers = cars.filter((element) =>{
        if (element.alimentazione == "benzina") return true
    });

     */
    


    /**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

    
    const array = ['pippo', 'PLUTO', 'Paperino'];

    const newArray = array.map((element) => {
        return element.charAt(0).toUpperCase() +
        element.substring(1).toLocaleLowerCase(0);
    })

    console.log(newArray);



 * 
 */


/**
 * 
 * 
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.


animali = [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ];

    const listaMammiferi = animali.filter((element) =>{
        if (element.classe == "mammiferi") return true
    });

    console.table(listaMammiferi);

 * 
 */  



