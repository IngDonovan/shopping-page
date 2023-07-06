import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index";
import { PlusIcon } from '@heroicons/react/24/solid';

const Card = ({data}) => {
    const { 
        count,
        setCount,
        toggleProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
    } = useContext(ShoppingCartContext);
    
    const showProduct = (productDetail) => {
        closeCheckoutSideMenu();
        toggleProductDetail();
        setProductToShow(productDetail);
    }

    const addProductsToCart = (productData) => {
        
        setCount(count + 1);

        const existingProduct = cartProducts.find((product) => product.id === productData.id);

        if (existingProduct) {
            // Si el producto ya existe, aumenta la cantidad
            const updatedProduct = {
              ...existingProduct,
              quantity: (existingProduct.quantity || 1) + (productData.quantity || 1),
              
            };
            const updatedCartProducts = cartProducts.map((product) => {
              if (product.id === productData.id) {
                
                return updatedProduct;
              }
              return product;
            });
            
            setCartProducts(updatedCartProducts);
          } else {
            // Si el producto no existe, agrégalo al carrito
            setCartProducts([...cartProducts, productData]);
          }

        // setCartProducts([...cartProducts, productData]);
        openCheckoutSideMenu();

    }


    return (
        <article className="bg-[#454545] cursor-pointer w-60 h-60 rounded-lg shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)]">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 rounded-lg bg-[#212121]/60 text-xs m-2 px-3 py-0.5">{data.category}</span>
                <img className="w-full h-full object-cover  rounded-lg"
                src={data.image} alt="headphones"
                onClick={() => showProduct(data)}
                />
                <button type="button" className="absolute top-0 right-0 m-2 flex justify-center items-center bg-[#454545] w-7 h-7 rounded-full text-white text-xl shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)]"
                onClick={() => addProductsToCart(data)}
                >
                    <PlusIcon className="h-6 w-6 text-white"/>
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light truncate mx-2 ">{data.title}</span>
                <span className="text-lg font-medium mx-2">${data.price}</span>
            </p>
            
        </article>
    );
};

export default Card;