function suma() {
    let numero1 = document.getElementById("campo1").value;
    let numero2 = document.getElementById("campo2").value;
    // -----------------------
    let final = +numero1 + +numero2;
    let comprobacion = document.getElementById("resultado");
    comprobacion.value = final;
    return true
    // Esto se simplifica con la linea de abajo
    document.getElementById("resultado").value = +numero1 + +numero2;
}

function resta() {
    let numero1 = document.getElementById("campo1").value;
    let numero2 = document.getElementById("campo2").value;
    // -----------------------
    let final = numero1 - numero2;
    let comprobacion = document.getElementById("resultado");
    comprobacion.value = final;
    return true
}

function multiplicacion() {

    let numero1 = document.getElementById("campo1").value;
    let numero2 = document.getElementById("campo2").value;
    let final = numero1 * numero2;
    let comprobacion = document.getElementById("resultado");
    comprobacion.value = final;
    return true
}

function division() {

    let numero1 = document.getElementById("campo1").value;
    let numero2 = document.getElementById("campo2").value;
    let final = numero1 / numero2
    let comprobacion = document.getElementById("resultado");
    comprobacion.value = final;
    return true;

}

function raizCuadrada() {

    let numero1 = document.getElementById("campo1").value;
    let final = Math.sqrt(numero1);
    let comprobacion = document.getElementById("resultado");
    comprobacion.value = final;
    return true;
}

function potencia() {

    let numero1 = document.getElementById("campo1").value;
    let numero2 = document.getElementById("campo2").value;
    let final = Math.pow(numero1, numero2);
    let comprobacion = document.getElementById("resultado");
    comprobacion.value = final;
    return true;
}

function valorAbsoluto() {
    let numero1 = document.getElementById("campo1").value;
    let numero2 = document.getElementById("campo2").value;
    let comprobacion = document.getElementById("resultado");
    let final = Math.abs(comprobacion.value);
    comprobacion.value = final;
    return true;
}

function random() {
    let comprobacion = document.getElementById("resultado");
    let final = (Math.random() * 11);
    comprobacion.value = final;
}

function redondeo() {
    let comprobacion = document.getElementById("resultado");
    let final = Math.round(comprobacion.value);
    comprobacion.value = final;

}

function bajo() {
    let comprobacion = document.getElementById("resultado")
    let final = Math.floor(comprobacion.value);
    comprobacion.value = final

}

function alto() {
    let comprobacion = document.getElementById("resultado")
    let final = Math.ceil(comprobacion.value);
    comprobacion.value = final

}

function borrar() {
    // borrar todo lo que hay en los botones
    location.reload();
}
