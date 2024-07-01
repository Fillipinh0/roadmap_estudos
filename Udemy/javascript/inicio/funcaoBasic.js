function soma(x = "Envie ", y = "O parametro"){
    const resultado = x + y;
    return resultado; // na função nada que estiver abaixo de return é executado
}
console.log(soma(2, 2));
console.log(soma())

//funçao anonima
const raiz = function (n) { 
    return n ** 0.5;
};

console.log(raiz(9))