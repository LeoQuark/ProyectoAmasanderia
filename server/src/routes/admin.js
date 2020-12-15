import { Router } from "express";
const router = Router();
import { getAdmin, createAdmin, getAdminById, deleteAdmin, updateAdmin } from '../controllers/adminControllers'

router.post('/create', createAdmin)
router.get('/get-all', getAdmin)
router.get('/get/:id', getAdminById)
router.delete('/delete/:id', deleteAdmin)
router.put('/update/:id', updateAdmin)

export default router;
