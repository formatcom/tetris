var carga = true;
var loading = false;
function cargando(){
    if (carga){
        if (CargFrame >= 5){
            CargFrame = 0;
            if (DisCarg <= 0) DisCarg = myCanvas.height; 
            else{
                DisCarg2 += 0.03;
                DisCarg -= 0.25;
            }
        }else CargFrame++;
        visor.style.marginTop=  "-2304px";
        ctx.save();
        img=new Image();
        img.src='imagenes/loading.jpg';
        img.onload=function(){
            loading =  true;
        }
        if (loading) ctx.drawImage(img,10,200);
        dibujarCirculo('white', 40, DisCarg, DisCarg2);
        ctx.restore();
        if (imgCargadas() && songCargadas()){
                estado = PRESENTACION;
                carga = false;
        }
    }
}