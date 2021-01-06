/*Exercici 4
Crear una funció que accepti un word i retornada aquest word revertit.Nota: Usar funció fletxa(arrow functions), l 'operador de prograpación (spread operator) y el mètode .reverse()*/

let name = "It Academy";
const reverseName = (word) => {
    let arrayWord = [...word];
    let wordReversed = arrayWord.reverse();

    return wordReversed.join('');
}
console.log(reverseName(name));