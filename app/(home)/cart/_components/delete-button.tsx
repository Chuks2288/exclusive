import { Trash } from "lucide-react";
import { updateCartQuantity, removeFromCart, clearCart } from "@/store/cart-slice";
import { useConfirm } from "@/hooks/use-confirm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { Button } from "@/components/ui/button";

type Props = {
    id: any;
}

export const DeleteButton = ({
    id
}: Props) => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const [ConfirmDialog, confirm] = useConfirm(
        "Confirm Deletion",
        "Are you sure you want to remove this item from the cart?"
    );
    const handleRemoveFromCart = async (itemId: string) => {
        const ok = await confirm();

        if (ok) {
            dispatch(removeFromCart(itemId));
        }
    };

    return (
        <>
            <ConfirmDialog />
            <Button
                variant="destructive"
                onClick={() => handleRemoveFromCart(id)}
            >
                <Trash className="size-4" />
            </Button>
        </>
    )
}

