var botao = document.getElementById('enviar')

function enviar_fotos(){
    var input_link = document.getElementById('caixa_link')
    var link = input_link.value
    var input_msg = document.getElementById('caixa_msg')
    var msg = input_msg.value
    var espace = document.getElementById('espace')

    espace.appendChild(link)
    espace.appendChild(msg)    
}

botao.addEventListener('click', enviar_fotos)