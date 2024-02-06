class Animal {
    constructor(nombre, peso, edad) {

        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    // METODO
    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años`
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, edad, peso);
        this.raza = raza;

    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.raza}`
    }

}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, edad, peso);
        this.sexo = sexo;

    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.sexo}`
    }

}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, edad, peso);
        this.color = color;

    }

    informacion() {
        return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.color}`
    }

}

// instancias
let perro1 = new Perro("Murky", 15, 7, "Perro de Agua");
let gato1 = new Gato("Ringo", 4, 5, "Hembra");
let conejo1 = new Conejo("Dumbo", 6, 2, "Negro");

//Lista ARRAYS
let animales = [perro1, gato1, conejo1];

function mostrarAnimales() {

    let lista = document.getElementById("listaAnimales");

    for (let animal of animales) {
        // creamos un item nuevo 
        let item = document.createElement("li");
        // nos devuelve el item con la informacion que queremos
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}

