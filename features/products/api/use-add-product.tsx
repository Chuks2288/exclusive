"use client";

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProduct } from '@/actions/products/add-product';
import { toast } from "sonner";

export const useAddProduct = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addProduct,
        onSuccess: (data) => {
            if (data?.success) {

                // Show a success message
                toast.success("Product added successfully!");


                queryClient.invalidateQueries({ queryKey: ['product'] });
            } else {
                // Show an error message if there's an error in data
                toast.error(data?.error || "Failed to add product");
            }
        },
        onError: (error) => {
            console.error("Error adding product:", error);
            toast.error("An unexpected error occurred while adding the product.");
        },
    });

    return mutation;
};
