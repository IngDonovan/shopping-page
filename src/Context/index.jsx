import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart · Increment quantity
    const [count, setCount] = useState(0);

    //Product Detail · Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const toggleProductDetail = () =>  setIsProductDetailOpen(!isProductDetailOpen);

     //CheckoutSideMenu · Open/close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
     const toggleCheckoutSideMenu = () =>  setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
     

    //Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart · Add Products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping Cart · Order
    const [order, setOrder] = useState([]);



         
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
                setIsCheckoutSideMenuOpen,
                toggleCheckoutSideMenu,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}