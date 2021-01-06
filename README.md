## Exercici 1
### Converteix a funcions fletxa:


function multiply(num1, num2) {

   return num1 * num2;
}
##

function toCelsius(fahrenheit) {

   return (5/9) * (fahrenheit-32);
}

## // This function returns a string padded with leading zeros

function padZeros(num, totalLen) {

   var numStr = num.toString();
   
   var numZeros = totalLen - numStr.length;
   
   for (var i = 1; i <= numZeros; i++) {
   
      numStr="0" + numStr; 
      }   
   return numStr;
 } 
##

function power(base, exponent) { 

   var result=1; 
   
   for (var i=0; i < exponent; i++) { 
   
  result *=base; 
   }   
   return result;
} 

##
function greet(who) {

    console.log("Hello " + who);
}


## Exercici 2
### Arregla l'error del següent bloc de codi:


users.map(function (user) {

   user.firstName;
});
##

var users = 

[{ firstName: 'Homer', lastName: 'Simpson' },

{ firstName: 'Marge', lastName: 'Simpson' },

{ firstName: 'Bart', lastName: 'Simpson' },

{ firstName: 'Lisa', lastName: 'Simpson' },

{ firstName: 'Maggie', lastName: 'Simpson' }];



## Exercici 3
### Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Resultat per consola: 'a long time ago in a galaxy far far away'

Nota: no fa falta fer un "join".


## Exercici 4
### Crear una funció que accepti un string i retornada aquest string revertit. Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()


## Exercici 5
### Reemplaça en el següent bloc de codi la promesa per aync/await:


function b() {
   // ...
}
funtion a() {
   b().then() = > {
   doMoreWork();
   }
}

## Exercici 6
Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 


- Usar .forEach() per obtenir aquest array.

- Usar .map() per obtenir aquest array.

##

var tasks = [
{

   'name' : 'Start React web',
   
   'duration' : 120
},

{
   'name' : 'Work out',
   
   'duration' : 60
},

{
   'name' : 'Procrastinate on facebook',
   
   'duration' : 240
}
];
