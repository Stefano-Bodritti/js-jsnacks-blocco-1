// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.

var nomi = ["Stefano", "Luigi", "Alberto", "Gianluca", "Matteo"];
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var listaCasuale = [];

for (var i = 0; i < 3; i++) {
  var nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
  var cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
  listaCasuale[i] = nomeCasuale + " " + cognomeCasuale;
}

console.log(listaCasuale);
