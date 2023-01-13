(() => {
  // Los union types "|" permiten dar flexibilidad al tipado de variables declarando los tipos de dato que esta va recibir explicitamente
  let userId: string | number;
  userId = 1212; // Se observa que la variable recibe los dos tipos de datos sin generar error
  userId = 'ID';

  function greeting(myText: string | number) {
    // Aqui el tipado se vuelve dinamico de acuerdo a la centencia dentro del if
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(2)}`);

    }
  }

  greeting('Es un string');
  greeting(12.12121)

})();
