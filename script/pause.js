//-----------Creando Funciones para menu---------------//

function pause(estado){
    if (estado == PAUSE){
        DibujarTablero();
        ctx.save();
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
        ctx.restore();
        ctx.drawImage(AlmacenImg('imagenes/pause.png'),65,180);
    }
}