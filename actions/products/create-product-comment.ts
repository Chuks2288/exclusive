"use server";

import { db } from "@/lib/db";
import { ProductCommentSchema } from "@/schema";
import { z } from "zod";


type FormValues = z.infer<typeof ProductCommentSchema>;

export const createProductComment = async (
    values: FormValues,
) => {
    const validateFields = ProductCommentSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { rating, comment, userId, productId } = validateFields.data;

    // Check if the user has already commented on this product
    const existingComment = await db.productReview.findFirst({
        where: {
            userId,
            productId,
        },
    });

    if (existingComment) {
        return { error: "You can only have one comment per product" };
    }

    await db.productReview.create({
        data: {
            rating,
            comment,
            userId,
            productId,
        }
    });

    return { success: "Comment submitted successfully" }
}