import React, { createContext, useContext, useState } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Hook para usar el contexto
export const useCartContext = () => useContext(CartContext);

// Proveedor del contexto
export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Total de items en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Total del precio del carrito
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Agregar un producto al carrito
    const addToCart = (product, quantity) => {
        if (!product.id) {
            console.error("El producto no tiene un campo 'id':", product);
            return;
        }

        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    // Eliminar un producto del carrito
    const removeFromCart = (id) => {
        if (!id) {
            console.error("El 'id' proporcionado es inválido:", id);
            return;
        }
        setCart(cart.filter((item) => item.id !== id));
    };

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Valor que se comparte en el contexto
    const value = {
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
    };

    // Proveer el contexto
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
