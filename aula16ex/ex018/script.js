let lista = []
function adicionar() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('imostrador')
    let item = document.createElement('option')
    let n = Number(num.value)
    let analise = document.querySelector('div#analise')
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        window.alert(`Valor inválido ou já encontrado na lista`)
    } else {
        lista.push(n)
        item.text = `Valor ${n} adicionado.`
        //item.value =`tab${n}`
        tab.appendChild(item)

        analise.innerHTML = `${lista}`
    }
}