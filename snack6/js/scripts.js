// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

do {
  var numeroMax = parseInt(prompt("Inserisci un numero"));
} while (isNaN(numeroMax));

for (var i = 1; i <= numeroMax; i++) {
  var cuboNumero = Math.pow(i, 3);
  console.log(cuboNumero);
}
