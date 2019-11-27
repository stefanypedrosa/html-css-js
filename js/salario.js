/*Faça um programa que leia o salário de uma pessoa e calcule o imposto devido,
segundo as regras:
a. se o salário é menor que $1000, então a pessoa está isenta de impostos
b. se o salário está entre $1000 e $2500, desconte 12,5% do salário
c. se o salário está entre $2500 e $5000, desconte 25% do salário
d. se o salário for maior que $5000, desconte um valor fixo de $1300.*/

function calcularimposto(){
    var salBruto = document.getElementById("salario").value;
    var imposto;
    if(salBruto <= 1000){
        imposto = 0;
    }
    else if(salBruto<=2500){
        imposto = salBruto * 0.125;
    }
    else if(salBruto<=5000){
        imposto = 1500 * 0.125;
        salBruto = salBruto - 1500;
        imposto += salBruto * 0.25;
    }
    else{
        imposto = 1300;
    }
    return imposto;
}

function salLiq(){
    var salBruto = document.getElementById("salario").value;
    var imposto = calcularimposto();
    var salLiq = salBruto - imposto;
    document.getElementById("resultado").innerHTML = "Valor do imposto devido: R$" + imposto.toFixed(2) + "<br/> Valor do salario total: R$" + salLiq.toFixed(2) + "<br/>";
}