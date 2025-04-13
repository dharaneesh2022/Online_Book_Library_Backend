CREATE DATABASE IF NOT EXISTS library;

USE library;

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
  book_id INT,
  borrower_name VARCHAR(255) NOT NULL,
  borrowed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (book_id) REFERENCES books(id)
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
  
  INSERT INTO borrowed_books (book_id, borrower_name) VALUES
  (1, 'Alice'),
  (2, 'Bob');

