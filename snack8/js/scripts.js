// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numero = prompt("Inserisci un numero di 4 cifre");
var totale = 0;

for (var i = 0; i < 4; i++) {
  var cifra = parseInt(numero.charAt(i));
  totale += cifra;
}

console.log(totale);

// numero.charAt(i) è uguale a numero[i]
