function iniciar(lvl){
    if (typeof lvl == "undefined") lvl = 0;
    for (var y=0;y<tablero.y;y++){
        for (var x=0;x<tablero.x;x++){
            tablero[y][x] = -2;
        }
    }
    pieza.new = true;
    puntos = 0;
    ymax = tablero.y;
    estado = JUGANDO;
    nivel = lvl;
    
    lineas = {
        total: 0,
        simple: 0,
        doble: 0,
        triple: 0,
        tetris: 0
    }
    
    MostrarR();
    
    document.getElementById("nivel").innerHTML='<label>'+nivel+'</label>';
    document.getElementById("puntos").innerHTML='<label>'+puntos+'</label>';
    document.getElementById("lineas").innerHTML='<label>'+lineas.total+'</label>';
    config.velocidad = level[nivel];
    contador = 0;
    
    AlmacenSong('song/fondo.ogg').currentTime = 0;
    AlmacenSong('song/fondo.ogg').play();
}

function mando(){ 
    if (teclado[13] && !joystick.pause){
        if (estado == JUGANDO){
            AlmacenSong('song/fondo.ogg').pause();
            estado = PAUSE;
            AlmacenSong('song/PAUSE.ogg').play();
        }else if (estado == PAUSE){
            estado = JUGANDO;
            AlmacenSong('song/fondo.ogg').play();
        }else if (estado == PRESENTACION || estado == GAMEOVER){
            if (!seguroHIGH)   guardarP(puntos, document.getElementById("apodo").value); 
            nivel = 0;
            AlmacenSong('song/fondo.ogg').pause();
            AlmacenSong('song/fondo.ogg').currentTime = 0;
            document.getElementById("nivel").innerHTML="";
            document.getElementById("puntos").innerHTML="";
            document.getElementById("lineas").innerHTML="";
            document.getElementById("record").innerHTML="";
            next.style.backgroundImage = "";
            next.img = false;
            estado = MENU;
        }else if (estado == MENU){
            Selection.y = 105;
            estado = CONTADOR;
        }
        joystick.pause = true;
    }else if (!teclado[13]) joystick.pause = false;
        
    
    if (teclado[116] && (estado == JUGANDO || estado == GAMEOVER)) iniciar();
    
    if (teclado[38]){
        var tmp = 0;
        if (estado == JUGANDO && !joystick.rotar){
            if (pieza.giro < 3){
                if (!colision(pieza.x, pieza.giro+1)){
                    pieza.giro++;
                }else{
                    if (pieza.id == 0) tmp = 3;
                    else tmp = 1;
                    if (!colision(pieza.x - tmp, pieza.giro+1)){
                        pieza.x -= tmp;
                        pieza.giro++;
                        
                    }
                }
            }else{
                if (!colision(pieza.x, 0)){
                    pieza.giro = 0;
                    
                }else{
                    if (pieza.id == 0) tmp = 3;
                    else tmp = 1;
                    if (!colision(pieza.x - tmp, 0)){
                        pieza.x -= tmp;
                        pieza.giro = 0;
                        
                    }
                }
            }
        }

        if (estado == MENU && nivel > 0 && !joystick.rotar){
            nivel--;
            Selection.y -= 40;
            AlmacenSong('song/MENU.ogg').pause();
            AlmacenSong('song/MENU.ogg').currentTime = 0;
            AlmacenSong('song/MENU.ogg').play();
        }
        joystick.rotar = true;
    }else if(!teclado[88] && !teclado[38] && !teclado[90]) joystick.rotar = false;

    if (teclado[90]){
        var tmp = 0;
        if (estado == JUGANDO && !joystick.rotar){
            if (pieza.giro < 3){
                if (!colision(pieza.x, pieza.giro+1)){
                   pieza.giro++;
                   
                }else{
                    if (pieza.id == 0) tmp = 3;
                    else tmp = 1;
                    if (!colision(pieza.x - tmp, pieza.giro+1)){
                        pieza.x -= tmp;
                        pieza.giro++;
                        
                    }
                }
            }else{
                if (!colision(pieza.x, 0)){
                    pieza.giro = 0;
                    
                }else{
                    if (pieza.id == 0) tmp = 3;
                    else tmp = 1;
                    if (!colision(pieza.x - tmp, 0)){
                        pieza.x -= tmp;
                        pieza.giro = 0;
                        
                    }
                }
            }
        }
        joystick.rotar = true;
    }else if(!teclado[88] && !teclado[38] && !teclado[90]) joystick.rotar = false;
    
    
    if (teclado[88]){
        var tmp = 0;
        if (estado == JUGANDO && !joystick.rotar){
            if (pieza.giro > 0){
                if (!colision(pieza.x, pieza.giro-1)){
                    pieza.giro--;
                    
                }else{
                    if (pieza.id == 0) tmp = 3;
                    else tmp = 1;
                    if (!colision(pieza.x - tmp, pieza.giro-1)){
                        pieza.x -= tmp;
                        pieza.giro--;
                        
                    }
                }
            }else{
                if (!colision(pieza.x, 3)){
                    pieza.giro = 3;
                    
                }else{
                    if (pieza.id == 0) tmp = 3;
                    else tmp = 1;
                    if (!colision(pieza.x - tmp, 3)){
                        pieza.x -= tmp;
                        pieza.giro = 3;
                        
                    }
                }
            }
        }
        joystick.rotar = true;
    }else if(!teclado[88] && !teclado[38] && !teclado[90]) joystick.rotar = false;
    
    
    
    if (teclado[40] || teclado[32]){
        if(estado == JUGANDO && !joystick.gravedadUp && !joystick.gravedadDown){
            joystick.gravedadUp = true;
            joystick.gravedadDown = true;
        }
        
        if (estado == MENU && !Selection.move && nivel < 9){
            nivel++;
            Selection.y += 40;
            Selection.move = true;
            AlmacenSong('song/MENU.ogg').pause();
            AlmacenSong('song/MENU.ogg').currentTime = 0;
            AlmacenSong('song/MENU.ogg').play();
        }
    }else if (!teclado[40]){
        Selection.move = false;
        joystick.gravedadUp = false;
        joystick.gravedadDown = false;
    }
    
    if (teclado[37]){
        if (!joystick.pressTime && estado == JUGANDO){
            if (!colision(pieza.x-1))   pieza.x--;
            joystick.pressTime = true;
        }else{
            if (pressTime() && !colision(pieza.x-1) && estado == JUGANDO)    pieza.x--;
        }
    }else if (teclado[39]){
        if (!joystick.pressTime && estado == JUGANDO){
            if (!colision(pieza.x+1))   pieza.x++;
            joystick.pressTime = true;
        }else{
            if (pressTime()  && !colision(pieza.x+1) && estado == JUGANDO)    pieza.x++;
        }
    }else {
        joystick.pressTime = false;
        joystick.time = 0;
    }
}

function pressTime(){
    joystick.time++;
    if (joystick.time == joystick.velocidad){
        joystick.time = 0;
        return true;
    }
}

function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function CarShop(){
    var CarShop = [0,1,2,3,4,5,6];
    CarShop = CarShop.sort(function() {return Math.random() - 0.5});
    return CarShop;
}

function Gravedad(){
    if (estado != GAMEOVER){
        contador++;
        if (joystick.gravedadUp && pieza.new) joystick.gravedadUp = false;
        if (contador == config.velocidad){
            pieza.y++;
            contador = 0;
        }else if(joystick.gravedadUp) pieza.y++; 

    }
}

function GenerarPieza(){
    if(pieza.new){
        if (estado != GAMEOVER){
            
            if (pieza.pos == 8){
                pieza.bolsa = CarShop();
                pieza.pos = 0;
            }
            
            pieza.id = pieza.bolsa[pieza.pos];
            pieza.pos++;
            if (pieza.pos > 6){
                pieza.bolsa = CarShop();
                pieza.pos = 0;
            }
            muestra = -(pieza.bolsa[pieza.pos]*100);
            document.getElementById("letra").style.marginLeft=  muestra+"px";
            pieza.giro = random(0, 3);
            pieza.x = random(0, (tablero.x - MAXBLOQUE));
            pieza.new = false;
        }
        pieza.y = -4;
    }
}

function getLetra(id){
    switch(id){
        case 0:
            return "I";
        case 1:
            return "S";
        case 2:
            return "L";
        case 3:
            return "J";
        case 4:
            return "Z";
        case 5:
            return "T";
        case 6:
            return "O";
    }
}

function dibujarCirculo(color, x, y, tam){
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, tam, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#1C1C1C';
    ctx.stroke();
    ctx.restore();
}

function colision(xi, gi){
    var tmp = false;
    if (typeof xi == "undefined"){
        xi = pieza.x;
        tmp = true;
    }
    if (typeof gi == "undefined") gi = pieza.giro;
    var x = 0;
    var y = 0;
    for (var i = 0; i<MAXBLOQUE; i++){
        x = xi + figura[pieza.id][gi][i][0];
        y = pieza.y + figura[pieza.id][gi][i][1];
        if (y > (tablero.y - 1)){
            if (tmp){
                lineas.limpio = true;
                pieza.new = true;
            }
            AlmacenSong('song/PIEZA.ogg').play();
            return true;
        }
        if (x < 0 || x > (tablero.x - 1)){
            return true;
        }
        if (y >= 0){
            if (tablero[y][x] > -1){
                if (tmp){
                    lineas.limpio = true;
                    pieza.new = true;
                }
                AlmacenSong('song/PIEZA.ogg').play();
                return true;
            }
        }
    }
}

function guardarP(pts, nickname) {
    var direccion = "script/consultas/consultas.php?id=1&pts="+pts+"&nickname="+nickname;
    $.ajax({
        url: direccion,
        success: function(data){
        },
        error: function(){ alert('error 404'); }
    });
}

function MostrarR() {
    var direccion = "script/consultas/consultas.php?id=2";
    $.ajax({
        url: direccion,
        dataType: 'JSON',
        success: function(data){
            Record.nickname = data.nickname;
            Record.puntos = data.puntos;
            document.getElementById("record").innerHTML='<ul><li>'+Record.nickname+'</li><li>'+Record.puntos+'</li></ul>';
        },
        error: function(){ alert('error 404'); }
    });
}



function LimpiarLineas(){
    if (lineas.count < MAXBLOQUE && lineas.limpio){
        lineas.count++;
    }else if(lineas.limpio){
        getLineas(lineas.llenas);
        lineas.llenas = 0;
        lineas.count = 0;
        lineas.limpio = false;
    }
    
    if (lineas.limpio){
        for (var y = (tablero.y - 1); y>=ymax; y--){
            var LinCompleta = true;
            for (var x=0; x<tablero.x; x++){
                if(tablero[y][x] < 0){
                    LinCompleta = false;
                    break;
                }
            }
    
            if (LinCompleta){
                for (var tmpY = y; tmpY > 0; tmpY--){
                    for (var tmpX = 0; tmpX < tablero.x; tmpX++){
                        tablero[tmpY][tmpX] = tablero[tmpY-1][tmpX];
                    }
                }
        
                for (var tmpX = 0; tmpX < tablero.x; tmpX++){
                    tablero[0][tmpX] = -2;
                }
        
                lineas.llenas++;
                break;
            }
        }
    }
}

function getLineas(numLineas){
    lineas.total = (numLineas > 0) ? (lineas.total + parseInt(numLineas)):lineas.total;
    document.getElementById("lineas").innerHTML='<label>'+lineas.total+'</label>';
    switch(numLineas){
        case 1:
            lineas.simple++;
            if (lineas.total < (config.passLevel *(nivel+1))) AlmacenSong('song/es/SIMPLE.ogg').play();
            break;
        case 2:
            if (lineas.total < (config.passLevel *(nivel+1))) AlmacenSong('song/es/DOBLE.ogg').play();
            lineas.doble++;
            break;
        case 3:
            if (lineas.total < (config.passLevel *(nivel+1))) AlmacenSong('song/es/TRIPLE.ogg').play();
            lineas.triple++;
            break;
        case 4:
            if (lineas.total < (config.passLevel *(nivel+1))) AlmacenSong('song/es/TETRIS.ogg').play();
            lineas.tetris++;
            break;
    }
    if ((lineas.total >= (config.passLevel *(nivel+1))) || nivel == 9){
        getPuntos(1, lineas.simple);
        getPuntos(2, lineas.doble);
        getPuntos(3, lineas.triple);
        getPuntos(4, lineas.tetris);
        lineas.simple = 0;
        lineas.doble = 0;
        lineas.triple = 0;
        lineas.tetris = 0;
        if (nivel < 9){
            nivel++;
            AlmacenSong('song/LEVELUP.ogg').play();
            document.getElementById("nivel").innerHTML='<label>'+nivel+'</label>';
            config.velocidad = level[nivel];
            contador = 0;
        }
    }
}

function getPuntos(tipo, numLineas){
    if(tipo <= MAXBLOQUE){
        puntos += (point[tipo]*(nivel+1))*numLineas;
    }else{
        if (!joystick.gravedadDown) puntos+=(((tablero.y - 1)-ymin)+1);
        if (joystick.gravedadDown)  puntos+=((((tablero.y - 1)-ymin)+1)*2);
    }
    document.getElementById("puntos").innerHTML='<label>'+puntos+'</label>';
}

function DesplazarFigura(){
    temp.sprite = 0;
    var x = 0;
    var y = 0;
    ymin = 0;
    borraFig();
    if (colision()){
        for (var i = 0; i<MAXBLOQUE; i++){
            var valor = letras[pieza.id][pieza.giro][i];
            if (temp[i][0] >= 0){
                if (temp[i][0] < ymax) ymax = temp[i][0];
                if (temp[i][0] > ymin) ymin = temp[i][0];
                tablero[temp[i][0]][temp[i][1]] = valor;
            }
        }
        Loser();
        if (estado != GAMEOVER) getPuntos();
    }else{
        for (var i = 0; i<MAXBLOQUE; i++){
            x = pieza.x + figura[pieza.id][pieza.giro][i][0];
            y = pieza.y + figura[pieza.id][pieza.giro][i][1];
            if (y >= 0) tablero[y][x] = -1;
            else temp.sprite++;
            temp[i][0] = y;
            temp[i][1] = x;
        }
    }
}


function borraFig(){
    var inx, iny, finx, finy, resto;
    var tep = pieza.x - 1;
    if (tep > tablero.x) inx = tep;
    else inx = pieza.x;
    
    tep = pieza.y - 1;
    if (tep > tablero.y) iny = tep;
    else iny = pieza.y;
    
    tep = parseInt(MAXBLOQUE)+parseInt(1);
    resto = tablero.x - (parseInt(inx) + parseInt(tep));
    if (tep <= resto) finx = parseInt(tep) + parseInt(inx);
    else finx = parseInt(tep) + parseInt(inx) + parseInt(resto);
    
    resto = tablero.y - (parseInt(iny) + parseInt(tep));
    if (tep <= resto) finy = parseInt(tep) + parseInt(iny);
    else finy = parseInt(tep) + parseInt(iny) + parseInt(resto);
    
    iny = 0;
    inx = 0;
    sysBusq = 'Sistema de Busqueda: X: '+finx+ ' Y: '+finy;
    for (var y=iny; y<finy;y++){
        for (var x=inx; x<finx;x++){
            if (tablero[y][x] == -1){
                tablero[y][x] = -2;
            }
        }
    }
}

function letraNext(){
    if (!next.img){
        next.style.backgroundImage = 'url("'+AlmacenImg('imagenes/next.png').src+'")';
        next.img = true;
    }
}
    

function diseñoGame(){
    if (interfaz.img != JUGANDO){
        visor.style.marginTop=  "-768px";
        interfaz.style.marginTop=  "-1536px";
        interfaz.img = JUGANDO;
    }
}

function DibujarTablero(){
    var bloq = temp.sprite;
    for (var y = 0;y<tablero.y;y++){
        for (var x=0;x<tablero.x;x++){
            ctx.save();
            if (tablero[y][x] == -1) {
                if (graficos){
                    ctx.drawImage(AlmacenImg(styleImg[pieza.id][pieza.giro][bloq]),config.anchoTile*x,config.altoTile*y);
                    bloq++;
                }else{
                    ctx.fillStyle = '#575454';
                    ctx.fillRect(config.anchoTile*x,config.altoTile*y,config.anchoTile,config.altoTile);
                    ctx.strokeRect(config.anchoTile*x,config.altoTile*y,config.anchoTile,config.altoTile);
                }
            }
            if (tablero[y][x] > -1){
                if (graficos){
                    ctx.drawImage(lista[tablero[y][x]],config.anchoTile*x,config.altoTile*y);
                }else{
                    ctx.fillStyle = '#8C1C1C';
                    ctx.fillRect(config.anchoTile*x,config.altoTile*y,config.anchoTile,config.altoTile);
                    ctx.strokeRect(config.anchoTile*x,config.altoTile*y,config.anchoTile,config.altoTile);
                }
            }
            ctx.restore();
        }
    }
}

//-----------Creando Funciones para menu---------------//

function juego(estado){
    if (estado == JUGANDO){
        diseñoGame();
        borraFig();
        GenerarPieza();
        DesplazarFigura();
        LimpiarLineas();
        Gravedad();
        DibujarTablero();
        letraNext();
        dibujarFps();
    }
}