
// Atividade 05
// Faça um programa que peça para 5 pessoas a sua idade, ao final o
// programa devera verificar se a média de idade da turma varia entre 0 e 25,
// 26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa,
// conforme a média calculada.

let idades = []
var cont = 0
var soma = 0
while(idades.length < 2){
    cont += 1
    var idade = Number(prompt(`Insira a idade da ${cont}° pessoa`))
    idades.push(idade)
    soma += idade
}
var media = soma/2

if (media < 26){
    console.log(`MÉDIA DE IDADE ${media} ANOS: a turma é jovem`)
}
else if (media < 60){
    console.log(`MÉDIA DE IDADE ${media} ANOS: a turma é adulta`)
}
else{
    console.log(`MÉDIA DE IDADE ${media} ANOS: a turma é idosa`)
}
