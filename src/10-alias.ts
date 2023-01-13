(() => {
  // Para evitar la redundancia de codigo en el tipado de datos se usa: type : es de uso exclisivo en TS
  // se crea nuestro propio tipo de dato
  // Se recomienda que inicie en mayuscula ademas se usa "=" para asignar los tipos de datos a usar
  // es una buna forma para declarar las varialbes al principio y no tener que cambiarlo mas adelante
  type UserID = string | number;
  let userId: UserID;

  function greeting(userId: UserID) {
    // Aqui el tipado se vuelve dinamico de acuerdo a la centencia dentro del if
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  // Literal types => crear nuestros propios tipos de datos
  // Se utiliza para agregar de forma literal el tipo de dato de una variable
  // Se diifiere de mayusculas y minusculas
  type Size = 'S' | 'M' | 'L' | 'XL' | "XXL" | "I'am";

  let shirtSize: Size;
  shirtSize = 'L';
  shirtSize = 'sas';
  console.log(shirtSize);

})();
