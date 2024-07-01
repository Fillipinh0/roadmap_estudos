//               0       1         2     esses numeros sao os indices do array
let alunos = ['Luiz', "Maria", 'João']

console.log(alunos);
alunos.push("Guilherme");
console.log(alunos);
alunos.unshift('Fábio');
console.log(alunos);
//
alunos.shift();
console.log(alunos);
let retirado = alunos.pop();
console.log(`O array ficou com [${alunos}] e foi retirado '${retirado}'`);
alunos.push("Jaimes");
alunos.push("Enzo Miguel");
console.log(alunos.slice(0,3)); // o variavel.slice meio q percorre o array ate um numero anterior do selecionado
console.log(alunos.slice(0, -2));// neste caso ele vai removendo de traz para frente 
delete alunos[1]; // Ele delete o conteudo do array mas o indice fica la vazio
console.log(alunos);
alunos[1] = "Zeze";
console.log(alunos);

// descobrir se maria esta no array

/*for (i = 0 ; i < 10 ; i++) {
    if (alunos[i] === "Maria") {
        console.log(`Maria esta presente no array e ce encontra no indice ${i} `);
        break;
    } 
}
*/