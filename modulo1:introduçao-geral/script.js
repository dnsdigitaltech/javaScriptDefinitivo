//definições de variaveis diferentes a partir de 2015 com o ECMAScript
var nome = "Davi" //enviada em HOINSTING, ou seja no escopo geral da sua tela, consegue usar essa variavel, inclusiver com var global
console.log(window.nome) //pode usar como window.nome, pois foi transferida para o escopo geral do site, podendo ser acessar em qualquer lugar

//usando o let
let nome2 = "Davi" //essa variavel let fica disponivel apenas no escopo do código, apenas na area especifica do código que fica disponível, se tentar acessar de outro local não fica disponível, muito menos com o windo
console.log(window.nome2)

//outro exemplo com condicional
var nome3 = "Davi"

if(nome3 == "Davi"){
    var idade = 90;
}

console.log(idade)

/*if(nome3 == "Davi"){
    let idade2 = 90;//variavel não definida, pois so funciona dentro da caixa do código
}
console.log(idade2)*/

if(nome3 == "Davi"){
    let idade3 = 90;//este funciona pois esta na mesma caixa
    console.log(idade3)
}

//const é uma variavel de valor constante, uma vez que recebeu um valor não pode ser redefinido
const nome4 = "Davi"
nome4 = "Davi2"

console.log(nome4)