import { AddProductSheet } from "@/features/products/components/sheet/add-product-sheet"
import { GetProductSheet } from "@/features/products/components/sheet/get-product-sheet"
export const Sheetprovider = () => {
    return (
        <>
            <AddProductSheet />
            <GetProductSheet />
        </>
    )
}

