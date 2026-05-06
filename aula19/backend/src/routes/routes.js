import pedido from './pedido.js'

export default function (app) {
    app.use('/pedidos', pedido)
}