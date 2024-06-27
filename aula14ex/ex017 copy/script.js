function mae() {
    let numero = Number(document.querySelector('#numero').value)
    let retornoT = document.querySelector('#retornoT')
    if(numero == '' || isNaN(numero)) {
        alert(`Nao é possivel gerar a tabuada sem um numero`)
    } else {
        for(let c = 1; c <= 10; c++) {
            let resultado = numero * c
            let option = document.createElement('option')
            option.textContent = `${numero} x ${c} = ${resultado}`
            retornoT.appendChild(option)
        }

    }
}
