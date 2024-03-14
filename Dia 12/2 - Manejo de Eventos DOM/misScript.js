let boton = document.getElementById("miBoton");
let div = document.getElementById("miDiv");
let enlace = document.getElementById("miEnlace");

function evitarEnlace(event) {

    // DEFAULT sirve para evitar la acción predeterminada, en este caso evita que google se abra
    event.preventDefault();
    alert("Enlace no habilitado");
}

function mostrarMensajes(event) {

    // evento objetivo (boton)
    alert(event.target);
    // te devuelve el elemento que esta asociado al evento (div)
    alert(event.currentTarget);
}

div.addEventListener("click", mostrarMensajes);

enlace.addEventListener("click", evitarEnlace);

// Los Eventos TARGET y CURRENTTARGET sirven para identificar los elementos que desencadenan el evento
