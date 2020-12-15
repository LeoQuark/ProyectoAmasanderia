import { Router } from "express";
const router = Router();
import { getVentas, createVenta, getVentaById, deleteVenta, updateVenta } from '../controllers/ventaControllers'

router.post('/create', createVenta)
router.get('/get-all', getVentas)
router.get('/get/:id', getVentaById)
router.delete('/delete/:id', deleteVenta)
router.put('/update/:id', updateVenta)

export default router;

