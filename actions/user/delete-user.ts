"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const deleteUser = async () => {
    try {
        const user = await currentUser();

        if (!user) {
            return { error: "You are not logged in." };
        }

        console.log("Deleting user with ID:", user.id);

        await db.user.delete({
            where: { id: user.id },
            include: { address: true },
        });

        return { success: "User deleted from the database" }
    } catch (error) {
        console.error("Error deleting user:", error);
        return {
            error: "Failed to delete the user. Please try again.",
        };
    }
};
