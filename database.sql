-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS book_manager;

-- Usar la base de datos
USE book_manager;

-- Crear la tabla de libros si no existe
CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    isbn VARCHAR(13),
    genre VARCHAR(100),
    cover_image VARCHAR(255),
    publication_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar algunos libros de prueba
INSERT INTO books (title, author, description, isbn, genre, publication_date, cover_image) VALUES
('El Señor de los Anillos', 'J.R.R. Tolkien', 'Una épica historia de fantasía sobre la lucha contra el mal en la Tierra Media', '9788445000656', 'Fantasía', '1954-07-29', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg'),
('Cien años de soledad', 'Gabriel García Márquez', 'La historia de la familia Buendía a través de siete generaciones en Macondo', '9788497592208', 'Realismo mágico', '1967-05-30', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327881361i/320.jpg'),
('1984', 'George Orwell', 'Una distopía que explora temas de vigilancia gubernamental y control social', '9788499890944', 'Ciencia ficción', '1949-06-08', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg'); 