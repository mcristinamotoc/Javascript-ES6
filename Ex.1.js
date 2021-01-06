// Nivel I
/* Aquest exercici és molt senzill: es plantegen petits fragments de codi JavaScript ES5, els quals s'han de reescriure per a utilitzar la nomenclatura d'ES6 i resoldre petits reptes mitjançant ES6.
   L'objectiu és repassar els coneixements adquirits d'ES6 */

/*------------------------------------------------------------------------------
Exercici 1: Converteix a funcions fletxa:
1) function multiply(num1, num2) {
    return num1 * num2;
}*/

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(6, 8));


/*---------------------------------------------------------------------------------------
 2) function toCelsius(fahrenheit) {
return (5 / 9) * (fahrenheit - 32);
}*/

const toCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);
console.log(toCelsius(20));


/* ------------------------------------------------------------------------------------
3) This function returns a string padded with leading zeros

function padZeros(num, totalLen) {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
} */

const padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}
console.log(padZeros(3, 5));



/*--------------------------------------------------------------------------------------
4) 
function power(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}*/

const power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(3, 2));

/* -------------------------------------------------------------------------------------
5) 
function greet(who) {
    console.log("Hello " + who);
}*/

const greet = who =>
    console.log(`Hello ${who}`);

greet("Lluis");
