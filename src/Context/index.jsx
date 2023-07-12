import { createContext, useState, useEffect } from "react";
import { ApiUrl } from "../Api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    //Get Products
    const [items, setItems] = useState(null);
    //Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(searchByTitle);

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products?')
        //   .then(response => response.json())
        //   .then(data => setItems(data))
        const fetchData = async () => {
        try {
            const response = await fetch(`${ApiUrl}/products?`)
            const data = await response.json()
            setItems(data)
        } catch (error) {
            console.error(`Oh no, ocurrió un error: ${error}`);
        }
        }
        fetchData()
    }, [])

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
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
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