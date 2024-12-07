import { alertInfo } from "./alerts";

export function formatPrice(price) {
    if (typeof price !== 'number') {
        alertInfo('error', 'Conversión Fallida', price.toString() + ' no es de tipo númerico');
    }else{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
};

export async function getProductImage(image) {
    const defaultImage = "/images/sinimagen.png";
    try {
        const response = await fetch(`/images/${image}`);
        if (response.ok) {
            return `/images/${image}`;
        } else {
            return defaultImage;
        }
    } catch (error) {
        return defaultImage;
    }
}