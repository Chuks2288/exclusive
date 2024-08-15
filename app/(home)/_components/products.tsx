import { AllProducts } from "./all-products"

export const Products = () => {
    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <div className="w-3 h-8 rounded-sm bg-red-600" />
                <p className="text-red-600 text-sm font-bold">
                    Our Products
                </p>
            </div>
            <h1 className="font-bold lg:text-2xl text-xl self-end">
                Explore Our Products
            </h1>
            <AllProducts />
        </div>
    )
}

