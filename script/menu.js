//-----------Creando Funciones para menu---------------//

function menu(estado){
    if (estado == MENU){
        if (!seguroHIGH){
            document.getElementById("recordo").innerHTML='';
        }
            seguroHIGH = true;
        if (interfaz.img != MENU){
            visor.style.marginTop=  "-1536px";
            interfaz.style.marginTop=  "-768px";
            interfaz.img = MENU;
        }
        ctx.drawImage(AlmacenImg('imagenes/barra.png'),Selection.x, Selection.y);
    }
}