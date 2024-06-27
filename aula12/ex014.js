var agora = new Date()
var diaSemana = agora.getDay()
/* Lembrando que o Computador sempre começa a contar do zero
   entao o priemiro elemento é representado pelo numero 0(zero)
EX:
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/

switch(diaSemana) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sabado`)
        break
    default:
        console.log(`[ERRO] Dia invalido!`)
} 