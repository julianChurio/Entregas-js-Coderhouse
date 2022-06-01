// Login simple

if (
  localStorage.getItem("nombreUsuario") == "" ||
  localStorage.getItem("nombreUsuario") == null
) {
  console.log("Ingrese un nombre");
  document.getElementById("titular").className = "hiddenDos";
  document.getElementById("main").className = "hiddenDos";
  document.getElementById("cambiarNombre").className = "hiddenDos";
} else {
  document.getElementById("login").className = "hiddenDos";
}

let cambiarNombre = document.getElementById("cambiarNombre");

cambiarNombre.onclick = () => {
  localStorage.removeItem("nombreUsuario");
  window.location.reload();
};

// Array de los juegos disponibles

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

// Carrito

const arrayCarrito = [];

let calcularPrecios = () => {
  let precioCarrito = document.getElementById("precioCarrito");
  precioCarrito.innerText = `El valor de tu carrito es: ARS$${arrayCarrito.reduce(
    (a, b) => a + b,
    0
  )}`;
};

// DEMON'S SOULS

let restarDS = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[0].precio);
  if (sacar == -1) {
    console.log("no maestro");
  } else {
    arrayCarrito.splice(sacar, 1);
  }
  carritoGuardado();
  calcularPrecios();
};

let sumarDS = () => {
  arrayCarrito.push(juegosSouls[0].precio);
  arrayCarrito.sort((a, b) => a - b);
  carritoGuardado();
  calcularPrecios();
};

function mostrarValoresDS() {
  let primerBotao = document.getElementById("primerButton");
  primerBotao.className = "hidden";
  document.getElementById("primerTexto").classList.remove("hidden");
}

// DARK SOULS

let restarDS1 = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[1].precio);
  if (sacar == -1) {
    console.log("no maestro");
  } else {
    arrayCarrito.splice(sacar, 1);
  }
  carritoGuardado();
  calcularPrecios();
};

function mostrarValoresDS1() {
  let segundoBotao = document.getElementById("segundoButton");
  segundoBotao.className = "hidden";
  document.getElementById("segundoTexto").classList.remove("hidden");
}

let sumarDS1 = () => {
  arrayCarrito.push(juegosSouls[1].precio);
  arrayCarrito.sort((a, b) => a - b);
  carritoGuardado();
  calcularPrecios();
};

// DARK SOULS 2

let restarDS2 = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[2].precio);
  if (sacar == -1) {
    console.log("no maestro");
  } else {
    arrayCarrito.splice(sacar, 1);
  }
  calcularPrecios();
};

let sumarDS2 = () => {
  arrayCarrito.push(juegosSouls[2].precio);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
};

function mostrarValoresDS2() {
  let tercerBotao = document.getElementById("tercerButton");
  tercerBotao.className = "hidden";
  document.getElementById("tercerTexto").classList.remove("hidden");
}

// DARK SOULS 3

let restarDS3 = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[3].precio);
  if (sacar == -1) {
    console.log("no maestro");
  } else {
    arrayCarrito.splice(sacar, 1);
  }
  calcularPrecios();
};

let sumarDS3 = () => {
  arrayCarrito.push(juegosSouls[3].precio);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
};

function mostrarValoresDS3() {
  let cuartoBotao = document.getElementById("cuartoButton");
  cuartoBotao.className = "hidden";
  document.getElementById("cuartoTexto").classList.remove("hidden");
}

// BLOODBORNE

let restarBB = () => {
  let sacar = arrayCarrito.indexOf(juegosSouls[4].precio);
  if (sacar == -1) {
    console.log("no maestro");
  } else {
    arrayCarrito.splice(sacar, 1);
  }
  calcularPrecios();
};

let sumarBB = () => {
  arrayCarrito.push(juegosSouls[4].precio);
  arrayCarrito.sort((a, b) => a - b);
  calcularPrecios();
};

function mostrarValoresBB() {
  let quintoBotao = document.getElementById("quintoButton");
  quintoBotao.className = "hidden";
  document.getElementById("quintoTexto").classList.remove("hidden");
}

let submit = document.getElementById("submit");

submit.onclick = () => {
  localStorage.setItem(
    "nombreUsuario",
    document.getElementById("username").value
  );
};

let saludo = document.getElementById("titular");

saludo.innerText = "Bienvenido " + localStorage.getItem("nombreUsuario") + "!";

calcularPrecios();
