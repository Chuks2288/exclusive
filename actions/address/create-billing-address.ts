"use server";

import { z } from "zod";
import { billingInfoSchema } from "@/schema";
import { db } from "@/lib/db";
import { BillingAddressUpdate } from "@/lib/mail";
import { currentUser } from "@/lib/auth";

type FormValues = z.infer<typeof billingInfoSchema>;

export const createBillingAddress = async (values: FormValues, email?: string) => {
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

    // Create the billing address linked to the authenticated user
    await db.address.create({
        data: {
            street,
            city,
            phoneNumber,
            apartment,
            userId,  // Connect by userId
        },
    });

    // Optionally send email notification
    if (email) {
        await BillingAddressUpdate(email);
    }

    return { success: "You have successfully created your billing address" };
};
