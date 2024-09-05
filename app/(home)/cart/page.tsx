import { CartCard } from "./_components/cart-cart"
import { CartCrumb } from "./_components/cart-crumb"
import { CartTotal } from "./_components/cart-total"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

const CartPage = async () => {


    return (
        <main className="py-4 space-y-6">
            <CartCrumb />
            <CartCard />
        </main>
    )
}

export default CartPage