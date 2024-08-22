"use server";

import { db } from "@/lib/db";

type IParams = {
    id: string;
}

export const getProduct = async ({
    id
}: IParams) => {

    await db.product.findUnique({
        where: {
            id
        }
    });

    return { success: "Product fetched successfully" }
}