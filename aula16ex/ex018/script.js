function jaExiste(lista1, num1) {
    if (lista1.indexOf(num1) == -1) {
        return false
    } else {
        return true
    }
}

function compararNumeros(a, b) {
    return a - b;
}

function soma(lista1) {

}

let lista = []

function adicionar() { 
    let num = document.getElementById('inum')
    let tab = document.getElementById('imostrador')
    let item = document.createElement('option')
    let n = Number(num.value)
    let existe = jaExiste(lista, n)
    if (num.value.length == 0 || num.value < 1 || num.value > 100 || existe == true) {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    } else {
        lista.push(n)
        item.text = `Valor ${n} adicionado.`
        //item.value =`tab${n}`
        tab.appendChild(item)
        num.value = ''
    }
}

function finalizar() {
    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        lista.sort(compararNumeros)

        let analise = document.querySelector('div#iAnalise')
        
        analise.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`

        analise.innerHTML += `<p>O maior valor informado foi ${lista[lista.length-1]}.</p>`

        analise.innerHTML += `<p>O menor valor informado foi ${lista[0]}</p>`

        analise.innerHTML += `${lista}`
    }
}