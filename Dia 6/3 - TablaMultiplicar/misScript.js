function multiplicar() {
    // caja
    let elementoTextoTabla = document.getElementById("textoTabla");
    // el valor de la caja
    let textoNumeroTabla = elementoTextoTabla.value;
    
    // conversión del numero de la caja
    let numeroCaja = Number(textoNumeroTabla);

    //Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    // Producir y mostrar resultado
    for (x = 1; x <= 10; x++) {

     // Calcular el resultado   
     let numeroResultado = numeroCaja * x;

     // Representar Tabla con resultados
     let textoResultado = numeroCaja + " por " + x + " es igual a " + numeroResultado;

     // Crear un elemento de la lista
     let itemLista = document.createElement("li");
     itemLista.innerText = textoResultado;
     elementoTablaMultiplicar.appendChild(itemLista);

    }
}

function reset(){

        location.reload(); 
}

