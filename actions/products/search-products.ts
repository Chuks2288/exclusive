"use server";

import { db } from "@/lib/db";

// Server action to fetch products based on search term
export const searchProducts = async (term: string) => {
    if (!term) {
        return { error: "Search term is required" }; // Validation error if term is missing
    }

    try {
        const products = await db.product.findMany({
            where: {
                name: {
                    contains: term,
                    mode: "insensitive", // Case insensitive search
                },
            },
            take: 10, // Limit the number of suggestions
            include: {
                discount: true,
                rating: true,
                specifications: true,
                shipping: true,
                reviews: true,
                returnPolicy: true,
                warranty: true,
            },
        });

        return products; // Return the fetched products
    } catch (error) {
        console.error("Error fetching products:", error);
        return { error: "Failed to fetch products" }; // Return error message if the fetch fails
    }
};
