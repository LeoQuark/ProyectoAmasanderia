import { Router } from "express";
const router = Router();
import { getUsuarios, createUsuario, getUsuarioById, deleteUsuario, updateUsuario } from '../controllers/usuarioControllers'

router.post('/create', createUsuario)
router.get('/get-all', getUsuarios)
router.get('/get/:id', getUsuarioById)
router.delete('/delete/:id', deleteUsuario)
router.put('/update/:id', updateUsuario)

export default router;

