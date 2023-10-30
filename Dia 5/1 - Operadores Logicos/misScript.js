function respuesta(){

    let edad = document.getElementById("numeroEdad").value;
    let resp1 = document.getElementById("respuesta1");
    let resp2 = document.getElementById("respuesta2");
    let resp3 = document.getElementById("respuesta3");

    // Si es correcto pondra True, sino False
    let mayorEdad = edad>=18;
    resp1.textContent = mayorEdad;

    let casino = edad>=18 && edad<36;
    resp2.textContent = casino;

    let cine = edad<=14 || edad>=65;
    resp3.textContent = cine;

}