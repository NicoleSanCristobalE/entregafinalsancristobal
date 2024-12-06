🛍️ Tienda Lulú - E-commerce App

Tienda Lulú es una aplicación de e-commerce desarrollada en React, que permite a los usuarios navegar por categorías de productos, ver detalles, gestionar un carrito de compras y realizar pedidos de manera intuitiva. La aplicación utiliza Firebase como backend para la gestión de datos.

🌟 Características implementadas
Navegación y estructura
    Barra de navegación fija con diseño responsivo:
        Colores femeninos (pasteles) y botones interactivos.
        El carrito de compras incluye un contador que muestra el número de productos.
        Los botones de navegación están centrados y cuentan con un efecto hover.

Gestión de productos
    Visualización de productos por categorías:
        Ruta dinámica /category/:categoria.
        Mensaje de error si no hay productos disponibles en una categoría.
    Detalles del producto:
        Tabs dinámicos para descripción, características e ingredientes.
        Comportamiento fijo en tamaño del tab con scroll para texto largo.
        Botones de selección de cantidad (incrementar/decrementar).
        Muestra imágenes predeterminadas si falta la imagen de un producto.

Carrito de compras
    Visualización del carrito en tiempo real:
        Productos listados con cantidad, precio unitario y subtotal.
        Botón para eliminar productos individuales.
        Botón para vaciar el carrito.
    Diseño del carrito:
        Alineación de los elementos (imagen, cantidad, subtotal).
        El total del carrito está destacado en una fila aparte.

Proceso de compra
    Validación de datos del cliente:
        Nombre, teléfono y email.
        Verificación de coincidencia entre los campos de email.
    Orden de compra:
        Guarda en Firebase los datos del cliente, productos seleccionados y el total.
        Genera un número de orden que se muestra al cliente.

Indicador de carga (Loading)
    Implementación de un Loading Context:
        Muestra un logo animado con puntos de carga mientras los datos se obtienen de Firebase.
        El loading aparece de forma global y desaparece automáticamente al completar las peticiones.


🛠️ Tecnologías utilizadas
Frontend
    React:
        Hooks (useState, useEffect, useContext).
        React Router DOM para rutas dinámicas.
    Bootstrap para estilos y diseño responsivo.
    FontAwesome y Bootstrap Icons para iconografía.

Backend
    Firebase:
        Firestore: Almacenamiento de productos, categorías y órdenes.

⚙️ Estructura del proyecto
📁 src
├── 📁 components
│   ├── 📁 cart
│   │   ├── CartView.jsx
│   │   └── CartWidget.jsx
│   ├── 📁 checkout
│   │   └── CheckoutView.jsx
│   ├── 📁 footer
│   │   └── Footer.jsx
│   ├── 📁 loading
│   │   └── Loading.jsx
│   │   └── Loading.css
│   ├── 📁 menu
│   │   ├── Brand.jsx
│   │   └── NavBar.jsx
│   │   └── NavBar.css
│   ├── 📁 products
│   │   ├── Item.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── ProductTabs.jsx
│   │   └── Tab.jsx
├── 📁 context
│   ├── CartContext.jsx
│   └── LoadingContext.jsx
│   └── LoadingContext.css
├── 📁 database
│   ├── categories.js
│   └── orders.js
│   └── products.js
├── 📁 styles
│   ├── Tab.css
│   ├── swal.css
│   └── CartWidget.css
├── App.jsx
├── App.css
├── main.jsx
└── index.html


👩‍💻 Autor

Este proyecto fue desarrollado como proyecto final de Curso React de Coderhouse


Nicole San Cristóbal Escobar
GitHub: NicoleSanCristobalE