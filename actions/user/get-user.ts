"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const getUserData = async () => {

    const user = await currentUser();

    const activeUser = await db.user.findUnique({
        where: { id: user?.id },
        include: { address: true },
    });

    return activeUser;
};
