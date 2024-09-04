import { Button } from "@/components/ui/button"
import { useConfirm } from "@/hooks/use-confirm";
import Link from "next/link"


type Props = {
    handleClearCart: () => void;
}

export const CartSubDetails = ({
    handleClearCart
}: Props) => {
    const [ConfirmDialog, confirm] = useConfirm(
        "Confirm Deletion",
        "Are you sure you want to clear the cart?"
    );

    return (
        <>
            <ConfirmDialog />
            <div className="flex justify-between items-center mt-6 text-sm font-medium">
                <Link
                    href="/"
                    className="border p-3"
                >
                    Return to Shop
                </Link>
                <div className="flex items-center gap-x-2">
                    <Button
                        onClick={handleClearCart}
                        variant="destructive"
                        className="border p-3 cursor-pointer">
                        Clear cart
                    </Button>
                    <Button
                        variant="secondary"
                        className="border p-3 cursor-pointer">
                        Update cart
                    </Button>
                </div>
            </div>
        </>
    )
}

