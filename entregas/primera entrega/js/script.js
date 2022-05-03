// Hora para que sea mas lindo el saludo
let fecha = new Date()
let hora = fecha.getHours()

if (hora >= 0 && hora < 12) {
    buenasHoras = "Buenos días"
} else if (hora >= 12 && hora < 19) {
    buenasHoras = "Buenas tardes"
} else if (hora >= 19 && hora < 24) {
    buenasHoras = "Buenas noches"
}

// Ingreso de nombre

let nombreIngresado = prompt("Ingrese su nombre")
alert(buenasHoras + " " + nombreIngresado + "!")

// Ingreso de numero
let numeroIngresado = parseInt(prompt("Ingrese un numero"))
for (let i = 1; i <= numeroIngresado; i++) {
    console.log("Hola") * i; // print de hola x cantidad de veces
}
alert("Se ha printeado " + numeroIngresado + " holas en la consola")


// Ingresar ESC para continuar
do {
    contrasenia = prompt("Escribir ESC para continuar");
} while (contrasenia !== "ESC");

if (contrasenia === "ESC") {
    alert("Podes pasar")
} else {
    alert("No podes pasar")
}