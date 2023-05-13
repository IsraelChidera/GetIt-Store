import { useShoppingCart } from "../context/CartContext";
import Offcanvas from 'react-bootstrap/Offcanvas';

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

    const { closeCart } = useShoppingCart();

    return <Offcanvas show={isOpen} onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
    </Offcanvas>

}  