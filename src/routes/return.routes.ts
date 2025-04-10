import { Router } from 'express';
import { returnBook, getAllReturned } from '../controllers/return.controller';

const router = Router();

router.post('/', returnBook);
router.get('/', getAllReturned);

export default router;
