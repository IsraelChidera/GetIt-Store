import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartContext = {
    openCart: () => void,
    closeCart: () => void,
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id: number) => void,
    decreaseCartQuantity: (id: number) => void,
    removeFromCart: (id: number) => void
    cartQuantity: number,
    cartItems: CartItem[]
}

type CartItem = {
    id: number,
    quantity: number
}

const CartContext = createContext({} as CartContext);

export function useShoppingCart() {
    return useContext(CartContext);
}

export function ShoppingCartProvider({ children }:
    ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "cart", []
    );

    function getItemQuantity(id: number): number {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(cartItems => {
            if (cartItems.find(items => items.id === id) == null) {
                return [...cartItems, { id, quantity: 1 }]
            }
            else {
                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(cartItems => {
            if (cartItems.find(item => item.id === id)?.quantity === 1) {
                return cartItems.filter(item => item.id !== id);
            } else {
                return cartItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item;
                    }
                })
            }
        });
    }

    function removeFromCart(id: number) {
        setCartItems(cartItems => {
            return cartItems.filter(item => item.id !== id);
        })
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const openCart = () => setIsOpen(true);

    const closeCart = () => setIsOpen(false);

    return (
        <CartContext.Provider value={{ openCart, closeCart, cartQuantity, cartItems, getItemQuantity, removeFromCart, increaseCartQuantity, decreaseCartQuantity }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </CartContext.Provider>
    )
}