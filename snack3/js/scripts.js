// Il software deve chiedere per 10 volte all’utente di inserire
// un numero. Il programma stampa la somma di tutti i numeri
// inseriti.

var somma = 0;
var numero;
for (var i = 0; i < 10; i++) {
  numero = parseInt(prompt("Inserisci un numero"));
  if ( isNaN(numero) ) {
    console.log("Errore! Non hai inserito un numero!");
  } else {
    somma += numero;
  }
}
console.log(somma);
