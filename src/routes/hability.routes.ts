import { Router } from 'express';
import { getHabilities, getHability, createHability, updateHability, deleteHability } from '../controller/HabilityController';

const router = Router();

router.get('/habilidades', getHabilities);
router.get('/habilidades/:id', getHability);
router.post('/habilidades', createHability);
router.put('/habilidades/:id', updateHability);
router.delete('/habilidades/:id', deleteHability);

export default router;
