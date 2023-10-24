function calcularLitros(){

    let elementokm = document.getElementById("textokm");
    let textokm = elementokm.value;
    let cantkm = Number(textokm);
    // Math.ceil para redondear hacia arriba
    let cantLitros = Math.ceil(cantkm / 8.8);

    let resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantLitros + " litros de combustible";
}