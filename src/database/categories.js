import { db } from './connection';
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { alertInfo } from '../utils/alerts';

//obtiene las categorias registradas ordenadas por nombre
export async function getCategories() {
    try{
        const categoriesQuery = query(collection(db, 'categories'), orderBy('name', 'asc'));
        const querySnapshot = await getDocs(categoriesQuery);
        if(!querySnapshot.empty){
            const categoriesList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return categoriesList;
        }else{
            alertInfo('error', 'Listar Categorías', 'No existen categorías registradas');
            return [];
        }
    }catch(error){
        alertInfo('error', 'Listar Categorías', 'Error al cargar categorías: ' + error);
        return [];
    }
}

//obtiene una categoría por su nombre
export async function getCategory(nombre) {
    try{
        const categoriesRef = collection(db, 'categories');
        const categoryQuery = query(categoriesRef, where('name', '==', nombre));
        const querySnapshot = await getDocs(categoryQuery);
       
        if(!querySnapshot.empty){
            const docSnapshot = querySnapshot.docs[0];
            return { id: docSnapshot.id, ...docSnapshot.data() };
        }else{
            alertInfo('error', 'Obtener Categoría', 'No existe la categoría');
            return null;
        }
    }catch(error){
        alertInfo('error', 'Obtener Categoría', 'Error Captcha BD:' + error);
        return null;
    }
}