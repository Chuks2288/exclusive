"use server";

import { db } from "@/lib/db";

export const getUsers = async () => {
    const users = await db.user.findMany({
        include: { address: true },
    });

    return {
        success: "You have successfully loaded all the users",
        data: users
    };
}