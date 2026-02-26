const botao = document.getElementById('botao')

function adicionar_lista(){
    const input = document.getElementById('caixa')
    const valor = input.value

    if (valor === ''){
        alert('Digite algo')
        return
    }

    const li = document.createElement('li')
    li.textContent = valor

    const lista = document.getElementById('lista')
    lista.appendChild(li)

    const botao_remover = document.createElement('button')
    botao_remover.textContent = 'Remover'
    li.appendChild(botao_remover)

    botao_remover.addEventListener('click', function() {
        lista.removeChild(li);
    })

    input.value = ''
}

botao.addEventListener('click', adicionar_lista)
