// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari
do {
  var posizioni = parseInt(prompt("Quanti numeri vuoi inserire?"));
} while (isNaN(posizioni));

var numeri = [];

for (var i = 1; i <= posizioni; i++) {
  do {
    var numero = parseInt(prompt("Inserisci il " + i + "° numero"));
  } while (isNaN(numero));
  numeri.push(numero);
}

var somma = 0;
for (var i = 0; i < numeri.length; i += 2) {
  somma += numeri[i];
}
console.log(somma);
