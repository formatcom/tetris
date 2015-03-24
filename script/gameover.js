function Loser(){
    for (var i = 0; i<tablero.x; i++){
        if(tablero[0][i] > -1){
            estado = GAMEOVER;
            AlmacenSong('song/GAMEOVER.ogg').play();
            break;
        }
    }
}

function gameover(estado){
    if (estado == GAMEOVER){
        if (seguroHIGH){
            if (puntos > Record.puntos){
                seguroHIGH = false;
                document.getElementById("recordo").innerHTML='<div class="emergente"><div id="formulario">Mejor Puntuación<br>'+puntos+'<br><input type="text" id="apodo"/><br>Escribe tu Apodo<br><br>Esto solo te saldra cuando tengas el mejor record.<br>Necesita un mejor diseño y una mejor posicion me ayudas? :D</div></div>';
            }
        }
        AlmacenSong('song/fondo.ogg').pause();
        AlmacenSong('song/fondo.ogg').currentTime = 0;
        DibujarTablero();
        ctx.save();
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
        ctx.restore();
        ctx.save();
        ctx.drawImage(AlmacenImg('imagenes/gameover.png'),65,180);
        ctx.restore();
    }
}