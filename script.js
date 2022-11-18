/*PARTE JAVASCRIPT
A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
CONSIDERAZIONI FINALI e BONUS:
Mentre come bonus javascript dovete far diventare il codice sconto inserito di colore rosso, qualora quello inserito non sia valido.
Inoltre se il codice fornito è valido, eliminare quel codice dall’elenco dei codici sconto disponibili, il codice sconto non sarà più usabile.*/

let prezzo = 0;
let arrSconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
let stampaPrezzo = document.getElementById("stampaPrezzo");


function submitForm(event) {
    event.preventDefault(); 

    let numOre = document.getElementById("ore").value;
    let scelta = parseInt(document.getElementById("inputType").value);

    console.log("ore: " + numOre + " scelta n: " + scelta);

    switch (scelta) {
        case 0:
            console.log("Devi scegiere un tipo di lavoro")
            break;
        case 1:
            console.log("Back-end development")
            prezzo = numOre*20.50;
            break;
        case 2:
            console.log("Front-end development")
            prezzo = numOre*15.30;
            break; 
        case 3:
            console.log("Project analisis")
            prezzo = numOre*33.60;
            break;
        // default:
        //     console.log("Qualscosa è andato storto")
        //     break;
    }
    console.log("Prezzo: " + prezzo);

    let sconto = document.getElementById("discount").value;

    console.log("Codice sconto: " + sconto);

    if(cercaInArray(arrSconti,sconto)){
        console.log("Applico lo sconto di 25%");
        prezzo -= (prezzo*25)/100;
        stampaPrezzo.innerHTML = prezzoFianle(sconto);
        stampaPrezzo.innerHTML += "Sconto del 25 % applicato"
        eliminaElemento(arrSconti,sconto);
    }else{
        console.log("NON applico lo sconto di 25%");
        stampaPrezzo.innerHTML = prezzoFianle(sconto);
        // rendiRosso(discount);
        let aggiungiClasse = document.getElementById("discount").classList.add("text-danger");
        stampaPrezzo.innerHTML += "Il codice inserito non è valido"
    }
    console.log("Prezzo finale: " + prezzo);

}



//-----------------------------------FUNZIONI
// Abbastanza inutili ma volevo provare ad inserirne quando ripetevo del testo o svolgevo azioni facilmente ripetibili
function cercaInArray(array,parola){
    for (let i = 0; i < array.length; i++) {    
        if(array[i]===parola){
            console.log("TROVATO-->sconto array: " + array[i] + " sconto inserito: " + parola);
            return true;
        }   
    }
    console.log("sconto NON trovato")
    return false;

}

function prezzoFianle(num){
    return '<h3 id="stampaPrezzo">Il prezzo finale è di: '+prezzo.toFixed(2)+' &euro;</h3>';
}
function eliminaElemento(array, parola){
    for (let i = 0; i < array.length; i++) {    
        if(array[i]===parola){
            console.log("ho cancellato il codice sconto " + parola);
            array.splice(i, 1);
        }   
    }
    console.log("Qualcosa è andato storto")

}

// ci ho provato in tutti i modi ma mi dà sempre "Cannot read properties of null (reading 'classList')"
/*function rendiRosso(id){
    let aggiungiClasse = document.getElementById("\""+id+"\"").classList.add("text-danger");

}*/
