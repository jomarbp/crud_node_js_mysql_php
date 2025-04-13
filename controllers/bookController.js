// api/controllers/bookController.js
const Book = require('../models/Book');

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener los libros', error: error.message });
  }
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Libro no encontrado' });
    }
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al obtener el libro', error: error.message });
  }
};

// Crear un nuevo libro
exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({ success: true, data: newBook, message: 'Libro creado exitosamente' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear el libro', error: error.message });
  }
};

// Actualizar un libro
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Libro no encontrado' });
    }
    
    const updatedBook = await Book.update(req.params.id, req.body);
    res.status(200).json({ success: true, data: updatedBook, message: 'Libro actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al actualizar el libro', error: error.message });
  }
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Libro no encontrado' });
    }
    
    const deleted = await Book.delete(req.params.id);
    if (deleted) {
      res.status(200).json({ success: true, message: 'Libro eliminado exitosamente' });
    } else {
      res.status(400).json({ success: false, message: 'No se pudo eliminar el libro' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar el libro', error: error.message });
  }
};