// agregar demon's souls, bloodborne
// hacer que el texto del prompt cambie cuando ya hay algo en el carrito
// en algun momento pensar como hacer para que se pueda quitar algo del carrito (array map con los prompts)
// hacer un array de objetos con todos los juegos - nombre, precio y fecha de lanzamiento (consolas?)
// hacer que se pueda ver que juego y cuanta cantidad estoy llevando en el carrito
const arrayCarrito = [];
let terminado = false;
let nombreBien = false;
let terminadoBien = false;
let precioDS1 = 1199;
let precioDS2 = 1999;
let precioDS3 = 2999;

function saludarCliente() {
  do {
    nombre = prompt("Ingrese su nombre");
    if (nombre) {
      alert("Bienvenido a la tienda de Dark Souls " + nombre + "!");
      terminado = true;
      nombreBien = true;
    } else if (nombre == "") {
      alert("Debe ingresar su nombre");
    } else if (nombre == null) {
      alert("Saliste de la sesion");
      terminado = true;
    } else {
      alert("Usuario invalido");
    }
  } while (!terminado);
}

function selccionDeJuegos() {
  do {
    juegosDisponibles = prompt(
      "Que juego Soul le gustaría? \n 1: Dark Souls  \n 2: Dark Souls 2 \n 3: Dark Souls 3 \n 4: Terminar compra"
    );
    if (juegosDisponibles == "1") {
      alert("Buena elección! El primer Dark Soul es llamado el mejor.");
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(precioDS1);
    } else if (juegosDisponibles == "2") {
      alert("Querés sufrir, no? Suerte en Majula!");
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(precioDS2);
    } else if (juegosDisponibles == "3") {
      alert("Excelente opción, es mi favorito personalmente.");
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(precioDS3);
    } else if (juegosDisponibles == null) {
      alert("Saliste de la compra.");
      terminado = true;
    } else if (juegosDisponibles == 4) {
      terminado = true;
      terminadoBien = true;
    } else {
      alert("Debe ingresar un numero");
      terminado = false;
    }
  } while (!terminado);
}

function finDeCompra() {
  do {
    if (juegosDisponibles == "4") {
      alert(
        "El precio de los juegos en tu carrito es de ARS$" +
          arrayCarrito.reduce((a, b) => a + b, 0) +
          " en efectivo, o ARS$" +
          arrayCarrito.reduce((a, b) => a + b, 0) * 1.21 +
          " con tarjeta."
      );
      decision = prompt("Quieres finalizar la compra? \n 1: Si \n 2: No");
    }
    if (decision == "1") {
      alert("Gracias por su compra!");
      terminado = true;
    } else if (decision == "2") {
      alert("Que tenga un buen dia!");
      terminado = true;
    } else if (decision == "") {
      alert("Debe ingresar un numero");
      terminado = false;
    } else if (decision == null) {
      alert("Se cancelo la compra");
      terminado = true;
    } else {
      alert("Se cancelo la compra");
      terminado = true;
    }
  } while (!terminado);
}
saludarCliente();
if (nombreBien == true) {
  selccionDeJuegos();
}
if (terminadoBien == true) {
  finDeCompra();
}
