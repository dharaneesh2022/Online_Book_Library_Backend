import { db } from '../config/db';

export const borrowBook = (bookId: number, borrowerName: string) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO borrowed_books (book_id, borrower_name) VALUES (?, ?)',
      [bookId, borrowerName],
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
};

export const getAllBorrowedBooks = () => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT bb.id, b.title, b.author, bb.borrower_name, bb.borrowed_at
       FROM borrowed_books bb
       JOIN books b ON bb.book_id = b.id`,
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
};
