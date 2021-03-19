// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// 2 step:
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// 3 step:
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function numeroRandom(min, max) {
  var numeroCasuale = Math.floor((Math.random() * (max - min + 1)) + min);
  return numeroCasuale;
}

$(function () {
var squadre = [
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

for (var i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = numeroRandom(0, 50);
  squadre[i].falliSubiti = numeroRandom(0, 30);
}
// console.log(squadre);

var squadre2 = [];
for (var i = 0; i < squadre.length; i++) {
  var temp = {};
  temp.nome = squadre[i].nome;
  temp.falliSubiti = squadre[i].falliSubiti;
  squadre2.push(temp);
}

console.log(squadre2);

});
