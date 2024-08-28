"use server";

import { db } from "@/lib/db";

export const getSpeakerProduct = async () => {
    try {
        const speakerProduct = await db.product.findFirst({
            where: {
                name: {
                    contains: "JBL",
                    mode: "insensitive",
                }
            },
            include: {
                rating: true,
                discount: true,
                specifications: true,
                reviews: true,
                shipping: true,
                returnPolicy: true,
                warranty: true,
            }
        });

        if (!speakerProduct) {
            throw new Error("JBL Speaker product not found");
        }

        return speakerProduct;
    } catch (error) {
        console.error("Failed to fetch JBL speaker product:", error);
        throw new Error("Could not retrieve JBL speaker product");
    }
};
