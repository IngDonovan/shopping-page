import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/index";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const {count, toggleCheckoutSideMenu, setSearchByCategory, searchByCategory, cartProducts} = useContext(ShoppingCartContext);

    const activeStyle = 'underline underline-offset-4';
    const classlink = ({isActive}) => isActive ? activeStyle : undefined;


    return(
        <nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light text-white bg-black">
            <div className="flex flex-wrap items-center gap-3">
                <NavLink to='/' className="font-bold text-lg">
                ShopING
                </NavLink>
                <ul className="sm:flex items-center gap-3 hidden ">
                    <li>
                        <NavLink to='/' className={classlink}
                            onClick={() => setSearchByCategory('')}>
                        All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/clothes' 
                            className={classlink}
                            onClick={() => setSearchByCategory('cloth')}
                            >
                        Clothes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/electronics' className={classlink}
                            onClick={() => setSearchByCategory('elec')}
                        >
                        Electronics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/furnitures' className={classlink}
                            onClick={() => setSearchByCategory('furnitures')}>
                        Furnitures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/toys' className={classlink}
                            onClick={() => setSearchByCategory('toys')}>
                        Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/others' className={classlink}
                            onClick={() => setSearchByCategory('others')}>
                        Others
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <ul className="lg:flex items-center gap-3 hidden">
                    <li className="text-white/40">
                        email@gmail.com
                    </li>
                    <li>
                        <NavLink to='/my-orders' className={classlink}>
                        My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account' className={classlink}>
                        My Account
                        </NavLink>
                    </li>
                    
                </ul>
                <ul className="flex items-center gap-3">
                    <li>
                        <NavLink to='/sign-in' className={classlink}>
                        Sign In
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShoppingCartIcon className="h-6 w-6 text-white cursor-pointer" 
                        onClick={toggleCheckoutSideMenu}/> 
                        {/* {cartProducts.length} */}
                        {count}
                    </li>
                </ul>
            </div>
            </nav>
    );
};

export default Navbar;