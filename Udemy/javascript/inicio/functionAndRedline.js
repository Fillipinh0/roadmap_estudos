const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
    rl.question(`Digite sua reclamaçao: `, (resposta) =>  {
        console.log(`Voce digitou: ${resposta}`);
        rl.close();
    });
    return nome;
}
saudacao('Fillipe');
// Tentativa falaha de usar o redline pela primeira vez
