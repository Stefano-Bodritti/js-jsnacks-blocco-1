// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore

$(function () {
var bici = [
  {
    nome: "Atala",
    peso: 2500,
  },
  {
    nome: "Giant",
    peso: 2000,
  },
  {
    nome: "Cannondale",
    peso: 1500,
  },
  {
    nome: "Merida",
    peso: 3500,
  }
];

var posBiciLeggera = 0;
for (var i = 1; i < bici.length; i++) {
  if ( bici[i].peso < bici[posBiciLeggera].peso) {
    posBiciLeggera = i;
  }

}
console.log(bici[posBiciLeggera].nome);

});
