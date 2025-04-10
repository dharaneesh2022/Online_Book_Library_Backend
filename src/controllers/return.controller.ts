import { Request, Response } from 'express';
import pool from '../config/db.config';

export const returnBook = async (req: Request, res: Response) => {
  const { user_id, book_id } = req.body;
  try {
    await pool.execute('INSERT INTO returned_books (user_id, book_id) VALUES (?, ?)', [user_id, book_id]);
    await pool.execute('UPDATE books SET available = true WHERE id = ?', [book_id]);
    res.status(201).json({ message: 'Book returned successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to return book', error });
  }
};

export const getAllReturned = async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(`
      SELECT rb.id, u.name as user, b.title as book, rb.returned_at
      FROM returned_books rb
      JOIN users u ON rb.user_id = u.id
      JOIN books b ON rb.book_id = b.id
    `);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch returned books', error });
  }
};
