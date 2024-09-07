import { currentUser } from "@/lib/auth"
import { BillingDetailsForm } from "./_components/billing-details-form"
import { CheckoutDetails } from "./_components/checkout-details"
import { HeadCrumbs } from "./_components/head-crumbs"

const CheckoutPage = () => {

    return (
        <main className="py-4 space-y-6">
            <HeadCrumbs />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <BillingDetailsForm />
                <CheckoutDetails />
            </div>
        </main>
    )
}

export default CheckoutPage