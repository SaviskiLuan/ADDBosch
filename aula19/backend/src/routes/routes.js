import pedidosRoutes from './pedidos.js'

export default function (app) {
    app.use('/pedidos', pedidosRoutes)
}