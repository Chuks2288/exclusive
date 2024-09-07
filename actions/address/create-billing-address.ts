"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";

import { billingInfoSchema } from "@/schema";
import { getUserByEmail } from "@/lib/user";
import { db } from "@/lib/db";
import { BillingAddressUpdate } from "@/lib/mail";


type FormValues = z.infer<typeof billingInfoSchema>

export const createBillingAddress = async (
    values: FormValues,
    userId: string,
    email?: any,
) => {
    const validateFields = billingInfoSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { street, city, phoneNumber, apartment } = validateFields.data;

    if (!street || !city || !phoneNumber || !apartment) {
        return { error: "Fill out the field correctly" }
    }

    // const existingUserByEmail = await getUserByEmail(email)


    await db.address.create({
        data: {
            street,
            city,
            phoneNumber,
            apartment,
            userId,
        }
    });

    await BillingAddressUpdate(
        email
    )

    return { success: "You have successfull created your account" }
}
