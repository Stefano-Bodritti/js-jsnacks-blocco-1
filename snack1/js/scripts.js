// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var num1 = prompt("Inserisci il primo numero");
var num2 = prompt("Inserisci il secondo numero");

if (isNaN(num1) || isNaN(num2)) {
  alert("Devi inserire due numeri! Ricarica la pagina!")
} else {
  if (num1 > num2) {
    alert(num1);
  } else {
    alert(num2);
  }
}
