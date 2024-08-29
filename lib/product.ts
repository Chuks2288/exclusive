import { db } from "./db";

export const getProductById = async (id: string | any) => {

    const product = await db.product.findUnique({
        where: {
            id,
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

    return product;
};
