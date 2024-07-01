const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
    rl.question(`Digite sua reclamaça`, (resposta) =>  {
        console.log(`Voce digitou ${resposta}`);
        rl.close
    })
    return nome
}
saudacao('Fillipe');
