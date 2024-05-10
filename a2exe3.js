// Atividade 03
// Peça ao usuário para inserir números continuamente e imprima o
// somatório dos números inseridos. O programa deve continuar executando
// até que o usuário insira zero.

var num = 1
var soma = 0

while (num != 0){
    num = parseFloat(prompt("Insira um número ou digite 0 para parar:"))
    while (isNaN(num)){
        num =number(prompt(`Insira um número ou digite 0 para parar:`))
    }
        soma += num
        console.log(`A soma de seus números até agora é: ${soma}`)
}