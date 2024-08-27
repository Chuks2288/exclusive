"use server";

import { db } from "@/lib/db";

export const getAllProducts = async () => {
    try {
        const products = await db.product.findMany({
            orderBy: {
                createdAt: "desc",
            },
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

        return products;  // Return the fetched products
    } catch (error) {
        console.error("Error fetching products", error);
        return { error: "Failed to fetch products" };  // Return an error message if the fetch fails
    }
};
