function pegaItem(evt){
    console.log("comecei a arrastar "+evt.target.id);
    // adicionei o id do item que vou arrastar na estrutura dataTransfer
    evt.dataTransfer.setData("TAREFA",evt.target.id);
}

function habilitaArrastar(evt){
    evt.preventDefault();
    //console.log("Estou sobre um determinado ponto que vai receber a tarefa");
}

function recebeItem(evt){
    // agora preciso recuperar a TAREFA que estava no dataTransfer e adicioná-la na coluna
    var idTarefa = evt.dataTransfer.getData("TAREFA");
    var tarefa = document.getElementById(idTarefa);
    console.log("Dropei a tarefa aqui ="+evt.target.id);


    // crio um elmento DOM e insiro na coluna correspondente
    evt.target.appendChild(tarefa);


} 
