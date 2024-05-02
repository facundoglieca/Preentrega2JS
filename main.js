//Simulador
//Constructor de objetos


class Vestimenta {
    constructor(nombre, talle, precio) {
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
    }
}

let Remera = 1;
let Musculosa = 2;
let Buzo = 3;
let Campera = 4;

const tienda = "Tienda Online Baduk Indumentaria";
const bienvenido = "¡Bienvenido a " + tienda + "!";

console.log(tienda);
alert(bienvenido);

// Registro de cliente
let NombreCte = prompt("Ingrese su Nombre").toUpperCase();
let ApellidoCte = prompt("Ingrese su Apellido").toUpperCase();
let CorreoCte = prompt("Ingrese su Dirección de Correo Electrónico").toUpperCase();
if (CorreoCte.includes("@")) {
    alert("Correo electrónico válido");
}

function solicitarNombre() {
    alert("Bienvenido " + NombreCte + " " + ApellidoCte + ". ¡Gracias por visitarnos!. " + "Recibirás la confirmación de compra al correo ingresado: " + CorreoCte);
}

//Array carrito
const carrito = [];

function elegirVestimenta() {
    let vestimenta;
    do {
        vestimenta = parseInt(prompt("Ingrese la vestimenta que deseas consultar.\n\nEjemplo: seleccione '1' para Remera.\n\n1- Remera\n2- Musculosa\n3- Buzo\n4- Campera"));
    } while (vestimenta !== 1 && vestimenta !== 2 && vestimenta !== 3 && vestimenta !== 4);
    switch (vestimenta) {
        case 1:
            return "Remera";
        case 2:
            return "Musculosa";
        case 3:
            return "Buzo";
        case 4:
            return "Campera";
        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            break;
    }
}

function elegirTalle() {
    let talle;
    do {
        talle = parseInt(prompt("Seleccione el talle.\n\nEjemplo: seleccione '1' S.\n\n1- S \n2- M \n3- L"));
    } while (talle !== 1 && talle !== 2 && talle !== 3);
    switch (talle) {
        case 1:
            return "S";
        case 2:
            return "M";
        case 3:
            return "L";
        default:
            console.log("Solo puedes elegir un número entre 1 y 3");
            alert("Solo puedes elegir un número entre 1 y 3");
            break;
    }
}

function validarPrecio(vestimenta, talle) {
    if (vestimenta === "Remera" && talle === "S") {
        return 3500;
    } else if (vestimenta === "Remera" && talle === "M") {
        return 3500;
    } else if (vestimenta === "Remera" && talle === "L") {
        return 3500;
    }

    if (vestimenta === "Musculosa" && talle === "S") {
        return 2950;
    } else if (vestimenta === "Musculosa" && talle === "M") {
        return 2950;
    } else if (vestimenta === "Musculosa" && talle === "L") {
        return 2950;
    }

    if (vestimenta === "Buzo" && talle === "S") {
        return 8990;
    } else if (vestimenta === "Buzo" && talle === "M") {
        return 8990;
    } else if (vestimenta === "Buzo" && talle === "L") {
        return 8990;
    }

    if (vestimenta === "Campera" && talle === "S") {
        return 9500;
    } else if (vestimenta === "Campera" && talle === "M") {
        return 9500;
    } else if (vestimenta === "Campera" && talle === "L") {
        return 9500;
    }
}

function precioTotal(nombre, talle, precio) {
    alert("El precio de " + nombre + " talle " + talle + " es de $" + precio);
    agregarProducto();
}

function agregarProducto() {
    let agregarProducto;
    do {
        agregarProducto = parseInt(prompt("Desea añadir más productos?\n\n1- Si.\n\n2- No "));
    } while (agregarProducto !== 1 && agregarProducto !== 2);

    switch (agregarProducto) {
        case 1:
            flow();
            break;
        case 2:
            detalleCompra();
            break;
        default:
            console.log("Solo puedes elegir un número entre 1 y 2");
            alert("Solo puedes elegir un número entre 1 y 2");
            break;
    }
}

function detalleCompra() {
    let detalle = "Detalle de compra \n\n";
    let body = "Vestimenta  Talle  Precio\n";
    let item = "";
    let total = 0;

    carrito.forEach((element) => {
        item += element.nombre + "     " + element.talle + "     " + element.precio + "\n";
        total += element.precio;
    });

    let precioTotal = "Total $" + total;
    let fin = "\n ========================";
    let boleta = detalle + body + item + precioTotal + fin;

    console.log(boleta);
    let pago = 0;

    do {
        pago = parseInt(prompt("El resumen de tu compra: " + boleta + "\n¿Con cuánto pagas?"));
        while (isNaN(pago)) {
            alert("Ingrese un valor numérico");
            detalleCompra();
            break;
        }

        while (pago < total) {
            alert("Monto insuficiente");
            detalleCompra();
            break;
        }
    } while (pago < total);

    alert("¡Gracias por tu compra!, " + NombreCte + ". En breve recibirás información de envío al correo registrado, tu pedido llegará pronto" + ". Tu vuelto es $" + (pago - total));
    saludoFinal();
}

function saludoFinal() {
    carrito.forEach((element) => console.log(element));
    console.log("Gracias por elegir a " + tienda + " . ¡Nos vemos!");
    alert("Gracias por elegir a " + tienda + " . ¡Nos vemos!");
}


// Inicio del simulador
function flow() {
    let vestimentaNombre = elegirVestimenta();
    let talleNombre = elegirTalle();
    let precioProducto = validarPrecio(vestimentaNombre, talleNombre);

    console.log(vestimentaNombre);
    console.log(talleNombre);
    console.log(precioProducto);

    let vestimenta = new Vestimenta(vestimentaNombre, talleNombre, precioProducto);
    console.log(vestimenta);
    carrito.push(vestimenta);
    precioTotal(vestimenta.nombre, vestimenta.talle, vestimenta.precio);
}

solicitarNombre();
flow();