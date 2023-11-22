function elementoFruta(){


    let titulo = document.getElementById("textoFruta");// h2
    
    let textoCaja = document.getElementById("caja");//input
    let fruta = textoCaja.value
    

   switch (fruta){
    case "1":
        titulo.textContent = "Anaranjado";
        break; 
    case "2":
        titulo.textContent = "Verde";
        break;
    case "3":
        titulo.textContent = "Amarillo";
        break;
    case "4":
        titulo.textContent = "Blanca con pepitas Negras";
        break;
    case "5":
        titulo.textContent = "Roja";
        break;
    
   } 

   
}