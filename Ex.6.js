/*Exercici 6
Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques.
    -Usar .forEach() per obtenir aquest array.
    -Usar .map() per obtenir aquest array.

    var tasks = [{
            'name': 'Start React web',
            'duration': 120
        },
        {
            'name': 'Work out',
            'duration': 60
        },
        {
            'name': 'Procrastinate on facebook',
            'duration': 240
        }
    ];*/


let tasks = [{
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];

tasks.forEach(object => console.log(object.name));
tasks.map(object => console.log(object.name));