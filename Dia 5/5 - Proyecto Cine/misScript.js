
function generarPeliculas(genero) {

    let numeroEdad = document.getElementById("caja").value;
    let respuesta = document.getElementById("titulo");
    let peliculaTerror = document.getElementById("peliculasTerror")
    let peliculaComedia = document.getElementById("peliculasComedia")
    let peliculaDrama = document.getElementById("peliculasDrama")
    let peliculaInfantil = document.getElementById("peliculasInfantil")
    let contenedordiv = document.getElementById("contenedor")

    contenedordiv.innerHTML = '';


    switch (genero) {
        case 'Comedia':
            if (numeroEdad >= 12 && numeroEdad <= 16) {
                respuesta.textContent = "Genero Comedia"
                contenedordiv.innerHTML = peliculaComedia.innerHTML;

            } else {
                respuesta.textContent = "Edad equivocada para el genero seleccionado"
            }
            break;

        case 'Terror':
            if (numeroEdad >= 25 && numeroEdad <= 99) {
                respuesta.textContent = "Genero Terror"
                contenedordiv.innerHTML = peliculaTerror.innerHTML;

            } else {
                respuesta.textContent = "Edad equivocada para el genero seleccionado"

            }
            break;

        case 'Drama':
            if (numeroEdad >= 16 && numeroEdad < 25) {
                respuesta.textContent = "Genero Drama"
                contenedordiv.innerHTML = peliculaDrama.innerHTML;

            } else {
                respuesta.textContent = "Edad equivocada para el genero seleccionado"
            }
            break;

        case 'Infantil':
            if (numeroEdad >= 5 && numeroEdad < 12) {
                respuesta.textContent = "Genero infantil"
                contenedordiv.innerHTML = peliculaInfantil.innerHTML;


            } else {
                respuesta.textContent = "Edad equivocada para el genero seleccionado"
            }
            break;

        default:
            alert("Edad fuera de Rango")
            break;
    }

}
function reset() {

    location.reload();
}

