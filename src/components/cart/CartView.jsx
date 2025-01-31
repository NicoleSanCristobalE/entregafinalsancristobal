import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { alertAutoDismiss } from "../../utils/alerts";
import { formatPrice, getImagePath } from "../../utils/functions";
import ItemQuantitySelector from "../products/ItemQuantitySelector";
import "./../../styles/tab.css";
import "./../../styles/table.css";

export default function CartView() {
    const [imagePaths, setImagePaths] = useState({}); 
    const { cart, totalPrice, removeFromCart, clearCart, addToCart } = useCartContext();

    // Carga las imágenes del carrito al montar o actualizar
    useEffect(() => {
        const loadImages = async () => {
            const paths = {};
            for (const item of cart) {
                if (item.image) {
                    try {
                        const path = await getImagePath(item.image);
                        paths[item.id] = path;
                    } catch (error) {
                        alertAutoDismiss(`Error al cargar la imagen del producto ${item.title}: ${error}`, "error");
                    }
                }
            }
            setImagePaths(paths); // Almacena las rutas de todas las imágenes
        };
        loadImages();
    }, [cart, alertAutoDismiss]);

    if (cart.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary mt-3">Ir a comprar</Link>
                <br /><br />
            </div>
        );
    }

    const handleQuantityChange = (product, newQuantity) => {
        const difference = newQuantity - product.quantity;
        if (difference !== 0) {
            addToCart(product, difference); // Agregar o reducir cantidad automáticamente
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h2>Carrito de compras</h2>
                    <table className="table table-hover table-fixed align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="d-flex align-items-center product-column">
                                        <img
                                            src={imagePaths[item.id] || "/images/default.png"} // Usa la ruta cargada o una predeterminada
                                            alt={item.title}
                                            style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                        />
                                        <div>
                                            <p className="mb-0">{item.title}</p>
                                        </div>
                                    </td>
                                    <td>${formatPrice(item.price)}</td>
                                    <td>
                                        <ItemQuantitySelector
                                            product={item}
                                            quantity={item.quantity}
                                            onQuantityChange={(newQuantity) => handleQuantityChange(item, newQuantity)}
                                        />
                                    </td>
                                    <td>${formatPrice(item.price * item.quantity)}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => removeFromCart(item.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3" className="text-start text-primary h3">Total</td>
                                <td className="text-primary h3">
                                    ${formatPrice(totalPrice)}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={clearCart}
                                    >
                                        Vaciar carrito
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/checkout" className="btn btn-primary mt-3">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
}