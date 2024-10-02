"use server";

import { db } from "@/lib/db";

export const getWishlistById = async (wishlistId: string, productId: string) => {
    try {
        const wishlist = await db.wishlist.findFirst({
            where: {
                id: wishlistId,
                productId: productId,
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
