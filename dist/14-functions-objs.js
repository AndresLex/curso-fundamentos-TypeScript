"use strict";
(() => {
    // Cuando se tienen demasiados parametros por pasar a una funcion se suelen encapsular en un objeto
    const login = (email, password) => {
        console.log(email, password);
    };
    login('andres@gmail', '121212');
    const loginV2 = (data) => {
        console.log(data.email, data.password);
    };
    loginV2({
        email: 'andres@hotmail',
        password: 12121121
    });
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
})();
