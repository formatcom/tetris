//almacena todas las imagenes
var lista = [];
var cargadas = 0;
var listaSong = [];
var cargadasSong = 0;

//almacen de imagenes
function AlmacenImg(ruta){
    var img;
    for (var i=0;i<lista.length;i++){
        img=lista[i];
        if (img.src== (window.location.href+ruta)){
            return img;
        }
    }
    img=new Image();
    img.src=ruta;
    img.onload=function(){
        cargadas++;
    }
    lista.push(img);
}

//almacen de Sonidos
function AlmacenSong(ruta){
    var song;
    for (var i=0;i<listaSong.length;i++){
        song=listaSong[i];
        if (song.src== (window.location.href+ruta)){
            return song;
        }
    }
    song=new Audio();
    song.src=ruta;
    song.oncanplaythrough = function(){
        cargadasSong++;
    }
    listaSong.push(song);
}

//Efectos
AlmacenSong('song/fondo.ogg');
AlmacenSong('song/fondo.ogg').loop = true;
AlmacenSong('song/fondo.ogg').volume = 0.3;
AlmacenSong('song/GAMEOVER.ogg');
AlmacenSong('song/GAMEOVER.ogg').volume = 1;
AlmacenSong('song/MENU.ogg');
AlmacenSong('song/MENU.ogg').volume = 1;
AlmacenSong('song/PIEZA.ogg');
AlmacenSong('song/PIEZA.ogg').volume = 0.2;
AlmacenSong('song/PAUSE.ogg');
AlmacenSong('song/PAUSE.ogg').volume = 1;
AlmacenSong('song/LEVELUP.ogg');
AlmacenSong('song/LEVELUP.ogg').volume = 1;
AlmacenSong('song/es/SIMPLE.ogg');
AlmacenSong('song/es/SIMPLE.ogg').volume = 1;
AlmacenSong('song/es/DOBLE.ogg');
AlmacenSong('song/es/DOBLE.ogg').volume = 1;;
AlmacenSong('song/es/TRIPLE.ogg');
AlmacenSong('song/es/TRIPLE.ogg').volume = 1;;
AlmacenSong('song/es/TETRIS.ogg');
AlmacenSong('song/es/TETRIS.ogg').volume = 1;;


//comprobar si estan todas las imagenes cargadas
function imgCargadas(){
    if (cargadas == lista.length){
        return true;
    }
}

//comprobar si estan todas las Sonidos cargadas
function songCargadas(){
    if (cargadasSong == listaSong.length){
        return true;
    }
}