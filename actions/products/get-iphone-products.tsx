"use server";

import { db } from "@/lib/db";

export const getIphoneProducts = async () => {
    try {
        const products = await db.product.findMany({
            where: {
                name: {
                    contains: "iPhone", // Filter to include only products with "iPhone" in the name
                    mode: "insensitive", // Make the search case-insensitive
                },
            },
            include: {
                discount: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        console.log(products);

        return products; // Return the filtered products
    } catch (error) {
        console.error("Error fetching iPhone products", error);
        return []; // Return an empty array in case of an error
    }
};
