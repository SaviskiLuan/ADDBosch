const pedidos = []

export const getPedido = (req, res) => {
    return res.status(200).json(pedidos)
}

export const realizarPedido = (req, res) => {
    try {
        const { id, cliente, itens, status, total } = req.body

        const novoPedido = {
            id,
            cliente,
            itens,
            status,
            total
        }

        pedidos.push(novoPedido)

        return res.status(201).json({ response: "Pedido registrado" })

    } catch (error) {
        return res.status(500).json({ response: "Erro ao registrar" })
    }
}