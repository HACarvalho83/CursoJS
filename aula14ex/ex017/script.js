function tabuada() {
    var num = document.getElementById('txtNum')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1;c <= 10;c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        } 
    }
}