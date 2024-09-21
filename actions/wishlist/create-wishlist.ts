"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";


export const createWishlist = async (
    productId: string | any,
) => {
    const user = await currentUser();
    const userId = user?.id;

    // Validate userId and productId
    if (!userId || !productId) {
        return { error: "You are not logged in" };
    }

    try {
        const existingWishlist = await db.wishlist.findFirst({
            where: {
                userId,
                productId,
            },
        });

        if (existingWishlist) {
            return { error: "You have already added this product to your wishlist." };
        }

        await db.wishlist.create({
            data: {
                userId,
                productId,
            },
        });

        return { success: "Product added to your wishlist successfully" };
    } catch (error) {
        console.error("Error adding product to wishlist:", error);
        return { error: "Failed to add product to wishlist. Please try again." };
    }
};
