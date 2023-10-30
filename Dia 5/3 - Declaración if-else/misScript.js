function numero(){

    let caja = document.getElementById("precio").value;
    let comprobación = document.getElementById("respuesta");
    
    if(caja<5){
        comprobación.textContent = "Compra 2 cartones de leche"
    }else{
        if(caja<9){
            comprobación.textContent = "Puedes comprar 1 cartón de leche"
        }else{
            comprobación.textContent = "Vuelva a casa a por más dinero"
        }
    }
    
    }