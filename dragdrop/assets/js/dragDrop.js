function pegaItem(evt){
    evt.dataTransfer.setData("TAREFA",evt.target.id);
}

function habilitaArrastar(evt){
    evt.preventDefault();
}

function recebeItem(evt){
    var idTarefa = evt.dataTransfer.getData("TAREFA");
    var tarefa = document.getElementById(idTarefa);
    evt.target.appendChild(tarefa);
} 

function adcTarefa(){
    var task = document.getElementById("tarefa").value;
    var num = 1;
    document.getElementById("pendentes").innerHTML += '<div class="itemTarefa" draggable="true" ondragstart="pegaItem(event);" id="t'+num+'">'+task+'</div>';
}