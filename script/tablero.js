var filas = 15;
var columnas = 20;
var tablero = [];
for (var i=0;i<columnas;i++){
        tablero[i] = [];
        for (var e=0;e<filas;e++){
                tablero[i][e] = -2;
        }
}

tablero.x = tablero[0].length;
tablero.y = tablero.length;