(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  // let myNull = null; // si se hace de forma literal TS declara la variable como : any
  // let myUndefined = undefined; // de igual manera pasa con undefined asigna any si se hace literalmente
  let  myNull: null = null;
  let myUndefined: undefined = undefined;


  // existen componentes dinmicos, hasta que no carge un template no carga el valor asi ge va ser null Ej:Angular
  let myNumber: number | null = null; //
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'asa';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Andres');
  hi(null);

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    // el "?" se asemeja con un "if" ya que valida si algo no existe = "null"
    // "?" : se denomina Optional chaining o encadenamiento opcional es de JS ES6
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Marina');
  hiV2(null);
})();
