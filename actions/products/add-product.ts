import { z } from "zod";
import { AdminProductFormSchema } from "@/schema";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

type FormValues = z.input<typeof AdminProductFormSchema>;

export const addProduct = async (values: FormValues) => {
    const validateFields = AdminProductFormSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const product = validateFields.data;

    const user = await currentUser();
    const userRole = user?.role;

    if (userRole !== "ADMIN") {
        return { error: "Only admins can add products." };
    }

    try {
        const createdProduct = await db.product.create({
            data: {
                ...product,
            },
        });

        return { success: true, product: createdProduct };
    } catch (error) {
        console.error("Product creation error:", error);
        return { error: "An error occurred while creating the product." };
    }
};