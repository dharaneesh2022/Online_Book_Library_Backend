import db from '../config/db.config';

export const borrowBook = async (userId: number, bookId: number) => {
  await db.execute('INSERT INTO borrowed_books (user_id, book_id, borrow_date) VALUES (?, ?, NOW())', [
    userId, bookId
  ]);
  await db.execute('UPDATE books SET available = false WHERE id = ?', [bookId]);
};

export const returnBook = async (userId: number, bookId: number) => {
  await db.execute('DELETE FROM borrowed_books WHERE user_id = ? AND book_id = ?', [userId, bookId]);
  await db.execute('UPDATE books SET available = true WHERE id = ?', [bookId]);
};

export const deleteBorrow = async (borrowId: number) => {
  await db.execute('DELETE FROM borrowed_books WHERE id = ?', [borrowId]);
};

export const getBorrowedBooks = async () => {
  const [rows] = await db.execute(`
    SELECT b.id, b.title, b.author, u.id as user_id, u.name as user_name
    FROM borrowed_books bb
    JOIN books b ON bb.book_id = b.id
    JOIN users u ON bb.user_id = u.id
  `);
  return rows;
};
