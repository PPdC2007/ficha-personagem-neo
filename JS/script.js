/*
    Menu Interativo
*/
const botao = document.getElementById("botao")
const menu = document.getElementById("menu")

let condicional = false;

botao.addEventListener("mousedown", () => {
    if (condicional == false) {
        menu.style. display="flex"
        condicional = !condicional
    } else if (condicional == true) {
        menu.style.display="none"
        condicional = !condicional
    }
})

/*
    Inventário
*/
const itens = []
const tbody = document.getElementById("tbody")

const equipamento = document.getElementById("equipamento")
const raridade = document.getElementById("raridade")
const elemento = document.getElementById("elemento")
const habilidade = document.getElementById("habilidade")
const limite = document.getElementById("limite")
const adicionar = document.getElementById("adicionar_equi")

const deletar = document.getElementById("deletar")
const select = document.getElementById("selecao")

function addItem (equipamento, raridade, sinergia, habilidade, limite) {
    var item = {
        equipamento,
        raridade,
        sinergia,
        habilidade,
        limite,
    }

    itens.push(item)
}

adicionar.addEventListener("submit", (event) => {
    event.preventDefault()
    addItem(
        equipamento.value, 
        raridade.value, 
        elemento.value, 
        habilidade.value, 
        limite.value
    )
    tbody.innerText = '';
    select.innerText = '';
    itens.forEach((item) => {
    const tr = tbody.insertRow()
    
    tr.insertCell().textContent = item.equipamento
    tr.insertCell().textContent = item.raridade
    tr.insertCell().textContent = item.sinergia
    tr.insertCell().textContent = item.habilidade
    tr.insertCell().textContent = item.limite

    const option = document.createElement('option')
    option.value = item.equipamento
    option.textContent = item.equipamento
    select.appendChild(option)
})
})
deletar.addEventListener("click", () => {
    const index = itens.findIndex(item => item.equipamento === select.value)
    console.log(index)
    console.log(select.value)

    tbody.innerText = '';
    select.innerText = '';
    if (index != -1) {
        itens.splice(index, 1)
        itens.forEach((item) => {
        const tr = tbody.insertRow()
    
        tr.insertCell().textContent = item.equipamento
        tr.insertCell().textContent = item.raridade
        tr.insertCell().textContent = item.sinergia
        tr.insertCell().textContent = item.habilidade
        tr.insertCell().textContent = item.limite

        const option = document.createElement('option')
        option.value = item.equipamento
        option.textContent = item.equipamento
        select.appendChild(option)
    })
    } else {
        alert("Isso não existe")
    }
})

console.log(itens)
console.log(equipamento)
console.log(raridade)
console.log(elemento)
console.log(habilidade)
console.log(limite)
console.log(adicionar)

/*
    Exp
*/
const nivel = document.getElementById("level")
const xxxx = document.getElementById("numeroXp")
const xp = document.getElementById("exp")
let num = 0
let numXp = "X"

nivel.textContent = num
xxxx.textContent = numXp
xp.addEventListener("submit", (event) => {
    event.preventDefault()
    if (numXp == "XXXXXXXXXXXXXXXXXXXX") {
        num++
        numXp = "X"
    }
    numXp = numXp.concat("X")
    xxxx.textContent = numXp
    nivel.textContent = num
})