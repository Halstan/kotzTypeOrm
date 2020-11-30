import { Router } from 'express';
import { getConstelations, getConstelation, createConstelation, updateConstelation, deleteConstelation } from '../controller/Constelation';

const router = Router();

router.get('/constelaciones', getConstelations);
router.get('/constelaciones/:id', getConstelation);
router.post('/constelaciones', createConstelation);
router.put('/constelaciones/:id', updateConstelation);
router.delete('/constelaciones/:id', deleteConstelation);

export default router;
