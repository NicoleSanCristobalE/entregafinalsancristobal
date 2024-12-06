import "./../../styles/tab.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { formatPrice, getProductImage } from "../../utils/functions";

export default function CartView() {
    const { cart, totalPrice, removeFromCart, addToCart, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary mt-3">Ir a comprar</Link>
                <br/>
                <br/>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <h2>Carrito de compras</h2>
                    <br/>
                    <table className="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Subtotal</th>
                                <th scope="col" className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="d-flex align-items-center">
                                        <img
                                            src={getProductImage(item.image)}
                                            alt={item.title}
                                            style={{ width: "50px", height: "50px", marginRight: "10px" }}/>
                                        <div>
                                            <p className="mb-0">{item.title}</p>
                                        </div>
                                    </td>
                                    <td className="text-center">${formatPrice(item.price)}</td>
                                    <td className="text-center">
                                        {item.quantity}
                                    </td>
                                    <td className="text-center">${formatPrice(item.price * item.quantity)}</td>
                                    <td className="text-center">
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
                                <td className="text-center text-primary h3">
                                    ${formatPrice(totalPrice)}
                                </td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={clearCart}>
                                        Vaciar carrito
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                </div>
                <Link to="/checkout" className="btn btn-primary">
                    Finalizar Compra
                </Link>
            </div>
        </div>
    );
}
