"use server";

import { db } from "@/lib/db";

export const getBestSellingProducts = async () => {
    try {
        const bestProducts = await db.product.findMany({
            where: {
                availability: "In Stock",
            },
            include: {
                rating: true,
                discount: true,
            },
            orderBy: [
                {
                    rating: {
                        reviews: 'desc',
                    }
                },
                // {
                //     rating: {
                //         average: 'desc',
                //     }
                // },
                // {
                //     discount: {
                //         amount: 'desc',
                //     }
                // },
                // {
                //     isNew: 'desc'
                // }
            ],
            // take: 5
        });

        return bestProducts;
    } catch (error) {
        console.error("Failed to fetch best-selling products:", error);
        throw new Error("Could not retrieve best-selling products");
    }
};
