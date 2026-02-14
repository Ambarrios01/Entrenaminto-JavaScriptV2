let result;

// Math es un objeto global que tiene propiedades y métodos para constantes y funciones matemáticas. No es necesario instanciarlo, se puede usar directamente.
result = Math.PI;
console.log(result);

// Redondear un número al entero más cercano
result = Math.round(2.8);
console.log(result);
result = Math.round(2.7);
console.log(result);
result = Math.round(2.6);
console.log(result);
result = Math.round(2.5);
console.log(result);
result = Math.round(2.4);
console.log(result);

// Redondear un número hacia arriba al entero más cercano
result = Math.ceil(2.1);
console.log(result);
result = Math.ceil(2.9);
console.log(result);


// Redondear un número hacia abajo al entero más cercano
result = Math.floor(2.1);
console.log(result);
result = Math.floor(2.9);
console.log(result);

// Raíz cuadrada de un número
result = Math.sqrt(144);
console.log(result);


// Valor absoluto de un número
result = Math.abs(-500);
console.log(result);

// Potencia de un número
result = Math.pow(8, 2);
console.log(result);

// Número mínimo de una lista de números
result = Math.min(5, 3, 8, 1, 4);
console.log(result);

// Número máximo de una lista de números
result = Math.max(5, 3, 8, 1, 4);
console.log(result);

// Número aleatorio entre 0 y 1
result = Math.random();
console.log(result);

// Número aleatorio entre 0 y 100
result = Math.random() * 100;
console.log(result);


