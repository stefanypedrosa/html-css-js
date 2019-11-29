var x = prompt("digite seu nome completo");
var nome = [ ];
i=0;
var pos = 0;

pos = x.indexOf(" ");
while(pos >= 0){
    nome[i] = x.slice(0, pos);
    x = x.slice(pos+1);
    pos = x.indexOf(" ");
    console.log("Nome [" + i + "] = " + nome[i]);
    i++;
}
nome[i] = x;
console.log("Nome [" + i + "] = " + nome[i]);