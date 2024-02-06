let empleados = [];

// objeto para crear las instancias del objeto
// la función del constructor se escribe la primera con mayuscula
function Empleado(nombre, apellido, edad, cargo) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;

}


function agregarEmpleado() {

    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let edad = document.getElementById("txtEdad").value;
    let cargo = document.getElementById("txtCargo").value;

    let empleado = new Empleado(nombre, apellido, edad, cargo);

    // con el push lo que hacemos es agregar un elemento al array
    empleados.push(empleado);

    alert("Empleado ha sido agregado");
    // con esta función que desarrollamos abajo limpiamos los campos cada vez que se pulsa el boton agregarEmpleado
    limpiarCampos();

}


function mostrarEmpleados() {

    let listado = " ";
    for (empleado of empleados) {

        for (let propiedad in empleado) {
            listado = listado + propiedad.toUpperCase() + ": " + empleado[propiedad] + ", "
        }
        // con esto hacemos un salto de linea
        listado = listado + "\n"
    }

    //alert(listado);
    actualizarTabla();
}

// Función para añadir los registros en una tabla hecha en en HTML
function actualizarTabla() {

    document.getElementById("cuerpo").innerHTML = "";

    for (empleado of empleados) {

        let guardar = "<tr>"

        for (let propiedad in empleado) {
            guardar = guardar + "<td>" + empleado[propiedad] + "</td>";
        }
        guardar = guardar + "</tr>";

        document.getElementById("cuerpo").innerHTML = document.getElementById("cuerpo").innerHTML + guardar;

    }
}

function limpiarCampos() {

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtEdad").value = "";
    document.getElementById("txtCargo").value = "";

}