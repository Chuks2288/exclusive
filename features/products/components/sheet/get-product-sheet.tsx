"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useGetProductSheet } from "../../hooks/use-get-product-sheet"
import { useGetProductById } from "../../api/use-get-product-byId";
import { useParams } from "next/navigation";


export const GetProductSheet = () => {
    const { isOpen, onClose } = useGetProductSheet();
    const { id } = useParams();

    const {
        data: product,
        isLoading: productIsLoading,
    } = useGetProductById(id);

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        {product?.name}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}
