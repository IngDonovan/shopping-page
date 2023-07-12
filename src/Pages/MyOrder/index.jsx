import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Layout from "../../Components/layout";

function MyOrder() {  
  const { 
    order,
 } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length - 1;



  return (
    <>
      <Layout className= 'bg-[#212121]'>
        <div className="flex justify-center relative w-80 mb-6 mt-3">
          <Link className="absolute left-0" 
          to={'/my-orders'}>
          <ChevronLeftIcon
            className="h-6 w-6 text-white cursor-pointer"
          />
          </Link>
          <h1>MyOrder</h1>
        </div>
        <div className='flex flex-col w-80'>
          {
              order?.[index]?.products.map((product) => (
                  <OrderCard 
                      key={product.id}
                      id={product.id}
                      quantity={product.quantity}
                      title={product.title}
                      imageUrl={product.image}
                      price={product.price}
                      
                      />
              ))
          }
          </div>
      </Layout>
    </>
  )
}
  
  export default MyOrder