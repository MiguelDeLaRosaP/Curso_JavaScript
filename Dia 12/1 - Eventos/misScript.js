let boton = document.getElementById("miBoton");

function mostrarMensaje(){
    alert("El botón ha sido presionadoo")
};

// el evento más común es click para que realice alguna acción al presionar en este caso un botón
boton.addEventListener("click", mostrarMensaje);

function otroMensaje(){
    alert("Flotando")
}
// el evento mouseover sirve para que cuando pases el raton por encima del botón te salga un mensaje
boton.addEventListener("mouseover", otroMensaje);



