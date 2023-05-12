import { useShoppingCart } from "../context/CartContext";
import { FormatCurrency } from "../utilities/FormatCurrency"

type StoreItemsProps = {
    id: number,
    name: string,
    category: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemsProps) {

    const {getItemQuantity, removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <>
            <div
                className="block rounded-lg bg-white 
                    shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
                    dark:bg-neutral-700"
                >
                <div> 
                    <img
                        className="rounded-t-lg h-56 object-fill w-100"
                        src={imgUrl}
                        alt={name} />
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {name}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">                            
                            {FormatCurrency(price)}
                        </p>
                    </div>

                    <div>
                        {quantity === 0 ? 
                            <div className="flex justify-center items-center">
                                <button
                                    type="button"
                                    className="inline-block rounded bg-primary px-6 
                                    pb-2 pt-2.5 text-xs font-medium uppercase 
                                    leading-normal text-white 
                                    shadow-[0_4px_9px_-4px_#3b71ca] 
                                    transition duration-150 ease-in-out 
                                    hover:bg-primary-600 
                                    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                                    dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"  
                                    onClick={() => increaseCartQuantity(id)}                              
                                >
                                    Add to cart
                                </button>
                            </div>
                            :
                            <div className="">
                                <div className="flex justify-center">
                                    <button 
                                        onClick={() => decreaseCartQuantity(id)}    
                                    >
                                        -
                                    </button>
                                    <span className="px-6">
                                        quantity: {quantity}
                                    </span>
                                    <button
                                        onClick={() => increaseCartQuantity(id)}    
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => removeFromCart(id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}