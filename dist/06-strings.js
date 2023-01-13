"use strict";
(() => {
    // Dejando a TS que infiera el dato
    let productTitle = 'My amazing product';
    // productTitle = null;
    // productTitle = ()=>{};
    // De forma explicita
    let product2Title = 'Mi producto';
    console.log('product2Title', product2Title);
    const productDescription = "I'am  observe la comilla simple";
    console.log('productDescription', productDescription);
    const summary = `
    texto
    en
    varias
    lineas con las '' de lado
    o poner variables ${productTitle}
  `;
    console.log('summary', summary);
})();
