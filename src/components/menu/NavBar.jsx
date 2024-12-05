import { useEffect, useState } from 'react';
import Brand from './Brand';
import { Link } from 'react-router-dom';
import { alertInfo } from '../../utils/alerts';
import { getCategories } from '../../database/categories';

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
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Brand />
                <div>
                    {categorias.map((category) => (
                    <Link
                        key={category.id}
                        to={`/category/${category.name.toLowerCase()}`}
                        className='btn btn-secondary mx-1'>
                        {category.name}
                    </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}