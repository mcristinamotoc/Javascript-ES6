/*Exercici 3
Donat el següent array de strings, mostrar per consola la frase completa usant.reduce()

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Resultat per consola: 'a long time ago in a galaxy far far away'
Nota: no fa falta fer un "join".*/

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let epicQuote = epic.reduce((add, currentValue) => {
    return `${add} ${currentValue}`
})
console.log(epicQuote);