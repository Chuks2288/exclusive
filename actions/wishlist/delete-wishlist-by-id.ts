"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const deleteWishlistById = async (
    productId: string,
) => {
    const user = await currentUser();
    const userId = user?.id;


    console.log("Product ID:", productId);

    // Validate userId and productId
    if (!userId) {
        return { error: "You are not currently logged in." };
    }

    if (!productId) {
        return { error: "Product ID is required." };
    }

    try {
        const wishlistItem = await db.wishlist.findFirst({
            where: {
                userId,
                productId,
            },
        });

        // Check if the wishlist item exists
        if (!wishlistItem) {
            return { error: "This product is not in your wishlist." };
        }

        // Delete the wishlist item
        await db.wishlist.delete({
            where: {
                id: wishlistItem.id,
            },
        });

        return { success: true, message: "Product removed from your wishlist successfully" };
    } catch (error) {
        console.error("Error deleting product from wishlist:", error);
        return { error: "Failed to remove product from wishlist. Please try again." };
    }
};
