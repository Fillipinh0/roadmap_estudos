function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById(`txtano`);
    var res = document.querySelector(`div#res`);
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert(`verifique os dadose  tente novamente`);
    } else {
        var fsex = document.getElementsByName(`radsex`);
        var idade = ano - Number(fAno.value);
        var genero = ``;
        var img = document.createElement(`img`);
        img.setAttribute(`id`, `foto`);

        if (fsex[0].checked) {
            genero = `Homem`;
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute(`src`, `bebeM.png`)
            } else if (idade < 21) {
                // Jovem
                img.setAttribute(`src`, `jovemM.png`)
            } else if (idade < 50 ) {
                // Adulto
                img.setAttribute(`src`, `adultoM.png`)
            } else {
                //Idoso
                img.setAttribute(`src`, `idoso.png`)
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`;
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute(`src`, `bebeF.png`)
            } else if (idade < 21) {
                // Jovem
                img.setAttribute(`src`, `jovemF.png`)
            } else if (idade < 50 ) {
                // Adulto
                img.setAttribute(`src`, `adultoF.png`)
            } else {
                //Idoso
                img.setAttribute(`src`, `idosa.png`)
            }
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img)
    document.body.style.background = `pink`
}