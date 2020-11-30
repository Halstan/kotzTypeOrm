import { Router } from 'express';
import { getArmors, getArmor, createArmor, updateArmor, deleteArmor } from '../controller/ArmorController';

const router = Router();

router.get('/armaduras', getArmors);
router.get('/armaduras/:id', getArmor);
router.post('/armaduras', createArmor);
router.put('/armaduras/:id', updateArmor);
router.delete('/armaduras/:id', deleteArmor);

export default router;
