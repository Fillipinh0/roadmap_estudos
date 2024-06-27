function enviar() {
    let inicio = Number(document.querySelector('#inicio').value);
    let fim = Number(document.querySelector('#fim').value);
    let passo = Number(document.querySelector('#passo').value);
    let retorno = document.querySelector('#retorno');
    let contador = inicio
    let numeros = ''


    if (passo <= 0) {
        alert('Não é possível contar se o passo for menor ou igual a 0. O valor do passo será alterado para 1.');
        passo = 1;
        contador = inicio; // Resetar o contador
        for (contador <= fim; contador += passo;) {
            numeros += contador + ' &#x1F44D; ';
        }
        retorno.innerHTML = `<p>${numeros} &#x1F3C1;</p>`;
    } else if(inicio < fim) {
        for (; contador <= fim; contador += passo) {
            numeros += contador + '&#x1F44D;';

        }  retorno.innerHTML = `<p>${numeros} &#x1F3C1;</p>`
    }  else {
        retorno.innerHTML = `<p>Não é possivel contar!</p>`
    }

} 

  










/*else if(passo <= 0) {
        alert(`Não é possivel conta se o passo for menor que 1... vamos adcionar o valor do passo como 1`)
        var passo = 1;
        while (contador <= fim) {
            numeros += contador + `joinha`;
            contador += passo;
        }*/
    

    /*
    var contador = inicio;
    var numeros = ''; // String para armazenar todos os números

    // Loop para construir a string com todos os números
    while (contador <= fim) {
        numeros += contador + ' joinha '; // Adiciona o número seguido de 'joinha' à string
        contador += passo;
    }

    // Atribui a string com todos os números ao conteúdo da div 'retorno'
    retorno.innerHTML = `<p>${numeros}</p>`;
    */
