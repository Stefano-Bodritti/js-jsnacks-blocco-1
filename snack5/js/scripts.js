// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var soloDispari = [];
var numero;

for (var i = 0; i < 6; i++) {
  numero = parseInt(prompt("Inserisci un numero"));
  if ( !(numero % 2 == 0) ) {
    soloDispari.push(numero);
  }
}
console.log(soloDispari);
