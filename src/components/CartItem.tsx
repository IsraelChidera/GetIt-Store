import Stack from "react-bootstrap/esm/Stack";
import { useShoppingCart } from "../context/CartContext"
import storeItems from "../data/items.json";
import { FormatCurrency } from "../utilities/FormatCurrency";
import Button from "react-bootstrap/esm/Button";
type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);

    if (item == null) {
        return null;
    }

    return <>
        <Stack direction="horizontal" gap={2} className="flex items-center">
            <img
                src={item.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                </div>
                {
                    quantity > 1 && (
                        <span
                            className="text-muted"
                            style={{ fontSize: "0.65rem" }}
                        >
                            x{quantity}
                        </span>
                    )
                }

                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {FormatCurrency(item.price)}
                </div>

                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {FormatCurrency(item.price * quantity)}
                </div>
            </div>



            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                x
            </Button>
        </Stack>
    </>

}