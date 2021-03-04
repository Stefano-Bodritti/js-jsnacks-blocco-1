// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var listaLunga = [345, 7254, 7283, 873, 9, 64];
var listaBreve = [23, 85];

while (listaBreve.length < listaLunga.length) {
  listaBreve.push(Math.floor(Math.random() * 10000));
}

console.log(listaBreve);
console.log(listaLunga);
