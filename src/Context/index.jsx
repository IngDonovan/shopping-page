import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart · Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail · Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen);

     //CheckoutSideMenu · Open/close
     const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);
     const toggleCheckoutSideMenu = () =>  setCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

    //Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart · Add Products to cart
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
                isCheckoutSideMenuOpen,
                setCheckoutSideMenuOpen,
                toggleCheckoutSideMenu,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}