import { db } from './connection';
import { doc, getDoc, getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { alertInfo } from '../utils/alerts';

//obtiene los productos asociados a una categoría, en caso de no existir
//una categoría, lista todos los productos
export async function getProducts(categoria) {
    try{
        let productsQuery;
        if(categoria){
            productsQuery = query(collection(db, 'products'), where('category', '==', categoria));
        }else{
            productsQuery = query(collection(db, 'products'));
        }
        const querySnapshot = await getDocs(productsQuery);
        if(querySnapshot.size !== 0){
            const productsList = querySnapshot.docs.map((docu) => {
                return {
                  id: docu.id,
                  ...docu.data(),
                };
              });
        return productsList;
        }else{
            alertInfo('error', 'Listar Productos', 'No existen productos registrados');
            return [];
        }
    }catch(error){
        alertInfo('error', 'Listar Productos', 'Error al cargar productos:' + error);
        return [];
    }
}

//obtiene un producto por su id
export async function getProduct(id) {
    let producto = {};
    try{
        const productQuery = doc(db, 'products', id);
        const querySnapshot = await getDoc(productQuery);
        if(querySnapshot.exists()){
            producto = { id: querySnapshot.id, ...querySnapshot.data() };
        }else{
            alertInfo('error', 'Obtener Producto', 'No existe el producto');
        }
    }catch(error){
        alertInfo('error', 'Obtener Producto', 'Error al cargar producto:' + error);
    }
    return producto;
}