import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../../database/categories";
import { getProducts } from "../../database/products";
import ItemDetail from './ItemDetail';

export default function ItemListContainer() {
    const categoria = useParams().categoria;
    const [category, setCategoria] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchCategory = async() => {
            try{
                let elemento;
                if(categoria){
                    elemento = await getCategory(categoria);
                }
                setCategoria(elemento || {});
            }catch(error){
                alertInfo('error', 'Función categoría', 'error: ' + error);
            }
        };
        fetchCategory();
        
        const fetchProducts = async() => {
            try{
                const productos = await getProducts(categoria);
                setProducts(productos);
            }catch(error){
                alertInfo('error', 'Función productos', 'error: ' + error);
            }
        };
        fetchProducts();
    }, [categoria]);

    return (
        <>
            <br/>
            <h2 className='main-title'>{category.title || 'Todos los productos.'}</h2>
            <br/>
            <div className='container'>
                <div className='row'>
                    {products.map((prod) => 
                        <ItemDetail key={prod.id} product={prod} />
                    )}
                    <br/>
                </div>
            </div>
        </>
    );
}