"use server";

import { db } from "@/lib/db";

export const getRelatedProducts = async () => {
    try {
        const relatedProducts = await db.relatedProduct.findMany({
            include: {
                product: {
                    include: {
                        discount: true,
                        rating: true,
                        specifications: true,
                        shipping: true,
                        reviews: true,
                        returnPolicy: true,
                        warranty: true,
                    },
                },
            },
        });

        return relatedProducts; // Return the actual data

    } catch (error) {
        console.error("Error fetching related products", error);
        throw new Error("Failed to fetch related products"); // Rethrow the error for proper handling
    }
};
