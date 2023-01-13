"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'pro1',
        createAt: new Date,
        stock: 1
    });
    addProduct({
        title: 'pro2',
        createAt: new Date,
        stock: 1,
        size: 'S'
    });
    console.log(products);
    products.push({
        title: 'produc3',
        createAt: new Date,
        stock: 12
    });
})();
