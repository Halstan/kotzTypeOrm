import { Router } from 'express';
import { getKnights, getKnight, createKnight, updateKnight, deleteKnight } from '../controller/KnightController';

const router = Router();

router.get('/caballeros', getKnights);
router.get('/caballeros/:id', getKnight);
router.post('/caballeros', createKnight);
router.put('/caballeros/:id', updateKnight);
router.delete('/caballeros/:id', deleteKnight);

export default router;
