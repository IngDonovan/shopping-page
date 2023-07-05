import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
    const { title, imageUrl, price } = props;

    return (

        <div class="grid grid-cols-5 grid-rows-2 h-20 text-white bg-[#454545] mb-3 rounded-lg">
            <figure class="col-span-1 row-span-2 "> 
                <img className='w-full h-full rounded-lg object-cover bg-no-repeat' src={imageUrl} alt={title} />
            </figure>
            <p class="col-span-3 row-span-1 text-sm font-light overflow-hidden text-ellipsis m-3">
                {title}
            </p>
            <div class="col-start-2 col-span-2 row-start-2  self-center ml-3"> 
                {'Quantity 1'}
            </div>
            <div class="col-start-4 row-span-1 text-lg font-medium self-center"> 
                ${price}
            </div>
            <span class="col-start-5 row-start-1 row-span-2 justify-self-center self-center"> 
                <XMarkIcon className="h-6 w-6 text-white cursor-pointer"/>
            </span>
        </div>
    );
}

export default OrderCard;