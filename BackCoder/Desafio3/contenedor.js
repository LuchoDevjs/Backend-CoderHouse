/*se exporto el modulo para ejecutarlo los metodos desde el archivo test.js */
const fs = require("fs");
class Contenedor {
  constructor(file) {
    this.file = file;
  }
  /* Metodo para  Escribir en el archivo*/
  async writeFile(file, content) {
    try {
      await fs.writeFileSync(file, JSON.stringify(content, null, 2), "utf-8");
    } catch (error) {
      console.log(error.message);
    }
  }
  /* Metodo para  Leer el archivo*/
  async readFile(file) {
    try {
      const data = await fs.readFileSync(file, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  /* Metodo para  saber si existe el archivo*/
  knowIfItExist(file) {
    try {
      if (!fs.existsSync(file)) {
        throw new Error("El archivo no se encontro");
      } else {
        return true;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  /* Metodo save para guardar un nuevo producto en el archivo*/
  async save(product) {
    try {
      /*Primero verifica si existe el archivo, si no exite crea uno nuevo */
      if (!this.knowIfItExist(this.file)) {
        console.log(
          `No se encontro el archivo ${this.file}\n se procede a crear uno nuevo`
        );
        /*Se crea un objeto vacio */
        let arrayProducts = [];
        /*al ser el primer propducto se le da la id 1 */
        product["id"] = 1;
        arrayProducts.push(product);
        console.log("se esta agregando el producto");
        /* se escribe el archivo*/
        await this.writeFile(this.file, arrayProducts);
        console.log(`Se agrego un nuevo producto con la id ${product["id"]}`);
        return product["id"];
      } else {
        /*Si el archivo existe  primero se verifica si esta vacio*/
        if (this.readFile(this.file)) {
          const data = await this.readFile(this.file);
          if (data.length === 0) {
            /*si esta vacio  se le asigna la id 1 al primer producto*/
            product["id"] = 1;
          } else {
            /*Si tiene producto se le asigna la id siguente */
            let ultimoId = data[data.length - 1].id;
            product["id"] = ultimoId + 1;
          }
          data.push(product);
          console.log("se esta agregando el producto");
          /*se escribe el producto */
          this.writeFile(this.file, data);
          console.log(`Se agrego un nuevo producto con la id ${product["id"]}`);
          return product["id"];
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  /*Metodo getById para obtener un producto por la id*/
  async getById(id) {
    try {
      /*Primero verifica si existe el archivo, */
      if (this.knowIfItExist(this.file)) {
        const data = await this.readFile(this.file);
        /* se filtra el archivo para buscar el producto con la id ingresada */
        const dataId = data.filter((item) => item.id === id);
        if (dataId.length === 0) {
          /* si no existe se lanza un error */
          throw new Error("No se encontro el ID");
        } else {
          console.log(`El producto con la id ${id} :\n`, dataId);

          return dataId;
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  /*Metodo getAll para obtener todos los productos*/
  async getAll() {
    try {
      /*Primero verifica si existe el archivo, */
      if (this.knowIfItExist(this.file)) {
        console.log("se esta leyendo el archivo");
        const data = await this.readFile(this.file);
        /* se verifica si el archivo esta vacio */
        if (data.length !== 0) {
          console.log(`Contenido del archivo ${this.file} :\n`, data);
        } else {
          /*si esta vacio se lanza un error */
          throw new Error(`el archivo ${this.file} esta vacio`);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  /*Metodo deleteById para eliminar un producto por la id*/
  async deleteById(id) {
    try {
      /*Primero verifica si existe el archivo, */
      if (this.knowIfItExist(this.file)) {
        console.log(`se esta buscando el producto con la id ${id}`);
        const data = await this.readFile(this.file);
        /* se verifica que la id exista */
        if (data.some((item) => item.id === id)) {
          const data = await this.readFile(this.file);
          /*se elima el producto */
          const datos = data.filter((item) => item.id !== id);
          this.writeFile(this.file, datos);
          console.log(`se borro el producto con la id ${id}`);
        } else {
          /*Si la id no existe se lanza un error */
          throw new Error(`no se encontro el producto con la id ${id}`);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  /*Metodo deleteAll para eliminar todos los  productos */
  async deleteAll() {
    try {
      /*Primero verifica si existe el archivo, */
      if (this.knowIfItExist(this.file)) {
        console.log("se esta procediendo a borrar los datos");
        /*Para eliminar se escribe un objeto vacio */
        let nuevo = [];
        await this.writeFile(this.file, nuevo);
        console.log(`se borraron todos los datos de el archivo ${this.file}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}


module.exports = Contenedor;