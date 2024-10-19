"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const deleteUser = async (userId: string) => {
    try {
        const user = await currentUser();

        if (!user) {
            return { error: "You are not logged in." };
        }

        if (user.role !== "ADMIN") {
            return { error: "You are not authorized to delete users." };
        }

        if (!userId) {
            return { error: "No user ID provided." };
        }

        console.log("Admin deleting user with ID:", userId);

        await db.user.delete({
            where: { id: userId },
            include: { address: true },
        });

        return { success: "User deleted from the database." };
    } catch (error) {
        console.error("Error deleting user:", error);
        return {
            error: "Failed to delete the user. Please try again.",
        };
    }
};
