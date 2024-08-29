"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getProductById } from "@/lib/product";
import { ProductCommentSchema } from "@/schema";
import { z } from "zod";

type FormValues = z.infer<typeof ProductCommentSchema>;

export const createProductComment = async (
    values: FormValues,
    // productId: string,
    id?: string,
) => {
    // Validate input values
    const validateFields = ProductCommentSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { rating, comment } = validateFields.data;

    const product = await getProductById(id);

    const productId = product?.id;

    // Get current user
    const user = await currentUser();
    const userId = user?.id;

    console.log("userId", userId);
    console.log("productId", productId);

    // Validate userId and productId
    if (!userId || !productId) {
        return { error: "User ID and Product ID must be provided." };
    }

    try {
        // Create the new product review
        await db.productReview.create({
            data: {
                rating,
                comment,
                userId,
                productId,
            }
        });

        return { success: "Comment submitted successfully" };
    } catch (error) {
        console.error("Error creating comment:", error);
        return { error: "Failed to submit comment. Please try again." };
    }
};
