import { Router } from 'express';
import {
  createBorrow,
  getAllBorrowed,
  returnBook,
  deleteBorrow
} from '../controllers/borrow.controller';

const router = Router();

// Borrow a book
router.post('/borrow', createBorrow);

// View all borrowed books
router.get('/borrowed', getAllBorrowed);

// Return a book
router.put('/return', returnBook);

// Delete a borrow record
router.delete('/:id', deleteBorrow);

export default router;
