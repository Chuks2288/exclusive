"use server";

import { db } from "@/lib/db";

export const getWishlistById = async (wishlistId: string) => {
    try {
        const wishlist = await db.wishlist.findUnique({
            where: {
                id: wishlistId
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

        if (!wishlist) {
            return { error: "Wishlist not found" };
        }

        return wishlist;
    } catch (error) {
        console.error("Error fetching wishlist", error);
        return { error: "Failed to fetch wishlist" };
    }
};

