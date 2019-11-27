var html = "";
do{
    var num = prompt("Digite um numero limite");
}while(num<5 || num >2000);

for(i=1; i<=num; i++)
{
    if(i%2==0)
    {
        html += (i+ "^2 = " + i*i + "<br/>") 
    }
}
document.getElementById("quadrado").innerHTML = html;