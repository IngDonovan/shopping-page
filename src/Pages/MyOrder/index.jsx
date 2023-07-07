import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

import Layout from "../../Components/layout";

function MyOrder() {  
  const { 
    order,
 } = useContext(ShoppingCartContext);
 console.log(order);

  return (
    <>
      <Layout>
        MyOrder
        <div className='flex flex-col w-80'>
          {
              order?.slice(-1)[0].products.map((product) => (
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