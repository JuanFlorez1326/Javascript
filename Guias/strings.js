// Todos aquellos datos que se consideren solamente para lectura serán tomados como Texto, es decir de tipo String.

const product1 = "Tv LG de 20 Pulgadas";


const product2 = '   Monitor de TV.    ';
const product3 = String('TV');
const product4 = new String('TV');

const product5 = `Este es mi ${product1}`;

let msj = `el producto ${product1}, tiene un costo de ${5000*2} `;

//Hablemos de algunos métodos.
// 1. length nos permite conocer la dimensión o cantidad de letras de la cadena de Texto.


// Mostrar la posición en un elemento en la cadena
// console.log(product5.indexOf('SAMSUNG'));

// Comprobar si un elemento existe en una cadena de texto
// console.log(product5.includes('LG'));
// console.log(product5.includes('Samsung'));

// Eliminar espacios en blanco en inicio de una cadena
// console.log(product2);
// console.log(product2.trimStart());
// console.log(product2.trimEnd());
// console.log(product2.trimStart().trimEnd());
// console.log(product2.trim());

// Reemplazar elemento en una cadena de texto
// console.log(product1);
// console.log(product1.replace('Pulgadas','"'));

// Cortar una cadena.
// let valueMsj = 'Hola Mundo';
// console.log(valueMsj.slice(2,0));
// console.log(valueMsj.substring(2,0));

// De izquierda a derecha
// console.log(product1.slice(11,9));
// console.log(product1.substring(11,9));

// Obtener una posición exacta de la cadena de texto
// console.log(product1.charAt(0));

// Duplicar cadena de Texto
// console.log(product1.repeat(3));

// dividir cadena de texto
// let msj_1 = 'blue red yellow green';
// console.table(msj_1.split(' '));

// Convertir de mayúsculas a minúsculas y viceversa
// console.log(product1.toUpperCase());
// console.log(product1.toLowerCase());

// convertir un número a String
// console.log(price);
// console.log(typeof price);
// console.log(typeof price.toString());
// console.log(price.toString());





