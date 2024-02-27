// mousemove -> al mover el Ratón
// mouseover -> cuando se posiciona encima de algún objeto
// mouseout -> cuando se retira de algún objeto

let menu = document.getElementById("miMenu");
let boton = document.getElementById("miBoton");


// cuando clicamos en el botón 
boton.addEventListener("click", function(){

    menu.style.display = "block";
})
// cuando posicionamos el ratón encima del botón
boton.addEventListener("mouseover", function(){

    menu.style.display = "block";
})
// cuando quitamos el ratón del botón
boton.addEventListener("mouseout", function(){

    menu.style.display = "none";
})

// hacemos un evento de todo el documento para mostrar las posiciones x e y del ratón
document.addEventListener("mousemove", function(event){
    console.log("posción x: " + event.clientX + " -  Posicion y: " + event.clientY);
})