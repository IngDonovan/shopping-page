import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts, date } = props;

    const formatPrice = (price) => {
        return price.toFixed(2); // Limitar a dos decimales
      };
    

    return (

        <div className="flex justify-between items-center mb-3 rounded-lg border border-black">
            <p>
                <span>{date}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
            
        </div>
    );
}

export default OrdersCard;