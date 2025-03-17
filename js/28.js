// Clases
class Producto {
    constructor(nombre, precio, marca, estado){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.estado = estado;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio estimado de: $ ${this.precio}`
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, 'LG');
const producto3 = new Producto('Laptop de 26"', 1800, 'Asus');
const producto4 = new Producto('Televisor 25"', 1200, 'Samsung', 'Seminuevo');

// Herencia
// Con herencia puedes conseguir el cosntrutor y fromateo del otro variable
class Libro extends Producto {
    constructor (nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    } // Aqui ahorramos lines de codigo para coipar la linea de super
}

const libro = new Libro( 'JavaScript la revolucion', 120, '010102300909');

console.log(libro.formatearProducto() );

console.log(producto2.formatearProducto());
console.log(producto2);
console.log(producto4);
