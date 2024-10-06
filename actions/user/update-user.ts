"use server";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { ManageAccountFormSchema } from "@/schema";  // Create a schema for updating
import { getUserById } from "@/lib/user";  // Function to get the user by ID
import { db } from "@/lib/db";

type FormValues = z.infer<typeof ManageAccountFormSchema>;

export const updateUser = async (userId: string, values: FormValues) => {
    const validateFields = ManageAccountFormSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields" };
    }

    const { firstName, lastName, address, currentPassword, newPassword } = validateFields.data;

    // Get the user from the database
    const user = await getUserById(userId);
    if (!user) {
        return { error: "User not found" };
    }

    // Validate the current password if the user is attempting to change it
    if (currentPassword && newPassword) {
        const isValidPassword = await bcrypt.compare(currentPassword, user.password!);
        if (!isValidPassword) {
            return { error: "Current password is incorrect" };
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;  // Update the password
    }

    // Update user information
    await db.user.update({
        where: { id: userId },
        data: {
            firstName,
            lastName,
            address: {
                update: {
                    street: address?.street,
                    city: address?.city,
                    apartment: address?.apartment,
                    phoneNumber: address?.phoneNumber,
                }
            }
        },
    });

    return { success: "User information updated successfully" };
};
