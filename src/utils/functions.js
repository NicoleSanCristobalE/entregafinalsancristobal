import { alertInfo } from "./alerts";

export function formatPrice(price) {
    if (typeof price !== 'number') {
        alertInfo('error', 'Conversión Fallida', price.toString() + ' no es de tipo númerico');
    }else{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
};

export function getProductImage (image) {
    try {
        const path = `${image}`;
        console.log(path);
        return require(`/images/${image}`);
    } catch {
        return "/images/sinimagen.png";
    }
};