import db from '../config/db.config';

export const getAllBooks = async () => {
  const [rows] = await db.execute('SELECT * FROM books');
  return rows;
};

export const getBookById = async (id: number) => {
  const [rows] = await db.execute('SELECT * FROM books WHERE id = ?', [id]);
  return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
};

export const addBook = async (title: string, author: string, available: boolean) => {
  const [result]: any = await db.execute(
    'INSERT INTO books (title, author, available) VALUES (?, ?, ?)',
    [title, author, available]
  );
  return result.insertId;
};

export const updateBook = async (id: number, title: string, author: string, available: boolean) => {
  await db.execute('UPDATE books SET title = ?, author = ?, available = ? WHERE id = ?', [
    title, author, available, id
  ]);
};

export const deleteBook = async (id: number) => {
  await db.execute('DELETE FROM books WHERE id = ?', [id]);
};
