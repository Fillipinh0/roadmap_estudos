function mae() {
    let numero = Number(document.querySelector(`#numero`).value);
    let tab = document.querySelector(`#seltab`);
    if (numero == 0) {
        alert(`Por favor, digite um número!`)
        
    } else {
        let n = Number(numero)
        tab.innerHTML = ''
       for (let c = 1; c <= 10; c++ ) {
            let item = document.createElement(`option`)
            item.textContent = `${n} x ${c} = ${n*c}`
            item.value - `tab${c}`
            tab.appendChild(item)
        }
    }
}