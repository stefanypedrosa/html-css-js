var num = prompt("Digite o valor para calcular a tabuada")
var htmlgerado = "";
for(i=0; i<=10; i++){
    htmlgerado += "<div class = 'row ";
    if(i%2 == 0){
        htmlgerado +="linhaPar'>";
    }
    else{
        htmlgerado += "linhaImpar'> ";
    }
    htmlgerado += "<div class='col-sm-4'>" + num + "</div>";
    htmlgerado += "<div class='col-sm-4'>" + i + "</div>";
    htmlgerado += "<div class='col-sm-4'>" + num*i + "</div>";
    htmlgerado += "</div>";
}
document.getElementById("tabuada").innerHTML = htmlgerado;