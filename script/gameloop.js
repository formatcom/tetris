var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
myCanvas.style.cursor = "none";

var interfaz = document.getElementById('interfaz');
var next = document.getElementById('letra');
var visor = document.getElementById('contexto');

var maxfps = 60;
var frameCount = 0,
    currentFps = 0,
    drawInterval = 1000/maxfps,
    lastFps = new Date().getTime();    

myCanvas.width=config.anchoTile*tablero.x;
myCanvas.height=config.altoTile*tablero.y;

// Lo primero que se inicia una sola vez
function contenedor(){
    elementoControl();
    var intervalo = window.setInterval(gameLoop,drawInterval);
}

// Dibujar Rectangulos
function dibujarRect(obj, color){
    ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(obj.x,obj.y,obj.width,obj.height);
    ctx.restore();
}

// Depurador
function log(texto,nueva){
    var capa=document.getElementById("log");
    if (nueva)
        capa.innerHTML+="<br/>"+texto;
    else
        capa.innerHTML=texto;
}

//Actualiza el fps
function fpsUpdate(){
    // Calculamos el tiempo desde el último frame.
    var thisFrame = new Date().getTime(),
    diffTime = Math.ceil((thisFrame - lastFps));

    if (diffTime >= 1000){
        currentFps = frameCount;
        frameCount = 0.0;
        lastFps = thisFrame;
    }

    frameCount++;
}

//Borra todo el contenido del canvas
function borrarCanvas(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function elementoControl(){
    agregarEvento(document,"keydown",function(e){
        //se coloca true la tecla presionada
        teclado[e.keyCode] = true;
        if (estado != GAMEOVER) e.preventDefault();
    });
    agregarEvento(document,"keyup",function(e){
        //se coloca false al soltar la tecla
        teclado[e.keyCode] = false;
    });
 
    function agregarEvento(elemento, nombreEvento, funtion){
        if(elemento.addEventListener){
            //navegadores de verdad
            elemento.addEventListener(nombreEvento, funtion, false);
        }else if(elemento.attachEvent){
            //internet explorer xD...
            elemento.attachEvent(nombreEvento, funtion, false);
        }
    }
}


function depurar(){
  /*  log('Nivel: '+nivel);
    log('Puntos: '+puntos, true);
    log('Lineas: '+lineas.total, true);
    log('Simples: '+lineas.simple, true);
    log('Dobles: '+lineas.doble, true);
    log('Triples: '+lineas.triple, true);
    log('Tetris: '+lineas.tetris, true);
    log('Pieza Actual: '+getLetra(pieza.id), true);
    log('Pieza Siguiente: '+getLetra(pieza.bolsa[pieza.pos]), true);
    log('Pieza x: '+pieza.x, true);
    log('Pieza y: '+pieza.y, true);
    log('Rotacion: '+pieza.giro, true);
    log(sysBusq, true);
    log('Velocidad: '+config.velocidad, true);
    log('yMax: '+ymax, true);
    log('yMin: '+ymin, true);
    log('gravedadUp: '+joystick.gravedadUp, true);
    log('gravedadDown: '+joystick.gravedadDown, true);
    log('Tablero-Filas: '+tablero.x, true);
    log('Tablero-Comunas: '+tablero.y, true);
    log('Imagenes: '+lista.length, true);*/
} 

//----------- Function Dibujar Canvas -----------------//

function dibujarFondo(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
}

function dibujarTexto(x, y, color, tipo, px, fuente, texto){
    ctx.save();
        ctx.fillStyle = color;
        ctx.font = tipo+' '+px+' '+fuente;
        ctx.fillText(texto, x, y);
    ctx.restore();
}

function dibujarFps(){
    dibujarTexto(10, 20, 'red', 'bold', '12px', 'sans-serif', 'FPS: ' + currentFps + '/' + maxfps);
}


//------------ GameLoop - Ciclo infinito --------------//

function gameLoop(){
    borrarCanvas();
    cargando();
    mando();
    presentacion(estado);
    menu(estado);
    gameover(estado);
    juego(estado);
    conta(estado);
    pause(estado);
    fpsUpdate();
    depurar();
}

contenedor();