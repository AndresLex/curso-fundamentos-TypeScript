"use strict";
(() => {
    // Trabajando de forma inferida
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);
    // Trabajando de forma Explicita
    let customerAge = 25;
    // customerAge = customerAge + '1'; // Devuelve 251 es decir concatena cadena de string
    customerAge = customerAge + 1; // 26
    console.log('customerAge', customerAge);
    //Cunado no se inicializa la variable es importante agregar el tipado de dato
    let productInStock;
    console.log('productInStock', productInStock);
    if (productInStock > 10) { //Da alerta ya que la variable no se a asignado
        console.log('Es mayor');
    }
    let discount = parseInt('asa');
    console.log('discount', discount);
    if (discount <= 200) {
        console.log('Aplica descuento');
    }
    else {
        console.log('No aplica descuento');
    }
    // Tipos de dato hexadecimal comienza con: 0x
    let hex = 0xab012;
    console.log('hex', hex);
    //Tipos de datos Binarios empieza con: ob
    let bin = 0b1010111011;
    console.log('bin', bin); // Por defecto al mostrarlo se convierte al valor decimal
    // la manera correcta de tipar un tipo :number es con minuscula ya que :Number con mayuscula un objeto
})();
