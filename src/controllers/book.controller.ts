import { Request, Response } from 'express';
import { getAllBooks, getBookById } from '../models/book.model';

export const fetchBooks = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

export const fetchBookById = async (req: Request, res: Response) => {
  try {
    const book = await getBookById(Number(req.params.id));
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Book not found' });
  }
};
