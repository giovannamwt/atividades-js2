// Atividade 01
// Crie um programa que solicita ao usuário um número e, em seguida,
// conta regressivamente até zero, imprimindo cada número no console.
// O programa deve terminar quando atingir zero.


var num = Number(prompt("Digite um número"))
while (isNaN(num)){
var num = Number(prompt(`Digite novamente um número`));}
console.log(`${num}`)
while(num!=0){
    num -= 1;
    console.log(`${num}`);
}


