
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros || [];
    this.mascotas = mascotas || [];
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({
      nombre,
      autor
    });
  }

  getBookNames() {
    return this.libros.map(({
      nombre
    }) => nombre);
  }
}

const usuario1 = new Usuario("Laureano", "Lopez")
console.log(`Mi nombre es ${usuario1.getFullName()}`);
usuario1.addMascota("Perro");
console.log(`Tengo ${usuario1.countMascotas()} mascota`);
usuario1.addBook("Learning React", "Kirupa Chinnapthambi");
usuario1.addBook("El fin", "Jorge Luis Borges");
console.log(`Mi libros es ${usuario1.getBookNames()}`);

const usuario2 = new Usuario("Luciano", "Gonzalez")
console.log(`Hola mi nombre es ${usuario2.getFullName()}`);
usuario2.addMascota('Hamster')
usuario2.addMascota('Gato')
console.log(`Tengo ${usuario2.countMascotas()} mascotas`);
usuario2.addBook("Ficciones", "Jorge Luis Borges");
usuario2.addBook("La biblioteca de Babel", "Jorge Luis Borges");
console.log("Mis libros son: " + usuario2.getBookNames());