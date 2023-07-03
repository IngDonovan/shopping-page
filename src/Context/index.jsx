import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen);

    const [productToShow, setProductToShow] = useState({});

    const [cartProducts, setCartProducts] = useState({});
    
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
                cartProducts,
                setCartProducts,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}