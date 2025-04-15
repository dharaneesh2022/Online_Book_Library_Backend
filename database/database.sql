CREATE DATABASE IF NOT EXISTS library;
USE library;
-- DROP DATABASE IF EXISTS library;-- 
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  available BOOLEAN DEFAULT TRUE
);

CREATE TABLE borrowed_books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_id INT NOT NULL,
  user_id INT NOT NULL,
  borrowed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name) VALUES
  ('Alice'),
  ('Bob'),
  ('Charlie');

INSERT INTO books (title, author, available) VALUES
  ('The Great Gatsby', 'F. Scott Fitzgerald', TRUE),
  ('To Kill a Mockingbird', 'Harper Lee', TRUE),
  ('1984', 'George Orwell', TRUE),
  ('Pride and Prejudice', 'Jane Austen', TRUE),
  ('Moby Dick', 'Herman Melville', TRUE);

CREATE TABLE book_details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_id INT NOT NULL,
  genre VARCHAR(100),
  publication_year INT,
  isbn VARCHAR(20),
  language VARCHAR(50),
  pages INT,
  summary TEXT,
  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);

INSERT INTO book_details (book_id, genre, publication_year, isbn, language, pages, summary) VALUES
  (1, 'Classic', 1925, '9780743273565', 'English', 180, 'A novel set in the Jazz Age that explores themes of decadence, idealism, and excess.'),
  (2, 'Historical Fiction', 1960, '9780061120084', 'English', 281, 'A young girl grows up in the racially charged Deep South and learns about justice and compassion.'),
  (3, 'Dystopian', 1949, '9780451524935', 'English', 328, 'A chilling tale of a totalitarian regime that uses surveillance and propaganda to control society.'),
  (4, 'Romance', 1813, '9780141439518', 'English', 279, 'A witty and romantic novel about the manners and matrimonial machinations among the British gentry.'),
  (5, 'Adventure', 1851, '9781503280786', 'English', 635, 'An epic tale of obsession and revenge as Captain Ahab hunts the great white whale, Moby Dick.');
SELECT * FROM borrowed_books;
