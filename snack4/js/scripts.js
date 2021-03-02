// In un array sono contenuti i nomi degli invitati alla festa del
// grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var iscritti = ["stefano", "alberto", "giulia", "francesco", "giacomo"];
var controllo = 0;
var nome = prompt("Inserisci il tuo nome");

for (var i = 0; i < iscritti.length; i++) {
  if (iscritti[i] == nome) {
    controllo = 1;
  }
}

if (controllo == 1) {
  console.log("Puoi partecipare alla festa!");
} else {
  console.log("Mi spiace, non puoi partecipare alla festa!");
}
