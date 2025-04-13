// api/models/Book.js
const db = require('../config/db');

class Book {
  static async findAll() {
    try {
      const [rows] = await db.query('SELECT * FROM books ORDER BY created_at DESC');
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async create(book) {
    try {
      const [result] = await db.query(
        'INSERT INTO books (title, author, isbn, genre, publication_date, description, cover_image) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [book.title, book.author, book.isbn, book.genre, book.publication_date, book.description, book.cover_image]
      );
      return { id: result.insertId, ...book };
    } catch (error) {
      throw error;
    }
  }

  static async update(id, book) {
    try {
      await db.query(
        'UPDATE books SET title = ?, author = ?, isbn = ?, genre = ?, publication_date = ?, description = ?, cover_image = ? WHERE id = ?',
        [book.title, book.author, book.isbn, book.genre, book.publication_date, book.description, book.cover_image, id]
      );
      return { id, ...book };
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const [result] = await db.query('DELETE FROM books WHERE id = ?', [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Book;