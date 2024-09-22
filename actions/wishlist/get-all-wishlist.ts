"use server";

import { db } from "@/lib/db";

export const getAllWishlist = async () => {
    try {
        const wishlist = await db.wishlist.findMany({
            orderBy: {
                createdAt: "desc",
            },
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

        // No need to check for null/undefined, as findMany returns an empty array if nothing is found
        return wishlist;
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        return { error: "Failed to fetch wishlist" };
    }
};
