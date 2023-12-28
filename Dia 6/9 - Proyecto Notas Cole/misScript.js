const misNotas = [5, 7, 4, 9, 3];

// for of
function mostrarLista() {

    for (let mostrar of misNotas) {
        document.write("Nota: " + mostrar + " <br> ");
    }

}

// for
function calcularPromedio() {
    let suma = 0;

    for (let i = 0; i < misNotas.length; i++) {

        suma += misNotas[i];
    }

    let total = suma / misNotas.length;

    document.write("Suma de Notas: " + suma + "<br>");
    document.write("Promedio: " + total);

}

// while
function notaMasAlta() {

    let alta = 0;
    let i = 0;

    // recorre 5 veces el loop
    while (i < 5) {

        if (misNotas[i] > alta) {

            alta = misNotas[i];
        }
        i++;
    }

    document.write(alta);
}

// do while
function suspensos() {

    let suspenso = "No";
    let i = 0;

    do {
        if (misNotas[i] < 4) {
            suspenso = "SI, ponte las pilas y lo lograrás";
            break;
        }
        i++;
    } while (i < 5);

    document.write(suspenso);
}