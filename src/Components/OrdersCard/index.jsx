import { ChevronRightIcon, CalendarDaysIcon, CurrencyDollarIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const OrdersCard = props => {
    const { totalPrice, totalProducts, date } = props;

    const formatPrice = (price) => {
        return price.toFixed(2); // Limitar a dos decimales
      };
    

    return (

        // <div className="flex justify-between items-center mb-3 rounded-lg border border-black">
        //     <p>
        //         <span>{date}</span>
        //         <span>{totalProducts}</span>
        //         <span>{totalPrice}</span>
        //     </p>
            
        // </div>
        <>
            <div className="flex justify-between items-center mb-3 border rounded-lg p-3">
                <div className="flex items-center justify-between grow gap-2 px-4">
                    <div className="flex gap-1 items-center justify-center">
                        <ShoppingCartIcon className="h-6 w-6 text-white" />
                        <p className="font-normal  text-sm">{`${totalProducts} ${totalProducts === 1 ? "producto" : "productos"}`}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <CurrencyDollarIcon className="h-6 w-6 text-white" />
                        <p className="font-normal text-sm">${totalPrice}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <CalendarDaysIcon className="h-6 w-6 text-white" />
                        <p className="font-normal   text-sm">{date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ChevronRightIcon className="h-6 w-6 text-white" />
                </div>
            </div>
        </>
    );
}

export default OrdersCard;