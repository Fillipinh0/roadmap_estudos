function adicionarValor() {
    let retorno = document.getElementById('retorno')
    let valores1 = []
    let valor1 = Number(document.getElementById("valor1").value)
    let select = document.getElementById("select")
    if (isNaN(valor1) || valor1 < 1 || valor1 > 100) {
        alert("Algo deu errado. Confira se foi adicionado um número e se ele está entre 1 a 100")
    } else {
        valores1.push(valor1)
        let option = document.createElement("option")
        option.text = `Valor ${valor1} adicionado.`
        select.add(option) 
    }
}

function calcular() {
    let retorno = document.getElementById('retorno')
    let valores1 = []
    let valorElements = document.getElementById("select").getElementsByTagName('option');

    for (let i = 0; i < valorElements.length; i++) {
        valores1.push(Number(valorElements[i].innerText.split(' ')[1]));
    }

    valores1.sort(function(a, b) {
        return a - b;
    });

    let quantidadeV = valores1.length
    let maiorV = valores1[quantidadeV - 1]
    let menorV = valores1[0]
    let somaArray = valores1.reduce((a, b) => a + b, 0)
    let mediaV = somaArray / quantidadeV

    retorno.innerHTML = `<p>Ao todo temos ${quantidadeV} números cadastrados.</p>`;
    retorno.innerHTML += `<p>O maior valor informado foi ${maiorV}.</p>`;
    retorno.innerHTML += `<p>O menor valor informado foi ${menorV}.</p>`;
    retorno.innerHTML += `<p>Somando todos os valores, temos ${somaArray}.</p>`;
    retorno.innerHTML += `<p>A média dos valores é ${mediaV}.</p>`;
}

/*function adicionarValor() {
    let retorno = document.getElementById('retorno')
    let soma = 0
    let valores1 = []
    let valor1 = Number(document.getElementById("valor1").value)
    let select = document.getElementById("select")
    if (isNaN(valor1) || valor1 < 1 || valor1 > 100) {
        alert("Algo deu errado. Confira se foi adicionado um numero e se ele esta entre 1 a 100")
    } else {
        valores1.push(valor1)
        let option = document.createElement("option")
        option.text = `Valor ${valor1} adcionado.`
        select.add(option) 
    }
    
}
function calcular() {
        valores1.sort()
        let quantidadeV = valores1.length
        let maiorV = valores1[valores1.length - 1]
        let menorV = valores1[valores1.length - 0]
        var somaArray = 0

        for(c = 0; c < valores1.length; c++) {
            somaArray += valor1[c]
        }

        let mediaV = somaArray / quantidadeV

        retorno.innerHTML = `<p>Ao todo temos ${quantidadeV} números cadastrados.</p>`;
        retorno.innerHTML += `<p>O maior valor informado foi ${maiorV}.</p>`;
        retorno.innerHTML += `<p>O menor valor informado foi ${menorV}.</p>`;
        retorno.innerHTML += `<p>Somando todos os valores, temos ${somaArray}.</p>`;
        retorno.innerHTML += `<p>A média dos valores é ${mediaV}.</p>`;
        
    }
*/