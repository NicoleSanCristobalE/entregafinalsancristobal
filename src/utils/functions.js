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
        console.log((`${image}`));
        if((`${image}`).size){
            console.log('ingrese');
        }
        return require(`../../${image}`);
    } catch {
        return "/images/sinimagen.png";
    }
};


export const getImagePath = async (fileName) => {
    const basePath = '/images/';
    const defaultImage = `${basePath}sinimagen.png`;
    try {
        const response = await fetch(`${basePath}${fileName}`, { method: 'HEAD' });
        if (response.ok) {
            return `${basePath}${fileName}`;
        }else {
            return defaultImage;
        }
    } catch (error) {
      return defaultImage;
    }
};