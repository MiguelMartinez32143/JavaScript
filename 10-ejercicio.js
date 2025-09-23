// =======================================
// 1. Declaración de función (Function Declaration)
// =======================================
// Se pueden llamar antes o después de ser declaradas (hoisting).
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Juan")); // Hola, Juan!


// =======================================
// 2. Expresión de función (Function Expression)
// =======================================
// Se guardan en una variable. No tienen hoisting.
const despedir = function(nombre) {
  return `Adiós, ${nombre}!`;
};
console.log(despedir("María")); // Adiós, María!


// =======================================
// 3. Funciones flecha (Arrow Functions)
// =======================================
// Sintaxis más corta, NO tienen su propio "this".
const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8


// =======================================
// 4. Parámetros por defecto
// =======================================
function multiplicar(a, b = 2) {
  return a * b;
}
console.log(multiplicar(5)); // 10


// =======================================
// 5. Parámetros rest (...)
// =======================================
// Permiten agrupar valores en un arreglo.
function mostrarNumeros(...numeros) {
  return numeros.join(", ");
}
console.log(mostrarNumeros(1, 2, 3, 4, 5)); // 1, 2, 3, 4, 5


// =======================================
// 6. Funciones como callbacks
// =======================================
// Pasar una función como argumento de otra.
function operar(a, b, operacion) {
  return operacion(a, b);
}

console.log(operar(4, 2, sumar)); // Usa la función "sumar" → 6
console.log(operar(4, 2, (x, y) => x - y)); // Función anónima → 2


// =======================================
// 7. Funciones anidadas
// =======================================
function externa() {
  function interna() {
    return "Soy la función interna";
  }
  return interna();
}
console.log(externa()); // Soy la función interna


// =======================================
// 8. Funciones autoejecutadas (IIFE)
// =======================================
// Se ejecutan inmediatamente después de definirse.
(function() {
  console.log("Soy una función autoejecutada");
})();


// =======================================
// 9. Funciones asíncronas (async/await)
// =======================================
async function obtenerDatos() {
  return "Datos obtenidos!";
}

obtenerDatos().then(resultado => console.log(resultado));


// =======================================
// 10. Funciones constructoras (para crear objetos)
// =======================================
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const persona1 = new Persona("Carlos", 25);
console.log(persona1.nombre); // Carlos
console.log(persona1.edad);   // 25
