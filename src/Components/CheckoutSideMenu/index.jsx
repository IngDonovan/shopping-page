import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context/index";
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';
import { XMarkIcon } from '@heroicons/react/24/solid';


const CheckoutSideMenu = () => {
    const { 
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu, 
        cartProducts, 
        setCartProducts, 
        setCount,
     } = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setCount(cartProducts.length - 1)
        setCartProducts(filteredProducts)
    }
    
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden' } flex flex-col fixed right-0 bg-black/90 text-white rounded-lg w-[360px] h-[calc(100vh-80px)] shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)] z-10`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-mediunm text-xl">
                    My Order
                </h2>
                <span className="cursor-pointer">
                    <XMarkIcon 
                    className="h-6 w-6 text-white" 
                    onClick={closeCheckoutSideMenu}
                    />
                </span>
            </div>
            <div className='overflow-y-scroll px-6'>
            {
                cartProducts.map((product) => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        quantity={product.quantity}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                        />
                ))
            }
            </div>
            <div className='px-6'>
                <p>
                    <span>Total</span>
                    <span>${totalPrice(cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
};

export default CheckoutSideMenu;