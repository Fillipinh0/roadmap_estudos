let num = Number(prompt("Digite um numero"));
let retorno = document.querySelector("#retorno");

retorno.innerHTML += `<h1>O seu numero é ${num} </h1>`
retorno.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`; // "Math.sqrt(Var)" mostra a raiz quadrada 
retorno.innerHTML += `<P>55 é inteiro: ${Number.isInteger(num)} </p>`; // "Number.isInteger(Variavel)" verifica se o numero é inteiro
retorno.innerHTML += `É NaN: ${Number.isNaN(num)}`
retorno.innerHTML += `<p>Arredonda para baixo: ${Math.floor} </p>`;
retorno.innerHTML += `<p>Arredonda para cima: ${Math.ceil} </p>`;
retorno.innerHTML += `<p>com duas casas decimais: ${num.toFixed(2)} </p>`