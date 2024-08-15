import { FlashSalesProduct } from "./flash-sales-product"
import { FlashSalesTime } from "./flash-sales-time"

export const FlashSales = () => {
    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <div className="w-3 h-8 rounded-sm bg-red-600" />
                <p className="text-red-600 text-sm font-bold">
                    Today's
                </p>
            </div>
            <FlashSalesTime />
            <FlashSalesProduct />
        </div>
    )
}

