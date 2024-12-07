import { alertAutoDismiss } from "../../utils/alerts";
import { useCartContext } from "../../context/CartContext";

export default function AddItemButton({ product, quantity }) {
    const { addToCart } = useCartContext();

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alertAutoDismiss(`${product.title} ha sido añadido al carrito.`);
    };

    return (
        <button className="btn btn-primary w-100 btn-sm" onClick={handleAddToCart}>
            Agregar al carrito
        </button>
    );
}