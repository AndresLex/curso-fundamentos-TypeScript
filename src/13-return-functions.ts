(() => {
  // En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función o indicar si no se devolverá dato alguno
  // para colocar de manera explicita el retorno de una funcion se hace con ":" luego de los parametros (): typeDato => {}
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach( num => {
      total += num;
    });
    return total;
  }

  function holaMundo(): string {
    return "Hello, World!";
  }
  console.log(holaMundo());


  // Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo void
  // declarando el retorno con void de manera explicita quiere decir que no retorna nada
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices)
    console.log(rta);
  }

  printTotal([1,2,3,4,5,2,1])
})();
