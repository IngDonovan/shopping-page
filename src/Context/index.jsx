import { createContext, useState, useEffect } from "react";
import { ApiUrl } from "../Api";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

    //Get Products
    const [items, setItems] = useState(null);

    //filtered Items
    const [filteredItems, setFilteredItems] = useState('');

    //Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    useEffect(() => {
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
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()) )
    };
    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle))
    }, [items, searchByTitle]);
    // console.log(filteredItems);

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
                filteredItems,
                setFilteredItems,
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