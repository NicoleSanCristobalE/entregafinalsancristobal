import { db } from './connection';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const saveOrder = async (order) => {
    try {
        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, {
            ...order,
            date: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        alertInfo('error', 'Guardar orden de compra', 'Error al intentar guardar:' + error);
        return null;
    }
};