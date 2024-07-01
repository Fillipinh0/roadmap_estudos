//Aula de valores primitivos e valores por referencia
/*
Primitivos (imutaveis) - string, number, boolean, underfined,
null (bigint, symbol) - Valores copiados
*/
let num = 3
let num2 = num
console.log(num, num2)
num = 7
console.log(num, num2) 

//Referência (mutável) - array, ovject, function -- Passado por refêrencia

let a = [1, 2, 3];
let b = a;
console.log(a, b);
// os valores sao meio que linkados... entao se 'a' for alterado 'b' tb sera  
a.push(4); 
console.log(a, b);

b.pop();
console.log(a,b);

//da pra fazer 
let primario = [1, 2, 3, 6];
let secundario = [...primario]
console.log(primario, secundario)
primario.pop()
console.log(primario, secundario)
//como da pra ver no codigo a cima se voce usar [..array] ele copia o valor em vez de linkar