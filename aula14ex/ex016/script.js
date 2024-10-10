function contar() {
    var nInicio = document.getElementById('txtInicio')
    var nFim = document.getElementById('txtFim')
    var nPasso = document.getElementById('txtPasso')
    var res = document.querySelector('div#res')  
    
    if (nInicio.value == '' || nFim.value == '' || nPasso.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(nInicio.value)
        var f = Number(nFim.value)
        var p = Number(nPasso.value)
        var c = i
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {  
            // Contagem crescente 
            while (c <= f) {
                res.innerHTML += ` ${c} &#128073;`
                c += p
            }
        } else {
            // Contagem regreciva
            while (c >= f) {
                res.innerHTML += ` ${c} &#128073;`
                c-= p 
            }
        }
        res.innerHTML += `&#127937;`
    }    
}