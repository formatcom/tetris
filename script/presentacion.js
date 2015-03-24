function presentacion(estado){
    if (estado == PRESENTACION){
        if (interfaz.img != PRESENTACION){
            interfaz.style.marginTop=  "0px";
            interfaz.img = PRESENTACION;
        }
        interfaz.style.backgroundImage = 'url("'+AlmacenImg('imagenes/interfaz.png').src+'")';
    }
}