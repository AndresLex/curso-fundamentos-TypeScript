"use strict";
(() => {
    function createProductToJson(title, createAt, stock, size) {
        return {
            title,
            createAt,
            stock,
            size
        };
    }
    const producto1 = createProductToJson('P1', new Date(), 12, 'M');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.createAt);
    // Se recomienda usar las arrow function ya que solucionan errores del this que vienen en la otra forma
    // si se quiere que un parametro sea opcional se usa el optinal chaining: "?" por defecto la variable sera undefined
    const createProductToJsonV2 = (title, createAt, stock, size) => {
        return {
            title,
            createAt,
            stock,
            size
        };
    };
    const producto2 = createProductToJsonV2('P2', new Date(), 22);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.createAt);
    console.log(producto2.size); // devuelve undefined
})();
