"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

// Function to delete all items in the user's wishlist
export const deleteAllWishlist = async () => {
    const user = await currentUser();
    const userId = user?.id;

    // Validate userId
    if (!userId) {
        return { error: "You are not currently logged in." };
    }

    try {
        // Delete all wishlist items for the user
        await db.wishlist.deleteMany({
            where: {
                userId,
            },
        });

        return { success: "All items removed from your wishlist successfully" };
    } catch (error) {
        console.error("Error deleting all items from wishlist:", error);
        return { error: "Failed to remove all items from wishlist. Please try again." };
    }
};
