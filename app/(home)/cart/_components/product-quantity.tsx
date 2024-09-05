import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity, removeFromCart, clearCart } from "@/store/cart-slice";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";

type Props = {
    id: string | any;
    quantity: number;
}

export const ProductQuantity = ({
    id,
    quantity
}: Props) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (itemId: string, value: number) => {
        if (!isNaN(value) && value > 0) {
            dispatch(updateCartQuantity({ id: itemId, quantity: value }));
        }
    };

    return (
        <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => handleQuantityChange(id, parseInt(e.target.value, 10))}
            className="w-20 h-10 text-center border-t border-b border-gray-300"
        />
    )
}

