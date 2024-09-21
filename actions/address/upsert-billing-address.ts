"use server";

import { z } from "zod";
import { billingInfoSchema } from "@/schema";
import { db } from "@/lib/db";
import { BillingAddressUpdate } from "@/lib/mail";
import { currentUser } from "@/lib/auth";
import { getUserByEmail } from "@/lib/user";

type FormValues = z.infer<typeof billingInfoSchema>;

export const upsertBillingAddress = async (
    values: FormValues,
    email?: any
) => {
    const validateFields = billingInfoSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { street, city, phoneNumber, apartment } = validateFields.data;

    if (!street || !city || !phoneNumber) {
        return { error: "Fill out the fields correctly" };
    }

    const user = await currentUser();
    const userId = user?.id;

    if (!userId) {
        return { error: "User not authenticated." };
    }

    // Use findFirst to search by userId
    const existingAddress = await db.address.findFirst({
        where: {
            user: { id: userId },
        },
    });

    // If the address exists, update it, otherwise create a new one
    if (existingAddress) {
        await db.address.update({
            where: { id: existingAddress.id }, // Use id, which is unique
            data: {
                street,
                city,
                phoneNumber,
                apartment,
            },
        });
        return { success: "Billing address updated successfully." };
    } else {
        await db.address.create({
            data: {
                street,
                city,
                phoneNumber,
                apartment,
                user: { connect: { id: userId } }, // Connect to the user by id
            },
        });

        const existingEmail = await getUserByEmail(email);
        if (existingEmail) {
            await BillingAddressUpdate(email);
        }

        return { success: "Billing address created successfully." };
    }
};
