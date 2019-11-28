function preenche(i, j){
    var jogo = [];
    var vez = 1

    if(vez = 1){
        vez = 2;
        jogo[i][j] = "X";
        document.getElementById("coluna"+i+j).innerHTML = jogo[i][j];
    }
    else{
        vez = 1;
        jogo[i][j] = "O";
        document.getElementById("coluna"+i+j).innerHTML = jogo[i][j];
    }
}