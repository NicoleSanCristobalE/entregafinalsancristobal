import "./ItemDetail.css"; 
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { formatPrice, getImagePath } from "../../utils/functions";

export default function ItemDetail({product}) {
    const [imagePath, setImagePath] = useState('');
    useEffect(() => {
        const fetchImage = async () => {
            const path = await getImagePath(product.image);
            setImagePath(path);
        };
        fetchImage();
      }, []);
    return(
        <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 item-card">
                <div className="card-img-container">
                    <img className="card-img-top img-fluid" src={imagePath} alt={product.name} />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text card-price">Precio: $ {formatPrice(product.price)}</p>
                </div>
                <Link to={`/item/${product.id}`} className="item-card-footer">
                    Ver producto
                </Link>
            </div>
        </div>
    );
}