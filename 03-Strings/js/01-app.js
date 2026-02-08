
/* 
1. Tenga una variable comentario con este texto:
    
    text
    
    `Me encanta este monitor curvo de 32 pulgadas, excelente calidad-precio!`
    
2. Imprime:
    - La longitud total del comentario.
    - Si contiene la palabra "monitor" (insensible a mayúsculas).
    - Si termina con "precio!".
    - El comentario completo convertido a mayúsculas.

JavaScript

`// Tu código aquí...

const comentario = "Me encanta este monitor curvo de 32 pulgadas, excelente calidad-precio!";

 Respuestas esperadas:
 Longitud: 85
 Contiene "monitor": true
 Termina con "precio!": true
 En mayúsculas: ME ENCANTA ESTE MONITOR CURVO DE 32 PULGADAS, EXCELENTE CALIDAD-PRECIO!`
*/

const comentario = "Me encanta este monitor curvo de 32 pulgadas, excelente calidad-precio!";

console.log("Longitud:", comentario.length);
console.log('monitor', comentario.includes('monitor'));
console.log("Termina con 'precio!':", comentario.endsWith("precio!"));
console.log("En mayúsculas:", comentario.toUpperCase());


