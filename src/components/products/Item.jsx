import "./../../styles/swal.css";
import "./Item.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../database/products";
import { formatPrice, getImagePath } from "../../utils/functions";
import { alertAutoDismiss } from "../../utils/alerts";
import { useLoading } from "../../context/LoadingContext";
import { useCartContext } from "../../context/CartContext";
import ProductTabs from "./ProductTabs";
import ItemQuantitySelector from "./ItemQuantitySelector";


export default function Item() {
    const { id } = useParams();
    const { addToCart } = useCartContext();
    const { setLoading } = useLoading();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [imagePath, setImagePath] = useState('');

    useEffect(() => { 
        const fetchProduct = async () => {
            setLoading(true); // Activar el loading al iniciar la carga
            try {
                const producto = await getProduct(id);
                setProduct(producto);
            } catch (error) {
                alertAutoDismiss("Error al cargar el producto: " + error, "error");
            } 
        };
        fetchProduct();
    }, [id, setLoading]);

    useEffect(() => {
        if (!product || !product.image) return; 
        const fetchImage = async () => {
          try {
            const path = await getImagePath(product.image);
            setImagePath(path);
          } catch (error) {
            alertAutoDismiss("Error al cargar la imagen: " + error, "error");
          }
        };
        fetchImage();
      }, [product, getImagePath, alertAutoDismiss]);
    const handleAddToCart = () => {
        addToCart(product, quantity);
        alertAutoDismiss(`${product.title} ha sido añadido al carrito.`, "success");
    };

    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }
        return (
            <div className="container mt-5">
                <div className="card mx-auto item-card">
                    <div className="row g-1">
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img
                                src={imagePath}
                                alt={product.name}
                                className="img-fluid"
                                style={{ maxHeight: "300px", objectFit: "contain" }}/>
                        </div>
                        <div className="col-md-8 d-flex flex-column">
                            <div className="card-body flex-grow-1">
                                <h2 className="card-title">{product.title}</h2>
                                <p className="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                                    Precio: ${formatPrice(product.price)}
                                </p>
                                <div className="tab-container">
                                    <ProductTabs
                                        description={product.description}
                                        features={product.features}
                                        ingredients={product.ingredients}/>
                                </div>
                            </div>
                            <br/>
                            <div className="mt-auto">
                                <h5 className="card-text">Stock disponible: {product.stock}</h5>
                                <ItemQuantitySelector
                                    product={product}
                                    quantity={quantity}
                                    onQuantityChange={setQuantity}/>
                                <button
                                    className="btn btn-primary w-100 btn-sm mt-2"
                                    onClick={handleAddToCart}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}