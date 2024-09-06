import { CartCard } from "./_components/cart-cart"
import { CartCrumb } from "./_components/cart-crumb"

const CartPage = async () => {

    return (
        <main className="py-4 space-y-6">
            <CartCrumb />
            <CartCard />
        </main>
    )
}

export default CartPage