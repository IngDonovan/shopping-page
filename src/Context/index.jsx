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
    //Get Products By Category
    const [searchByCategory, setSearchByCategory] = useState(null);
    
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

    // const filteredItemsByTitle = (items, searchByTitle) => {
    //     return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()))
    // }
    
    // const filteredItemsByCategory = (items, searchByCategory) => {
    //     return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLocaleLowerCase()))
    // }

    // const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    //     if (searchType === 'BY_TITLE') {
    //      return filteredItemsByTitle(items, searchByTitle)
    // }

    // if (searchType === 'BY_CATEGORY') {
    //     return filteredItemsByCategory(items, searchByCategory)
    // }

    // if (searchType === 'BY_TITLE_AND_CATEGORY') {
    //     return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()))
    // }

    // if (!searchType) {
    //     return items
    // }
    // }

    // useEffect(() => {
    // if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    // if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    // if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    // if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    // }, [items, searchByTitle, searchByCategory])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()) )
    };
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLocaleLowerCase()) )
    };
    const filteredItemsByCatAndTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLocaleLowerCase()) )
    };

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle));
        if (searchByCategory) setFilteredItems(filteredItemsByCategory(items,searchByCategory));
        if (searchByTitle && searchByCategory) setFilteredItems(filteredItemsByCatAndTitle(items,searchByTitle));

    }, [items, searchByTitle, searchByCategory]);
    // console.log(filteredItems);
    // console.log('Title',searchByTitle);
    // console.log('Category',searchByCategory);


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
                searchByCategory,
                setSearchByCategory,
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