/* Para crear el archivo hay que ingresar un nuevo producto , en la funcion ejecutar estan todos los metodos para ejecutar, descomentar el metodo a probar y agregarle los parametros nesesarios para funcionar y ejecutar node test.js*/
const Contenedor = require("./desafio2.js");
const productos = new Contenedor("productos.txt");
const product1 = {
  title: "Iphone 11",
  price: 600,
  thumbnail:
    "http://www.vicionet.com/Vel/426-large_default/apple-iphone-11-64gb-.jpg",
};
const product2 = {
  title: "Iphone 12",
  price: 750,
  thumbnail:
    "https://itechstore.com.ar/wp-content/uploads/2020/12/iphone-12-blue-select-2020.png",
};
const product3 = {
  title: "Iphone 13",
  price: 900,
  thumbnail:
    "https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png",
};

const ejecutar = async () => {
  /* poner el producto a agregar* en el metodo save */
  await productos.save(product1);
  /* await productos.getAll(); */
  /*poner la id a buscar , solo numeros  en el metodo getById */
  /* await productos.getById(); */
  /*poner la id a eliminar , solo numeros en el metodo deleteById */
  /* await productos.deleteById(); */
  /* await productos.deleteAll(); */
};
ejecutar();
