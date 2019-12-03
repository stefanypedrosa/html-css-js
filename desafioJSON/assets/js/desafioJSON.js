function Busca(){
    var cod = document.getElementById("usuario").value;
    var url = "https://jsonplaceholder.typicode.com/users/"+cod;
    document.getElementById("usuario").value = "";
    if(cod < 1 || cod > 10){
        result.innerHTML = "<h4 class='mt-3'>CÓDIGO INVÁLIDO</h4>";
    }
    else{
    fetch(url, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));
    }
}

function preencheHTML(json){
    var result = document.getElementById("result");
    result.innerHTML = "";
    result.innerHTML += "<h3 class='mt-3'>INFORMAÇÕES PESSOAIS</h3>";
    result.innerHTML += "<strong>CÓDIGO:</strong> "+ json.id + "<br/>";
    result.innerHTML += "<strong>NOME:</strong> "+json.name + "<br/>";
    result.innerHTML += "<strong>USERNAME:</strong> "+json.username + "<br/>";
    result.innerHTML += "<strong>EMAIL:</strong> "+json.email + "<br/>";
    result.innerHTML += "<strong>TELEFONE:</strong> "+json.phone + "<br/>";
    result.innerHTML += "<strong>WEBSITE:</strong> "+json.website + "<br/>";
    result.innerHTML += "<h5 class='mt-3'>ENDEREÇO</h5>";
    result.innerHTML += "<strong>ENDEREÇO:</strong> "+json.address.street + "<br/>";
    result.innerHTML += "<strong>COMPLEMENTO:</strong> "+json.address.suite + "<br/>";
    result.innerHTML += "<strong>CIDADE:</strong> "+json.address.city + "<br/>";
    result.innerHTML += "<strong>CEP:</strong> "+json.address.zipcode + "<br/>";
    result.innerHTML += "<h5 class='mt-3'>EMPRESA</h5>";
    result.innerHTML += "<strong>EMPRESA:</strong> "+json.company.name + "<br/>";
    result.innerHTML += "<strong>SLOGAN:</strong> "+json.company.catchPhrase + "<br/>";
    result.innerHTML += "<strong>RAMO:</strong> "+json.company.bs + "<br/>";
}

function limpa(){
    result.innerHTML = "";
}