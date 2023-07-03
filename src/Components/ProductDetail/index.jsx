import { useContext } from 'react';
import { ShoppingCartContext } from "../../Context/index";
import { XMarkIcon } from '@heroicons/react/24/solid';


const ProductDetail = () => {
    const { isProductDetailOpen, toggleProductDetail, productToShow } = useContext(ShoppingCartContext);

    
    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden' } flex flex-col fixed right-0 bg-black/90 rounded-lg w-[360px] h-[calc(100vh-80px)] shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)]`}>
            <div className="flex justify-between items-center text-white p-6">
                <h2 className="font-mediunm text-xl">
                    Detail
                </h2>
                <span className="cursor-pointer">
                    <XMarkIcon 
                    className="h-6 w-6 text-white" 
                    onClick={toggleProductDetail}
                    />
                </span>
            </div>
            <div className='overflow-y-scroll'>
                <figure className='px-6 h-1/2'>
                    <img className='w-full h-full rounded-lg object-contain '
                    src={productToShow.image} 
                    alt={productToShow.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className="self-end text-xl font-semibold">${productToShow.price}</span>
                    <span className="text-lg font-bold my-4">{productToShow.title}</span>
                    <span>{productToShow.description}</span>
                </p>
            </div>
        </aside>
    )
};

export default ProductDetail;

