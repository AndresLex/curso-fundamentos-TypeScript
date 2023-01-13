"use strict";
(() => {
    // any es cualquier cosa es como en JS
    // Al parecer se desactiva el sistema de checkeo de TS
    let miDynamicVar;
    miDynamicVar = 100;
    miDynamicVar = null;
    miDynamicVar = {};
    miDynamicVar = '';
    // any se aconseja no utilizarlo es como una camisa de fuerza
    // Ya que TS es de forma incremental any puede ser usado para migracio
    miDynamicVar = 'HOLA';
    //para forzar que sea tratado como un string
    // se usa el cast con "as"
    // se traduce como "as" que tal variable sea tratada de tal manera
    console.log(miDynamicVar);
    const rta = miDynamicVar.toLowerCase();
    console.log(rta);
    // Otra forma de hacer cast con: <number>
    miDynamicVar = 1234;
    const rta2 = miDynamicVar.toFixed();
    console.log(rta2);
})();
