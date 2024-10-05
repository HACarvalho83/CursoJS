function contar() {
    var nInicio = document.getElementById('txtInicio')
    var nFim = document.getElementById('txtFim')
    var nPasso = document.getElementById('txtPasso')
    var res = document.querySelector('div#res')
    var c = Number(nInicio.value)
    res.innerHTML = ''   
    if (nInicio.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        if (nPasso.value == 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            nPasso.value = 1
        }   
        while (c <= nFim.value) {
            res.innerHTML += `${c}`
            res.innerHTML += `&#128073;`
            c += Number(nPasso.value)
        }
        res.innerHTML += `&#127937;`
    }    
}