var numMusica=1;
var tempo = 0;

function tocaAnterior(){
    if(numMusica == 1){
        numMusica = 4;
    }
    else{
        numMusica--;
    }
    document.getElementById("mymusic").src = "musica" + numMusica + ".mp3";
    document.getElementById("mymusic").play();
    tempo = 0;
}

function tocaAtual(){
        document.getElementById("mymusic").src = "musica" + numMusica + ".mp3";
        document.getElementById("mymusic").play();
        
}

function paraTudo(){
    document.getElementById("mymusic").pause();
    tempo = document.getElementById("mymusic").current();
}

function tocaProxima(){
    if(numMusica == 4){
        numMusica=1;
    }
    else{
        numMusica++;
    }
    document.getElementById("mymusic").src = "musica" + numMusica + ".mp3";
    document.getElementById("mymusic").play();
}