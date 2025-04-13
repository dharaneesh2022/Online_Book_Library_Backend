import { db } from '../config/db';

export const getAllBooks = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM books', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

export const getBookById = (id: number) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM books WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      else resolve((results as any[])[0]);

    });
  });
};

export const updateBookAvailability = (id: number, available: boolean) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE books SET available = ? WHERE id = ?', [available, id], (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
