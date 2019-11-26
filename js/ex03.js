var salMin = prompt("Digite o salario minimo");
var qtdekw = prompt("Digite  a quantidade de Kw");
var valorkw, valorpg, valordesc;

valorkw = salMin/700;
valorpg = valorkw * qtdekw;
valordesc = valorpg * 0.9;

document.write("Valor de cada Kw: " + valorkw + "<br/>")
document.write("Valor a ser pago: R$" + valorpg + "<br/>")
document.write("Valor com 10% de desconto: R$" + valordesc + "<br/>")