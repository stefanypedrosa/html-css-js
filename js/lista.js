var cont = 0;
var tarefa;
var confere;
function adctarefa(){
    tarefa = document.getElementById("task").value;
    cont++;

    document.getElementById("task").value = "";
    document.getElementById("inserir").innerHTML += '<div class="row" id="inserindo' + cont +'"><div class="col-md-2"><input type="checkbox" id="check" onclick = "tachado(' + cont + ');"></div><div class="col-md-8"><label for="check" id="taf ' + cont +'">' + tarefa + '</label></div><div class="col-md-2"><h5>' + cont + '</h5></div></div>'
} 