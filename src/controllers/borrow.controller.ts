import { Request, Response } from 'express';
import * as BorrowModel from '../models/borrowedBook.model'; // assumes the file is named `borrowedbook.model.ts`

// Borrow a book
export const createBorrow = async (req: Request, res: Response) => {
  const { user_id, book_id } = req.body;

  try {
    await BorrowModel.borrowBook(user_id, book_id);
    res.status(201).json({ message: 'Book borrowed successfully ✅' });
  } catch (error) {
    res.status(500).json({ message: 'Error borrowing book', error });
  }
};

// Get all borrowed books
export const getAllBorrowed = async (_req: Request, res: Response) => {
  try {
    const borrowedBooks = await BorrowModel.getBorrowedBooks();
    res.status(200).json(borrowedBooks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching borrowed books', error });
  }
};

// Return a book
export const returnBook = async (req: Request, res: Response) => {
  const { user_id, book_id } = req.body;

  try {
    await BorrowModel.returnBook(user_id, book_id);
    res.status(200).json({ message: 'Book returned successfully ✅' });
  } catch (error) {
    res.status(500).json({ message: 'Error returning book', error });
  }
};

// Delete a borrow record (if needed separately)
export const deleteBorrow = async (req: Request, res: Response) => {
  const borrowId = req.params.id;

  try {
    await BorrowModel.deleteBorrow(parseInt(borrowId)); // We'll add this in the model below
    res.status(200).json({ message: 'Borrow record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting borrow record', error });
  }
};
