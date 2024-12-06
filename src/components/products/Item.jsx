import "./../../styles/swal.css"
import './Item.css'
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from "../../database/products";
import { formatPrice, getProductImage } from '../../utils/functions';
import { alertAutoDismiss } from '../../utils/alerts';
import { useCartContext } from "../../context/CartContext";
import { useLoading } from "../../context/LoadingContext";
import ProductTabs from "./ProductTabs";

export default function Item({}) {
    const { id } = useParams();
    const { loading, setLoading } = useLoading();
    const { addToCart } = useCartContext();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        const fetchProduct = async() => {
            try{
                const producto = await getProduct(id);
                console.log(producto);
                setProduct(producto);
            }catch(error){
                alertInfo('error', 'Función producto', 'error: ' + error);
            }
        };
        console.log('loading: ' + loading);;
        fetchProduct().then(() => setLoading(false));
    }, []);
   
    if (!product) {
        return <h2>Producto no encontrado</h2>;
    }

    const handleIncrement = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alertAutoDismiss(`${product.title} ha sido añadido al carrito.`);
    };
    
    return (
        <div className="container mt-5">
            <div className="card mx-auto item-card">
                <div className="row g-1">
                    {/* Contenedor de imagen centrada */}
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img
                            src={getProductImage(product.image)}
                            alt={product.name}
                            className="img-fluid"
                            style={{ maxHeight: "300px", objectFit: "contain" }}
                        />
                    </div>

                    {/* Contenido del producto */}
                    <div className="col-md-8 d-flex flex-column">
                        <div className="card-body flex-grow-1">
                            <h2 className="card-title">{product.title}</h2>
                            <p className="card-text" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                                Precio: ${formatPrice(product.price)}
                            </p>
                            {/* Tabs con scroll en contenido */}
                            <div className="tab-container">
                                <ProductTabs
                                    description={product.description}
                                    features={product.features}
                                    ingredients={product.ingredients}/>
                            </div>
                        </div>

                        {/* Botones al final */}
                        <div className="mt-auto">
                            <br/>
                            {/* <p className="card-text"> */}
                                <h6 className="card-text">Stock disponible: {product.stock}</h6>
                            {/* </p> */}
                            <div className="d-flex justify-content-center mb-2">
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={handleDecrement}
                                    style={{ width: "35px", height: "35px" }}>
                                    -
                                </button>
                                <span className="mx-3 fs-5">{quantity}</span>
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={handleIncrement}
                                    style={{ width: "35px", height: "35px" }}>
                                    +
                                </button>
                            </div>
                            <button className="btn btn-primary w-100 btn-sm" onClick={handleAddToCart}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    );
}