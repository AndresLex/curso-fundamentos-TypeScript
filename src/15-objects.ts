(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'pro1',
    createAt: new Date,
    stock: 1
  })

  addProduct({
    title: 'pro2',
    createAt: new Date,
    stock: 1,
    size: 'S'
  })

  console.log(products);
  products.push({
    title: 'produc3',
    createAt: new Date,
    stock: 12
  });
})();
