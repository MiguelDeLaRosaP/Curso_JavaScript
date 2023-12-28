function crearTiendas(contenedorID, min, cantidadTiendas) {

    //encontrar contenedor por su id
    let elementoContenedor = document.getElementById(contenedorID);

    //Loop para crear tantas tiendas como se quiera
    for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {

        //Crear texto label para poder llamar a la función
        let textoEqtiqueta = "Tienda " + conteoTiendas;

        //crear tiendas con crearParrafoTienda
        let parrafoTienda = crearParrafoTienda(textoEqtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);

    }
}

function crearParrafoTienda(textoLabel, valorMin) {

    //crear las etiquetas de parrafo <p>
    let elementoParrafo = document.createElement("p");

    //crear etiqueta label
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel + ": ";

    //conectar con el input
    elementoEtiqueta.setAttribute("for", textoLabel);

    //crear el input
    let elementoInput = document.createElement("input");

    //establecer atributos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);

    //agregar label input al parrafo con el metodo appenChild que agrega el elemento al div
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;

    //Para agregar texto a una etiqueta se usa el INNERTEXT (Ejemplo parrafo.innerText = "Parrafo 1")

}

function extraerNumeroDesdeElemento(elemento) {

    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular() {

    let ventas = [];

    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + " / Venta Mayor: " + ventaMayor + " / Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("textoCalculo");

    elementoSalida.textContent = mensajeSalida;

}
function sumarTotal(array) {
    let total = 0;
    for (let venta of array) {

        total = total + venta;
    }
    return total;
}

function calcularMayor(array) {

    let maximo = array[0];

    for (let venta of array) {

        if (venta > maximo) {

            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(array) {

    let minimo = array[0];

    for (let venta of array) {

        if (venta < minimo) {

            minimo = venta;
        }
    }
    return minimo;
}