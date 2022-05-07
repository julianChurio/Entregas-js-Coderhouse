let terminado = false;
let precioDS1 = 1199;
let precioDS2 = 1999;
let precioDS3 = 2999;

function saludarCliente() {
    do {
        nombre = prompt("Ingrese su nombre")
        if (nombre) {
            alert("Bienvenido a la tienda de Dark Souls " + nombre + "!")
            terminado = true;
        } else if (nombre == "") {
            alert("Debe ingresar su nombre")
        } else if (nombre == null) {
            alert("Saliste de la sesion")
            terminado = true;
        } else {
            alert("Usuario invalido")
        }
    } while (!terminado)
}

function selccionDeJuegos() {
    do {
        juegosDisponibles = prompt("Que juego Soul le gustaría? \n 1: Dark Souls  \n 2: Dark Souls 2 \n 3: Dark Souls 3")
        if (juegosDisponibles == "1") {
            alert("Buena elección! El primer Dark Soul es llamado el mejor.")
            terminado = true;
        } else if (juegosDisponibles == "2") {
            alert("Querés sufrir, no? Suerte en Majula!")
            terminado = true;
        } else if (juegosDisponibles == "3") {
            alert("Excelente opción, es mi favorito personalmente.")
            terminado = true;
        } else if (juegosDisponibles == null) {
            alert("Saliste de la compra.")
            terminado = true;
        } else {
            alert("Debe ingresar un numero")
            terminado = false;
        }
    }
    while (!terminado)
}

function finDeCompra() {
    do {
        if (juegosDisponibles == "1") {
            alert("El precio de Dark Souls 1 es de ARS$" + precioDS1 + " en efectivo, o ARS$" + precioDS1 * 1.21 + " con tarjeta.");
            decision = prompt("Quieres finalizar la compra? \n 1: Si \n 2: No")
        } else if (juegosDisponibles == "2") {
            alert("El precio de Dark Souls 2 es de ARS$" + precioDS2 + " en efectivo, o ARS$" + precioDS2 * 1.21 + " con tarjeta.");
            decision = prompt("Quieres finalizar la compra? \n 1: Si \n 2: No")
        } else if (juegosDisponibles == "3") {
            alert("El precio de Dark Souls 3 es de ARS$" + precioDS3 + " en efectivo, o ARS$" + precioDS3 * 1.21 + " con tarjeta.");
            decision = prompt("Quieres finalizar la compra? \n 1: Si \n 2: No")
        }
        if (decision == "1") {
            alert("Gracias por su compra!")
            terminado = true;
        } else if (decision == "2") {
            alert("Que tenga un buen dia!")
            terminado = true;
        } else if (decision == "") {
            alert("Debe ingresar un numero")
            terminado = false;
        } else if (decision == null) {
            alert("Se cancelo la compra")
            terminado = true;
        } else {
            alert("Se cancelo la compra")
            terminado = true;
        }
    }
    while (!terminado)
}
saludarCliente();
selccionDeJuegos();
finDeCompra();