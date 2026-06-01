import express from 'express';
import produtoController from '../controllers/controllerProduto.js';

const router = express.Router();

router.get('/', produtoController.getProdutos);

router.post('/', produtoController.criarProduto);

export default router;

