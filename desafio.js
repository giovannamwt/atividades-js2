let opcao, saldo, saque, deposito
saldo = 1000

while (opcao != 0){
    console.log(`CAIXA ELETRÔNICO`)
    console.log(` 1| Ver Saldo`)
    console.log(` 2| Fazer Saque `)
    console.log(` 3| Fazer Depósito`)
    console.log(` 0| Sair`)
    opcao = Number(prompt("Digite o númemero da opção escolhida:"))
    while (isNaN(opcao) || opcao > 3){
        opcao = Number(prompt("ERRO! Digite o númemero da opção escolhida:"))
    }
    switch (opcao){
        case 0:
            console.log(`Adeus bípede`);
            break;
        case 1:
            console.log(`Seu saldo atual é de R$${saldo},00`);
            break;
        case 2:
            saque = parseFloat(prompt("Digite o valor que deseja sacar:"))
            while (isNaN(saque) || saque < 0){
                saque = parseFloat(prompt("ERRO! Digite um valor válido para sacar:"))}
            while (saque > saldo){
                saque = parseFloat(prompt(`ERRO! Digite um valor abaixo de ${saldo}:`))}
            saldo -= saque;
            console.log(`SAQUE REALIZADO!`);
            console.log(`Seu saldo atual é de R$${saldo},00`);
            break;
        case 3:
            dedposito = parseFloat(prompt("Digite o valor que deseja depositar:"))
            while (isNaN(dedposito) || dedposito < 0){
                dedposito = parseFloat(prompt("ERRO! Digite um valor válido para depositar:"))}
            saldo += dedposito
            console.log(`DEPÓSITO REALIZADO!`)
            console.log(`Seu saldo atual é de R$${saldo},00`);
            break;
    }
}