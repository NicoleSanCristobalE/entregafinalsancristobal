// import React, { createContext, useContext, useState } from "react";

// const LoadingContext = createContext();
// export const useLoading = () => useContext(LoadingContext);


// export function LoadingProvider({ children }) {
//     console.log('children: ' + children);
//     const [loading, setLoading] = useState(true);
//     const value = { loading, setLoading };
//     return (
//         <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
//     );
// }
import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();
export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }) {
    const [loading, setLoading] = useState(true); // El estado inicial es true

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}