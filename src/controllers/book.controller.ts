import { Request, Response } from 'express';
import pool from '../config/db.config';
import { RowDataPacket } from 'mysql2';

// ✅ Get all books
export const getAllBooks = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM books');
  res.json(rows);
};

// ✅ Get book by ID
export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM books WHERE id = ?', [id]);
  res.json(rows[0]); // Now TypeScript knows rows[0] exists
};

// ✅ Add a new book
export const addBook = async (req: Request, res: Response) => {
  const { title, author } = req.body;
  await pool.query('INSERT INTO books (title, author, available) VALUES (?, ?, ?)', [title, author, true]);
  res.status(201).json({ message: 'Book added successfully' });
};

// ✅ Update a book
export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, available } = req.body;
  await pool.query('UPDATE books SET title = ?, author = ?, available = ? WHERE id = ?', [title, author, available, id]);
  res.json({ message: 'Book updated successfully' });
};

// ✅ Delete a book
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query('DELETE FROM books WHERE id = ?', [id]);
  res.json({ message: 'Book deleted successfully' });
};
