import { useEffect, useState } from 'react';
import Brand from './Brand';
import CartWidget from "../cart/CartWidget";
import { Link } from 'react-router-dom';
import { alertInfo } from '../../utils/alerts';
import { getCategories } from '../../database/categories';
import "./NavBar.css";


export default function NavBar() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchCategories = async() => {
            try{
                const lista = await getCategories();
                if(Array.isArray(lista)){
                    setCategorias(lista);
                }else{
                    alertInfo('error', 'Función categorías', 'lista viene vacía');
                }
            }catch(error){
                alertInfo('error', 'Función categorías', 'error: ' + error);
            }
        };
        fetchCategories();
    }, []);


    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container">
                <Brand />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {categorias.map((category) => (
                            <li key={category.id} className="nav-item">
                                <Link
                                    key={category.id}
                                    to={`/category/${category.name.toLowerCase()}`}
                                    className='nav-link'>
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ms-auto d-flex align-items-center">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}