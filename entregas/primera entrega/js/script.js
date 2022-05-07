// Hora para que sea mas lindo el saludo
let fecha = new Date()
let hora = fecha.getHours()

if (hora >= 0 && hora < 12) {
    buenasHoras = "Buenos días "
} else if (hora >= 12 && hora < 19) {
    buenasHoras = "Buenas tardes "
} else if (hora >= 19 && hora < 24) {
    buenasHoras = "Buenas noches "
}

// Ingreso de nombre
let usuario;
let contrasenia;
let terminado = false;

do {
    usuario = prompt("Ingresa tu usuario");

    if (usuario) {
        do {
            alert(buenasHoras + usuario + "!");
            contrasenia = prompt("Ingresa tu contreseña");
            if (contrasenia) {
                terminado = true;
                alert("Contraseña registrada!")
            }
            else {
                if (contrasenia == "") {
                    alert("Debes ingresar tu contraseña");
                }
                else {
                    if (contrasenia == null) {
                        alert("Saliste de la sesion");
                        terminado = true;
                    }
                    else {
                        alert("Contraseña invalida");
                    }
                }
            }
        }
        while (!terminado)

    }
    else{
        if (usuario == "") {
            alert("Debes ingresar tu usuario");
        }
        else {
            if (usuario == null) {
                alert("Saliste de la sesion");
                terminado = true;
            }
            else {
                alert("Usuario invalido");
            }
        }
    }
}
while (!terminado);


// Ingreso de numero
let numeroIngresado = parseInt(prompt("Ingrese un numero"))
for (let i = 1; i <= numeroIngresado; i++) {
    console.log("Hola") * i; // print de hola x cantidad de veces
}
if (numeroIngresado == parseInt) {
    alert("Se ha printeado " + numeroIngresado + " holas en la consola")
} else {
    alert("no pusiste numero")
}

/* 
// Ingresar ESC para continuar
do {
    contrasenia = prompt("Escribir ESC para continuar");
} while (contrasenia !== "ESC");
if (contrasenia === "ESC") {
    alert("Podes pasar")
} else {
    alert("No podes pasar")
} */