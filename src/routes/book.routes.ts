import { Router } from 'express';
import { handleBorrow, getBorrowedBooks } from '../controllers/borrow.controller';

const router = Router();

router.post('/:id', handleBorrow);
router.get('/', getBorrowedBooks);

export default router;
