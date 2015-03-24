function conta(estado){
    if (estado == CONTADOR){
        diseñoGame();
        if (conB >= 60){
            conA--;
            conB = 0;
        }else conB++;
        if (conA == 0){
            conA = 3;
            iniciar(nivel);
        }
        dibujarTexto(10, 100, 'red', 'bold', '30px', 'sans-serif', conA);
        dibujarTexto(10, 140, 'red', 'bold', '11px', 'sans-serif', 'Esto es solo un texto de prueba :p');
        dibujarFps();
    }
}