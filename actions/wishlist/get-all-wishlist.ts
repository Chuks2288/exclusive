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

        return wishlist; // findMany returns an array, no need for null checks
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        throw new Error("Failed to fetch wishlist"); // Re-throw the error to handle it properly
    }
};
