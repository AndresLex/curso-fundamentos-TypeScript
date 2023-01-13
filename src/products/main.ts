// Este es el archivo que normalmente ejecuta todo
import { createProduct, calcStock, products } from "./product.service";

createProduct({
  title: 'Pro1',
  createAt: new Date,
  stock: 5
});

createProduct({
  title: 'pro2',
  createAt: new Date,
  stock: 1,
  size: 'S'
});

products.push({
  title: 'produc3',
  createAt: new Date,
  stock: 12
});

console.log(products);

const total = calcStock();
console.log(total);
