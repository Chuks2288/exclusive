"use server";

import { db } from "@/lib/db";
import { Product } from "@prisma/client"

export const getSpeakerProduct = async (): Promise<Product | null> => {
    try {
        const speakerProduct = await db.product.findFirst({
            where: {
                name: {
                    contains: "JBL",
                    mode: "insensitive",
                },
            },
            include: {
                rating: true,
                discount: true,
                specifications: true,
                reviews: true,
                shipping: true,
                returnPolicy: true,
                warranty: true,
            },
        });

        if (!speakerProduct) {
            console.error("JBL Speaker product not found");
            return null;
        }

        return speakerProduct;
    } catch (error) {
        console.error("Failed to fetch JBL speaker product:", error);
        return null;
    }
};
