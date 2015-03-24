const MAXBLOQUE = 4;

//Estados
const PRESENTACION = 0;
const MENU = 1;
const JUGANDO = 2;
const PAUSE = 3;
const GAMEOVER = 4;
const CARGANDO = 5;
const CONTADOR = 6;

var DisCarg = 250;
var DisCarg2 = 10;
var CargFrame = 0;

var graficos = true;
var conA = 3;
var conB = 0;
var sysBusq;
var ymax = tablero.y;
var ymin = 0;
var puntos = 0;
var contador = 0;
var temp = [[0,0],[0,0],[0,0],[0,0]];
var teclado = {};

var Record = {};

var estado = CARGANDO;
var seguroHIGH = true;

Selection = {
    x: 30,
    y: 105
}

var pieza = {
    bolsa: [],
    pos: 8,
    id: 0,
    x: 5,
    y: 0,
    giro: 0,
    new: true
}

var lineas = {
    total: 0,
    simple: 0,
    doble: 0,
    triple: 0,
    tetris: 0,
    count: 0,
    llenas: 0,
    limpio: false
}

var level = [45, 40, 35, 30, 25, 20, 15, 10, 8, 5];
var point = [0, 40, 100, 300, 1200];
var maxLevel = level.length;
var nivel = 0;

var config = {
    anchoTile: 25,
    altoTile: 25,
    passLevel: 10,
    velocidad: level[nivel]
}

var joystick = {
    rotar: false,
    gravedadUp: false,
    gravedadDown: false,
    pause: false,
    pressTime: false,
    time: 0,
    velocidad: 5
    
}