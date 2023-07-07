import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        order,
        setOrder,
     } = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setCount(cartProducts.length - 1)
        setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {

        const currentDate = new Date();

        const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
        const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
        const dateTime = `${formattedDate} ${formattedTime}`;

        const orderToAdd = {
            date: dateTime,
            products: cartProducts,
            totalProducts: (cartProducts.length),
            totalPrice: totalPrice(cartProducts),
        }
        setOrder([...order, orderToAdd]);
        console.log(orderToAdd);
        setCartProducts([]);
        setCount(0);
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
            <div className='overflow-y-scroll px-6 flex-1'>
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
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total</span>
                    <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                <button className='w-full py-3 my-3 rounded-lg bg-white text-black font-medium text-xl'
                    onClick={() => handleCheckout()}>
                    Confirm
                </button>
                </Link>
            </div>
        </aside>
    )
};

export default CheckoutSideMenu;