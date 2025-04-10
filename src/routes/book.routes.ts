import express from 'express';
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
} from '../controllers/book.controller';

const router = express.Router();

// Route definitions
router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
