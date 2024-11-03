// toggle-admin-role.ts
"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const toggleRole = async (userId: string, newRole: "ADMIN" | "MODERATOR" | "CUSTOMER") => {
    try {
        const user = await currentUser();

        if (!user) {
            return { error: "You are not logged in." };
        }

        if (user.role !== "ADMIN") {
            return { error: "You are not authorized to change user roles." };
        }

        if (!userId) {
            return { error: "No user ID provided." };
        }

        const targetUser = await db.user.findUnique({ where: { id: userId } });

        if (!targetUser) {
            return { error: "User not found." };
        }

        // Update the user's role to the specified newRole
        await db.user.update({
            where: { id: userId },
            data: { role: newRole },
        });

        return { success: `User role has been updated to ${newRole}.` };
    } catch (error) {
        console.error("Error toggling user role:", error);
        return { error: "Failed to update user role. Please try again." };
    }
};
