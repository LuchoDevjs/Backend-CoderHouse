const express = require("express");
const Contenedor = require("./contenedor");
const productos = new Contenedor("./productos.txt");
const app = express();
const port = 7070;
const server = app.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.send('<h1 style="color: magenta">Bienvenidos al servidor express</h1>');
});

app.get("/productos", (req, res) => {
  const ejecutar = async() => {
    const arrayProds = await productos.getAll();
    let template = ``;
    arrayProds.map((item) => {
      template += `<h1 style="color: magenta">${item.title} </h1>\n
      <h2 >Precio $<span style="color: red">${item.price}</span></h2>\n
      <img width="50px" height="auto"src="${item.thumbnail}">`;
    });
    res.send(template);
  };
  ejecutar();
});

app.get("/productosrandom", (req, res) => {
  const random = async() => {
    const arrayProds = await productos.getAll();
    console.log(arrayProds);
    let numero = Math.floor(Math.random() * (arrayProds.length));
    console.log(numero)
    let template = `<h1 style="color: magenta">${arrayProds[numero].title} </h1>\n
                  <h2 >Precio $<span style="color: red">${arrayProds[numero].price}</span></h2>\n
                  <img width="50px" height="auto"src="${arrayProds[numero].thumbnail}">`;
    res.send(template);
  };
  random();
});
