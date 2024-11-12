"use client";

import { z } from "zod";
import { useAddProduct } from "../../api/use-add-product";
import { ProductForm } from "../product-form";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { AdminProductFormSchema } from "@/schema";
import { useAddProductSheet } from "../../hooks/use-add-product-sheet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.input<typeof AdminProductFormSchema>;

export const AddProductSheet = () => {
    const { isOpen, onClose } = useAddProductSheet();
    const mutation = useAddProduct();

    // Initialize the form with defaultValues and Zod validation
    const form = useForm<FormValues>({
        resolver: zodResolver(AdminProductFormSchema),
        defaultValues: {
            name: "",
            description: "",
            price: "",
            initialPrice: "",
            brand: "",
            category: "",
            subcategory: "",
            availability: true,
            stockQuantity: 0,
            images: [],
            features: [],
            specifications: [],
            isNew: false,
            warranty: {
                duration: "",
                coverage: "",
            },
            shipping: {
                weight: "",
                dimensions: "",
                cost: "",
                deliveryTime: "",
            },
            returnPolicy: {
                returnable: false,
                returnPeriod: "",
                conditions: "",
            },
            discount: {
                amount: 0,
                type: "",
                validUntil: new Date(),
            },
        },
        mode: "onChange",
    });

    // Handle form submit
    const handleFormSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                console.log("Product added:", values);
                onClose();
            },
            onError: (error: any) => {
                console.error("Error adding product:", error);
                alert("There was an issue creating the product. Please try again.");
            },
        });
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="flex flex-col h-full">
                <SheetHeader className="sticky top-0 bg-white dark:bg-gray-800 z-10 p-2">
                    <SheetTitle className="text-gray-900 dark:text-white">New Product</SheetTitle>
                    <SheetDescription className="text-gray-700 dark:text-gray-400">
                        Create a new product with full details.
                    </SheetDescription>
                </SheetHeader>

                <ProductForm
                    onSubmit={handleFormSubmit}  // Pass the handleFormSubmit directly
                    disabled={mutation.isPending}  // Disable form while loading
                    isPending={mutation.isPending}  // Pass the loading state for UI feedback
                    defaultValues={form.getValues()} // Pass default values to ProductForm
                />
            </SheetContent>
        </Sheet>
    );
};
