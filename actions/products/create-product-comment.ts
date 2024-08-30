"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { ProductCommentSchema } from "@/schema";
import { z } from "zod";

type FormValues = z.infer<typeof ProductCommentSchema>;

export const createProductComment = async (
    values: FormValues,
    productId: string | any,
) => {
    const validateFields = ProductCommentSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { rating, comment } = validateFields.data;

    const user = await currentUser();
    const userId = user?.id;

    // Validate userId and productId
    if (!userId || !productId) {
        return { error: "User ID and Product ID must be provided." };
    }

    try {
        // Check if the user already has a comment on this product
        const existingComment = await db.productReview.findFirst({
            where: {
                userId,
                productId,
            },
        });

        if (existingComment) {
            return { error: "You have already commented on this product." };
        }

        // If no existing comment, create a new comment
        await db.productReview.create({
            data: {
                rating,
                comment,
                userId,
                productId,
            },
        });

        return { success: "Comment submitted successfully" };
    } catch (error) {
        console.error("Error creating comment:", error);
        return { error: "Failed to submit comment. Please try again." };
    }
};
