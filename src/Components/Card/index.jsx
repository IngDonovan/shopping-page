import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/intex";

const Card = ({data}) => {
    const context = useContext(ShoppingCartContext);
    return (
        <article className="bg-[#454545] cursor-pointer w-56 h-60 rounded-lg shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)]">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 rounded-lg bg-[#212121]/60 text-xs m-2 px-3 py-0.5">{data.category}</span>
                <img className="w-full h-full object-cover  rounded-lg"
                src={data.image} alt="headphones" />
                <button type="button" className="absolute top-0 right-0 m-2 flex justify-center items-center bg-[#454545] w-7 h-7 rounded-full text-white text-xl shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)]"
                onClick={() => context.setCount(context.count + 1)}
                >
                    +
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light mx-2 ">{data.title}</span>
                <span className="text-lg font-medium mx-2">${data.price}</span>
            </p>
            
        </article>
    );
};

export default Card;