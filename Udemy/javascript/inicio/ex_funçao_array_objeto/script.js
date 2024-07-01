//o que fiz sem olhar o vide
function armazenar() {
    let nome = document.querySelector("#nome").value;
    let sobrenome = document.querySelector('#sobrenome').value;
    let peso = document.querySelector('#peso').value;
    let altura = document.getElementById('altura').value;
    let retorno = document.getElementById('retorno');

    retorno.innerHTML += `<p>veio ${nome} ${sobrenome}, ${peso}Kg, ${altura} de altura</p>`

    function criPessoa(nome, sobrenome, peso, altura){
        return {
            nomeF : nome,
            sobrenomeF : sobrenome,
            pesoF : peso,
            alturaF : altura
            
        };
    };
    let pessoas = [];
    pessoas.push(criPessoa(nome, sobrenome, peso, altura));



}    


//O que fiz dps de olhar

/*



function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura,value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}${sobrenome.value}
        ${peso.value}</p>`;     
    }
        console.log(pessoas);

        form.addEventListener('submit' , recebeEventoForm);


        
    
    

}
meuEscopo();

    */


