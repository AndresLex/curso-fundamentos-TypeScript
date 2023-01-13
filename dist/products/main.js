"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Este es el archivo que normalmente ejecuta todo
const product_service_1 = require("./product.service");
(0, product_service_1.createProduct)({
    title: 'Pro1',
    createAt: new Date,
    stock: 5
});
(0, product_service_1.createProduct)({
    title: 'pro2',
    createAt: new Date,
    stock: 1,
    size: 'S'
});
product_service_1.products.push({
    title: 'produc3',
    createAt: new Date,
    stock: 12
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
