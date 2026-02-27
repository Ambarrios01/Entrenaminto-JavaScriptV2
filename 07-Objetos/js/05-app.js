const producto = {
  nombre: "Monitor 20 pulgada",
  precio: 300,
  disponible: true,
  informacion: {
    medidas :{
        peso: 10,
        medida: '1m'
    }, 
    fabricacion:{
        pais: 'china'
    }
  }
};

console.log(producto.informacion.fabricacion.pais)
const {pais} = producto;
console.log()