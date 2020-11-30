import { Router } from 'express';
import { getGods, createGod, getGod, updateGod, deleteGod } from '../controller/GodController';

const router = Router();

router.get('/dioses', getGods);
router.get('/dioses/:id', getGod);
router.post('/dioses', createGod);
router.put('/dioses/:id', updateGod);
router.delete('/dioses/:id', deleteGod);

export default router;
