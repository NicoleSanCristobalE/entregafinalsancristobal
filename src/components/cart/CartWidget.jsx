import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";

export default function CartWidget() {
    const { totalItems } = useCartContext();

    return (
        <Link to="/cart" className="cart-button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-counter">
                {totalItems > 0 ? totalItems : 0}
            </span>
    </Link>
    );
}