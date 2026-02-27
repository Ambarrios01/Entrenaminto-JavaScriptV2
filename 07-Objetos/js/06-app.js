const producto = {
  nombre: "Monitor 20 pulgada",
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: 10,
      medida: "1m",
    },
    fabricacion: {
      pais: "china",
    },
  },
};

const {
  nombre,
  informacion,
  informacion: {
    fabricacion,
    fabricacion: { pais },
  },
} = producto;


console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
