"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const bulkDeleteUsers = async (ids: string[]) => {
    const user = await currentUser();

    if (!user) {
        return { error: "You are not authorized to access this page" };
    }

    if (!Array.isArray(ids) || ids.length === 0) {
        return { error: "No valid IDs provided" };
    }

    await db.user.deleteMany({
        where: {
            id: {
                in: ids
            }
        }
    });

    return { success: "The selected users have been deleted" };
};
