const precios = [];
const nombres = [];
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((data) => {
      precios.push(data.precio);
    });
    data.forEach((data) => {
      nombres.push(data.nombre);
    });
  });
/********************* LOGIN SIMPLE *********************/
// boton submit

let submit = document.getElementById("submit");

// guardar el nombre

submit.onclick = () => {
  localStorage.setItem("nombreUsuario", document.getElementById("username").value);
};

// nombre a mostrar al lado del bienvenido

let saludo = document.getElementById("titular");
saludo.innerText = "Bienvenido " + localStorage.getItem("nombreUsuario") + "!";

// declaro para que sea mas facil de usar
let usuario = localStorage.getItem("nombreUsuario");

// funcion para esconder el contenido de la pantalla y el que es para mostrar
let esconderTodo = () => {
  console.log("Ingrese un nombre");
  document.getElementById("titular").className = "hiddenDos";
  document.getElementById("main").className = "hiddenDos";
  document.getElementById("cambiarNombre").className = "hiddenDos";
};

let mostrarTodo = () => {
  document.getElementById("login").className = "hiddenDos";
};

// operador avanzado del login simple que tenia antes
// condicion ? caso 1 : caso 2
// si la condicion se cumple se hace el caso 1, sino el caso 2
usuario == false || usuario == null ? esconderTodo() : mostrarTodo();

let cambiarNombre = document.getElementById("cambiarNombre");

cambiarNombre.onclick = () => {
  localStorage.removeItem("nombreUsuario");
  window.location.reload();
};
/********************* FIN LOGIN SIMPLE *********************/

/********************* TOASTIFY *********************/
let notificacionVacio = () =>
  Toastify({
    text: "No tienes más en el carrito!",
    style: {
      background: "rgb(2,0,36)",
      background: "linear-gradient(90deg, rgba(2,0,36,1) 87%, rgba(119,61,61,1) 92%)",
    },
    duration: 2000,
  }).showToast();

let aniadidoAlCarrito = () =>
  Toastify({
    text: "Se añadió " + nombreJuego + " al carrito.",
    style: {
      background: "rgb(2,0,36)",
      background: "linear-gradient(90deg, rgba(2,0,36,1) 87%, rgba(119,61,61,1) 92%)",
    },
    duration: 2000,
  }).showToast();

var nombreJuego;
/********************* FIN TOASTIFY *********************/

/********************* COMIENZO DEL CARRITO *********************/

// Carrito
const arrayCarrito = [];

let calcularPrecios = () => {
  let precioCarrito = document.getElementById("precioCarrito");
  precioCarrito.innerText = `El valor de tu carrito es: ARS$${arrayCarrito.reduce((a, b) => a + b, 0)}`;
};

/********************* FIN DEL CARRITO *********************/

// funcion para cada juego

// DEMON'S SOULS

let restarDS = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[0].precio);
  sacar !== -1 ? arrayCarrito.splice(sacar, 1) : notificacionVacio();
  calcularPrecios();
};

let sumarDS = () => {
  nombreJuego = nombres[0];
  arrayCarrito.push(precios[0]);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
  aniadidoAlCarrito();
};

function mostrarValoresDS() {
  let primerBotao = document.getElementById("primerButton");
  primerBotao.className = "hidden";
  document.getElementById("primerTexto").classList.remove("hidden");
}

// DARK SOULS

let restarDS1 = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[1].precio);
  sacar !== -1 ? arrayCarrito.splice(sacar, 1) : notificacionVacio();
  calcularPrecios();
};

function mostrarValoresDS1() {
  let segundoBotao = document.getElementById("segundoButton");
  segundoBotao.className = "hidden";
  document.getElementById("segundoTexto").classList.remove("hidden");
}

let sumarDS1 = () => {
  nombreJuego = nombres[1];
  arrayCarrito.push(precios[1]);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
  aniadidoAlCarrito();
};

// DARK SOULS 2

let restarDS2 = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[2].precio);
  sacar !== -1 ? arrayCarrito.splice(sacar, 1) : notificacionVacio();
  calcularPrecios();
};

let sumarDS2 = () => {
  nombreJuego = nombres[2];
  arrayCarrito.push(precios[2]);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
  aniadidoAlCarrito();
};

function mostrarValoresDS2() {
  let tercerBotao = document.getElementById("tercerButton");
  tercerBotao.className = "hidden";
  document.getElementById("tercerTexto").classList.remove("hidden");
}

// DARK SOULS 3

let restarDS3 = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[3].precio);
  sacar !== -1 ? arrayCarrito.splice(sacar, 1) : notificacionVacio();
  calcularPrecios();
};

let sumarDS3 = () => {
  nombreJuego = nombres[3];
  arrayCarrito.push(precios[3]);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
  aniadidoAlCarrito();
};

function mostrarValoresDS3() {
  let cuartoBotao = document.getElementById("cuartoButton");
  cuartoBotao.className = "hidden";
  document.getElementById("cuartoTexto").classList.remove("hidden");
}

// BLOODBORNE

let restarBB = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[4].precio);
  // el viejo metodo
  /* sacar == -1 ? console.log("no maestro") : arrayCarrito.splice(sacar, 1); */
  sacar !== -1 ? arrayCarrito.splice(sacar, 1) : notificacionVacio();
  calcularPrecios();
};

let sumarBB = () => {
  nombreJuego = nombres[4];
  arrayCarrito.push(precios[4]);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
  aniadidoAlCarrito();
};

function mostrarValoresBB() {
  let quintoBotao = document.getElementById("quintoButton");
  quintoBotao.className = "hidden";
  document.getElementById("quintoTexto").classList.remove("hidden");
}

let revisar = () => {
  let h2Nuevo = document.createElement("h2");
  h2Nuevo.innerHTML = `El precio del juego más caro que se lleva es: ${Math.max(...arrayCarrito)}`;
  document.body.append(h2Nuevo);
  let botonNuevo = document.getElementById("botonQueVoyABorrar");
  botonNuevo.className = "hiddenDos";
};
