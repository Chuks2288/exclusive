"use server";

import { db } from "@/lib/db";

type IParams = {
    id: string;
};

export const getProductById = async ({
    id
}: IParams) => {

    const product = await db.product.findUnique({
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

    if (!product) {
        throw new Error("Product not found");
    }

    return product;
};
