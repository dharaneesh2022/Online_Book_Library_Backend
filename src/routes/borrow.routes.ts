import { Router } from 'express';
import { handleBorrow, getBorrowedBooks } from '../controllers/borrow.controller';

const router = Router();

router.post('/:id', handleBorrow); // ✅ now this line will work
router.get('/', getBorrowedBooks);

export default router;
