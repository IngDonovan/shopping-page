const Card = () => {
    return (
        <article className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute">Electronics</span>
                <img src="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                <button type="button" className="absolute top-0 right-0 flex justify-center items-center bg-red w-6 h-6 roundend-full" >+</button>
            </figure>
            <p>
                <span>Headphones</span>
                <span>$300</span>
            </p>
            
        </article>
    );
};

export default Card;