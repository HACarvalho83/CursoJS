function tabuada() {
    var txtNum = document.getElementById('txtNum')
    var resultado = ''
    res.innerHTML = ''
    if (txtNum.value == '') {
        alert('Por favor, digite um número!')
    } else {
        for(var c = 1;c <= 10;c++) {
            resultado = Number(txtNum.value) * c
             //res.appendChild(`<option>${txtNum} x ${c} = ${resultado}</option>`)
             res.innerHTML += `<p>${txtNum.value} x ${c} = ${resultado}<p/>`
             
         }
    }
    
}