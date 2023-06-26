import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4';
    const classlink = ({isActive}) => isActive ? activeStyle : undefined;


    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light text-white bg-black">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg">
                    <NavLink to='/'>
                        ShopING
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className = {classlink}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        className = {classlink}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className = {classlink}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        className = {classlink}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                        className = {classlink}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        className = {classlink}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-white/40">
                    email@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className = {classlink}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className = {classlink}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className = {classlink}>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0 
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;