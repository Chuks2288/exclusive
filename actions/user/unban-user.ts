"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const unbanUser = async (userId: string) => {
    try {
        const user = await currentUser();

        if (!user) {
            return { error: "You are not logged in." };
        }

        if (user.role !== "ADMIN") {
            return { error: "You are not authorized to unban users." };
        }

        if (!userId) {
            return { error: "No user ID provided." };
        }

        console.log("Admin unbanning user with ID:", userId);

        await db.user.update({
            where: { id: userId },
            data: { isBanned: false },
        });

        return { success: "User has been unbanned." };
    } catch (error) {
        console.error("Error unbanning user:", error);
        return { error: "Failed to unban the user. Please try again." };
    }
};
