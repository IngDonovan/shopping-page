const Card = () => {
    return (
        <article className="bg-[#212121] cursor-pointer w-56 h-60 rounded-lg shadow-[15px_15px_30px_rgba(25,25,25),-15px_-15px_30px_rgba(60,60,60)]">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 rounded-lg bg-[#212121]/60 text-xs m-2 px-3 py-0.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg"
                src="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                <button type="button" className="absolute top-0 right-0 m-2 flex justify-center items-center bg-[#212121] w-6 h-6 rounded-full text-white p-1">+</button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light mx-2">Headphones</span>
                <span className="text-lg font-medium mx-2">$300</span>
            </p>
            
        </article>
    );
};

export default Card;