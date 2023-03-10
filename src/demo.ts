(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      // mehtod: 'GET'
      method: 'GET'
    });
    // const data = await rta.parseJson(); // Errores que no identifica JS
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;
    // for (const i = 0; i < products.length(); i++) {
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }

  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = `${person} +  ${limit}`;
  console.log(rta);
});
