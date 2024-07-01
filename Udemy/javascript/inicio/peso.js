/*
Luiz otavio miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925929529524
Luiz otavio nasceu em 1980
*/
const nome = "Luiz otavio";
const sobrenome = "miranda";
const idade = 30;
const peso = 84;
const altura = 1.80
let imc = peso / ( altura * altura);
let anoNascimento =  2024 - idade
console.log(`Ano de nacimento é ${anoNascimento} e o imc de ${nome} é ${imc}`)
