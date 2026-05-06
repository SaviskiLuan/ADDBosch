let pedidos = []
let idAtual = 1

export const criarPedido = (req, res) => {
    try {
        const { cliente, itens, status } = req.body

        if (!cliente || !itens) {
            return res.status(400).json({ error: "Cliente e itens são obrigatórios" })
        }

        const total = itens.reduce((acc, item) => {
            return acc + item.preco * item.quantidade
        }, 0)

        const novoPedido = {
            id: idAtual++,
            cliente,
            itens,
            status: status || "pendente",
            total
        }

        pedidos.push(novoPedido)

        return res.status(201).json(novoPedido)
    } catch (error) {
        return res.status(500).json({ error: "Erro ao criar pedido" })
    }
}

export const listarPedidos = (req, res) => {
    return res.status(200).json(pedidos)
}


export const buscarPedidoPorId = (req, res) => {
    const id = Number(req.params.id)

    const pedido = pedidos.find(p => p.id === id)

    if (!pedido) {
        return res.status(404).json({ error: "Pedido não encontrado" })
    }

    return res.status(200).json(pedido)
}

export const atualizarPedido = (req, res) => {
    const id = Number(req.params.id)

    const index = pedidos.findIndex(p => p.id === id)

    if (index === -1) {
        return res.status(404).json({ error: "Pedido não encontrado" })
    }

    const { cliente, itens, status } = req.body

    const total = itens.reduce((acc, item) => {
        return acc + item.preco * item.quantidade
    }, 0)

    const pedidoAtualizado = {
        id,
        cliente,
        itens,
        status,
        total
    }

    pedidos[index] = pedidoAtualizado

    return res.status(200).json(pedidoAtualizado)
}

export const deletarPedido = (req, res) => {
    const id = Number(req.params.id)

    const index = pedidos.findIndex(p => p.id === id)

    if (index === -1) {
        return res.status(404).json({ error: "Pedido não encontrado" })
    }

    pedidos.splice(index, 1)

    return res.status(200).json({ message: "Pedido deletado com sucesso" })
}