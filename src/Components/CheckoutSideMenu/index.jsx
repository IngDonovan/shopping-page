import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context/index";
import OrderCard from '../OrderCard';
import { XMarkIcon } from '@heroicons/react/24/solid';


const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useContext(ShoppingCartContext);
    
    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden' } flex flex-col fixed right-0 bg-black/90 rounded-lg w-[360px] h-[calc(100vh-80px)] shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)] z-10`}>
            <div className="flex justify-between items-center text-white p-6">
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
                        quantity={product.quantity}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        />
                ))
            }
            </div>
        </aside>
    )
};

export default CheckoutSideMenu;