# Book Manager

Un sistema completo de gestión de libros con arquitectura separada de backend (API Node.js) y frontend (PHP).

## Estructura del Proyecto

```
book-manager/
├── api/                    # API Node.js
│   ├── config/             # Configuración
│   │   └── db.js           # Configuración de la base de datos
│   ├── controllers/        # Controladores
│   │   └── bookController.js
│   ├── models/             # Modelos
│   │   └── Book.js
│   ├── routes/             # Rutas
│   │   └── bookRoutes.js
│   ├── package.json        # Dependencias de Node.js
│   └── server.js           # Punto de entrada de la API
├── public/                 # Archivos públicos para la interfaz PHP
│   ├── css/                # Estilos
│   │   └── style.css
│   ├── js/                 # JavaScript del cliente
│   │   └── main.js
│   └── images/             # Imágenes
└── php/                    # Aplicación PHP
    ├── config/             # Configuración
    │   └── database.php
    ├── includes/           # Plantillas y componentes
    │   ├── header.php
    │   └── footer.php
    ├── index.php           # Página principal (listar)
    ├── create.php          # Crear nuevo libro
    ├── edit.php            # Editar libro existente
    ├── delete.php          # Eliminar libro
    └── view.php            # Ver detalles del libro
```

## Requisitos Previos

- Node.js (versión 14 o superior)
- PHP (versión 7.4 o superior)
- MySQL (versión 5.7 o superior)
- Servidor web como Apache o XAMPP

## Instalación y Configuración

### 1. Preparación de la Base de Datos

1. Abra su cliente MySQL (phpMyAdmin, MySQL Workbench, etc.)
2. Ejecute el script SQL proporcionado para crear la base de datos `book_manager` con la tabla `books`

### 2. Configuración del Backend (API Node.js)

1. Instale las dependencias:
   ```bash
   cd api
   npm install
   ```

2. Configure la conexión a la base de datos:
   - Edite el archivo `api/config/db.js` con sus credenciales de MySQL

3. Inicie el servidor:
   ```bash
   npm start
   ```
   - El servidor API estará disponible en http://localhost:3000

### 3. Configuración del Frontend (PHP)

1. Configure la conexión a la base de datos:
   - Edite el archivo `php/config/database.php` con sus credenciales de MySQL
   - Asegúrese de que la constante `API_URL` apunte correctamente a su API Node.js

2. Coloque los archivos en su servidor web:
   - Para XAMPP: En la carpeta `htdocs`
   - Para Apache: Configure el documento raíz adecuadamente

### 4. Acceder a la Aplicación

- Abra su navegador y navegue a:
  - Con XAMPP: http://localhost/book-manager/php/index.php
  - Con otro servidor web: Use la URL correspondiente

## Características

- **Listado de libros** con búsqueda en tiempo real
- **Formularios validados** para crear y editar libros
- **Confirmación de eliminación** con modales
- **Vista detallada** de cada libro
- **Diseño responsivo** para dispositivos móviles y escritorio
- **Mensajes de alerta** para acciones realizadas
- **Previsualización** de imágenes de portada

## Arquitectura

Esta implementación separa claramente las responsabilidades:
- **Node.js (Backend)**: Maneja la lógica de negocio y el acceso a datos a través de una API RESTful
- **PHP (Frontend)**: Se encarga de la presentación y la interacción con el usuario

## Notas de Implementación

- La API implementa operaciones RESTful completas (GET, POST, PUT, DELETE)
- El frontend está diseñado con Bootstrap 5 y CSS personalizado
- Hay validación tanto del lado del cliente como del servidor
- La interfaz utiliza elementos visuales atractivos y una navegación intuitiva
