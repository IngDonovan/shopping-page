import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
    const { id, quantity, title, imageUrl, price, handleDelete } = props;
    let renderXMarkIcon;

    const formatPrice = (price) => {
        return price.toFixed(2); // Limitar a dos decimales
      };
    
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className="h-6 w-6 text-white cursor-pointer"
        onClick={() => handleDelete(id)}/>;
    }

    return (

        <div className="grid grid-cols-5 grid-rows-2 h-20 text-white bg-[#454545] mb-3 rounded-lg">
            <figure className="col-span-1 row-span-2 "> 
                <img className='w-full h-full rounded-lg object-cover bg-no-repeat' src={imageUrl} alt={title} />
            </figure>
            <p className="col-span-3 row-span-1 text-sm font-light overflow-hidden text-ellipsis m-3">
                {title}
            </p>
            <div className="col-start-2 col-span-2 row-start-2 self-center ml-3"> 
                <span className='flex'>
                    <ShoppingCartIcon className="h-5 w-5 text-white cursor-pointer" />
                    {quantity||1}
                </span>
            </div>
            <div className="col-start-4 row-span-1 text-lg font-medium self-center"> 
                ${formatPrice(price*(quantity||1))}
            </div>
            <span className="col-start-5 row-start-1 row-span-2 justify-self-center self-center"> 
                {/* <XMarkIcon className="h-6 w-6 text-white cursor-pointer"
                    onClick={() => handleDelete(id)}
                /> */}
                {renderXMarkIcon}
            </span>
        </div>
    );
}

export default OrderCard;