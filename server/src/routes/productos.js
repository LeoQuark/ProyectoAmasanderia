import { Router } from "express";
const router = Router();
import { createProducto, getProductos, getProductoById, deleteProducto, updateProducto } from '../controllers/productoControllers'

router.post('/create', createProducto)
router.get('/get-all', getProductos)
router.get('/get/:id', getProductoById)
router.delete('/delete/:id', deleteProducto)
router.put('/update/:id', updateProducto)

export default router;