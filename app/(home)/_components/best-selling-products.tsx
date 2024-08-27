import { BestSellingItems } from "./best-selling-items"
import { ProductSkeleton } from "./skeleton/product-skeleton";

type Props = {
    bestSellingProducts: any;
    isLoading: boolean;
}

export const BestSellingProducts = ({
    bestSellingProducts,
    isLoading
}: Props) => {

    if (isLoading) {
        return <ProductSkeleton />
    }

    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <div className="w-3 h-8 rounded-sm bg-red-600" />
                <p className="text-red-600 text-sm font-bold">
                    This Month
                </p>
            </div>
            <h1 className="font-bold lg:text-2xl text-xl self-end">
                Best Selling Products
            </h1>
            <BestSellingItems
                bestSellingProducts={bestSellingProducts as any}
            />
        </div>
    )
}

