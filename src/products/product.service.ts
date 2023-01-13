// el .service sirve para saber que el archvo tratara algunos datos
// metodos que incloiran los datos

// Para importar funciones o variables desde otro archivo se usa la keyword: import
import { Product } from "./product.model"; // from se hace referencia el archivo y en las llaves se escogen las cosas que se quieren importar

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
 let total = 0;
 products.forEach((item) => {
  total += item.stock;
 });
 return total;
}
