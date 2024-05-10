// Atividade 02
// Desenvolva um programa que solicita ao usuário que insira suas
// notas de uma série de disciplinas. O programa deve calcular e
// imprimir a média das notas, o usuário pode continuar adicionando
// notas até decidir parar.

var nota = 0
let notas = []
var soma = 0

while (nota != -1){
    nota = parseFloat(prompt("Insira sua nota ou digite -1 para parar:"))
    while (isNaN(nota)){
        nota =notaber(prompt(`Insira sua nota ou digite -1 para parar:`))}
        soma += nota
        notas.push(nota)
}
soma += 1
notas.pop()
var media = soma/ notas.length
console.log(`suas notas: ${notas}`)
console.log(`média: ${media}`)