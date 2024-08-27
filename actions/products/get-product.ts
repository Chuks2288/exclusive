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
        },
        include: {
            discount: true,
            rating: true,
            specifications: true,
            shipping: true,
            reviews: true,
            returnPolicy: true,
            warranty: true,
        },
    });

    return { success: "Product fetched successfully" }
}