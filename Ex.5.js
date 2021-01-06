/*Exercici 5
Reemplaça en el següent bloc de codi la promesa per aync / await:

    function b() {
        // ...
    }
funtion a() {
    b().then() = > {
        doMoreWork();
    }
}*/

function b() {
    // 
}
async function a() {
    let c = await b();
    doMoreWork();
}
a();