"use server";

import { z } from "zod";
import bcrypt from "bcryptjs"; // Placeholder for future use, can be removed if unnecessary

import { billingInfoSchema } from "@/schema";
import { db } from "@/lib/db";
import { BillingAddressUpdate } from "@/lib/mail";

type FormValues = z.infer<typeof billingInfoSchema>;

export const editBillingAddress = async (
    values: FormValues,
    userId: string,
    email?: any
) => {
    const validateFields = billingInfoSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { street, city, phoneNumber, apartment } = validateFields.data;

    const existingAddress = await db.address.findUnique({
        where: {
            userId: userId,
        },
    });

    if (existingAddress) {
        await db.address.update({
            where: {
                userId: userId,
            },
            data: {
                street,
                city,
                phoneNumber,
                apartment,
            },
        });
    } else {
        await db.address.create({
            data: {
                street,
                city,
                phoneNumber,
                apartment,
                userId,
            },
        });
    }

    await BillingAddressUpdate(
        email
    )

    return { success: "Billing address updated successfully" };
};
