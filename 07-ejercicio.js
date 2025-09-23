let Coccion = 30;
let mensaje = Coccion > 30 ? "la carne estara 3/4" : Coccion === 30 ? "la carne estara seca" : "La coccion es baja";
console.log(mensaje);

if (coccion >= 30)      {
        console.log("la carne estara 3/4")
}       else if (Coccion === 30)   {
                console.log("la carne estara seca")
}       else    {
                console.log("La coccion es baja")
}
                

let icfes = 290;
let resultado = icfes > 290 ? "resultado mayor al promedio" : icfes === 290 ? "resultado promedio" : "resultado menor  al promedio";
console.log(resultado);

if (icfes > 290)      {
        console.log("resultado mayor al promedio")
}       else if (icfes === 290)   {
                console.log("resultado promedio")
}       else    {
                console.log("resultado menor  al promedio")
}

let nota = 3.2;

let estado =   3 ? "Aprobado" : "Reprobado";
console.log("Estado (ternario):", estado);

if (nota >= 3) {
        console.log("Aprobado");
}       else {
        console.log("Reprobado");
}

let totalCompra = 120000;

let descuento = totalCompra >= 100000 ? "Aplica descuento del 10%" : "No aplica descuento";
console.log("Descuento (ternario):", descuento);

if (totalCompra >= 100000) {
        console.log("Aplica descuento del 10%");
}       else {
        console.log("No aplica descuento");
}

let clima = "lluvia";

let r = clima === "lluvia" ? "Lleva paraguas" : clima === "soleado" ? "Usa protector solar" : "Clima agradable";

console.log("Mensaje (ternario):", r);

if (clima === "lluvia") {
    console.log("Lleva paraguas");
} else if (clima === "soleado") {
    console.log("Usa protector solar");
} else {
    console.log("Clima agradable");
}
