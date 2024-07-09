function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar, preencha todos os campos!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('O "PASSO" tem que ser maior que 0')
            p = res.innerHTML = 'Impossível contar, tente novamente!'
        }
        else if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}` //COLOCANDO EMOJI EM JS» `\u{código do emoji}` 
            }
        } else {
            // CONTAGEM REGRESSIVA
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}` //COLOCANDO EMOJI EM JS» `\u{código do emoji}`
            }
        }
        res.innerHTML += `FIM!\u{1f3c1}` //COLOCANDO EMOJI EM JS» `\u{código do emoji}`
    }
}
