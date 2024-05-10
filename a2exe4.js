// Atividade 04

// Faça um programa que leia um nome de usuário e a sua senha e não
// aceite a senha igual ao nome do usuário, mostrando uma mensagem de
// erro e voltando a pedir as informações.




var nome = prompt("Insira seu nome:")
var senha = prompt("Insira sua senha:")
    while (nome === senha){    
        nome = prompt("ERRO! Insira seu nome:")
        senha = prompt("ERRO! Insira uma senha diferente do seu nome:")
    }
console.log(`Seja bem vindo(a) ${nome}, sua senha atual é: ${senha}`)
