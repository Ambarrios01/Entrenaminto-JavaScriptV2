const producto = {
  nombre: "Monitor 20 pulgada",
  precio: 300,
  disponible: true,
};

producto.imagen = "dos imagenes";

delete producto.disponible;

console.log(producto);