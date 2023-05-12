import { useShoppingCart } from "../context/CartContext"

export function ShoppingCart(){

    const { closeCart} = useShoppingCart();

    return(        
        <>
            <section >
                <div>
                    <h1>
                        ShoppingCart
                    </h1>

                    <button onClick={closeCart}>
                        X
                    </button>
                </div>
            </section>
        </>
    )
}  