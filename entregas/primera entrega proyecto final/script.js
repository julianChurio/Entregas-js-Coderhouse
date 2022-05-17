// en algun momento pensar como hacer para que se pueda quitar algo del carrito (array map (con los prompts?))
// hacer que se pueda ver que juego y cuanta cantidad estoy llevando en el carrito
const juegosSouls = [
  {
    nombre: "Demon's Souls",
    lanzamiento: "6 de Octubre de 2009",
    precio: 11999,
  },
  {
    nombre: "Dark Souls",
    lanzamiento: "4 de Octubre de 2011",
    precio: 1199,
  },
  {
    nombre: "Dark Souls 2",
    lanzamiento: "11 de Marzo de 2014",
    precio: 1999,
  },
  {
    nombre: "Dark Souls 3",
    lanzamiento: "12 de Abril de 2016",
    precio: 2999,
  },
  {
    nombre: "Bloodborne",
    lanzamiento: "24 de Marzo de 2015",
    precio: 3299,
  },
];
const arrayCarrito = [];
let terminado = false;
let nombreBien = false;
let terminadoBien = false;

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

function seleccionDeJuegos() {
  do {
    juegosDisponibles = prompt(
      "Que juego Soul le gustaría? \n 1: Demon's Souls  \n 2: Dark Souls \n 3: Dark Souls 2 \n 4: Dark Souls 3 \n 5: Bloodborne \n 6: Terminar compra"
    );
    if (juegosDisponibles == "1") {
      alert(
        "Demon's Souls? No el más moderno en cuanto a combate, pero excelente."
      );
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(juegosSouls[0].precio);
    } else if (juegosDisponibles == "2") {
      alert("Buena elección! El primer Dark Soul es llamado el mejor.");
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(juegosSouls[1].precio);
    } else if (juegosDisponibles == "3") {
      alert("Querés sufrir, no? Suerte en Majula!");
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(juegosSouls[2].precio);
    } else if (juegosDisponibles == "4") {
      alert("Excelente opción, es mi favorito personalmente.");
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(juegosSouls[3].precio);
    } else if (juegosDisponibles == "5") {
      alert(
        "Bloodborne? Todos concuerdan que es obra maestra, suerte en Yharnam"
      );
      terminado = false;
      terminadoBien = false;
      arrayCarrito.push(juegosSouls[4].precio);
    } else if (juegosDisponibles == "6") {
      terminado = true;
      terminadoBien = true;
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
    if (juegosDisponibles == "6") {
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
  seleccionDeJuegos();
}
if (terminadoBien == true) {
  finDeCompra();
}
