// Union de dos objetos con el Spread Operator

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso: '1kg',
    medida: "1m",
}

const nuevoProducto = { ...producto, ...medidas }; // Este es el spread Operator

console.log(producto);
console.log(nuevoProducto)