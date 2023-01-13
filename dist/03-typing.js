"use strict";
// Ya que TS no trabaja con un sistema de modulos, para que no choquen las variables declaradas en diferentes archivo
// Se crea una funcion anonima autoejecutada (() => { })(); para trabajar con el mismo nombre de variables en diferentes archivos
(() => {
    // El "Motor de inferencia" de TS deduce los tipos de datos solo
    let myProductName = 'Producto 1';
    let myProductPrice = 123;
    // myProductName = 123; // Da error ya que se declaro implicitamente como string
    //Nos señalará como error pues se le quiere asignar un número a una variable de tipo string.
    // Al saber el tipo de dato TS ayuda a realizar autocompletado textual dependiendo del tipo de dato
    myProductName.toLowerCase();
    myProductPrice.toFixed(); //Muestra metodos que solo pertenecen a un tipo de dato number
    const myProductStock = 1000;
})();
