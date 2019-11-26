var html = "";

do{
    var imp = prompt("Digite até que número contar")
}
while(imp <= 1 || imp >= 1000);

for(i=0; i<=imp; i++){
    if(i%3 == 0 ){
        html += "<div class = 'row linharosa'";
    }
    else if(i%3 == 1){
        html += "<div class = 'row linhamarrom'";
    }
    else{
        html += "<div class = 'row linhacinza'";
    }
    if(i%2 != 0){
        html += "<div class='col-sm-12'>" + i + "</div>";
        html += "</div>";
        }
    }
    document.getElementById("impares").innerHTML = html;