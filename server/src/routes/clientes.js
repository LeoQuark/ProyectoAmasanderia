import { Router } from "express";
const router = Router();
import { createCliente, getClientes, getClienteById, deleteCliente, updateCliente } from '../controllers/clienteControllers'

router.post('/create', createCliente)
router.get('/get-all', getClientes)
router.get('/get/:id', getClienteById)
router.delete('/delete/:id', deleteCliente)
router.put('/update/:id', updateCliente)

export default router;