/* Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while. */


// metodo con for
// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt("Inserisci un numero"));
//   while (isNaN(numero)) {
//     numero = parseInt(prompt("Errore! Devi inserire un numero!"));
//   }
//   somma += numero;
// }
//
// console.log(somma);


// metodo con while
var somma = 0;
var i = 0;
do {
  var numero = parseInt(prompt("Inserisci un numero"));
  while (isNaN(numero)) {
    numero = parseInt(prompt("Errore! Devi inserire un numero!"));
  }
  somma += numero;
  i++;
} while ( i < 5 );

console.log(somma);
