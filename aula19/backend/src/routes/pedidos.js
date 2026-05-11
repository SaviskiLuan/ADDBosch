import express from 'express'

const router = express.Router()

const pedidos = []
let idAtual = 1

router.get('/', (req, res) => {
    return res.status(200).json(pedidos)
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    const pedidoEncontrado = pedidos.find(p => p.id === id)

    if (!pedidoEncontrado) {
        return res.status(404).json({
            error: 'Pedido não encontrado'
        })
    }

    return res.status(200).json(pedidoEncontrado)
})

router.post('/', (req, res) => {
    try {
        const { cliente, itens, status } = req.body

        if (!cliente || !itens) {
            return res.status(400).json({
                error: 'Cliente e itens são obrigatórios'
            })
        }

        const total = itens.reduce((acc, item) => {
            return acc + item.preco * item.quantidade
        }, 0)

        const novoPedido = {
            id: idAtual++,
            cliente,
            itens,
            status: status || 'pendente',
            total
        }

        pedidos.push(novoPedido)

        return res.status(201).json(novoPedido)

    } catch (error) {
        return res.status(500).json({
            error: 'Erro ao criar pedido'
        })
    }
})

router.put('/:id', (req, res) => {
    const id = Number(req.params.id)

    const index = pedidos.findIndex(p => p.id === id)

    if (index === -1) {
        return res.status(404).json({
            error: 'Pedido não encontrado'
        })
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
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)

    const index = pedidos.findIndex(p => p.id === id)

    if (index === -1) {
        return res.status(404).json({
            error: 'Pedido não encontrado'
        })
    }

    pedidos.splice(index, 1)

    return res.status(200).json({
        message: 'Pedido deletado com sucesso'
    })
})

export default router