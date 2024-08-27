"use server";

import { db } from "@/lib/db";

export const getAllProducts = async () => {
    try {
        const products = await db.product.findMany({
            orderBy: {
                createdAt: "desc",
            }
        });

        return products;  // Return the fetched products
    } catch (error) {
        console.error("Error fetching products", error);
        return { error: "Failed to fetch products" };  // Return an error message if the fetch fails
    }
};
