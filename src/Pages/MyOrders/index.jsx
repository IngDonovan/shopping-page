import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";


function MyOrders() {
  const { 
    order,
    setOrder,
 } = useContext(ShoppingCartContext);

    return (
      <>
        <Layout>
          <div className="flex justify-center relative w-80 my-3">
            <h1>MyOrders</h1>
          </div>
          
          {
            order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`} >
            <OrdersCard 
            date={order.date}
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts} />
            </Link>
            ))
          }
          </Layout>
      </>
    )
  }
  
  export default MyOrders