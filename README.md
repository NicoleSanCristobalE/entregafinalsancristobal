🛍️ Tienda Lulú - E-commerce App

Tienda Lulú es una tienda de productos capilares. 
Se crea aplicación de e-commerce especializada desarrollada en React, que permite a los usuarios navegar por categorías de productos, ver detalles, gestionar un carrito de compras y realizar pedidos de manera intuitiva. La aplicación utiliza Firebase como backend para la gestión de datos.

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
    SweetAlert2 para notificaciones de errores y de que producto fue agregado al carrito.
    En codigo se encuentra loading, pero no pude implementarlo, quedo el codigo pero no funcional.

Backend
    Firebase:
        Firestore: Almacenamiento de productos, categorías y órdenes.

👩‍💻 Autor

Este proyecto fue desarrollado como proyecto final de Curso React de Coderhouse

No pude realizar la grabación del sitio, pero pude realizar tardiamente la publicación de este

https://courageous-moxie-9b46eb.netlify.app/

Nicole San Cristóbal Escobar
GitHub: NicoleSanCristobalE