import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    // const openProductDetail = () => setIsProductDetailOpen(true);
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen);

    const [productToShow, setProductToShow] = useState({});

    return(
        <ShoppingCartContext.Provider 
            value={{
                count,
                setCount,
                isProductDetailOpen,
                setIsProductDetailOpen,
                toggleProductDetail,
                productToShow,
                setProductToShow,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}