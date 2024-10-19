"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const banUser = async (userId: string) => {
    try {
        const user = await currentUser();

        if (!user) {
            return { error: "You are not logged in." };
        }

        if (user.role !== "ADMIN") {
            return { error: "You are not authorized to ban users." };
        }

        if (!userId) {
            return { error: "No user ID provided." };
        }

        console.log("Admin banning user with ID:", userId);

        await db.user.update({
            where: { id: userId },
            data: { isBanned: true },
        });

        return { success: "User has been banned." };
    } catch (error) {
        console.error("Error banning user:", error);
        return { error: "Failed to ban the user. Please try again." };
    }
};
