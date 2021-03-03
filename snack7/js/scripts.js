// Stampa le potenze di 2 fino a 1000.

var i = 0;
do {
  var potenza = Math.pow(2, i);
  if (potenza <= 1000) {
    console.log(potenza);
  }
  i++;
} while (potenza <= 1000);
