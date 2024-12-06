import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
// import { useLoading } from "../../context/LoadingContext";

export default function CheckoutView() {
    const { cart, totalPrice, clearCart } = useCartContext();
    const [buyer, setBuyer] = useState({ name: "", phone: "", email: "", confirmEmail: "" });
    const [orderId, setOrderId] = useState(null);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyer({ ...buyer, [name]: value });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();

        // Validar que los correos electrónicos coincidan
        if (buyer.email !== buyer.confirmEmail) {
            alert("Los correos electrónicos no coinciden.");
            return;
        }

        // Convertir teléfono a número
        const phoneNumber = parseInt(buyer.phone, 10);

        if (isNaN(phoneNumber)) {
            alert("El teléfono debe ser un número válido.");
            return;
        }

        // Preparar la orden
        const order = {
            buyer: {
                name: buyer.name,
                phone: phoneNumber, // Guardar como número
                email: buyer.email,
            },
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price, // Mantener como número
            })),
            total: totalPrice, // Mantener como número
            date: serverTimestamp(),
        };

        try {
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }finally {
        }
    };

    if (orderId) {
        return (
            <div className="container text-center mt-5">
                <h2>¡Compra realizada con éxito!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <Link to="/" className="btn btn-primary mt-3">Volver a la tienda</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h2>No tienes productos en el carrito</h2>
                <Link to="/" className="btn btn-primary mt-3">Ir a comprar</Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            <form onSubmit={handleCheckout}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={buyer.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={buyer.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={buyer.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmEmail" className="form-label">Confirmar correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={buyer.confirmEmail}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Resumen de compra</h4>
                        <ul className="list-group">
                            {cart.map((item) => (
                                <li key={item.id} className="list-group-item">
                                    {item.title} - {item.quantity} x ${item.price}
                                </li>
                            ))}
                        </ul>
                        <h5 className="mt-3">Total: ${totalPrice}</h5>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-3 w-100">Realizar compra</button>
            </form>
        </div>
    );
}