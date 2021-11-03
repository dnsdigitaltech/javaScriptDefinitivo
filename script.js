//codicionais, o código será executado de acordo com um condição específica
var hora = 18;

if(hora < 12){
    console.log("Bom dia")
}else if(hora < 18){
    console.log("Boa tarde")
}else{
    console.log("Boa noite")
}

//Fazendo duas confições
if(hora == 12 || hora == 18){
    console.log("Você está na hora do rush")
}