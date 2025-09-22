console.log("----Factura 01----");

let producto1 = "arroz = 100";
let producto2 = "frijol = 200";
let producto3 = "lenteja = 300";
let subtotal = 100 + 200 + 300;
let iva = subtotal * 0.19;
let total = subtotal + iva;

console.log(`Producto 1: ${producto1}`);
console.log(`Producto 2: ${producto2}`);
console.log(`Producto 3: ${producto3}`);
console.log(`El subtotal es: ${subtotal}`);
console.log(`El IVA es: ${iva}`);
console.log(`El total es: ${total}`);