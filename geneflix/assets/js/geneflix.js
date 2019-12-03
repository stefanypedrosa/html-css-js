var numVideo=1;

function tocaAnterior(){
    if(numVideo == 1){
        numVideo = 4;
    }
    else{
        numVideo--;
    }
    document.getElementById("myvideo").src = "video" + numVideo + ".mp4";
    document.getElementById("myvideo").play();
}

function tocaAtual(){
        document.getElementById("myvideo").src = "video" + numVideo + ".mp4";
        document.getElementById("myvideo").play();
}

function paraTudo(){
    document.getElementById("myvideo").pause();
}

function tocaProxima(){
    if(numVideo == 4){
        numVideo=1;
    }
    else{
        numVideo++;
    }
    document.getElementById("myvideo").src = "video" + numVideo + ".mp4";
    document.getElementById("myvideo").play();
}