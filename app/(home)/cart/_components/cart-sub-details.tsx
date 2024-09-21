import { Button } from "@/components/ui/button"
import Link from "next/link"


type Props = {
    handleClearCart: () => void;
}

export const CartSubDetails = ({
    handleClearCart
}: Props) => {
    return (
        <>
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

