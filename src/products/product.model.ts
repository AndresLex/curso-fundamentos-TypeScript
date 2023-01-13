// el .model es una forma de saber que este archivo contendra el modelado de los datos
// Aca se tiene lo que es el tipado de los datos
// Para empezar a utilizar modulos se utiliza la keyword: export
// quiere decir que el tipo de dato se puede exportar e importar desde otro archivo para poderlo usar
// lo que logra un scope implicito

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
  title: string,
  createAt: Date,
  stock: number,
  size?: Sizes
}
