var hora =  25
console.log(`agora é ${hora} horas`)
if( hora > 0 && hora < 6) {
    console.log(`agora esta de madrugada`)
} else if (hora < 12) {
    console.log(`Agora esta de manha`)
} else if (hora < 18) {
    console.log(`Agora esta de tarde`)
} else if (hora <= 24) {
    console.log(`Agora esta de noite`)
} else {
    console.log(`A pornto, agora o dia tem mais de 24 ne?`)
}
