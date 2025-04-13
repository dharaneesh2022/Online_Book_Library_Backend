import { RequestHandler } from 'express';
import { borrowBook, getAllBorrowedBooks } from '../models/borrowed.model';

export const handleBorrow: RequestHandler = async (req, res): Promise<void> => {
  try {
    const bookId = parseInt(req.params.id);
    const { userId } = req.body;

    const result = await borrowBook(bookId, userId);
    res.status(200).json({ message: 'Book borrowed successfully', result });
  } catch (error) {
    console.error('Error borrowing book:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getBorrowedBooks: RequestHandler = async (req, res): Promise<void> => {
  try {
    const books = await getAllBorrowedBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching borrowed books:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
