import { db } from './connection';

export async function saveOrder(compra){
    try {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, compra);
        setOrderId(docRef.id);
        clearCart();
    } catch (error) {
        console.error("Error al crear la orden:", error);
    }
}