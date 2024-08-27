import { CategoryQuery } from "./category-query"
import { FlashSalesProduct } from "./flash-sales-product"
import { CategorySkeleton } from "./skeleton/category-skeleton";


type Props = {
    products: any;
    isLoading: boolean;
}

export const CategoryProducts = ({
    products,
    isLoading
}: Props) => {

    if (isLoading) {
        return <CategorySkeleton />
    }
    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <div className="w-3 h-8 rounded-sm bg-red-600" />
                <p className="text-red-600 text-sm font-bold">
                    Categories
                </p>
            </div>
            <h1 className="font-bold lg:text-2xl text-xl self-end">
                Browse By Category
            </h1>
            <CategoryQuery />
        </div>
    )
}

