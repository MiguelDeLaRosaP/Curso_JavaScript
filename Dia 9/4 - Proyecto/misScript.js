function Automovil(marca, modelo, color, anio, titular) {

    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;

}

// PROPIEDADES
let automovil1 = new Automovil("Ford", "GT", "Negro", 2020, "Paco");
let automovil2 = new Automovil("Opel", "Astra", "Rojo", 2022, "Rosa");
let automovil3 = new Automovil("Seat", "Ibiza", "Verde", 2005, "Jose");

// Array con los 3 metodos
let automoviles = [automovil1, automovil2, automovil3];

// METODOS
Automovil.prototype.venderAutomovil = function (nuevoTitular) {

    this.titular = nuevoTitular;
}

Automovil.prototype.encender = function () {

    alert("El automovil fue encendido");
}

Automovil.prototype.verAutomovil = function () {

    return `${this.marca} ${this.modelo} - ${this.anio} - ${this.titular}`
}

function mostrarAutos() {



    let lista = document.getElementById("listaAutomoviles");

    for (let automovil of automoviles) {

        // Creamos un elemento tipo li (lista)
        let item = document.createElement("li");
        // Le damos contenido a nuestro item creado, en este caso sera igual a lo que tenemos en la funcion verAutomovi
        item.innerText = automovil.verAutomovil();

        // Para poner el item dentro de la lista
        lista.appendChild(item);
    }


}
