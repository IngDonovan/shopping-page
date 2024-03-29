import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context/index';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import Navbar from '../../Components/Navbar';
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: '/', element: <Home />},
    {path: '/shopping-page', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/furnitures', element: <Home />},
    {path: '/toys', element: <Home />},
    {path: '/others', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/*', element: <NotFound />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-out', element: <SignOut />},
  ]);
  return routes;
}

const App = () => {
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
