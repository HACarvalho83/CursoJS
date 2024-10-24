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
    let soma = 0
    for(let pos in lista1) {
        soma += lista1[pos]
    }
    return soma
}

let lista = []
let analise = document.querySelector('div#iAnalise')

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
        analise.innerHTML = ''
        num.focus()
    }
}

function finalizar() {
    if (lista.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        lista.sort(compararNumeros)

        
        analise.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`

        analise.innerHTML += `<p>O maior valor informado foi ${lista[lista.length-1]}.</p>`

        analise.innerHTML += `<p>O menor valor informado foi ${lista[0]}.</p>`

        analise.innerHTML += `<p>Somando todos os valores, temos ${soma(lista)}.</p>`

        analise.innerHTML += `<p>A média dos valores digitados é ${soma(lista) / lista.length}.</p>`
    }
}