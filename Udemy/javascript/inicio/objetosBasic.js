const humano = {
    nome: 'Otavio',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        //Neste contesto o "this" representa meio q o objeto 
        console.log(`A minha idade atual é ${this.idade} `);
    },
    incrementaIdade() {
        this.idade++;
    }
};

humano.fala();
humano.incrementaIdade();
humano.fala()

// Argumento = é o que é passado para o parametro | paramentro = chave 
function criaPessoa (nomeA, sobrenomeA, idadeA) {
    return {
        nome: nomeA,
        sobrenome: sobrenomeA,
        idade: idadeA
    };
}
const pessoa1 = criaPessoa('Luiz', 'Resende', 17);
const pessoa2 = criaPessoa('Maria', 'Resende', 25);
const pessoa3 = criaPessoa('Gabi', 'Silva', 14);
const pessoa4 = criaPessoa('Fillipe', 'Resende', 16);
console.log(pessoa1);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome);

// So pra mostrar que funcion simplificado
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}
const pessoa11 = criaPessoa('Luiz2', 'Resende2', 17);
const pessoa22 = criaPessoa('Maria2', 'Resende2', 25);
const pessoa33 = criaPessoa('Gabi2', 'Silva2', 14);
const pessoa44 = criaPessoa('Fillipe2', 'Resende2', 16);
console.log(pessoa11);
console.log(pessoa11.nome, pessoa22.nome, pessoa33.nome, pessoa44.nome);

