import { useState, useEffect } from "react";

export default function ItemQuantitySelector({ product, quantity, onQuantityChange }) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    useEffect(() => {
        setCurrentQuantity(quantity); // Actualiza cuando el carrito cambia
    }, [quantity]);

    const handleIncrement = () => {
        if (currentQuantity < product.stock) {
            const newQuantity = currentQuantity + 1;
            setCurrentQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const handleDecrement = () => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="d-flex justify-content-center mb-2">
            <button
                className="btn btn-sm btn-secondary"
                onClick={handleDecrement}
                style={{ width: "35px", height: "35px" }}
            >
                -
            </button>
            <span className="mx-3 fs-5">{currentQuantity}</span>
            <button
                className="btn btn-sm btn-secondary"
                onClick={handleIncrement}
                style={{ width: "35px", height: "35px" }}
            >
                +
            </button>
        </div>
    );
}


// otra opcion
// import { useState } from "react";
// import AddItemButton from "./AddItemButton";

// export default function ItemQuantitySelector({ product }) {
//     const [quantity, setQuantity] = useState(1);

//     const handleIncrement = () => {
//         if (quantity < product.stock) {
//             setQuantity(quantity + 1);
//         }
//     };

//     const handleDecrement = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     return (
//         <div className="d-flex flex-column align-items-center">
//             <div className="d-flex justify-content-center mb-2">
//                 <button
//                     className="btn btn-sm btn-secondary"
//                     onClick={handleDecrement}
//                     style={{ width: "35px", height: "35px" }}
//                 >
//                     -
//                 </button>
//                 <span className="mx-3 fs-5">{quantity}</span>
//                 <button
//                     className="btn btn-sm btn-secondary"
//                     onClick={handleIncrement}
//                     style={{ width: "35px", height: "35px" }}
//                 >
//                     +
//                 </button>
//             </div>
//             <AddItemButton product={product} quantity={quantity} />
//         </div>
//     );
// }