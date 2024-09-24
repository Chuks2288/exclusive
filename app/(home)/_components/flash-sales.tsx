import { Product } from "@prisma/client";
import { FlashSalesProduct } from "./flash-sales-product"
import { FlashSalesTime } from "./flash-sales-time";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductSkeleton } from "./skeleton/product-skeleton";

type Props = {
    products: any;
    isLoading: boolean;
}

export const FlashSales = ({
    products,
    isLoading
}: Props) => {

    if (isLoading) {
        return (
            <ProductSkeleton />
        );
    }

    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <div className="w-3 h-8 rounded-sm bg-red-600" />
                <p className="text-red-600 text-sm font-bold">
                    Today&rsquo;s
                </p>
            </div>
            <FlashSalesTime />
            <FlashSalesProduct
                products={products}
            />
        </div>
    )
}

