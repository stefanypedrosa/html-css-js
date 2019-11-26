var ddd = prompt("Digite o seu DDD");

    switch (ddd){
    case 61:
        document.getElementById("resultado").innerHTML = ("Brasilia");
    break;
    case 71:
        document.getElementById("resultado").innerHTML = ("Salvador");
    break;
    case 11:
        document.getElementById("resultado").innerHTML = ("São Paulo");
    break;
    case 21:
        document.getElementById("resultado").innerHTML = (" Rio de Janeiro");
    break;
    case 32:
        document.getElementById("resultado").innerHTML = ("Juiz de Fora");
    break;
    case 19:
        document.getElementById("resultado").innerHTML = ("Campinas");
    break;
    case 27:
        document.getElementById("resultado").innerHTML = ("Vitoria");
    break;
    case 31:
        document.getElementById("resultado").innerHTML = ("Belo Horizonte");
    default:
        document.getElementById("resultado").innerHTML = ("DDD INVÁLIDO");
    }