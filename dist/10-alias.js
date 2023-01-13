"use strict";
(() => {
    let userId;
    function greeting(userId) {
        // Aqui el tipado se vuelve dinamico de acuerdo a la centencia dentro del if
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    let shirtSize;
    shirtSize = 'L';
    shirtSize = 'sas';
    console.log(shirtSize);
})();
