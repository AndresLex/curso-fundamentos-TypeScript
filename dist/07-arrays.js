"use strict";
(() => {
    // Se define de manera implicita un array que contendra solo numeros
    let prices = [1, 2, 5, 51, 51, 21, 122];
    // prices.push("adsda");
    // prices.push(true);
    // prices.push({});
    prices.push(2123);
    // Se quiere que un array de forma inferida posea tres tipos de datos
    let cosas = [1, 2, "3", true];
    let mixed;
    mixed = 0x101;
    mixed = "NaN";
    // mixed = {};
    // De forma explicita se denota como trabajara el array
    let mixedArray;
    mixedArray = [0x1f1];
    mixedArray.push("Hola", false, {});
    let numbers = [1, 2, 3, 4, 5, 6, 7];
    // let numbers = ["1","2","3"]; // Da error el .map
    numbers.map(elem => elem.toFixed);
})();
