import express from 'express';
import controllersFuncionario from '../controllers/funcionarioController.js';
import { validateFuncionario } from '../middlewares/validateFuncionario.js';

const router = express.Router();

router.get('/', controllersFuncionario.listarFuncionarios);
router.post('/', validateFuncionario, controllersFuncionario.cadastrarFuncionario);
router.put('/:id', controllersFuncionario.atualizarFuncionario);
router.delete('/:id', controllersFuncionario.deletarFuncionario);
router.get('/setor/:setor', controllersFuncionario.listarPorSetor);

export default router;